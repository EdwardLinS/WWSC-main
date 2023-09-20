import { useState, useEffect } from "react"
import { projectAuth, projectStorage, projectFirestore } from '../firebase/config'
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName, refereeId, thumbnail) => {
        setError(null)
        setIsPending(true)

        try {
            // signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)

            if (!res) {
                throw new Error('Could not complete signup')
            }

            const grade = refereeId.split('-')[1][1]

            // upload user thumbnail
            const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
            const img = await projectStorage.ref(uploadPath).put(thumbnail)
            const imgUrl = await img.ref.getDownloadURL()

            // add display AND PHOTO_URL name to user
            await res.user.updateProfile({ displayName, photoURL: imgUrl })

            // create a user document
            await projectFirestore.collection('users').doc(res.user.uid).set({
                displayName,
                photoURL: imgUrl,
                refereeId,
                grade,
                name: "",
                sex: "",
                organization: "",
                title: "",
                email: res.user.email,
                phone: "",
                address: "",
                city: "",
                stateProv: "",
                country: "",
            })

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })

            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, isPending, signup }
}
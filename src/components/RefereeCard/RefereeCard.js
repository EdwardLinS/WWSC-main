import './RefereeCard.css'

import Avatar from '../Avatar/Avatar'

import { useState, useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { projectFirestore } from '../../firebase/config'
import { getDoc } from 'firebase/firestore'

export default function RefereeCard() {
    const { user } = useAuthContext()
    const [refId, setRefId] = useState('loading...')
    const [grade, setGrade] = useState(null)

    useEffect(() => {
        async function getRefereeId() {
            const docSnap = await getDoc(projectFirestore.collection('users').doc(user.uid));

            setRefId(docSnap.data().refereeId)
            setGrade(docSnap.data().grade)
        }
        getRefereeId()
    }, [user])

    return (
        <div className="container">
            <div className="text referee-card" style={{ marginTop: "1vw" }}>
                <div className="referee-row1">
                    <Avatar src={user.photoURL} />
                    <div className='grade'>
                        <p><strong>Display Name: </strong>{user.displayName}</p>
                        <p><strong>Referee Grade:</strong></p>
                        {grade && <h1 style={grade !== '4' ? { backgroundColor: "darkred" } : { backgroundColor: "green" }}>{grade}</h1>}
                    </div>
                </div>
                <div className="referee-row2">
                    <div className='id-content'>
                        <h3><strong>Referee Id#:</strong></h3>
                        <p>{refId}</p>
                    </div>
                    <div className='id-content'>
                        <h3><strong>Valid thru:</strong></h3>
                        <p>Date here</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

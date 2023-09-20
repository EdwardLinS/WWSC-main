import styles from './Signup.module.css'

import { useState } from 'react'
import { useSignup } from '../../../hooks/useSignup'
import Sidebar from '../../../components/Sidebar/Sidebar'

export default function Signup() {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [refereeId, setRefereeId] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbnailError, setThumbnailError] = useState(null)

    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName, refereeId, thumbnail);
    }

    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]
        console.log(selected);

        if (!selected) {
            setThumbnailError('Please select a file')
            return
        }

        if (!selected.type.includes('image')) {
            setThumbnailError('Selected file must be an image')
            return
        }

        if (!selected.size > 100000) {
            setThumbnailError('Image file size must be less than 100kb')
            return
        }

        setThumbnailError(null)
        setThumbnail(selected)
        console.log('thumbnail updated');
    }

    return (
        <div className={styles.signup}>
            <Sidebar />
            <form onSubmit={handleSubmit} className={styles['signup-form']}>
                <h2>Sign Up</h2>
                <label>
                    <span>email:</span>
                    <input
                        required
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>password:</span>
                    <input
                        required
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <label>
                    <span>display name:</span>
                    <input
                        required
                        type="text"
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                    />
                </label>
                <label>
                    <span>referee id:</span>
                    <input
                        required
                        type="text"
                        onChange={(e) => setRefereeId(e.target.value)}
                        value={refereeId}
                    />
                </label>
                <label>
                    <span>profile thumbnail:</span>
                    <input
                        required
                        type="file"
                        onChange={handleFileChange}
                    />
                    {thumbnailError && <div>{thumbnailError}</div>}
                </label>
                {!isPending && <button className="btn">Sign Up</button>}
                {isPending && <button className='btn' disabled>loading</button>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}


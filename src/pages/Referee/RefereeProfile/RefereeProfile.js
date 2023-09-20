import './RefereeProfile.css'

import RefereeCard from "../../../components/RefereeCard/RefereeCard";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useEffect, useState } from 'react';
import { updateProfile, updateEmail } from 'firebase/auth'
import { projectFirestore } from '../../../firebase/config';
import { getDoc } from 'firebase/firestore'

export default function RefereeProfile() {
    const { user } = useAuthContext();
    const [edit, setEdit] = useState(false);

    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [name, setName] = useState("")
    const [organization, setOrganization] = useState("")
    const [phone, setPhone] = useState("")
    const [sex, setSex] = useState("");
    const [stateProvince, setStateProvince] = useState("")
    const [title, setTitle] = useState("")

    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        if (!edit) {
            e.preventDefault()
            setEdit(true);
        } else {
            try {
                projectFirestore.collection('users').doc(user.uid).update({ name, sex, organization, title, phone, address, city, "stateProv": stateProvince, country: country });

                if (email !== user.email) {
                    updateEmail(user, email)
                }
            } catch (e) {
                setError(e.message)
                console.log(e.message);
            }
            setEdit(false);
        }
    }


    useEffect(() => {
        async function getRefereeId() {
            const docSnap = await getDoc(projectFirestore.collection('users').doc(user.uid));

            setAddress(docSnap.data().address)
            setCity(docSnap.data().city)
            setCountry(docSnap.data().country)
            setName(docSnap.data().name)
            setOrganization(docSnap.data().organization)
            setPhone(docSnap.data().phone)
            setSex(docSnap.data().sex)
            setStateProvince(docSnap.data().stateProv)
            setTitle(docSnap.data().title)
        }
        getRefereeId()
    }, [user])

    return (
        <div className="referee-home">
            <Sidebar />
            <div>
                <RefereeCard />
            </div>
            <div className="container">
                <div className="text profile-info" style={{ marginTop: "1vw", boxShadow: "none" }}>
                    <form onSubmit={handleSubmit}>
                        <p><strong>Name*:</strong>
                            <input
                                required
                                type="text"
                                value={name}
                                disabled={!edit}
                                onChange={(e) => setName(e.target.value)}
                                className='edit-field'
                            />
                        </p>
                        <p><strong>Sex*:</strong>
                            <select
                                required
                                type="select"
                                value={sex}
                                disabled={!edit}
                                onChange={(e) => setSex(e.target.value)}
                                className='edit-field'
                            >
                                <option value="M">M</option>
                                <option value="F">F</option>
                                <option value="F">Other</option>
                            </select>
                        </p>
                        <p><strong>Wiser Organization:</strong>
                            <input
                                type="text"
                                value={organization}
                                disabled={!edit}
                                onChange={(e) => setOrganization(e.target.value)}
                                className='edit-field'
                            />
                        </p>
                        <p><strong>Title:</strong>
                            <input
                                type="text"
                                value={title}
                                disabled={!edit}
                                onChange={(e) => setTitle(e.target.value)}
                                className='edit-field'
                            />
                        </p>
                        <p><strong>Email*:</strong> {user.email}
                            {/* <input
                                    required
                                    type="email"
                                    value={user.email}
                                    disabled
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='edit-field'
                                /> */}
                        </p>
                        <p><strong>Phone*:</strong>
                            <input
                                required
                                type="number"
                                maxLength={11}
                                value={parseInt(phone, 10)}
                                disabled={!edit}
                                onChange={(e) => setPhone(e.target.value)}
                                className='edit-field'
                            />
                        </p>
                        <p><strong>Address*:</strong>
                            <input
                                required
                                type="text"
                                value={address}
                                disabled={!edit}
                                onChange={(e) => setAddress(e.target.value)}
                                className='edit-field'
                            />
                        </p>
                        <p><strong>City*:</strong>
                            <input
                                required
                                type="text"
                                value={city}
                                disabled={!edit}
                                onChange={(e) => setCity(e.target.value)}
                                className='edit-field'
                            />
                        </p>
                        <p><strong>State/Province*:</strong>
                            <input
                                required
                                type="text"
                                value={stateProvince}
                                disabled={!edit}
                                onChange={(e) => setStateProvince(e.target.value)}
                                className='edit-field'
                            />
                        </p>
                        <p><strong>Country/District*:</strong>
                            <input
                                required
                                type="text"
                                value={country}
                                disabled={!edit}
                                onChange={(e) => setCountry(e.target.value)}
                                className='edit-field'
                            />
                        </p>
                        <button>{!edit ? "Edit" : "Save"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
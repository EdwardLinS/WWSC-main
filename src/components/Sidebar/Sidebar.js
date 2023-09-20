import './Sidebar.css'
import Avatar from '../Avatar/Avatar';

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout'

export default function Sidebar() {
    const { user } = useAuthContext()
    const { logout, isPending } = useLogout()
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-content">
                    {user && (
                        <>
                            <div className="user">
                                <img src={user.photoURL} />
                                <p>Hey {user.displayName}</p>
                            </div>
                            <nav className="links">
                                <ul>
                                    <li>
                                        <NavLink to="/referee-home">
                                            <img src='/assets/dashboard_icon.svg' alt="dashboard icon" />
                                            <span>Dashboard</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/referee-profile">
                                            <img src='/assets/add_icon.svg' alt="add icon" />
                                            <span>Profile</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/referee-training-record">
                                            <img src='/assets/add_icon.svg' alt="add icon" />
                                            <span>Training Record</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </>
                    )}
                    {!user && (
                        <>
                            <img src="/WWC logo_s.jpg" alt="WWC logo" className='sidebar-logo' />
                            <div className='log-button-container'>
                                <p className='user'>Please sign in</p>
                                <div className="log-buttons">
                                    <Link to='/referee-home/login' className='referee-link'>Log in</Link>
                                    <Link to='/referee-home/signup' className='referee-link'>Sign Up</Link>
                                </div>

                            </div>
                        </>
                    )}

                    {user && (
                        <div className='logout-button-container'>
                            <div className="log-buttons">
                                {!isPending && <button className='referee-link' onClick={logout}>Logout</button>}
                                {isPending && <button className='referee-link' disabled>Logging out...</button>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>

        // <div className='burger-div'>
        //     <img
        //         src="/assets/burger.svg"
        //         alt="burger icon"
        //         className='burger'
        //         onClick={() => setOpen(true)} />
        // </div>
    )
}
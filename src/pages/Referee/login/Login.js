/** @format */

import { useState } from "react";
import { useLogin } from "../../../hooks/useLogin";

// import Sidebar from '../../../components/Sidebar/Sidebar'

// styles
import styles from "./Login.module.css";

// create Login component

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Use custom useLogin hook
    const { login, error, isPending } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <div className={styles.login}>
            {/* <Sidebar /> */}
            <form onSubmit={handleSubmit} className={styles["login-form"]}>
                <div className={styles.imgWarpper}>
                    <img className={styles.logo} src="/WWSC-logo.png" alt="logo" />
                    <img className={styles.referee} src="/assets/referee.png" alt="referee" />
                </div>
                <h2>Referee Registration System</h2>
                <h1>Login</h1>
                <div>
                    <label>
                        <span>Email:</span>
                        <input
                            type="email"
                            placeholder="referee@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>

                    <label>
                        <span>Password:</span>
                        <input
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>
                </div>

                {!isPending && <button className="btn">Login</button>}
                {isPending && (
                    <button className="btn" disabled>
                        loading
                    </button>
          )}
          <span>Don't have an account? please <a href="#">sign-up</a></span>
          <span>Forget your password? <a href="#">Reset </a>your password</span>
                {error && <span className={styles.error}>Wrong email or password!</span>}
            </form>
        </div>
    );
}

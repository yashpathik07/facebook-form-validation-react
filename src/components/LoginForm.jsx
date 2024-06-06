import { useState } from 'react';
import styles from '../styles/LoginForm.module.css';
import eyeOff from '../assets/eye-close.png';
import eyeOn from '../assets/eye-open.png';

// eslint-disable-next-line react/prop-types
export default function LoginForm({ onSelect }) {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@') && !enteredValues.email.length < 1;

    const passwordIsInvalid =
        didEdit.password && enteredValues.password.length < 6 && !enteredValues.password.length < 1;

    function handleSubmit(event) {
        event.preventDefault();

        if (emailIsInvalid || passwordIsInvalid) {
            return;
        }

        console.log(enteredValues);
    }

    function handleInputChange(identifier, value) {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [identifier]: value,
        }));
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: false,
        }));
    }

    function handleInputBlur(identifier) {
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: true,
        }));
    }

    function handlePassword() {
        setShowPassword(!showPassword);
    }

    return (
        <div id={styles.loginForm}>
            <form onSubmit={handleSubmit}>
                <p>Log in to Facebook</p>
                <div>
                    <input
                        className={emailIsInvalid ? styles.error : ''}
                        type="email"
                        placeholder="Email address"
                        name="email"
                        onChange={(event) => handleInputChange('email', event.target.value)}
                        onBlur={() => handleInputBlur('email')}
                        required
                    />
                </div>
                <div className={styles.passField}>
                    <input
                        className={passwordIsInvalid ? styles.error : ''}
                        type={!showPassword ? 'password' : 'text'}
                        placeholder="Password"
                        name="password"
                        minLength={6}
                        maxLength={15}
                        onChange={(event) => handleInputChange('password', event.target.value)}
                        onBlur={() => handleInputBlur('password')}
                        required
                    />
                    <button type="button" onClick={handlePassword}>
                        <img src={!showPassword ? eyeOff : eyeOn} alt="" />
                    </button>
                </div>
                <div id={styles.buttons}>
                    <div className={styles.loginBtn}>
                        <button>Log in</button>
                    </div>
                    <div className={styles.otherBtn}>
                        <button>Forgotten account?</button>
                        <span>.</span>
                        <button onClick={onSelect}>Sign up for Facebook</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

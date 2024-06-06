import styles from '../styles/SignUp.module.css';
import eyeOff from '../assets/eye-close.png';
import { useState } from 'react';
import eyeOn from '../assets/eye-open.png';

// eslint-disable-next-line react/prop-types
export default function SignUp({ onSelect }) {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        number: '',
        password: '',
        confirmPassword: '',
        dob: '',
        fName: '',
        sName: '',
        gender: '',
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        number: false,
        password: false,
        confirmPassword: false,
        dob: false,
        fName: false,
        sName: false,
        gender: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [matchPassword, setMatchPassword] = useState(true);

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@') && !enteredValues.email.length < 1;

    const numberIsInvalid = didEdit.number && enteredValues.number.length !== 10 && !enteredValues.number.length < 1;

    const passwordIsInvalid =
        didEdit.password && enteredValues.password.length < 6 && !enteredValues.password.length < 1;

    function handleSubmit(event) {
        event.preventDefault();

        if (emailIsInvalid || passwordIsInvalid || numberIsInvalid) {
            return;
        }
        if (!matchPassword) {
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

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    function handleShowConfirmPassword() {
        setShowConfirmPassword(!showConfirmPassword);
    }

    function handleMatchPassword(event) {
        if (enteredValues.password !== event.target.value) {
            setMatchPassword(false);
        } else {
            setMatchPassword(true);
        }
    }

    function handleRadioClick(event) {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            gender: event.target.value,
        }));
    }

    return (
        <div id={styles.signUpForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.heading}>
                    <h2>Create a new account</h2>
                    <p>It&#39;s quick and easy.</p>
                    <hr />
                </div>
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
                <div>
                    <input
                        className={numberIsInvalid ? styles.error : ''}
                        type="number"
                        placeholder="Number"
                        name="number"
                        minLength={1}
                        maxLength={10}
                        onChange={(event) => handleInputChange('number', event.target.value)}
                        onBlur={() => handleInputBlur('number')}
                        required
                    />
                </div>
                <div className={styles.passField}>
                    <input
                        className={passwordIsInvalid ? styles.error : ''}
                        type={!showPassword ? 'password' : 'text'}
                        placeholder="Password"
                        name="password"
                        onChange={(event) => handleInputChange('password', event.target.value)}
                        onBlur={() => handleInputBlur('password')}
                        required
                    />
                    <button type="button" onClick={handleShowPassword}>
                        <img src={!showPassword ? eyeOff : eyeOn} alt="" />
                    </button>
                </div>
                <div className={styles.passField}>
                    <input
                        className={!matchPassword ? styles.error : ''}
                        type={!showConfirmPassword ? 'password' : 'text'}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={handleMatchPassword}
                        required
                    />
                    <button type="button" onClick={handleShowConfirmPassword}>
                        <img src={!showConfirmPassword ? eyeOff : eyeOn} alt="" />
                    </button>
                </div>
                <div className={styles.dob}>
                    <label htmlFor="dob">Date of birth</label>
                    <input
                        type="date"
                        name="dob"
                        id="dob"
                        required
                        onChange={(event) => handleInputChange('dob', event.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="First name"
                        name="fName"
                        onChange={(event) => handleInputChange('fName', event.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Surname"
                        name="sName"
                        onChange={(event) => handleInputChange('sName', event.target.value)}
                        required
                    />
                </div>
                <div className={styles.gender}>
                    <p className={styles.genderLabel}>Gender</p>
                    <div className={styles.radioBtn}>
                        <div>
                            <label htmlFor="female">Female</label>
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                required
                                onClick={handleRadioClick}
                            />
                        </div>
                        <div>
                            <label htmlFor="male">Male</label>
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                                required
                                onClick={handleRadioClick}
                            />
                        </div>
                        <div>
                            <label htmlFor="others">Others</label>
                            <input
                                type="radio"
                                name="gender"
                                id="others"
                                value="others"
                                required
                                onClick={handleRadioClick}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.tnc}>
                    <p>
                        People who use our service may have uploaded your contact information to Facebook.{' '}
                        <a href="">Learn more</a>.
                    </p>
                    <p>
                        By clicking Sign Up, you agree to our <a href="">Terms</a>, <a href="">Privacy Policy</a> and{' '}
                        <a href="">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any
                        time.
                    </p>
                </div>
                <div id={styles.buttons}>
                    <div className={styles.signUpBtn}>
                        <button>Sign Up</button>
                    </div>
                    <div className={styles.loginBtn}>
                        <button type="button" onClick={onSelect}>
                            Already have an account?
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

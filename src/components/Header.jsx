import logo from '../assets/facebook-logo.png';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header id={styles.header}>
            <img src={logo} alt="" />
        </header>
    );
}

import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <div className={styles.languages}>
                <button>English (UK)</button>
                <button>हिन्दी</button>
                <button>ਪੰਜਾਬੀ</button>
                <button>اردو</button>
                <button>ગુજરાતી</button>
                <button>বাংলা</button>
                <button>Español</button>
                <button>മലയാളം</button>
                <button>ಕನ್ನಡ</button>
                <button>తెలుగు</button>
                <button className={styles.addLang}>+</button>
            </div>
            <hr />
            <div className={styles.links}>
                <button>Sign Up</button>
                <button>Log in</button>
                <button>Messenger</button>
                <button>Facebook Lite</button>
                <button>Video</button>
                <button>Places</button>
                <button>Games</button>
                <button>Marketplace</button>
                <button>Meta Pay</button>
                <button>Meta Store</button>
                <button>Meta Quest</button>
                <button>Meta AI</button>
                <button>Instagram</button>
                <button>Threads</button>
                <button>Fundraisers</button>
                <button>Services</button>
                <button>Voting Information Centre</button>
                <button>Privacy Policy</button>
                <button>Privacy Centre</button>
                <button>Groups</button>
                <button>About</button>
                <button>Create Ad</button>
                <button>Developers</button>
                <button>Careers</button>
                <button>Cookies</button>
                <button>AdChoices</button>
                <button>Terms</button>
                <button>Help</button>
                <button>Contact uploading and non-users</button>
            </div>
            <p>Meta © 2024</p>
        </footer>
    );
}

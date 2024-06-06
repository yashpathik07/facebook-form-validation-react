import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { useState } from 'react';

function App() {
    const [signUpForm, setSignUpForm] = useState(false);

    function handleShowSignForm() {
        setSignUpForm(true);
    }

    function handleShowLoginForm() {
        setSignUpForm(false);
    }

    return (
        <>
            <Header />
            <main>
                {!signUpForm ? <LoginForm onSelect={handleShowSignForm} /> : <SignUp onSelect={handleShowLoginForm} />}
            </main>
            <Footer />
        </>
    );
}

export default App;

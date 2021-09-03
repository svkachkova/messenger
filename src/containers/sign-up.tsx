import { Link } from 'react-router-dom';
import { SignUpForm } from '../components/form/sign-up-form';

function SignUp() {
    return (
        <main>
            <h1>Get started</h1>
            <SignUpForm />
            <p>
                Already have an account?&nbsp;
                <Link to='/signin'>
                    Sign in
                </Link>
            </p>
        </main>
    );
}

export default SignUp;

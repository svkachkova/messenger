import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { SignUpForm } from '../components/form/sign-up-form';
import { AuthStoreType } from '../stores/auth-store';

const SignUp = observer(({ store }: { store: AuthStoreType }) => {
    return (
        <main>
            <h1>Get started</h1>
            <SignUpForm store={store} />
            <p>
                Already have an account?&nbsp;
                <Link to='/signin'>
                    Sign in
                </Link>
            </p>
        </main>
    );
});

export default SignUp;

import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { SignInForm } from '../components/form/sign-in-form';
import { AuthStoreType } from '../stores/auth-store';

const SignIn = observer(({ store }: { store: AuthStoreType }) => {
    return (
        <main>
            <h1>Sign in</h1>
            <SignInForm store={store}/>
            <p>
                Do not have an account?&nbsp;
                <Link to='/signup'>
                    Sign up
                </Link>
            </p>
        </main>
    );
});

export default SignIn;

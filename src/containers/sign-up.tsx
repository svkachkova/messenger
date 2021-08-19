import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Form } from '../components/form';
import { UserStoreType } from '../store/user-store';

const SignUp = observer(({ store }: { store: UserStoreType }) => {
    return (
        <main>
            <h1>Get started</h1>
            <Form
                formType='sign-up'
                buttonValue='Sign up'
                store={store}
            />
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

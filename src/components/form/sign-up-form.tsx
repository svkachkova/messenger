import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { LoginInput } from './login-input';
import { NewPasswordInput } from './new-password-input';
import { Button } from '../button';

import { UserStoreType } from '../../store/user-store';

const SignUpForm = observer(({ store }: { store: UserStoreType }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <LoginInput login={login} onLoginChange={login => setLogin(login)} />
            <NewPasswordInput password={password} onPasswordChange={password => setPassword(password)} />
            <Button 
                value='Sign up' 
                onClick={event => {
                    event.preventDefault();
                    store.signUpSubmit(login, password);
                }}
            />
        </form>
    );
});

export { SignUpForm };

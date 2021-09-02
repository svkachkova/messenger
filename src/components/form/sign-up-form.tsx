import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { LoginInput } from './login-input';
import { NewPasswordInput } from './new-password-input';
import { Button } from '../button';

import { AuthStoreType } from '../../stores/auth-store';

const SignUpForm = observer(({ store }: { store: AuthStoreType }) => {
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

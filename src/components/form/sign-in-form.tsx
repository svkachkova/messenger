import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { LoginInput } from './login-input';
import { CurrentPasswordInput } from './current-password-input';
import { Button } from '../button';

import { AuthStoreType } from '../../stores/auth-store';

const SignInForm = observer(({ store }: { store: AuthStoreType }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <LoginInput login={login} onLoginChange={login => setLogin(login)} />
            <CurrentPasswordInput password={password} onPasswordChange={password => setPassword(password)} />
            <Button 
                value='Sign in' 
                onClick={event => {
                    event.preventDefault();
                    store.signInSubmit(login, password);
                }}
            />
        </form>
    );
});

export { SignInForm };

import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { useStore } from '../../hooks/use-store';

import { LoginInput } from './login-input';
import { CurrentPasswordInput } from './current-password-input';
import { Button } from '../button';

const SignInForm = observer(() => {
    const { authStore } = useStore();

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
                    authStore.signInSubmit(login, password);
                }}
            />
        </form>
    );
});

export { SignInForm };

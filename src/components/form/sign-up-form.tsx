import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { useStore } from '../../hooks/use-store';

import { LoginInput } from './login-input';
import { NewPasswordInput } from './new-password-input';
import { Button } from '../button';

const SignUpForm = observer(() => {
    const { authStore } = useStore();

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
                    authStore.signUp(login, password);
                }}
            />
        </form>
    );
});

export { SignUpForm };

import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Button } from './button';
import { UserStoreType } from '../store/user-store';

type Props = {
    formType: string
    buttonValue: string;
    store: UserStoreType;
}

const Form = observer((props: Props) => {
    const { formType, buttonValue, store } = props;

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHiden, setIsPasswordHiden] = useState(true);

    let passwordType: string = '';

    if (formType === 'sign-up') {
        passwordType = 'new-password';
    } else if (formType === 'sign-in') {
        passwordType = 'current-password';
    }

    return (
        <form>
            <section>
                <label htmlFor='login'>Login</label>
                <input 
                    id='login' 
                    name='login' 
                    type='text' 
                    autoComplete='username' 
                    value={login} 
                    onChange={event => setLogin(event.target.value)}
                />
            </section>
            
            <section>
                <label htmlFor={passwordType}>Password</label>
                <input 
                    id={passwordType} 
                    name='password' 
                    type={isPasswordHiden ? 'password' : 'text'} 
                    autoComplete={passwordType} 
                    aria-describedby='password-constraints' 
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <input
                    type='button'
                    value={isPasswordHiden ? 'Show password' : 'Hide password'}
                    aria-label={isPasswordHiden ? 
                        'Show password as plain text. Warning: this will display your password on the screen.'
                        : 'Hide password.'
                    }
                    onClick={event => { 
                        event.preventDefault();
                        setIsPasswordHiden(!isPasswordHiden);
                    }}
                />
            </section>

            <Button 
                value={buttonValue} 
                onClick={event => {
                    event.preventDefault();

                    if (formType === 'sign-up') {
                        store.signUpSubmit(login, password);
                    } else {
                        store.signInSubmit(login, password);
                    }
                }}
            />
        </form>
    );
});

export { Form };

import { useState } from 'react';

type Props = {
    password: string;
    onPasswordChange: (password: string) => void;
};

const NewPasswordInput = (props: Props) => {
    const { password, onPasswordChange } = props;

    const [isPasswordHiden, setIsPasswordHiden] = useState(true);

    return (
        <section>
            <label htmlFor='new-password'>Password</label>
            <input 
                id='new-password' 
                name='password' 
                type={isPasswordHiden ? 'password' : 'text'} 
                autoComplete='new-password' 
                aria-describedby='password-constraints' 
                value={password}
                onChange={event => onPasswordChange(event.target.value)}
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
    );
};

export { NewPasswordInput };

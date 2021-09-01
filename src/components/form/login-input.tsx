type Props = {
    login: string;
    onLoginChange: (login: string) => void;
};

const LoginInput = (props: Props) => {
    const { login, onLoginChange } = props;

    return (
        <section>
            <label htmlFor='login'>Login</label>
                <input 
                    id='login' 
                    name='login' 
                    type='text' 
                    autoComplete='username' 
                    value={login} 
                    onChange={event => onLoginChange(event.target.value)}
                />
        </section>
    );
};

export { LoginInput };

import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Button } from '../button';
import { UserStoreType } from '../../store/user-store';

const AddContactForm = observer(({ store }: { store: UserStoreType }) => {
    const [inputText, setInputText] = useState('');

    return (
        <form>
            <input 
                name='new-contact'
                type='text'
                value={inputText}
                onChange={event => setInputText(event.target.value)} 
            />
            <Button 
                value='Add'
                onClick={event => {
                    event.preventDefault();
                    store.createContact(inputText);
                }}
            />
        </form>
    );
});

export { AddContactForm };

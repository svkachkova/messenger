import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStore } from '../../hooks/use-store';
import { Button } from '../button';

const AddContactForm = observer(() => {
    const { contactsStore } = useStore();
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
                    contactsStore.createContact(inputText);
                }}
            />
        </form>
    );
});

export { AddContactForm };

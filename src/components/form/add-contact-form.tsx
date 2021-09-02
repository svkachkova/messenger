import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Button } from '../button';
import { ContactsStoreType } from '../../stores/contacts-store';

const AddContactForm = observer(({ store }: { store: ContactsStoreType }) => {
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

import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

import { UserStoreType } from '../store/user-store';
import { AddContactForm } from '../components/form/add-contact-form';
import { ContactCard } from '../components/contact-card';
import { Button } from '../components/button';

const Contacts = observer(({ store }: { store: UserStoreType }) => {
    const [addContact, setAddContact] = useState(false);

    const contacts: JSX.Element[] = store.contacts.map(login => {
        return <ContactCard key={nanoid(5)} login={login} />;
    });

    useEffect(() => {
        store.getContacts();
    }, []);

    return (
        <main>
            <h1>Contacts</h1>

            {addContact ? 
                <AddContactForm store={store} /> : 
                <Button 
                    value='Add contact'
                    onClick={() => { setAddContact(true) }} 
                />
            }

            <ul>{contacts}</ul>
            <Link 
                to='/signin'
                onClick={() => { store.signOut() }}
            >Sign out</Link>
        </main>
        
    );
});

export default Contacts;

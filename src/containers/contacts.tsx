import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

import { UserStoreType } from '../store/user-store';
import { ContactCard } from '../components/contact-card';
import { Button } from '../components/button';

const Contacts = observer(({ store }: { store: UserStoreType }) => {
    useEffect(() => {
        store.getContacts();
    }, []);

    const contacts: JSX.Element[] = store.contacts.map(login => {
        return <ContactCard key={nanoid(5)} login={login} />;
    });

    return (
        <main>
            <h1>Contacts</h1>
            <Button 
                value='Add contact'
                onClick={() => {}} 
            />
            <ul>{contacts}</ul>
            <Link 
                to='/signin'
                onClick={() => { store.signOut() }}
            >Sign out</Link>
        </main>
        
    );
});

export default Contacts;

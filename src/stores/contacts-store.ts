import { makeAutoObservable } from 'mobx';
import { ServerApi } from '../network/server-api';

import { Store } from './store';
import { UserStore } from './user-store';

class ContactsStore {
    user: UserStore;
    contacts: string[];
    serverApi: ServerApi;

    constructor(store: Store, serverApi: ServerApi) {
        this.user = store.userStore;
        this.contacts = [];
        this.serverApi = serverApi;
        makeAutoObservable(this);
    }

    getContacts() {
        this.serverApi.getContacts(this.user.token)
        .then(response => {
            if (response.status) {
                this.contacts = response.contacts;
            } else {
                console.error(response.message);
            }
        })
        .catch(error => console.error('error', error.message));
    }

    createContact(login: string) {
        this.serverApi.createContact(this.user.token, login)
        .then(response => {
            if (response.status) {
                this.getContacts();
            } else {
                console.error(response.message);
            }
        })
        .catch(error => console.error('error', error.message));
    }
};

export { ContactsStore };

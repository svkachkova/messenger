import { makeAutoObservable } from 'mobx';
import { fetchPost } from './submit';

import { StoreType } from './store';
import { UserStoreType } from './user-store';

export type ContactsStoreType = {
    contacts: string[];
    getContacts: () => void;
    createContact: (login: string) => void;
};

class ContactsStore {
    user: UserStoreType;
    contacts: string[];

    constructor(store: StoreType) {
        this.user = store.userStore;
        this.contacts = [];
        makeAutoObservable(this);
    }

    async getContacts() {
        const url: string = 'api/getContacts';
        const callback = (response: any) => {
            this.contacts = response.contacts;
        };

        await fetchPost(url, { token: this.user.token }, callback);
    }

    async createContact(login: string) {
        const url: string = 'api/createContact'; 
        const callback = (response: any) => {
            this.getContacts();
        };

        await fetchPost(url, { token: this.user.token, login }, callback);
    }
};

export { ContactsStore };

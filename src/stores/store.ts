import { AuthStore, AuthStoreType } from './auth-store';
import { ContactsStore, ContactsStoreType } from './contacts-store';
import { UserStore, UserStoreType } from './user-store';

export type StoreType = {
    userStore: UserStoreType;
    authStore: AuthStoreType;
    contactsStore: ContactsStoreType;
}

class Store {
    userStore: UserStoreType;
    authStore: AuthStoreType;
    contactsStore: ContactsStoreType;

    constructor() {
        this.userStore = new UserStore();
        this.authStore = new AuthStore(this);
        this.contactsStore = new ContactsStore(this);
    }
};

export { Store };

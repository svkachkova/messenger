import { AuthStore } from './auth-store';
import { ContactsStore } from './contacts-store';
import { UserStore } from './user-store';
import { ServerApiImpl } from '../network/server-api';

class Store {
    userStore: UserStore;
    authStore: AuthStore;
    contactsStore: ContactsStore;

    constructor() {
        const serverApi = new ServerApiImpl();

        this.userStore = new UserStore();
        this.authStore = new AuthStore(this, serverApi);
        this.contactsStore = new ContactsStore(this, serverApi);
    }
};

export { Store };

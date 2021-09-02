import { makeAutoObservable } from 'mobx';
import { fetchPost } from './submit';

import { StoreType } from './store';
import { UserStoreType } from './user-store';

export type AuthStoreType = {
	signUpSubmit: (login: string, password: string) => void;
	signInSubmit: (login: string, password: string) => void;
    signOut: () => void;
}

class AuthStore {
    user: UserStoreType;

    constructor(store: StoreType) {
        this.user = store.userStore;
        makeAutoObservable(this);
    }

    async signUpSubmit(login: string, password: string) {
        const url: string = 'api/createUser';
        const callback = (response: any) => {
            this.user.isCreated = true;
        };

        await fetchPost(url, { login, password }, callback);
    }

    async signInSubmit(login: string, password: string) {
        const url: string = 'api/login';
        const callback = (response: any) => {
            this.user.login = login;
            this.user.token = response.token;

            localStorage.setItem('token', response.token);
        };

        await fetchPost(url, { login, password }, callback);
    }

    signOut(): void {
        this.user.login = '';
        this.user.token = '';
    }
}

export { AuthStore };

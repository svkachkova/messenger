import { makeAutoObservable } from 'mobx';
import {  ServerApi } from '../network/server-api';

import { Store } from './store';
import { UserStore } from './user-store';

class AuthStore {
    user: UserStore;
    serverApi: ServerApi;

    constructor(store: Store, serverApi: ServerApi) {
        this.user = store.userStore;
        this.serverApi = serverApi;
        makeAutoObservable(this);
    }

    signUp(login: string, password: string) {
        this.serverApi.createUser(login, password)
        .then(response => {
            if (response.status) {
                this.user.isCreated = true;
            } else {
                console.error(response.message);
            }
        })
        .catch(error => console.error('error', error.message));
    }

    signIn(login: string, password: string) {
        this.serverApi.login(login, password)
        .then(response => {
            if (response.status) {
                this.user.login = login;
                this.user.token = response.token;
    
                localStorage.setItem('token', response.token);
            } else {
                console.error(response.message);
            }
        })
        .catch(error => console.error('error', error.message));
    }

    signOut(): void {
        this.user.login = '';
        this.user.token = '';
    }
}

export { AuthStore };

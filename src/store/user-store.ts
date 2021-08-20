import { makeAutoObservable } from 'mobx';
import { fetchPost } from './submit';

export type UserStoreType = {
	login: string;
	token: string;
    contacts: string[];
    isCreated: boolean;
    isLogged: boolean;
    signOut: () => void;
	signUpSubmit: (login: string, password: string) => void;
	signInSubmit: (login: string, password: string) => void;
    getContacts: () => void;
};

const host: string = 'https://localhost:3912/';

// Todo:
// 1. Test getting token from localStorage

class UserStore {
    login: string;
    token: string;
    contacts: string[]
    isCreated: boolean;

    constructor() {
        this.login = '';
        this.token = localStorage.getItem('token') || '';
        this.contacts = [];
        this.isCreated = false;

        makeAutoObservable(this);
    }

    get isLogged(): boolean {
        return this.token === '' ? false : true;
    }

    signOut(): void {
        this.login = '';
        this.token = '';
    }

    async signUpSubmit(login: string, password: string) {
        const url: string = `${host}api/createUser`;
        const callback = (response: any) => {
            this.login = login;
            this.isCreated = true;
        };

        await fetchPost(url, { login, password }, callback);
    }

    async signInSubmit(login: string, password: string) {
        const url: string = `${host}api/login`;
        const callback = (response: any) => {
            this.login = login;
            this.token = response.token;

            localStorage.setItem('token', response.token);
        };

        await fetchPost(url, { login, password }, callback);
    }

    async getContacts() {
        const url: string = `${host}api/getContacts`;
        const callback = (response: any) => {
            this.contacts = response.contacts;
        };

        await fetchPost(url, { token: this.token }, callback);
    }

    // *generator() {
    //     yield asyncfunction();
    // }
}

export { UserStore };

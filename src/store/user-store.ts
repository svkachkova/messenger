import { makeAutoObservable } from 'mobx';
import { fetchPost } from './submit';

const host: string = 'https://localhost:3912/';

// Todo:
// 1. Test getting token from localStorage

class UserStore {
    login: string;
    token: string;
    isCreated: boolean;

    constructor() {
        this.login = '';
        this.token = localStorage.getItem('token') || '';
        this.isCreated = false;

        makeAutoObservable(this);
    }

    get isLogged(): boolean {
        return this.token === '' ? false : true;
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

    // *generator() {
    //     yield asyncfunction();
    // }
}

export { UserStore };

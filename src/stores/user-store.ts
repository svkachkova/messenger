import { makeAutoObservable } from 'mobx';

export type UserStoreType = {
    login: string;
	token: string;
    isCreated: boolean;
    isLogged: boolean;
};

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

    // *generator() {
    //     yield asyncfunction();
    // }
}

export { UserStore };

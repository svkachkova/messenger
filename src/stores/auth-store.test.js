import { Store } from './store';

describe('When user sign out', () => {
    it('login and token are cleared', () => {
        const { userStore, authStore } = new Store();
        userStore.login = 'mabel';
        userStore.token = 'm89b33l';

        authStore.signOut();
        expect(userStore.login).toEqual('');
        expect(userStore.token).toEqual('');
    })
});

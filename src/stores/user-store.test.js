import { UserStore } from './user-store.ts';

describe('When created', () => {
    it('user data initialized', () => {
        const user = new UserStore();
        expect(user.login).toEqual('');
        expect(user.token).toEqual('');
        expect(user.contacts).toEqual([]);
        expect(user.isCreated).toEqual(false);
    });
});

describe('When user is logged', () => {
    it('user.isLogged return true, else false', () => {
        const user = new UserStore();
        expect(user.isLogged).toEqual(false);
        
        user.token = '1234';
        expect(user.isLogged).toEqual(true);
    });
});

describe('When user sign out', () => {
    it('login and token are cleared', () => {
        const user = new UserStore();
        user.login = 'mabel';
        user.token = 'm89b33l';

        user.signOut();
        expect(user.login).toEqual('');
        expect(user.token).toEqual('');
    })
});

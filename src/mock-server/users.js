const loginToPassword = new Map([
    ['mabel', '1234'],
    ['dipper', '4321'],
    ['grunkle_stan', '0000'],
    ['waddles', '8888']
]);

const loginToToken = new Map([
    ['mabel', 'm89b33l'],
    ['dipper', 'd1pp33r'],
    ['grunkle_stan', 'st89n'],
    ['waddles', 'w89ddl33s']
]);

const tokenToContacts = new Map();

tokenToContacts.set('m89b33l', ['dipper', 'grunkle_stan', 'waddles']);
tokenToContacts.set('d1pp33r', ['mabel', 'grunkle_stan']);
tokenToContacts.set('st89n', ['mabel', 'dipper']);
tokenToContacts.set('w89ddl33s', ['mabel']);

module.exports = { loginToPassword, loginToToken, tokenToContacts };

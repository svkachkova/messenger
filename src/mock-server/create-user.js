const users = require('./users').loginToPassword;

function createUser({ login, password }) {
    
    console.log('request url: /api/createUser');
    console.log('credentials: ', { login, password });

    if (users.get(login) === password) {
        console.log('correct credentials')
        return {
            status: true,
            message: 'User created'
        };
    } else {
        console.log('incorrect credentials')
        return {
            status: false,
            message: 'Incorrect login or password. Use credentials from "./src/mock-server/readme.md"'
        };
    }
}

module.exports = createUser;

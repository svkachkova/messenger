const users = require('./users');

function createContact({ token, login }) {

    console.log('request url: /api/createContact');
    console.log('data: ', { token, login });

    if (users.tokenToContacts.has(token)) {

        if (users.loginToToken.has(login)) {

            if (!users.tokenToContacts.get(token).includes(login)) {
                users.tokenToContacts.set(token, [...users.tokenToContacts.get(token), login]);
                console.log('contact added');
                return {
                    status: true,
                    message: 'Contact added'
                }
            } else {
                console.log('contact already added');
                return {
                    status: false,
                    message: 'Contact already added'
                };    
            }

        } else {
            console.log('incorrect login');
            return {
                status: false,
                message: 'Incorrect login. Use logins from "./src/mock-server/readme.md"'
            };
        }

    } else {
        console.log('incorrect token');
		return {
			status: false,
			message: 'Invalid token'
		};
    }
}

module.exports = createContact;

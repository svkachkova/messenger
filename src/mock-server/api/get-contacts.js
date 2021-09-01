const users = require('../users').tokenToContacts;

function getContacts({ token }) {
    console.log('request url: /api/getContacts');
	console.log('token: ', { token });

    if (users.has(token)) {
        console.log('correct token');
        return {
            status: true,
            message: 'Contacts gotten',
            contacts: users.get(token)
        };
    } else {
        console.log('incorrect token');
		return {
			status: false,
			message: 'Invalid token'
		};
    }
}

module.exports = getContacts;

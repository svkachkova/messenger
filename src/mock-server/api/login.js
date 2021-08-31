const users = require('./users');

function login({ login, password }) {
	console.log('request url: /api/login');
	console.log('credentials: ', { login, password });
	
	if (users.loginToPassword.get(login) === password) {
		console.log('correct credentials');
		return {
			status: true,
			message: 'User logged',
			token: users.loginToToken.get(login)
		};
	} else {
		console.log('incorrect credentials');
		return {
			status: false,
			message: 'Incorrect login or password. Use credentials from "./src/mock-server/readme.md"'
		};
	}
}

module.exports = login;

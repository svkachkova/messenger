const https = require('https');
const path = require('path');
const fs = require('fs');

const createUser = require('./api/create-user');
const login = require('./api/login');
const getContacts = require('./api/get-contacts');
const createContact = require('./api/create-contact');

const options = {
    key: fs.readFileSync(path.resolve('src/mock-server/key.pem')),
    cert: fs.readFileSync(path.resolve('src/mock-server/cert.pem'))
};

const port = 3912;
const host = 'localhost';

https
.createServer(options, (request, response) => {

    if (request.method === 'OPTIONS') {

        console.log('--method OPTIONS');

        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization');
        
        return response.end();
    }

    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    if (request.method === 'POST') {

        console.log('--method POST');
        let body = '';

        request
        .on('data', chunk => { 
            body += chunk.toString();
        })
        .on('end', () => {
            if (request.url === '/api/createUser') {
                const data = createUser(JSON.parse(body));
                return response.end(JSON.stringify(data));
            }
        
            if (request.url === '/api/login') {
                const data = login(JSON.parse(body));
                return response.end(JSON.stringify(data));
            }

            if (request.url === '/api/getContacts') {
                const data = getContacts(JSON.parse(body));
                return response.end(JSON.stringify(data));
            }

            if (request.url === '/api/createContact') {
                const data = createContact(JSON.parse(body));
                return response.end(JSON.stringify(data));
            }
        });
    }

    // response.statusCode = 404;
    // return response.end(JSON.stringify({ error: 'Not found' }));
})
.listen(port, host, () => {
    console.log(`Server running at https://${host}:${port}/`);
});

// function wrapper(callback) {
//     const data = callback(JSON.parse(body));
//     return response.end(JSON.stringify(data));
// }

import * as schema from './schema';

export interface ServerApi {
    createUser: (login: string, password: string) => Promise<schema.CreateUserResponse>;
	login: (login: string, password: string) => Promise<schema.LoginResponse>;
    getContacts: (token: string) => Promise<schema.GetContactsResponse>;
    createContact: (token: string, login: string) => Promise<schema.CreateContactsResponse>;
};

class ServerApiImpl implements ServerApi {
    host ='https://localhost:3912/';

    async createUser(login: string, password: string): Promise<schema.CreateUserResponse> {
        const url = 'api/createUser';
        const requestInit = this.formRequestInit({ login, password });     
        
        return fetch(this.host + url, requestInit)
            .then(response => this.resolve(response))
    }

    async login(login: string, password: string): Promise<schema.LoginResponse> {
        const url = 'api/login';
        const requestInit = this.formRequestInit({ login, password });     
        
        return fetch(this.host + url, requestInit)
            .then(response => this.resolve(response))
    }

    async getContacts(token: string): Promise<schema.GetContactsResponse> {
        const url = 'api/getContacts';
        const requestInit = this.formRequestInit({ token });     
        
        return fetch(this.host + url, requestInit)
            .then(response => this.resolve(response))
    }

    async createContact(token: string, login: string): Promise<schema.CreateContactsResponse> {
        const url = 'api/createContact'; 
        const requestInit = this.formRequestInit({ token, login });     
        
        return fetch(this.host + url, requestInit)
            .then(response => this.resolve(response))
    }

    formRequestInit(postData: any): RequestInit {
        return {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        };
    }

    resolve(response: Response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    };
}

export { ServerApiImpl };

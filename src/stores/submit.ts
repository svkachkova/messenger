type PostData = {
    login?: string,
    password?: string,
    token?: string
};

const host: string = 'https://localhost:3912/';

async function fetchPost(url: string, postData: PostData, callback: (response: any) => void) {
    const options: RequestInit = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    };

    await fetch(host + url, options)
    .then(response => {      
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(serverResponse => {
        if (serverResponse.status) {
            callback(serverResponse);
        } else {
            console.error(serverResponse.message);
        }
    })
    .catch(error => console.error(error.message));
}

async function fetchGet(url:string, callback: (response: any) => void) {
    await fetch(host + url)
    .then(response => {      
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(serverResponse => {
        if (serverResponse.status) {
            callback(serverResponse);
        } else {
            console.error(serverResponse.message);
        }
    })
    .catch(error => console.error(error.message));
}

export { fetchPost, fetchGet }

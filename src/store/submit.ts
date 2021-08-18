type PostData = {
    login?: string,
    password?: string,
    token?: string
};

async function fetchPost(url: string, postData: PostData, callback: (response: any) => void) {
    const options: RequestInit = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    };

    await fetch(url, options)
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
            console.log(serverResponse.message);
        }
    })
    .catch(error => console.log(error.message));
}

async function fetchGet(url:string, callback: (response: any) => void) {
    await fetch(url)
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
            console.log(serverResponse.message);
        }
    })
    .catch(error => console.log(error.message));
}

export { fetchPost, fetchGet }

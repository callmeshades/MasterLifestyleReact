

async function checkUserAuth() {
    try {
        let response = await fetch('/accounts/api-check-user-session/', {
            method: 'GET'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }

}

async function userLogin(username, password) {
    let response = await fetch('/accounts/api-login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, password})
    });
    return await response.json();
}


export {
    checkUserAuth,
    userLogin
}

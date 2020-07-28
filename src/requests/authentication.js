
const server_url = "";

async function checkUserAuth() {
    try {
        let response = await fetch(`${server_url}/accounts/api-check-user-session/`, {
            method: 'GET',
            credentials: 'include'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}


async function checkForTrainerGroup() {
    try {
        let response = await fetch(`${server_url}/accounts/trainer-group-check/`, {
            method: 'GET',
            credentials: 'include'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function checkForUserGroup() {
    try {
        let response = await fetch(`${server_url}/accounts/user-group-check/`, {
            method: 'GET',
            credentials: 'include'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}


async function userLogin(username, password) {
    let response = await fetch(`${server_url}/accounts/api-login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({username, password})
    });
    return await response.json();
}

async function userLogout() {
    try {
        let response = await fetch(`${server_url}/accounts/api-logout/`, {
            method: 'GET',
            credentials: 'include'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function getUserData() {
    try {
        let response = await fetch(`${server_url}/accounts/api-fetch-user-data/`, {
            method: 'GET',
            credentials: 'include'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}


export {
    checkUserAuth,
    userLogin,
    userLogout,
    checkForTrainerGroup,
    checkForUserGroup,
    getUserData
}

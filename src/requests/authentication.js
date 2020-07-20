
const server_url = "https://www.api.masterlifestyle.ca";

async function checkUserAuth() {
    try {
        let response = await fetch(`${server_url}/accounts/api-check-user-session/`, {
            method: 'GET'
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
            method: 'GET'
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
            method: 'GET'
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
        body: JSON.stringify({username, password})
    });
    return await response.json();
}

async function userLogout() {
    try {
        let response = await fetch(`${server_url}/accounts/api-logout/`, {
            method: 'GET'
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
    checkForUserGroup
}


async function getUsersAssignment() {
    try {
        let response = await fetch('/users/get-user-assignment/', {
            method: 'GET'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function saveUserAssignment(assignment) {
    try {
        let response = await fetch('/users/update-user-assignment/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({assignment})
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}


export {
    getUsersAssignment,
    saveUserAssignment
}
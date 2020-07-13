

async function getAllClients() {
    try {
        let response = await fetch('/trainers/api/get-all-clients/', {
            method: 'GET'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function getClientById(clientId) {
    try {
        let response = await fetch('/trainers/api/get-client-by-id/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({clientId})
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function getAllPrograms() {
    try {
        let response = await fetch('/trainers/api/get-programs/', {
            method: 'GET'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function assignNewProgram(userId, programId, duration) {
    try {
        let response = await fetch('/trainers/api/assign-program/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({userId, programId, duration})
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function getProgramDetails(programId) {
    try {
        let response = await fetch('/trainers/api/get-program-by-id/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({programID: programId})
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}


export {
    getAllClients,
    getClientById,
    getAllPrograms,
    assignNewProgram,
    getProgramDetails
}
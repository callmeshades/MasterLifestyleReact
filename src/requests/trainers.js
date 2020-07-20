
const server_url = "https://www.api.masterlifestyle.ca";


async function getAllClients() {
    try {
        let response = await fetch(`${server_url}`, {
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
        let response = await fetch(`${server_url}/trainers/api/get-client-by-id/`, {
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
        let response = await fetch(`${server_url}/trainers/api/get-programs/`, {
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
        let response = await fetch(`${server_url}/trainers/api/assign-program/`, {
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

async function createNewProgram() {
    try {
        let response = await fetch(`${server_url}/trainers/api/add-program/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "Blank Program",
                notes: [],
                modules: [],
                description: "",
                requiresGym: false,
                requiresEquipment: false
            })
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function getProgramDetails(programId) {
    try {
        let response = await fetch(`${server_url}/trainers/api/get-program-by-id/`, {
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

async function saveProgramProgress(programId, programObject) {
    try {
        let response = await fetch(`${server_url}/trainers/api/update-program/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({programID: programId, programDetails: programObject})
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function deleteProgram(programId) {
    try {
        let response = await fetch(`${server_url}/trainers/api/delete-program/`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({programId: programId})
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function getAlLExercises() {
    try {
        let response = await fetch(`${server_url}/trainers/api/get-exercises/`, {
            method: 'GET'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function getSingleExercise(exercise_id) {
    try {
        let response = await fetch(`${server_url}/trainers/api/get-exercise/${exercise_id}/`, {
            method: 'GET'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function createBlankExercise() {
    try {
        let response = await fetch(`${server_url}/trainers/api/create-exercise/`, {
            method: 'GET'
        });
        return await response.json()
    } catch (e) {
        console.log('Error: Unable to connect to backend server');
        return await e;
    }
}

async function updateExercise(exercise_json) {
    try {
        let response = await fetch(`${server_url}/trainers/api/update-exercise/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exercise_json)
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
    createNewProgram,
    getProgramDetails,
    saveProgramProgress,
    deleteProgram,
    getAlLExercises,
    getSingleExercise,
    createBlankExercise,
    updateExercise
}
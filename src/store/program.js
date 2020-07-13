import {action} from "easy-peasy";
import {v4 as uuid} from "uuid";

const currentProgram = {
    item: {
        name: "",
        notes: [],
        modules: [],
        description: "",
        requiresGym: false,
        requiresEquipment: false
    },
    loadDay: action((state, payload) => {
        state.item = payload.value;
    }),
    addDay: action((state, payload) => {
        state.item.modules.push({
            "id": uuid(),
            "day": 1,
            "title": "",
            "editable": false,
            "exercises": []
        })
    }),
    removeDay: action((state, payload) => {
        const day_index = state.item.modules.findIndex(item => item.id === payload.day_id)
        state.item.modules.splice(day_index, 1);
    }),
    updateDayName: action((state, payload) => {
        const day_index = state.item.modules.findIndex(item => item.id === payload.day_id);
        state.item.modules[day_index].title = payload.value;
    }),
    changeExerciseDetail: action((state, payload) => {
        const day_index = state.item.modules.findIndex(item => item.id === payload.day_id);
        const exercise_index = state.item.modules[day_index].exercises.findIndex(item => item.id === payload.exercise_id);
        switch (payload.type) {
            case "reps":
                state.item.modules[day_index].exercises[exercise_index].reps = payload.reps;
                break;
            case "sets":
                state.item.modules[day_index].exercises[exercise_index].sets = payload.sets;
                break;
            case "rir":
                state.item.modules[day_index].exercises[exercise_index].rir = payload.rir;
                break;
            case "DELETE":
                state.item.modules[day_index].exercises.splice(exercise_index, 1);
                break;
            default:
                // Pass and do nothing
                break;
        }

    })
}

export {
    currentProgram
}
import {action} from "easy-peasy";

const currentAssignment = {
    item: {},
    setAssignment: action((state, payload) => {
        state.item = payload.assignment
    }),
    setExerciseUserData: action((state, payload) => {
        const programWeekId = payload.weekId;
        const dayIndex = payload.dayIndex;
        const exerciseIndex = payload.exerciseIndex;
        const newValue = payload.newValue;
        const temp_state = state.item;
        if (!temp_state.weeks[programWeekId - 1].program.modules[dayIndex].exercises[exerciseIndex].blob.userData) {
            temp_state.weeks[programWeekId - 1].program.modules[dayIndex].exercises[exerciseIndex].blob.userData = {};
        }
        switch(payload.type) {
            case "sets":
                temp_state.weeks[programWeekId - 1].program.modules[dayIndex].exercises[exerciseIndex].blob.userData.sets = newValue;
                state.item = temp_state;
                break;
            case "reps":
                temp_state.weeks[programWeekId - 1].program.modules[dayIndex].exercises[exerciseIndex].blob.userData.reps = newValue;
                state.item = temp_state;
                break;
            case "rir":
                temp_state.weeks[programWeekId - 1].program.modules[dayIndex].exercises[exerciseIndex].blob.userData.rir = newValue;
                state.item = temp_state;
                break;
            default:
                break;
        }
    })
};


export {
    currentAssignment
}
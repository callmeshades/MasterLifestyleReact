import {createStore} from "easy-peasy";
import { currentProgram } from './program';
import { currentAssignment } from './users/assignment';

// Used to bind all the store models
const storeModel = {
    program: currentProgram,
    assignment: currentAssignment
}

export const store = createStore(storeModel);
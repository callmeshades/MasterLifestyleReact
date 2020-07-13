import {createStore} from "easy-peasy";
import { currentProgram } from './program';

// Used to bind all the store models
const storeModel = {
    program: currentProgram
}

export const store = createStore(storeModel);
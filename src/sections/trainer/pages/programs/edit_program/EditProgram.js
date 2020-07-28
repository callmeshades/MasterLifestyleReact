import React, {useEffect, useState} from "react";
import {getProgramDetails} from "../../../../../requests/trainers";
import SpinnerContainer from "../../../../../components/SpinnerContainer";
import {navigate} from "@reach/router";
import ProgramContainer from "./components/ProgramContainer";
import {v4 as uuid} from 'uuid';
import ProgramContext from '../../../../../context/program-context';

function EditProgram(props) {
    const [loading, setLoading] = useState(false);
    const [programDetails, setProgramDetails] = useState({
        name: "",
        notes: [],
        modules: [],
        description: "",
        requiresGym: false,
        requiresEquipment: false
    });

    function addDayToModules() {
        const newDay = {
            "id": uuid(),
            "day": 1,
            "title": "",
            "editable": false,
            "exercises": []
        }
        let temp_state = {...programDetails};
        temp_state.modules.push(newDay);
        setProgramDetails(temp_state);
    }

    function removeDay(dayId) {
        let tempProgram = {...programDetails};
        const dayIndex = tempProgram.modules.findIndex(item => item.id === dayId);
        tempProgram.modules.splice(dayIndex, 1);
        setProgramDetails(tempProgram);
    }

    function updateProgramTitle(value) {
        let tempState = {...programDetails};
        tempState.name = value;
        setProgramDetails(tempState);
    }

    function updateDayTitle(dayId, value) {
        let tempState = {...programDetails};
        const dayIndex = tempState.modules.findIndex(item => item.id === dayId);
        tempState.modules[dayIndex].title = value;
        setProgramDetails(tempState);
    }

    function addExerciseToDay(dayId, exerciseObject) {
        let tempState = {...programDetails};
        const dayIndex = tempState.modules.findIndex(item => item.id === dayId);
        let newObject = {...exerciseObject};
        newObject.randomId = uuid();
        // Allows us to add multiples of the same exercises in the day body
        tempState.modules[dayIndex].exercises.push(newObject);
        setProgramDetails(tempState);
    }

    function updateExerciseDetails(dayId, exerciseId, type, value) {
        let tempProgram = {...programDetails};
        const dayIndex = tempProgram.modules.findIndex(item => item.id === dayId);
        const exerciseIndex = tempProgram.modules[dayIndex].exercises.findIndex(item => item.randomId === exerciseId);
        switch(type) {
            case "sets":
                tempProgram.modules[dayIndex].exercises[exerciseIndex].sets = parseInt(value);
                break;
            case "reps":
                tempProgram.modules[dayIndex].exercises[exerciseIndex].reps = parseInt(value);
                break;
            case "rir":
                tempProgram.modules[dayIndex].exercises[exerciseIndex].rir = value;
                break;
            case "DELETE":
                tempProgram.modules[dayIndex].exercises.splice(exerciseIndex, 1);
                break;
            default:
                break;
        }
        setProgramDetails(tempProgram);
    }

    useEffect(() => {
        setLoading(true);
        getProgramDetails(props.programId)
            .then(data => {
                if (data.success) {
                    setProgramDetails(data.blob);
                } else {
                    navigate('/trainers/programs');
                }
                setLoading(false);
            })
    }, [props.programId]);

    if (loading) {
        return (
            <div>
                <div className="py-2">
                    <h2 className="text-xl">Editing Program</h2>
                </div>
                <div>
                    <SpinnerContainer/>
                </div>
            </div>
        )
    } else {
        return (
            <ProgramContext.Provider value={{
                program: programDetails,
                updateProgramTitle,
                addDay: addDayToModules,
                removeDay: removeDay,
                updateDayTitle: updateDayTitle,
                addExerciseToDay, // ES6 feature same as before
                updateExerciseDetails: updateExerciseDetails
            }}>
                <div>
                    <div className="py-2">
                        <h2 className="text-xl">Editing Program</h2>
                    </div>
                    <div className="">
                        <ProgramContainer
                            programId={props.programId}
                            program={programDetails}
                            setLoading={setLoading}
                        />
                    </div>
                </div>
            </ProgramContext.Provider>
        )
    }
}


export default EditProgram;
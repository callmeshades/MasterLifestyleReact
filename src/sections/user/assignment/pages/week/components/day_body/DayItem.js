import React from "react";
import avatar from "../../../../../../../assets/img/exercise-avatar.jpg";
import { useStoreActions, useStoreState } from "easy-peasy";


function DayItem(props) {
    const setExerciseData = useStoreActions(actions => actions.assignment.setExerciseUserData);
    let userExerciseData = useStoreState(state => state.assignment.item)

    return (
        <div
            className="flex items-center justify-between shadow-sm bg-white px-3 py-3 border mb-2 overflow-x-auto">
            <div className="flex items-center mr-3">
                <div className="mr-3">
                    {
                        props.exercise.blob ?
                            <img
                                src={props.exercise.blob.imageUrl ? props.exercise.blob.imageUrl : avatar}
                                style={{minWidth: "3rem"}}
                                className="w-12 h-12 object-cover rounded border"
                                alt={`${props.exercise.name} Exercise`}
                            />
                            :
                            <img
                                src={avatar}
                                style={{minWidth: "3rem"}}
                                className="w-12 h-12 object-cover rounded border"
                                alt={`${props.exercise.name} Exercise`}
                            />
                    }
                </div>
                <div>
                    <div>
                        <p>{ props.exercise.name }</p>
                        <div className="flex justify-start">
                            <p className="mr-2">Sets: {props.exercise.sets}</p>
                            <p className="mr-2">Reps: {props.exercise.reps}</p>
                            <p>Rir: {props.exercise.rir}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-between justify-between">
                <div className="flex">
                    <div className="flex flex-col mr-2">
                        <span>Sets:</span>
                        <input type="number"
                        min={0}
                        value={userExerciseData.weeks[props.weekId - 1].program.modules[props.dayIndex].exercises[props.exerciseIndex].blob.userData.sets}
                        onChange={(event) => setExerciseData({
                            weekId: props.weekId,
                            dayIndex: props.dayIndex,
                            exerciseIndex: props.exerciseIndex,
                            newValue: event.target.value,
                            type: "sets"
                        })}
                        className="w-16 focus:outline-none focus:shadow-outline border px-2 py-1" />
                    </div>
                    <div className="flex flex-col mr-2">
                        <span>Reps:</span>
                        <input type="number"
                        min={0}
                        value={userExerciseData.weeks[props.weekId - 1].program.modules[props.dayIndex].exercises[props.exerciseIndex].blob.userData.reps}
                        onChange={(event) => setExerciseData({
                            weekId: props.weekId,
                            dayIndex: props.dayIndex,
                            exerciseIndex: props.exerciseIndex,
                            newValue: event.target.value,
                            type: "reps"
                        })}
                        className="w-16 focus:outline-none focus:shadow-outline border px-2 py-1" />
                    </div>
                    <div className="flex flex-col">
                        <span>Rir:</span>
                        <input type="text"
                        value={userExerciseData.weeks[props.weekId - 1].program.modules[props.dayIndex].exercises[props.exerciseIndex].blob.userData.rir}
                        onChange={(event) => setExerciseData({
                            weekId: props.weekId,
                            dayIndex: props.dayIndex,
                            exerciseIndex: props.exerciseIndex,
                            newValue: event.target.value,
                            type: "rir"
                        })}
                        className="w-16 focus:outline-none focus:shadow-outline border px-2 py-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DayItem;
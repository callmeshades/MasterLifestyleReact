import React from "react";
import {X} from 'react-feather';
import {useStoreActions} from "easy-peasy";

function ExerciseCard(props) {
    const changeExerciseDetail = useStoreActions(actions => actions.program.changeExerciseDetail);


    return (
        <div className="flex items-center justify-between shadow-sm bg-white px-3 py-3 border mb-2 overflow-x-auto">
            <div className="flex items-center mr-3">
                <div className="mr-3">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/09/21/23/06/sport-1685972_960_720.jpg"
                        className="w-16 h-16 object-cover rounded border"
                        alt={`${props.exercise.name} Exercise`}
                    />
                </div>
                <div>
                    <p>{ props.exercise.name }</p>
                    <div className="flex">
                        <button className="focus:outline-none text-blue-400">todo</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center mr-1">
                    <div className="flex flex-col mr-1">
                        <label htmlFor="sets" className="text-gray-700 font-semibold text-sm">Sets</label>
                        <input
                            id="sets"
                            type="number"
                            min={1}
                            className="w-16 border rounded bg-white px-1 py-1"
                            value={props.exercise.sets}
                            onChange={(event => changeExerciseDetail({
                                sets: event.target.value,
                                day_id: props.program.id,
                                exercise_id: props.exercise.id,
                                type: "sets"
                            }))}
                        />
                    </div>
                    <div className="flex flex-col mr-1">
                        <label htmlFor="reps" className="text-gray-700 font-semibold text-sm">Reps</label>
                        <input
                            id="reps"
                            type="number"
                            min={1}
                            className="w-16 border rounded bg-white px-1 py-1"
                            value={props.exercise.reps}
                            onChange={(event => changeExerciseDetail({
                                reps: event.target.value,
                                day_id: props.program.id,
                                exercise_id: props.exercise.id,
                                type: "reps"
                            }))}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="rir" className="text-gray-700 font-semibold text-sm">RIR</label>
                        <input
                            id="rir"
                            type="text"
                            className="w-16 border rounded bg-white px-1 py-1"
                            value={props.exercise.rir}
                            onChange={(event => changeExerciseDetail({
                                rir: event.target.value,
                                day_id: props.program.id,
                                exercise_id: props.exercise.id,
                                type: "rir"
                            }))}
                        />
                    </div>
                    <div>
                        <button className="focus:outline-none px-2 py-1 mt-5">
                            <X
                                size={18}
                                className="text-black"
                                onClick={() => changeExerciseDetail({
                                    day_id: props.program.id,
                                    exercise_id: props.exercise.id,
                                    type: "DELETE"
                                })}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExerciseCard;
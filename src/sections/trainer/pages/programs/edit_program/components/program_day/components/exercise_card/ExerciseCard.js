import React from "react";
import {X} from 'react-feather';
import avatar from "../../../../../../../../../assets/img/exercise-avatar.jpg";
import ProgramContext from '../../../../../../../../../context/program-context';


function ExerciseCard(props) {

    return (
        <ProgramContext.Consumer>
            {context => (
                <div className="flex items-center justify-between shadow-sm bg-white px-3 py-3 border mb-2 overflow-x-auto">
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
                            <p>{ props.exercise.name }</p>
                            {/*<div className="flex">*/}
                            {/*    <button className="focus:outline-none text-blue-400">todo</button>*/}
                            {/*</div>*/}
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
                                    value={props.exercise.sets || ''}
                                    onChange={(event => context.updateExerciseDetails(props.program.id, props.exercise.randomId, 'sets', event.target.value))}
                                />
                            </div>
                            <div className="flex flex-col mr-1">
                                <label htmlFor="reps" className="text-gray-700 font-semibold text-sm">Reps</label>
                                <input
                                    id="reps"
                                    type="number"
                                    min={1}
                                    className="w-16 border rounded bg-white px-1 py-1"
                                    value={props.exercise.reps || ''}
                                    onChange={(event => context.updateExerciseDetails(props.program.id, props.exercise.randomId, 'reps', event.target.value))}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="rir" className="text-gray-700 font-semibold text-sm">RIR</label>
                                <input
                                    id="rir"
                                    type="text"
                                    className="w-16 border rounded bg-white px-1 py-1"
                                    value={props.exercise.rir || ''}
                                    onChange={(event => context.updateExerciseDetails(props.program.id, props.exercise.randomId, 'rir', event.target.value))}
                                />
                            </div>
                            <div>
                                <button className="focus:outline-none px-2 py-1 mt-5"
                                onClick={(event => context.updateExerciseDetails(props.program.id, props.exercise.randomId, 'DELETE', event.target.value))}>
                                    <X
                                        size={18}
                                        className="text-black"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ProgramContext.Consumer>
    )
}

export default ExerciseCard;
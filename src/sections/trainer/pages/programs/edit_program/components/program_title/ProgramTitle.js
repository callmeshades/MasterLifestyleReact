import React, {useState} from "react";
import {useStoreActions, useStoreState} from "easy-peasy";
import {saveProgramProgress} from "../../../../../../../requests/trainers";
import Swal from "sweetalert2";
import {navigate} from "@reach/router";
import {Edit2, Check} from "react-feather";


function ProgramTitle(props) {
    const [editableTitle, setEditableTitle] = useState(false);
    const addDayToProgram = useStoreActions(actions => actions.program.addDay);
    const updateProgramName = useStoreActions(actions => actions.program.updateProgramName);
    const programProgress = useStoreState(state => state.program.item);


    function saveProgramProgressButton() {
        props.setLoading(true);
        saveProgramProgress(props.programId, programProgress).then(data => {
            if (data.success) {
                Swal.fire('Success', data.message, 'success');
                navigate('/trainers/programs/');
            } else {
                Swal.fire('Error', data.message, 'error');
            }
        }).then(() => {
            props.setLoading(false);
        })
    }

    return (
        <div className="flex justify-between items-center">
            <div>
                {
                    !editableTitle ?
                        <div className="flex items-center">
                            <span className="mr-2">{props.program.name}</span>
                            <button onClick={() => setEditableTitle(true)} className="focus:outline-none text-gray-600">
                                <Edit2 size={15} />
                            </button>
                        </div>
                        :
                        <div className="flex items-center">
                            <input type="text"
                                   value={props.program.name}
                                   onChange={event => updateProgramName({ program_name: event.target.value })}
                                   className="bg-transparent border-b"
                                   required/>
                            <button onClick={() => setEditableTitle(false)} className="focus:outline-none text-gray-600">
                                <Check size={15} />
                            </button>
                        </div>
                }
            </div>
            <div className="flex justify-start items-center">
                <button
                    className="bg-blue-500 hover:bg-blue-600 px-3 py-1 mr-2 rounded text-white font-semibold"
                    onClick={() => addDayToProgram()}
                >
                    Add Day
                </button>
                <button
                    className="bg-teal-500 hover:bg-teal-600 px-3 py-1 rounded text-white font-semibold"
                    onClick={() => saveProgramProgressButton()}
                >
                    Save Program
                </button>
            </div>
        </div>
    )
}


export default ProgramTitle;
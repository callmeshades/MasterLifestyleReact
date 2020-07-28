import React, {useState} from "react";
import {saveProgramProgress} from "../../../../../../../requests/trainers";
import Swal from "sweetalert2";
import {navigate} from "@reach/router";
import {Edit2, Check} from "react-feather";
import ProgramContext from '../../../../../../../context/program-context';


function ProgramTitle(props) {
    const [editableTitle, setEditableTitle] = useState(false);

    function saveProgramProgressButton(programObject) {
        props.setLoading(true);
        saveProgramProgress(props.programId, programObject).then(data => {
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
        <ProgramContext.Consumer>
            {context => (
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
                                        onChange={event => context.updateProgramTitle(event.target.value)}
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
                            onClick={() => context.addDay()}
                        >
                            Add Day
                        </button>
                        <button
                            className="bg-teal-500 hover:bg-teal-600 px-3 py-1 rounded text-white font-semibold"
                            onClick={() => saveProgramProgressButton(context.program)}
                        >
                            Save Program
                        </button>
                    </div>
                </div>
            )}
        </ProgramContext.Consumer>
    )
}


export default ProgramTitle;
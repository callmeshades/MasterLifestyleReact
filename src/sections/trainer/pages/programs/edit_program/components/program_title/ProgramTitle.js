import React from "react";
import { useStoreActions } from "easy-peasy";


function ProgramTitle(props) {
    const addDayToProgram = useStoreActions(actions => actions.program.addDay);
    return (
        <div className="flex justify-between items-center">
            <div>
                { props.program.name }
            </div>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white font-semibold"
                    onClick={() => addDayToProgram()}
                >
                    Add Day
                </button>
            </div>
        </div>
    )
}


export default ProgramTitle;
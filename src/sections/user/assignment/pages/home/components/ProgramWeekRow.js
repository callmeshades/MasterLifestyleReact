import React from "react";
import {ChevronRight} from "react-feather";
import {navigate} from "@reach/router";


function ProgramWeekRow(props) {
    return (
        <div
            className="bg-white container mx-auto shadow-sm border mb-5 mt-3">
            <div className="bg-white w-full border-b px-2 py-2">
                <p className="font-semibold">Week {props.week.id}</p>
            </div>
            <div className="flex justify-between items-center px-3 py-2">
                <div>
                    <p className="text-lg">{props.week.program.name}</p>
                </div>
                <div>
                    <button
                        onClick={() => navigate(`/users/assignment/week/${props.week.id}`)}
                        className="focus:outline-none focus:shadow-outline hover:bg-blue-500 bg-blue-700 text-white px-2 py-2 rounded-full"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProgramWeekRow;
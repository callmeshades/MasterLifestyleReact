import React from "react";
import ProgramsTable from "./components/ProgramsTable";


function AllPrograms() {
    return (
        <div>
            <div className="py-2">
                <h2 className="text-xl">All Programs</h2>
            </div>
            <div className="bg-white shadow-lg border mt-5 overflow-x-auto">
                <ProgramsTable/>
            </div>
        </div>
    )
}


export default AllPrograms;
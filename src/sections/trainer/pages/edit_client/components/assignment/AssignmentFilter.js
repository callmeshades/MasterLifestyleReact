import React from "react";
import Select from "react-select";


function AssignmentFilter(props) {
    return (
        <div>
            <p className="text mb-3">Assign a program</p>
            <div>
                <form
                    className="flex flex-col md:flex-row justify-between md:items-center"
                    onSubmit={props.submitProgramAssignment}>
                    <div className="w-64 mr-0 md:mr-3">
                        <Select
                            options={props.allPrograms}
                            value={props.selectedProgram}
                            getOptionLabel={(option) => option.blob.name}
                            getOptionValue={(option) => option.id}
                            onChange={props.setSelectedProgram}
                            isClearable={true}
                            required
                        />
                    </div>
                    <div className="w-64 mr-0 md:mr-3 mt-2 md:mt-0">
                        <input
                            type="number"
                            min="1"
                            className="border border-gray-300 rounded px-2 py-1"
                            value={props.duration}
                            onChange={(event => props.setDuration(event.target.value))}
                            required
                        />
                    </div>
                    <div className="mt-2 md:mt-0">
                        <button
                            className="bg-white border hover:bg-gray-100 text-black rounded font-semibold focus:outline-none focus:shadow-outline px-3 py-1"
                            type="submit"
                        >
                            Assign program
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AssignmentFilter;
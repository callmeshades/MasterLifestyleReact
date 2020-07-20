import React, {useState} from "react";
import ProgramsTable from "./components/ProgramsTable";
import {createNewProgram} from "../../../../../requests/trainers";
import {navigate} from "@reach/router";
import Swal from "sweetalert2";


function AllPrograms() {
    const [loading, setLoading] = useState(false);

    function createNewProgramButton() {
        setLoading(true);
        createNewProgram().then(data => {
            if (data.success) {
                navigate(`/trainers/programs/${data.id}`);
            } else {
                Swal.fire('Error', 'Unable to create program!', 'error').then(() => {
                    setLoading(false);
                })
            }
        })
    }

    return (
        <div>
            <div className="py-2 flex items-center justify-between">
                <h2 className="text-xl">All Programs</h2>
                {
                    loading ?
                        ""
                        :
                        <button
                            onClick={() => createNewProgramButton()}
                            type="button"
                            className="bg-white hover:bg-gray-100 rounded border focus:outline-none focus:shadow-outline py-1 px-3">
                            Create Program
                        </button>
                }
            </div>
            <div className="bg-white shadow-lg border mt-5 overflow-x-auto">
                <ProgramsTable/>
            </div>
        </div>
    )
}


export default AllPrograms;
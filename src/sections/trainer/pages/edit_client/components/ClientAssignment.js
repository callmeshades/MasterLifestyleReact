import React, {useEffect, useState} from "react";
import AssignmentFilter from "./assignment/AssignmentFilter";
import Spinner from "../../../../../components/Spinner";
import {assignNewProgram, getAllPrograms} from "../../../../../requests/trainers";
import {navigate} from "@reach/router";
import Swal from "sweetalert2";


function ClientAssignment(props) {
    const [loading, setLoading] = useState(false);
    const [allPrograms, setAllPrograms] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState();
    const [duration, setDuration] = useState(1);


    function assignProgram() {
        setLoading(true);
        if (selectedProgram !== undefined && selectedProgram !== null && selectedProgram.id) {
            assignNewProgram(props.clientId, selectedProgram.id, duration)
                .then(data => {
                    if (data.success) {
                        Swal.fire(
                            'Success',
                            'Updated the users assigned program successfully!',
                            'success'
                        ).then(() => {
                            navigate(`/trainers/clients`);
                        });
                    }
                    setLoading(false);
                });
        } else {
            Swal.fire(
                'Oops...',
                'You need to select a program to assign!',
                'error'
            ).then(() => {
                setLoading(false);
            })
        }
    }

    useEffect(() => {
        setLoading(true);
        getAllPrograms()
            .then(data => {
                if (data.success) {
                    setAllPrograms(data.programs);
                }
                setLoading(false);
            });
    }, [props.clientId]);

    return (
        <div className="bg-white shadow border px-4 py-8">
            <div>
                {
                    loading ?
                        <Spinner />
                    :
                    <AssignmentFilter
                        allPrograms={allPrograms}
                        selectedProgram={selectedProgram}
                        duration={duration}
                        setSelectedProgram={(e) => setSelectedProgram(e)}
                        setDuration={setDuration}
                        submitProgramAssignment={() => assignProgram()}
                    />
                }
            </div>
        </div>
    )
}


export default ClientAssignment;
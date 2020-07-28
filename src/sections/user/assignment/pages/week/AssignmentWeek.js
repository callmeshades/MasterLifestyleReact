import React, {useState} from "react";
import {useStoreState} from "easy-peasy";
import {navigate} from "@reach/router";
import AssignmentWeekDay from "./components/AssignmentWeekDay";
import { saveUserAssignment } from "../../../../../requests/users";
import Swal from "sweetalert2";

function AssignmentWeek(props) {
    const [loading, setLoading] = useState(false);
    const assignmentWeek = useStoreState(state => state.assignment.item.weeks[props.weekId - 1]);
    const assignmentState = useStoreState(state => state.assignment.item);

    function saveCurrentStateProgress() {
        setLoading(true);
        saveUserAssignment(assignmentState).then(data => {
            if (data.success) {
                Swal.fire('Success', data.message, 'success').then(() => {
                    navigate('/users');
                });
            } else {
                Swal.fire('Success', data.message, 'success').then(() => {
                    setLoading(false);
                });
            }
        })
    }

    if (assignmentWeek && assignmentWeek.program.modules.length > 0) {
        const mappedWeekComp = assignmentWeek.program.modules.map((item, index) =>
            <div key={item.id}>
                <AssignmentWeekDay
                    day={item}
                    weekId={props.weekId}
                    dayIndex={index}
                />
            </div>
        );

        return (
            <div>
                <div className="container mx-auto mt-3">
                    <div className="flex justify-end">
                        {
                            loading ?
                            ""
                            :
                            <button
                                onClick={saveCurrentStateProgress}
                                className="px-3 py-1 font-semibold bg-teal-500 text-white rounded focus:outline-none focus:shadow-outline">
                                    Save Progress
                            </button>
                        }
                        
                    </div>
                </div>
                {mappedWeekComp}
            </div>
        )
    } else {
        return (
            <div>
                This week doesn't exist.
                <button className="focus:outline-none" onClick={() => navigate('/users')}>Go back</button>
            </div>
        )
    }


}

export default AssignmentWeek;
import React, {useEffect, useState} from "react";
import {getUsersAssignment} from "../../../requests/users";
import Swal from "sweetalert2";
import Spinner from "../../../components/Spinner";
import {useStoreActions} from "easy-peasy";
import {navigate} from "@reach/router";

function Assignment(props) {
    const [loading, setLoading] = useState(true);
    const setAssignmentState = useStoreActions(action => action.assignment.setAssignment)

    useEffect(() => {
        setLoading(true);
        getUsersAssignment().then(data => {
            if (data.success) {
                setAssignmentState({assignment: data.assignment});
                setLoading(false);
            } else {
                Swal.fire('Assignment Issue!', "You don't have an assignment! Contact your trainer for more information.", 'error').then(() => {
                    navigate('/logout');
                })
            }
        })
    }, [setAssignmentState]);

    return (
        <div>
            {
                loading ?
                    <Spinner/>
                    :
                    props.children
            }
        </div>
    )
}

export default Assignment;
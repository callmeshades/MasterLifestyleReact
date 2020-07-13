import React, {useEffect, useState} from "react";
import ClientTitle from "./components/ClientTitle";
import Spinner from "../../../../components/Spinner";

import { getClientById } from "../../../../requests/trainers";
import ClientAssignment from "./components/ClientAssignment";


function EditClient(props) {
    const [loading, setLoading] = useState(true);
    const [client, setClient] = useState({});
    const [assignment, setAssignment] = useState({});

    useEffect(() => {
        setLoading(true);
        getClientById(props.clientId)
            .then(data => {
               if (data.success) {
                   setClient(data.client);
                   setAssignment(data.assignmentName);
               }
               setLoading(false);
            });
    }, [props.clientId]);


    if (loading) {
        return (
            <div className="flex justify-center bg-white items-center shadow-lg border py-5">
                <Spinner/>
            </div>
        )
    } else {
        return (
            <div>
                <ClientTitle
                    client={client}
                    assignment={assignment}
                />
                <ClientAssignment
                    clientId={client.id}
                    assignment={assignment}
                />
            </div>
        );
    }


}


export default EditClient;
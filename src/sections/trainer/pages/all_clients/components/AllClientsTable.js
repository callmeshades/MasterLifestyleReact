import React, {useEffect, useState} from "react";
import { getAllClients } from "../../../../../requests/trainers";
import Spinner from "../../../../../components/Spinner";
import ClientsRow from "./ClientsRow";


function AllClientsTable() {
    const [allClients, setAllClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getAllClients()
            .then(data => {
                setAllClients(data.clients);
                setLoading(false);
            })
    }, []);

    const clientRows = allClients.map((person) =>
        <ClientsRow
            key={person.id}
            person={person}
        />
    );

    if (loading) {
        return (
            <div className="flex justify-center bg-white items-center shadow-lg border py-5">
                <Spinner />
            </div>
        )
    } else {
        return (
            <div className="bg-white shadow-lg border mt-5 overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="border border-t-0 border-l-0 border-r-0 border-gray-300 border-solid">
                        <tr>
                            <th className="text-left px-4 py-4">Name</th>
                            <th className="text-left px-4 py-4">Email</th>
                            <th className="text-left px-4 py-4">Workout Program</th>
                            <th className="text-left px-4 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { clientRows }
                    </tbody>
                </table>
            </div>
        )
    }


}


export default AllClientsTable;
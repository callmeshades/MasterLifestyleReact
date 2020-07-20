import React, {useEffect, useState} from "react";
import ProgramRow from "./ProgramRow";
import { getAllPrograms } from "../../../../../../requests/trainers";
import Spinner from "../../../../../../components/Spinner";


function ProgramsTable() {
    const [loading, setLoading] = useState(false);
    const [allPrograms, setAllPrograms] = useState([]);


    useEffect(() => {
        setLoading(true);
        getAllPrograms()
            .then(data => {
                if (data.success) {
                    setAllPrograms(data.programs);
                }
                setLoading(false);
            })
    }, []);


    const programRows = allPrograms.map((item) =>
        <ProgramRow
            program={item}
            key={item.id}
            setLoading={setLoading}
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
            <table className="table-auto w-full">
                <thead className="border border-t-0 border-l-0 border-r-0 border-gray-300 border-solid">
                <tr>
                    <th className="text-left px-4 py-4">Title</th>
                    <th className="text-left px-4 py-4">Description</th>
                    <th className="text-left px-4 py-4">Created</th>
                    <th className="text-left px-4 py-4">Last Updated</th>
                    <th className="text-left px-4 py-4">Actions</th>
                </tr>
                </thead>
                <tbody>
                    { programRows }
                </tbody>
            </table>
        )
    }
}


export default ProgramsTable;
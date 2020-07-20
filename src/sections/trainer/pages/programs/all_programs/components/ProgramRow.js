import React, {useEffect, useState} from "react";
import { Edit2, X } from "react-feather";
import {navigate} from "@reach/router";
import {deleteProgram} from "../../../../../../requests/trainers";
import Swal from "sweetalert2";
import moment from "moment";

function ProgramRow(props) {
    const [createdTime, setCreatedTime] = useState();
    const [modifiedTime, setModifiedTime] = useState();

    useEffect(() => {
        let createdFormatted = moment(props.program.created).format('MMMM Do YYYY');
        let modifiedFormatted = moment(props.program.modified).format('MMMM Do YYYY');
        setCreatedTime(createdFormatted);
        setModifiedTime(modifiedFormatted);
    }, [props.program])

    function deleteFromPrograms(program_id) {
        props.setLoading(true);
        deleteProgram(program_id).then(data => {
            if (data.success) {
                Swal.fire('Success', data.message, 'success').then(() => {
                    // eslint-disable-next-line no-restricted-globals
                    location.reload();
                })
            } else {
                Swal.fire('Error', data.message, 'error').then(() => {
                    // eslint-disable-next-line no-restricted-globals
                    location.reload();
                })
            }
        })
    }

    return (
        <tr className="border border-t-0 border-l-0 border-r-0 border-gray-200 hover:bg-gray-100 border-solid items-center">
            <td className="px-4 py-2">
                { props.program.blob.name }
            </td>
            <td className="px-4 py-2">
                { props.program.blob.description.trim().length > 0 ? props.program.blob.description : "No description" }
            </td>
            <td className="px-4 py-2">
                { createdTime }
            </td>
            <td className="px-4 py-2">
                { modifiedTime }
            </td>
            <td className="px-4 py-2">
                <span className="flex items-center">
                    <span className="mr-2">
                        <button
                            onClick={() => navigate(`/trainers/programs/${props.program.id}`)}
                            className="bg-white hover:bg-gray-100 rounded border focus:outline-none focus:shadow-outline py-1 px-2"
                        >
                            <Edit2
                                size={15}
                            />
                        </button>
                    </span>
                    <span>
                        <button
                            onClick={() => deleteFromPrograms(props.program.id)}
                            className="bg-white hover:bg-gray-100 rounded border focus:outline-none focus:shadow-outline py-1 px-2"
                        >
                            <X
                                size={15}
                            />
                        </button>
                    </span>
                </span>
            </td>
        </tr>
    )
}

export default ProgramRow;
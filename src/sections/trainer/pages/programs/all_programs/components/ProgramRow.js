import React from "react";
import { Edit2, X } from "react-feather";
import {navigate} from "@reach/router";

function ProgramRow(props) {
    return (
        <tr className="border border-t-0 border-l-0 border-r-0 border-gray-200 hover:bg-gray-100 border-solid items-center">
            <td className="px-4 py-2">
                { props.program.blob.name }
            </td>
            <td className="px-4 py-2">
                { props.program.blob.description.trim().length > 0 ? props.program.blob.description : "No description" }
            </td>
            <td className="px-4 py-2">
                ...
            </td>
            <td className="px-4 py-2">
                ...
            </td>
            <td className="px-4 py-2">
                <span className="flex items-center">
                    <span className="mr-2">
                        <button
                            onClick={() => navigate(`/trainers/programs/${props.program.id}`)}
                            className="bg-white hover:bg-gray-100 rounded-full border focus:outline-none focus:shadow-outline py-1 px-3"
                        >
                            <Edit2
                                size={15}
                            />
                        </button>
                    </span>
                    <span>
                        <button
                            className="bg-white hover:bg-gray-100 rounded-full border focus:outline-none focus:shadow-outline py-1 px-3"
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
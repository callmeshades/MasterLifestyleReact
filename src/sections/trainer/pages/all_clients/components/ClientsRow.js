import React from "react";
import avatar from '../../../../../assets/img/blank-avatar.png';
import {navigate} from "@reach/router";

function navigateToClient(clientID) {
    navigate(`/trainers/clients/${clientID}`);
}

function ClientsRow(props) {
    return (
        <tr className="border border-t-0 border-l-0 border-r-0 border-gray-200 hover:bg-gray-100 border-solid items-center">
            <td className="px-4 py-2">
                <span className="flex justify-start items-center">
                    <img src={avatar}
                         alt={`${props.person.fullName} Avatar`}
                         className="w-6 h-6 rounded-full mr-3"
                         onDragStart={event => event.preventDefault()}
                    />
                    <span>{ props.person.fullName }</span>
                </span>
            </td>
            <td className="px-4 py-2">{ props.person.email }</td>
            <td className="px-4 py-2">
                { props.person.program.weeks[0].program.name } - Weeks: { props.person.program.weeks.length }
            </td>
            <td className="px-4 py-2">
                <span className="flex justify-between items-center">
                    <span>
                        Up to date
                    </span>
                    <button
                        onClick={() => navigateToClient(props.person.id)}
                        className="bg-white hover:bg-gray-100 focus:outline-none focus:shadow-outline border rounded py-1 px-3 text-black font-semibold mr-2"
                    >
                        More
                    </button>
                </span>
            </td>
        </tr>
    );
}


export default ClientsRow;
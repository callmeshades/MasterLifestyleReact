import React from "react";
import avatar from '../../../../../assets/img/blank-avatar.png';


function ClientTitle(props) {
    return (
        <div className="flex flex-col md:flex-row shadow bg-white py-4 px-5 justify-start md:justify-between border border-gray-300 border-solid md:items-center">
            <div className="flex justify-start mb-2 md:mb-0">
                <img
                    src={avatar}
                    className="w-6 h-6 rounded-full mr-3"
                    alt={`${props.client.firstName} ${props.client.lastName} Avatar`}
                    onDragStart={(event => event.preventDefault())}
                />
                <span>
                    { props.client.firstName } { props.client.lastName }
                </span>
            </div>
            <div className="mb-2 md:mb-0">
                <p>{ props.client.email }</p>
            </div>
            <div className="mb-2 md:mb-0">
                <p>{ props.client.username }</p>
            </div>
            <div className="mb-2 md:mb-0">
                <p>{ props.assignment }</p>
            </div>
            <div>
                {
                    props.client.active ?
                        <span className="flex w-16 justify-center rounded-full bg-teal-400 text-white px-2 py-1 text-xs font-bold mr-3">Active</span>
                        :
                        <span className="flex w-16 justify-center rounded-full bg-red-500 text-white px-2 py-1 text-xs font-bold mr-3">Inactive</span>
                }
            </div>
        </div>
    )
}


export default ClientTitle;
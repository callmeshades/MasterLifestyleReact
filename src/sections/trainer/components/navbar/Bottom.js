import React from "react";
import {navigate} from "@reach/router";


function Bottom(props) {

    const allItems = props.allItems.map((item) =>
        <button
            onClick={() => navigate(`${item.url}`)}
            className="mr-5 focus:outline-none hover:text-gray-700"
            key={item.id}
        >
            { item.name }
        </button>
    );

    return (
        <div className="flex bg-white shadow py-2 px-4">
            { allItems }
        </div>
    );
}


export default Bottom;
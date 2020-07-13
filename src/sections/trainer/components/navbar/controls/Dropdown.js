import React from "react";


function Dropdown(props) {
    if (props.isActive) {
        return (
            <div className="">
                <div
                    className="absolute bg-white shadow-lg rounded py-5 px-3
                    mr-4 mt-2 w-64 z-10 float-right right-0 border-solid border border-gray-300"
                >
                    hi
                </div>
            </div>
        );
    } else {
        return (
            <React.Fragment/>
        );
    }
}


export default Dropdown;
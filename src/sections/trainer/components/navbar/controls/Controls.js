import React, { useState } from "react";
import Sidebar from "./Sidebar";


function Controls() {
    const [dropdownActive, setDropdownActive] = useState(false);
    return (
        <div className="d-flex justify-between">
            <span>
                <button
                    className="px-4 py-1 bg-white text-blue-500 hover:bg-gray-300 font-bold
                    rounded-lg transition
                    ease-in duration-100 text-sm"
                    onClick={() => setDropdownActive(!dropdownActive)}
                >
                    Create
                </button>
                <Sidebar
                    isActive={dropdownActive}
                    deActive={() => setDropdownActive(false)}
                />
            </span>
        </div>
    )
}

export default Controls;
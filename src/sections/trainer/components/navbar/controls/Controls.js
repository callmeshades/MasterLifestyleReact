import React from "react";
import {navigate} from "@reach/router";

function Controls() {
    return (
        <div className="d-flex justify-between">
            <span>
                <button
                    className="px-4 py-1 bg-white text-blue-500 hover:bg-gray-300 font-bold
                    rounded-lg transition
                    ease-in duration-100 text-sm"
                    onClick={() => navigate('/logout')}
                >
                    Logout
                </button>
            </span>
        </div>
    )
}

export default Controls;
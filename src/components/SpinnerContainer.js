import React from "react";
import Spinner from "./Spinner";

function SpinnerContainer() {
    return (
        <div className="flex justify-center bg-white items-center shadow-lg border py-5">
            <Spinner />
        </div>
    )
}

export default SpinnerContainer;
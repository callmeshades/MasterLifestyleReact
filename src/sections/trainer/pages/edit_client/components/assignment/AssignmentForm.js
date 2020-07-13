import React from "react";


function AssignmentForm(props) {
    return (
        <div className="w-full">
            <input type="text"
                   className="border rounded w-full px-3 py-1 focus:shadow-outline"
                   placeholder="Search for a program..."
                   value={props.searchQuery}
                   onChange={props.setSearchQuery}
            />
        </div>
    )
}


export default AssignmentForm;
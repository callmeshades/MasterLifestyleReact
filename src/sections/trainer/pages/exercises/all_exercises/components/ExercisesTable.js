import React from "react";

import ExerciseRow from "./ExerciseRow";


function ExercisesTable(props) {

    const exerciseRows = props.exercises.map((item) =>
        <ExerciseRow
            key={item.id}
            exercise={item}
        />
    );

    return (
        <table className="table-auto w-full">
            <thead className="border border-t-0 border-l-0 border-r-0 border-gray-300 border-solid">
            <tr>
                <th className="text-left px-4 py-4">Name</th>
                <th className="text-left px-4 py-4">Description</th>
                <th className="text-left px-4 py-4">Category</th>
                <th className="text-left px-4 py-4">Equipment</th>
                <th className="text-left px-4 py-4">Last Updated</th>
                <th className="text-left px-4 py-4">Actions</th>
            </tr>
            </thead>
            <tbody>
                { exerciseRows }
            </tbody>
        </table>
    );

}


export default ExercisesTable;
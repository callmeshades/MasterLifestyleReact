import React from "react";

function AddExerciseWindow(props) {


    return (
        <div className="absolute top-0 right-0 bottom-0">
            <div className="flex w-screen h-screen justify-end z-50">
                <div
                    onClick={props.setAddExerciseWindow}
                    className="w-full"
                />
                <div
                    className="w-64 bg-white"
                >
                    Adding exercise
                </div>
            </div>
        </div>
    )
}

export default AddExerciseWindow;
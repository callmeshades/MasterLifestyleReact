import React, {useState} from "react";
import AddExerciseWindow from "../add_exercise_window/AddExerciseWindow";
import ExerciseCard from "../exercise_card/ExerciseCard";

function DayBody(props) {
    const [addExerciseWindow, setAddExerciseWindow] = useState(false);

    return (
        <div className="mt-4 bg-gray-100 border px-2 py-3">
            <div>
                { props.program.exercises && props.program.exercises.map((exercise) =>
                    <ExerciseCard
                        key={exercise.randomId}
                        exercise={exercise}
                        program={props.program}
                        updateDayItem={props.updateDayItem}
                    />
                ) }
            </div>
            <div className="flex w-full justify-center">
                <button
                    onClick={() => setAddExerciseWindow(true)}
                    className="bg-white px-3 py-1 border rounded focus:outline-none focus:shadow-outline"
                >
                    Add Exercise
                </button>
            </div>
            <div>
                {
                    addExerciseWindow ?
                        <AddExerciseWindow
                            setAddExerciseWindow={() => setAddExerciseWindow(false)}
                            dayId={props.program.id}
                        />
                        :
                        ""
                }
            </div>
        </div>
    )
}

export default DayBody;
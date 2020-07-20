import React, {useEffect, useState} from "react";
import ExercisesTable from "./components/ExercisesTable";
import {createBlankExercise, getAlLExercises} from "../../../../../requests/trainers";
import Spinner from "../../../../../components/Spinner";
import {navigate} from "@reach/router";

function AllExercises() {
    const [loading, setLoading] = useState(false);
    const [allExercises, setAllExercises] = useState([]);

    useEffect(() => {
        setLoading(true);
        getAlLExercises().then(data => {
            if (data.success) {
                setAllExercises(data.exercises);
            }
            setLoading(false);
        })
    }, []);

    function createNewExercise() {
        setLoading(true);
        createBlankExercise().then(data => {
            if (data.success) {
                navigate(`/trainers/exercises/${data.id}`);
            }
            setLoading(false);
        })
    }

    if (loading) {
        return (
            <div className="flex justify-center bg-white items-center shadow-lg border py-5">
                <Spinner />
            </div>
        )
    } else {
        return (
            <div>
                <div className="py-2 flex justify-between">
                    <h2 className="text-xl">All Exercises</h2>
                    <button
                        onClick={() => createNewExercise()}
                        className="bg-white hover:bg-gray-100 rounded border focus:outline-none focus:shadow-outline py-1 px-3"
                    >
                        Create Exercise
                    </button>
                </div>
                <div className="bg-white shadow-lg border mt-5 overflow-x-auto">
                    <ExercisesTable
                        exercises={allExercises}
                    />
                </div>
            </div>
        )
    }
}


export default AllExercises;
import React, {useEffect, useState} from "react";
import Spinner from "../../../../../components/Spinner";
import {getSingleExercise} from "../../../../../requests/trainers";
import ExerciseTitle from "./components/ExerciseTitle";
import UpdateCard from "./components/UpdateCard";
import {navigate} from "@reach/router";


function EditExercise(props) {
    const [loading, setLoading] = useState(true);
    const [exercise, setExercise] = useState();

    useEffect(() => {
        setLoading(true);
        getSingleExercise(props.exerciseId).then(data => {
            if (data.success) {
                setExercise(data.exercise);
                setLoading(false);
            } else {
                navigate('/trainers/exercises/');
            }
        });
    }, [props.exerciseId]);


    if (loading) {
        return (
            <div className="flex justify-center bg-white items-center shadow-lg border py-5">
                <Spinner />
            </div>
        )
    } else {
        return (
            <div>
                <div className="py-2 mb-5 flex justify-between">
                    <h2 className="text-xl">Editing Exercise</h2>
                </div>
                <ExerciseTitle
                    exercise={exercise}
                />
                <UpdateCard
                    exercise={exercise}
                />
            </div>
        )
    }
}

export default EditExercise;
import React, {useState} from "react";
import avatar from "../../../../../../assets/img/exercise-avatar.jpg";
import moment from "moment";


function ExerciseTitle(props) {
    const [exerciseDetails] = useState(props.exercise);
    let dateCreated = moment(props.exercise.created).format('MMMM Do YYYY');
    let dateModified = moment(props.exercise.modified).format('MMMM Do YYYY');

    return (
        <div className="flex flex-col md:flex-row shadow bg-white py-4 px-5 justify-start md:justify-between border border-gray-300 border-solid md:items-center">
            <div className="flex justify-start items-center mb-2 md:mb-0">
                <img
                    src={props.exercise.blob.imageUrl ? props.exercise.blob.imageUrl : avatar}
                    className="w-10 h-10 rounded mr-3"
                    alt={`${exerciseDetails.name} Avatar`}
                    onDragStart={(event => event.preventDefault())}
                />
                <span>
                    { exerciseDetails.name }
                </span>
            </div>
            <div className="mb-2 md:mb-0">
                <p>{ exerciseDetails.category }</p>
            </div>
            <div className="mb-2 md:mb-0">
                <p>{ exerciseDetails.equipment }</p>
            </div>
            <div className="mb-2 md:mb-0">
                <p>Modified: {dateModified}</p>
            </div>
            <div className="mb-2 md:mb-0">
                <p>Created: {dateCreated}</p>
            </div>
        </div>
    )
}


export default ExerciseTitle;
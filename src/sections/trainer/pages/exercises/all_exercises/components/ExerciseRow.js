import React, {useEffect, useState} from "react";
import {Edit2} from "react-feather";
import moment from "moment";
import {navigate} from "@reach/router";
import avatar from "../../../../../../assets/img/exercise-avatar.jpg";


function ExerciseRow(props) {
    const [time, setTime] = useState();

    useEffect(() => {
        let dateFormatted = moment(props.exercise.modified).format('MMMM Do YYYY');
        setTime(dateFormatted);
    }, [props.exercise.modified])

    return (
        <tr className="border border-t-0 border-l-0 border-r-0 border-gray-200 hover:bg-gray-100 border-solid items-center">
            <td className="px-4 py-2">
                <span className="flex justify-start items-center">
                    <span>
                        <img src={props.exercise.blob.imageUrl ? props.exercise.blob.imageUrl : avatar}
                             alt={`${props.exercise.name}`}
                             style={{ minWidth: "2.5rem" }}
                             className="w-10 h-10 rounded mr-3 object-fill"
                             onDragStart={event => event.preventDefault()}
                        />
                    </span>
                    <span>
                        {props.exercise.name}
                    </span>
                </span>
            </td>
            <td className="px-4 py-2">{props.exercise.blob.description > 0 ? props.exercise.blob.description : "N/A"}</td>
            <td className="px-4 py-2">{props.exercise.category}</td>
            <td className="px-4 py-2">{props.exercise.equipment}</td>
            <td className="px-4 py-2">{ time }</td>
            <td className="px-4 py-2">
                <div className="flex items-center">
                    <span className="mr-2">
                        <button
                            onClick={() => navigate(`/trainers/exercises/${props.exercise.id}`)}
                            className="bg-white hover:bg-gray-100 rounded border focus:outline-none focus:shadow-outline py-1 px-2"
                        >
                            <Edit2
                                size={15}
                            />
                        </button>
                    </span>
                    {/*<span>*/}
                    {/*    <button*/}
                    {/*        className="bg-white hover:bg-gray-100 rounded border focus:outline-none focus:shadow-outline py-1 px-2"*/}
                    {/*    >*/}
                    {/*        <X*/}
                    {/*            size={15}*/}
                    {/*        />*/}
                    {/*    </button>*/}
                    {/*</span>*/}
                </div>
            </td>
        </tr>
    )
}


export default ExerciseRow;
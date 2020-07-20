import React from "react";
import DayItem from "./DayItem";


function DayBody(props) {
    const dayItems = props.day.exercises.map((item, index) =>
        <div key={item.id}>
            <DayItem
                exercise={item}
                exerciseIndex={index}
                dayIndex={props.dayIndex}
                weekId={props.weekId}
            />
        </div>
    )

    return (
        <div>
            {dayItems}
        </div>
    )
}


export default DayBody;
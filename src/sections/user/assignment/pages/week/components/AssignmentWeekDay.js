import React, {useState} from "react";
import WeekTitle from "./WeekTitle";
import DayBody from "./day_body/DayBody";

function AssignmentWeekDay(props) {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="bg-white border shadow py-4 px-3 container mx-auto my-3">
            <WeekTitle
                setExpanded={() => setExpanded(!expanded)}
                expanded={expanded}
                day={props.day}
            />
            {
                expanded ?
                    <DayBody
                        day={props.day}
                        dayIndex={props.dayIndex}
                        weekId={props.weekId}
                    />
                    :
                    ""
            }
        </div>
    )
}

export default AssignmentWeekDay;
import React, {useState} from "react";
import DayTitle from "./components/day_title/DayTitle";
import DayBody from "./components/day_body/DayBody";


function ProgramDay(props) {
    const [expanded, setExpanded] = useState(true);
    return (
        <div className="bg-white border shadow py-4 px-3">
            <DayTitle
                program={props.program}
                expanded={expanded}
                updateDayItem={props.updateDayItem}
                setExpanded={() => setExpanded(!expanded)}
            />
            {
                expanded ?
                    <DayBody
                        program={props.program}
                        updateDayItem={props.updateDayItem}
                    />
                    :
                    ""
            }
        </div>
    )
}


export default ProgramDay;
import React from "react";
import {ChevronDown, ChevronUp} from "react-feather";

function WeekTitle(props) {
    return (
        <div className="flex justify-between items-center border-b pb-3 mb-2">
            <div>
                <p
                    className="text-black font-semibold mr-2">
                    { props.day.title }
                </p>
            </div>
            <div>
                <button
                    onClick={props.setExpanded}
                    className="bg-white hover:bg-gray-100 rounded border focus:outline-none focus:shadow-outline text-white font-semibold px-2 py-1 mr-2">
                    {
                        props.expanded ?
                            <ChevronUp
                                className="text-black"
                                size={14}
                            />
                            :
                            <ChevronDown
                                className="text-black"
                                size={14}
                            />
                    }
                </button>
            </div>
        </div>
    )
}

export default WeekTitle;
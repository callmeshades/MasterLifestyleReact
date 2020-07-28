import React from "react";
import { Trash2, ChevronUp, ChevronDown } from "react-feather";
import Name from "./name/Name";
import ProgramContext from '../../../../../../../../../context/program-context';


function DayTitle(props) {
    return (
        <ProgramContext.Consumer>
            {context => (
                <div className="flex justify-between items-center border-b pb-3">
                    <div>
                        <Name
                            updateDayItem={props.updateDayItem}
                            program={props.program}
                        />
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
                        {/*<button*/}
                        {/*    className="bg-white hover:bg-gray-100 rounded border focus:outline-none focus:shadow-outline text-white font-semibold px-2 py-1 mr-2">*/}
                        {/*    <Copy*/}
                        {/*        className="text-black"*/}
                        {/*        size={14}*/}
                        {/*    />*/}
                        {/*</button>*/}
                        <button
                            onClick={() => context.removeDay(props.program.id)}
                            className="bg-white hover:bg-gray-100 rounded border focus:outline-none focus:shadow-outline text-white font-semibold px-2 py-1">
                            <Trash2
                                className="text-black"
                                size={14}
                            />
                        </button>
                    </div>
                </div>
            )}
        </ProgramContext.Consumer>
    )
}


export default DayTitle;
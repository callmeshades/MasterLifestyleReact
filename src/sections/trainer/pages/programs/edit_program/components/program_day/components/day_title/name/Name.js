import React, {useState} from "react";
import {Edit2, Check} from "react-feather";
import ProgramContext from '../../../../../../../../../../context/program-context';


function Name(props) {
    const [editable, setEditable] = useState(false);

    if (!editable) {
        return (
            <div className="flex justify-start items-center">
                <p
                    className="text-black font-semibold mr-2">
                    { props.program.title }
                </p>
                <button
                    onClick={() => setEditable(true)}
                    className="focus:outline-none"
                >
                    <Edit2
                        size={14}
                    />
                </button>
            </div>
        )
    } else {
        return (
            <ProgramContext.Consumer>
                {context => (
                    <div className="flex justify-start items-center">
                        <input type="text"
                            value={props.program.title}
                            onChange={(event => context.updateDayTitle(props.program.id, event.target.value))}
                            className="bg-white border px-2 py-1 focus:shadow-outline"
                        />
                        <button
                            onClick={() => setEditable(false)}
                            className="ml-2 focus:outline-none"
                        >
                            <Check
                                size={14}
                            />
                        </button>
                    </div>
                )}
            </ProgramContext.Consumer>
        )
    }


}

export default Name;
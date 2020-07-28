import React from "react";
import ProgramTitle from "./program_title/ProgramTitle";
import ProgramDay from "./program_day/ProgramDay";
import ProgramContext from '../../../../../../context/program-context';



function ProgramContainer(props) {
    return (
        <ProgramContext.Consumer>
            {context => (
                <div className="flex overflow-hidden">
                    <div className="h-100 w-full">
                        <ProgramTitle
                            program={context.program}
                            programId={props.programId}
                            setLoading={props.setLoading}
                        />
                        { context.program.modules && context.program.modules.map(item =>
                            <div
                                key={item.id}
                                className="mt-8">
                                <ProgramDay
                                    program={item}
                                />
                            </div>
                        ) }
                    </div>
                </div>
            )}
        </ProgramContext.Consumer>
    )
}

export default ProgramContainer;
import React from "react";
import ProgramTitle from "./program_title/ProgramTitle";
import ProgramDay from "./program_day/ProgramDay";



function ProgramContainer(props) {

    return (
        <div className="flex overflow-hidden">
            <div className="h-100 w-full">
                <ProgramTitle
                    program={props.program}
                    programId={props.programId}
                    setLoading={props.setLoading}
                />
                { props.program.modules && props.program.modules.map(item =>
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
    )
}

export default ProgramContainer;
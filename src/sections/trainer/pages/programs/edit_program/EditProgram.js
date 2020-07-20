import React, {useEffect, useState} from "react";
import {getProgramDetails} from "../../../../../requests/trainers";
import SpinnerContainer from "../../../../../components/SpinnerContainer";
import {navigate} from "@reach/router";
import ProgramContainer from "./components/ProgramContainer";
import {useStoreActions, useStoreState} from "easy-peasy";


function EditProgram(props) {
    const [loading, setLoading] = useState(false);
    const program = useStoreState(state => state.program.item);
    const loadProgram = useStoreActions(actions => actions.program.loadDay);

    useEffect(() => {
        setLoading(true);
        getProgramDetails(props.programId)
            .then(data => {
                if (data.success) {
                    loadProgram({ value: data.blob });
                } else {
                    navigate('/trainers/programs');
                }
                setLoading(false);
            })
    }, [loadProgram, props.programId]);

    if (loading) {
        return (
            <div>
                <div className="py-2">
                    <h2 className="text-xl">Editing Program</h2>
                </div>
                <div>
                    <SpinnerContainer/>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="py-2">
                    <h2 className="text-xl">Editing Program</h2>
                </div>
                <div className="">
                    <ProgramContainer
                        programId={props.programId}
                        program={program}
                        setLoading={setLoading}
                    />
                </div>
            </div>
        )
    }

}


export default EditProgram;
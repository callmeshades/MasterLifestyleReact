import React from 'react'
import { useStoreState } from 'easy-peasy';
import ProgramWeekRow from "./components/ProgramWeekRow";

export default function AssignmentHome() {
    const assignmentState = useStoreState(state => state.assignment.item);

    const programWeeks = assignmentState.weeks.map((item) => 
        <div key={item.id}>
            <ProgramWeekRow
                week={item}
            />
        </div>
    );

    return (
        <div>
            { programWeeks }
        </div>
    )
}

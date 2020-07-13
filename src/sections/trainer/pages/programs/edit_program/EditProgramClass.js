import React, {Component} from 'react';
import {getProgramDetails} from "../../../../../requests/trainers";
import {navigate} from "@reach/router";
import SpinnerContainer from "../../../../../components/SpinnerContainer";
import {v4 as uuid} from 'uuid';
import ProgramContainer from "./components/ProgramContainer";


// Class was created due to hooks not properly updating the state
class EditProgramClass extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.setProgram = this.setProgram.bind(this);
        this.addDay = this.addDay.bind(this);
        this.removeDay = this.removeDay.bind(this);
        this.updateDayItem = this.updateDayItem.bind(this);

        // Update Day & Exercise Functions
        // Custom event handler to avoid passing props
        this.updateDayTitle = this.updateDayTitle.bind(this);
        this.updateDayExercise = this.updateDayExercise.bind(this);


        this.state = {
            loading: false,
            program: {}
        }
    }


    componentDidMount() {
        this.setLoading(true);
        getProgramDetails(this.props.programId)
            .then(data => {
                if (data.success) {
                    this.setProgram(data.blob);
                } else {
                    navigate('/trainers/programs');
                }
                this.setLoading(false);
            })
    }

    setLoading(loadingState) {
        this.setState({ loading: loadingState });
    }

    setProgram(programState) {
        this.setState({ program: programState });
    }

    addDay() {
        let temp_program = this.state.program;
        // Generate the ID & Day for this program based off the others
        // const blank_day needs to be in the function or the ID is not properly
        // generated and the state lags behind
        const blank_day = {
            day: 0,
            editable: false,
            exercises: [],
            id: uuid(),
            title: 'Blank Day'
        };
        temp_program.modules.push(blank_day);
        this.setProgram(temp_program);
    }

    removeDay(day_id) {
        let temp_program = this.state.program;
        const day_index = temp_program.modules.findIndex(item => item.id === day_id);
        temp_program.modules.splice(day_index, 1);
        this.setProgram(temp_program);
    }

    updateDayItem(change_item, day_id, new_value) {
        switch (change_item) {
            case 'title':
                this.updateDayTitle(day_id, new_value);
                break;
            case 'delete':
                this.removeDay(day_id);
                break;
            case 'update_exercise':
                if (new_value.exercise_id) {
                    this.updateDayExercise(day_id, new_value);
                }
                break;
            default:
                console.log('Could not find the event to fire for updating the day item');
                break;
        }
    }

    updateDayTitle(day_id, new_value) {
        const day_index = this.state.program.modules.findIndex(item => item.id === day_id);
        let temp_state = this.state.program;
        temp_state.modules[day_index].title = new_value;
        this.setProgram(temp_state);
    }

    updateDayExercise(day_id, exercise_values) {
        // Find and narrow down the day and then the exercise index of what we're trying to update
        const day_index = this.state.program.modules.findIndex(item => item.id === day_id);
        const exercise_index = this.state.program.modules[day_index].exercises.findIndex(item => item.id === exercise_values);
        // Create the temporary state and then update it
        let temp_state = this.state.program;
        if (exercise_values.reps) {
            temp_state.modules[day_index].exercises[exercise_index].reps = exercise_values.reps;
        }
        if (exercise_values.sets) {
            temp_state.modules[day_index].exercises[exercise_index].sets = exercise_values.sets;
        }
        if (exercise_values.rir) {
            temp_state.modules[day_index].exercises[exercise_index].rir = exercise_values.rir;
        }
        this.setProgram(temp_state);
    }


    render() {
        return (
            <div>
                <div className="py-2">
                    <h2 className="text-xl">Editing Program</h2>
                </div>
                <div>
                    {
                        this.state.loading ?
                            <SpinnerContainer/>
                            :
                            <ProgramContainer
                                program={this.state.program}
                                addDay={this.addDay}
                                updateDayItem={this.updateDayItem}
                            />
                    }

                </div>
            </div>
        )
    }
}

export default EditProgramClass;
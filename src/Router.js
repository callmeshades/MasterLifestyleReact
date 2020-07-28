import React, {useEffect} from "react";
import { Router, navigate } from '@reach/router';
import Login from "./sections/login/Login";
import Logout from "./sections/logout/Logout";

// Trainers section
import Trainers from "./sections/trainer/Trainers";
import AllClients from "./sections/trainer/pages/all_clients/AllClients";
import EditClient from "./sections/trainer/pages/edit_client/EditClient";
import AllPrograms from "./sections/trainer/pages/programs/all_programs/AllPrograms";
import EditProgram from "./sections/trainer/pages/programs/edit_program/EditProgram";
import AllExercises from "./sections/trainer/pages/exercises/all_exercises/AllExercises";
import EditExercise from "./sections/trainer/pages/exercises/edit_exercise/EditExercise";


// Users section
import Users from "./sections/user/Users";
import Assignment from "./sections/user/assignment/Assignment";
import AssignmentHome from './sections/user/assignment/pages/home/AssignmentHome';
import AssignmentWeek from "./sections/user/assignment/pages/week/AssignmentWeek";

const Home = () => {
    return (
        <div>
            <p className="font-semibold text-2xl">Home page!</p>
        </div>
    )
};
const CatchAll = () => {
    return (
        <div>Error 404!</div>
    )
};

const RedirectToLogin = () => {
    useEffect(() => {
        navigate('/login');
    }, [])
    return (
        <div></div>
    )
}


function MyRouter() {
    return (
        <Router>
            <RedirectToLogin path="/" />
            <Trainers path="/trainers">
                <Home path="/" />
                <AllClients path="/clients" />
                <EditClient path="/clients/:clientId" />
                <AllPrograms path="/programs" />
                <EditProgram path="/programs/:programId" />
                <AllExercises path="/exercises" />
                <EditExercise path="/exercises/:exerciseId" />
                <CatchAll path="*" />
            </Trainers>
            <Users path="/users">
                <Assignment path="/">
                    <AssignmentHome path="/"/>
                    <AssignmentWeek path="/assignment/week/:weekId"/>
                </Assignment>
            </Users>
            <Login path="/login" />
            <Logout path="/logout" />
        </Router>
    )
}


export default MyRouter;
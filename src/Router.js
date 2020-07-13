import React from "react";
import { Router } from '@reach/router';
import Login from "./sections/login/Login";
import Trainers from "./sections/trainer/Trainers";
import AllClients from "./sections/trainer/pages/all_clients/AllClients";
import EditClient from "./sections/trainer/pages/edit_client/EditClient";
import AllPrograms from "./sections/trainer/pages/programs/all_programs/AllPrograms";
import EditProgram from "./sections/trainer/pages/programs/edit_program/EditProgram";



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


function MyRouter() {
    return (
        <Router>
            <Trainers path="/trainers">
                <Home path="/" />
                <AllClients path="/clients" />
                <EditClient path="/clients/:clientId" />
                <AllPrograms path="/programs" />
                <EditProgram path="/programs/:programId" />
                <CatchAll path="*" />
            </Trainers>
            <Login path="/login" />
        </Router>
    )
}


export default MyRouter;
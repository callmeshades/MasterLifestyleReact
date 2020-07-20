import React, {useEffect} from "react";
import {userLogout} from "../../requests/authentication";
import {navigate} from "@reach/router";
import Spinner from "../../components/Spinner";


function Logout() {

    useEffect(() => {
        userLogout().then(() => {
            navigate('/login');
        });
    }, []);

    return (
        <div>
            <Spinner/>
        </div>
    )
}

export default Logout;
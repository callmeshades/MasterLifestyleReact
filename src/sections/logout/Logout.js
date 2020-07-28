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
        <div className="bg-gray-100 h-screen flex items-center">
            <div className="container mx-auto">
                <p className="font-semibold text-gray-700 mb-2 text-center">Please wait...</p>
                <Spinner/>
            </div>
        </div>
    )
}

export default Logout;
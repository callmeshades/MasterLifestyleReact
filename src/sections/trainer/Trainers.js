import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { navigate } from "@reach/router";
import { checkUserAuth } from '../../requests/authentication';
import Spinner from "../../components/Spinner";



function Trainers(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const response = checkUserAuth();
        response.then(data => {
            if (!data.authed) {
                navigate('/login');
            } else {
                setLoading(false);
            }
        })
    }, []);


    return (
        <div className="dashboard-wrapper bg-gray-100 h-screen flex">
            <div className="h-full w-full bg-gray-100">
                <Navbar/>
                <div className="mt-10 bg-gray-100">
                    <div className="container w-80 mx-auto">
                        {
                            loading ?
                                <div className="flex mt-20 items-center">
                                    <Spinner/>
                                </div>
                                :
                                props.children
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Trainers;
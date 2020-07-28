import React, {useEffect, useState} from "react";
import {checkForUserGroup, checkUserAuth} from "../../requests/authentication";
import {navigate} from "@reach/router";
import Navbar from './components/Navbar';
import Spinner from "../../components/Spinner";


function Users(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const response = checkUserAuth()
        response.then(data => {
            if (!data.authed) {
                navigate('/login');
            }
        }).then(() => {
            checkForUserGroup().then(data => {
                if (data.success) {
                    setLoading(false);
                } else {
                    navigate('/logout');
                }
            })
        })
    }, []);

    return (
        <div className="bg-gray-100 h-screen flex">
            <div className="h-full w-full bg-gray-100">
                <Navbar/>
                <div>
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
    )
}


export default Users;
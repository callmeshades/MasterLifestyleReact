import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { navigate } from "@reach/router";
import {checkForTrainerGroup, checkUserAuth, getUserData} from '../../requests/authentication';
import Spinner from "../../components/Spinner";
import Sidebar from "./components/sidebar/Sidebar";
import Swal from "sweetalert2";



function Trainers(props) {
    const [loading, setLoading] = useState(true);
    const [sidebarActive, setSidebarActive] = useState(true);
    const [userData, setUserData] = useState('');

    useEffect(() => {
        setLoading(true);
        const response = checkUserAuth();
        response.then(data => {
            if (!data.authed) {
                navigate('/login');
            }
        }).then(() => {
            checkForTrainerGroup().then(data => {
                if (data.success) {
                    // pass
                } else {
                    navigate('/users');
                }
            }).then(() => {
                getUserData().then(data => {
                    if (data.success) {
                        setUserData(data.user);
                        setLoading(false);
                    } else {
                        Swal.fire('Uh-oh!', 'We couldn\'t fetch your account information!', 'error');
                    }
                })
            })
        })
    }, []);

    return (
        <div className="dashboard-wrapper bg-gray-100 h-screen flex">
            <div className="h-full w-full bg-gray-100">
                <Navbar/>
                <div className="flex bg-gray-100">
                    { sidebarActive && <Sidebar userData={userData} /> }
                    <div className="mt-10">
                        <div className="container w-80 mx-auto">
                            { loading ? <Spinner/> : props.children }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Trainers;
import React, { useState } from 'react';
import Form from "./components/form";
import { userLogin } from "../../requests/authentication";
import {navigate} from "@reach/router";
import Logo from "../../components/Logo";
import Swal from 'sweetalert2';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function captureForm(event) {
        event.preventDefault();
        setLoading(true);
        userLogin(username, password).then(data => {
            if (data.success) {
                data.is_trainer ? navigate('/trainers') : navigate('/users');
            } else {
                Swal.fire('Whoops!', data.message, 'error');
                clearState();
                setLoading(false);
            }
        })
    }

    function clearState() {
        setUsername('');
        setPassword('');
    }

    return (
        <div className="flex md:flex-row justify-between h-screen">
            <div className="bg-white w-full h-full flex items-center border-r shadow-lg">
                <div className="container mx-auto pl-5 pr-5">
                    <div className="mb-3 flex justify-center items-center">
                        <Logo fillColor={"#718096"} />
                        <h3 className="text-2xl font-semibold text-gray-600 ml-3">Login</h3>
                    </div>
                    <Form
                        username={username}
                        password={password}
                        loading={loading}
                        setUsername={(e) => setUsername(e)}
                        setPassword={(e) => setPassword(e)}
                        captureForm={captureForm}
                    />
                </div>
            </div>
            <div className="bg-white hidden md:block w-full h-screen">
                <div className="bg-cover bg-center w-full h-full" 
                    style={
                        { 
                            background: "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.45)), url(https://pixabay.com/get/57e8d2424c51ad14f6d1867dda35367b1c3ad9e45158784d_1920.jpg) no-repeat top center"}
                        } />
            </div>
        </div>
    );

}

export default Login;
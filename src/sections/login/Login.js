import React, { useState } from 'react';
import Form from "./components/form";
import { userLogin } from "../../requests/authentication";
import {navigate} from "@reach/router";
import Logo from "../../components/Logo";


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
        <div className="bg-gray-100">
            <div className="container mx-auto items-center flex h-screen">
                <div className="w-full">
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
        </div>
    );

}

export default Login;
import React from 'react';
import Spinner from "../../../../components/Spinner";

function Form(props) {
    return(
        <div className="bg-white shadow-xl border border-solid border-gray-300 px-8 py-10">
            {
                props.loading ?
                    <Spinner/> :
                    <form onSubmit={event => props.captureForm(event)}>
                        <div className="pb-4">
                            <label htmlFor="username" className="block text-gray-600 font-bold mb-2">Username</label>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                   placeholder="Username..."
                                   id="username"
                                   required
                                   value={props.username}
                                   onChange={event => props.setUsername(event.target.value)}
                            />
                        </div>
                        <div className="pb-4">
                            <label htmlFor="password" className="block text-gray-600 font-bold mb-2">Password</label>
                            <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                   placeholder="Password..."
                                   id="password"
                                   required
                                   value={props.password}
                                   onChange={event => props.setPassword(event.target.value)}
                            />
                        </div>
                        <div>
                            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign in</button>
                        </div>
                    </form>
            }
        </div>
    )
}

export default Form;
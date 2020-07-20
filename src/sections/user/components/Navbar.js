import React from 'react'
import Logo from '../../../components/Logo';
import {navigate} from "@reach/router";

export default function Navbar() {
    return (
        <div>
            <header
                className="w-full flex justify-between px-2 py-2 bg-blue-700">
                    <div>
                        <Logo fillColor="white" />
                    </div>
                    <div>
                        <button
                            onClick={() => navigate('/logout')}
                            className="px-2 py-1 rounded bg-white font-semibold text-blue-700 focus:shadow-outline focus:outline-none"
                        >
                            Logout
                        </button>
                    </div>
            </header>
            <div className="w-full px-3 py-1 border-b shadow bg-white">
                <div>
                    <button
                    onClick={() => navigate('/users')}
                    className="focus:outline-none hover:text-gray-700">
                        Home
                    </button>
                </div>
            </div>
        </div>
    )
}

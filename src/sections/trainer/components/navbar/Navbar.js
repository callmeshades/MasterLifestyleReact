import React from "react";
import Logo from "../../../../components/Logo";
import Controls from "./controls/Controls";
import Bottom from "./Bottom";


const navItems = [
    {
        id: 1,
        name: 'Clients',
        url: '/trainers/clients'
    },
    {
        id: 2,
        name: 'Programs',
        url: '/trainers/programs'
    }
]

function Navbar() {
    return (
        <div>
            <header
                className="flex items-center py-3 px-5 justify-between bg-blue-500"
            >
                <div>
                    <Logo fillColor="white" />
                </div>
                <div>
                    <Controls/>
                </div>
            </header>

            <Bottom
                allItems={navItems}
            />
        </div>
    );
}


export default Navbar;
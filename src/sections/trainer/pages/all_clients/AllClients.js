import React from "react";
import AllClientsTable from "./components/AllClientsTable";


function AllClients() {
    return (
        <div>
            <div className="py-2">
                <h2 className="text-xl">All Clients</h2>
            </div>

            <AllClientsTable/>
        </div>
    );
}

export default AllClients;
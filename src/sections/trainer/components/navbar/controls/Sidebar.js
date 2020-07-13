import React from "react";


function Sidebar(props) {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-20 transition ease-in-out duration-300"
            style={{ display: props.isActive ? 'block' : 'none' }}
        >
            <div className="flex h-full">
                <div className="w-full"
                     onClick={() => props.deActive()}
                />
                <div className="bg-white p-4" style={{ width: "375px" }}>
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-semibold">Create Items</p>
                        <button className="text-2xl" onClick={() => props.deActive()}>
                            &times;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sidebar;
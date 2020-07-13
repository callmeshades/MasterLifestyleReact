import React from "react";


const my_colours = [
    '#1A202C',
    '#2D3748',
    '#C53030',
    '#F56565',
    '#F6AD55',
    '#ED8936',
    '#F6E05E',
    '#ECC94B',
    '#68D391',
    '#48BB78',
    '#81E6D9',
    '#FBD38D',
    '#4FD1C5',
    '#63B3ED',
    '#3182CE',
    '#4C51BF',
    '#9F7AEA',
    '#D53F8C',
    '#ED64A6',
    '#FED7D7',
    '#A0AEC0'
];

function generateColour() {
    return my_colours[Math.floor(Math.random() * my_colours.length)];
}


function Spinner() {
    return (
        <div className="flex w-full justify-center">
            <div
                className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"
                style={{ borderTopColor: generateColour() }}
            />
        </div>
    );
}


export default Spinner;
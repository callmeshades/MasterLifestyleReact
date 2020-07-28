import React from "react";
import defaultAvatar from '../../../../../../assets/img/blank-avatar.png';

export default function Avatar(props) {
    return (
        <div className="flex items-center justify-center">
            <img
                src={defaultAvatar} alt={props.fullName + 'Avatar'}
                className="w-8 h-8 rounded-full mr-2" />
            <p className="font-semibold text-gray-700">{props.fullName}</p>
        </div>
    );
}
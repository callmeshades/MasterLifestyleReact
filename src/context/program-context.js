import React from 'react';

export default React.createContext({
    program: {
        name: "",
        notes: [],
        modules: [],
        description: "",
        requiresGym: false,
        requiresEquipment: false
    },
    addDay: day => {}
});


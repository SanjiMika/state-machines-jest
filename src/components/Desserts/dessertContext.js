import React from 'react';

const initialState = {
    state: 'view',
    context: {},
    send: () => {},
    can: () => {}
}

export const MachineContext = React.createContext(initialState);
import React from 'react';

const initialState = {
    state: 'view',
    context: {},
    send: () => {},
    can: () => {}
}

export const DessertContext = React.createContext(initialState);
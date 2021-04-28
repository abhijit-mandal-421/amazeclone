import React, { createContext, useContext, useReducer} from 'react';


// Creating a context i.e, a memory storage
export const StateContext = createContext();

// Providing a context i.e, a memory storage to make it accesible
export const GlobalState = ({reducer,initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


// export const useStateValue = () => useContext(StateContext);
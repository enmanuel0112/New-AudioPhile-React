import React from 'react';
import { contextComponents } from './contextComponents';
import '../scss/staticsComponents/stateComponents.scss'


const StateComponents = ({ children }) => {


    return (
        <contextComponents.Provider
            value={{

            }}
        >
            {children}
        </contextComponents.Provider>
    )
}


export default StateComponents
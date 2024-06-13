import React from 'react';
import { contextComponents } from './contextComponents';
// import Home from '../components/home';
// import Earphones from '../components/earphones';
// import Headphones from '../components/headphones';
// import Speakers from '../components/speakers';
// import data from '../data.json';


const StateComponents = ({ children }) => {


    // // HEADPONES

    // const XX99MarkI = () => {

    //     return (
    //         <div>
    //             <p>Name: {data[2].name}</p>
    //             <p>Price: {data[2].price}</p>
    //         </div>
    //     )

    // }
    // const XX59MarkII = () => {
    //     setProducts(product => product = dataJson[3])
    // }

    // const XX59 = () => {
    //     setProducts(product => product = dataJson[1])
    // }

    // // SPEAKERS

    // const Zx9Spearker = () => {
    //     setProducts(product => product = dataJson[5])
    // }

    // const Zx7Speakers = () => {
    //     setProducts(product => product = dataJson[4])
    // }

    // // HEADPHONES

    // const YX1Wireless = () => {
    //     setProducts(product => product = dataJson[0])
    // }

    return (
        <contextComponents.Provider
            value={{
                // currrentComponent,
                // home,
                // earphones,
                // headphones,
                // speakers,
                // XX99MarkI,
                // XX59MarkII,
                // XX59,
                // Zx9Spearker,
                // Zx7Speakers,
                // YX1Wireless

            }}
        >
            {children}
        </contextComponents.Provider>
    )
}


export default StateComponents
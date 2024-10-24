import React, { useState } from 'react';
import { contextComponents } from './contextComponents';
import '../scss/staticsComponents/stateComponents.scss';
import appFirebase, { db } from '../credentials.js/credentials';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase);


const StateComponents = ({ children }) => {


    //Cart 
    let cartProduct = []
    const [amount, setAmount] = useState(1);
    // const addingAmount = () => {
    //     setAmount(amount + 1)
    // }

    // const resAmount = () => {
    //     if (amount === 0) {
    //         return 1
    //     }
    //     if (amount > 1) {
    //         return setAmount(amount - 1)
    //     } else {
    //         return amount
    //     }

    // }

    function addProductToCart(item) {
        const addProduct = {
            image: item.image.mobile,
            price: item.price,
            name: item.nameCart,
            quantity: amount,
            id: item.id
        }


        const exist = cartProduct.some(product => product.id === addProduct.id);

        if (exist) {
            cartProduct.map(product => {
                if (product.id === addProduct.id) {
                    product.quantity++
                    return product
                } else {
                    return product
                }
            })
        } else {

            cartProduct.push(addProduct)

        }

    }

    // Login
    const [user, setUser] = useState(null)

    onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
            setUser(firebaseUser);
        } else {
            setUser(null);
        }

    })
    console.log(user)
    function signOutFromLogin() {
        return signOut(auth);
    }

    //Form


    //CheckOut

    const [eMoneyIsString, setEMoneyIsString] = useState(null);
    console.log('verifica y convierte', eMoneyIsString)
    return (
        <contextComponents.Provider
            value={{
                amount,
                // addingAmount,
                // resAmount,
                addProductToCart,
                cartProduct,
                user,
                auth,
                signOutFromLogin,
                db,
                eMoneyIsString,
                setEMoneyIsString
            }}
        >
            {children}
        </contextComponents.Provider>
    )
}


export default StateComponents
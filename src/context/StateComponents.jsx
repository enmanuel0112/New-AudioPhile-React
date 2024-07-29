import React, { useState } from 'react';
import { contextComponents } from './contextComponents';
import '../scss/staticsComponents/stateComponents.scss'


const StateComponents = ({ children }) => {

    let cartProduct = []

    const [amount, setAmount] = useState(1);

    const addingAmount = () => {
        setAmount(amount + 1)
    }

    const resAmount = () => {
        if (amount === 0) {
            return 1
        }
        if (amount > 1) {
            return setAmount(amount - 1)
        } else {
            return amount
        }

    }

    function trying(item) {
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

    return (
        <contextComponents.Provider
            value={{
                amount,
                addingAmount,
                resAmount,
                trying,
                cartProduct,

            }}
        >
            {children}
        </contextComponents.Provider>
    )
}


export default StateComponents
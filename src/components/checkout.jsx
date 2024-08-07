import React, { useContext, useEffect, useState } from 'react'
import { contextComponents } from '../context/contextComponents';
import { Header, Footer, Loader } from './staticsComponents';
import { Form } from './login';
import '../scss/StylesComponents/checkout.scss';


function Checkout() {
    const { amount, cartProduct } = useContext(contextComponents);

    let total = 0;
    let shipping = 50;
    let grandTotal = 0;
    let vat = 0;
    return (
        <>
            <Header />

            <div className="main-checkout">
                <div className="checkout">
                    <div className="checkout-container">
                        <h2>checkout</h2>

                        <form action="">
                            <div className="billing-details">
                                <h3>billing details</h3>
                                <div className="billing-details-content">
                                    <label htmlFor="">
                                        <span>Name</span>
                                        <input type="text" placeholder='Name' />
                                    </label>
                                    <label htmlFor="">
                                        <span>Email Address</span>
                                        <input type="text" placeholder='example@example.com' />
                                    </label>

                                    <label htmlFor="">
                                        <span>Phone Number</span>
                                        <input type="number" placeholder='+1 202-555-0136' />
                                    </label>
                                </div>

                            </div>

                            <div className="shipping-info">
                                <h3>shipping info</h3>
                                <label htmlFor="">
                                    <span>Address</span>
                                    <input type="text" placeholder='Address' className='input-address' />
                                </label>
                                <div className="shipping-input">
                                    <label htmlFor="">
                                        <span>ZIP Code</span>
                                        <input type="number" placeholder='Zip Code' />
                                    </label>

                                    <label htmlFor="">
                                        <span>City</span>
                                        <input type="text" placeholder='City' />
                                    </label>
                                </div>

                                <label htmlFor="">
                                    <span>Country</span>
                                    <input type="text" placeholder='Unite States' className='country-input' />
                                </label>


                            </div>

                            <div className="payment-details">
                                <h3>payment details</h3>

                                <div className="payment-details-content">
                                    <p className='payment-parraf'>Payment Method</p>
                                    <div className="payment-method">
                                        <label htmlFor="">
                                            <input type="radio" />
                                            <p>e-Money</p>
                                        </label>

                                        <label htmlFor="">
                                            <input type="radio" />
                                            <p>Cash on Delivery</p>
                                        </label>
                                    </div>
                                </div>

                                <div className="e-money">
                                    <label htmlFor="">
                                        <span>e-Money Number</span>
                                        <input type="number" />
                                    </label>

                                    <label htmlFor="" >
                                        <span> e-Money PIN</span>
                                        <input type="number" />
                                    </label>


                                </div>


                            </div>

                        </form>
                    </div>

                    <div className="cart-summary">
                        <div className="cart-summary-container">
                            <h2>summary</h2>
                            <div className="cart-summary-content">
                                {
                                    cartProduct.map(items => {

                                        let totalPrice = items.price;

                                        let totalQuantity = items.quantity;

                                        total = total + totalQuantity * totalPrice;

                                        vat = (total * 10) / 100;

                                        grandTotal = total + shipping;
                                        return (<>
                                            <div className="cart-summary-info">
                                                <div className="cart-summary-content">
                                                    <img className='img-summary' src={items.image} alt="" />

                                                    <div className="product-info">
                                                        <p className='product-name'>{items.name}</p>
                                                        <p className='product-price'>$ {items.price}</p>
                                                    </div>
                                                </div>
                                                <div className="product-summary-amount">
                                                    <p> x {items.quantity}</p>
                                                </div>
                                            </div>
                                        </>)
                                    })
                                }
                            </div>



                            <div className="total">
                                <p>total</p>
                                <p className='price'>${total}</p>
                            </div>
                            <div className="total">
                                <p >shipping</p>
                                <p className='price'>$50</p>
                            </div>
                            <div className="total">
                                <p>vat (included)</p>
                                <p className='price'>${vat}</p>
                            </div>

                            <div className="total">
                                <p>grand total</p>
                                <p className='price-total'>${grandTotal}</p>
                            </div>
                            <div className="btn">
                                <button className="btn-default-1">continue & pay</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

function UserAuthenticated() {
    const { user } = useContext(contextComponents);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simular una llamada asincrónica, por ejemplo, para verificar la autenticación
        const timer = setTimeout(() => {
            setLoading(false); // Cambia el estado a 'false' después de la carga
        }, 2000); // Ajusta el tiempo de carga según sea necesario

        return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }, []);

    if (loading) {
        return <Loader />; // Muestra el componente de carga mientras el estado de carga es 'true'
    }
    return (
        <>
            {user ? <Checkout /> : <Form />}
        </>
    )

}
export default UserAuthenticated
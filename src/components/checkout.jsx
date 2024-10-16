import React, { useContext, useEffect, useState, } from 'react'
import { contextComponents } from '../context/contextComponents';
import { Header, Footer, Loader } from './staticsComponents';
import { Form } from './login';
import { useForm } from "react-hook-form";
import { collection, addDoc, getDocs } from "firebase/firestore";
import '../scss/StylesComponents/checkout.scss';


function Checkout() {
    //hooks 
    const { db, cartProduct } = useContext(contextComponents);
    const { orderId, setOrderId } = useState([]);
    const [paymentMethodEmoney, setPaymentMethodEmoney] = useState('');
    

    let total = 0;
    let shipping = 50;
    let grandTotal = 0;
    let vat = 0;

    const {
        register,
        handleSubmit,
        formState: { errors }

    } = useForm()

    //functions

    const onSubmit = async (data) => {

        const orderInfo = {
            clientInfo: {
                name: data.name,
                email: data.email,
                number: data.number,
                shippingAddress: data.address,
                Country: data.country,
                ZidCode: data.zipcode,
                City: data.city,
            },
            cartProduct: cartProduct
        }
        try {
            const docRef = await addDoc(collection(db, "orders"), {
                orderInfo
            })

            const gettingData = await getDocs(collection(db, "orders"));

            gettingData.forEach((doc) => {

                
            })

            setOrderId(orderInfo);
        

        } catch (error) {
            console.log(error)
        }




    }

    function handlerPayment  (emoney) {
        setPaymentMethodEmoney(emoney.target.value);
     
    }

    console.log('1', paymentMethodEmoney)
   


    return (
        <>
            <Header />

            <div className="main-checkout">
                <div className="checkout">

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="checkout-container">
                            <h2>checkout</h2>
                            <div className="billing-details">
                                <h3>billing details</h3>
                                <div className="billing-details-content">
                                    <label htmlFor="name">
                                        <span>Name</span>
                                        <input type="text" placeholder='Name'
                                            {...register('name', {
                                                required: {
                                                    value: true,
                                                    message: 'Name is required'
                                                }
                                            })}
                                        />
                                    </label>
                                    <label htmlFor="Email">
                                        <span>Email Address</span>
                                        <input type="text" placeholder='example@example.com'
                                            {...register('email', {
                                                required: {
                                                    value: true,
                                                    message: 'Email is required'
                                                }
                                            })}
                                        />
                                    </label>
                                    <label htmlFor="number">
                                        <span>Phone Number</span>
                                        <input type="number" placeholder='+1 202-555-0136'
                                            {...register('number', {
                                                required: {
                                                    value: true,
                                                    message: 'Phone Number is required'
                                                }
                                            })}
                                        />
                                    </label>
                                </div>

                            </div>

                            <div className="shipping-info">
                                <h3>shipping info</h3>
                                <label htmlFor="address">
                                    <span>Address</span>
                                    <input type="text" placeholder='Address' className='input-address'
                                        {...register('address', {
                                            required: {
                                                value: true,
                                                message: 'address is required'
                                            }
                                        })}
                                    />
                                </label>
                                <div className="shipping-input">
                                    <label htmlFor="zipcode">
                                        <span>ZIP Code</span>
                                        <input type="number" placeholder='Zip Code'
                                            {...register('zipcode', {
                                                required: {
                                                    value: true,
                                                    message: 'zipcode is required'
                                                }
                                            })}
                                        />
                                    </label>

                                    <label htmlFor="city">
                                        <span>City</span>
                                        <input type="text" placeholder='City'
                                            {...register('city', {
                                                required: {
                                                    value: true,
                                                    message: 'city is required'
                                                }
                                            })}
                                        />
                                    </label>
                                </div>

                                <label htmlFor="country">
                                    <span>Country</span>
                                    <input type="text" placeholder='Unite States' className='country-input'
                                        {...register('country', {
                                            required: {
                                                value: true,
                                                message: 'country is required'
                                            }
                                        })}
                                    />
                                </label>


                            </div>

                            <div className="payment-details">
                                <h3>payment details</h3>

                                <div className="payment-details-content">
                                    <p className='payment-parraf'>Payment Method</p>
                                    <div className="payment-method">
                                        <label htmlFor="">
                                            <input type="radio" name='permission' id='e-money'
                                            value='e-money'
                                            
                                                {...register(' payment method', {
                                                    required: {
                                                        value: true,
                                                        message: ' country is required'
                                                    }
                                                })}

                                                checked={paymentMethodEmoney === 'e-money'}
                                                onChange={handlerPayment}

                                            />
                                            <p>e-Money</p>
                                        </label>

                                        <label htmlFor="">
                                            <input type="radio" name='permission'
                                            id='cash'
                                            value= 'cash'
                                                {...register(' payment method', {
                                                    required: {
                                                        value: true,
                                                        message: ' country is required'
                                                    }
                                                })
                                                }
                                                checked={paymentMethodEmoney === 'cash'}
                                               
                                                onChange={handlerPayment}

                                            />
                                            <p>Cash on Delivery</p>
                                        </label>
                                    </div>
                                </div>

                            {paymentMethodEmoney === 'e-money' ? (
                                    <div className='e-money-active'>     
                                    <label htmlFor="">
                                        <span>e-Money Number</span>
                                        <input type="number" />
                                    </label>
    
                                    <label htmlFor="" >
                                        <span> e-Money PIN</span>
                                        <input type="number" />
                                    </label>
                                </div>
                            ) : ''}


                            </div>
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
                                                    <div className="cart-summary-items">
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
                                    <button className="btn-default-1"

                                    >continue & pay</button>
                                </div>
                            </div>

                        </div>
                    </form>

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
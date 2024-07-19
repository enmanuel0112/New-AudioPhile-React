
// import { useEffect } from 'react'
import data from '../data.json'
import Layout from '../components/layout'
import { Link } from 'react-router-dom';
import { Menu } from './staticsComponents'
import '../scss/StylesComponents/productsDetails.scss'

import { useParams } from "react-router-dom"
import { useState } from 'react'

export default function ProductDetails() {

    const [amount, setAmount] = useState(1)


    const handlerItemToCart = (item) => {
        console.log('este es el item', item)
    }


    const addingAmount = () => {
        setAmount(amount + 1)

    }

    const resAmount = () => {
        if (amount >= 1) {
            return setAmount(amount - 1)
        } else {
            return amount
        }

    }

    const getLinksPath = (category) => {
        if (category === 'headphones') {
            return '/headphones';
        } else if (category === 'speakers') {
            return '/speakers';
        } else if (category === 'earphones') {
            return '/earphones';
        } else {
            return '/home';
        }
    }



    const { id } = useParams()

    const product = data.find(p => p.id === parseInt(id));

    return (
        <>
            <Layout>
                <section>
                    <div className="product-details-container">

                        <div className="product-details-content">
                            <Link className='go-back-btn'
                                to={getLinksPath(product.category)}
                            >Go Back</Link>
                            <article className='product-container'>
                                <div className='product-img'>
                                    <img className='img-desktop' src={product.image.desktop} alt="headphone" />
                                    <img className='img-tablet' src={product.image.tablet} alt="headphone" />
                                    <img className='img-mobile' src={product.image.mobile} alt="headphone" />
                                </div>
                                <div className='product-details'>
                                    <p className='new-product'>new product</p>
                                    <h2>{product.name}</h2>
                                    <p className='product-description'>{product.description}</p>
                                    <p className='product-price'>$ {product.price}</p>
                                    <div>
                                        <div className="add-to-cart">
                                            <div className="input-amount">
                                                <button onClick={resAmount}>-</button>
                                                <p value={amount}>{amount}</p>
                                                <button onClick={addingAmount}>+</button>
                                            </div>

                                            <button className='btn-default-1' onClick={handlerItemToCart(product)}>add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <article className='products-features'>
                                <div className='features-container'>
                                    <h2>features</h2>
                                    <p>{product.features}</p>
                                </div>
                                <div className="features-list">
                                    <h2>in the box</h2>
                                    <div>
                                        {product.includes.map(list => {
                                            return (
                                                <ul>
                                                    <li key={product.id}>
                                                        <span className='list-color'>{list.quantity} x</span>
                                                        <span className='list-content'>{list.item}</span>
                                                    </li>
                                                </ul>
                                            )

                                        })}
                                    </div>

                                </div>
                            </article>

                            <article >
                                <div className="gallery-image">
                                    <div className='galery-content'>
                                        <div className="image-here">
                                            <img className='image-desktop' src={product.gallery.first.desktop} alt="" />
                                            <img className='image-tablet' src={product.gallery.first.tablet} alt="" />
                                            <img className='image-mobile' src={product.gallery.first.mobile} alt="" />
                                        </div>
                                        <div className="image-here">
                                            <img className='image-desktop' src={product.gallery.second.desktop} alt="" />
                                            <img className='image-tablet' src={product.gallery.second.tablet} alt="" />
                                            <img className='image-mobile' src={product.gallery.second.mobile} alt="" />
                                        </div>
                                    </div>
                                    <div className="image-here-2">
                                        <img className='image-desktop' src={product.gallery.third.desktop} alt="" />
                                        <img className='image-tablet' src={product.gallery.third.tablet} alt="" />
                                        <img className='image-mobile' src={product.gallery.third.mobile} alt="" />
                                    </div>
                                </div>
                            </article>

                            <article className="others-items">
                                <div className="others-items-container">
                                    <h2>you may also like</h2>
                                    <div className="others-items-content">

                                        {product.others.map((items) => {
                                            return <>
                                                <div className='others-item'>
                                                    <img className='image-desktop' src={items.image.desktop} alt="" />
                                                    <img className='image-tablet' src={items.image.tablet} alt="" />
                                                    <img className='image-mobile' src={items.image.mobile} alt="" />
                                                    <div className="other-item-content">
                                                        <p>{items.name}</p>
                                                        <Link className='btn-default-1'
                                                            to={items.slug.includes('headphones') ? '/headphones' : '/speakers'}
                                                        >see product</Link>
                                                    </div>

                                                </div>
                                            </>
                                        })}
                                    </div>


                                </div>
                            </article>

                        </div>
                    </div>
                </section>

                <Menu />
            </Layout>
        </>
    )
}

import React from 'react'
import { Menu } from './staticsComponents';
import { Link } from 'react-router-dom';
import data from '../data.json'

import Layout from './layout';



export default function Speakers() {
    return (
        <div>
            <Layout>
                <>
                    <div className="hero">
                        <div className="hero-container">
                            <h2>Speakers</h2>
                        </div>
                    </div>

                    <section>
                        <article className='products-container'>
                            <div className='product-img'>
                                <img className='img-desktop' src={`${process.env.PUBLIC_URL}/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg`} alt="" />
                                <img className='img-tablet' src={`${process.env.PUBLIC_URL}/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg`} alt="" />
                                <img className='img-mobile' src={`${process.env.PUBLIC_URL}/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg`} alt="" />
                            </div>
                            <div className='product-details'>
                                <p className='new-product'>new product</p>
                                <h2>zx9 <br /> speaker</h2>

                                <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>

                                <Link className='btn-default-1' to={`/productDeatils/${data[5].id}`}
                                >see product</Link>
                            </div>
                        </article>

                        <article className='products-container'>

                            <div className="product-img-responsive">
                                <div className='product-img'>
                                    <img className='img-desktop' src={`${process.env.PUBLIC_URL}/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg`} alt="" />
                                    <img className='img-tablet' src={`${process.env.PUBLIC_URL}/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg`} alt="" />
                                    <img className='img-mobile' src={`${process.env.PUBLIC_URL}/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg`} alt="" />
                                </div>
                            </div>

                            <div className='product-details'>
                                <h2>zx7 <br /> speaker</h2>

                                <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>

                                <Link className='btn-default-1' to={`/productDeatils/${data[4].id}`}
                                >see product</Link>
                            </div>
                            <div className="product-img-desktop">
                                <div className='product-img'>
                                    <img className='img-desktop' src={`${process.env.PUBLIC_URL}/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg`} alt="" />
                                    <img className='img-tablet' src={`${process.env.PUBLIC_URL}/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg`} alt="" />
                                    <img className='img-mobile' src={`${process.env.PUBLIC_URL}/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg`} alt="" />
                                </div>
                            </div>

                        </article>


                    </section>


                    <Menu />

                </>
            </Layout>
        </div>
    )
}


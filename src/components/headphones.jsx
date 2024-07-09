import React from 'react'
import Layout from './layout';
import '../scss/StylesComponents/products.scss';


const images = require.context('./../assets/shared');

export default function Headphones() {
    return (
        <div>
            <Layout>
                <>
                    <div className="hero">
                        <div className="hero-container">
                            <h2>headphone</h2>
                        </div>
                    </div>

                    <section>
                        <article className='products-container'>
                            <div className='product-img'>
                                <img className='img-desktop' src={images('./desktop/image-xx99-mark-two-headphones.jpg')} alt="" />
                                <img className='img-tablet' src={images('./tablet/image-xx99-mark-two-headphones.jpg')} alt="" />
                                <img className='img-mobile' src={images('./mobile/image-xx99-mark-two-headphones.jpg')} alt="" />
                            </div>
                            <div className='product-details'>
                                <p className='new-product'>new product</p>
                                <h2>xx99 mark ii <br /> headphones</h2>

                                <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>

                                <button className='btn-default-1'>see product</button>
                            </div>
                        </article>

                        <article className='products-container'>

                            <div className='product-details'>
                                <h2>XX99 Mark I <br /> headphones</h2>

                                <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>

                                <button className='btn-default-1'>see product</button>
                            </div>

                            <div className='product-img'>
                                <img className='img-desktop' src={images('./desktop/image-xx99-mark-one-headphones.jpg')} alt="" />
                                <img className='img-tablet' src={images('./tablet/image-xx99-mark-one-headphones.jpg')} alt="" />
                                <img className='img-mobile' src={images('./mobile/image-xx99-mark-one-headphones.jpg')} alt="" />
                            </div>
                        </article>

                        <article className='products-container'>
                            <div className='product-img'>
                                <img className='img-desktop' src={images('./desktop/image-xx59-headphones.jpg')} alt="" />
                                <img className='img-tablet' src={images('./tablet/image-xx59-headphones.jpg')} alt="" />
                                <img className='img-mobile' src={images('./mobile/image-xx59-headphones.jpg')} alt="" />
                            </div>
                            <div className='product-details'>
                                <h2>XX59 <br /> headphones</h2>

                                <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>

                                <button className='btn-default-1'>see product</button>
                            </div>
                        </article>
                    </section>

                </>
            </Layout>
        </div>
    )
}


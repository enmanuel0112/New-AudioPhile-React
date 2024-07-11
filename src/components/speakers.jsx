import React from 'react'
import { Menu} from './staticsComponents';

import Layout from './layout';

const images = require.context('./../assets/shared');

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
                                <img className='img-desktop' src={images('./desktop/image-zx9-speaker.jpg')} alt="" />
                                <img className='img-tablet' src={images('./tablet/image-zx9-speaker.jpg')} alt="" />
                                <img className='img-mobile' src={images('./mobile/image-zx9-speaker.jpg')} alt="" />
                            </div>
                            <div className='product-details'>
                                <p className='new-product'>new product</p>
                                <h2>zx9 <br /> speaker</h2>

                                <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>

                                <button className='btn-default-1'>see product</button>
                            </div>
                        </article>

                        <article className='products-container'>

                            <div className='product-details'>
                                <h2>zx7 <br /> speaker</h2>

                                <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>

                                <button className='btn-default-1'>see product</button>
                            </div>

                            <div className='product-img'>
                                <img className='img-desktop' src={images('./desktop/image-zx7-speaker.jpg')} alt="" />
                                <img className='img-tablet' src={images('./tablet/image-zx7-speaker.jpg')} alt="" />
                                <img className='img-mobile' src={images('./mobile/image-zx7-speaker.jpg')} alt="" />
                            </div>
                        </article>


                    </section>


                    <Menu/>

                </>
            </Layout>
        </div>
    )
}


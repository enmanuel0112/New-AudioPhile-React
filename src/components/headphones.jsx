import React from "react";
import Layout from "./layout";
import "../scss/StylesComponents/products.scss";
import { Menu } from "./header/Header";
import { Link } from "react-router-dom";
import data from "../data.json";

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
            <article className="products-container">
              <div className="product-img">
                <img
                  className="img-desktop"
                  src={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg`}
                  alt=""
                />
                <img
                  className="img-tablet"
                  src={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg`}
                  alt=""
                />
                <img
                  className="img-mobile"
                  src={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg`}
                  alt=""
                />
              </div>
              <div className="product-details">
                <p className="new-product">new product</p>
                <h2>
                  xx99 mark ii <br /> headphones
                </h2>

                <p>
                  The new XX99 Mark II headphones is the pinnacle of pristine
                  audio. It redefines your premium headphone experience by
                  reproducing the balanced depth and precision of studio-quality
                  sound.
                </p>

                <Link
                  className="btn-default-1"
                  to={`/productDeatils/${data[3].id}`}
                >
                  see product
                </Link>
              </div>
            </article>

            <article className="products-container">
              <div className="product-img-responsive">
                <div className="product-img">
                  <img
                    className="img-desktop"
                    src={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg`}
                    alt=""
                  />
                  <img
                    className="img-tablet"
                    src={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg`}
                    alt=""
                  />
                  <img
                    className="img-mobile"
                    src={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg`}
                    alt=""
                  />
                </div>
              </div>
              <div className="product-details">
                <h2>
                  XX99 Mark I <br /> headphones
                </h2>

                <p>
                  As the gold standard for headphones, the classic XX99 Mark I
                  offers detailed and accurate audio reproduction for
                  audiophiles, mixing engineers, and music aficionados alike in
                  studios and on the go.
                </p>

                <Link
                  className="btn-default-1"
                  to={`/productDeatils/${data[2].id}`}
                >
                  see product
                </Link>
              </div>
              <div className="product-img-desktop">
                <div className="product-img">
                  <img
                    className="img-desktop"
                    src={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg`}
                    alt=""
                  />
                  <img
                    className="img-tablet"
                    src={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg`}
                    alt=""
                  />
                  <img
                    className="img-mobile"
                    src={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg`}
                    alt=""
                  />
                </div>
              </div>
            </article>

            <article className="products-container">
              <div className="product-img">
                <img
                  className="img-desktop"
                  src={`${process.env.PUBLIC_URL}/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg`}
                  alt=""
                />
                <img
                  className="img-tablet"
                  src={`${process.env.PUBLIC_URL}/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg`}
                  alt=""
                />
                <img
                  className="img-mobile"
                  src={`${process.env.PUBLIC_URL}/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg`}
                  alt=""
                />
              </div>
              <div className="product-details">
                <h2>
                  XX59 <br /> headphones
                </h2>

                <p>
                  Enjoy your audio almost anywhere and customize it to your
                  specific tastes with the XX59 headphones. The stylish yet
                  durable versatile wireless headset is a brilliant companion at
                  home or on the move.
                </p>

                <Link
                  className="btn-default-1"
                  to={`/productDeatils/${data[1].id}`}
                >
                  see product
                </Link>
              </div>
            </article>
          </section>

          <Menu />
        </>
      </Layout>
    </div>
  );
}

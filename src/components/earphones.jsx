import React from "react";
import Layout from "./layout";
import { Link } from "react-router-dom";
import { Menu } from "./header/Header";
import data from "../data.json";

export default function Earphones() {
  return (
    <div>
      <Layout>
        <>
          <div className="hero">
            <div className="hero-container">
              <h2>Earphones</h2>
            </div>
          </div>

          <section>
            <article className="products-container">
              <div className="product-img">
                <img
                  className="img-desktop"
                  src={`${process.env.PUBLIC_URL}/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg`}
                  alt=""
                />
                <img
                  className="img-tablet"
                  src={`${process.env.PUBLIC_URL}/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg`}
                  alt=""
                />
                <img
                  className="img-mobile"
                  src={`${process.env.PUBLIC_URL}/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg`}
                  alt=""
                />
              </div>
              <div className="product-details">
                <p className="new-product">new product</p>
                <h2>
                  {" "}
                  yx1 wireless <br /> earphones
                </h2>

                <p>
                  Tailor your listening experience with bespoke dynamic drivers
                  from the new YX1 Wireless Earphones. Enjoy incredible
                  high-fidelity sound even in noisy environments with its active
                  noise cancellation feature.
                </p>

                <Link
                  className="btn-default-1"
                  to={`/productDeatils/${data[0].id}`}
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

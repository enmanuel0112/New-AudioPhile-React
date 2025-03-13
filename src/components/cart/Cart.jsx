import { useContext } from "react";
import { contextComponents } from "../../context/contextComponents";
import '../cart/cart.scss';
import { Link } from 'react-router-dom';
export const Cart = () => {
  const { cartProduct, user } = useContext(contextComponents);
  let total = 0;

  return (
    <>
      <div className="cart-content">
        <div className="cart-product-details">
          <div className="cart-items-number">
            <p>
              Cart (<span>{cartProduct.length}</span>)
            </p>
            <button>Remove all</button>
          </div>
          <div className="product-added">
            {cartProduct.map((items, index) => {
              let totalPrice = items.price;
              let totalQuantity = items.quantity;
              total = total + totalQuantity * totalPrice;
              return (
                <>
                  <div className="cart-product" key={index}>
                    <div className="cart-product-info">
                      <img
                        className="img-product"
                        src={`${process.env.PUBLIC_URL}${items.image}`}
                        alt=""
                      />

                      <div className="product-info">
                        <p className="product-name">{items.name}</p>
                        <p className="product-price">{items.price}</p>
                      </div>
                    </div>
                    <div className="product-amount">
                      <button>-</button>
                      <p>{items.quantity}</p>
                      <button>+</button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="products-total">
            <p className="total">total</p>
            <p className="total-amount-to-pay">$ {total}</p>
          </div>
        </div>
        <div className="btn-checkout">
          <Link className="btn-default-1" to={user ? "/checkout" : "/login"}>
            checkout
          </Link>
        </div>
      </div>
    </>
  );
};

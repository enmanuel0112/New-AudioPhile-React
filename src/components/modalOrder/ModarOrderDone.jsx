import { Link } from 'react-router-dom';
import '../modalOrder/modalOrder.scss';

export const ModalOrderDone = ({ grandTotal, cartProduct, veremos }) => {
  let prueba = cartProduct.slice(1).length;
  return (
    <>
      <div
        className={veremos ? "bacground-modal" : "background-modal-hidden"}
      ></div>
      <div
        className={
          veremos
            ? "modal-order-done  modal-active"
            : "modal-order-done modal-hidden"
        }
      >
        <div className="modal-order-done-container">
          <div className="modal-order-done-content">
            <div className="modal-order-done-icon">
              <img
                src={`${process.env.PUBLIC_URL}/assets/checkout/icon-order-confirmation.svg`}
                alt=""
              />
            </div>
            <h3>
              THANK YOU <br />
              FOR YOUR ORDER
            </h3>
            <p>You will receive an email confirmation shortly.</p>
          </div>

          <div className="modal-order-done-product">
            <div className="modal-product">
              <div className="modal-product-content">
                {cartProduct.slice(0, 1).map((items) => {
                  return (
                    <div className="modal-product-info" key={items.id}>
                      <div className="product-info">
                        <img
                          className="img-product"
                          src={`${process.env.PUBLIC_URL}${items.image} `}
                          alt=""
                        />
                        <div className="product-information">
                          <div className="product-information-content">
                            <p className="product-name" key={items.id}>
                              {items.name}
                            </p>
                            <p>x{items.quantity}</p>
                          </div>

                          <p className="product-price" key={items.id}>
                            $ {items.price}
                          </p>
                        </div>
                      </div>
                      <div className="line"></div>
                      <p className="other-items">
                        {prueba >= 1 ? `and ${prueba} other item(s)` : ""}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-amount">
              <div className="grand-amount-content">
                <p>grand total</p>
                <p className="total-amount">$ {grandTotal}</p>
              </div>
            </div>
          </div>
          <Link to={"/"} className="btn-modal-done">
            back to home
          </Link>
        </div>
      </div>
    </>
  );
};

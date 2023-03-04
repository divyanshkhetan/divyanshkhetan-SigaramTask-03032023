import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { adjustQty, removeFromCart } from "../actions/actions";
import { USD_TO_INR } from "../globals";

const ProductListPageCart = () => {
  const cart = useSelector((state) => state.shop.cart);
  const dispatch = useDispatch();
  
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.reduce((total, item) => total + item.qty * item.price * USD_TO_INR, 0);
  
  const handleIncreaseQty = (id, itemQtyInCart) => {
    // console.log(id, itemQtyInCart);
    dispatch(adjustQty(id, itemQtyInCart + 1));
  };

  const handleDecreaseQty = (id, itemQtyInCart) => {
    // console.log(id, itemQtyInCart);
      if(itemQtyInCart > 1)
          dispatch(adjustQty(id, itemQtyInCart - 1));
      else
          dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    cart.map((item) => {
      dispatch(removeFromCart(item.id));
    });
  }

  return (
    <div>
      <div className="d-flex flex-column">
        <div
          className="d-flex flex-row justify-content-between border-3 border-bottom"
          style={{ paddingBottom: "0.5rem" }}
        >
          <h2>My Cart</h2>
          <button className="btn btn-dark btn-sm" onClick={() => handleClearCart()}>Clear Cart</button>
        </div>

        <div className="border-bottom border-4">
          {cart.map((item) => {
            return (
              <div className="row" key={item.id}>
                <div className="col-8">
                    <span className="fw-bold">{item.title}</span>
                    <p>₹{item.price * USD_TO_INR}  x {item.qty} = ₹{item.price * USD_TO_INR * item.qty}</p>
                </div>
                <div className="col-4">
                    <div className="d-flex align-items-center justify-content-center h-100">  
                      <button className="btn btn-outline-warning btn-sm" onClick={() => handleDecreaseQty(item.id, item.qty)}>-</button>
                      <span className="mx-2" style={{color: 'black'}}>{item.qty}</span>
                      <button className="btn btn-outline-warning btn-sm" onClick={() => handleIncreaseQty(item.id, item.qty)}>+</button>
                      </div>
                </div>
              </div>
            ) })}
        </div>
        
        <div className="mt-3">
          <div className="d-flex flex-row justify-content-between">
            <h5> Item Total <span className="text-muted"> ({totalItems} Items) </span> </h5>
            <h5> ₹{parseInt(totalPrice)} </h5>
          </div>

        </div>

        <div className="d-grid gap-2 mt-5">
            <Link to='/cart'>
              <button className="btn btn-warning btn-lg btn-block w-100">
                  Checkout
              </button>
            </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductListPageCart;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { USD_TO_INR } from "../globals";
import { Link } from "react-router-dom";
import { adjustQty, removeFromCart } from "../actions/actions";

const CartItemListPage = () => {
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


  return (
    <>
      <div>
        <Link to='/'>
          Home
        </Link>
        /Cart
      </div>

      <div className="container mt-4 p-4 border border-4 border-dark-subtle" style={{maxWidth: '60rem'}}>
        <h4 className="border-bottom border-2 pb-3">Review Your Order</h4>

        <div>
          {cart.map((item) => (
            <div className="row border-bottom border-2 py-3">
              <div className="col-2">
                <img src={item.image} alt={item.title} style={{height:'150px'}}/>
              </div>

              <div className="col-6">
                <h5>{item.title}</h5>
                <p className="text-muted">Price: ₹{item.price * USD_TO_INR}</p>
              </div>

              <div className="col-2">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <button className="btn btn-warning btn-sm" onClick={() => handleDecreaseQty(item.id, item.qty)}>-</button>
                  <span className="m-2">{item.qty}</span>
                  <button className="btn btn-warning btn-sm" onClick={() => handleIncreaseQty(item.id, item.qty)}>+</button>
                </div>
              </div>

              <div className="col-2">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <h5> ₹{item.qty * (item.price * USD_TO_INR)} </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
          
        <div>
          <div className="row border-bottom border-2 py-3">
            <div className="col-8">
              <h5>Total</h5>
            </div>

            <div className="col-2">
              <div className="d-flex justify-content-center align-items-center h-100">
                <h5>{totalItems} items</h5>
              </div>
            </div>

            <div className="col-2">
              <div className="d-flex justify-content-center align-items-center h-100">
                <h5> ₹{parseInt(totalPrice)} </h5>
              </div>
            </div>

            <div className="mt-4 d-flex flex-column gap-2">
              <button className="btn btn-warning btn btn-block w-100"> Proceed to Payment Gateway</button>
              
              <Link to="/">  
                <button className="btn btn-outline-warning btn btn-block w-100"> Back to Shopping </button>
              </Link>
            
            </div>            


        </div>
        
      </div>
      </div>
    </>
  );
};

export default CartItemListPage;

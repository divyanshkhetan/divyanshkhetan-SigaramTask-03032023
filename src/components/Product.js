import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, adjustQty, removeFromCart } from "../actions/actions";
import { USD_TO_INR } from "../globals";


const Product = ({ product }) => {
    
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shop.cart);
    
    // check if the item is already in the cart
    const itemQtyInCart = cart.find((item) => item.id === product.id) ? cart.find((item) => item.id === product.id).qty : 0;

    
    const handleAddItem = (id) => {
        dispatch(addToCart(id));
    };

    const handleIncreaseQty = (id) => {
        dispatch(adjustQty(id, itemQtyInCart + 1));
    };

    const handleDecreaseQty = (id) => {
        if(itemQtyInCart > 1)
            dispatch(adjustQty(id, itemQtyInCart - 1));
        else
            dispatch(removeFromCart(id));
    };

  return (
    <div>
      <div className="card my-2">
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              <img
                src={product.image}
                alt={product.title}
                className="img-thumbnail"
                style={{ height: "200px" }}
              />
            </div>
            <div className="col-6">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text textEllipsis">{product.description}</p>
              <p className="card-text">₹{product.price * USD_TO_INR}</p>
            </div>
            <div className="col-3">
                {/* center the button vertically */}
                <div className="d-flex align-items-center justify-content-center h-100">

                        {itemQtyInCart === 0 ? (
                            <button className="btn btn-outline-warning btn">
                                <span style={{color: 'black'}} onClick={() => handleAddItem(product.id)}> ADD </span>
                            </button>
                        ) : (
                            // adjust the quantitu of the item in the cart with + and - buttons
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="btn btn-outline-warning btn-sm" onClick={() => handleDecreaseQty(product.id)}>-</button>
                                <span className="mx-2" style={{color: 'black'}}>{itemQtyInCart}</span>
                                <button className="btn btn-outline-warning btn-sm" onClick={() => handleIncreaseQty(product.id)}>+</button>
                            </div>
                        )}
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product;

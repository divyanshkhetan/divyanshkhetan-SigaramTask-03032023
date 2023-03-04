import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_PRODUCTS,
  ADJUST_QTY,
} from "./actionTypes";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
};

export const adjustQty = (id, value) => {
  return {
    type: ADJUST_QTY,
    payload: {
      id,
      qty: value,
    },
  };
};

export const getProducts = () => (dispatch) => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_PRODUCTS, payload: data }));
};
import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QTY, GET_PRODUCTS } from "../actions/actionTypes";

const initialState = {
    products: [],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case ADD_TO_CART:
            const item = state.products.find((prod) => prod.id === action.payload.id);
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        default:
            return state;
    }
};

export default shopReducer;
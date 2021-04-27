import axios from "./axios";

//action constant
export const GET_CART = "GET_CART";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";

//action creator
export const getCart = (cart) => {
  return {
    type: GET_CART,
    cart,
  };
};

export const addToCart = (cart) => {
  return {
    type: ADD_CART,
    cart,
  };
};

export const removeFromCart = (cart) => {
  return {
    type: REMOVE_CART,
    cart,
  };
};

//thunk

export const getCartThunk = (userId, body) => {
  return async (dispatch) => {
    try {
      console.log("here in FETCH CART thunk-->", userId, body);
      const { data } = await axios.post(`/api/cart/${userId}`, body);
      dispatch(getCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addToCartThunk = (body) => {
  return async (dispatch) => {
    try {
      console.log("here in ADD_PRODUCT thunk-->", body);
      const { data } = await axios.post(`/api/cart/addProduct`, body);
      dispatch(getCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCart = () => {
  return async (dispatch) => {
    try {
      const { data: cart } = axios.get("/api/cart");
      dispatch(_getCart(cart));
    } catch (error) {
      console.log("Failed to fetch cart");
    }
  };
};

export const removeFromCartThunk = (body) => {
  return async (dispatch) => {
    try {
      console.log("here in DELETE_PRODUCT thunk-->", body);
      const { data } = await axios.put(`/api/cart/deleteProduct`, body);
      dispatch(removeFromCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};
//initial state
const initialState = {};

//reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_CART:
      return action.cart;
    case REMOVE_CART:
      return action.cart;
    default:
      return state;
  }
}

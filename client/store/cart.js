import axios from "./axios";

//action constant
export const GET_CART = "GET_CART"
//export const CREATE_ITEM = "CREATE_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";

//action creator
export const _getCart = (cart) => ({
  type: GET_CART,
  cart
})

// export const createItem = (item) => {
//   return {
//     type: CREATE_ITEM,
//     item,
//   };
// };

export const _addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const _removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    item,
  };
};

// export const decreaseItem = (item) => {
//   return {
//     type: DECREASE_ITEM,
//     item,
//   };
// };

//thunk
export const addItemToCart = (item) => {
  return async (dispatch) => {
    try {
      const {data: item} = axios.post('/api/cart', item)
      dispatch(_addItemToCart(item))
    } catch (error) {
      console.log('Failed to add item to cart')
    }
  }
}

export const getCart = () => {
  return async (dispatch) => {
    try {
      const { data: cart } = axios.get('/api/cart')
      dispatch(_getCart(cart))
    } catch (error) {
      console.log('Failed to fetch cart')
    }
  }
}

// export const fetchCreateItem = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post("/api/cart/createItem");
//       dispatch(createItem(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

//export const fetchAddItem = (id) => {
  // return async (dispatch) => {
  //   try {
  //     const {data} = await axios.get('/api/cart/addItem')
  //     dispatch(addItem(data))
  //   } catch (err) {
  //     console.log(err)
  //   }
 // }

// export const fetchRemoveItem = (id) => {
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.get('/api/cart/removeItem')
//       dispatch(removeItem(data))
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

// export const fetchDecreaseItem = (id) => {
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.get('/api/cart/decreaseItem')
//       dispatch(decreaseItem(data))
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

//initial state
const initialState = [];

//reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    // case CREATE_ITEM:
    //   return
    // case ADD_ITEM:
    //   return
    // const REMOVE_ITEM:
    //   return
    // const DECREASE_ITEM:
    //   return
    default:
      return state;
  }
}

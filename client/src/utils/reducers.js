import {
  UPDATE_COMICS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from "./actions";
// comment for chris to get changes
const initialState = {
  comics: [],
  categories: [],
  currentCategory: "",
  cart: [],
  cartOpen: false,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMICS:
      return {
        ...state,
        comics: [...action.comics],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.comic],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.comics],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(comic => {
          if (action._id === comic._id) {
            comic.purchaseQuantity = action.purchaseQuantity;
          }
          return comic;
        }),
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(comic => {
        return comic._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};

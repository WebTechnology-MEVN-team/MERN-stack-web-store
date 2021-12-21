import { productConstants } from "../actions/Constants";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
        loading: false,
      };
      break;

    case productConstants.ADD_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case productConstants.ADD_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;

    default:
      break;
  }

  return state;
};

export default productReducers;

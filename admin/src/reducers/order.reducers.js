import { orderConstants } from "../actions/Constants";

const initialState = {
  order: [],
  loading: false,
  error: false,
};

const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case orderConstants.GET_CUSTOMER_ORDER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload.orders,
      };
      break;

    case orderConstants.GET_CUSTOMER_ORDER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: true,
      };
      break;

    default:
      break;
  }

  return state;
};

export default orderReducers;

import { userConstants } from "../actions/Constants";

const initialState = {
  error: null,
  message: "",
  loading: false,
};

const userReducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case userConstants.USER_REGISTER_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;

    case userConstants.USER_REGISTER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

    default:
      break;
  }
  return state;
};

export default userReducer;

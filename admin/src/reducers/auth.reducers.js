import { authConstants } from "../actions/Constants";

const initialState = {
  name: "Minht",
};

export default (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        ...action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};

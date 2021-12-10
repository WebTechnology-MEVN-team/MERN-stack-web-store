import { categoryConstants } from "../actions/Constants";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };

    default:
      break;
  }
  return state;
};

export default categoryReducers;

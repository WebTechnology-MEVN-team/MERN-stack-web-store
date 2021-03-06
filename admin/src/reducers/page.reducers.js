import { pageConstants } from "../actions/Constants";

const initState = {
  error: null,
  loading: false,
  page: {},
};

const pageReducers = (state = initState, action) => {
  switch (action.type) {
    case pageConstants.CREATE_PAGE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case pageConstants.CREATE_PAGE_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;

    case pageConstants.CREATE_PAGE_FAILURE:
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

export default pageReducers;

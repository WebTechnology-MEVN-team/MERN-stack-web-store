import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import categoryReducers from "./category.reducer";
import orderReducers from "./order.reducers";
import productReducers from "./product.reducers";
import userReducer from "./user.reducers";

const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducer,
  category: categoryReducers,
  product: productReducers,
  // order: orderReducers,
});

export default rootReducer;

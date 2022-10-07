import { combineReducers } from "redux";
import cartReducer from "./cart";
import contactReducer from "./contact";
import userReducer from "./users";

const allReducer = combineReducers({
    cart:cartReducer,
    user:userReducer,
    contact: contactReducer
})

export default allReducer;
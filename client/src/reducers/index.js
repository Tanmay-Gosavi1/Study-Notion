import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../slice/authSlice.js'
import cartReducer from "../slice/cartSlice.js";
import profileReducer from "../slice/profileSlice.js";

const rootReducer = combineReducers({
    auth : authReducer,
    cart : cartReducer,
    profile : profileReducer
})

export default rootReducer
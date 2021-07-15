import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from '../features/TokenSlice';
import userReducer from '../features/UserSlice';

export default configureStore({
    reducer: {
        token: tokenReducer,
        user: userReducer,
    }
})
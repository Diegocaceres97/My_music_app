import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from '../features/TokenSlice';
import userReducer from '../features/UserSlice';
import playlistReducer from '../features/PlaylistSlice';
import favoriteReducer from '../features/FavoriteSlice';

export default configureStore({
    reducer: {
        token: tokenReducer,
        user: userReducer,
        playlist: playlistReducer,
        items: favoriteReducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice";
import playlistReducer from "../features/PlaylistSlice";
import favoriteReducer from "../features/FavoriteSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    playlist: playlistReducer,
    items: favoriteReducer,
  },
});

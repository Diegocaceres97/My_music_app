import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/login/login";
import Main from "../pages/main/main";
import Favorite from "../pages/favorites/favorites";
import NotFound from "../pages/notfound/notfound";
import Header from "./organisms/headerSection/header";
import Footer from "./organisms/footerSection/footer";
import { SET_ITEMS } from "../features/FavoriteSlice";
import { SET_PLAYLIST } from "../features/PlaylistSlice";
import {
  DataUser,
  PlayList,
  FavoriteTracks
} from "../services/SpotifyServices";
import { getTokenFromURL } from "../services/SpotifyLogic";
import { SET_USER } from "../features/UserSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      DataUser().then((user) => dispatch(SET_USER(user)));
      PlayList().then((playlist) => dispatch(SET_PLAYLIST(playlist)));
      FavoriteTracks().then((favoritos) => dispatch(SET_ITEMS(favoritos)));
    } else {
      if (window.location.hash !== "") {
        if (!localStorage.getItem("token")) {
          const hash = getTokenFromURL(); //Aqui obtenemos un token
          localStorage.setItem("token", hash.access_token);
          window.location.hash = "";
          window.location = "";
        }
      }
    }
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/principal" component={Main} />
        <Route exact path="/favoritos" component={Favorite} />
        <Route component={() => <NotFound />} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;

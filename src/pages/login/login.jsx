import React from "react";
import BtnLogin from "../../components/atoms/BtnLogin/BtnLogin";
import ImagenSpoti from "../../assets/static/Spotify-symbol.jpg";
import { loginURL } from "../../services/SpotifyLogic";
import "./login.scss";

const login = () => (
  <div className="ContainerLogin">
    <img src={ImagenSpoti} alt="logo" className="logo" />
    <BtnLogin url={loginURL} data-testid="custom-element" />
    
  </div>
);

export default login;

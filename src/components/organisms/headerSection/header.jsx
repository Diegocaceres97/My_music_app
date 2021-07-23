import React, { useState, useEffect } from "react";
import Headerleft from "../../molecules/header/headerLeft/headerLeft";
import HeaderRight from "../../molecules/header/headerRight/headerRight";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/UserSlice";
import "./header.css";

const Header = () => {
  const user = useSelector(selectUser);

  const [valor, setValor] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setValor(true);
    }
  }, [valor]);
  return valor ? (
    <div className="HeaderContainer">
      <Headerleft />

      <HeaderRight User={user} />
    </div>
  ) : (
    <div className="HeaderLogin" />
  );
};

export default Header;

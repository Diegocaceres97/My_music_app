import React, { useState, useEffect } from "react";
import FooterLeft from "../../molecules/footer/footerLeft/footerLeft";
import FooterCenter from "../../molecules/footer/footerCenter/footerCenter";
import FooterRight from "../../molecules/footer/footerRight/footerRight";
import "./footer.css";

const Footer = () => {
  const [valor, setValor] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setValor(true);
    }
  }, [valor]);
  return valor ? (
    <div className="FooterContainer">
      <FooterLeft />

      <FooterCenter />

      <FooterRight />
    </div>
  ) : (
    <div className="FooterLogin"></div>
  );
};

export default Footer;

import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h1 className="restaurant-name">RESTAURANTE</h1>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Compartilhe</span>
          <span>Cargos</span>
          <span>Clientes</span>
          <span>Trabalho</span>
        </div>
        <div className="footer-section-columns">
          <span>xx xxxx-xxxx</span>
          <span>site@site.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos e Condições</span>
          <span>Politica de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

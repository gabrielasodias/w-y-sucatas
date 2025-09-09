import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header" className="header">
      {/* Menu Hambúrguer */}
      <div
        className={`menu-hamburguer ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="logo">
        <img src="/logo.png" alt="w.y sucatas logo" />
      </div>

      <div className="contato-header">
        <a href="tel:+5519995014274">
          <i className="fas fa-phone-alt"></i>
          <span>19 99501-4274</span>
        </a>
      </div>

      <div className="endereco-header">
        <a href="https://maps.app.goo.gl/twkUvnpEyVcA7rBw5" target="_blank">
          <i className="fas fa-map-marker-alt"></i>
          <span>Endereço</span>
        </a>
      </div>

      {/* Adiciona a classe 'open' quando o estado for verdadeiro */}
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Início
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#footer" onClick={() => setIsOpen(false)}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
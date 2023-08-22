import React, { useState } from 'react';
import './Navbar.css'; // Estilize a barra de navegação como desejar

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-buttons">
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
      {showLogin && (
        <div className="login-form">
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button className="login-submit-button">Entrar</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

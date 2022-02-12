import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style/Header.css';

import Logo from '../../assets/logo/logo renove sem fundo.png';

function Header() {
  return (
    <header className="containerHeader">
      <Link to="/" >
        <img className="logoImg" src={Logo} alt="logo" />
      </Link>
      <nav className="containerNav">
        <ul className="listUL">
          <li className="ListLI">
            <Link className="ListLink" to="/">Home</Link>
          </li>
          <li className="ListLI">
            <Link className="ListLink" to="/jobs">Carreira</Link>
          </li>
          <li className="ListLI">
            <Link className="ListLink" to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
import React from 'react';
import logo from '../../images/123123.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <h1>Grub Hub Foods Tract </h1>
      <i className="fa-solid fa-microphone" />
    </header>
  );
}

export default Header;

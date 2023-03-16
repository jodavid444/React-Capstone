import React from 'react';
import logo from '../../images/613625ccf5966900044cbf6e.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <h1>The Grub Hub Republic</h1>
      <i className="fa-solid fa-microphone" />
    </header>
  );
}

export default Header;

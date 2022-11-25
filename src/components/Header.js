import React from 'react';
import foto from './images/logo.png';
import '../App.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ foto } alt="Título Sistema Solar" className="logo" />
      </header>
    );
  }
}

export default Header;

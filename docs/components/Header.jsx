import React from 'react';
import { Link } from 'react-router';
import { Icon } from 'lens';
import logo from '../assets/react.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar is-dark">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo">
              <img src={logo} height={20}/>
              <span>KING-LENS</span>
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <span className="tag is-rounded is-primary">V0.1.0</span>
              </div>
              <div className="navbar-item">
                <a href="https://github.com/ACorolla/king-lens" className="button is-outlined is-light">
                  <Icon name="github"/><span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

import React from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="hero is-dark section-logo">
          <div className="hero-head">
            <Header/>
          </div>
          <div className="hero-body">
            <div className="container">
              <p className="has-text-centered title">KING-LENS</p>
              <p className="has-text-centered description">
                A flexible and powerful UI components library for developing fast and powerful web application
              </p>
              <p className="has-text-centered angle-down">
                <span className="icon is-medium">
                  <i className="fa fa-2x fa-angle-double-down"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <section className="section-main">
          <div className="container">
            <div className="columns">
              <div className="column is-2 side-nav">
                <SideNav/>
              </div>
              <div className="column main-content">
                {this.props.children}
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default Home;

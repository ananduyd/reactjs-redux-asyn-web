import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import basePath from '../../utils/basePath';

class AppTemplate extends Component {
  render() {
    return (
      <div className="flex-container">
    <nav>
      <Link to={basePath``} >Home</Link>
      <Link to={basePath`projects`}>Projects</Link>
      <Link to={basePath`contact/byMail`} >Contact</Link>
    </nav>
    <div className="container">
      <div className="card text-center">
        {this.props.children}
      </div>
    </div>
    <hr/>
    <footer>
    <span>-YD-</span>
    </footer>
  </div>
    );
  }
}

AppTemplate.propTypes = {
  children: PropTypes.array.isRequired
};

export default AppTemplate;
require('normalize.css/normalize.css');
require('styles/App.css');
var Navbar = require('components/Navbar.js');
var MyNameIs = require('components/MyNameIs.js');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Navbar />
        <ul className="slides">
        	<MyNameIs />
        </ul>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

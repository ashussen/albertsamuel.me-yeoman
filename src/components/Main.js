require('normalize.css/normalize.css');
require('styles/App.css');
var Navbar = require('components/Navbar.js');
var MyNameIs = require('components/MyNameIs.js');
var Portfolio = require('components/Portfolio.js');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index" id="s-content">
        {/*<Navbar />*/}
        <ul className="slides">
        	<MyNameIs />
          <Portfolio />
        </ul>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

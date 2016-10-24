var React = require('react');
var Footer = React.createClass({
	render: function(){
		return (
      <li className="footer" style={{'background': '#CBC5C1'}}>
        <div className="s-icons-section s-section">
          <div className="container">
            <div className="columns sixteen">
              <div className="s-text">
                <h2 className="s-component-content s-font-title">
                  <p>I'm Sydney based,<br />passionate Web Developer,</p>
                  <p>currently looking for</p>
                  <p>a job opportunities.</p>
                </h2>
              </div>
            </div>
            <div className="s-mh s-repeatable">
              <div data-sorting-index="0" className="three columns half-fixed no-float s-repeatable-item">
                <div className="s-component s-image">
                    <a href="mailto:contact@albertsamuel.com" target="_blank">
                      <img alt="Twitter" title="Twitter" data-description="" src="../images/Mail.png" className=""/>
                    </a>
                </div>
              </div>
              <div data-sorting-index="0" className="three columns half-fixed no-float s-repeatable-item">
                <div className="s-component s-image">
                    <a href="https://twitter.com/as_albert" target="_blank">
                      <img alt="Twitter" title="Twitter" data-description="" src="../images/Twitter.png" className=""/>
                    </a>
                </div>
              </div>
              <div data-sorting-index="0" className="three columns half-fixed no-float s-repeatable-item">
                <div className="s-component s-image">
                    <a href="https://github.com/ashussen" target="_blank">
                      <img alt="Twitter" title="Twitter" data-description="" src="../images/Github.png" className=""/>
                    </a>
                </div>
              </div>
              <div data-sorting-index="0" className="three columns half-fixed no-float s-repeatable-item">
                <div className="s-component s-image">
                    <a href="https://www.quora.com/profile/Albert-Samuel" target="_blank">
                      <img alt="Twitter" title="Twitter" data-description="" src="../images/Quora.png" className=""/>
                    </a>
                </div>
              </div>
              <div data-sorting-index="0" className="three columns half-fixed no-float s-repeatable-item">
                <div className="s-component s-image">
                    <a href="https://www.linkedin.com/in/albertsamuel" target="_blank">
                      <img alt="Twitter" title="Twitter" data-description="" src="../images/Linkedin.png" className=""/>
                    </a>
                </div>
              </div>
            </div>
          </div>
          <div className="s-text">
            <h4 className="s-component-content">
              <p style={{'textAlign':'center'}}><em> &copy; Albert Samuel 2016</em></p>
            </h4>
          </div>
        </div>
      </li>
		);
	}
});

module.exports = Footer;
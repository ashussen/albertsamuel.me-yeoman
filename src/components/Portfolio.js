var React = require('react');

var Portfolio = React.createClass({
  render: function() {
      return (
      <li className="slide portfolio" style={{background:'white'}}>
        <div className="s-rows-section s-section">
          <div className="container">
            <div className="columns sixteen">
              <div className="s-title-group ">
                <div className="s-title ">
                  <div className="s-component s-text">
                    <h2 className="s-component-content s-font-title">
                      <p>Here's what I've done so far.</p>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-layout-mediaLeft s-repeatable">
              <div data-sorting-index="0" className=" s-repeatable-item">
                <div className="clearfix s-rva">
                  <div className="s-rva-media offset-one five columns">
                    <div className="s-item-media-group">
                      <div className="s-component s-media ">
                        <span>
                          <div className="s-component-content">
                            <img alt="" title="" data-description="" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload " data-src="//res.cloudinary.com/hrscywv4p/image/upload/c_limit,f_auto,h_1440,q_90,w_720/v1/9621/grh9rt2nsz08wyyzcy6g_ru4ode.png" data-sizes="auto" />
                            <noscript><img alt="" title="" data-description="" src="http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,f_auto,h_1440,q_90,w_720/v1/9621/grh9rt2nsz08wyyzcy6g_ru4ode.png" className="" /></noscript>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="s-rva-text undefined nine columns">
                    <div className="s-item-text-group half-offset-left">
                      <div className="s-item-title">
                        <div className="s-component s-text">
                          <h3 className="s-component-content s-font-heading">
                            <p><a target="_blank" href="http://www.cloud.google.com/">Google Cloud</a></p>
                          </h3>
                        </div>
                      </div>
                      <div className="s-item-subtitle">
                        <div className="s-component s-text">
                          <h6 className="s-component-content s-font-body">
                            <p><strong><strong>Software Engineer</strong>, <em>Since</em><em> Fall 2015</em></strong></p>
                          </h6>
                        </div>
                      </div>
                      <div className="s-item-text">
                        <div className="s-component s-text">
                          <div className="s-component-content s-font-body">
                            <p>New York, New York</p>
                            <p> </p>
                            <p>I am currently working to build amazing user experiences for Cloud users.</p>
                            <p> </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = Portfolio;
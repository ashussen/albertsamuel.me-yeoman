var React = require('react');

var Portfolio = React.createClass({
  render: function() {
      var ubuntuFont = {
        fontFamily: 'ubuntu',
      };
      var gunMetal = {color: '#3E3E3B'}
      var denim = {color: '#4C586F'}
      var frenchBlue = {color: '#A2AAB0'}
      var cashmere = {color: '#CBC5C1'}
      return (
      <li className="slide portfolio" style={{background:'#EBECED'}}>
        <div className="s-rows-section s-section">
          <div className="container">
            <div className="columns sixteen">
              <div className="s-title-group ">
                <div className="s-title ">
                  <div className="s-component s-text">
                    <h2 className="s-component-content s-font-title" style={ubuntuFont}>
                      <p>Here's what I've done so far.</p>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-layout-mediaLeft s-repeatable" style={ubuntuFont}>
              <div data-sorting-index="0" className=" s-repeatable-item">
                <div className="clearfix s-rva">
                  <div className="s-rva-media offset-one five columns">
                    <div className="s-component s-media ">
                        <img alt="" title="" data-description="" src="../images/SydneyTools.png" className="lazyload"/>
                    </div>
                  </div>
                  <div className="s-rva-text undefined nine columns">
                    <div className="s-item-title">
                      <div className="s-component s-text">
                        <h3 className="s-component-content s-font-heading" style={gunMetal}>
                          <p><a target="_blank" href="https://sydneytools.com.au">Sydney Tools</a></p>
                        </h3>
                      </div>
                    </div>
                    <div className="s-item-subtitle">
                      <div className="s-component s-text">
                        <h6 className="s-component-content s-font-body" style={denim}>
                          <strong>Junior Web Developer</strong>, <em>Joined November 2015</em>
                        </h6>
                      </div>
                    </div>
                    <div className="s-item-text">
                      <div className="s-component s-text">
                        <div className="s-component-content s-font-body">
                          <p style={frenchBlue}><strong>Roseland, NSW</strong></p>
                          <p style={gunMetal}>
                            Sydney Tools gave me an opportunity to learn and grow in a programming environment. My first task was to recreate Sydney Tools's online store interface as it becomes responsive website.
                            The design was created with Material Design principles, and applied using HTML, CSS and Javascript. Some JS framework also in use, such as JQuery, AngularJS, HammerJS, etc.
                            <br /><br />
                            Followed by creating enormous automation function for promotion and product listing. This is the fun part that I enjoy the most.
                            I am grateful for the  time I spent in Sydney Tools as cultivate my programming skills.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-layout-mediaLeft s-repeatable" style={ubuntuFont}>
              <div data-sorting-index="0" className=" s-repeatable-item">
                <div className="clearfix s-rva">
                  <div className="s-rva-media offset-one five columns">
                    <div className="s-component s-media ">
                        <img alt="" title="" data-description="" src="../images/CVIG.png" className="lazyload"/>
                    </div>
                  </div>
                  <div className="s-rva-text undefined nine columns">
                    <div className="s-item-title">
                      <div className="s-component s-text">
                        <h3 className="s-component-content s-font-heading" style={gunMetal}>
                          <p><a target="_blank" href="https://sydneytools.com.au">Capital Value International Group</a></p>
                        </h3>
                      </div>
                    </div>
                    <div className="s-item-subtitle">
                      <div className="s-component s-text">
                        <h6 className="s-component-content s-font-body" style={denim}>
                          <strong>Freelance Web Developer</strong>, <em>Finished on January 2016</em>
                        </h6>
                      </div>
                    </div>
                    <div className="s-item-text">
                      <div className="s-component s-text">
                        <div className="s-component-content s-font-body">
                          <p style={frenchBlue}><strong>Hurstville, NSW</strong></p>
                          <p style={gunMetal}>
                            Sydney Tools gave me an opportunity to learn and grow in a programming environment. My first task was to recreate Sydney Tools's online store interface as it becomes responsive website.
                            The design was created with Material Design principles, and applied using HTML, CSS and Javascript. Some JS framework also in use, such as JQuery, AngularJS, HammerJS, etc.
                            <br /><br />
                            Followed by creating enormous automation function for promotion and product listing. This is the fun part that I enjoy the most.
                            I am grateful for the  time I spent in Sydney Tools as cultivate my programming skills.
                          </p>
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
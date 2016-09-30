var React = require('react');

var MyNameIs = React.createClass({
  render: function(){
    var wideImage = {
      backgroundImage: 'url(../images/Background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: '49% 50%',
      backgroundRepeat: 'no-repeat no-repeat'
    }
    return (
      <li className="slide selected" tabIndex="0">
        <a className="section-anchor" data-scroll-name="#1"></a>
        <a className="section-name-anchor" data-section-name="Me"></a>
        <div className="wide image resize strikingly-light-text lazy-background hasImage" style={wideImage}>
          <div className="video-bg-wrap" data-video-html="" style={{display: 'none'}}></div>
          <div className="container">
            <div className="sixteen columns">
              <div className="spacer" style={{height:10}}>&nbsp;</div>
              <h3 className="subtitle">
                <span className="line hide">
                </span>
                <div className="ib">
                  <div data-component="text" data-name="text1" data-text-type="body" className="text-component">
                    <div className="content content2" style={{fontFamily: 'open sans'}}>
                      <div>Hey, I'm</div>
                    </div>
                  </div>
                </div>
                <span className="line">
                </span>
              </h3>
              <h1 className="title big">
                <div data-component="text" data-name="text2" data-text-type="title" className="text-component">
                  <div className="content content2" style={{fontFamily: 'bebas neue'}}>
                    <div>Gary Sheng.</div>
                    <div>&nbsp;</div>
                  </div>
                </div>
              </h1>
              <br/><br/>
            </div>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = MyNameIs;
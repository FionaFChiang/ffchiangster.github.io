import React from 'react';
var xyclonePic = require('../www/images/xyclonepic.jpg');

class Xyclone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  clickHandler(e) {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    var imgUrl = this.state.expanded ? 'https://i.giphy.com/13B9qUA69uRlJK.gif' : 'https://i.giphy.com/UewdyoarkrgtO.gif';

    var describe = this.state.expanded ? '' : 'Technologies used: Javascript, HTML5, CSS3, React, Redux, Node, Express, RESTful API, MongoDB';

    return (
      <div style={{flex: this.state.expanded ? 3 : 1, backgroundImage: 'url(' + imgUrl + ')'}} onClick={this.clickHandler.bind(this)} id="Xyclone" className="projects">

        <img style={{transform: !this.state.expanded ? 'translateY(0px)' : 'translateY(-500px)'}}className="ufo" src="https://i.giphy.com/aN3VDpxiCaby8.gif" />

        <h5 style={{transform: !this.state.expanded ? 'translateY(0px)' : 'translateY(-50px)'}} className='projectMove name'> 
          Xyclone 
        </h5>

        <h5 className="description">
          WYSIWYG Full-Stack App Generator
        </h5>

        <h5 className="description">
          {describe}
        </h5>

        <img style={{transform: this.state.expanded ? 'translateY(0px)' : 'translateY(600px)'}} className='projectMove title' className="projectImg" id="xyclonePic" src="https://media.giphy.com/media/94LXJ7FaLOcwM/giphy.gif" />

        <div style={{transform: this.state.expanded ? 'translateY(0px)' : 'translateY(600px)'}}
        className='projectMove blurb'>
          Build and download your personalized web application!
        </div>
      </div>
    );
  }
}

export default Xyclone;
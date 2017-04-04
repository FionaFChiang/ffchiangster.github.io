import React from 'react';
var boopPic = require('../www/images/boopPic.jpg');

class Boop extends React.Component {
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
    var imgUrl = this.state.expanded ? 'https://i.giphy.com/XwgJYBxMbgr2E.gif' : 'https://i.giphy.com/zm2N7eBkFk6di.gif';

    var describe = this.state.expanded ? '' : 'Technologies used: Javascript, HTML5, CSS3, React, Redux, Google API, MaterialUI, Socket.IO';
    
    return ( 
      <div style={{flex: this.state.expanded ? 3 : 1, backgroundImage: 'url(' + imgUrl + ')'}} onClick={this.clickHandler.bind(this)} id="Boop" className="projects">

        <img style={{transform: !this.state.expanded ? 'translateY(0px)' : 'translateY(-500px)'}}className="ufo" src="https://i.giphy.com/aN3VDpxiCaby8.gif" />

        <h5 style={{transform: !this.state.expanded ? 'translateY(0px)' : 'translateY(-50px)'}} className='projectMove name'> 
            Boop! 
        </h5>

        <h5 className="description">
          Community Accountability Tracker
        </h5>

        <h5 className="description">
          {describe}
        </h5>

        <img style={{transform: this.state.expanded ? 'translateY(0px)' : 'translateY(600px)'}} className='projectMove title' className="projectImg" id="BoopPic" src={boopPic} />

        <div style={{transform: this.state.expanded ? 'translateY(0px)' : 'translateY(600px)'}}
        className='projectMove blurb'>
          Community based attendance and accountability tracker.
        </div>
      </div>
    );
  }
}

export default Boop;
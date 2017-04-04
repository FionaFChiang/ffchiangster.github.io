import React from 'react';

class Mathhelper extends React.Component {
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

    var describe = this.state.expanded ? '' : 'Technologies used: Javascript, HTML5, CSS3, RESTful API, Google API, Node, Express, MongoDB';

    return (
      <div style={{flex: this.state.expanded ? 3 : 1, backgroundImage: 'url(' + imgUrl + ')'}} onClick={this.clickHandler.bind(this)} id="Mathhelper" className="projects">

        <img style={{transform: !this.state.expanded ? 'translateY(0px)' : 'translateY(-500px)'}} className="ufo" src="https://i.giphy.com/aN3VDpxiCaby8.gif" />

        <h5 style={{transform: !this.state.expanded ? 'translateY(0px)' : 'translateY(-50px)'}} className='projectMove name'> 
          Math Helper 
        </h5>

        <h5 className="description">
          Gamified Math Learning App
        </h5>

        <h5 className="description">
          {describe}
        </h5>

        <img style={{transform: this.state.expanded ? 'translateY(0px)' : 'translateY(600px)'}} className='projectMove title' className="projectImg" id="MathPic" src="http://i1077.photobucket.com/albums/w469/Mizermymoppy/mathhelpertestimg.png" />

        <div style={{transform: this.state.expanded ? 'translateY(0px)' : 'translateY(600px)'}}
        className='projectMove blurb'>
          Gamified math learning application with saved user statistics that scales in difficulty.
        </div>
      </div>
    );
  }
}

export default Mathhelper;
import React from 'react';
import Profile from './Profile';
import Projects from './Projects';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: 'Profile',
      hover: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover(e) {
    this.setState({
      hover: e.target.id,
    });
  }

  handleClick(e) {
    this.setState({
      match: e.target.id,
    });
  }

  render() {

    return (
      <div>
        <div>
          <img id="profileBg" src="https://68.media.tumblr.com/ea9a382980c9aba40a57fac92252f298/tumblr_o1tz0yYJD51txt22yo1_500.gif"/>
          <span id="overlayText">Fiona Chiang</span>
          <div>

          </div>
        </div>

        <div id="appWrap">
          <h3 className="appProj" id="Profile" onClick={this.handleClick}> About Me </h3>
          <h3 className="appProj" id="Projects" onClick={this.handleClick}> Projects </h3>
          <h3 className="appProj" id="Contact" onClick={this.handleClick}> Say Hi! </h3>
        </div> 

        <div>
          <Profile match={this.state.match}/>
          <Projects match={this.state.match}/>
          <Contact match={this.state.match}/>
        </div>
      </div>
    );
  }
}

export default App;


    // var linkStyle;

    // if (this.state.hover) {
    //   linkStyle = {backgroundImage: 'url(http://25.media.tumblr.com/d103eb823dce2842c673f409f036857b/tumblr_mzx9wrdwFa1snc5kxo1_500.gif)' };
    // } else {
    //   linkStyle = {backgroundImage: ''};
    // }


    // style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
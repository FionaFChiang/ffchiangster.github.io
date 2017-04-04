import React from 'react';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Github from 'react-icons/lib/fa/github';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.match === 'Profile' ? 'show' : 'hide'}>
        <h5>Greetings</h5>

        <h5>
          Let's build something awesome together!
        </h5>

          <h5>
            <a href="http://github.com/ffchiangster">
              <Github className="icons hvr-grow" />
            </a>
            <a href="http://linkedin.com/in/ffchiang">
              <Linkedin className="icons hvr-grow" />
            </a>
          </h5>
      </div>
    );
  }
}

export default Profile;
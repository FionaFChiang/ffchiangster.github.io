import React from 'react';
import Boop from './Boop';
import Mathhelper from './Mathhelper';
import Xyclone from './Xyclone';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      expand: e.target.id,
    });
  }

  render() {
    return (
      <div>
        <div className={this.props.match === 'Projects' ? 'show' : 'hide'}>
          <h5>Pick a Project!</h5>
            <div id="projectWrap">
              <Boop />
              <Xyclone />
              <Mathhelper />
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;
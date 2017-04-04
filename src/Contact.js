import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.match === 'Contact' ? 'show' : 'hide'}>
        <h5>
          Contact Information
        </h5>
        <h5 id="phone">
          Phone: (650) 288-8805
        </h5>
        <h5>
          Email: <a href="mailto:fiona.f.chiang@gmail.com"> fiona.f.chiang@gmail.com </a>
        </h5>
        <h5 id="thanks">
          Thanks for visiting!
        </h5>
      </div>
    );
  }
}

export default Contact;
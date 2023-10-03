import React, { Component } from "react";

type Props = {};

type State = {};

export default class About extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <h2 className={`mb-3 text-2xl font-semibold`}>About Me</h2>
        {/* line break with colored line */}
        <br></br>
        <p>Hi! I am a front-end focused software engineer.</p>
        <br></br>
        <h3 className={`mb-3 text-2xl font-semibold`}>Hobbies</h3>
      </>
    );
  }
}

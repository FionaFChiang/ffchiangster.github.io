import React, { Component } from "react";

type Props = {};

type State = {};

export default class Contact extends Component<Props, State> {
  render() {
    return (
      <>
        <h2 className={`mb-3 text-2xl font-semibold`}>Contact Form</h2>

        <form
          action="mailto:fiona.f.chiang@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="name">Full Name</label>
          <br></br>
          <input type="text" id="name" name="fullName" required />
          <br></br>
          <label htmlFor="email">Email Address</label>
          <br></br>
          <input type="email" id="email" name="email" required />
          <br></br>
          <label htmlFor="message">Message</label>
          <br></br>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
          <br></br>
          <button
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-purple-300 hover:bg-purple-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            type="submit"
          >
            Send
          </button>
        </form>
      </>
    );
  }
}

"use client";
import React, { Component } from "react";
import self from "../../assets/self.jpg";

type Props = {};

type State = {};

export default class SideBar extends Component<Props, State> {
  render() {
    return (
      <>
        <img height="50px" width="50px" src={self.src}></img>
        <h2 className={`mb-3 text-2xl font-semibold`}>Fiona Chiang</h2>
      </>
    );
  }
}

import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComp from "./Components/NewsComp";

export default class App extends Component {
  c = "johm";
  render() {
    return (
      <div>
        <Navbar />
        <NewsComp />
      </div>
    );
  }
}

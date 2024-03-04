import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComp from "./Components/NewsComp";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
    };
    this.darkMode = this.darkMode.bind(this);
  }
  darkMode = () => {
    if (this.state.mode === "light") {
      document.body.style.backgroundColor = "#042643";
      this.setState({
        mode: "dark",
      });
    } else {
      document.body.style.backgroundColor = "rgb(214, 214, 214)";
      this.setState({
        mode: "light",
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar darkMode={this.darkMode} mode={this.state.mode} />
        <NewsComp mode={this.state.mode} pagesize = {5} />
      </div>
    );
  }
}

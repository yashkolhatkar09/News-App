import "./App.css";
// import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComp from "./Components/NewsComp";
import React, { Component }  from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "dark",
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
        
        
      <Router>
          <Navbar darkMode={this.darkMode} mode={this.state.mode} />
        <Routes>
          <Route path="/" element = {<NewsComp key = "general" mode={this.state.mode} pageSize={20} category={"general"}/>}/>
          <Route path="/business" element = {<NewsComp key = "business" mode={this.state.mode} pageSize={20}category={"business" }/>}/>
          <Route path="/entertainment" element = {<NewsComp key = "entertainment" mode={this.state.mode} pageSize={20} category={"entertainment"}/>}/>
          <Route path="/health" element = {<NewsComp key = "health" mode={this.state.mode} pageSize={20} category={"health"}/>}/>
          <Route path="/science" element = {<NewsComp key = "science" mode={this.state.mode} pageSize={20} category={"science"}/>}/>
          <Route path="/sports" element = {<NewsComp key = "sports" mode={this.state.mode} pageSize={20} category={"sports"}/>}/>
          <Route path="/technology" element = {<NewsComp key = "technology" mode={this.state.mode} pageSize={20} category={"technology"}/>}/>
        </Routes>
     </Router>
      </div>
    );
  }
}

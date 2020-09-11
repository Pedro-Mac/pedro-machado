import React, { Component } from "react";

import TabText from "./components/TabText";

import "./App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: "",
    };
  }

  handleTabChange = (tabName) => {
    this.setState({
      activeTab: tabName,
    });
  };

  render() {
    return (
      <div className="App">
        <section className="Header">
          <div>
            <h1>Pedro Machado</h1>
          </div>
          <div>
            {/* <img src="/images/cover.jpg" alt="cover" /> */}
            <img src="#" alt="cover" />
          </div>
          <div>
            <h2>Fullstack Developer</h2>
          </div>
        </section>
        <section>
          <div className="d-flex">
            <h3 onClick={() => this.handleTabChange("about")}>About me</h3>
            <h3 onClick={() => this.handleTabChange("skills")}>Skills</h3>
            <h3 onClick={() => this.handleTabChange("contact")}>Contact</h3>
          </div>
          <div>
            {(this.state.activeTab === "about" && (
              <TabText tab={this.state.activeTab} />
            )) ||
              (this.state.activeTab === "skills" && (
                <TabText tab={this.state.activeTab} />
              )) ||
              (this.state.activeTab === "contact" && (
                <TabText tab={this.state.activeTab} />
              ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;

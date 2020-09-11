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
          <div className="Name">
            <h1 className="py-4">Pedro Machado</h1>
          </div>
          <div>
            <img src="/images/small.jpg" alt="cover" />
            {/* <img src="#" alt="cover" /> */}
          </div>
          <div>
            <h2 className="py-4">Fullstack Developer</h2>
          </div>
        </section>
        <section>
          <div className="d-flex">
            <h3 onClick={() => this.handleTabChange("about")}>About me</h3>
            <h3 onClick={() => this.handleTabChange("skills")}>Skills</h3>
            <h3 onClick={() => this.handleTabChange("contact")}>Contact</h3>
          </div>
          <div>
            {(!this.state.activeTab && (
              <>
                <p>We are what we do</p>
              </>
            )) ||
              (this.state.activeTab === "about" && (
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

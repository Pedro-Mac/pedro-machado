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
    const activeTab = this.state.activeTab;
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
          <div className="Stack">
            <h2 className="py-4">Fullstack Developer</h2>
          </div>
        </section>
        <section className="Info-Container mt-5">
          <div className="d-flex justify-content-between">
            <div
              className="Tab-Container"
              style={{ backgroundColor: activeTab === "about" && "#1e2228" }}
            >
              <h3
                onClick={() => this.handleTabChange("about")}
                style={{ color: activeTab === "about" && "#1e2228" }}
              >
                About me
              </h3>
            </div>
            <div
              className="Tab-Container"
              style={{ backgroundColor: activeTab === "skills" && "#1e2228" }}
            >
              <h3
                onClick={() => this.handleTabChange("skills")}
                style={{ color: activeTab === "skills" && "#1e2228" }}
              >
                Skills
              </h3>
            </div>
            <div
              className="Tab-Container"
              style={{ backgroundColor: activeTab === "contact" && "#1e2228" }}
            >
              <h3
                onClick={() => this.handleTabChange("contact")}
                style={{ color: activeTab === "contact" && "#1e2228" }}
              >
                Contact
              </h3>
            </div>
          </div>
          <div className="Text-Container mt-5">
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

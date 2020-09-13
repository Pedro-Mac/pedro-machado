import React, { Component } from "react";

import TabText from "./components/TabText";
import Tab from "./components/Tab";

import "./App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: "about",
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
        <section className="Info-Container">
          <div className="d-flex justify-content-between">
            <Tab
              handleTab={() => this.handleTabChange("about")}
              tabTitle="About me"
              stateTab={activeTab}
              tab="about"
            />
            <Tab
              handleTab={() => this.handleTabChange("skills")}
              tabTitle="Skills"
              stateTab={activeTab}
              tab="skills"
            />
            <Tab
              handleTab={() => this.handleTabChange("contact")}
              tabTitle="Contact"
              stateTab={activeTab}
              tab="contact"
            />
          </div>
          <div className="Text-Container mt-5">
            {(this.state.activeTab === "about" && (
              <TabText tab={activeTab} />
            )) ||
              (this.state.activeTab === "skills" && (
                <TabText tab={activeTab} />
              )) ||
              (this.state.activeTab === "contact" && (
                <TabText tab={activeTab} />
              ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;

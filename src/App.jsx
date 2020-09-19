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
          <div className="Name d-flex align-items-end">
            <h1 className="py-4">Pedro Machado</h1>
          </div>
          <div className="Image">
            {(window.innerWidth < 768 && (
              <img src="/images/small.jpg" alt="cover" />
            )) || <img src="/images/cover.jpg" alt="cover" />}
          </div>
          <div className="Stack">
            <h2 className="py-4 py-lg-0">Fullstack Developer</h2>
          </div>
        </section>
        <section className="Info-Container">
          <div className="d-flex">
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
          <div className=" d-flex flex-column  mt-md-5 mt-sm-5 mt-lg-4 Text-Container">
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

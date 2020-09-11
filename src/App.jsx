import React from "react";

import "./App.scss";

function App() {
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
        <div>
          <h3>About me</h3>
          <h3>Skills</h3>
          <h3>Contact</h3>
        </div>
      </section>
    </div>
  );
}

export default App;

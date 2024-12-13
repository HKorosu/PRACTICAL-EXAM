import React from "react";
import "./App.css";
import clips from "./data/MyClip.json";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="header-container">
          <h1>Aptech Studio</h1>
          <nav>
            <ul>
              <li>My Clips</li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="main-title">
          <h2>My Clip</h2>
          <div className="main-video">
            <iframe
              src={clips[0]?.url}
              title="Main Clip"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section className="clip-list">
          {clips.slice(1).map((clip, index) => (
            <div className="clip-item" key={index}>
              <iframe
                src={clip.url}
                title={clip.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3>{clip.name}</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="rating">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer>
        <div className="footer-container">
          <span>Aptech</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

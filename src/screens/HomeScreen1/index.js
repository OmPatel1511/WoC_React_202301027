import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom"
export const HomeScreen1 = () => {
    const navigate=useNavigate();
    const navigateToPlaygroundScreen1=()=>{
        navigate(`/playground1`)
    }
    const navigateToHomeScreen=()=>{
      navigate(`/home`)
  }
  return (
    <div className="home-screen">
      <header className="header">
        <div className="logo">Om <span>Code</span></div>
        <nav>
          <button className="btn-login" onClick={navigateToHomeScreen}>Login</button>
          <button className="btn-explore" onClick={navigateToPlaygroundScreen1}>Explore</button>
        </nav>
      </header>
      
      <div className="hero-section">
        <h1>Unleash Your Coding Potential</h1>
        <p>
          Dive into a next-generation coding experience with a focus on
          beautiful design, intuitive features, and unmatched flexibility.
        </p>
        <div className="hero-buttons">
          <button className="btn-explore-guest" onClick={navigateToPlaygroundScreen1}>Explore as Guest</button>
          <button className="btn-signup" onClick={navigateToHomeScreen}>Sign Up for Free</button>
        </div>
      </div>
      <div className="photo">
        <img src="/photo.png" alt=""/>
      </div>
      <div className="features">
        <h2>Why Choose Om-Code?</h2>
        <div className="features-grid">
          <div className="feature">
          <span className="material-icons">terminal</span>
            <h3>Run Any Programming Language</h3>
            <p>Seamlessly execute code in over 30+ languages with blazing-fast performance.</p>
          </div>
          <div className="feature">
          <span className="material-icons">brush</span>
            <h3>Multiple Themes</h3>
            <p>Choose from vibrant themes to create your perfect coding atmosphere.</p>
          </div>
          <div className="feature">
          <span className="material-icons">play_circle</span>
            <h3>Advanced Code Editor</h3>
            <p>Enjoy intelligent bracket matching, code wrapping, and customizable settings.</p>
          </div>
          <div className="feature">
          <span className="material-icons">cloud_upload</span>
            <h3>Flexible Input Options</h3>
            <p>Upload files, drag and drop, or manually input text with ease.</p>
          </div>
          <div className="feature">
          <span className="material-icons">settings</span>
            <h3>Customizable Workspace</h3>
            <p>Organize your IDE with resizable file menu, terminal, and editor sections.</p>
          </div>
          <div className="feature">
          <span className="material-icons">message</span>
            <h3>AI Chatbot Support</h3>
            <p>Chat with an AI-powered assistant to resolve your coding doubts instantly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen1;

// Button.js
import { Component } from "react";
import './Button.css'; 

class Button extends Component {
  render() {
    return (
      <div className="lng-theme" id="themeToggle">
        <p>Switch theme</p>
      </div> 
    );
  }
}

export default Button;
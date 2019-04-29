import React from "react";
import "./Footer.css";

const textStyle = {
  color: 'teal',
  fontSize: '26px'
}
const Footer = () => (
  <div className="footer text-center">
    <a style={textStyle} href="https://github.com/JHGarrett">
      @John Garrett
    </a>
  </div>
);

export default Footer;

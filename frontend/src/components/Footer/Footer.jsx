import React from "react";
import "./Footer.css";
import { assest } from "../../assets/assest";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assest.tomato} alt="" className="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            architecto, ad molestiae tenetur aut quis quibusdam enim unde
            aliquid sapiente natus omnis ducimus delectus magni! Quasi fuga
            tempora itaque incidunt!
          </p>
          <div className="footer-social-icons">
            <img src={assest.face} alt="" />
            <img src={assest.twitter} alt="" />
            <img src={assest.link} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivary</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-789</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Right Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;

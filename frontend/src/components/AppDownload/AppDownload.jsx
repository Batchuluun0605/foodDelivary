import React from "react";
import "./AppDownload.css";
import { assest } from "../../assets/assest";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Expreince Download <br /> Tomato App
      </p>
      <div className="app-download-platform">
        <img src={assest.playStore} alt="" className="play" />
        <img src={assest.appStore} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;

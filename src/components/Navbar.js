import React from "react";
import "./Navbar.css";
import { NAVBAR_GREETING } from "../constants/constants";
import { Link } from "react-router-dom";

export default function Navbar({ siteData, profileData }) {
  const logoSource = siteData?.logoImage ? siteData.logoImage : "";
  const siteTitle = siteData?.title ? siteData.title : "";
  const firstName = profileData?.firstName ? profileData.firstName : "";
  return (
    <header className="navbar">
      <div>
        <Link to={"/"}>
          <img
            src={logoSource}
            alt={"Earthquake Zen Garden Logo"}
            title={"Return to home"}
            className="headerLogo"
          />
        </Link>
      </div>
      <div className="headerTitle">
        <b>{siteTitle}</b>
      </div>
      <div>
        <Link to={"/profile/" + firstName}>
          <div className="headerProfile">
            <b>
              {NAVBAR_GREETING} {firstName}
            </b>
          </div>
        </Link>
      </div>
    </header>
  );
}

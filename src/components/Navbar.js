import React from "react";
import "./Navbar.css";
import { NAVBAR_GREETING, LOGO_ALT, LOGO_TITLE } from "../constants/constants";
import { Link } from "react-router-dom";

/**
 * Simple Navbar
 * the logo on the left when clicked redirects to the home page
 * clicking on the user's greeting and name redirects to the profile page
 *
 * @param {Object} siteData used to get the logo and title of the site
 * @param {Object} profileData used to get the user of the site
 */
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
            alt={LOGO_ALT}
            title={LOGO_TITLE}
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

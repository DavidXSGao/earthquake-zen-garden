import React from "react";
import "./Navbar.css";
import { NAVBAR_GREETING } from "../constants/constants";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const logoSource = props.data?.siteData?.logoImage
    ? props.data?.siteData?.logoImage
    : "";
  const siteTitle = props.data?.siteData?.title
    ? props.data.siteData.title
    : "";
  const firstName = props.data?.profileData?.firstName
    ? props.data.profileData.firstName
    : "";
  return (
    <header>
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

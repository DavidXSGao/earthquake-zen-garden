import React from "react";
import "./profile.css";
import { PROFILE_TITLE } from "./../constants/constants";
import DataTable from "./../components/DataTable";

export default function Profile({ profileData }) {
  const profilePictureSource = profileData?.avatarImage
    ? profileData.avatarImage
    : "";
  const profileDataCopy = { ...profileData };
  delete profileDataCopy.avatarImage;
  return (
    <div className="mainContainer">
      <div className="profileTitle">
        <b>{PROFILE_TITLE}</b>
      </div>
      <div className="profileBody">
        <div className="profilePicture">
          <img
            src={profilePictureSource}
            alt={"Profile Picture"}
            title={"Profile Picture"}
            className="profilePicture"
          />
        </div>
        <div className="profileTable">
          <DataTable data={profileDataCopy} />
        </div>
      </div>
    </div>
  );
}

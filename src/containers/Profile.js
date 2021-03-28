import React from "react";
import "./profile.css";
import { PROFILE_TITLE } from "./../constants/constants";
import DataTable from "./../components/DataTable";

export default function Profile({ profileData }) {
  const profilePictureSource = profileData?.avatarImage
    ? profileData.avatarImage
    : "";
  const profileFN = profileData?.firstName ? profileData.firstName : "";
  const profileLN = profileData?.lastName ? profileData.lastName : "";
  const profilePhone = profileData?.phone ? profileData.phone : "";
  const profileEmail = profileData?.email ? profileData.email : "";
  const profileBio = profileData?.bio ? profileData.bio : "";
  const dataToShow = {
    "First Name": profileFN,
    "Last Name": profileLN,
    phone: profilePhone,
    email: profileEmail,
    bio: profileBio,
  };

  return (
    <div className="mainContainer">
      <div className="pageTitle">
        <b>{PROFILE_TITLE}</b>
      </div>
      <div className="pageBody">
        <div className="profilePicture">
          <img
            src={profilePictureSource}
            alt={"Profile Picture"}
            title={"Profile Picture"}
            className="profilePicture"
          />
        </div>
        <div className="profileTable">
          <DataTable data={dataToShow} />
        </div>
      </div>
    </div>
  );
}

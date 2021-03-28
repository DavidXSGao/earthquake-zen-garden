import React from "react";
import { useParams } from "react-router-dom";
import DataTable from "./../components/DataTable";
import { formatTimeToDate } from "./../utils/utils";
import "./Detail.css";

export default function Detail({ earthQuakeData }) {
  const { id } = useParams();
  const detailFeature = earthQuakeData?.features?.find(
    (element) => element.id === id
  );
  const detailProperties = detailFeature?.properties;
  const detailTitle = detailProperties?.title ? detailProperties.title : "";
  const detailMagnitude =
    detailProperties?.mag >= 0 ? detailProperties.mag : "";
  const detailTime =
    detailProperties?.time >= 0 ? formatTimeToDate(detailProperties.time) : "";
  const detailStatus = detailProperties?.status ? detailProperties.status : "";
  const detailTsunami =
    detailProperties?.tsunami >= 0 ? detailProperties.tsunami : "";
  const detailType = detailProperties?.type ? detailProperties.type : "";
  const dataToShow = {
    Title: detailTitle,
    Magnitude: detailMagnitude,
    Time: detailTime,
    Status: detailStatus,
    Tsunami: detailTsunami,
    Type: detailType,
  };

  return (
    <div className="mainContainer">
      <div className="pageTitle">
        <b>{detailTitle}</b>
      </div>
      <div className="pageBody detailPageBody">
        <DataTable data={dataToShow} />
      </div>
    </div>
  );
}

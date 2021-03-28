import React from "react";
import moment from "moment";
import EarthquakeSummaryTable from "./../components/EarthquakeSummaryTable";
import {
  EARTHQUAKE_DATA_KEYS,
  EARTHQUAKE_DATA_HEADERS,
} from "./../constants/constants";

function getEarthquakeSummary(earthQuakeData) {
  let res = {};
  let tableValues = [];

  for (let feature of earthQuakeData?.features) {
    let tableValue = [];
    for (let key of EARTHQUAKE_DATA_KEYS) {
      tableValue.push(feature.properties?.[key].toString() || "");
    }
    if (tableValue[tableValue.length - 1]) {
      tableValue[tableValue.length - 1] = moment(
        new Date(parseInt(tableValue[tableValue.length - 1]))
      ).format("MMM DD, YYYY, hh:mm A");
    }
    tableValues.push(tableValue);
  }

  res.tableHeaders = EARTHQUAKE_DATA_HEADERS;
  res.tableValues = tableValues;
  return res;
}

export default function Home({ earthQuakeData }) {
  const homeTitle = earthQuakeData?.metadata?.title
    ? earthQuakeData.metadata.title
    : "";
  return (
    <div className="mainContainer">
      <div className="pageTitle">
        <b>{homeTitle}</b>
      </div>
      <div className="pageBody">
        <EarthquakeSummaryTable
          earthquakeSummary={getEarthquakeSummary(earthQuakeData)}
        />
      </div>
    </div>
  );
}

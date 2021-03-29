import React from "react";
import EarthquakeSummaryTable from "./../components/EarthquakeSummaryTable";

/**
 * Page view of the list of earthquakes as a table
 *
 * @param {Object} earthQuakeData used to display the list of earthquakes
 */
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
        <EarthquakeSummaryTable earthQuakeData={earthQuakeData} />
      </div>
    </div>
  );
}

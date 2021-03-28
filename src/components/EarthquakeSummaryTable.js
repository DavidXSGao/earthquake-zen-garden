import React, { useState, useEffect } from "react";
import "./EarthquakeSummaryTable.css";
import {
  EARTHQUAKE_DATA_KEYS,
  EARTHQUAKE_DATA_HEADERS,
} from "./../constants/constants";
import { cmpArrayValues, formatTimeToDate } from "./../utils/utils";
import { Link } from "react-router-dom";

export default function EarthquakeSummaryTable({ earthQuakeData }) {
  const earthQuakeDataFeatures = earthQuakeData?.features;
  const [features, setFeatures] = useState(earthQuakeDataFeatures);
  const [sortDirection, setSortDirection] = useState({});

  /**
   * Sorts the features array in the state by the key
   * Sorts by asc if it hasn't been previously/last sorted
   * Toggles the sort direction if the same key is sorted
   * @param {String} key of the feature we're storying with
   */
  const sortBy = (key) => {
    const featuresCopy = [...features];
    switch (sortDirection[key]) {
      case "desc":
        setFeatures(
          featuresCopy.sort((a, b) =>
            cmpArrayValues(a.properties?.[key], b.properties?.[key], false)
          )
        );
        setSortDirection({ [key]: "asc" });
        break;
      case "asc":
      default:
        setFeatures(
          featuresCopy.sort((a, b) =>
            cmpArrayValues(a.properties?.[key], b.properties?.[key], true)
          )
        );
        setSortDirection({ [key]: "desc" });
        break;
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {EARTHQUAKE_DATA_HEADERS.map((tableHeader, index) => (
            <td
              className="eqSummaryHeading"
              key={index}
              onClick={() => sortBy(EARTHQUAKE_DATA_KEYS[index])}
            >
              {tableHeader}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map((tableRow, index) => (
          <tr key={index}>
            <td className="eqSummaryValue">
              <Link to={"/detail/" + tableRow.id}>
                <b>{tableRow.properties?.[EARTHQUAKE_DATA_KEYS[0]]}</b>
              </Link>
            </td>
            <td className="eqSummaryValue">
              <b>{tableRow.properties?.[EARTHQUAKE_DATA_KEYS[1]]}</b>
            </td>
            <td className="eqSummaryValue">
              <b>
                {formatTimeToDate(
                  tableRow.properties?.[EARTHQUAKE_DATA_KEYS[2]]
                )}
              </b>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

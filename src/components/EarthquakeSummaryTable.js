import React from "react";
import "./EarthquakeSummaryTable.css";

export default function EarthquakeSummaryTable({ earthquakeSummary }) {
  return (
    <table className="table">
      <tbody>
        <tr>
          {earthquakeSummary.tableHeaders.map((tableHeader, index) => (
            <th key={index}>{tableHeader}</th>
          ))}
        </tr>
        {earthquakeSummary.tableValues.map((tableRow, index) => (
          <tr key={index}>
            {tableRow.map((tableValue, valIndex) => (
              <td key={valIndex} className="eqSummaryValue">
                {tableValue}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

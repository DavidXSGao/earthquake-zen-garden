import React from "react";
import "./DataTable.css";

/**
 * Renders the keys of data as one column and its values as the other
 *
 * @param {Object} data object used to display the contents
 */
export default function DataTable({ data }) {
  return (
    <table className="table">
      <tbody>
        {Object.keys(data).map((dataKey, index) => {
          return (
            <tr key={index}>
              <td className="dataCellKey">
                <b>{dataKey}</b>
              </td>
              <td className="dataCellValue">
                <b>{data[dataKey]}</b>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

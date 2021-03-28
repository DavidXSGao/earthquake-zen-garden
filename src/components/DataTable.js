import React from "react";
import "./DataTable.css";

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
              <td className="dataCellValue">{data[dataKey]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

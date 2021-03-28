import React from "react";
import "./DataTable.css";

function sanitizeKey(key) {
  const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
  return capitalizedKey.split(/(?=[A-Z])/).join(" ");
}

export default function DataTable({ data }) {
  return (
    <table className="table">
      <tbody>
        {Object.keys(data).map((dataKey, index) => {
          return (
            <tr key={index}>
              <td className="dataCellKey">
                <b>{sanitizeKey(dataKey)}</b>
              </td>
              <td className="dataCellValue">{data[dataKey]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

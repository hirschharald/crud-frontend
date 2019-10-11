import React from "react";
import "./styles.scss";

function TableAgentlog(props) {
  return (
    <>
      <h1 className="title level-item">Agentenstatistik</h1>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Status</th>
            <th>Event</th>
            <th>Agent</th>
            <th>Rufnummer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Eschborn</td>
            <td>1101</td>
            <td>1101</td>
            <td />
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableAgentlog;

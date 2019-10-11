import React from "react";
import "./styles.scss";

function TableRufnummern(props) {
  return (
    <>
      <h1 className="title level-item">Rufnummern</h1>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Rufnummer</th>
            <th>Routingtyp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MÃ¼ller</td>
            <td>Text</td>
            <td>
              <button>Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableRufnummern;

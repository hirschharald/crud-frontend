import React from "react";
import "./styles.scss";

function TableMandanten(props) {
  return (
    <>
      <h1 className="title level-item">Mandanten</h1>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Mandant</th>
            <th>ITR</th>
            <th>ID</th>
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

export default TableMandanten;

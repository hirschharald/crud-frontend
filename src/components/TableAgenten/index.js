import React from "react";
import useDataFetch from './../../util/useDataFetch';
import "./styles.scss";

  const  TableAgenten= (props) => {

  /*
  <div style={{width:"110px"}}>
                <Button outline onClick={() => this.toggle(item.id_user)} color="info">Agentlog</Button>{' '}
              </div>
  */


  
  //const data = useDataFetch('http://10.128.129.227:8888/api/agents')
  const data = useDataFetch('https://jsonplaceholder.typicode.com/posts/1');
  const items = data.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.body}</td>
          <td>{item.iduser}</td>
          <td> {item.id}</td>
          <td>{}</td>
          <td>
            
          </td>
        </tr>
      )
  })

  return (
    <div className="container is-fluid">
      <h1 className="title level-item">Agenten</h1>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Nachname</th>
            <th>Vorname</th>
            <th>Logonname</th>
            <th>ID</th>
            <th>Mandant</th>
            <th>
              <form>
                <input />
                <button href="/agenten">Suche</button>
              </form>
            </th>
          </tr>
        </thead>
        <tbody>
            {items}
        </tbody>
      </table>
    </div>
  );
}

export default TableAgenten;

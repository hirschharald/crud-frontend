import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal'

class DataTable extends Component {
//
  toggle = (id) => {
    console.log('... Button clicked = ' + id  )
  }
//
  render() {
    const items = this.props.items.map(item => {
      return (
        <tr key={item.id_user}>
          <td>{item.lastname}</td>
          <td>{item.firstname}</td>
          <td>{item.logonname}</td>
          <td> {item.id_user}</td>
          <td>{item.Mandant}</td>
          <td>
            <div style={{width:"110px"}}>
              <Button outline onClick={() => this.toggle(item.id_user)} color="info">Agentlog</Button>{' '}
            </div>
          </td>
        </tr>
        )
      })
//
    return (
      <Table responsive hover>
        <thead>
          <tr>
            
            <th>Nachname</th>
            <th>Vorname</th>
            <th>Logonname</th>
            <th>Agent Id</th>
            <th>Mandant</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTable
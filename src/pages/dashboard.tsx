import React, { Component } from 'react'
import Container from 'react-bootstrap/esm/Container'

export default class DashboardPage extends Component {
  render() {
    return (
<Container fluid className="p-0 pl-0" >

        <div className='side-menu'> 
        <li> Summary </li>
        <li> Stock </li>
        <li> Customer </li>
        <li> Sale </li>

        </div>

        <div className='dashboard-content'> 

          <div className='dashboard-content-header'>
            </div>

        </div>
      </Container>
    )
  }
}

import React, { Component } from 'react'
import Container from 'react-bootstrap/esm/Container'

import './dashboard.scss';

export default class DashboardPage extends Component {
  render() {
    return (
<Container fluid className="p-0" >

       

        <div className='dashboard-content'> 
        <div className='dashboard-header'></div>
        <div className='side-menu'> 
        <ul> 
        <li> Summary </li>
        <li> Stock </li>
        <li> Customer </li>
        <li> Sale </li>
        </ul>
        </div>

          <div className='dashboard-page'>
            </div>

        </div>
      </Container>
    )
  }
}

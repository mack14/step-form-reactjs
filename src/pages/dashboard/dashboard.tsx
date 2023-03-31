import { Component } from 'react'
import Container from 'react-bootstrap/esm/Container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules, faCashRegister, faCircleUser, faLayerGroup, faPerson } from '@fortawesome/free-solid-svg-icons';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { VerticalBarChart } from '../../components/charts/vertical_bar';

import './dashboard.scss';
import { QuickDetailsComponent } from '../../components/quick_details';
import { TopProductsComponent } from '../../components/top_products';

const quickDetailsData = [

  {
    icon: 'icon',
    parameter: 'Text',
    data: 'Text',
  },
  {
    icon: 'icon',
    parameter: 'Text',
    data: 'Text',
  },
  {
    icon: 'icon',
    parameter: 'Text',
    data: 'Text',
  },
  {
    icon: 'icon',
    parameter: 'Text',
    data: 'Text',
  }

]
export default class DashboardPage extends Component {
  render() {
    return (
      <Container fluid className="p-0" >

        <div className='dashboard-content'>
          <div className='side-menu'>
            <div>  <FontAwesomeIcon icon={faLayerGroup} size="lg" className="awesome-icon" /> <span className='side-menu-item'> Summary </span> </div>
            <div> <FontAwesomeIcon icon={faCapsules} size="lg" className="awesome-icon" /> <span className='side-menu-item'> Stock </span>  </div>
            <div> <FontAwesomeIcon icon={faPerson} size="lg" className="awesome-icon" /> <span className='side-menu-item'> Customer </span>  </div>
            <div> <FontAwesomeIcon icon={faCashRegister} size="lg" className="awesome-icon" /> <span className='side-menu-item'> Sales </span>   </div>
          </div>

          <div className='dashboard-page'>

            <div className='dashboard-header'>
              <Navbar expand="lg">
                <Container fluid>
                <Nav.Item className='username'> Logo </Nav.Item>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll>
                      <Nav.Item> Organisation </Nav.Item>                     
                    </Nav>
                    <Nav.Item className='username'> Username </Nav.Item>
                      <FontAwesomeIcon icon={faCircleUser} size="2xl" style={{color: "#144e2f",}} />
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>

      <VerticalBarChart />

      <div className='summary-details'>
      <TopProductsComponent  title = 'Top Products' rows={quickDetailsData} />
      <QuickDetailsComponent title = 'Quick Details' rows={quickDetailsData} />

      </div>

          </div>

        </div>
      </Container>
    )
  }
}

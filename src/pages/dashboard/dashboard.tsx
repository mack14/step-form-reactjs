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
import { CardsComponent } from '../../components/cards';


const quickDetailsData = [
  {
    parameter: 'Last 24 hours',
    data: '290 Customers',
  },
  {
    parameter: 'Awaiting Process',
    data: '490 orders',
  },
  {
    parameter: 'on hold',
    data: '120 orders',
  },
  {
    parameter: 'Low in stock',
    data: '40 items',
  },
  {
    parameter: 'out of stock',
    data: '42 items',
  }
]

const headerProductData = [
  {
    product: 'Product',
    inventory: 'Stock',
    total: 'Total Sales',
  }
]

const topProductsData = [
  {
    product: 'Panadol',
    inventory: 330,
    cumulativeSales: '910,000 UGX',
  },
  {
    product: 'Coartem',
    inventory: 400,
    cumulativeSales: '630,000 UGX',
  },
  
  {
    product: 'Headex',
    inventory: 200,
    cumulativeSales: '320,000 UGX',
  },
  
  {
    product: 'Ciprofloxacin',
    inventory: 270,
    cumulativeSales: '540,000 UGX',
  },
  {
    product: 'Painex',
    inventory: 500,
    cumulativeSales: '150,000 UGX',
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
                      <Nav.Item style={{ color: "purple", }} className='username'> PHARMAVOLT </Nav.Item>
                    </Nav>
                    <Nav.Item className='username'> Username </Nav.Item>
                    <FontAwesomeIcon icon={faCircleUser} size="2xl" style={{ color: "#250844;", }} />
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>

            <VerticalBarChart />

            <div className='summary-details'>
              <TopProductsComponent title='Top Products' header={headerProductData} rows={topProductsData} />
              <QuickDetailsComponent title='Quick Details' rows={quickDetailsData} />

            </div>

            <div className='bottoms-spacing'></div>

            <h3 className='partners-text'> Partners </h3>

            <div className='card-div'>
              <CardsComponent imagePath={require('./../../assets/images/hezy.jpeg')} title='Designer' name='Hezron' email='hezy@gmail.com' />
              <CardsComponent imagePath={require('./../../assets/images/lisa.jpeg')} title='Pharmacist' name='Lisa Tumwine' email='lisa.teleo@gmail.com' />
              <CardsComponent imagePath={require('./../../assets/images/martin.png')} title='Software Engineer' name='Martin Tumwine' email='martintumwine@gmail.com' />
            </div>

            <div>

              <footer>
                <p> © 2023 Pharma Vault </p>
              </footer>
            </div>


          </div>

        </div>
      </Container>
    )
  }
}

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
    parameter: 'Last 24 hours',
    data: '24 Customers',
  },
  {
    parameter: 'In Process',
    data: '200 orders',
  },
  {
    parameter: 'on hold',
    data: '50 orders',
  },
  {
    parameter: 'out of stock',
    data: '40 items',
  }
]

const headerProductData = [
  {
    product: 'Product',
    inventory: 'Inventory',
    total: 'Total Sales',
  }
]

const topProductsData = [
  {
    product: 'Panadol',
    inventory: 330,
    cumulativeSales: '930,000 UGX',
  },
  {
    product: 'Coatem',
    inventory: 400,
    cumulativeSales: '630,000 UGX',
  },
  {
    product: 'Headtex',
    inventory: 200,
    cumulativeSales: '330,000 UGX',
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
                      <Nav.Item className='username'> Organisation </Nav.Item>
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

           

            <div className='bottoms-spacing'> </div>
            <div>
  <h1 style={{ textAlign: 'left', color: 'purple' }}>Partners</h1>
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
    <div style={{ flex: 1, backgroundColor: 'white' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ textAlign: 'center', fontSize: '1rem' , color: 'purple' }}>GRAPHICS DESIGNER</h1>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'gray', margin: '0 auto' }}></div>
          <p style={{ marginTop: '10px', fontSize: '0.8rem' , color: 'purple' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1rem' , color: 'purple' }}>HEZRON JAHMIA</h2>hezytumwine@gmail.com
          </p>
        </div>
      </div>
    </div>
    <div style={{ flex: 1, backgroundColor: 'white' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ textAlign: 'center', fontSize: '1rem' , color: 'purple' }}>PHARMACIST</h1>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'gray', margin: '0 auto' }}></div>
          <p style={{ marginTop: '10px', fontSize: '0.8rem' , color: 'purple' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1rem' , color: 'purple' }}>DR. LISA JAHGUM</h2>lisa.teleo@gmail.com
          </p>
        </div>
      </div>
    </div>
    <div style={{ flex: 1, backgroundColor: 'white' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ textAlign: 'center', fontSize: '1rem', color: 'purple'  }}>SOFTWARE DEVELOPER</h1>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'gray', margin: '0 auto' }}></div>
          <p style={{ marginTop: '10px', fontSize: '0.8rem' , color: 'purple' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1rem' , color: 'purple' }}>MARTIN TUMWINE</h2>martintumwine@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
    <div style={{ flex: 1 }}>

    </div>
  </div>

  <footer style={{ backgroundColor: 'gray', textAlign: 'center', padding: '10px' }}>
    <p style={{ color: 'purple', margin: '0' }}>© 2023 Pharma Vault</p>
  </footer>
</div>


          </div>




        </div>
      </Container>
    )
  }
}

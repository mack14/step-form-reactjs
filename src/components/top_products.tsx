import Row from 'react-bootstrap/Row';


import './components.scss';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RowDataProp {
    product: string;
    inventory: number;
    cumulativeSales: string;
}

interface headerDataProp {
    product: string;
    inventory: string;
    total: string;
}

interface TopProductsProps {
    title: string;
    header: headerDataProp[],
    rows: RowDataProp[];
}

export const TopProductsComponent = ({ title, header, rows }: TopProductsProps) => {
    return (
        <div className="top-products-content top-product-table  ">
            <h6> {title} </h6>
            <table>
            {header.map((header, index) =>
                    <Row key={index}>
                        <tr>
                            <th>{header.product}</th>
                            <th className='stock-heading'>{header.inventory}</th>
                            <th>{header.total}</th>
                            
                        </tr>
                    </Row>
                )}

                {rows.map((row, index) =>
                    <Row key={index}>
                        <tr>
                            <td>{row.product}</td>
                            <td> <div className='stock'> {row.inventory} </div> </td>
                            <td>{row.cumulativeSales}</td>
                        </tr>
                    </Row>
                )}
            </table>

           <p>Show More</p> 
        </div>
    );
};
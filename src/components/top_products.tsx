import Row from 'react-bootstrap/Row';


import './components.scss';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RowDataProp {
    icon: string;
    parameter: string;
    data: string
}

interface TopProductsProps {
    title: string;
    rows: RowDataProp[];
}

export const TopProductsComponent = ({ title, rows }: TopProductsProps) => {
    return (
        <div className="top-products-content">
            <h6> {title} </h6>

            {rows.map((row, index) =>
                <Row key={index}>
                    <ul>
                        <li><p><img src={row.icon} alt="icon" /></p></li>
                        <li><p>{row.parameter}</p></li>
                        <li><p>{row.data}</p></li>
                    </ul>
                </Row>
            )}
        </div>
    );
};
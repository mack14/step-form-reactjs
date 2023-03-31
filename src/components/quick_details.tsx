import Row from 'react-bootstrap/Row';


import './components.scss';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RowDataProp {
    icon: string;
    parameter: string;
    data: string
}

interface RowHeadingProp {
    
}

interface QuickDetailsProps {
    title: string;
    rows: RowDataProp[];
}

export const QuickDetailsComponent = ({ title, rows }: QuickDetailsProps) => {
    return (
        <div className="quick-details-content">
            <h6> {title} </h6>
            <table>
                <tr>
                    <th>Head</th>
                    <th>Head</th>
                    <th>Head</th>
                </tr>
            {rows.map((row, index) =>
                <Row key={index}>
                    <tr>
                        <td><img src={row.icon} alt="icon" /></td>
                        <td>{row.data}</td>
                        <td>{row.parameter}</td>
                    </tr>
                </Row>
            )}
            </table>
            <button className='click-for-more'><p>Show More</p></button>
        </div>
    );
};
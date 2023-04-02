import Row from 'react-bootstrap/Row';

import './components.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sign } from 'crypto';
interface RowDataProp {
    parameter: string;
    data: string;
    icon: any;
    iconColor: any;
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
                {rows.map((row, index) =>
                    <Row key={index}>
                        <tr>
                            <td className='awesome-icon'>
                                <div>
                                    <FontAwesomeIcon className='icon'
                                        style={{ color: row.iconColor }} size={'lg'} icon={row.icon} />
                                </div>  </td>
                            <td className='quick-font'>{row.data}</td>
                            <td className='quick-font'>{row.parameter}</td>
                            <ul className='line'> </ul>
                        </tr>
                    </Row>
                )}
            </table>
        </div>
    );
};
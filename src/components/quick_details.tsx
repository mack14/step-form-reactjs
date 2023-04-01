import Row from 'react-bootstrap/Row';

import './components.scss';
interface RowDataProp {
    parameter: string;
    data: string
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
                        <td>{row.data}</td>
                        <td>{row.parameter}</td>
                    </tr>
                </Row>
            )}
            </table>
        </div>
    );
};
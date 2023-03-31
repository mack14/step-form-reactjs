import Row from 'react-bootstrap/Row';


import './components.scss';

interface RowDataProp {
    icon: string;
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
          
            {rows.map((row, index) =>
                <Row key={index}>
                    <img src={row.icon} alt="icon" />
                        <p>{row.parameter}</p>
                        <p>{row.data}</p>
                </Row>
            )}
        </div>
    );
};
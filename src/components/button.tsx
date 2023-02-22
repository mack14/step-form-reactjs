import Button from 'react-bootstrap/Button';

interface ButtonComponentProps {
    color: string;
    text: string;
    type?: 'button' | 'submit';
    textColor: string;
    onClick: () => void;
        
    }


export const ButtonComponent = ({color, text, textColor, type = 'button', onClick}: ButtonComponentProps) => (
    
    <Button  
    onClick={onClick}
    style={{backgroundColor: color,
     color: textColor, 
     width: '100%'}} 
     variant="outline-light">
        {text}
    </Button>
);

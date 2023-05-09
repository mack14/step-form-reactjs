
import './components.scss';

interface CardProps {
    email: string;
    name: string;
    title: string;
    imagePath: string;

}

export const CardsComponent = ({title, name, email, imagePath}: CardProps)  => {

    return (
        <div className="card-content">
        <h5 className='heading'> {title} </h5>
        <img src={imagePath} alt="card-image" />
        <h5 className='name'> {name} </h5>
        <p className='email'> {email} </p>
        </div>
    );
    
};
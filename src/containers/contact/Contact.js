import RoundImage from '../../components/round-image/RoundImage';
import plantImage from '../../images/plant.png';
import './Contact.scss';

function Contact() {

    return (
        <div className={'contact'}>
            <div className={'contact__image-container'}>
                <RoundImage imageSrc={plantImage} altName={'plant'} />
            </div>
            <div className={'contact__info-container'}>
                <div className={'contact__info'}>
                    <label>Email:</label>
                    <span className={'contact__info-email'}>tim.nguyen2112@gmail.com</span>
                </div>
                <div className={'contact__info'}>
                    <label>GitHub:</label>
                    <span><a href='https://github.com/TimNguyen21' target='_blank'>GitHub</a></span>
                </div>
                <div className={'contact__info'}>
                    <label>LinkedIn:</label>
                    <span><a href='https://www.linkedin.com/in/timnguyen21/' target='_blank'>LinkedIn</a></span>
                </div>
            </div>
        </div>
    )
}

export default Contact;

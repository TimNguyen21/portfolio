import RoundImage from '../../components/round-image/RoundImage';
import userImage from '../../images/portfolio.png';
import './Home.scss';

function Main() {

    return (
        <section className={'home'}>
            <div className={'home__info'}>
                <label className={'main__info-label'}>Hello, I'm Tim Quoc Nguyen</label>
                <br></br>
                <br></br>
                <br></br>
                <span className={'home__info-summary'}>
                    "I am a Front-end Developer with a passion for solving puzzles. 
                    To me, coding is like solving puzzles, 
                    and I thrive on learning new technologies while continuously expanding my skill set."
                </span>
            </div>
            <div className={'home__user-image-container'}>
                <RoundImage imageSrc={userImage} altName={'user'}/>
            </div>
        </section>
    )
}

export default Main;

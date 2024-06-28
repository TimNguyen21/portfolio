import RoundImage from '../../components/round-image/RoundImage';
import userImage from '../../images/portfolio.png';
import './Main.scss';

function Main() {

    return (
        <section className={'main'}>
            <div className={'main__info'}>
                <label className={'main__info-label'}>Hello, I'm Tim Quoc Nguyen</label>
                <br></br>
                <br></br>
                <br></br>
                <span className={'main__info-summary'}>
                    "I am a Front-end Developer with a passion for solving puzzles. 
                    To me, coding is like solving puzzles, 
                    and I thrive on learning new technologies while continuously expanding my skill set."
                </span>
            </div>
            <div className={'main__user-image-container'}>
                <RoundImage imageSrc={userImage} altName={'user'}/>
            </div>
        </section>
    )
}

export default Main;

import './Main.scss';
import userImage from '../../images/portfolio.png';

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
                <img className={'main__user-image'} src={userImage} alt={'user'}/>
            </div>
        </section>
    )
}

export default Main;

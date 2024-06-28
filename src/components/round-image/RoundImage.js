import './RoundImage.scss';

function RoundImage(props) {
    const { imageSrc, altName  } = props;

    return (
        <div className={'round-image'}>
            <img src={imageSrc} alt={altName}/>
        </div>
    )
}

export default RoundImage;

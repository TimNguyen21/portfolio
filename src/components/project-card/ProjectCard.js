import './ProjectCard.scss';

function ProjectCard (props) {
    const { name, screenshotImage, pageLink, gitHubLink} = props;

    return (
        <div className={'project-card'}>
            <div className={'project-card__name'}><span>Project Name: </span>{name}</div>
            <div className={'project-card__screenshot'}><img src={screenshotImage} alt={name}/></div>
            <div className={'project-card__page-links'}>
                <div className={'project-card__page-link'}>
                    <span>Webpage Link: </span><a href={pageLink} target='_blank' rel="noreferrer">{name}</a>
                </div>
                <div className={'project-card__page-link'}>
                    <span>GitHub Link: </span><a href={gitHubLink} target='_blank' rel="noreferrer">GitHub Repo</a>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard;

import './ProjectCard.scss';

function ProjectCard (props) {
    const { name, screenshotImage, techStacks, pageLink, gitHubLink} = props;

    function checkForPageLink() {
       return pageLink ? <a href={pageLink} target='_blank' rel="noreferrer">{name}</a> : 'N/A';
    }

    return (
        <div className={'project-card'}>
            <div className={'project-card__name'}><span>Project Name: </span>{name}</div>
            <div className={'project-card__screenshot'}><img src={screenshotImage} alt={name}/></div>
            <div className={'project-card__page-links'}>
                <div className={'project-card__page-link'}>
                    <span>Webpage Link: </span>{checkForPageLink()}
                </div>
                <div className={'project-card__page-link'}>
                    <span>GitHub Link: </span><a href={gitHubLink} target='_blank' rel="noreferrer">GitHub Repo</a>
                </div>
                <div className={'project-card__page-link'}>
                    <span>Tech Stacks: </span>{techStacks}
                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard;

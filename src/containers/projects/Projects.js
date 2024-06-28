import './Projects.scss';
import ProjectCard from '../../components/project-card/ProjectCard';
import projectData from '../../data/ProjectData';

function Projects () {

    function renderProjectCards() {
        return projectData.map(project => {
            return <ProjectCard name={project.name}
                                screenshotImage={project.screenshotImage}
                                pageLink={project.pageLink}
                                gitHubLink={project.gitHubLink}/>
        });
    }

    return (
        <div className={'projects'}>
            {renderProjectCards()}
        </div>
    )
}

export default Projects;

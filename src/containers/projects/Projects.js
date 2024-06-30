import './Projects.scss';
import ProjectCard from '../../components/project-card/ProjectCard';
import projectData from '../../data/ProjectData';

function Projects() {

    function renderProjectCards() {
        const sortedProjectDataByNewest = projectData.sort((a, b) => b.id - a.id);
        
        return sortedProjectDataByNewest.map(project => {
            return <ProjectCard id={project.id}
                                key={project.id}
                                name={project.name}
                                screenshotImage={project.screenshotImage}
                                techStacks={project.techStacks}
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

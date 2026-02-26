import projectsConfig from '../data/projects.json';

export default function Projects({t}) {
    const projects = projectsConfig.projects;
    return (
        <div className="page-container">
            <div className="frame">
                <h5 className="title">{t.projects.title}</h5>
                <p>{t.projects.overview}</p>
            </div>
            {projects.map((project, key) => (
                <div className="frame project" key={key}>
                    <div className="project_info">
                        <h2>{project.name}</h2>
                        <p><b>{t.projects.descriptions[project.name]}</b></p>
                    </div>
                    <ul className="project_links link">
                        {project.links.map((link, key) => (
                            <li className="link" key={key}><a href={link.link} className="link"><b>{link.name}</b></a></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

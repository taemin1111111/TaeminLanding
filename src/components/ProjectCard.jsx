import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-image-container">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="project-image"
          />
        ) : (
          <div className="project-image-placeholder">
            {project.icon || '📱'}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard

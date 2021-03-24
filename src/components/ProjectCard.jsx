import React from 'react'
import '@styles/components/ProjectCard.pcss'
import Button from '@components/Button'
import ProjectCover from '@images/project-card-cover.png'
import { Zap, GitHub } from 'react-feather'

const ProjectCard = (props) => {
  const {} = props
  return (
    <div className="projectCard">
      <img src={ProjectCover} alt="" />
      <h2 className="projectCard__title">Project Name</h2>
      <small className="projectCard__release">Release: 23 March 2021</small>
      <p className="projectCard__description">
        Project description get from api request or written directly in the code.
      </p>
      <div className="projectCard__buttons">
        <Button message="Ver proyecto" icon={<Zap />} />
        <Button message="Ver repositorio" icon={<GitHub />} />
      </div>
    </div>
  )
}

export default ProjectCard

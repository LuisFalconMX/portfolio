import React from 'react'
import PropTypes from 'prop-types'
import '@styles/components/Project.pcss'
import Button from '@components/Button'
import { Zap, GitHub } from 'react-feather'
import ProjectCover from '@images/google-clon-cover.png'

const Project = (props) => {
  const { title, date, description, liveLink, repository, image } = props
  return (
    <div className="project">
      <div className="project__content">
        <h1 className="project__title">Webkit CLI</h1>
        <small className="project__date">23 March 2021</small>
        <p className="project__description">
          Project description get from api request or written directly in the code.
        </p>
        <div className="project__buttons">
          <Button icon={<Zap />} message="Ver proyecto en vivo" />
          <Button icon={<GitHub />} message="Ir al repositorio" />
        </div>
      </div>
      <div className="project__cover">
        <img className="project__image" src={ProjectCover} alt="" />
      </div>
    </div>
  )
}

export default Project

import React from 'react'
import PropTypes from 'prop-types'
import '@styles/components/Project.pcss'
import Button from '@components/Button'
import { Zap, GitHub } from 'react-feather'
import ProjectCover from '@images/google-clon-cover.png'

const Project = (props) => {
  const { title, description, date, url, repository, cover, alt } = props
  let currentDate = ''

  if (date) {
    let dates = date.split('-')
    let year = dates[0]
    let month = dates[1]
    let day = dates[2]

    let monthParse

    switch (month) {
      case '01':
        monthParse = 'Enero'
        break

      case '02':
        monthParse = 'Febrero'
        break

      case '03':
        monthParse = 'Marzo'
        break

      default:
        break
    }

    currentDate = `${day} de ${monthParse} del ${year}`
  }

  return (
    <div className="project">
      <div className="project__content">
        <h1 className="project__title">{title}</h1>
        {date && <small className="project__date">{currentDate}</small>}
        <p className="project__description">{description}</p>
        <div className="project__buttons">
          {url && <Button icon={<Zap />} message="Ver proyecto en vivo" link={url} />}
          {repository && <Button icon={<GitHub />} message="Ir al repositorio" link={repository} />}
        </div>
      </div>
      <div className="project__cover">
        <img className="project__image" src={cover} alt={alt} />
      </div>
    </div>
  )
}

export default Project

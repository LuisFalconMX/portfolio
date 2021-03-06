import React from 'react'
import '@styles/components/Project.pcss'
import '@styles/components/ProjectCard.pcss'
import Button from '@components/Button'
import { Zap, GitHub } from 'react-feather'

const Project = (props) => {
  const {
    title,
    description,
    date,
    url,
    repository,
    cover,
    alt,
    variant
  } = props
  let currentDate = ''

  if (date) {
    const dates = date.split('-')
    const year = dates[0]
    const month = dates[1]
    const day = dates[2]

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

      case '04':
        monthParse = 'Abril'
        break

      case '05':
        monthParse = 'Mayo'
        break

      case '06':
        monthParse = 'Junio'
        break

      case '07':
        monthParse = 'Julio'
        break

      case '08':
        monthParse = 'Agosto'
        break

      case '09':
        monthParse = 'Septiembre'
        break

      case '10':
        monthParse = 'Octubre'
        break

      case '11':
        monthParse = 'Noviembre'
        break

      case '12':
        monthParse = 'Diciembre'
        break

      default:
        break
    }

    currentDate = `${day} de ${monthParse} del ${year}`
  }

  if (variant === 'card') {
    return (
      <div className="projectCard">
        <div>
          <img className="projectCard__image" src={cover} alt={alt} />
          <h3 className="projectCard__title">{title}</h3>
          {date && (
            <small className="projectCard__release">{currentDate}</small>
          )}
          <p className="projectCard__description">{description}</p>
        </div>
        <div className="projectCard__buttons">
          {url && <Button link={url} message="Ver proyecto" icon={<Zap />} />}
          {repository && (
            <Button link={repository} message="Repositorio" icon={<GitHub />} />
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="project">
      <div className="project__content">
        <h3 className="project__title">{title}</h3>
        {date && <small className="project__date">{currentDate}</small>}
        <p className="project__description">{description}</p>
        <div className="project__buttons">
          {url && <Button icon={<Zap />} message="Ver proyecto" link={url} />}
          {repository && (
            <Button
              icon={<GitHub />}
              message="Ir al repositorio"
              link={repository}
            />
          )}
        </div>
      </div>
      <div className="project__cover">
        <img className="project__image" src={cover} alt={alt} />
      </div>
    </div>
  )
}

export default Project

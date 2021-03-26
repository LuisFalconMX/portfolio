import React from 'react'
import '@styles/components/Jumbotron.pcss'

const Jumbotron = (props) => {
  const {} = props
  return (
    <div className="jumbotron">
      <h3 className="jumbotron__subtitle">Proyectos</h3>
      <h1 className="jumbotron__title">
        Mira todos los proyectos que he realizado como Frontend Developer
      </h1>
    </div>
  )
}

export default Jumbotron

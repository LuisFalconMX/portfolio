import React from 'react'
import Button from '@components/Button'
import { Home } from 'react-feather'
import '@styles/components/NotFound.pcss'

const NotFound = () => (
  <>
    <div className="NotFound">
      <h1 className="NotFound__title">404</h1>
      <h2 className="NotFound__subtitle">
        No se ha encontrado la pagina que solicitaste
      </h2>
      <Button message="Regresar al sitio" navigation="/" icon={<Home />} />
    </div>
  </>
)

export default NotFound

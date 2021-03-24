import React from 'react'
import '@styles/components/Footer.pcss'
import Logo from '@images/logo.png'

const Footer = (props) => {
  const { buttons } = props

  return (
    <footer className="footer">
      <div>
        <div className="footer__sitemark">
          <img className="footer__logo" src={Logo} alt="" />
          <h4 className="footer__title">luisfalconmx</h4>
        </div>
        <small className="footer__leyend">2021 - luisfalconmx</small>
      </div>
      <div>
        <p className="footer__description">
          Soy Frontend Developer especializado en JavaScript. Implemento tecnologías como Webpack,
          React, ESLint, Babel, ECMAScript 6, entre otras para construir aplicaciones web modernas.
        </p>
        <div className="footer__links">{buttons}</div>
      </div>
    </footer>
  )
}

export default Footer

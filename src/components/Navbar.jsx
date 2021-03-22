import React from 'react'
import '@styles/components/Navbar.pcss'
import Logo from '@images/logo.png'
import { Download } from 'react-feather'
import Button from './Button'

const Navbar = () => (
  <header className="navbar">
    <div className="navbar__sitemark">
      <img className="navbar__logo" src={Logo} alt="d" width="70" />
      <div className="navbar__title">luisfalconmx</div>
    </div>
    <nav className="navbar__menu">
      <ul className="navbar__links">
        <li>
          <a href="link">Inicio</a>
        </li>
        <li>
          <a href="link">Proyectos</a>
        </li>
      </ul>
      <Button
        type="button"
        message="Descargar CV"
        icon={<Download />}
        iconPosition="right"
        link="projects"
      />
    </nav>
  </header>
)

export default Navbar

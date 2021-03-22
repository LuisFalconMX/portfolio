import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '@styles/components/Navbar.pcss'

const Navbar = (props) => {
  const { icon, logo, logoAlt, title, button } = props

  return (
    <header className="navbar">
      <div className={logo ? 'navbar__sitemark navbar__sitemark--logo' : 'navbar__sitemark'}>
        {logo && <img className="navbar__logo" src={logo} alt={logoAlt} width="70" />}
        {title && <div className="navbar__title">{title}</div>}
      </div>
      {icon && <div className="navbar__icon">{icon}</div>}
      <nav className="navbar__menu">
        <ul className="navbar__links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
        </ul>
        {button && <div className="navbar__button">{button}</div>}
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  icon: PropTypes.shape({ root: PropTypes.string }).isRequired,
  logo: PropTypes.shape({ root: PropTypes.string }),
  logoAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  button: PropTypes.shape({ root: PropTypes.string })
}

Navbar.defaultProps = {
  logo: null,
  logoAlt: '',
  button: null
}

export default Navbar

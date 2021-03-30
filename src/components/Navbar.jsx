import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '@styles/components/Navbar.pcss'
import { Menu, X } from 'react-feather'

const Navbar = (props) => {
  const { logo, logoAlt, title, button, open, setOpen } = props

  return (
    <header className="navbar">
      <div className={logo ? 'navbar__sitemark navbar__sitemark--logo' : 'navbar__sitemark'}>
        {logo && <img className="navbar__logo" src={logo} alt={logoAlt} width="70" />}
        {title && <div className="navbar__title">{title}</div>}
      </div>
      <div className="navbar__icon" open={open} onClick={() => setOpen(!open)}>
        {open === true ? <X size="40" /> : <Menu size="40" />}
      </div>
      <nav className={open === true ? 'navbar__menu navbar__menu--open' : 'navbar__menu'}>
        <ul className="navbar__links">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setOpen(false)}>
              Proyectos
            </Link>
          </li>
          <li>
            <a href="https://blog.luisfalconmx.com/" target="_blank">
              Blog
            </a>
          </li>
        </ul>
        {button && <div className="navbar__button">{button}</div>}
      </nav>
    </header>
  )
}

Navbar.propTypes = {
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

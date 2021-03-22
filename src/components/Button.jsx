import React from 'react'
import PropTypes from 'prop-types'
import '@styles/components/Button.pcss'
import { Link } from 'react-router-dom'

const Button = (props) => {
  const { message, link, size, icon, iconPosition } = props
  let currentSize = ''
  let currentIconPosition = ''

  if (size) {
    currentSize = size === 'big' ? 'button--big' : ''
  }

  if (iconPosition) {
    currentIconPosition = iconPosition === 'right' ? 'button__icon--right' : 'button__icon--left'
  }

  if (link) {
    return (
      <div>
        <Link to={link}>
          <button className={`button ${currentSize} ${currentIconPosition}`} type="button">
            {icon && <div className="button__icon">{icon}</div>}
            {message}
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <button className={`button ${currentSize} ${currentIconPosition}`} type="button">
        {icon && <div className="button__icon">{icon}</div>}
        {message}
      </button>
    </div>
  )
}

Button.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.shape({ root: PropTypes.string }),
  iconPosition: PropTypes.string
}

Button.defaultProps = {
  link: '',
  size: '',
  icon: '',
  iconPosition: ''
}

export default Button

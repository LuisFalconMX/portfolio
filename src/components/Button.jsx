import React from 'react'
import PropTypes from 'prop-types'
import '@styles/components/Button.pcss'
import { Link } from 'react-router-dom'

const Button = (props) => {
  const {
    message,
    navigation,
    link,
    size,
    icon,
    iconPosition,
    variant,
    color,
    align,
    spacing
  } = props
  let currentSize = ''
  let currentIconPosition = ''
  let currentVariant = ''
  let currentColor = ''
  let currentAlign = ''
  let currentSpacing = ''

  if (size) {
    currentSize = size === 'big' ? 'button--big' : ''
  }

  if (icon) {
    currentIconPosition =
      iconPosition === 'right' ? 'button__icon--right' : 'button__icon--left'
  }

  if (variant) {
    currentVariant = variant === 'rounded' ? 'button__rounded' : ''
  }

  if (color) {
    if (color === 'light') currentColor = 'button--light'
    if (color === 'dark') currentColor = 'button--dark'
    if (color === 'transparent') currentColor = 'button--transparent'
  }

  if (align) {
    if (align === 'left') currentAlign = 'button--left'
    if (align === 'center') currentAlign = 'button--center'
    if (align === 'right') currentAlign = 'button--right'
  }

  if (spacing) {
    if (spacing === 'big') currentSpacing = 'button--spacing-big'
  }

  if (navigation) {
    return (
      <Link to={navigation}>
        <button
          className={`button ${currentColor} ${currentVariant} ${currentSize} ${currentIconPosition} ${currentAlign} ${currentSpacing}`}
          type="button"
        >
          {icon && <div className="button__icon">{icon}</div>}
          {message && <div className="button__message">{message}</div>}
        </button>
      </Link>
    )
  }

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <button
          className={`button ${currentColor} ${currentSize} ${currentIconPosition} ${currentVariant} ${currentAlign}`}
          type="button"
        >
          {icon && <div className="button__icon">{icon}</div>}
          {message && <div className="button__message">{message}</div>}
        </button>
      </a>
    )
  }

  return (
    <button
      className={`button ${currentColor} ${currentSize} ${currentIconPosition} ${currentVariant} ${currentAlign}`}
      type="button"
    >
      {icon && <div className="button__icon">{icon}</div>}
      {message && <div className="button__message">{message}</div>}
    </button>
  )
}

Button.propTypes = {
  message: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.shape({ root: PropTypes.string }),
  iconPosition: PropTypes.string
}

Button.defaultProps = {
  message: '',
  link: '',
  size: '',
  icon: [],
  iconPosition: ''
}

export default Button

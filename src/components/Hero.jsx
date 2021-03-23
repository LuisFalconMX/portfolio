import React from 'react'
import PropTypes from 'prop-types'
import '@styles/components/Hero.pcss'

const Hero = (props) => {
  const { title, description, buttons, image, imageAlt } = props

  return (
    <div className="hero">
      <div className="hero__content-left">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__description">{description}</p>
        {buttons && <div className="hero__buttons">{buttons}</div>}
      </div>
      <div className="hero__content-right">
        {image && <img className="hero__image" src={image} alt={imageAlt} />}
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.shape({ root: PropTypes.string }),
  imageAlt: PropTypes.string
}

Hero.defaultProps = {
  description: null,
  buttons: [],
  image: '',
  imageAlt: ''
}

export default Hero

import React from 'react'
import PropTypes from 'prop-types'
import '@styles/components/Package.pcss'
import Button from '@components/Button'
import { ChevronRight } from 'react-feather'
import NPMLogo from '@images/npm-logo.png'

const Package = (props) => {
  const { provider, title, description, link } = props

  return (
    <div className="package">
      <img className="package__image" src={NPMLogo} alt="" />
      <h3 className="package__title">webkit-cli</h3>
      <p className="package__description">
        Set a good description and readme file for this package
      </p>
      <Button message="Ver en NPM" icon={<ChevronRight />} iconPosition="right" />
    </div>
  )
}

export default Package

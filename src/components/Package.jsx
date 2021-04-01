import React from 'react'
import PropTypes from 'prop-types'
import '@styles/components/Package.pcss'
import Button from '@components/Button'
import { ChevronRight } from 'react-feather'
import NPMLogo from '@images/npm-logo.png'
import DockerLogo from '@images/docker-logo.png'

const Package = (props) => {
  const { title, description, url, provider } = props
  let currentProvider
  let currentMessage

  currentProvider = provider === 'npm' ? 'NPM' : 'Dockerhub'
  currentMessage = `Ver en ${currentProvider}`

  return (
    <div className="package">
      <img className="package__image" src={provider === 'npm' ? NPMLogo : DockerLogo} alt="" />
      <h3 className="package__title">{title}</h3>
      <p className="package__description">{description}</p>
      <Button message={currentMessage} link={url} icon={<ChevronRight />} iconPosition="right" />
    </div>
  )
}

export default Package

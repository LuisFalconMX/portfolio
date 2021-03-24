import React from 'react'
import PropTypes from 'prop-types'
import '@styles/components/Theme.pcss'
import { ExternalLink } from 'react-feather'
import Button from '@components/Button'
import ThemeCover from '@images/origin-theme-cover.png'

const Theme = (props) => {
  const { title, link, cover } = props
  return (
    <div className="theme">
      <div className="theme__content">
        <h3 className="theme__title">One Dark Pro</h3>
        <div className="theme__field">
          <Button icon={<ExternalLink />} color="transparent" />
        </div>
      </div>
      <img className="theme__image" src={ThemeCover} alt="#" />
    </div>
  )
}

export default Theme

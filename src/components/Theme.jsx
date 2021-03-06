import React from 'react'
import '@styles/components/Theme.pcss'
import { ExternalLink } from 'react-feather'
import Button from '@components/Button'

const Theme = (props) => {
  const { title, url, cover } = props
  return (
    <div className="theme">
      <div className="theme__content">
        <h3 className="theme__title">{title}</h3>
        <div className="theme__field">
          <Button link={url} icon={<ExternalLink />} color="transparent" />
        </div>
      </div>
      <img className="theme__image" src={cover} alt="#" />
    </div>
  )
}

export default Theme

import React from 'react'
import '@styles/components/SocialBar.pcss'

const SocialBar = (props) => {
  const { icons } = props

  return <div className="social-bar">{icons}</div>
}

export default SocialBar

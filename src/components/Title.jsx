import React from 'react'
import '@styles/components/Title.pcss'

const Title = (props) => {
  const { text } = props

  return <h2 className="Title">{text}</h2>
}

export default Title

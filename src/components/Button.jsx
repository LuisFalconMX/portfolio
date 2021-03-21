import React from 'react'
import '@styles/components/Button.pcss'

const Button = (props) => {
  const { type, variant, message, icon } = props
  return (
    <div>
      <button className="button" type={type}>
        {message}
      </button>
    </div>
  )
}

export default Button

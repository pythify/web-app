import React from 'react'
import PropTypes from 'prop-types'
import { Logo } from '../components/atoms'

export function LogoTemplate({ children }) {
  return (
    <div className="LogoTemplate">
      <Logo />
      {children}
    </div>
  )
}

LogoTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

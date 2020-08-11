import React from 'react'
import PropTypes from 'prop-types'

export function Player({ url }) {
  return (
    <div>
      <audio controls src={url} />
    </div>
  )
}

Player.propTypes = {
  url: PropTypes.string
}

Player.defaultProps = {
  url: ''
}

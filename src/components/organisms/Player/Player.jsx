import React from 'react'
import { useSelector } from 'react-redux'

export function Player() {
  const { playingSong } = useSelector((state) => state.player)

  return (
    <div>
      <audio controls autoPlay src={playingSong} />
    </div>
  )
}

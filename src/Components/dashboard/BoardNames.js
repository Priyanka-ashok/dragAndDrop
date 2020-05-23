import React from 'react'
import { Board } from './Board'

export function BoardNames ({ boardNames }) {
  return (
    boardNames.map(item => {
      return (
        <li key={item.id}>
          <Board item={item} />
        </li>
      )
    })

  )
}

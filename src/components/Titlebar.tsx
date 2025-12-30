import React from 'react'

export default function Titlebar({title}: {title?: string} ) {
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}

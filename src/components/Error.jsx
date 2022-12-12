import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Esta pagina no existe</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

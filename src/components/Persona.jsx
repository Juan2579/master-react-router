import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

  const {nombre, apellido} = useParams()
  console.log(nombre)

  const navigate = useNavigate()

  const redirectPerson = (e) => {
    e.preventDefault()

    const target = e.target
    const person = {
      name: target.nombre.value,
      apellido: target.apellido.value
    }

    navigate(`/persona/${person.name}/${person.apellido}`)
  }

  return (
    <div>
      {!nombre && !apellido && <h1>No hay ninguna persona</h1>}
      {nombre && <h1>Pagina de persona: {nombre} {apellido}</h1>}
     
      <p>Esta es la pagina de persona</p>

      <form onSubmit={redirectPerson}>
        <input type="text" name='nombre' required />
        <input type="text" name='apellido' required />
        <input type="submit" name='enviar' value="Enviar" />
      </form>
    </div>
  )
}

import React from 'react'
import {Routes, Route, BrowserRouter, NavLink} from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

      <h1>Cabecera</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink className="" to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/articulos">Articulos</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
      <hr />

      {/* Cargar componentes */}
      {/* Se carga el componente que coincide con el path */}
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*'element={<Error />} />
      </Routes>
      <hr />
      <footer>Este es el pie de pagina</footer>
    </BrowserRouter>
  )
}

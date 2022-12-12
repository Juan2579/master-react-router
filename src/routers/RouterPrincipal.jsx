import React from 'react'
import {Routes, Route, BrowserRouter, NavLink, Navigate} from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'
import { Persona } from '../components/Persona'
import { PanelControl } from '../components/PanelControl'
import { InicioPanel } from '../components/panel/InicioPanel'
import {Crear} from '../components/panel/Crear'
import {Gestion} from '../components/panel/Gestion'
import {Acerca} from '../components/panel/Acerca'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

      <h1>Cabecera</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink className={
              ({isActive}) => isActive ? "activado": ""
            } to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink className={
              ({isActive}) => isActive ? "activado": ""
            }  to="/articulos">Articulos</NavLink>
          </li>
          <li>
            <NavLink className={
              ({isActive}) => isActive ? "activado": ""
            } to="/contacto">Contacto</NavLink>
          </li>
          <li>
            <NavLink className={
              ({isActive}) => isActive ? "activado": ""
            } to="/panel">Panel de control</NavLink>
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

        <Route path='/persona/:nombre/:apellido' element={<Persona />} />
        <Route path='/persona/:nombre' element={<Persona />} />
        <Route path='/persona' element={<Persona />} />

        <Route path='/redirigir' element={<Navigate to="/persona/victor/robles" />} />
        <Route path='/panel/*' element={<PanelControl />}>
            <Route index element={<InicioPanel />} />
            <Route path='inicio' element={<InicioPanel />} />
            <Route path='crear' element={<Crear />} />
            <Route path='gestion' element={<Gestion />} />
            <Route path='acerca' element={<Acerca />} />
        </Route>


        <Route path='*'element={<Error />} />
      </Routes>
      <hr />
      <footer>Este es el pie de pagina</footer>
    </BrowserRouter>
  )
}

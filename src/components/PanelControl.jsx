import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
      <h1>Panel de control</h1>
      <p>Elige una de estas opciones</p>
      <nav>
        <ul>
          <li>
            <NavLink to="/panel/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/panel/crear">Crear articulos</NavLink>
          </li>
          <li>
            <NavLink to="/panel/gestion">Gestion usuarios</NavLink>
          </li>
          <li>
            <NavLink to="/panel/acerca">Acerca de </NavLink>
          </li>
        </ul>
      </nav>

      <div>
        {/* cargar los componentes de las subrutas */}
        <Outlet />
      </div>
    </div>
  )
}

import React from 'react'
import { IRoute } from '../../router/routes'
import { NavLink, Outlet } from 'react-router-dom'

interface NavbarProps {
    routes: IRoute[],
    isVertical: boolean
}

const NavBar:React.FC<NavbarProps> = ({routes, isVertical}) => {
  return (
   <>
    <nav className={`navbar ${isVertical ? "vertical" : "horizontal"}`}>
        {routes.map(({label, path}) => (
            <NavLink to={path}>
            {label}
            </NavLink>
        ))}
    </nav>
    <Outlet/>
   </>
  )
}

export default NavBar
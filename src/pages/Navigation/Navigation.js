import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/Navigation.css"
export default function Navigation() {
    return (
        <div className={'Navigation component'}>
            <span>Navigation</span>
            <nav style={{ display: 'flex', gap: '10px' }}>
                <NavLink to={'/pick-city'}>pick city</NavLink>
                <NavLink to={'/'}>Home</NavLink>
            </nav>
        </div>
    )
}

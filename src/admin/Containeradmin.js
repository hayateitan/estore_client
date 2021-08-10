import React from 'react'
import NavbarAdmin from './NavbarAdmin'



export const Container = ({ children }) => {

    return (
        <div>

            <NavbarAdmin></NavbarAdmin>

            {children}
        </div>
    )
}


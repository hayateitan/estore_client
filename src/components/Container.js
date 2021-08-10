import React from 'react'
import Navbarr from './Navbarr'

export const Container = ({ children }) => {

    return (
        <div>
            <Navbarr></Navbarr>
            {children}
        </div>
    )
}
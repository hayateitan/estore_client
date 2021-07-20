import React from 'react'
import Navbarr from './Navbarr'
import Navicon from './Navicon'


export const Container = ({ children }) => {

    return (
        <div>

            <Navbarr></Navbarr>
            <Navicon></Navicon>
            {children}
        </div>
    )
}



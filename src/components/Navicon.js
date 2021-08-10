import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';


const Navicon = () => {

    return (

        <Navbar id="Navicon" sticky="top"  >

            <ul className="HorizontalList">
                <li className="HorizontalList__Item ">

                    <Link to="/Account" className="Heading u-h6" >
                        <FontAwesomeIcon icon={faUser} color='white' size="1x" />
                    </Link>
                </li>

                <li className="HorizontalList__Item ">



                    <FontAwesomeIcon icon={faSearch} color='white' size="1x" />

                </li>

                <li className="HorizontalList__Item ">
                    <Link to="/Panier" className="Heading u-h6" >
                        <FontAwesomeIcon icon={faShoppingCart} color='white' size="1x" />
                    </Link>
                </li>



            </ul>

        </Navbar>

    )
}

export default Navicon


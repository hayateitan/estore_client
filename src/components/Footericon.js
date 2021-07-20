import React from 'react'
import { Icon } from '@iconify/react';
import applePay from '@iconify-icons/logos/apple-pay';
import mastercardIcon from '@iconify-icons/logos/mastercard';
import visaIcon from '@iconify-icons/logos/visa';
import paypalIcon from '@iconify-icons/logos/paypal';
import { Navbar } from 'react-bootstrap';
const Footericon = () => {
    return (
        <Navbar id="Footericon" expand="lg" fixed="bottom"  >



            <div id="Footer">
                <p>
                    © THE RESELLER 2.0
                </p>
            </div>
            <div id="Footerpayul">

                <ul className="HorizontalList">
                    <li className="HorizontalList__Item ">

                        <Icon icon={applePay} />
                    </li>
                    <li className="HorizontalList__Item ">

                        <Icon icon={mastercardIcon} />
                    </li>
                    <li className="HorizontalList__Item ">

                        <Icon icon={visaIcon} />
                    </li>

                    <li className="HorizontalList__Item ">
                        <Icon icon={paypalIcon} />
                    </li>
                </ul>

            </div>

        </Navbar>





    )
}

export default Footericon

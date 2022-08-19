import React from 'react';
import Logo from '../Logo/Logo';
import NavigationLink from '../UI/NavLink/NavigationLink';
import './Footer.scss';
import {
    SiTelegram,
    SiInstagram,
    SiFacebook,
    SiWhatsapp
} from 'react-icons/si';


const Footer: React.FC = () => {

    return (
        <div className="footer">
            <Logo />
            <nav>
                <ul>
                    <li>
                        <NavigationLink to='wishlist'>
                            Favorites
                        </NavigationLink>
                    </li>
                    <li>
                        <NavigationLink to='cart'>
                            Cart
                        </NavigationLink>
                    </li>
                    <li>
                        <NavigationLink to='contacts'>
                            Contacts
                        </NavigationLink>
                    </li>
                </ul>
            </nav>
            <div className="footer__terms">
                <NavigationLink to='terms'>
                    Terms of service
                </NavigationLink>
            </div>
            <div className="footer__media">
                <SiTelegram size={30} color={'#101010'} />
                <SiInstagram size={30} color={'#101010'} />
                <SiFacebook size={30} color={'#101010'} />
                <SiWhatsapp size={30} color={'#101010'} />
            </div>

        </div>
    )

}

export default Footer
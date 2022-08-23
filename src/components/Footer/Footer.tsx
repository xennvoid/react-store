import React from 'react';
import Logo from '../Logo/Logo';
import NavigationLink from "../UI/NavLink/NavigationLink";
import './Footer.scss';
import {
    SiTelegram,
    SiInstagram,
    SiFacebook,
    SiWhatsapp
} from 'react-icons/si';
import Navigation from '../Navigation/Navigation';


const Footer: React.FC = () => {

    return (
        <div className="footer">
            <Logo />
            <Navigation />
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
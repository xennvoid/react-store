import React from "react";
import classes from './Contacts.module.scss';
import locationSvg from '../../assets/icons/location.svg';
import phoneSvg from '../../assets/icons/phone.svg';
import officeSvg from '../../assets/images/office.webp';
import { SiFacebook, SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";

const Contacts: React.FC = () => {
    return (
        <div className={classes.contacts}>
            <div className={classes.contacts__office}>
                <h2 className={classes.contacts__title}>Our office</h2>
                <div className={classes.contacts__office_img}>
                    <img src={officeSvg} alt="office" />
                </div>
                <p className={classes.contacts__address}>
                    <img className={classes.contacts__location} src={locationSvg} alt="location" />
                    60 Coffee Street Roanoke, VA 24012
                </p>
                <p className={classes.contacts__phone}>
                    <img src={phoneSvg} alt="phone" />
                    +7 777 777 77 77
                </p>
            </div>
            <div className={classes.contacts__media}>
                <div>
                    <SiTelegram size={40} color={'#101010'} />
                </div>
                <div>
                    <SiInstagram size={40} color={'#101010'} />
                </div>
                <div>
                    <SiFacebook size={40} color={'#101010'} />
                </div>
                <div>
                    <SiWhatsapp size={40} color={'#101010'} />
                </div>
            </div>
        </div >
    )
}

export default Contacts
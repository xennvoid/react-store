import { FC } from "react";
import { NavLink } from 'react-router-dom';
import './NavigationLink.scss';

interface NavigationLinkProps {
    to: string;
    children: React.ReactNode;
}

const NavigationLink: FC<NavigationLinkProps> = ({ to, children }) => {

    return (
        <NavLink to={to} className={({ isActive }) => 'navigation-link' + (isActive ? ' active' : '')}>
            {children}
        </NavLink>
    )
}

export default NavigationLink;
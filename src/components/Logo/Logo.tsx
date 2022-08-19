import React from "react"
import NavigationLink from "../UI/NavLink/NavigationLink";
import './Logo.scss';


const Logo: React.FC = () => {
    return (
        <div className="logo">
            <NavigationLink to='/'>
                STORE
            </NavigationLink>
        </div>
    )
}

export default Logo;
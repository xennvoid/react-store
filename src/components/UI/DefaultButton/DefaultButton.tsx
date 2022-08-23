import React from 'react'
import { Link } from 'react-router-dom';
import './DefaultButton.scss'

type DefaultButtonProps = {
    to?: string;
    children: React.ReactNode;
    onClick?: any
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ to, children, onClick }) => {

    return (
        to !== undefined
            ? <Link to={to} className="link-default">
                {children}
            </Link>
            : <button
                className="button-default"
                onClick={onClick}
            >
                {children}
            </button>
    )
}

export default DefaultButton
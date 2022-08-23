import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { burgerClose } from "../../store/slices/burgerSlice";
import NavigationLink from "../UI/NavLink/NavigationLink";


const Navigation = () => {

    const dispatch = useAppDispatch()

    const links = [{ to: 'wishlist', text: 'Favourites' }, { to: 'cart', text: 'Cart' }, { to: 'contacts', text: 'Contacts' }, { to: 'terms', text: 'Terms of service' }]
    const linkElems = links.map((link, i) =>
        <li key={i}>
            <NavigationLink to={link.to} onClick={() => dispatch(burgerClose())}>
                {link.text}
            </NavigationLink>
        </li>
    )

    return (
        <nav>
            <ul>
                {linkElems}
            </ul>
        </nav>
    )
}

export default Navigation;
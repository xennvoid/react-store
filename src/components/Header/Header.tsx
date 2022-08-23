import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import Logo from '../Logo/Logo';
import { useAppDispatch, useAppSelector } from '../../hooks/typedHooks';
import { slide as Menu } from 'react-burger-menu';
import ProductCategories from '../ProductCategories/ProductCategories';
import Navigation from '../Navigation/Navigation';
import { burgerClose, burgerOpen } from '../../store/slices/burgerSlice';

const Header: React.FC = () => {

    const { wishlist } = useAppSelector(state => state.product)
    const { cart } = useAppSelector(state => state.cart)
    const path = useLocation().pathname;
    const { burgerIsOpen } = useAppSelector(state => state.burger)
    const dispatch = useAppDispatch()

    return (
        <header className="header">
            <Logo />
            <nav>
                <ul>
                    <li>
                        <Link to='wishlist'>
                            <AiOutlineHeart size={24} fill='#838383' />
                        </Link>
                        {
                            wishlist.length
                                ? <span className="count-label">
                                    {
                                        wishlist.length
                                    }
                                </span>
                                : null
                        }
                    </li>
                    <li>
                        <Link to='cart'>
                            <AiOutlineShoppingCart size={24} fill='#838383' />
                        </Link>
                        {
                            cart.length
                                ? <span className="count-label">
                                    {
                                        cart.reduce((sum, prod) => sum += prod.quantity, 0)
                                    }
                                </span>
                                : null
                        }
                    </li>
                    <li>
                        <Menu right isOpen={burgerIsOpen} onOpen={() => dispatch(burgerOpen())} onClose={() => dispatch(burgerClose())}>
                            {path === '/' ? <ProductCategories additionalClass='-burger' /> : null}
                            <Navigation />
                        </Menu>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
import { Link } from 'react-router-dom';
import './Header.scss';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import Logo from '../Logo/Logo';
import { useAppSelector } from '../../hooks/typedHooks';

const Header: React.FC = () => {

    const { wishlist } = useAppSelector(state => state.product)
    const { cart } = useAppSelector(state => state.cart)

    return (
        <header className="header">
            <Logo />
            <nav>
                <ul>
                    <li>
                        <Link to='wishlist'>
                            <AiOutlineHeart
                                size={24}
                                fill='#838383'
                            />
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
                            <AiOutlineShoppingCart
                                size={24}
                                fill='#838383'
                            />
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
                </ul>
            </nav>
        </header>
    )
}

export default Header;
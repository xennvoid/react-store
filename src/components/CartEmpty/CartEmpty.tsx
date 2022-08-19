import './CartEmpty.scss';
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton';
import cartPng from '../../assets/images/cart.png';

const CartEmpty: React.FC = () => {
    return (
        <div className="cart-empty">
            <img src={cartPng} alt="empty-cart" />
            <p className="cart__title--empty">Cart is empty</p>
            <p className="cart__text--empty">But it's never too late to fix it :)</p>
            <DefaultButton to="/">
                To product catalog
            </DefaultButton>
        </div>
    )
}

export default CartEmpty
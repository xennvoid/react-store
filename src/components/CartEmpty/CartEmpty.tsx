import './CartEmpty.scss'
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton'

const CartEmpty: React.FC = () => {
    return (
        <div className="cart-empty">
            <img src="/assets/images/cart.png" alt="empty-cart" />
            <p className="cart__title--empty">Cart is empty</p>
            <p className="cart__text--empty">But it's never too late to fix it :)</p>
            <DefaultButton to="/">
                To product catalog
            </DefaultButton>
        </div>
    )
}

export default CartEmpty
import { useAppSelector } from '../../hooks/typedHooks'
import DefaultButton from '../UI/DefaultButton/DefaultButton'
import './CartTotal.scss'

const CartTotal = () => {

    const { cart } = useAppSelector(state => state.cart)

    return (
        <div className="cart__total">
            <div className="cart__total--info">
                <div className="cart__total--title">
                    Total
                </div>
                <div className="cart__total--sum">
                    {cart.reduce((sum, prod) => sum + Math.round(prod.price * prod.quantity), 0)} $
                </div>
            </div>
            <DefaultButton>
                Proceed to checkout
            </DefaultButton>
        </div>
    )
}

export default CartTotal
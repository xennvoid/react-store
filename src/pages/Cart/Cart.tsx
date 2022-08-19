import CartEmpty from '../../components/CartEmpty/CartEmpty'
import CartProduct from '../../components/CartProduct/CartProduct'
import CartTotal from '../../components/CartTotal/CartTotal'
import { useAppSelector } from '../../hooks/typedHooks'
import './Cart.scss'


const Cart: React.FC = () => {

    const { cart } = useAppSelector(state => state.cart)

    return (
        cart.length ?
            <>
                <div className="cart__title">
                    Cart
                </div>
                <div className="cart">
                    <div className="cart__products">
                        {cart.map(product => <CartProduct key={product.id} product={product} />)}
                    </div>
                    <CartTotal />
                </div>
            </>
            : <CartEmpty />

    )
}

export default Cart
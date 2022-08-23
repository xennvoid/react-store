import { useState } from 'react';
import { useAppDispatch } from '../../hooks/typedHooks';
import {
    decreaseProductCount,
    ICartProduct,
    increaseProductCount,
    removeFromCart
} from '../../store/slices/cartSlice';
import './CartProduct.scss';
import plusSvg from '../../assets/icons/plus.svg';
import minusSvg from '../../assets/icons/minus.svg';
import trashSvg from '../../assets/icons/trash.svg';

interface CartProductProps {
    product: ICartProduct;
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {

    const dispatch = useAppDispatch()

    const [animation, setAnimation] = useState('open')

    const hide = async (ms: number) => {

        setAnimation('close')

        dispatch(removeFromCart(product.id))

        await new Promise(r => setTimeout(r, ms))
    }


    return (
        <div className={`cart__product ${animation}`}>
            <div className="cart__product--header">
                <img
                    className="cart__product--delete"
                    src={trashSvg}
                    alt="delete"
                    onClick={() => {
                        hide(500)
                    }}
                />
                <div className="cart__product--image">
                    <img src={product.image} alt="" />
                </div>
                <div className="cart__product--description">
                    {product.title}
                    <div className="cart__product--price">{product.price} $</div>
                </div>
            </div>
            <div className="cart__product--footer">
                <div className="cart__product--count">
                    <img
                        src={minusSvg}
                        alt="minus"
                        onClick={() => dispatch(decreaseProductCount(product.id))}
                    />
                    <span className="cart__product--quantity">{product.quantity}</span>
                    <img
                        src={plusSvg}
                        alt="plus"
                        onClick={() => dispatch(increaseProductCount(product.id))}
                    />
                </div>
                <div className="cart__product--fullprice">
                    {Math.round(product.price * product.quantity)} $
                </div>
            </div>
        </div>
    )
}

export default CartProduct
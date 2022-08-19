import { IProduct } from "../../types/product";
import './ProductCard.scss';
import { AiFillStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import NavigationLink from "../UI/NavLink/NavigationLink";
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { addToWishList, removeFromWishList } from "../../store/slices/productSlice";


interface ProductCardProps {
    product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const { wishlist } = useAppSelector(state => state.product)
    const dispatch = useAppDispatch();

    return (
        <div className="product__card">
            {
                wishlist.includes(product.id)
                    ? <AiFillHeart
                        color='#1C1C27'
                        cursor='pointer'
                        onClick={() => dispatch(removeFromWishList(product.id))}
                    />
                    : <AiOutlineHeart
                        cursor='pointer'
                        onClick={() => dispatch(addToWishList(product.id))}
                    />
            }
            <div className="product__card--image">
                <Link to={'/' + product.id.toString()}>
                    <img src={product.image} alt="" />
                </Link>
            </div>
            <div className="product__card--description">
                <NavigationLink to={'/' + product.id.toString()}>
                    {product.title.slice(0, 12)}
                </NavigationLink>
                <div className="product__card--price">{product.price} $</div>
            </div>
            <div className="product__card--rating">
                {
                    product.rating.rate > 4.5
                        ? <AiFillStar color="#FFCE7F" />
                        : <BsStarHalf color="#FFCE7F" />
                }
                <span>{product.rating.rate}</span>
            </div>
        </div>
    )
}

export default ProductCard
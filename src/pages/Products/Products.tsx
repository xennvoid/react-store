import { useEffect } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import ProductCardSkeleton from "../../components/ProductCardSkeleton/ProductCardSkeleton";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks"
import { getProducts } from "../../store/slices/productSlice"
import './Products.scss';

const Products = () => {

    const dispatch = useAppDispatch()
    const { products, loading, error } = useAppSelector(state => state.product)

    useEffect(() => {
        dispatch(getProducts())
    }, [])


    return (
        <div className="products">
            {error && <div>{error}</div>}

            {loading
                ? [...new Array(20)].map((_, i) => <ProductCardSkeleton key={i} />)
                : products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    )
}

export default Products
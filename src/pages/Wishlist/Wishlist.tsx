import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useAppSelector } from '../../hooks/typedHooks'
import { IProduct } from '../../types/product'
import './Wishlist.scss';

type Props = {}

const Wishlist = (props: Props) => {

    const { wishlist } = useAppSelector(state => state.product)
    const [wishItems, setWishItems] = useState<IProduct[]>([]);

    useEffect(() => {
        wishlist.forEach(item => getWishItems(item))
    }, [])


    useEffect(() => {
        setWishItems(items => items.filter(item => wishlist.includes(item.id)))
    }, [wishlist])


    const getWishItems = async (id: number) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setWishItems(items => [...items, response.data])
    }

    return (
        wishItems.length === 0
            ? <div className="wishlist-empty">Wish list is empty!</div>
            : <>
                <div className="wishlist__title">
                    Favourites
                </div>
                <div className="products">
                    {
                        wishItems.map(wishitem => <ProductCard key={wishitem.id} product={wishitem} />)
                    }
                </div>
            </>
    )
}

export default Wishlist
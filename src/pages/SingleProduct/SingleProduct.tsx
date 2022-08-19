import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../hooks/typedHooks";
import { IProduct } from "../../types/product"
import { addToCart } from '../../store/slices/cartSlice';
import ProductCard from "../../components/ProductCard/ProductCard";
import './SingleProduct.scss';
import DefaultButton from "../../components/UI/DefaultButton/DefaultButton";
import { MdPlusOne } from 'react-icons/md';


const SingleProduct: React.FC = () => {

    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = useState<IProduct>()
    const dispatch = useAppDispatch()

    const [animation, setAnimation] = useState<string>('')

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                return response;
            })
            .then((data) => {
                setCurrentProduct(data.data)
            });
    }, [])

    const addProductToCart = async (ms: number) => {

        setAnimation('show')

        await new Promise(r => setTimeout(r, ms))

        if (currentProduct) {
            dispatch(addToCart(currentProduct))
            setAnimation('')
        }
    }


    return (
        <div>
            {
                currentProduct == null
                    ? <div>Loading...</div>
                    : <div className="product">
                        <ProductCard product={currentProduct} />
                        <div className="product__characteristics">
                            <div className="product__description">
                                <div className="product__description--title">
                                    Description and characteristics
                                </div>
                                <div className="product__description--data">
                                    <ul>
                                        <li>
                                            <span>Product Name: </span>
                                            {currentProduct.title}
                                        </li>
                                        <li>
                                            <span>Caregory: </span>
                                            {currentProduct.category}
                                        </li>
                                        <li>
                                            <span>Price: </span>
                                            {currentProduct.price}
                                        </li>
                                        <li>
                                            <span>Rate: </span>
                                            {currentProduct.rating.rate}
                                        </li>
                                        <li>
                                            <span>Description: </span>
                                            {currentProduct.description}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product__buy">
                                <DefaultButton>
                                    Buy!
                                </DefaultButton>
                                <DefaultButton onClick={() => addProductToCart(700)}>
                                    <img src="/assets/icons/cart.svg" alt="cart" />
                                    Add to cart
                                    <MdPlusOne
                                        className={`product__buy--animation ${animation}`}
                                    />
                                </DefaultButton>
                            </div>
                        </div>
                    </div>
            }
        </div >
    )
}

export default SingleProduct
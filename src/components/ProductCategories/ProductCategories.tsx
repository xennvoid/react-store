import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { burgerClose } from "../../store/slices/burgerSlice";
import { changeCurrentCategorie, getCategories } from "../../store/slices/categoriesSlice";
import './ProductCategories.scss';


interface ProductCategoriesProps {
    additionalClass?: string;
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({ additionalClass }) => {

    const { categories } = useAppSelector(state => state.categories)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <div className={`product__categories${additionalClass ? additionalClass : ''}`}>
            <ul>
                {
                    categories.map((prod, i) =>
                        <li
                            key={i}
                            onClick={() => {
                                dispatch(changeCurrentCategorie(prod))
                                dispatch(burgerClose())
                            }}
                        >
                            {prod}
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ProductCategories;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/actions';
import { useEffect } from 'react';
import Product from './Product';

const ProductListing = () => {
    // fetch products using actions
    // display products using useSelector

    const dispatch = useDispatch();
    const products = useSelector((state) => state.shop.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


  return (
    <div>
        <h2 className='text-center'>All Items</h2>

        <div className='mt-5 d-flex flex-column'>
            {products.map((product) => {
                return (
                    <Product product={product} key={product.id} />
                )
            })}
        </div>
    </div>
  )
}

export default ProductListing;
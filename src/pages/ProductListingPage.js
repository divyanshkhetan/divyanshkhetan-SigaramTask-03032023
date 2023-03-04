import React from 'react'
import Categories from '../components/Categories';
import ProductListing from '../components/ProductListing';
import ProductListPageCart from '../components/ProductListPageCart';

const ProductListingPage = () => {
  return (
    <div>
        <div className='mt-3'>
            <div className='row'>
                <div className='col'>
                    <Categories />
                </div>

                <div className='col-6 border border-5 border-light-subtle border-top-0 border-bottom-0'>
                    <ProductListing />
                </div>

                <div className='col'>
                    <ProductListPageCart />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductListingPage;
import React from 'react';
import { useSelector } from 'react-redux';
import ProductForm from './ProductForm';
import ProductListing from './ProductListing';

const ProductContainer = (props) => {

    const products = useSelector(state => state.products)

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <h4>Add new product</h4>
                    <ProductForm />
                </div>
                <div className='col-md-6'>
                    {products.length === 0 ? (
                        <div>
                            <h4>No product's present.</h4>
                            <p>Add your first product now.</p>
                        </div>
                    ) : (
                        <ProductListing />
                    )}
                </div>
            </div>
            
            
            

        </div>

    )
}

export default ProductContainer;
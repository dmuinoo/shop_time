import React from 'react';
import moment from 'moment';

const productDetailCard = ({ product }) => (
    <div className='row pt-5'>
        <div className='col-3'>
            <div style={{ width: '80%', marginLeft: '10%', overflow: 'hidden' }}>
                <img
                    className='mt-5'
                    style={{ width: '100%' }}
                    src={
                        product && 
                        product !== null && 
                        product !== undefined && 
                        product.photo
                    }
                    alt='product details'
                />
            </div>
        </div>
        <div className='col-6'>
            <h1>
                {
                    product && 
                    product !== null && 
                    product !== undefined &&
                    product.name
                }
            </h1>
            <p className='lead mt-3'>
                {
                    product && 
                    product !== null && 
                    product !== undefined && 
                    product.description
                }
            </p>
        </div>
        <div className='col-3'>
            <div className='card' style={{ padding: '10px 20px' }}>
                <p style={{ fontSize: '24px', color: '#b12704' }}>
                    ${
                        product && 
                        product !== null &&
                        product !== undefined &&
                        product.price
                    }
                </p>
                <p>
                    {
                        product && 
                        product !== null &&
                        product !== undefined && 
                        product.quantity > 0 ? (
                            <span className='text-success'>
                                In Stock
                            </span>
                        ) : (
                            <span className='text-danger'>
                                Out of Stock
                            </span>
                        )
                    }
                </p>
                <p className='card-text text-muted'>
                    Added {
                        product && 
                        product !== null &&
                        product !== undefined && (
                            moment(product.date_created).fromNow()
                        )
                    }
                </p>
            </div>
        </div>
    </div>
);

export default productDetailCard;

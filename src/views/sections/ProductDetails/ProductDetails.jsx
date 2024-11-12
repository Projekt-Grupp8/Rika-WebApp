import React from 'react'
import CartHeader from '../../../components/CartHeader';
import { Link } from 'react-router-dom';
import useProductDetails from './useProductDetails';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const { product, loading } = useProductDetails(id);

    if (loading) {
        return <div>Loading product details...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }
    return (
    
    <section id="product-detail">
        <div className="product-grey">
        <CartHeader />
        </div>
        <div className="product-white">
            <div className="container">
                <div className="review-stars">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <div className="review-links">
                        <Link className="review-link" to='/reviews/:id' style={{color:'gold'}}>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <p>(320 Review)</p>
                        </Link>
                    </div>
                </div>
                <div className="product-information">
                    <h3>Description</h3>
                    <p>{product.description}</p>
                </div>
                <div className="product-price">
                    <div className="price-content">
                        <p>Total Price</p>
                        <h3>${product.price}</h3>
                    </div>
                    <Link className="btn-black" to='/cart'>
                    <button ><i class="fa-regular fa-cart-shopping"></i>Add To Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>

  )
}

export default ProductDetails
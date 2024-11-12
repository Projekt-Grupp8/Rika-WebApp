import React from 'react';
import '../components/ProductCard.scss';
import love from '../images/love.svg';
import bgImage from '../images/place your image.svg'


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      
      {/* <img src={product.imageURL || '/images/place-your-image.svg'} alt={product.name} /> */}
        {/* <img src={product.imageURL} alt={product.name} /> */}
      <img src={bgImage} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>

    
      <a className="love" href="/reviews">
        <img src={love} alt="love" />
      </a>
      
    </div>
  );
};

export default ProductCard;


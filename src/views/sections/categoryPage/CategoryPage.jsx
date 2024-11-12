
import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://productprovider.azurewebsites.net/api/products?code=c3IOCzg9ga_u1M_acUhnEOXjVCbdL0IFLkeruDzo-f9sAzFubkMnkA%3D%3D' , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + process.env.REACT_APP_BEARER_TOKEN
          },
          body: JSON.stringify({
            query: `
              query {
                getAllProducts {
                  id
                  name
                  price
                  description
                  imageURL
                }
              }
            `
          })
        });
      
        if (response.ok) {
          const result = await response.json();
          if (result.data) {
            const products = result.data.getAllProducts.map(product => ({
              id: product.id,
              name: product.name,
              price: product.price,
              description: product.description,
              imageURL: product.imageURL
            }));
            setProducts(products);
          }
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching products:", error); 

      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/productdetails/${id}`);
  };


  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <main>
      <h1>Products</h1>
      <div className="Grid-Product">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer' }}>
          <ProductCard product={product} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;

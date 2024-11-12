import { useEffect, useState } from 'react';

const useProductDetails = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://productprovider.azurewebsites.net/api/products?code=c3IOCzg9ga_u1M_acUhnEOXjVCbdL0IFLkeruDzo-f9sAzFubkMnkA%3D%3D',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
                query {
                  getProductById(id: "${productId}") {
                    id
                    name
                    price
                    description
                    imageURL
                  }
                }
              `,
            }),
          }
        );

        if (response.ok) {
          const result = await response.json();
          if (result.data) {
            setProduct(result.data.getProductById);
          }
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return { product, loading };
};

export default useProductDetails;
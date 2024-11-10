import React, { useState } from 'react';
import ImageProduct from '../../../images/place your image.svg';
import Arrowcheck from '../../../images/arrowCheckOur.svg';
import Delete from '../../../images/delete.svg';
import './CartPage.scss';
import CartHeader from '../../../components/CartHeader';

const CartPage = () => {
  // Estado para los productos
  const [products, setProducts] = useState([
    { id: 1, name: 'Roller Rabbit', description: 'Vado Odelle Dress', price: 198.00, quantity: 1 },
    { id: 2, name: 'Rabbit', description: 'Vado Odelle Dress', price: 160.00, quantity: 1 },
    { id: 3, name: 'Adidas 21', description: 'Odelle Mala Dress', price: 420.00, quantity: 1 },
  ]);

  // Función para aumentar la cantidad
  const handleIncrease = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  // Función para disminuir la cantidad
  const handleDecrease = (id) => {
    setProducts(products.map(product =>
      product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    ));
  };

  // Función para eliminar un producto
  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Calcular el precio total
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  // Estado para manejar la visibilidad del ícono de eliminar
  const [showDelete, setShowDelete] = useState(null);

  // Función para manejar la visibilidad del icono de eliminación
  const handleDeleteToggle = (id) => {
    setShowDelete(showDelete === id ? null : id);
  };

  return (
    <div className="cart-container">
      <CartHeader />

      <main className="cart-main-content">
        <h1 className="titleCart">My cart</h1>

        <section className="cart-kundVagnCards">
          {products.map(product => (
            <div
              key={product.id}
              className={`cart-produkt-kort ${showDelete === product.id ? 'show-delete' : ''}`}
              onMouseEnter={() => handleDeleteToggle(product.id)} // Mostrar ícono de eliminar al pasar el mouse
              onMouseLeave={() => handleDeleteToggle(null)} // Ocultar ícono de eliminar al salir el mouse
            >
              <div className="cart-product-content">
                <img src={ImageProduct} alt="Product" className="cart-product-image" />
                <div className="cart-product-details">
                  <h4 className="cart-product-name">{product.name}</h4>
                  <p className="cart-product-description">{product.description}</p>
                  <div className="cart-price-quantity-container">
                    <span className="cart-product-price">${(product.price * product.quantity).toFixed(2)}</span>
                    <div className="cart-quantity-control">
                      <button onClick={() => handleDecrease(product.id)}>-</button>
                      <span className="cart-quantity">{product.quantity}</span>
                      <button onClick={() => handleIncrease(product.id)}>+</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aquí está el ícono de eliminar */}
              <div
                className="cart-delete-overlay"
                onClick={() => handleDelete(product.id)}
              >
                <img src={Delete} alt="Delete Icon" className="cart-delete-icon" />
              </div>
            </div>
          ))}
        </section>

        <section className="cart-checkout-section">
          <div className="cart-productTotal">
            <h3 className='totalh3'>Total ({products.length} item): </h3>
            <h3>${calculateTotalPrice()}</h3>
          </div>

          <button className="cart-btnCheckOut">
            Proceed to Checkout <img src={Arrowcheck} alt="" />
          </button>
        </section>
      </main>
    </div>
  );
};

export default CartPage;

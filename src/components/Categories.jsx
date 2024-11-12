import React from 'react'
import './_Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
        <h1>Categories</h1>
        <nav>
            <button className='btn-categories'>
                <div className='title'>
                    <i class="fa-sharp fa-light fa-cart-arrow-down"></i>
                    <h2>New Arrivals</h2>
                </div>
                <p>208 Products</p>
            </button>
            <button className='btn-categories'>
                <div className='title'>
                    <i class="fa-sharp fa-light fa-shirt"></i>
                    <h2>Clothes</h2>
                </div>
                <p>358 Products</p>
            </button>
            <button className='btn-categories'>
                <div className='title'>
                    <i class="fa-sharp fa-light fa-bag-shopping"></i>
                    <h2>Bags</h2>
                </div>
                <p>160 Products</p>
            </button>
            <button className='btn-categories'>
                <div className='title'>
                    <i class="fa-light fa-boot-heeled"></i>
                    <h2>Shoes</h2>
                </div>
                <p>230 Products</p>
            </button>
            <button className='btn-categories'>
                <div className='title'>
                    <i class="fa-sharp fa-light fa-plug"></i>
                    <h2>Electronics</h2>
                </div>
                <p>130 Products</p>
            </button>
            <button className='btn-categories'>
                <div className='title'>
                    <i class="fa-light fa-ring-diamond"></i>
                    <h2>Jewelry</h2>
                </div>
                <p>87 Products</p>
            </button>
        </nav>
    </div>

  )
}

export default Categories
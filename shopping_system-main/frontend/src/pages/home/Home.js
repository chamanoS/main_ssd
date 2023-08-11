import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './home.css'

function Home() {
  return (
    <>
    <Navbar/>
      <div class="product-card">
        <img src="https://via.placeholder.com/150" alt="" />
        <div class="product-info">
            <h3>Macbook Pro</h3>
            <p>Short description of the product goes here.</p>
            <p class="price">$1999.99</p>
            <p class="stock">In Stock</p>
        </div>
    </div>

    <div class="product-card">
        <img src="https://via.placeholder.com/180" alt="" />
        <div class="product-info">
            <h3>Dell Expirion</h3>
            <p>Short description of the product goes here.</p>
            <p class="price">$200</p>
            <p class="stock">Out Of Stock</p>
        </div>
    </div>
    </>
    
    
  )
}

export default Home
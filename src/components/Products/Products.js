
import React, { useState } from 'react';
import './Products.css';
import Line from '../../assest/Frame (2).png';
import ProductImg from '../../assest/Frame 7.png';
import FullLine from '../../assest/Frame.png';
import Modal from '../Modal/Modal';

function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="products-section">
        <div className='product-lines'>
          <img className='product-line' src={Line} alt="line" />
          <h1 className='product'>Our Product</h1>
          <img className='product-line' src={Line} alt="line" />
        </div>
        <div className='products-container'>
          <div className="products">
            <img src={ProductImg} alt="Product 1" />
            <div>
              <p>Raju Rassibomd</p>
              <button onClick={() => openModal({
                mainImg: 'product1.jpg',
                name: 'Raju',
                details: 'Details about Raju Rassibomd',
              })}>Quick View</button>
            </div>
          </div>
          <div className="products">
            <img src={ProductImg} alt="Product 2" />
            <div>
              <p>Ladiyon ki Rani Chani</p>
              <button onClick={() => openModal({
                mainImg: 'product2.jpg',
                name: 'Rani',
                details: 'Details about Ladiyon ki Rani Chani',
              })}>Quick View</button>
            </div>
          </div>
        </div>
      </section>
      <img className='bottom-line' src={FullLine} alt="full line" />
      {modalOpen && <Modal product={selectedProduct} closeModal={closeModal} />}
    </>
  );
}

export default Products;

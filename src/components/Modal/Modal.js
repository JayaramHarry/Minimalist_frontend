

import React, { useState } from 'react';
import './Modal.css';

import mainImg1 from '../../assest/Frame 7.png';
import mainImg2 from '../../assest/Frame 7.png';
import additional1 from '../../assest/Frame 7.png';
import additional2 from '../../assest/Frame 7.png';
import additional3 from '../../assest/Frame 7.png';
import additional4 from '../../assest/Frame 7.png';

const imageMap = {
  'product1.jpg': mainImg1,
  'product2.jpg': mainImg2,
};

const additionalImages = [additional1, additional2, additional3, additional4];

function Modal({ product, closeModal }) {
  const [mainImage, setMainImage] = useState(imageMap[product.mainImg]);

  const handleAdditionalImageClick = (img) => {
    console.log('Clicked image:', img);
    setMainImage(img);

  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="modal-main-content">
          <img className="main-image" src={mainImage} alt="Main product" />
          <div className="additional-images">
            {additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Additional ${index + 1}`}
                onClick={() => handleAdditionalImageClick(img)}
              />
            ))}
          </div>
        </div>
        <div className="details">
          <h2>{product.name}</h2>
          <p>MPR: <span className='MRP-paragraph'>{product.name}  Dream's</span></p>
          <span>Product Description:</span>
          <p>This product packs an extra punch, thanks to the eternal blood, sweat, and tears of a young boy.</p>
          <span>Product Contents:</span>
          <p>10 hand-hurting pieces of rassi bombs</p>
          <p>Filled with great pain</p>
          <p>{product.name} hopes</p>
          <span>Shipping Time:</span>
          <p>Before {product.name} understands that these dreams do not matter.</p>
          <button className='choose-now-button'>Choose Now</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

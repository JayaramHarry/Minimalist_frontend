import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Products from './components/Products/Products';
import FollowUs from './components/FollowUs/FollowUs';
import Modal from './components/Modal/Modal';
import "./App.css"

function App() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Banner />
      <About />
      <Products openModal={openModal} />
      <FollowUs />
      {modalImage && <Modal image={modalImage} closeModal={closeModal} />}
    </div>
  );
}

export default App;

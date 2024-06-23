// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import "./Banner.css"

// function Banner() {
//   return (
//     <section className="banner">
//       <Navbar/>
//       <div className='banner-heading'>
//       <h1>The choice is yours.
//         Because they don't have one.
//       </h1>
//       <button>QUICK VIEW</button>
//       </div>
//     </section>
//   );
// }

// export default Banner;

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Banner.css";
import fullSizedImage from '../../assest/Frame 7.png'; // Replace with your full-sized image path

function Banner() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="banner">
      <Navbar />
      <div className='banner-heading'>
        <h1>The choice is yours. Because they don't have one.</h1>
        <button onClick={openModal}>QUICK VIEW</button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={fullSizedImage} alt="Full Sized Image" className="full-sized-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Banner;

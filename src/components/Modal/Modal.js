import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



const RsModal = ({modalIsOpen, setIsOpen, cart}) => {
   
//   const [modalIsOpen, setIsOpen] = useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }
    const rendItem = parseInt(Math.random()*cart.length)
   const modalItem = cart[rendItem];
   
  

  function closeModal() {
    setIsOpen(false);
    
  }

    return (
        <div>
            
      <Modal
        isOpen={!!modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Selected Option"
  
      >
        
        <button onClick={closeModal}>close</button>
        <h1>{modalItem?.name}</h1>
        <div className="card">
            <img src={modalItem?.img} className="card-img-top" alt="..."/>
            <div className="card-body">
             <p className="card-text">{modalItem?.price}</p>
            </div>
        </div>
      </Modal>
        </div>
    );
};

export default RsModal;
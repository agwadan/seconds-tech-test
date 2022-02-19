import React from 'react';

const Modal = ({ setShow, item }) => {
  return (
    <div className='modal'>
      <div className='modal-container'>
        <h1 onClick={() => { setShow(false) }} className='close'>X</h1>
        <h1>{item.title}</h1>
        <img src={`../../src/assets/${item.img}`} />
        <p><b>Price:</b> UGX {item.price.toLocaleString()}</p>
        <h3>Description</h3>
        <p>{item.info}</p>
      </div>
    </div>
  )
}
export default Modal;
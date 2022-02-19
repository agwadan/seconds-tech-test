import React, { useState } from 'react';
import { storeProducts } from '../data';
import Modal from './Modal';

export const DataList = () => {

  const [showModal, setShowModal] = useState(false);
  const [itemToShow, setItemToShow] = useState({});

  console.log(storeProducts);
  return (
    <div>
      <h1>Data List</h1>
      <div className="flex">
        {
          storeProducts.map((product) => (
            <div key={product.id} onClick={() => { setItemToShow(product); setShowModal(true) }} className="product-container">
              <h2>{product.title}</h2>
              <img src={`../../src/assets/${product.img}`} />
              <h3>UGX {product.price.toLocaleString()}</h3>
            </div>
          ))
        }
      </div>
      {
        showModal && <Modal item={itemToShow} setShow={setShowModal} />
      }
    </div>
  )
}

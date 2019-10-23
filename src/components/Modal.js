import React from "react"
import { ProductConsumer } from "../context"
import { Link } from "react-router-dom"

export default function Modal() {
  return (
    <ProductConsumer>
      {value => {
        const { closeModal, modalOpen } = value
        const { img, title, price } = value.modalFurniture
        return (
          <div className={modalOpen ? "modal modal-active" : "modal"}>
            <div className="modal-container">
              <Link to="/store">
                <button className="close" onClick={() => closeModal()}>
                  &times;
                </button>
              </Link>
              <h3>item added to cart</h3>
              <div className="img">
                <img src={img} alt="furniture" />
              </div>
              <p>{title}</p>
              <p>
                price:<span> $ {price}</span>
              </p>
              <Link to="/cart">
                <button className="cart-btn" onClick={() => closeModal()}>
                  go to cart
                </button>
              </Link>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
  )
}

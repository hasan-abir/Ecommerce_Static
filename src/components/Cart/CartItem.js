import React from "react"

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item
  const { increment, decrement, removeItem } = value
  return (
    <div className="cart-item">
      <div className="picture">
        <img src={img} alt="furniture" />
      </div>
      <p className="product-detail">
        <span>Product : </span> {title}
      </p>
      <p className="product-price">
        <span>Price : </span>$ {price}
      </p>
      <div className="buttons">
        <span onClick={() => decrement(id)}>-</span>
        <span>{count}</span>
        <span onClick={() => increment(id)}>+</span>
      </div>
      <div className="item-remove">
        <button onClick={() => removeItem(id)}>
          Remove
          <i className="fas fa-trash"></i>
        </button>
      </div>
      <p className="item-total">
        <span>item total : </span>${total}
      </p>
    </div>
  )
}

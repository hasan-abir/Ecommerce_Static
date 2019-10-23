import React from "react"
import { Link } from "react-router-dom"

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value
  return (
    <div className="cart-totals">
      <div className="total-container">
        <div className="total-content">
          <Link to="/store">
            <button
              type="button"
              className="clear-cart"
              onClick={() => clearCart()}
            >
              clear cart <i className="fas fa-snowplow"></i>
            </button>
          </Link>
          <p className="sub-total">
            subtotal :<span>$ {cartSubTotal}</span>
          </p>
          <p className="tax">
            tax :<span>$ {cartTax}</span>
          </p>
          <p className="total">
            total :<span>$ {cartTotal}</span>
          </p>
          <Link to="/">
            <button
              type="button"
              className="purchase"
              onClick={() => clearCart()}
            >
              purchase <i className="fas fa-money-check"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

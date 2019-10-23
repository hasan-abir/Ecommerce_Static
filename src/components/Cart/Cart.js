import React from "react"
import CartColumns from "./CartColumns"
import EmptyCart from "./EmptyCart"
import CartList from "./CartList"
import CartTotals from "./CartTotals"
import { ProductConsumer } from "../../context"

export default function Cart() {
  return (
    <div className="cart">
      <div className="container">
        <ProductConsumer>
          {value => {
            if (value.cart.length > 0) {
              return (
                <div className="cart-container">
                  <h1>Cart</h1>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </div>
              )
            } else {
              return <EmptyCart />
            }
          }}
        </ProductConsumer>
      </div>
    </div>
  )
}

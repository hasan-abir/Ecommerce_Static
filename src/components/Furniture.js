import React from "react"
import { Link } from "react-router-dom"
import { ProductConsumer } from "../context"
import ImageLoader from "react-load-image"

export default function Furniture(props) {
  const { id, title, company, img, price, inCart } = props.product
  return (
    <div className="column">
      <div className="furniture">
        <ProductConsumer>
          {value => {
            return (
              <div className="picture" onClick={() => value.handleDetail(id)}>
                <Link to="/details">
                  <ImageLoader src={img}>
                    <img alt="furniture" className="img" />
                    <div>Error!</div>
                    <img src="img/spinner.svg" alt="" className="spinner" />
                  </ImageLoader>
                </Link>
                <button
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id)
                    value.openModal(id)
                  }}
                >
                  {inCart ? (
                    <p disabled>in cart</p>
                  ) : (
                    <i className="fas fa-cart-plus"></i>
                  )}
                </button>
              </div>
            )
          }}
        </ProductConsumer>
        <div className="text">
          <p>
            {title} <span>{company}</span>
          </p>
          <h5>
            <span>$</span>
            {price}
          </h5>
        </div>
      </div>
    </div>
  )
}

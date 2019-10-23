import React from "react"
import { ProductConsumer } from "../context"
import { Link } from "react-router-dom"
import ImageLoader from "react-load-image"

export default function Details() {
  return (
    <ProductConsumer>
      {value => {
        const {
          id,
          title,
          company,
          img,
          info,
          price,
          inCart
        } = value.detailFurniture
        return (
          <div className="details">
            <div className="container">
              <h1>{title}</h1>

              <div className="details-container">
                <div className="picture">
                  <ImageLoader src={img}>
                    <img className="img" alt="furniture" />
                    <div>Error!</div>
                    <img src="img/spinner.gif" alt="" className="spinner" />
                  </ImageLoader>
                </div>
                <div className="text">
                  <h4>
                    provided by : <span>{company}</span>
                  </h4>
                  <h4>
                    price : <span>$ {price}</span>
                  </h4>
                  <p>{info}</p>
                  <Link to="/store">
                    <button>back to furnitures</button>
                  </Link>
                  <button
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id)
                      value.openModal(id)
                    }}
                  >
                    {inCart ? "in cart" : "add to cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
  )
}

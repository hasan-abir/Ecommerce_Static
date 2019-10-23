import React from "react"
import { ProductConsumer } from "../context"
import Furniture from "./Furniture"

export default function Store() {
  return (
    <div className="store">
      <div className="container">
        <h2>our furnitures</h2>
        <ProductConsumer>
          {value => {
            return (
              <form
                onSubmit={e => {
                  e.preventDefault()
                  value.setCategory(value.category)
                  value.setFilteredProducts()
                }}
              >
                <select name="category" onChange={value.handleSelect}>
                  <option value="all">All</option>
                  <option value="bed">Bed</option>
                  <option value="chair">Chair</option>
                  <option value="table">Table</option>
                  <option value="wardrobe">Wardrobe</option>
                </select>
                <button type="submit">Search category</button>
              </form>
            )
          }}
        </ProductConsumer>
        <div className="furnitures">
          <ProductConsumer>
            {value => {
              return value.filteredFurnitures.map(product => {
                return <Furniture key={product.id} product={product} />
              })
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  )
}

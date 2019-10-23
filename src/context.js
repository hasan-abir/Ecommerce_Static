import React, { Component } from "react"
import { storeFurnitures, detailFurniture } from "./data"

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    category: "all",
    furnitures: [],
    filteredFurnitures: [],
    detailFurniture: detailFurniture,
    cart: [],
    modalFurniture: detailFurniture,
    modalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  }
  componentDidMount() {
    this.setProducts()
  }
  handleSelect = e => {
    this.setState({ category: e.target.value })
  }
  setProducts = () => {
    let furnitures = []
    storeFurnitures.forEach(item => {
      const singleItem = { ...item }
      furnitures = [...furnitures, singleItem]
    })
    this.setState(() => {
      return { furnitures: furnitures, filteredFurnitures: furnitures }
    })
  }
  setCategory = category => {
    this.setState({ category })
  }
  setFilteredProducts = () => {
    if (this.state.category === "all") {
      const products = [...this.state.furnitures]
      this.setState(() => {
        return { filteredFurnitures: products }
      })
    } else {
      let furnitures = []
      const filteredFurnitures = this.state.furnitures.filter(item => {
        return this.state.category === item.category
      })
      filteredFurnitures.forEach(item => {
        const singleItem = { ...item }
        furnitures = [...furnitures, singleItem]
      })
      this.setState(() => {
        return { filteredFurnitures: furnitures }
      })
    }
  }
  getItem = id => {
    let furniture = this.state.furnitures.find(item => item.id === id)
    return furniture
  }
  handleDetail = id => {
    let furniture = this.getItem(id)
    this.setState(() => {
      return { detailFurniture: furniture }
    })
  }
  addToCart = id => {
    let tempFurnitures = [...this.state.furnitures]
    const index = tempFurnitures.indexOf(this.getItem(id))
    const furniture = tempFurnitures[index]
    furniture.inCart = true
    furniture.count = 1
    const price = furniture.price
    furniture.total = price
    this.setState(
      () => {
        return {
          furnitures: tempFurnitures,
          filteredFurnitures: tempFurnitures,
          cart: [...this.state.cart, furniture]
        }
      },
      () => {
        this.setFilteredProducts()
        this.addTotals()
      }
    )
  }
  openModal = id => {
    const furniture = this.getItem(id)
    this.setState(() => {
      return { modalFurniture: furniture, modalOpen: true }
    })
  }
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }
  increment = id => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id === id)

    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count += 1
    product.total = product.count * product.price

    this.setState(
      () => {
        return { cart: [...tempCart] }
      },
      () => {
        this.addTotals()
      }
    )
  }
  decrement = id => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id === id)

    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]
    product.count -= 1

    if (product.count === 0) {
      return this.removeItem(id)
    } else {
      product.total = product.count * product.price
    }

    this.setState(
      () => {
        return { cart: [...tempCart] }
      },
      () => {
        this.addTotals()
      }
    )
  }
  removeItem = id => {
    let tempProducts = [...this.state.furnitures]
    let tempCart = [...this.state.cart]

    tempCart = tempCart.filter(item => item.id !== id)
    const index = tempProducts.indexOf(this.getItem(id))
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0

    this.setState(
      () => {
        return {
          cart: tempCart,
          furnitures: [...tempProducts]
        }
      },
      () => {
        this.addTotals()
      }
    )
  }
  clearCart = id => {
    this.setState(
      () => {
        return { cart: [] }
      },
      () => {
        this.setProducts()
        this.addTotals()
      }
    )
  }
  addTotals = () => {
    let subTotal = 0
    this.state.cart.map(item => {
      return (subTotal += item.total)
    })
    const tempTax = subTotal * 0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax
    this.setState(() => {
      return { cartSubTotal: subTotal, cartTax: tax, cartTotal: total }
    })
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSelect: this.handleSelect,
          setProducts: this.setProducts,
          setCategory: this.setCategory,
          setFilteredProducts: this.setFilteredProducts,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }

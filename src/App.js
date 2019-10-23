import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Store from "./components/Store"
import Details from "./components/Details"
import Cart from "./components/Cart"
import NotFound from "./components/NotFound"
import Modal from "./components/Modal"
import "./App.scss"

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/store" component={Store} exact />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} exact />
          <Route component={NotFound} />
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}

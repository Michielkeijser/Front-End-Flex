import React, { Component } from 'react'
import ShoppingList from './components/ShoppingList'
import ShoppingCart from './components/ShoppingCart'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="AppContainer" >
        <ShoppingList />
        <ShoppingCart />
      </div>
    )
  }
}

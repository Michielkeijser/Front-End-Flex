import React, { useState } from 'react'
import ShoppingList from './components/ShoppingList'
import ShoppingCart from './components/ShoppingCart'
import './App.css'

export default function App() {
  const [inputText, setinputText] = useState('');
  const [shoppingCart, setShoppingCart] = useState([])
  const [shoppingList, setShoppingList] = useState([])


  return (
    <div className="AppContainer" >
      <ShoppingList
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
        setinputText={setinputText}
        inputText={inputText}
        setShoppingCart={setShoppingCart}
        shoppingCart={shoppingCart}
      />

      <ShoppingCart
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />

      </div>
  )
}
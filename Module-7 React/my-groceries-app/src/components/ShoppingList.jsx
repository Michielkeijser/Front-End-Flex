import React from 'react'
import InputForm from './InputForm'
import List from './List'


export default function ShoppingList({setinputText, inputText, shoppingList, setShoppingList, setShoppingCart, shoppingCart}) {
    
    return (
    <div className="ShoppingList" >
            <InputForm
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
                setinputText={setinputText}
                inputText={inputText}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
            />

            <List
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
                setShoppingCart={setShoppingCart}
                shoppingCart={shoppingCart}
            />
    </div>
    )
}

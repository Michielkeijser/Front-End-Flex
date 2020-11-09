import React from 'react'
import ShoppingCart from './ShoppingCart'


export default function InputForm({ setinputText, shoppingList, setShoppingList, inputText, shoppingCart, setShoppingCart }) {
    const inputTextHandler = e => {
        setinputText(e.target.value)
    }
    const submitInputHandler = e => {
        e.preventDefault()
        setShoppingList([
            ...shoppingList, { value: inputText, id: Math.random() * 1000, amount: 1,},
        ])
        setinputText('')
    }
    return (
        <div>
                <React.Fragment>
                <h1>Boodschappenlijst</h1>
                <form>
                    <input value={inputText} onChange={inputTextHandler} type="text" />
                    <button onClick={submitInputHandler}>Add to list</button>
                </form>
            </React.Fragment> 
        </div>
    )
}

import React from 'react'
import ListItem from './ListItem'


export default function ShoppingCart({shoppingCart, setShoppingCart}) {
    const leegCart = () => {
    setShoppingCart([])
}
    return (
       <div className="ShoppingCart" >
                <h1>Winkelmand</h1>
                <button onClick={leegCart} >Leeg Winkelmand</button>
            <ul>
              {shoppingCart.map(item => (
                    <ListItem  key={item.id} id={item.id} value={item.value} amount={item.amount} />
                    ))}
                </ul>
            </div>
    )
}

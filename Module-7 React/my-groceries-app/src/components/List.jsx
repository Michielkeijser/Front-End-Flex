import React from 'react'
import ListItem from './ListItem'


export default function List({ shoppingList, setShoppingList, shoppingCart, setShoppingCart}) {
    const moveListItemHandler = e => {
     setShoppingCart([
            ...shoppingCart, { value: e.target.innerText, id: e.target.id, amount: e.target.amount }])
          setShoppingList(shoppingList.filter(el => el.id != e.target.id))  
        
       
}

    return (
     <React.Fragment>
                <ul onClick={moveListItemHandler}>
                {shoppingList.map(item => (
               
                    <ListItem
                        key={item.id}
                        id={item.id}
                        value={item.value}
                        amount={item.amount}
                    />
                   
                    ))}
                </ul>
            </React.Fragment>
    )
}


          
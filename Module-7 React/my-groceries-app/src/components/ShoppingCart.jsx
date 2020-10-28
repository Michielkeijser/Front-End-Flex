import React, { Component } from 'react'
import List from './List'

export default class ShoppingCart extends Component {
    render() {
        return (
            <div className="ShoppingCart" >
                <h1>Winkelmand</h1>
                <button type="reset">Leeg Winkelmand</button>
                <List />
            </div>
        )
    }
}

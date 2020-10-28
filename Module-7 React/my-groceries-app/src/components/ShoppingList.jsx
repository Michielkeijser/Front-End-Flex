import React, { Component } from 'react'
import InputForm from './InputForm'
import List from './List'

export default class ShoppingList extends Component {
    render() {
        return (
            <div className="ShoppingList" >
                <InputForm />
                <List />
            </div>
        )
    }
}

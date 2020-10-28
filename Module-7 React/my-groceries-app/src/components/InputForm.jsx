import React, { Component } from 'react'

export default class InputForm extends Component {
    render() {
        return (
            <div>
                <h1>Boodschappenlijst</h1>
                <div>
                    <input type="text" />
                    <button type="submit">Add to list</button>
                </div>
              
            </div>
        )
    }
}

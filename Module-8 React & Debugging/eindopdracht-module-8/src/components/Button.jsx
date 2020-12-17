import React, { useState } from 'react'

export default function Button({buttonName, setStudentName}) {
    const handleChange = e => {
        setStudentName(e.target.innerHTML)
    }

    return (
        <div>
            <button onClick={handleChange} >{buttonName}</button>
        </div>
    )
}

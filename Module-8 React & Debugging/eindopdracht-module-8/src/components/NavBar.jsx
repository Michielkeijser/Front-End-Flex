import React from 'react'
import { Link } from "react-router-dom"
import '../App.css';

export default function NavBar({studentName}) {
    return (
        <nav>
            <ul className='navbar'>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/students/" >
                    <li>Students</li>
                </Link>
            </ul>
        </nav>
    )
}

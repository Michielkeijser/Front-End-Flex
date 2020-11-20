import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Playlist</li>
                </Link>
                <Link to="/about">
                    <li>About me</li>
                </Link>
            </ul>
        </nav>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

const nav = {
    display: "flex",
    background: "#fe024e",
    padding: "0 6rem",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center"
}

const myUl = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "20%"
}

const link = {
    textDecoration: "none",
    color: "white"
}

const Navbar = () => {
    return(
        <div style={nav}>
            <h1>This is Header</h1>
            <ul style={myUl}>
                <li><Link to="/" style={link}>Home</Link></li>
                <li><Link to="/About" style={link}>About</Link></li>
                <li><Link to="/Contact" style={link}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
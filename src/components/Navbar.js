import React from 'react'

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

const Navbar = () => {
    return(
        <div style={nav}>
            <h1>This is Header</h1>
            <ul style={myUl}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
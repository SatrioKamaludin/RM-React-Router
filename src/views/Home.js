import React, { Component } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        skills: [
            {
                id: 1,
                name: "Javascript",
                description: "Javascript description",
                image: require("../images/js.png")
            },
            {
                id: 2,
                name: "React",
                description: "React description",
                image: require("../images/react.png")
            },
            {
                id: 3,
                name: "SvelteJS",
                description: "SvelteJS description",
                image: require("../images/sveltejs.png")
            },
            {
                id: 4,
                name: "Vuejs",
                description: "Vuejs description",
                image: require("../images/vuejs.jpeg")
            }
        ]
    }
    render() {
        const { skills } = this.state
        return (
            <MainLayout>
                <h1 style={{ paddingLeft: "6rem" }}>Home page</h1>
                <div style={container}>
                    {skills.map(item =>
                        <div key={item.id} style={card}>
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.image} alt={item.name} style={img} />
                                <h3>{item.name}</h3>
                            </Link>
                        </div>
                    )}
                </div>
            </MainLayout>
        )
    }
}

export default Home

const container = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: "space-between"
}

const card = {
    width: "20%",
    height: "15rem"
}

const img = {
    width: "100%",
    height: "100%"
} 
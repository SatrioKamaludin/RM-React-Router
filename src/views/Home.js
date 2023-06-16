import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
            <div>
                <Navbar />
                <h1>Home page</h1>
                <div>
                    {skills.map(item =>
                        <div key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home
import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'

const Routes = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
        </React.Fragment>
    )
}

export default Routes
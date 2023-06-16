import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import Detail from '../views/Detail'

const Routes = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Detail/:id" exact component={Detail} />
        </React.Fragment>
    )
}

export default Routes
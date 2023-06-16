import React from 'react'
import { Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'

const App = () => {
  return(
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/About" exact component={About}/>
    </div>
  )
}

export default App;

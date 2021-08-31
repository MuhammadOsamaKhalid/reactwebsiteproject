import React from 'react'
import Home from './Home'
import { Route, Switch } from 'react-router'
import About from './Pages/About'
import Service from './Pages/Service'
import Error from './Pages/Error'
import Contactus from './Pages/Contactus'

const App = () => {
  return ( 
    <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contactus}></Route>
      <Route path="/service" component={Service}></Route>
      <Route component={Error}></Route>
    </Switch>
    </>
  )
}

export default App
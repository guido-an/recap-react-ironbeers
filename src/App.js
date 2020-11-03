import React from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header'
import Beers from './components/Beers'
import SingleBeer from './components/SIngleBeer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/beers/:id' component={SingleBeer} />
          <Route path='/random-beer' component={RandomBeer} />
          <Route path='/new-beer' component={NewBeer} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div className='home'>
      <Link to='/beers'>Beers</Link>
      <Link to='/random-beer'>Random beer</Link>
      <Link to='/new-beer'>New beer</Link>
    </div>
  )
}

export default Home

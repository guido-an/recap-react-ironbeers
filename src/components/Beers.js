import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// const beerAPI = 'https://ih-beers-api2.herokuapp.com/beers'
class Beers extends React.Component {

    state = {
        beers: []
    }
 
    async componentDidMount(){
       const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
       this.setState({
           beers: response.data
       })
    }

    //  componentDidMount(){
    //   axios.get('https://ih-beers-api2.herokuapp.com/beers')
    //   .then(response => {
    //     this.setState({
    //         beers: response.data
    //     })
    //   })
    // }

  render () {
    return (
      <div>
        <h1>Beers</h1>
        {this.state.beers.map(beer => {
            return (
                <div key={beer._id}>
                <img src={beer.image_url} style={{
                    width: '100px'
                }}></img>
                 <p><strong>{beer.name}</strong></p>
                 <p>{beer.description}</p>
                 <Link to={`/beers/${beer._id}`}>View beer details</Link>
                </div>
            )
        })}
      
      </div>
    )
  }
}

export default Beers

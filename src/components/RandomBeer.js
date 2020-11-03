import React from 'react'
import axios from 'axios'

class RandomBeer extends React.Component {
    state = {
        randomBeer: {}
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => {
            this.setState({
                randomBeer: response.data
            })
        })
        .catch(e => {
            console.log(e)
        })
    }
  render () {
    return (
      <div>
        <h1>{this.state.randomBeer.name}</h1>
      </div>
    )
  }
}

export default RandomBeer

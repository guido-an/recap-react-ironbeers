import React from 'react'
import axios from 'axios'

class SingleBeer extends React.Component {

    state = {
        singleBeer: null
    }

    async componentDidMount(){
        const { id } = this.props.match.params
       const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
       this.setState({
           singleBeer: response.data
       })
    }
  render () {
      if(!this.state.singleBeer){
          return <p>Loading...</p>
      }
    return (
        <div>
          <h1>{this.state.singleBeer.name}</h1> 
          <p>{this.state.singleBeer.description}</p>
        </div>
    )
  }
}

export default SingleBeer

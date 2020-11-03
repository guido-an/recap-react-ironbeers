import React from 'react'
import axios from 'axios'

class NewBeer extends React.Component {

    state = {
        name: '',
        description: ''
    }

    onChangeHandler = e => {
      let { name, value } = e.target
      this.setState({
          [name]: value
      })
    }

    submitHandler = e => {
        e.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: this.state.name,
            description: this.state.description
        })
        .then(response => {
           if(response.status = 200){
               alert('New beer created succesfully')
           }
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        })
    }

  render () {
    return (
      <div>
        <h1>New beer</h1>
        <form onSubmit={this.submitHandler}>
            <input type="text" name="name" placeholder="name" onChange={this.onChangeHandler}></input>
            <input type="text" name="description" placeholder="description" onChange={this.onChangeHandler}></input>
           <button>Create a new beer</button>
        </form>
      </div>
    )
  }
}

export default NewBeer

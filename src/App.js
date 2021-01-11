// Adel Akhmed
import React, { Component } from 'react'
import Card from './components/Card'

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      items: [] // initializing an array of items and sets it to empty to fill up later
    }; 
  }

  componentDidMount() {
    // fetching api 
    fetch('https://cdn.shopify.com/s/files/1/0514/1456/5055/files/user.json?v=1610385270')
    .then(response => response.json()) // converting to json format
    .then(users => this.setState({
      items: users // assigning the data from api to items array
    }));
  }

  render() {
    return (
      <div className="App">
        <Card items={this.state.items}>
          {/* loops through the items in the Card component */}
          {this.state.items.map(item => (
            <h1 key={item.id}>{item.user_name}</h1>
          ))}
        </Card>
      </div>
    )
  }
}

export default App;
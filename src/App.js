import React, { Component } from 'react'
import Card from './components/Card'

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      items: []
    }; 
  }

  componentDidMount() {
    fetch('https://cdn.shopify.com/s/files/1/0514/1456/5055/files/user.json?v=1610385270')
    .then(response => response.json())
    .then(users => this.setState({
      items: users
    }));
  }

  render() {
    return (
      <div className="App">
        <Card items={this.state.items}>
          {this.state.items.map(item => (
            <h1 key={item.id}>{item.user_name}</h1>
          ))}
        </Card>
      </div>
    )
  }
}

export default App;
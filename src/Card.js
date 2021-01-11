import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            items: [], // initialize items array to empty
            isLoaded: false, // initialize boolean isLoaded to false

        }
    }

    componentDidMount() {
        fetch('https://cdn.shopify.com/s/files/1/0514/1456/5055/files/user.json?v=1610385270')
        .then(res =>  res.json())
        .then(json => {
            this.setState({
                isLoaded: true, // switch loaded to a default true
                items: json, // assign the array of items to the json formatted data
            })
        });

    }

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>    // checks for errors
        }
        else {

        return (
            <div className="main_container">
                <ul>
                    {/* loop through each data so that all of it is displayed */}
                    { items.map(item => (
                        <li key={item.id}>
                           <div className="user_name">{item.user_name}</div> 
                           <div className="birthday"><b>Date of birth:</b> {item.birthday}</div> 
                           <div className="avatar"><b>Avatar: </b> {item.Avatar}</div> 
                        </li>
                    ))}
                </ul>
            </div>
         );
     }
    }

}

export default Card;


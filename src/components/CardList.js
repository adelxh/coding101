import React from 'react'
import './Card.css'

export const CardList = (props) => {
    return (
        <div className="card-container"> 
        {/* grabs data from Card component */}
            <h1>{props.item.user_name}</h1>
            <p><b>Birthday:</b> {props.item.birthday}</p>
            <p><b>Avatar: </b>{props.item.Avatar}</p>
        </div>
    )
}
export default CardList;
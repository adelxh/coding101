import React from 'react'
import CardList from './CardList'

export const Card = (props) => {
    return (
        <div className="card-ls">
            {/* assigning a key to each element and accessing item from CardList component */}
            {props.items.map(item => (
                <CardList key={item.id} item={item}/>
            ))}
            
        </div>
    )
}
export default Card;
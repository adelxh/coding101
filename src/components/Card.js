import React from 'react'
import CardList from './CardList'

export const Card = (props) => {
    return (
        <div className="card-ls">
            {props.items.map(item => (
                <CardList key={item.id} item={item}/>
            ))}
            
        </div>
    )
}
export default Card;
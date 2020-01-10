import React from 'react';
import "./card.styles.css"

const Card = props => (
    <div className='card-container'>
        <img style={{maxHeight:300}} className='images' alt="monster" src={`${props.monster.img}` }></img>

        <h1> {props.monster.name}</h1>

        {/* <p>{props.monster.email}</p> */}
    </div>

)





export default Card;
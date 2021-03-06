import React from 'react'
import Card from "../card/card"
import "./card-list.styles.css"


const cardList = props => (
    < div className='card-list'>
        {props.monsters.map(monster => (
            <Card clickHandler={props.clickHandler} key={monster.id} monster={monster} />
        ))}


    </div >


)

export default cardList;
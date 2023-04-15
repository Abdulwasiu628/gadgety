import React from 'react'
import cardStyles from '../styles/cardboard.module.css'

function CardBoard() {
  return (
    <div>
        <div className= {cardStyles.card}>
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                <img className = {cardStyles.image} src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt="" />
            </a>
            <div>
                <hr />
                <p id= {cardStyles.parag}>#205.55</p>
                <p id= {cardStyles.parag}>Product description</p>
            </div>      
        </div>
    </div>
  )
}

export default CardBoard
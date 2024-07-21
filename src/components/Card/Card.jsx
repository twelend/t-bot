import React, { useState } from 'react'
import s from "./style.module.css"

const Card = ({...card}) => {

  const [inTarget, setInTarget] = useState(false)

  const handleMouseEnter = () => {
    setInTarget(true)
  }

  const handleMouseLeave = () => {
    setInTarget(false)
  }
  
  return (
    <div 
      className={s.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={s.card_container}>
        <div className={s.card__img_container}>
          <div className={
              inTarget
                ? s.img_container__cube
                : s.cube_in_target
            }><span>{card.rating}</span></div>

          <img src={card.imageUrl} alt={`cardImg - ${card.imageUrl}`} />
          
          <div className={s.img_container__description + (inTarget ? ' ' + s.visible : '')}>
            <span>{card.description}</span>
            <a href={card.url} target="_blank" rel="noopener noreferrer">Смотреть</a>
          </div>
        </div>

        <div className={s.card__text_container} >
          <span>{card.title}</span>
          <button className={s.card__button}>
            <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z" fill="#F44336" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
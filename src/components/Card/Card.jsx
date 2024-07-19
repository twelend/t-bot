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
          <button className={s.card__button}>Like</button>
        </div>
      </div>
    </div>
  )
}

export default Card
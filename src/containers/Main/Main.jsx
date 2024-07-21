import React from 'react'
import s from "./style.module.css"
import Card from '../../components/Card/Card'
import { useSelector } from 'react-redux'


const Main = () => {

  const cards = useSelector(state => state.cards.cards)
  console.log(cards)
  return (
    <div className={s.main}>
      { Array.isArray(cards) ? (
            cards.length ? (
              cards.map((card, index) => {
              return <Card key={index} {...card}/>
            })
          ) : (
            <div>Карточек нет</div>
          )
        ) : (
          <div>Ошибка в получении карточек</div>
        )
      }
    </div>
  )
}

export default Main
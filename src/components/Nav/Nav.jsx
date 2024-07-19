import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Nav = () => {
    const count = useSelector(state => state.cards.cards.length)
  return (
    <nav className={s.nav}>
        <div className={s.nav__logo_container}>
            <img src="..." alt="Логотип" />
        </div>
        <div className={s.nav__list_container}>
            <div className={s.left}>
                <Link to="/">Сайт</Link>
                <Link to="/">Компоненты <span className={s.count}>{count}</span></Link>
                <Link to="/">Шаблоны</Link>
            </div>
            <div className={s.search}>
                <input type="text"/>
            </div>
            <div className={s.right}>
                <Link to="/addNew">Добавить</Link>
                <Link to="/auth">Войти</Link>
                <Link to="/registration">Зарегистрироваться</Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav
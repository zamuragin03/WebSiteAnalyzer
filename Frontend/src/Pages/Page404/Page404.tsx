import React from 'react'
import cls from './Page404.module.scss'
import { NavLink } from 'react-router-dom'

const Page404 = () => {
    return (
        <div className={cls.wrapper}>
            <span>404. Мы потерялись...</span>
            <NavLink to='/'>Вернуться в сеть</NavLink>
        </div>
    )
}

export default Page404
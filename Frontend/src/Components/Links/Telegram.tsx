import cls from './Base.module.scss'
import tg from '../../assets/icons/telegram.svg'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
type Props = {
    link: string | null
}

const Telegram: FC<Props> = ({ link }: Props) => {
    return (
        <div className={cls.wrapper}>
            <img src={tg} alt="" />
            <NavLink to={link ? link : ''}>{link ? link : 'Отсутствует'}</NavLink>
        </div>
    )
}

export default Telegram
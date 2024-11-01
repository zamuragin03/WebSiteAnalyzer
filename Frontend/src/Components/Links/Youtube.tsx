import cls from './Base.module.scss'
import yt from '../../assets/icons/youtube.svg'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
type Props = {
    link: string | null
}

const Youtube: FC<Props> = ({ link }: Props) => {
    return (
        <div className={cls.wrapper}>
            <img src={yt} alt="" />
            {link ?
                <NavLink to={link ? link : ''}>{link ? link : 'Отсутствует'}</NavLink>
                :
                <span>{link ? link : 'Отсутствует'}</span>
            }
        </div>
    )
}

export default Youtube
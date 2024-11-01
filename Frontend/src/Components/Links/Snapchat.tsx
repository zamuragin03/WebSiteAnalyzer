import cls from './Base.module.scss'
import sc from '../../assets/icons/snapchat.svg'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
type Props = {
    link: string | null
}

const Snapchat: FC<Props> = ({ link }: Props) => {
    return (
        <div className={cls.wrapper}>
            <img src={sc} alt="" />
            {link ?
                <NavLink to={link ? link : ''}>{link ? link : 'Отсутствует'}</NavLink>
                :
                <span>{link ? link : 'Отсутствует'}</span>
            }
        </div>
    )
}

export default Snapchat
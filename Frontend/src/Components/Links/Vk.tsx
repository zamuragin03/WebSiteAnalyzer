import cls from './Base.module.scss'
import vk from '../../assets/icons/vk.svg'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
type Props = {
    link: string | null
}

const Vk: FC<Props> = ({ link }: Props) => {
    return (
        <div className={cls.wrapper}>
            <img src={vk} alt="" />
            {link ?
                <NavLink to={link ? link : ''}>{link ? link : 'Отсутствует'}</NavLink>
                :
                <span>{link ? link : 'Отсутствует'}</span>
            }
        </div>
    )
}

export default Vk
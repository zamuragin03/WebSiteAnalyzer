import cls from './Base.module.scss'
import sc from '../../assets/icons/snapchat.svg'
import { FC } from 'react'
type Props = {
    link: string | null
}

const Snapchat: FC<Props> = ({ link }: Props) => {
    return (
        <div className={cls.wrapper}>
            <img src={sc} alt="" />
            <span>{link ? link : 'Отсутствует'}</span>
        </div>
    )
}

export default Snapchat
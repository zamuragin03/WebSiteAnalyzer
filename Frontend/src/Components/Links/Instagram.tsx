import cls from './Base.module.scss'
import inst from '../../assets/icons/inst.svg'
import { FC } from 'react'
type Props = {
    link: string | null
}

const Instagram: FC<Props> = ({ link }: Props) => {
    return (
        <div className={cls.wrapper}>
            <img src={inst} alt="" />
            <span>{link ? link : 'Отсутствует'}</span>
        </div>
    )
}

export default Instagram
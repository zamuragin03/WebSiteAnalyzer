import cls from './Base.module.scss'
import fcb from '../../assets/icons/fb.svg'
import { FC } from 'react'
type Props = {
    link: string | null
}

const Facebook: FC<Props> = ({ link }: Props) => {
    return (
        <div className={cls.wrapper}>
            <img src={fcb} alt="" />
            <span>{link ? link : 'Отсутствует'}</span>
        </div>
    )
}

export default Facebook
import cls from './Base.module.scss'
import others from '../../assets/icons/others.svg'
import { FC } from 'react'
type Props = {
    links: string[]
}

const Others: FC<Props> = ({ links }: Props) => {
    return (
        <div className={cls.wrapper}>
            <img src={others} alt="" />
            {links.map(el =>
                <span>{el}</span>
            )}
        </div>
    )
}

export default Others
import cls from './Base.module.scss'
import others from '../../assets/icons/others.svg'
import { FC } from 'react'
type Props = {
    links: string[]
}

const Others: FC<Props> = ({ links }: Props) => {
    return (
        <div className={[cls.wrapper].join(' ')}>
            <img src={others} alt="" />
            <div className={cls.others}>

            {links.map(el =>
                <span>{el}</span>
            )}
            </div>
        </div>
    )
}

export default Others
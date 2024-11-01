import { FC } from 'react'
import cls from './SummaryElement.module.scss'

type Props = {
    title: string,
    value: number,
    variance: number
}

const SummaryElement:FC<Props> = ({title, value, variance}: Props) => {
    return (
        <div className={cls.wrapper}>
            <span className={cls.title}>{title}</span>
            <span className={cls.value}>{(value*100).toFixed(1)}%</span>
            <span className={cls.variance}>{variance}%</span>
        </div>
    )
}

export default SummaryElement
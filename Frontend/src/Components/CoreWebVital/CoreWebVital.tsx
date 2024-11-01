import React, { FC } from 'react'
import cls from './vital.module.scss'
type Props = {
    name: string,
    displayValue: string,
    percentageValue: number
}

const CoreWebVital: FC<Props> = ({ name, displayValue, percentageValue }: Props) => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.metrics}>
                <span className={cls.name}>{name}</span>
                <span className={cls.dsp}>{displayValue}</span>
                <span className={cls.perc}>{(percentageValue*100).toFixed(1)}%</span>
            </div>
        </div>
    )
}

export default CoreWebVital
import React, { FC, ReactNode } from 'react'
import cls from './WhiteButton.module.scss'
interface IProps {
    children: ReactNode,
    clss?: string[],
    onClick?: () => void,

}
const WhiteButton: FC<IProps> = ({ children, clss = [], onClick, }: IProps) => {
    return (
        <button onClick={onClick} className={[cls.whiteBtn, ...clss].join(' ')} >
            {children}
        </button>
    )
}

export default WhiteButton
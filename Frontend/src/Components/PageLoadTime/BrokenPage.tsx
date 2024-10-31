import { FC } from 'react'
import cls from './PageLoad.module.scss'

export interface IBrokenElement {
    link: string
}


const BrokenLink:FC<IBrokenElement> = ({ link }: IBrokenElement) => {
    return (
        <div className={cls.wrapper}>
            <span className={cls.url}>{link}</span>
        </div>
    )
}

export default BrokenLink
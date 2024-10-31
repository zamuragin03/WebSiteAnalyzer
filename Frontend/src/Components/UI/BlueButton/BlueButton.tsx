import { FC, ReactNode } from 'react'
import cls from './BlueButon.module.scss'
interface IProps {
    children: ReactNode,
    clss?: string[],
    onClick?: () => void,

}
const BlueButton: FC<IProps> = ({ children, clss = [], onClick, }: IProps) => {
    return (
        <button onClick={onClick} className={[cls.blueBtn, ...clss].join(' ')} >
            {children}
        </button>
    )
}

export default BlueButton
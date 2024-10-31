import cls from './HasAttribute.module.scss'
import yes from '../../../assets/icons/yes.svg'
import no from '../../../assets/icons/no.svg'
import { NavLink } from 'react-router-dom'
interface Props {
    has_value: boolean,
    title: string,
    additianal_text?: string,
}
const HasAttribute = ({ has_value, title, additianal_text }: Props) => {
    return (
        <div className={cls.attribute}>
            <img src={has_value ? yes : no} alt="" />
            <span className={cls.title}>{title}</span>
            {additianal_text?.includes('http') ?
                <NavLink className={cls.additional} to={additianal_text}>{additianal_text}</NavLink> :

                <span className={cls.additional}>{additianal_text}</span>}
        </div>
    )
}

export default HasAttribute
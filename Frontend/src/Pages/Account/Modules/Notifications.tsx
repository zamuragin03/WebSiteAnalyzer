import React from 'react'
import cls from '../Account.module.scss'
type Props = {}

const Notifications = (props: Props) => {
    return (
        <div className={cls.module_wrapper}>
            <span className={cls.selected_module_title}>Уведомления</span>
            
        </div>
    )
}

export default Notifications
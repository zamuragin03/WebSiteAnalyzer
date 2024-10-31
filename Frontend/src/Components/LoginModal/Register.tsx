import React from 'react'
import cls from './Base.module.scss'
import DataInput from '../UI/DataInput/DataInput'
import BlueButton from '../UI/BlueButton/BlueButton'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../Store/RootStore/UseRootStore'
type Props = {}

const Register = observer((props: Props) => {
    const {LoginFormVisibilityStore}= useRootStore()
    return (
        <div className={cls.register}>
            <span className={cls.welcome_title}>Создание аккаунта</span>
            <div className={cls.fields_wrapper}>
                <div className={cls.fields}>
                    <span>Email</span>
                    <DataInput placeholder='example@mail.com' />
                </div>
                <div className={cls.fields}>
                    <span>Пароль</span>
                    <DataInput type='password' placeholder='**********' />
                </div>
                <div className={cls.fields}>
                    <span>Повтор пароля</span>
                    <DataInput type='password' placeholder='**********' />
                </div>
                <span className={cls.already_has} onClick={()=>LoginFormVisibilityStore.setActiveButton('login') }>Уже есть аккаунт?</span>
                <BlueButton>Создать аккаунт</BlueButton>
            </div>
        </div>
    )
})

export default Register
import React from 'react'
import cls from './Base.module.scss'
import DataInput from '../UI/DataInput/DataInput'
import BlueButton from '../UI/BlueButton/BlueButton'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../Store/RootStore/UseRootStore'
type Props = {}

const Login = observer((props: Props) => {
    const { LoginFormVisibilityStore } = useRootStore()
    return (
        <div className={cls.login}>
            <span className={cls.welcome_title}>Добро пожаловать в Молнию</span>
            <span className={cls.secondary_title}>Авторизуйтесь, чтобы получить доступ к отчетам</span>
            <div className={cls.fields_wrapper}>
                <div className={cls.fields}>
                    <span>Email</span>
                    <DataInput placeholder='example@mail.com' />
                </div>
                <div className={cls.fields}>
                    <span>Пароль</span>
                    <DataInput type='password' placeholder='**********' />
                </div>
                <span className={cls.already_has} onClick={() => LoginFormVisibilityStore.setActiveButton('register')}>Нет аккаунта?</span>
                <BlueButton>Войти в систему</BlueButton>
            </div>
        </div>
    )
})

export default Login
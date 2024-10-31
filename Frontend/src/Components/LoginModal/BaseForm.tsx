import React, { useState } from 'react'
import cls from './Base.module.scss'
import Register from './Register'
import Login from './Login'
import { useRootStore } from '../../Store/RootStore/UseRootStore'
import { observer } from 'mobx-react-lite'

const BaseForm = observer(() => {
    const rootClasses: Array<string> = [cls.LoginForm, cls.active]
    const { LoginFormVisibilityStore } = useRootStore()
    const RenderWindow = () => {
        switch (LoginFormVisibilityStore.activeButton) {
            case 'register':
                return <Register
                />;
            case 'login':
                return <Login
                />;
            // case 'reset_password':
            // return <ResetPasswordForm setactive_button={setactive_button} />;
            default:
                return null;
        }
    }
    if (LoginFormVisibilityStore.isVisible)
        return (
            <div className={rootClasses.join(' ')} onClick={() => LoginFormVisibilityStore.setIsVisible(false)}>
                <div className={cls.LoginFormContent} onClick={(e) => e.stopPropagation()}>
                    <span className={cls.cross} onClick={() => LoginFormVisibilityStore.setIsVisible(false)} >&#10005;</span>
                    {RenderWindow()}
                </div>
            </div>
        )
}
)
export default BaseForm
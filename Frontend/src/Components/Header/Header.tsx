
import cls from './Header.module.scss'
import gif from '../../assets/favicon.gif'
import BlueButton from '../UI/BlueButton/BlueButton'
import WhiteButton from '../UI/WhiteButton/WhiteButton'
import { HeaderLinks, IHeaderLink } from '../../Utils/Const'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../Store/RootStore/UseRootStore'
const Header = observer(() => {
    const { LoginFormVisibilityStore } = useRootStore()
    return (
        <header>
            <nav className={cls.nav}>
                <div className={cls.logo_and_text}>
                    <img className={cls.logo} src={gif} alt="logo" />
                    <span className={cls.logo_text}>Молния</span>
                </div>
                <div className={cls.header_base}>
                    <div className={cls.links}>
                        {HeaderLinks.map((el: IHeaderLink, id: number) => <NavLink key={id} to={el.path}>{el.name}</NavLink>)}
                    </div>
                    <div className={cls.account_buttons}>
                        <BlueButton onClick={() => {
                            LoginFormVisibilityStore.setIsVisible(true);
                            LoginFormVisibilityStore.setActiveButton('register')
                        }}>Регистрация</BlueButton>
                        <WhiteButton onClick={() => {
                            LoginFormVisibilityStore.setIsVisible(true);
                            LoginFormVisibilityStore.setActiveButton('login')
                        }}>Войти</WhiteButton>
                    </div>
                </div>
            </nav>
        </header>
    )
})

export default Header
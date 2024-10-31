import { observer } from 'mobx-react-lite'
import img from '../../assets/ava.jpg'
import api from '../../assets/icons/api.svg'
import logout from '../../assets/icons/logout.svg'
import report from '../../assets/icons/report.svg'
import ring from '../../assets/icons/ring.svg'
import web_icn from '../../assets/icons/web.svg'
import { useRootStore } from '../../Store/RootStore/UseRootStore'
import cls from './Account.module.scss'
import Notifications from './Modules/Notifications'
import Reports from './Modules/Reports'
import Websites from './Modules/Websites'
const Account = observer(() => {
    const { SelectedModuleStore } = useRootStore()
    const RenderModule = () => {
        switch (SelectedModuleStore.activeButton) {
            case 'notifications':
                return <Notifications />
            case 'reports':
                return <Reports />
            case 'websites':
                return <Websites />
            default:
                return null;
        }
    }
    return (
        <div className={cls.wrapper}>
            <aside className={cls.nav_bar}>
                <div className={cls.photo_and_modules}>
                    <div className={cls.avatar_and_name}>
                        <img src={img} alt="ava" />
                        <div className={cls.name_and_email}>
                            <span className={cls.username}>Username</span>
                            <span className={cls.email}>example@mail.com</span>
                        </div>
                    </div>
                    <div className={cls.modules}>
                        <div
                            onClick={() => SelectedModuleStore.setActiveButton('websites')}
                            className={[cls.module, SelectedModuleStore.activeButton == 'websites' ? cls.module_selected : ''].join(' ')}>

                            <img src={web_icn} alt="" />
                            <span >Сайты</span>
                        </div>
                        <div
                            onClick={() => SelectedModuleStore.setActiveButton('reports')}
                            className={[cls.module, SelectedModuleStore.activeButton == 'reports' ? cls.module_selected : ''].join(' ')}>
                            <img src={report} alt="" />
                            <span >Отчеты</span>
                        </div>
                        <div onClick={() => SelectedModuleStore.setActiveButton('notifications')}
                            className={[cls.module, SelectedModuleStore.activeButton == 'notifications' ? cls.module_selected : ''].join(' ')}>
                            <img src={ring} alt="" />
                            <span >Уведомления</span>
                        </div>
                    </div>
                </div>

                <div className={cls.others}>
                    <div className={cls.module}>
                        <img src={api} alt="" />
                        <span>API</span>
                    </div>
                    <div className={cls.module}>
                        <img src={logout} alt="" />
                        <span>Выйти</span>
                    </div>
                </div>
            </aside>
            <aside className={cls.selected_module}>
                {RenderModule()}
            </aside>
        </div>
    )
}
)
export default Account
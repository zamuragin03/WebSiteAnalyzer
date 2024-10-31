import { ILoadTime } from '../../DataModel/IReport/IReport'
import cls from './PageLoad.module.scss'



const PageLoadTime = ({url, load_time}: ILoadTime) => {
    return (
        <div className={cls.wrapper}>
            <span className={cls.url}>{url}</span>
            <span>{load_time}s.</span>
        </div>
    )
}

export default PageLoadTime
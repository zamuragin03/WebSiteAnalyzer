import React from 'react'
import SearchInput from '../../../Components/UI/SearchInput/SearchInput'
import cls from '../Account.module.scss'
type Props = {}

const Websites = (props: Props) => {
    return (
        <div className={cls.module_wrapper}>
            <span className={cls.selected_module_title}>Сайты</span>
            <SearchInput ></SearchInput>
            <div className={cls.table}>
                <div className={cls.header}>
                    <div className={cls.header_div}>
                        <span className={cls.url}>URL cайта</span>
                        <span className={cls.last_check}>Последняя проверка</span>
                        <span className={cls.results}>Результат</span>
                    </div>
                </div>
                <div className={cls.website}>
                    <div className={cls.website_div}>
                        <span className={cls.url}>example@mail.com</span>
                        <span className={cls.last_check}>11.08.2024</span>
                        <span className={cls.results}>7</span>
                    </div>
                </div>
                <div className={cls.website}>
                    <div className={cls.website_div}>
                        <span className={cls.url}>example@mail.com</span>
                        <span className={cls.last_check}>11.08.2024</span>
                        <span className={cls.results}>7</span>
                    </div>
                </div>
                <div className={cls.website}>
                    <div className={cls.website_div}>
                        <span className={cls.url}>example@mail.com</span>
                        <span className={cls.last_check}>11.08.2024</span>
                        <span className={cls.results}>7</span>
                    </div>
                </div>
                <div className={cls.website}>
                    <div className={cls.website_div}>
                        <span className={cls.url}>example@mail.com</span>
                        <span className={cls.last_check}>11.08.2024</span>
                        <span className={cls.results}>7</span>
                    </div>
                </div>
                <div className={cls.website}>
                    <div className={cls.website_div}>
                        <span className={cls.url}>example@mail.com</span>
                        <span className={cls.last_check}>11.08.2024</span>
                        <span className={cls.results}>7</span>
                    </div>
                </div>
                <div className={cls.website}>
                    <div className={cls.website_div}>
                        <span className={cls.url}>example@mail.com</span>
                        <span className={cls.last_check}>11.08.2024</span>
                        <span className={cls.results}>7</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Websites
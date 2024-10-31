import { useState } from 'react';
import { AnalyzeWebsite } from '../../Service/Analyze';
import cls from './Main.module.scss';
import SearchInput from '../../Components/UI/SearchInput/SearchInput';
import Report from '../../Components/Report/Report';
import { reportMock } from './mock';

const Main = () => {
    const [url, seturl] = useState<string>('');

    const proceedUrl = async () => {
        seturl(() => '')
        await AnalyzeWebsite(url)
    }
    return (
        <div className={cls.mainpage}>
            <div className={cls.pic}>
                <span className={cls.main_title}>Анализируй любой сайт</span>
                <span className={cls.secondary_title}>Просматривайте показатели эффективности, SEO и многое другое. Получите бесплатный отчет за считанные минуты.</span>
                <SearchInput button_title={'Анализировать'} value={url} onClick={() => proceedUrl()} onChange={(e) => seturl(e.target.value)}></SearchInput>
            </div>
            <Report report={reportMock}/>
        </div>
    )
}

export default Main
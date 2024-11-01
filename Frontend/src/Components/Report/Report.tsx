import { FC } from 'react'
import { IimageDetail, ILoadTime, IPageDetail, IReport } from '../../DataModel/IReport/IReport'
import Facebook from '../Links/Facebook'
import Instagram from '../Links/Instagram'
import Others from '../Links/OthersLinks'
import Snapchat from '../Links/Snapchat'
import Telegram from '../Links/Telegram'
import Vk from '../Links/Vk'
import Youtube from '../Links/Youtube'
import BrokenLink from '../PageLoadTime/BrokenPage'
import PageLoadTime from '../PageLoadTime/PageLoadTime'
import HasAttribute from '../UI/HasAttribute/HasAttribute'
import ImageIssueElement from '../UI/ImageIssueElement/ImageIssueElement'
import PageIssueElement from '../UI/PageIssueElement/PageIssueElement'
import SummaryElement from '../UI/SummaryElement/SummaryElement'
import cls from './Report.module.scss'
import CoreWebVital from '../CoreWebVital/CoreWebVital'

export interface IProps {
    report: IReport
}

const Report: FC<IProps> = ({ report }: IProps) => {
    return (
        <div className={cls.wrapper}>
            <h1 className={cls.title}>Название сайта({report.url})</h1>
            <h2>Сводка</h2>
            <div className={cls.summary}>
                <SummaryElement title='SEO' value={report.OverallRate.SEO} variance={0} />
                <SummaryElement title='Производительность' value={report.OverallRate.Performance} variance={0} />
                <SummaryElement title='WebVitals' value={report.OverallRate.WebVitals} variance={0} />
            </div>
            <h2>SEO</h2>
            <h3>Картинки</h3>
            <div className={cls.images_wrapper}>
                {report.SEO.Image_analyze.map((image: IimageDetail) => <div><ImageIssueElement {...image} /></div>)}
            </div>
            <h3>Анализ страниц</h3>
            <div className={cls.pages}>
                {report.SEO.Page_analyze.map((page: IPageDetail) => <PageIssueElement {...page} />)}
            </div>
            <h3>Внешние ссылки</h3>
            <div className={cls.external_links}>
                <Telegram link={report.SEO.ExternalLinks.Telegram} />
                <Instagram link={report.SEO.ExternalLinks.Instagram} />
                <Facebook link={report.SEO.ExternalLinks.Facebook} />
                <Snapchat link={report.SEO.ExternalLinks.Snapchat} />
                <Youtube link={report.SEO.ExternalLinks.YouTube} />
                <Vk link={report.SEO.ExternalLinks.Vk} />
                {report.SEO.ExternalLinks.Others.length > 0 && <Others links={report.SEO.ExternalLinks.Others} />}
            </div>
            <h2>Техническое состояние</h2>
            <h3>Общее</h3>
            <div className={cls.overall_tech}>
                <HasAttribute title='Robots.txt' has_value={!!report.TechnicalCondition.HasRobotsTxt} />
                <HasAttribute title='sitemap.xml' has_value={!!report.TechnicalCondition.HasSiteMap} />
                <HasAttribute title='404 код ошибки' has_value={!!report.TechnicalCondition.Page404} />
                <HasAttribute title='200 код страницы' has_value={!!report.TechnicalCondition.Page404} />
                <HasAttribute title='SSL/TLS' has_value={!!report.TechnicalCondition.SSL} />
            </div>
            <h3>Время загрузки страницы</h3>
            <div className={cls.load_time_wrapper}>
                {report.TechnicalCondition.LoadTime.map((element: ILoadTime) => <PageLoadTime {...element} />)}
            </div>
            <h3>Битые ссылки</h3>
            {report.TechnicalCondition.BrokenLinks.length > 0 ?
                <div className={cls.load_time_wrapper}>
                    {report.TechnicalCondition.BrokenLinks.map((element: string) => <BrokenLink link={element} />)}
                </div> : <span>Отсутствуют</span>
            }
            <h2>CoreWebVitals</h2>
            <div className={cls.vitals}>
                <CoreWebVital name={'CLS'} displayValue={report.WebVitals.CLS.displayValue} percentageValue={report.WebVitals.CLS.score} />
                <CoreWebVital name={'LCP'} displayValue={report.WebVitals.LCP.displayValue} percentageValue={report.WebVitals.LCP.score} />
                <CoreWebVital name={'INP'} displayValue={report.WebVitals.INP.displayValue} percentageValue={report.WebVitals.INP.score} />
            </div>
        </div >
    )
}

export default Report
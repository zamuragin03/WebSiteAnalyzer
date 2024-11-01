import { FC } from 'react'
import { IPageDetail } from '../../../DataModel/IReport/IReport'
import cls from './PageIssueElement.module.scss'
import HasAttribute from '../HasAttribute/HasAttribute'
import { NavLink } from 'react-router-dom'

const PageIssueElement: FC<IPageDetail> = (props: IPageDetail) => {
    return (
        <div className={cls.wrapper}>
            <NavLink to={props.url}>{props.url}</NavLink>
            <HasAttribute title='Title' has_value={!!props.title} additianal_text={props.title ? '(' + props.title + ')' : ''} />
            <HasAttribute title='Description' has_value={!!props.description} />
            <HasAttribute title='h1' has_value={!!props.h1} additianal_text={props.h1 ? '(' + props.h1 + ')' : ''} />
            <HasAttribute title='h1' has_value={props.h1_count > 0} additianal_text={'(' + props.h1_count + ')'} />
            <HasAttribute title='h2' has_value={true} additianal_text={'(' + props.h2_count + ')'} />
            <HasAttribute title='h3' has_value={true} additianal_text={'(' + props.h3_count + ')'} />
            <HasAttribute title='h4' has_value={true} additianal_text={'(' + props.h4_count + ')'} />
            <HasAttribute title='h5' has_value={true} additianal_text={'(' + props.h5_count + ')'} />
            <HasAttribute title='og:title' has_value={!!props.og_title} additianal_text={props.og_title ? '(' + props.og_title + ')' : ''} />
            <HasAttribute title='og:description' has_value={!!props.og_description} additianal_text={props.og_description ? '(' + props.og_description + ')' : ''} />
            <HasAttribute title='og:image' has_value={!!props.og_image} additianal_text={props.og_image ? '(' + props.og_image + ')' : ''} />
            <HasAttribute title='og:url' has_value={!!props.url} additianal_text={props.og_url ? '(' + props.og_url + ')' : ''} />
        </div>
    )
}

export default PageIssueElement
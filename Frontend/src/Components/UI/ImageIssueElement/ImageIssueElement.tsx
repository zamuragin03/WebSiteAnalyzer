import React, { FC } from 'react'
import cls from './ImageIssueElement.module.scss'
import HasAttribute from '../HasAttribute/HasAttribute'
import no from '../../../assets/icons/no.svg'
type Props = {
    src: string,
    alt: string | null,
    title: string | null
}

const ImageIssueElement: FC<Props> = ({ src, alt, title }: Props) => {
    return (
        <div className={cls.wrapper}>
            <img className={cls.image} src={src ? src : no} />
            <div className={cls.attributes}>
                <HasAttribute title='Alt' has_value={alt ? true : false} />
                <HasAttribute title='Title' has_value={title ? true : false} />
            </div>
        </div>
    )
}

export default ImageIssueElement
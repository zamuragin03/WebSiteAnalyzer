export interface IReport {
    url: string,
    OverallRate: IVerallRate,
    SEO: ISeoObject,
    TechnicalCondition: ITechnichalCondtitions,
    WebVitals: IWebVitals,
}
export interface IVerallRate {
    SEO: number,
    Performance: number,
    WebVitals: number
}

export interface ISeoObject {
    Image_analyze: Array<IimageDetail>,
    Page_analyze: Array<IPageDetail>,
    ExternalLinks: ILinks,
}
export interface IimageDetail {
    src: string,
    alt: string | null,
    title: string | null
}
export interface IPageDetail {
    url: string
    h1: string | null
    title: string | null,
    description: string | null,
    h1_count: number,
    h2_count: number,
    h3_count: number,
    h4_count: number,
    h5_count: number,
    og_title: string,
    og_description: string | null,
    og_image: string | null,
    og_url: string | null,
}
export interface ILinks {
    Telegram: string | null
    Facebook: string | null
    Instagram: string | null
    Snapchat: string | null
    YouTube: string | null
    Vk: string | null
    Others: string[]
}
export interface ITechnichalCondtitions {
    HasRobotsTxt: boolean
    HasSiteMap: boolean,
    Page404: boolean,
    Page200: boolean
    SSL: boolean,
    LoadTime: Array<ILoadTime>
    BrokenLinks: string[]
    Technologies: any
}
export interface ILoadTime {
    url: string,
    load_time: number
}

export interface IWebVitals {
    LCP: IWebVital,
    CLS: IWebVital,
    INP: IWebVital,
}
export interface IWebVital {
    displayValue: string,
    numericValue: number
    score: number
}
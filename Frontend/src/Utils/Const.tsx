export interface IHeaderLink {
    name: string,
    path: string
}

export const HeaderLinks: Array<IHeaderLink> = [
    { name: 'Анализировать', path: '/' },
    { name: 'Цены', path: '/pricing' },
    { name: 'О приложении', path: '/about' },
    { name: 'API', path: '/API' },
]
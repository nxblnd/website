interface MenuItem {
    name: string,
    value: string,
    path: string,
    icon?: string,
}

export interface Meta {
    title: string,
    author: string,
    menu: Array<MenuItem>,
}

export const meta: Meta = {
    title: 'title?',
    author: 'Pavel Egorov',
    menu: [
        {
            name: 'cv',
            value: 'Резюме',
            path: 'cv',
            icon: 'mdi:resume',
        },
        {
            name: 'about',
            value: 'About',
            path: 'about',
            icon: 'mdi:about',
        },
    ],
}


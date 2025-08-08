interface MenuItem {
    name: string,
    value: string,
    path: string,
    icon?: string,
}

export interface Meta {
    title: string,
    menu: Array<MenuItem>,
}

export const meta: Meta = {
    title: 'title?',
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


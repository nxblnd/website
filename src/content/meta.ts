interface MenuItem {
    name: string,
    value: string,
    path: string,
    icon?: string,
}

export interface Meta {
    title: string,
    author: string,
    cvName: string,
    cvPosition: string,
    menu: Array<MenuItem>,
}

export const meta: Meta = {
    title: 'title?',
    author: 'Pavel Egorov',
    cvName: 'Егоров Павел Владимирович',
    cvPosition: 'Frontend Developer',
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


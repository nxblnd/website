interface MenuItem {
    name: string,
    value: string,
    path: string,
    icon?: string,
}

interface Social {
    name: string,
    icon: string,
    link: string,
    label: string,
}

export interface Meta {
    title: string,
    author: string,
    menu: Array<MenuItem>,
    social: Array<Social>,
}

export const meta: Meta = {
    title: 'title?',
    author: 'Pavel Egorov',
    menu: [
        {
            name: 'cv',
            value: 'Резюме',
            path: '/cv',
            icon: 'mdi:resume',
        },
        {
            name: 'about',
            value: 'About',
            path: '/about',
            icon: 'mdi:about',
        },
    ],
    social: [
        {
            name: 'email',
            icon: 'mdi:email',
            link: 'mailto:contact@pavelegorov.xyz',
            label: 'Contact me by email',
        },
        {
            name: 'github',
            icon: 'mdi:github',
            link: 'https://github.com/nxblnd',
            label: 'My Github account',
        },
    ],
}


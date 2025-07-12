export interface ContactEntry {
    value: string,
    label: string,
    icon?: string,
    hint?: string,
    link?: string,
    hidden?: boolean,
    important?: boolean,
}

export const contactInfo: Array<ContactEntry> = [
    {
        label: 'location',
        value: 'Санкт-Петербург, Россия',
        hint: 'Местоположение',
        icon: 'mdi:location',
        important: true,
    },
    {
        label: 'language',
        value: 'русский, английский',
        hint: 'Язык',
        icon: 'mdi:spoken-language',
        important: true,
    },
    {
        label: 'remoteWork',
        value: 'Любой формат работы, предпочтительно удалённо/гибрид',
        hint: 'Формат работы',
        icon: 'mdi:office-building',
        important: true,
    },
    {
        label: 'email',
        value: 'hireme@pavelegorov.xyz',
        link: 'mailto:hireme@pavelegorov.xyz',
        hint: 'Email',
        icon: 'mdi:email',
    },
    {
        label: 'phone',
        value: '+xxxxxxxxxxx',
        link: 'tel:+xxxxxxxxxxx',
        hint: 'Телефон',
        icon: 'mdi:phone',
    },
    {
        label: 'telegram',
        value: 'nxblnd',
        link: 'https://t.me/nxblnd',
        hint: 'Telegram',
        icon: 'mdi:telegram',
    },
    {
        label: 'github',
        value: 'nxblnd',
        link: 'https://github.com/nxblnd',
        hint: 'Github',
        icon: 'mdi:github',
    },
    {
        label: 'site',
        value: 'pavelegorov.xyz',
        link: 'https://pavelegorov.xyz',
        hint: 'Сайт',
        icon: 'mdi:web',
    },
    {
        label: 'linkedin',
        value: 'Pavel Egorov',
        link: 'https://www.linkedin.com/in/pavel-e-b1409a225/',
        hint: 'LinkedIn',
        icon: 'mdi:linkedin',
        hidden: true,
    },
];


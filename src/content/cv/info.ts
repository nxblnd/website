interface Name {
    firstName: string;
    lastName: string;
    patronym?: string;
}

interface PersonalInfo {
    name: Name;
    position: string;
}

interface ContactEntry {
    value: string;
    label: string;
    icon?: string;
    title?: string;
    link?: string;
    hidden?: boolean;
    important?: boolean;
}

type ContactInfo = Array<ContactEntry>;

export const personalInfo: PersonalInfo = {
    name: {
        firstName: "Павел",
        lastName: "Егоров",
        patronym: "Владимирович",
    },
    position: "Frontend разработчик",
};

export const contactInfo: ContactInfo = [
    {
        label: "location",
        value: "Санкт-Петербург, Россия; готов к релокации",
        title: "Местоположение",
        icon: "mdi:location",
        important: true,
    },
    {
        label: "language",
        value: "русский, английский",
        title: "Язык",
        icon: "mdi:spoken-language",
        important: true,
    },
    {
        label: "remoteWork",
        value: "любой, предпочтительно удалённо/гибрид",
        title: "Формат работы",
        icon: "mdi:office-building",
        important: true,
    },
    {
        label: "email",
        value: "hire_me@pavelegorov.xyz",
        link: "mailto:hire_me@pavelegorov.xyz",
        title: "Email",
        icon: "mdi:email",
    },
    {
        label: "phone",
        value: "+xxxxxxxxxxx",
        link: "tel:+xxxxxxxxxxx",
        title: "Телефон",
        icon: "mdi:phone",
        hidden: true,
    },
    {
        label: "telegram",
        value: "nxblnd",
        link: "https://t.me/nxblnd",
        title: "Telegram",
        icon: "mdi:telegram",
    },
    {
        label: "github",
        value: "nxblnd",
        link: "https://github.com/nxblnd",
        title: "Github",
        icon: "mdi:github",
    },
    {
        label: "site",
        value: "pavelegorov.xyz",
        link: "https://pavelegorov.xyz",
        title: "Сайт",
        icon: "mdi:web",
    },
    {
        label: "linkedin",
        value: "Pavel Egorov",
        link: "https://www.linkedin.com/in/pavel-e-b1409a225/",
        title: "LinkedIn",
        icon: "mdi:linkedin",
        hidden: true,
    },
];

export const cvShareInfo: ShareData = {
    title: "Резюме",
    text: `${personalInfo.name.lastName} ${personalInfo.name.firstName}, ${personalInfo.position}`,
    url: "https://pavelegorov.xyz/cv",
};

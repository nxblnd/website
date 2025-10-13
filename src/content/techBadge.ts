export type IconSource = "simple-icons" | "devicon" | "logos";

export interface Tech {
    icon?: {
        [key in IconSource]?: string;
    };
    name: Array<string>;
    label: string;
    color?: string;
    fontColor?: string;
    link?: string;
}

export default <Array<Tech>>[
    {
        name: ["js", "javascript"],
        label: "JavaScript",
        color: "#eed655",
        fontColor: "#000000",
        icon: {
            "simple-icons": "javascript",
            devicon: "javascript",
            logos: "javascript",
        },
    },
    {
        name: ["ts", "typescript"],
        label: "TypeScript",
        color: "#3178c6",
        fontColor: "#ffffff",
        link: "https://www.typescriptlang.org/",
        icon: {
            "simple-icons": "typescript",
            devicon: "typescript",
            logos: "typescript-icon",
        },
    },
    {
        name: ["vue", "vuejs"],
        label: "VueJS",
        color: "#42b883",
        fontColor: "#ffffff",
        link: "https://vuejs.org/",
        icon: {
            "simple-icons": "vuedotjs",
            devicon: "vuejs",
            logos: "vue",
        },
    },
    {
        name: ["pinia"],
        label: "Pinia",
        color: "#ffd859",
        fontColor: "#51a256",
        link: "https://pinia.vuejs.org/",
        icon: {
            "simple-icons": "pinia",
            logos: "pinia",
        },
    },
    {
        name: ["quasar"],
        label: "Quasar",
        color: "#00b4ff",
        fontColor: "#ffffff",
        link: "https://quasar.dev/",
        icon: {
            "simple-icons": "quasar",
            devicon: "quasar",
        },
    },
    {
        name: ["webpack"],
        label: "Webpack",
        color: "#84c6e8",
        fontColor: "#ffffff",
        link: "https://webpack.js.org/",
        icon: {
            "simple-icons": "webpack",
            devicon: "webpack",
            logos: "webpack",
        },
    },
    {
        name: ["vite"],
        label: "Vite",
        color: "#bd34fe",
        fontColor: "#ffffff",
        link: "https://vite.dev/",
        icon: {
            "simple-icons": "vite",
            devicon: "vitejs",
            logos: "vitejs",
        },
    },
    {
        name: ["bootstrap"],
        label: "Bootstrap",
        color: "#6f2df4",
        fontColor: "#ffffff",
        link: "https://getbootstrap.com/",
        icon: {
            "simple-icons": "bootstrap",
            devicon: "bootstrap",
            logos: "bootstrap",
        },
    },
    {
        name: ["node", "nodejs"],
        label: "NodeJS",
        color: "#417e38",
        fontColor: "#ffffff",
        link: "https://nodejs.org/",
        icon: {
            "simple-icons": "nodedotjs",
            devicon: "nodejs",
            logos: "nodejs-icon",
        },
    },
    {
        name: ["python"],
        label: "Python",
        color: "#ffda4e",
        fontColor: "#3776ab",
        link: "https://www.python.org/",
        icon: {
            "simple-icons": "python",
            devicon: "python",
            logos: "python",
        },
    },
    {
        name: ["git"],
        label: "Git",
        color: "#f05133",
        fontColor: "#ffffff",
        link: "https://git-scm.com/",
        icon: {
            "simple-icons": "git",
            devicon: "git",
            logos: "git-icon",
        },
    },
    {
        name: ["html", "html5"],
        label: "HTML",
        color: "#e14629",
        fontColor: "#ffffff",
        icon: {
            "simple-icons": "html5",
            devicon: "html5",
            logos: "html-5",
        },
    },
    {
        name: ["css", "css3"],
        label: "CSS",
        color: "#204bdc",
        fontColor: "#ffffff",
        icon: {
            "simple-icons": "css3",
            devicon: "css3",
            logos: "css-3",
        },
    },
    {
        name: ["sass", "scss"],
        label: "SASS",
        color: "#cf649a",
        fontColor: "#ffffff",
        link: "https://sass-lang.com/",
        icon: {
            "simple-icons": "sass",
            devicon: "sass",
            logos: "sass",
        },
    },
    {
        name: ["react", "reactjs"],
        label: "React",
        color: "#58c4dc",
        fontColor: "#ffffff",
        link: "https://react.dev/",
        icon: {
            "simple-icons": "react",
            devicon: "react",
            logos: "react",
        },
    },
    {
        name: ["eslint"],
        label: "ESLint",
        color: "#4b32c3",
        fontColor: "#ffffff",
        link: "https://eslint.org/",
        icon: {
            "simple-icons": "eslint",
            devicon: "eslint",
            logos: "eslint",
        },
    },
    {
        name: ["docker"],
        label: "Docker",
        color: "#1d63ed",
        fontColor: "#ffffff",
        link: "https://www.docker.com/",
        icon: {
            "simple-icons": "docker",
            devicon: "docker",
            logos: "docker-icon",
        },
    },
    {
        name: ["nginx"],
        label: "nginx",
        color: "#029648",
        fontColor: "#ffffff",
        link: "https://nginx.org/",
        icon: {
            "simple-icons": "nginx",
            devicon: "nginx",
            logos: "nginx",
        },
    },
    {
        name: ["go", "golang"],
        label: "Go",
        color: "#0ca6d0",
        fontColor: "#ffffff",
        link: "https://go.dev/",
        icon: {
            "simple-icons": "go",
            devicon: "go-wordmark",
            logos: "go",
        },
    },
    {
        name: ["mongo", "mongodb"],
        label: "MongoDB",
        color: "#045e43",
        fontColor: "#ffffff",
        link: "https://www.mongodb.com/",
        icon: {
            "simple-icons": "mongodb",
            devicon: "mongodb",
            logos: "mongodb",
        },
    },
    {
        name: ["ansible"],
        label: "Ansible",
        color: "#000000",
        fontColor: "#ffffff",
        icon: {
            "simple-icons": "ansible",
            devicon: "ansible",
        },
    },
    {
        name: ["astro", "astrojs"],
        label: "Astro",
        color: "#e63ba8",
        fontColor: "#ffffff",
        link: "https://astro.build/",
        icon: {
            "simple-icons": "astro",
            devicon: "astro",
            logos: "astro-icon",
        },
    },
    {
        name: ["caddy"],
        label: "Caddy",
        color: "#22b638",
        fontColor: "#ffffff",
        link: "https://caddyserver.com/",
        icon: {
            "simple-icons": "caddy",
        },
    },
    {
        name: ["java"],
        label: "Java",
        color: "red",
        fontColor: "#ffffff",
        link: "#5283a3",
        icon: {
            devicon: "java",
            logos: "java",
        },
    },
];

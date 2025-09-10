type Theme = "auto" | "dark" | "light";

const root = document.documentElement;
const preferDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

export function getCurrentTheme(): Theme {
    return (localStorage.getItem("theme") as Theme) ?? "auto";
}

function getPreferredColorScheme(): Theme {
    return preferDarkTheme.matches ? "dark" : "light";
}

export function setTheme(theme: Theme) {
    localStorage.setItem("theme", theme);
    root.setAttribute("data-theme", theme);
}

export function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const theme = currentTheme === "auto" ? getPreferredColorScheme() : currentTheme;
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
}

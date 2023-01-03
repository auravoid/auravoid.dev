export function changeTheme() {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
    setTheme();
}

export function setTheme() {
    const theme = localStorage.getItem("theme");

    if (typeof theme === "undefined" || theme === null) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        setParticles("dark");
        return;
    }

    document.documentElement.setAttribute("data-theme", theme);
}


export function setParticles() {
    particlesJS.load(
        "background__animation",
        `/particles.json`,
    );
}

function check_w_size() {
    const screen_w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (screen_w <= 900) {
        return false;
    }

    return true;
}

function init() {
    const warning = document.getElementById("warning");
    const content = document.getElementById("giga_wrapper");

    if (!check_w_size()) {
        content.style.display = "none";
        warning.style.display = "block";
    } else {
        warning.style.display = "none";
        content.style.display = "block";
    }
}

function route_up() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function scroll_to(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
    });
}

window.addEventListener("resize", init);

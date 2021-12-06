function check_w_size() {
    const screen_w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (screen_w <= 1368) {
        return false;
    }

    return true;
}

function init() {
    const warning = document.getElementById("warning");
    const content = document.getElementById("giga_wrapper");

    if (!check_w_size()) {
        content.style.opacity = 0;
        warning.style.display = "inline";
    } else {
        warning.style.display = "none";
        content.style.opacity = 1;
    }
}

window.addEventListener("resize", init);

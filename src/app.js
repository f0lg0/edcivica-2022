function check_w_size() {
    const screen_w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (screen_w <= 1368) {
        return false;
    }

    return true;
}

function init() {
    if (!check_w_size()) {
        document.body.style.opacity = 0;
    } else {
        document.body.style.opacity = 1;
    }
}

window.addEventListener("resize", init);

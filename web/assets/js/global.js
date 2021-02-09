import { swup } from "./_swup.js";

function init() {
    console.log("init()");
    // preload all pages to enable fast and smooth transitions
    swup.preloadPage("/");
    swup.preloadPage("/install/primary");
    swup.preloadPage("/install/primary/config");
    swup.preloadPage("/install/primary/config/install");

    switch (window.location.pathname) {
        case "/":
            import ("./pages/root.js?_no_cache=" + Date.now());
            break;
        case "/install/primary":
            import ("./pages/install.primary.js?_no_cache=" + Date.now());
            break;
        case "/install/primary/config":
            import ("./pages/install.primary.config.js?_no_cache=" + Date.now());
            break;
        case "/install/primary/config/install":
            import ("./pages/install.primary.config.install.js?_no_cache=" + Date.now());
            break;
        default:
            break;
    }

    document.querySelectorAll("i[data-visibilityfor]").forEach(el => {
        const VISIBLE_ON = el.dataset.on;
        const VISIBLE_OFF = el.dataset.off;
        const TARGET_ID = el.dataset.visibilityfor;
        const THIS = el;

        THIS.addEventListener("click", ev => {
            const TARGET = document.getElementById(TARGET_ID);
            if (TARGET.type == "password") { // make visible
                THIS.innerHTML = VISIBLE_OFF;
                TARGET.type = "text";
            } else {
                THIS.innerHTML = VISIBLE_ON;
                TARGET.type = "password";
            }
        });
    });

}

init();
swup.on('contentReplaced', init);
import {get } from "../http.js";
import { swup } from "../_swup.js";


let locations = {
    "install-primary": "/install/primary",
    "install-backup": "/install/backup",
    "install-assistant": "/install/assistant"
}

function registerCardClickHandlers() {
    try {
        Object.keys(locations).forEach(function(id) {
            const page = locations[id];
            document.getElementById(id).addEventListener("click", e => {
                swup.loadPage({
                    url: page,
                    method: "GET",
                    data: "",
                    customTransition: ""
                });
            })
        });
    } catch (e) {}
}
registerCardClickHandlers();

get("https://raw.githubusercontent.com/open-jarvis/jarvis/master/system/latest").then(d => {
    if (parseFloat(d) < parseFloat(`<?? open("/jarvis/.os-version", "r").read() ??>`)) {
        document.querySelector("#version-checker").innerHTML += `<br>A newer version is available: <a target="_blank" href="https://raw.githubusercontent.com/open-jarvis/jarvis/master/images/jarvis-v${d}.img">Official Image</a>`
        document.querySelector("#version-checker").classList.remove("red");
        document.querySelector("#version-checker").classList.remove("green");
        document.querySelector("#version-checker").classList.add("orange");
    }
});
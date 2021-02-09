import { SetupVar } from "../setupvar.js";
import { swup } from "../_swup.js";

let storeData = undefined;
let insertStoredData = undefined;

// add open tabs
["#do-system-upgrade", "#do-join-cluster", "#create-self-signed-certificate"].forEach(el => {
    document.querySelector(el).addEventListener("input", ev => {
        if (ev.target.checked) {
            document.querySelector(el + "-open").classList.add("visible");
        } else {
            document.querySelector(el + "-open").classList.remove("visible");
        }
    });
});

// add event handler to the continue button (save configuration, and preload and redirect to page)
document.querySelector("#continue").addEventListener("click", function() {
    if (document.querySelector("#create-self-signed-certificate").checked && document.querySelector("#set-cert-pass").value.trim() == "") {
        document.querySelector("#set-cert-pass").classList.add("red");
        document.querySelector("#set-cert-pass").classList.add("shaking");
    }
    storeData();
    swup.loadPage({
        url: "/install/primary/config/install",
        method: "GET",
        data: "",
        customTransition: ""
    });
});

// stored data functions
storeData = function() {
    SetupVar.set("server-config", {
        "system-upgrade": document.querySelector("#do-system-upgrade").checked,
        "join-cluster": document.querySelector("#do-join-cluster").checked,
        "database": {
            "admin-password": document.querySelector("#set-db-password").value,
            "create-self-signed-certificate": document.querySelector("#create-self-signed-certificate").checked,
            "self-signed-certificate-pass": document.querySelector("#set-cert-pass").value
        },
        "api": {
            "pre-shared-key": document.querySelector("#set-psk").value,
            "token-key": document.querySelector("#set-token-key").value
        },
        "install-applications": [...document.querySelectorAll("#default-apps input")].filter(el => el.checked).map(el => el.dataset.applicationName)
    });
}

insertStoredData = function() {
    const cnf = SetupVar.get("server-config");
    ["system-upgrade", "join-cluster"].forEach(el => {
        document.querySelector("#do-" + el).checked = cnf[el];
        document.querySelector("#do-" + el).dispatchEvent(new Event("input"));
    });
    document.querySelector("#set-db-password").value = cnf["database"]["admin-password"];
    document.querySelector("#create-self-signed-certificate").checked = cnf["database"]["create-self-signed-certificate"];
    if (cnf["database"]["create-self-signed-certificate"]) {
        document.querySelector("#set-cert-pass").value = cnf["database"]["self-signed-certificate-pass"];
    }
    document.querySelector("#set-psk").value = cnf["api"]["pre-shared-key"];
    document.querySelector("#set-token-key").value = cnf["api"]["token-key"];
    ["#set-db-password", "#create-self-signed-certificate", "#set-cert-pass", "#set-psk", "#set-token-key"].forEach(el => {
        document.querySelector(el).dispatchEvent(new Event("input"));
    });
    document.querySelectorAll("input[data-application-name]").forEach(el => {
        el.checked = cnf["install-applications"].includes(el.dataset.applicationName);
        el.dispatchEvent(new Event("input"));
    });
}
insertStoredData();

// automatically store data
document.querySelectorAll("input").forEach(el => {
    el.addEventListener("input", storeData);
});
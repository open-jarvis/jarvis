import { SetupVar } from "../setupvar.js";
import { swup } from "../_swup.js";

let storeData = undefined;
let insertStoredData = undefined;

// when we want to change some settings, open the according topics
["#new-ip", "#new-hostname"].forEach(el => {
    document.querySelector(el).addEventListener("input", ev => {
        if (ev.target.checked) {
            document.querySelector(el + "-open").classList.add("visible");
        } else {
            document.querySelector(el + "-open").classList.remove("visible");
        }
    });
});

// perform ip and hostname checks
document.querySelectorAll("#set-ip, #set-gateway, #set-dns, #set-mask").forEach(el => {
    el.addEventListener("input", ev => {
        ev.target.classList.remove("border-red");
        ev.target.classList.remove("border-green");
        if (ev.target.value.trim() == "") {
            return;
        }
        if (/(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))/.test(ev.target.value) &&
            ev.target.id == "set-mask") {
            ev.target.classList.add("border-green");
        } else if (/((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/.test(ev.target.value) && ["set-ip", "set-gateway", "set-dns"].includes(ev.target.id)) {
            ev.target.classList.add("border-green");
        } else {
            ev.target.classList.add("border-red");
        }
    });
});
document.querySelectorAll("#set-hostname").forEach(el => {
    el.addEventListener("input", ev => {
        ev.target.classList.remove("border-red");
        ev.target.classList.remove("border-green");
        if (/(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])/.test(ev.target.value)) {
            ev.target.classList.add("border-green");
        } else if (ev.target.value != "") {
            ev.target.classList.add("border-red");
        }
    });
});
document.querySelector("#set-interface").addEventListener("input", ev => {
    ev.target.classList.remove("border-red");
    ev.target.classList.remove("border-green");
    if (ev.target.value != "") {
        if (/^[a-zA-Z]+[0-9]+$/.test(ev.target.value)) {
            ev.target.classList.add("border-green");
        } else {
            ev.target.classList.add("border-red");
        }
    }
});

// do button check
document.querySelectorAll("input").forEach(el => {
    el.addEventListener("input", ev => {
        document.querySelector("#continue").classList.remove("blue");
        document.querySelector("#continue").classList.remove("green");
        document.querySelector("#continue").classList.remove("red");
        document.querySelector("#continue").disabled = false;

        let all_empty = true;
        let errors = false;
        document.querySelectorAll("input[type=text]").forEach(el => {
            if (!document.getElementById(el.dataset.for).checked) {
                return;
            }
            if (el.classList.contains("border-red")) {
                errors = true;
            }
            if (el.value.trim() != "") {
                all_empty = false;
            }
        });
        document.querySelector("#continue").classList.add(all_empty ? "blue" : (errors ? "red" : "green"));
        if (errors) {
            document.querySelector("#continue").disabled = true;
        }
    });
});

// continue button
document.querySelector("#continue").addEventListener("click", function() {
    storeData();
    swup.loadPage({
        url: "/install/primary/config",
        method: "GET",
        data: "",
        customTransition: ""
    });
});

// stored data functions
storeData = function() {
    SetupVar.set("ip-config", {
        "set-new-ip": document.querySelector("#new-ip").checked,
        "set-new-hostname": document.querySelector("#new-hostname").checked,
        "new-config": {
            "ip": document.querySelector("#set-ip").value || document.querySelector("#set-ip").dataset.default,
            "dns": document.querySelector("#set-dns").value || document.querySelector("#set-dns").dataset.default,
            "mask": document.querySelector("#set-mask").value || document.querySelector("#set-mask").dataset.default,
            "gateway": document.querySelector("#set-gateway").value || document.querySelector("#set-gateway").dataset.default,
            "hostname": document.querySelector("#set-hostname").value || document.querySelector("#set-hostname").dataset.default,
            "interface": document.querySelector("#set-interface").value || document.querySelector("#set-interface").dataset.default,
        }
    });
}

insertStoredData = function() {
    document.querySelector("#new-ip").checked = SetupVar.get("ip-config")["set-new-ip"];
    document.querySelector("#new-ip").dispatchEvent(new Event('input'));
    document.querySelector("#new-hostname").checked = SetupVar.get("ip-config")["set-new-hostname"];
    document.querySelector("#new-hostname").dispatchEvent(new Event('input'));
    ["ip", "dns", "mask", "gateway", "hostname", "interface"].forEach(el => {
        document.querySelector("#set-" + el).value = SetupVar.get("ip-config")["new-config"][el];
        document.querySelector("#set-" + el).dispatchEvent(new Event('input'));
    });

}
insertStoredData();

// automatically store data
document.querySelectorAll("input").forEach(el => {
    el.addEventListener("input", storeData);
});
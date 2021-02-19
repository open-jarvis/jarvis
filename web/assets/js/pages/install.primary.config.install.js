import { SetupVar } from "../setupvar.js";
import { endpoint } from "../install.js";
import { swup } from "../_swup.js";

let sectionError = false;
let overAllError = false;
let waitingFor = [];
let errors = {};

// installer
// ip configuration first
async function startInstallation() {
    document.querySelector("#progress").innerHTML = `<li id="starting-installation" class="progress"> Installing Features </li>`;

    let cnf = SetupVar.get("ip-config");

    // set ip address and hostname (configuration step 1)
    if (cnf["set-new-ip"] || cnf["set-new-hostname"]) {
        document.querySelector("#progress").innerHTML += `<li id="set-network" class="ins-1 progress">Configuring your network connection</li>`;
    }

    if (cnf["set-new-ip"]) {
        document.querySelector("#progress").innerHTML += `<li id="set-ip"      class="ins-2 progress">Configuring IP ${cnf["new-config"]["ip"]}</li>`;
        document.querySelector("#progress").innerHTML += `<li id="set-mask"    class="ins-2 progress">Configuring Subnetmask ${cnf["new-config"]["mask"]}</li>`;
        document.querySelector("#progress").innerHTML += `<li id="set-gateway" class="ins-2 progress">Configuring Gateway ${cnf["new-config"]["gateway"]}</li>`;
        document.querySelector("#progress").innerHTML += `<li id="set-dns"     class="ins-2 progress">Configuring DNS ${cnf["new-config"]["dns"]}</li>`;

        waitingFor.push(endpoint("ip config", {
            "ip-config": cnf["new-config"]
        }, "#set-up, #set-mask, #set-gateway, #set-dns"));
    }

    if (cnf["set-new-hostname"]) {
        document.querySelector("#progress").innerHTML += `<li id="set-hostname" class="ins-2 progress">Configuring Hostname "${cnf["new-config"]["hostname"]}"</li>`;

        waitingFor.push(endpoint("hostname", {
            "hostname": cnf["new-config"]["hostname"]
        }, "#set-hostname"));
    }

    if (cnf["set-new-ip"] || cnf["set-new-hostname"]) {
        await Promise.all(waitingFor);
        document.querySelector("#set-network").classList.remove("progress");
        document.querySelector("#set-network").classList.add(sectionError ? "no" : "yes");
        if (!overAllError && sectionError) { overAllError = true; }
        sectionError = false;
    }

    // do system upgrade and install database, etc...
    waitingFor = [];
    cnf = SetupVar.get("server-config");
    if (cnf["system-upgrade"]) {
        document.querySelector("#progress").innerHTML += `<li id="upgrade-system" class="ins-1 progress">Upgrading your system</li>`;
        document.querySelector("#progress").innerHTML += `<li id="do-system-update" class="ins-2 progress">Updating package sources</li>`;
        document.querySelector("#progress").innerHTML += `<li id="do-system-upgrade" class="ins-2 progress">Upgrading packages</li>`;
        waitingFor.push(endpoint("system update", {
            "system-update": true
        }, "#do-system-update"));

        await Promise.all(waitingFor);
        waitingFor.push(endpoint("system-upgrade", {
            "system-upgrade": true
        }, "#do-system-upgrade"));

        await Promise.all(waitingFor);
        document.querySelector("#upgrade-system").classList.remove("progress");
        document.querySelector("#upgrade-system").classList.add(sectionError ? "no" : "yes");

        waitingFor = [];
        if (!overAllError && sectionError) { overAllError = true; }
        sectionError = false;
    }

    // database setup
    document.querySelector("#progress").innerHTML += `<li id="setup-database" class="ins-1 progress">Setting up Database</li>`;
    document.querySelector("#progress").innerHTML += `<li id="install-database" class="ins-2 progress">Installing CouchDB</li>`;
    document.querySelector("#progress").innerHTML += `<li id="create-database-service-file" class="ins-2 progress">Creating service file</li>`;
    document.querySelector("#progress").innerHTML += `<li id="create-self-signed-certificate" class="ins-2 progress">Creating self-signed certificate and key</li>`;
    document.querySelector("#progress").innerHTML += `<li id="configure-database" class="ins-2 progress">Modifying config files</li>`;
    document.querySelector("#progress").innerHTML += `<li id="start-database" class="ins-2 progress">Starting Database</li>`;
    document.querySelector("#progress").innerHTML += `<li id="create-schema" class="ins-2 progress">Creating Schema</li>`;
    await endpoint("install database", {
        "install-database": true
    }, "#install-database, #create-database-service-file");

    await endpoint("configure database", {
        "configure-database": cnf["database"]
    }, "#configure-database, #create-self-signed-certificate");

    await endpoint("start database", {
        "start-database": true
    }, "#start-database");

    await endpoint("create schema", {
        "create-schema": cnf["database"]
    }, "#create-schema");

    document.querySelector("#setup-database").classList.remove("progress");
    document.querySelector("#setup-database").classList.add(sectionError ? "no" : "yes");
    if (!overAllError && sectionError) { overAllError = true; }
    sectionError = false;

    document.querySelector("#progress").innerHTML += `<li id="setup-backend" class="ins-1 progress">Setting up Jarvis Backend Server</li>`;
    document.querySelector("#progress").innerHTML += `<li id="download-backend" class="ins-2 progress">Downloading Jarvis Backend</li>`;
    document.querySelector("#progress").innerHTML += `<li id="configure-api-credentials" class="ins-2 progress">Configuring API credentials</li>`;
    document.querySelector("#progress").innerHTML += `<li id="run-setup-script" class="ins-2 progress">Running install script</li>`;

    await endpoint("download jarvis backend", {
        "download-jarvis-backend": true
    }, "#download-backend");

    await endpoint("configure api credentials", {
        "configure-api-credentials": cnf["api"]
    }, "#configure-api-credentials");

    await endpoint("run setup script", {
        "run-backend-setup": true
    }, "#run-setup-script");

    document.querySelector("#setup-backend").classList.remove("progress");
    document.querySelector("#setup-backend").classList.add(sectionError ? "no" : "yes");
    if (!overAllError && sectionError) { overAllError = true; }
    sectionError = false;

    document.querySelector("#starting-installation").classList.remove("progress");
    document.querySelector("#starting-installation").classList.add(overAllError ? "no" : "yes");

    if (overAllError) {
        for (const [key, value] of Object.entries(errors)) {
            document.querySelector("#errors").innerHTML += `<hr class="row" style="margin: 20px 0;"><div class="row"><p class="row">${key}</p><pre class="row"><code>${value}</code></pre></div>`;
        }
        document.querySelector("#errors").classList.remove("hidden");
    }
}

startInstallation();
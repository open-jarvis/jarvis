import { post } from "./http.js";

export function registerError(key, err) {
    errors[key] = err;
}

export function endpoint(name, postData, querySelectorString) {
    return post("/r/setup", postData).then(d => {
        console.log(`${name}:`, d.trim());
        if (d.trim() != "ok") {
            registerError(name, d.trim());
            throw new Error(`exception in setup script - ${name}`);
        }
        document.querySelectorAll(querySelectorString).forEach(el => {
            el.classList.remove("progress");
            el.classList.remove("loading-dots");
            el.classList.add("yes");
        });
    }).catch(_ => {
        console.log(`error - ${name}`, _);
        sectionError = true;
        document.querySelectorAll(querySelectorString).forEach(el => {
            el.classList.remove("progress");
            el.classList.remove("loading-dots");
            el.classList.add("no");
        });
    });
}
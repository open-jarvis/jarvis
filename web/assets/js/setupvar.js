export class SetupVar {
    static KEY = "jarvis-setup-storage";

    static get(key) {
        SetupVar._checkIfExists();
        try {
            return JSON.parse(localStorage[SetupVar.KEY])[key];
        } catch (e) {
            return undefined;
        }
    }

    static set(key, value) {
        SetupVar._checkIfExists();
        let storage = JSON.parse(localStorage[SetupVar.KEY]);
        storage[key] = value;
        localStorage[SetupVar.KEY] = JSON.stringify(storage);
    }

    static _checkIfExists() {
        if (typeof localStorage[SetupVar.KEY] == "undefined") {
            localStorage[SetupVar.KEY] = JSON.stringify({});
        }
    }
}
(function e(t, n) {
    if (typeof exports === "object" && typeof module === "object") module.exports = n();
    else if (typeof define === "function" && define.amd) define([], n);
    else if (typeof exports === "object") exports["Swup"] = n();
    else t["Swup"] = n()
})(window, function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) { return t[r].exports }
            var i = t[r] = { i: r, l: false, exports: {} };
            e[r].call(i.exports, i, i.exports, n);
            i.l = true;
            return i.exports
        }
        n.m = e;
        n.c = t;
        n.d = function(e, t, r) { if (!n.o(e, t)) { Object.defineProperty(e, t, { enumerable: true, get: r }) } };
        n.r = function(e) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) { Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }) }
            Object.defineProperty(e, "__esModule", { value: true })
        };
        n.t = function(e, t) {
            if (t & 1) e = n(e);
            if (t & 8) return e;
            if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
            var r = Object.create(null);
            n.r(r);
            Object.defineProperty(r, "default", { enumerable: true, value: e });
            if (t & 2 && typeof e != "string")
                for (var i in e) n.d(r, i, function(t) { return e[t] }.bind(null, i));
            return r
        };
        n.n = function(e) {
            var t = e && e.__esModule ? function t() { return e["default"] } : function t() { return e };
            n.d(t, "a", t);
            return t
        };
        n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) };
        n.p = "";
        return n(n.s = 2)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        t.Link = t.markSwupElements = t.getCurrentUrl = t.transitionEnd = t.fetch = t.getDataFromHtml = t.createHistoryRecord = t.classify = undefined;
        var r = n(8);
        var i = w(r);
        var a = n(9);
        var o = w(a);
        var s = n(10);
        var u = w(s);
        var l = n(11);
        var c = w(l);
        var f = n(12);
        var d = w(f);
        var h = n(13);
        var p = w(h);
        var v = n(14);
        var g = w(v);
        var m = n(15);
        var y = w(m);

        function w(e) { return e && e.__esModule ? e : { default: e } }
        var b = t.classify = i.default;
        var E = t.createHistoryRecord = o.default;
        var P = t.getDataFromHtml = u.default;
        var _ = t.fetch = c.default;
        var k = t.transitionEnd = d.default;
        var S = t.getCurrentUrl = p.default;
        var O = t.markSwupElements = g.default;
        var j = t.Link = y.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = t.query = function e(t) { var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document; if (typeof t !== "string") { return t } return n.querySelector(t) };
        var i = t.queryAll = function e(t) { var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document; if (typeof t !== "string") { return t } return Array.prototype.slice.call(n.querySelectorAll(t)) }
    }, function(e, t, n) {
        "use strict";
        var r = n(3);
        var i = a(r);

        function a(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = i.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) { if (Object.prototype.hasOwnProperty.call(n, r)) { e[r] = n[r] } } } return e };
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) r.writable = true;
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) { if (n) e(t.prototype, n); if (r) e(t, r); return t }
        }();
        var a = n(4);
        var o = M(a);
        var s = n(6);
        var u = M(s);
        var l = n(7);
        var c = M(l);
        var f = n(16);
        var d = M(f);
        var h = n(17);
        var p = M(h);
        var v = n(18);
        var g = M(v);
        var m = n(19);
        var y = M(m);
        var w = n(20);
        var b = M(w);
        var E = n(21);
        var P = M(E);
        var _ = n(22);
        var k = M(_);
        var S = n(23);
        var O = n(1);
        var j = n(0);

        function M(e) { return e && e.__esModule ? e : { default: e } }

        function H(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }
        var L = function() {
            function e(t) {
                H(this, e);
                var n = { animateHistoryBrowsing: false, animationSelector: '[class*="transition-"]', linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])', cache: true, containers: ["#swup"], requestHeaders: { "X-Requested-With": "swup", Accept: "text/html, application/xhtml+xml" }, plugins: [], skipPopStateHandling: function e(t) { return !(t.state && t.state.source === "swup") } };
                var i = r({}, n, t);
                this._handlers = { animationInDone: [], animationInStart: [], animationOutDone: [], animationOutStart: [], animationSkipped: [], clickLink: [], contentReplaced: [], disabled: [], enabled: [], openPageInNewTab: [], pageLoaded: [], pageRetrievedFromCache: [], pageView: [], popState: [], samePage: [], samePageWithHash: [], serverError: [], transitionStart: [], transitionEnd: [], willReplaceContent: [] };
                this.scrollToElement = null;
                this.preloadPromise = null;
                this.options = i;
                this.plugins = [];
                this.transition = {};
                this.delegatedListeners = {};
                this.boundPopStateHandler = this.popStateHandler.bind(this);
                this.cache = new u.default;
                this.cache.swup = this;
                this.loadPage = c.default;
                this.renderPage = d.default;
                this.triggerEvent = p.default;
                this.on = g.default;
                this.off = y.default;
                this.updateTransition = b.default;
                this.getAnimationPromises = P.default;
                this.getPageData = k.default;
                this.log = function() {};
                this.use = S.use;
                this.unuse = S.unuse;
                this.findPlugin = S.findPlugin;
                this.enable()
            }
            i(e, [{
                key: "enable",
                value: function e() {
                    var t = this;
                    if (typeof Promise === "undefined") { console.warn("Promise is not supported"); return }
                    this.delegatedListeners.click = (0, o.default)(document, this.options.linkSelector, "click", this.linkClickHandler.bind(this));
                    window.addEventListener("popstate", this.boundPopStateHandler);
                    var n = (0, j.getDataFromHtml)(document.documentElement.outerHTML, this.options.containers);
                    n.url = n.responseURL = (0, j.getCurrentUrl)();
                    if (this.options.cache) { this.cache.cacheUrl(n) }(0, j.markSwupElements)(document.documentElement, this.options.containers);
                    this.options.plugins.forEach(function(e) { t.use(e) });
                    window.history.replaceState(Object.assign({}, window.history.state, { url: window.location.href, random: Math.random(), source: "swup" }), document.title, window.location.href);
                    this.triggerEvent("enabled");
                    document.documentElement.classList.add("swup-enabled");
                    this.triggerEvent("pageView")
                }
            }, {
                key: "destroy",
                value: function e() {
                    var t = this;
                    this.delegatedListeners.click.destroy();
                    window.removeEventListener("popstate", this.boundPopStateHandler);
                    this.cache.empty();
                    this.options.plugins.forEach(function(e) { t.unuse(e) });
                    (0, O.queryAll)("[data-swup]").forEach(function(e) { e.removeAttribute("data-swup") });
                    this.off();
                    this.triggerEvent("disabled");
                    document.documentElement.classList.remove("swup-enabled")
                }
            }, {
                key: "linkClickHandler",
                value: function e(t) {
                    if (!t.metaKey && !t.ctrlKey && !t.shiftKey && !t.altKey) {
                        if (t.button === 0) {
                            this.triggerEvent("clickLink", t);
                            t.preventDefault();
                            var n = new j.Link(t.delegateTarget);
                            if (n.getAddress() == (0, j.getCurrentUrl)() || n.getAddress() == "") { if (n.getHash() != "") { this.triggerEvent("samePageWithHash", t); var r = document.querySelector(n.getHash()); if (r != null) { history.replaceState({ url: n.getAddress() + n.getHash(), random: Math.random(), source: "swup" }, document.title, n.getAddress() + n.getHash()) } else { console.warn("Element for offset not found (" + n.getHash() + ")") } } else { this.triggerEvent("samePage", t) } } else {
                                if (n.getHash() != "") { this.scrollToElement = n.getHash() }
                                var i = t.delegateTarget.getAttribute("data-swup-transition");
                                this.loadPage({ url: n.getAddress(), customTransition: i }, false)
                            }
                        }
                    } else { this.triggerEvent("openPageInNewTab", t) }
                }
            }, {
                key: "popStateHandler",
                value: function e(t) {
                    if (this.options.skipPopStateHandling(t)) return;
                    var n = new j.Link(t.state ? t.state.url : window.location.pathname);
                    if (n.getHash() !== "") { this.scrollToElement = n.getHash() } else { t.preventDefault() }
                    this.triggerEvent("popState", t);
                    this.loadPage({ url: n.getAddress() }, t)
                }
            }]);
            return e
        }();
        t.default = L
    }, function(e, t, n) {
        var r = n(5);

        function i(e, t, n, r, i) {
            var o = a.apply(this, arguments);
            e.addEventListener(n, o, i);
            return { destroy: function() { e.removeEventListener(n, o, i) } }
        }

        function a(e, t, n, i) { return function(n) { n.delegateTarget = r(n.target, t); if (n.delegateTarget) { i.call(e, n) } } }
        e.exports = i
    }, function(e, t) {
        var n = 9;
        if (typeof Element !== "undefined" && !Element.prototype.matches) {
            var r = Element.prototype;
            r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
        }

        function i(e, t) {
            while (e && e.nodeType !== n) {
                if (typeof e.matches === "function" && e.matches(t)) { return e }
                e = e.parentNode
            }
        }
        e.exports = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) r.writable = true;
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) { if (n) e(t.prototype, n); if (r) e(t, r); return t }
        }();

        function i(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }
        var a = t.Cache = function() {
            function e() {
                i(this, e);
                this.pages = {};
                this.last = null
            }
            r(e, [{
                key: "cacheUrl",
                value: function e(t) {
                    if (t.url in this.pages === false) { this.pages[t.url] = t }
                    this.last = this.pages[t.url];
                    this.swup.log("Cache (" + Object.keys(this.pages).length + ")", this.pages)
                }
            }, { key: "getPage", value: function e(t) { return this.pages[t] } }, { key: "getCurrentPage", value: function e() { return this.getPage(window.location.pathname + window.location.search) } }, { key: "exists", value: function e(t) { return t in this.pages } }, {
                key: "empty",
                value: function e() {
                    this.pages = {};
                    this.last = null;
                    this.swup.log("Cache cleared")
                }
            }, { key: "remove", value: function e(t) { delete this.pages[t] } }]);
            return e
        }();
        t.default = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) { if (Object.prototype.hasOwnProperty.call(n, r)) { e[r] = n[r] } } } return e };
        var i = n(0);
        var a = function e(t, n) {
            var a = this;
            var o = [],
                s = void 0;
            var u = function e() {
                a.triggerEvent("animationOutStart");
                document.documentElement.classList.add("is-changing");
                document.documentElement.classList.add("is-leaving");
                document.documentElement.classList.add("is-animating");
                if (n) { document.documentElement.classList.add("is-popstate") }
                document.documentElement.classList.add("to-" + (0, i.classify)(t.url));
                o = a.getAnimationPromises("out");
                Promise.all(o).then(function() { a.triggerEvent("animationOutDone") });
                if (!n) { var r = void 0; if (a.scrollToElement != null) { r = t.url + a.scrollToElement } else { r = t.url }(0, i.createHistoryRecord)(r) }
            };
            this.triggerEvent("transitionStart", n);
            if (t.customTransition != null) {
                this.updateTransition(window.location.pathname, t.url, t.customTransition);
                document.documentElement.classList.add("to-" + (0, i.classify)(t.customTransition))
            } else { this.updateTransition(window.location.pathname, t.url) }
            if (!n || this.options.animateHistoryBrowsing) { u() } else { this.triggerEvent("animationSkipped") }
            if (this.cache.exists(t.url)) {
                s = new Promise(function(e) { e() });
                this.triggerEvent("pageRetrievedFromCache")
            } else {
                if (!this.preloadPromise || this.preloadPromise.route != t.url) {
                    s = new Promise(function(e, n) {
                        (0, i.fetch)(r({}, t, { headers: a.options.requestHeaders }), function(r) {
                            if (r.status === 500) {
                                a.triggerEvent("serverError");
                                n(t.url);
                                return
                            } else {
                                var i = a.getPageData(r);
                                if (i != null) { i.url = t.url } else { n(t.url); return }
                                a.cache.cacheUrl(i);
                                a.triggerEvent("pageLoaded")
                            }
                            e()
                        })
                    })
                } else { s = this.preloadPromise }
            }
            Promise.all(o.concat([s])).then(function() {
                a.renderPage(a.cache.getPage(t.url), n);
                a.preloadPromise = null
            }).catch(function(e) {
                a.options.skipPopStateHandling = function() { window.location = e; return true };
                window.history.go(-1)
            })
        };
        t.default = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function e(t) { var n = t.toString().toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, ""); if (n[0] === "/") n = n.splice(1); if (n === "") n = "homepage"; return n };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function e(t) { window.history.pushState({ url: t || window.location.href.split(window.location.hostname)[1], random: Math.random(), source: "swup" }, document.getElementsByTagName("title")[0].innerText, t || window.location.href.split(window.location.hostname)[1]) };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) { return typeof e } : function(e) { return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
        var i = n(1);
        var a = function e(t, n) {
            var a = document.createElement("html");
            a.innerHTML = t;
            var o = [];
            var s = function e(t) {
                if (a.querySelector(n[t]) == null) { return { v: null } } else {
                    (0, i.queryAll)(n[t]).forEach(function(e, r) {
                        (0, i.queryAll)(n[t], a)[r].setAttribute("data-swup", o.length);
                        o.push((0, i.queryAll)(n[t], a)[r].outerHTML)
                    })
                }
            };
            for (var u = 0; u < n.length; u++) { var l = s(u); if ((typeof l === "undefined" ? "undefined" : r(l)) === "object") return l.v }
            var c = { title: a.querySelector("title").innerText, pageClass: a.querySelector("body").className, originalContent: t, blocks: o };
            a.innerHTML = "";
            a = null;
            return c
        };
        t.default = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) { if (Object.prototype.hasOwnProperty.call(n, r)) { e[r] = n[r] } } } return e };
        var i = function e(t) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var i = { url: window.location.pathname + window.location.search, method: "GET", data: null, headers: {} };
            var a = r({}, i, t);
            var o = new XMLHttpRequest;
            o.onreadystatechange = function() { if (o.readyState === 4) { if (o.status !== 500) { n(o) } else { n(o) } } };
            o.open(a.method, a.url, true);
            Object.keys(a.headers).forEach(function(e) { o.setRequestHeader(e, a.headers[e]) });
            o.send(a.data);
            return o
        };
        t.default = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function e() { var t = document.createElement("div"); var n = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var r in n) { if (t.style[r] !== undefined) { return n[r] } } return false };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function e() { return window.location.pathname + window.location.search };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = n(1);
        var i = function e(t, n) {
            var i = 0;
            var a = function e(a) {
                if (t.querySelector(n[a]) == null) { console.warn("Element " + n[a] + " is not in current page.") } else {
                    (0, r.queryAll)(n[a]).forEach(function(e, o) {
                        (0, r.queryAll)(n[a], t)[o].setAttribute("data-swup", i);
                        i++
                    })
                }
            };
            for (var o = 0; o < n.length; o++) { a(o) }
        };
        t.default = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) r.writable = true;
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) { if (n) e(t.prototype, n); if (r) e(t, r); return t }
        }();

        function i(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }
        var a = function() {
            function e(t) {
                i(this, e);
                if (t instanceof Element || t instanceof SVGElement) { this.link = t } else {
                    this.link = document.createElement("a");
                    this.link.href = t
                }
            }
            r(e, [{ key: "getPath", value: function e() { var t = this.link.pathname; if (t[0] !== "/") { t = "/" + t } return t } }, { key: "getAddress", value: function e() { var t = this.link.pathname + this.link.search; if (this.link.getAttribute("xlink:href")) { t = this.link.getAttribute("xlink:href") } if (t[0] !== "/") { t = "/" + t } return t } }, { key: "getHash", value: function e() { return this.link.hash } }]);
            return e
        }();
        t.default = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) { if (Object.prototype.hasOwnProperty.call(n, r)) { e[r] = n[r] } } } return e };
        var i = n(1);
        var a = n(0);
        var o = function e(t, n) {
            var i = this;
            document.documentElement.classList.remove("is-leaving");
            var o = new a.Link(t.responseURL);
            if (window.location.pathname !== o.getPath()) {
                window.history.replaceState({ url: o.getPath(), random: Math.random(), source: "swup" }, document.title, o.getPath());
                this.cache.cacheUrl(r({}, t, { url: o.getPath() }))
            }
            if (!n || this.options.animateHistoryBrowsing) { document.documentElement.classList.add("is-rendering") }
            this.triggerEvent("willReplaceContent", n);
            for (var s = 0; s < t.blocks.length; s++) { document.body.querySelector('[data-swup="' + s + '"]').outerHTML = t.blocks[s] }
            document.title = t.title;
            this.triggerEvent("contentReplaced", n);
            this.triggerEvent("pageView", n);
            if (!this.options.cache) { this.cache.empty() }
            setTimeout(function() {
                if (!n || i.options.animateHistoryBrowsing) {
                    i.triggerEvent("animationInStart");
                    document.documentElement.classList.remove("is-animating")
                }
            }, 10);
            if (!n || this.options.animateHistoryBrowsing) {
                var u = this.getAnimationPromises("in");
                Promise.all(u).then(function() {
                    i.triggerEvent("animationInDone");
                    i.triggerEvent("transitionEnd", n);
                    document.documentElement.className.split(" ").forEach(function(e) { if (new RegExp("^to-").test(e) || e === "is-changing" || e === "is-rendering" || e === "is-popstate") { document.documentElement.classList.remove(e) } })
                })
            } else { this.triggerEvent("transitionEnd", n) }
            this.scrollToElement = null
        };
        t.default = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function e(t, n) {
            this._handlers[t].forEach(function(e) { try { e(n) } catch (e) { console.error(e) } });
            var r = new CustomEvent("swup:" + t, { detail: t });
            document.dispatchEvent(r)
        };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function e(t, n) { if (this._handlers[t]) { this._handlers[t].push(n) } else { console.warn("Unsupported event " + t + ".") } };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function e(t, n) { var r = this; if (t != null) { if (n != null) { if (this._handlers[t] && this._handlers[t].filter(function(e) { return e === n }).length) { var i = this._handlers[t].filter(function(e) { return e === n })[0]; var a = this._handlers[t].indexOf(i); if (a > -1) { this._handlers[t].splice(a, 1) } } else { console.warn("Handler for event '" + t + "' no found.") } } else { this._handlers[t] = [] } } else { Object.keys(this._handlers).forEach(function(e) { r._handlers[e] = [] }) } };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function e(t, n, r) { this.transition = { from: t, to: n, custom: r } };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = n(1);
        var i = n(0);
        var a = function e() {
            var t = [];
            var n = (0, r.queryAll)(this.options.animationSelector);
            n.forEach(function(e) {
                var n = new Promise(function(t) { e.addEventListener((0, i.transitionEnd)(), function(n) { if (e == n.target) { t() } }) });
                t.push(n)
            });
            return t
        };
        t.default = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = n(0);
        var i = function e(t) { var n = t.responseText; var i = (0, r.getDataFromHtml)(n, this.options.containers); if (i) { i.responseURL = t.responseURL ? t.responseURL : window.location.href } else { console.warn("Received page is invalid."); return null } return i };
        t.default = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = t.use = function e(t) {
            if (!t.isSwupPlugin) { console.warn("Not swup plugin instance " + t + "."); return }
            this.plugins.push(t);
            t.swup = this;
            if (typeof t._beforeMount === "function") { t._beforeMount() }
            t.mount();
            return this.plugins
        };
        var i = t.unuse = function e(t) {
            var n = void 0;
            if (typeof t === "string") { n = this.plugins.find(function(e) { return t === e.name }) } else { n = t }
            if (!n) { console.warn("No such plugin."); return }
            n.unmount();
            if (typeof n._afterUnmount === "function") { n._afterUnmount() }
            var r = this.plugins.indexOf(n);
            this.plugins.splice(r, 1);
            return this.plugins
        };
        var a = t.findPlugin = function e(t) { return this.plugins.find(function(e) { return t === e.name }) }
    }])
});



/* SWUP SCROLL */
(function t(e, n) {
    if (typeof exports === "object" && typeof module === "object") module.exports = n();
    else if (typeof define === "function" && define.amd) define([], n);
    else if (typeof exports === "object") exports["SwupScrollPlugin"] = n();
    else e["SwupScrollPlugin"] = n()
})(window, function() {
    return function(t) {
        var e = {};

        function n(o) {
            if (e[o]) { return e[o].exports }
            var i = e[o] = { i: o, l: false, exports: {} };
            t[o].call(i.exports, i, i.exports, n);
            i.l = true;
            return i.exports
        }
        n.m = t;
        n.c = e;
        n.d = function(t, e, o) { if (!n.o(t, e)) { Object.defineProperty(t, e, { enumerable: true, get: o }) } };
        n.r = function(t) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) { Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }) }
            Object.defineProperty(t, "__esModule", { value: true })
        };
        n.t = function(t, e) {
            if (e & 1) t = n(t);
            if (e & 8) return t;
            if (e & 4 && typeof t === "object" && t && t.__esModule) return t;
            var o = Object.create(null);
            n.r(o);
            Object.defineProperty(o, "default", { enumerable: true, value: t });
            if (e & 2 && typeof t != "string")
                for (var i in t) n.d(o, i, function(e) { return t[e] }.bind(null, i));
            return o
        };
        n.n = function(t) {
            var e = t && t.__esModule ? function e() { return t["default"] } : function e() { return t };
            n.d(e, "a", e);
            return e
        };
        n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) };
        n.p = "";
        return n(n.s = 0)
    }([function(t, e, n) {
        "use strict";
        var o = n(1);
        var i = r(o);

        function r(t) { return t && t.__esModule ? t : { default: t } }
        t.exports = i.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var o in n) { if (Object.prototype.hasOwnProperty.call(n, o)) { t[o] = n[o] } } } return t };
        var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(t, o.key, o)
                }
            }
            return function(e, n, o) { if (n) t(e.prototype, n); if (o) t(e, o); return e }
        }();
        var r = n(2);
        var l = u(r);
        var a = n(3);
        var s = u(a);

        function u(t) { return t && t.__esModule ? t : { default: t } }

        function c(t, e) { if (!(t instanceof e)) { throw new TypeError("Cannot call a class as a function") } }

        function f(t, e) { if (!t) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return e && (typeof e === "object" || typeof e === "function") ? e : t }

        function p(t, e) {
            if (typeof e !== "function" && e !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof e) }
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } });
            if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e
        }
        var d = function(t) {
            p(e, t);

            function e(t) {
                c(this, e);
                var n = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                n.name = "ScrollPlugin";
                n.onSamePage = function() { n.swup.scrollTo(0) };
                n.onSamePageWithHash = function(t) {
                    var e = t.delegateTarget;
                    var o = document.querySelector(e.hash);
                    var i = o.getBoundingClientRect().top + window.pageYOffset;
                    n.swup.scrollTo(i)
                };
                n.onTransitionStart = function(t) { if (n.options.doScrollingRightAway && !n.swup.scrollToElement) { n.doScrolling(t) } };
                n.onContentReplaced = function(t) { if (!n.options.doScrollingRightAway || n.swup.scrollToElement) { n.doScrolling(t) } };
                n.doScrolling = function(t) {
                    var e = n.swup;
                    if (!t || e.options.animateHistoryBrowsing) {
                        if (e.scrollToElement != null) {
                            var o = document.querySelector(e.scrollToElement);
                            if (o != null) {
                                var i = o.getBoundingClientRect().top + window.pageYOffset;
                                e.scrollTo(i)
                            } else { console.warn("Element " + e.scrollToElement + " not found") }
                            e.scrollToElement = null
                        } else { e.scrollTo(0) }
                    }
                };
                var i = { doScrollingRightAway: false, animateScroll: true, scrollFriction: .3, scrollAcceleration: .04 };
                n.options = o({}, i, t);
                return n
            }
            i(e, [{
                key: "mount",
                value: function t() {
                    var e = this;
                    var n = this.swup;
                    n._handlers.scrollDone = [];
                    n._handlers.scrollStart = [];
                    this.scrl = new s.default({ onStart: function t() { return n.triggerEvent("scrollStart") }, onEnd: function t() { return n.triggerEvent("scrollDone") }, onCancel: function t() { return n.triggerEvent("scrollDone") }, friction: this.options.scrollFriction, acceleration: this.options.scrollAcceleration });
                    n.scrollTo = function(t) {
                        if (e.options.animateScroll) { e.scrl.scrollTo(t) } else {
                            n.triggerEvent("scrollStart");
                            window.scrollTo(0, t);
                            n.triggerEvent("scrollDone")
                        }
                    };
                    if (n.options.animateHistoryBrowsing) { window.history.scrollRestoration = "manual" }
                    n.on("samePage", this.onSamePage);
                    n.on("samePageWithHash", this.onSamePageWithHash);
                    n.on("transitionStart", this.onTransitionStart);
                    n.on("contentReplaced", this.onContentReplaced)
                }
            }, {
                key: "unmount",
                value: function t() {
                    this.swup.scrollTo = null;
                    delete this.scrl;
                    this.scrl = null;
                    this.swup.off("samePage", this.onSamePage);
                    this.swup.off("samePageWithHash", this.onSamePageWithHash);
                    this.swup.off("transitionStart", this.onTransitionStart);
                    this.swup.off("contentReplaced", this.onContentReplaced);
                    this.swup._handlers.scrollDone = null;
                    this.swup._handlers.scrollStart = null;
                    window.history.scrollRestoration = "auto"
                }
            }]);
            return e
        }(l.default);
        e.default = d
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(t, o.key, o)
                }
            }
            return function(e, n, o) { if (n) t(e.prototype, n); if (o) t(e, o); return e }
        }();

        function i(t, e) { if (!(t instanceof e)) { throw new TypeError("Cannot call a class as a function") } }
        var r = function() {
            function t() {
                i(this, t);
                this.isSwupPlugin = true
            }
            o(t, [{ key: "mount", value: function t() {} }, { key: "unmount", value: function t() {} }]);
            return t
        }();
        e.default = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var o = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var o in n) { if (Object.prototype.hasOwnProperty.call(n, o)) { t[o] = n[o] } } } return t };

        function i(t, e) { if (!(t instanceof e)) { throw new TypeError("Cannot call a class as a function") } }
        var r = function t(e) {
            var n = this;
            i(this, t);
            this._raf = null;
            this._positionY = 0;
            this._velocityY = 0;
            this._targetPositionY = 0;
            this._targetPositionYWithOffset = 0;
            this._direction = 0;
            this.scrollTo = function(t) {
                if (t && t.nodeType) { n._targetPositionY = Math.round(t.getBoundingClientRect().top + window.pageYOffset) } else if (parseInt(n._targetPositionY) === n._targetPositionY) { n._targetPositionY = Math.round(t) } else { console.error("Argument must be a number or an element."); return }
                if (n._targetPositionY > document.documentElement.scrollHeight - window.innerHeight) { n._targetPositionY = document.documentElement.scrollHeight - window.innerHeight }
                n._positionY = document.body.scrollTop || document.documentElement.scrollTop;
                n._direction = n._positionY > n._targetPositionY ? -1 : 1;
                n._targetPositionYWithOffset = n._targetPositionY + n._direction;
                n._velocityY = 0;
                if (n._positionY !== n._targetPositionY) {
                    n.options.onStart();
                    n._animate()
                } else { n.options.onAlreadyAtPositions() }
            };
            this._animate = function() {
                var t = n._update();
                n._render();
                if (n._direction === 1 && n._targetPositionY > n._positionY || n._direction === -1 && n._targetPositionY < n._positionY) {
                    n._raf = requestAnimationFrame(n._animate);
                    n.options.onTick()
                } else {
                    n._positionY = n._targetPositionY;
                    n._render();
                    n._raf = null;
                    n.options.onTick();
                    n.options.onEnd()
                }
            };
            this._update = function() {
                var t = n._targetPositionYWithOffset - n._positionY;
                var e = t * n.options.acceleration;
                n._velocityY += e;
                n._velocityY *= n.options.friction;
                n._positionY += n._velocityY;
                return Math.abs(t)
            };
            this._render = function() { window.scrollTo(0, n._positionY) };
            var r = { onAlreadyAtPositions: function t() {}, onCancel: function t() {}, onEnd: function t() {}, onStart: function t() {}, onTick: function t() {}, friction: .7, acceleration: .04 };
            this.options = o({}, r, e);
            if (e && e.friction) { this.options.friction = 1 - e.friction }
            window.addEventListener("mousewheel", function(t) {
                if (n._raf) {
                    n.options.onCancel();
                    cancelAnimationFrame(n._raf);
                    n._raf = null
                }
            }, { passive: true })
        };
        e.default = r
    }])
});


/* SWUP FADE */
(function e(t, n) {
    if (typeof exports === "object" && typeof module === "object") module.exports = n();
    else if (typeof define === "function" && define.amd) define([], n);
    else if (typeof exports === "object") exports["SwupFadeTheme"] = n();
    else t["SwupFadeTheme"] = n()
})(window, function() {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) { return t[o].exports }
            var r = t[o] = { i: o, l: false, exports: {} };
            e[o].call(r.exports, r, r.exports, n);
            r.l = true;
            return r.exports
        }
        n.m = e;
        n.c = t;
        n.d = function(e, t, o) { if (!n.o(e, t)) { Object.defineProperty(e, t, { enumerable: true, get: o }) } };
        n.r = function(e) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) { Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }) }
            Object.defineProperty(e, "__esModule", { value: true })
        };
        n.t = function(e, t) {
            if (t & 1) e = n(e);
            if (t & 8) return e;
            if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
            var o = Object.create(null);
            n.r(o);
            Object.defineProperty(o, "default", { enumerable: true, value: e });
            if (t & 2 && typeof e != "string")
                for (var r in e) n.d(o, r, function(t) { return e[t] }.bind(null, r));
            return o
        };
        n.n = function(e) {
            var t = e && e.__esModule ? function t() { return e["default"] } : function t() { return e };
            n.d(t, "a", t);
            return t
        };
        n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) };
        n.p = "";
        return n(n.s = 0)
    }([function(e, t, n) {
        "use strict";
        var o = n(1);
        var r = i(o);

        function i(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = r.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var o = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) { if (Object.prototype.hasOwnProperty.call(n, o)) { e[o] = n[o] } } } return e };
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) { if (n) e(t.prototype, n); if (o) e(t, o); return t }
        }();
        var i = n(2);
        var a = l(i);
        var u = n(3);
        var s = l(u);

        function l(e) { return e && e.__esModule ? e : { default: e } }

        function c(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }

        function f(e, t) { if (!e) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return t && (typeof t === "object" || typeof t === "function") ? t : e }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof t) }
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var d = function(e) {
            p(t, e);

            function t(e) {
                c(this, t);
                var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                n.name = "FadeTheme";
                var r = { mainElement: "#swup" };
                n.options = o({}, r, e);
                return n
            }
            r(t, [{
                key: "mount",
                value: function e() {
                    this.applyStyles(s.default);
                    this.addClassName(this.options.mainElement, "main")
                }
            }]);
            return t
        }(a.default);
        t.default = d
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) { if (n) e(t.prototype, n); if (o) e(t, o); return t }
        }();

        function r(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }
        var i = function() {
            function e() {
                var t = this;
                r(this, e);
                this._addedStyleElements = [];
                this._addedHTMLContent = [];
                this._classNameAddedToElements = [];
                this._addClassNameToElement = function() {
                    t._classNameAddedToElements.forEach(function(e) {
                        var t = Array.prototype.slice.call(document.querySelectorAll(e.selector));
                        t.forEach(function(t) { t.classList.add("swup-transition-" + e.name) })
                    })
                };
                this.isSwupPlugin = true
            }
            o(e, [{
                key: "_beforeMount",
                value: function e() {
                    this._originalAnimationSelectorOption = String(this.swup.options.animationSelector);
                    this.swup.options.animationSelector = '[class*="swup-transition-"]';
                    this.swup.on("contentReplaced", this._addClassNameToElement)
                }
            }, {
                key: "_afterUnmount",
                value: function e() {
                    this.swup.options.animationSelector = this._originalAnimationSelectorOption;
                    this._addedStyleElements.forEach(function(e) {
                        e.outerHTML = "";
                        e = null
                    });
                    this._addedHTMLContent.forEach(function(e) {
                        e.outerHTML = "";
                        e = null
                    });
                    this._classNameAddedToElements.forEach(function(e) {
                        var t = Array.prototype.slice.call(document.querySelectorAll(e.selector));
                        t.forEach(function(e) { e.className.split(" ").forEach(function(t) { if (new RegExp("^swup-transition-").test(t)) { e.classList.remove(t) } }) })
                    });
                    this.swup.off("contentReplaced", this._addClassNameToElement)
                }
            }, { key: "mount", value: function e() {} }, { key: "unmount", value: function e() {} }, {
                key: "applyStyles",
                value: function e(t) {
                    var n = document.head;
                    var o = document.createElement("style");
                    o.setAttribute("data-swup-theme", "");
                    o.appendChild(document.createTextNode(t));
                    this._addedStyleElements.push(o);
                    n.prepend(o)
                }
            }, {
                key: "applyHTML",
                value: function e(t) {
                    var n = document.createElement("div");
                    n.innerHTML = t;
                    this._addedHTMLContent.push(n);
                    document.body.appendChild(n)
                }
            }, {
                key: "addClassName",
                value: function e(t, n) {
                    this._classNameAddedToElements.push({ selector: t, name: n });
                    this._addClassNameToElement()
                }
            }]);
            return e
        }();
        t.default = i
    }, function(e, t, n) {
        t = e.exports = n(4)(false);
        t.push([e.i, ".swup-transition-main {\n    opacity: 1;\n    transition: opacity .4s;\n}\n\nhtml.is-animating .swup-transition-main {\n    opacity: 0;\n}", ""])
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = [];
            t.toString = function t() { return this.map(function(t) { var n = o(t, e); if (t[2]) { return "@media " + t[2] + "{" + n + "}" } else { return n } }).join("") };
            t.i = function(e, n) {
                if (typeof e === "string") {
                    e = [
                        [null, e, ""]
                    ]
                }
                var o = {};
                for (var r = 0; r < this.length; r++) { var i = this[r][0]; if (i != null) { o[i] = true } }
                for (r = 0; r < e.length; r++) {
                    var a = e[r];
                    if (a[0] == null || !o[a[0]]) {
                        if (n && !a[2]) { a[2] = n } else if (n) { a[2] = "(" + a[2] + ") and (" + n + ")" }
                        t.push(a)
                    }
                }
            };
            return t
        };

        function o(e, t) { var n = e[1] || ""; var o = e[3]; if (!o) { return n } if (t && typeof btoa === "function") { var i = r(o); var a = o.sources.map(function(e) { return "/*# sourceURL=" + o.sourceRoot + e + " */" }); return [n].concat(a).concat([i]).join("\n") } return [n].join("\n") }

        function r(e) { var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))); var n = "sourceMappingURL=data:application/json;charset=utf-8;base64," + t; return "/*# " + n + " */" }
    }])
});


/* SWUP PRELOAD */
(function e(t, r) {
    if (typeof exports === "object" && typeof module === "object") module.exports = r();
    else if (typeof define === "function" && define.amd) define([], r);
    else if (typeof exports === "object") exports["SwupPreloadPlugin"] = r();
    else t["SwupPreloadPlugin"] = r()
})(window, function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) { return t[n].exports }
            var o = t[n] = { i: n, l: false, exports: {} };
            e[n].call(o.exports, o, o.exports, r);
            o.l = true;
            return o.exports
        }
        r.m = e;
        r.c = t;
        r.d = function(e, t, n) { if (!r.o(e, t)) { Object.defineProperty(e, t, { enumerable: true, get: n }) } };
        r.r = function(e) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) { Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }) }
            Object.defineProperty(e, "__esModule", { value: true })
        };
        r.t = function(e, t) {
            if (t & 1) e = r(e);
            if (t & 8) return e;
            if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
            var n = Object.create(null);
            r.r(n);
            Object.defineProperty(n, "default", { enumerable: true, value: e });
            if (t & 2 && typeof e != "string")
                for (var o in e) r.d(n, o, function(t) { return e[t] }.bind(null, o));
            return n
        };
        r.n = function(e) {
            var t = e && e.__esModule ? function t() { return e["default"] } : function t() { return e };
            r.d(t, "a", t);
            return t
        };
        r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) };
        r.p = "";
        return r(r.s = 1)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = t.query = function e(t) { var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document; if (typeof t !== "string") { return t } return r.querySelector(t) };
        var o = t.queryAll = function e(t) { var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document; if (typeof t !== "string") { return t } return Array.prototype.slice.call(r.querySelectorAll(t)) }
    }, function(e, t, r) {
        "use strict";
        var n = r(2);
        var o = a(n);

        function a(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = o.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) { if (r) e(t.prototype, r); if (n) e(t, n); return t }
        }();
        var o = r(3);
        var a = s(o);
        var u = r(4);
        var i = s(u);
        var l = r(0);
        var f = r(6);

        function s(e) { return e && e.__esModule ? e : { default: e } }

        function c(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }

        function d(e, t) { if (!e) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return t && (typeof t === "object" || typeof t === "function") ? t : e }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof t) }
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t() {
                var e;
                var r, n, o;
                c(this, t);
                for (var a = arguments.length, u = Array(a), i = 0; i < a; i++) { u[i] = arguments[i] }
                return o = (r = (n = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), n), n.name = "PreloadPlugin", n.onContentReplaced = function() { n.swup.preloadPages() }, n.onMouseover = function(e) {
                    var t = n.swup;
                    t.triggerEvent("hoverLink", e);
                    var r = new f.Link(e.delegateTarget);
                    if (r.getAddress() !== (0, f.getCurrentUrl)() && !t.cache.exists(r.getAddress()) && t.preloadPromise == null) {
                        t.preloadPromise = t.preloadPage(r.getAddress());
                        t.preloadPromise.route = r.getAddress();
                        t.preloadPromise.finally(function() { t.preloadPromise = null })
                    }
                }, n.preloadPage = function(e) {
                    var t = n.swup;
                    var r = new f.Link(e);
                    return new Promise(function(e, n) {
                        if (r.getAddress() != (0, f.getCurrentUrl)() && !t.cache.exists(r.getAddress())) {
                            (0, f.fetch)({ url: r.getAddress(), headers: t.options.requestHeaders }, function(o) {
                                if (o.status === 500) {
                                    t.triggerEvent("serverError");
                                    n()
                                } else {
                                    var a = t.getPageData(o);
                                    if (a != null) {
                                        a.url = r.getAddress();
                                        t.cache.cacheUrl(a, t.options.debugMode);
                                        t.triggerEvent("pagePreloaded")
                                    } else { n(r.getAddress()); return }
                                    e(t.cache.getPage(r.getAddress()))
                                }
                            })
                        } else { e(t.cache.getPage(r.getAddress())) }
                    })
                }, n.preloadPages = function() {
                    (0, l.queryAll)("[data-swup-preload]").forEach(function(e) { n.swup.preloadPage(e.href) })
                }, r), d(n, o)
            }
            n(t, [{
                key: "mount",
                value: function e() {
                    var t = this.swup;
                    t._handlers.pagePreloaded = [];
                    t._handlers.hoverLink = [];
                    t.preloadPage = this.preloadPage;
                    t.preloadPages = this.preloadPages;
                    t.delegatedListeners.mouseover = (0, i.default)(document.body, t.options.linkSelector, "mouseover", this.onMouseover.bind(this));
                    t.preloadPages();
                    t.on("contentReplaced", this.onContentReplaced)
                }
            }, {
                key: "unmount",
                value: function e() {
                    var t = this.swup;
                    t._handlers.pagePreloaded = null;
                    t._handlers.hoverLink = null;
                    t.preloadPage = null;
                    t.preloadPages = null;
                    t.delegatedListeners.mouseover.destroy();
                    t.off("contentReplaced", this.onContentReplaced)
                }
            }]);
            return t
        }(a.default);
        t.default = v
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) { if (r) e(t.prototype, r); if (n) e(t, n); return t }
        }();

        function o(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }
        var a = function() {
            function e() {
                o(this, e);
                this.isSwupPlugin = true
            }
            n(e, [{ key: "mount", value: function e() {} }, { key: "unmount", value: function e() {} }, { key: "_beforeMount", value: function e() {} }, { key: "_afterUnmount", value: function e() {} }]);
            return e
        }();
        t.default = a
    }, function(e, t, r) {
        var n = r(5);

        function o(e, t, r, n, o) {
            var a = u.apply(this, arguments);
            e.addEventListener(r, a, o);
            return { destroy: function() { e.removeEventListener(r, a, o) } }
        }

        function a(e, t, r, n, a) { if (typeof e.addEventListener === "function") { return o.apply(null, arguments) } if (typeof r === "function") { return o.bind(null, document).apply(null, arguments) } if (typeof e === "string") { e = document.querySelectorAll(e) } return Array.prototype.map.call(e, function(e) { return o(e, t, r, n, a) }) }

        function u(e, t, r, o) { return function(r) { r.delegateTarget = n(r.target, t); if (r.delegateTarget) { o.call(e, r) } } }
        e.exports = a
    }, function(e, t) {
        var r = 9;
        if (typeof Element !== "undefined" && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }

        function o(e, t) {
            while (e && e.nodeType !== r) {
                if (typeof e.matches === "function" && e.matches(t)) { return e }
                e = e.parentNode
            }
        }
        e.exports = o
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        t.Link = t.markSwupElements = t.getCurrentUrl = t.transitionEnd = t.fetch = t.getDataFromHTML = t.createHistoryRecord = t.classify = undefined;
        var n = r(7);
        var o = b(n);
        var a = r(8);
        var u = b(a);
        var i = r(9);
        var l = b(i);
        var f = r(10);
        var s = b(f);
        var c = r(11);
        var d = b(c);
        var p = r(12);
        var v = b(p);
        var y = r(13);
        var h = b(y);
        var g = r(14);
        var m = b(g);

        function b(e) { return e && e.__esModule ? e : { default: e } }
        var w = t.classify = o.default;
        var P = t.createHistoryRecord = u.default;
        var _ = t.getDataFromHTML = l.default;
        var k = t.fetch = s.default;
        var M = t.transitionEnd = d.default;
        var j = t.getCurrentUrl = v.default;
        var O = t.markSwupElements = h.default;
        var E = t.Link = m.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function e(t) { var r = t.toString().toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, ""); if (r[0] === "/") r = r.splice(1); if (r === "") r = "homepage"; return r };
        t.default = n
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function e(t) { window.history.pushState({ url: t || window.location.href.split(window.location.hostname)[1], random: Math.random(), source: "swup" }, document.getElementsByTagName("title")[0].innerText, t || window.location.href.split(window.location.hostname)[1]) };
        t.default = n
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) { return typeof e } : function(e) { return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
        var o = r(0);
        var a = function e(t, r) {
            var a = t.replace("<body", '<div id="swupBody"').replace("</body>", "</div>");
            var u = document.createElement("div");
            u.innerHTML = a;
            var i = [];
            var l = function e(t) {
                if (u.querySelector(r[t]) == null) { return { v: null } } else {
                    (0, o.queryAll)(r[t]).forEach(function(e, n) {
                        (0, o.queryAll)(r[t], u)[n].dataset.swup = i.length;
                        i.push((0, o.queryAll)(r[t], u)[n].outerHTML)
                    })
                }
            };
            for (var f = 0; f < r.length; f++) { var s = l(f); if ((typeof s === "undefined" ? "undefined" : n(s)) === "object") return s.v }
            var c = { title: u.querySelector("title").innerText, pageClass: u.querySelector("#swupBody").className, originalContent: t, blocks: i };
            u.innerHTML = "";
            u = null;
            return c
        };
        t.default = a
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) { if (Object.prototype.hasOwnProperty.call(r, n)) { e[n] = r[n] } } } return e };
        var o = function e(t) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var o = { url: window.location.pathname + window.location.search, method: "GET", data: null, headers: {} };
            var a = n({}, o, t);
            var u = new XMLHttpRequest;
            u.onreadystatechange = function() { if (u.readyState === 4) { if (u.status !== 500) { r(u) } else { r(u) } } };
            u.open(a.method, a.url, true);
            Object.keys(a.headers).forEach(function(e) { u.setRequestHeader(e, a.headers[e]) });
            u.send(a.data);
            return u
        };
        t.default = o
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function e() { var t = document.createElement("div"); var r = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var n in r) { if (t.style[n] !== undefined) { return r[n] } } return false };
        t.default = n
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function e() { return window.location.pathname + window.location.search };
        t.default = n
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = r(0);
        var o = function e(t, r) {
            var o = 0;
            var a = function e(a) {
                if (t.querySelector(r[a]) == null) { console.warn("Element " + r[a] + " is not in current page.") } else {
                    (0, n.queryAll)(r[a]).forEach(function(e, u) {
                        (0, n.queryAll)(r[a], t)[u].dataset.swup = o;
                        o++
                    })
                }
            };
            for (var u = 0; u < r.length; u++) { a(u) }
        };
        t.default = o
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) { if (r) e(t.prototype, r); if (n) e(t, n); return t }
        }();

        function o(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }
        var a = function() {
            function e(t) {
                o(this, e);
                if (t instanceof Element || t instanceof SVGElement) { this.link = t } else {
                    this.link = document.createElement("a");
                    this.link.href = t
                }
            }
            n(e, [{ key: "getPath", value: function e() { var t = this.link.pathname; if (t[0] !== "/") { t = "/" + t } return t } }, { key: "getAddress", value: function e() { var t = this.link.pathname + this.link.search; if (this.link.getAttribute("xlink:href")) { t = this.link.getAttribute("xlink:href") } if (t[0] !== "/") { t = "/" + t } return t } }, { key: "getHash", value: function e() { return this.link.hash } }]);
            return e
        }();
        t.default = a
    }])
});


/* SWUP PROGRESS BAR */
(function e(t, n) {
    if (typeof exports === "object" && typeof module === "object") module.exports = n();
    else if (typeof define === "function" && define.amd) define([], n);
    else if (typeof exports === "object") exports["SwupProgressPlugin"] = n();
    else t["SwupProgressPlugin"] = n()
})(window, function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) { return t[r].exports }
            var i = t[r] = { i: r, l: false, exports: {} };
            e[r].call(i.exports, i, i.exports, n);
            i.l = true;
            return i.exports
        }
        n.m = e;
        n.c = t;
        n.d = function(e, t, r) { if (!n.o(e, t)) { Object.defineProperty(e, t, { enumerable: true, get: r }) } };
        n.r = function(e) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) { Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }) }
            Object.defineProperty(e, "__esModule", { value: true })
        };
        n.t = function(e, t) {
            if (t & 1) e = n(e);
            if (t & 8) return e;
            if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
            var r = Object.create(null);
            n.r(r);
            Object.defineProperty(r, "default", { enumerable: true, value: e });
            if (t & 2 && typeof e != "string")
                for (var i in e) n.d(r, i, function(t) { return e[t] }.bind(null, i));
            return r
        };
        n.n = function(e) {
            var t = e && e.__esModule ? function t() { return e["default"] } : function t() { return e };
            n.d(t, "a", t);
            return t
        };
        n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) };
        n.p = "";
        return n(n.s = 0)
    }([function(e, t, n) {
        "use strict";
        var r = n(1);
        var i = o(r);

        function o(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = i.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) { if (Object.prototype.hasOwnProperty.call(n, r)) { e[r] = n[r] } } } return e };
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) r.writable = true;
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) { if (n) e(t.prototype, n); if (r) e(t, r); return t }
        }();
        var o = n(2);
        var s = l(o);
        var a = n(3);
        var u = l(a);

        function l(e) { return e && e.__esModule ? e : { default: e } }

        function f(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }

        function c(e, t) { if (!e) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return t && (typeof t === "object" || typeof t === "function") ? t : e }

        function h(e, t) {
            if (typeof t !== "function" && t !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof t) }
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var p = function(e) {
            h(t, e);

            function t(e) {
                f(this, t);
                var n = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                n.name = "SwupProgressPlugin";
                n.startShowingProgress = function() {
                    n.progressBar.setValue(0);
                    n.showProgressBarAfterDelay()
                };
                n.stopShowingProgress = function() {
                    n.progressBar.setValue(1);
                    n.hideProgressBar()
                };
                n.showProgressBar = function() { n.progressBar.show() };
                n.showProgressBarAfterDelay = function() { n.progressBarTimeout = window.setTimeout(n.showProgressBar, n.options.delay) };
                n.hideProgressBar = function() {
                    n.progressBar.hide();
                    if (n.progressBarTimeout != null) {
                        window.clearTimeout(n.progressBarTimeout);
                        delete n.progressBarTimeout
                    }
                };
                var i = { className: "swup-progress-bar", transition: 300, delay: 300 };
                n.options = r({}, i, e);
                n.progressBarTimeout = null;
                n.progressBar = new u.default({ className: n.options.className, animationDuration: n.options.transition });
                return n
            }
            i(t, [{
                key: "mount",
                value: function e() {
                    this.swup.on("transitionStart", this.startShowingProgress);
                    this.swup.on("contentReplaced", this.stopShowingProgress)
                }
            }, {
                key: "unmount",
                value: function e() {
                    this.swup.off("transitionStart", this.startShowingProgress);
                    this.swup.off("contentReplaced", this.stopShowingProgress)
                }
            }]);
            return t
        }(s.default);
        t.default = p
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) r.writable = true;
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) { if (n) e(t.prototype, n); if (r) e(t, r); return t }
        }();

        function i(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }
        var o = function() {
            function e() {
                i(this, e);
                this.isSwupPlugin = true
            }
            r(e, [{ key: "mount", value: function e() {} }, { key: "unmount", value: function e() {} }, { key: "_beforeMount", value: function e() {} }, { key: "_afterUnmount", value: function e() {} }]);
            return e
        }();
        t.default = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) r.writable = true;
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) { if (n) e(t.prototype, n); if (r) e(t, r); return t }
        }();

        function i(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } }
        var o = function() {
            function e(t) {
                var n = this;
                var r = t.className,
                    o = r === undefined ? null : r,
                    s = t.animationDuration,
                    a = s === undefined ? null : s;
                i(this, e);
                this.className = "progress-bar";
                this.animationDuration = 300;
                this.minValue = .1;
                this.stylesheetElement = null;
                this.progressElement = null;
                this.hiding = false;
                this.trickleInterval = null;
                this.value = 0;
                this.visible = false;
                this.trickle = function() {
                    var e = Math.random() * 3 / 100;
                    n.setValue(n.value + e)
                };
                if (o !== null) { this.className = o }
                if (a !== null) { this.animationDuration = a }
                this.stylesheetElement = this.createStylesheetElement();
                this.progressElement = this.createProgressElement()
            }
            r(e, [{
                key: "show",
                value: function e() {
                    if (!this.visible) {
                        this.visible = true;
                        this.installStylesheetElement();
                        this.installProgressElement();
                        this.startTrickling()
                    }
                }
            }, {
                key: "hide",
                value: function e() {
                    var t = this;
                    if (this.visible && !this.hiding) {
                        this.hiding = true;
                        this.fadeProgressElement(function() {
                            t.uninstallProgressElement();
                            t.stopTrickling();
                            t.visible = false;
                            t.hiding = false
                        })
                    }
                }
            }, {
                key: "setValue",
                value: function e(t) {
                    this.value = Math.max(this.minValue, t);
                    this.refresh()
                }
            }, { key: "installStylesheetElement", value: function e() { document.head.insertBefore(this.stylesheetElement, document.head.firstChild) } }, {
                key: "installProgressElement",
                value: function e() {
                    this.progressElement.style.width = "0";
                    this.progressElement.style.opacity = "1";
                    document.documentElement.insertBefore(this.progressElement, document.body);
                    this.refresh()
                }
            }, {
                key: "fadeProgressElement",
                value: function e(t) {
                    this.progressElement.style.opacity = "0";
                    setTimeout(t, this.animationDuration * 1.5)
                }
            }, { key: "uninstallProgressElement", value: function e() { if (this.progressElement.parentNode) { document.documentElement.removeChild(this.progressElement) } } }, { key: "startTrickling", value: function e() { if (!this.trickleInterval) { this.trickleInterval = window.setInterval(this.trickle, this.animationDuration) } } }, {
                key: "stopTrickling",
                value: function e() {
                    window.clearInterval(this.trickleInterval);
                    delete this.trickleInterval
                }
            }, {
                key: "refresh",
                value: function e() {
                    var t = this;
                    requestAnimationFrame(function() { t.progressElement.style.width = 10 + t.value * 90 + "%" })
                }
            }, {
                key: "createStylesheetElement",
                value: function e() {
                    var t = document.createElement("style");
                    t.type = "text/css";
                    t.textContent = this.defaultCSS;
                    return t
                }
            }, {
                key: "createProgressElement",
                value: function e() {
                    var t = document.createElement("div");
                    t.className = this.className;
                    return t
                }
            }, { key: "defaultCSS", get: function e() { return "\n    ." + this.className + " {\n        position: fixed;\n        display: block;\n        top: 0;\n        left: 0;\n        height: 3px;\n        background-color: black;\n        z-index: 9999;\n        transition:\n          width " + this.animationDuration + "ms ease-out,\n          opacity " + this.animationDuration / 2 + "ms " + this.animationDuration / 2 + "ms ease-in;\n        transform: translate3d(0, 0, 0);\n      }\n    " } }]);
            return e
        }();
        t.default = o
    }])
});
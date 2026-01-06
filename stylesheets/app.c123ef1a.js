parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i)
                    return i(t, !0);
                if (o)
                    return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }
            ,
            p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0,
    f.Module = function(e) {
        this.id = e,
        this.bundle = f,
        this.exports = {}
    }
    ,
    f.modules = e,
    f.cache = r,
    f.parent = o,
    f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }
        , {}]
    }
    ;
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f,
    i)
        throw i;
    return f
}({
    "QVnC": [function(require, module, exports) {
        var t = function(t) {
            "use strict";
            var r, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
            function u(t, r, e, n) {
                var o = r && r.prototype instanceof v ? r : v
                  , i = Object.create(o.prototype)
                  , a = new k(n || []);
                return i._invoke = function(t, r, e) {
                    var n = f;
                    return function(o, i) {
                        if (n === l)
                            throw new Error("Generator is already running");
                        if (n === p) {
                            if ("throw" === o)
                                throw i;
                            return N()
                        }
                        for (e.method = o,
                        e.arg = i; ; ) {
                            var a = e.delegate;
                            if (a) {
                                var c = _(a, e);
                                if (c) {
                                    if (c === y)
                                        continue;
                                    return c
                                }
                            }
                            if ("next" === e.method)
                                e.sent = e._sent = e.arg;
                            else if ("throw" === e.method) {
                                if (n === f)
                                    throw n = p,
                                    e.arg;
                                e.dispatchException(e.arg)
                            } else
                                "return" === e.method && e.abrupt("return", e.arg);
                            n = l;
                            var u = h(t, r, e);
                            if ("normal" === u.type) {
                                if (n = e.done ? p : s,
                                u.arg === y)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: e.done
                                }
                            }
                            "throw" === u.type && (n = p,
                            e.method = "throw",
                            e.arg = u.arg)
                        }
                    }
                }(t, e, a),
                i
            }
            function h(t, r, e) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(r, e)
                    }
                } catch (n) {
                    return {
                        type: "throw",
                        arg: n
                    }
                }
            }
            t.wrap = u;
            var f = "suspendedStart"
              , s = "suspendedYield"
              , l = "executing"
              , p = "completed"
              , y = {};
            function v() {}
            function d() {}
            function g() {}
            var m = {};
            m[i] = function() {
                return this
            }
            ;
            var w = Object.getPrototypeOf
              , L = w && w(w(G([])));
            L && L !== e && n.call(L, i) && (m = L);
            var x = g.prototype = v.prototype = Object.create(m);
            function E(t) {
                ["next", "throw", "return"].forEach(function(r) {
                    t[r] = function(t) {
                        return this._invoke(r, t)
                    }
                })
            }
            function b(t, r) {
                var e;
                this._invoke = function(o, i) {
                    function a() {
                        return new r(function(e, a) {
                            !function e(o, i, a, c) {
                                var u = h(t[o], t, i);
                                if ("throw" !== u.type) {
                                    var f = u.arg
                                      , s = f.value;
                                    return s && "object" == typeof s && n.call(s, "__await") ? r.resolve(s.__await).then(function(t) {
                                        e("next", t, a, c)
                                    }, function(t) {
                                        e("throw", t, a, c)
                                    }) : r.resolve(s).then(function(t) {
                                        f.value = t,
                                        a(f)
                                    }, function(t) {
                                        return e("throw", t, a, c)
                                    })
                                }
                                c(u.arg)
                            }(o, i, e, a)
                        }
                        )
                    }
                    return e = e ? e.then(a, a) : a()
                }
            }
            function _(t, e) {
                var n = t.iterator[e.method];
                if (n === r) {
                    if (e.delegate = null,
                    "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return",
                        e.arg = r,
                        _(t, e),
                        "throw" === e.method))
                            return y;
                        e.method = "throw",
                        e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return y
                }
                var o = h(n, t.iterator, e.arg);
                if ("throw" === o.type)
                    return e.method = "throw",
                    e.arg = o.arg,
                    e.delegate = null,
                    y;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = r),
                e.delegate = null,
                y) : i : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                y)
            }
            function j(t) {
                var r = {
                    tryLoc: t[0]
                };
                1 in t && (r.catchLoc = t[1]),
                2 in t && (r.finallyLoc = t[2],
                r.afterLoc = t[3]),
                this.tryEntries.push(r)
            }
            function O(t) {
                var r = t.completion || {};
                r.type = "normal",
                delete r.arg,
                t.completion = r
            }
            function k(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(j, this),
                this.reset(!0)
            }
            function G(t) {
                if (t) {
                    var e = t[i];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var o = -1
                          , a = function e() {
                            for (; ++o < t.length; )
                                if (n.call(t, o))
                                    return e.value = t[o],
                                    e.done = !1,
                                    e;
                            return e.value = r,
                            e.done = !0,
                            e
                        };
                        return a.next = a
                    }
                }
                return {
                    next: N
                }
            }
            function N() {
                return {
                    value: r,
                    done: !0
                }
            }
            return d.prototype = x.constructor = g,
            g.constructor = d,
            g[c] = d.displayName = "GeneratorFunction",
            t.isGeneratorFunction = function(t) {
                var r = "function" == typeof t && t.constructor;
                return !!r && (r === d || "GeneratorFunction" === (r.displayName || r.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g,
                c in t || (t[c] = "GeneratorFunction")),
                t.prototype = Object.create(x),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            E(b.prototype),
            b.prototype[a] = function() {
                return this
            }
            ,
            t.AsyncIterator = b,
            t.async = function(r, e, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new b(u(r, e, n, o),i);
                return t.isGeneratorFunction(e) ? a : a.next().then(function(t) {
                    return t.done ? t.value : a.next()
                })
            }
            ,
            E(x),
            x[c] = "Generator",
            x[i] = function() {
                return this
            }
            ,
            x.toString = function() {
                return "[object Generator]"
            }
            ,
            t.keys = function(t) {
                var r = [];
                for (var e in t)
                    r.push(e);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            t.values = G,
            k.prototype = {
                constructor: k,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = r,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = r,
                    this.tryEntries.forEach(O),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = t,
                        e.next = n,
                        o && (e.method = "next",
                        e.arg = r),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , h = n.call(a, "finallyLoc");
                            if (u && h) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!h)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, r) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = r,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    y) : this.complete(a)
                },
                complete: function(t, r) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && r && (this.next = r),
                    y
                },
                finish: function(t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var e = this.tryEntries[r];
                        if (e.finallyLoc === t)
                            return this.complete(e.completion, e.afterLoc),
                            O(e),
                            y
                    }
                },
                catch: function(t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var e = this.tryEntries[r];
                        if (e.tryLoc === t) {
                            var n = e.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                O(e)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: G(t),
                        resultName: e,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = r),
                    y
                }
            },
            t
        }("object" == typeof module ? module.exports : {});
        try {
            regeneratorRuntime = t
        } catch (r) {
            Function("r", "regeneratorRuntime = r")(t)
        }
    }
    , {}],
    "CjX8": [function(require, module, exports) {
        module.exports = {
            upload_desc: "Click to select a file, or drag and drop it here (<b>.class</b> or <b>.jar</b>)",
            loading: "Loading file...",
            invalid_file_format: "Invalid file format! Accepted file formats are <b>.jar</b> or <b>.class</b>.",
            loading_from: "Loading file from: ",
            downloading_file: "Download file...",
            invalid_jar: "Invalid or corrupted JAR file!",
            decompiling: "Decompiling...",
            open_jar_new_tab: 'Open "$name" in a new tab',
            root_desc: 'Select a file on the left side to decompile.\n\nTips:\n  - It\'s possible to use the keyboard to navigate the file tree (press <kbd>Tab</kbd> or <b>click</b> in the first file to make sure it\'s focused).\n    - <kbd>Tab</kbd> / <kbd title="Arrow Down">↓</kbd> selects the next file.\n    - <kbd>Shift</kbd> + <kbd>Tab</kbd> / <kbd title="Arrow Up">↑</kbd> selects the previous file.\n    - <kbd>Enter</kbd> / <kbd title="Arrow Left">←</kbd> / <kbd title="Arrow Right">→</kbd> opens the file / expands or collapses the folder.\n    - <kbd>Ctrl</kbd> + <kbd title="Arrow Down">↓</kbd>/<kbd title="Arrow Up">↑</kbd> can be used to navigate faster.<sup style="color:green;">NEW</sup>\n\n    - Use <kbd>Ctrl</kbd> + <kbd title="Arrow Right">→</kbd> to open the file and focus on the code (so it can be scrolled using the keyboard, for example).\n    - Use <kbd>Ctrl</kbd> + <kbd title="Arrow Left">←</kbd> while focused on the code to return to the file tree.\n\n  - Hold <kbd>Ctrl</kbd> while opening a folder to expand all sub-folders.\n  - Hold <kbd>Shift</kbd> while opening a folder to expand only sub-folders that have a single sub-folder.\n\n<a href="/changelog" target="_blank">Release notes</a>\n'
        };
    }
    , {}],
    "aOs5": [function(require, module, exports) {
        module.exports = {
            upload_desc: "Clique para selecionar ou arraste o arquivo (<b>.class</b> ou <b>.jar</b>) até aqui.",
            loading: "Carregando arquivo...",
            invalid_file_format: "Tipo de arquivo inválido! Os tipos aceitos são <b>.jar</b> ou <b>.class</b>.",
            loading_from: "Carregando arquivo de: ",
            downloading_file: "Baixando o arquivo...",
            invalid_jar: "Arquivo JAR inválido ou corrompido!",
            decompiling: "Carregando...",
            open_jar_new_tab: 'Abrir "$name" em uma nova janela',
            root_desc: 'Selecione um arquivo ao lado para <i>decompilar</i>.\n\nDicas:\n  - É possível usar o teclado para navegar nos arquivos (use <kbd>Tab</kbd> ou <b>clique</b> no primeiro arquivo para garantir que esteja focado).\n    - <kbd>Tab</kbd> / <kbd title="Seta para cima">↓</kbd> seleciona o próximo arquivo.\n    - <kbd>Shift</kbd> + <kbd>Tab</kbd> / <kbd title="Seta para cima">↑</kbd> seleciona o arquivo anterior.\n    - <kbd>Enter</kbd> / <kbd title="Seta para esquerda">←</kbd> / <kbd title="Seta para direita">→</kbd> abre o arquivo / expande ou colapsa a pasta.\n    - <kbd>Ctrl</kbd> + <kbd title="Arrow Down">↓</kbd>/<kbd title="Arrow Up">↑</kbd> pode ser usado para navegar mais rapidamente.<sup style="color:green;">NOVO</sup>\n\n    - Use <kbd>Ctrl</kbd> + <kbd title="Seta para direita">→</kbd> para abrir o arquivo e focar no código (assim é possível usar as teclas para navegar).\n    - Use <kbd>Ctrl</kbd> + <kbd title="Seta para esquerda">←</kbd> quando o código estiver focado para retornar à árvore de arquivos.\n\n  - Aperte <kbd>Ctrl</kbd> ao clicar em uma pasta para expandir/colapsar todas as subpastas.\n  - Aperte <kbd>Shift</kbd> ao clicar em uma pasta para expandir/colapsar apenas as sub-pastas que possuem uma sub-pasta.\n\n\n<a href="/changelog" target="_blank">Registro de mudanças</a> (apenas em inglês por enquanto)\n'
        };
    }
    , {}],
    "ib74": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = void 0;
        var r = n(require("./en.js"))
          , e = n(require("./pt.js"));
        function t() {
            if ("function" != typeof WeakMap)
                return null;
            var r = new WeakMap;
            return t = function() {
                return r
            }
            ,
            r
        }
        function n(r) {
            if (r && r.__esModule)
                return r;
            if (null === r || "object" != typeof r && "function" != typeof r)
                return {
                    default: r
                };
            var e = t();
            if (e && e.has(r))
                return e.get(r);
            var n = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in r)
                if (Object.prototype.hasOwnProperty.call(r, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(r, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = r[a]
                }
            return n.default = r,
            e && e.set(r, n),
            n
        }
        function o(r) {
            return f(r) || u(r) || i(r) || a()
        }
        function a() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function i(r, e) {
            if (r) {
                if ("string" == typeof r)
                    return c(r, e);
                var t = Object.prototype.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name),
                "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? c(r, e) : void 0
            }
        }
        function u(r) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(r))
                return Array.from(r)
        }
        function f(r) {
            if (Array.isArray(r))
                return c(r)
        }
        function c(r, e) {
            (null == e || e > r.length) && (e = r.length);
            for (var t = 0, n = new Array(e); t < e; t++)
                n[t] = r[t];
            return n
        }
        function l() {
            var t = r
              , n = navigator.language;
            return n && 0 === n.indexOf("pt") ? e : t
        }
        var p = l()
          , s = p;
        exports.default = s;
    }
    , {
        "./en.js": "CjX8",
        "./pt.js": "aOs5"
    }],
    "FOZT": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.getFilePathExtension = r,
        exports.formatBytes = e,
        exports.int32Bytes = o,
        exports.randomString = a,
        exports.stringToBytes = s,
        exports.countLines = i,
        exports.explodePath = u,
        exports.getLanguageFromExtension = void 0;
        var t = new Map;
        t.set("txt", "none"),
        ["classpath", "project", "xsd", "dtd"].forEach(function(n) {
            return t.set(n, "xml")
        });
        var n = function(n) {
            return t.get(n)
        };
        function r(t) {
            var n = t.substring(t.lastIndexOf("/") + 1);
            return n.lastIndexOf(".") >= 0 ? n.substring(n.lastIndexOf(".") + 1) : void 0
        }
        function e(t) {
            return t < 1024 ? "".concat(t, " B") : t >= 1024 && t <= 1048576 ? "".concat((t / 1024).toFixed(1), " KB") : "".concat((t / 1048576).toFixed(1), " MB")
        }
        function o(t) {
            return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        function a() {
            for (var t = 10, n = ""; t--; ) {
                var r = 3 * Math.random() | 0
                  , e = void 0;
                0 === r ? e = 97 + 25 * Math.random() | 0 : 1 === r ? e = 65 + 25 * Math.random() | 0 : 2 === r && (e = 48 + 9 * Math.random() | 0),
                n += String.fromCharCode(e)
            }
            return n
        }
        function s(t) {
            for (var n = [], r = 0; r < t.length; r++)
                n.push(t.charCodeAt(r));
            return n
        }
        function i(t) {
            for (var n = 1, r = 0; r < t.length; r++)
                "\n" === t.charAt(r) && n++;
            return n
        }
        function u(t) {
            var n = t.lastIndexOf("/");
            return {
                folder: t.substring(0, n),
                fileName: t.substring(n + 1)
            }
        }
        exports.getLanguageFromExtension = n;
    }
    , {}],
    "JCoI": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.SIMULATE_LATENCY = exports.DISABLE_DECOMPILED_CODE_CACHE = exports.API_BASE = void 0;
        var e = "https://api.jdec.app";
        exports.API_BASE = e;
        var E = !1;
        exports.DISABLE_DECOMPILED_CODE_CACHE = E;
        var r, t = !1;
        exports.SIMULATE_LATENCY = t;
    }
    , {}],
    "n9i2": [function(require, module, exports) {
        "use strict";
        function e() {}
        function t(e) {
            0
        }
        function o(e) {
            0
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.debugLog = e,
        exports.debugTimeStart = t,
        exports.debugTimeStop = o;
    }
    , {}],
    "Phlc": [function(require, module, exports) {

        var t, e, n = module.exports = {};
        function r() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(e) {
            if (t === setTimeout)
                return setTimeout(e, 0);
            if ((t === r || !t) && setTimeout)
                return t = setTimeout,
                setTimeout(e, 0);
            try {
                return t(e, 0)
            } catch (n) {
                try {
                    return t.call(null, e, 0)
                } catch (n) {
                    return t.call(this, e, 0)
                }
            }
        }
        function u(t) {
            if (e === clearTimeout)
                return clearTimeout(t);
            if ((e === o || !e) && clearTimeout)
                return e = clearTimeout,
                clearTimeout(t);
            try {
                return e(t)
            } catch (n) {
                try {
                    return e.call(null, t)
                } catch (n) {
                    return e.call(this, t)
                }
            }
        }
        !function() {
            try {
                t = "function" == typeof setTimeout ? setTimeout : r
            } catch (n) {
                t = r
            }
            try {
                e = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (n) {
                e = o
            }
        }();
        var c, s = [], l = !1, a = -1;
        function f() {
            l && c && (l = !1,
            c.length ? s = c.concat(s) : a = -1,
            s.length && h())
        }
        function h() {
            if (!l) {
                var t = i(f);
                l = !0;
                for (var e = s.length; e; ) {
                    for (c = s,
                    s = []; ++a < e; )
                        c && c[a].run();
                    a = -1,
                    e = s.length
                }
                c = null,
                l = !1,
                u(t)
            }
        }
        function m(t, e) {
            this.fun = t,
            this.array = e
        }
        function p() {}
        n.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            s.push(new m(t,e)),
            1 !== s.length || l || i(h)
        }
        ,
        m.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        n.title = "browser",
        n.env = {},
        n.argv = [],
        n.version = "",
        n.versions = {},
        n.on = p,
        n.addListener = p,
        n.once = p,
        n.off = p,
        n.removeListener = p,
        n.removeAllListeners = p,
        n.emit = p,
        n.prependListener = p,
        n.prependOnceListener = p,
        n.listeners = function(t) {
            return []
        }
        ,
        n.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        n.cwd = function() {
            return "/"
        }
        ,
        n.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        n.umask = function() {
            return 0
        }
        ;
    }
    , {}],
    "A2T1": [function(require, module, exports) {
        var process = require("process");
        var e = require("process");
        require("regenerator-runtime/runtime");
        var t = o(require("./lang/index.js"))
          , n = require("./utils.js")
          , r = require("./vars.js")
          , a = require("./debug.js");
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i(e, t, n, r, a, o, i) {
            try {
                var c = e[o](i)
                  , l = c.value
            } catch (s) {
                return void n(s)
            }
            c.done ? t(l) : Promise.resolve(l).then(r, a)
        }
        function c(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise(function(r, a) {
                    var o = e.apply(t, n);
                    function c(e) {
                        i(o, r, a, c, l, "next", e)
                    }
                    function l(e) {
                        i(o, r, a, c, l, "throw", e)
                    }
                    c(void 0)
                }
                )
            }
        }
        function l(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = u(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0
                      , a = function() {};
                    return {
                        s: a,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, i = !0, c = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return i = e.done,
                    e
                },
                e: function(e) {
                    c = !0,
                    o = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw o
                    }
                }
            }
        }
        function s(e) {
            return m(e) || f(e) || u(e) || d()
        }
        function d() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function u(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
            }
        }
        function f(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }
        function m(e) {
            if (Array.isArray(e))
                return p(e)
        }
        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var v = new Map
          , h = void 0
          , g = void 0
          , y = void 0
          , b = void 0
          , L = !1
          , w = null
          , E = !0;
        function x(e) {
            var n = document.getElementById("upload_box");
            if (n.classList.remove("drag-over"),
            e && 0 !== e.length) {
                var r = e[0];
                r.name.endsWith(".jar") || r.name.endsWith(".class") ? (n.setAttribute("x-selected", "true"),
                Z(r)) : G(t.default.invalid_file_format, 2500, !0)
            } else
                G(t.default.invalid_file_format, 2500, !0)
        }
        function S() {
            var e = document.getElementById("upload_box")
              , t = function() {
                "true" !== e.getAttribute("x-selected") && document.getElementById("file-input").click()
            };
            e.addEventListener("keypress", function(e) {
                return "Enter" === e.key && t()
            }),
            e.addEventListener("click", t),
            e.addEventListener("drop", function(e) {
                x(e.dataTransfer.files),
                e.preventDefault()
            }),
            e.addEventListener("dragenter", function(t) {
                return e.classList.add("drag-over")
            }),
            e.addEventListener("dragleave", function(t) {
                return e.classList.remove("drag-over")
            }),
            e.addEventListener("dragover", function(e) {
                return e.preventDefault()
            }),
            document.getElementById("file-input").addEventListener("change", function(e) {
                x(e.target.files),
                e.preventDefault()
            })
        }
        document.getElementById("upload_desc").innerHTML = t.default.upload_desc,
        document.getElementById("code-loading-info").innerText = t.default.decompiling;
        var A = new Map;
        function I() {
            if (!L) {
                var e = location.search.indexOf("jse") > -1 ? "?jse" : ""
                  , t = new URL(r.API_BASE);
                (w = new WebSocket("".concat("https:" === t.protocol ? "wss" : "ws", "://").concat(t.host, "/v2/ws").concat(e))).binaryType = "arraybuffer";
                var n = Date.now()
                  , o = setInterval(function() {
                    if (w.readyState === WebSocket.OPEN)
                        return Date.now() > n + 12e4 ? ((0,
                        a.debugLog)("WS closed idle"),
                        void w.close()) : void w.send("ping")
                }, 2e4);
                return w.onopen = function() {
                    (0,
                    a.debugLog)("WS connected")
                }
                ,
                w.onclose = function() {
                    (0,
                    a.debugLog)("WS closed"),
                    clearInterval(o)
                }
                ,
                w.onmessage = function(e) {
                    n = Date.now();
                    var t = JSON.parse(e.data)
                      , r = A.get(t.cbid);
                    null == r ? (0,
                    a.debugLog)("callbackId ".concat(t.cbid, " refers to nothing.")) : (r.resolveFunc({
                        data: t
                    }),
                    delete r.promise,
                    A.delete(t.cbid))
                }
                ,
                w
            }
        }
        function _(e) {
            var t;
            Le("decompile");
            var o = e.find(function(e) {
                return e.length > 512e3
            });
            if (o)
                return Promise.resolve({
                    data: {
                        error: "Class file is too big (".concat((0,
                        n.formatBytes)(o.length), ")")
                    }
                });
            var i = e.reduce(function(e, t) {
                return t.length + e
            }, 0)
              , c = 0
              , l = new Uint8Array(1 + i + 4 * e.length + 10);
            if (l.set(new Uint8Array([e.length]), c++),
            e.forEach(function(e) {
                l.set((0,
                n.int32Bytes)(e.length), c),
                c += 4,
                l.set(e, c),
                c += e.length
            }),
            l.length > 2097152)
                return Promise.resolve({
                    data: {
                        error: "Class file is too big (".concat((0,
                        n.formatBytes)(l.length), "), including inner classes.")
                    }
                });
            if ((null === (t = w) || void 0 === t ? void 0 : t.readyState) === WebSocket.OPEN && l.length < 65400 && !L) {
                var s = (0,
                n.randomString)();
                l.set(new Uint8Array((0,
                n.stringToBytes)(s)), c);
                var d = new Uint8Array(1 + "fernflower".length + l.length);
                d.set(new Uint8Array(["fernflower".length]), 0),
                d.set(new Uint8Array((0,
                n.stringToBytes)("fernflower")), 1),
                d.set(l, 1 + "fernflower".length),
                w.send(d.buffer);
                var u = new function() {
                    this.promise = new Promise(function(e, t) {
                        this.resolveFunc = e
                    }
                    .bind(this))
                }
                ;
                return A.set(s, u),
                u.promise
            }
            var f, m = null === (f = w) || void 0 === f ? void 0 : f.readyState;
            m && m !== WebSocket.CLOSING && m !== WebSocket.CLOSED || L || (I(),
            (0,
            a.debugLog)("WS is closed, trying to reconnect. Using POST fallback."));
            var p = location.search.indexOf("jse") > -1 ? "?jse" : "";
            return fetch("".concat(r.API_BASE, "/v2/decompile").concat(p), {
                headers: {
                    Accept: "application/json"
                },
                method: "POST",
                body: l.buffer,
                mode: "cors"
            }).then(function(e) {
                return e.json().then(function(t) {
                    return {
                        headers: e.headers,
                        data: t
                    }
                })
            })
        }
        function k(e) {
            e = e.replace(/"/g, '\\"');
            var t = s(document.querySelectorAll("span.token.string")).filter(function(t) {
                return t.innerText === '"'.concat(e, '"')
            });
            if (0 !== t.length) {
                t[0].scrollIntoView({
                    behavior: "auto",
                    block: "center",
                    inline: "nearest"
                });
                var n, r = l(t);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var a = n.value;
                        a.classList.remove("str-highlight"),
                        a.classList.add("str-highlight")
                    }
                } catch (o) {
                    r.e(o)
                } finally {
                    r.f()
                }
            }
        }
        function T() {
            y && (k(y),
            y = void 0)
        }
        var B, P = new Map;
        function j(e, t, o) {
            var i = document.getElementById("code");
            if (i.innerHTML = "",
            i.className = "language-*",
            i.scrollTop = 0,
            o && P.has(o) && !r.DISABLE_DECOMPILED_CODE_CACHE) {
                var c = P.get(o)
                  , l = c.element
                  , s = c.preContainerClassName;
                i.className = s,
                i.appendChild(l),
                T()
            } else {
                var d = document.createElement("code");
                if (d.textContent = e,
                t)
                    try {
                        i.classList.add("line-numbers"),
                        d.className = "language-".concat(t),
                        (0,
                        a.debugTimeStart)("highlight"),
                        Prism.highlightElement(d, !1, function() {
                            (0,
                            a.debugTimeStop)("highlight"),
                            (0,
                            n.countLines)(e) > 999 && i.classList.add("line-numbers-lt-lg"),
                            i.appendChild(d),
                            Prism.plugins.lineNumbers.init({
                                code: e,
                                element: d
                            }),
                            o && P.set(o, {
                                element: d.cloneNode(!0),
                                preContainerClassName: i.className
                            }),
                            T()
                        })
                    } catch (u) {
                        console.error(u),
                        0 === i.childElementCount && i.appendChild(d)
                    }
                else
                    i.appendChild(d)
            }
            document.querySelector("#code").classList.remove("loading"),
            document.querySelector("#code-loading-info").classList.remove("visible")
        }
        function C() {
            return document.querySelector(".leaf a.title.active")
        }
        function N() {
            var e;
            null === (e = C()) || void 0 === e || e.classList.remove("active")
        }
        function R(e) {
            N();
            try {
                e = CSS.escape(e)
            } catch (n) {
                console.error(n)
            }
            var t = document.querySelector('.leaf[data-fullpath="'.concat(e, '"] a.title'));
            null == t || t.classList.add("active"),
            null == t || t.focus()
        }
        function q(e, t) {
            return O.apply(this, arguments)
        }
        function O() {
            return (O = c(regeneratorRuntime.mark(function e(a, o) {
                var i, c, l, d, u, f, m, p, h, g, y, b, L, w, E, x;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if ((i = document.getElementById("code-loading-info")).innerText = t.default.decompiling,
                            i.classList.add("visible"),
                            document.getElementById("code").classList.add("loading"),
                            c = (0,
                            n.explodePath)(a),
                            l = c.fileName,
                            v.set(a, {}),
                            d = a.substring(0, a.length - 6),
                            u = o.filter(function(e) {
                                return e.startsWith("".concat(d, "$"))
                            }),
                            f = [o.file(a)].concat(s(u)),
                            m = f.map(function(e) {
                                return e.async("uint8array")
                            }),
                            p = Date.now(),
                            !r.SIMULATE_LATENCY) {
                                e.next = 14;
                                break
                            }
                            return e.next = 14,
                            new Promise(function(e, t) {
                                setTimeout(function() {
                                    return e()
                                }, 100 + 500 * Math.random())
                            }
                            );
                        case 14:
                            return e.next = 16,
                            Promise.all(m);
                        case 16:
                            return h = e.sent,
                            e.next = 19,
                            _(h);
                        case 19:
                            if (g = e.sent,
                            y = g.data,
                            b = y.code,
                            L = y.error,
                            w = y.took,
                            !L) {
                                e.next = 26;
                                break
                            }
                            return j(b = "Error: ".concat(L)),
                            v.set(a, {
                                code: b,
                                lang: "none"
                            }),
                            e.abrupt("return");
                        case 26:
                            E = Date.now() - p,
                            x = "",
                            j(b = "/* Decompiler ".concat(w, "ms, total ").concat(E, "ms, lines ").concat((0,
                            n.countLines)(b)).concat(x, " */\n").concat(b), "java", a),
                            F(l.replace(".class", ".java"), b),
                            r.DISABLE_DECOMPILED_CODE_CACHE ? v.delete(a) : v.set(a, {
                                code: b,
                                lang: "java"
                            });
                        case 33:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        function U(e, r) {
            var a = v.get(e)
              , o = (0,
            n.explodePath)(e).fileName;
            if (R(e),
            null == a) {
                var i = (0,
                n.getFilePathExtension)(e);
                switch (i) {
                case "class":
                    q(e, r).catch(function(t) {
                        console.error(t),
                        j("Failed to decompile. Cause: ".concat(t)),
                        v.delete(e)
                    });
                    break;
                case "png":
                case "jpeg":
                case "jpg":
                case "gif":
                    var c = "image/".concat(i)
                      , l = r.file(e);
                    l.async("base64").then(function(e) {
                        var t = document.createElement("img");
                        document.getElementById("code");
                        t.src = "data:".concat(c, ";base64, ").concat(e),
                        code.innerHTML = "",
                        code.appendChild(t)
                    }),
                    l.async("arraybuffer").then(function(e) {
                        F(o, e, c)
                    });
                    break;
                case "jar":
                    var s = document.getElementById("code")
                      , d = document.createElement("button");
                    d.textContent = t.default.open_jar_new_tab.replace("$name", o),
                    d.style.margin = "auto",
                    d.style.display = "inline-block",
                    d.style.padding = "4px",
                    d.style.margin = "2px",
                    s.className = "",
                    s.innerHTML = "",
                    s.appendChild(d),
                    d.onclick = function() {
                        var t = r.file(e).async("arraybuffer").then(function(e) {
                            return JSZip.loadAsync(e)
                        });
                        window._loadFromParent = {
                            zipPromise: t,
                            fileName: o
                        },
                        window.open(location.origin, "_blank")
                    }
                    ,
                    M(r.file(e));
                    break;
                default:
                    r.file(e).async("text").then(function(t) {
                        var r = (0,
                        n.getFilePathExtension)(e)
                          , a = r ? (0,
                        n.getLanguageFromExtension)(r) || r : "none";
                        v.set(e, {
                            code: t,
                            lang: a
                        }),
                        j(t, a),
                        F(o, t)
                    })
                }
            } else
                null != a.code && (j(a.code, a.lang, e),
                F(o.replace(".class", ".java"), a.code))
        }
        function D() {
            var e = document.getElementById("opened-file");
            URL.revokeObjectURL(e.href),
            B && e.removeEventListener("click", B),
            delete e.download,
            delete e.href,
            delete e.title,
            e.style.display = "none"
        }
        function M(e) {
            var t = document.getElementById("opened-file");
            D();
            var r = (0,
            n.explodePath)(e.name).fileName
              , a = null == e ? void 0 : e._data.uncompressedSize
              , o = a ? " (".concat((0,
            n.formatBytes)(a), ")") : "";
            t.download = r,
            t.title = "Download ".concat(r).concat(o),
            t.href = "#",
            t.style.display = "inline-block",
            B = function(n) {
                n.preventDefault(),
                e.async("arraybuffer").then(function(e) {
                    t.href = URL.createObjectURL(new Blob([e])),
                    t.click()
                })
            }
            ,
            t.addEventListener("click", B, {
                once: !0
            }),
            t.querySelector("span").textContent = r
        }
        function F(e, t, r) {
            var a = document.getElementById("opened-file");
            D();
            var o = URL.createObjectURL(new Blob([t],{
                type: r || ""
            }));
            a.download = e,
            a.href = o,
            a.title = "Download ".concat(e, " (").concat((0,
            n.formatBytes)(t.length), ")"),
            a.style.display = "inline-block",
            a.querySelector("span").textContent = e
        }
        function W(e) {
            var t, n = new Map, r = l(e);
            try {
                for (r.s(); !(t = r.n()).done; ) {
                    var a = t.value
                      , o = a.name
                      , i = o.split("/")
                      , c = i[i.length - 1];
                    if (c) {
                        for (var d = n, u = 0; u < i.length - 1; u++) {
                            var f = i[u]
                              , m = d.get(f);
                            m || (m = new Map,
                            d.set(f, m)),
                            d = m
                        }
                        (d.$child || (d.$child = [])).push({
                            text: c,
                            fileSize: a._data && a._data.uncompressedSize || 0,
                            dataAttr: {
                                fullPath: o
                            }
                        })
                    }
                }
            } catch (p) {
                r.e(p)
            } finally {
                r.f()
            }
            return function e(t) {
                var n, r = [], a = l(t.keys());
                try {
                    for (a.s(); !(n = a.n()).done; ) {
                        var o = n.value;
                        r.push({
                            text: o,
                            children: e(t.get(o))
                        })
                    }
                } catch (p) {
                    a.e(p)
                } finally {
                    a.f()
                }
                return t.$child && r.push.apply(r, s(t.$child)),
                r
            }(n)
        }
        function H(e) {
            var t, r = [], a = {};
            return e.forEach(function(e) {
                var t = e.name;
                if (-1 == t.lastIndexOf("/"))
                    r.push({
                        text: t,
                        dataAttr: {
                            fullPath: t
                        }
                    });
                else {
                    var o = (0,
                    n.explodePath)(t)
                      , i = o.folder
                      , c = o.fileName;
                    if ("" === c)
                        return;
                    a[i] || (a[i] = {
                        text: i.replace(/\//g, "."),
                        children: [],
                        priority: 0
                    }),
                    a[i].children.push({
                        text: c,
                        dataAttr: {
                            fullPath: t
                        }
                    })
                }
            }),
            (t = Object.values(a)).concat.apply(t, r)
        }
        function $(e) {
            var t = [];
            e.forEach(function(e, n) {
                E && !L && -1 !== e.indexOf("$") && e.endsWith(".class") || t.push(n)
            });
            return W(t)
        }
        function z(e, t) {
            h = e,
            (0,
            a.debugTimeStart)("createTreeStructure");
            var n = $(e);
            function r(e) {
                e.code && Prism.plugins.lineNumbers.init(e)
            }
            (0,
            a.debugTimeStop)("createTreeStructure"),
            ue(),
            document.getElementById("select_file").style.display = "none",
            (0,
            a.debugTimeStart)("renderTree"),
            ee(document.getElementById("tree"), {
                data: {
                    text: t.name,
                    children: n,
                    dataAttr: {
                        "is-root": !0
                    }
                },
                sort: !0,
                expandFirstNode: !0
            }),
            (0,
            a.debugTimeStop)("renderTree"),
            document.getElementById("browse_files").style.display = "",
            Le("load-jar"),
            L || (0,
            a.debugTimeStop)("jarload"),
            I(),
            b && e.file(b) && (me(b),
            b = void 0),
            document.querySelector(".folder[data-is-root] a.title").focus(),
            we.tabIndex = oe + 1,
            -1 === Prism.hooks.all.complete.indexOf(r) && Prism.hooks.add("complete", r)
        }
        function J(e) {
            var a = new URL(e).pathname
              , o = a.slice(a.lastIndexOf("/") + 1) || "Unnamed.jar";
            document.getElementById("upload_desc").innerText = t.default.loading_from + e,
            document.getElementById("upload_box").setAttribute("x-selected", "true"),
            fetch("".concat(r.API_BASE, "/pipe-url?u=").concat(e), {
                headers: {
                    accept: "application/octect-stream"
                }
            }).then(function(e) {
                if (200 !== e.status)
                    return e.json().then(function(e) {
                        return Promise.reject(e)
                    });
                if (void 0 === e.body)
                    return Promise.resolve({
                        buffer: e.arrayBuffer()
                    });
                var r = e.body.getReader()
                  , a = document.getElementById("upload_desc")
                  , o = []
                  , i = e.headers.get("content-length") || 1
                  , c = 0;
                return r.read().then(function e(s) {
                    if (s.done) {
                        var d, u = new Uint8Array(c), f = 0, m = l(o);
                        try {
                            for (m.s(); !(d = m.n()).done; ) {
                                var p = d.value;
                                u.set(p, f),
                                f += p.length
                            }
                        } catch (h) {
                            m.e(h)
                        } finally {
                            m.f()
                        }
                        return Promise.resolve({
                            buffer: u
                        })
                    }
                    c += s.value.length,
                    o.push(s.value);
                    var v = (100 * c / i).toFixed(1);
                    return a.innerHTML = "".concat(t.default.downloading_file, "<p>").concat(v, "% (").concat((0,
                    n.formatBytes)(c), " of ").concat((0,
                    n.formatBytes)(i), ")</p>"),
                    v > 99 && (a.innerText = t.default.loading),
                    r.read().then(e)
                })
            }).then(function(e) {
                return K(e.buffer, {
                    name: o
                })
            }).catch(function(e) {
                switch (e.error) {
                case "ERR_INVALID_URL":
                case "ERR_INVALID_FILE":
                    G("A URL especificada não aponta para um JAR válido.", 3e3);
                    break;
                case "ERR_NOT_FOUND":
                    G("A URL especificada aponta para um arquivo inexistente", 3e3);
                    break;
                default:
                    G("Não foi possível carregar o jar a partir da URL especificada. Erro inesperado.", 5e3),
                    console.error(e)
                }
            })
        }
        function K(e, n) {
            (0,
            a.debugTimeStart)("jarload"),
            JSZip.loadAsync(e).catch(function(e) {
                console.error(e),
                G(t.default.invalid_jar, 2500)
            }).then(function(e) {
                return z(e, n)
            }).catch(function(e) {
                return console.error(e)
            })
        }
        function V(e, t) {
            var n = new JSZip;
            n.file(t.name, e),
            L = !0,
            z(n, {
                name: "Root"
            }),
            U(t.name, n)
        }
        function Z(e) {
            if (null != e) {
                g = e,
                v = new Map,
                P = new Map,
                h = void 0,
                L = !1;
                var n = new FileReader;
                n.addEventListener("load", function(t) {
                    document.getElementById("upload_box").classList.remove("loading");
                    var n = t.target.result;
                    e.name.endsWith(".class") ? V(n, e) : K(n, e)
                }),
                document.getElementById("upload_box").classList.add("loading"),
                document.getElementById("upload_desc").innerText = t.default.loading,
                n.readAsArrayBuffer(e)
            }
        }
        function G(e, n, r) {
            var a = document.getElementById("upload_desc");
            document.getElementById("upload_box").removeAttribute("x-selected"),
            r ? a.innerHTML = e : a.innerText = e,
            a.style.color = "rgba(231, 76, 60,1.0)",
            setTimeout(function() {
                a.innerHTML = t.default.upload_desc,
                a.style.color = "black"
            }, n)
        }
        function Y(e) {
            try {
                return new URL(e)
            } catch (t) {
                return
            }
        }
        function Q(e, t) {
            if ("META-INF" === e.text)
                return 190;
            var n = 1;
            return void 0 !== e.children && (n += 100),
            n - e.text.localeCompare(t.text)
        }
        function X(e) {
            e.filter(function(e) {
                return e.children
            }).forEach(function(e) {
                return X(e.children)
            }),
            e.sort(function(e, t) {
                var n = Q(e, t)
                  , r = Q(t, e);
                return n === r ? 0 : n < r ? 1 : -1
            })
        }
        function ee(e, t) {
            if (e.innerHTML = "",
            t.sort) {
                (0,
                a.debugTimeStart)("sort"),
                X(t.data.children),
                (0,
                a.debugTimeStop)("sort")
            }
            var n = ie(t.data)
              , r = document.createElement("ol");
            e.classList.add("inspire-tree"),
            t.expandFirstNode && (n.classList.remove("collapsed"),
            n.classList.add("expanded")),
            r.appendChild(n),
            e.appendChild(r),
            ae(e)
        }
        function te(e) {
            return parseInt(e.getAttribute("tabindex"))
        }
        function ne(e) {
            var t, n;
            if ((null === (t = e.target.parentNode) || void 0 === t ? void 0 : null === (n = t.parentNode) || void 0 === n ? void 0 : n.hasAttribute("data-fullpath")) && e.ctrlKey && "ArrowRight" === e.key)
                return document.body.classList.remove("using-mouse"),
                fe(e),
                void document.getElementById("code").focus();
            var r = parseInt(e.target.getAttribute("tabindex"))
              , a = function() {
                return Array.from(document.querySelectorAll(".title[tabindex]")).filter(function(e) {
                    return null !== e.offsetParent
                })
            }
              , o = e.ctrlKey ? 2 : 0;
            switch (e.key) {
            case "Enter":
            case "ArrowLeft":
            case "ArrowRight":
                fe(e);
                break;
            case "ArrowUp":
                var i = a().filter(function(e) {
                    return te(e) < r
                }).sort(function(e, t) {
                    return te(t) - te(e)
                })
                  , c = i[o] || i[0];
                c && c.focus(),
                e.preventDefault();
                break;
            case "ArrowDown":
                var l = a().filter(function(e) {
                    return te(e) > r
                }).sort(function(e, t) {
                    return te(e) - te(t)
                })
                  , s = l[o] || l[l.length - 1];
                s && s.focus(),
                e.preventDefault()
            }
        }
        function re(e) {
            if (e.ctrlKey && "ArrowLeft" === e.key) {
                var t = C();
                if (t) {
                    t.classList.add("return-focus"),
                    t.focus();
                    setTimeout(function() {
                        return t.classList.remove("return-focus")
                    }, 520)
                }
            }
        }
        function ae(e) {
            var t = e.querySelectorAll("li")[0];
            t.addEventListener("click", fe, !1),
            t.addEventListener("keydown", ne, !1)
        }
        var oe = 1;
        function ie(e) {
            var t = e.children && e.children.length > 0
              , r = document.createElement("li");
            r.className = t ? "collapsed folder" : "leaf",
            e.dataAttr && Object.keys(e.dataAttr).forEach(function(t) {
                r.setAttribute("data-".concat(t), e.dataAttr[t])
            });
            var a = document.createElement("div");
            a.class = "title-wrap",
            r.appendChild(a);
            var o = document.createElement("a");
            if (o.innerText = e.text,
            o.className = "title icon " + (t ? "icon-folder" : "icon-file-empty"),
            e.fileSize ? o.setAttribute("title", "".concat(e.text, " (").concat((0,
            n.formatBytes)(e.fileSize), ")")) : o.setAttribute("title", e.text),
            o.setAttribute("tabindex", oe++),
            a.appendChild(o),
            t) {
                var i = document.createElement("ol");
                e.children.forEach(function(e) {
                    i.appendChild(ie(e))
                }),
                r.appendChild(i)
            }
            return r
        }
        function ce(e) {
            if (e.classList.contains("folder")) {
                var t = e.querySelector("a.title");
                e.classList.remove("collapsed"),
                e.classList.add("expanded"),
                t.classList.remove("icon-folder"),
                t.classList.add("icon-folder-open")
            }
        }
        function le(e) {
            if (e.classList.contains("folder")) {
                var t = e.querySelector("a.title");
                e.classList.add("collapsed"),
                e.classList.remove("expanded"),
                t.classList.add("icon-folder"),
                t.classList.remove("icon-folder-open")
            }
        }
        function se(e, t) {
            var n = e.querySelector("a.title");
            e.classList.contains("collapsed") ? ce(e, t) : (e.classList.add("collapsed"),
            e.classList.remove("expanded"),
            n.classList.add("icon-folder"),
            n.classList.remove("icon-folder-open"))
        }
        function de(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = e.querySelector("a.title");
            if (e.classList.contains("folder")) {
                t ? (e.classList.remove("collapsed"),
                e.classList.add("expanded"),
                n.classList.remove("icon-folder"),
                n.classList.add("icon-folder-open")) : (e.classList.add("collapsed"),
                e.classList.remove("expanded"),
                n.classList.add("icon-folder"),
                n.classList.remove("icon-folder-open"));
                var r = e.querySelector("ol");
                Array.from(r.querySelectorAll("li")).forEach(function(e) {
                    return de(e, t)
                })
            }
        }
        function se(e, t) {
            if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || e.classList.contains("collapsed")) {
                if (ce(e),
                t) {
                    var n = e.querySelector("ol");
                    if (!n || n.childNodes.length > 1)
                        return;
                    se(n.querySelector("li"), !0, !0)
                }
            } else if (le(e),
            t) {
                var r = e.querySelector("ol");
                if (!r || r.childNodes.length > 1)
                    return;
                se(r.querySelector("li"), !0, !1)
            }
        }
        function ue() {
            var e = document.getElementById("code");
            e.className = "root",
            e.innerHTML = t.default.root_desc,
            N(),
            D()
        }
        function fe(e) {
            var t = e.target.parentNode.parentNode;
            if (t.classList.contains("folder")) {
                if (t.getAttribute("data-is-root"))
                    return void ue();
                if (e.ctrlKey) {
                    var r = t.classList.contains("collapsed");
                    de(t, r)
                } else
                    se(t, e.shiftKey)
            } else if (t.classList.contains("leaf")) {
                var a = t.getAttribute("data-fullpath");
                (0,
                n.explodePath)(a).fileName;
                U(a, h)
            }
        }
        function me(e) {
            var t = e.split("/");
            if (t.length > 1)
                for (var n = document.querySelector("#tree > ol > li > ol"), r = function() {
                    var e = t.shift()
                      , r = s(n.querySelectorAll(":scope > li.folder")).find(function(t) {
                        return t.querySelector("a.title").innerText === e
                    });
                    if (!r)
                        return "break";
                    ce(r),
                    n = r.querySelector("ol")
                }; n && t.length > 0; ) {
                    if ("break" === r())
                        break
                }
            var a = e.indexOf("$");
            if (a > -1) {
                var o = e.substring(0, a) + ".class";
                h.file(o) && (e = o)
            }
            U(e, h),
            setTimeout(function() {
                var e;
                null === (e = C()) || void 0 === e || e.scrollIntoView({
                    behavior: "auto",
                    block: "center"
                })
            }, 5)
        }
        function pe(e) {
            var t = e.jarFile
              , n = e.path
              , r = e.highlight;
            y = r,
            void 0 === g || t.name !== g.name ? (Z(t),
            b = n) : me(n)
        }
        var ve = "https://leonardosnt.github.io/";
        function he(e) {
            var t = new URL(e.origin).hostname;
            t !== new URL(ve).hostname && t !== location.hostname || ("open" === e.data.action ? pe(e.data) : console.warn("Invalid action received:", e.data.action))
        }
        function ge(e) {
            return ye.apply(this, arguments)
        }
        function ye() {
            return (ye = c(regeneratorRuntime.mark(function e(n) {
                var r, a, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n._loadFromParent) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return document.getElementById("upload_desc").innerText = t.default.loading,
                            e.prev = 3,
                            r = n._loadFromParent,
                            a = r.zipPromise,
                            o = r.fileName,
                            e.next = 7,
                            a;
                        case 7:
                            z(e.sent, {
                                name: o
                            }),
                            e.next = 15;
                            break;
                        case 11:
                            e.prev = 11,
                            e.t0 = e.catch(3),
                            document.getElementById("upload_desc").innerText = "Failed to open jar: ".concat(e.t0),
                            console.error(e.t0);
                        case 15:
                            n._loadFromParent = void 0;
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[3, 11]])
            }))).apply(this, arguments)
        }
        function be() {
            window.addEventListener("message", he);
            var e = window.opener;
            e && ge(e).catch(function(e) {
                return (0,
                a.debugLog)(e)
            }),
            e && -1 !== location.search.indexOf("jse") && e.postMessage("app-ready", "*")
        }
        function Le(e, t, n, r) {
            try {
                "function" == typeof window.ga && (t = t || e,
                window.ga("send", "event", e, t, n, r))
            } catch (a) {
                console.error(a)
            }
        }
        S(),
        document.addEventListener("DOMContentLoaded", function() {
            Le("app-load", "app-load", window.__build__);
            var e = new URL(location.href).searchParams
              , t = e.get("from")
              , n = e.get("file");
            n && (b = n),
            Y(t) && J(t)
        }),
        window.addEventListener("beforeunload", function(e) {
            w && w.close()
        }),
        be(),
        document.getElementById("opened-file").addEventListener("click", function() {
            return Le("download-file")
        });
        var we = document.getElementById("code");
        we.addEventListener("keydown", re),
        window.addEventListener("mousedown", function(e) {
            return document.body.classList.add("using-mouse")
        }),
        window.addEventListener("keydown", function(e) {
            return "Tab" === e.key && document.body.classList.remove("using-mouse")
        }),
        window.__build__ = "cbed419";
    }
    , {
        "regenerator-runtime/runtime": "QVnC",
        "./lang/index.js": "ib74",
        "./utils.js": "FOZT",
        "./vars.js": "JCoI",
        "./debug.js": "n9i2",
        "process": "Phlc"
    }]
}, {}, ["A2T1"], null)

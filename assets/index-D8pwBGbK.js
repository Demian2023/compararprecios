var pf = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var W3 = pf((G3, bi) => {
    (function() {
        const r = document.createElement("link").relList;
        if (r && r.supports && r.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
        new MutationObserver(i => {
            for (const o of i)
                if (o.type === "childList")
                    for (const t of o.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && n(t)
        }).observe(document, { childList: !0, subtree: !0 });

        function a(i) { const o = {}; return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o }

        function n(i) {
            if (i.ep) return;
            i.ep = !0;
            const o = a(i);
            fetch(i.href, o)
        }
    })();

    function mf(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }
    var s0 = { exports: {} },
        Ao = {},
        c0 = { exports: {} },
        F = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var ri = Symbol.for("react.element"),
        hf = Symbol.for("react.portal"),
        gf = Symbol.for("react.fragment"),
        vf = Symbol.for("react.strict_mode"),
        yf = Symbol.for("react.profiler"),
        Lf = Symbol.for("react.provider"),
        Cf = Symbol.for("react.context"),
        xf = Symbol.for("react.forward_ref"),
        Sf = Symbol.for("react.suspense"),
        Af = Symbol.for("react.memo"),
        kf = Symbol.for("react.lazy"),
        bc = Symbol.iterator;

    function wf(e) { return e === null || typeof e != "object" ? null : (e = bc && e[bc] || e["@@iterator"], typeof e == "function" ? e : null) }
    var l0 = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
        u0 = Object.assign,
        d0 = {};

    function rn(e, r, a) { this.props = e, this.context = r, this.refs = d0, this.updater = a || l0 }
    rn.prototype.isReactComponent = {};
    rn.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState")
    };
    rn.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") };

    function f0() {}
    f0.prototype = rn.prototype;

    function Ds(e, r, a) { this.props = e, this.context = r, this.refs = d0, this.updater = a || l0 }
    var Es = Ds.prototype = new f0;
    Es.constructor = Ds;
    u0(Es, rn.prototype);
    Es.isPureReactComponent = !0;
    var $c = Array.isArray,
        p0 = Object.prototype.hasOwnProperty,
        Ys = { current: null },
        m0 = { key: !0, ref: !0, __self: !0, __source: !0 };

    function h0(e, r, a) {
        var n, i = {},
            o = null,
            t = null;
        if (r != null)
            for (n in r.ref !== void 0 && (t = r.ref), r.key !== void 0 && (o = "" + r.key), r) p0.call(r, n) && !m0.hasOwnProperty(n) && (i[n] = r[n]);
        var s = arguments.length - 2;
        if (s === 1) i.children = a;
        else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            i.children = c
        }
        if (e && e.defaultProps)
            for (n in s = e.defaultProps, s) i[n] === void 0 && (i[n] = s[n]);
        return { $$typeof: ri, type: e, key: o, ref: t, props: i, _owner: Ys.current }
    }

    function _f(e, r) { return { $$typeof: ri, type: e.type, key: r, ref: e.ref, props: e.props, _owner: e._owner } }

    function Ts(e) { return typeof e == "object" && e !== null && e.$$typeof === ri }

    function Pf(e) { var r = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function(a) { return r[a] }) }
    var Kc = /\/+/g;

    function Jo(e, r) { return typeof e == "object" && e !== null && e.key != null ? Pf("" + e.key) : r.toString(36) }

    function Yi(e, r, a, n, i) {
        var o = typeof e;
        (o === "undefined" || o === "boolean") && (e = null);
        var t = !1;
        if (e === null) t = !0;
        else switch (o) {
            case "string":
            case "number":
                t = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case ri:
                    case hf:
                        t = !0
                }
        }
        if (t) return t = e, i = i(t), e = n === "" ? "." + Jo(t, 0) : n, $c(i) ? (a = "", e != null && (a = e.replace(Kc, "$&/") + "/"), Yi(i, r, a, "", function(u) { return u })) : i != null && (Ts(i) && (i = _f(i, a + (!i.key || t && t.key === i.key ? "" : ("" + i.key).replace(Kc, "$&/") + "/") + e)), r.push(i)), 1;
        if (t = 0, n = n === "" ? "." : n + ":", $c(e))
            for (var s = 0; s < e.length; s++) {
                o = e[s];
                var c = n + Jo(o, s);
                t += Yi(o, r, a, c, i)
            } else if (c = wf(e), typeof c == "function")
                for (e = c.call(e), s = 0; !(o = e.next()).done;) o = o.value, c = n + Jo(o, s++), t += Yi(o, r, a, c, i);
            else if (o === "object") throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
        return t
    }

    function fi(e, r, a) {
        if (e == null) return e;
        var n = [],
            i = 0;
        return Yi(e, n, "", "", function(o) { return r.call(a, o, i++) }), n
    }

    function Mf(e) {
        if (e._status === -1) {
            var r = e._result;
            r = r(), r.then(function(a) {
                (e._status === 0 || e._status === -1) && (e._status = 1, e._result = a)
            }, function(a) {
                (e._status === 0 || e._status === -1) && (e._status = 2, e._result = a)
            }), e._status === -1 && (e._status = 0, e._result = r)
        }
        if (e._status === 1) return e._result.default;
        throw e._result
    }
    var Ae = { current: null },
        Ti = { transition: null },
        Df = { ReactCurrentDispatcher: Ae, ReactCurrentBatchConfig: Ti, ReactCurrentOwner: Ys };
    F.Children = { map: fi, forEach: function(e, r, a) { fi(e, function() { r.apply(this, arguments) }, a) }, count: function(e) { var r = 0; return fi(e, function() { r++ }), r }, toArray: function(e) { return fi(e, function(r) { return r }) || [] }, only: function(e) { if (!Ts(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } };
    F.Component = rn;
    F.Fragment = gf;
    F.Profiler = yf;
    F.PureComponent = Ds;
    F.StrictMode = vf;
    F.Suspense = Sf;
    F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Df;
    F.cloneElement = function(e, r, a) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var n = u0({}, e.props),
            i = e.key,
            o = e.ref,
            t = e._owner;
        if (r != null) { if (r.ref !== void 0 && (o = r.ref, t = Ys.current), r.key !== void 0 && (i = "" + r.key), e.type && e.type.defaultProps) var s = e.type.defaultProps; for (c in r) p0.call(r, c) && !m0.hasOwnProperty(c) && (n[c] = r[c] === void 0 && s !== void 0 ? s[c] : r[c]) }
        var c = arguments.length - 2;
        if (c === 1) n.children = a;
        else if (1 < c) {
            s = Array(c);
            for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
            n.children = s
        }
        return { $$typeof: ri, type: e.type, key: i, ref: o, props: n, _owner: t }
    };
    F.createContext = function(e) { return e = { $$typeof: Cf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Lf, _context: e }, e.Consumer = e };
    F.createElement = h0;
    F.createFactory = function(e) { var r = h0.bind(null, e); return r.type = e, r };
    F.createRef = function() { return { current: null } };
    F.forwardRef = function(e) { return { $$typeof: xf, render: e } };
    F.isValidElement = Ts;
    F.lazy = function(e) { return { $$typeof: kf, _payload: { _status: -1, _result: e }, _init: Mf } };
    F.memo = function(e, r) { return { $$typeof: Af, type: e, compare: r === void 0 ? null : r } };
    F.startTransition = function(e) {
        var r = Ti.transition;
        Ti.transition = {};
        try { e() } finally { Ti.transition = r }
    };
    F.unstable_act = function() { throw Error("act(...) is not supported in production builds of React.") };
    F.useCallback = function(e, r) { return Ae.current.useCallback(e, r) };
    F.useContext = function(e) { return Ae.current.useContext(e) };
    F.useDebugValue = function() {};
    F.useDeferredValue = function(e) { return Ae.current.useDeferredValue(e) };
    F.useEffect = function(e, r) { return Ae.current.useEffect(e, r) };
    F.useId = function() { return Ae.current.useId() };
    F.useImperativeHandle = function(e, r, a) { return Ae.current.useImperativeHandle(e, r, a) };
    F.useInsertionEffect = function(e, r) { return Ae.current.useInsertionEffect(e, r) };
    F.useLayoutEffect = function(e, r) { return Ae.current.useLayoutEffect(e, r) };
    F.useMemo = function(e, r) { return Ae.current.useMemo(e, r) };
    F.useReducer = function(e, r, a) { return Ae.current.useReducer(e, r, a) };
    F.useRef = function(e) { return Ae.current.useRef(e) };
    F.useState = function(e) { return Ae.current.useState(e) };
    F.useSyncExternalStore = function(e, r, a) { return Ae.current.useSyncExternalStore(e, r, a) };
    F.useTransition = function() { return Ae.current.useTransition() };
    F.version = "18.2.0";
    c0.exports = F;
    var Qe = c0.exports;
    const Ef = mf(Qe);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var Yf = Qe,
        Tf = Symbol.for("react.element"),
        Nf = Symbol.for("react.fragment"),
        Of = Object.prototype.hasOwnProperty,
        zf = Yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        Rf = { key: !0, ref: !0, __self: !0, __source: !0 };

    function g0(e, r, a) {
        var n, i = {},
            o = null,
            t = null;
        a !== void 0 && (o = "" + a), r.key !== void 0 && (o = "" + r.key), r.ref !== void 0 && (t = r.ref);
        for (n in r) Of.call(r, n) && !Rf.hasOwnProperty(n) && (i[n] = r[n]);
        if (e && e.defaultProps)
            for (n in r = e.defaultProps, r) i[n] === void 0 && (i[n] = r[n]);
        return { $$typeof: Tf, type: e, key: o, ref: t, props: i, _owner: zf.current }
    }
    Ao.Fragment = Nf;
    Ao.jsx = g0;
    Ao.jsxs = g0;
    s0.exports = Ao;
    var L = s0.exports,
        Dt = {},
        v0 = { exports: {} },
        ze = {},
        y0 = { exports: {} },
        L0 = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(e) {
        function r(M, N) {
            var z = M.length;
            M.push(N);
            e: for (; 0 < z;) {
                var ne = z - 1 >>> 1,
                    ue = M[ne];
                if (0 < i(ue, N)) M[ne] = N, M[z] = ue, z = ne;
                else break e
            }
        }

        function a(M) { return M.length === 0 ? null : M[0] }

        function n(M) {
            if (M.length === 0) return null;
            var N = M[0],
                z = M.pop();
            if (z !== N) {
                M[0] = z;
                e: for (var ne = 0, ue = M.length, ui = ue >>> 1; ne < ui;) {
                    var na = 2 * (ne + 1) - 1,
                        Xo = M[na],
                        ia = na + 1,
                        di = M[ia];
                    if (0 > i(Xo, z)) ia < ue && 0 > i(di, Xo) ? (M[ne] = di, M[ia] = z, ne = ia) : (M[ne] = Xo, M[na] = z, ne = na);
                    else if (ia < ue && 0 > i(di, z)) M[ne] = di, M[ia] = z, ne = ia;
                    else break e
                }
            }
            return N
        }

        function i(M, N) { var z = M.sortIndex - N.sortIndex; return z !== 0 ? z : M.id - N.id }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var o = performance;
            e.unstable_now = function() { return o.now() }
        } else {
            var t = Date,
                s = t.now();
            e.unstable_now = function() { return t.now() - s }
        }
        var c = [],
            u = [],
            m = 1,
            h = null,
            p = 3,
            C = !1,
            x = !1,
            A = !1,
            k = typeof setTimeout == "function" ? setTimeout : null,
            f = typeof clearTimeout == "function" ? clearTimeout : null,
            l = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function d(M) {
            for (var N = a(u); N !== null;) {
                if (N.callback === null) n(u);
                else if (N.startTime <= M) n(u), N.sortIndex = N.expirationTime, r(c, N);
                else break;
                N = a(u)
            }
        }

        function g(M) {
            if (A = !1, d(M), !x)
                if (a(c) !== null) x = !0, Zo(_);
                else {
                    var N = a(u);
                    N !== null && qo(g, N.startTime - M)
                }
        }

        function _(M, N) {
            x = !1, A && (A = !1, f(T), T = -1), C = !0;
            var z = p;
            try {
                for (d(N), h = a(c); h !== null && (!(h.expirationTime > N) || M && !$e());) {
                    var ne = h.callback;
                    if (typeof ne == "function") {
                        h.callback = null, p = h.priorityLevel;
                        var ue = ne(h.expirationTime <= N);
                        N = e.unstable_now(), typeof ue == "function" ? h.callback = ue : h === a(c) && n(c), d(N)
                    } else n(c);
                    h = a(c)
                }
                if (h !== null) var ui = !0;
                else {
                    var na = a(u);
                    na !== null && qo(g, na.startTime - N), ui = !1
                }
                return ui
            } finally { h = null, p = z, C = !1 }
        }
        var D = !1,
            E = null,
            T = -1,
            ae = 5,
            V = -1;

        function $e() { return !(e.unstable_now() - V < ae) }

        function cn() {
            if (E !== null) {
                var M = e.unstable_now();
                V = M;
                var N = !0;
                try { N = E(!0, M) } finally { N ? ln() : (D = !1, E = null) }
            } else D = !1
        }
        var ln;
        if (typeof l == "function") ln = function() { l(cn) };
        else if (typeof MessageChannel < "u") {
            var Gc = new MessageChannel,
                ff = Gc.port2;
            Gc.port1.onmessage = cn, ln = function() { ff.postMessage(null) }
        } else ln = function() { k(cn, 0) };

        function Zo(M) { E = M, D || (D = !0, ln()) }

        function qo(M, N) { T = k(function() { M(e.unstable_now()) }, N) }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) { M.callback = null }, e.unstable_continueExecution = function() { x || C || (x = !0, Zo(_)) }, e.unstable_forceFrameRate = function(M) { 0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ae = 0 < M ? Math.floor(1e3 / M) : 5 }, e.unstable_getCurrentPriorityLevel = function() { return p }, e.unstable_getFirstCallbackNode = function() { return a(c) }, e.unstable_next = function(M) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var N = 3;
                    break;
                default:
                    N = p
            }
            var z = p;
            p = N;
            try { return M() } finally { p = z }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(M, N) {
            switch (M) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    M = 3
            }
            var z = p;
            p = M;
            try { return N() } finally { p = z }
        }, e.unstable_scheduleCallback = function(M, N, z) {
            var ne = e.unstable_now();
            switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? ne + z : ne) : z = ne, M) {
                case 1:
                    var ue = -1;
                    break;
                case 2:
                    ue = 250;
                    break;
                case 5:
                    ue = 1073741823;
                    break;
                case 4:
                    ue = 1e4;
                    break;
                default:
                    ue = 5e3
            }
            return ue = z + ue, M = { id: m++, callback: N, priorityLevel: M, startTime: z, expirationTime: ue, sortIndex: -1 }, z > ne ? (M.sortIndex = z, r(u, M), a(c) === null && M === a(u) && (A ? (f(T), T = -1) : A = !0, qo(g, z - ne))) : (M.sortIndex = ue, r(c, M), x || C || (x = !0, Zo(_))), M
        }, e.unstable_shouldYield = $e, e.unstable_wrapCallback = function(M) {
            var N = p;
            return function() {
                var z = p;
                p = N;
                try { return M.apply(this, arguments) } finally { p = z }
            }
        }
    })(L0);
    y0.exports = L0;
    var Ff = y0.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var C0 = Qe,
        Oe = Ff;

    function v(e) { for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 1; a < arguments.length; a++) r += "&args[]=" + encodeURIComponent(arguments[a]); return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
    var x0 = new Set,
        On = {};

    function Ca(e, r) { Ka(e, r), Ka(e + "Capture", r) }

    function Ka(e, r) { for (On[e] = r, e = 0; e < r.length; e++) x0.add(r[e]) }
    var _r = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Et = Object.prototype.hasOwnProperty,
        Vf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        Qc = {},
        Zc = {};

    function If(e) { return Et.call(Zc, e) ? !0 : Et.call(Qc, e) ? !1 : Vf.test(e) ? Zc[e] = !0 : (Qc[e] = !0, !1) }

    function jf(e, r, a, n) {
        if (a !== null && a.type === 0) return !1;
        switch (typeof r) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return n ? !1 : a !== null ? !a.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function Uf(e, r, a, n) {
        if (r === null || typeof r > "u" || jf(e, r, a, n)) return !0;
        if (n) return !1;
        if (a !== null) switch (a.type) {
            case 3:
                return !r;
            case 4:
                return r === !1;
            case 5:
                return isNaN(r);
            case 6:
                return isNaN(r) || 1 > r
        }
        return !1
    }

    function ke(e, r, a, n, i, o, t) { this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = a, this.propertyName = e, this.type = r, this.sanitizeURL = o, this.removeEmptyString = t }
    var he = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) { he[e] = new ke(e, 0, !1, e, null, !1, !1) });
    [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var r = e[0];
        he[r] = new ke(r, 1, !1, e[1], null, !1, !1)
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) { he[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1) });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) { he[e] = new ke(e, 2, !1, e, null, !1, !1) });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) { he[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1) });
    ["checked", "multiple", "muted", "selected"].forEach(function(e) { he[e] = new ke(e, 3, !0, e, null, !1, !1) });
    ["capture", "download"].forEach(function(e) { he[e] = new ke(e, 4, !1, e, null, !1, !1) });
    ["cols", "rows", "size", "span"].forEach(function(e) { he[e] = new ke(e, 6, !1, e, null, !1, !1) });
    ["rowSpan", "start"].forEach(function(e) { he[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1) });
    var Ns = /[\-:]([a-z])/g;

    function Os(e) { return e[1].toUpperCase() }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var r = e.replace(Ns, Os);
        he[r] = new ke(r, 1, !1, e, null, !1, !1)
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var r = e.replace(Ns, Os);
        he[r] = new ke(r, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var r = e.replace(Ns, Os);
        he[r] = new ke(r, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    });
    ["tabIndex", "crossOrigin"].forEach(function(e) { he[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1) });
    he.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    ["src", "href", "action", "formAction"].forEach(function(e) { he[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0) });

    function zs(e, r, a, n) {
        var i = he.hasOwnProperty(r) ? he[r] : null;
        (i !== null ? i.type !== 0 : n || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Uf(r, a, i, n) && (a = null), n || i === null ? If(r) && (a === null ? e.removeAttribute(r) : e.setAttribute(r, "" + a)) : i.mustUseProperty ? e[i.propertyName] = a === null ? i.type === 3 ? !1 : "" : a : (r = i.attributeName, n = i.attributeNamespace, a === null ? e.removeAttribute(r) : (i = i.type, a = i === 3 || i === 4 && a === !0 ? "" : "" + a, n ? e.setAttributeNS(n, r, a) : e.setAttribute(r, a))))
    }
    var Yr = C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        pi = Symbol.for("react.element"),
        _a = Symbol.for("react.portal"),
        Pa = Symbol.for("react.fragment"),
        Rs = Symbol.for("react.strict_mode"),
        Yt = Symbol.for("react.profiler"),
        S0 = Symbol.for("react.provider"),
        A0 = Symbol.for("react.context"),
        Fs = Symbol.for("react.forward_ref"),
        Tt = Symbol.for("react.suspense"),
        Nt = Symbol.for("react.suspense_list"),
        Vs = Symbol.for("react.memo"),
        zr = Symbol.for("react.lazy"),
        k0 = Symbol.for("react.offscreen"),
        qc = Symbol.iterator;

    function un(e) { return e === null || typeof e != "object" ? null : (e = qc && e[qc] || e["@@iterator"], typeof e == "function" ? e : null) }
    var ee = Object.assign,
        et;

    function Cn(e) {
        if (et === void 0) try { throw Error() } catch (a) {
            var r = a.stack.trim().match(/\n( *(at )?)/);
            et = r && r[1] || ""
        }
        return `
` + et + e
    }
    var rt = !1;

    function at(e, r) {
        if (!e || rt) return "";
        rt = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (r)
                if (r = function() { throw Error() }, Object.defineProperty(r.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) {
                    try { Reflect.construct(r, []) } catch (u) { var n = u }
                    Reflect.construct(e, [], r)
                } else {
                    try { r.call() } catch (u) { n = u }
                    e.call(r.prototype)
                }
            else {
                try { throw Error() } catch (u) { n = u }
                e()
            }
        } catch (u) {
            if (u && n && typeof u.stack == "string") {
                for (var i = u.stack.split(`
`), o = n.stack.split(`
`), t = i.length - 1, s = o.length - 1; 1 <= t && 0 <= s && i[t] !== o[s];) s--;
                for (; 1 <= t && 0 <= s; t--, s--)
                    if (i[t] !== o[s]) {
                        if (t !== 1 || s !== 1)
                            do
                                if (t--, s--, 0 > s || i[t] !== o[s]) { var c = `
` + i[t].replace(" at new ", " at "); return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c }
                        while (1 <= t && 0 <= s);
                        break
                    }
            }
        } finally { rt = !1, Error.prepareStackTrace = a }
        return (e = e ? e.displayName || e.name : "") ? Cn(e) : ""
    }

    function Bf(e) {
        switch (e.tag) {
            case 5:
                return Cn(e.type);
            case 16:
                return Cn("Lazy");
            case 13:
                return Cn("Suspense");
            case 19:
                return Cn("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = at(e.type, !1), e;
            case 11:
                return e = at(e.type.render, !1), e;
            case 1:
                return e = at(e.type, !0), e;
            default:
                return ""
        }
    }

    function Ot(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case Pa:
                return "Fragment";
            case _a:
                return "Portal";
            case Yt:
                return "Profiler";
            case Rs:
                return "StrictMode";
            case Tt:
                return "Suspense";
            case Nt:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case A0:
                return (e.displayName || "Context") + ".Consumer";
            case S0:
                return (e._context.displayName || "Context") + ".Provider";
            case Fs:
                var r = e.render;
                return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Vs:
                return r = e.displayName || null, r !== null ? r : Ot(e.type) || "Memo";
            case zr:
                r = e._payload, e = e._init;
                try { return Ot(e(r)) } catch {}
        }
        return null
    }

    function Wf(e) {
        var r = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (r.displayName || "Context") + ".Consumer";
            case 10:
                return (r._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = r.render, e = e.displayName || e.name || "", r.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return r;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return Ot(r);
            case 8:
                return r === Rs ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof r == "function") return r.displayName || r.name || null;
                if (typeof r == "string") return r
        }
        return null
    }

    function Xr(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function w0(e) { var r = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (r === "checkbox" || r === "radio") }

    function Hf(e) {
        var r = w0(e) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(e.constructor.prototype, r),
            n = "" + e[r];
        if (!e.hasOwnProperty(r) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var i = a.get,
                o = a.set;
            return Object.defineProperty(e, r, { configurable: !0, get: function() { return i.call(this) }, set: function(t) { n = "" + t, o.call(this, t) } }), Object.defineProperty(e, r, { enumerable: a.enumerable }), { getValue: function() { return n }, setValue: function(t) { n = "" + t }, stopTracking: function() { e._valueTracker = null, delete e[r] } }
        }
    }

    function mi(e) { e._valueTracker || (e._valueTracker = Hf(e)) }

    function _0(e) {
        if (!e) return !1;
        var r = e._valueTracker;
        if (!r) return !0;
        var a = r.getValue(),
            n = "";
        return e && (n = w0(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== a ? (r.setValue(e), !0) : !1
    }

    function $i(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null; try { return e.activeElement || e.body } catch { return e.body } }

    function zt(e, r) { var a = r.checked; return ee({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: a ? a : e._wrapperState.initialChecked }) }

    function Xc(e, r) {
        var a = r.defaultValue == null ? "" : r.defaultValue,
            n = r.checked != null ? r.checked : r.defaultChecked;
        a = Xr(r.value != null ? r.value : a), e._wrapperState = { initialChecked: n, initialValue: a, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null }
    }

    function P0(e, r) { r = r.checked, r != null && zs(e, "checked", r, !1) }

    function Rt(e, r) {
        P0(e, r);
        var a = Xr(r.value),
            n = r.type;
        if (a != null) n === "number" ? (a === 0 && e.value === "" || e.value != a) && (e.value = "" + a) : e.value !== "" + a && (e.value = "" + a);
        else if (n === "submit" || n === "reset") { e.removeAttribute("value"); return }
        r.hasOwnProperty("value") ? Ft(e, r.type, a) : r.hasOwnProperty("defaultValue") && Ft(e, r.type, Xr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (e.defaultChecked = !!r.defaultChecked)
    }

    function Jc(e, r, a) {
        if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
            var n = r.type;
            if (!(n !== "submit" && n !== "reset" || r.value !== void 0 && r.value !== null)) return;
            r = "" + e._wrapperState.initialValue, a || r === e.value || (e.value = r), e.defaultValue = r
        }
        a = e.name, a !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, a !== "" && (e.name = a)
    }

    function Ft(e, r, a) {
        (r !== "number" || $i(e.ownerDocument) !== e) && (a == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + a && (e.defaultValue = "" + a))
    }
    var xn = Array.isArray;

    function Ia(e, r, a, n) {
        if (e = e.options, r) { r = {}; for (var i = 0; i < a.length; i++) r["$" + a[i]] = !0; for (a = 0; a < e.length; a++) i = r.hasOwnProperty("$" + e[a].value), e[a].selected !== i && (e[a].selected = i), i && n && (e[a].defaultSelected = !0) } else {
            for (a = "" + Xr(a), r = null, i = 0; i < e.length; i++) {
                if (e[i].value === a) { e[i].selected = !0, n && (e[i].defaultSelected = !0); return }
                r !== null || e[i].disabled || (r = e[i])
            }
            r !== null && (r.selected = !0)
        }
    }

    function Vt(e, r) { if (r.dangerouslySetInnerHTML != null) throw Error(v(91)); return ee({}, r, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

    function el(e, r) {
        var a = r.value;
        if (a == null) {
            if (a = r.children, r = r.defaultValue, a != null) {
                if (r != null) throw Error(v(92));
                if (xn(a)) {
                    if (1 < a.length) throw Error(v(93));
                    a = a[0]
                }
                r = a
            }
            r == null && (r = ""), a = r
        }
        e._wrapperState = { initialValue: Xr(a) }
    }

    function M0(e, r) {
        var a = Xr(r.value),
            n = Xr(r.defaultValue);
        a != null && (a = "" + a, a !== e.value && (e.value = a), r.defaultValue == null && e.defaultValue !== a && (e.defaultValue = a)), n != null && (e.defaultValue = "" + n)
    }

    function rl(e) {
        var r = e.textContent;
        r === e._wrapperState.initialValue && r !== "" && r !== null && (e.value = r)
    }

    function D0(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function It(e, r) { return e == null || e === "http://www.w3.org/1999/xhtml" ? D0(r) : e === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e }
    var hi, E0 = function(e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, a, n, i) { MSApp.execUnsafeLocalFunction(function() { return e(r, a, n, i) }) } : e }(function(e, r) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = r;
        else { for (hi = hi || document.createElement("div"), hi.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = hi.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; r.firstChild;) e.appendChild(r.firstChild) }
    });

    function zn(e, r) {
        if (r) { var a = e.firstChild; if (a && a === e.lastChild && a.nodeType === 3) { a.nodeValue = r; return } }
        e.textContent = r
    }
    var kn = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
        Gf = ["Webkit", "ms", "Moz", "O"];
    Object.keys(kn).forEach(function(e) { Gf.forEach(function(r) { r = r + e.charAt(0).toUpperCase() + e.substring(1), kn[r] = kn[e] }) });

    function Y0(e, r, a) { return r == null || typeof r == "boolean" || r === "" ? "" : a || typeof r != "number" || r === 0 || kn.hasOwnProperty(e) && kn[e] ? ("" + r).trim() : r + "px" }

    function T0(e, r) {
        e = e.style;
        for (var a in r)
            if (r.hasOwnProperty(a)) {
                var n = a.indexOf("--") === 0,
                    i = Y0(a, r[a], n);
                a === "float" && (a = "cssFloat"), n ? e.setProperty(a, i) : e[a] = i
            }
    }
    var bf = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

    function jt(e, r) { if (r) { if (bf[e] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(v(137, e)); if (r.dangerouslySetInnerHTML != null) { if (r.children != null) throw Error(v(60)); if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(v(61)) } if (r.style != null && typeof r.style != "object") throw Error(v(62)) } }

    function Ut(e, r) {
        if (e.indexOf("-") === -1) return typeof r.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var Bt = null;

    function Is(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e }
    var Wt = null,
        ja = null,
        Ua = null;

    function al(e) {
        if (e = ii(e)) {
            if (typeof Wt != "function") throw Error(v(280));
            var r = e.stateNode;
            r && (r = Mo(r), Wt(e.stateNode, e.type, r))
        }
    }

    function N0(e) { ja ? Ua ? Ua.push(e) : Ua = [e] : ja = e }

    function O0() {
        if (ja) {
            var e = ja,
                r = Ua;
            if (Ua = ja = null, al(e), r)
                for (e = 0; e < r.length; e++) al(r[e])
        }
    }

    function z0(e, r) { return e(r) }

    function R0() {}
    var nt = !1;

    function F0(e, r, a) {
        if (nt) return e(r, a);
        nt = !0;
        try { return z0(e, r, a) } finally { nt = !1, (ja !== null || Ua !== null) && (R0(), O0()) }
    }

    function Rn(e, r) {
        var a = e.stateNode;
        if (a === null) return null;
        var n = Mo(a);
        if (n === null) return null;
        a = n[r];
        e: switch (r) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (a && typeof a != "function") throw Error(v(231, r, typeof a));
        return a
    }
    var Ht = !1;
    if (_r) try {
        var dn = {};
        Object.defineProperty(dn, "passive", { get: function() { Ht = !0 } }), window.addEventListener("test", dn, dn), window.removeEventListener("test", dn, dn)
    } catch { Ht = !1 }

    function $f(e, r, a, n, i, o, t, s, c) { var u = Array.prototype.slice.call(arguments, 3); try { r.apply(a, u) } catch (m) { this.onError(m) } }
    var wn = !1,
        Ki = null,
        Qi = !1,
        Gt = null,
        Kf = { onError: function(e) { wn = !0, Ki = e } };

    function Qf(e, r, a, n, i, o, t, s, c) { wn = !1, Ki = null, $f.apply(Kf, arguments) }

    function Zf(e, r, a, n, i, o, t, s, c) {
        if (Qf.apply(this, arguments), wn) {
            if (wn) {
                var u = Ki;
                wn = !1, Ki = null
            } else throw Error(v(198));
            Qi || (Qi = !0, Gt = u)
        }
    }

    function xa(e) {
        var r = e,
            a = e;
        if (e.alternate)
            for (; r.return;) r = r.return;
        else {
            e = r;
            do r = e, r.flags & 4098 && (a = r.return), e = r.return; while (e)
        }
        return r.tag === 3 ? a : null
    }

    function V0(e) { if (e.tag === 13) { var r = e.memoizedState; if (r === null && (e = e.alternate, e !== null && (r = e.memoizedState)), r !== null) return r.dehydrated } return null }

    function nl(e) { if (xa(e) !== e) throw Error(v(188)) }

    function qf(e) {
        var r = e.alternate;
        if (!r) { if (r = xa(e), r === null) throw Error(v(188)); return r !== e ? null : e }
        for (var a = e, n = r;;) {
            var i = a.return;
            if (i === null) break;
            var o = i.alternate;
            if (o === null) { if (n = i.return, n !== null) { a = n; continue } break }
            if (i.child === o.child) {
                for (o = i.child; o;) {
                    if (o === a) return nl(i), e;
                    if (o === n) return nl(i), r;
                    o = o.sibling
                }
                throw Error(v(188))
            }
            if (a.return !== n.return) a = i, n = o;
            else {
                for (var t = !1, s = i.child; s;) {
                    if (s === a) { t = !0, a = i, n = o; break }
                    if (s === n) { t = !0, n = i, a = o; break }
                    s = s.sibling
                }
                if (!t) {
                    for (s = o.child; s;) {
                        if (s === a) { t = !0, a = o, n = i; break }
                        if (s === n) { t = !0, n = o, a = i; break }
                        s = s.sibling
                    }
                    if (!t) throw Error(v(189))
                }
            }
            if (a.alternate !== n) throw Error(v(190))
        }
        if (a.tag !== 3) throw Error(v(188));
        return a.stateNode.current === a ? e : r
    }

    function I0(e) { return e = qf(e), e !== null ? j0(e) : null }

    function j0(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var r = j0(e);
            if (r !== null) return r;
            e = e.sibling
        }
        return null
    }
    var U0 = Oe.unstable_scheduleCallback,
        il = Oe.unstable_cancelCallback,
        Xf = Oe.unstable_shouldYield,
        Jf = Oe.unstable_requestPaint,
        oe = Oe.unstable_now,
        e2 = Oe.unstable_getCurrentPriorityLevel,
        js = Oe.unstable_ImmediatePriority,
        B0 = Oe.unstable_UserBlockingPriority,
        Zi = Oe.unstable_NormalPriority,
        r2 = Oe.unstable_LowPriority,
        W0 = Oe.unstable_IdlePriority,
        ko = null,
        ur = null;

    function a2(e) { if (ur && typeof ur.onCommitFiberRoot == "function") try { ur.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128) } catch {} }
    var er = Math.clz32 ? Math.clz32 : o2,
        n2 = Math.log,
        i2 = Math.LN2;

    function o2(e) { return e >>>= 0, e === 0 ? 32 : 31 - (n2(e) / i2 | 0) | 0 }
    var gi = 64,
        vi = 4194304;

    function Sn(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function qi(e, r) {
        var a = e.pendingLanes;
        if (a === 0) return 0;
        var n = 0,
            i = e.suspendedLanes,
            o = e.pingedLanes,
            t = a & 268435455;
        if (t !== 0) {
            var s = t & ~i;
            s !== 0 ? n = Sn(s) : (o &= t, o !== 0 && (n = Sn(o)))
        } else t = a & ~i, t !== 0 ? n = Sn(t) : o !== 0 && (n = Sn(o));
        if (n === 0) return 0;
        if (r !== 0 && r !== n && !(r & i) && (i = n & -n, o = r & -r, i >= o || i === 16 && (o & 4194240) !== 0)) return r;
        if (n & 4 && (n |= a & 16), r = e.entangledLanes, r !== 0)
            for (e = e.entanglements, r &= n; 0 < r;) a = 31 - er(r), i = 1 << a, n |= e[a], r &= ~i;
        return n
    }

    function t2(e, r) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return r + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return r + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function s2(e, r) {
        for (var a = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
            var t = 31 - er(o),
                s = 1 << t,
                c = i[t];
            c === -1 ? (!(s & a) || s & n) && (i[t] = t2(s, r)) : c <= r && (e.expiredLanes |= s), o &= ~s
        }
    }

    function bt(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0 }

    function H0() { var e = gi; return gi <<= 1, !(gi & 4194240) && (gi = 64), e }

    function it(e) { for (var r = [], a = 0; 31 > a; a++) r.push(e); return r }

    function ai(e, r, a) { e.pendingLanes |= r, r !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, r = 31 - er(r), e[r] = a }

    function c2(e, r) {
        var a = e.pendingLanes & ~r;
        e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= r, e.mutableReadLanes &= r, e.entangledLanes &= r, r = e.entanglements;
        var n = e.eventTimes;
        for (e = e.expirationTimes; 0 < a;) {
            var i = 31 - er(a),
                o = 1 << i;
            r[i] = 0, n[i] = -1, e[i] = -1, a &= ~o
        }
    }

    function Us(e, r) {
        var a = e.entangledLanes |= r;
        for (e = e.entanglements; a;) {
            var n = 31 - er(a),
                i = 1 << n;
            i & r | e[n] & r && (e[n] |= r), a &= ~i
        }
    }
    var W = 0;

    function G0(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1 }
    var b0, Bs, $0, K0, Q0, $t = !1,
        yi = [],
        Wr = null,
        Hr = null,
        Gr = null,
        Fn = new Map,
        Vn = new Map,
        Fr = [],
        l2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function ol(e, r) {
        switch (e) {
            case "focusin":
            case "focusout":
                Wr = null;
                break;
            case "dragenter":
            case "dragleave":
                Hr = null;
                break;
            case "mouseover":
            case "mouseout":
                Gr = null;
                break;
            case "pointerover":
            case "pointerout":
                Fn.delete(r.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Vn.delete(r.pointerId)
        }
    }

    function fn(e, r, a, n, i, o) { return e === null || e.nativeEvent !== o ? (e = { blockedOn: r, domEventName: a, eventSystemFlags: n, nativeEvent: o, targetContainers: [i] }, r !== null && (r = ii(r), r !== null && Bs(r)), e) : (e.eventSystemFlags |= n, r = e.targetContainers, i !== null && r.indexOf(i) === -1 && r.push(i), e) }

    function u2(e, r, a, n, i) {
        switch (r) {
            case "focusin":
                return Wr = fn(Wr, e, r, a, n, i), !0;
            case "dragenter":
                return Hr = fn(Hr, e, r, a, n, i), !0;
            case "mouseover":
                return Gr = fn(Gr, e, r, a, n, i), !0;
            case "pointerover":
                var o = i.pointerId;
                return Fn.set(o, fn(Fn.get(o) || null, e, r, a, n, i)), !0;
            case "gotpointercapture":
                return o = i.pointerId, Vn.set(o, fn(Vn.get(o) || null, e, r, a, n, i)), !0
        }
        return !1
    }

    function Z0(e) {
        var r = ca(e.target);
        if (r !== null) { var a = xa(r); if (a !== null) { if (r = a.tag, r === 13) { if (r = V0(a), r !== null) { e.blockedOn = r, Q0(e.priority, function() { $0(a) }); return } } else if (r === 3 && a.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null; return } } }
        e.blockedOn = null
    }

    function Ni(e) {
        if (e.blockedOn !== null) return !1;
        for (var r = e.targetContainers; 0 < r.length;) {
            var a = Kt(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var n = new a.constructor(a.type, a);
                Bt = n, a.target.dispatchEvent(n), Bt = null
            } else return r = ii(a), r !== null && Bs(r), e.blockedOn = a, !1;
            r.shift()
        }
        return !0
    }

    function tl(e, r, a) { Ni(e) && a.delete(r) }

    function d2() { $t = !1, Wr !== null && Ni(Wr) && (Wr = null), Hr !== null && Ni(Hr) && (Hr = null), Gr !== null && Ni(Gr) && (Gr = null), Fn.forEach(tl), Vn.forEach(tl) }

    function pn(e, r) { e.blockedOn === r && (e.blockedOn = null, $t || ($t = !0, Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, d2))) }

    function In(e) {
        function r(i) { return pn(i, e) }
        if (0 < yi.length) {
            pn(yi[0], e);
            for (var a = 1; a < yi.length; a++) {
                var n = yi[a];
                n.blockedOn === e && (n.blockedOn = null)
            }
        }
        for (Wr !== null && pn(Wr, e), Hr !== null && pn(Hr, e), Gr !== null && pn(Gr, e), Fn.forEach(r), Vn.forEach(r), a = 0; a < Fr.length; a++) n = Fr[a], n.blockedOn === e && (n.blockedOn = null);
        for (; 0 < Fr.length && (a = Fr[0], a.blockedOn === null);) Z0(a), a.blockedOn === null && Fr.shift()
    }
    var Ba = Yr.ReactCurrentBatchConfig,
        Xi = !0;

    function f2(e, r, a, n) {
        var i = W,
            o = Ba.transition;
        Ba.transition = null;
        try { W = 1, Ws(e, r, a, n) } finally { W = i, Ba.transition = o }
    }

    function p2(e, r, a, n) {
        var i = W,
            o = Ba.transition;
        Ba.transition = null;
        try { W = 4, Ws(e, r, a, n) } finally { W = i, Ba.transition = o }
    }

    function Ws(e, r, a, n) {
        if (Xi) {
            var i = Kt(e, r, a, n);
            if (i === null) mt(e, r, n, Ji, a), ol(e, n);
            else if (u2(i, e, r, a, n)) n.stopPropagation();
            else if (ol(e, n), r & 4 && -1 < l2.indexOf(e)) {
                for (; i !== null;) {
                    var o = ii(i);
                    if (o !== null && b0(o), o = Kt(e, r, a, n), o === null && mt(e, r, n, Ji, a), o === i) break;
                    i = o
                }
                i !== null && n.stopPropagation()
            } else mt(e, r, n, null, a)
        }
    }
    var Ji = null;

    function Kt(e, r, a, n) {
        if (Ji = null, e = Is(n), e = ca(e), e !== null)
            if (r = xa(e), r === null) e = null;
            else if (a = r.tag, a === 13) {
            if (e = V0(r), e !== null) return e;
            e = null
        } else if (a === 3) {
            if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
            e = null
        } else r !== e && (e = null);
        return Ji = e, null
    }

    function q0(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (e2()) {
                    case js:
                        return 1;
                    case B0:
                        return 4;
                    case Zi:
                    case r2:
                        return 16;
                    case W0:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Ir = null,
        Hs = null,
        Oi = null;

    function X0() {
        if (Oi) return Oi;
        var e, r = Hs,
            a = r.length,
            n, i = "value" in Ir ? Ir.value : Ir.textContent,
            o = i.length;
        for (e = 0; e < a && r[e] === i[e]; e++);
        var t = a - e;
        for (n = 1; n <= t && r[a - n] === i[o - n]; n++);
        return Oi = i.slice(e, 1 < n ? 1 - n : void 0)
    }

    function zi(e) { var r = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && r === 13 && (e = 13)) : e = r, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 }

    function Li() { return !0 }

    function sl() { return !1 }

    function Re(e) {
        function r(a, n, i, o, t) { this._reactName = a, this._targetInst = i, this.type = n, this.nativeEvent = o, this.target = t, this.currentTarget = null; for (var s in e) e.hasOwnProperty(s) && (a = e[s], this[s] = a ? a(o) : o[s]); return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Li : sl, this.isPropagationStopped = sl, this }
        return ee(r.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Li)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Li)
            },
            persist: function() {},
            isPersistent: Li
        }), r
    }
    var an = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
        Gs = Re(an),
        ni = ee({}, an, { view: 0, detail: 0 }),
        m2 = Re(ni),
        ot, tt, mn, wo = ee({}, ni, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: bs, button: 0, buttons: 0, relatedTarget: function(e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== mn && (mn && e.type === "mousemove" ? (ot = e.screenX - mn.screenX, tt = e.screenY - mn.screenY) : tt = ot = 0, mn = e), ot) }, movementY: function(e) { return "movementY" in e ? e.movementY : tt } }),
        cl = Re(wo),
        h2 = ee({}, wo, { dataTransfer: 0 }),
        g2 = Re(h2),
        v2 = ee({}, ni, { relatedTarget: 0 }),
        st = Re(v2),
        y2 = ee({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        L2 = Re(y2),
        C2 = ee({}, an, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
        x2 = Re(C2),
        S2 = ee({}, an, { data: 0 }),
        ll = Re(S2),
        A2 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
        k2 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
        w2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

    function _2(e) { var r = this.nativeEvent; return r.getModifierState ? r.getModifierState(e) : (e = w2[e]) ? !!r[e] : !1 }

    function bs() { return _2 }
    var P2 = ee({}, ni, { key: function(e) { if (e.key) { var r = A2[e.key] || e.key; if (r !== "Unidentified") return r } return e.type === "keypress" ? (e = zi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? k2[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: bs, charCode: function(e) { return e.type === "keypress" ? zi(e) : 0 }, keyCode: function(e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function(e) { return e.type === "keypress" ? zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }),
        M2 = Re(P2),
        D2 = ee({}, wo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
        ul = Re(D2),
        E2 = ee({}, ni, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: bs }),
        Y2 = Re(E2),
        T2 = ee({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        N2 = Re(T2),
        O2 = ee({}, wo, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
        z2 = Re(O2),
        R2 = [9, 13, 27, 32],
        $s = _r && "CompositionEvent" in window,
        _n = null;
    _r && "documentMode" in document && (_n = document.documentMode);
    var F2 = _r && "TextEvent" in window && !_n,
        J0 = _r && (!$s || _n && 8 < _n && 11 >= _n),
        dl = " ",
        fl = !1;

    function eu(e, r) {
        switch (e) {
            case "keyup":
                return R2.indexOf(r.keyCode) !== -1;
            case "keydown":
                return r.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function ru(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null }
    var Ma = !1;

    function V2(e, r) {
        switch (e) {
            case "compositionend":
                return ru(r);
            case "keypress":
                return r.which !== 32 ? null : (fl = !0, dl);
            case "textInput":
                return e = r.data, e === dl && fl ? null : e;
            default:
                return null
        }
    }

    function I2(e, r) {
        if (Ma) return e === "compositionend" || !$s && eu(e, r) ? (e = X0(), Oi = Hs = Ir = null, Ma = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) { if (r.char && 1 < r.char.length) return r.char; if (r.which) return String.fromCharCode(r.which) }
                return null;
            case "compositionend":
                return J0 && r.locale !== "ko" ? null : r.data;
            default:
                return null
        }
    }
    var j2 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

    function pl(e) { var r = e && e.nodeName && e.nodeName.toLowerCase(); return r === "input" ? !!j2[e.type] : r === "textarea" }

    function au(e, r, a, n) { N0(n), r = eo(r, "onChange"), 0 < r.length && (a = new Gs("onChange", "change", null, a, n), e.push({ event: a, listeners: r })) }
    var Pn = null,
        jn = null;

    function U2(e) { pu(e, 0) }

    function _o(e) { var r = Ya(e); if (_0(r)) return e }

    function B2(e, r) { if (e === "change") return r }
    var nu = !1;
    if (_r) {
        var ct;
        if (_r) {
            var lt = "oninput" in document;
            if (!lt) {
                var ml = document.createElement("div");
                ml.setAttribute("oninput", "return;"), lt = typeof ml.oninput == "function"
            }
            ct = lt
        } else ct = !1;
        nu = ct && (!document.documentMode || 9 < document.documentMode)
    }

    function hl() { Pn && (Pn.detachEvent("onpropertychange", iu), jn = Pn = null) }

    function iu(e) {
        if (e.propertyName === "value" && _o(jn)) {
            var r = [];
            au(r, jn, e, Is(e)), F0(U2, r)
        }
    }

    function W2(e, r, a) { e === "focusin" ? (hl(), Pn = r, jn = a, Pn.attachEvent("onpropertychange", iu)) : e === "focusout" && hl() }

    function H2(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return _o(jn) }

    function G2(e, r) { if (e === "click") return _o(r) }

    function b2(e, r) { if (e === "input" || e === "change") return _o(r) }

    function $2(e, r) { return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r }
    var ar = typeof Object.is == "function" ? Object.is : $2;

    function Un(e, r) {
        if (ar(e, r)) return !0;
        if (typeof e != "object" || e === null || typeof r != "object" || r === null) return !1;
        var a = Object.keys(e),
            n = Object.keys(r);
        if (a.length !== n.length) return !1;
        for (n = 0; n < a.length; n++) { var i = a[n]; if (!Et.call(r, i) || !ar(e[i], r[i])) return !1 }
        return !0
    }

    function gl(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

    function vl(e, r) {
        var a = gl(e);
        e = 0;
        for (var n; a;) {
            if (a.nodeType === 3) {
                if (n = e + a.textContent.length, e <= r && n >= r) return { node: a, offset: r - e };
                e = n
            }
            e: {
                for (; a;) {
                    if (a.nextSibling) { a = a.nextSibling; break e }
                    a = a.parentNode
                }
                a = void 0
            }
            a = gl(a)
        }
    }

    function ou(e, r) { return e && r ? e === r ? !0 : e && e.nodeType === 3 ? !1 : r && r.nodeType === 3 ? ou(e, r.parentNode) : "contains" in e ? e.contains(r) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(r) & 16) : !1 : !1 }

    function tu() {
        for (var e = window, r = $i(); r instanceof e.HTMLIFrameElement;) {
            try { var a = typeof r.contentWindow.location.href == "string" } catch { a = !1 }
            if (a) e = r.contentWindow;
            else break;
            r = $i(e.document)
        }
        return r
    }

    function Ks(e) { var r = e && e.nodeName && e.nodeName.toLowerCase(); return r && (r === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || r === "textarea" || e.contentEditable === "true") }

    function K2(e) {
        var r = tu(),
            a = e.focusedElem,
            n = e.selectionRange;
        if (r !== a && a && a.ownerDocument && ou(a.ownerDocument.documentElement, a)) {
            if (n !== null && Ks(a)) {
                if (r = n.start, e = n.end, e === void 0 && (e = r), "selectionStart" in a) a.selectionStart = r, a.selectionEnd = Math.min(e, a.value.length);
                else if (e = (r = a.ownerDocument || document) && r.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var i = a.textContent.length,
                        o = Math.min(n.start, i);
                    n = n.end === void 0 ? o : Math.min(n.end, i), !e.extend && o > n && (i = n, n = o, o = i), i = vl(a, o);
                    var t = vl(a, n);
                    i && t && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== t.node || e.focusOffset !== t.offset) && (r = r.createRange(), r.setStart(i.node, i.offset), e.removeAllRanges(), o > n ? (e.addRange(r), e.extend(t.node, t.offset)) : (r.setEnd(t.node, t.offset), e.addRange(r)))
                }
            }
            for (r = [], e = a; e = e.parentNode;) e.nodeType === 1 && r.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (typeof a.focus == "function" && a.focus(), a = 0; a < r.length; a++) e = r[a], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var Q2 = _r && "documentMode" in document && 11 >= document.documentMode,
        Da = null,
        Qt = null,
        Mn = null,
        Zt = !1;

    function yl(e, r, a) {
        var n = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Zt || Da == null || Da !== $i(n) || (n = Da, "selectionStart" in n && Ks(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Mn && Un(Mn, n) || (Mn = n, n = eo(Qt, "onSelect"), 0 < n.length && (r = new Gs("onSelect", "select", null, r, a), e.push({ event: r, listeners: n }), r.target = Da)))
    }

    function Ci(e, r) { var a = {}; return a[e.toLowerCase()] = r.toLowerCase(), a["Webkit" + e] = "webkit" + r, a["Moz" + e] = "moz" + r, a }
    var Ea = { animationend: Ci("Animation", "AnimationEnd"), animationiteration: Ci("Animation", "AnimationIteration"), animationstart: Ci("Animation", "AnimationStart"), transitionend: Ci("Transition", "TransitionEnd") },
        ut = {},
        su = {};
    _r && (su = document.createElement("div").style, "AnimationEvent" in window || (delete Ea.animationend.animation, delete Ea.animationiteration.animation, delete Ea.animationstart.animation), "TransitionEvent" in window || delete Ea.transitionend.transition);

    function Po(e) {
        if (ut[e]) return ut[e];
        if (!Ea[e]) return e;
        var r = Ea[e],
            a;
        for (a in r)
            if (r.hasOwnProperty(a) && a in su) return ut[e] = r[a];
        return e
    }
    var cu = Po("animationend"),
        lu = Po("animationiteration"),
        uu = Po("animationstart"),
        du = Po("transitionend"),
        fu = new Map,
        Ll = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function ea(e, r) { fu.set(e, r), Ca(r, [e]) }
    for (var dt = 0; dt < Ll.length; dt++) {
        var ft = Ll[dt],
            Z2 = ft.toLowerCase(),
            q2 = ft[0].toUpperCase() + ft.slice(1);
        ea(Z2, "on" + q2)
    }
    ea(cu, "onAnimationEnd");
    ea(lu, "onAnimationIteration");
    ea(uu, "onAnimationStart");
    ea("dblclick", "onDoubleClick");
    ea("focusin", "onFocus");
    ea("focusout", "onBlur");
    ea(du, "onTransitionEnd");
    Ka("onMouseEnter", ["mouseout", "mouseover"]);
    Ka("onMouseLeave", ["mouseout", "mouseover"]);
    Ka("onPointerEnter", ["pointerout", "pointerover"]);
    Ka("onPointerLeave", ["pointerout", "pointerover"]);
    Ca("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Ca("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Ca("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    Ca("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Ca("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Ca("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        X2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));

    function Cl(e, r, a) {
        var n = e.type || "unknown-event";
        e.currentTarget = a, Zf(n, r, void 0, e), e.currentTarget = null
    }

    function pu(e, r) {
        r = (r & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var n = e[a],
                i = n.event;
            n = n.listeners;
            e: {
                var o = void 0;
                if (r)
                    for (var t = n.length - 1; 0 <= t; t--) {
                        var s = n[t],
                            c = s.instance,
                            u = s.currentTarget;
                        if (s = s.listener, c !== o && i.isPropagationStopped()) break e;
                        Cl(i, s, u), o = c
                    } else
                        for (t = 0; t < n.length; t++) {
                            if (s = n[t], c = s.instance, u = s.currentTarget, s = s.listener, c !== o && i.isPropagationStopped()) break e;
                            Cl(i, s, u), o = c
                        }
            }
        }
        if (Qi) throw e = Gt, Qi = !1, Gt = null, e
    }

    function b(e, r) {
        var a = r[rs];
        a === void 0 && (a = r[rs] = new Set);
        var n = e + "__bubble";
        a.has(n) || (mu(r, e, 2, !1), a.add(n))
    }

    function pt(e, r, a) {
        var n = 0;
        r && (n |= 4), mu(a, e, n, r)
    }
    var xi = "_reactListening" + Math.random().toString(36).slice(2);

    function Bn(e) {
        if (!e[xi]) {
            e[xi] = !0, x0.forEach(function(a) { a !== "selectionchange" && (X2.has(a) || pt(a, !1, e), pt(a, !0, e)) });
            var r = e.nodeType === 9 ? e : e.ownerDocument;
            r === null || r[xi] || (r[xi] = !0, pt("selectionchange", !1, r))
        }
    }

    function mu(e, r, a, n) {
        switch (q0(r)) {
            case 1:
                var i = f2;
                break;
            case 4:
                i = p2;
                break;
            default:
                i = Ws
        }
        a = i.bind(null, r, a, e), i = void 0, !Ht || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(r, a, { capture: !0, passive: i }) : e.addEventListener(r, a, !0) : i !== void 0 ? e.addEventListener(r, a, { passive: i }) : e.addEventListener(r, a, !1)
    }

    function mt(e, r, a, n, i) {
        var o = n;
        if (!(r & 1) && !(r & 2) && n !== null) e: for (;;) {
            if (n === null) return;
            var t = n.tag;
            if (t === 3 || t === 4) {
                var s = n.stateNode.containerInfo;
                if (s === i || s.nodeType === 8 && s.parentNode === i) break;
                if (t === 4)
                    for (t = n.return; t !== null;) {
                        var c = t.tag;
                        if ((c === 3 || c === 4) && (c = t.stateNode.containerInfo, c === i || c.nodeType === 8 && c.parentNode === i)) return;
                        t = t.return
                    }
                for (; s !== null;) {
                    if (t = ca(s), t === null) return;
                    if (c = t.tag, c === 5 || c === 6) { n = o = t; continue e }
                    s = s.parentNode
                }
            }
            n = n.return
        }
        F0(function() {
            var u = o,
                m = Is(a),
                h = [];
            e: {
                var p = fu.get(e);
                if (p !== void 0) {
                    var C = Gs,
                        x = e;
                    switch (e) {
                        case "keypress":
                            if (zi(a) === 0) break e;
                        case "keydown":
                        case "keyup":
                            C = M2;
                            break;
                        case "focusin":
                            x = "focus", C = st;
                            break;
                        case "focusout":
                            x = "blur", C = st;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            C = st;
                            break;
                        case "click":
                            if (a.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            C = cl;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            C = g2;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            C = Y2;
                            break;
                        case cu:
                        case lu:
                        case uu:
                            C = L2;
                            break;
                        case du:
                            C = N2;
                            break;
                        case "scroll":
                            C = m2;
                            break;
                        case "wheel":
                            C = z2;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            C = x2;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            C = ul
                    }
                    var A = (r & 4) !== 0,
                        k = !A && e === "scroll",
                        f = A ? p !== null ? p + "Capture" : null : p;
                    A = [];
                    for (var l = u, d; l !== null;) {
                        d = l;
                        var g = d.stateNode;
                        if (d.tag === 5 && g !== null && (d = g, f !== null && (g = Rn(l, f), g != null && A.push(Wn(l, g, d)))), k) break;
                        l = l.return
                    }
                    0 < A.length && (p = new C(p, x, null, a, m), h.push({ event: p, listeners: A }))
                }
            }
            if (!(r & 7)) {
                e: {
                    if (p = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", p && a !== Bt && (x = a.relatedTarget || a.fromElement) && (ca(x) || x[Pr])) break e;
                    if ((C || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, C ? (x = a.relatedTarget || a.toElement, C = u, x = x ? ca(x) : null, x !== null && (k = xa(x), x !== k || x.tag !== 5 && x.tag !== 6) && (x = null)) : (C = null, x = u), C !== x)) {
                        if (A = cl, g = "onMouseLeave", f = "onMouseEnter", l = "mouse", (e === "pointerout" || e === "pointerover") && (A = ul, g = "onPointerLeave", f = "onPointerEnter", l = "pointer"), k = C == null ? p : Ya(C), d = x == null ? p : Ya(x), p = new A(g, l + "leave", C, a, m), p.target = k, p.relatedTarget = d, g = null, ca(m) === u && (A = new A(f, l + "enter", x, a, m), A.target = d, A.relatedTarget = k, g = A), k = g, C && x) r: {
                            for (A = C, f = x, l = 0, d = A; d; d = Aa(d)) l++;
                            for (d = 0, g = f; g; g = Aa(g)) d++;
                            for (; 0 < l - d;) A = Aa(A),
                            l--;
                            for (; 0 < d - l;) f = Aa(f),
                            d--;
                            for (; l--;) {
                                if (A === f || f !== null && A === f.alternate) break r;
                                A = Aa(A), f = Aa(f)
                            }
                            A = null
                        }
                        else A = null;
                        C !== null && xl(h, p, C, A, !1), x !== null && k !== null && xl(h, k, x, A, !0)
                    }
                }
                e: {
                    if (p = u ? Ya(u) : window, C = p.nodeName && p.nodeName.toLowerCase(), C === "select" || C === "input" && p.type === "file") var _ = B2;
                    else if (pl(p))
                        if (nu) _ = b2;
                        else { _ = H2; var D = W2 }
                    else(C = p.nodeName) && C.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (_ = G2);
                    if (_ && (_ = _(e, u))) { au(h, _, a, m); break e }
                    D && D(e, p, u),
                    e === "focusout" && (D = p._wrapperState) && D.controlled && p.type === "number" && Ft(p, "number", p.value)
                }
                switch (D = u ? Ya(u) : window, e) {
                    case "focusin":
                        (pl(D) || D.contentEditable === "true") && (Da = D, Qt = u, Mn = null);
                        break;
                    case "focusout":
                        Mn = Qt = Da = null;
                        break;
                    case "mousedown":
                        Zt = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Zt = !1, yl(h, a, m);
                        break;
                    case "selectionchange":
                        if (Q2) break;
                    case "keydown":
                    case "keyup":
                        yl(h, a, m)
                }
                var E;
                if ($s) e: {
                    switch (e) {
                        case "compositionstart":
                            var T = "onCompositionStart";
                            break e;
                        case "compositionend":
                            T = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            T = "onCompositionUpdate";
                            break e
                    }
                    T = void 0
                }
                else Ma ? eu(e, a) && (T = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (T = "onCompositionStart");T && (J0 && a.locale !== "ko" && (Ma || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ma && (E = X0()) : (Ir = m, Hs = "value" in Ir ? Ir.value : Ir.textContent, Ma = !0)), D = eo(u, T), 0 < D.length && (T = new ll(T, e, null, a, m), h.push({ event: T, listeners: D }), E ? T.data = E : (E = ru(a), E !== null && (T.data = E)))),
                (E = F2 ? V2(e, a) : I2(e, a)) && (u = eo(u, "onBeforeInput"), 0 < u.length && (m = new ll("onBeforeInput", "beforeinput", null, a, m), h.push({ event: m, listeners: u }), m.data = E))
            }
            pu(h, r)
        })
    }

    function Wn(e, r, a) { return { instance: e, listener: r, currentTarget: a } }

    function eo(e, r) {
        for (var a = r + "Capture", n = []; e !== null;) {
            var i = e,
                o = i.stateNode;
            i.tag === 5 && o !== null && (i = o, o = Rn(e, a), o != null && n.unshift(Wn(e, o, i)), o = Rn(e, r), o != null && n.push(Wn(e, o, i))), e = e.return
        }
        return n
    }

    function Aa(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function xl(e, r, a, n, i) {
        for (var o = r._reactName, t = []; a !== null && a !== n;) {
            var s = a,
                c = s.alternate,
                u = s.stateNode;
            if (c !== null && c === n) break;
            s.tag === 5 && u !== null && (s = u, i ? (c = Rn(a, o), c != null && t.unshift(Wn(a, c, s))) : i || (c = Rn(a, o), c != null && t.push(Wn(a, c, s)))), a = a.return
        }
        t.length !== 0 && e.push({ event: r, listeners: t })
    }
    var J2 = /\r\n?/g,
        e1 = /\u0000|\uFFFD/g;

    function Sl(e) { return (typeof e == "string" ? e : "" + e).replace(J2, `
`).replace(e1, "") }

    function Si(e, r, a) { if (r = Sl(r), Sl(e) !== r && a) throw Error(v(425)) }

    function ro() {}
    var qt = null,
        Xt = null;

    function Jt(e, r) { return e === "textarea" || e === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null }
    var es = typeof setTimeout == "function" ? setTimeout : void 0,
        r1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Al = typeof Promise == "function" ? Promise : void 0,
        a1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Al < "u" ? function(e) { return Al.resolve(null).then(e).catch(n1) } : es;

    function n1(e) { setTimeout(function() { throw e }) }

    function ht(e, r) {
        var a = r,
            n = 0;
        do {
            var i = a.nextSibling;
            if (e.removeChild(a), i && i.nodeType === 8)
                if (a = i.data, a === "/$") {
                    if (n === 0) { e.removeChild(i), In(r); return }
                    n--
                } else a !== "$" && a !== "$?" && a !== "$!" || n++;
            a = i
        } while (a);
        In(r)
    }

    function br(e) { for (; e != null; e = e.nextSibling) { var r = e.nodeType; if (r === 1 || r === 3) break; if (r === 8) { if (r = e.data, r === "$" || r === "$!" || r === "$?") break; if (r === "/$") return null } } return e }

    function kl(e) {
        e = e.previousSibling;
        for (var r = 0; e;) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (r === 0) return e;
                    r--
                } else a === "/$" && r++
            }
            e = e.previousSibling
        }
        return null
    }
    var nn = Math.random().toString(36).slice(2),
        cr = "__reactFiber$" + nn,
        Hn = "__reactProps$" + nn,
        Pr = "__reactContainer$" + nn,
        rs = "__reactEvents$" + nn,
        i1 = "__reactListeners$" + nn,
        o1 = "__reactHandles$" + nn;

    function ca(e) {
        var r = e[cr];
        if (r) return r;
        for (var a = e.parentNode; a;) {
            if (r = a[Pr] || a[cr]) {
                if (a = r.alternate, r.child !== null || a !== null && a.child !== null)
                    for (e = kl(e); e !== null;) {
                        if (a = e[cr]) return a;
                        e = kl(e)
                    }
                return r
            }
            e = a, a = e.parentNode
        }
        return null
    }

    function ii(e) { return e = e[cr] || e[Pr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e }

    function Ya(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode; throw Error(v(33)) }

    function Mo(e) { return e[Hn] || null }
    var as = [],
        Ta = -1;

    function ra(e) { return { current: e } }

    function $(e) { 0 > Ta || (e.current = as[Ta], as[Ta] = null, Ta--) }

    function G(e, r) { Ta++, as[Ta] = e.current, e.current = r }
    var Jr = {},
        Ce = ra(Jr),
        Me = ra(!1),
        ha = Jr;

    function Qa(e, r) {
        var a = e.type.contextTypes;
        if (!a) return Jr;
        var n = e.stateNode;
        if (n && n.__reactInternalMemoizedUnmaskedChildContext === r) return n.__reactInternalMemoizedMaskedChildContext;
        var i = {},
            o;
        for (o in a) i[o] = r[o];
        return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = i), i
    }

    function De(e) { return e = e.childContextTypes, e != null }

    function ao() { $(Me), $(Ce) }

    function wl(e, r, a) {
        if (Ce.current !== Jr) throw Error(v(168));
        G(Ce, r), G(Me, a)
    }

    function hu(e, r, a) {
        var n = e.stateNode;
        if (r = r.childContextTypes, typeof n.getChildContext != "function") return a;
        n = n.getChildContext();
        for (var i in n)
            if (!(i in r)) throw Error(v(108, Wf(e) || "Unknown", i));
        return ee({}, a, n)
    }

    function no(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jr, ha = Ce.current, G(Ce, e), G(Me, Me.current), !0 }

    function _l(e, r, a) {
        var n = e.stateNode;
        if (!n) throw Error(v(169));
        a ? (e = hu(e, r, ha), n.__reactInternalMemoizedMergedChildContext = e, $(Me), $(Ce), G(Ce, e)) : $(Me), G(Me, a)
    }
    var yr = null,
        Do = !1,
        gt = !1;

    function gu(e) { yr === null ? yr = [e] : yr.push(e) }

    function t1(e) { Do = !0, gu(e) }

    function aa() {
        if (!gt && yr !== null) {
            gt = !0;
            var e = 0,
                r = W;
            try {
                var a = yr;
                for (W = 1; e < a.length; e++) {
                    var n = a[e];
                    do n = n(!0); while (n !== null)
                }
                yr = null, Do = !1
            } catch (i) { throw yr !== null && (yr = yr.slice(e + 1)), U0(js, aa), i } finally { W = r, gt = !1 }
        }
        return null
    }
    var Na = [],
        Oa = 0,
        io = null,
        oo = 0,
        Ve = [],
        Ie = 0,
        ga = null,
        Lr = 1,
        Cr = "";

    function ta(e, r) { Na[Oa++] = oo, Na[Oa++] = io, io = e, oo = r }

    function vu(e, r, a) {
        Ve[Ie++] = Lr, Ve[Ie++] = Cr, Ve[Ie++] = ga, ga = e;
        var n = Lr;
        e = Cr;
        var i = 32 - er(n) - 1;
        n &= ~(1 << i), a += 1;
        var o = 32 - er(r) + i;
        if (30 < o) {
            var t = i - i % 5;
            o = (n & (1 << t) - 1).toString(32), n >>= t, i -= t, Lr = 1 << 32 - er(r) + i | a << i | n, Cr = o + e
        } else Lr = 1 << o | a << i | n, Cr = e
    }

    function Qs(e) { e.return !== null && (ta(e, 1), vu(e, 1, 0)) }

    function Zs(e) { for (; e === io;) io = Na[--Oa], Na[Oa] = null, oo = Na[--Oa], Na[Oa] = null; for (; e === ga;) ga = Ve[--Ie], Ve[Ie] = null, Cr = Ve[--Ie], Ve[Ie] = null, Lr = Ve[--Ie], Ve[Ie] = null }
    var Ne = null,
        Te = null,
        q = !1,
        Xe = null;

    function yu(e, r) {
        var a = Ue(5, null, null, 0);
        a.elementType = "DELETED", a.stateNode = r, a.return = e, r = e.deletions, r === null ? (e.deletions = [a], e.flags |= 16) : r.push(a)
    }

    function Pl(e, r) {
        switch (e.tag) {
            case 5:
                var a = e.type;
                return r = r.nodeType !== 1 || a.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (e.stateNode = r, Ne = e, Te = br(r.firstChild), !0) : !1;
            case 6:
                return r = e.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (e.stateNode = r, Ne = e, Te = null, !0) : !1;
            case 13:
                return r = r.nodeType !== 8 ? null : r, r !== null ? (a = ga !== null ? { id: Lr, overflow: Cr } : null, e.memoizedState = { dehydrated: r, treeContext: a, retryLane: 1073741824 }, a = Ue(18, null, null, 0), a.stateNode = r, a.return = e, e.child = a, Ne = e, Te = null, !0) : !1;
            default:
                return !1
        }
    }

    function ns(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0 }

    function is(e) {
        if (q) {
            var r = Te;
            if (r) {
                var a = r;
                if (!Pl(e, r)) {
                    if (ns(e)) throw Error(v(418));
                    r = br(a.nextSibling);
                    var n = Ne;
                    r && Pl(e, r) ? yu(n, a) : (e.flags = e.flags & -4097 | 2, q = !1, Ne = e)
                }
            } else {
                if (ns(e)) throw Error(v(418));
                e.flags = e.flags & -4097 | 2, q = !1, Ne = e
            }
        }
    }

    function Ml(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        Ne = e
    }

    function Ai(e) {
        if (e !== Ne) return !1;
        if (!q) return Ml(e), q = !0, !1;
        var r;
        if ((r = e.tag !== 3) && !(r = e.tag !== 5) && (r = e.type, r = r !== "head" && r !== "body" && !Jt(e.type, e.memoizedProps)), r && (r = Te)) { if (ns(e)) throw Lu(), Error(v(418)); for (; r;) yu(e, r), r = br(r.nextSibling) }
        if (Ml(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));
            e: {
                for (e = e.nextSibling, r = 0; e;) {
                    if (e.nodeType === 8) {
                        var a = e.data;
                        if (a === "/$") {
                            if (r === 0) { Te = br(e.nextSibling); break e }
                            r--
                        } else a !== "$" && a !== "$!" && a !== "$?" || r++
                    }
                    e = e.nextSibling
                }
                Te = null
            }
        } else Te = Ne ? br(e.stateNode.nextSibling) : null;
        return !0
    }

    function Lu() { for (var e = Te; e;) e = br(e.nextSibling) }

    function Za() { Te = Ne = null, q = !1 }

    function qs(e) { Xe === null ? Xe = [e] : Xe.push(e) }
    var s1 = Yr.ReactCurrentBatchConfig;

    function Ze(e, r) { if (e && e.defaultProps) { r = ee({}, r), e = e.defaultProps; for (var a in e) r[a] === void 0 && (r[a] = e[a]); return r } return r }
    var to = ra(null),
        so = null,
        za = null,
        Xs = null;

    function Js() { Xs = za = so = null }

    function ec(e) {
        var r = to.current;
        $(to), e._currentValue = r
    }

    function os(e, r, a) {
        for (; e !== null;) {
            var n = e.alternate;
            if ((e.childLanes & r) !== r ? (e.childLanes |= r, n !== null && (n.childLanes |= r)) : n !== null && (n.childLanes & r) !== r && (n.childLanes |= r), e === a) break;
            e = e.return
        }
    }

    function Wa(e, r) { so = e, Xs = za = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & r && (Pe = !0), e.firstContext = null) }

    function We(e) {
        var r = e._currentValue;
        if (Xs !== e)
            if (e = { context: e, memoizedValue: r, next: null }, za === null) {
                if (so === null) throw Error(v(308));
                za = e, so.dependencies = { lanes: 0, firstContext: e }
            } else za = za.next = e;
        return r
    }
    var la = null;

    function rc(e) { la === null ? la = [e] : la.push(e) }

    function Cu(e, r, a, n) { var i = r.interleaved; return i === null ? (a.next = a, rc(r)) : (a.next = i.next, i.next = a), r.interleaved = a, Mr(e, n) }

    function Mr(e, r) { e.lanes |= r; var a = e.alternate; for (a !== null && (a.lanes |= r), a = e, e = e.return; e !== null;) e.childLanes |= r, a = e.alternate, a !== null && (a.childLanes |= r), a = e, e = e.return; return a.tag === 3 ? a.stateNode : null }
    var Rr = !1;

    function ac(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

    function xu(e, r) { e = e.updateQueue, r.updateQueue === e && (r.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

    function Ar(e, r) { return { eventTime: e, lane: r, tag: 0, payload: null, callback: null, next: null } }

    function $r(e, r, a) { var n = e.updateQueue; if (n === null) return null; if (n = n.shared, j & 2) { var i = n.pending; return i === null ? r.next = r : (r.next = i.next, i.next = r), n.pending = r, Mr(e, a) } return i = n.interleaved, i === null ? (r.next = r, rc(n)) : (r.next = i.next, i.next = r), n.interleaved = r, Mr(e, a) }

    function Ri(e, r, a) {
        if (r = r.updateQueue, r !== null && (r = r.shared, (a & 4194240) !== 0)) {
            var n = r.lanes;
            n &= e.pendingLanes, a |= n, r.lanes = a, Us(e, a)
        }
    }

    function Dl(e, r) {
        var a = e.updateQueue,
            n = e.alternate;
        if (n !== null && (n = n.updateQueue, a === n)) {
            var i = null,
                o = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var t = { eventTime: a.eventTime, lane: a.lane, tag: a.tag, payload: a.payload, callback: a.callback, next: null };
                    o === null ? i = o = t : o = o.next = t, a = a.next
                } while (a !== null);
                o === null ? i = o = r : o = o.next = r
            } else i = o = r;
            a = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: n.shared, effects: n.effects }, e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = r : e.next = r, a.lastBaseUpdate = r
    }

    function co(e, r, a, n) {
        var i = e.updateQueue;
        Rr = !1;
        var o = i.firstBaseUpdate,
            t = i.lastBaseUpdate,
            s = i.shared.pending;
        if (s !== null) {
            i.shared.pending = null;
            var c = s,
                u = c.next;
            c.next = null, t === null ? o = u : t.next = u, t = c;
            var m = e.alternate;
            m !== null && (m = m.updateQueue, s = m.lastBaseUpdate, s !== t && (s === null ? m.firstBaseUpdate = u : s.next = u, m.lastBaseUpdate = c))
        }
        if (o !== null) {
            var h = i.baseState;
            t = 0, m = u = c = null, s = o;
            do {
                var p = s.lane,
                    C = s.eventTime;
                if ((n & p) === p) {
                    m !== null && (m = m.next = { eventTime: C, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
                    e: {
                        var x = e,
                            A = s;
                        switch (p = r, C = a, A.tag) {
                            case 1:
                                if (x = A.payload, typeof x == "function") { h = x.call(C, h, p); break e }
                                h = x;
                                break e;
                            case 3:
                                x.flags = x.flags & -65537 | 128;
                            case 0:
                                if (x = A.payload, p = typeof x == "function" ? x.call(C, h, p) : x, p == null) break e;
                                h = ee({}, h, p);
                                break e;
                            case 2:
                                Rr = !0
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = i.effects, p === null ? i.effects = [s] : p.push(s))
                } else C = { eventTime: C, lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, m === null ? (u = m = C, c = h) : m = m.next = C, t |= p;
                if (s = s.next, s === null) {
                    if (s = i.shared.pending, s === null) break;
                    p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null
                }
            } while (!0);
            if (m === null && (c = h), i.baseState = c, i.firstBaseUpdate = u, i.lastBaseUpdate = m, r = i.shared.interleaved, r !== null) {
                i = r;
                do t |= i.lane, i = i.next; while (i !== r)
            } else o === null && (i.shared.lanes = 0);
            ya |= t, e.lanes = t, e.memoizedState = h
        }
    }

    function El(e, r, a) {
        if (e = r.effects, r.effects = null, e !== null)
            for (r = 0; r < e.length; r++) {
                var n = e[r],
                    i = n.callback;
                if (i !== null) {
                    if (n.callback = null, n = a, typeof i != "function") throw Error(v(191, i));
                    i.call(n)
                }
            }
    }
    var Su = new C0.Component().refs;

    function ts(e, r, a, n) { r = e.memoizedState, a = a(n, r), a = a == null ? r : ee({}, r, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a) }
    var Eo = {
        isMounted: function(e) { return (e = e._reactInternals) ? xa(e) === e : !1 },
        enqueueSetState: function(e, r, a) {
            e = e._reactInternals;
            var n = Se(),
                i = Qr(e),
                o = Ar(n, i);
            o.payload = r, a != null && (o.callback = a), r = $r(e, o, i), r !== null && (rr(r, e, i, n), Ri(r, e, i))
        },
        enqueueReplaceState: function(e, r, a) {
            e = e._reactInternals;
            var n = Se(),
                i = Qr(e),
                o = Ar(n, i);
            o.tag = 1, o.payload = r, a != null && (o.callback = a), r = $r(e, o, i), r !== null && (rr(r, e, i, n), Ri(r, e, i))
        },
        enqueueForceUpdate: function(e, r) {
            e = e._reactInternals;
            var a = Se(),
                n = Qr(e),
                i = Ar(a, n);
            i.tag = 2, r != null && (i.callback = r), r = $r(e, i, n), r !== null && (rr(r, e, n, a), Ri(r, e, n))
        }
    };

    function Yl(e, r, a, n, i, o, t) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, o, t) : r.prototype && r.prototype.isPureReactComponent ? !Un(a, n) || !Un(i, o) : !0 }

    function Au(e, r, a) {
        var n = !1,
            i = Jr,
            o = r.contextType;
        return typeof o == "object" && o !== null ? o = We(o) : (i = De(r) ? ha : Ce.current, n = r.contextTypes, o = (n = n != null) ? Qa(e, i) : Jr), r = new r(a, o), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Eo, e.stateNode = r, r._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), r
    }

    function Tl(e, r, a, n) { e = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(a, n), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(a, n), r.state !== e && Eo.enqueueReplaceState(r, r.state, null) }

    function ss(e, r, a, n) {
        var i = e.stateNode;
        i.props = a, i.state = e.memoizedState, i.refs = Su, ac(e);
        var o = r.contextType;
        typeof o == "object" && o !== null ? i.context = We(o) : (o = De(r) ? ha : Ce.current, i.context = Qa(e, o)), i.state = e.memoizedState, o = r.getDerivedStateFromProps, typeof o == "function" && (ts(e, r, o, a), i.state = e.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (r = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), r !== i.state && Eo.enqueueReplaceState(i, i.state, null), co(e, a, i, n), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function hn(e, r, a) {
        if (e = a.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (a._owner) {
                if (a = a._owner, a) { if (a.tag !== 1) throw Error(v(309)); var n = a.stateNode }
                if (!n) throw Error(v(147, e));
                var i = n,
                    o = "" + e;
                return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === o ? r.ref : (r = function(t) {
                    var s = i.refs;
                    s === Su && (s = i.refs = {}), t === null ? delete s[o] : s[o] = t
                }, r._stringRef = o, r)
            }
            if (typeof e != "string") throw Error(v(284));
            if (!a._owner) throw Error(v(290, e))
        }
        return e
    }

    function ki(e, r) { throw e = Object.prototype.toString.call(r), Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : e)) }

    function Nl(e) { var r = e._init; return r(e._payload) }

    function ku(e) {
        function r(f, l) {
            if (e) {
                var d = f.deletions;
                d === null ? (f.deletions = [l], f.flags |= 16) : d.push(l)
            }
        }

        function a(f, l) { if (!e) return null; for (; l !== null;) r(f, l), l = l.sibling; return null }

        function n(f, l) { for (f = new Map; l !== null;) l.key !== null ? f.set(l.key, l) : f.set(l.index, l), l = l.sibling; return f }

        function i(f, l) { return f = Zr(f, l), f.index = 0, f.sibling = null, f }

        function o(f, l, d) { return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < l ? (f.flags |= 2, l) : d) : (f.flags |= 2, l)) : (f.flags |= 1048576, l) }

        function t(f) { return e && f.alternate === null && (f.flags |= 2), f }

        function s(f, l, d, g) { return l === null || l.tag !== 6 ? (l = At(d, f.mode, g), l.return = f, l) : (l = i(l, d), l.return = f, l) }

        function c(f, l, d, g) { var _ = d.type; return _ === Pa ? m(f, l, d.props.children, g, d.key) : l !== null && (l.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === zr && Nl(_) === l.type) ? (g = i(l, d.props), g.ref = hn(f, l, d), g.return = f, g) : (g = Bi(d.type, d.key, d.props, null, f.mode, g), g.ref = hn(f, l, d), g.return = f, g) }

        function u(f, l, d, g) { return l === null || l.tag !== 4 || l.stateNode.containerInfo !== d.containerInfo || l.stateNode.implementation !== d.implementation ? (l = kt(d, f.mode, g), l.return = f, l) : (l = i(l, d.children || []), l.return = f, l) }

        function m(f, l, d, g, _) { return l === null || l.tag !== 7 ? (l = pa(d, f.mode, g, _), l.return = f, l) : (l = i(l, d), l.return = f, l) }

        function h(f, l, d) {
            if (typeof l == "string" && l !== "" || typeof l == "number") return l = At("" + l, f.mode, d), l.return = f, l;
            if (typeof l == "object" && l !== null) {
                switch (l.$$typeof) {
                    case pi:
                        return d = Bi(l.type, l.key, l.props, null, f.mode, d), d.ref = hn(f, null, l), d.return = f, d;
                    case _a:
                        return l = kt(l, f.mode, d), l.return = f, l;
                    case zr:
                        var g = l._init;
                        return h(f, g(l._payload), d)
                }
                if (xn(l) || un(l)) return l = pa(l, f.mode, d, null), l.return = f, l;
                ki(f, l)
            }
            return null
        }

        function p(f, l, d, g) {
            var _ = l !== null ? l.key : null;
            if (typeof d == "string" && d !== "" || typeof d == "number") return _ !== null ? null : s(f, l, "" + d, g);
            if (typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                    case pi:
                        return d.key === _ ? c(f, l, d, g) : null;
                    case _a:
                        return d.key === _ ? u(f, l, d, g) : null;
                    case zr:
                        return _ = d._init, p(f, l, _(d._payload), g)
                }
                if (xn(d) || un(d)) return _ !== null ? null : m(f, l, d, g, null);
                ki(f, d)
            }
            return null
        }

        function C(f, l, d, g, _) {
            if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(d) || null, s(l, f, "" + g, _);
            if (typeof g == "object" && g !== null) {
                switch (g.$$typeof) {
                    case pi:
                        return f = f.get(g.key === null ? d : g.key) || null, c(l, f, g, _);
                    case _a:
                        return f = f.get(g.key === null ? d : g.key) || null, u(l, f, g, _);
                    case zr:
                        var D = g._init;
                        return C(f, l, d, D(g._payload), _)
                }
                if (xn(g) || un(g)) return f = f.get(d) || null, m(l, f, g, _, null);
                ki(l, g)
            }
            return null
        }

        function x(f, l, d, g) {
            for (var _ = null, D = null, E = l, T = l = 0, ae = null; E !== null && T < d.length; T++) {
                E.index > T ? (ae = E, E = null) : ae = E.sibling;
                var V = p(f, E, d[T], g);
                if (V === null) { E === null && (E = ae); break }
                e && E && V.alternate === null && r(f, E), l = o(V, l, T), D === null ? _ = V : D.sibling = V, D = V, E = ae
            }
            if (T === d.length) return a(f, E), q && ta(f, T), _;
            if (E === null) { for (; T < d.length; T++) E = h(f, d[T], g), E !== null && (l = o(E, l, T), D === null ? _ = E : D.sibling = E, D = E); return q && ta(f, T), _ }
            for (E = n(f, E); T < d.length; T++) ae = C(E, f, T, d[T], g), ae !== null && (e && ae.alternate !== null && E.delete(ae.key === null ? T : ae.key), l = o(ae, l, T), D === null ? _ = ae : D.sibling = ae, D = ae);
            return e && E.forEach(function($e) { return r(f, $e) }), q && ta(f, T), _
        }

        function A(f, l, d, g) {
            var _ = un(d);
            if (typeof _ != "function") throw Error(v(150));
            if (d = _.call(d), d == null) throw Error(v(151));
            for (var D = _ = null, E = l, T = l = 0, ae = null, V = d.next(); E !== null && !V.done; T++, V = d.next()) {
                E.index > T ? (ae = E, E = null) : ae = E.sibling;
                var $e = p(f, E, V.value, g);
                if ($e === null) { E === null && (E = ae); break }
                e && E && $e.alternate === null && r(f, E), l = o($e, l, T), D === null ? _ = $e : D.sibling = $e, D = $e, E = ae
            }
            if (V.done) return a(f, E), q && ta(f, T), _;
            if (E === null) { for (; !V.done; T++, V = d.next()) V = h(f, V.value, g), V !== null && (l = o(V, l, T), D === null ? _ = V : D.sibling = V, D = V); return q && ta(f, T), _ }
            for (E = n(f, E); !V.done; T++, V = d.next()) V = C(E, f, T, V.value, g), V !== null && (e && V.alternate !== null && E.delete(V.key === null ? T : V.key), l = o(V, l, T), D === null ? _ = V : D.sibling = V, D = V);
            return e && E.forEach(function(cn) { return r(f, cn) }), q && ta(f, T), _
        }

        function k(f, l, d, g) {
            if (typeof d == "object" && d !== null && d.type === Pa && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                    case pi:
                        e: {
                            for (var _ = d.key, D = l; D !== null;) {
                                if (D.key === _) {
                                    if (_ = d.type, _ === Pa) { if (D.tag === 7) { a(f, D.sibling), l = i(D, d.props.children), l.return = f, f = l; break e } } else if (D.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === zr && Nl(_) === D.type) { a(f, D.sibling), l = i(D, d.props), l.ref = hn(f, D, d), l.return = f, f = l; break e }
                                    a(f, D);
                                    break
                                } else r(f, D);
                                D = D.sibling
                            }
                            d.type === Pa ? (l = pa(d.props.children, f.mode, g, d.key), l.return = f, f = l) : (g = Bi(d.type, d.key, d.props, null, f.mode, g), g.ref = hn(f, l, d), g.return = f, f = g)
                        }
                        return t(f);
                    case _a:
                        e: {
                            for (D = d.key; l !== null;) {
                                if (l.key === D)
                                    if (l.tag === 4 && l.stateNode.containerInfo === d.containerInfo && l.stateNode.implementation === d.implementation) { a(f, l.sibling), l = i(l, d.children || []), l.return = f, f = l; break e } else { a(f, l); break }
                                else r(f, l);
                                l = l.sibling
                            }
                            l = kt(d, f.mode, g),
                            l.return = f,
                            f = l
                        }
                        return t(f);
                    case zr:
                        return D = d._init, k(f, l, D(d._payload), g)
                }
                if (xn(d)) return x(f, l, d, g);
                if (un(d)) return A(f, l, d, g);
                ki(f, d)
            }
            return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, l !== null && l.tag === 6 ? (a(f, l.sibling), l = i(l, d), l.return = f, f = l) : (a(f, l), l = At(d, f.mode, g), l.return = f, f = l), t(f)) : a(f, l)
        }
        return k
    }
    var qa = ku(!0),
        wu = ku(!1),
        oi = {},
        dr = ra(oi),
        Gn = ra(oi),
        bn = ra(oi);

    function ua(e) { if (e === oi) throw Error(v(174)); return e }

    function nc(e, r) {
        switch (G(bn, r), G(Gn, e), G(dr, oi), e = r.nodeType, e) {
            case 9:
            case 11:
                r = (r = r.documentElement) ? r.namespaceURI : It(null, "");
                break;
            default:
                e = e === 8 ? r.parentNode : r, r = e.namespaceURI || null, e = e.tagName, r = It(r, e)
        }
        $(dr), G(dr, r)
    }

    function Xa() { $(dr), $(Gn), $(bn) }

    function _u(e) {
        ua(bn.current);
        var r = ua(dr.current),
            a = It(r, e.type);
        r !== a && (G(Gn, e), G(dr, a))
    }

    function ic(e) { Gn.current === e && ($(dr), $(Gn)) }
    var X = ra(0);

    function lo(e) {
        for (var r = e; r !== null;) {
            if (r.tag === 13) { var a = r.memoizedState; if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || a.data === "$!")) return r } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) { if (r.flags & 128) return r } else if (r.child !== null) { r.child.return = r, r = r.child; continue }
            if (r === e) break;
            for (; r.sibling === null;) {
                if (r.return === null || r.return === e) return null;
                r = r.return
            }
            r.sibling.return = r.return, r = r.sibling
        }
        return null
    }
    var vt = [];

    function oc() {
        for (var e = 0; e < vt.length; e++) vt[e]._workInProgressVersionPrimary = null;
        vt.length = 0
    }
    var Fi = Yr.ReactCurrentDispatcher,
        yt = Yr.ReactCurrentBatchConfig,
        va = 0,
        J = null,
        se = null,
        de = null,
        uo = !1,
        Dn = !1,
        $n = 0,
        c1 = 0;

    function ge() { throw Error(v(321)) }

    function tc(e, r) {
        if (r === null) return !1;
        for (var a = 0; a < r.length && a < e.length; a++)
            if (!ar(e[a], r[a])) return !1;
        return !0
    }

    function sc(e, r, a, n, i, o) {
        if (va = o, J = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fi.current = e === null || e.memoizedState === null ? f1 : p1, e = a(n, i), Dn) {
            o = 0;
            do {
                if (Dn = !1, $n = 0, 25 <= o) throw Error(v(301));
                o += 1, de = se = null, r.updateQueue = null, Fi.current = m1, e = a(n, i)
            } while (Dn)
        }
        if (Fi.current = fo, r = se !== null && se.next !== null, va = 0, de = se = J = null, uo = !1, r) throw Error(v(300));
        return e
    }

    function cc() { var e = $n !== 0; return $n = 0, e }

    function sr() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return de === null ? J.memoizedState = de = e : de = de.next = e, de }

    function He() {
        if (se === null) {
            var e = J.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = se.next;
        var r = de === null ? J.memoizedState : de.next;
        if (r !== null) de = r, se = e;
        else {
            if (e === null) throw Error(v(310));
            se = e, e = { memoizedState: se.memoizedState, baseState: se.baseState, baseQueue: se.baseQueue, queue: se.queue, next: null }, de === null ? J.memoizedState = de = e : de = de.next = e
        }
        return de
    }

    function Kn(e, r) { return typeof r == "function" ? r(e) : r }

    function Lt(e) {
        var r = He(),
            a = r.queue;
        if (a === null) throw Error(v(311));
        a.lastRenderedReducer = e;
        var n = se,
            i = n.baseQueue,
            o = a.pending;
        if (o !== null) {
            if (i !== null) {
                var t = i.next;
                i.next = o.next, o.next = t
            }
            n.baseQueue = i = o, a.pending = null
        }
        if (i !== null) {
            o = i.next, n = n.baseState;
            var s = t = null,
                c = null,
                u = o;
            do {
                var m = u.lane;
                if ((va & m) === m) c !== null && (c = c.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
                else {
                    var h = { lane: m, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                    c === null ? (s = c = h, t = n) : c = c.next = h, J.lanes |= m, ya |= m
                }
                u = u.next
            } while (u !== null && u !== o);
            c === null ? t = n : c.next = s, ar(n, r.memoizedState) || (Pe = !0), r.memoizedState = n, r.baseState = t, r.baseQueue = c, a.lastRenderedState = n
        }
        if (e = a.interleaved, e !== null) {
            i = e;
            do o = i.lane, J.lanes |= o, ya |= o, i = i.next; while (i !== e)
        } else i === null && (a.lanes = 0);
        return [r.memoizedState, a.dispatch]
    }

    function Ct(e) {
        var r = He(),
            a = r.queue;
        if (a === null) throw Error(v(311));
        a.lastRenderedReducer = e;
        var n = a.dispatch,
            i = a.pending,
            o = r.memoizedState;
        if (i !== null) {
            a.pending = null;
            var t = i = i.next;
            do o = e(o, t.action), t = t.next; while (t !== i);
            ar(o, r.memoizedState) || (Pe = !0), r.memoizedState = o, r.baseQueue === null && (r.baseState = o), a.lastRenderedState = o
        }
        return [o, n]
    }

    function Pu() {}

    function Mu(e, r) {
        var a = J,
            n = He(),
            i = r(),
            o = !ar(n.memoizedState, i);
        if (o && (n.memoizedState = i, Pe = !0), n = n.queue, lc(Yu.bind(null, a, n, e), [e]), n.getSnapshot !== r || o || de !== null && de.memoizedState.tag & 1) {
            if (a.flags |= 2048, Qn(9, Eu.bind(null, a, n, i, r), void 0, null), fe === null) throw Error(v(349));
            va & 30 || Du(a, r, i)
        }
        return i
    }

    function Du(e, r, a) { e.flags |= 16384, e = { getSnapshot: r, value: a }, r = J.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, J.updateQueue = r, r.stores = [e]) : (a = r.stores, a === null ? r.stores = [e] : a.push(e)) }

    function Eu(e, r, a, n) { r.value = a, r.getSnapshot = n, Tu(r) && Nu(e) }

    function Yu(e, r, a) { return a(function() { Tu(r) && Nu(e) }) }

    function Tu(e) {
        var r = e.getSnapshot;
        e = e.value;
        try { var a = r(); return !ar(e, a) } catch { return !0 }
    }

    function Nu(e) {
        var r = Mr(e, 1);
        r !== null && rr(r, e, 1, -1)
    }

    function Ol(e) { var r = sr(); return typeof e == "function" && (e = e()), r.memoizedState = r.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kn, lastRenderedState: e }, r.queue = e, e = e.dispatch = d1.bind(null, J, e), [r.memoizedState, e] }

    function Qn(e, r, a, n) { return e = { tag: e, create: r, destroy: a, deps: n, next: null }, r = J.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, J.updateQueue = r, r.lastEffect = e.next = e) : (a = r.lastEffect, a === null ? r.lastEffect = e.next = e : (n = a.next, a.next = e, e.next = n, r.lastEffect = e)), e }

    function Ou() { return He().memoizedState }

    function Vi(e, r, a, n) {
        var i = sr();
        J.flags |= e, i.memoizedState = Qn(1 | r, a, void 0, n === void 0 ? null : n)
    }

    function Yo(e, r, a, n) {
        var i = He();
        n = n === void 0 ? null : n;
        var o = void 0;
        if (se !== null) { var t = se.memoizedState; if (o = t.destroy, n !== null && tc(n, t.deps)) { i.memoizedState = Qn(r, a, o, n); return } }
        J.flags |= e, i.memoizedState = Qn(1 | r, a, o, n)
    }

    function zl(e, r) { return Vi(8390656, 8, e, r) }

    function lc(e, r) { return Yo(2048, 8, e, r) }

    function zu(e, r) { return Yo(4, 2, e, r) }

    function Ru(e, r) { return Yo(4, 4, e, r) }

    function Fu(e, r) {
        if (typeof r == "function") return e = e(), r(e),
            function() { r(null) };
        if (r != null) return e = e(), r.current = e,
            function() { r.current = null }
    }

    function Vu(e, r, a) { return a = a != null ? a.concat([e]) : null, Yo(4, 4, Fu.bind(null, r, e), a) }

    function uc() {}

    function Iu(e, r) {
        var a = He();
        r = r === void 0 ? null : r;
        var n = a.memoizedState;
        return n !== null && r !== null && tc(r, n[1]) ? n[0] : (a.memoizedState = [e, r], e)
    }

    function ju(e, r) {
        var a = He();
        r = r === void 0 ? null : r;
        var n = a.memoizedState;
        return n !== null && r !== null && tc(r, n[1]) ? n[0] : (e = e(), a.memoizedState = [e, r], e)
    }

    function Uu(e, r, a) { return va & 21 ? (ar(a, r) || (a = H0(), J.lanes |= a, ya |= a, e.baseState = !0), r) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = a) }

    function l1(e, r) {
        var a = W;
        W = a !== 0 && 4 > a ? a : 4, e(!0);
        var n = yt.transition;
        yt.transition = {};
        try { e(!1), r() } finally { W = a, yt.transition = n }
    }

    function Bu() { return He().memoizedState }

    function u1(e, r, a) {
        var n = Qr(e);
        if (a = { lane: n, action: a, hasEagerState: !1, eagerState: null, next: null }, Wu(e)) Hu(r, a);
        else if (a = Cu(e, r, a, n), a !== null) {
            var i = Se();
            rr(a, e, n, i), Gu(a, r, n)
        }
    }

    function d1(e, r, a) {
        var n = Qr(e),
            i = { lane: n, action: a, hasEagerState: !1, eagerState: null, next: null };
        if (Wu(e)) Hu(r, i);
        else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = r.lastRenderedReducer, o !== null)) try {
                var t = r.lastRenderedState,
                    s = o(t, a);
                if (i.hasEagerState = !0, i.eagerState = s, ar(s, t)) {
                    var c = r.interleaved;
                    c === null ? (i.next = i, rc(r)) : (i.next = c.next, c.next = i), r.interleaved = i;
                    return
                }
            } catch {} finally {}
            a = Cu(e, r, i, n), a !== null && (i = Se(), rr(a, e, n, i), Gu(a, r, n))
        }
    }

    function Wu(e) { var r = e.alternate; return e === J || r !== null && r === J }

    function Hu(e, r) {
        Dn = uo = !0;
        var a = e.pending;
        a === null ? r.next = r : (r.next = a.next, a.next = r), e.pending = r
    }

    function Gu(e, r, a) {
        if (a & 4194240) {
            var n = r.lanes;
            n &= e.pendingLanes, a |= n, r.lanes = a, Us(e, a)
        }
    }
    var fo = { readContext: We, useCallback: ge, useContext: ge, useEffect: ge, useImperativeHandle: ge, useInsertionEffect: ge, useLayoutEffect: ge, useMemo: ge, useReducer: ge, useRef: ge, useState: ge, useDebugValue: ge, useDeferredValue: ge, useTransition: ge, useMutableSource: ge, useSyncExternalStore: ge, useId: ge, unstable_isNewReconciler: !1 },
        f1 = {
            readContext: We,
            useCallback: function(e, r) { return sr().memoizedState = [e, r === void 0 ? null : r], e },
            useContext: We,
            useEffect: zl,
            useImperativeHandle: function(e, r, a) { return a = a != null ? a.concat([e]) : null, Vi(4194308, 4, Fu.bind(null, r, e), a) },
            useLayoutEffect: function(e, r) { return Vi(4194308, 4, e, r) },
            useInsertionEffect: function(e, r) { return Vi(4, 2, e, r) },
            useMemo: function(e, r) { var a = sr(); return r = r === void 0 ? null : r, e = e(), a.memoizedState = [e, r], e },
            useReducer: function(e, r, a) { var n = sr(); return r = a !== void 0 ? a(r) : r, n.memoizedState = n.baseState = r, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: r }, n.queue = e, e = e.dispatch = u1.bind(null, J, e), [n.memoizedState, e] },
            useRef: function(e) { var r = sr(); return e = { current: e }, r.memoizedState = e },
            useState: Ol,
            useDebugValue: uc,
            useDeferredValue: function(e) { return sr().memoizedState = e },
            useTransition: function() {
                var e = Ol(!1),
                    r = e[0];
                return e = l1.bind(null, e[1]), sr().memoizedState = e, [r, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, r, a) {
                var n = J,
                    i = sr();
                if (q) {
                    if (a === void 0) throw Error(v(407));
                    a = a()
                } else {
                    if (a = r(), fe === null) throw Error(v(349));
                    va & 30 || Du(n, r, a)
                }
                i.memoizedState = a;
                var o = { value: a, getSnapshot: r };
                return i.queue = o, zl(Yu.bind(null, n, o, e), [e]), n.flags |= 2048, Qn(9, Eu.bind(null, n, o, a, r), void 0, null), a
            },
            useId: function() {
                var e = sr(),
                    r = fe.identifierPrefix;
                if (q) {
                    var a = Cr,
                        n = Lr;
                    a = (n & ~(1 << 32 - er(n) - 1)).toString(32) + a, r = ":" + r + "R" + a, a = $n++, 0 < a && (r += "H" + a.toString(32)), r += ":"
                } else a = c1++, r = ":" + r + "r" + a.toString(32) + ":";
                return e.memoizedState = r
            },
            unstable_isNewReconciler: !1
        },
        p1 = {
            readContext: We,
            useCallback: Iu,
            useContext: We,
            useEffect: lc,
            useImperativeHandle: Vu,
            useInsertionEffect: zu,
            useLayoutEffect: Ru,
            useMemo: ju,
            useReducer: Lt,
            useRef: Ou,
            useState: function() { return Lt(Kn) },
            useDebugValue: uc,
            useDeferredValue: function(e) { var r = He(); return Uu(r, se.memoizedState, e) },
            useTransition: function() {
                var e = Lt(Kn)[0],
                    r = He().memoizedState;
                return [e, r]
            },
            useMutableSource: Pu,
            useSyncExternalStore: Mu,
            useId: Bu,
            unstable_isNewReconciler: !1
        },
        m1 = {
            readContext: We,
            useCallback: Iu,
            useContext: We,
            useEffect: lc,
            useImperativeHandle: Vu,
            useInsertionEffect: zu,
            useLayoutEffect: Ru,
            useMemo: ju,
            useReducer: Ct,
            useRef: Ou,
            useState: function() { return Ct(Kn) },
            useDebugValue: uc,
            useDeferredValue: function(e) { var r = He(); return se === null ? r.memoizedState = e : Uu(r, se.memoizedState, e) },
            useTransition: function() {
                var e = Ct(Kn)[0],
                    r = He().memoizedState;
                return [e, r]
            },
            useMutableSource: Pu,
            useSyncExternalStore: Mu,
            useId: Bu,
            unstable_isNewReconciler: !1
        };

    function Ja(e, r) {
        try {
            var a = "",
                n = r;
            do a += Bf(n), n = n.return; while (n);
            var i = a
        } catch (o) { i = `
Error generating stack: ` + o.message + `
` + o.stack }
        return { value: e, source: r, stack: i, digest: null }
    }

    function xt(e, r, a) { return { value: e, source: null, stack: a ? a : null, digest: r ? r : null } }

    function cs(e, r) { try { console.error(r.value) } catch (a) { setTimeout(function() { throw a }) } }
    var h1 = typeof WeakMap == "function" ? WeakMap : Map;

    function bu(e, r, a) { a = Ar(-1, a), a.tag = 3, a.payload = { element: null }; var n = r.value; return a.callback = function() { mo || (mo = !0, ys = n), cs(e, r) }, a }

    function $u(e, r, a) {
        a = Ar(-1, a), a.tag = 3;
        var n = e.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var i = r.value;
            a.payload = function() { return n(i) }, a.callback = function() { cs(e, r) }
        }
        var o = e.stateNode;
        return o !== null && typeof o.componentDidCatch == "function" && (a.callback = function() {
            cs(e, r), typeof n != "function" && (Kr === null ? Kr = new Set([this]) : Kr.add(this));
            var t = r.stack;
            this.componentDidCatch(r.value, { componentStack: t !== null ? t : "" })
        }), a
    }

    function Rl(e, r, a) {
        var n = e.pingCache;
        if (n === null) {
            n = e.pingCache = new h1;
            var i = new Set;
            n.set(r, i)
        } else i = n.get(r), i === void 0 && (i = new Set, n.set(r, i));
        i.has(a) || (i.add(a), e = D1.bind(null, e, r, a), r.then(e, e))
    }

    function Fl(e) {
        do {
            var r;
            if ((r = e.tag === 13) && (r = e.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function Vl(e, r, a, n, i) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === r ? e.flags |= 65536 : (e.flags |= 128, a.flags |= 131072, a.flags &= -52805, a.tag === 1 && (a.alternate === null ? a.tag = 17 : (r = Ar(-1, 1), r.tag = 2, $r(a, r, 1))), a.lanes |= 1), e) }
    var g1 = Yr.ReactCurrentOwner,
        Pe = !1;

    function xe(e, r, a, n) { r.child = e === null ? wu(r, null, a, n) : qa(r, e.child, a, n) }

    function Il(e, r, a, n, i) { a = a.render; var o = r.ref; return Wa(r, i), n = sc(e, r, a, n, o, i), a = cc(), e !== null && !Pe ? (r.updateQueue = e.updateQueue, r.flags &= -2053, e.lanes &= ~i, Dr(e, r, i)) : (q && a && Qs(r), r.flags |= 1, xe(e, r, n, i), r.child) }

    function jl(e, r, a, n, i) { if (e === null) { var o = a.type; return typeof o == "function" && !yc(o) && o.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (r.tag = 15, r.type = o, Ku(e, r, o, n, i)) : (e = Bi(a.type, null, n, r, r.mode, i), e.ref = r.ref, e.return = r, r.child = e) } if (o = e.child, !(e.lanes & i)) { var t = o.memoizedProps; if (a = a.compare, a = a !== null ? a : Un, a(t, n) && e.ref === r.ref) return Dr(e, r, i) } return r.flags |= 1, e = Zr(o, n), e.ref = r.ref, e.return = r, r.child = e }

    function Ku(e, r, a, n, i) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (Un(o, n) && e.ref === r.ref)
                if (Pe = !1, r.pendingProps = n = o, (e.lanes & i) !== 0) e.flags & 131072 && (Pe = !0);
                else return r.lanes = e.lanes, Dr(e, r, i)
        }
        return ls(e, r, a, n, i)
    }

    function Qu(e, r, a) {
        var n = r.pendingProps,
            i = n.children,
            o = e !== null ? e.memoizedState : null;
        if (n.mode === "hidden")
            if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(Fa, Ye), Ye |= a;
            else {
                if (!(a & 1073741824)) return e = o !== null ? o.baseLanes | a : a, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, r.updateQueue = null, G(Fa, Ye), Ye |= e, null;
                r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = o !== null ? o.baseLanes : a, G(Fa, Ye), Ye |= n
            }
        else o !== null ? (n = o.baseLanes | a, r.memoizedState = null) : n = a, G(Fa, Ye), Ye |= n;
        return xe(e, r, i, a), r.child
    }

    function Zu(e, r) {
        var a = r.ref;
        (e === null && a !== null || e !== null && e.ref !== a) && (r.flags |= 512, r.flags |= 2097152)
    }

    function ls(e, r, a, n, i) { var o = De(a) ? ha : Ce.current; return o = Qa(r, o), Wa(r, i), a = sc(e, r, a, n, o, i), n = cc(), e !== null && !Pe ? (r.updateQueue = e.updateQueue, r.flags &= -2053, e.lanes &= ~i, Dr(e, r, i)) : (q && n && Qs(r), r.flags |= 1, xe(e, r, a, i), r.child) }

    function Ul(e, r, a, n, i) {
        if (De(a)) {
            var o = !0;
            no(r)
        } else o = !1;
        if (Wa(r, i), r.stateNode === null) Ii(e, r), Au(r, a, n), ss(r, a, n, i), n = !0;
        else if (e === null) {
            var t = r.stateNode,
                s = r.memoizedProps;
            t.props = s;
            var c = t.context,
                u = a.contextType;
            typeof u == "object" && u !== null ? u = We(u) : (u = De(a) ? ha : Ce.current, u = Qa(r, u));
            var m = a.getDerivedStateFromProps,
                h = typeof m == "function" || typeof t.getSnapshotBeforeUpdate == "function";
            h || typeof t.UNSAFE_componentWillReceiveProps != "function" && typeof t.componentWillReceiveProps != "function" || (s !== n || c !== u) && Tl(r, t, n, u), Rr = !1;
            var p = r.memoizedState;
            t.state = p, co(r, n, t, i), c = r.memoizedState, s !== n || p !== c || Me.current || Rr ? (typeof m == "function" && (ts(r, a, m, n), c = r.memoizedState), (s = Rr || Yl(r, a, s, n, p, c, u)) ? (h || typeof t.UNSAFE_componentWillMount != "function" && typeof t.componentWillMount != "function" || (typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount()), typeof t.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof t.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = n, r.memoizedState = c), t.props = n, t.state = c, t.context = u, n = s) : (typeof t.componentDidMount == "function" && (r.flags |= 4194308), n = !1)
        } else {
            t = r.stateNode, xu(e, r), s = r.memoizedProps, u = r.type === r.elementType ? s : Ze(r.type, s), t.props = u, h = r.pendingProps, p = t.context, c = a.contextType, typeof c == "object" && c !== null ? c = We(c) : (c = De(a) ? ha : Ce.current, c = Qa(r, c));
            var C = a.getDerivedStateFromProps;
            (m = typeof C == "function" || typeof t.getSnapshotBeforeUpdate == "function") || typeof t.UNSAFE_componentWillReceiveProps != "function" && typeof t.componentWillReceiveProps != "function" || (s !== h || p !== c) && Tl(r, t, n, c), Rr = !1, p = r.memoizedState, t.state = p, co(r, n, t, i);
            var x = r.memoizedState;
            s !== h || p !== x || Me.current || Rr ? (typeof C == "function" && (ts(r, a, C, n), x = r.memoizedState), (u = Rr || Yl(r, a, u, n, p, x, c) || !1) ? (m || typeof t.UNSAFE_componentWillUpdate != "function" && typeof t.componentWillUpdate != "function" || (typeof t.componentWillUpdate == "function" && t.componentWillUpdate(n, x, c), typeof t.UNSAFE_componentWillUpdate == "function" && t.UNSAFE_componentWillUpdate(n, x, c)), typeof t.componentDidUpdate == "function" && (r.flags |= 4), typeof t.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof t.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (r.flags |= 4), typeof t.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (r.flags |= 1024), r.memoizedProps = n, r.memoizedState = x), t.props = n, t.state = x, t.context = c, n = u) : (typeof t.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (r.flags |= 4), typeof t.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (r.flags |= 1024), n = !1)
        }
        return us(e, r, a, n, o, i)
    }

    function us(e, r, a, n, i, o) {
        Zu(e, r);
        var t = (r.flags & 128) !== 0;
        if (!n && !t) return i && _l(r, a, !1), Dr(e, r, o);
        n = r.stateNode, g1.current = r;
        var s = t && typeof a.getDerivedStateFromError != "function" ? null : n.render();
        return r.flags |= 1, e !== null && t ? (r.child = qa(r, e.child, null, o), r.child = qa(r, null, s, o)) : xe(e, r, s, o), r.memoizedState = n.state, i && _l(r, a, !0), r.child
    }

    function qu(e) {
        var r = e.stateNode;
        r.pendingContext ? wl(e, r.pendingContext, r.pendingContext !== r.context) : r.context && wl(e, r.context, !1), nc(e, r.containerInfo)
    }

    function Bl(e, r, a, n, i) { return Za(), qs(i), r.flags |= 256, xe(e, r, a, n), r.child }
    var ds = { dehydrated: null, treeContext: null, retryLane: 0 };

    function fs(e) { return { baseLanes: e, cachePool: null, transitions: null } }

    function Xu(e, r, a) {
        var n = r.pendingProps,
            i = X.current,
            o = !1,
            t = (r.flags & 128) !== 0,
            s;
        if ((s = t) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (o = !0, r.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), G(X, i & 1), e === null) return is(r), e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (r.mode & 1 ? e.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (t = n.children, e = n.fallback, o ? (n = r.mode, o = r.child, t = { mode: "hidden", children: t }, !(n & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = t) : o = Oo(t, n, 0, null), e = pa(e, n, a, null), o.return = r, e.return = r, o.sibling = e, r.child = o, r.child.memoizedState = fs(a), r.memoizedState = ds, e) : dc(r, t));
        if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return v1(e, r, t, n, s, i, a);
        if (o) { o = n.fallback, t = r.mode, i = e.child, s = i.sibling; var c = { mode: "hidden", children: n.children }; return !(t & 1) && r.child !== i ? (n = r.child, n.childLanes = 0, n.pendingProps = c, r.deletions = null) : (n = Zr(i, c), n.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? o = Zr(s, o) : (o = pa(o, t, a, null), o.flags |= 2), o.return = r, n.return = r, n.sibling = o, r.child = n, n = o, o = r.child, t = e.child.memoizedState, t = t === null ? fs(a) : { baseLanes: t.baseLanes | a, cachePool: null, transitions: t.transitions }, o.memoizedState = t, o.childLanes = e.childLanes & ~a, r.memoizedState = ds, n }
        return o = e.child, e = o.sibling, n = Zr(o, { mode: "visible", children: n.children }), !(r.mode & 1) && (n.lanes = a), n.return = r, n.sibling = null, e !== null && (a = r.deletions, a === null ? (r.deletions = [e], r.flags |= 16) : a.push(e)), r.child = n, r.memoizedState = null, n
    }

    function dc(e, r) { return r = Oo({ mode: "visible", children: r }, e.mode, 0, null), r.return = e, e.child = r }

    function wi(e, r, a, n) { return n !== null && qs(n), qa(r, e.child, null, a), e = dc(r, r.pendingProps.children), e.flags |= 2, r.memoizedState = null, e }

    function v1(e, r, a, n, i, o, t) {
        if (a) return r.flags & 256 ? (r.flags &= -257, n = xt(Error(v(422))), wi(e, r, t, n)) : r.memoizedState !== null ? (r.child = e.child, r.flags |= 128, null) : (o = n.fallback, i = r.mode, n = Oo({ mode: "visible", children: n.children }, i, 0, null), o = pa(o, i, t, null), o.flags |= 2, n.return = r, o.return = r, n.sibling = o, r.child = n, r.mode & 1 && qa(r, e.child, null, t), r.child.memoizedState = fs(t), r.memoizedState = ds, o);
        if (!(r.mode & 1)) return wi(e, r, t, null);
        if (i.data === "$!") { if (n = i.nextSibling && i.nextSibling.dataset, n) var s = n.dgst; return n = s, o = Error(v(419)), n = xt(o, n, void 0), wi(e, r, t, n) }
        if (s = (t & e.childLanes) !== 0, Pe || s) {
            if (n = fe, n !== null) {
                switch (t & -t) {
                    case 4:
                        i = 2;
                        break;
                    case 16:
                        i = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        i = 32;
                        break;
                    case 536870912:
                        i = 268435456;
                        break;
                    default:
                        i = 0
                }
                i = i & (n.suspendedLanes | t) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Mr(e, i), rr(n, e, i, -1))
            }
            return vc(), n = xt(Error(v(421))), wi(e, r, t, n)
        }
        return i.data === "$?" ? (r.flags |= 128, r.child = e.child, r = E1.bind(null, e), i._reactRetry = r, null) : (e = o.treeContext, Te = br(i.nextSibling), Ne = r, q = !0, Xe = null, e !== null && (Ve[Ie++] = Lr, Ve[Ie++] = Cr, Ve[Ie++] = ga, Lr = e.id, Cr = e.overflow, ga = r), r = dc(r, n.children), r.flags |= 4096, r)
    }

    function Wl(e, r, a) {
        e.lanes |= r;
        var n = e.alternate;
        n !== null && (n.lanes |= r), os(e.return, r, a)
    }

    function St(e, r, a, n, i) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: n, tail: a, tailMode: i } : (o.isBackwards = r, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = a, o.tailMode = i)
    }

    function Ju(e, r, a) {
        var n = r.pendingProps,
            i = n.revealOrder,
            o = n.tail;
        if (xe(e, r, n.children, a), n = X.current, n & 2) n = n & 1 | 2, r.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for (e = r.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Wl(e, a, r);
                else if (e.tag === 19) Wl(e, a, r);
                else if (e.child !== null) { e.child.return = e, e = e.child; continue }
                if (e === r) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === r) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            n &= 1
        }
        if (G(X, n), !(r.mode & 1)) r.memoizedState = null;
        else switch (i) {
            case "forwards":
                for (a = r.child, i = null; a !== null;) e = a.alternate, e !== null && lo(e) === null && (i = a), a = a.sibling;
                a = i, a === null ? (i = r.child, r.child = null) : (i = a.sibling, a.sibling = null), St(r, !1, i, a, o);
                break;
            case "backwards":
                for (a = null, i = r.child, r.child = null; i !== null;) {
                    if (e = i.alternate, e !== null && lo(e) === null) { r.child = i; break }
                    e = i.sibling, i.sibling = a, a = i, i = e
                }
                St(r, !0, a, null, o);
                break;
            case "together":
                St(r, !1, null, null, void 0);
                break;
            default:
                r.memoizedState = null
        }
        return r.child
    }

    function Ii(e, r) {!(r.mode & 1) && e !== null && (e.alternate = null, r.alternate = null, r.flags |= 2) }

    function Dr(e, r, a) {
        if (e !== null && (r.dependencies = e.dependencies), ya |= r.lanes, !(a & r.childLanes)) return null;
        if (e !== null && r.child !== e.child) throw Error(v(153));
        if (r.child !== null) {
            for (e = r.child, a = Zr(e, e.pendingProps), r.child = a, a.return = r; e.sibling !== null;) e = e.sibling, a = a.sibling = Zr(e, e.pendingProps), a.return = r;
            a.sibling = null
        }
        return r.child
    }

    function y1(e, r, a) {
        switch (r.tag) {
            case 3:
                qu(r), Za();
                break;
            case 5:
                _u(r);
                break;
            case 1:
                De(r.type) && no(r);
                break;
            case 4:
                nc(r, r.stateNode.containerInfo);
                break;
            case 10:
                var n = r.type._context,
                    i = r.memoizedProps.value;
                G(to, n._currentValue), n._currentValue = i;
                break;
            case 13:
                if (n = r.memoizedState, n !== null) return n.dehydrated !== null ? (G(X, X.current & 1), r.flags |= 128, null) : a & r.child.childLanes ? Xu(e, r, a) : (G(X, X.current & 1), e = Dr(e, r, a), e !== null ? e.sibling : null);
                G(X, X.current & 1);
                break;
            case 19:
                if (n = (a & r.childLanes) !== 0, e.flags & 128) {
                    if (n) return Ju(e, r, a);
                    r.flags |= 128
                }
                if (i = r.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), G(X, X.current), n) break;
                return null;
            case 22:
            case 23:
                return r.lanes = 0, Qu(e, r, a)
        }
        return Dr(e, r, a)
    }
    var ed, ps, rd, ad;
    ed = function(e, r) {
        for (var a = r.child; a !== null;) {
            if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
            else if (a.tag !== 4 && a.child !== null) { a.child.return = a, a = a.child; continue }
            if (a === r) break;
            for (; a.sibling === null;) {
                if (a.return === null || a.return === r) return;
                a = a.return
            }
            a.sibling.return = a.return, a = a.sibling
        }
    };
    ps = function() {};
    rd = function(e, r, a, n) {
        var i = e.memoizedProps;
        if (i !== n) {
            e = r.stateNode, ua(dr.current);
            var o = null;
            switch (a) {
                case "input":
                    i = zt(e, i), n = zt(e, n), o = [];
                    break;
                case "select":
                    i = ee({}, i, { value: void 0 }), n = ee({}, n, { value: void 0 }), o = [];
                    break;
                case "textarea":
                    i = Vt(e, i), n = Vt(e, n), o = [];
                    break;
                default:
                    typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = ro)
            }
            jt(a, n);
            var t;
            a = null;
            for (u in i)
                if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                    if (u === "style") { var s = i[u]; for (t in s) s.hasOwnProperty(t) && (a || (a = {}), a[t] = "") } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (On.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
            for (u in n) {
                var c = n[u];
                if (s = i != null ? i[u] : void 0, n.hasOwnProperty(u) && c !== s && (c != null || s != null))
                    if (u === "style")
                        if (s) { for (t in s) !s.hasOwnProperty(t) || c && c.hasOwnProperty(t) || (a || (a = {}), a[t] = ""); for (t in c) c.hasOwnProperty(t) && s[t] !== c[t] && (a || (a = {}), a[t] = c[t]) } else a || (o || (o = []), o.push(u, a)), a = c;
                else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, s = s ? s.__html : void 0, c != null && s !== c && (o = o || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (On.hasOwnProperty(u) ? (c != null && u === "onScroll" && b("scroll", e), o || s === c || (o = [])) : (o = o || []).push(u, c))
            }
            a && (o = o || []).push("style", a);
            var u = o;
            (r.updateQueue = u) && (r.flags |= 4)
        }
    };
    ad = function(e, r, a, n) { a !== n && (r.flags |= 4) };

    function gn(e, r) {
        if (!q) switch (e.tailMode) {
            case "hidden":
                r = e.tail;
                for (var a = null; r !== null;) r.alternate !== null && (a = r), r = r.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var n = null; a !== null;) a.alternate !== null && (n = a), a = a.sibling;
                n === null ? r || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
        }
    }

    function ve(e) {
        var r = e.alternate !== null && e.alternate.child === e.child,
            a = 0,
            n = 0;
        if (r)
            for (var i = e.child; i !== null;) a |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = e, i = i.sibling;
        else
            for (i = e.child; i !== null;) a |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
        return e.subtreeFlags |= n, e.childLanes = a, r
    }

    function L1(e, r, a) {
        var n = r.pendingProps;
        switch (Zs(r), r.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return ve(r), null;
            case 1:
                return De(r.type) && ao(), ve(r), null;
            case 3:
                return n = r.stateNode, Xa(), $(Me), $(Ce), oc(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ai(r) ? r.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Xe !== null && (xs(Xe), Xe = null))), ps(e, r), ve(r), null;
            case 5:
                ic(r);
                var i = ua(bn.current);
                if (a = r.type, e !== null && r.stateNode != null) rd(e, r, a, n, i), e.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
                else {
                    if (!n) { if (r.stateNode === null) throw Error(v(166)); return ve(r), null }
                    if (e = ua(dr.current), Ai(r)) {
                        n = r.stateNode, a = r.type;
                        var o = r.memoizedProps;
                        switch (n[cr] = r, n[Hn] = o, e = (r.mode & 1) !== 0, a) {
                            case "dialog":
                                b("cancel", n), b("close", n);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                b("load", n);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < An.length; i++) b(An[i], n);
                                break;
                            case "source":
                                b("error", n);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                b("error", n), b("load", n);
                                break;
                            case "details":
                                b("toggle", n);
                                break;
                            case "input":
                                Xc(n, o), b("invalid", n);
                                break;
                            case "select":
                                n._wrapperState = { wasMultiple: !!o.multiple }, b("invalid", n);
                                break;
                            case "textarea":
                                el(n, o), b("invalid", n)
                        }
                        jt(a, o), i = null;
                        for (var t in o)
                            if (o.hasOwnProperty(t)) {
                                var s = o[t];
                                t === "children" ? typeof s == "string" ? n.textContent !== s && (o.suppressHydrationWarning !== !0 && Si(n.textContent, s, e), i = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Si(n.textContent, s, e), i = ["children", "" + s]) : On.hasOwnProperty(t) && s != null && t === "onScroll" && b("scroll", n)
                            }
                        switch (a) {
                            case "input":
                                mi(n), Jc(n, o, !0);
                                break;
                            case "textarea":
                                mi(n), rl(n);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof o.onClick == "function" && (n.onclick = ro)
                        }
                        n = i, r.updateQueue = n, n !== null && (r.flags |= 4)
                    } else {
                        t = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = D0(a)), e === "http://www.w3.org/1999/xhtml" ? a === "script" ? (e = t.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = t.createElement(a, { is: n.is }) : (e = t.createElement(a), a === "select" && (t = e, n.multiple ? t.multiple = !0 : n.size && (t.size = n.size))) : e = t.createElementNS(e, a), e[cr] = r, e[Hn] = n, ed(e, r, !1, !1), r.stateNode = e;
                        e: {
                            switch (t = Ut(a, n), a) {
                                case "dialog":
                                    b("cancel", e), b("close", e), i = n;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    b("load", e), i = n;
                                    break;
                                case "video":
                                case "audio":
                                    for (i = 0; i < An.length; i++) b(An[i], e);
                                    i = n;
                                    break;
                                case "source":
                                    b("error", e), i = n;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    b("error", e), b("load", e), i = n;
                                    break;
                                case "details":
                                    b("toggle", e), i = n;
                                    break;
                                case "input":
                                    Xc(e, n), i = zt(e, n), b("invalid", e);
                                    break;
                                case "option":
                                    i = n;
                                    break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!n.multiple }, i = ee({}, n, { value: void 0 }), b("invalid", e);
                                    break;
                                case "textarea":
                                    el(e, n), i = Vt(e, n), b("invalid", e);
                                    break;
                                default:
                                    i = n
                            }
                            jt(a, i),
                            s = i;
                            for (o in s)
                                if (s.hasOwnProperty(o)) {
                                    var c = s[o];
                                    o === "style" ? T0(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && E0(e, c)) : o === "children" ? typeof c == "string" ? (a !== "textarea" || c !== "") && zn(e, c) : typeof c == "number" && zn(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (On.hasOwnProperty(o) ? c != null && o === "onScroll" && b("scroll", e) : c != null && zs(e, o, c, t))
                                }
                            switch (a) {
                                case "input":
                                    mi(e), Jc(e, n, !1);
                                    break;
                                case "textarea":
                                    mi(e), rl(e);
                                    break;
                                case "option":
                                    n.value != null && e.setAttribute("value", "" + Xr(n.value));
                                    break;
                                case "select":
                                    e.multiple = !!n.multiple, o = n.value, o != null ? Ia(e, !!n.multiple, o, !1) : n.defaultValue != null && Ia(e, !!n.multiple, n.defaultValue, !0);
                                    break;
                                default:
                                    typeof i.onClick == "function" && (e.onclick = ro)
                            }
                            switch (a) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    n = !!n.autoFocus;
                                    break e;
                                case "img":
                                    n = !0;
                                    break e;
                                default:
                                    n = !1
                            }
                        }
                        n && (r.flags |= 4)
                    }
                    r.ref !== null && (r.flags |= 512, r.flags |= 2097152)
                }
                return ve(r), null;
            case 6:
                if (e && r.stateNode != null) ad(e, r, e.memoizedProps, n);
                else {
                    if (typeof n != "string" && r.stateNode === null) throw Error(v(166));
                    if (a = ua(bn.current), ua(dr.current), Ai(r)) {
                        if (n = r.stateNode, a = r.memoizedProps, n[cr] = r, (o = n.nodeValue !== a) && (e = Ne, e !== null)) switch (e.tag) {
                            case 3:
                                Si(n.nodeValue, a, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Si(n.nodeValue, a, (e.mode & 1) !== 0)
                        }
                        o && (r.flags |= 4)
                    } else n = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(n), n[cr] = r, r.stateNode = n
                }
                return ve(r), null;
            case 13:
                if ($(X), n = r.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (q && Te !== null && r.mode & 1 && !(r.flags & 128)) Lu(), Za(), r.flags |= 98560, o = !1;
                    else if (o = Ai(r), n !== null && n.dehydrated !== null) {
                        if (e === null) {
                            if (!o) throw Error(v(318));
                            if (o = r.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(v(317));
                            o[cr] = r
                        } else Za(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
                        ve(r), o = !1
                    } else Xe !== null && (xs(Xe), Xe = null), o = !0;
                    if (!o) return r.flags & 65536 ? r : null
                }
                return r.flags & 128 ? (r.lanes = a, r) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (r.child.flags |= 8192, r.mode & 1 && (e === null || X.current & 1 ? ce === 0 && (ce = 3) : vc())), r.updateQueue !== null && (r.flags |= 4), ve(r), null);
            case 4:
                return Xa(), ps(e, r), e === null && Bn(r.stateNode.containerInfo), ve(r), null;
            case 10:
                return ec(r.type._context), ve(r), null;
            case 17:
                return De(r.type) && ao(), ve(r), null;
            case 19:
                if ($(X), o = r.memoizedState, o === null) return ve(r), null;
                if (n = (r.flags & 128) !== 0, t = o.rendering, t === null)
                    if (n) gn(o, !1);
                    else {
                        if (ce !== 0 || e !== null && e.flags & 128)
                            for (e = r.child; e !== null;) {
                                if (t = lo(e), t !== null) { for (r.flags |= 128, gn(o, !1), n = t.updateQueue, n !== null && (r.updateQueue = n, r.flags |= 4), r.subtreeFlags = 0, n = a, a = r.child; a !== null;) o = a, e = n, o.flags &= 14680066, t = o.alternate, t === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = t.childLanes, o.lanes = t.lanes, o.child = t.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = t.memoizedProps, o.memoizedState = t.memoizedState, o.updateQueue = t.updateQueue, o.type = t.type, e = t.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), a = a.sibling; return G(X, X.current & 1 | 2), r.child }
                                e = e.sibling
                            }
                        o.tail !== null && oe() > en && (r.flags |= 128, n = !0, gn(o, !1), r.lanes = 4194304)
                    }
                else {
                    if (!n)
                        if (e = lo(t), e !== null) { if (r.flags |= 128, n = !0, a = e.updateQueue, a !== null && (r.updateQueue = a, r.flags |= 4), gn(o, !0), o.tail === null && o.tailMode === "hidden" && !t.alternate && !q) return ve(r), null } else 2 * oe() - o.renderingStartTime > en && a !== 1073741824 && (r.flags |= 128, n = !0, gn(o, !1), r.lanes = 4194304);
                    o.isBackwards ? (t.sibling = r.child, r.child = t) : (a = o.last, a !== null ? a.sibling = t : r.child = t, o.last = t)
                }
                return o.tail !== null ? (r = o.tail, o.rendering = r, o.tail = r.sibling, o.renderingStartTime = oe(), r.sibling = null, a = X.current, G(X, n ? a & 1 | 2 : a & 1), r) : (ve(r), null);
            case 22:
            case 23:
                return gc(), n = r.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (r.flags |= 8192), n && r.mode & 1 ? Ye & 1073741824 && (ve(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ve(r), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(v(156, r.tag))
    }

    function C1(e, r) {
        switch (Zs(r), r.tag) {
            case 1:
                return De(r.type) && ao(), e = r.flags, e & 65536 ? (r.flags = e & -65537 | 128, r) : null;
            case 3:
                return Xa(), $(Me), $(Ce), oc(), e = r.flags, e & 65536 && !(e & 128) ? (r.flags = e & -65537 | 128, r) : null;
            case 5:
                return ic(r), null;
            case 13:
                if ($(X), e = r.memoizedState, e !== null && e.dehydrated !== null) {
                    if (r.alternate === null) throw Error(v(340));
                    Za()
                }
                return e = r.flags, e & 65536 ? (r.flags = e & -65537 | 128, r) : null;
            case 19:
                return $(X), null;
            case 4:
                return Xa(), null;
            case 10:
                return ec(r.type._context), null;
            case 22:
            case 23:
                return gc(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var _i = !1,
        ye = !1,
        x1 = typeof WeakSet == "function" ? WeakSet : Set,
        P = null;

    function Ra(e, r) {
        var a = e.ref;
        if (a !== null)
            if (typeof a == "function") try { a(null) } catch (n) { re(e, r, n) } else a.current = null
    }

    function ms(e, r, a) { try { a() } catch (n) { re(e, r, n) } }
    var Hl = !1;

    function S1(e, r) {
        if (qt = Xi, e = tu(), Ks(e)) {
            if ("selectionStart" in e) var a = { start: e.selectionStart, end: e.selectionEnd };
            else e: {
                a = (a = e.ownerDocument) && a.defaultView || window;
                var n = a.getSelection && a.getSelection();
                if (n && n.rangeCount !== 0) {
                    a = n.anchorNode;
                    var i = n.anchorOffset,
                        o = n.focusNode;
                    n = n.focusOffset;
                    try { a.nodeType, o.nodeType } catch { a = null; break e }
                    var t = 0,
                        s = -1,
                        c = -1,
                        u = 0,
                        m = 0,
                        h = e,
                        p = null;
                    r: for (;;) {
                        for (var C; h !== a || i !== 0 && h.nodeType !== 3 || (s = t + i), h !== o || n !== 0 && h.nodeType !== 3 || (c = t + n), h.nodeType === 3 && (t += h.nodeValue.length), (C = h.firstChild) !== null;) p = h, h = C;
                        for (;;) {
                            if (h === e) break r;
                            if (p === a && ++u === i && (s = t), p === o && ++m === n && (c = t), (C = h.nextSibling) !== null) break;
                            h = p, p = h.parentNode
                        }
                        h = C
                    }
                    a = s === -1 || c === -1 ? null : { start: s, end: c }
                } else a = null
            }
            a = a || { start: 0, end: 0 }
        } else a = null;
        for (Xt = { focusedElem: e, selectionRange: a }, Xi = !1, P = r; P !== null;)
            if (r = P, e = r.child, (r.subtreeFlags & 1028) !== 0 && e !== null) e.return = r, P = e;
            else
                for (; P !== null;) {
                    r = P;
                    try {
                        var x = r.alternate;
                        if (r.flags & 1024) switch (r.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (x !== null) {
                                    var A = x.memoizedProps,
                                        k = x.memoizedState,
                                        f = r.stateNode,
                                        l = f.getSnapshotBeforeUpdate(r.elementType === r.type ? A : Ze(r.type, A), k);
                                    f.__reactInternalSnapshotBeforeUpdate = l
                                }
                                break;
                            case 3:
                                var d = r.stateNode.containerInfo;
                                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(v(163))
                        }
                    } catch (g) { re(r, r.return, g) }
                    if (e = r.sibling, e !== null) { e.return = r.return, P = e; break }
                    P = r.return
                }
        return x = Hl, Hl = !1, x
    }

    function En(e, r, a) {
        var n = r.updateQueue;
        if (n = n !== null ? n.lastEffect : null, n !== null) {
            var i = n = n.next;
            do {
                if ((i.tag & e) === e) {
                    var o = i.destroy;
                    i.destroy = void 0, o !== void 0 && ms(r, a, o)
                }
                i = i.next
            } while (i !== n)
        }
    }

    function To(e, r) {
        if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
            var a = r = r.next;
            do {
                if ((a.tag & e) === e) {
                    var n = a.create;
                    a.destroy = n()
                }
                a = a.next
            } while (a !== r)
        }
    }

    function hs(e) {
        var r = e.ref;
        if (r !== null) {
            var a = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = a;
                    break;
                default:
                    e = a
            }
            typeof r == "function" ? r(e) : r.current = e
        }
    }

    function nd(e) {
        var r = e.alternate;
        r !== null && (e.alternate = null, nd(r)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (r = e.stateNode, r !== null && (delete r[cr], delete r[Hn], delete r[rs], delete r[i1], delete r[o1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function id(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 }

    function Gl(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || id(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function gs(e, r, a) {
        var n = e.tag;
        if (n === 5 || n === 6) e = e.stateNode, r ? a.nodeType === 8 ? a.parentNode.insertBefore(e, r) : a.insertBefore(e, r) : (a.nodeType === 8 ? (r = a.parentNode, r.insertBefore(e, a)) : (r = a, r.appendChild(e)), a = a._reactRootContainer, a != null || r.onclick !== null || (r.onclick = ro));
        else if (n !== 4 && (e = e.child, e !== null))
            for (gs(e, r, a), e = e.sibling; e !== null;) gs(e, r, a), e = e.sibling
    }

    function vs(e, r, a) {
        var n = e.tag;
        if (n === 5 || n === 6) e = e.stateNode, r ? a.insertBefore(e, r) : a.appendChild(e);
        else if (n !== 4 && (e = e.child, e !== null))
            for (vs(e, r, a), e = e.sibling; e !== null;) vs(e, r, a), e = e.sibling
    }
    var pe = null,
        qe = !1;

    function Or(e, r, a) { for (a = a.child; a !== null;) od(e, r, a), a = a.sibling }

    function od(e, r, a) {
        if (ur && typeof ur.onCommitFiberUnmount == "function") try { ur.onCommitFiberUnmount(ko, a) } catch {}
        switch (a.tag) {
            case 5:
                ye || Ra(a, r);
            case 6:
                var n = pe,
                    i = qe;
                pe = null, Or(e, r, a), pe = n, qe = i, pe !== null && (qe ? (e = pe, a = a.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(a) : e.removeChild(a)) : pe.removeChild(a.stateNode));
                break;
            case 18:
                pe !== null && (qe ? (e = pe, a = a.stateNode, e.nodeType === 8 ? ht(e.parentNode, a) : e.nodeType === 1 && ht(e, a), In(e)) : ht(pe, a.stateNode));
                break;
            case 4:
                n = pe, i = qe, pe = a.stateNode.containerInfo, qe = !0, Or(e, r, a), pe = n, qe = i;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!ye && (n = a.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                    i = n = n.next;
                    do {
                        var o = i,
                            t = o.destroy;
                        o = o.tag, t !== void 0 && (o & 2 || o & 4) && ms(a, r, t), i = i.next
                    } while (i !== n)
                }
                Or(e, r, a);
                break;
            case 1:
                if (!ye && (Ra(a, r), n = a.stateNode, typeof n.componentWillUnmount == "function")) try { n.props = a.memoizedProps, n.state = a.memoizedState, n.componentWillUnmount() } catch (s) { re(a, r, s) }
                Or(e, r, a);
                break;
            case 21:
                Or(e, r, a);
                break;
            case 22:
                a.mode & 1 ? (ye = (n = ye) || a.memoizedState !== null, Or(e, r, a), ye = n) : Or(e, r, a);
                break;
            default:
                Or(e, r, a)
        }
    }

    function bl(e) {
        var r = e.updateQueue;
        if (r !== null) {
            e.updateQueue = null;
            var a = e.stateNode;
            a === null && (a = e.stateNode = new x1), r.forEach(function(n) {
                var i = Y1.bind(null, e, n);
                a.has(n) || (a.add(n), n.then(i, i))
            })
        }
    }

    function Ke(e, r) {
        var a = r.deletions;
        if (a !== null)
            for (var n = 0; n < a.length; n++) {
                var i = a[n];
                try {
                    var o = e,
                        t = r,
                        s = t;
                    e: for (; s !== null;) {
                        switch (s.tag) {
                            case 5:
                                pe = s.stateNode, qe = !1;
                                break e;
                            case 3:
                                pe = s.stateNode.containerInfo, qe = !0;
                                break e;
                            case 4:
                                pe = s.stateNode.containerInfo, qe = !0;
                                break e
                        }
                        s = s.return
                    }
                    if (pe === null) throw Error(v(160));
                    od(o, t, i), pe = null, qe = !1;
                    var c = i.alternate;
                    c !== null && (c.return = null), i.return = null
                } catch (u) { re(i, r, u) }
            }
        if (r.subtreeFlags & 12854)
            for (r = r.child; r !== null;) td(r, e), r = r.sibling
    }

    function td(e, r) {
        var a = e.alternate,
            n = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (Ke(r, e), tr(e), n & 4) { try { En(3, e, e.return), To(3, e) } catch (A) { re(e, e.return, A) } try { En(5, e, e.return) } catch (A) { re(e, e.return, A) } }
                break;
            case 1:
                Ke(r, e), tr(e), n & 512 && a !== null && Ra(a, a.return);
                break;
            case 5:
                if (Ke(r, e), tr(e), n & 512 && a !== null && Ra(a, a.return), e.flags & 32) { var i = e.stateNode; try { zn(i, "") } catch (A) { re(e, e.return, A) } }
                if (n & 4 && (i = e.stateNode, i != null)) {
                    var o = e.memoizedProps,
                        t = a !== null ? a.memoizedProps : o,
                        s = e.type,
                        c = e.updateQueue;
                    if (e.updateQueue = null, c !== null) try {
                        s === "input" && o.type === "radio" && o.name != null && P0(i, o), Ut(s, t);
                        var u = Ut(s, o);
                        for (t = 0; t < c.length; t += 2) {
                            var m = c[t],
                                h = c[t + 1];
                            m === "style" ? T0(i, h) : m === "dangerouslySetInnerHTML" ? E0(i, h) : m === "children" ? zn(i, h) : zs(i, m, h, u)
                        }
                        switch (s) {
                            case "input":
                                Rt(i, o);
                                break;
                            case "textarea":
                                M0(i, o);
                                break;
                            case "select":
                                var p = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var C = o.value;
                                C != null ? Ia(i, !!o.multiple, C, !1) : p !== !!o.multiple && (o.defaultValue != null ? Ia(i, !!o.multiple, o.defaultValue, !0) : Ia(i, !!o.multiple, o.multiple ? [] : "", !1))
                        }
                        i[Hn] = o
                    } catch (A) { re(e, e.return, A) }
                }
                break;
            case 6:
                if (Ke(r, e), tr(e), n & 4) {
                    if (e.stateNode === null) throw Error(v(162));
                    i = e.stateNode, o = e.memoizedProps;
                    try { i.nodeValue = o } catch (A) { re(e, e.return, A) }
                }
                break;
            case 3:
                if (Ke(r, e), tr(e), n & 4 && a !== null && a.memoizedState.isDehydrated) try { In(r.containerInfo) } catch (A) { re(e, e.return, A) }
                break;
            case 4:
                Ke(r, e), tr(e);
                break;
            case 13:
                Ke(r, e), tr(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (mc = oe())), n & 4 && bl(e);
                break;
            case 22:
                if (m = a !== null && a.memoizedState !== null, e.mode & 1 ? (ye = (u = ye) || m, Ke(r, e), ye = u) : Ke(r, e), tr(e), n & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !m && e.mode & 1)
                        for (P = e, m = e.child; m !== null;) {
                            for (h = P = m; P !== null;) {
                                switch (p = P, C = p.child, p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        En(4, p, p.return);
                                        break;
                                    case 1:
                                        Ra(p, p.return);
                                        var x = p.stateNode;
                                        if (typeof x.componentWillUnmount == "function") { n = p, a = p.return; try { r = n, x.props = r.memoizedProps, x.state = r.memoizedState, x.componentWillUnmount() } catch (A) { re(n, a, A) } }
                                        break;
                                    case 5:
                                        Ra(p, p.return);
                                        break;
                                    case 22:
                                        if (p.memoizedState !== null) { Kl(h); continue }
                                }
                                C !== null ? (C.return = p, P = C) : Kl(h)
                            }
                            m = m.sibling
                        }
                    e: for (m = null, h = e;;) {
                        if (h.tag === 5) { if (m === null) { m = h; try { i = h.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = h.stateNode, c = h.memoizedProps.style, t = c != null && c.hasOwnProperty("display") ? c.display : null, s.style.display = Y0("display", t)) } catch (A) { re(e, e.return, A) } } } else if (h.tag === 6) { if (m === null) try { h.stateNode.nodeValue = u ? "" : h.memoizedProps } catch (A) { re(e, e.return, A) } } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) { h.child.return = h, h = h.child; continue }
                        if (h === e) break e;
                        for (; h.sibling === null;) {
                            if (h.return === null || h.return === e) break e;
                            m === h && (m = null), h = h.return
                        }
                        m === h && (m = null), h.sibling.return = h.return, h = h.sibling
                    }
                }
                break;
            case 19:
                Ke(r, e), tr(e), n & 4 && bl(e);
                break;
            case 21:
                break;
            default:
                Ke(r, e), tr(e)
        }
    }

    function tr(e) {
        var r = e.flags;
        if (r & 2) {
            try {
                e: {
                    for (var a = e.return; a !== null;) {
                        if (id(a)) { var n = a; break e }
                        a = a.return
                    }
                    throw Error(v(160))
                }
                switch (n.tag) {
                    case 5:
                        var i = n.stateNode;
                        n.flags & 32 && (zn(i, ""), n.flags &= -33);
                        var o = Gl(e);
                        vs(e, o, i);
                        break;
                    case 3:
                    case 4:
                        var t = n.stateNode.containerInfo,
                            s = Gl(e);
                        gs(e, s, t);
                        break;
                    default:
                        throw Error(v(161))
                }
            }
            catch (c) { re(e, e.return, c) }
            e.flags &= -3
        }
        r & 4096 && (e.flags &= -4097)
    }

    function A1(e, r, a) { P = e, sd(e) }

    function sd(e, r, a) {
        for (var n = (e.mode & 1) !== 0; P !== null;) {
            var i = P,
                o = i.child;
            if (i.tag === 22 && n) {
                var t = i.memoizedState !== null || _i;
                if (!t) {
                    var s = i.alternate,
                        c = s !== null && s.memoizedState !== null || ye;
                    s = _i;
                    var u = ye;
                    if (_i = t, (ye = c) && !u)
                        for (P = i; P !== null;) t = P, c = t.child, t.tag === 22 && t.memoizedState !== null ? Ql(i) : c !== null ? (c.return = t, P = c) : Ql(i);
                    for (; o !== null;) P = o, sd(o), o = o.sibling;
                    P = i, _i = s, ye = u
                }
                $l(e)
            } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, P = o) : $l(e)
        }
    }

    function $l(e) {
        for (; P !== null;) {
            var r = P;
            if (r.flags & 8772) {
                var a = r.alternate;
                try {
                    if (r.flags & 8772) switch (r.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ye || To(5, r);
                            break;
                        case 1:
                            var n = r.stateNode;
                            if (r.flags & 4 && !ye)
                                if (a === null) n.componentDidMount();
                                else {
                                    var i = r.elementType === r.type ? a.memoizedProps : Ze(r.type, a.memoizedProps);
                                    n.componentDidUpdate(i, a.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                                }
                            var o = r.updateQueue;
                            o !== null && El(r, o, n);
                            break;
                        case 3:
                            var t = r.updateQueue;
                            if (t !== null) {
                                if (a = null, r.child !== null) switch (r.child.tag) {
                                    case 5:
                                        a = r.child.stateNode;
                                        break;
                                    case 1:
                                        a = r.child.stateNode
                                }
                                El(r, t, a)
                            }
                            break;
                        case 5:
                            var s = r.stateNode;
                            if (a === null && r.flags & 4) {
                                a = s;
                                var c = r.memoizedProps;
                                switch (r.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        c.autoFocus && a.focus();
                                        break;
                                    case "img":
                                        c.src && (a.src = c.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (r.memoizedState === null) {
                                var u = r.alternate;
                                if (u !== null) {
                                    var m = u.memoizedState;
                                    if (m !== null) {
                                        var h = m.dehydrated;
                                        h !== null && In(h)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(v(163))
                    }
                    ye || r.flags & 512 && hs(r)
                } catch (p) { re(r, r.return, p) }
            }
            if (r === e) { P = null; break }
            if (a = r.sibling, a !== null) { a.return = r.return, P = a; break }
            P = r.return
        }
    }

    function Kl(e) {
        for (; P !== null;) {
            var r = P;
            if (r === e) { P = null; break }
            var a = r.sibling;
            if (a !== null) { a.return = r.return, P = a; break }
            P = r.return
        }
    }

    function Ql(e) {
        for (; P !== null;) {
            var r = P;
            try {
                switch (r.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var a = r.return;
                        try { To(4, r) } catch (c) { re(r, a, c) }
                        break;
                    case 1:
                        var n = r.stateNode;
                        if (typeof n.componentDidMount == "function") { var i = r.return; try { n.componentDidMount() } catch (c) { re(r, i, c) } }
                        var o = r.return;
                        try { hs(r) } catch (c) { re(r, o, c) }
                        break;
                    case 5:
                        var t = r.return;
                        try { hs(r) } catch (c) { re(r, t, c) }
                }
            } catch (c) { re(r, r.return, c) }
            if (r === e) { P = null; break }
            var s = r.sibling;
            if (s !== null) { s.return = r.return, P = s; break }
            P = r.return
        }
    }
    var k1 = Math.ceil,
        po = Yr.ReactCurrentDispatcher,
        fc = Yr.ReactCurrentOwner,
        Be = Yr.ReactCurrentBatchConfig,
        j = 0,
        fe = null,
        te = null,
        me = 0,
        Ye = 0,
        Fa = ra(0),
        ce = 0,
        Zn = null,
        ya = 0,
        No = 0,
        pc = 0,
        Yn = null,
        _e = null,
        mc = 0,
        en = 1 / 0,
        gr = null,
        mo = !1,
        ys = null,
        Kr = null,
        Pi = !1,
        jr = null,
        ho = 0,
        Tn = 0,
        Ls = null,
        ji = -1,
        Ui = 0;

    function Se() { return j & 6 ? oe() : ji !== -1 ? ji : ji = oe() }

    function Qr(e) { return e.mode & 1 ? j & 2 && me !== 0 ? me & -me : s1.transition !== null ? (Ui === 0 && (Ui = H0()), Ui) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : q0(e.type)), e) : 1 }

    function rr(e, r, a, n) {
        if (50 < Tn) throw Tn = 0, Ls = null, Error(v(185));
        ai(e, a, n), (!(j & 2) || e !== fe) && (e === fe && (!(j & 2) && (No |= a), ce === 4 && Vr(e, me)), Ee(e, n), a === 1 && j === 0 && !(r.mode & 1) && (en = oe() + 500, Do && aa()))
    }

    function Ee(e, r) {
        var a = e.callbackNode;
        s2(e, r);
        var n = qi(e, e === fe ? me : 0);
        if (n === 0) a !== null && il(a), e.callbackNode = null, e.callbackPriority = 0;
        else if (r = n & -n, e.callbackPriority !== r) {
            if (a != null && il(a), r === 1) e.tag === 0 ? t1(Zl.bind(null, e)) : gu(Zl.bind(null, e)), a1(function() {!(j & 6) && aa() }), a = null;
            else {
                switch (G0(n)) {
                    case 1:
                        a = js;
                        break;
                    case 4:
                        a = B0;
                        break;
                    case 16:
                        a = Zi;
                        break;
                    case 536870912:
                        a = W0;
                        break;
                    default:
                        a = Zi
                }
                a = hd(a, cd.bind(null, e))
            }
            e.callbackPriority = r, e.callbackNode = a
        }
    }

    function cd(e, r) {
        if (ji = -1, Ui = 0, j & 6) throw Error(v(327));
        var a = e.callbackNode;
        if (Ha() && e.callbackNode !== a) return null;
        var n = qi(e, e === fe ? me : 0);
        if (n === 0) return null;
        if (n & 30 || n & e.expiredLanes || r) r = go(e, n);
        else {
            r = n;
            var i = j;
            j |= 2;
            var o = ud();
            (fe !== e || me !== r) && (gr = null, en = oe() + 500, fa(e, r));
            do try { P1(); break } catch (s) { ld(e, s) }
            while (!0);
            Js(), po.current = o, j = i, te !== null ? r = 0 : (fe = null, me = 0, r = ce)
        }
        if (r !== 0) {
            if (r === 2 && (i = bt(e), i !== 0 && (n = i, r = Cs(e, i))), r === 1) throw a = Zn, fa(e, 0), Vr(e, n), Ee(e, oe()), a;
            if (r === 6) Vr(e, n);
            else {
                if (i = e.current.alternate, !(n & 30) && !w1(i) && (r = go(e, n), r === 2 && (o = bt(e), o !== 0 && (n = o, r = Cs(e, o))), r === 1)) throw a = Zn, fa(e, 0), Vr(e, n), Ee(e, oe()), a;
                switch (e.finishedWork = i, e.finishedLanes = n, r) {
                    case 0:
                    case 1:
                        throw Error(v(345));
                    case 2:
                        sa(e, _e, gr);
                        break;
                    case 3:
                        if (Vr(e, n), (n & 130023424) === n && (r = mc + 500 - oe(), 10 < r)) {
                            if (qi(e, 0) !== 0) break;
                            if (i = e.suspendedLanes, (i & n) !== n) { Se(), e.pingedLanes |= e.suspendedLanes & i; break }
                            e.timeoutHandle = es(sa.bind(null, e, _e, gr), r);
                            break
                        }
                        sa(e, _e, gr);
                        break;
                    case 4:
                        if (Vr(e, n), (n & 4194240) === n) break;
                        for (r = e.eventTimes, i = -1; 0 < n;) {
                            var t = 31 - er(n);
                            o = 1 << t, t = r[t], t > i && (i = t), n &= ~o
                        }
                        if (n = i, n = oe() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * k1(n / 1960)) - n, 10 < n) { e.timeoutHandle = es(sa.bind(null, e, _e, gr), n); break }
                        sa(e, _e, gr);
                        break;
                    case 5:
                        sa(e, _e, gr);
                        break;
                    default:
                        throw Error(v(329))
                }
            }
        }
        return Ee(e, oe()), e.callbackNode === a ? cd.bind(null, e) : null
    }

    function Cs(e, r) { var a = Yn; return e.current.memoizedState.isDehydrated && (fa(e, r).flags |= 256), e = go(e, r), e !== 2 && (r = _e, _e = a, r !== null && xs(r)), e }

    function xs(e) { _e === null ? _e = e : _e.push.apply(_e, e) }

    function w1(e) {
        for (var r = e;;) {
            if (r.flags & 16384) {
                var a = r.updateQueue;
                if (a !== null && (a = a.stores, a !== null))
                    for (var n = 0; n < a.length; n++) {
                        var i = a[n],
                            o = i.getSnapshot;
                        i = i.value;
                        try { if (!ar(o(), i)) return !1 } catch { return !1 }
                    }
            }
            if (a = r.child, r.subtreeFlags & 16384 && a !== null) a.return = r, r = a;
            else {
                if (r === e) break;
                for (; r.sibling === null;) {
                    if (r.return === null || r.return === e) return !0;
                    r = r.return
                }
                r.sibling.return = r.return, r = r.sibling
            }
        }
        return !0
    }

    function Vr(e, r) {
        for (r &= ~pc, r &= ~No, e.suspendedLanes |= r, e.pingedLanes &= ~r, e = e.expirationTimes; 0 < r;) {
            var a = 31 - er(r),
                n = 1 << a;
            e[a] = -1, r &= ~n
        }
    }

    function Zl(e) {
        if (j & 6) throw Error(v(327));
        Ha();
        var r = qi(e, 0);
        if (!(r & 1)) return Ee(e, oe()), null;
        var a = go(e, r);
        if (e.tag !== 0 && a === 2) {
            var n = bt(e);
            n !== 0 && (r = n, a = Cs(e, n))
        }
        if (a === 1) throw a = Zn, fa(e, 0), Vr(e, r), Ee(e, oe()), a;
        if (a === 6) throw Error(v(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = r, sa(e, _e, gr), Ee(e, oe()), null
    }

    function hc(e, r) {
        var a = j;
        j |= 1;
        try { return e(r) } finally { j = a, j === 0 && (en = oe() + 500, Do && aa()) }
    }

    function La(e) {
        jr !== null && jr.tag === 0 && !(j & 6) && Ha();
        var r = j;
        j |= 1;
        var a = Be.transition,
            n = W;
        try { if (Be.transition = null, W = 1, e) return e() } finally { W = n, Be.transition = a, j = r, !(j & 6) && aa() }
    }

    function gc() { Ye = Fa.current, $(Fa) }

    function fa(e, r) {
        e.finishedWork = null, e.finishedLanes = 0;
        var a = e.timeoutHandle;
        if (a !== -1 && (e.timeoutHandle = -1, r1(a)), te !== null)
            for (a = te.return; a !== null;) {
                var n = a;
                switch (Zs(n), n.tag) {
                    case 1:
                        n = n.type.childContextTypes, n != null && ao();
                        break;
                    case 3:
                        Xa(), $(Me), $(Ce), oc();
                        break;
                    case 5:
                        ic(n);
                        break;
                    case 4:
                        Xa();
                        break;
                    case 13:
                        $(X);
                        break;
                    case 19:
                        $(X);
                        break;
                    case 10:
                        ec(n.type._context);
                        break;
                    case 22:
                    case 23:
                        gc()
                }
                a = a.return
            }
        if (fe = e, te = e = Zr(e.current, null), me = Ye = r, ce = 0, Zn = null, pc = No = ya = 0, _e = Yn = null, la !== null) {
            for (r = 0; r < la.length; r++)
                if (a = la[r], n = a.interleaved, n !== null) {
                    a.interleaved = null;
                    var i = n.next,
                        o = a.pending;
                    if (o !== null) {
                        var t = o.next;
                        o.next = i, n.next = t
                    }
                    a.pending = n
                }
            la = null
        }
        return e
    }

    function ld(e, r) {
        do {
            var a = te;
            try {
                if (Js(), Fi.current = fo, uo) {
                    for (var n = J.memoizedState; n !== null;) {
                        var i = n.queue;
                        i !== null && (i.pending = null), n = n.next
                    }
                    uo = !1
                }
                if (va = 0, de = se = J = null, Dn = !1, $n = 0, fc.current = null, a === null || a.return === null) { ce = 1, Zn = r, te = null; break }
                e: {
                    var o = e,
                        t = a.return,
                        s = a,
                        c = r;
                    if (r = me, s.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
                        var u = c,
                            m = s,
                            h = m.tag;
                        if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                            var p = m.alternate;
                            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null)
                        }
                        var C = Fl(t);
                        if (C !== null) {
                            C.flags &= -257, Vl(C, t, s, o, r), C.mode & 1 && Rl(o, u, r), r = C, c = u;
                            var x = r.updateQueue;
                            if (x === null) {
                                var A = new Set;
                                A.add(c), r.updateQueue = A
                            } else x.add(c);
                            break e
                        } else {
                            if (!(r & 1)) { Rl(o, u, r), vc(); break e }
                            c = Error(v(426))
                        }
                    } else if (q && s.mode & 1) { var k = Fl(t); if (k !== null) {!(k.flags & 65536) && (k.flags |= 256), Vl(k, t, s, o, r), qs(Ja(c, s)); break e } }
                    o = c = Ja(c, s),
                    ce !== 4 && (ce = 2),
                    Yn === null ? Yn = [o] : Yn.push(o),
                    o = t;do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, r &= -r, o.lanes |= r;
                                var f = bu(o, c, r);
                                Dl(o, f);
                                break e;
                            case 1:
                                s = c;
                                var l = o.type,
                                    d = o.stateNode;
                                if (!(o.flags & 128) && (typeof l.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Kr === null || !Kr.has(d)))) {
                                    o.flags |= 65536, r &= -r, o.lanes |= r;
                                    var g = $u(o, s, r);
                                    Dl(o, g);
                                    break e
                                }
                        }
                        o = o.return
                    } while (o !== null)
                }
                fd(a)
            } catch (_) { r = _, te === a && a !== null && (te = a = a.return); continue }
            break
        } while (!0)
    }

    function ud() { var e = po.current; return po.current = fo, e === null ? fo : e }

    function vc() {
        (ce === 0 || ce === 3 || ce === 2) && (ce = 4), fe === null || !(ya & 268435455) && !(No & 268435455) || Vr(fe, me)
    }

    function go(e, r) {
        var a = j;
        j |= 2;
        var n = ud();
        (fe !== e || me !== r) && (gr = null, fa(e, r));
        do try { _1(); break } catch (i) { ld(e, i) }
        while (!0);
        if (Js(), j = a, po.current = n, te !== null) throw Error(v(261));
        return fe = null, me = 0, ce
    }

    function _1() { for (; te !== null;) dd(te) }

    function P1() { for (; te !== null && !Xf();) dd(te) }

    function dd(e) {
        var r = md(e.alternate, e, Ye);
        e.memoizedProps = e.pendingProps, r === null ? fd(e) : te = r, fc.current = null
    }

    function fd(e) {
        var r = e;
        do {
            var a = r.alternate;
            if (e = r.return, r.flags & 32768) {
                if (a = C1(a, r), a !== null) { a.flags &= 32767, te = a; return }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else { ce = 6, te = null; return }
            } else if (a = L1(a, r, Ye), a !== null) { te = a; return }
            if (r = r.sibling, r !== null) { te = r; return }
            te = r = e
        } while (r !== null);
        ce === 0 && (ce = 5)
    }

    function sa(e, r, a) {
        var n = W,
            i = Be.transition;
        try { Be.transition = null, W = 1, M1(e, r, a, n) } finally { Be.transition = i, W = n }
        return null
    }

    function M1(e, r, a, n) {
        do Ha(); while (jr !== null);
        if (j & 6) throw Error(v(327));
        a = e.finishedWork;
        var i = e.finishedLanes;
        if (a === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, a === e.current) throw Error(v(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var o = a.lanes | a.childLanes;
        if (c2(e, o), e === fe && (te = fe = null, me = 0), !(a.subtreeFlags & 2064) && !(a.flags & 2064) || Pi || (Pi = !0, hd(Zi, function() { return Ha(), null })), o = (a.flags & 15990) !== 0, a.subtreeFlags & 15990 || o) {
            o = Be.transition, Be.transition = null;
            var t = W;
            W = 1;
            var s = j;
            j |= 4, fc.current = null, S1(e, a), td(a, e), K2(Xt), Xi = !!qt, Xt = qt = null, e.current = a, A1(a), Jf(), j = s, W = t, Be.transition = o
        } else e.current = a;
        if (Pi && (Pi = !1, jr = e, ho = i), o = e.pendingLanes, o === 0 && (Kr = null), a2(a.stateNode), Ee(e, oe()), r !== null)
            for (n = e.onRecoverableError, a = 0; a < r.length; a++) i = r[a], n(i.value, { componentStack: i.stack, digest: i.digest });
        if (mo) throw mo = !1, e = ys, ys = null, e;
        return ho & 1 && e.tag !== 0 && Ha(), o = e.pendingLanes, o & 1 ? e === Ls ? Tn++ : (Tn = 0, Ls = e) : Tn = 0, aa(), null
    }

    function Ha() {
        if (jr !== null) {
            var e = G0(ho),
                r = Be.transition,
                a = W;
            try {
                if (Be.transition = null, W = 16 > e ? 16 : e, jr === null) var n = !1;
                else {
                    if (e = jr, jr = null, ho = 0, j & 6) throw Error(v(331));
                    var i = j;
                    for (j |= 4, P = e.current; P !== null;) {
                        var o = P,
                            t = o.child;
                        if (P.flags & 16) {
                            var s = o.deletions;
                            if (s !== null) {
                                for (var c = 0; c < s.length; c++) {
                                    var u = s[c];
                                    for (P = u; P !== null;) {
                                        var m = P;
                                        switch (m.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                En(8, m, o)
                                        }
                                        var h = m.child;
                                        if (h !== null) h.return = m, P = h;
                                        else
                                            for (; P !== null;) {
                                                m = P;
                                                var p = m.sibling,
                                                    C = m.return;
                                                if (nd(m), m === u) { P = null; break }
                                                if (p !== null) { p.return = C, P = p; break }
                                                P = C
                                            }
                                    }
                                }
                                var x = o.alternate;
                                if (x !== null) {
                                    var A = x.child;
                                    if (A !== null) {
                                        x.child = null;
                                        do {
                                            var k = A.sibling;
                                            A.sibling = null, A = k
                                        } while (A !== null)
                                    }
                                }
                                P = o
                            }
                        }
                        if (o.subtreeFlags & 2064 && t !== null) t.return = o, P = t;
                        else e: for (; P !== null;) {
                            if (o = P, o.flags & 2048) switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    En(9, o, o.return)
                            }
                            var f = o.sibling;
                            if (f !== null) { f.return = o.return, P = f; break e }
                            P = o.return
                        }
                    }
                    var l = e.current;
                    for (P = l; P !== null;) {
                        t = P;
                        var d = t.child;
                        if (t.subtreeFlags & 2064 && d !== null) d.return = t, P = d;
                        else e: for (t = l; P !== null;) {
                            if (s = P, s.flags & 2048) try {
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        To(9, s)
                                }
                            } catch (_) { re(s, s.return, _) }
                            if (s === t) { P = null; break e }
                            var g = s.sibling;
                            if (g !== null) { g.return = s.return, P = g; break e }
                            P = s.return
                        }
                    }
                    if (j = i, aa(), ur && typeof ur.onPostCommitFiberRoot == "function") try { ur.onPostCommitFiberRoot(ko, e) } catch {}
                    n = !0
                }
                return n
            } finally { W = a, Be.transition = r }
        }
        return !1
    }

    function ql(e, r, a) { r = Ja(a, r), r = bu(e, r, 1), e = $r(e, r, 1), r = Se(), e !== null && (ai(e, 1, r), Ee(e, r)) }

    function re(e, r, a) {
        if (e.tag === 3) ql(e, e, a);
        else
            for (; r !== null;) {
                if (r.tag === 3) { ql(r, e, a); break } else if (r.tag === 1) { var n = r.stateNode; if (typeof r.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Kr === null || !Kr.has(n))) { e = Ja(a, e), e = $u(r, e, 1), r = $r(r, e, 1), e = Se(), r !== null && (ai(r, 1, e), Ee(r, e)); break } }
                r = r.return
            }
    }

    function D1(e, r, a) {
        var n = e.pingCache;
        n !== null && n.delete(r), r = Se(), e.pingedLanes |= e.suspendedLanes & a, fe === e && (me & a) === a && (ce === 4 || ce === 3 && (me & 130023424) === me && 500 > oe() - mc ? fa(e, 0) : pc |= a), Ee(e, r)
    }

    function pd(e, r) {
        r === 0 && (e.mode & 1 ? (r = vi, vi <<= 1, !(vi & 130023424) && (vi = 4194304)) : r = 1);
        var a = Se();
        e = Mr(e, r), e !== null && (ai(e, r, a), Ee(e, a))
    }

    function E1(e) {
        var r = e.memoizedState,
            a = 0;
        r !== null && (a = r.retryLane), pd(e, a)
    }

    function Y1(e, r) {
        var a = 0;
        switch (e.tag) {
            case 13:
                var n = e.stateNode,
                    i = e.memoizedState;
                i !== null && (a = i.retryLane);
                break;
            case 19:
                n = e.stateNode;
                break;
            default:
                throw Error(v(314))
        }
        n !== null && n.delete(r), pd(e, a)
    }
    var md;
    md = function(e, r, a) {
        if (e !== null)
            if (e.memoizedProps !== r.pendingProps || Me.current) Pe = !0;
            else {
                if (!(e.lanes & a) && !(r.flags & 128)) return Pe = !1, y1(e, r, a);
                Pe = !!(e.flags & 131072)
            }
        else Pe = !1, q && r.flags & 1048576 && vu(r, oo, r.index);
        switch (r.lanes = 0, r.tag) {
            case 2:
                var n = r.type;
                Ii(e, r), e = r.pendingProps;
                var i = Qa(r, Ce.current);
                Wa(r, a), i = sc(null, r, n, e, i, a);
                var o = cc();
                return r.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, De(n) ? (o = !0, no(r)) : o = !1, r.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ac(r), i.updater = Eo, r.stateNode = i, i._reactInternals = r, ss(r, n, e, a), r = us(null, r, n, !0, o, a)) : (r.tag = 0, q && o && Qs(r), xe(null, r, i, a), r = r.child), r;
            case 16:
                n = r.elementType;
                e: {
                    switch (Ii(e, r), e = r.pendingProps, i = n._init, n = i(n._payload), r.type = n, i = r.tag = N1(n), e = Ze(n, e), i) {
                        case 0:
                            r = ls(null, r, n, e, a);
                            break e;
                        case 1:
                            r = Ul(null, r, n, e, a);
                            break e;
                        case 11:
                            r = Il(null, r, n, e, a);
                            break e;
                        case 14:
                            r = jl(null, r, n, Ze(n.type, e), a);
                            break e
                    }
                    throw Error(v(306, n, ""))
                }
                return r;
            case 0:
                return n = r.type, i = r.pendingProps, i = r.elementType === n ? i : Ze(n, i), ls(e, r, n, i, a);
            case 1:
                return n = r.type, i = r.pendingProps, i = r.elementType === n ? i : Ze(n, i), Ul(e, r, n, i, a);
            case 3:
                e: {
                    if (qu(r), e === null) throw Error(v(387));n = r.pendingProps,
                    o = r.memoizedState,
                    i = o.element,
                    xu(e, r),
                    co(r, n, null, a);
                    var t = r.memoizedState;
                    if (n = t.element, o.isDehydrated)
                        if (o = { element: n, isDehydrated: !1, cache: t.cache, pendingSuspenseBoundaries: t.pendingSuspenseBoundaries, transitions: t.transitions }, r.updateQueue.baseState = o, r.memoizedState = o, r.flags & 256) { i = Ja(Error(v(423)), r), r = Bl(e, r, n, a, i); break e } else if (n !== i) { i = Ja(Error(v(424)), r), r = Bl(e, r, n, a, i); break e } else
                        for (Te = br(r.stateNode.containerInfo.firstChild), Ne = r, q = !0, Xe = null, a = wu(r, null, n, a), r.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
                    else {
                        if (Za(), n === i) { r = Dr(e, r, a); break e }
                        xe(e, r, n, a)
                    }
                    r = r.child
                }
                return r;
            case 5:
                return _u(r), e === null && is(r), n = r.type, i = r.pendingProps, o = e !== null ? e.memoizedProps : null, t = i.children, Jt(n, i) ? t = null : o !== null && Jt(n, o) && (r.flags |= 32), Zu(e, r), xe(e, r, t, a), r.child;
            case 6:
                return e === null && is(r), null;
            case 13:
                return Xu(e, r, a);
            case 4:
                return nc(r, r.stateNode.containerInfo), n = r.pendingProps, e === null ? r.child = qa(r, null, n, a) : xe(e, r, n, a), r.child;
            case 11:
                return n = r.type, i = r.pendingProps, i = r.elementType === n ? i : Ze(n, i), Il(e, r, n, i, a);
            case 7:
                return xe(e, r, r.pendingProps, a), r.child;
            case 8:
                return xe(e, r, r.pendingProps.children, a), r.child;
            case 12:
                return xe(e, r, r.pendingProps.children, a), r.child;
            case 10:
                e: {
                    if (n = r.type._context, i = r.pendingProps, o = r.memoizedProps, t = i.value, G(to, n._currentValue), n._currentValue = t, o !== null)
                        if (ar(o.value, t)) { if (o.children === i.children && !Me.current) { r = Dr(e, r, a); break e } } else
                            for (o = r.child, o !== null && (o.return = r); o !== null;) {
                                var s = o.dependencies;
                                if (s !== null) {
                                    t = o.child;
                                    for (var c = s.firstContext; c !== null;) {
                                        if (c.context === n) {
                                            if (o.tag === 1) {
                                                c = Ar(-1, a & -a), c.tag = 2;
                                                var u = o.updateQueue;
                                                if (u !== null) {
                                                    u = u.shared;
                                                    var m = u.pending;
                                                    m === null ? c.next = c : (c.next = m.next, m.next = c), u.pending = c
                                                }
                                            }
                                            o.lanes |= a, c = o.alternate, c !== null && (c.lanes |= a), os(o.return, a, r), s.lanes |= a;
                                            break
                                        }
                                        c = c.next
                                    }
                                } else if (o.tag === 10) t = o.type === r.type ? null : o.child;
                                else if (o.tag === 18) {
                                    if (t = o.return, t === null) throw Error(v(341));
                                    t.lanes |= a, s = t.alternate, s !== null && (s.lanes |= a), os(t, a, r), t = o.sibling
                                } else t = o.child;
                                if (t !== null) t.return = o;
                                else
                                    for (t = o; t !== null;) {
                                        if (t === r) { t = null; break }
                                        if (o = t.sibling, o !== null) { o.return = t.return, t = o; break }
                                        t = t.return
                                    }
                                o = t
                            }
                    xe(e, r, i.children, a),
                    r = r.child
                }
                return r;
            case 9:
                return i = r.type, n = r.pendingProps.children, Wa(r, a), i = We(i), n = n(i), r.flags |= 1, xe(e, r, n, a), r.child;
            case 14:
                return n = r.type, i = Ze(n, r.pendingProps), i = Ze(n.type, i), jl(e, r, n, i, a);
            case 15:
                return Ku(e, r, r.type, r.pendingProps, a);
            case 17:
                return n = r.type, i = r.pendingProps, i = r.elementType === n ? i : Ze(n, i), Ii(e, r), r.tag = 1, De(n) ? (e = !0, no(r)) : e = !1, Wa(r, a), Au(r, n, i), ss(r, n, i, a), us(null, r, n, !0, e, a);
            case 19:
                return Ju(e, r, a);
            case 22:
                return Qu(e, r, a)
        }
        throw Error(v(156, r.tag))
    };

    function hd(e, r) { return U0(e, r) }

    function T1(e, r, a, n) { this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

    function Ue(e, r, a, n) { return new T1(e, r, a, n) }

    function yc(e) { return e = e.prototype, !(!e || !e.isReactComponent) }

    function N1(e) { if (typeof e == "function") return yc(e) ? 1 : 0; if (e != null) { if (e = e.$$typeof, e === Fs) return 11; if (e === Vs) return 14 } return 2 }

    function Zr(e, r) { var a = e.alternate; return a === null ? (a = Ue(e.tag, r, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = r, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 14680064, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, r = e.dependencies, a.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a }

    function Bi(e, r, a, n, i, o) {
        var t = 2;
        if (n = e, typeof e == "function") yc(e) && (t = 1);
        else if (typeof e == "string") t = 5;
        else e: switch (e) {
            case Pa:
                return pa(a.children, i, o, r);
            case Rs:
                t = 8, i |= 8;
                break;
            case Yt:
                return e = Ue(12, a, r, i | 2), e.elementType = Yt, e.lanes = o, e;
            case Tt:
                return e = Ue(13, a, r, i), e.elementType = Tt, e.lanes = o, e;
            case Nt:
                return e = Ue(19, a, r, i), e.elementType = Nt, e.lanes = o, e;
            case k0:
                return Oo(a, i, o, r);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case S0:
                        t = 10;
                        break e;
                    case A0:
                        t = 9;
                        break e;
                    case Fs:
                        t = 11;
                        break e;
                    case Vs:
                        t = 14;
                        break e;
                    case zr:
                        t = 16, n = null;
                        break e
                }
                throw Error(v(130, e == null ? e : typeof e, ""))
        }
        return r = Ue(t, a, r, i), r.elementType = e, r.type = n, r.lanes = o, r
    }

    function pa(e, r, a, n) { return e = Ue(7, e, n, r), e.lanes = a, e }

    function Oo(e, r, a, n) { return e = Ue(22, e, n, r), e.elementType = k0, e.lanes = a, e.stateNode = { isHidden: !1 }, e }

    function At(e, r, a) { return e = Ue(6, e, null, r), e.lanes = a, e }

    function kt(e, r, a) { return r = Ue(4, e.children !== null ? e.children : [], e.key, r), r.lanes = a, r.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, r }

    function O1(e, r, a, n, i) { this.tag = r, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = it(0), this.expirationTimes = it(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = it(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null }

    function Lc(e, r, a, n, i, o, t, s, c) { return e = new O1(e, r, a, s, c), r === 1 ? (r = 1, o === !0 && (r |= 8)) : r = 0, o = Ue(3, null, null, r), e.current = o, o.stateNode = e, o.memoizedState = { element: n, isDehydrated: a, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ac(o), e }

    function z1(e, r, a) { var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: _a, key: n == null ? null : "" + n, children: e, containerInfo: r, implementation: a } }

    function gd(e) {
        if (!e) return Jr;
        e = e._reactInternals;
        e: {
            if (xa(e) !== e || e.tag !== 1) throw Error(v(170));
            var r = e;do {
                switch (r.tag) {
                    case 3:
                        r = r.stateNode.context;
                        break e;
                    case 1:
                        if (De(r.type)) { r = r.stateNode.__reactInternalMemoizedMergedChildContext; break e }
                }
                r = r.return
            } while (r !== null);
            throw Error(v(171))
        }
        if (e.tag === 1) { var a = e.type; if (De(a)) return hu(e, a, r) }
        return r
    }

    function vd(e, r, a, n, i, o, t, s, c) { return e = Lc(a, n, !0, e, i, o, t, s, c), e.context = gd(null), a = e.current, n = Se(), i = Qr(a), o = Ar(n, i), o.callback = r ? r : null, $r(a, o, i), e.current.lanes = i, ai(e, i, n), Ee(e, n), e }

    function zo(e, r, a, n) {
        var i = r.current,
            o = Se(),
            t = Qr(i);
        return a = gd(a), r.context === null ? r.context = a : r.pendingContext = a, r = Ar(o, t), r.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (r.callback = n), e = $r(i, r, t), e !== null && (rr(e, i, t, o), Ri(e, i, t)), t
    }

    function vo(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function Xl(e, r) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < r ? a : r
        }
    }

    function Cc(e, r) { Xl(e, r), (e = e.alternate) && Xl(e, r) }

    function R1() { return null }
    var yd = typeof reportError == "function" ? reportError : function(e) { console.error(e) };

    function xc(e) { this._internalRoot = e }
    Ro.prototype.render = xc.prototype.render = function(e) {
        var r = this._internalRoot;
        if (r === null) throw Error(v(409));
        zo(e, r, null, null)
    };
    Ro.prototype.unmount = xc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var r = e.containerInfo;
            La(function() { zo(null, e, null, null) }), r[Pr] = null
        }
    };

    function Ro(e) { this._internalRoot = e }
    Ro.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var r = K0();
            e = { blockedOn: null, target: e, priority: r };
            for (var a = 0; a < Fr.length && r !== 0 && r < Fr[a].priority; a++);
            Fr.splice(a, 0, e), a === 0 && Z0(e)
        }
    };

    function Sc(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) }

    function Fo(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) }

    function Jl() {}

    function F1(e, r, a, n, i) {
        if (i) {
            if (typeof n == "function") {
                var o = n;
                n = function() {
                    var u = vo(t);
                    o.call(u)
                }
            }
            var t = vd(r, n, e, 0, null, !1, !1, "", Jl);
            return e._reactRootContainer = t, e[Pr] = t.current, Bn(e.nodeType === 8 ? e.parentNode : e), La(), t
        }
        for (; i = e.lastChild;) e.removeChild(i);
        if (typeof n == "function") {
            var s = n;
            n = function() {
                var u = vo(c);
                s.call(u)
            }
        }
        var c = Lc(e, 0, !1, null, null, !1, !1, "", Jl);
        return e._reactRootContainer = c, e[Pr] = c.current, Bn(e.nodeType === 8 ? e.parentNode : e), La(function() { zo(r, c, a, n) }), c
    }

    function Vo(e, r, a, n, i) {
        var o = a._reactRootContainer;
        if (o) {
            var t = o;
            if (typeof i == "function") {
                var s = i;
                i = function() {
                    var c = vo(t);
                    s.call(c)
                }
            }
            zo(r, t, e, i)
        } else t = F1(a, r, e, i, n);
        return vo(t)
    }
    b0 = function(e) {
        switch (e.tag) {
            case 3:
                var r = e.stateNode;
                if (r.current.memoizedState.isDehydrated) {
                    var a = Sn(r.pendingLanes);
                    a !== 0 && (Us(r, a | 1), Ee(r, oe()), !(j & 6) && (en = oe() + 500, aa()))
                }
                break;
            case 13:
                La(function() {
                    var n = Mr(e, 1);
                    if (n !== null) {
                        var i = Se();
                        rr(n, e, 1, i)
                    }
                }), Cc(e, 1)
        }
    };
    Bs = function(e) {
        if (e.tag === 13) {
            var r = Mr(e, 134217728);
            if (r !== null) {
                var a = Se();
                rr(r, e, 134217728, a)
            }
            Cc(e, 134217728)
        }
    };
    $0 = function(e) {
        if (e.tag === 13) {
            var r = Qr(e),
                a = Mr(e, r);
            if (a !== null) {
                var n = Se();
                rr(a, e, r, n)
            }
            Cc(e, r)
        }
    };
    K0 = function() { return W };
    Q0 = function(e, r) { var a = W; try { return W = e, r() } finally { W = a } };
    Wt = function(e, r, a) {
        switch (r) {
            case "input":
                if (Rt(e, a), r = a.name, a.type === "radio" && r != null) {
                    for (a = e; a.parentNode;) a = a.parentNode;
                    for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < a.length; r++) {
                        var n = a[r];
                        if (n !== e && n.form === e.form) {
                            var i = Mo(n);
                            if (!i) throw Error(v(90));
                            _0(n), Rt(n, i)
                        }
                    }
                }
                break;
            case "textarea":
                M0(e, a);
                break;
            case "select":
                r = a.value, r != null && Ia(e, !!a.multiple, r, !1)
        }
    };
    z0 = hc;
    R0 = La;
    var V1 = { usingClientEntryPoint: !1, Events: [ii, Ya, Mo, N0, O0, hc] },
        vn = { findFiberByHostInstance: ca, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
        I1 = { bundleType: vn.bundleType, version: vn.version, rendererPackageName: vn.rendererPackageName, rendererConfig: vn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Yr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return e = I0(e), e === null ? null : e.stateNode }, findFiberByHostInstance: vn.findFiberByHostInstance || R1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var Mi = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!Mi.isDisabled && Mi.supportsFiber) try { ko = Mi.inject(I1), ur = Mi } catch {} }
    ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V1;
    ze.createPortal = function(e, r) { var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!Sc(r)) throw Error(v(200)); return z1(e, r, null, a) };
    ze.createRoot = function(e, r) {
        if (!Sc(e)) throw Error(v(299));
        var a = !1,
            n = "",
            i = yd;
        return r != null && (r.unstable_strictMode === !0 && (a = !0), r.identifierPrefix !== void 0 && (n = r.identifierPrefix), r.onRecoverableError !== void 0 && (i = r.onRecoverableError)), r = Lc(e, 1, !1, null, null, a, !1, n, i), e[Pr] = r.current, Bn(e.nodeType === 8 ? e.parentNode : e), new xc(r)
    };
    ze.findDOMNode = function(e) { if (e == null) return null; if (e.nodeType === 1) return e; var r = e._reactInternals; if (r === void 0) throw typeof e.render == "function" ? Error(v(188)) : (e = Object.keys(e).join(","), Error(v(268, e))); return e = I0(r), e = e === null ? null : e.stateNode, e };
    ze.flushSync = function(e) { return La(e) };
    ze.hydrate = function(e, r, a) { if (!Fo(r)) throw Error(v(200)); return Vo(null, e, r, !0, a) };
    ze.hydrateRoot = function(e, r, a) {
        if (!Sc(e)) throw Error(v(405));
        var n = a != null && a.hydratedSources || null,
            i = !1,
            o = "",
            t = yd;
        if (a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onRecoverableError !== void 0 && (t = a.onRecoverableError)), r = vd(r, null, e, 1, a ? a : null, i, !1, o, t), e[Pr] = r.current, Bn(e), n)
            for (e = 0; e < n.length; e++) a = n[e], i = a._getVersion, i = i(a._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [a, i] : r.mutableSourceEagerHydrationData.push(a, i);
        return new Ro(r)
    };
    ze.render = function(e, r, a) { if (!Fo(r)) throw Error(v(200)); return Vo(null, e, r, !1, a) };
    ze.unmountComponentAtNode = function(e) { if (!Fo(e)) throw Error(v(40)); return e._reactRootContainer ? (La(function() { Vo(null, null, e, !1, function() { e._reactRootContainer = null, e[Pr] = null }) }), !0) : !1 };
    ze.unstable_batchedUpdates = hc;
    ze.unstable_renderSubtreeIntoContainer = function(e, r, a, n) { if (!Fo(a)) throw Error(v(200)); if (e == null || e._reactInternals === void 0) throw Error(v(38)); return Vo(e, r, a, !1, n) };
    ze.version = "18.2.0-next-9e3b772b8-20220608";

    function Ld() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ld) } catch (e) { console.error(e) } }
    Ld(), v0.exports = ze;
    var j1 = v0.exports,
        e0 = j1;
    Dt.createRoot = e0.createRoot, Dt.hydrateRoot = e0.hydrateRoot;
    const U1 = [{ type: "header", name: "header", version: "5.2.0", comment: "Export to JSON plugin for PHPMyAdmin" }, { type: "database", name: "comparaprecios" }, { type: "table", name: "aceite", database: "comparaprecios", data: [{ id: "28", info: "Aceite De Girasol Natura 1.5 L", precio: "2854.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "29", info: "Aceite Girasol Pureza 1.5 L", precio: "3000.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "30", info: "Aceite Girasol Legitimo 900 Ml", precio: "1400.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "31", info: "Aceite De Girasol Natura 900 Ml", precio: "1800.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "32", info: "Aceite Girasol Legitimo 1.5 L", precio: "2300.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "33", info: "Aceite Girasol Pureza 0,9 L", precio: "1700.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "34", info: "Aceite Cañuelas De Girasol - 1.5 L", precio: "2600.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "35", info: "Aceite De Oliva Virgen Nucete Lata 500 Ml", precio: "9900.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "36", info: "Aceite De Oliva Extra Virgen Nucete 2000 Ml", precio: "32000.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "37", info: "Aceite De Oliva Azait 250 Ml", precio: "6000.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "38", info: "Aceite Fritolim Clasico X126cc", precio: "2750.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "39", info: "Aceite Oliva Extra Virgen Intenso Cocinero 500 Ml", precio: "10100.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "40", info: "Aceite De Girasol Cañuelas 900 Ml", precio: "1650.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "41", info: "Aceite De Maíz Arcor 900 Ml", precio: "4450.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "42", info: "Aceite De Girasol Lira X 900 Ml", precio: "2000.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "43", info: "Aceite Oliva Lira Extra Virgen Pet 500ml", precio: "11150.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "44", info: "Aceite De Oliva La Española Extra Virgen 250 Ml", precio: "7300.00", fecha: "2024-03-16 22:24:22", supermercado: "Disco" }, { id: "69", info: "Aceto Reduccion Original Menoyo 500 Ml", precio: "8200.00", fecha: "2024-03-16 22:25:32", supermercado: "Disco" }, { id: "73", info: "Aceto Balsámico Extra Añejo Glaze Domenico Renieri 250 Ml", precio: "11750.00", fecha: "2024-03-16 22:25:32", supermercado: "Disco" }, { id: "77", info: "Aceite de Girasol Cañuelas x 1,5 Lt.", precio: "2750.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "78", info: "Aceite de Girasol Cañuelas x 1,5 Lt.", precio: "2750.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "79", info: "Aceite de Girasol La Anónima x 900 cc.", precio: "1769.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "80", info: "Aceite de Girasol Natura x 1,5 Lt.", precio: "2819.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "81", info: "Aceite Girasol Legitimo x 900 cc.", precio: "1615.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "82", info: "Aceite de Girasol Natura x 900 cc.", precio: "1779.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "83", info: "Aceite de Oliva Pet Best x 500 cc.", precio: "11125.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "84", info: "Aceite Girasol Legitimo x 1,5 Lt.", precio: "2615.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "85", info: "Aceite de Girasol Pureza x 1,5 Lt.", precio: "2850.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "86", info: "Aceite Mezcla Siglo de Oro x 900 cc.", precio: "1305.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "87", info: "Aceite de Girasol Cañuelas x 900 cc.", precio: "1700.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "88", info: "Aceite de Girasol Pureza x 900 cc.", precio: "1800.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "89", info: "Aceite de Girasol Cocinero x 900 cc.", precio: "1750.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "90", info: "Aceite de Maíz Mazola x 900 cc.", precio: "2485.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "91", info: "Aceite Mezcla Girasol y Oliva Natura Blend x 1,5 Lt.", precio: "5305.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "92", info: "Aceite de Girasol Cocinero x 1,5 Lt.", precio: "2850.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "93", info: "Aceite de Oliva Extra Virgen Vidrio Nucete x 500 cc.", precio: "12259.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "94", info: "Aceite de Oliva Extra Virgen Suave Cocinero x 500 cc.", precio: "12850.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "95", info: "Aceite de Maíz Clásico Mazola Aerosol x 126 cc.", precio: "2369.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "96", info: "Aceite de Oliva Extra Virgen Pet Cocinero x 250 cc.", precio: "6850.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "97", info: "Aceite de Girasol Plus Cocinero x 1,5 Lt.", precio: "3300.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "98", info: "Aceite Mezcla Girasol - Oliva Blend Natura x 900 cc.", precio: "3259.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "99", info: "Aceite de Oliva Extra Virgen Lata Oliovita x 500 cc.", precio: "20500.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "100", info: "Aceite Oliva Suave Vidrio Zuelo x 500 cc.", precio: "12645.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "101", info: "Aceite de Oliva Extra Virgen Pet Cocinero x 500 cc.", precio: "11859.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "102", info: "Aceite de Oliva Extra Vírgen Oliovita x 500 cc.", precio: "15700.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "103", info: "Aceite de Oliva Extra Virgen Mediterráneo V Oliovita x 500 cc.", precio: "15700.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "104", info: "Aceite de Oliva Arbequina Vidrio Oliovita x 500 cc.", precio: "14750.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "105", info: "Aceite de Oliva Extra Virgen Pet Oliovita x 500 cc.", precio: "13600.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "106", info: "Aceite de Oliva Extra Virgen Int. Cocinero x 500 cc.", precio: "12850.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "107", info: "Aceite de Oliva Pet Cocinero x 500 cc.", precio: "11150.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "108", info: "Aceite de Oliva Extra Virgen Vidrio Oliovita x 250 cc.", precio: "11000.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "109", info: "Aceite de Oliva Extra Virgen La Toscana x 250 cc.", precio: "10279.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "110", info: "Aceite de Oliva Extra Virgen clásico x 250cc.", precio: "7400.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "111", info: "Aceite Oliva Extra Virgen Aerosol Lira x 120 g.", precio: "3740.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "112", info: "Aceite Mezcla Girasol y Oliva Cocinero x 900 g.", precio: "3700.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "113", info: "Aceite Mezcla Cocinero x 1,5 Lt.", precio: "2400.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "114", info: "Aceite de Girasol Plus Cocinero x 900 cc.", precio: "2050.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "115", info: "Aceite de Oliva Extra Virgen Vidrio Oliovita x 1 Lt.", precio: "30950.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "116", info: "Aceite de Oliva Extra Virgen Pet Cocinero x 1 Lt.", precio: "24900.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "117", info: "Aceite de Oliva Puro sin Tacc Pet Cocinero x 1 Lt.", precio: "21150.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "118", info: "Aceite de Oliva Pet Best x 1 Lt.", precio: "20855.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "119", info: "Aceite de Oliva Extra Virgen Suave La Toscana x 500 cc.", precio: "20139.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "120", info: "Aceite de Oliva Coratina Vidrio Zuccardi x 500 cc.", precio: "18705.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "121", info: "Aceite de Oliva Picual Vidrio Zuccardi x 500 cc.", precio: "18705.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "122", info: "Aceite de Oliva Genovesa Vid Zuccardi x 500 cc.", precio: "18705.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "123", info: "Aceite de Oliva Extra Virgen Clásico Lata Lira x 500 cc.", precio: "15450.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "124", info: "Aceite de Oliva Changlot Vidrio Oliovita x 500 cc.", precio: "14750.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "125", info: "Aceite de Oliva Extra Virgen Pet Mediterráneo Oliovita x 500 cc.", precio: "14150.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "126", info: "Aceite Oliva Extra Virgen c/Albahaca La Toscana x 250 cc.", precio: "13969.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "127", info: "Aceite de Oliva Extra Virgen c/Ajo La Toscana x 250 cc.", precio: "13969.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "128", info: "Aceite Oliva Original Vidrio Zuelo x 500 cc.", precio: "12645.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "129", info: "Aceite Mezcla Girasol-Oliva Eco Cocinero x 1,5 Lt.", precio: "6000.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "130", info: "Aceite de Girasol Lira x 1,5 Lt.", precio: "3150.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "131", info: "Aceite Mezcla Copisi Girasol - Oliva x 900 cc.", precio: "2919.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "132", info: "Aceite de Girasol Blend Cocinero x 1,5 Lt.", precio: "2550.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "133", info: "Aceite de Girasol Lira x 900 cc.", precio: "1950.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "134", info: "Aceite Girasol Ecobotella Vitamina D Cocinero x 900 cc.", precio: "1750.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "135", info: "Aceite de Girasol Blend Cocinero x 900 cc.", precio: "1600.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "136", info: "Aceite Mezcla Cocinero x 900 cc.", precio: "1500.00", fecha: "2024-03-16 22:32:46", supermercado: "La Anonima" }, { id: "137", info: "Aceite Esencial Vainilla Organic x 1 Un.", precio: "3200.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "138", info: "Aceite Esencial Vainilla Organic x 1 Un.", precio: "3200.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "139", info: "Aceite Aromatizante Sandia & Pepino Organic x 1 Un.", precio: "3200.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "140", info: "Aceite Aromatizante Gardenia Organic x 1 Un.", precio: "3200.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "141", info: "Aceite Bebe Puro Johnsons Baby x 200 cc.", precio: "7150.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "142", info: "Aceite Bebe Puro Johnsons Baby x 100 cc.", precio: "5500.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "143", info: "Aceite Solar Fps 30 Rayito de Sol x 195 cc.", precio: "7535.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "144", info: "Atún en Aceite Best Desmenuzado x 170 g.", precio: "879.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "145", info: "Atún en Aceite y Agua en Lomitos La Anónima x 160 g.", precio: "2499.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "146", info: "Atún en Aceite y Agua Trozos La Anónima x 160 g.", precio: "2399.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "147", info: "Rocío Vegetal de Aceite Girasol Natura x 126 cc.", precio: "2079.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "148", info: "Aderezo a Base de Aceite con Ajo Hellmanns Pet x 340 g.", precio: "2200.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "149", info: "Atún en Aceite La Anónima en Lomos x 354 g.", precio: "6000.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "150", info: "Atún en Aceite en Lomos La Anónima x 170 g.", precio: "2899.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "151", info: "Mayonesa con Aceite de Oliva Mayoliva Doy Pack x 500 cc.", precio: "2355.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "152", info: "Aderezo a Base de Aceite Ahumada Hellmanns x 250 g.", precio: "1750.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "153", info: "Aderezo a Base de Aceite Ahumada Hellmanns Pet x 340 g.", precio: "2200.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "154", info: "Aderezo a Base de Aceite con Ajo Hellmanns Doy Pack x 250 g.", precio: "1750.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "155", info: "Atún en Aceite y Agua en Lomos s/ sal agregada La Anónima x 160 g.", precio: "2699.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "156", info: "Crema Corporal Nivea Vainilla y Aceite de Almendras x 400 cc.", precio: "7250.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "157", info: "Galletitas Pepas c/Aceite Vegetal Trio x 300 g.", precio: "1219.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "158", info: "Hummus con Aceite de Oliva sin Tacc Kyros x 230 g.", precio: "2909.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "159", info: "Jurel con Agua y Aceite Best x 425 g.", precio: "2899.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "160", info: "Filet de Anchoas en Aceite La Isolana x 90 g.", precio: "3895.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "161", info: "Caballa en Aceite sin Sal Puglisi x 380 g.", precio: "1799.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "162", info: "Caballa en Aceite Puglisi x 380 g.", precio: "1789.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "163", info: "Bizcochos Tradicionales c/Aceite Granix x 180 g.", precio: "1085.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "164", info: "Filet de Anchoas en Aceite La Isolana x 170 g.", precio: "6725.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "165", info: "Boquerón en Aceite a La Provenzal La Isolana x 170 g.", precio: "5869.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "166", info: "Shampoo Aceite de Argan Head Shoulders x 700 cc.", precio: "14879.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "167", info: "Shampoo Aceite de Argan Head Shoulders x 180 cc.", precio: "5479.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "168", info: "Aceites Naturales Repuesto Vainilla Glade x 21 cc.", precio: "10000.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "169", info: "Aceites Naturales Repuesto Floral X2 Glade x 21 cc.", precio: "10000.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "170", info: "Aceites Naturales Aparato + Repuesto Surtido Glade x 21 cc.", precio: "9550.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "171", info: "Aceites Naturales Repuesto Vainilla Glade x 21 cc.", precio: "6300.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "172", info: "Aceites Naturales Repuesto Harmony Glade x 21 cc.", precio: "6300.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "173", info: "Aceites Naturales Repuesto Limón Glade x 21 cc.", precio: "6300.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "174", info: "Aceites Naturales Repuesto Tropical/Floral Glade x 21 cc.", precio: "6300.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "175", info: "Aceites Naturales Repuesto Lavanda Glade x 21 cc.", precio: "6300.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "176", info: "Aceites Naturales Repuesto Flores/Frutal Glade x 21 cc.", precio: "6300.00", fecha: "2024-03-16 22:33:02", supermercado: "La Anonima" }, { id: "229", info: "Aceite de oliva Carrefour extra virgen 500 cc.", precio: "10990.00", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "230", info: "Aceite de oliva Carrefour virgen en botella 500 cc.", precio: "8180.90", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "231", info: "Aceite de oliva Carrefour virgen 1 l.", precio: "15460.90", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "232", info: "Aceite de oliva Carrefour virgen lata 1 l.", precio: "22990.00", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "233", info: "Aceite en aerosol Carrefour classic girasol 150 cc.", precio: "1990.00", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "234", info: "Aceite de girasol Lira 900 cc.", precio: "1870.00", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "235", info: "Aceite de girasol Natura 1.5 l.", precio: "2805.00", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "236", info: "Aceite de girasol Legitimo 1.5 lt.", precio: "2135.00", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "237", info: "Aceite de girasol alto omega Carrefour pet 1.5 l.", precio: "2083.90", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "238", info: "Aceite de girasol Pureza 900 cc.", precio: "1840.00", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "239", info: "Aceite de girasol Alsamar 900 cc.", precio: "999.00", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "240", info: "Aceite de girasol Cañuelas 900 cc.", precio: "1600.00", fecha: "2024-03-17 22:32:52", supermercado: "Carrefour" }, { id: "241", info: "Aceite de oliva Zuelo extra virgen original botella 500 cc.", precio: "14340.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "242", info: "Aceite mezcla Cocinero girasol oliva pet 1.5 l.", precio: "6763.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "243", info: "Aceite de oliva gourmet Oliovita en lata 500 cc.", precio: "17025.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "244", info: "Aceite de maíz Arcor 900 cc.", precio: "4400.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "245", info: "Aceite de oliva Carrefour extra virgen orgánico botella 500 cc.", precio: "17991.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "246", info: "Aceite de oliva Cocinero extra virgen pet 1 lt.", precio: "21175.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "247", info: "Aceite de oliva Zuelo extra virgen suave botella 500 cc.", precio: "14340.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "248", info: "Aceite de oliva picual familia Zuccardi 250 cc.", precio: "10450.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "249", info: "Aceite de oliva coratina Familia Zuccardi 250 cc.", precio: "10450.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "250", info: "Aceite de oliva sin tacc Lira cosecha temp 500 cc.", precio: "17380.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "251", info: "Aceite de oliva extra virgen Zuelo original botella 250 cc.", precio: "8850.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "252", info: "Aceite de canola Carrefour sin gluten botella 500 cc.", precio: "5878.80", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "253", info: "Aceite de soja Cocinero pet 900 cc.", precio: "1400.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "254", info: "Aceite de oliva Oliovita varietal changlot 500 cc.", precio: "15275.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "255", info: "Aceite de coco Entrenuts virgen orgánico 200 g.", precio: "10500.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "256", info: "Aceite de coco sabor manteca Chiagraal en frasco 180 ml.", precio: "7245.00", fecha: "2024-03-17 22:33:08", supermercado: "Carrefour" }, { id: "257", info: "Aceite de coco sabor ajo Chiagraal en frasco 180 ml.", precio: "7250.00", fecha: "2024-03-17 22:33:16", supermercado: "Carrefour" }, { id: "258", info: "Aceite de coco virgen Chiagraal en frasco 180 ml.", precio: "10630.00", fecha: "2024-03-17 22:33:16", supermercado: "Carrefour" }, { id: "259", info: "Aceite de canola limón Carrefour sin gluten botella 500 cc.", precio: "5878.80", fecha: "2024-03-17 22:33:16", supermercado: "Carrefour" }, { id: "260", info: "Aceite de canola Carrefour albahaca sin gluten 500 cc.", precio: "5878.80", fecha: "2024-03-17 22:33:16", supermercado: "Carrefour" }, { id: "261", info: "Aceite de oliva Colavita extra virgen 250 cc.", precio: "26290.00", fecha: "2024-03-17 22:33:16", supermercado: "Carrefour" }, { id: "262", info: "aceite de oliva coratina Familia Zuccardi  500 cc.", precio: "18150.00", fecha: "2024-03-17 22:33:16", supermercado: "Carrefour" }, { id: "263", info: "Aceite de oliva picual Famialia Zuccardi 500 cc.", precio: "18150.00", fecha: "2024-03-17 22:33:16", supermercado: "Carrefour" }, { id: "264", info: "Aceite de oliva genovesa Familia Zuccardi 250 cc.", precio: "11230.00", fecha: "2024-03-17 22:33:16", supermercado: "Carrefour" }] }, { type: "table", name: "azucar", database: "comparaprecios", data: [{ id: "1", info: "Azúcar tipo A La Providencia 1 kg.", precio: "799.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "2", info: "Azúcar comun tipo A Bella vista 1 kg.", precio: "1050.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "3", info: "Azúcar Ledesma molida superior bolsa 1 kg.", precio: "1100.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "4", info: "Azúcar comun La perla tipo A 1 kg.", precio: "1200.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "5", info: "Azúcar Hileret light 500 g.", precio: "1940.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "6", info: "Azúcar común Azucel tipo A bolsa 1 kg.", precio: "1150.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "7", info: "Azúcar Ledesma light 500 g.", precio: "1500.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "8", info: "Azúcar Hileret light 250 g.", precio: "1165.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "9", info: "Azúcar Hileret light sobres 100 u.", precio: "4100.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "10", info: "Azúcar marrón Grandiet fantasía 500 g.", precio: "2245.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "11", info: "Azúcar mascabo Beepure en frasco 250 g.", precio: "2860.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "12", info: "Azúcar orgánica Dicomere paquete 1000 g.", precio: "4100.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "13", info: "Azúcar rubia orgánica Beepure en frasco 330 g.", precio: "2955.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "14", info: "Azúcar mascabo Beepure zip pack 700 g.", precio: "3394.27", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "15", info: "Azúcar de caña Pampa\\'s 500 g.", precio: "3810.00", fecha: "2024-03-16 21:05:22", supermercado: "Carrefour" }, { id: "16", info: "Azúcar Chango 1 Kg.", precio: "1002.75", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "17", info: "Azucar Cuisine And Co. 1 Kg", precio: "800.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "18", info: "Azúcar Común Tipo A Azucel 1 Kg", precio: "937.50", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "19", info: "Azucar Comun Tipo A La Providencia 1 Kg", precio: "1200.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "20", info: "Azucar Ledesma Light 500 Gr", precio: "825.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "21", info: "Azúcar Mascabo Integral Da Magrinha X 400 Gr", precio: "7000.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "22", info: "Azucar Orgánico Terrasana 500 Gr", precio: "3450.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "23", info: "Azúcar Molida Ledesma 1 Kg", precio: "1050.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "24", info: "Azúcar Refinado Premium Chango 1 Kg", precio: "1125.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "25", info: "Edulcorante Ledesma Sobres X80gr", precio: "937.50", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "26", info: "Edulcorante Tuy Clasico Polvo X160gr", precio: "4650.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "27", info: "Edulcorante Tuy Stevia Polvo X160gr", precio: "6900.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "28", info: "Azucar Rubia Ledesma Mascabo 800 Gr.", precio: "1012.50", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "29", info: "Azucar Impalpable Dos Anclas X 300  Gr", precio: "2650.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "30", info: "Azúcar Negro Dos Anclas 250 Gr", precio: "2100.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "31", info: "Azucar De Coco God Bless You  250 Gr", precio: "9600.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "32", info: "Edulcorante Liquido Clasico Chuker 400 Ml", precio: "3075.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "33", info: "Edulcorante Liquido Chuker 200 Ml", precio: "2062.50", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "34", info: "Edulcorante Liquido Con Stevia Chuker 400 Ml", precio: "4200.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "35", info: "Pasta De Manisin Azucar Croppers  X305g", precio: "3850.00", fecha: "2024-03-16 21:23:26", supermercado: "Disco" }, { id: "43", info: "Azúcar Blanco Refinado Superior  Ledesma x 1 Kg.", precio: "1589.00", fecha: "2024-03-16 22:29:54", supermercado: "La Anonima" }, { id: "44", info: "Azúcar Blanco Refinado Superior  Ledesma x 1 Kg.", precio: "1589.00", fecha: "2024-03-16 22:29:54", supermercado: "La Anonima" }, { id: "45", info: "Azúcar Blanca Refinada Chango x 1 Kg.", precio: "1725.00", fecha: "2024-03-16 22:29:54", supermercado: "La Anonima" }, { id: "46", info: "Azúcar Común A Chango x 1 Kg.", precio: "1559.00", fecha: "2024-03-16 22:29:54", supermercado: "La Anonima" }, { id: "47", info: "Azúcar Orgánico AP sin TACC Chango x 1 kg.", precio: "4739.00", fecha: "2024-03-16 22:29:54", supermercado: "La Anonima" }] }, { type: "table", name: "cafe", database: "comparaprecios", data: [{ id: "1", info: "Café instantaneo Dolca suave origenes dp 170 g.", precio: "7290.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "2", info: "Café instantaneo torrado Dolca origenes dp 170 g.", precio: "7290.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "3", info: "Infusión a base de café Arlistan en frasco 100 g.", precio: "3135.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "4", info: "Café molido Bonafide Sensaciones torrado intenso 500 g.", precio: "5650.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "5", info: "Café instantaneo Dolca suave origenes 170 g.", precio: "5369.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "6", info: "Café instantáneo Nescafé dolca mixes latte doypack 125 g.", precio: "2930.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "7", info: "Café molido torrado intenso Bonafide Sensaciones 1 kg.", precio: "10195.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "8", info: "Café molido clásico la Morenita bolsa 500 g.", precio: "5755.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "9", info: "Café instantaneo cremoso Dolca cortado 125 g.", precio: "2450.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "10", info: "Café molido clásico La Virginia bolsa x 250 g.", precio: "2880.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "11", info: "Café molido torrado intenso Bonafide Sensaciones 125 g.", precio: "1525.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "12", info: "Café instantaneo Dolca origenes en frasco 170 g.", precio: "5369.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "13", info: "Infusion a base de café Arlistan en frasco 50 g.", precio: "1650.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "14", info: "Café molido Bonafide Sensaciones torrado suave 500 g.", precio: "5650.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "15", info: "Café en saquitos Bonafide intenso 18 uni", precio: "2985.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "16", info: "Café molido torrado equilibrado La Virginia 500 g.", precio: "6420.00", fecha: "2024-03-16 21:10:15", supermercado: "Carrefour" }, { id: "17", info: "Café en saquitos La Virginia caja x 20 uni", precio: "3590.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "18", info: "Cápsulas de café Morenita Brasil caja x 10 uni", precio: "6300.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "19", info: "Café molido torrado La Virginia 125 g.", precio: "1690.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "20", info: "Café en saquitos Cabrales caja x 18 uni", precio: "3005.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "21", info: "Filtro de café número 4 Domestic 60 u.", precio: "4890.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "22", info: "Café instantaneo Nescafé gold dp 100 g.", precio: "8955.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "23", info: "Café instantáneo La Virginia descafeinado kalma 100 g.", precio: "4650.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "24", info: "Filtro de café Domestic número 2 30 u.", precio: "2645.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "25", info: "Café instantáneo La Virginia especial clásico 100 g.", precio: "3725.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "26", info: "Café en saquitos La Virginia más aroma caja x 20 uni", precio: "5685.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "27", info: "Cappuccino La Virginia instantáneo light dp 100 g.", precio: "2460.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "28", info: "Cápsulas de café italiano La Virginia morenita caja x 10 uni", precio: "6925.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "29", info: "Cappuccino instantáneo Morenita doypack 125 g.", precio: "2780.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "30", info: "Cappuccino La Virginia cortado dp 125 g.", precio: "2910.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "31", info: "Café instantáneo La Morenita frasco 100 g.", precio: "2700.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "32", info: "Café instantáneo La Virginia suave frasco 100 g.", precio: "3725.00", fecha: "2024-03-16 21:10:29", supermercado: "Carrefour" }, { id: "33", info: "Filtro de café Essential Nº 2 x 30 uni", precio: "2630.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "34", info: "Café instantáneo La Virginia suave frasco 170 g.", precio: "5855.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "35", info: "Cappuccino La Virginia mousse avellanas 155 g.", precio: "3490.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "36", info: "Cápsulas de café honduras La Virginia morenita caja x 10 uni", precio: "6925.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "37", info: "Café instantáneo La Morenita frasco 170 g.", precio: "5150.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "38", info: "Café instantáneo La Virginia tostado frasco 170 g.", precio: "8055.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "39", info: "Café en polvo en sobres La Virginia clásico caja x 20 uni", precio: "4090.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "40", info: "Café instantaneo suave La planta en frasco 100 g.", precio: "3905.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "41", info: "Café instantáneo suave La Virginia doy pack 170 g.", precio: "5110.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "42", info: "Cappuccino La Virginia instantáneo dp 275 g.", precio: "5820.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "43", info: "Cápsulas de café Viaggio colombia espresso x 10 uni", precio: "9315.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "44", info: "Cappuccino latte La Virginia dp 125 g.", precio: "2910.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "45", info: "Cápsulas de café Viaggio espresso x 10 uni", precio: "9350.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "46", info: "Café molido Morenita clásico la paquete 1 kg.", precio: "13340.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "47", info: "Cápsulas de café reutilizables Domestic para Dolce Gusto 2 u.", precio: "10479.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "48", info: "Cápsulas de cafe Viaggio lungo espresso x 10 uni", precio: "9350.00", fecha: "2024-03-16 21:10:37", supermercado: "Carrefour" }, { id: "49", info: "Cápsulas de café Viaggio intenso espresso x 10 uni", precio: "9350.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "50", info: "Cápsulas de café reutilizables Domestic para Nespresso 2 u.", precio: "8381.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "51", info: "Café en cápsulas Gimoka suave x 10 uni", precio: "8600.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "52", info: "Café instantáneo La Virginia suave 1.7 g. x 36 uni", precio: "4090.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "53", info: "Cápsulas de café Viaggio brasil espresso x 10 uni", precio: "9315.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "54", info: "Granos de café con chocolate 150 g.", precio: "3990.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "55", info: "Cápsulas de café Viaggio ristretto espresso x 10 uni", precio: "9350.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "56", info: "Cappuccino La Virginia instantáneo en sobre 12.5 g.", precio: "4000.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "57", info: "Molinillo Indo Deli capuchino 40 g.", precio: "4500.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "58", info: "Porta filtro para café número 2 Domestic 1 u.", precio: "3870.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "59", info: "Café Gimoka en cápsulas intenso x 10 uni", precio: "8600.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "60", info: "Café Gimoka en cápsulas lungo x 10 uni", precio: "8600.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "61", info: "Pack x 4 cápsulas para café Caffettino recargables", precio: "14990.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "62", info: "Cápsulas de café La Virginia sutil caja x 10 uni", precio: "6000.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "63", info: "Cappuccino La Virginia instantáneo 210 g.", precio: "5900.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "64", info: "Cápsulas de café Viaggio decaffeinato espresso x 10 uni", precio: "9350.00", fecha: "2024-03-16 21:10:45", supermercado: "Carrefour" }, { id: "65", info: "Cápsulas de café Viaggio arábica espresso x 10 uni", precio: "9350.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "66", info: "Café instantáneo La Virginia suave dp 100 g.", precio: "3270.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "67", info: "Pack x 4 cápsulas para café Caffettino recargables", precio: "14990.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "68", info: "Cappuccino La Virginia mousse avellana 10 15.5 g.", precio: "5100.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "69", info: "Cápsulas de café cappuccino La Virginia x 8 uni", precio: "10900.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "70", info: "Café en cápsulas Lavazza deciso intensidad 10 10 u.", precio: "10990.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "71", info: "Café en capsula fortissimo Viaggio espresso 55 g.", precio: "9315.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "72", info: "Café Gimoka en cápsulas vellutato x 10 uni", precio: "8600.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "73", info: "Café Gimoka en cápsulas brasile aluminio x 10 uni", precio: "9600.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "74", info: "Café Gimoka en cápsulas ristretto aluminio x 10 uni", precio: "9600.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "75", info: "Café descafeinado instantáneo La Virginia kalma 170 g.", precio: "7470.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "76", info: "Capsulas Cachamai de frutos rojos x10 2.7 g.", precio: "7655.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "77", info: "Capsulas Cachamai de lemon grass x10 2.7 g.", precio: "7240.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "78", info: "Capsulas Cachamai de citrico x10 2.7 g", precio: "8105.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "79", info: "Cappuccino La Virginia cortado en sobre 12.5 g.", precio: "4650.00", fecha: "2024-03-16 21:10:53", supermercado: "Carrefour" }, { id: "80", info: "Café Molido La Virginia 500 Gr", precio: "4403.10", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "81", info: "Cafe Expresso Molido Tostado La Virginia 500 Gr", precio: "7057.70", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "82", info: "Cafe Molido La Morenita 500 Gr", precio: "4310.80", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "83", info: "Café Gold Nescafé® 100 Gr", precio: "12176.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "84", info: "Café Dolca Suave Nescafé® 170 Gr", precio: "4500.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "85", info: "Café Molido Clasico La Virginia 250 Gr", precio: "2210.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "86", info: "Café Dolca Original Nescafe® 170 Gr", precio: "5850.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "87", info: "Café Molido La Morenita 250 Gr", precio: "2177.50", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "88", info: "Cafe Morenita Molido Colombia 500g", precio: "7670.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "89", info: "Café Molido Morenita Intenso 1kg.", precio: "8677.50", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "90", info: "Café Dolca Suave Nescafé® 170 Gr", precio: "5850.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "91", info: "Café En Capsulas Equilibrio La Virginia 52 Gr", precio: "6250.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "92", info: "Café Dolca Nescafé® Original 100 Gr", precio: "4110.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "93", info: "Café Bonafide Molido Sensaciones 500 Gr", precio: "7150.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "94", info: "Cafe La Morenita Capsulas Colombia X52g", precio: "6600.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "95", info: "Cafe En Cápsulas Sutil La Virginia 52 Gr", precio: "6250.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "96", info: "Cafe En Saquito Torrado La Virginia 100 Gr", precio: "3600.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "97", info: "Cafe Nescafe® Dolca Suave 50 Gr", precio: "2730.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "98", info: "Café Suave Mas Aroma Arlistan 50 Gr", precio: "1500.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "99", info: "Café Instantaneo X 100g Segafredo", precio: "8000.00", fecha: "2024-03-16 21:19:50", supermercado: "Disco" }, { id: "121", info: "Café Instantáneo Suave Doy Pack Dolca x 170 g.", precio: "4193.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "122", info: "Café Instantáneo Suave Doy Pack Dolca x 170 g.", precio: "4193.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "123", info: "Café Instantáneo Suave Nescafé Dolca x 170g.", precio: "4193.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "124", info: "Café Instantáneo Suave Nescafé Dolca x 170g.", precio: "4500.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "125", info: "Café Molido Intenso Bonafide Sensaciones x 500 g.", precio: "6250.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "126", info: "Café Espresso Molido 100% Arábica La Virginia x 500 g.", precio: "11195.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "127", info: "Café Instantáneo Original Nescafé Dolca x 170g.", precio: "4500.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "128", info: "Café Tostado Molido Colombia Morenita x 500 g.", precio: "12129.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "129", info: "Café Instantáneo Capuccino Doy Pack La Anónima x 210 g.", precio: "4000.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "130", info: "Café Instantáneo Nescafé Dolca Latte x 125 g.", precio: "3200.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "131", info: "Café Instantáneo Suave Nescafé Dolca x 8g.", precio: "140.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "132", info: "Malta Instantánea Doy Pack Best x 100 g.", precio: "1450.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "133", info: "Polvo para Preparar Infusión a Base de Café Suave Arlistan x 100 g.", precio: "2507.50", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "134", info: "Cafe Molido Intenso La Morenita x 1 Kg.", precio: "13889.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "135", info: "Café Instantáneo Suave Nescafé Dolca x 100g.", precio: "7000.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "136", info: "Café Molido Tostado Cabrales x 250 g.", precio: "6185.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "137", info: "Café Molido Torrado Equilibrado La Virginia x 250 g.", precio: "3579.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "138", info: "Café Instantáneo La Morenita x 100 g.", precio: "3385.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "139", info: "Café Instantáneo Tostado Gold Nescafé x 100 g.", precio: "14100.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "140", info: "Café Tostado en Capsulas Expresso Equilibrado La Virginia x 10 Un.", precio: "4481.25", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "141", info: "Café Torrado Molido La Anónima x 250 g.", precio: "3769.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "142", info: "Café en Saquitos La Morenita x 20 un.", precio: "3475.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "143", info: "Café Instantáneo Clásico Pack ahorro La Virginia x 100 g.", precio: "3379.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "144", info: "Café Instantáneo Capuccino Doy Pack La Anónima x 125 g.", precio: "2550.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "145", info: "Café Instantáneo Clásico La Virginia x 170 g.", precio: "5701.50", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "146", info: "Cafe en Capsulas Espresso La Virginia x 10 Un.", precio: "5756.25", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "147", info: "Café Molido Torrado La Anónima x 500 g.", precio: "7419.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "148", info: "Café Molido Suave Bonafide Sensaciones x 500 g.", precio: "6239.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "149", info: "Cafe Instantaneo Descafeinado Kalma La Virginia x 100 g.", precio: "4805.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "150", info: "Café Molido Intenso La Mortenita x 250 g.", precio: "3579.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "151", info: "Café en Saquitos Cabrales x 18 un.", precio: "3565.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "152", info: "Polvo para Preparar Infusión Base de Café Suave Arlistan x 50 g.", precio: "1317.50", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "153", info: "Café Molido Intenso La Mortenita x 500 g.", precio: "7159.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "154", info: "Café Instantáneo Suave sin Azúcar Frasco La Planta de Café x 100 g.", precio: "6005.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "155", info: "Café Instantáneo Suave  La Virginia x 170 g.", precio: "5279.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "156", info: "Café Instantáneo Suave Pack ahorro La Virginia x 100 g.", precio: "3379.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "157", info: "Café Molido Intenso Sensaciones Bonafide x 250 g.", precio: "3319.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "158", info: "Café Instantáneo Nescafé Dolca Cookies & Cream x 125 g.", precio: "3250.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "159", info: "Café Instantáneo Nescafé Dolca Caramel x 125 g.", precio: "3200.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "160", info: "Café Instantáneo Cappuccino La Morenita x 125 g.", precio: "2870.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "161", info: "Malta Instantánea Doy Pack El Pocillo x 100 g.", precio: "1959.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "162", info: "Polvo para Preparar Infusión a Base de Café Suave Arlistan x 100 g.", precio: "4037.50", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "163", info: "Cafe Molido Clasico La Virginia x 1 Kg.", precio: "14319.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "164", info: "Cafe en Capsulas Cappuccino DDL La Virginia x 8 Un.", precio: "9206.25", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "165", info: "Café Molido Tostado Cabrales x 500 g.", precio: "11845.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "166", info: "Café Instantáneo Clásico sin Azúcar Frasco La Planta de Café x 170 g.", precio: "8229.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "167", info: "Cafe en Capsulas Cortado La Virginia x 10 Un.", precio: "5756.25", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "168", info: "Café Molido Torrado Equilibrado La Virginia x 500 g.", precio: "7269.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "169", info: "Café Tostado en Capsulas Blend Italiano La Morenita x 10 Un.", precio: "5174.25", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "170", info: "Café Instantáneo Nescafé Tradición x 150g.", precio: "6750.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "171", info: "Café Instantáneo Tradicional Cappuccino Doy Pack La Virginia x 275 g.", precio: "6015.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "172", info: "Café Tostado en Capsulas Expresso Sutil La Virginia x 10 Un.", precio: "4451.25", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "173", info: "Café Tostado Molido Puro Aroma La Virginia x 250 g.", precio: "4745.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "174", info: "Café Instantáneo Suave Nescafé Dolca x 50g.", precio: "4650.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "175", info: "Café Instantáneo Clásico En Sobres La Virginia x 36 Un.", precio: "4225.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "176", info: "Café en Saquitos Los 5 Hispanos x 20 un.", precio: "4085.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "177", info: "Café en Saquitos La Virginia x 20 un.", precio: "3685.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "178", info: "Café Instantáneo Cappuccino Mousse de Chocolate y Avellanas Dp La Virginia x 155 g.", precio: "3605.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "179", info: "Café Instántaneo Cortado Doy Pack Dolca x 125 g.", precio: "3200.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "180", info: "Café Instántaneo Chocolate Mocha Doy Pack Dolca x 125 g.", precio: "3200.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "181", info: "Café Instantáneo Tradicional Cappuccino Dp La Virginia x 125 g.", precio: "2839.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "182", info: "Café Tostado y Molido Starbucks Caffé Verona x 250 g .", precio: "21200.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "183", info: "Café Tostado y Molido Starbucks Veranda x 250 g.", precio: "21200.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "184", info: "Café Tostado y Molido Equilibrado Nescafé Gold x 250g.", precio: "16200.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "185", info: "Cafe en Capsulas Cappuccino Tradicional La Virginia x 8 Un.", precio: "9206.25", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "186", info: "Cafe en Capsulas Cappuccino La Virginia x 8 Un.", precio: "9206.25", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "187", info: "Café en Capsula Espresso Roast Starbucks x 10 Un.", precio: "10850.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "188", info: "Cápsulas Blonde Espresso Starbucks Nespresso x 10u.", precio: "10850.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "189", info: "Cápsulas Pike Place Starbucks Nespresso x 10u.", precio: "10850.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "190", info: "Café con Leche en Capsulas Cabrales x 12 un.", precio: "10849.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "191", info: "Café Instantáneo Nescafé Descafeinado x 100g.", precio: "9850.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "192", info: "Café Molido Los 5 Hispanos x 500 g.", precio: "7719.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "193", info: "Café Instáneo Clásico sin Azúcar Doy Pack La Planta de Café x 160 g.", precio: "7565.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "194", info: "Café Instáneo Suave sin Azúcar Doy Pack La Planta de Café x 160 g.", precio: "7565.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "195", info: "Café Tostado Molido en Capsulas Cabrales x 55 g.", precio: "7199.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "196", info: "Café Instantáneo Original Nescafé Dolca x 100g.", precio: "7000.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "197", info: "Cafe Instantaneo Suave La Planta De Cafe x 170 g.", precio: "6675.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "198", info: "Café Tostado en Capsulas Brasil La Morenita x 10 Un.", precio: "4701.75", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "199", info: "Café Tostado en Capsulas Colombia La Morenita x 10 Un.", precio: "4701.75", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "200", info: "Café Instantáneo Suave La Virginia x 170 g.", precio: "6095.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "201", info: "Café Inst Suave sin Azúcar Doy Pack La Planta de Café x 110 g.", precio: "6005.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "202", info: "Café Tostado en Capsulas Expresso Intenso La Virginia x 10 Un.", precio: "4481.25", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "203", info: "Cafe en Saquitos La Virginia x 20 Un.", precio: "5815.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "204", info: "Café Instantáneo Clásico Dp La Virginia x 170 g.", precio: "5279.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "205", info: "Café Instantáneo Selección Granulado La Virginia x 100 g.", precio: "5275.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "206", info: "Café Instantáneo Original Nescafé Dolca x 50g.", precio: "4650.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "207", info: "Café Instántaneo Cappuccino Doy Pack Dolca x 225 g.", precio: "4350.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "208", info: "Café Instantáneo Suave en Saquitos La Virginia x 36 Un.", precio: "4225.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "209", info: "Cappuccino Tradicional Sobres La Virginia x 10 Un.", precio: "4115.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "210", info: "Café Molido los 5 Hispanos x 250 g.", precio: "4045.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "211", info: "Café Instantáneo La Virginia x 100 g.", precio: "3845.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "212", info: "Café Instantáneo Suave La Virginia x 100 g.", precio: "3845.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "213", info: "Coffee Mate Suave x 170g.", precio: "3700.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "214", info: "Coffee Mate Original x 170g.", precio: "3700.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "215", info: "Café Instantáneo Cappuccino Dulce de Leche Dp La Virginia x 155 g.", precio: "3605.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "216", info: "Café Instantáneo Cappuccino Espuma de Vainilla Dp La Virginia x 155 g.", precio: "3605.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "217", info: "Café en Saquitos La Planta de Café x 18 un.", precio: "3565.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "218", info: "Cappuccino Late La Planta de Café x 115 g.", precio: "3405.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "219", info: "Malta Instantánea El Pocillo x 170 g.", precio: "3249.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "220", info: "Cebada Tostada Instantanea El Pocillo x 170 g.", precio: "3249.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "221", info: "Crema para Café en Polvo Doy Pack Coffe Mate x 170 g.", precio: "3200.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "222", info: "Café Instántaneo Cappuccino Doy Pack Dolca x 125 g.", precio: "3200.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "223", info: "Café Instantáneo Latte Dp La Virginia x 125 g.", precio: "3029.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "224", info: "Café Instantáneo Cortado Dp La Virginia x 125 g.", precio: "3009.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }, { id: "225", info: "Café Instantáneo Capuccino Light Dp La Virginia x 100 g.", precio: "2999.00", fecha: "2024-03-16 22:28:41", supermercado: "La Anonima" }] }, { type: "table", name: "leche", database: "comparaprecios", data: [{ id: "1", info: "Leche entera UAT Carrefour classic tetra 1 lt.", precio: "990.00", fecha: "2024-03-16 21:12:25", supermercado: "Carrefour" }, { id: "2", info: "Leche UAT entera Carrefour classic brik 1 lt.", precio: "990.00", fecha: "2024-03-16 21:12:25", supermercado: "Carrefour" }, { id: "3", info: "Bebida a base de proteínas lácteas Molico bolsa 800 g.", precio: "3810.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "4", info: "Leche en polvo descremada Svelty 370 g.", precio: "4875.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "5", info: "Leche en polvo descremada Carrefour classic pouch 125 g.", precio: "1190.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "6", info: "Leche en polvo entera Carrefour classic pouch 400 g.", precio: "3710.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "7", info: "Leche en polvo entera Carrefour classic pouch 125 g.", precio: "1190.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "8", info: "Leche en polvo entera Franz con vitamina A y D 800 g.", precio: "4450.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "9", info: "Leche en polvo entera Purísima 400 g.", precio: "3775.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "10", info: "Leche en polvo entera Purísima plus 800 g.", precio: "7465.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "11", info: "Leche en polvo Sancor bebé 2 advanced 800 g.", precio: "24220.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "12", info: "Golden milk Dicomere leche en polvo de coco vegano 150 g.", precio: "4785.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "13", info: "Leche en polvo Sancor bebé 3 advanced 800 g.", precio: "11332.75", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "14", info: "Leche de almendras Silk sin azúcar tetra 1 lt.", precio: "2980.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "15", info: "Alimento veg. beb. La Serenísima almendra s azúcar 1000 cc.", precio: "2600.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "16", info: "Alimento bebible a base de almendras La Serenísima 1 l.", precio: "1702.50", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "17", info: "Leche de almendras Silk de vainilla tetra 1 lt.", precio: "2983.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "18", info: "Leche de almendras Silk de coco sin azúcar tetra 1 lt.", precio: "2980.00", fecha: "2024-03-16 21:12:44", supermercado: "Carrefour" }, { id: "19", info: "Bebida vegetal Notmilk sin azúcar tetra 1 lt.", precio: "1050.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "20", info: "Bebida vegetal Notmilk clásica tetrabrik 1 lt.", precio: "1050.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "21", info: "Bebida a base de almendras sabor chocolate endulzada Silk 1 lt.", precio: "2983.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "22", info: "Alimento vegetal Silk fermentado a base de coco ​300 g.", precio: "2293.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "23", info: "Leche de almendras Silk de coco tetra 1 lt.", precio: "2980.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "24", info: "Leche de almendras Silk endulzada tetra 1 lt.", precio: "2983.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "25", info: "La Serenisima 100% vegetal chocolate con maní 1 lt.", precio: "2610.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "26", info: "Bebida vegetal Biba de almendra 500 cc.", precio: "1050.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "27", info: "Leche chocolatada ​Cindor 1 lt.", precio: "1859.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "28", info: "Leche chocolatada Las 3 niñas 200 cc.", precio: "795.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "29", info: "Bebida lactea La serenísima frutilla sachet 900 cc.", precio: "819.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "30", info: "Leche chocolatada Nesquik fortificado 200 cc.", precio: "965.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "31", info: "Bebida lactea La serenísima vainilla sachet 900 cc.", precio: "819.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "32", info: "Leche fermentada Actimel sabor frutilla 100 cc.", precio: "1089.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "33", info: "Leche chocotalada UAT Cindor tetra 200 cc.", precio: "731.90", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "34", info: "Nesquik extra cacao chocolatada listo para tomar 200 ml.", precio: "965.00", fecha: "2024-03-16 21:12:53", supermercado: "Carrefour" }, { id: "35", info: "Leche fermentada multifruta Actimel 100 g.", precio: "1089.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "36", info: "Leche chocolatada UHT Las tres niñas sin sellos 1 lt.", precio: "1553.50", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "37", info: "Leche fermentada multifruta s/azúcar Actimel 100 g.", precio: "1089.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "38", info: "Leche UAT las tres niñas cookies and cream 200 cc.", precio: "399.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "39", info: "Bebida láctea La serenísima sabor frutilla UAT 1 lt.", precio: "2180.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "40", info: "Leche fermentada plus guaraná y frutos rojos Actimel 100 g.", precio: "1089.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "41", info: "Leche chocolatada ​La Serenísima clásico 1 lt.", precio: "2400.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "42", info: "Leche chocolatada Cindor 50% mas cacao 1 lt.", precio: "1969.50", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "43", info: "Bebida láctea La serenísima sabor vainilla UAT 1 lt.", precio: "2180.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "44", info: "Leche protein c chocolate La Serenísima bot larga vida 1 l.", precio: "2409.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "45", info: "Bebida lactea La serenísima frutilla brick 200 cc.", precio: "665.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "46", info: "Bebida láctea La Serenísima sense caramel 1 l.", precio: "2269.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "47", info: "Bebida lactea La serenísima vainilla brick 200 cc.", precio: "665.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "48", info: "Leche fermentada Kids mix de frutas Actimel 100 g.", precio: "1089.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "49", info: "Alimento bebible vegetal La serenísima sabor coco 1 lt.", precio: "2610.00", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "50", info: "Leche chocolatada Cindor 50% mas cacao 200 ml.", precio: "773.50", fecha: "2024-03-16 21:13:00", supermercado: "Carrefour" }, { id: "51", info: "Bebida láctea La serenísima sense caramel 200 cc.", precio: "939.00", fecha: "2024-03-16 21:13:08", supermercado: "Carrefour" }, { id: "52", info: "Bebida láctea La serenísima sense cappuccino 200 cc.", precio: "939.00", fecha: "2024-03-16 21:13:08", supermercado: "Carrefour" }, { id: "53", info: "Leche chocolatada ​La Serenísima clásico 200 ml.", precio: "950.00", fecha: "2024-03-16 21:13:08", supermercado: "Carrefour" }, { id: "54", info: "Bebida láctea Bananita dolca 185 cc.", precio: "1070.00", fecha: "2024-03-16 21:13:08", supermercado: "Carrefour" }, { id: "55", info: "Milkshake Nesquik sabor banana brick 190 cc.", precio: "1150.00", fecha: "2024-03-16 21:13:08", supermercado: "Carrefour" }, { id: "56", info: "Leche chocolatada Chochoco tetra 200 cc.", precio: "569.00", fecha: "2024-03-16 21:13:08", supermercado: "Carrefour" }, { id: "57", info: "Chocolatada en polvo Dicomere leche de coco vegana 150 g.", precio: "4145.00", fecha: "2024-03-16 21:13:08", supermercado: "Carrefour" }, { id: "58", info: "Leche chocolatada Chochoco tetra 1 lt.", precio: "2145.00", fecha: "2024-03-16 21:13:08", supermercado: "Carrefour" }, { id: "59", info: "Leche Uat La Serenisima 1 - 1 Lt", precio: "1227.04", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "60", info: "Leche La Serenisima Zerolact Bot 1l", precio: "1315.53", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "61", info: "Leche Uat Serenisima 3 - 1 Lt", precio: "1227.04", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "62", info: "Leche La Serenisima Liviana Bot 1l", precio: "1199.00", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "63", info: "Leche Las Tres Niñas Liviana X 1lt", precio: "971.25", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "64", info: "Leche Uat La Serenísima Proteina 1lt", precio: "1315.53", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "65", info: "Leche La Serenisima Entera Bot 1l", precio: "1199.00", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "66", info: "Leche Descremada La Serenísima 1sachet 1lt", precio: "1271.60", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "67", info: "Leche Entera La Serenísima 3sachet 1lt", precio: "1271.60", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "68", info: "Leche Chocolatada Cindor X 1l", precio: "2046.98", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "69", info: "Leche Descremada 1casanto 1l", precio: "1078.48", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "70", info: "Leche Entera 3casanto 1l", precio: "1078.48", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "71", info: "Leche Reducida En Lactosa X 1l", precio: "1271.60", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "72", info: "Leche Descremada 0las Tres Niñas 1lt", precio: "1012.50", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "73", info: "Leche La Serenisima Entera 200cc", precio: "565.85", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "74", info: "Leche Uat La Serenisima Larga Vida 1lt", precio: "1227.04", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "75", info: "Leche Uat Descremada La Serenísima 0", precio: "1287.06", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "76", info: "Leche Las Tres Niñas Sin Lactosa  1l", precio: "1237.50", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "77", info: "Leche Descremada La Serenisima Prebiotica Botella 1l", precio: "1315.53", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "78", info: "Leche De Almendras La Serenísima 1l", precio: "1695.69", fecha: "2024-03-16 21:21:07", supermercado: "Disco" }, { id: "115", info: "Leche fermentada frutilla Actimel 100g.", precio: "1217.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "116", info: "Leche fermentada frutilla Actimel 100g.", precio: "1217.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "117", info: "Leche fermentada multifruta Actimel 100g.", precio: "1217.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "118", info: "Leche fermentada Plus guaraná y frutos rojos Actimel 100g.", precio: "1217.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "119", info: "Leche en Polvo Nutrifuerza La Lechera x 400 g.", precio: "4900.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "120", info: "Leche en Polvo Nido 4 Prebio 3 x 800g.", precio: "9225.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "121", info: "Leche en Polvo Nutrifuerza La Lechera x 800 g.", precio: "7087.50", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "122", info: "Leche L.V. Descremada La Anónima x 1 lt.", precio: "1238.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "123", info: "Leche L.V. Entera La Anónima x 1 lt.", precio: "1238.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "124", info: "Leche LV Entera Clasica 3% La Serenisima x 1 Lt.", precio: "1800.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "125", info: "Leche LV Parcialmente Descremada Liviana 1% La Serenisima x 1 Lt.", precio: "1800.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "126", info: "Leche L.V. La Anónima Descremada x 1 Lt.", precio: "1238.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "127", info: "Leche Entera La Anónima Ultra Fortificada Sachet x 1 Lt.", precio: "1150.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "128", info: "Leche L.V. Entera Tregar x 1 Lt.", precio: "1149.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "129", info: "Leche L.V. La Anónima Entera x 1 Lt.", precio: "1238.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "130", info: "Leche LV Parcialmente Descremada Tregar x 1 Lt.", precio: "1149.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "131", info: "Leche Descremada La Anónima Ultra Fortificada Sachet x 1 Lt", precio: "1150.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "132", info: "Leche LV Entera Clásica Fortificada c/ Vitamina 3% La Serenísima x 200 cc.", precio: "880.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "133", info: "Leche chocolatada Cindor 200 cc.", precio: "1337.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "134", info: "Leche Reducida en Lactosa Sachet La Serenisima x 1 Lt.", precio: "1250.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "135", info: "Leche Parcialmente Descremada 0% Lactosa La Serenísima Botella x 1 Lt.", precio: "1425.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "136", info: "Leche LV Parcialmente Descremada Clasica 2% La Serenisima x 1 Lt.", precio: "1800.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "137", info: "Leche chocolatada Cindor 1 Lt.", precio: "3394.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "138", info: "Leche Parcialmente Descremadaultra Multidefensas La Serenísima x 1 Lt.", precio: "1102.50", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "139", info: "Leche Entera Multidefensas 3%Sachet La Serenísima x 1 Lt.", precio: "1081.50", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "140", info: "Leche Infantil Listo para tomar Nidina 2 x 200 cc", precio: "970.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "141", info: "Leche Parcialmente Descremada 0% Lactosa Las Tres Niñas x 1 Lt.", precio: "1400.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "142", info: "Leche LV Entera Clásica 3% Las Tres Niñas x 1 Lt.", precio: "1350.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "143", info: "Bebida a base de almendras s/azúcar Silk 1Lt.", precio: "3183.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "144", info: "Leche fermentada multifruta s/azúcar Actimel 100g.", precio: "1217.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "145", info: "Leche en Polvo Santa Clara Entera Fortificada A y D x 800 g.", precio: "4350.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "146", info: "Leche Lv. Reducida en Lactosada Ilolay x 1 Lt.", precio: "1850.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "147", info: "Leche La Serenisima Protein Con Chocolate  x1L", precio: "2650.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "148", info: "Leche Larga Vida Entera Ilolay x 1 L.", precio: "1700.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "149", info: "Leche Larga Vida Descremada Ilolay x 1 L.", precio: "1700.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "150", info: "Leche Ultra Parcialmente Descremada Sachet 1% Casanto x 1 Lt.", precio: "1100.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "151", info: "Leche Modificada en Polvo Inst Franciscana x 800 g.", precio: "5600.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "152", info: "Leche Infantil Listo para Tomar Nido 3 Defensas x 200 cc", precio: "800.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "153", info: "Leche en Polvo Descremada Santa Clara Fortificada 0% Grasa x 800 g.", precio: "7000.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "154", info: "Leche en Polvo Descremada La Anónima x 400 g.", precio: "3049.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "155", info: "Leche LV Descremada 0% Fortificada c/Vit. Bot La Serenísima x 1 Lt.", precio: "1425.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "156", info: "Leche Chocolatada Fortificada La Serenísima Clásico x 200 cc.", precio: "550.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "157", info: "Leche en Polvo Descremada Est La Serenísima x 400 g.", precio: "3925.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "158", info: "Leche L.V. Parc. Descremada 2% La Serenísima Botella x 1 Lt.", precio: "1850.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "159", info: "Leche LV Parcialmente Descremada Liviana 1% Las Tres Niñas x 1 Lt.", precio: "1350.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "160", info: "Leche LV Parcialmente Descremada Clásica Liviana 2% Las Tres Niñas x 1 Lt.", precio: "1350.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "161", info: "Leche Ultra Entera Sachet 3% Casanto x 1 Lt.", precio: "1150.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "162", info: "Leche L.V. Parcialmente Descremada Liviana 1% La Serenísima Botella x 1 Lt.", precio: "1850.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "163", info: "Leche Larga Vida Descremado  Fort. con Vitamina Ad Verónica x 1 Lt.", precio: "1045.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "164", info: "Leche Condensada Orgánica Nestlé x 395 g.", precio: "2362.50", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "165", info: "Leche en Polvo Etapa 3 Forti protectus Lata Nido x 800 g.", precio: "10387.50", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "166", info: "Leche en Polvo Fortificada Santa Clara x 800 g.", precio: "6300.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "167", info: "Leche en Polvo Entera La Anónima x 800 g.", precio: "6175.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "168", info: "Leche L.V. Parcialmente Descremada Fortificada Extra Calcio La Serenísima x 1 Lt.", precio: "1425.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "169", info: "Leche LV Descremada Deslactosada Tregar x 1 Lt.", precio: "1405.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "170", info: "Leche Modif. en Polvo Desc. y Deslactozada. Purísima x 400 g.", precio: "4289.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "171", info: "Leche L.V. Chocolatada La Anónima x 1 Lt.", precio: "2100.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "172", info: "Leche Parcialmente Descremada Multidefensas 2% Sachet La Serenísima x 1 Lt.", precio: "1400.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "173", info: "Leche LV Modificada Etapa 3 Profutura Nutrilón x 200 cc.", precio: "1600.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "174", info: "Leche en Polvo Zero Lactosa Est La Serenísima x 400 g.", precio: "4765.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "175", info: "Leche L.V. Parcialmente Descremada Fortificada Hierro 1% La Serenísima x 1 kg.", precio: "1425.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "176", info: "Leche L.V. Entera Clásica 3% La Serenísima Botella x 1 Lt.", precio: "1850.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "177", info: "Leche L.V. Parcialmente Descremada 0% Botella La Serenísima x 1 Lt.", precio: "1850.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "178", info: "Arroz con Leche con Dulce ce Leche Tregar x 180 g.", precio: "978.75", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "179", info: "Leche en Polvo Descremada Plus Purísima x 800 g.", precio: "7425.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "180", info: "Leche en Polvo Entera La Paulina x 800 g.", precio: "7005.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "181", info: "Leche Chocolatada Uat Parcialmente Descremado Cindor x 200 cc.", precio: "1470.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "182", info: "Leche LV Parcialmente Descremada Prebiótica 1% Botella La Serenísima x 1 Lt.", precio: "1425.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "183", info: "Leche en Polvo Orgánica Nido x 800 g.", precio: "10050.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "184", info: "Leche en Polvo Nido Fortigrow x 800g.", precio: "8362.50", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "185", info: "Leche en Polvo Entera Purísima x 400 g.", precio: "3749.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "186", info: "Leche Condensada Light Nestlé x 395 g.", precio: "3700.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "187", info: "Chocolate con Leche Relleno de Dulce de Leche Tokke x 72 g.", precio: "1305.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "188", info: "Leche Chocolatada Fortificada La Serenísima Clásico x 1 Lt.", precio: "2004.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "189", info: "Leche Parcialmente Descremada Barista Botella La Serenisima x 1 Lt.", precio: "1425.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "190", info: "Leche Parcialmente Descremada 2% Sachet SSL La Serenísima x 1 Lt.", precio: "1185.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "191", info: "Leche en Polvo Descremada Svelty x 750g.", precio: "10050.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "192", info: "Leche en Polvo Entera Plus Purísima x 800 g.", precio: "7405.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "193", info: "Leche Modificada en Polvo Nut. Eq. Armonía x 800 g.", precio: "6235.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "194", info: "Leche Modificada en Polvo Estuche Formidable x 800 g.", precio: "6155.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "195", info: "Leche en Polvo Fortigrow Realidad Aumentada Nido x 370 g.", precio: "5650.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "196", info: "Leche en Polvo Descremada Svelty x 370g.", precio: "5500.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }, { id: "197", info: "Leche Modificada en Polvo La Armonía x 400 g.", precio: "3315.00", fecha: "2024-03-16 22:29:24", supermercado: "La Anonima" }] }, { type: "table", name: "pan", database: "comparaprecios", data: [{ id: "1", info: "Pan de mesa Veneziana blanco 600 g.", precio: "3100.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "2", info: "Pan blanco Lactal bolsa 315 g.", precio: "1830.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "3", info: "Pan de mesa Carrefour classic con salvado 620 g.", precio: "2511.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "4", info: "Pan de mesa Bimbo tipo artesano 500 g.", precio: "4870.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "5", info: "Pan blanco Bimbo 550 g.", precio: "4250.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "6", info: "Pan de salvado Lactal bolsa 330 g.", precio: "2430.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "7", info: "Pan de mesa Carrefour classic blanco lacteado 600 g.", precio: "2331.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "8", info: "Pan Blanco Lactal rodajas finas en bolsa 460 g.", precio: "2990.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "9", info: "Pan integral Fargo grano entero bolsa 350 g.", precio: "3580.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "10", info: "Pan Fargo cereales y semillas bolsa 400 g.", precio: "3580.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "11", info: "Pan de salvado Lactal rodajas finas 560 g.", precio: "3620.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "12", info: "Pan salvado Fargo plus bolsa 600 g.", precio: "4690.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "13", info: "Pan de mesa Carrefour blanco 590 g.", precio: "2580.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "14", info: "Pan de mesa Bimbo liviano acti leche 400 g.", precio: "3240.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "15", info: "Pan artesanal doble integral Carrefour 570 g.", precio: "2249.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "16", info: "Baguette clásica x uni", precio: "950.00", fecha: "2024-03-16 21:07:33", supermercado: "Carrefour" }, { id: "17", info: "Pan de mesa Veneziana trisalvado light 620 g.", precio: "3685.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "18", info: "Mini baguette clásica x uni", precio: "489.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "19", info: "Pan trisalvado light Dr. Cormillot Veneziana 360 g.", precio: "2300.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "20", info: "Pan de pebetes 250 g. x 4 uni", precio: "1190.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "21", info: "Pan de mesa lacteado La Perla 620 g.", precio: "3050.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "22", info: "Pan multisemilla La Perla 600 g.", precio: "3090.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "23", info: "Mini ciriolla toscana x uni", precio: "1099.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "24", info: "Figacitas de manteca x 8 uni", precio: "1435.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "25", info: "Pan integral Bimbo 600 g.", precio: "5120.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "26", info: "Pan campito blanco 1 u.", precio: "1910.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "27", info: "Pan campito salvado 1 u.", precio: "2150.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "28", info: "Pan de chips La Perla 16 u.", precio: "1500.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "29", info: "Pan La Perla multicereal 600 g.", precio: "3090.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "30", info: "Pan de molde Smams sin tacc 200 g.", precio: "3565.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "31", info: "Pan campito semillas 1 u.", precio: "2030.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "32", info: "Pan de mesa chico La Perla 330 g.", precio: "1750.00", fecha: "2024-03-16 21:07:47", supermercado: "Carrefour" }, { id: "33", info: "Pan de mesa grande La Perla 550 g.", precio: "2650.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "34", info: "Pan de mesa lacteado Veneziana 400 g.", precio: "2100.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "35", info: "Pan blanco en bolsa 335 g.", precio: "1890.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "36", info: "Pan sin tacc Schar con canela 200 g.", precio: "6485.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "37", info: "Pan con salvado La Perla 640 g.", precio: "3130.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "38", info: "Pan con salvado La Perla 350 g.", precio: "1900.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "39", info: "Rapiditas clasicas Bimbo bolsa 275 g.", precio: "2390.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "40", info: "Pan de hamburguesa Carrefour classic 4 u.", precio: "1155.70", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "41", info: "Pan para hamburguesa Bimbo con sésamo 4 uni", precio: "1970.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "42", info: "Pan para hamburguesas Bimbo artesano 4 uni", precio: "2360.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "43", info: "Pan para pancho Bimbo artesano bolsa 6 uni", precio: "2360.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "44", info: "Pan para panchos Carrefour classic 6 u.", precio: "1155.70", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "45", info: "Rapiditas light Bimbo bolsa 275 g.", precio: "2390.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "46", info: "Tortillas de trigo Carrefour classic 300 g.", precio: "1306.60", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "47", info: "Rapiditas integrales Bimbo bolsa 275 g.", precio: "2390.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "48", info: "Pan para pancho Lactal 210 g.", precio: "1400.00", fecha: "2024-03-16 21:07:56", supermercado: "Carrefour" }, { id: "49", info: "Pan para hamburguesa Lactal bolsa x 4 uni", precio: "1400.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "50", info: "Tortilla integral Veneziana 6 u.", precio: "1220.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "51", info: "Pan para panchos Veneziana 6 u.", precio: "1400.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "52", info: "Pan de papa para hamburguesa Bimbo artesano 4 uni", precio: "2750.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "53", info: "Pan para pancho Bimbo 6 uni", precio: "2000.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "54", info: "Pan para hamburguesa Fargo con sésamo x 4 uni", precio: "1770.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "55", info: "Pan para hamburguesas Veneziana 4 u.", precio: "1400.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "56", info: "Pan de papa para panchos Bimbo artesano en bolsa 6 uni", precio: "2750.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "57", info: "Pan para pancho Fargo x 6 uni", precio: "1770.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "58", info: "Tortillas clásicas Veneziana 165 g.", precio: "1280.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "59", info: "Pan de panchos 230 g. x 6 uni", precio: "1190.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "60", info: "Pan para hamburguesa Bimbo brioche bolsa x 4 uni", precio: "2750.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "61", info: "Pan para panchos La perla 6 uni", precio: "1200.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "62", info: "Tortillas con trigo Tía rosa en bolsa 10 uni", precio: "2620.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "63", info: "Pan de hamburguesa 210 g. x 4 uni", precio: "1190.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "64", info: "Pan para panchos largos 390 g.", precio: "1705.00", fecha: "2024-03-16 21:08:03", supermercado: "Carrefour" }, { id: "65", info: "Pan para hamburguesa Veneziana 4 u.", precio: "1540.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "66", info: "Pan para hamburguesa La perla 4 uni", precio: "1200.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "67", info: "Pan para hamburguesa de queso", precio: "1230.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "68", info: "Pan para hamburguesa La Perla con sesamo 200 g.", precio: "1280.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "69", info: "Pan para hamburguesa con puré de papa", precio: "1230.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "70", info: "Pan para hamburguesa brioche", precio: "1290.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "71", info: "Pan de hamburguesa de papa Kansas con parmesano 4 uni", precio: "2800.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "72", info: "Pan para super pancho La Perla 6 u.", precio: "1770.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "73", info: "Pan de hamburguesa de papa Kansas con sesamo 4 uni", precio: "2500.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "74", info: "Pan molde orgánico 580 g. x unidad", precio: "2289.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "75", info: "Pan para hamburguesa de remolacha veggie", precio: "1590.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "76", info: "Pan dehamburguesa de espinaca veggie.", precio: "1230.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "77", info: "Media barra orgánica 120 g. x unidad", precio: "599.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "78", info: "Barra organica 250 g. x unidad", precio: "1099.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "79", info: "Petit moule de lino y miel orgánico 360 g. x unidad", precio: "2049.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "80", info: "Petit moule pasas y nueces orgánico 360 g. x unidad", precio: "2755.00", fecha: "2024-03-16 21:08:12", supermercado: "Carrefour" }, { id: "81", info: "Pan Blanco Artesano Bimbo 500 Gr", precio: "4900.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "82", info: "Pan Blanco Lactal 460 Gr", precio: "3000.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "83", info: "Pan Blanco Bimbo 550 Gr", precio: "4250.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "84", info: "Pan Integral Grano Entero Fargo 350 Gr", precio: "3600.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "85", info: "Pan Mix De Cereales Fargo 400 Gr", precio: "3600.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "86", info: "Pan De Salvado Lactal 560 Gr", precio: "3650.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "87", info: "Pan De Hamburguesa Artesano Bimbo 4 U", precio: "2400.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "88", info: "Pan Salvado Plus Fargo 600 Gr", precio: "4700.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "89", info: "Pan Para Hamburguesa Con Sésamo Bimbo 4 U", precio: "2000.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "90", info: "Pan De Panchos Bimbo Artesano 6 U", precio: "2400.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "91", info: "Pan Integral Artesano Bimbo 500 Gr", precio: "5750.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "92", info: "Pan Con Cereales Oroweat 600 Gr", precio: "4160.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "93", info: "Pan Con Semillas Oroweat 600 Gr", precio: "4160.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "94", info: "Pan Blanco Lacteado Fargo 330 Gr", precio: "2950.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "95", info: "Pan Fargo Lacteado 550 Gr", precio: "3850.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "96", info: "Pan De Semillas Bimbo Artesano 500 Gr", precio: "5750.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "97", info: "Pan Multigrano X 1 U", precio: "1874.25", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "98", info: "Pan Rallado Morixe 500 Gr", precio: "1050.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "99", info: "Pan De Pancho Lactal 210 Gr", precio: "1400.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "100", info: "Pan De Papa De Hamburguesa Artesano 4 Un", precio: "2750.00", fecha: "2024-03-16 22:23:10", supermercado: "Disco" }, { id: "114", info: "Pan Doble Integral La Anónima x 540 g.", precio: "3350.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "115", info: "Pan Doble Integral La Anónima x 540 g.", precio: "3350.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "116", info: "Pan para Hamburguesas x 4 un. Best x 210 g.", precio: "1150.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "117", info: "Pan Lacteado Grande Best x 600 g.", precio: "2550.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "118", info: "Pan para Pancho x 6 un. Best x 210 g.", precio: "1150.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "119", info: "Pan Rallado La Anónima x 500 g.", precio: "975.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "120", info: "Pan con Salvado Grande Best x 600 g.", precio: "2750.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "121", info: "Pan Rallado Morixe x 1 Kg.", precio: "2155.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "122", info: "Pan Lactal Mesa Multicereal Familiar. Mimago x 650 g.", precio: "2340.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "123", info: "Pan de Salvado La Anónima con Semillas de Lino x 540 g.", precio: "3350.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "124", info: "Pan para Hamburguesas Artesano x 4 Un. Bimbo x 240 g.", precio: "2040.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "125", info: "Pan de Mesa Grande Best x 600 g.", precio: "2750.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "126", info: "Pan de Mesa Blanco Grande Lactal Bimbo x 460 g.", precio: "3225.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "127", info: "Pan c/Salvado Chico Best x 360 g.", precio: "1850.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "128", info: "Pan para Hamburguesas con Sésamo x 4 Un. Fargo x 210 g.", precio: "1885.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "129", info: "Pan Rallado Morixe x 500 g.", precio: "855.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "130", info: "Pan Rallado para Horno Preferido x 500 g.", precio: "1600.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "131", info: "Pan con Salvado Diet Noly x 600 g.", precio: "1917.50", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "132", info: "Pan para Hamburguesas Lacteado con Sésamo X 4 Un. Bimbo x 210 g.", precio: "2115.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "133", info: "Pan para Pancho Artesano x 6 Un. Bimbo x 240 g.", precio: "2040.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "134", info: "Pan Lacteado Chico Best x 360 g.", precio: "1800.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "135", info: "Pan de Mesa Chico Noly x 360 g.", precio: "1190.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "136", info: "Pan para Panchos x 6 Un. Fargo x 210 g.", precio: "1885.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "137", info: "Pan para Panchos Lactal x 210 g.", precio: "1469.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "138", info: "Pan Rallado Fortificado Cañuelas x 500 g.", precio: "835.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "139", info: "Pan Blanco Artesano Bimbo x 500 g.", precio: "4160.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "140", info: "Pan De Mesa Blanco Bimbo x 550 g.", precio: "4555.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "141", info: "Pan Lacteado Estilo Campo La Anónima x 540 g.", precio: "3550.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "142", info: "Pan para Hamburguesas de Papa Artesano x 4 Un. Bimbo x 240 g.", precio: "2949.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "143", info: "Pan Salvado Plus Fortificado Familiar Fargo x 600 g.", precio: "4814.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "144", info: "Pan de Mesa con Salvado y Semillas Lactal x 330 g.", precio: "1903.85", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "145", info: "Pan para Pancho Noly x 210 g.", precio: "780.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "146", info: "Pan Lacteado Noly Grande x 600 g.", precio: "1885.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "147", info: "Pan para Panchos Largo Mimago x 390 g.", precio: "2000.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "148", info: "Pan de Miga Newen x 400 g.", precio: "1929.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "149", info: "Pan de Viena para Panchos Mimago x 240 g.", precio: "1250.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "150", info: "Pan Rallado Fortificado Preferido x 1 Kg.", precio: "2900.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "151", info: "Pan Rallado Fortificado Cañuelas x 1 Kg.", precio: "1749.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "152", info: "Pan Semillas del Campo Artesano Bimbo x 500 g.", precio: "6100.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "153", info: "Pan Integral Grano Entero Fargo x 350 g.", precio: "3955.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "154", info: "Pan de Mesa Lacteado Pack Familiar Mimago x 590 g.", precio: "1982.50", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "155", info: "Pan para Hamburguesas Brioche Artesano x 4 Un. Bimbo x 240 g.", precio: "2360.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "156", info: "Pan de Mesa Grande Noly x 600 g.", precio: "1885.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "157", info: "Pan con Salvado Diet Chico Noly x 360 g.", precio: "1202.50", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "158", info: "Pan para Hamburguesas  Lactal x 210 g.", precio: "1469.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "159", info: "Pan Rallado (Kg)", precio: "1700.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "160", info: "Pan Integral Artesano Bimbo x 500 g.", precio: "6100.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "161", info: "Pan Blanco Multicereal La Anónima x 540 g.", precio: "3350.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "162", info: "Pan Artesanal Doble Integral Mimago x 550 g.", precio: "2177.50", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "163", info: "Pan Salvado Pack Familiar Mimago x 600 g.", precio: "2080.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "164", info: "Pan Blanco Lacteado Fargo x 380 g.", precio: "3119.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "165", info: "Pan para Panchos Artesano Papa x 6 Un. Bimbo x 240 g.", precio: "2360.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "166", info: "Pan de Viena para Hamburguesas Mimago x 240 g.", precio: "812.50", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "167", info: "Pan con Cereales Avena Trigo Chía Lino Oroweat x 600 g.", precio: "6795.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "168", info: "Pan de Mesa Integral Cero&Cero Bimbo x 350 g.", precio: "2924.35", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "169", info: "Pan Cereales y Semillas Fargo x 400 g.", precio: "3955.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "170", info: "Pan de Mesa Blanco Chico Bimbo x 400 g.", precio: "3475.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "171", info: "Pan de Mesa Lacteado Rodajas Finas Fargo x 330 g.", precio: "3139.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "172", info: "Pan de Mesa Multicereal Chico Mimago x 390 g.", precio: "1430.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "173", info: "Pan para Pancho Lacteado x 6 Un. Bimbo x 210 g.", precio: "2099.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "174", info: "Pan de Mesa Chico Best x 360 g.", precio: "1800.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "175", info: "Pan de Salvado Sin Sal Doña Noly x 360 g.", precio: "1170.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "176", info: "Pan Rallado con Ajo y Perejil Mamá Cocina x 500 g.", precio: "1285.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "177", info: "Pan Rallado Int con Semillas Pureza x 350 g.", precio: "1095.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "178", info: "Pan Felipe (Kg)", precio: "2200.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "179", info: "Pan Rústico sin Glutén Schar x 200 g.", precio: "4405.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "180", info: "Pan Lino Bimbo x 380 g.", precio: "2716.35", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "181", info: "Pan Blanco sin Glutén Schar x 200 g.", precio: "3985.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "182", info: "Pan Artesanal Con Semillas Mimago x 590 g.", precio: "2405.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "183", info: "Pan Salvado sin Sal La Anónima x 360 g.", precio: "2300.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "184", info: "Pan Salvado Chico Mimago x 360 g.", precio: "1332.50", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "185", info: "Pan Lacteado Noly Rodajas Finas x 360 g.", precio: "1170.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "186", info: "Pan para Hamburguesas x 4 un. Noly x 210 g.", precio: "780.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "187", info: "Pan Frances sin Gluten Schar x 100 g.", precio: "4665.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "188", info: "Pan Tipo Chipa (Kg)", precio: "12050.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "189", info: "Pan Milonguita (Kg)", precio: "1935.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "190", info: "Pan con Semillas de Amapola Girasol Lino Avena Oroweat x 600 g.", precio: "6795.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "191", info: "Pan Integral Grano Entero Bimbo x 600 g.", precio: "5485.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "192", info: "Pan Tipo Campo La Anónima", precio: "4350.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "193", info: "Pan de Superpancho x 6 Un. Fargo x 390 g.", precio: "3175.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "194", info: "Pan Mignon (Kg)", precio: "2200.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "195", info: "Pan Flauta La Anónima (Kg)", precio: "2200.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "196", info: "Pan de Mesa Lacteado Mimago x 360 g.", precio: "1235.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "197", info: "Pan para Hamburguesas x 4 Un. Fargo x 210 g.", precio: "1899.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }, { id: "198", info: "Pan de Miga Don Beno x 500 g.", precio: "1635.00", fecha: "2024-03-16 22:32:12", supermercado: "La Anonima" }] }, { type: "table", name: "yerba", database: "comparaprecios", data: [{ id: "1", info: "Yerba mate Playadito suave con palo 1 kg.", precio: "3650.00", fecha: "2024-03-16 21:06:12", supermercado: "Carrefour" }, { id: "2", info: "Yerba mate Playadito con palo 500 g.", precio: "1825.00", fecha: "2024-03-16 21:06:12", supermercado: "Carrefour" }, { id: "3", info: "Yerba mate Cruz de Malta bold ment sin TACC 500 g.", precio: "1815.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "4", info: "Yerba mate con palo Carrefour sin TACC 500 g.", precio: "1791.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "5", info: "Yerba mate Cruz De Malta natural 1 kg.", precio: "3350.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "6", info: "Yerba mate La Tranquera especial suave con palo 1 kg.", precio: "2920.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "7", info: "Yerba mate Cachamate sabor coco 500 g,", precio: "1720.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "8", info: "Yerba Arroyo verde hierbas serranas 500 g.", precio: "1700.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "9", info: "Yerba mate Salus con limón menta 500 g.", precio: "2040.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "10", info: "Yerba suave Cachamate naranja 500 g.", precio: "1295.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "11", info: "Yerba mate Unión liviana 500 g.", precio: "2285.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "12", info: "Yerba mate con palo 4flex Taragüi 250 g.", precio: "1150.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "13", info: "Yerba mate Cbsé con hierbas y guaraná 500 g.", precio: "1496.25", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "14", info: "Yerba mate Romance con palo original 1 kg.", precio: "3540.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "15", info: "Yerba mate Cbsé limón 500 g.", precio: "1496.25", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "16", info: "Yerba mate Cbsé frutos del bosque 500 g.", precio: "1496.25", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "17", info: "Yerba mate Cachamate hierbas del litoral lemon grass 500 g.", precio: "1825.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "18", info: "Yerba mate campo y monte La Merced 500 g.", precio: "3000.00", fecha: "2024-03-16 21:06:32", supermercado: "Carrefour" }, { id: "19", info: "Yerba mate Cachamate con té verde siluet plus 500 g.", precio: "1295.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "20", info: "Yerba mate Cruz de Malta con palo 500 g.", precio: "1670.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "21", info: "Yerba mate Cachamate hierbas serranas 500 g.", precio: "1825.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "22", info: "Yerba mate Cachamate hierbas serranas con cedron 1 kg.", precio: "2670.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "23", info: "Yerba mate con palo edulcorada Salus 500 g.", precio: "2040.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "24", info: "Yerba Arroyo verde con burrito 500 g.", precio: "1335.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "25", info: "Yerba mate Cbsé pomelo 500 g.", precio: "1496.25", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "26", info: "Yerba mate con burrito Arregui 500 g.", precio: "1600.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "27", info: "Yerba mate Verdeflor con hierbas serranas 500 g.", precio: "1650.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "28", info: "Yerba mate Cruz De Malta natural 500 g.", precio: "1780.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "29", info: "Yerba mate Carrefour con palo sin TACC 250 g.", precio: "981.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "30", info: "Yerba mate suave 4flex Unión 250 g.", precio: "1150.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "31", info: "Yerba mate Cbsé silueta naranja Cormillot 500 g.", precio: "1496.25", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "32", info: "Yerba mate La Tranquera especial suave con palo 500 g.", precio: "1665.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "33", info: "Yerba mate Romance con palo 1 kg.", precio: "3420.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "34", info: "Yerba mate suave Amanda 1 kg.", precio: "3475.00", fecha: "2024-03-16 21:06:41", supermercado: "Carrefour" }, { id: "35", info: "Yerba mate Cbsé silueta Cormillot 500 g.", precio: "1496.25", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "36", info: "Yerba mate Rosamonte suave 55 aniversario 1 kg.", precio: "4299.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "37", info: "Yerba mate con palo Carrefour sin TACC 1 kg.", precio: "3141.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "38", info: "Yerba mate Playadito sin palo 500 g.", precio: "2495.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "39", info: "Yerba mate Cachamate serranas con cedrón 500 g.", precio: "1825.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "40", info: "Yerba mate Chamigo con palo sin tacc 1 kg.", precio: "2575.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "41", info: "Yerba mate Cruz de Malta manzanilla sin TACC 500 g.", precio: "1815.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "42", info: "Yerba mate Cachamate rosa paquete 1 kg.", precio: "3450.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "43", info: "Yerba mate de monte orígen controlado La Merced 500 g.", precio: "3000.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "44", info: "Yerba mate Verdeflor con menta 500 g.", precio: "1765.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "45", info: "Yerba mate Buenas y santas de hierbas 500 g.", precio: "1750.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "46", info: "Yerba mate sabor naranja Carrefour sin TACC 500 g.", precio: "1611.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "47", info: "Yerba mate Liebig con palo original 500 g.", precio: "2590.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "48", info: "Yerba mate Cachamate amarilla paquete 500 g.", precio: "1825.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "49", info: "Yerba mate Amanda premium 500 g.", precio: "2550.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "50", info: "Yerba compuesta Arregui 500 g.", precio: "1600.00", fecha: "2024-03-16 21:06:49", supermercado: "Carrefour" }, { id: "51", info: "Yerba mate Cbsé miel 500 g.", precio: "1496.25", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "52", info: "Yerba mate La cumbrecita con palo 500 g.", precio: "1890.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "53", info: "Yerba mate Verdeflor con naranja 500 g.", precio: "1765.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "54", info: "Yerba mate con peperina Arregui 500 g.", precio: "1600.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "55", info: "Yerba mate Verdeflor boldo 500 g.", precio: "1890.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "56", info: "Yerba mate Romance suave 1 kg.", precio: "3400.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "57", info: "Yerba mate Cachamate hierbas pampeanas menta 500 g.", precio: "1825.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "58", info: "Yerba mate La cumbrecita con hierbas naturales 500 g.", precio: "2090.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "59", info: "Yerba mate Amanda de campo 1 kg.", precio: "3350.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "60", info: "Yerba mate sabor a menta Carrefour sin TACC 500 g.", precio: "1611.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "61", info: "Yerba mate Ytacua 1 kg.", precio: "2595.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "62", info: "Yerba mate Cachamate selección 500 g.", precio: "2100.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "63", info: "Yerba mate con cedrón Arregui 500 g.", precio: "1600.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "64", info: "Yerba mate Rosamonte suave 55 aniversario 500 g.", precio: "2285.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "65", info: "Yerba mate con menta Arregui 500 g.", precio: "1600.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "66", info: "Yerba Cachamate hierbas serranas y cedron 500 g.", precio: "2450.00", fecha: "2024-03-16 21:06:57", supermercado: "Carrefour" }, { id: "67", info: "Yerba mate Cbsé endulife dr. cormillot 500 g.", precio: "1496.25", fecha: "2024-03-16 21:07:05", supermercado: "Carrefour" }, { id: "68", info: "Yerba mate Cbsé frutos tropicales 500 g.", precio: "1496.25", fecha: "2024-03-16 21:07:05", supermercado: "Carrefour" }, { id: "69", info: "Yerba mate Cbsé hierbas cuyanas 500 g.", precio: "1496.25", fecha: "2024-03-16 21:07:05", supermercado: "Carrefour" }, { id: "70", info: "Yerba mate Playadito con hierbas 500 g.", precio: "3190.00", fecha: "2024-03-16 21:07:05", supermercado: "Carrefour" }, { id: "71", info: "Yerba mate CBSé etiqueta negra con hierbas serranas 500 g.", precio: "2396.25", fecha: "2024-03-16 21:07:05", supermercado: "Carrefour" }, { id: "72", info: "Mate listo Taragüi 1 u.", precio: "995.00", fecha: "2024-03-16 21:07:05", supermercado: "Carrefour" }, { id: "73", info: "Yerba mate Playadito lata 500 g.", precio: "8615.00", fecha: "2024-03-16 21:07:05", supermercado: "Carrefour" }, { id: "74", info: "Yerba mate Carrefour sin TACC Selection caja 500 g.", precio: "2241.00", fecha: "2024-03-16 21:07:05", supermercado: "Carrefour" }, { id: "75", info: "Yerba mate Romance suave 500 g.", precio: "1905.00", fecha: "2024-03-16 21:07:05", supermercado: "Carrefour" }, { id: "76", info: "Yerba mate Yemaype con palo 500 g.", precio: "1920.00", fecha: "2024-03-16 21:07:05", supermercado: "Carrefour" }, { id: "77", info: "Yerba mate Payadito + mate + bombilla 1 uni", precio: "17295.00", fecha: "2024-03-16 21:07:05", supermercado: "Carrefour" }, { id: "78", info: "Yerba Mate Playadito Suave 1 Kg", precio: "2570.75", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "79", info: "Yerba Mate Suave Playadito 500 Gr", precio: "1590.00", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "80", info: "Yerba Mate De Campo La Merced 500 Gr", precio: "2063.10", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "81", info: "Yerba Mate 4flex Mañanita 1 Kg", precio: "3780.00", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "82", info: "Yerba Mate Campo Sur La Merced 500 Gr", precio: "2266.55", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "83", info: "Yerba Mate Hierbas Serranas Cbsé 1 Kg", precio: "2892.50", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "84", info: "Yerba Mate Campo Y Monte La Merced 500 Gr", precio: "2063.10", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "85", info: "Yerba Mate Barcbacua La Merced 500 Gr", precio: "2266.55", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "86", info: "Yerba Mate 4flex Taragui 1 Kg", precio: "2874.75", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "87", info: "Yerba Mate 4flex Unión 1 Kg", precio: "3016.50", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "88", info: "Yerba Mate Con Palo Suave Rosamonte 500 Gr", precio: "2200.00", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "89", info: "Yerba Mate 4flex Mañanita 1/2 Kg", precio: "2006.00", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "90", info: "Mate Cocido Taragui 150 Gr", precio: "1221.75", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "91", info: "Yerba Mate Naranja Cbse 500 Gr", precio: "1560.00", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "92", info: "Yerba Mate Cuisine And Co 1 Kg", precio: "2307.50", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "93", info: "Mate Cocido Taragui 300 Gr", precio: "2539.50", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "94", info: "Yerba 55 Edicion Con Palo Rosamonte 1 Kg", precio: "5150.00", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "95", info: "Yerba Mate Suave Sin Tacc Nobleza Gaucha 1 Kg", precio: "2325.00", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "96", info: "Yerba Mate Monte La Merced 500 Gr", precio: "2266.55", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "97", info: "Mate Cocido Unión 150 Gr", precio: "1322.25", fecha: "2024-03-16 21:24:21", supermercado: "Disco" }, { id: "104", info: "Yerba Mate c/Palo 4Flex Mañanita x 1 Kg.", precio: "2866.50", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "105", info: "Yerba Mate c/Palo 4Flex Mañanita x 1 Kg.", precio: "2866.50", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "106", info: "Yerba Mate c/Palo Suave Playadito x 1 Kg.", precio: "4352.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "107", info: "Yerba Mate c/Palo Suave Playadito x 500 g.", precio: "2173.50", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "108", info: "Yerba Mate en Saquitos Taragui x 50 un.", precio: "2150.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "109", info: "Yerba Mate c/Palo Suave Piporé x 1 Kg.", precio: "3464.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "110", info: "Yerba Mate c/Palo Campo Sur La Merced x 500 g.", precio: "3600.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "111", info: "Yerba Mate c/Palo de Campo La Merced x 500 g.", precio: "3600.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "112", info: "Yerba Mate Rosamonte Suave Especial x 1 Kg.", precio: "4300.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "113", info: "Yerba Mate c/ Palo Tradicional Piporé x 1 Kg.", precio: "4600.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "114", info: "Yerba Mate c/Palo Selección Especial La Tranquera x 500 g.", precio: "1800.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "115", info: "Yerba Mate Rosamonte Suave Especial x 500 g.", precio: "2250.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "116", info: "Yerba Mate con Palo Sublime Piporé x 500 g.", precio: "1572.50", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "117", info: "Yerba Mate con Palo Suave Selección Especial La Tranquera x 500 g.", precio: "1900.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "118", info: "Yerba Mate c/Palo 4Flex Suave Unión x 500 g.", precio: "2265.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "119", info: "Yerba Mate Natural c/Stevia Salus x 1 Kg.", precio: "3800.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "120", info: "Yerba Mate c/Palo Barbacuá La Merced x 500 g.", precio: "3600.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "121", info: "Yerba Mate con Palo Extra Suave La Tranquera x 1 Kg.", precio: "2210.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "122", info: "Yerba Mate c/Palo Campo & Monte La Merced x 500 g.", precio: "3600.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "123", info: "Yerba Mate en Saquitos La Anónima x 25 un.", precio: "1050.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "124", info: "Yerba Mate en Saquitos La Anónima x 50 un.", precio: "2050.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "125", info: "Yerba Mate con Palo Amanda Tradicional x 500 g.", precio: "1900.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "126", info: "Yerba Mate c/Palo 4Flex Taragui x 1 Kg.", precio: "2815.50", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "127", info: "Yerba Mate con Palo Suave Romance x 1 Kg.", precio: "2820.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "128", info: "Yerba Mate con palo  Hierbas Buenas Y Santas x 500 g.", precio: "2300.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "129", info: "Yerba Mate con Palo Rosamonte x 1 Kg.", precio: "3650.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "130", info: "Yerba Mate con Palo Romance x 1 Kg.", precio: "3209.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "131", info: "Yerba Mate Tradicional Amanda x 1 kg.", precio: "4150.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "132", info: "Yerba Mate en Saquitos Unión x 50 un.", precio: "2150.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "133", info: "Yerba Mate en Saquito Nidos Vainilla/ Miel Taragui x 20 un.", precio: "1805.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "134", info: "Yerba Mate con Palo Suave Chamigo x 500 g.", precio: "1500.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "135", info: "Yerba Mate c/Palo Suave Piporé x 500 g.", precio: "1615.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "136", info: "Yerba Mate c/Palo Seleccionada Especial Amanda x 1 Kg.", precio: "4150.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "137", info: "Yerba Mate c/Palo de Monte La Merced x 500 g.", precio: "3600.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "138", info: "Yerba Mate con Palo Hierbas Serranas Amanda x 500 g.", precio: "1750.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "139", info: "Yerba Mate Compuesta c/ Hierbas Serranas CBSé x 500 g.", precio: "2750.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "140", info: "Yerba Mate c/Palo 4Flex Taragui x 500 g.", precio: "2265.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "141", info: "Yerba Mate Natural c/Stevia Salus x 500 g.", precio: "2000.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "142", info: "Yerba Mate Hierbas Serranas Natura x 500 g.", precio: "1850.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "143", info: "Yerba Mate c/Palo Premium Andresito x 1 Kg.", precio: "5350.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "144", info: "Yerba Mate Suave con Palo 55 Aniversario Rosamonte x 1 Kg.", precio: "5050.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "145", info: "Yerba Compuesta Verdeflor con Hierbas Serranas x 1 Kg.", precio: "2691.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "146", info: "Yerba Mate con Palo Natura x 1 Kg.", precio: "4200.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "147", info: "Yerba Mate con Palo Amanda Campo x 1 Kg.", precio: "4150.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "148", info: "Yerba Mate Selección Especial Cruz de Malta x 1 Kg.", precio: "4100.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "149", info: "Yerba Mate con Palo Romance x 1000 g.", precio: "2727.20", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "150", info: "Yerba Mate con Palo Boldo y Menta Cruz de Malta x 500 g.", precio: "1850.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "151", info: "Yerba Mate con Palo Suave Nobleza Gaucha x 1 Kg.", precio: "2560.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "152", info: "Yerba Mate c/ Palo Tradicional Piporé x 500 g.", precio: "2150.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "153", info: "Yerba Mate Compuesta c/ Hierbas Serranas CBSé x 1 Kg.", precio: "5185.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "154", info: "Yerba Mate c/Palo Suave Liviana Unión x 1 Kg.", precio: "3300.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "155", info: "Yerba Mate con Palo Suave Selección Especial La Tranquera x 1 Kg.", precio: "3585.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "156", info: "Yerba Mate con Palo Chamingo x 1 Kg.", precio: "2800.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "157", info: "Yerba Mate c/ Palo Pomelo CBSé x 500 g.", precio: "2062.50", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "158", info: "Yerba Mate Compuesta Verdeflor Hierbas Serranas x 500 g.", precio: "1391.40", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "159", info: "Yerba Mate con Palo Natura x 500 g.", precio: "2200.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "160", info: "Yerba Mate Selección Especial Cruz de Malta x 500 g.", precio: "2150.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "161", info: "Yerba Mate Tipo Tradicional Don Basilio x 500 g.", precio: "1939.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "162", info: "Yerba Mate Compuesta Amarilla Cachamate x 500 g.", precio: "1889.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "163", info: "Yerba Mate Compuesta Rosa Cachamate x 500 g.", precio: "1889.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "164", info: "Yerba Mate en Saquitos La Tranquera x 50 Un.", precio: "1745.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "165", info: "Yerba Mate con Palo La Anónima x 1 Kg.", precio: "4700.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "166", info: "Yerba Mate Hierbas Serranas Etiqueta Negra CBSé x 500 g.", precio: "4399.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "167", info: "Yerba Mate c/ Palo Suave Original Unión x 1 Kg.", precio: "3153.75", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "168", info: "Yerba Mate Tradicional con Palo Cruz de Malta x 1 Kg.", precio: "4100.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "169", info: "Yerba Mate Compuesta Amarilla Cachamate x 1 Kg.", precio: "3579.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "170", info: "Yerba Mate Selección Nobleza Gaucha x 1 Kg.", precio: "3500.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "171", info: "Yerba Mate con Palo Liebig Original x 500 g.", precio: "2769.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "172", info: "Yerba Mate Tipo Especial Don Basilio x 500 g.", precio: "2365.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "173", info: "Yerba Compuesta Verdeflor con Boldo x 500 g.", precio: "1391.40", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "174", info: "Yerba Compuesta con Peperina Verdeflor x 500 g.", precio: "1383.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "175", info: "Yerba Mate Compuesta Hierbas Serranas Cachamate x 500 g.", precio: "1889.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "176", info: "Yerba Mate Selección Nobleza Gaucha x 500 g.", precio: "1850.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "177", info: "Yerba Mate en Saquitos Litoral x 25 Un.", precio: "1239.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "178", info: "Yerba Mate en Saquitos Unión x 25 Un.", precio: "1139.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "179", info: "Yerba Mate en Saquitos Playadito x 25 un.", precio: "1039.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "180", info: "Yerba Mate en Saquitos La Tranquera x 25 Un.", precio: "782.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "181", info: "Yerba Mate Comp. Hierbas Piporé x 500 g.", precio: "1955.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "182", info: "Yerba Mate con Palo Naranja Pipore x 500 g.", precio: "1955.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "183", info: "Yerba Mate con Palo Suave Nobleza Gaucha x 500 g.", precio: "1360.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "184", info: "Yerba Mate con Palo Tradicional Verdeflor x 1 Kg.", precio: "3315.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "185", info: "Yerba Mate Selección Especial s/P 4Flex Taragui x 1 Kg.", precio: "5005.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "186", info: "Yerba Mate Despalada s/ Tacc Rosamonte x 1 Kg.", precio: "4500.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "187", info: "Yerba Mate con Palo 55 Aniversario Rosamonte x 1 Kg.", precio: "4450.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "188", info: "Yerba Mate en Saquitos Taragui x 100 un.", precio: "3240.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "189", info: "Yerba Mate en Saquitos Unión x 100 un.", precio: "3240.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "190", info: "Yerba Mate en Saquitos La Tranquera x 100 Un.", precio: "3187.50", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "191", info: "Yerba Mate c/Palo Seleccionda. Especial La Tranquera x 1 Kg.", precio: "3409.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "192", info: "Yerba Mate en Saquitos Litoral x 50 Un.", precio: "2975.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "193", info: "Yerba Mate Despalada Playadito x 500 g.", precio: "2925.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "194", info: "Yerba Mate c/Palo Premiun Andresito x 500 g.", precio: "2850.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "195", info: "Yerba Mate con Palo Amanda Premium x 500 g.", precio: "2800.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "196", info: "Yerba Mate c/ Palo Naranja CBSé x 500 g.", precio: "2062.50", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "197", info: "Yerba Mate c/ Palo Limón CBSé x 500 g.", precio: "2062.50", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "198", info: "Yerba Mate c/ Palo Guaraná CBSé x 500 g.", precio: "2745.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "199", info: "Yerba Mate Frutos del Bosque CBSé x 500 g.", precio: "2745.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "200", info: "Yerba Mate c/ Palo Jengibre CBSé x 500 g.", precio: "2745.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "201", info: "Yerba Mate Compuesta con Hierbas Playadito x 500 g.", precio: "2735.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "202", info: "Yerba Mate con Palo Suave 55 Aniversario Rosamonte x 500 g.", precio: "2700.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "203", info: "Yerba Mate Selección Especial s/P 4Flex Taragui x 500 g.", precio: "2589.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "204", info: "Yerba Mate en Saquitos Taragui x 40 Un.", precio: "2549.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "205", info: "Yerba Mate en Saquitos Unión x 40 Un.", precio: "2549.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "206", info: "Yerba Mate con Palo La Anónima x 500 g.", precio: "2450.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "207", info: "Yerba Mate con Palo Liviana 4Flex Unión x 500 g.", precio: "2429.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "208", info: "Yerba Mate Despalada s/ Tacc  Rosamonte x 500 g.", precio: "2400.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "209", info: "Yerba Mate con Palo 55 Aniversario Rosamonte x 500 g.", precio: "2350.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "210", info: "Yerba Mate con Palo Verdeflor x 500 g.", precio: "1401.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "211", info: "Yerba Compuesta con Menta Verdeflor x 500 g.", precio: "1391.40", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "212", info: "Yerba Compuesta con Cedrón Verdeflor x 500 g.", precio: "1391.40", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "213", info: "Yerba Compuesta con Naranja Verdeflor x 500 g.", precio: "1391.40", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "214", info: "Yerba Compuesta Melisa Verdeflor x 500 g.", precio: "1391.40", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "215", info: "Yerba Mate Suave Amanda x 500 g.", precio: "2250.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "216", info: "Yerba Mate con Palo Especial Amanda x 500 g.", precio: "2250.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "217", info: "Yerba Mate en Saquitos Playadito x 50 un.", precio: "2089.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "218", info: "Yerba Mate con Palo Cruz de Malta x 500 g.", precio: "2050.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "219", info: "Yerba Mate Comp. Hierbas Pampeanas Cachamate x 500 g.", precio: "1899.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "220", info: "Yerba Mate Mezcla Hierbas Litoral Cachamate x 500 g.", precio: "1899.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "221", info: "Yerba Mate Mezcla Hierbas Cuyana Cachamate x 500 g.", precio: "1899.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "222", info: "Yerba Mate con Palo Romance x 500 g.", precio: "1749.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "223", info: "Yerba Mate en Saquitos Taragui x 25 un.", precio: "1175.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }, { id: "224", info: "Yerba Mate Listo Taragui x 1 un.", precio: "1015.00", fecha: "2024-03-16 22:30:59", supermercado: "La Anonima" }] }]; //! moment.js
    //! version : 2.30.1
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    var Cd;

    function S() { return Cd.apply(null, arguments) }

    function B1(e) { Cd = e }

    function nr(e) { return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]" }

    function ma(e) { return e != null && Object.prototype.toString.call(e) === "[object Object]" }

    function U(e, r) { return Object.prototype.hasOwnProperty.call(e, r) }

    function Ac(e) {
        if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0;
        var r;
        for (r in e)
            if (U(e, r)) return !1;
        return !0
    }

    function we(e) { return e === void 0 }

    function Er(e) { return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]" }

    function ti(e) { return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]" }

    function xd(e, r) {
        var a = [],
            n, i = e.length;
        for (n = 0; n < i; ++n) a.push(r(e[n], n));
        return a
    }

    function Ur(e, r) { for (var a in r) U(r, a) && (e[a] = r[a]); return U(r, "toString") && (e.toString = r.toString), U(r, "valueOf") && (e.valueOf = r.valueOf), e }

    function pr(e, r, a, n) { return Hd(e, r, a, n, !0).utc() }

    function W1() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidEra: null, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], era: null, meridiem: null, rfc2822: !1, weekdayMismatch: !1 } }

    function O(e) { return e._pf == null && (e._pf = W1()), e._pf }
    var Ss;
    Array.prototype.some ? Ss = Array.prototype.some : Ss = function(e) {
        var r = Object(this),
            a = r.length >>> 0,
            n;
        for (n = 0; n < a; n++)
            if (n in r && e.call(this, r[n], n, r)) return !0;
        return !1
    };

    function kc(e) {
        var r = null,
            a = !1,
            n = e._d && !isNaN(e._d.getTime());
        if (n && (r = O(e), a = Ss.call(r.parsedDateParts, function(i) { return i != null }), n = r.overflow < 0 && !r.empty && !r.invalidEra && !r.invalidMonth && !r.invalidWeekday && !r.weekdayMismatch && !r.nullInput && !r.invalidFormat && !r.userInvalidated && (!r.meridiem || r.meridiem && a), e._strict && (n = n && r.charsLeftOver === 0 && r.unusedTokens.length === 0 && r.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e)) e._isValid = n;
        else return n;
        return e._isValid
    }

    function Io(e) { var r = pr(NaN); return e != null ? Ur(O(r), e) : O(r).userInvalidated = !0, r }
    var r0 = S.momentProperties = [],
        wt = !1;

    function wc(e, r) {
        var a, n, i, o = r0.length;
        if (we(r._isAMomentObject) || (e._isAMomentObject = r._isAMomentObject), we(r._i) || (e._i = r._i), we(r._f) || (e._f = r._f), we(r._l) || (e._l = r._l), we(r._strict) || (e._strict = r._strict), we(r._tzm) || (e._tzm = r._tzm), we(r._isUTC) || (e._isUTC = r._isUTC), we(r._offset) || (e._offset = r._offset), we(r._pf) || (e._pf = O(r)), we(r._locale) || (e._locale = r._locale), o > 0)
            for (a = 0; a < o; a++) n = r0[a], i = r[n], we(i) || (e[n] = i);
        return e
    }

    function si(e) { wc(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), wt === !1 && (wt = !0, S.updateOffset(this), wt = !1) }

    function ir(e) { return e instanceof si || e != null && e._isAMomentObject != null }

    function Sd(e) { S.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e) }

    function Ge(e, r) {
        var a = !0;
        return Ur(function() {
            if (S.deprecationHandler != null && S.deprecationHandler(null, e), a) {
                var n = [],
                    i, o, t, s = arguments.length;
                for (o = 0; o < s; o++) {
                    if (i = "", typeof arguments[o] == "object") {
                        i += `
[` + o + "] ";
                        for (t in arguments[0]) U(arguments[0], t) && (i += t + ": " + arguments[0][t] + ", ");
                        i = i.slice(0, -2)
                    } else i = arguments[o];
                    n.push(i)
                }
                Sd(e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack), a = !1
            }
            return r.apply(this, arguments)
        }, r)
    }
    var a0 = {};

    function Ad(e, r) { S.deprecationHandler != null && S.deprecationHandler(e, r), a0[e] || (Sd(r), a0[e] = !0) }
    S.suppressDeprecationWarnings = !1;
    S.deprecationHandler = null;

    function mr(e) { return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]" }

    function H1(e) {
        var r, a;
        for (a in e) U(e, a) && (r = e[a], mr(r) ? this[a] = r : this["_" + a] = r);
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function As(e, r) {
        var a = Ur({}, e),
            n;
        for (n in r) U(r, n) && (ma(e[n]) && ma(r[n]) ? (a[n] = {}, Ur(a[n], e[n]), Ur(a[n], r[n])) : r[n] != null ? a[n] = r[n] : delete a[n]);
        for (n in e) U(e, n) && !U(r, n) && ma(e[n]) && (a[n] = Ur({}, a[n]));
        return a
    }

    function _c(e) { e != null && this.set(e) }
    var ks;
    Object.keys ? ks = Object.keys : ks = function(e) { var r, a = []; for (r in e) U(e, r) && a.push(r); return a };
    var G1 = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" };

    function b1(e, r, a) { var n = this._calendar[e] || this._calendar.sameElse; return mr(n) ? n.call(r, a) : n }

    function fr(e, r, a) {
        var n = "" + Math.abs(e),
            i = r - n.length,
            o = e >= 0;
        return (o ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + n
    }
    var Pc = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Di = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        _t = {},
        Ga = {};

    function Y(e, r, a, n) {
        var i = n;
        typeof n == "string" && (i = function() { return this[n]() }), e && (Ga[e] = i), r && (Ga[r[0]] = function() { return fr(i.apply(this, arguments), r[1], r[2]) }), a && (Ga[a] = function() { return this.localeData().ordinal(i.apply(this, arguments), e) })
    }

    function $1(e) { return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "") }

    function K1(e) {
        var r = e.match(Pc),
            a, n;
        for (a = 0, n = r.length; a < n; a++) Ga[r[a]] ? r[a] = Ga[r[a]] : r[a] = $1(r[a]);
        return function(i) {
            var o = "",
                t;
            for (t = 0; t < n; t++) o += mr(r[t]) ? r[t].call(i, e) : r[t];
            return o
        }
    }

    function Wi(e, r) { return e.isValid() ? (r = kd(r, e.localeData()), _t[r] = _t[r] || K1(r), _t[r](e)) : e.localeData().invalidDate() }

    function kd(e, r) {
        var a = 5;

        function n(i) { return r.longDateFormat(i) || i }
        for (Di.lastIndex = 0; a >= 0 && Di.test(e);) e = e.replace(Di, n), Di.lastIndex = 0, a -= 1;
        return e
    }
    var Q1 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };

    function Z1(e) {
        var r = this._longDateFormat[e],
            a = this._longDateFormat[e.toUpperCase()];
        return r || !a ? r : (this._longDateFormat[e] = a.match(Pc).map(function(n) { return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n }).join(""), this._longDateFormat[e])
    }
    var q1 = "Invalid date";

    function X1() { return this._invalidDate }
    var J1 = "%d",
        ep = /\d{1,2}/;

    function rp(e) { return this._ordinal.replace("%d", e) }
    var ap = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", w: "a week", ww: "%d weeks", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };

    function np(e, r, a, n) { var i = this._relativeTime[a]; return mr(i) ? i(e, r, a, n) : i.replace(/%d/i, e) }

    function ip(e, r) { var a = this._relativeTime[e > 0 ? "future" : "past"]; return mr(a) ? a(r) : a.replace(/%s/i, r) }
    var n0 = { D: "date", dates: "date", date: "date", d: "day", days: "day", day: "day", e: "weekday", weekdays: "weekday", weekday: "weekday", E: "isoWeekday", isoweekdays: "isoWeekday", isoweekday: "isoWeekday", DDD: "dayOfYear", dayofyears: "dayOfYear", dayofyear: "dayOfYear", h: "hour", hours: "hour", hour: "hour", ms: "millisecond", milliseconds: "millisecond", millisecond: "millisecond", m: "minute", minutes: "minute", minute: "minute", M: "month", months: "month", month: "month", Q: "quarter", quarters: "quarter", quarter: "quarter", s: "second", seconds: "second", second: "second", gg: "weekYear", weekyears: "weekYear", weekyear: "weekYear", GG: "isoWeekYear", isoweekyears: "isoWeekYear", isoweekyear: "isoWeekYear", w: "week", weeks: "week", week: "week", W: "isoWeek", isoweeks: "isoWeek", isoweek: "isoWeek", y: "year", years: "year", year: "year" };

    function be(e) { return typeof e == "string" ? n0[e] || n0[e.toLowerCase()] : void 0 }

    function Mc(e) {
        var r = {},
            a, n;
        for (n in e) U(e, n) && (a = be(n), a && (r[a] = e[n]));
        return r
    }
    var op = { date: 9, day: 11, weekday: 11, isoWeekday: 11, dayOfYear: 4, hour: 13, millisecond: 16, minute: 14, month: 8, quarter: 7, second: 15, weekYear: 1, isoWeekYear: 1, week: 5, isoWeek: 5, year: 1 };

    function tp(e) {
        var r = [],
            a;
        for (a in e) U(e, a) && r.push({ unit: a, priority: op[a] });
        return r.sort(function(n, i) { return n.priority - i.priority }), r
    }
    var wd = /\d/,
        Fe = /\d\d/,
        _d = /\d{3}/,
        Dc = /\d{4}/,
        jo = /[+-]?\d{6}/,
        Q = /\d\d?/,
        Pd = /\d\d\d\d?/,
        Md = /\d\d\d\d\d\d?/,
        Uo = /\d{1,3}/,
        Ec = /\d{1,4}/,
        Bo = /[+-]?\d{1,6}/,
        on = /\d+/,
        Wo = /[+-]?\d+/,
        sp = /Z|[+-]\d\d:?\d\d/gi,
        Ho = /Z|[+-]\d\d(?::?\d\d)?/gi,
        cp = /[+-]?\d+(\.\d{1,3})?/,
        ci = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        tn = /^[1-9]\d?/,
        Yc = /^([1-9]\d|\d)/,
        yo;
    yo = {};

    function w(e, r, a) { yo[e] = mr(r) ? r : function(n, i) { return n && a ? a : r } }

    function lp(e, r) { return U(yo, e) ? yo[e](r._strict, r._locale) : new RegExp(up(e)) }

    function up(e) { return kr(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(r, a, n, i, o) { return a || n || i || o })) }

    function kr(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }

    function je(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

    function R(e) {
        var r = +e,
            a = 0;
        return r !== 0 && isFinite(r) && (a = je(r)), a
    }
    var ws = {};

    function H(e, r) {
        var a, n = r,
            i;
        for (typeof e == "string" && (e = [e]), Er(r) && (n = function(o, t) { t[r] = R(o) }), i = e.length, a = 0; a < i; a++) ws[e[a]] = n
    }

    function li(e, r) { H(e, function(a, n, i, o) { i._w = i._w || {}, r(a, i._w, i, o) }) }

    function dp(e, r, a) { r != null && U(ws, e) && ws[e](r, a._a, a, e) }

    function Go(e) { return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 }
    var Le = 0,
        xr = 1,
        lr = 2,
        le = 3,
        Je = 4,
        Sr = 5,
        da = 6,
        fp = 7,
        pp = 8;
    Y("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? fr(e, 4) : "+" + e });
    Y(0, ["YY", 2], 0, function() { return this.year() % 100 });
    Y(0, ["YYYY", 4], 0, "year");
    Y(0, ["YYYYY", 5], 0, "year");
    Y(0, ["YYYYYY", 6, !0], 0, "year");
    w("Y", Wo);
    w("YY", Q, Fe);
    w("YYYY", Ec, Dc);
    w("YYYYY", Bo, jo);
    w("YYYYYY", Bo, jo);
    H(["YYYYY", "YYYYYY"], Le);
    H("YYYY", function(e, r) { r[Le] = e.length === 2 ? S.parseTwoDigitYear(e) : R(e) });
    H("YY", function(e, r) { r[Le] = S.parseTwoDigitYear(e) });
    H("Y", function(e, r) { r[Le] = parseInt(e, 10) });

    function Nn(e) { return Go(e) ? 366 : 365 }
    S.parseTwoDigitYear = function(e) { return R(e) + (R(e) > 68 ? 1900 : 2e3) };
    var Dd = sn("FullYear", !0);

    function mp() { return Go(this.year()) }

    function sn(e, r) { return function(a) { return a != null ? (Ed(this, e, a), S.updateOffset(this, r), this) : qn(this, e) } }

    function qn(e, r) {
        if (!e.isValid()) return NaN;
        var a = e._d,
            n = e._isUTC;
        switch (r) {
            case "Milliseconds":
                return n ? a.getUTCMilliseconds() : a.getMilliseconds();
            case "Seconds":
                return n ? a.getUTCSeconds() : a.getSeconds();
            case "Minutes":
                return n ? a.getUTCMinutes() : a.getMinutes();
            case "Hours":
                return n ? a.getUTCHours() : a.getHours();
            case "Date":
                return n ? a.getUTCDate() : a.getDate();
            case "Day":
                return n ? a.getUTCDay() : a.getDay();
            case "Month":
                return n ? a.getUTCMonth() : a.getMonth();
            case "FullYear":
                return n ? a.getUTCFullYear() : a.getFullYear();
            default:
                return NaN
        }
    }

    function Ed(e, r, a) {
        var n, i, o, t, s;
        if (!(!e.isValid() || isNaN(a))) {
            switch (n = e._d, i = e._isUTC, r) {
                case "Milliseconds":
                    return void(i ? n.setUTCMilliseconds(a) : n.setMilliseconds(a));
                case "Seconds":
                    return void(i ? n.setUTCSeconds(a) : n.setSeconds(a));
                case "Minutes":
                    return void(i ? n.setUTCMinutes(a) : n.setMinutes(a));
                case "Hours":
                    return void(i ? n.setUTCHours(a) : n.setHours(a));
                case "Date":
                    return void(i ? n.setUTCDate(a) : n.setDate(a));
                case "FullYear":
                    break;
                default:
                    return
            }
            o = a, t = e.month(), s = e.date(), s = s === 29 && t === 1 && !Go(o) ? 28 : s, i ? n.setUTCFullYear(o, t, s) : n.setFullYear(o, t, s)
        }
    }

    function hp(e) { return e = be(e), mr(this[e]) ? this[e]() : this }

    function gp(e, r) {
        if (typeof e == "object") {
            e = Mc(e);
            var a = tp(e),
                n, i = a.length;
            for (n = 0; n < i; n++) this[a[n].unit](e[a[n].unit])
        } else if (e = be(e), mr(this[e])) return this[e](r);
        return this
    }

    function vp(e, r) { return (e % r + r) % r }
    var ie;
    Array.prototype.indexOf ? ie = Array.prototype.indexOf : ie = function(e) {
        var r;
        for (r = 0; r < this.length; ++r)
            if (this[r] === e) return r;
        return -1
    };

    function Tc(e, r) { if (isNaN(e) || isNaN(r)) return NaN; var a = vp(r, 12); return e += (r - a) / 12, a === 1 ? Go(e) ? 29 : 28 : 31 - a % 7 % 2 }
    Y("M", ["MM", 2], "Mo", function() { return this.month() + 1 });
    Y("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) });
    Y("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) });
    w("M", Q, tn);
    w("MM", Q, Fe);
    w("MMM", function(e, r) { return r.monthsShortRegex(e) });
    w("MMMM", function(e, r) { return r.monthsRegex(e) });
    H(["M", "MM"], function(e, r) { r[xr] = R(e) - 1 });
    H(["MMM", "MMMM"], function(e, r, a, n) {
        var i = a._locale.monthsParse(e, n, a._strict);
        i != null ? r[xr] = i : O(a).invalidMonth = e
    });
    var yp = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Yd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        Td = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Lp = ci,
        Cp = ci;

    function xp(e, r) { return e ? nr(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Td).test(r) ? "format" : "standalone"][e.month()] : nr(this._months) ? this._months : this._months.standalone }

    function Sp(e, r) { return e ? nr(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Td.test(r) ? "format" : "standalone"][e.month()] : nr(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }

    function Ap(e, r, a) {
        var n, i, o, t = e.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) o = pr([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
        return a ? r === "MMM" ? (i = ie.call(this._shortMonthsParse, t), i !== -1 ? i : null) : (i = ie.call(this._longMonthsParse, t), i !== -1 ? i : null) : r === "MMM" ? (i = ie.call(this._shortMonthsParse, t), i !== -1 ? i : (i = ie.call(this._longMonthsParse, t), i !== -1 ? i : null)) : (i = ie.call(this._longMonthsParse, t), i !== -1 ? i : (i = ie.call(this._shortMonthsParse, t), i !== -1 ? i : null))
    }

    function kp(e, r, a) { var n, i, o; if (this._monthsParseExact) return Ap.call(this, e, r, a); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) { if (i = pr([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), !a && !this._monthsParse[n] && (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), a && r === "MMMM" && this._longMonthsParse[n].test(e)) return n; if (a && r === "MMM" && this._shortMonthsParse[n].test(e)) return n; if (!a && this._monthsParse[n].test(e)) return n } }

    function Nd(e, r) {
        if (!e.isValid()) return e;
        if (typeof r == "string") {
            if (/^\d+$/.test(r)) r = R(r);
            else if (r = e.localeData().monthsParse(r), !Er(r)) return e
        }
        var a = r,
            n = e.date();
        return n = n < 29 ? n : Math.min(n, Tc(e.year(), a)), e._isUTC ? e._d.setUTCMonth(a, n) : e._d.setMonth(a, n), e
    }

    function Od(e) { return e != null ? (Nd(this, e), S.updateOffset(this, !0), this) : qn(this, "Month") }

    function wp() { return Tc(this.year(), this.month()) }

    function _p(e) { return this._monthsParseExact ? (U(this, "_monthsRegex") || zd.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (U(this, "_monthsShortRegex") || (this._monthsShortRegex = Lp), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }

    function Pp(e) { return this._monthsParseExact ? (U(this, "_monthsRegex") || zd.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (U(this, "_monthsRegex") || (this._monthsRegex = Cp), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }

    function zd() {
        function e(c, u) { return u.length - c.length }
        var r = [],
            a = [],
            n = [],
            i, o, t, s;
        for (i = 0; i < 12; i++) o = pr([2e3, i]), t = kr(this.monthsShort(o, "")), s = kr(this.months(o, "")), r.push(t), a.push(s), n.push(s), n.push(t);
        r.sort(e), a.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function Mp(e, r, a, n, i, o, t) { var s; return e < 100 && e >= 0 ? (s = new Date(e + 400, r, a, n, i, o, t), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, r, a, n, i, o, t), s }

    function Xn(e) { var r, a; return e < 100 && e >= 0 ? (a = Array.prototype.slice.call(arguments), a[0] = e + 400, r = new Date(Date.UTC.apply(null, a)), isFinite(r.getUTCFullYear()) && r.setUTCFullYear(e)) : r = new Date(Date.UTC.apply(null, arguments)), r }

    function Lo(e, r, a) {
        var n = 7 + r - a,
            i = (7 + Xn(e, 0, n).getUTCDay() - r) % 7;
        return -i + n - 1
    }

    function Rd(e, r, a, n, i) {
        var o = (7 + a - n) % 7,
            t = Lo(e, n, i),
            s = 1 + 7 * (r - 1) + o + t,
            c, u;
        return s <= 0 ? (c = e - 1, u = Nn(c) + s) : s > Nn(e) ? (c = e + 1, u = s - Nn(e)) : (c = e, u = s), { year: c, dayOfYear: u }
    }

    function Jn(e, r, a) {
        var n = Lo(e.year(), r, a),
            i = Math.floor((e.dayOfYear() - n - 1) / 7) + 1,
            o, t;
        return i < 1 ? (t = e.year() - 1, o = i + wr(t, r, a)) : i > wr(e.year(), r, a) ? (o = i - wr(e.year(), r, a), t = e.year() + 1) : (t = e.year(), o = i), { week: o, year: t }
    }

    function wr(e, r, a) {
        var n = Lo(e, r, a),
            i = Lo(e + 1, r, a);
        return (Nn(e) - n + i) / 7
    }
    Y("w", ["ww", 2], "wo", "week");
    Y("W", ["WW", 2], "Wo", "isoWeek");
    w("w", Q, tn);
    w("ww", Q, Fe);
    w("W", Q, tn);
    w("WW", Q, Fe);
    li(["w", "ww", "W", "WW"], function(e, r, a, n) { r[n.substr(0, 1)] = R(e) });

    function Dp(e) { return Jn(e, this._week.dow, this._week.doy).week }
    var Ep = { dow: 0, doy: 6 };

    function Yp() { return this._week.dow }

    function Tp() { return this._week.doy }

    function Np(e) { var r = this.localeData().week(this); return e == null ? r : this.add((e - r) * 7, "d") }

    function Op(e) { var r = Jn(this, 1, 4).week; return e == null ? r : this.add((e - r) * 7, "d") }
    Y("d", 0, "do", "day");
    Y("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) });
    Y("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) });
    Y("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) });
    Y("e", 0, 0, "weekday");
    Y("E", 0, 0, "isoWeekday");
    w("d", Q);
    w("e", Q);
    w("E", Q);
    w("dd", function(e, r) { return r.weekdaysMinRegex(e) });
    w("ddd", function(e, r) { return r.weekdaysShortRegex(e) });
    w("dddd", function(e, r) { return r.weekdaysRegex(e) });
    li(["dd", "ddd", "dddd"], function(e, r, a, n) {
        var i = a._locale.weekdaysParse(e, n, a._strict);
        i != null ? r.d = i : O(a).invalidWeekday = e
    });
    li(["d", "e", "E"], function(e, r, a, n) { r[n] = R(e) });

    function zp(e, r) { return typeof e != "string" ? e : isNaN(e) ? (e = r.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10) }

    function Rp(e, r) { return typeof e == "string" ? r.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e }

    function Nc(e, r) { return e.slice(r, 7).concat(e.slice(0, r)) }
    var Fp = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Fd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Vp = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        Ip = ci,
        jp = ci,
        Up = ci;

    function Bp(e, r) { var a = nr(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(r) ? "format" : "standalone"]; return e === !0 ? Nc(a, this._week.dow) : e ? a[e.day()] : a }

    function Wp(e) { return e === !0 ? Nc(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }

    function Hp(e) { return e === !0 ? Nc(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }

    function Gp(e, r, a) {
        var n, i, o, t = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) o = pr([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
        return a ? r === "dddd" ? (i = ie.call(this._weekdaysParse, t), i !== -1 ? i : null) : r === "ddd" ? (i = ie.call(this._shortWeekdaysParse, t), i !== -1 ? i : null) : (i = ie.call(this._minWeekdaysParse, t), i !== -1 ? i : null) : r === "dddd" ? (i = ie.call(this._weekdaysParse, t), i !== -1 || (i = ie.call(this._shortWeekdaysParse, t), i !== -1) ? i : (i = ie.call(this._minWeekdaysParse, t), i !== -1 ? i : null)) : r === "ddd" ? (i = ie.call(this._shortWeekdaysParse, t), i !== -1 || (i = ie.call(this._weekdaysParse, t), i !== -1) ? i : (i = ie.call(this._minWeekdaysParse, t), i !== -1 ? i : null)) : (i = ie.call(this._minWeekdaysParse, t), i !== -1 || (i = ie.call(this._weekdaysParse, t), i !== -1) ? i : (i = ie.call(this._shortWeekdaysParse, t), i !== -1 ? i : null))
    }

    function bp(e, r, a) { var n, i, o; if (this._weekdaysParseExact) return Gp.call(this, e, r, a); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) { if (i = pr([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), a && r === "dddd" && this._fullWeekdaysParse[n].test(e)) return n; if (a && r === "ddd" && this._shortWeekdaysParse[n].test(e)) return n; if (a && r === "dd" && this._minWeekdaysParse[n].test(e)) return n; if (!a && this._weekdaysParse[n].test(e)) return n } }

    function $p(e) { if (!this.isValid()) return e != null ? this : NaN; var r = qn(this, "Day"); return e != null ? (e = zp(e, this.localeData()), this.add(e - r, "d")) : r }

    function Kp(e) { if (!this.isValid()) return e != null ? this : NaN; var r = (this.day() + 7 - this.localeData()._week.dow) % 7; return e == null ? r : this.add(e - r, "d") }

    function Qp(e) { if (!this.isValid()) return e != null ? this : NaN; if (e != null) { var r = Rp(e, this.localeData()); return this.day(this.day() % 7 ? r : r - 7) } else return this.day() || 7 }

    function Zp(e) { return this._weekdaysParseExact ? (U(this, "_weekdaysRegex") || Oc.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (U(this, "_weekdaysRegex") || (this._weekdaysRegex = Ip), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }

    function qp(e) { return this._weekdaysParseExact ? (U(this, "_weekdaysRegex") || Oc.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (U(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = jp), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }

    function Xp(e) { return this._weekdaysParseExact ? (U(this, "_weekdaysRegex") || Oc.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (U(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Up), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }

    function Oc() {
        function e(m, h) { return h.length - m.length }
        var r = [],
            a = [],
            n = [],
            i = [],
            o, t, s, c, u;
        for (o = 0; o < 7; o++) t = pr([2e3, 1]).day(o), s = kr(this.weekdaysMin(t, "")), c = kr(this.weekdaysShort(t, "")), u = kr(this.weekdays(t, "")), r.push(s), a.push(c), n.push(u), i.push(s), i.push(c), i.push(u);
        r.sort(e), a.sort(e), n.sort(e), i.sort(e), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function zc() { return this.hours() % 12 || 12 }

    function Jp() { return this.hours() || 24 }
    Y("H", ["HH", 2], 0, "hour");
    Y("h", ["hh", 2], 0, zc);
    Y("k", ["kk", 2], 0, Jp);
    Y("hmm", 0, 0, function() { return "" + zc.apply(this) + fr(this.minutes(), 2) });
    Y("hmmss", 0, 0, function() { return "" + zc.apply(this) + fr(this.minutes(), 2) + fr(this.seconds(), 2) });
    Y("Hmm", 0, 0, function() { return "" + this.hours() + fr(this.minutes(), 2) });
    Y("Hmmss", 0, 0, function() { return "" + this.hours() + fr(this.minutes(), 2) + fr(this.seconds(), 2) });

    function Vd(e, r) { Y(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), r) }) }
    Vd("a", !0);
    Vd("A", !1);

    function Id(e, r) { return r._meridiemParse }
    w("a", Id);
    w("A", Id);
    w("H", Q, Yc);
    w("h", Q, tn);
    w("k", Q, tn);
    w("HH", Q, Fe);
    w("hh", Q, Fe);
    w("kk", Q, Fe);
    w("hmm", Pd);
    w("hmmss", Md);
    w("Hmm", Pd);
    w("Hmmss", Md);
    H(["H", "HH"], le);
    H(["k", "kk"], function(e, r, a) {
        var n = R(e);
        r[le] = n === 24 ? 0 : n
    });
    H(["a", "A"], function(e, r, a) { a._isPm = a._locale.isPM(e), a._meridiem = e });
    H(["h", "hh"], function(e, r, a) { r[le] = R(e), O(a).bigHour = !0 });
    H("hmm", function(e, r, a) {
        var n = e.length - 2;
        r[le] = R(e.substr(0, n)), r[Je] = R(e.substr(n)), O(a).bigHour = !0
    });
    H("hmmss", function(e, r, a) {
        var n = e.length - 4,
            i = e.length - 2;
        r[le] = R(e.substr(0, n)), r[Je] = R(e.substr(n, 2)), r[Sr] = R(e.substr(i)), O(a).bigHour = !0
    });
    H("Hmm", function(e, r, a) {
        var n = e.length - 2;
        r[le] = R(e.substr(0, n)), r[Je] = R(e.substr(n))
    });
    H("Hmmss", function(e, r, a) {
        var n = e.length - 4,
            i = e.length - 2;
        r[le] = R(e.substr(0, n)), r[Je] = R(e.substr(n, 2)), r[Sr] = R(e.substr(i))
    });

    function em(e) { return (e + "").toLowerCase().charAt(0) === "p" }
    var rm = /[ap]\.?m?\.?/i,
        am = sn("Hours", !0);

    function nm(e, r, a) { return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM" }
    var jd = { calendar: G1, longDateFormat: Q1, invalidDate: q1, ordinal: J1, dayOfMonthOrdinalParse: ep, relativeTime: ap, months: yp, monthsShort: Yd, week: Ep, weekdays: Fp, weekdaysMin: Vp, weekdaysShort: Fd, meridiemParse: rm },
        Z = {},
        yn = {},
        ei;

    function im(e, r) {
        var a, n = Math.min(e.length, r.length);
        for (a = 0; a < n; a += 1)
            if (e[a] !== r[a]) return a;
        return n
    }

    function i0(e) { return e && e.toLowerCase().replace("_", "-") }

    function om(e) {
        for (var r = 0, a, n, i, o; r < e.length;) {
            for (o = i0(e[r]).split("-"), a = o.length, n = i0(e[r + 1]), n = n ? n.split("-") : null; a > 0;) {
                if (i = bo(o.slice(0, a).join("-")), i) return i;
                if (n && n.length >= a && im(o, n) >= a - 1) break;
                a--
            }
            r++
        }
        return ei
    }

    function tm(e) { return !!(e && e.match("^[^/\\\\]*$")) }

    function bo(e) {
        var r = null,
            a;
        if (Z[e] === void 0 && typeof bi < "u" && bi && bi.exports && tm(e)) try { r = ei._abbr, a = require, a("./locale/" + e), qr(r) } catch { Z[e] = null }
        return Z[e]
    }

    function qr(e, r) { var a; return e && (we(r) ? a = Tr(e) : a = Rc(e, r), a ? ei = a : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), ei._abbr }

    function Rc(e, r) {
        if (r !== null) {
            var a, n = jd;
            if (r.abbr = e, Z[e] != null) Ad("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Z[e]._config;
            else if (r.parentLocale != null)
                if (Z[r.parentLocale] != null) n = Z[r.parentLocale]._config;
                else if (a = bo(r.parentLocale), a != null) n = a._config;
            else return yn[r.parentLocale] || (yn[r.parentLocale] = []), yn[r.parentLocale].push({ name: e, config: r }), null;
            return Z[e] = new _c(As(n, r)), yn[e] && yn[e].forEach(function(i) { Rc(i.name, i.config) }), qr(e), Z[e]
        } else return delete Z[e], null
    }

    function sm(e, r) {
        if (r != null) {
            var a, n, i = jd;
            Z[e] != null && Z[e].parentLocale != null ? Z[e].set(As(Z[e]._config, r)) : (n = bo(e), n != null && (i = n._config), r = As(i, r), n == null && (r.abbr = e), a = new _c(r), a.parentLocale = Z[e], Z[e] = a), qr(e)
        } else Z[e] != null && (Z[e].parentLocale != null ? (Z[e] = Z[e].parentLocale, e === qr() && qr(e)) : Z[e] != null && delete Z[e]);
        return Z[e]
    }

    function Tr(e) {
        var r;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ei;
        if (!nr(e)) {
            if (r = bo(e), r) return r;
            e = [e]
        }
        return om(e)
    }

    function cm() { return ks(Z) }

    function Fc(e) { var r, a = e._a; return a && O(e).overflow === -2 && (r = a[xr] < 0 || a[xr] > 11 ? xr : a[lr] < 1 || a[lr] > Tc(a[Le], a[xr]) ? lr : a[le] < 0 || a[le] > 24 || a[le] === 24 && (a[Je] !== 0 || a[Sr] !== 0 || a[da] !== 0) ? le : a[Je] < 0 || a[Je] > 59 ? Je : a[Sr] < 0 || a[Sr] > 59 ? Sr : a[da] < 0 || a[da] > 999 ? da : -1, O(e)._overflowDayOfYear && (r < Le || r > lr) && (r = lr), O(e)._overflowWeeks && r === -1 && (r = fp), O(e)._overflowWeekday && r === -1 && (r = pp), O(e).overflow = r), e }
    var lm = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        um = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        dm = /Z|[+-]\d\d(?::?\d\d)?/,
        Ei = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1]
        ],
        Pt = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        fm = /^\/?Date\((-?\d+)/i,
        pm = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        mm = { UT: 0, GMT: 0, EDT: -4 * 60, EST: -5 * 60, CDT: -5 * 60, CST: -6 * 60, MDT: -6 * 60, MST: -7 * 60, PDT: -7 * 60, PST: -8 * 60 };

    function Ud(e) {
        var r, a, n = e._i,
            i = lm.exec(n) || um.exec(n),
            o, t, s, c, u = Ei.length,
            m = Pt.length;
        if (i) {
            for (O(e).iso = !0, r = 0, a = u; r < a; r++)
                if (Ei[r][1].exec(i[1])) { t = Ei[r][0], o = Ei[r][2] !== !1; break }
            if (t == null) { e._isValid = !1; return }
            if (i[3]) {
                for (r = 0, a = m; r < a; r++)
                    if (Pt[r][1].exec(i[3])) { s = (i[2] || " ") + Pt[r][0]; break }
                if (s == null) { e._isValid = !1; return }
            }
            if (!o && s != null) { e._isValid = !1; return }
            if (i[4])
                if (dm.exec(i[4])) c = "Z";
                else { e._isValid = !1; return }
            e._f = t + (s || "") + (c || ""), Ic(e)
        } else e._isValid = !1
    }

    function hm(e, r, a, n, i, o) { var t = [gm(e), Yd.indexOf(r), parseInt(a, 10), parseInt(n, 10), parseInt(i, 10)]; return o && t.push(parseInt(o, 10)), t }

    function gm(e) { var r = parseInt(e, 10); return r <= 49 ? 2e3 + r : r <= 999 ? 1900 + r : r }

    function vm(e) { return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }

    function ym(e, r, a) {
        if (e) {
            var n = Fd.indexOf(e),
                i = new Date(r[0], r[1], r[2]).getDay();
            if (n !== i) return O(a).weekdayMismatch = !0, a._isValid = !1, !1
        }
        return !0
    }

    function Lm(e, r, a) {
        if (e) return mm[e];
        if (r) return 0;
        var n = parseInt(a, 10),
            i = n % 100,
            o = (n - i) / 100;
        return o * 60 + i
    }

    function Bd(e) {
        var r = pm.exec(vm(e._i)),
            a;
        if (r) {
            if (a = hm(r[4], r[3], r[2], r[5], r[6], r[7]), !ym(r[1], a, e)) return;
            e._a = a, e._tzm = Lm(r[8], r[9], r[10]), e._d = Xn.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), O(e).rfc2822 = !0
        } else e._isValid = !1
    }

    function Cm(e) {
        var r = fm.exec(e._i);
        if (r !== null) { e._d = new Date(+r[1]); return }
        if (Ud(e), e._isValid === !1) delete e._isValid;
        else return;
        if (Bd(e), e._isValid === !1) delete e._isValid;
        else return;
        e._strict ? e._isValid = !1 : S.createFromInputFallback(e)
    }
    S.createFromInputFallback = Ge("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) });

    function wa(e, r, a) { return e ? e : r ? e : a }

    function xm(e) { var r = new Date(S.now()); return e._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()] }

    function Vc(e) {
        var r, a, n = [],
            i, o, t;
        if (!e._d) {
            for (i = xm(e), e._w && e._a[lr] == null && e._a[xr] == null && Sm(e), e._dayOfYear != null && (t = wa(e._a[Le], i[Le]), (e._dayOfYear > Nn(t) || e._dayOfYear === 0) && (O(e)._overflowDayOfYear = !0), a = Xn(t, 0, e._dayOfYear), e._a[xr] = a.getUTCMonth(), e._a[lr] = a.getUTCDate()), r = 0; r < 3 && e._a[r] == null; ++r) e._a[r] = n[r] = i[r];
            for (; r < 7; r++) e._a[r] = n[r] = e._a[r] == null ? r === 2 ? 1 : 0 : e._a[r];
            e._a[le] === 24 && e._a[Je] === 0 && e._a[Sr] === 0 && e._a[da] === 0 && (e._nextDay = !0, e._a[le] = 0), e._d = (e._useUTC ? Xn : Mp).apply(null, n), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[le] = 24), e._w && typeof e._w.d < "u" && e._w.d !== o && (O(e).weekdayMismatch = !0)
        }
    }

    function Sm(e) {
        var r, a, n, i, o, t, s, c, u;
        r = e._w, r.GG != null || r.W != null || r.E != null ? (o = 1, t = 4, a = wa(r.GG, e._a[Le], Jn(K(), 1, 4).year), n = wa(r.W, 1), i = wa(r.E, 1), (i < 1 || i > 7) && (c = !0)) : (o = e._locale._week.dow, t = e._locale._week.doy, u = Jn(K(), o, t), a = wa(r.gg, e._a[Le], u.year), n = wa(r.w, u.week), r.d != null ? (i = r.d, (i < 0 || i > 6) && (c = !0)) : r.e != null ? (i = r.e + o, (r.e < 0 || r.e > 6) && (c = !0)) : i = o), n < 1 || n > wr(a, o, t) ? O(e)._overflowWeeks = !0 : c != null ? O(e)._overflowWeekday = !0 : (s = Rd(a, n, i, o, t), e._a[Le] = s.year, e._dayOfYear = s.dayOfYear)
    }
    S.ISO_8601 = function() {};
    S.RFC_2822 = function() {};

    function Ic(e) {
        if (e._f === S.ISO_8601) { Ud(e); return }
        if (e._f === S.RFC_2822) { Bd(e); return }
        e._a = [], O(e).empty = !0;
        var r = "" + e._i,
            a, n, i, o, t, s = r.length,
            c = 0,
            u, m;
        for (i = kd(e._f, e._locale).match(Pc) || [], m = i.length, a = 0; a < m; a++) o = i[a], n = (r.match(lp(o, e)) || [])[0], n && (t = r.substr(0, r.indexOf(n)), t.length > 0 && O(e).unusedInput.push(t), r = r.slice(r.indexOf(n) + n.length), c += n.length), Ga[o] ? (n ? O(e).empty = !1 : O(e).unusedTokens.push(o), dp(o, n, e)) : e._strict && !n && O(e).unusedTokens.push(o);
        O(e).charsLeftOver = s - c, r.length > 0 && O(e).unusedInput.push(r), e._a[le] <= 12 && O(e).bigHour === !0 && e._a[le] > 0 && (O(e).bigHour = void 0), O(e).parsedDateParts = e._a.slice(0), O(e).meridiem = e._meridiem, e._a[le] = Am(e._locale, e._a[le], e._meridiem), u = O(e).era, u !== null && (e._a[Le] = e._locale.erasConvertYear(u, e._a[Le])), Vc(e), Fc(e)
    }

    function Am(e, r, a) { var n; return a == null ? r : e.meridiemHour != null ? e.meridiemHour(r, a) : (e.isPM != null && (n = e.isPM(a), n && r < 12 && (r += 12), !n && r === 12 && (r = 0)), r) }

    function km(e) {
        var r, a, n, i, o, t, s = !1,
            c = e._f.length;
        if (c === 0) { O(e).invalidFormat = !0, e._d = new Date(NaN); return }
        for (i = 0; i < c; i++) o = 0, t = !1, r = wc({}, e), e._useUTC != null && (r._useUTC = e._useUTC), r._f = e._f[i], Ic(r), kc(r) && (t = !0), o += O(r).charsLeftOver, o += O(r).unusedTokens.length * 10, O(r).score = o, s ? o < n && (n = o, a = r) : (n == null || o < n || t) && (n = o, a = r, t && (s = !0));
        Ur(e, a || r)
    }

    function wm(e) {
        if (!e._d) {
            var r = Mc(e._i),
                a = r.day === void 0 ? r.date : r.day;
            e._a = xd([r.year, r.month, a, r.hour, r.minute, r.second, r.millisecond], function(n) { return n && parseInt(n, 10) }), Vc(e)
        }
    }

    function _m(e) { var r = new si(Fc(Wd(e))); return r._nextDay && (r.add(1, "d"), r._nextDay = void 0), r }

    function Wd(e) {
        var r = e._i,
            a = e._f;
        return e._locale = e._locale || Tr(e._l), r === null || a === void 0 && r === "" ? Io({ nullInput: !0 }) : (typeof r == "string" && (e._i = r = e._locale.preparse(r)), ir(r) ? new si(Fc(r)) : (ti(r) ? e._d = r : nr(a) ? km(e) : a ? Ic(e) : Pm(e), kc(e) || (e._d = null), e))
    }

    function Pm(e) {
        var r = e._i;
        we(r) ? e._d = new Date(S.now()) : ti(r) ? e._d = new Date(r.valueOf()) : typeof r == "string" ? Cm(e) : nr(r) ? (e._a = xd(r.slice(0), function(a) { return parseInt(a, 10) }), Vc(e)) : ma(r) ? wm(e) : Er(r) ? e._d = new Date(r) : S.createFromInputFallback(e)
    }

    function Hd(e, r, a, n, i) { var o = {}; return (r === !0 || r === !1) && (n = r, r = void 0), (a === !0 || a === !1) && (n = a, a = void 0), (ma(e) && Ac(e) || nr(e) && e.length === 0) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = i, o._l = a, o._i = e, o._f = r, o._strict = n, _m(o) }

    function K(e, r, a, n) { return Hd(e, r, a, n, !1) }
    var Mm = Ge("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = K.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : Io() }),
        Dm = Ge("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = K.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : Io() });

    function Gd(e, r) { var a, n; if (r.length === 1 && nr(r[0]) && (r = r[0]), !r.length) return K(); for (a = r[0], n = 1; n < r.length; ++n)(!r[n].isValid() || r[n][e](a)) && (a = r[n]); return a }

    function Em() { var e = [].slice.call(arguments, 0); return Gd("isBefore", e) }

    function Ym() { var e = [].slice.call(arguments, 0); return Gd("isAfter", e) }
    var Tm = function() { return Date.now ? Date.now() : +new Date },
        Ln = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Nm(e) {
        var r, a = !1,
            n, i = Ln.length;
        for (r in e)
            if (U(e, r) && !(ie.call(Ln, r) !== -1 && (e[r] == null || !isNaN(e[r])))) return !1;
        for (n = 0; n < i; ++n)
            if (e[Ln[n]]) {
                if (a) return !1;
                parseFloat(e[Ln[n]]) !== R(e[Ln[n]]) && (a = !0)
            }
        return !0
    }

    function Om() { return this._isValid }

    function zm() { return or(NaN) }

    function $o(e) {
        var r = Mc(e),
            a = r.year || 0,
            n = r.quarter || 0,
            i = r.month || 0,
            o = r.week || r.isoWeek || 0,
            t = r.day || 0,
            s = r.hour || 0,
            c = r.minute || 0,
            u = r.second || 0,
            m = r.millisecond || 0;
        this._isValid = Nm(r), this._milliseconds = +m + u * 1e3 + c * 6e4 + s * 1e3 * 60 * 60, this._days = +t + o * 7, this._months = +i + n * 3 + a * 12, this._data = {}, this._locale = Tr(), this._bubble()
    }

    function Hi(e) { return e instanceof $o }

    function _s(e) { return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e) }

    function Rm(e, r, a) {
        var n = Math.min(e.length, r.length),
            i = Math.abs(e.length - r.length),
            o = 0,
            t;
        for (t = 0; t < n; t++)(a && e[t] !== r[t] || !a && R(e[t]) !== R(r[t])) && o++;
        return o + i
    }

    function bd(e, r) {
        Y(e, 0, 0, function() {
            var a = this.utcOffset(),
                n = "+";
            return a < 0 && (a = -a, n = "-"), n + fr(~~(a / 60), 2) + r + fr(~~a % 60, 2)
        })
    }
    bd("Z", ":");
    bd("ZZ", "");
    w("Z", Ho);
    w("ZZ", Ho);
    H(["Z", "ZZ"], function(e, r, a) { a._useUTC = !0, a._tzm = jc(Ho, e) });
    var Fm = /([\+\-]|\d\d)/gi;

    function jc(e, r) {
        var a = (r || "").match(e),
            n, i, o;
        return a === null ? null : (n = a[a.length - 1] || [], i = (n + "").match(Fm) || ["-", 0, 0], o = +(i[1] * 60) + R(i[2]), o === 0 ? 0 : i[0] === "+" ? o : -o)
    }

    function Uc(e, r) { var a, n; return r._isUTC ? (a = r.clone(), n = (ir(e) || ti(e) ? e.valueOf() : K(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + n), S.updateOffset(a, !1), a) : K(e).local() }

    function Ps(e) { return -Math.round(e._d.getTimezoneOffset()) }
    S.updateOffset = function() {};

    function Vm(e, r, a) {
        var n = this._offset || 0,
            i;
        if (!this.isValid()) return e != null ? this : NaN;
        if (e != null) { if (typeof e == "string") { if (e = jc(Ho, e), e === null) return this } else Math.abs(e) < 16 && !a && (e = e * 60); return !this._isUTC && r && (i = Ps(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), n !== e && (!r || this._changeInProgress ? Qd(this, or(e - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, S.updateOffset(this, !0), this._changeInProgress = null)), this } else return this._isUTC ? n : Ps(this)
    }

    function Im(e, r) { return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, r), this) : -this.utcOffset() }

    function jm(e) { return this.utcOffset(0, e) }

    function Um(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ps(this), "m")), this }

    function Bm() {
        if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") {
            var e = jc(sp, this._i);
            e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }

    function Wm(e) { return this.isValid() ? (e = e ? K(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1 }

    function Hm() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }

    function Gm() {
        if (!we(this._isDSTShifted)) return this._isDSTShifted;
        var e = {},
            r;
        return wc(e, this), e = Wd(e), e._a ? (r = e._isUTC ? pr(e._a) : K(e._a), this._isDSTShifted = this.isValid() && Rm(e._a, r.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
    }

    function bm() { return this.isValid() ? !this._isUTC : !1 }

    function $m() { return this.isValid() ? this._isUTC : !1 }

    function $d() { return this.isValid() ? this._isUTC && this._offset === 0 : !1 }
    var Km = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        Qm = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function or(e, r) {
        var a = e,
            n = null,
            i, o, t;
        return Hi(e) ? a = { ms: e._milliseconds, d: e._days, M: e._months } : Er(e) || !isNaN(+e) ? (a = {}, r ? a[r] = +e : a.milliseconds = +e) : (n = Km.exec(e)) ? (i = n[1] === "-" ? -1 : 1, a = { y: 0, d: R(n[lr]) * i, h: R(n[le]) * i, m: R(n[Je]) * i, s: R(n[Sr]) * i, ms: R(_s(n[da] * 1e3)) * i }) : (n = Qm.exec(e)) ? (i = n[1] === "-" ? -1 : 1, a = { y: oa(n[2], i), M: oa(n[3], i), w: oa(n[4], i), d: oa(n[5], i), h: oa(n[6], i), m: oa(n[7], i), s: oa(n[8], i) }) : a == null ? a = {} : typeof a == "object" && ("from" in a || "to" in a) && (t = Zm(K(a.from), K(a.to)), a = {}, a.ms = t.milliseconds, a.M = t.months), o = new $o(a), Hi(e) && U(e, "_locale") && (o._locale = e._locale), Hi(e) && U(e, "_isValid") && (o._isValid = e._isValid), o
    }
    or.fn = $o.prototype;
    or.invalid = zm;

    function oa(e, r) { var a = e && parseFloat(e.replace(",", ".")); return (isNaN(a) ? 0 : a) * r }

    function o0(e, r) { var a = {}; return a.months = r.month() - e.month() + (r.year() - e.year()) * 12, e.clone().add(a.months, "M").isAfter(r) && --a.months, a.milliseconds = +r - +e.clone().add(a.months, "M"), a }

    function Zm(e, r) { var a; return e.isValid() && r.isValid() ? (r = Uc(r, e), e.isBefore(r) ? a = o0(e, r) : (a = o0(r, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : { milliseconds: 0, months: 0 } }

    function Kd(e, r) { return function(a, n) { var i, o; return n !== null && !isNaN(+n) && (Ad(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = a, a = n, n = o), i = or(a, n), Qd(this, i, e), this } }

    function Qd(e, r, a, n) {
        var i = r._milliseconds,
            o = _s(r._days),
            t = _s(r._months);
        e.isValid() && (n = n ? n : !0, t && Nd(e, qn(e, "Month") + t * a), o && Ed(e, "Date", qn(e, "Date") + o * a), i && e._d.setTime(e._d.valueOf() + i * a), n && S.updateOffset(e, o || t))
    }
    var qm = Kd(1, "add"),
        Xm = Kd(-1, "subtract");

    function Zd(e) { return typeof e == "string" || e instanceof String }

    function Jm(e) { return ir(e) || ti(e) || Zd(e) || Er(e) || rh(e) || eh(e) || e === null || e === void 0 }

    function eh(e) {
        var r = ma(e) && !Ac(e),
            a = !1,
            n = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
            i, o, t = n.length;
        for (i = 0; i < t; i += 1) o = n[i], a = a || U(e, o);
        return r && a
    }

    function rh(e) {
        var r = nr(e),
            a = !1;
        return r && (a = e.filter(function(n) { return !Er(n) && Zd(e) }).length === 0), r && a
    }

    function ah(e) {
        var r = ma(e) && !Ac(e),
            a = !1,
            n = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
            i, o;
        for (i = 0; i < n.length; i += 1) o = n[i], a = a || U(e, o);
        return r && a
    }

    function nh(e, r) { var a = e.diff(r, "days", !0); return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse" }

    function ih(e, r) {
        arguments.length === 1 && (arguments[0] ? Jm(arguments[0]) ? (e = arguments[0], r = void 0) : ah(arguments[0]) && (r = arguments[0], e = void 0) : (e = void 0, r = void 0));
        var a = e || K(),
            n = Uc(a, this).startOf("day"),
            i = S.calendarFormat(this, n) || "sameElse",
            o = r && (mr(r[i]) ? r[i].call(this, a) : r[i]);
        return this.format(o || this.localeData().calendar(i, this, K(a)))
    }

    function oh() { return new si(this) }

    function th(e, r) { var a = ir(e) ? e : K(e); return this.isValid() && a.isValid() ? (r = be(r) || "millisecond", r === "millisecond" ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(r).valueOf()) : !1 }

    function sh(e, r) { var a = ir(e) ? e : K(e); return this.isValid() && a.isValid() ? (r = be(r) || "millisecond", r === "millisecond" ? this.valueOf() < a.valueOf() : this.clone().endOf(r).valueOf() < a.valueOf()) : !1 }

    function ch(e, r, a, n) {
        var i = ir(e) ? e : K(e),
            o = ir(r) ? r : K(r);
        return this.isValid() && i.isValid() && o.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(i, a) : !this.isBefore(i, a)) && (n[1] === ")" ? this.isBefore(o, a) : !this.isAfter(o, a))) : !1
    }

    function lh(e, r) {
        var a = ir(e) ? e : K(e),
            n;
        return this.isValid() && a.isValid() ? (r = be(r) || "millisecond", r === "millisecond" ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(r).valueOf() <= n && n <= this.clone().endOf(r).valueOf())) : !1
    }

    function uh(e, r) { return this.isSame(e, r) || this.isAfter(e, r) }

    function dh(e, r) { return this.isSame(e, r) || this.isBefore(e, r) }

    function fh(e, r, a) {
        var n, i, o;
        if (!this.isValid()) return NaN;
        if (n = Uc(e, this), !n.isValid()) return NaN;
        switch (i = (n.utcOffset() - this.utcOffset()) * 6e4, r = be(r), r) {
            case "year":
                o = Gi(this, n) / 12;
                break;
            case "month":
                o = Gi(this, n);
                break;
            case "quarter":
                o = Gi(this, n) / 3;
                break;
            case "second":
                o = (this - n) / 1e3;
                break;
            case "minute":
                o = (this - n) / 6e4;
                break;
            case "hour":
                o = (this - n) / 36e5;
                break;
            case "day":
                o = (this - n - i) / 864e5;
                break;
            case "week":
                o = (this - n - i) / 6048e5;
                break;
            default:
                o = this - n
        }
        return a ? o : je(o)
    }

    function Gi(e, r) {
        if (e.date() < r.date()) return -Gi(r, e);
        var a = (r.year() - e.year()) * 12 + (r.month() - e.month()),
            n = e.clone().add(a, "months"),
            i, o;
        return r - n < 0 ? (i = e.clone().add(a - 1, "months"), o = (r - n) / (n - i)) : (i = e.clone().add(a + 1, "months"), o = (r - n) / (i - n)), -(a + o) || 0
    }
    S.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    S.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

    function ph() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }

    function mh(e) {
        if (!this.isValid()) return null;
        var r = e !== !0,
            a = r ? this.clone().utc() : this;
        return a.year() < 0 || a.year() > 9999 ? Wi(a, r ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : mr(Date.prototype.toISOString) ? r ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Wi(a, "Z")) : Wi(a, r ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }

    function hh() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
            r = "",
            a, n, i, o;
        return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", r = "Z"), a = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", o = r + '[")]', this.format(a + n + i + o)
    }

    function gh(e) { e || (e = this.isUtc() ? S.defaultFormatUtc : S.defaultFormat); var r = Wi(this, e); return this.localeData().postformat(r) }

    function vh(e, r) { return this.isValid() && (ir(e) && e.isValid() || K(e).isValid()) ? or({ to: this, from: e }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate() }

    function yh(e) { return this.from(K(), e) }

    function Lh(e, r) { return this.isValid() && (ir(e) && e.isValid() || K(e).isValid()) ? or({ from: this, to: e }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate() }

    function Ch(e) { return this.to(K(), e) }

    function qd(e) { var r; return e === void 0 ? this._locale._abbr : (r = Tr(e), r != null && (this._locale = r), this) }
    var Xd = Ge("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return e === void 0 ? this.localeData() : this.locale(e) });

    function Jd() { return this._locale }
    var Co = 1e3,
        ba = 60 * Co,
        xo = 60 * ba,
        ef = (365 * 400 + 97) * 24 * xo;

    function $a(e, r) { return (e % r + r) % r }

    function rf(e, r, a) { return e < 100 && e >= 0 ? new Date(e + 400, r, a) - ef : new Date(e, r, a).valueOf() }

    function af(e, r, a) { return e < 100 && e >= 0 ? Date.UTC(e + 400, r, a) - ef : Date.UTC(e, r, a) }

    function xh(e) {
        var r, a;
        if (e = be(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
        switch (a = this._isUTC ? af : rf, e) {
            case "year":
                r = a(this.year(), 0, 1);
                break;
            case "quarter":
                r = a(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                r = a(this.year(), this.month(), 1);
                break;
            case "week":
                r = a(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                r = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                r = a(this.year(), this.month(), this.date());
                break;
            case "hour":
                r = this._d.valueOf(), r -= $a(r + (this._isUTC ? 0 : this.utcOffset() * ba), xo);
                break;
            case "minute":
                r = this._d.valueOf(), r -= $a(r, ba);
                break;
            case "second":
                r = this._d.valueOf(), r -= $a(r, Co);
                break
        }
        return this._d.setTime(r), S.updateOffset(this, !0), this
    }

    function Sh(e) {
        var r, a;
        if (e = be(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
        switch (a = this._isUTC ? af : rf, e) {
            case "year":
                r = a(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                r = a(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                r = a(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                r = a(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                r = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                r = a(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                r = this._d.valueOf(), r += xo - $a(r + (this._isUTC ? 0 : this.utcOffset() * ba), xo) - 1;
                break;
            case "minute":
                r = this._d.valueOf(), r += ba - $a(r, ba) - 1;
                break;
            case "second":
                r = this._d.valueOf(), r += Co - $a(r, Co) - 1;
                break
        }
        return this._d.setTime(r), S.updateOffset(this, !0), this
    }

    function Ah() { return this._d.valueOf() - (this._offset || 0) * 6e4 }

    function kh() { return Math.floor(this.valueOf() / 1e3) }

    function wh() { return new Date(this.valueOf()) }

    function _h() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }

    function Ph() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }

    function Mh() { return this.isValid() ? this.toISOString() : null }

    function Dh() { return kc(this) }

    function Eh() { return Ur({}, O(this)) }

    function Yh() { return O(this).overflow }

    function Th() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }
    Y("N", 0, 0, "eraAbbr");
    Y("NN", 0, 0, "eraAbbr");
    Y("NNN", 0, 0, "eraAbbr");
    Y("NNNN", 0, 0, "eraName");
    Y("NNNNN", 0, 0, "eraNarrow");
    Y("y", ["y", 1], "yo", "eraYear");
    Y("y", ["yy", 2], 0, "eraYear");
    Y("y", ["yyy", 3], 0, "eraYear");
    Y("y", ["yyyy", 4], 0, "eraYear");
    w("N", Bc);
    w("NN", Bc);
    w("NNN", Bc);
    w("NNNN", Wh);
    w("NNNNN", Hh);
    H(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, r, a, n) {
        var i = a._locale.erasParse(e, n, a._strict);
        i ? O(a).era = i : O(a).invalidEra = e
    });
    w("y", on);
    w("yy", on);
    w("yyy", on);
    w("yyyy", on);
    w("yo", Gh);
    H(["y", "yy", "yyy", "yyyy"], Le);
    H(["yo"], function(e, r, a, n) {
        var i;
        a._locale._eraYearOrdinalRegex && (i = e.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? r[Le] = a._locale.eraYearOrdinalParse(e, i) : r[Le] = parseInt(e, 10)
    });

    function Nh(e, r) {
        var a, n, i, o = this._eras || Tr("en")._eras;
        for (a = 0, n = o.length; a < n; ++a) {
            switch (typeof o[a].since) {
                case "string":
                    i = S(o[a].since).startOf("day"), o[a].since = i.valueOf();
                    break
            }
            switch (typeof o[a].until) {
                case "undefined":
                    o[a].until = 1 / 0;
                    break;
                case "string":
                    i = S(o[a].until).startOf("day").valueOf(), o[a].until = i.valueOf();
                    break
            }
        }
        return o
    }

    function Oh(e, r, a) {
        var n, i, o = this.eras(),
            t, s, c;
        for (e = e.toUpperCase(), n = 0, i = o.length; n < i; ++n)
            if (t = o[n].name.toUpperCase(), s = o[n].abbr.toUpperCase(), c = o[n].narrow.toUpperCase(), a) switch (r) {
                case "N":
                case "NN":
                case "NNN":
                    if (s === e) return o[n];
                    break;
                case "NNNN":
                    if (t === e) return o[n];
                    break;
                case "NNNNN":
                    if (c === e) return o[n];
                    break
            } else if ([t, s, c].indexOf(e) >= 0) return o[n]
    }

    function zh(e, r) { var a = e.since <= e.until ? 1 : -1; return r === void 0 ? S(e.since).year() : S(e.since).year() + (r - e.offset) * a }

    function Rh() {
        var e, r, a, n = this.localeData().eras();
        for (e = 0, r = n.length; e < r; ++e)
            if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since) return n[e].name;
        return ""
    }

    function Fh() {
        var e, r, a, n = this.localeData().eras();
        for (e = 0, r = n.length; e < r; ++e)
            if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since) return n[e].narrow;
        return ""
    }

    function Vh() {
        var e, r, a, n = this.localeData().eras();
        for (e = 0, r = n.length; e < r; ++e)
            if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since) return n[e].abbr;
        return ""
    }

    function Ih() {
        var e, r, a, n, i = this.localeData().eras();
        for (e = 0, r = i.length; e < r; ++e)
            if (a = i[e].since <= i[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), i[e].since <= n && n <= i[e].until || i[e].until <= n && n <= i[e].since) return (this.year() - S(i[e].since).year()) * a + i[e].offset;
        return this.year()
    }

    function jh(e) { return U(this, "_erasNameRegex") || Wc.call(this), e ? this._erasNameRegex : this._erasRegex }

    function Uh(e) { return U(this, "_erasAbbrRegex") || Wc.call(this), e ? this._erasAbbrRegex : this._erasRegex }

    function Bh(e) { return U(this, "_erasNarrowRegex") || Wc.call(this), e ? this._erasNarrowRegex : this._erasRegex }

    function Bc(e, r) { return r.erasAbbrRegex(e) }

    function Wh(e, r) { return r.erasNameRegex(e) }

    function Hh(e, r) { return r.erasNarrowRegex(e) }

    function Gh(e, r) { return r._eraYearOrdinalRegex || on }

    function Wc() {
        var e = [],
            r = [],
            a = [],
            n = [],
            i, o, t, s, c, u = this.eras();
        for (i = 0, o = u.length; i < o; ++i) t = kr(u[i].name), s = kr(u[i].abbr), c = kr(u[i].narrow), r.push(t), e.push(s), a.push(c), n.push(t), n.push(s), n.push(c);
        this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + a.join("|") + ")", "i")
    }
    Y(0, ["gg", 2], 0, function() { return this.weekYear() % 100 });
    Y(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 });

    function Ko(e, r) { Y(0, [e, e.length], 0, r) }
    Ko("gggg", "weekYear");
    Ko("ggggg", "weekYear");
    Ko("GGGG", "isoWeekYear");
    Ko("GGGGG", "isoWeekYear");
    w("G", Wo);
    w("g", Wo);
    w("GG", Q, Fe);
    w("gg", Q, Fe);
    w("GGGG", Ec, Dc);
    w("gggg", Ec, Dc);
    w("GGGGG", Bo, jo);
    w("ggggg", Bo, jo);
    li(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, r, a, n) { r[n.substr(0, 2)] = R(e) });
    li(["gg", "GG"], function(e, r, a, n) { r[n] = S.parseTwoDigitYear(e) });

    function bh(e) { return nf.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy) }

    function $h(e) { return nf.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }

    function Kh() { return wr(this.year(), 1, 4) }

    function Qh() { return wr(this.isoWeekYear(), 1, 4) }

    function Zh() { var e = this.localeData()._week; return wr(this.year(), e.dow, e.doy) }

    function qh() { var e = this.localeData()._week; return wr(this.weekYear(), e.dow, e.doy) }

    function nf(e, r, a, n, i) { var o; return e == null ? Jn(this, n, i).year : (o = wr(e, n, i), r > o && (r = o), Xh.call(this, e, r, a, n, i)) }

    function Xh(e, r, a, n, i) {
        var o = Rd(e, r, a, n, i),
            t = Xn(o.year, 0, o.dayOfYear);
        return this.year(t.getUTCFullYear()), this.month(t.getUTCMonth()), this.date(t.getUTCDate()), this
    }
    Y("Q", 0, "Qo", "quarter");
    w("Q", wd);
    H("Q", function(e, r) { r[xr] = (R(e) - 1) * 3 });

    function Jh(e) { return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3) }
    Y("D", ["DD", 2], "Do", "date");
    w("D", Q, tn);
    w("DD", Q, Fe);
    w("Do", function(e, r) { return e ? r._dayOfMonthOrdinalParse || r._ordinalParse : r._dayOfMonthOrdinalParseLenient });
    H(["D", "DD"], lr);
    H("Do", function(e, r) { r[lr] = R(e.match(Q)[0]) });
    var of = sn("Date", !0);
    Y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    w("DDD", Uo);
    w("DDDD", _d);
    H(["DDD", "DDDD"], function(e, r, a) { a._dayOfYear = R(e) });

    function e3(e) { var r = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return e == null ? r : this.add(e - r, "d") }
    Y("m", ["mm", 2], 0, "minute");
    w("m", Q, Yc);
    w("mm", Q, Fe);
    H(["m", "mm"], Je);
    var r3 = sn("Minutes", !1);
    Y("s", ["ss", 2], 0, "second");
    w("s", Q, Yc);
    w("ss", Q, Fe);
    H(["s", "ss"], Sr);
    var a3 = sn("Seconds", !1);
    Y("S", 0, 0, function() { return ~~(this.millisecond() / 100) });
    Y(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) });
    Y(0, ["SSS", 3], 0, "millisecond");
    Y(0, ["SSSS", 4], 0, function() { return this.millisecond() * 10 });
    Y(0, ["SSSSS", 5], 0, function() { return this.millisecond() * 100 });
    Y(0, ["SSSSSS", 6], 0, function() { return this.millisecond() * 1e3 });
    Y(0, ["SSSSSSS", 7], 0, function() { return this.millisecond() * 1e4 });
    Y(0, ["SSSSSSSS", 8], 0, function() { return this.millisecond() * 1e5 });
    Y(0, ["SSSSSSSSS", 9], 0, function() { return this.millisecond() * 1e6 });
    w("S", Uo, wd);
    w("SS", Uo, Fe);
    w("SSS", Uo, _d);
    var Br, tf;
    for (Br = "SSSS"; Br.length <= 9; Br += "S") w(Br, on);

    function n3(e, r) { r[da] = R(("0." + e) * 1e3) }
    for (Br = "S"; Br.length <= 9; Br += "S") H(Br, n3);
    tf = sn("Milliseconds", !1);
    Y("z", 0, 0, "zoneAbbr");
    Y("zz", 0, 0, "zoneName");

    function i3() { return this._isUTC ? "UTC" : "" }

    function o3() { return this._isUTC ? "Coordinated Universal Time" : "" }
    var y = si.prototype;
    y.add = qm;
    y.calendar = ih;
    y.clone = oh;
    y.diff = fh;
    y.endOf = Sh;
    y.format = gh;
    y.from = vh;
    y.fromNow = yh;
    y.to = Lh;
    y.toNow = Ch;
    y.get = hp;
    y.invalidAt = Yh;
    y.isAfter = th;
    y.isBefore = sh;
    y.isBetween = ch;
    y.isSame = lh;
    y.isSameOrAfter = uh;
    y.isSameOrBefore = dh;
    y.isValid = Dh;
    y.lang = Xd;
    y.locale = qd;
    y.localeData = Jd;
    y.max = Dm;
    y.min = Mm;
    y.parsingFlags = Eh;
    y.set = gp;
    y.startOf = xh;
    y.subtract = Xm;
    y.toArray = _h;
    y.toObject = Ph;
    y.toDate = wh;
    y.toISOString = mh;
    y.inspect = hh;
    typeof Symbol < "u" && Symbol.for != null && (y[Symbol.for("nodejs.util.inspect.custom")] = function() { return "Moment<" + this.format() + ">" });
    y.toJSON = Mh;
    y.toString = ph;
    y.unix = kh;
    y.valueOf = Ah;
    y.creationData = Th;
    y.eraName = Rh;
    y.eraNarrow = Fh;
    y.eraAbbr = Vh;
    y.eraYear = Ih;
    y.year = Dd;
    y.isLeapYear = mp;
    y.weekYear = bh;
    y.isoWeekYear = $h;
    y.quarter = y.quarters = Jh;
    y.month = Od;
    y.daysInMonth = wp;
    y.week = y.weeks = Np;
    y.isoWeek = y.isoWeeks = Op;
    y.weeksInYear = Zh;
    y.weeksInWeekYear = qh;
    y.isoWeeksInYear = Kh;
    y.isoWeeksInISOWeekYear = Qh;
    y.date = of;
    y.day = y.days = $p;
    y.weekday = Kp;
    y.isoWeekday = Qp;
    y.dayOfYear = e3;
    y.hour = y.hours = am;
    y.minute = y.minutes = r3;
    y.second = y.seconds = a3;
    y.millisecond = y.milliseconds = tf;
    y.utcOffset = Vm;
    y.utc = jm;
    y.local = Um;
    y.parseZone = Bm;
    y.hasAlignedHourOffset = Wm;
    y.isDST = Hm;
    y.isLocal = bm;
    y.isUtcOffset = $m;
    y.isUtc = $d;
    y.isUTC = $d;
    y.zoneAbbr = i3;
    y.zoneName = o3;
    y.dates = Ge("dates accessor is deprecated. Use date instead.", of);
    y.months = Ge("months accessor is deprecated. Use month instead", Od);
    y.years = Ge("years accessor is deprecated. Use year instead", Dd);
    y.zone = Ge("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Im);
    y.isDSTShifted = Ge("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Gm);

    function t3(e) { return K(e * 1e3) }

    function s3() { return K.apply(null, arguments).parseZone() }

    function sf(e) { return e }
    var B = _c.prototype;
    B.calendar = b1;
    B.longDateFormat = Z1;
    B.invalidDate = X1;
    B.ordinal = rp;
    B.preparse = sf;
    B.postformat = sf;
    B.relativeTime = np;
    B.pastFuture = ip;
    B.set = H1;
    B.eras = Nh;
    B.erasParse = Oh;
    B.erasConvertYear = zh;
    B.erasAbbrRegex = Uh;
    B.erasNameRegex = jh;
    B.erasNarrowRegex = Bh;
    B.months = xp;
    B.monthsShort = Sp;
    B.monthsParse = kp;
    B.monthsRegex = Pp;
    B.monthsShortRegex = _p;
    B.week = Dp;
    B.firstDayOfYear = Tp;
    B.firstDayOfWeek = Yp;
    B.weekdays = Bp;
    B.weekdaysMin = Hp;
    B.weekdaysShort = Wp;
    B.weekdaysParse = bp;
    B.weekdaysRegex = Zp;
    B.weekdaysShortRegex = qp;
    B.weekdaysMinRegex = Xp;
    B.isPM = em;
    B.meridiem = nm;

    function So(e, r, a, n) {
        var i = Tr(),
            o = pr().set(n, r);
        return i[a](o, e)
    }

    function cf(e, r, a) { if (Er(e) && (r = e, e = void 0), e = e || "", r != null) return So(e, r, a, "month"); var n, i = []; for (n = 0; n < 12; n++) i[n] = So(e, n, a, "month"); return i }

    function Hc(e, r, a, n) {
        typeof e == "boolean" ? (Er(r) && (a = r, r = void 0), r = r || "") : (r = e, a = r, e = !1, Er(r) && (a = r, r = void 0), r = r || "");
        var i = Tr(),
            o = e ? i._week.dow : 0,
            t, s = [];
        if (a != null) return So(r, (a + o) % 7, n, "day");
        for (t = 0; t < 7; t++) s[t] = So(r, (t + o) % 7, n, "day");
        return s
    }

    function c3(e, r) { return cf(e, r, "months") }

    function l3(e, r) { return cf(e, r, "monthsShort") }

    function u3(e, r, a) { return Hc(e, r, a, "weekdays") }

    function d3(e, r, a) { return Hc(e, r, a, "weekdaysShort") }

    function f3(e, r, a) { return Hc(e, r, a, "weekdaysMin") }
    qr("en", {
        eras: [{ since: "0001-01-01", until: 1 / 0, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var r = e % 10,
                a = R(e % 100 / 10) === 1 ? "th" : r === 1 ? "st" : r === 2 ? "nd" : r === 3 ? "rd" : "th";
            return e + a
        }
    });
    S.lang = Ge("moment.lang is deprecated. Use moment.locale instead.", qr);
    S.langData = Ge("moment.langData is deprecated. Use moment.localeData instead.", Tr);
    var hr = Math.abs;

    function p3() { var e = this._data; return this._milliseconds = hr(this._milliseconds), this._days = hr(this._days), this._months = hr(this._months), e.milliseconds = hr(e.milliseconds), e.seconds = hr(e.seconds), e.minutes = hr(e.minutes), e.hours = hr(e.hours), e.months = hr(e.months), e.years = hr(e.years), this }

    function lf(e, r, a, n) { var i = or(r, a); return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble() }

    function m3(e, r) { return lf(this, e, r, 1) }

    function h3(e, r) { return lf(this, e, r, -1) }

    function t0(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

    function g3() {
        var e = this._milliseconds,
            r = this._days,
            a = this._months,
            n = this._data,
            i, o, t, s, c;
        return e >= 0 && r >= 0 && a >= 0 || e <= 0 && r <= 0 && a <= 0 || (e += t0(Ms(a) + r) * 864e5, r = 0, a = 0), n.milliseconds = e % 1e3, i = je(e / 1e3), n.seconds = i % 60, o = je(i / 60), n.minutes = o % 60, t = je(o / 60), n.hours = t % 24, r += je(t / 24), c = je(uf(r)), a += c, r -= t0(Ms(c)), s = je(a / 12), a %= 12, n.days = r, n.months = a, n.years = s, this
    }

    function uf(e) { return e * 4800 / 146097 }

    function Ms(e) { return e * 146097 / 4800 }

    function v3(e) {
        if (!this.isValid()) return NaN;
        var r, a, n = this._milliseconds;
        if (e = be(e), e === "month" || e === "quarter" || e === "year") switch (r = this._days + n / 864e5, a = this._months + uf(r), e) {
            case "month":
                return a;
            case "quarter":
                return a / 3;
            case "year":
                return a / 12
        } else switch (r = this._days + Math.round(Ms(this._months)), e) {
            case "week":
                return r / 7 + n / 6048e5;
            case "day":
                return r + n / 864e5;
            case "hour":
                return r * 24 + n / 36e5;
            case "minute":
                return r * 1440 + n / 6e4;
            case "second":
                return r * 86400 + n / 1e3;
            case "millisecond":
                return Math.floor(r * 864e5) + n;
            default:
                throw new Error("Unknown unit " + e)
        }
    }

    function Nr(e) { return function() { return this.as(e) } }
    var df = Nr("ms"),
        y3 = Nr("s"),
        L3 = Nr("m"),
        C3 = Nr("h"),
        x3 = Nr("d"),
        S3 = Nr("w"),
        A3 = Nr("M"),
        k3 = Nr("Q"),
        w3 = Nr("y"),
        _3 = df;

    function P3() { return or(this) }

    function M3(e) { return e = be(e), this.isValid() ? this[e + "s"]() : NaN }

    function Sa(e) { return function() { return this.isValid() ? this._data[e] : NaN } }
    var D3 = Sa("milliseconds"),
        E3 = Sa("seconds"),
        Y3 = Sa("minutes"),
        T3 = Sa("hours"),
        N3 = Sa("days"),
        O3 = Sa("months"),
        z3 = Sa("years");

    function R3() { return je(this.days() / 7) }
    var vr = Math.round,
        Va = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };

    function F3(e, r, a, n, i) { return i.relativeTime(r || 1, !!a, e, n) }

    function V3(e, r, a, n) {
        var i = or(e).abs(),
            o = vr(i.as("s")),
            t = vr(i.as("m")),
            s = vr(i.as("h")),
            c = vr(i.as("d")),
            u = vr(i.as("M")),
            m = vr(i.as("w")),
            h = vr(i.as("y")),
            p = o <= a.ss && ["s", o] || o < a.s && ["ss", o] || t <= 1 && ["m"] || t < a.m && ["mm", t] || s <= 1 && ["h"] || s < a.h && ["hh", s] || c <= 1 && ["d"] || c < a.d && ["dd", c];
        return a.w != null && (p = p || m <= 1 && ["w"] || m < a.w && ["ww", m]), p = p || u <= 1 && ["M"] || u < a.M && ["MM", u] || h <= 1 && ["y"] || ["yy", h], p[2] = r, p[3] = +e > 0, p[4] = n, F3.apply(null, p)
    }

    function I3(e) { return e === void 0 ? vr : typeof e == "function" ? (vr = e, !0) : !1 }

    function j3(e, r) { return Va[e] === void 0 ? !1 : r === void 0 ? Va[e] : (Va[e] = r, e === "s" && (Va.ss = r - 1), !0) }

    function U3(e, r) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a = !1,
            n = Va,
            i, o;
        return typeof e == "object" && (r = e, e = !1), typeof e == "boolean" && (a = e), typeof r == "object" && (n = Object.assign({}, Va, r), r.s != null && r.ss == null && (n.ss = r.s - 1)), i = this.localeData(), o = V3(this, !a, n, i), a && (o = i.pastFuture(+this, o)), i.postformat(o)
    }
    var Mt = Math.abs;

    function ka(e) { return (e > 0) - (e < 0) || +e }

    function Qo() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e = Mt(this._milliseconds) / 1e3,
            r = Mt(this._days),
            a = Mt(this._months),
            n, i, o, t, s = this.asSeconds(),
            c, u, m, h;
        return s ? (n = je(e / 60), i = je(n / 60), e %= 60, n %= 60, o = je(a / 12), a %= 12, t = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = s < 0 ? "-" : "", u = ka(this._months) !== ka(s) ? "-" : "", m = ka(this._days) !== ka(s) ? "-" : "", h = ka(this._milliseconds) !== ka(s) ? "-" : "", c + "P" + (o ? u + o + "Y" : "") + (a ? u + a + "M" : "") + (r ? m + r + "D" : "") + (i || n || e ? "T" : "") + (i ? h + i + "H" : "") + (n ? h + n + "M" : "") + (e ? h + t + "S" : "")) : "P0D"
    }
    var I = $o.prototype;
    I.isValid = Om;
    I.abs = p3;
    I.add = m3;
    I.subtract = h3;
    I.as = v3;
    I.asMilliseconds = df;
    I.asSeconds = y3;
    I.asMinutes = L3;
    I.asHours = C3;
    I.asDays = x3;
    I.asWeeks = S3;
    I.asMonths = A3;
    I.asQuarters = k3;
    I.asYears = w3;
    I.valueOf = _3;
    I._bubble = g3;
    I.clone = P3;
    I.get = M3;
    I.milliseconds = D3;
    I.seconds = E3;
    I.minutes = Y3;
    I.hours = T3;
    I.days = N3;
    I.weeks = R3;
    I.months = O3;
    I.years = z3;
    I.humanize = U3;
    I.toISOString = Qo;
    I.toString = Qo;
    I.toJSON = Qo;
    I.locale = qd;
    I.localeData = Jd;
    I.toIsoString = Ge("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Qo);
    I.lang = Xd;
    Y("X", 0, 0, "unix");
    Y("x", 0, 0, "valueOf");
    w("x", Wo);
    w("X", cp);
    H("X", function(e, r, a) { a._d = new Date(parseFloat(e) * 1e3) });
    H("x", function(e, r, a) { a._d = new Date(R(e)) }); //! moment.js
    S.version = "2.30.1";
    B1(K);
    S.fn = y;
    S.min = Em;
    S.max = Ym;
    S.now = Tm;
    S.utc = pr;
    S.unix = t3;
    S.months = c3;
    S.isDate = ti;
    S.locale = qr;
    S.invalid = Io;
    S.duration = or;
    S.isMoment = ir;
    S.weekdays = u3;
    S.parseZone = s3;
    S.localeData = Tr;
    S.isDuration = Hi;
    S.monthsShort = l3;
    S.weekdaysMin = f3;
    S.defineLocale = Rc;
    S.updateLocale = sm;
    S.locales = cm;
    S.weekdaysShort = d3;
    S.normalizeUnits = be;
    S.relativeTimeRounding = I3;
    S.relativeTimeThreshold = j3;
    S.calendarFormat = nh;
    S.prototype = y;
    S.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" };

    function B3() {
        const [e, r] = Qe.useState([]), [a, n] = Qe.useState([]), [i, o] = Qe.useState([]), [t, s] = Qe.useState([]), [c, u] = Qe.useState(""), [m, h] = Qe.useState(""), p = l => { h(l.target.value), A(l.target.value), s(""), u("") }, C = l => { u(l.target.value) }, x = l => l.toLocaleString("es-ES", { style: "decimal", useGrouping: !0, minimumFractionDigits: 2, maximumFractionDigits: 2 }), A = l => {
            console.log(e);
            const d = e.find(g => g.name.toLowerCase() === l.toLowerCase());
            d && n(d.data)
        };
        Qe.useEffect(() => { r(U1) }, []), Qe.useEffect(() => {
            a.sort((l, d) => l.precio - d.precio), a.forEach(l => {
                try {
                    const d = Number(l.precio.replace(",", "."));
                    l.fecha = S(l.fecha, "YYYY/MM/DD HH:mm:ss").format("DD/MM/YYYY HH:mm:ss"), l.precio = x(d)
                } catch (d) { console.log("no ando el .replace(): ", d, " item: ", l.info) }
            }), o([...a])
        }, [a]);
        const k = l => {
                const g = [...i.filter(_ => _.info.toLowerCase().includes(l.toLowerCase()))];
                s(g), u("")
            },
            f = l => { l.key === "Enter" && (k(c), u("")) };
        return L.jsxs(L.Fragment, { children: [L.jsx("h1", { children: "Compara precios" }), L.jsxs("div", { className: "centrar", children: [L.jsxs("div", { children: [L.jsx("h2", { style: { display: "inline" }, children: "Producto seleccionado: " }), L.jsxs("select", { value: m, onChange: p, children: [L.jsx("option", { value: "", children: "Selecciona un producto" }), L.jsx("option", { value: "aceite", children: "Aceite" }), L.jsx("option", { value: "azucar", children: "Azúcar" }), L.jsx("option", { value: "cafe", children: "Café" }), L.jsx("option", { value: "leche", children: "Leche" }), L.jsx("option", { value: "pan", children: "Pan" }), L.jsx("option", { value: "yerba", children: "Yerba" })] })] }), m === "aceite" && L.jsxs("div", { children: [L.jsx("button", { onClick: () => k("900"), children: "Filtro por 900 cc." }), L.jsx("button", { onClick: () => k("5 l"), children: "Filtro por 1,5 litros" }), L.jsx("button", { onClick: () => k("girasol"), children: "Filtrar por girasol" }), L.jsx("button", { onClick: () => k("maíz"), children: "Filtrar por maíz" }), L.jsx("button", { onClick: () => k("oliva"), children: "Filtrar por Oliva" }), L.jsx("div", { children: L.jsx("button", { onClick: () => k(" "), children: "Volver a la lista" }) })] }), m === "azucar" && L.jsxs("div", { children: [L.jsx("button", { onClick: () => k("1 k"), children: "Filtro por kilo" }), L.jsx("button", { onClick: () => k("chango"), children: "Filtro por marca Chango" }), L.jsx("button", { onClick: () => k("hileret"), children: "Filtro por marca Hileret" }), L.jsx("button", { onClick: () => k(" "), children: "Volver a la lista" })] }), m === "cafe" && L.jsxs("div", { children: [L.jsxs("div", { children: [L.jsx("div", { children: L.jsx("h2", { children: "Filtrar por marca: " }) }), L.jsx("button", { onClick: () => k("arlistan"), children: "Arlistán" }), L.jsx("button", { onClick: () => k("dolca"), children: "Dolca" }), L.jsx("button", { onClick: () => k("nescafe"), children: "Nescafé" }), L.jsx("button", { onClick: () => k("bonafide"), children: "Bonafide" }), L.jsx("button", { onClick: () => k("morenita"), children: "La Morenita" })] }), L.jsx("div", { children: L.jsx("button", { onClick: () => k("instant"), children: "Filtrar por instantáneo" }) }), L.jsx("div", { children: L.jsx("h2", { children: "Filtrar por gramos: " }) }), L.jsx("button", { onClick: () => k("50 g"), children: "50 gramos" }), L.jsx("button", { onClick: () => k("100 g"), children: "100 gramos" }), L.jsx("button", { onClick: () => k("125 g"), children: "125 gramos" }), L.jsx("button", { onClick: () => k("170 g"), children: "170 gramos" }), L.jsx("button", { onClick: () => k("250 g"), children: "250 gramos" }), L.jsx("div", { children: L.jsx("button", { onClick: () => k(" "), children: "Volver a la lista" }) })] }), m === "leche" && L.jsxs("div", { children: [L.jsx("button", { onClick: () => k("1 l"), children: "Filtro por litro" }), L.jsx("button", { onClick: () => k("seren"), children: "Filtrar por marca La Serenísima" }), L.jsx("button", { onClick: () => k("sachet"), children: "Filtro por sachet" }), L.jsx("button", { onClick: () => k("en polvo"), children: "Filtro por en polvo" }), L.jsx("button", { onClick: () => k(" "), children: "Volver a la lista" })] }), m === "pan" && L.jsxs("div", { children: [L.jsx("button", { onClick: () => k("1 k"), children: "Filtro por kilo" }), L.jsx("button", { onClick: () => k("rallado"), children: "Pan rallado" }), L.jsx("button", { onClick: () => k("pancho"), children: "Pan para panchos" }), L.jsx("button", { onClick: () => k("hamburguesas"), children: "Pan para hamburguesas" }), L.jsx("button", { onClick: () => k(" "), children: "Volver a la lista" })] }), m === "yerba" && L.jsxs("div", { children: [L.jsx("div", { children: L.jsx("h2", { children: "Filtrar por marca: " }) }), L.jsx("button", { onClick: () => k("tarag"), children: "Taragui" }), L.jsx("button", { onClick: () => k("uni"), children: "Unión" }), L.jsx("button", { onClick: () => k("playadito"), children: "Playadito" }), L.jsx("button", { onClick: () => k("tranquera"), children: "La Tranquera" }), L.jsx("button", { onClick: () => k("verdeflor"), children: "Verdeflor" }), L.jsx("button", { onClick: () => k("nobleza"), children: "Nobleza Gaucha" }), L.jsx("div", { children: L.jsx("h2", { children: "Filtrar por peso: " }) }), L.jsx("button", { onClick: () => k("1 k"), children: "Filtro por kilo" }), L.jsx("button", { onClick: () => k("500 g"), children: "Filtro por 1/2 kilo" }), L.jsx("div", { children: L.jsx("button", { onClick: () => k(" "), children: "Volver a la lista" }) })] }), L.jsxs("div", { children: [L.jsx("input", { type: "text", placeholder: "Añade un filtro", value: c, onChange: C, onKeyDown: f }), L.jsx("button", { onClick: () => { k(c) }, children: "Filtrar" })] })] }), L.jsx("ol", { children: (t.length > 0 ? t : i).map(l => L.jsxs("li", { children: [L.jsx("h2", { children: l.info }), L.jsxs("footer", { children: [L.jsxs("div", { children: [L.jsx("h3", { children: "Precio: " }), " ", L.jsxs("h2", { children: ["$ ", l.precio] })] }), L.jsxs("div", { children: [L.jsx("h3", { children: "Supermercado: " }), L.jsx("h4", { children: l.supermercado })] })] }), L.jsxs("div", { className: "actualizado", children: ["Actualizado: ", l.fecha] })] }, l.id)) })] })
    }
    Dt.createRoot(document.getElementById("root")).render(L.jsx(Ef.StrictMode, { children: L.jsx(B3, {}) }))
});
export default W3();

var yd = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var e6 = yd((a6, Ko) => {
    (function() { const r = document.createElement("link").relList; if (r && r.supports && r.supports("modulepreload")) return; for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
        new MutationObserver(o => { for (const n of o)
                if (n.type === "childList")
                    for (const t of n.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && i(t) }).observe(document, { childList: !0, subtree: !0 });

        function a(o) { const n = {}; return o.integrity && (n.integrity = o.integrity), o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? n.credentials = "include" : o.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n }

        function i(o) { if (o.ep) return;
            o.ep = !0; const n = a(o);
            fetch(o.href, n) } })();

    function ll(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }
    var ul = { exports: {} },
        Mn = {},
        fl = { exports: {} },
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
    var ao = Symbol.for("react.element"),
        xd = Symbol.for("react.portal"),
        Dd = Symbol.for("react.fragment"),
        Sd = Symbol.for("react.strict_mode"),
        Ad = Symbol.for("react.profiler"),
        Md = Symbol.for("react.provider"),
        Pd = Symbol.for("react.context"),
        kd = Symbol.for("react.forward_ref"),
        wd = Symbol.for("react.suspense"),
        _d = Symbol.for("react.memo"),
        zd = Symbol.for("react.lazy"),
        Kc = Symbol.iterator;

    function Ed(e) { return e === null || typeof e != "object" ? null : (e = Kc && e[Kc] || e["@@iterator"], typeof e == "function" ? e : null) }
    var dl = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
        pl = Object.assign,
        ml = {};

    function ii(e, r, a) { this.props = e, this.context = r, this.refs = ml, this.updater = a || dl }
    ii.prototype.isReactComponent = {};
    ii.prototype.setState = function(e, r) { if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState") };
    ii.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") };

    function hl() {}
    hl.prototype = ii.prototype;

    function E0(e, r, a) { this.props = e, this.context = r, this.refs = ml, this.updater = a || dl }
    var T0 = E0.prototype = new hl;
    T0.constructor = E0;
    pl(T0, ii.prototype);
    T0.isPureReactComponent = !0;
    var qc = Array.isArray,
        gl = Object.prototype.hasOwnProperty,
        O0 = { current: null },
        vl = { key: !0, ref: !0, __self: !0, __source: !0 };

    function Cl(e, r, a) { var i, o = {},
            n = null,
            t = null; if (r != null)
            for (i in r.ref !== void 0 && (t = r.ref), r.key !== void 0 && (n = "" + r.key), r) gl.call(r, i) && !vl.hasOwnProperty(i) && (o[i] = r[i]); var c = arguments.length - 2; if (c === 1) o.children = a;
        else if (1 < c) { for (var s = Array(c), l = 0; l < c; l++) s[l] = arguments[l + 2];
            o.children = s } if (e && e.defaultProps)
            for (i in c = e.defaultProps, c) o[i] === void 0 && (o[i] = c[i]); return { $$typeof: ao, type: e, key: n, ref: t, props: o, _owner: O0.current } }

    function Td(e, r) { return { $$typeof: ao, type: e.type, key: r, ref: e.ref, props: e.props, _owner: e._owner } }

    function Y0(e) { return typeof e == "object" && e !== null && e.$$typeof === ao }

    function Od(e) { var r = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function(a) { return r[a] }) }
    var Xc = /\/+/g;

    function rt(e, r) { return typeof e == "object" && e !== null && e.key != null ? Od("" + e.key) : r.toString(36) }

    function Oo(e, r, a, i, o) { var n = typeof e;
        (n === "undefined" || n === "boolean") && (e = null); var t = !1; if (e === null) t = !0;
        else switch (n) {
            case "string":
            case "number":
                t = !0; break;
            case "object":
                switch (e.$$typeof) {
                    case ao:
                    case xd:
                        t = !0 } }
        if (t) return t = e, o = o(t), e = i === "" ? "." + rt(t, 0) : i, qc(o) ? (a = "", e != null && (a = e.replace(Xc, "$&/") + "/"), Oo(o, r, a, "", function(l) { return l })) : o != null && (Y0(o) && (o = Td(o, a + (!o.key || t && t.key === o.key ? "" : ("" + o.key).replace(Xc, "$&/") + "/") + e)), r.push(o)), 1; if (t = 0, i = i === "" ? "." : i + ":", qc(e))
            for (var c = 0; c < e.length; c++) { n = e[c]; var s = i + rt(n, c);
                t += Oo(n, r, a, s, o) } else if (s = Ed(e), typeof s == "function")
                for (e = s.call(e), c = 0; !(n = e.next()).done;) n = n.value, s = i + rt(n, c++), t += Oo(n, r, a, s, o);
            else if (n === "object") throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."); return t }

    function mo(e, r, a) { if (e == null) return e; var i = [],
            o = 0; return Oo(e, i, "", "", function(n) { return r.call(a, n, o++) }), i }

    function Yd(e) { if (e._status === -1) { var r = e._result;
            r = r(), r.then(function(a) {
                (e._status === 0 || e._status === -1) && (e._status = 1, e._result = a) }, function(a) {
                (e._status === 0 || e._status === -1) && (e._status = 2, e._result = a) }), e._status === -1 && (e._status = 0, e._result = r) } if (e._status === 1) return e._result.default; throw e._result }
    var Ae = { current: null },
        Yo = { transition: null },
        Nd = { ReactCurrentDispatcher: Ae, ReactCurrentBatchConfig: Yo, ReactCurrentOwner: O0 };
    F.Children = { map: mo, forEach: function(e, r, a) { mo(e, function() { r.apply(this, arguments) }, a) }, count: function(e) { var r = 0; return mo(e, function() { r++ }), r }, toArray: function(e) { return mo(e, function(r) { return r }) || [] }, only: function(e) { if (!Y0(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } };
    F.Component = ii;
    F.Fragment = Dd;
    F.Profiler = Ad;
    F.PureComponent = E0;
    F.StrictMode = Sd;
    F.Suspense = wd;
    F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nd;
    F.cloneElement = function(e, r, a) { if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var i = pl({}, e.props),
            o = e.key,
            n = e.ref,
            t = e._owner; if (r != null) { if (r.ref !== void 0 && (n = r.ref, t = O0.current), r.key !== void 0 && (o = "" + r.key), e.type && e.type.defaultProps) var c = e.type.defaultProps; for (s in r) gl.call(r, s) && !vl.hasOwnProperty(s) && (i[s] = r[s] === void 0 && c !== void 0 ? c[s] : r[s]) } var s = arguments.length - 2; if (s === 1) i.children = a;
        else if (1 < s) { c = Array(s); for (var l = 0; l < s; l++) c[l] = arguments[l + 2];
            i.children = c } return { $$typeof: ao, type: e.type, key: o, ref: n, props: i, _owner: t } };
    F.createContext = function(e) { return e = { $$typeof: Pd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Md, _context: e }, e.Consumer = e };
    F.createElement = Cl;
    F.createFactory = function(e) { var r = Cl.bind(null, e); return r.type = e, r };
    F.createRef = function() { return { current: null } };
    F.forwardRef = function(e) { return { $$typeof: kd, render: e } };
    F.isValidElement = Y0;
    F.lazy = function(e) { return { $$typeof: zd, _payload: { _status: -1, _result: e }, _init: Yd } };
    F.memo = function(e, r) { return { $$typeof: _d, type: e, compare: r === void 0 ? null : r } };
    F.startTransition = function(e) { var r = Yo.transition;
        Yo.transition = {}; try { e() } finally { Yo.transition = r } };
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
    fl.exports = F;
    var ke = fl.exports;
    const Rd = ll(ke);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var Fd = ke,
        bd = Symbol.for("react.element"),
        Id = Symbol.for("react.fragment"),
        jd = Object.prototype.hasOwnProperty,
        Vd = Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        Bd = { key: !0, ref: !0, __self: !0, __source: !0 };

    function Ll(e, r, a) { var i, o = {},
            n = null,
            t = null;
        a !== void 0 && (n = "" + a), r.key !== void 0 && (n = "" + r.key), r.ref !== void 0 && (t = r.ref); for (i in r) jd.call(r, i) && !Bd.hasOwnProperty(i) && (o[i] = r[i]); if (e && e.defaultProps)
            for (i in r = e.defaultProps, r) o[i] === void 0 && (o[i] = r[i]); return { $$typeof: bd, type: e, key: n, ref: t, props: o, _owner: Vd.current } }
    Mn.Fragment = Id;
    Mn.jsx = Ll;
    Mn.jsxs = Ll;
    ul.exports = Mn;
    var p = ul.exports,
        Et = {},
        yl = { exports: {} },
        Fe = {},
        xl = { exports: {} },
        Dl = {};
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
        function r(k, O) { var N = k.length;
            k.push(O);
            e: for (; 0 < N;) { var oe = N - 1 >>> 1,
                    fe = k[oe]; if (0 < o(fe, O)) k[oe] = O, k[N] = fe, N = oe;
                else break e } }

        function a(k) { return k.length === 0 ? null : k[0] }

        function i(k) { if (k.length === 0) return null; var O = k[0],
                N = k.pop(); if (N !== O) { k[0] = N;
                e: for (var oe = 0, fe = k.length, fo = fe >>> 1; oe < fo;) { var oa = 2 * (oe + 1) - 1,
                        et = k[oa],
                        na = oa + 1,
                        po = k[na]; if (0 > o(et, N)) na < fe && 0 > o(po, et) ? (k[oe] = po, k[na] = N, oe = na) : (k[oe] = et, k[oa] = N, oe = oa);
                    else if (na < fe && 0 > o(po, N)) k[oe] = po, k[na] = N, oe = na;
                    else break e } } return O }

        function o(k, O) { var N = k.sortIndex - O.sortIndex; return N !== 0 ? N : k.id - O.id } if (typeof performance == "object" && typeof performance.now == "function") { var n = performance;
            e.unstable_now = function() { return n.now() } } else { var t = Date,
                c = t.now();
            e.unstable_now = function() { return t.now() - c } } var s = [],
            l = [],
            h = 1,
            g = null,
            m = 3,
            D = !1,
            v = !1,
            x = !1,
            U = typeof setTimeout == "function" ? setTimeout : null,
            f = typeof clearTimeout == "function" ? clearTimeout : null,
            u = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function d(k) { for (var O = a(l); O !== null;) { if (O.callback === null) i(l);
                else if (O.startTime <= k) i(l), O.sortIndex = O.expirationTime, r(s, O);
                else break;
                O = a(l) } }

        function C(k) { if (x = !1, d(k), !v)
                if (a(s) !== null) v = !0, Zn(P);
                else { var O = a(l);
                    O !== null && Jn(C, O.startTime - k) } }

        function P(k, O) { v = !1, x && (x = !1, f(E), E = -1), D = !0; var N = m; try { for (d(O), g = a(s); g !== null && (!(g.expirationTime > O) || k && !qe());) { var oe = g.callback; if (typeof oe == "function") { g.callback = null, m = g.priorityLevel; var fe = oe(g.expirationTime <= O);
                        O = e.unstable_now(), typeof fe == "function" ? g.callback = fe : g === a(s) && i(s), d(O) } else i(s);
                    g = a(s) } if (g !== null) var fo = !0;
                else { var oa = a(l);
                    oa !== null && Jn(C, oa.startTime - O), fo = !1 } return fo } finally { g = null, m = N, D = !1 } } var w = !1,
            _ = null,
            E = -1,
            ie = 5,
            b = -1;

        function qe() { return !(e.unstable_now() - b < ie) }

        function li() { if (_ !== null) { var k = e.unstable_now();
                b = k; var O = !0; try { O = _(!0, k) } finally { O ? ui() : (w = !1, _ = null) } } else w = !1 } var ui; if (typeof u == "function") ui = function() { u(li) };
        else if (typeof MessageChannel < "u") { var $c = new MessageChannel,
                Ld = $c.port2;
            $c.port1.onmessage = li, ui = function() { Ld.postMessage(null) } } else ui = function() { U(li, 0) };

        function Zn(k) { _ = k, w || (w = !0, ui()) }

        function Jn(k, O) { E = U(function() { k(e.unstable_now()) }, O) }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(k) { k.callback = null }, e.unstable_continueExecution = function() { v || D || (v = !0, Zn(P)) }, e.unstable_forceFrameRate = function(k) { 0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ie = 0 < k ? Math.floor(1e3 / k) : 5 }, e.unstable_getCurrentPriorityLevel = function() { return m }, e.unstable_getFirstCallbackNode = function() { return a(s) }, e.unstable_next = function(k) { switch (m) {
                case 1:
                case 2:
                case 3:
                    var O = 3; break;
                default:
                    O = m } var N = m;
            m = O; try { return k() } finally { m = N } }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(k, O) { switch (k) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    k = 3 } var N = m;
            m = k; try { return O() } finally { m = N } }, e.unstable_scheduleCallback = function(k, O, N) { var oe = e.unstable_now(); switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? oe + N : oe) : N = oe, k) {
                case 1:
                    var fe = -1; break;
                case 2:
                    fe = 250; break;
                case 5:
                    fe = 1073741823; break;
                case 4:
                    fe = 1e4; break;
                default:
                    fe = 5e3 } return fe = N + fe, k = { id: h++, callback: O, priorityLevel: k, startTime: N, expirationTime: fe, sortIndex: -1 }, N > oe ? (k.sortIndex = N, r(l, k), a(s) === null && k === a(l) && (x ? (f(E), E = -1) : x = !0, Jn(C, N - oe))) : (k.sortIndex = fe, r(s, k), v || D || (v = !0, Zn(P))), k }, e.unstable_shouldYield = qe, e.unstable_wrapCallback = function(k) { var O = m; return function() { var N = m;
                m = O; try { return k.apply(this, arguments) } finally { m = N } } } })(Dl);
    xl.exports = Dl;
    var Ud = xl.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var Sl = ke,
        Re = Ud;

    function L(e) { for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 1; a < arguments.length; a++) r += "&args[]=" + encodeURIComponent(arguments[a]); return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
    var Al = new Set,
        Ni = {};

    function Da(e, r) { Xa(e, r), Xa(e + "Capture", r) }

    function Xa(e, r) { for (Ni[e] = r, e = 0; e < r.length; e++) Al.add(r[e]) }
    var kr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Tt = Object.prototype.hasOwnProperty,
        Gd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        Qc = {},
        Zc = {};

    function Hd(e) { return Tt.call(Zc, e) ? !0 : Tt.call(Qc, e) ? !1 : Gd.test(e) ? Zc[e] = !0 : (Qc[e] = !0, !1) }

    function Wd(e, r, a, i) { if (a !== null && a.type === 0) return !1; switch (typeof r) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return i ? !1 : a !== null ? !a.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1 } }

    function $d(e, r, a, i) { if (r === null || typeof r > "u" || Wd(e, r, a, i)) return !0; if (i) return !1; if (a !== null) switch (a.type) {
            case 3:
                return !r;
            case 4:
                return r === !1;
            case 5:
                return isNaN(r);
            case 6:
                return isNaN(r) || 1 > r }
        return !1 }

    function Me(e, r, a, i, o, n, t) { this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = r, this.sanitizeURL = n, this.removeEmptyString = t }
    var ge = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) { ge[e] = new Me(e, 0, !1, e, null, !1, !1) });
    [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) { var r = e[0];
        ge[r] = new Me(r, 1, !1, e[1], null, !1, !1) });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) { ge[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1) });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) { ge[e] = new Me(e, 2, !1, e, null, !1, !1) });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) { ge[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1) });
    ["checked", "multiple", "muted", "selected"].forEach(function(e) { ge[e] = new Me(e, 3, !0, e, null, !1, !1) });
    ["capture", "download"].forEach(function(e) { ge[e] = new Me(e, 4, !1, e, null, !1, !1) });
    ["cols", "rows", "size", "span"].forEach(function(e) { ge[e] = new Me(e, 6, !1, e, null, !1, !1) });
    ["rowSpan", "start"].forEach(function(e) { ge[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1) });
    var N0 = /[\-:]([a-z])/g;

    function R0(e) { return e[1].toUpperCase() }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) { var r = e.replace(N0, R0);
        ge[r] = new Me(r, 1, !1, e, null, !1, !1) });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) { var r = e.replace(N0, R0);
        ge[r] = new Me(r, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1) });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) { var r = e.replace(N0, R0);
        ge[r] = new Me(r, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1) });
    ["tabIndex", "crossOrigin"].forEach(function(e) { ge[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1) });
    ge.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    ["src", "href", "action", "formAction"].forEach(function(e) { ge[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0) });

    function F0(e, r, a, i) { var o = ge.hasOwnProperty(r) ? ge[r] : null;
        (o !== null ? o.type !== 0 : i || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && ($d(r, a, o, i) && (a = null), i || o === null ? Hd(r) && (a === null ? e.removeAttribute(r) : e.setAttribute(r, "" + a)) : o.mustUseProperty ? e[o.propertyName] = a === null ? o.type === 3 ? !1 : "" : a : (r = o.attributeName, i = o.attributeNamespace, a === null ? e.removeAttribute(r) : (o = o.type, a = o === 3 || o === 4 && a === !0 ? "" : "" + a, i ? e.setAttributeNS(i, r, a) : e.setAttribute(r, a)))) }
    var Tr = Sl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        ho = Symbol.for("react.element"),
        wa = Symbol.for("react.portal"),
        _a = Symbol.for("react.fragment"),
        b0 = Symbol.for("react.strict_mode"),
        Ot = Symbol.for("react.profiler"),
        Ml = Symbol.for("react.provider"),
        Pl = Symbol.for("react.context"),
        I0 = Symbol.for("react.forward_ref"),
        Yt = Symbol.for("react.suspense"),
        Nt = Symbol.for("react.suspense_list"),
        j0 = Symbol.for("react.memo"),
        Rr = Symbol.for("react.lazy"),
        kl = Symbol.for("react.offscreen"),
        Jc = Symbol.iterator;

    function fi(e) { return e === null || typeof e != "object" ? null : (e = Jc && e[Jc] || e["@@iterator"], typeof e == "function" ? e : null) }
    var re = Object.assign,
        at;

    function xi(e) { if (at === void 0) try { throw Error() } catch (a) { var r = a.stack.trim().match(/\n( *(at )?)/);
            at = r && r[1] || "" }
        return `
` + at + e }
    var it = !1;

    function ot(e, r) { if (!e || it) return "";
        it = !0; var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0; try { if (r)
                if (r = function() { throw Error() }, Object.defineProperty(r.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(r, []) } catch (l) { var i = l }
                    Reflect.construct(e, [], r) } else { try { r.call() } catch (l) { i = l }
                    e.call(r.prototype) }
            else { try { throw Error() } catch (l) { i = l }
                e() } } catch (l) { if (l && i && typeof l.stack == "string") { for (var o = l.stack.split(`
`), n = i.stack.split(`
`), t = o.length - 1, c = n.length - 1; 1 <= t && 0 <= c && o[t] !== n[c];) c--; for (; 1 <= t && 0 <= c; t--, c--)
                    if (o[t] !== n[c]) { if (t !== 1 || c !== 1)
                            do
                                if (t--, c--, 0 > c || o[t] !== n[c]) { var s = `
` + o[t].replace(" at new ", " at "); return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s }
                        while (1 <= t && 0 <= c); break } } } finally { it = !1, Error.prepareStackTrace = a } return (e = e ? e.displayName || e.name : "") ? xi(e) : "" }

    function Kd(e) { switch (e.tag) {
            case 5:
                return xi(e.type);
            case 16:
                return xi("Lazy");
            case 13:
                return xi("Suspense");
            case 19:
                return xi("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = ot(e.type, !1), e;
            case 11:
                return e = ot(e.type.render, !1), e;
            case 1:
                return e = ot(e.type, !0), e;
            default:
                return "" } }

    function Rt(e) { if (e == null) return null; if (typeof e == "function") return e.displayName || e.name || null; if (typeof e == "string") return e; switch (e) {
            case _a:
                return "Fragment";
            case wa:
                return "Portal";
            case Ot:
                return "Profiler";
            case b0:
                return "StrictMode";
            case Yt:
                return "Suspense";
            case Nt:
                return "SuspenseList" } if (typeof e == "object") switch (e.$$typeof) {
            case Pl:
                return (e.displayName || "Context") + ".Consumer";
            case Ml:
                return (e._context.displayName || "Context") + ".Provider";
            case I0:
                var r = e.render; return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case j0:
                return r = e.displayName || null, r !== null ? r : Rt(e.type) || "Memo";
            case Rr:
                r = e._payload, e = e._init; try { return Rt(e(r)) } catch {} }
        return null }

    function qd(e) { var r = e.type; switch (e.tag) {
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
                return Rt(r);
            case 8:
                return r === b0 ? "StrictMode" : "Mode";
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
                if (typeof r == "function") return r.displayName || r.name || null; if (typeof r == "string") return r } return null }

    function Jr(e) { switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return "" } }

    function wl(e) { var r = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (r === "checkbox" || r === "radio") }

    function Xd(e) { var r = wl(e) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(e.constructor.prototype, r),
            i = "" + e[r]; if (!e.hasOwnProperty(r) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") { var o = a.get,
                n = a.set; return Object.defineProperty(e, r, { configurable: !0, get: function() { return o.call(this) }, set: function(t) { i = "" + t, n.call(this, t) } }), Object.defineProperty(e, r, { enumerable: a.enumerable }), { getValue: function() { return i }, setValue: function(t) { i = "" + t }, stopTracking: function() { e._valueTracker = null, delete e[r] } } } }

    function go(e) { e._valueTracker || (e._valueTracker = Xd(e)) }

    function _l(e) { if (!e) return !1; var r = e._valueTracker; if (!r) return !0; var a = r.getValue(),
            i = ""; return e && (i = wl(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (r.setValue(e), !0) : !1 }

    function qo(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null; try { return e.activeElement || e.body } catch { return e.body } }

    function Ft(e, r) { var a = r.checked; return re({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: a ? ? e._wrapperState.initialChecked }) }

    function es(e, r) { var a = r.defaultValue == null ? "" : r.defaultValue,
            i = r.checked != null ? r.checked : r.defaultChecked;
        a = Jr(r.value != null ? r.value : a), e._wrapperState = { initialChecked: i, initialValue: a, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null } }

    function zl(e, r) { r = r.checked, r != null && F0(e, "checked", r, !1) }

    function bt(e, r) { zl(e, r); var a = Jr(r.value),
            i = r.type; if (a != null) i === "number" ? (a === 0 && e.value === "" || e.value != a) && (e.value = "" + a) : e.value !== "" + a && (e.value = "" + a);
        else if (i === "submit" || i === "reset") { e.removeAttribute("value"); return }
        r.hasOwnProperty("value") ? It(e, r.type, a) : r.hasOwnProperty("defaultValue") && It(e, r.type, Jr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (e.defaultChecked = !!r.defaultChecked) }

    function rs(e, r, a) { if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) { var i = r.type; if (!(i !== "submit" && i !== "reset" || r.value !== void 0 && r.value !== null)) return;
            r = "" + e._wrapperState.initialValue, a || r === e.value || (e.value = r), e.defaultValue = r }
        a = e.name, a !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, a !== "" && (e.name = a) }

    function It(e, r, a) {
        (r !== "number" || qo(e.ownerDocument) !== e) && (a == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + a && (e.defaultValue = "" + a)) }
    var Di = Array.isArray;

    function Va(e, r, a, i) { if (e = e.options, r) { r = {}; for (var o = 0; o < a.length; o++) r["$" + a[o]] = !0; for (a = 0; a < e.length; a++) o = r.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0) } else { for (a = "" + Jr(a), r = null, o = 0; o < e.length; o++) { if (e[o].value === a) { e[o].selected = !0, i && (e[o].defaultSelected = !0); return }
                r !== null || e[o].disabled || (r = e[o]) }
            r !== null && (r.selected = !0) } }

    function jt(e, r) { if (r.dangerouslySetInnerHTML != null) throw Error(L(91)); return re({}, r, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

    function as(e, r) { var a = r.value; if (a == null) { if (a = r.children, r = r.defaultValue, a != null) { if (r != null) throw Error(L(92)); if (Di(a)) { if (1 < a.length) throw Error(L(93));
                    a = a[0] }
                r = a }
            r == null && (r = ""), a = r }
        e._wrapperState = { initialValue: Jr(a) } }

    function El(e, r) { var a = Jr(r.value),
            i = Jr(r.defaultValue);
        a != null && (a = "" + a, a !== e.value && (e.value = a), r.defaultValue == null && e.defaultValue !== a && (e.defaultValue = a)), i != null && (e.defaultValue = "" + i) }

    function is(e) { var r = e.textContent;
        r === e._wrapperState.initialValue && r !== "" && r !== null && (e.value = r) }

    function Tl(e) { switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml" } }

    function Vt(e, r) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Tl(r) : e === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e }
    var vo, Ol = function(e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, a, i, o) { MSApp.execUnsafeLocalFunction(function() { return e(r, a, i, o) }) } : e }(function(e, r) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = r;
        else { for (vo = vo || document.createElement("div"), vo.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = vo.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; r.firstChild;) e.appendChild(r.firstChild) } });

    function Ri(e, r) { if (r) { var a = e.firstChild; if (a && a === e.lastChild && a.nodeType === 3) { a.nodeValue = r; return } }
        e.textContent = r }
    var Mi = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
        Qd = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Mi).forEach(function(e) { Qd.forEach(function(r) { r = r + e.charAt(0).toUpperCase() + e.substring(1), Mi[r] = Mi[e] }) });

    function Yl(e, r, a) { return r == null || typeof r == "boolean" || r === "" ? "" : a || typeof r != "number" || r === 0 || Mi.hasOwnProperty(e) && Mi[e] ? ("" + r).trim() : r + "px" }

    function Nl(e, r) { e = e.style; for (var a in r)
            if (r.hasOwnProperty(a)) { var i = a.indexOf("--") === 0,
                    o = Yl(a, r[a], i);
                a === "float" && (a = "cssFloat"), i ? e.setProperty(a, o) : e[a] = o } }
    var Zd = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

    function Bt(e, r) { if (r) { if (Zd[e] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(L(137, e)); if (r.dangerouslySetInnerHTML != null) { if (r.children != null) throw Error(L(60)); if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(L(61)) } if (r.style != null && typeof r.style != "object") throw Error(L(62)) } }

    function Ut(e, r) { if (e.indexOf("-") === -1) return typeof r.is == "string"; switch (e) {
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
                return !0 } }
    var Gt = null;

    function V0(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e }
    var Ht = null,
        Ba = null,
        Ua = null;

    function os(e) { if (e = no(e)) { if (typeof Ht != "function") throw Error(L(280)); var r = e.stateNode;
            r && (r = zn(r), Ht(e.stateNode, e.type, r)) } }

    function Rl(e) { Ba ? Ua ? Ua.push(e) : Ua = [e] : Ba = e }

    function Fl() { if (Ba) { var e = Ba,
                r = Ua; if (Ua = Ba = null, os(e), r)
                for (e = 0; e < r.length; e++) os(r[e]) } }

    function bl(e, r) { return e(r) }

    function Il() {}
    var nt = !1;

    function jl(e, r, a) { if (nt) return e(r, a);
        nt = !0; try { return bl(e, r, a) } finally { nt = !1, (Ba !== null || Ua !== null) && (Il(), Fl()) } }

    function Fi(e, r) { var a = e.stateNode; if (a === null) return null; var i = zn(a); if (i === null) return null;
        a = i[r];
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
                (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i; break e;
            default:
                e = !1 }
        if (e) return null; if (a && typeof a != "function") throw Error(L(231, r, typeof a)); return a }
    var Wt = !1;
    if (kr) try { var di = {};
        Object.defineProperty(di, "passive", { get: function() { Wt = !0 } }), window.addEventListener("test", di, di), window.removeEventListener("test", di, di) } catch { Wt = !1 }

    function Jd(e, r, a, i, o, n, t, c, s) { var l = Array.prototype.slice.call(arguments, 3); try { r.apply(a, l) } catch (h) { this.onError(h) } }
    var Pi = !1,
        Xo = null,
        Qo = !1,
        $t = null,
        e2 = { onError: function(e) { Pi = !0, Xo = e } };

    function r2(e, r, a, i, o, n, t, c, s) { Pi = !1, Xo = null, Jd.apply(e2, arguments) }

    function a2(e, r, a, i, o, n, t, c, s) { if (r2.apply(this, arguments), Pi) { if (Pi) { var l = Xo;
                Pi = !1, Xo = null } else throw Error(L(198));
            Qo || (Qo = !0, $t = l) } }

    function Sa(e) { var r = e,
            a = e; if (e.alternate)
            for (; r.return;) r = r.return;
        else { e = r;
            do r = e, r.flags & 4098 && (a = r.return), e = r.return; while (e) } return r.tag === 3 ? a : null }

    function Vl(e) { if (e.tag === 13) { var r = e.memoizedState; if (r === null && (e = e.alternate, e !== null && (r = e.memoizedState)), r !== null) return r.dehydrated } return null }

    function ns(e) { if (Sa(e) !== e) throw Error(L(188)) }

    function i2(e) { var r = e.alternate; if (!r) { if (r = Sa(e), r === null) throw Error(L(188)); return r !== e ? null : e } for (var a = e, i = r;;) { var o = a.return; if (o === null) break; var n = o.alternate; if (n === null) { if (i = o.return, i !== null) { a = i; continue } break } if (o.child === n.child) { for (n = o.child; n;) { if (n === a) return ns(o), e; if (n === i) return ns(o), r;
                    n = n.sibling } throw Error(L(188)) } if (a.return !== i.return) a = o, i = n;
            else { for (var t = !1, c = o.child; c;) { if (c === a) { t = !0, a = o, i = n; break } if (c === i) { t = !0, i = o, a = n; break }
                    c = c.sibling } if (!t) { for (c = n.child; c;) { if (c === a) { t = !0, a = n, i = o; break } if (c === i) { t = !0, i = n, a = o; break }
                        c = c.sibling } if (!t) throw Error(L(189)) } } if (a.alternate !== i) throw Error(L(190)) } if (a.tag !== 3) throw Error(L(188)); return a.stateNode.current === a ? e : r }

    function Bl(e) { return e = i2(e), e !== null ? Ul(e) : null }

    function Ul(e) { if (e.tag === 5 || e.tag === 6) return e; for (e = e.child; e !== null;) { var r = Ul(e); if (r !== null) return r;
            e = e.sibling } return null }
    var Gl = Re.unstable_scheduleCallback,
        ts = Re.unstable_cancelCallback,
        o2 = Re.unstable_shouldYield,
        n2 = Re.unstable_requestPaint,
        te = Re.unstable_now,
        t2 = Re.unstable_getCurrentPriorityLevel,
        B0 = Re.unstable_ImmediatePriority,
        Hl = Re.unstable_UserBlockingPriority,
        Zo = Re.unstable_NormalPriority,
        c2 = Re.unstable_LowPriority,
        Wl = Re.unstable_IdlePriority,
        Pn = null,
        fr = null;

    function s2(e) { if (fr && typeof fr.onCommitFiberRoot == "function") try { fr.onCommitFiberRoot(Pn, e, void 0, (e.current.flags & 128) === 128) } catch {} }
    var rr = Math.clz32 ? Math.clz32 : f2,
        l2 = Math.log,
        u2 = Math.LN2;

    function f2(e) { return e >>>= 0, e === 0 ? 32 : 31 - (l2(e) / u2 | 0) | 0 }
    var Co = 64,
        Lo = 4194304;

    function Si(e) { switch (e & -e) {
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
                return e } }

    function Jo(e, r) { var a = e.pendingLanes; if (a === 0) return 0; var i = 0,
            o = e.suspendedLanes,
            n = e.pingedLanes,
            t = a & 268435455; if (t !== 0) { var c = t & ~o;
            c !== 0 ? i = Si(c) : (n &= t, n !== 0 && (i = Si(n))) } else t = a & ~o, t !== 0 ? i = Si(t) : n !== 0 && (i = Si(n)); if (i === 0) return 0; if (r !== 0 && r !== i && !(r & o) && (o = i & -i, n = r & -r, o >= n || o === 16 && (n & 4194240) !== 0)) return r; if (i & 4 && (i |= a & 16), r = e.entangledLanes, r !== 0)
            for (e = e.entanglements, r &= i; 0 < r;) a = 31 - rr(r), o = 1 << a, i |= e[a], r &= ~o; return i }

    function d2(e, r) { switch (e) {
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
                return -1 } }

    function p2(e, r) { for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, n = e.pendingLanes; 0 < n;) { var t = 31 - rr(n),
                c = 1 << t,
                s = o[t];
            s === -1 ? (!(c & a) || c & i) && (o[t] = d2(c, r)) : s <= r && (e.expiredLanes |= c), n &= ~c } }

    function Kt(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0 }

    function $l() { var e = Co; return Co <<= 1, !(Co & 4194240) && (Co = 64), e }

    function tt(e) { for (var r = [], a = 0; 31 > a; a++) r.push(e); return r }

    function io(e, r, a) { e.pendingLanes |= r, r !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, r = 31 - rr(r), e[r] = a }

    function m2(e, r) { var a = e.pendingLanes & ~r;
        e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= r, e.mutableReadLanes &= r, e.entangledLanes &= r, r = e.entanglements; var i = e.eventTimes; for (e = e.expirationTimes; 0 < a;) { var o = 31 - rr(a),
                n = 1 << o;
            r[o] = 0, i[o] = -1, e[o] = -1, a &= ~n } }

    function U0(e, r) { var a = e.entangledLanes |= r; for (e = e.entanglements; a;) { var i = 31 - rr(a),
                o = 1 << i;
            o & r | e[i] & r && (e[i] |= r), a &= ~o } }
    var G = 0;

    function Kl(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1 }
    var ql, G0, Xl, Ql, Zl, qt = !1,
        yo = [],
        Gr = null,
        Hr = null,
        Wr = null,
        bi = new Map,
        Ii = new Map,
        br = [],
        h2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function cs(e, r) { switch (e) {
            case "focusin":
            case "focusout":
                Gr = null; break;
            case "dragenter":
            case "dragleave":
                Hr = null; break;
            case "mouseover":
            case "mouseout":
                Wr = null; break;
            case "pointerover":
            case "pointerout":
                bi.delete(r.pointerId); break;
            case "gotpointercapture":
            case "lostpointercapture":
                Ii.delete(r.pointerId) } }

    function pi(e, r, a, i, o, n) { return e === null || e.nativeEvent !== n ? (e = { blockedOn: r, domEventName: a, eventSystemFlags: i, nativeEvent: n, targetContainers: [o] }, r !== null && (r = no(r), r !== null && G0(r)), e) : (e.eventSystemFlags |= i, r = e.targetContainers, o !== null && r.indexOf(o) === -1 && r.push(o), e) }

    function g2(e, r, a, i, o) { switch (r) {
            case "focusin":
                return Gr = pi(Gr, e, r, a, i, o), !0;
            case "dragenter":
                return Hr = pi(Hr, e, r, a, i, o), !0;
            case "mouseover":
                return Wr = pi(Wr, e, r, a, i, o), !0;
            case "pointerover":
                var n = o.pointerId; return bi.set(n, pi(bi.get(n) || null, e, r, a, i, o)), !0;
            case "gotpointercapture":
                return n = o.pointerId, Ii.set(n, pi(Ii.get(n) || null, e, r, a, i, o)), !0 } return !1 }

    function Jl(e) { var r = ua(e.target); if (r !== null) { var a = Sa(r); if (a !== null) { if (r = a.tag, r === 13) { if (r = Vl(a), r !== null) { e.blockedOn = r, Zl(e.priority, function() { Xl(a) }); return } } else if (r === 3 && a.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null; return } } }
        e.blockedOn = null }

    function No(e) { if (e.blockedOn !== null) return !1; for (var r = e.targetContainers; 0 < r.length;) { var a = Xt(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent); if (a === null) { a = e.nativeEvent; var i = new a.constructor(a.type, a);
                Gt = i, a.target.dispatchEvent(i), Gt = null } else return r = no(a), r !== null && G0(r), e.blockedOn = a, !1;
            r.shift() } return !0 }

    function ss(e, r, a) { No(e) && a.delete(r) }

    function v2() { qt = !1, Gr !== null && No(Gr) && (Gr = null), Hr !== null && No(Hr) && (Hr = null), Wr !== null && No(Wr) && (Wr = null), bi.forEach(ss), Ii.forEach(ss) }

    function mi(e, r) { e.blockedOn === r && (e.blockedOn = null, qt || (qt = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, v2))) }

    function ji(e) {
        function r(o) { return mi(o, e) } if (0 < yo.length) { mi(yo[0], e); for (var a = 1; a < yo.length; a++) { var i = yo[a];
                i.blockedOn === e && (i.blockedOn = null) } } for (Gr !== null && mi(Gr, e), Hr !== null && mi(Hr, e), Wr !== null && mi(Wr, e), bi.forEach(r), Ii.forEach(r), a = 0; a < br.length; a++) i = br[a], i.blockedOn === e && (i.blockedOn = null); for (; 0 < br.length && (a = br[0], a.blockedOn === null);) Jl(a), a.blockedOn === null && br.shift() }
    var Ga = Tr.ReactCurrentBatchConfig,
        en = !0;

    function C2(e, r, a, i) { var o = G,
            n = Ga.transition;
        Ga.transition = null; try { G = 1, H0(e, r, a, i) } finally { G = o, Ga.transition = n } }

    function L2(e, r, a, i) { var o = G,
            n = Ga.transition;
        Ga.transition = null; try { G = 4, H0(e, r, a, i) } finally { G = o, Ga.transition = n } }

    function H0(e, r, a, i) { if (en) { var o = Xt(e, r, a, i); if (o === null) gt(e, r, i, rn, a), cs(e, i);
            else if (g2(o, e, r, a, i)) i.stopPropagation();
            else if (cs(e, i), r & 4 && -1 < h2.indexOf(e)) { for (; o !== null;) { var n = no(o); if (n !== null && ql(n), n = Xt(e, r, a, i), n === null && gt(e, r, i, rn, a), n === o) break;
                    o = n }
                o !== null && i.stopPropagation() } else gt(e, r, i, null, a) } }
    var rn = null;

    function Xt(e, r, a, i) { if (rn = null, e = V0(i), e = ua(e), e !== null)
            if (r = Sa(e), r === null) e = null;
            else if (a = r.tag, a === 13) { if (e = Vl(r), e !== null) return e;
            e = null } else if (a === 3) { if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
            e = null } else r !== e && (e = null); return rn = e, null }

    function eu(e) { switch (e) {
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
                switch (t2()) {
                    case B0:
                        return 1;
                    case Hl:
                        return 4;
                    case Zo:
                    case c2:
                        return 16;
                    case Wl:
                        return 536870912;
                    default:
                        return 16 }
            default:
                return 16 } }
    var jr = null,
        W0 = null,
        Ro = null;

    function ru() { if (Ro) return Ro; var e, r = W0,
            a = r.length,
            i, o = "value" in jr ? jr.value : jr.textContent,
            n = o.length; for (e = 0; e < a && r[e] === o[e]; e++); var t = a - e; for (i = 1; i <= t && r[a - i] === o[n - i]; i++); return Ro = o.slice(e, 1 < i ? 1 - i : void 0) }

    function Fo(e) { var r = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && r === 13 && (e = 13)) : e = r, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 }

    function xo() { return !0 }

    function ls() { return !1 }

    function be(e) {
        function r(a, i, o, n, t) { this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = n, this.target = t, this.currentTarget = null; for (var c in e) e.hasOwnProperty(c) && (a = e[c], this[c] = a ? a(n) : n[c]); return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? xo : ls, this.isPropagationStopped = ls, this } return re(r.prototype, { preventDefault: function() { this.defaultPrevented = !0; var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xo) }, stopPropagation: function() { var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xo) }, persist: function() {}, isPersistent: xo }), r }
    var oi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
        $0 = be(oi),
        oo = re({}, oi, { view: 0, detail: 0 }),
        y2 = be(oo),
        ct, st, hi, kn = re({}, oo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: K0, button: 0, buttons: 0, relatedTarget: function(e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== hi && (hi && e.type === "mousemove" ? (ct = e.screenX - hi.screenX, st = e.screenY - hi.screenY) : st = ct = 0, hi = e), ct) }, movementY: function(e) { return "movementY" in e ? e.movementY : st } }),
        us = be(kn),
        x2 = re({}, kn, { dataTransfer: 0 }),
        D2 = be(x2),
        S2 = re({}, oo, { relatedTarget: 0 }),
        lt = be(S2),
        A2 = re({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        M2 = be(A2),
        P2 = re({}, oi, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
        k2 = be(P2),
        w2 = re({}, oi, { data: 0 }),
        fs = be(w2),
        _2 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
        z2 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
        E2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

    function T2(e) { var r = this.nativeEvent; return r.getModifierState ? r.getModifierState(e) : (e = E2[e]) ? !!r[e] : !1 }

    function K0() { return T2 }
    var O2 = re({}, oo, { key: function(e) { if (e.key) { var r = _2[e.key] || e.key; if (r !== "Unidentified") return r } return e.type === "keypress" ? (e = Fo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? z2[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: K0, charCode: function(e) { return e.type === "keypress" ? Fo(e) : 0 }, keyCode: function(e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function(e) { return e.type === "keypress" ? Fo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }),
        Y2 = be(O2),
        N2 = re({}, kn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
        ds = be(N2),
        R2 = re({}, oo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: K0 }),
        F2 = be(R2),
        b2 = re({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        I2 = be(b2),
        j2 = re({}, kn, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
        V2 = be(j2),
        B2 = [9, 13, 27, 32],
        q0 = kr && "CompositionEvent" in window,
        ki = null;
    kr && "documentMode" in document && (ki = document.documentMode);
    var U2 = kr && "TextEvent" in window && !ki,
        au = kr && (!q0 || ki && 8 < ki && 11 >= ki),
        ps = " ",
        ms = !1;

    function iu(e, r) { switch (e) {
            case "keyup":
                return B2.indexOf(r.keyCode) !== -1;
            case "keydown":
                return r.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1 } }

    function ou(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null }
    var za = !1;

    function G2(e, r) { switch (e) {
            case "compositionend":
                return ou(r);
            case "keypress":
                return r.which !== 32 ? null : (ms = !0, ps);
            case "textInput":
                return e = r.data, e === ps && ms ? null : e;
            default:
                return null } }

    function H2(e, r) { if (za) return e === "compositionend" || !q0 && iu(e, r) ? (e = ru(), Ro = W0 = jr = null, za = !1, e) : null; switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) { if (r.char && 1 < r.char.length) return r.char; if (r.which) return String.fromCharCode(r.which) } return null;
            case "compositionend":
                return au && r.locale !== "ko" ? null : r.data;
            default:
                return null } }
    var W2 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

    function hs(e) { var r = e && e.nodeName && e.nodeName.toLowerCase(); return r === "input" ? !!W2[e.type] : r === "textarea" }

    function nu(e, r, a, i) { Rl(i), r = an(r, "onChange"), 0 < r.length && (a = new $0("onChange", "change", null, a, i), e.push({ event: a, listeners: r })) }
    var wi = null,
        Vi = null;

    function $2(e) { gu(e, 0) }

    function wn(e) { var r = Oa(e); if (_l(r)) return e }

    function K2(e, r) { if (e === "change") return r }
    var tu = !1;
    if (kr) { var ut; if (kr) { var ft = "oninput" in document; if (!ft) { var gs = document.createElement("div");
                gs.setAttribute("oninput", "return;"), ft = typeof gs.oninput == "function" }
            ut = ft } else ut = !1;
        tu = ut && (!document.documentMode || 9 < document.documentMode) }

    function vs() { wi && (wi.detachEvent("onpropertychange", cu), Vi = wi = null) }

    function cu(e) { if (e.propertyName === "value" && wn(Vi)) { var r = [];
            nu(r, Vi, e, V0(e)), jl($2, r) } }

    function q2(e, r, a) { e === "focusin" ? (vs(), wi = r, Vi = a, wi.attachEvent("onpropertychange", cu)) : e === "focusout" && vs() }

    function X2(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return wn(Vi) }

    function Q2(e, r) { if (e === "click") return wn(r) }

    function Z2(e, r) { if (e === "input" || e === "change") return wn(r) }

    function J2(e, r) { return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r }
    var ir = typeof Object.is == "function" ? Object.is : J2;

    function Bi(e, r) { if (ir(e, r)) return !0; if (typeof e != "object" || e === null || typeof r != "object" || r === null) return !1; var a = Object.keys(e),
            i = Object.keys(r); if (a.length !== i.length) return !1; for (i = 0; i < a.length; i++) { var o = a[i]; if (!Tt.call(r, o) || !ir(e[o], r[o])) return !1 } return !0 }

    function Cs(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

    function Ls(e, r) { var a = Cs(e);
        e = 0; for (var i; a;) { if (a.nodeType === 3) { if (i = e + a.textContent.length, e <= r && i >= r) return { node: a, offset: r - e };
                e = i }
            e: { for (; a;) { if (a.nextSibling) { a = a.nextSibling; break e }
                    a = a.parentNode }
                a = void 0 }
            a = Cs(a) } }

    function su(e, r) { return e && r ? e === r ? !0 : e && e.nodeType === 3 ? !1 : r && r.nodeType === 3 ? su(e, r.parentNode) : "contains" in e ? e.contains(r) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(r) & 16) : !1 : !1 }

    function lu() { for (var e = window, r = qo(); r instanceof e.HTMLIFrameElement;) { try { var a = typeof r.contentWindow.location.href == "string" } catch { a = !1 } if (a) e = r.contentWindow;
            else break;
            r = qo(e.document) } return r }

    function X0(e) { var r = e && e.nodeName && e.nodeName.toLowerCase(); return r && (r === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || r === "textarea" || e.contentEditable === "true") }

    function e1(e) { var r = lu(),
            a = e.focusedElem,
            i = e.selectionRange; if (r !== a && a && a.ownerDocument && su(a.ownerDocument.documentElement, a)) { if (i !== null && X0(a)) { if (r = i.start, e = i.end, e === void 0 && (e = r), "selectionStart" in a) a.selectionStart = r, a.selectionEnd = Math.min(e, a.value.length);
                else if (e = (r = a.ownerDocument || document) && r.defaultView || window, e.getSelection) { e = e.getSelection(); var o = a.textContent.length,
                        n = Math.min(i.start, o);
                    i = i.end === void 0 ? n : Math.min(i.end, o), !e.extend && n > i && (o = i, i = n, n = o), o = Ls(a, n); var t = Ls(a, i);
                    o && t && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== t.node || e.focusOffset !== t.offset) && (r = r.createRange(), r.setStart(o.node, o.offset), e.removeAllRanges(), n > i ? (e.addRange(r), e.extend(t.node, t.offset)) : (r.setEnd(t.node, t.offset), e.addRange(r))) } } for (r = [], e = a; e = e.parentNode;) e.nodeType === 1 && r.push({ element: e, left: e.scrollLeft, top: e.scrollTop }); for (typeof a.focus == "function" && a.focus(), a = 0; a < r.length; a++) e = r[a], e.element.scrollLeft = e.left, e.element.scrollTop = e.top } }
    var r1 = kr && "documentMode" in document && 11 >= document.documentMode,
        Ea = null,
        Qt = null,
        _i = null,
        Zt = !1;

    function ys(e, r, a) { var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Zt || Ea == null || Ea !== qo(i) || (i = Ea, "selectionStart" in i && X0(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), _i && Bi(_i, i) || (_i = i, i = an(Qt, "onSelect"), 0 < i.length && (r = new $0("onSelect", "select", null, r, a), e.push({ event: r, listeners: i }), r.target = Ea))) }

    function Do(e, r) { var a = {}; return a[e.toLowerCase()] = r.toLowerCase(), a["Webkit" + e] = "webkit" + r, a["Moz" + e] = "moz" + r, a }
    var Ta = { animationend: Do("Animation", "AnimationEnd"), animationiteration: Do("Animation", "AnimationIteration"), animationstart: Do("Animation", "AnimationStart"), transitionend: Do("Transition", "TransitionEnd") },
        dt = {},
        uu = {};
    kr && (uu = document.createElement("div").style, "AnimationEvent" in window || (delete Ta.animationend.animation, delete Ta.animationiteration.animation, delete Ta.animationstart.animation), "TransitionEvent" in window || delete Ta.transitionend.transition);

    function _n(e) { if (dt[e]) return dt[e]; if (!Ta[e]) return e; var r = Ta[e],
            a; for (a in r)
            if (r.hasOwnProperty(a) && a in uu) return dt[e] = r[a];
        return e }
    var fu = _n("animationend"),
        du = _n("animationiteration"),
        pu = _n("animationstart"),
        mu = _n("transitionend"),
        hu = new Map,
        xs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function ra(e, r) { hu.set(e, r), Da(r, [e]) }
    for (var pt = 0; pt < xs.length; pt++) { var mt = xs[pt],
            a1 = mt.toLowerCase(),
            i1 = mt[0].toUpperCase() + mt.slice(1);
        ra(a1, "on" + i1) }
    ra(fu, "onAnimationEnd");
    ra(du, "onAnimationIteration");
    ra(pu, "onAnimationStart");
    ra("dblclick", "onDoubleClick");
    ra("focusin", "onFocus");
    ra("focusout", "onBlur");
    ra(mu, "onTransitionEnd");
    Xa("onMouseEnter", ["mouseout", "mouseover"]);
    Xa("onMouseLeave", ["mouseout", "mouseover"]);
    Xa("onPointerEnter", ["pointerout", "pointerover"]);
    Xa("onPointerLeave", ["pointerout", "pointerover"]);
    Da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    Da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        o1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));

    function Ds(e, r, a) { var i = e.type || "unknown-event";
        e.currentTarget = a, a2(i, r, void 0, e), e.currentTarget = null }

    function gu(e, r) { r = (r & 4) !== 0; for (var a = 0; a < e.length; a++) { var i = e[a],
                o = i.event;
            i = i.listeners;
            e: { var n = void 0; if (r)
                    for (var t = i.length - 1; 0 <= t; t--) { var c = i[t],
                            s = c.instance,
                            l = c.currentTarget; if (c = c.listener, s !== n && o.isPropagationStopped()) break e;
                        Ds(o, c, l), n = s } else
                        for (t = 0; t < i.length; t++) { if (c = i[t], s = c.instance, l = c.currentTarget, c = c.listener, s !== n && o.isPropagationStopped()) break e;
                            Ds(o, c, l), n = s } } } if (Qo) throw e = $t, Qo = !1, $t = null, e }

    function $(e, r) { var a = r[i0];
        a === void 0 && (a = r[i0] = new Set); var i = e + "__bubble";
        a.has(i) || (vu(r, e, 2, !1), a.add(i)) }

    function ht(e, r, a) { var i = 0;
        r && (i |= 4), vu(a, e, i, r) }
    var So = "_reactListening" + Math.random().toString(36).slice(2);

    function Ui(e) { if (!e[So]) { e[So] = !0, Al.forEach(function(a) { a !== "selectionchange" && (o1.has(a) || ht(a, !1, e), ht(a, !0, e)) }); var r = e.nodeType === 9 ? e : e.ownerDocument;
            r === null || r[So] || (r[So] = !0, ht("selectionchange", !1, r)) } }

    function vu(e, r, a, i) { switch (eu(r)) {
            case 1:
                var o = C2; break;
            case 4:
                o = L2; break;
            default:
                o = H0 }
        a = o.bind(null, r, a, e), o = void 0, !Wt || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(r, a, { capture: !0, passive: o }) : e.addEventListener(r, a, !0) : o !== void 0 ? e.addEventListener(r, a, { passive: o }) : e.addEventListener(r, a, !1) }

    function gt(e, r, a, i, o) { var n = i; if (!(r & 1) && !(r & 2) && i !== null) e: for (;;) { if (i === null) return; var t = i.tag; if (t === 3 || t === 4) { var c = i.stateNode.containerInfo; if (c === o || c.nodeType === 8 && c.parentNode === o) break; if (t === 4)
                    for (t = i.return; t !== null;) { var s = t.tag; if ((s === 3 || s === 4) && (s = t.stateNode.containerInfo, s === o || s.nodeType === 8 && s.parentNode === o)) return;
                        t = t.return }
                for (; c !== null;) { if (t = ua(c), t === null) return; if (s = t.tag, s === 5 || s === 6) { i = n = t; continue e }
                    c = c.parentNode } }
            i = i.return }
        jl(function() { var l = n,
                h = V0(a),
                g = [];
            e: { var m = hu.get(e); if (m !== void 0) { var D = $0,
                        v = e; switch (e) {
                        case "keypress":
                            if (Fo(a) === 0) break e;
                        case "keydown":
                        case "keyup":
                            D = Y2; break;
                        case "focusin":
                            v = "focus", D = lt; break;
                        case "focusout":
                            v = "blur", D = lt; break;
                        case "beforeblur":
                        case "afterblur":
                            D = lt; break;
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
                            D = us; break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            D = D2; break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            D = F2; break;
                        case fu:
                        case du:
                        case pu:
                            D = M2; break;
                        case mu:
                            D = I2; break;
                        case "scroll":
                            D = y2; break;
                        case "wheel":
                            D = V2; break;
                        case "copy":
                        case "cut":
                        case "paste":
                            D = k2; break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            D = ds } var x = (r & 4) !== 0,
                        U = !x && e === "scroll",
                        f = x ? m !== null ? m + "Capture" : null : m;
                    x = []; for (var u = l, d; u !== null;) { d = u; var C = d.stateNode; if (d.tag === 5 && C !== null && (d = C, f !== null && (C = Fi(u, f), C != null && x.push(Gi(u, C, d)))), U) break;
                        u = u.return }
                    0 < x.length && (m = new D(m, v, null, a, h), g.push({ event: m, listeners: x })) } }
            if (!(r & 7)) { e: { if (m = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", m && a !== Gt && (v = a.relatedTarget || a.fromElement) && (ua(v) || v[wr])) break e; if ((D || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, D ? (v = a.relatedTarget || a.toElement, D = l, v = v ? ua(v) : null, v !== null && (U = Sa(v), v !== U || v.tag !== 5 && v.tag !== 6) && (v = null)) : (D = null, v = l), D !== v)) { if (x = us, C = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (x = ds, C = "onPointerLeave", f = "onPointerEnter", u = "pointer"), U = D == null ? m : Oa(D), d = v == null ? m : Oa(v), m = new x(C, u + "leave", D, a, h), m.target = U, m.relatedTarget = d, C = null, ua(h) === l && (x = new x(f, u + "enter", v, a, h), x.target = d, x.relatedTarget = U, C = x), U = C, D && v) r: { for (x = D, f = v, u = 0, d = x; d; d = Ma(d)) u++; for (d = 0, C = f; C; C = Ma(C)) d++; for (; 0 < u - d;) x = Ma(x), u--; for (; 0 < d - u;) f = Ma(f), d--; for (; u--;) { if (x === f || f !== null && x === f.alternate) break r;
                                x = Ma(x), f = Ma(f) }
                            x = null }
                        else x = null;
                        D !== null && Ss(g, m, D, x, !1), v !== null && U !== null && Ss(g, U, v, x, !0) } }
                e: { if (m = l ? Oa(l) : window, D = m.nodeName && m.nodeName.toLowerCase(), D === "select" || D === "input" && m.type === "file") var P = K2;
                    else if (hs(m))
                        if (tu) P = Z2;
                        else { P = X2; var w = q2 }
                    else(D = m.nodeName) && D.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (P = Q2); if (P && (P = P(e, l))) { nu(g, P, a, h); break e }
                    w && w(e, m, l), e === "focusout" && (w = m._wrapperState) && w.controlled && m.type === "number" && It(m, "number", m.value) } switch (w = l ? Oa(l) : window, e) {
                    case "focusin":
                        (hs(w) || w.contentEditable === "true") && (Ea = w, Qt = l, _i = null); break;
                    case "focusout":
                        _i = Qt = Ea = null; break;
                    case "mousedown":
                        Zt = !0; break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Zt = !1, ys(g, a, h); break;
                    case "selectionchange":
                        if (r1) break;
                    case "keydown":
                    case "keyup":
                        ys(g, a, h) } var _; if (q0) e: { switch (e) {
                        case "compositionstart":
                            var E = "onCompositionStart"; break e;
                        case "compositionend":
                            E = "onCompositionEnd"; break e;
                        case "compositionupdate":
                            E = "onCompositionUpdate"; break e }
                    E = void 0 }
                else za ? iu(e, a) && (E = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (E = "onCompositionStart");E && (au && a.locale !== "ko" && (za || E !== "onCompositionStart" ? E === "onCompositionEnd" && za && (_ = ru()) : (jr = h, W0 = "value" in jr ? jr.value : jr.textContent, za = !0)), w = an(l, E), 0 < w.length && (E = new fs(E, e, null, a, h), g.push({ event: E, listeners: w }), _ ? E.data = _ : (_ = ou(a), _ !== null && (E.data = _)))), (_ = U2 ? G2(e, a) : H2(e, a)) && (l = an(l, "onBeforeInput"), 0 < l.length && (h = new fs("onBeforeInput", "beforeinput", null, a, h), g.push({ event: h, listeners: l }), h.data = _)) }
            gu(g, r) }) }

    function Gi(e, r, a) { return { instance: e, listener: r, currentTarget: a } }

    function an(e, r) { for (var a = r + "Capture", i = []; e !== null;) { var o = e,
                n = o.stateNode;
            o.tag === 5 && n !== null && (o = n, n = Fi(e, a), n != null && i.unshift(Gi(e, n, o)), n = Fi(e, r), n != null && i.push(Gi(e, n, o))), e = e.return } return i }

    function Ma(e) { if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5); return e || null }

    function Ss(e, r, a, i, o) { for (var n = r._reactName, t = []; a !== null && a !== i;) { var c = a,
                s = c.alternate,
                l = c.stateNode; if (s !== null && s === i) break;
            c.tag === 5 && l !== null && (c = l, o ? (s = Fi(a, n), s != null && t.unshift(Gi(a, s, c))) : o || (s = Fi(a, n), s != null && t.push(Gi(a, s, c)))), a = a.return }
        t.length !== 0 && e.push({ event: r, listeners: t }) }
    var n1 = /\r\n?/g,
        t1 = /\u0000|\uFFFD/g;

    function As(e) { return (typeof e == "string" ? e : "" + e).replace(n1, `
`).replace(t1, "") }

    function Ao(e, r, a) { if (r = As(r), As(e) !== r && a) throw Error(L(425)) }

    function on() {}
    var Jt = null,
        e0 = null;

    function r0(e, r) { return e === "textarea" || e === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null }
    var a0 = typeof setTimeout == "function" ? setTimeout : void 0,
        c1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ms = typeof Promise == "function" ? Promise : void 0,
        s1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ms < "u" ? function(e) { return Ms.resolve(null).then(e).catch(l1) } : a0;

    function l1(e) { setTimeout(function() { throw e }) }

    function vt(e, r) { var a = r,
            i = 0;
        do { var o = a.nextSibling; if (e.removeChild(a), o && o.nodeType === 8)
                if (a = o.data, a === "/$") { if (i === 0) { e.removeChild(o), ji(r); return }
                    i-- } else a !== "$" && a !== "$?" && a !== "$!" || i++;
            a = o } while (a);
        ji(r) }

    function $r(e) { for (; e != null; e = e.nextSibling) { var r = e.nodeType; if (r === 1 || r === 3) break; if (r === 8) { if (r = e.data, r === "$" || r === "$!" || r === "$?") break; if (r === "/$") return null } } return e }

    function Ps(e) { e = e.previousSibling; for (var r = 0; e;) { if (e.nodeType === 8) { var a = e.data; if (a === "$" || a === "$!" || a === "$?") { if (r === 0) return e;
                    r-- } else a === "/$" && r++ }
            e = e.previousSibling } return null }
    var ni = Math.random().toString(36).slice(2),
        lr = "__reactFiber$" + ni,
        Hi = "__reactProps$" + ni,
        wr = "__reactContainer$" + ni,
        i0 = "__reactEvents$" + ni,
        u1 = "__reactListeners$" + ni,
        f1 = "__reactHandles$" + ni;

    function ua(e) { var r = e[lr]; if (r) return r; for (var a = e.parentNode; a;) { if (r = a[wr] || a[lr]) { if (a = r.alternate, r.child !== null || a !== null && a.child !== null)
                    for (e = Ps(e); e !== null;) { if (a = e[lr]) return a;
                        e = Ps(e) }
                return r }
            e = a, a = e.parentNode } return null }

    function no(e) { return e = e[lr] || e[wr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e }

    function Oa(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode; throw Error(L(33)) }

    function zn(e) { return e[Hi] || null }
    var o0 = [],
        Ya = -1;

    function aa(e) { return { current: e } }

    function K(e) { 0 > Ya || (e.current = o0[Ya], o0[Ya] = null, Ya--) }

    function W(e, r) { Ya++, o0[Ya] = e.current, e.current = r }
    var ea = {},
        xe = aa(ea),
        ze = aa(!1),
        va = ea;

    function Qa(e, r) { var a = e.type.contextTypes; if (!a) return ea; var i = e.stateNode; if (i && i.__reactInternalMemoizedUnmaskedChildContext === r) return i.__reactInternalMemoizedMaskedChildContext; var o = {},
            n; for (n in a) o[n] = r[n]; return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = o), o }

    function Ee(e) { return e = e.childContextTypes, e != null }

    function nn() { K(ze), K(xe) }

    function ks(e, r, a) { if (xe.current !== ea) throw Error(L(168));
        W(xe, r), W(ze, a) }

    function Cu(e, r, a) { var i = e.stateNode; if (r = r.childContextTypes, typeof i.getChildContext != "function") return a;
        i = i.getChildContext(); for (var o in i)
            if (!(o in r)) throw Error(L(108, qd(e) || "Unknown", o));
        return re({}, a, i) }

    function tn(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ea, va = xe.current, W(xe, e), W(ze, ze.current), !0 }

    function ws(e, r, a) { var i = e.stateNode; if (!i) throw Error(L(169));
        a ? (e = Cu(e, r, va), i.__reactInternalMemoizedMergedChildContext = e, K(ze), K(xe), W(xe, e)) : K(ze), W(ze, a) }
    var Lr = null,
        En = !1,
        Ct = !1;

    function Lu(e) { Lr === null ? Lr = [e] : Lr.push(e) }

    function d1(e) { En = !0, Lu(e) }

    function ia() { if (!Ct && Lr !== null) { Ct = !0; var e = 0,
                r = G; try { var a = Lr; for (G = 1; e < a.length; e++) { var i = a[e];
                    do i = i(!0); while (i !== null) }
                Lr = null, En = !1 } catch (o) { throw Lr !== null && (Lr = Lr.slice(e + 1)), Gl(B0, ia), o } finally { G = r, Ct = !1 } } return null }
    var Na = [],
        Ra = 0,
        cn = null,
        sn = 0,
        je = [],
        Ve = 0,
        Ca = null,
        yr = 1,
        xr = "";

    function ca(e, r) { Na[Ra++] = sn, Na[Ra++] = cn, cn = e, sn = r }

    function yu(e, r, a) { je[Ve++] = yr, je[Ve++] = xr, je[Ve++] = Ca, Ca = e; var i = yr;
        e = xr; var o = 32 - rr(i) - 1;
        i &= ~(1 << o), a += 1; var n = 32 - rr(r) + o; if (30 < n) { var t = o - o % 5;
            n = (i & (1 << t) - 1).toString(32), i >>= t, o -= t, yr = 1 << 32 - rr(r) + o | a << o | i, xr = n + e } else yr = 1 << n | a << o | i, xr = e }

    function Q0(e) { e.return !== null && (ca(e, 1), yu(e, 1, 0)) }

    function Z0(e) { for (; e === cn;) cn = Na[--Ra], Na[Ra] = null, sn = Na[--Ra], Na[Ra] = null; for (; e === Ca;) Ca = je[--Ve], je[Ve] = null, xr = je[--Ve], je[Ve] = null, yr = je[--Ve], je[Ve] = null }
    var Ne = null,
        Ye = null,
        Z = !1,
        Je = null;

    function xu(e, r) { var a = Ue(5, null, null, 0);
        a.elementType = "DELETED", a.stateNode = r, a.return = e, r = e.deletions, r === null ? (e.deletions = [a], e.flags |= 16) : r.push(a) }

    function _s(e, r) { switch (e.tag) {
            case 5:
                var a = e.type; return r = r.nodeType !== 1 || a.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (e.stateNode = r, Ne = e, Ye = $r(r.firstChild), !0) : !1;
            case 6:
                return r = e.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (e.stateNode = r, Ne = e, Ye = null, !0) : !1;
            case 13:
                return r = r.nodeType !== 8 ? null : r, r !== null ? (a = Ca !== null ? { id: yr, overflow: xr } : null, e.memoizedState = { dehydrated: r, treeContext: a, retryLane: 1073741824 }, a = Ue(18, null, null, 0), a.stateNode = r, a.return = e, e.child = a, Ne = e, Ye = null, !0) : !1;
            default:
                return !1 } }

    function n0(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0 }

    function t0(e) { if (Z) { var r = Ye; if (r) { var a = r; if (!_s(e, r)) { if (n0(e)) throw Error(L(418));
                    r = $r(a.nextSibling); var i = Ne;
                    r && _s(e, r) ? xu(i, a) : (e.flags = e.flags & -4097 | 2, Z = !1, Ne = e) } } else { if (n0(e)) throw Error(L(418));
                e.flags = e.flags & -4097 | 2, Z = !1, Ne = e } } }

    function zs(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        Ne = e }

    function Mo(e) { if (e !== Ne) return !1; if (!Z) return zs(e), Z = !0, !1; var r; if ((r = e.tag !== 3) && !(r = e.tag !== 5) && (r = e.type, r = r !== "head" && r !== "body" && !r0(e.type, e.memoizedProps)), r && (r = Ye)) { if (n0(e)) throw Du(), Error(L(418)); for (; r;) xu(e, r), r = $r(r.nextSibling) } if (zs(e), e.tag === 13) { if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(L(317));
            e: { for (e = e.nextSibling, r = 0; e;) { if (e.nodeType === 8) { var a = e.data; if (a === "/$") { if (r === 0) { Ye = $r(e.nextSibling); break e }
                            r-- } else a !== "$" && a !== "$!" && a !== "$?" || r++ }
                    e = e.nextSibling }
                Ye = null } } else Ye = Ne ? $r(e.stateNode.nextSibling) : null; return !0 }

    function Du() { for (var e = Ye; e;) e = $r(e.nextSibling) }

    function Za() { Ye = Ne = null, Z = !1 }

    function J0(e) { Je === null ? Je = [e] : Je.push(e) }
    var p1 = Tr.ReactCurrentBatchConfig;

    function Qe(e, r) { if (e && e.defaultProps) { r = re({}, r), e = e.defaultProps; for (var a in e) r[a] === void 0 && (r[a] = e[a]); return r } return r }
    var ln = aa(null),
        un = null,
        Fa = null,
        ec = null;

    function rc() { ec = Fa = un = null }

    function ac(e) { var r = ln.current;
        K(ln), e._currentValue = r }

    function c0(e, r, a) { for (; e !== null;) { var i = e.alternate; if ((e.childLanes & r) !== r ? (e.childLanes |= r, i !== null && (i.childLanes |= r)) : i !== null && (i.childLanes & r) !== r && (i.childLanes |= r), e === a) break;
            e = e.return } }

    function Ha(e, r) { un = e, ec = Fa = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & r && (_e = !0), e.firstContext = null) }

    function He(e) { var r = e._currentValue; if (ec !== e)
            if (e = { context: e, memoizedValue: r, next: null }, Fa === null) { if (un === null) throw Error(L(308));
                Fa = e, un.dependencies = { lanes: 0, firstContext: e } } else Fa = Fa.next = e;
        return r }
    var fa = null;

    function ic(e) { fa === null ? fa = [e] : fa.push(e) }

    function Su(e, r, a, i) { var o = r.interleaved; return o === null ? (a.next = a, ic(r)) : (a.next = o.next, o.next = a), r.interleaved = a, _r(e, i) }

    function _r(e, r) { e.lanes |= r; var a = e.alternate; for (a !== null && (a.lanes |= r), a = e, e = e.return; e !== null;) e.childLanes |= r, a = e.alternate, a !== null && (a.childLanes |= r), a = e, e = e.return; return a.tag === 3 ? a.stateNode : null }
    var Fr = !1;

    function oc(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

    function Au(e, r) { e = e.updateQueue, r.updateQueue === e && (r.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

    function Ar(e, r) { return { eventTime: e, lane: r, tag: 0, payload: null, callback: null, next: null } }

    function Kr(e, r, a) { var i = e.updateQueue; if (i === null) return null; if (i = i.shared, j & 2) { var o = i.pending; return o === null ? r.next = r : (r.next = o.next, o.next = r), i.pending = r, _r(e, a) } return o = i.interleaved, o === null ? (r.next = r, ic(i)) : (r.next = o.next, o.next = r), i.interleaved = r, _r(e, a) }

    function bo(e, r, a) { if (r = r.updateQueue, r !== null && (r = r.shared, (a & 4194240) !== 0)) { var i = r.lanes;
            i &= e.pendingLanes, a |= i, r.lanes = a, U0(e, a) } }

    function Es(e, r) { var a = e.updateQueue,
            i = e.alternate; if (i !== null && (i = i.updateQueue, a === i)) { var o = null,
                n = null; if (a = a.firstBaseUpdate, a !== null) { do { var t = { eventTime: a.eventTime, lane: a.lane, tag: a.tag, payload: a.payload, callback: a.callback, next: null };
                    n === null ? o = n = t : n = n.next = t, a = a.next } while (a !== null);
                n === null ? o = n = r : n = n.next = r } else o = n = r;
            a = { baseState: i.baseState, firstBaseUpdate: o, lastBaseUpdate: n, shared: i.shared, effects: i.effects }, e.updateQueue = a; return }
        e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = r : e.next = r, a.lastBaseUpdate = r }

    function fn(e, r, a, i) { var o = e.updateQueue;
        Fr = !1; var n = o.firstBaseUpdate,
            t = o.lastBaseUpdate,
            c = o.shared.pending; if (c !== null) { o.shared.pending = null; var s = c,
                l = s.next;
            s.next = null, t === null ? n = l : t.next = l, t = s; var h = e.alternate;
            h !== null && (h = h.updateQueue, c = h.lastBaseUpdate, c !== t && (c === null ? h.firstBaseUpdate = l : c.next = l, h.lastBaseUpdate = s)) } if (n !== null) { var g = o.baseState;
            t = 0, h = l = s = null, c = n;
            do { var m = c.lane,
                    D = c.eventTime; if ((i & m) === m) { h !== null && (h = h.next = { eventTime: D, lane: 0, tag: c.tag, payload: c.payload, callback: c.callback, next: null });
                    e: { var v = e,
                            x = c; switch (m = r, D = a, x.tag) {
                            case 1:
                                if (v = x.payload, typeof v == "function") { g = v.call(D, g, m); break e }
                                g = v; break e;
                            case 3:
                                v.flags = v.flags & -65537 | 128;
                            case 0:
                                if (v = x.payload, m = typeof v == "function" ? v.call(D, g, m) : v, m == null) break e;
                                g = re({}, g, m); break e;
                            case 2:
                                Fr = !0 } }
                    c.callback !== null && c.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [c] : m.push(c)) } else D = { eventTime: D, lane: m, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, h === null ? (l = h = D, s = g) : h = h.next = D, t |= m; if (c = c.next, c === null) { if (c = o.shared.pending, c === null) break;
                    m = c, c = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null } } while (!0); if (h === null && (s = g), o.baseState = s, o.firstBaseUpdate = l, o.lastBaseUpdate = h, r = o.shared.interleaved, r !== null) { o = r;
                do t |= o.lane, o = o.next; while (o !== r) } else n === null && (o.shared.lanes = 0);
            ya |= t, e.lanes = t, e.memoizedState = g } }

    function Ts(e, r, a) { if (e = r.effects, r.effects = null, e !== null)
            for (r = 0; r < e.length; r++) { var i = e[r],
                    o = i.callback; if (o !== null) { if (i.callback = null, i = a, typeof o != "function") throw Error(L(191, o));
                    o.call(i) } } }
    var Mu = new Sl.Component().refs;

    function s0(e, r, a, i) { r = e.memoizedState, a = a(i, r), a = a == null ? r : re({}, r, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a) }
    var Tn = { isMounted: function(e) { return (e = e._reactInternals) ? Sa(e) === e : !1 }, enqueueSetState: function(e, r, a) { e = e._reactInternals; var i = Se(),
                o = Xr(e),
                n = Ar(i, o);
            n.payload = r, a != null && (n.callback = a), r = Kr(e, n, o), r !== null && (ar(r, e, o, i), bo(r, e, o)) }, enqueueReplaceState: function(e, r, a) { e = e._reactInternals; var i = Se(),
                o = Xr(e),
                n = Ar(i, o);
            n.tag = 1, n.payload = r, a != null && (n.callback = a), r = Kr(e, n, o), r !== null && (ar(r, e, o, i), bo(r, e, o)) }, enqueueForceUpdate: function(e, r) { e = e._reactInternals; var a = Se(),
                i = Xr(e),
                o = Ar(a, i);
            o.tag = 2, r != null && (o.callback = r), r = Kr(e, o, i), r !== null && (ar(r, e, i, a), bo(r, e, i)) } };

    function Os(e, r, a, i, o, n, t) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, n, t) : r.prototype && r.prototype.isPureReactComponent ? !Bi(a, i) || !Bi(o, n) : !0 }

    function Pu(e, r, a) { var i = !1,
            o = ea,
            n = r.contextType; return typeof n == "object" && n !== null ? n = He(n) : (o = Ee(r) ? va : xe.current, i = r.contextTypes, n = (i = i != null) ? Qa(e, o) : ea), r = new r(a, n), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Tn, e.stateNode = r, r._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = n), r }

    function Ys(e, r, a, i) { e = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(a, i), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(a, i), r.state !== e && Tn.enqueueReplaceState(r, r.state, null) }

    function l0(e, r, a, i) { var o = e.stateNode;
        o.props = a, o.state = e.memoizedState, o.refs = Mu, oc(e); var n = r.contextType;
        typeof n == "object" && n !== null ? o.context = He(n) : (n = Ee(r) ? va : xe.current, o.context = Qa(e, n)), o.state = e.memoizedState, n = r.getDerivedStateFromProps, typeof n == "function" && (s0(e, r, n, a), o.state = e.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (r = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), r !== o.state && Tn.enqueueReplaceState(o, o.state, null), fn(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308) }

    function gi(e, r, a) { if (e = a.ref, e !== null && typeof e != "function" && typeof e != "object") { if (a._owner) { if (a = a._owner, a) { if (a.tag !== 1) throw Error(L(309)); var i = a.stateNode } if (!i) throw Error(L(147, e)); var o = i,
                    n = "" + e; return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === n ? r.ref : (r = function(t) { var c = o.refs;
                    c === Mu && (c = o.refs = {}), t === null ? delete c[n] : c[n] = t }, r._stringRef = n, r) } if (typeof e != "string") throw Error(L(284)); if (!a._owner) throw Error(L(290, e)) } return e }

    function Po(e, r) { throw e = Object.prototype.toString.call(r), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : e)) }

    function Ns(e) { var r = e._init; return r(e._payload) }

    function ku(e) {
        function r(f, u) { if (e) { var d = f.deletions;
                d === null ? (f.deletions = [u], f.flags |= 16) : d.push(u) } }

        function a(f, u) { if (!e) return null; for (; u !== null;) r(f, u), u = u.sibling; return null }

        function i(f, u) { for (f = new Map; u !== null;) u.key !== null ? f.set(u.key, u) : f.set(u.index, u), u = u.sibling; return f }

        function o(f, u) { return f = Qr(f, u), f.index = 0, f.sibling = null, f }

        function n(f, u, d) { return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < u ? (f.flags |= 2, u) : d) : (f.flags |= 2, u)) : (f.flags |= 1048576, u) }

        function t(f) { return e && f.alternate === null && (f.flags |= 2), f }

        function c(f, u, d, C) { return u === null || u.tag !== 6 ? (u = Mt(d, f.mode, C), u.return = f, u) : (u = o(u, d), u.return = f, u) }

        function s(f, u, d, C) { var P = d.type; return P === _a ? h(f, u, d.props.children, C, d.key) : u !== null && (u.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Rr && Ns(P) === u.type) ? (C = o(u, d.props), C.ref = gi(f, u, d), C.return = f, C) : (C = Go(d.type, d.key, d.props, null, f.mode, C), C.ref = gi(f, u, d), C.return = f, C) }

        function l(f, u, d, C) { return u === null || u.tag !== 4 || u.stateNode.containerInfo !== d.containerInfo || u.stateNode.implementation !== d.implementation ? (u = Pt(d, f.mode, C), u.return = f, u) : (u = o(u, d.children || []), u.return = f, u) }

        function h(f, u, d, C, P) { return u === null || u.tag !== 7 ? (u = ha(d, f.mode, C, P), u.return = f, u) : (u = o(u, d), u.return = f, u) }

        function g(f, u, d) { if (typeof u == "string" && u !== "" || typeof u == "number") return u = Mt("" + u, f.mode, d), u.return = f, u; if (typeof u == "object" && u !== null) { switch (u.$$typeof) {
                    case ho:
                        return d = Go(u.type, u.key, u.props, null, f.mode, d), d.ref = gi(f, null, u), d.return = f, d;
                    case wa:
                        return u = Pt(u, f.mode, d), u.return = f, u;
                    case Rr:
                        var C = u._init; return g(f, C(u._payload), d) } if (Di(u) || fi(u)) return u = ha(u, f.mode, d, null), u.return = f, u;
                Po(f, u) } return null }

        function m(f, u, d, C) { var P = u !== null ? u.key : null; if (typeof d == "string" && d !== "" || typeof d == "number") return P !== null ? null : c(f, u, "" + d, C); if (typeof d == "object" && d !== null) { switch (d.$$typeof) {
                    case ho:
                        return d.key === P ? s(f, u, d, C) : null;
                    case wa:
                        return d.key === P ? l(f, u, d, C) : null;
                    case Rr:
                        return P = d._init, m(f, u, P(d._payload), C) } if (Di(d) || fi(d)) return P !== null ? null : h(f, u, d, C, null);
                Po(f, d) } return null }

        function D(f, u, d, C, P) { if (typeof C == "string" && C !== "" || typeof C == "number") return f = f.get(d) || null, c(u, f, "" + C, P); if (typeof C == "object" && C !== null) { switch (C.$$typeof) {
                    case ho:
                        return f = f.get(C.key === null ? d : C.key) || null, s(u, f, C, P);
                    case wa:
                        return f = f.get(C.key === null ? d : C.key) || null, l(u, f, C, P);
                    case Rr:
                        var w = C._init; return D(f, u, d, w(C._payload), P) } if (Di(C) || fi(C)) return f = f.get(d) || null, h(u, f, C, P, null);
                Po(u, C) } return null }

        function v(f, u, d, C) { for (var P = null, w = null, _ = u, E = u = 0, ie = null; _ !== null && E < d.length; E++) { _.index > E ? (ie = _, _ = null) : ie = _.sibling; var b = m(f, _, d[E], C); if (b === null) { _ === null && (_ = ie); break }
                e && _ && b.alternate === null && r(f, _), u = n(b, u, E), w === null ? P = b : w.sibling = b, w = b, _ = ie } if (E === d.length) return a(f, _), Z && ca(f, E), P; if (_ === null) { for (; E < d.length; E++) _ = g(f, d[E], C), _ !== null && (u = n(_, u, E), w === null ? P = _ : w.sibling = _, w = _); return Z && ca(f, E), P } for (_ = i(f, _); E < d.length; E++) ie = D(_, f, E, d[E], C), ie !== null && (e && ie.alternate !== null && _.delete(ie.key === null ? E : ie.key), u = n(ie, u, E), w === null ? P = ie : w.sibling = ie, w = ie); return e && _.forEach(function(qe) { return r(f, qe) }), Z && ca(f, E), P }

        function x(f, u, d, C) { var P = fi(d); if (typeof P != "function") throw Error(L(150)); if (d = P.call(d), d == null) throw Error(L(151)); for (var w = P = null, _ = u, E = u = 0, ie = null, b = d.next(); _ !== null && !b.done; E++, b = d.next()) { _.index > E ? (ie = _, _ = null) : ie = _.sibling; var qe = m(f, _, b.value, C); if (qe === null) { _ === null && (_ = ie); break }
                e && _ && qe.alternate === null && r(f, _), u = n(qe, u, E), w === null ? P = qe : w.sibling = qe, w = qe, _ = ie } if (b.done) return a(f, _), Z && ca(f, E), P; if (_ === null) { for (; !b.done; E++, b = d.next()) b = g(f, b.value, C), b !== null && (u = n(b, u, E), w === null ? P = b : w.sibling = b, w = b); return Z && ca(f, E), P } for (_ = i(f, _); !b.done; E++, b = d.next()) b = D(_, f, E, b.value, C), b !== null && (e && b.alternate !== null && _.delete(b.key === null ? E : b.key), u = n(b, u, E), w === null ? P = b : w.sibling = b, w = b); return e && _.forEach(function(li) { return r(f, li) }), Z && ca(f, E), P }

        function U(f, u, d, C) { if (typeof d == "object" && d !== null && d.type === _a && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) { switch (d.$$typeof) {
                    case ho:
                        e: { for (var P = d.key, w = u; w !== null;) { if (w.key === P) { if (P = d.type, P === _a) { if (w.tag === 7) { a(f, w.sibling), u = o(w, d.props.children), u.return = f, f = u; break e } } else if (w.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Rr && Ns(P) === w.type) { a(f, w.sibling), u = o(w, d.props), u.ref = gi(f, w, d), u.return = f, f = u; break e }
                                    a(f, w); break } else r(f, w);
                                w = w.sibling }
                            d.type === _a ? (u = ha(d.props.children, f.mode, C, d.key), u.return = f, f = u) : (C = Go(d.type, d.key, d.props, null, f.mode, C), C.ref = gi(f, u, d), C.return = f, f = C) }
                        return t(f);
                    case wa:
                        e: { for (w = d.key; u !== null;) { if (u.key === w)
                                    if (u.tag === 4 && u.stateNode.containerInfo === d.containerInfo && u.stateNode.implementation === d.implementation) { a(f, u.sibling), u = o(u, d.children || []), u.return = f, f = u; break e } else { a(f, u); break }
                                else r(f, u);
                                u = u.sibling }
                            u = Pt(d, f.mode, C), u.return = f, f = u }
                        return t(f);
                    case Rr:
                        return w = d._init, U(f, u, w(d._payload), C) } if (Di(d)) return v(f, u, d, C); if (fi(d)) return x(f, u, d, C);
                Po(f, d) } return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, u !== null && u.tag === 6 ? (a(f, u.sibling), u = o(u, d), u.return = f, f = u) : (a(f, u), u = Mt(d, f.mode, C), u.return = f, f = u), t(f)) : a(f, u) } return U }
    var Ja = ku(!0),
        wu = ku(!1),
        to = {},
        dr = aa(to),
        Wi = aa(to),
        $i = aa(to);

    function da(e) { if (e === to) throw Error(L(174)); return e }

    function nc(e, r) { switch (W($i, r), W(Wi, e), W(dr, to), e = r.nodeType, e) {
            case 9:
            case 11:
                r = (r = r.documentElement) ? r.namespaceURI : Vt(null, ""); break;
            default:
                e = e === 8 ? r.parentNode : r, r = e.namespaceURI || null, e = e.tagName, r = Vt(r, e) }
        K(dr), W(dr, r) }

    function ei() { K(dr), K(Wi), K($i) }

    function _u(e) { da($i.current); var r = da(dr.current),
            a = Vt(r, e.type);
        r !== a && (W(Wi, e), W(dr, a)) }

    function tc(e) { Wi.current === e && (K(dr), K(Wi)) }
    var J = aa(0);

    function dn(e) { for (var r = e; r !== null;) { if (r.tag === 13) { var a = r.memoizedState; if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || a.data === "$!")) return r } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) { if (r.flags & 128) return r } else if (r.child !== null) { r.child.return = r, r = r.child; continue } if (r === e) break; for (; r.sibling === null;) { if (r.return === null || r.return === e) return null;
                r = r.return }
            r.sibling.return = r.return, r = r.sibling } return null }
    var Lt = [];

    function cc() { for (var e = 0; e < Lt.length; e++) Lt[e]._workInProgressVersionPrimary = null;
        Lt.length = 0 }
    var Io = Tr.ReactCurrentDispatcher,
        yt = Tr.ReactCurrentBatchConfig,
        La = 0,
        ee = null,
        se = null,
        de = null,
        pn = !1,
        zi = !1,
        Ki = 0,
        m1 = 0;

    function ve() { throw Error(L(321)) }

    function sc(e, r) { if (r === null) return !1; for (var a = 0; a < r.length && a < e.length; a++)
            if (!ir(e[a], r[a])) return !1;
        return !0 }

    function lc(e, r, a, i, o, n) { if (La = n, ee = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Io.current = e === null || e.memoizedState === null ? C1 : L1, e = a(i, o), zi) { n = 0;
            do { if (zi = !1, Ki = 0, 25 <= n) throw Error(L(301));
                n += 1, de = se = null, r.updateQueue = null, Io.current = y1, e = a(i, o) } while (zi) } if (Io.current = mn, r = se !== null && se.next !== null, La = 0, de = se = ee = null, pn = !1, r) throw Error(L(300)); return e }

    function uc() { var e = Ki !== 0; return Ki = 0, e }

    function sr() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return de === null ? ee.memoizedState = de = e : de = de.next = e, de }

    function We() { if (se === null) { var e = ee.alternate;
            e = e !== null ? e.memoizedState : null } else e = se.next; var r = de === null ? ee.memoizedState : de.next; if (r !== null) de = r, se = e;
        else { if (e === null) throw Error(L(310));
            se = e, e = { memoizedState: se.memoizedState, baseState: se.baseState, baseQueue: se.baseQueue, queue: se.queue, next: null }, de === null ? ee.memoizedState = de = e : de = de.next = e } return de }

    function qi(e, r) { return typeof r == "function" ? r(e) : r }

    function xt(e) { var r = We(),
            a = r.queue; if (a === null) throw Error(L(311));
        a.lastRenderedReducer = e; var i = se,
            o = i.baseQueue,
            n = a.pending; if (n !== null) { if (o !== null) { var t = o.next;
                o.next = n.next, n.next = t }
            i.baseQueue = o = n, a.pending = null } if (o !== null) { n = o.next, i = i.baseState; var c = t = null,
                s = null,
                l = n;
            do { var h = l.lane; if ((La & h) === h) s !== null && (s = s.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), i = l.hasEagerState ? l.eagerState : e(i, l.action);
                else { var g = { lane: h, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null };
                    s === null ? (c = s = g, t = i) : s = s.next = g, ee.lanes |= h, ya |= h }
                l = l.next } while (l !== null && l !== n);
            s === null ? t = i : s.next = c, ir(i, r.memoizedState) || (_e = !0), r.memoizedState = i, r.baseState = t, r.baseQueue = s, a.lastRenderedState = i } if (e = a.interleaved, e !== null) { o = e;
            do n = o.lane, ee.lanes |= n, ya |= n, o = o.next; while (o !== e) } else o === null && (a.lanes = 0); return [r.memoizedState, a.dispatch] }

    function Dt(e) { var r = We(),
            a = r.queue; if (a === null) throw Error(L(311));
        a.lastRenderedReducer = e; var i = a.dispatch,
            o = a.pending,
            n = r.memoizedState; if (o !== null) { a.pending = null; var t = o = o.next;
            do n = e(n, t.action), t = t.next; while (t !== o);
            ir(n, r.memoizedState) || (_e = !0), r.memoizedState = n, r.baseQueue === null && (r.baseState = n), a.lastRenderedState = n } return [n, i] }

    function zu() {}

    function Eu(e, r) { var a = ee,
            i = We(),
            o = r(),
            n = !ir(i.memoizedState, o); if (n && (i.memoizedState = o, _e = !0), i = i.queue, fc(Yu.bind(null, a, i, e), [e]), i.getSnapshot !== r || n || de !== null && de.memoizedState.tag & 1) { if (a.flags |= 2048, Xi(9, Ou.bind(null, a, i, o, r), void 0, null), pe === null) throw Error(L(349));
            La & 30 || Tu(a, r, o) } return o }

    function Tu(e, r, a) { e.flags |= 16384, e = { getSnapshot: r, value: a }, r = ee.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ee.updateQueue = r, r.stores = [e]) : (a = r.stores, a === null ? r.stores = [e] : a.push(e)) }

    function Ou(e, r, a, i) { r.value = a, r.getSnapshot = i, Nu(r) && Ru(e) }

    function Yu(e, r, a) { return a(function() { Nu(r) && Ru(e) }) }

    function Nu(e) { var r = e.getSnapshot;
        e = e.value; try { var a = r(); return !ir(e, a) } catch { return !0 } }

    function Ru(e) { var r = _r(e, 1);
        r !== null && ar(r, e, 1, -1) }

    function Rs(e) { var r = sr(); return typeof e == "function" && (e = e()), r.memoizedState = r.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qi, lastRenderedState: e }, r.queue = e, e = e.dispatch = v1.bind(null, ee, e), [r.memoizedState, e] }

    function Xi(e, r, a, i) { return e = { tag: e, create: r, destroy: a, deps: i, next: null }, r = ee.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ee.updateQueue = r, r.lastEffect = e.next = e) : (a = r.lastEffect, a === null ? r.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, r.lastEffect = e)), e }

    function Fu() { return We().memoizedState }

    function jo(e, r, a, i) { var o = sr();
        ee.flags |= e, o.memoizedState = Xi(1 | r, a, void 0, i === void 0 ? null : i) }

    function On(e, r, a, i) { var o = We();
        i = i === void 0 ? null : i; var n = void 0; if (se !== null) { var t = se.memoizedState; if (n = t.destroy, i !== null && sc(i, t.deps)) { o.memoizedState = Xi(r, a, n, i); return } }
        ee.flags |= e, o.memoizedState = Xi(1 | r, a, n, i) }

    function Fs(e, r) { return jo(8390656, 8, e, r) }

    function fc(e, r) { return On(2048, 8, e, r) }

    function bu(e, r) { return On(4, 2, e, r) }

    function Iu(e, r) { return On(4, 4, e, r) }

    function ju(e, r) { if (typeof r == "function") return e = e(), r(e),
            function() { r(null) }; if (r != null) return e = e(), r.current = e,
            function() { r.current = null } }

    function Vu(e, r, a) { return a = a != null ? a.concat([e]) : null, On(4, 4, ju.bind(null, r, e), a) }

    function dc() {}

    function Bu(e, r) { var a = We();
        r = r === void 0 ? null : r; var i = a.memoizedState; return i !== null && r !== null && sc(r, i[1]) ? i[0] : (a.memoizedState = [e, r], e) }

    function Uu(e, r) { var a = We();
        r = r === void 0 ? null : r; var i = a.memoizedState; return i !== null && r !== null && sc(r, i[1]) ? i[0] : (e = e(), a.memoizedState = [e, r], e) }

    function Gu(e, r, a) { return La & 21 ? (ir(a, r) || (a = $l(), ee.lanes |= a, ya |= a, e.baseState = !0), r) : (e.baseState && (e.baseState = !1, _e = !0), e.memoizedState = a) }

    function h1(e, r) { var a = G;
        G = a !== 0 && 4 > a ? a : 4, e(!0); var i = yt.transition;
        yt.transition = {}; try { e(!1), r() } finally { G = a, yt.transition = i } }

    function Hu() { return We().memoizedState }

    function g1(e, r, a) { var i = Xr(e); if (a = { lane: i, action: a, hasEagerState: !1, eagerState: null, next: null }, Wu(e)) $u(r, a);
        else if (a = Su(e, r, a, i), a !== null) { var o = Se();
            ar(a, e, i, o), Ku(a, r, i) } }

    function v1(e, r, a) { var i = Xr(e),
            o = { lane: i, action: a, hasEagerState: !1, eagerState: null, next: null }; if (Wu(e)) $u(r, o);
        else { var n = e.alternate; if (e.lanes === 0 && (n === null || n.lanes === 0) && (n = r.lastRenderedReducer, n !== null)) try { var t = r.lastRenderedState,
                    c = n(t, a); if (o.hasEagerState = !0, o.eagerState = c, ir(c, t)) { var s = r.interleaved;
                    s === null ? (o.next = o, ic(r)) : (o.next = s.next, s.next = o), r.interleaved = o; return } } catch {} finally {}
            a = Su(e, r, o, i), a !== null && (o = Se(), ar(a, e, i, o), Ku(a, r, i)) } }

    function Wu(e) { var r = e.alternate; return e === ee || r !== null && r === ee }

    function $u(e, r) { zi = pn = !0; var a = e.pending;
        a === null ? r.next = r : (r.next = a.next, a.next = r), e.pending = r }

    function Ku(e, r, a) { if (a & 4194240) { var i = r.lanes;
            i &= e.pendingLanes, a |= i, r.lanes = a, U0(e, a) } }
    var mn = { readContext: He, useCallback: ve, useContext: ve, useEffect: ve, useImperativeHandle: ve, useInsertionEffect: ve, useLayoutEffect: ve, useMemo: ve, useReducer: ve, useRef: ve, useState: ve, useDebugValue: ve, useDeferredValue: ve, useTransition: ve, useMutableSource: ve, useSyncExternalStore: ve, useId: ve, unstable_isNewReconciler: !1 },
        C1 = { readContext: He, useCallback: function(e, r) { return sr().memoizedState = [e, r === void 0 ? null : r], e }, useContext: He, useEffect: Fs, useImperativeHandle: function(e, r, a) { return a = a != null ? a.concat([e]) : null, jo(4194308, 4, ju.bind(null, r, e), a) }, useLayoutEffect: function(e, r) { return jo(4194308, 4, e, r) }, useInsertionEffect: function(e, r) { return jo(4, 2, e, r) }, useMemo: function(e, r) { var a = sr(); return r = r === void 0 ? null : r, e = e(), a.memoizedState = [e, r], e }, useReducer: function(e, r, a) { var i = sr(); return r = a !== void 0 ? a(r) : r, i.memoizedState = i.baseState = r, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: r }, i.queue = e, e = e.dispatch = g1.bind(null, ee, e), [i.memoizedState, e] }, useRef: function(e) { var r = sr(); return e = { current: e }, r.memoizedState = e }, useState: Rs, useDebugValue: dc, useDeferredValue: function(e) { return sr().memoizedState = e }, useTransition: function() { var e = Rs(!1),
                    r = e[0]; return e = h1.bind(null, e[1]), sr().memoizedState = e, [r, e] }, useMutableSource: function() {}, useSyncExternalStore: function(e, r, a) { var i = ee,
                    o = sr(); if (Z) { if (a === void 0) throw Error(L(407));
                    a = a() } else { if (a = r(), pe === null) throw Error(L(349));
                    La & 30 || Tu(i, r, a) }
                o.memoizedState = a; var n = { value: a, getSnapshot: r }; return o.queue = n, Fs(Yu.bind(null, i, n, e), [e]), i.flags |= 2048, Xi(9, Ou.bind(null, i, n, a, r), void 0, null), a }, useId: function() { var e = sr(),
                    r = pe.identifierPrefix; if (Z) { var a = xr,
                        i = yr;
                    a = (i & ~(1 << 32 - rr(i) - 1)).toString(32) + a, r = ":" + r + "R" + a, a = Ki++, 0 < a && (r += "H" + a.toString(32)), r += ":" } else a = m1++, r = ":" + r + "r" + a.toString(32) + ":"; return e.memoizedState = r }, unstable_isNewReconciler: !1 },
        L1 = { readContext: He, useCallback: Bu, useContext: He, useEffect: fc, useImperativeHandle: Vu, useInsertionEffect: bu, useLayoutEffect: Iu, useMemo: Uu, useReducer: xt, useRef: Fu, useState: function() { return xt(qi) }, useDebugValue: dc, useDeferredValue: function(e) { var r = We(); return Gu(r, se.memoizedState, e) }, useTransition: function() { var e = xt(qi)[0],
                    r = We().memoizedState; return [e, r] }, useMutableSource: zu, useSyncExternalStore: Eu, useId: Hu, unstable_isNewReconciler: !1 },
        y1 = { readContext: He, useCallback: Bu, useContext: He, useEffect: fc, useImperativeHandle: Vu, useInsertionEffect: bu, useLayoutEffect: Iu, useMemo: Uu, useReducer: Dt, useRef: Fu, useState: function() { return Dt(qi) }, useDebugValue: dc, useDeferredValue: function(e) { var r = We(); return se === null ? r.memoizedState = e : Gu(r, se.memoizedState, e) }, useTransition: function() { var e = Dt(qi)[0],
                    r = We().memoizedState; return [e, r] }, useMutableSource: zu, useSyncExternalStore: Eu, useId: Hu, unstable_isNewReconciler: !1 };

    function ri(e, r) { try { var a = "",
                i = r;
            do a += Kd(i), i = i.return; while (i); var o = a } catch (n) { o = `
Error generating stack: ` + n.message + `
` + n.stack } return { value: e, source: r, stack: o, digest: null } }

    function St(e, r, a) { return { value: e, source: null, stack: a ? ? null, digest: r ? ? null } }

    function u0(e, r) { try { console.error(r.value) } catch (a) { setTimeout(function() { throw a }) } }
    var x1 = typeof WeakMap == "function" ? WeakMap : Map;

    function qu(e, r, a) { a = Ar(-1, a), a.tag = 3, a.payload = { element: null }; var i = r.value; return a.callback = function() { gn || (gn = !0, y0 = i), u0(e, r) }, a }

    function Xu(e, r, a) { a = Ar(-1, a), a.tag = 3; var i = e.type.getDerivedStateFromError; if (typeof i == "function") { var o = r.value;
            a.payload = function() { return i(o) }, a.callback = function() { u0(e, r) } } var n = e.stateNode; return n !== null && typeof n.componentDidCatch == "function" && (a.callback = function() { u0(e, r), typeof i != "function" && (qr === null ? qr = new Set([this]) : qr.add(this)); var t = r.stack;
            this.componentDidCatch(r.value, { componentStack: t !== null ? t : "" }) }), a }

    function bs(e, r, a) { var i = e.pingCache; if (i === null) { i = e.pingCache = new x1; var o = new Set;
            i.set(r, o) } else o = i.get(r), o === void 0 && (o = new Set, i.set(r, o));
        o.has(a) || (o.add(a), e = N1.bind(null, e, r, a), r.then(e, e)) }

    function Is(e) { do { var r; if ((r = e.tag === 13) && (r = e.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return e;
            e = e.return } while (e !== null); return null }

    function js(e, r, a, i, o) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === r ? e.flags |= 65536 : (e.flags |= 128, a.flags |= 131072, a.flags &= -52805, a.tag === 1 && (a.alternate === null ? a.tag = 17 : (r = Ar(-1, 1), r.tag = 2, Kr(a, r, 1))), a.lanes |= 1), e) }
    var D1 = Tr.ReactCurrentOwner,
        _e = !1;

    function De(e, r, a, i) { r.child = e === null ? wu(r, null, a, i) : Ja(r, e.child, a, i) }

    function Vs(e, r, a, i, o) { a = a.render; var n = r.ref; return Ha(r, o), i = lc(e, r, a, i, n, o), a = uc(), e !== null && !_e ? (r.updateQueue = e.updateQueue, r.flags &= -2053, e.lanes &= ~o, zr(e, r, o)) : (Z && a && Q0(r), r.flags |= 1, De(e, r, i, o), r.child) }

    function Bs(e, r, a, i, o) { if (e === null) { var n = a.type; return typeof n == "function" && !yc(n) && n.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (r.tag = 15, r.type = n, Qu(e, r, n, i, o)) : (e = Go(a.type, null, i, r, r.mode, o), e.ref = r.ref, e.return = r, r.child = e) } if (n = e.child, !(e.lanes & o)) { var t = n.memoizedProps; if (a = a.compare, a = a !== null ? a : Bi, a(t, i) && e.ref === r.ref) return zr(e, r, o) } return r.flags |= 1, e = Qr(n, i), e.ref = r.ref, e.return = r, r.child = e }

    function Qu(e, r, a, i, o) { if (e !== null) { var n = e.memoizedProps; if (Bi(n, i) && e.ref === r.ref)
                if (_e = !1, r.pendingProps = i = n, (e.lanes & o) !== 0) e.flags & 131072 && (_e = !0);
                else return r.lanes = e.lanes, zr(e, r, o) } return f0(e, r, a, i, o) }

    function Zu(e, r, a) { var i = r.pendingProps,
            o = i.children,
            n = e !== null ? e.memoizedState : null; if (i.mode === "hidden")
            if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(Ia, Oe), Oe |= a;
            else { if (!(a & 1073741824)) return e = n !== null ? n.baseLanes | a : a, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, r.updateQueue = null, W(Ia, Oe), Oe |= e, null;
                r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = n !== null ? n.baseLanes : a, W(Ia, Oe), Oe |= i }
        else n !== null ? (i = n.baseLanes | a, r.memoizedState = null) : i = a, W(Ia, Oe), Oe |= i; return De(e, r, o, a), r.child }

    function Ju(e, r) { var a = r.ref;
        (e === null && a !== null || e !== null && e.ref !== a) && (r.flags |= 512, r.flags |= 2097152) }

    function f0(e, r, a, i, o) { var n = Ee(a) ? va : xe.current; return n = Qa(r, n), Ha(r, o), a = lc(e, r, a, i, n, o), i = uc(), e !== null && !_e ? (r.updateQueue = e.updateQueue, r.flags &= -2053, e.lanes &= ~o, zr(e, r, o)) : (Z && i && Q0(r), r.flags |= 1, De(e, r, a, o), r.child) }

    function Us(e, r, a, i, o) { if (Ee(a)) { var n = !0;
            tn(r) } else n = !1; if (Ha(r, o), r.stateNode === null) Vo(e, r), Pu(r, a, i), l0(r, a, i, o), i = !0;
        else if (e === null) { var t = r.stateNode,
                c = r.memoizedProps;
            t.props = c; var s = t.context,
                l = a.contextType;
            typeof l == "object" && l !== null ? l = He(l) : (l = Ee(a) ? va : xe.current, l = Qa(r, l)); var h = a.getDerivedStateFromProps,
                g = typeof h == "function" || typeof t.getSnapshotBeforeUpdate == "function";
            g || typeof t.UNSAFE_componentWillReceiveProps != "function" && typeof t.componentWillReceiveProps != "function" || (c !== i || s !== l) && Ys(r, t, i, l), Fr = !1; var m = r.memoizedState;
            t.state = m, fn(r, i, t, o), s = r.memoizedState, c !== i || m !== s || ze.current || Fr ? (typeof h == "function" && (s0(r, a, h, i), s = r.memoizedState), (c = Fr || Os(r, a, c, i, m, s, l)) ? (g || typeof t.UNSAFE_componentWillMount != "function" && typeof t.componentWillMount != "function" || (typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount()), typeof t.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof t.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = i, r.memoizedState = s), t.props = i, t.state = s, t.context = l, i = c) : (typeof t.componentDidMount == "function" && (r.flags |= 4194308), i = !1) } else { t = r.stateNode, Au(e, r), c = r.memoizedProps, l = r.type === r.elementType ? c : Qe(r.type, c), t.props = l, g = r.pendingProps, m = t.context, s = a.contextType, typeof s == "object" && s !== null ? s = He(s) : (s = Ee(a) ? va : xe.current, s = Qa(r, s)); var D = a.getDerivedStateFromProps;
            (h = typeof D == "function" || typeof t.getSnapshotBeforeUpdate == "function") || typeof t.UNSAFE_componentWillReceiveProps != "function" && typeof t.componentWillReceiveProps != "function" || (c !== g || m !== s) && Ys(r, t, i, s), Fr = !1, m = r.memoizedState, t.state = m, fn(r, i, t, o); var v = r.memoizedState;
            c !== g || m !== v || ze.current || Fr ? (typeof D == "function" && (s0(r, a, D, i), v = r.memoizedState), (l = Fr || Os(r, a, l, i, m, v, s) || !1) ? (h || typeof t.UNSAFE_componentWillUpdate != "function" && typeof t.componentWillUpdate != "function" || (typeof t.componentWillUpdate == "function" && t.componentWillUpdate(i, v, s), typeof t.UNSAFE_componentWillUpdate == "function" && t.UNSAFE_componentWillUpdate(i, v, s)), typeof t.componentDidUpdate == "function" && (r.flags |= 4), typeof t.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof t.componentDidUpdate != "function" || c === e.memoizedProps && m === e.memoizedState || (r.flags |= 4), typeof t.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && m === e.memoizedState || (r.flags |= 1024), r.memoizedProps = i, r.memoizedState = v), t.props = i, t.state = v, t.context = s, i = l) : (typeof t.componentDidUpdate != "function" || c === e.memoizedProps && m === e.memoizedState || (r.flags |= 4), typeof t.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && m === e.memoizedState || (r.flags |= 1024), i = !1) } return d0(e, r, a, i, n, o) }

    function d0(e, r, a, i, o, n) { Ju(e, r); var t = (r.flags & 128) !== 0; if (!i && !t) return o && ws(r, a, !1), zr(e, r, n);
        i = r.stateNode, D1.current = r; var c = t && typeof a.getDerivedStateFromError != "function" ? null : i.render(); return r.flags |= 1, e !== null && t ? (r.child = Ja(r, e.child, null, n), r.child = Ja(r, null, c, n)) : De(e, r, c, n), r.memoizedState = i.state, o && ws(r, a, !0), r.child }

    function ef(e) { var r = e.stateNode;
        r.pendingContext ? ks(e, r.pendingContext, r.pendingContext !== r.context) : r.context && ks(e, r.context, !1), nc(e, r.containerInfo) }

    function Gs(e, r, a, i, o) { return Za(), J0(o), r.flags |= 256, De(e, r, a, i), r.child }
    var p0 = { dehydrated: null, treeContext: null, retryLane: 0 };

    function m0(e) { return { baseLanes: e, cachePool: null, transitions: null } }

    function rf(e, r, a) { var i = r.pendingProps,
            o = J.current,
            n = !1,
            t = (r.flags & 128) !== 0,
            c; if ((c = t) || (c = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), c ? (n = !0, r.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), W(J, o & 1), e === null) return t0(r), e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (r.mode & 1 ? e.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (t = i.children, e = i.fallback, n ? (i = r.mode, n = r.child, t = { mode: "hidden", children: t }, !(i & 1) && n !== null ? (n.childLanes = 0, n.pendingProps = t) : n = Rn(t, i, 0, null), e = ha(e, i, a, null), n.return = r, e.return = r, n.sibling = e, r.child = n, r.child.memoizedState = m0(a), r.memoizedState = p0, e) : pc(r, t)); if (o = e.memoizedState, o !== null && (c = o.dehydrated, c !== null)) return S1(e, r, t, i, c, o, a); if (n) { n = i.fallback, t = r.mode, o = e.child, c = o.sibling; var s = { mode: "hidden", children: i.children }; return !(t & 1) && r.child !== o ? (i = r.child, i.childLanes = 0, i.pendingProps = s, r.deletions = null) : (i = Qr(o, s), i.subtreeFlags = o.subtreeFlags & 14680064), c !== null ? n = Qr(c, n) : (n = ha(n, t, a, null), n.flags |= 2), n.return = r, i.return = r, i.sibling = n, r.child = i, i = n, n = r.child, t = e.child.memoizedState, t = t === null ? m0(a) : { baseLanes: t.baseLanes | a, cachePool: null, transitions: t.transitions }, n.memoizedState = t, n.childLanes = e.childLanes & ~a, r.memoizedState = p0, i } return n = e.child, e = n.sibling, i = Qr(n, { mode: "visible", children: i.children }), !(r.mode & 1) && (i.lanes = a), i.return = r, i.sibling = null, e !== null && (a = r.deletions, a === null ? (r.deletions = [e], r.flags |= 16) : a.push(e)), r.child = i, r.memoizedState = null, i }

    function pc(e, r) { return r = Rn({ mode: "visible", children: r }, e.mode, 0, null), r.return = e, e.child = r }

    function ko(e, r, a, i) { return i !== null && J0(i), Ja(r, e.child, null, a), e = pc(r, r.pendingProps.children), e.flags |= 2, r.memoizedState = null, e }

    function S1(e, r, a, i, o, n, t) { if (a) return r.flags & 256 ? (r.flags &= -257, i = St(Error(L(422))), ko(e, r, t, i)) : r.memoizedState !== null ? (r.child = e.child, r.flags |= 128, null) : (n = i.fallback, o = r.mode, i = Rn({ mode: "visible", children: i.children }, o, 0, null), n = ha(n, o, t, null), n.flags |= 2, i.return = r, n.return = r, i.sibling = n, r.child = i, r.mode & 1 && Ja(r, e.child, null, t), r.child.memoizedState = m0(t), r.memoizedState = p0, n); if (!(r.mode & 1)) return ko(e, r, t, null); if (o.data === "$!") { if (i = o.nextSibling && o.nextSibling.dataset, i) var c = i.dgst; return i = c, n = Error(L(419)), i = St(n, i, void 0), ko(e, r, t, i) } if (c = (t & e.childLanes) !== 0, _e || c) { if (i = pe, i !== null) { switch (t & -t) {
                    case 4:
                        o = 2; break;
                    case 16:
                        o = 8; break;
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
                        o = 32; break;
                    case 536870912:
                        o = 268435456; break;
                    default:
                        o = 0 }
                o = o & (i.suspendedLanes | t) ? 0 : o, o !== 0 && o !== n.retryLane && (n.retryLane = o, _r(e, o), ar(i, e, o, -1)) } return Lc(), i = St(Error(L(421))), ko(e, r, t, i) } return o.data === "$?" ? (r.flags |= 128, r.child = e.child, r = R1.bind(null, e), o._reactRetry = r, null) : (e = n.treeContext, Ye = $r(o.nextSibling), Ne = r, Z = !0, Je = null, e !== null && (je[Ve++] = yr, je[Ve++] = xr, je[Ve++] = Ca, yr = e.id, xr = e.overflow, Ca = r), r = pc(r, i.children), r.flags |= 4096, r) }

    function Hs(e, r, a) { e.lanes |= r; var i = e.alternate;
        i !== null && (i.lanes |= r), c0(e.return, r, a) }

    function At(e, r, a, i, o) { var n = e.memoizedState;
        n === null ? e.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: i, tail: a, tailMode: o } : (n.isBackwards = r, n.rendering = null, n.renderingStartTime = 0, n.last = i, n.tail = a, n.tailMode = o) }

    function af(e, r, a) { var i = r.pendingProps,
            o = i.revealOrder,
            n = i.tail; if (De(e, r, i.children, a), i = J.current, i & 2) i = i & 1 | 2, r.flags |= 128;
        else { if (e !== null && e.flags & 128) e: for (e = r.child; e !== null;) { if (e.tag === 13) e.memoizedState !== null && Hs(e, a, r);
                else if (e.tag === 19) Hs(e, a, r);
                else if (e.child !== null) { e.child.return = e, e = e.child; continue } if (e === r) break e; for (; e.sibling === null;) { if (e.return === null || e.return === r) break e;
                    e = e.return }
                e.sibling.return = e.return, e = e.sibling }
            i &= 1 } if (W(J, i), !(r.mode & 1)) r.memoizedState = null;
        else switch (o) {
            case "forwards":
                for (a = r.child, o = null; a !== null;) e = a.alternate, e !== null && dn(e) === null && (o = a), a = a.sibling;
                a = o, a === null ? (o = r.child, r.child = null) : (o = a.sibling, a.sibling = null), At(r, !1, o, a, n); break;
            case "backwards":
                for (a = null, o = r.child, r.child = null; o !== null;) { if (e = o.alternate, e !== null && dn(e) === null) { r.child = o; break }
                    e = o.sibling, o.sibling = a, a = o, o = e }
                At(r, !0, a, null, n); break;
            case "together":
                At(r, !1, null, null, void 0); break;
            default:
                r.memoizedState = null }
        return r.child }

    function Vo(e, r) {!(r.mode & 1) && e !== null && (e.alternate = null, r.alternate = null, r.flags |= 2) }

    function zr(e, r, a) { if (e !== null && (r.dependencies = e.dependencies), ya |= r.lanes, !(a & r.childLanes)) return null; if (e !== null && r.child !== e.child) throw Error(L(153)); if (r.child !== null) { for (e = r.child, a = Qr(e, e.pendingProps), r.child = a, a.return = r; e.sibling !== null;) e = e.sibling, a = a.sibling = Qr(e, e.pendingProps), a.return = r;
            a.sibling = null } return r.child }

    function A1(e, r, a) { switch (r.tag) {
            case 3:
                ef(r), Za(); break;
            case 5:
                _u(r); break;
            case 1:
                Ee(r.type) && tn(r); break;
            case 4:
                nc(r, r.stateNode.containerInfo); break;
            case 10:
                var i = r.type._context,
                    o = r.memoizedProps.value;
                W(ln, i._currentValue), i._currentValue = o; break;
            case 13:
                if (i = r.memoizedState, i !== null) return i.dehydrated !== null ? (W(J, J.current & 1), r.flags |= 128, null) : a & r.child.childLanes ? rf(e, r, a) : (W(J, J.current & 1), e = zr(e, r, a), e !== null ? e.sibling : null);
                W(J, J.current & 1); break;
            case 19:
                if (i = (a & r.childLanes) !== 0, e.flags & 128) { if (i) return af(e, r, a);
                    r.flags |= 128 } if (o = r.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), W(J, J.current), i) break; return null;
            case 22:
            case 23:
                return r.lanes = 0, Zu(e, r, a) } return zr(e, r, a) }
    var of, h0, nf, tf;
    of = function(e, r) { for (var a = r.child; a !== null;) { if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
            else if (a.tag !== 4 && a.child !== null) { a.child.return = a, a = a.child; continue } if (a === r) break; for (; a.sibling === null;) { if (a.return === null || a.return === r) return;
                a = a.return }
            a.sibling.return = a.return, a = a.sibling } };
    h0 = function() {};
    nf = function(e, r, a, i) { var o = e.memoizedProps; if (o !== i) { e = r.stateNode, da(dr.current); var n = null; switch (a) {
                case "input":
                    o = Ft(e, o), i = Ft(e, i), n = []; break;
                case "select":
                    o = re({}, o, { value: void 0 }), i = re({}, i, { value: void 0 }), n = []; break;
                case "textarea":
                    o = jt(e, o), i = jt(e, i), n = []; break;
                default:
                    typeof o.onClick != "function" && typeof i.onClick == "function" && (e.onclick = on) }
            Bt(a, i); var t;
            a = null; for (l in o)
                if (!i.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null)
                    if (l === "style") { var c = o[l]; for (t in c) c.hasOwnProperty(t) && (a || (a = {}), a[t] = "") } else l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Ni.hasOwnProperty(l) ? n || (n = []) : (n = n || []).push(l, null));
            for (l in i) { var s = i[l]; if (c = o != null ? o[l] : void 0, i.hasOwnProperty(l) && s !== c && (s != null || c != null))
                    if (l === "style")
                        if (c) { for (t in c) !c.hasOwnProperty(t) || s && s.hasOwnProperty(t) || (a || (a = {}), a[t] = ""); for (t in s) s.hasOwnProperty(t) && c[t] !== s[t] && (a || (a = {}), a[t] = s[t]) } else a || (n || (n = []), n.push(l, a)), a = s;
                else l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, c = c ? c.__html : void 0, s != null && c !== s && (n = n || []).push(l, s)) : l === "children" ? typeof s != "string" && typeof s != "number" || (n = n || []).push(l, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (Ni.hasOwnProperty(l) ? (s != null && l === "onScroll" && $("scroll", e), n || c === s || (n = [])) : (n = n || []).push(l, s)) }
            a && (n = n || []).push("style", a); var l = n;
            (r.updateQueue = l) && (r.flags |= 4) } };
    tf = function(e, r, a, i) { a !== i && (r.flags |= 4) };

    function vi(e, r) { if (!Z) switch (e.tailMode) {
            case "hidden":
                r = e.tail; for (var a = null; r !== null;) r.alternate !== null && (a = r), r = r.sibling;
                a === null ? e.tail = null : a.sibling = null; break;
            case "collapsed":
                a = e.tail; for (var i = null; a !== null;) a.alternate !== null && (i = a), a = a.sibling;
                i === null ? r || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null } }

    function Ce(e) { var r = e.alternate !== null && e.alternate.child === e.child,
            a = 0,
            i = 0; if (r)
            for (var o = e.child; o !== null;) a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 14680064, i |= o.flags & 14680064, o.return = e, o = o.sibling;
        else
            for (o = e.child; o !== null;) a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling; return e.subtreeFlags |= i, e.childLanes = a, r }

    function M1(e, r, a) { var i = r.pendingProps; switch (Z0(r), r.tag) {
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
                return Ce(r), null;
            case 1:
                return Ee(r.type) && nn(), Ce(r), null;
            case 3:
                return i = r.stateNode, ei(), K(ze), K(xe), cc(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Mo(r) ? r.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Je !== null && (S0(Je), Je = null))), h0(e, r), Ce(r), null;
            case 5:
                tc(r); var o = da($i.current); if (a = r.type, e !== null && r.stateNode != null) nf(e, r, a, i, o), e.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
                else { if (!i) { if (r.stateNode === null) throw Error(L(166)); return Ce(r), null } if (e = da(dr.current), Mo(r)) { i = r.stateNode, a = r.type; var n = r.memoizedProps; switch (i[lr] = r, i[Hi] = n, e = (r.mode & 1) !== 0, a) {
                            case "dialog":
                                $("cancel", i), $("close", i); break;
                            case "iframe":
                            case "object":
                            case "embed":
                                $("load", i); break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Ai.length; o++) $(Ai[o], i); break;
                            case "source":
                                $("error", i); break;
                            case "img":
                            case "image":
                            case "link":
                                $("error", i), $("load", i); break;
                            case "details":
                                $("toggle", i); break;
                            case "input":
                                es(i, n), $("invalid", i); break;
                            case "select":
                                i._wrapperState = { wasMultiple: !!n.multiple }, $("invalid", i); break;
                            case "textarea":
                                as(i, n), $("invalid", i) }
                        Bt(a, n), o = null; for (var t in n)
                            if (n.hasOwnProperty(t)) { var c = n[t];
                                t === "children" ? typeof c == "string" ? i.textContent !== c && (n.suppressHydrationWarning !== !0 && Ao(i.textContent, c, e), o = ["children", c]) : typeof c == "number" && i.textContent !== "" + c && (n.suppressHydrationWarning !== !0 && Ao(i.textContent, c, e), o = ["children", "" + c]) : Ni.hasOwnProperty(t) && c != null && t === "onScroll" && $("scroll", i) }
                        switch (a) {
                            case "input":
                                go(i), rs(i, n, !0); break;
                            case "textarea":
                                go(i), is(i); break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof n.onClick == "function" && (i.onclick = on) }
                        i = o, r.updateQueue = i, i !== null && (r.flags |= 4) } else { t = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tl(a)), e === "http://www.w3.org/1999/xhtml" ? a === "script" ? (e = t.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = t.createElement(a, { is: i.is }) : (e = t.createElement(a), a === "select" && (t = e, i.multiple ? t.multiple = !0 : i.size && (t.size = i.size))) : e = t.createElementNS(e, a), e[lr] = r, e[Hi] = i, of(e, r, !1, !1), r.stateNode = e;
                        e: { switch (t = Ut(a, i), a) {
                                case "dialog":
                                    $("cancel", e), $("close", e), o = i; break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    $("load", e), o = i; break;
                                case "video":
                                case "audio":
                                    for (o = 0; o < Ai.length; o++) $(Ai[o], e);
                                    o = i; break;
                                case "source":
                                    $("error", e), o = i; break;
                                case "img":
                                case "image":
                                case "link":
                                    $("error", e), $("load", e), o = i; break;
                                case "details":
                                    $("toggle", e), o = i; break;
                                case "input":
                                    es(e, i), o = Ft(e, i), $("invalid", e); break;
                                case "option":
                                    o = i; break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!i.multiple }, o = re({}, i, { value: void 0 }), $("invalid", e); break;
                                case "textarea":
                                    as(e, i), o = jt(e, i), $("invalid", e); break;
                                default:
                                    o = i }
                            Bt(a, o), c = o; for (n in c)
                                if (c.hasOwnProperty(n)) { var s = c[n];
                                    n === "style" ? Nl(e, s) : n === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ol(e, s)) : n === "children" ? typeof s == "string" ? (a !== "textarea" || s !== "") && Ri(e, s) : typeof s == "number" && Ri(e, "" + s) : n !== "suppressContentEditableWarning" && n !== "suppressHydrationWarning" && n !== "autoFocus" && (Ni.hasOwnProperty(n) ? s != null && n === "onScroll" && $("scroll", e) : s != null && F0(e, n, s, t)) }
                            switch (a) {
                                case "input":
                                    go(e), rs(e, i, !1); break;
                                case "textarea":
                                    go(e), is(e); break;
                                case "option":
                                    i.value != null && e.setAttribute("value", "" + Jr(i.value)); break;
                                case "select":
                                    e.multiple = !!i.multiple, n = i.value, n != null ? Va(e, !!i.multiple, n, !1) : i.defaultValue != null && Va(e, !!i.multiple, i.defaultValue, !0); break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = on) } switch (a) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    i = !!i.autoFocus; break e;
                                case "img":
                                    i = !0; break e;
                                default:
                                    i = !1 } }
                        i && (r.flags |= 4) }
                    r.ref !== null && (r.flags |= 512, r.flags |= 2097152) } return Ce(r), null;
            case 6:
                if (e && r.stateNode != null) tf(e, r, e.memoizedProps, i);
                else { if (typeof i != "string" && r.stateNode === null) throw Error(L(166)); if (a = da($i.current), da(dr.current), Mo(r)) { if (i = r.stateNode, a = r.memoizedProps, i[lr] = r, (n = i.nodeValue !== a) && (e = Ne, e !== null)) switch (e.tag) {
                            case 3:
                                Ao(i.nodeValue, a, (e.mode & 1) !== 0); break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Ao(i.nodeValue, a, (e.mode & 1) !== 0) }
                        n && (r.flags |= 4) } else i = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(i), i[lr] = r, r.stateNode = i } return Ce(r), null;
            case 13:
                if (K(J), i = r.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) { if (Z && Ye !== null && r.mode & 1 && !(r.flags & 128)) Du(), Za(), r.flags |= 98560, n = !1;
                    else if (n = Mo(r), i !== null && i.dehydrated !== null) { if (e === null) { if (!n) throw Error(L(318)); if (n = r.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(L(317));
                            n[lr] = r } else Za(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
                        Ce(r), n = !1 } else Je !== null && (S0(Je), Je = null), n = !0; if (!n) return r.flags & 65536 ? r : null } return r.flags & 128 ? (r.lanes = a, r) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (r.child.flags |= 8192, r.mode & 1 && (e === null || J.current & 1 ? le === 0 && (le = 3) : Lc())), r.updateQueue !== null && (r.flags |= 4), Ce(r), null);
            case 4:
                return ei(), h0(e, r), e === null && Ui(r.stateNode.containerInfo), Ce(r), null;
            case 10:
                return ac(r.type._context), Ce(r), null;
            case 17:
                return Ee(r.type) && nn(), Ce(r), null;
            case 19:
                if (K(J), n = r.memoizedState, n === null) return Ce(r), null; if (i = (r.flags & 128) !== 0, t = n.rendering, t === null)
                    if (i) vi(n, !1);
                    else { if (le !== 0 || e !== null && e.flags & 128)
                            for (e = r.child; e !== null;) { if (t = dn(e), t !== null) { for (r.flags |= 128, vi(n, !1), i = t.updateQueue, i !== null && (r.updateQueue = i, r.flags |= 4), r.subtreeFlags = 0, i = a, a = r.child; a !== null;) n = a, e = i, n.flags &= 14680066, t = n.alternate, t === null ? (n.childLanes = 0, n.lanes = e, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, n.type = t.type, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), a = a.sibling; return W(J, J.current & 1 | 2), r.child }
                                e = e.sibling }
                        n.tail !== null && te() > ai && (r.flags |= 128, i = !0, vi(n, !1), r.lanes = 4194304) }
                else { if (!i)
                        if (e = dn(t), e !== null) { if (r.flags |= 128, i = !0, a = e.updateQueue, a !== null && (r.updateQueue = a, r.flags |= 4), vi(n, !0), n.tail === null && n.tailMode === "hidden" && !t.alternate && !Z) return Ce(r), null } else 2 * te() - n.renderingStartTime > ai && a !== 1073741824 && (r.flags |= 128, i = !0, vi(n, !1), r.lanes = 4194304);
                    n.isBackwards ? (t.sibling = r.child, r.child = t) : (a = n.last, a !== null ? a.sibling = t : r.child = t, n.last = t) } return n.tail !== null ? (r = n.tail, n.rendering = r, n.tail = r.sibling, n.renderingStartTime = te(), r.sibling = null, a = J.current, W(J, i ? a & 1 | 2 : a & 1), r) : (Ce(r), null);
            case 22:
            case 23:
                return Cc(), i = r.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (r.flags |= 8192), i && r.mode & 1 ? Oe & 1073741824 && (Ce(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Ce(r), null;
            case 24:
                return null;
            case 25:
                return null } throw Error(L(156, r.tag)) }

    function P1(e, r) { switch (Z0(r), r.tag) {
            case 1:
                return Ee(r.type) && nn(), e = r.flags, e & 65536 ? (r.flags = e & -65537 | 128, r) : null;
            case 3:
                return ei(), K(ze), K(xe), cc(), e = r.flags, e & 65536 && !(e & 128) ? (r.flags = e & -65537 | 128, r) : null;
            case 5:
                return tc(r), null;
            case 13:
                if (K(J), e = r.memoizedState, e !== null && e.dehydrated !== null) { if (r.alternate === null) throw Error(L(340));
                    Za() } return e = r.flags, e & 65536 ? (r.flags = e & -65537 | 128, r) : null;
            case 19:
                return K(J), null;
            case 4:
                return ei(), null;
            case 10:
                return ac(r.type._context), null;
            case 22:
            case 23:
                return Cc(), null;
            case 24:
                return null;
            default:
                return null } }
    var wo = !1,
        Le = !1,
        k1 = typeof WeakSet == "function" ? WeakSet : Set,
        M = null;

    function ba(e, r) { var a = e.ref; if (a !== null)
            if (typeof a == "function") try { a(null) } catch (i) { ae(e, r, i) } else a.current = null }

    function g0(e, r, a) { try { a() } catch (i) { ae(e, r, i) } }
    var Ws = !1;

    function w1(e, r) { if (Jt = en, e = lu(), X0(e)) { if ("selectionStart" in e) var a = { start: e.selectionStart, end: e.selectionEnd };
            else e: { a = (a = e.ownerDocument) && a.defaultView || window; var i = a.getSelection && a.getSelection(); if (i && i.rangeCount !== 0) { a = i.anchorNode; var o = i.anchorOffset,
                        n = i.focusNode;
                    i = i.focusOffset; try { a.nodeType, n.nodeType } catch { a = null; break e } var t = 0,
                        c = -1,
                        s = -1,
                        l = 0,
                        h = 0,
                        g = e,
                        m = null;
                    r: for (;;) { for (var D; g !== a || o !== 0 && g.nodeType !== 3 || (c = t + o), g !== n || i !== 0 && g.nodeType !== 3 || (s = t + i), g.nodeType === 3 && (t += g.nodeValue.length), (D = g.firstChild) !== null;) m = g, g = D; for (;;) { if (g === e) break r; if (m === a && ++l === o && (c = t), m === n && ++h === i && (s = t), (D = g.nextSibling) !== null) break;
                            g = m, m = g.parentNode }
                        g = D }
                    a = c === -1 || s === -1 ? null : { start: c, end: s } } else a = null }
            a = a || { start: 0, end: 0 } } else a = null; for (e0 = { focusedElem: e, selectionRange: a }, en = !1, M = r; M !== null;)
            if (r = M, e = r.child, (r.subtreeFlags & 1028) !== 0 && e !== null) e.return = r, M = e;
            else
                for (; M !== null;) { r = M; try { var v = r.alternate; if (r.flags & 1024) switch (r.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (v !== null) { var x = v.memoizedProps,
                                        U = v.memoizedState,
                                        f = r.stateNode,
                                        u = f.getSnapshotBeforeUpdate(r.elementType === r.type ? x : Qe(r.type, x), U);
                                    f.__reactInternalSnapshotBeforeUpdate = u } break;
                            case 3:
                                var d = r.stateNode.containerInfo;
                                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement); break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(L(163)) } } catch (C) { ae(r, r.return, C) } if (e = r.sibling, e !== null) { e.return = r.return, M = e; break }
                    M = r.return }
            return v = Ws, Ws = !1, v }

    function Ei(e, r, a) { var i = r.updateQueue; if (i = i !== null ? i.lastEffect : null, i !== null) { var o = i = i.next;
            do { if ((o.tag & e) === e) { var n = o.destroy;
                    o.destroy = void 0, n !== void 0 && g0(r, a, n) }
                o = o.next } while (o !== i) } }

    function Yn(e, r) { if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) { var a = r = r.next;
            do { if ((a.tag & e) === e) { var i = a.create;
                    a.destroy = i() }
                a = a.next } while (a !== r) } }

    function v0(e) { var r = e.ref; if (r !== null) { var a = e.stateNode; switch (e.tag) {
                case 5:
                    e = a; break;
                default:
                    e = a }
            typeof r == "function" ? r(e) : r.current = e } }

    function cf(e) { var r = e.alternate;
        r !== null && (e.alternate = null, cf(r)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (r = e.stateNode, r !== null && (delete r[lr], delete r[Hi], delete r[i0], delete r[u1], delete r[f1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null }

    function sf(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 }

    function $s(e) { e: for (;;) { for (; e.sibling === null;) { if (e.return === null || sf(e.return)) return null;
                e = e.return } for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) { if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child } if (!(e.flags & 2)) return e.stateNode } }

    function C0(e, r, a) { var i = e.tag; if (i === 5 || i === 6) e = e.stateNode, r ? a.nodeType === 8 ? a.parentNode.insertBefore(e, r) : a.insertBefore(e, r) : (a.nodeType === 8 ? (r = a.parentNode, r.insertBefore(e, a)) : (r = a, r.appendChild(e)), a = a._reactRootContainer, a != null || r.onclick !== null || (r.onclick = on));
        else if (i !== 4 && (e = e.child, e !== null))
            for (C0(e, r, a), e = e.sibling; e !== null;) C0(e, r, a), e = e.sibling }

    function L0(e, r, a) { var i = e.tag; if (i === 5 || i === 6) e = e.stateNode, r ? a.insertBefore(e, r) : a.appendChild(e);
        else if (i !== 4 && (e = e.child, e !== null))
            for (L0(e, r, a), e = e.sibling; e !== null;) L0(e, r, a), e = e.sibling }
    var me = null,
        Ze = !1;

    function Nr(e, r, a) { for (a = a.child; a !== null;) lf(e, r, a), a = a.sibling }

    function lf(e, r, a) { if (fr && typeof fr.onCommitFiberUnmount == "function") try { fr.onCommitFiberUnmount(Pn, a) } catch {}
        switch (a.tag) {
            case 5:
                Le || ba(a, r);
            case 6:
                var i = me,
                    o = Ze;
                me = null, Nr(e, r, a), me = i, Ze = o, me !== null && (Ze ? (e = me, a = a.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(a) : e.removeChild(a)) : me.removeChild(a.stateNode)); break;
            case 18:
                me !== null && (Ze ? (e = me, a = a.stateNode, e.nodeType === 8 ? vt(e.parentNode, a) : e.nodeType === 1 && vt(e, a), ji(e)) : vt(me, a.stateNode)); break;
            case 4:
                i = me, o = Ze, me = a.stateNode.containerInfo, Ze = !0, Nr(e, r, a), me = i, Ze = o; break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Le && (i = a.updateQueue, i !== null && (i = i.lastEffect, i !== null))) { o = i = i.next;
                    do { var n = o,
                            t = n.destroy;
                        n = n.tag, t !== void 0 && (n & 2 || n & 4) && g0(a, r, t), o = o.next } while (o !== i) }
                Nr(e, r, a); break;
            case 1:
                if (!Le && (ba(a, r), i = a.stateNode, typeof i.componentWillUnmount == "function")) try { i.props = a.memoizedProps, i.state = a.memoizedState, i.componentWillUnmount() } catch (c) { ae(a, r, c) }
                Nr(e, r, a); break;
            case 21:
                Nr(e, r, a); break;
            case 22:
                a.mode & 1 ? (Le = (i = Le) || a.memoizedState !== null, Nr(e, r, a), Le = i) : Nr(e, r, a); break;
            default:
                Nr(e, r, a) } }

    function Ks(e) { var r = e.updateQueue; if (r !== null) { e.updateQueue = null; var a = e.stateNode;
            a === null && (a = e.stateNode = new k1), r.forEach(function(i) { var o = F1.bind(null, e, i);
                a.has(i) || (a.add(i), i.then(o, o)) }) } }

    function Xe(e, r) { var a = r.deletions; if (a !== null)
            for (var i = 0; i < a.length; i++) { var o = a[i]; try { var n = e,
                        t = r,
                        c = t;
                    e: for (; c !== null;) { switch (c.tag) {
                            case 5:
                                me = c.stateNode, Ze = !1; break e;
                            case 3:
                                me = c.stateNode.containerInfo, Ze = !0; break e;
                            case 4:
                                me = c.stateNode.containerInfo, Ze = !0; break e }
                        c = c.return }
                    if (me === null) throw Error(L(160));
                    lf(n, t, o), me = null, Ze = !1; var s = o.alternate;
                    s !== null && (s.return = null), o.return = null } catch (l) { ae(o, r, l) } }
        if (r.subtreeFlags & 12854)
            for (r = r.child; r !== null;) uf(r, e), r = r.sibling }

    function uf(e, r) { var a = e.alternate,
            i = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (Xe(r, e), cr(e), i & 4) { try { Ei(3, e, e.return), Yn(3, e) } catch (x) { ae(e, e.return, x) } try { Ei(5, e, e.return) } catch (x) { ae(e, e.return, x) } } break;
            case 1:
                Xe(r, e), cr(e), i & 512 && a !== null && ba(a, a.return); break;
            case 5:
                if (Xe(r, e), cr(e), i & 512 && a !== null && ba(a, a.return), e.flags & 32) { var o = e.stateNode; try { Ri(o, "") } catch (x) { ae(e, e.return, x) } } if (i & 4 && (o = e.stateNode, o != null)) { var n = e.memoizedProps,
                        t = a !== null ? a.memoizedProps : n,
                        c = e.type,
                        s = e.updateQueue; if (e.updateQueue = null, s !== null) try { c === "input" && n.type === "radio" && n.name != null && zl(o, n), Ut(c, t); var l = Ut(c, n); for (t = 0; t < s.length; t += 2) { var h = s[t],
                                g = s[t + 1];
                            h === "style" ? Nl(o, g) : h === "dangerouslySetInnerHTML" ? Ol(o, g) : h === "children" ? Ri(o, g) : F0(o, h, g, l) } switch (c) {
                            case "input":
                                bt(o, n); break;
                            case "textarea":
                                El(o, n); break;
                            case "select":
                                var m = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!n.multiple; var D = n.value;
                                D != null ? Va(o, !!n.multiple, D, !1) : m !== !!n.multiple && (n.defaultValue != null ? Va(o, !!n.multiple, n.defaultValue, !0) : Va(o, !!n.multiple, n.multiple ? [] : "", !1)) }
                        o[Hi] = n } catch (x) { ae(e, e.return, x) } } break;
            case 6:
                if (Xe(r, e), cr(e), i & 4) { if (e.stateNode === null) throw Error(L(162));
                    o = e.stateNode, n = e.memoizedProps; try { o.nodeValue = n } catch (x) { ae(e, e.return, x) } } break;
            case 3:
                if (Xe(r, e), cr(e), i & 4 && a !== null && a.memoizedState.isDehydrated) try { ji(r.containerInfo) } catch (x) { ae(e, e.return, x) }
                break;
            case 4:
                Xe(r, e), cr(e); break;
            case 13:
                Xe(r, e), cr(e), o = e.child, o.flags & 8192 && (n = o.memoizedState !== null, o.stateNode.isHidden = n, !n || o.alternate !== null && o.alternate.memoizedState !== null || (gc = te())), i & 4 && Ks(e); break;
            case 22:
                if (h = a !== null && a.memoizedState !== null, e.mode & 1 ? (Le = (l = Le) || h, Xe(r, e), Le = l) : Xe(r, e), cr(e), i & 8192) { if (l = e.memoizedState !== null, (e.stateNode.isHidden = l) && !h && e.mode & 1)
                        for (M = e, h = e.child; h !== null;) { for (g = M = h; M !== null;) { switch (m = M, D = m.child, m.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Ei(4, m, m.return); break;
                                    case 1:
                                        ba(m, m.return); var v = m.stateNode; if (typeof v.componentWillUnmount == "function") { i = m, a = m.return; try { r = i, v.props = r.memoizedProps, v.state = r.memoizedState, v.componentWillUnmount() } catch (x) { ae(i, a, x) } } break;
                                    case 5:
                                        ba(m, m.return); break;
                                    case 22:
                                        if (m.memoizedState !== null) { Xs(g); continue } }
                                D !== null ? (D.return = m, M = D) : Xs(g) }
                            h = h.sibling }
                    e: for (h = null, g = e;;) { if (g.tag === 5) { if (h === null) { h = g; try { o = g.stateNode, l ? (n = o.style, typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none") : (c = g.stateNode, s = g.memoizedProps.style, t = s != null && s.hasOwnProperty("display") ? s.display : null, c.style.display = Yl("display", t)) } catch (x) { ae(e, e.return, x) } } } else if (g.tag === 6) { if (h === null) try { g.stateNode.nodeValue = l ? "" : g.memoizedProps } catch (x) { ae(e, e.return, x) } } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) { g.child.return = g, g = g.child; continue } if (g === e) break e; for (; g.sibling === null;) { if (g.return === null || g.return === e) break e;
                            h === g && (h = null), g = g.return }
                        h === g && (h = null), g.sibling.return = g.return, g = g.sibling } } break;
            case 19:
                Xe(r, e), cr(e), i & 4 && Ks(e); break;
            case 21:
                break;
            default:
                Xe(r, e), cr(e) } }

    function cr(e) { var r = e.flags; if (r & 2) { try { e: { for (var a = e.return; a !== null;) { if (sf(a)) { var i = a; break e }
                        a = a.return } throw Error(L(160)) } switch (i.tag) {
                    case 5:
                        var o = i.stateNode;
                        i.flags & 32 && (Ri(o, ""), i.flags &= -33); var n = $s(e);
                        L0(e, n, o); break;
                    case 3:
                    case 4:
                        var t = i.stateNode.containerInfo,
                            c = $s(e);
                        C0(e, c, t); break;
                    default:
                        throw Error(L(161)) } }
            catch (s) { ae(e, e.return, s) }
            e.flags &= -3 }
        r & 4096 && (e.flags &= -4097) }

    function _1(e, r, a) { M = e, ff(e) }

    function ff(e, r, a) { for (var i = (e.mode & 1) !== 0; M !== null;) { var o = M,
                n = o.child; if (o.tag === 22 && i) { var t = o.memoizedState !== null || wo; if (!t) { var c = o.alternate,
                        s = c !== null && c.memoizedState !== null || Le;
                    c = wo; var l = Le; if (wo = t, (Le = s) && !l)
                        for (M = o; M !== null;) t = M, s = t.child, t.tag === 22 && t.memoizedState !== null ? Qs(o) : s !== null ? (s.return = t, M = s) : Qs(o); for (; n !== null;) M = n, ff(n), n = n.sibling;
                    M = o, wo = c, Le = l }
                qs(e) } else o.subtreeFlags & 8772 && n !== null ? (n.return = o, M = n) : qs(e) } }

    function qs(e) { for (; M !== null;) { var r = M; if (r.flags & 8772) { var a = r.alternate; try { if (r.flags & 8772) switch (r.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Le || Yn(5, r); break;
                        case 1:
                            var i = r.stateNode; if (r.flags & 4 && !Le)
                                if (a === null) i.componentDidMount();
                                else { var o = r.elementType === r.type ? a.memoizedProps : Qe(r.type, a.memoizedProps);
                                    i.componentDidUpdate(o, a.memoizedState, i.__reactInternalSnapshotBeforeUpdate) }
                            var n = r.updateQueue;
                            n !== null && Ts(r, n, i); break;
                        case 3:
                            var t = r.updateQueue; if (t !== null) { if (a = null, r.child !== null) switch (r.child.tag) {
                                    case 5:
                                        a = r.child.stateNode; break;
                                    case 1:
                                        a = r.child.stateNode }
                                Ts(r, t, a) } break;
                        case 5:
                            var c = r.stateNode; if (a === null && r.flags & 4) { a = c; var s = r.memoizedProps; switch (r.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && a.focus(); break;
                                    case "img":
                                        s.src && (a.src = s.src) } } break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (r.memoizedState === null) { var l = r.alternate; if (l !== null) { var h = l.memoizedState; if (h !== null) { var g = h.dehydrated;
                                        g !== null && ji(g) } } } break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(L(163)) }
                    Le || r.flags & 512 && v0(r) } catch (m) { ae(r, r.return, m) } } if (r === e) { M = null; break } if (a = r.sibling, a !== null) { a.return = r.return, M = a; break }
            M = r.return } }

    function Xs(e) { for (; M !== null;) { var r = M; if (r === e) { M = null; break } var a = r.sibling; if (a !== null) { a.return = r.return, M = a; break }
            M = r.return } }

    function Qs(e) { for (; M !== null;) { var r = M; try { switch (r.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var a = r.return; try { Yn(4, r) } catch (s) { ae(r, a, s) } break;
                    case 1:
                        var i = r.stateNode; if (typeof i.componentDidMount == "function") { var o = r.return; try { i.componentDidMount() } catch (s) { ae(r, o, s) } } var n = r.return; try { v0(r) } catch (s) { ae(r, n, s) } break;
                    case 5:
                        var t = r.return; try { v0(r) } catch (s) { ae(r, t, s) } } } catch (s) { ae(r, r.return, s) } if (r === e) { M = null; break } var c = r.sibling; if (c !== null) { c.return = r.return, M = c; break }
            M = r.return } }
    var z1 = Math.ceil,
        hn = Tr.ReactCurrentDispatcher,
        mc = Tr.ReactCurrentOwner,
        Ge = Tr.ReactCurrentBatchConfig,
        j = 0,
        pe = null,
        ce = null,
        he = 0,
        Oe = 0,
        Ia = aa(0),
        le = 0,
        Qi = null,
        ya = 0,
        Nn = 0,
        hc = 0,
        Ti = null,
        we = null,
        gc = 0,
        ai = 1 / 0,
        vr = null,
        gn = !1,
        y0 = null,
        qr = null,
        _o = !1,
        Vr = null,
        vn = 0,
        Oi = 0,
        x0 = null,
        Bo = -1,
        Uo = 0;

    function Se() { return j & 6 ? te() : Bo !== -1 ? Bo : Bo = te() }

    function Xr(e) { return e.mode & 1 ? j & 2 && he !== 0 ? he & -he : p1.transition !== null ? (Uo === 0 && (Uo = $l()), Uo) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : eu(e.type)), e) : 1 }

    function ar(e, r, a, i) { if (50 < Oi) throw Oi = 0, x0 = null, Error(L(185));
        io(e, a, i), (!(j & 2) || e !== pe) && (e === pe && (!(j & 2) && (Nn |= a), le === 4 && Ir(e, he)), Te(e, i), a === 1 && j === 0 && !(r.mode & 1) && (ai = te() + 500, En && ia())) }

    function Te(e, r) { var a = e.callbackNode;
        p2(e, r); var i = Jo(e, e === pe ? he : 0); if (i === 0) a !== null && ts(a), e.callbackNode = null, e.callbackPriority = 0;
        else if (r = i & -i, e.callbackPriority !== r) { if (a != null && ts(a), r === 1) e.tag === 0 ? d1(Zs.bind(null, e)) : Lu(Zs.bind(null, e)), s1(function() {!(j & 6) && ia() }), a = null;
            else { switch (Kl(i)) {
                    case 1:
                        a = B0; break;
                    case 4:
                        a = Hl; break;
                    case 16:
                        a = Zo; break;
                    case 536870912:
                        a = Wl; break;
                    default:
                        a = Zo }
                a = Lf(a, df.bind(null, e)) }
            e.callbackPriority = r, e.callbackNode = a } }

    function df(e, r) { if (Bo = -1, Uo = 0, j & 6) throw Error(L(327)); var a = e.callbackNode; if (Wa() && e.callbackNode !== a) return null; var i = Jo(e, e === pe ? he : 0); if (i === 0) return null; if (i & 30 || i & e.expiredLanes || r) r = Cn(e, i);
        else { r = i; var o = j;
            j |= 2; var n = mf();
            (pe !== e || he !== r) && (vr = null, ai = te() + 500, ma(e, r));
            do try { O1(); break } catch (c) { pf(e, c) }
            while (!0);
            rc(), hn.current = n, j = o, ce !== null ? r = 0 : (pe = null, he = 0, r = le) } if (r !== 0) { if (r === 2 && (o = Kt(e), o !== 0 && (i = o, r = D0(e, o))), r === 1) throw a = Qi, ma(e, 0), Ir(e, i), Te(e, te()), a; if (r === 6) Ir(e, i);
            else { if (o = e.current.alternate, !(i & 30) && !E1(o) && (r = Cn(e, i), r === 2 && (n = Kt(e), n !== 0 && (i = n, r = D0(e, n))), r === 1)) throw a = Qi, ma(e, 0), Ir(e, i), Te(e, te()), a; switch (e.finishedWork = o, e.finishedLanes = i, r) {
                    case 0:
                    case 1:
                        throw Error(L(345));
                    case 2:
                        sa(e, we, vr); break;
                    case 3:
                        if (Ir(e, i), (i & 130023424) === i && (r = gc + 500 - te(), 10 < r)) { if (Jo(e, 0) !== 0) break; if (o = e.suspendedLanes, (o & i) !== i) { Se(), e.pingedLanes |= e.suspendedLanes & o; break }
                            e.timeoutHandle = a0(sa.bind(null, e, we, vr), r); break }
                        sa(e, we, vr); break;
                    case 4:
                        if (Ir(e, i), (i & 4194240) === i) break; for (r = e.eventTimes, o = -1; 0 < i;) { var t = 31 - rr(i);
                            n = 1 << t, t = r[t], t > o && (o = t), i &= ~n } if (i = o, i = te() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * z1(i / 1960)) - i, 10 < i) { e.timeoutHandle = a0(sa.bind(null, e, we, vr), i); break }
                        sa(e, we, vr); break;
                    case 5:
                        sa(e, we, vr); break;
                    default:
                        throw Error(L(329)) } } } return Te(e, te()), e.callbackNode === a ? df.bind(null, e) : null }

    function D0(e, r) { var a = Ti; return e.current.memoizedState.isDehydrated && (ma(e, r).flags |= 256), e = Cn(e, r), e !== 2 && (r = we, we = a, r !== null && S0(r)), e }

    function S0(e) { we === null ? we = e : we.push.apply(we, e) }

    function E1(e) { for (var r = e;;) { if (r.flags & 16384) { var a = r.updateQueue; if (a !== null && (a = a.stores, a !== null))
                    for (var i = 0; i < a.length; i++) { var o = a[i],
                            n = o.getSnapshot;
                        o = o.value; try { if (!ir(n(), o)) return !1 } catch { return !1 } } } if (a = r.child, r.subtreeFlags & 16384 && a !== null) a.return = r, r = a;
            else { if (r === e) break; for (; r.sibling === null;) { if (r.return === null || r.return === e) return !0;
                    r = r.return }
                r.sibling.return = r.return, r = r.sibling } } return !0 }

    function Ir(e, r) { for (r &= ~hc, r &= ~Nn, e.suspendedLanes |= r, e.pingedLanes &= ~r, e = e.expirationTimes; 0 < r;) { var a = 31 - rr(r),
                i = 1 << a;
            e[a] = -1, r &= ~i } }

    function Zs(e) { if (j & 6) throw Error(L(327));
        Wa(); var r = Jo(e, 0); if (!(r & 1)) return Te(e, te()), null; var a = Cn(e, r); if (e.tag !== 0 && a === 2) { var i = Kt(e);
            i !== 0 && (r = i, a = D0(e, i)) } if (a === 1) throw a = Qi, ma(e, 0), Ir(e, r), Te(e, te()), a; if (a === 6) throw Error(L(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = r, sa(e, we, vr), Te(e, te()), null }

    function vc(e, r) { var a = j;
        j |= 1; try { return e(r) } finally { j = a, j === 0 && (ai = te() + 500, En && ia()) } }

    function xa(e) { Vr !== null && Vr.tag === 0 && !(j & 6) && Wa(); var r = j;
        j |= 1; var a = Ge.transition,
            i = G; try { if (Ge.transition = null, G = 1, e) return e() } finally { G = i, Ge.transition = a, j = r, !(j & 6) && ia() } }

    function Cc() { Oe = Ia.current, K(Ia) }

    function ma(e, r) { e.finishedWork = null, e.finishedLanes = 0; var a = e.timeoutHandle; if (a !== -1 && (e.timeoutHandle = -1, c1(a)), ce !== null)
            for (a = ce.return; a !== null;) { var i = a; switch (Z0(i), i.tag) {
                    case 1:
                        i = i.type.childContextTypes, i != null && nn(); break;
                    case 3:
                        ei(), K(ze), K(xe), cc(); break;
                    case 5:
                        tc(i); break;
                    case 4:
                        ei(); break;
                    case 13:
                        K(J); break;
                    case 19:
                        K(J); break;
                    case 10:
                        ac(i.type._context); break;
                    case 22:
                    case 23:
                        Cc() }
                a = a.return }
        if (pe = e, ce = e = Qr(e.current, null), he = Oe = r, le = 0, Qi = null, hc = Nn = ya = 0, we = Ti = null, fa !== null) { for (r = 0; r < fa.length; r++)
                if (a = fa[r], i = a.interleaved, i !== null) { a.interleaved = null; var o = i.next,
                        n = a.pending; if (n !== null) { var t = n.next;
                        n.next = o, i.next = t }
                    a.pending = i }
            fa = null } return e }

    function pf(e, r) { do { var a = ce; try { if (rc(), Io.current = mn, pn) { for (var i = ee.memoizedState; i !== null;) { var o = i.queue;
                        o !== null && (o.pending = null), i = i.next }
                    pn = !1 } if (La = 0, de = se = ee = null, zi = !1, Ki = 0, mc.current = null, a === null || a.return === null) { le = 1, Qi = r, ce = null; break }
                e: { var n = e,
                        t = a.return,
                        c = a,
                        s = r; if (r = he, c.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") { var l = s,
                            h = c,
                            g = h.tag; if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) { var m = h.alternate;
                            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null) } var D = Is(t); if (D !== null) { D.flags &= -257, js(D, t, c, n, r), D.mode & 1 && bs(n, l, r), r = D, s = l; var v = r.updateQueue; if (v === null) { var x = new Set;
                                x.add(s), r.updateQueue = x } else v.add(s); break e } else { if (!(r & 1)) { bs(n, l, r), Lc(); break e }
                            s = Error(L(426)) } } else if (Z && c.mode & 1) { var U = Is(t); if (U !== null) {!(U.flags & 65536) && (U.flags |= 256), js(U, t, c, n, r), J0(ri(s, c)); break e } }
                    n = s = ri(s, c), le !== 4 && (le = 2), Ti === null ? Ti = [n] : Ti.push(n), n = t;do { switch (n.tag) {
                            case 3:
                                n.flags |= 65536, r &= -r, n.lanes |= r; var f = qu(n, s, r);
                                Es(n, f); break e;
                            case 1:
                                c = s; var u = n.type,
                                    d = n.stateNode; if (!(n.flags & 128) && (typeof u.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (qr === null || !qr.has(d)))) { n.flags |= 65536, r &= -r, n.lanes |= r; var C = Xu(n, c, r);
                                    Es(n, C); break e } }
                        n = n.return } while (n !== null) }
                gf(a) } catch (P) { r = P, ce === a && a !== null && (ce = a = a.return); continue } break } while (!0) }

    function mf() { var e = hn.current; return hn.current = mn, e === null ? mn : e }

    function Lc() {
        (le === 0 || le === 3 || le === 2) && (le = 4), pe === null || !(ya & 268435455) && !(Nn & 268435455) || Ir(pe, he) }

    function Cn(e, r) { var a = j;
        j |= 2; var i = mf();
        (pe !== e || he !== r) && (vr = null, ma(e, r));
        do try { T1(); break } catch (o) { pf(e, o) }
        while (!0);
        if (rc(), j = a, hn.current = i, ce !== null) throw Error(L(261)); return pe = null, he = 0, le }

    function T1() { for (; ce !== null;) hf(ce) }

    function O1() { for (; ce !== null && !o2();) hf(ce) }

    function hf(e) { var r = Cf(e.alternate, e, Oe);
        e.memoizedProps = e.pendingProps, r === null ? gf(e) : ce = r, mc.current = null }

    function gf(e) { var r = e;
        do { var a = r.alternate; if (e = r.return, r.flags & 32768) { if (a = P1(a, r), a !== null) { a.flags &= 32767, ce = a; return } if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else { le = 6, ce = null; return } } else if (a = M1(a, r, Oe), a !== null) { ce = a; return } if (r = r.sibling, r !== null) { ce = r; return }
            ce = r = e } while (r !== null);
        le === 0 && (le = 5) }

    function sa(e, r, a) { var i = G,
            o = Ge.transition; try { Ge.transition = null, G = 1, Y1(e, r, a, i) } finally { Ge.transition = o, G = i } return null }

    function Y1(e, r, a, i) { do Wa(); while (Vr !== null); if (j & 6) throw Error(L(327));
        a = e.finishedWork; var o = e.finishedLanes; if (a === null) return null; if (e.finishedWork = null, e.finishedLanes = 0, a === e.current) throw Error(L(177));
        e.callbackNode = null, e.callbackPriority = 0; var n = a.lanes | a.childLanes; if (m2(e, n), e === pe && (ce = pe = null, he = 0), !(a.subtreeFlags & 2064) && !(a.flags & 2064) || _o || (_o = !0, Lf(Zo, function() { return Wa(), null })), n = (a.flags & 15990) !== 0, a.subtreeFlags & 15990 || n) { n = Ge.transition, Ge.transition = null; var t = G;
            G = 1; var c = j;
            j |= 4, mc.current = null, w1(e, a), uf(a, e), e1(e0), en = !!Jt, e0 = Jt = null, e.current = a, _1(a), n2(), j = c, G = t, Ge.transition = n } else e.current = a; if (_o && (_o = !1, Vr = e, vn = o), n = e.pendingLanes, n === 0 && (qr = null), s2(a.stateNode), Te(e, te()), r !== null)
            for (i = e.onRecoverableError, a = 0; a < r.length; a++) o = r[a], i(o.value, { componentStack: o.stack, digest: o.digest }); if (gn) throw gn = !1, e = y0, y0 = null, e; return vn & 1 && e.tag !== 0 && Wa(), n = e.pendingLanes, n & 1 ? e === x0 ? Oi++ : (Oi = 0, x0 = e) : Oi = 0, ia(), null }

    function Wa() { if (Vr !== null) { var e = Kl(vn),
                r = Ge.transition,
                a = G; try { if (Ge.transition = null, G = 16 > e ? 16 : e, Vr === null) var i = !1;
                else { if (e = Vr, Vr = null, vn = 0, j & 6) throw Error(L(331)); var o = j; for (j |= 4, M = e.current; M !== null;) { var n = M,
                            t = n.child; if (M.flags & 16) { var c = n.deletions; if (c !== null) { for (var s = 0; s < c.length; s++) { var l = c[s]; for (M = l; M !== null;) { var h = M; switch (h.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Ei(8, h, n) } var g = h.child; if (g !== null) g.return = h, M = g;
                                        else
                                            for (; M !== null;) { h = M; var m = h.sibling,
                                                    D = h.return; if (cf(h), h === l) { M = null; break } if (m !== null) { m.return = D, M = m; break }
                                                M = D } } } var v = n.alternate; if (v !== null) { var x = v.child; if (x !== null) { v.child = null;
                                        do { var U = x.sibling;
                                            x.sibling = null, x = U } while (x !== null) } }
                                M = n } } if (n.subtreeFlags & 2064 && t !== null) t.return = n, M = t;
                        else e: for (; M !== null;) { if (n = M, n.flags & 2048) switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ei(9, n, n.return) }
                            var f = n.sibling; if (f !== null) { f.return = n.return, M = f; break e }
                            M = n.return } } var u = e.current; for (M = u; M !== null;) { t = M; var d = t.child; if (t.subtreeFlags & 2064 && d !== null) d.return = t, M = d;
                        else e: for (t = u; M !== null;) { if (c = M, c.flags & 2048) try { switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Yn(9, c) } } catch (P) { ae(c, c.return, P) }
                            if (c === t) { M = null; break e } var C = c.sibling; if (C !== null) { C.return = c.return, M = C; break e }
                            M = c.return } } if (j = o, ia(), fr && typeof fr.onPostCommitFiberRoot == "function") try { fr.onPostCommitFiberRoot(Pn, e) } catch {}
                    i = !0 } return i } finally { G = a, Ge.transition = r } } return !1 }

    function Js(e, r, a) { r = ri(a, r), r = qu(e, r, 1), e = Kr(e, r, 1), r = Se(), e !== null && (io(e, 1, r), Te(e, r)) }

    function ae(e, r, a) { if (e.tag === 3) Js(e, e, a);
        else
            for (; r !== null;) { if (r.tag === 3) { Js(r, e, a); break } else if (r.tag === 1) { var i = r.stateNode; if (typeof r.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (qr === null || !qr.has(i))) { e = ri(a, e), e = Xu(r, e, 1), r = Kr(r, e, 1), e = Se(), r !== null && (io(r, 1, e), Te(r, e)); break } }
                r = r.return } }

    function N1(e, r, a) { var i = e.pingCache;
        i !== null && i.delete(r), r = Se(), e.pingedLanes |= e.suspendedLanes & a, pe === e && (he & a) === a && (le === 4 || le === 3 && (he & 130023424) === he && 500 > te() - gc ? ma(e, 0) : hc |= a), Te(e, r) }

    function vf(e, r) { r === 0 && (e.mode & 1 ? (r = Lo, Lo <<= 1, !(Lo & 130023424) && (Lo = 4194304)) : r = 1); var a = Se();
        e = _r(e, r), e !== null && (io(e, r, a), Te(e, a)) }

    function R1(e) { var r = e.memoizedState,
            a = 0;
        r !== null && (a = r.retryLane), vf(e, a) }

    function F1(e, r) { var a = 0; switch (e.tag) {
            case 13:
                var i = e.stateNode,
                    o = e.memoizedState;
                o !== null && (a = o.retryLane); break;
            case 19:
                i = e.stateNode; break;
            default:
                throw Error(L(314)) }
        i !== null && i.delete(r), vf(e, a) }
    var Cf;
    Cf = function(e, r, a) { if (e !== null)
            if (e.memoizedProps !== r.pendingProps || ze.current) _e = !0;
            else { if (!(e.lanes & a) && !(r.flags & 128)) return _e = !1, A1(e, r, a);
                _e = !!(e.flags & 131072) }
        else _e = !1, Z && r.flags & 1048576 && yu(r, sn, r.index); switch (r.lanes = 0, r.tag) {
            case 2:
                var i = r.type;
                Vo(e, r), e = r.pendingProps; var o = Qa(r, xe.current);
                Ha(r, a), o = lc(null, r, i, e, o, a); var n = uc(); return r.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Ee(i) ? (n = !0, tn(r)) : n = !1, r.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, oc(r), o.updater = Tn, r.stateNode = o, o._reactInternals = r, l0(r, i, e, a), r = d0(null, r, i, !0, n, a)) : (r.tag = 0, Z && n && Q0(r), De(null, r, o, a), r = r.child), r;
            case 16:
                i = r.elementType;
                e: { switch (Vo(e, r), e = r.pendingProps, o = i._init, i = o(i._payload), r.type = i, o = r.tag = I1(i), e = Qe(i, e), o) {
                        case 0:
                            r = f0(null, r, i, e, a); break e;
                        case 1:
                            r = Us(null, r, i, e, a); break e;
                        case 11:
                            r = Vs(null, r, i, e, a); break e;
                        case 14:
                            r = Bs(null, r, i, Qe(i.type, e), a); break e } throw Error(L(306, i, "")) }
                return r;
            case 0:
                return i = r.type, o = r.pendingProps, o = r.elementType === i ? o : Qe(i, o), f0(e, r, i, o, a);
            case 1:
                return i = r.type, o = r.pendingProps, o = r.elementType === i ? o : Qe(i, o), Us(e, r, i, o, a);
            case 3:
                e: { if (ef(r), e === null) throw Error(L(387));i = r.pendingProps, n = r.memoizedState, o = n.element, Au(e, r), fn(r, i, null, a); var t = r.memoizedState; if (i = t.element, n.isDehydrated)
                        if (n = { element: i, isDehydrated: !1, cache: t.cache, pendingSuspenseBoundaries: t.pendingSuspenseBoundaries, transitions: t.transitions }, r.updateQueue.baseState = n, r.memoizedState = n, r.flags & 256) { o = ri(Error(L(423)), r), r = Gs(e, r, i, a, o); break e } else if (i !== o) { o = ri(Error(L(424)), r), r = Gs(e, r, i, a, o); break e } else
                        for (Ye = $r(r.stateNode.containerInfo.firstChild), Ne = r, Z = !0, Je = null, a = wu(r, null, i, a), r.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
                    else { if (Za(), i === o) { r = zr(e, r, a); break e }
                        De(e, r, i, a) }
                    r = r.child }
                return r;
            case 5:
                return _u(r), e === null && t0(r), i = r.type, o = r.pendingProps, n = e !== null ? e.memoizedProps : null, t = o.children, r0(i, o) ? t = null : n !== null && r0(i, n) && (r.flags |= 32), Ju(e, r), De(e, r, t, a), r.child;
            case 6:
                return e === null && t0(r), null;
            case 13:
                return rf(e, r, a);
            case 4:
                return nc(r, r.stateNode.containerInfo), i = r.pendingProps, e === null ? r.child = Ja(r, null, i, a) : De(e, r, i, a), r.child;
            case 11:
                return i = r.type, o = r.pendingProps, o = r.elementType === i ? o : Qe(i, o), Vs(e, r, i, o, a);
            case 7:
                return De(e, r, r.pendingProps, a), r.child;
            case 8:
                return De(e, r, r.pendingProps.children, a), r.child;
            case 12:
                return De(e, r, r.pendingProps.children, a), r.child;
            case 10:
                e: { if (i = r.type._context, o = r.pendingProps, n = r.memoizedProps, t = o.value, W(ln, i._currentValue), i._currentValue = t, n !== null)
                        if (ir(n.value, t)) { if (n.children === o.children && !ze.current) { r = zr(e, r, a); break e } } else
                            for (n = r.child, n !== null && (n.return = r); n !== null;) { var c = n.dependencies; if (c !== null) { t = n.child; for (var s = c.firstContext; s !== null;) { if (s.context === i) { if (n.tag === 1) { s = Ar(-1, a & -a), s.tag = 2; var l = n.updateQueue; if (l !== null) { l = l.shared; var h = l.pending;
                                                    h === null ? s.next = s : (s.next = h.next, h.next = s), l.pending = s } }
                                            n.lanes |= a, s = n.alternate, s !== null && (s.lanes |= a), c0(n.return, a, r), c.lanes |= a; break }
                                        s = s.next } } else if (n.tag === 10) t = n.type === r.type ? null : n.child;
                                else if (n.tag === 18) { if (t = n.return, t === null) throw Error(L(341));
                                    t.lanes |= a, c = t.alternate, c !== null && (c.lanes |= a), c0(t, a, r), t = n.sibling } else t = n.child; if (t !== null) t.return = n;
                                else
                                    for (t = n; t !== null;) { if (t === r) { t = null; break } if (n = t.sibling, n !== null) { n.return = t.return, t = n; break }
                                        t = t.return }
                                n = t }
                        De(e, r, o.children, a), r = r.child }
                return r;
            case 9:
                return o = r.type, i = r.pendingProps.children, Ha(r, a), o = He(o), i = i(o), r.flags |= 1, De(e, r, i, a), r.child;
            case 14:
                return i = r.type, o = Qe(i, r.pendingProps), o = Qe(i.type, o), Bs(e, r, i, o, a);
            case 15:
                return Qu(e, r, r.type, r.pendingProps, a);
            case 17:
                return i = r.type, o = r.pendingProps, o = r.elementType === i ? o : Qe(i, o), Vo(e, r), r.tag = 1, Ee(i) ? (e = !0, tn(r)) : e = !1, Ha(r, a), Pu(r, i, o), l0(r, i, o, a), d0(null, r, i, !0, e, a);
            case 19:
                return af(e, r, a);
            case 22:
                return Zu(e, r, a) } throw Error(L(156, r.tag)) };

    function Lf(e, r) { return Gl(e, r) }

    function b1(e, r, a, i) { this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

    function Ue(e, r, a, i) { return new b1(e, r, a, i) }

    function yc(e) { return e = e.prototype, !(!e || !e.isReactComponent) }

    function I1(e) { if (typeof e == "function") return yc(e) ? 1 : 0; if (e != null) { if (e = e.$$typeof, e === I0) return 11; if (e === j0) return 14 } return 2 }

    function Qr(e, r) { var a = e.alternate; return a === null ? (a = Ue(e.tag, r, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = r, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 14680064, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, r = e.dependencies, a.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a }

    function Go(e, r, a, i, o, n) { var t = 2; if (i = e, typeof e == "function") yc(e) && (t = 1);
        else if (typeof e == "string") t = 5;
        else e: switch (e) {
            case _a:
                return ha(a.children, o, n, r);
            case b0:
                t = 8, o |= 8; break;
            case Ot:
                return e = Ue(12, a, r, o | 2), e.elementType = Ot, e.lanes = n, e;
            case Yt:
                return e = Ue(13, a, r, o), e.elementType = Yt, e.lanes = n, e;
            case Nt:
                return e = Ue(19, a, r, o), e.elementType = Nt, e.lanes = n, e;
            case kl:
                return Rn(a, o, n, r);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case Ml:
                        t = 10; break e;
                    case Pl:
                        t = 9; break e;
                    case I0:
                        t = 11; break e;
                    case j0:
                        t = 14; break e;
                    case Rr:
                        t = 16, i = null; break e }
                throw Error(L(130, e == null ? e : typeof e, "")) }
        return r = Ue(t, a, r, o), r.elementType = e, r.type = i, r.lanes = n, r }

    function ha(e, r, a, i) { return e = Ue(7, e, i, r), e.lanes = a, e }

    function Rn(e, r, a, i) { return e = Ue(22, e, i, r), e.elementType = kl, e.lanes = a, e.stateNode = { isHidden: !1 }, e }

    function Mt(e, r, a) { return e = Ue(6, e, null, r), e.lanes = a, e }

    function Pt(e, r, a) { return r = Ue(4, e.children !== null ? e.children : [], e.key, r), r.lanes = a, r.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, r }

    function j1(e, r, a, i, o) { this.tag = r, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tt(0), this.expirationTimes = tt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tt(0), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null }

    function xc(e, r, a, i, o, n, t, c, s) { return e = new j1(e, r, a, c, s), r === 1 ? (r = 1, n === !0 && (r |= 8)) : r = 0, n = Ue(3, null, null, r), e.current = n, n.stateNode = e, n.memoizedState = { element: i, isDehydrated: a, cache: null, transitions: null, pendingSuspenseBoundaries: null }, oc(n), e }

    function V1(e, r, a) { var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: wa, key: i == null ? null : "" + i, children: e, containerInfo: r, implementation: a } }

    function yf(e) { if (!e) return ea;
        e = e._reactInternals;
        e: { if (Sa(e) !== e || e.tag !== 1) throw Error(L(170)); var r = e;do { switch (r.tag) {
                    case 3:
                        r = r.stateNode.context; break e;
                    case 1:
                        if (Ee(r.type)) { r = r.stateNode.__reactInternalMemoizedMergedChildContext; break e } }
                r = r.return } while (r !== null); throw Error(L(171)) }
        if (e.tag === 1) { var a = e.type; if (Ee(a)) return Cu(e, a, r) } return r }

    function xf(e, r, a, i, o, n, t, c, s) { return e = xc(a, i, !0, e, o, n, t, c, s), e.context = yf(null), a = e.current, i = Se(), o = Xr(a), n = Ar(i, o), n.callback = r ? ? null, Kr(a, n, o), e.current.lanes = o, io(e, o, i), Te(e, i), e }

    function Fn(e, r, a, i) { var o = r.current,
            n = Se(),
            t = Xr(o); return a = yf(a), r.context === null ? r.context = a : r.pendingContext = a, r = Ar(n, t), r.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (r.callback = i), e = Kr(o, r, t), e !== null && (ar(e, o, t, n), bo(e, o, t)), t }

    function Ln(e) { if (e = e.current, !e.child) return null; switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode } }

    function el(e, r) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) { var a = e.retryLane;
            e.retryLane = a !== 0 && a < r ? a : r } }

    function Dc(e, r) { el(e, r), (e = e.alternate) && el(e, r) }

    function B1() { return null }
    var Df = typeof reportError == "function" ? reportError : function(e) { console.error(e) };

    function Sc(e) { this._internalRoot = e }
    bn.prototype.render = Sc.prototype.render = function(e) { var r = this._internalRoot; if (r === null) throw Error(L(409));
        Fn(e, r, null, null) };
    bn.prototype.unmount = Sc.prototype.unmount = function() { var e = this._internalRoot; if (e !== null) { this._internalRoot = null; var r = e.containerInfo;
            xa(function() { Fn(null, e, null, null) }), r[wr] = null } };

    function bn(e) { this._internalRoot = e }
    bn.prototype.unstable_scheduleHydration = function(e) { if (e) { var r = Ql();
            e = { blockedOn: null, target: e, priority: r }; for (var a = 0; a < br.length && r !== 0 && r < br[a].priority; a++);
            br.splice(a, 0, e), a === 0 && Jl(e) } };

    function Ac(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) }

    function In(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) }

    function rl() {}

    function U1(e, r, a, i, o) { if (o) { if (typeof i == "function") { var n = i;
                i = function() { var l = Ln(t);
                    n.call(l) } } var t = xf(r, i, e, 0, null, !1, !1, "", rl); return e._reactRootContainer = t, e[wr] = t.current, Ui(e.nodeType === 8 ? e.parentNode : e), xa(), t } for (; o = e.lastChild;) e.removeChild(o); if (typeof i == "function") { var c = i;
            i = function() { var l = Ln(s);
                c.call(l) } } var s = xc(e, 0, !1, null, null, !1, !1, "", rl); return e._reactRootContainer = s, e[wr] = s.current, Ui(e.nodeType === 8 ? e.parentNode : e), xa(function() { Fn(r, s, a, i) }), s }

    function jn(e, r, a, i, o) { var n = a._reactRootContainer; if (n) { var t = n; if (typeof o == "function") { var c = o;
                o = function() { var s = Ln(t);
                    c.call(s) } }
            Fn(r, t, e, o) } else t = U1(a, r, e, o, i); return Ln(t) }
    ql = function(e) { switch (e.tag) {
            case 3:
                var r = e.stateNode; if (r.current.memoizedState.isDehydrated) { var a = Si(r.pendingLanes);
                    a !== 0 && (U0(r, a | 1), Te(r, te()), !(j & 6) && (ai = te() + 500, ia())) } break;
            case 13:
                xa(function() { var i = _r(e, 1); if (i !== null) { var o = Se();
                        ar(i, e, 1, o) } }), Dc(e, 1) } };
    G0 = function(e) { if (e.tag === 13) { var r = _r(e, 134217728); if (r !== null) { var a = Se();
                ar(r, e, 134217728, a) }
            Dc(e, 134217728) } };
    Xl = function(e) { if (e.tag === 13) { var r = Xr(e),
                a = _r(e, r); if (a !== null) { var i = Se();
                ar(a, e, r, i) }
            Dc(e, r) } };
    Ql = function() { return G };
    Zl = function(e, r) { var a = G; try { return G = e, r() } finally { G = a } };
    Ht = function(e, r, a) { switch (r) {
            case "input":
                if (bt(e, a), r = a.name, a.type === "radio" && r != null) { for (a = e; a.parentNode;) a = a.parentNode; for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < a.length; r++) { var i = a[r]; if (i !== e && i.form === e.form) { var o = zn(i); if (!o) throw Error(L(90));
                            _l(i), bt(i, o) } } } break;
            case "textarea":
                El(e, a); break;
            case "select":
                r = a.value, r != null && Va(e, !!a.multiple, r, !1) } };
    bl = vc;
    Il = xa;
    var G1 = { usingClientEntryPoint: !1, Events: [no, Oa, zn, Rl, Fl, vc] },
        Ci = { findFiberByHostInstance: ua, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
        H1 = { bundleType: Ci.bundleType, version: Ci.version, rendererPackageName: Ci.rendererPackageName, rendererConfig: Ci.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Tr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return e = Bl(e), e === null ? null : e.stateNode }, findFiberByHostInstance: Ci.findFiberByHostInstance || B1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var zo = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!zo.isDisabled && zo.supportsFiber) try { Pn = zo.inject(H1), fr = zo } catch {} }
    Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G1;
    Fe.createPortal = function(e, r) { var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!Ac(r)) throw Error(L(200)); return V1(e, r, null, a) };
    Fe.createRoot = function(e, r) { if (!Ac(e)) throw Error(L(299)); var a = !1,
            i = "",
            o = Df; return r != null && (r.unstable_strictMode === !0 && (a = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), r = xc(e, 1, !1, null, null, a, !1, i, o), e[wr] = r.current, Ui(e.nodeType === 8 ? e.parentNode : e), new Sc(r) };
    Fe.findDOMNode = function(e) { if (e == null) return null; if (e.nodeType === 1) return e; var r = e._reactInternals; if (r === void 0) throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","), Error(L(268, e))); return e = Bl(r), e = e === null ? null : e.stateNode, e };
    Fe.flushSync = function(e) { return xa(e) };
    Fe.hydrate = function(e, r, a) { if (!In(r)) throw Error(L(200)); return jn(null, e, r, !0, a) };
    Fe.hydrateRoot = function(e, r, a) { if (!Ac(e)) throw Error(L(405)); var i = a != null && a.hydratedSources || null,
            o = !1,
            n = "",
            t = Df; if (a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onRecoverableError !== void 0 && (t = a.onRecoverableError)), r = xf(r, null, e, 1, a ? ? null, o, !1, n, t), e[wr] = r.current, Ui(e), i)
            for (e = 0; e < i.length; e++) a = i[e], o = a._getVersion, o = o(a._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [a, o] : r.mutableSourceEagerHydrationData.push(a, o); return new bn(r) };
    Fe.render = function(e, r, a) { if (!In(r)) throw Error(L(200)); return jn(null, e, r, !1, a) };
    Fe.unmountComponentAtNode = function(e) { if (!In(e)) throw Error(L(40)); return e._reactRootContainer ? (xa(function() { jn(null, null, e, !1, function() { e._reactRootContainer = null, e[wr] = null }) }), !0) : !1 };
    Fe.unstable_batchedUpdates = vc;
    Fe.unstable_renderSubtreeIntoContainer = function(e, r, a, i) { if (!In(a)) throw Error(L(200)); if (e == null || e._reactInternals === void 0) throw Error(L(38)); return jn(e, r, a, !1, i) };
    Fe.version = "18.2.0-next-9e3b772b8-20220608";

    function Sf() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sf) } catch (e) { console.error(e) } }
    Sf(), yl.exports = Fe;
    var W1 = yl.exports,
        al = W1;
    Et.createRoot = al.createRoot, Et.hydrateRoot = al.hydrateRoot;
    const $1 = [{ type: "header", name: "header", version: "5.2.0", comment: "Export to JSON plugin for PHPMyAdmin" }, { type: "database", name: "comparaprecios" }, { type: "table", name: "aceite", database: "comparaprecios", data: [{ id: "1", info: "Aceite de oliva Carrefour extra virgen 500 cc.", precio: "11030.80", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "2", info: "Aceite de oliva Carrefour virgen en botella 500 cc.", precio: "9350.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "3", info: "Aceite de oliva Carrefour virgen 1 l.", precio: "17991.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "4", info: "Aceite de oliva Carrefour virgen lata 1 l.", precio: "21501.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "5", info: "Aceite de girasol Pureza 1500 cc.", precio: "2520.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "6", info: "Aceite de girasol Carrefour alto omega pet 900 cc.", precio: "1395.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "7", info: "Aceite en aerosol Carrefour classic girasol 150 cc.", precio: "2241.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "8", info: "Aceite de girasol Cocinero ecobotella 900 cc.", precio: "1020.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "9", info: "Aceite de girasol Legitimo 900 cc.", precio: "1390.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "10", info: "Aceite de girasol Natura 1.5 l.", precio: "2805.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "11", info: "Aceite de girasol Lira 900 cc.", precio: "1215.50", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "12", info: "Aceite de girasol Legitimo 1.5 lt.", precio: "2135.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "13", info: "Aceite de girasol Lira 1.5 l.", precio: "1933.75", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "14", info: "Aceite de girasol Alsamar 900 cc.", precio: "1260.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "15", info: "Aceite de girasol alto omega Carrefour pet 1.5 l.", precio: "2103.20", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "16", info: "Aceite de oliva Cañuelas extra virgen clásico pet 500 cc.", precio: "10249.00", fecha: "2024-04-06 18:24:01", supermercado: "Carrefour" }, { id: "17", info: "Aceite de oliva extra virgen Cocinero suave 500 cc.", precio: "11110.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "18", info: "Aceite de oliva Cañuelas clásico extra virgen 500 cc.", precio: "11905.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "19", info: "Aceite de girasol en aerosol Fritolim clásico 120 g.", precio: "2750.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "20", info: "Aceite de oliva extra virgen Cocinero intenso 500 cc.", precio: "11110.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "21", info: "Aceite de girasol Cocinero 900 g.", precio: "1940.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "22", info: "Aceite de oliva en aerosol Fritolim 120 g.", precio: "3575.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "23", info: "Aceite de oliva Cocinero extra virgen pet 500 cc.", precio: "10100.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "24", info: "Aceite de oliva Cañuelas extra virgen suave pico dosificador 500 cc.", precio: "10249.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "25", info: "Aceite de oliva Cocinero puro pet 1 lt.", precio: "17985.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "26", info: "Aceite de oliva Oliovita clásico extra virgen 500 cc.", precio: "11040.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "27", info: "Aceite de oliva Lira en lata 1 lt.", precio: "25850.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "28", info: "Aceite de oliva Oliovita meditarráneo extra virgen vidrio 500 cc.", precio: "11040.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "29", info: "Aceite mezcla Lira pet 1.5 l.", precio: "6950.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "30", info: "Aceite de oliva Carrefour Selection extra virgen 250 cc.", precio: "6846.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "31", info: "Aceite mezcla Cocinero girasol oliva pet 1.5 l.", precio: "6495.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "32", info: "Aceite de oliva extra virgen Lira pet 500 cc.", precio: "11150.00", fecha: "2024-04-06 18:24:10", supermercado: "Carrefour" }, { id: "33", info: "Aceite de oliva gourmet Oliovita en lata 500 cc.", precio: "17025.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "34", info: "Aceite de oliva Carrefour extra virgen orgánico botella 500 cc.", precio: "15290.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "35", info: "Aceite de canola Carrefour con oliva sin gluten 500 cc.", precio: "5751.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "36", info: "Aceite de coco neutro Chiagraal en frasco 180 ml.", precio: "6865.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "37", info: "Aceite mezcla Cocinero 1.5 kg.", precio: "2240.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "38", info: "Aceite de oliva Oliovita arbequina extra virgen 500 cc.", precio: "15275.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "39", info: "Aceite de oliva sin tacc Lira cosecha temp 500 cc.", precio: "17380.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "40", info: "Aceite de canola Carrefour sin gluten botella 500 cc.", precio: "5751.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "41", info: "Aceite mezcla Cocinero 900 g.", precio: "1440.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "42", info: "Aceite de oliva Oliovita varietal changlot 500 cc.", precio: "15275.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "43", info: "Aceite de coco Entrenuts virgen orgánico 200 g.", precio: "10500.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "44", info: "Aceite de oliva Oliovita extra virgen coratina 500 cc.", precio: "16625.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "45", info: "Aceite de canola Carrefour ajo sin gluten botella 500 cc.", precio: "5751.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "46", info: "Aceite de oliva Colavita extra virgen 250 cc.", precio: "26290.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "47", info: "Aceite de coco sabor manteca Chiagraal en frasco 180 ml.", precio: "6900.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "48", info: "Aceite de coco virgen Chiagraal en frasco 180 ml.", precio: "10630.00", fecha: "2024-04-06 18:24:21", supermercado: "Carrefour" }, { id: "49", info: "Aceite de oliva Cortijo el olivar extra virgen 3 lts.", precio: "68750.00", fecha: "2024-04-06 18:24:31", supermercado: "Carrefour" }, { id: "50", info: "Aceite de canola Carrefour albahaca sin gluten 500 cc.", precio: "5751.00", fecha: "2024-04-06 18:24:31", supermercado: "Carrefour" }, { id: "51", info: "Aceite De Girasol Natura 1.5 L", precio: "2878.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "52", info: "Aceite De Girasol Natura 900 Ml", precio: "1800.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "53", info: "Aceite Girasol Legitimo 1.5 L", precio: "2300.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "54", info: "Aceite Cañuelas De Girasol - 1.5 L", precio: "2600.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "55", info: "Aceite Girasol Pureza 1.5 L", precio: "3000.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "56", info: "Aceite Girasol Pureza 0,9 L", precio: "1700.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "57", info: "Aceite Girasol Legitimo 900 Ml", precio: "1400.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "58", info: "Aceite De Oliva Extra Virgen Nucete 2000 Ml", precio: "26625.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "59", info: "Aceite De Oliva Virgen Nucete Lata 500 Ml", precio: "13900.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "60", info: "Aceite De Oliva Nucete Clásico 500 Ml", precio: "9375.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "61", info: "Aceite De Girasol Cocinero 900 Ml", precio: "1750.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "62", info: "Aceite Oliva Extra Virgen Suave Cocinero 500 Ml", precio: "8362.50", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "63", info: "Aceite Oliva Lira Extra Virgen Pet 500ml", precio: "9225.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "64", info: "Aceite Oliva Extra Virgen Intenso Cocinero 500 Ml", precio: "8362.50", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "65", info: "Aceite De Oliva Extra Virgen Mediterraneo Oliovita 500 Ml", precio: "10125.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "66", info: "Aceite De Oliva Azait 250 Ml", precio: "4500.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "67", info: "Aceite Fritolim Clasico X126cc", precio: "2750.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "68", info: "Aceite De Oliva Oliovita Extra Virgen Clásico 500 Ml", precio: "11100.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "69", info: "Aceite De Girasol Cocinero 1.5 L", precio: "2800.00", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "70", info: "Aceite De Oliva Cocinero Extra Virgen X500cc", precio: "8362.50", fecha: "2024-04-06 18:34:20", supermercado: "Disco" }, { id: "71", info: "Aceite De Maíz Arcor 900 Ml", precio: "4450.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "72", info: "Aceite De Oliva La Española Extra Virgen 250 Ml", precio: "5475.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "73", info: "Aceite De Oliva Gourmet Oliovita 500 Ml", precio: "12750.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "74", info: "Aceite De Girasol Lira X 1.5 Lt", precio: "3250.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "75", info: "Aceite Girasol Y Oliva Cocinero 900 Ml", precio: "4150.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "76", info: "Aceite De Oliva Cortijo El Olivar Dicomere 1 L", precio: "19312.50", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "77", info: "Aceite Natura Oliva Suave Andino X500cc", precio: "6412.50", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "78", info: "Aceite De Girasol Lira X 900 Ml", precio: "2000.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "79", info: "Aceite De Girasol Mazola 120 Ml", precio: "2650.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "80", info: "Aceite Cortijo El Olivar De Oliva 500ml", precio: "13450.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "81", info: "Aceite De Coco Virgen", precio: "9600.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "82", info: "Aceite El Olivar De Oliva Cortijo 250 Ml", precio: "8400.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "83", info: "Aceite Rocio Vegetal De Oliva Nucete 120 Gr", precio: "3100.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "84", info: "Aceite Natura Oliva Fuerte Trivar X500cc", precio: "8550.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "85", info: "Aceite Girasol Cocinero Plus Oleico 900 L", precio: "1950.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "86", info: "Aceite De Oliva Suave La Toscana 250 Ml", precio: "13700.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "87", info: "Aceite De Girasol Manteca Mazola 120 Ml", precio: "2650.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "88", info: "Aceite Fritolim Oliva X126cc", precio: "3600.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "89", info: "Aceite De Oliva Cocinero Extra Virgen X250cc", precio: "5850.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "90", info: "Aceite De Oliva Pesto La Toscana 250 Ml", precio: "13700.00", fecha: "2024-04-06 18:34:39", supermercado: "Disco" }, { id: "91", info: "Aceite Oliva Cocinero Puro X250cc", precio: "3712.50", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "92", info: "Aceite Natura Oliva Andino X500cc", precio: "9600.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "93", info: "Aceite De Oliva Extra Virgen Intenso Nucete 500 Ml", precio: "12500.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "94", info: "Aceite Fritolim Manteca X126cc", precio: "2750.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "95", info: "Aceite De Coco Neutro God Bless You 225 Ml", precio: "6450.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "96", info: "Aceite De Oliva La Toscana Extra Virgen Con Ajo 250 Ml", precio: "13700.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "97", info: "Aceite Cortijo El Olivar Dicomere 3l", precio: "68550.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "98", info: "Aceite De Oliva Suave La Toscana 500 Ml", precio: "24300.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "99", info: "Aceite De Oliva Extra Virgen Con Albahaca La Toscana 250 Ml", precio: "13700.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "100", info: "Aceite De Coco Manteca Sin Tacc Chia Graal 180 Ml", precio: "6900.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "101", info: "Aceite De Oliva Extra Virgen San Giorgio 250ml", precio: "10750.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "102", info: "Aceite De Canola Y Oliva Virgen Krol 500 Ml", precio: "7050.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "103", info: "Aceite De Oliva Cocinero Extra Virgen X1l", precio: "21200.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "104", info: "Aceite Extra Virgen Clasico Lira 500 Ml", precio: "13600.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "105", info: "Aceite De Coco Neutro God Bless You 125 Ml", precio: "4300.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "106", info: "Aceite Lira De Oliva Extravirgen Intenso X500ml", precio: "11250.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "107", info: "Aceite De Coco Virgen God Bless You 125 Ml", precio: "6350.00", fecha: "2024-04-06 18:34:56", supermercado: "Disco" }, { id: "108", info: "Aceite De Canola Krol Virgen 500 Ml", precio: "6450.00", fecha: "2024-04-06 18:35:12", supermercado: "Disco" }, { id: "109", info: "Aceite Cocinero Girasol Eco X900ml", precio: "1804.00", fecha: "2024-04-06 18:35:12", supermercado: "Disco" }, { id: "110", info: "Aceite De Oliva La Toscana Extra Virgen Con Oregano 250 Ml", precio: "10275.00", fecha: "2024-04-06 18:35:12", supermercado: "Disco" }, { id: "111", info: "Aceite Extra Virgen Clasico Lira 1 L", precio: "19387.50", fecha: "2024-04-06 18:35:12", supermercado: "Disco" }, { id: "112", info: "Aceite De Oliva Oliovita Coratina", precio: "14700.00", fecha: "2024-04-06 18:35:12", supermercado: "Disco" }, { id: "113", info: "Aceite De Oliva Clásico Oliovita 250 Ml", precio: "6712.50", fecha: "2024-04-06 18:35:12", supermercado: "Disco" }, { id: "141", info: "Aerosol Lira Clásico X 120gr", precio: "3000.00", fecha: "2024-04-06 18:35:45", supermercado: "Disco" }, { id: "157", info: "Aceite de Girasol La Anónima x 900 cc.", precio: "1819.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "158", info: "Aceite de Girasol Natura x 1,5 Lt.", precio: "3100.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "159", info: "Aceite de Girasol Cocinero x 1,5 Lt.", precio: "2360.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "160", info: "Aceite de Girasol Cañuelas x 1,5 Lt.", precio: "2700.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "161", info: "Aceite de Girasol Cocinero x 900 cc.", precio: "1480.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "162", info: "Aceite Girasol Legitimo x 1,5 Lt.", precio: "2709.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "163", info: "Aceite de Girasol Natura x 900 cc.", precio: "1950.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "164", info: "Aceite Girasol Ecobotella Vitamina D Cocinero x 900 cc.", precio: "1480.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "165", info: "Aceite Girasol Legitimo x 900 cc.", precio: "1675.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "166", info: "Aceite de Oliva Pet Best x 500 cc.", precio: "11409.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "167", info: "Aceite de Girasol Cañuelas x 900 cc.", precio: "1750.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "168", info: "Aceite de Oliva Extra Virgen Vidrio Nucete x 500 cc.", precio: "12575.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "169", info: "Aceite de Girasol Lira x 1,5 Lt.", precio: "2600.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "170", info: "Aceite Mezcla Siglo de Oro x 900 cc.", precio: "1100.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "171", info: "Aceite de Oliva Puro sin Tacc Pet Cocinero x 250 cc.", precio: "6050.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "172", info: "Aceite de Girasol Pureza x 1,5 Lt.", precio: "3000.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "173", info: "Aceite de Oliva Extra Virgen Pet Cocinero x 250 cc.", precio: "7100.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "174", info: "Aceite de Oliva Pet Best x 1 Lt.", precio: "21419.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "175", info: "Aceite de Maíz Clásico Mazola Aerosol x 126 cc.", precio: "2550.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "176", info: "Aceite de Girasol Lira x 900 cc.", precio: "1600.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "177", info: "Aceite Mezcla Girasol - Oliva Blend Natura x 900 cc.", precio: "3850.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "178", info: "Aceite de Oliva Extra Virgen Pet Oliovita x 500 cc.", precio: "13950.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "179", info: "Aceite de Oliva Extra Virgen Suave Cocinero x 500 cc.", precio: "13250.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "180", info: "Aceite Mezcla Copisi Girasol - Oliva x 900 cc.", precio: "3350.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "181", info: "Aceite de Girasol Blend Cocinero x 1,5 Lt.", precio: "2650.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "182", info: "Aceite de Girasol Pureza x 900 cc.", precio: "1850.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "183", info: "Aceite de Girasol Blend Cocinero x 900 cc.", precio: "1320.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "184", info: "Aceite Bebe Puro Johnsons Baby x 200 cc.", precio: "7150.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "185", info: "Aceite de Oliva Extra Virgen Pet Cocinero x 500 cc.", precio: "13500.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "186", info: "Aceite Oliva Extra Virgen Aerosol Lira x 120 g.", precio: "4550.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "187", info: "Aceite de Maíz Mazola x 900 cc.", precio: "4450.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "188", info: "Aceite de Girasol Plus Cocinero x 1,5 Lt.", precio: "3400.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "189", info: "Aceite Bebe Puro Johnsons Baby x 100 cc.", precio: "5500.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "190", info: "Aceite de Oliva Extra Virgen Vidrio Oliovita x 1 Lt.", precio: "31800.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "191", info: "Aceite de Oliva Extra Virgen Pet Oliovita x 1 Lt.", precio: "26650.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "192", info: "Aceite de Oliva Puro sin Tacc Pet Cocinero x 1 Lt.", precio: "21850.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "193", info: "Aceite de Oliva Extra Virgen Lata Oliovita x 500 cc.", precio: "21050.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "194", info: "Aceite Oliva Extra Virgen c/Albahaca La Toscana x 250 cc.", precio: "15130.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "195", info: "Aceite de Oliva Extra Virgen c/Ajo La Toscana x 250 cc.", precio: "15130.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "196", info: "Aceite de Oliva Extra Vírgen Oliovita x 500 cc.", precio: "16100.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "197", info: "Aceite de Oliva Extra Virgen Mediterráneo V Oliovita x 500 cc.", precio: "16100.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "198", info: "Aceite de Oliva Extra Virgen Clásico Lata Lira x 500 cc.", precio: "15900.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "199", info: "Aceite de Oliva Arbequina Vidrio Oliovita x 500 cc.", precio: "15150.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "200", info: "Aceite de Oliva Changlot Vidrio Oliovita x 500 cc.", precio: "15150.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "201", info: "Aceite de Oliva Coratina Vidrio Oliovita x 500 cc.", precio: "15150.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "202", info: "Aceite de Oliva Extra Virgen Pet Mediterráneo Oliovita x 500 cc.", precio: "14550.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "203", info: "Aceite de Oliva Extra Virgen Int. Cocinero x 500 cc.", precio: "13250.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "204", info: "Aceite de Oliva Extra Virgen La Toscana x 250 cc.", precio: "11135.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "205", info: "Aceite de Oliva Extra Virgen  Oliovita x 250 cc.", precio: "12800.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "206", info: "Aceite de Oliva Genovesa Vid Zuccardi x 250 cc.", precio: "11739.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "207", info: "Aceite de Oliva Pet Cocinero x 500 cc.", precio: "11500.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "208", info: "Aceite de Oliva Extra Virgen Vidrio Oliovita x 250 cc.", precio: "11250.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "209", info: "Aceite Oliva Original Vidrio Zuelo x 250 cc.", precio: "8975.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "210", info: "Aceite Oliva Extra Virgen Mediterráneo Pet Oliovita x 250 cc.", precio: "8700.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "211", info: "Aceite de Oliva Extra Virgen clásico x 250cc.", precio: "7600.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "212", info: "Aceite Mezcla Girasol-Oliva Eco Cocinero x 1,5 Lt.", precio: "6200.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "213", info: "Aceite Mezcla Especial Lira x 900 cc.", precio: "5400.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "214", info: "Aceite de Maíz Arcor x 900 cc.", precio: "4500.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "215", info: "Aceite Mezcla Girasol y Oliva Cocinero x 900 g.", precio: "3850.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "216", info: "Aceite Mezcla Cocinero x 1,5 Lt.", precio: "2550.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "217", info: "Aceite de Girasol Plus Cocinero x 900 cc.", precio: "1680.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "218", info: "Aceite Mezcla Cocinero x 900 cc.", precio: "1550.00", fecha: "2024-04-06 18:43:29", supermercado: "La Anonima" }, { id: "221", info: "Aceite Aromatizante Sandia & Pepino Organic x 1 Un.", precio: "3200.00", fecha: "2024-04-06 18:43:53", supermercado: "La Anonima" }, { id: "222", info: "Aceite Aromatizante Gardenia Organic x 1 Un.", precio: "3200.00", fecha: "2024-04-06 18:43:53", supermercado: "La Anonima" }, { id: "227", info: "Rocío Vegetal de Aceite Girasol Natura x 126 cc.", precio: "2300.00", fecha: "2024-04-06 18:43:53", supermercado: "La Anonima" }] }, { type: "table", name: "azucar", database: "comparaprecios", data: [{ id: "17", info: "Azúcar tipo A La Providencia 1 kg.", precio: "999.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "18", info: "Azúcar Ledesma molida superior bolsa 1 kg.", precio: "1400.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "19", info: "Azúcar comun tipo A Bella vista 1 kg.", precio: "1050.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "20", info: "Azúcar común Azucel tipo A bolsa 1 kg.", precio: "699.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "21", info: "Azúcar comun La perla tipo A 1 kg.", precio: "849.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "22", info: "Azúcar Hileret light 500 g.", precio: "2200.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "23", info: "Azúcar Hileret light 250 g.", precio: "1320.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "24", info: "Azúcar Ledesma light 500 g.", precio: "1050.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "25", info: "Azúcar Hileret light sobres 100 u.", precio: "4100.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "26", info: "Azúcar mascabo Ledesma 800 g.", precio: "1350.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "27", info: "Azúcar orgánica Dicomere paquete 1000 g.", precio: "3280.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "28", info: "Azúcar mascabo Beepure en frasco 250 g.", precio: "3009.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "29", info: "Azúcar marrón Grandiet fantasía 500 g.", precio: "2245.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "30", info: "Azúcar rubia organica Beepure en bolsa 700 g.", precio: "4479.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "31", info: "Azúcar mascabo Beepure zip pack 700 g.", precio: "4685.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "32", info: "Azúcar rubia orgánica Beepure en frasco 330 g.", precio: "3109.00", fecha: "2024-04-06 18:17:03", supermercado: "Carrefour" }, { id: "33", info: "Azúcar Chango 1 Kg.", precio: "1337.00", fecha: "2024-04-06 18:30:26", supermercado: "Disco" }, { id: "34", info: "Azúcar Común Tipo A Azucel 1 Kg", precio: "1250.00", fecha: "2024-04-06 18:30:26", supermercado: "Disco" }, { id: "35", info: "Azucar Comun Tipo A La Providencia 1 Kg", precio: "1200.00", fecha: "2024-04-06 18:30:26", supermercado: "Disco" }, { id: "36", info: "Azucar Ledesma Light 500 Gr", precio: "1100.00", fecha: "2024-04-06 18:30:26", supermercado: "Disco" }, { id: "37", info: "Azúcar Mascabo Integral Da Magrinha X 400 Gr", precio: "7000.00", fecha: "2024-04-06 18:30:26", supermercado: "Disco" }, { id: "38", info: "Azucar Orgánico Terrasana 500 Gr", precio: "4600.00", fecha: "2024-04-06 18:30:26", supermercado: "Disco" }, { id: "39", info: "Edulcorante Liquido Chuker 200 Ml", precio: "1787.50", fecha: "2024-04-06 18:30:26", supermercado: "Disco" }, { id: "41", info: "Edulcorante Liquido Sucralosa Chuker 400 Ml", precio: "2860.00", fecha: "2024-04-06 18:30:26", supermercado: "Disco" }, { id: "43", info: "Edulcorante Sucralosa Cañuelas 200 Ml", precio: "1365.00", fecha: "2024-04-06 18:30:26", supermercado: "Disco" }, { id: "44", info: "Endulzante Clásico Forte Hileret 100 Sobrecitos", precio: "2145.00", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "45", info: "Endulzante Hileret Light X 500 Gr", precio: "1722.50", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "46", info: "Endulzante Clasico Forte Hileret 250 Ml", precio: "1430.00", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "47", info: "Endulzante Clásico Forte Hileret 500 Ml", precio: "2502.50", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "48", info: "Endulzante Stevia Hileret 200 Ml", precio: "2827.50", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "49", info: "Endulzante Stevia Hileret 100 Sobrecitos", precio: "3542.50", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "50", info: "Endulzante Zucra Hileret 400 Ml", precio: "3282.50", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "51", info: "Endulzante Hileret Stevia 50 Sobrecitos", precio: "2047.50", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "52", info: "Endulzante Clasico Forte Hileret 200 Sobrecitos", precio: "3737.50", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "53", info: "Endulzante Sweet Hileret 400 Ml", precio: "2762.50", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "54", info: "Endulzante Hileret Stevia X 200 Sobrecitos", precio: "6012.50", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "55", info: "Endulzante Mate Liquido Hileret 400 Ml", precio: "2307.50", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "56", info: "Endulzante Clasico Forte Hileret 50 Sobrecitos", precio: "1800.00", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "57", info: "Endulzante Mate Liquido Hileret 200 Ml", precio: "2200.00", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "58", info: "Endulzante Hileret Light X 250 Gr", precio: "1600.00", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "59", info: "Endulzante Hileret Sweet X 100 Sobrecitos", precio: "3800.00", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "60", info: "Endulzante Zucra Hileret 100 Sobrecitos", precio: "4350.00", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "61", info: "Endulzante Hileret Sweet X 200 Sobrecitos", precio: "6950.00", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "62", info: "Endulzante Zucra Hileret 200 Ml", precio: "3000.00", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "63", info: "Endulzante Hileret Sweet X 50 Sobrecitos", precio: "2200.00", fecha: "2024-04-06 18:30:48", supermercado: "Disco" }, { id: "64", info: "Endulzante Light Hileret 100 Sobrecitos", precio: "2405.00", fecha: "2024-04-06 18:31:05", supermercado: "Disco" }, { id: "65", info: "Endulzante En Polvo Eritritol X 200 Gr", precio: "9847.50", fecha: "2024-04-06 18:31:05", supermercado: "Disco" }, { id: "66", info: "Azúcar Blanco Refinado Superior  Ledesma x 1 Kg.", precio: "1280.00", fecha: "2024-04-06 18:40:42", supermercado: "La Anonima" }, { id: "67", info: "Azúcar Blanco Refinado Superior  Ledesma x 1 Kg.", precio: "1280.00", fecha: "2024-04-06 18:40:42", supermercado: "La Anonima" }, { id: "68", info: "Azúcar Común A Sic x 1 Kg.", precio: "1505.00", fecha: "2024-04-06 18:40:42", supermercado: "La Anonima" }, { id: "69", info: 'Azucar Comun \\"A\\" Ancaste x 1 Kg.', precio: "1076.00", fecha: "2024-04-06 18:40:42", supermercado: "La Anonima" }, { id: "70", info: "Azúcar Orgánico AP sin TACC Chango x 1 kg.", precio: "4739.00", fecha: "2024-04-06 18:40:42", supermercado: "La Anonima" }] }, { type: "table", name: "cafe", database: "comparaprecios", data: [{ id: "9", info: "Café en saquitos Bonafide intenso 18 uni", precio: "2645.00", fecha: "2024-04-06 18:12:14", supermercado: "Carrefour" }, { id: "22", info: "Cápsulas de café La Virginia equilibrado caja x 10 uni", precio: "6000.00", fecha: "2024-04-06 18:12:22", supermercado: "Carrefour" }, { id: "24", info: "Café en saquitos Carrefour caja x 18 uni", precio: "2631.20", fecha: "2024-04-06 18:12:22", supermercado: "Carrefour" }, { id: "26", info: "Cappuccino La Virginia instantáneo dp 125 g.", precio: "2330.00", fecha: "2024-04-06 18:12:22", supermercado: "Carrefour" }, { id: "29", info: "Café en saquitos La Virginia caja x 20 uni", precio: "3590.00", fecha: "2024-04-06 18:12:22", supermercado: "Carrefour" }, { id: "32", info: "Cappuccino La Virginia instantáneo light dp 100 g.", precio: "2460.00", fecha: "2024-04-06 18:12:22", supermercado: "Carrefour" }, { id: "39", info: "Café en saquitos La Virginia más aroma caja x 20 uni", precio: "5460.00", fecha: "2024-04-06 18:12:33", supermercado: "Carrefour" }, { id: "40", info: "Cápsulas de café italiano La Virginia morenita caja x 10 uni", precio: "6925.00", fecha: "2024-04-06 18:12:33", supermercado: "Carrefour" }, { id: "45", info: "Cappuccino La Virginia mousse avellanas 155 g.", precio: "3490.00", fecha: "2024-04-06 18:12:33", supermercado: "Carrefour" }, { id: "47", info: "Cápsulas de café honduras La Virginia morenita caja x 10 uni", precio: "6925.00", fecha: "2024-04-06 18:12:33", supermercado: "Carrefour" }, { id: "51", info: "Café en polvo en sobres La Virginia clásico caja x 20 uni", precio: "4249.00", fecha: "2024-04-06 18:12:43", supermercado: "Carrefour" }, { id: "53", info: "Cappuccino latte La Virginia dp 125 g.", precio: "2795.00", fecha: "2024-04-06 18:12:43", supermercado: "Carrefour" }, { id: "54", info: "Cappuccino La Virginia instantáneo dp 275 g.", precio: "5820.00", fecha: "2024-04-06 18:12:43", supermercado: "Carrefour" }, { id: "59", info: "Cappuccino La Virginia instantáneo en sobre 12.5 g.", precio: "4000.00", fecha: "2024-04-06 18:12:43", supermercado: "Carrefour" }, { id: "60", info: "Porta filtro para café número 4 Domestic 1 u.", precio: "2799.00", fecha: "2024-04-06 18:12:43", supermercado: "Carrefour" }, { id: "81", info: "Café instantaneo Dolca suave origenes dp 170 g.", precio: "4793.40", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "82", info: "Café instantaneo torrado Dolca origenes dp 170 g.", precio: "4793.40", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "83", info: "Infusión a base de café Arlistan en frasco 100 g.", precio: "2510.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "84", info: "Café molido clásico La Virginia bolsa x 250 g.", precio: "2880.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "85", info: "Café molido Bonafide Sensaciones torrado intenso 500 g.", precio: "5995.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "86", info: "Café molido torrado intenso Bonafide Sensaciones 1 kg.", precio: "10785.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "87", info: "Café instantaneo Dolca suave origenes 170 g.", precio: "5346.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "88", info: "Café molido clásico la Morenita bolsa 500 g.", precio: "6215.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "90", info: "Café instantaneo cremoso Dolca cortado 125 g.", precio: "1470.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "91", info: "Café instantaneo Dolca origenes en frasco 170 g.", precio: "5346.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "92", info: "Café molido torrado intenso Bonafide Sensaciones 125 g.", precio: "1640.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "93", info: "Café instantáneo Nescafé dolca mixes latte doypack 125 g.", precio: "1620.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "94", info: "Infusion a base de café Arlistan en frasco 50 g.", precio: "1300.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "95", info: "Café molido Bonafide Sensaciones torrado intenso 250 g.", precio: "3180.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "96", info: "Café molido Bonafide Sensaciones torrado suave 500 g.", precio: "5995.00", fecha: "2024-04-06 18:14:12", supermercado: "Carrefour" }, { id: "97", info: "Café instantáneo La Virginia clásico dp 100 g.", precio: "3270.00", fecha: "2024-04-06 18:14:20", supermercado: "Carrefour" }, { id: "98", info: "Cebada tostada Carrefour classic instantaneo 170 g.", precio: "1750.00", fecha: "2024-04-06 18:14:20", supermercado: "Carrefour" }, { id: "99", info: "Café Morenita intenso saquitos 5 g.", precio: "3305.00", fecha: "2024-04-06 18:14:20", supermercado: "Carrefour" }, { id: "100", info: "Café instantaneo Dolca suave origenes en frasco 100 g.", precio: "3357.00", fecha: "2024-04-06 18:14:20", supermercado: "Carrefour" }, { id: "101", info: "Café molido torrado equilibrado La Virginia paquete 1 kg.", precio: "13005.00", fecha: "2024-04-06 18:14:20", supermercado: "Carrefour" }, { id: "103", info: "Café instantáneo La Virginia especial clásico 170 g.", precio: "5620.00", fecha: "2024-04-06 18:14:20", supermercado: "Carrefour" }, { id: "105", info: "Filtro de café Essential Nº 4 x 30 uni", precio: "2990.00", fecha: "2024-04-06 18:14:20", supermercado: "Carrefour" }, { id: "107", info: "Cappuccino instantáneo Carrefour classic doy pack 210 g.", precio: "3994.90", fecha: "2024-04-06 18:14:20", supermercado: "Carrefour" }, { id: "108", info: "Filtro de café tela 1 u.", precio: "1323.00", fecha: "2024-04-06 18:14:20", supermercado: "Carrefour" }, { id: "110", info: "Café instantaneo Nescafé gold dp 100 g.", precio: "11060.00", fecha: "2024-04-06 18:14:20", supermercado: "Carrefour" }, { id: "111", info: "Café instantáneo La Morenita frasco 100 g.", precio: "2700.00", fecha: "2024-04-06 18:14:20", supermercado: "Carrefour" }, { id: "113", info: "Cebada tostada Carrefour classic instantaneo dp 100 g.", precio: "1190.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "114", info: "Café molido torrado La Virginia 125 g.", precio: "1690.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "115", info: "Café instantáneo La Virginia descafeinado kalma 100 g.", precio: "4465.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "116", info: "Filtro de café Domestic número 4 30 u.", precio: "3225.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "117", info: "Filtro de café Domestic número 2 30 u.", precio: "2645.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "118", info: "Café instantáneo La Virginia especial clásico 100 g.", precio: "3725.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "121", info: "Café instantáneo La Virginia suave frasco 100 g.", precio: "3725.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "122", info: "Cappuccino instantáneo Morenita doypack 125 g.", precio: "2780.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "123", info: "Café instantáneo La Morenita frasco 170 g.", precio: "5150.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "124", info: "Cappuccino La Virginia cortado dp 125 g.", precio: "2795.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "126", info: "Filtro de café Essential Nº 2 x 30 uni", precio: "2630.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "128", info: "Café instantáneo La Virginia tostado frasco 170 g.", precio: "8055.00", fecha: "2024-04-06 18:14:31", supermercado: "Carrefour" }, { id: "129", info: "Café molido Morenita clásico la paquete 1 kg.", precio: "13340.00", fecha: "2024-04-06 18:14:41", supermercado: "Carrefour" }, { id: "130", info: "Café instantáneo La Virginia suave frasco 170 g.", precio: "5620.00", fecha: "2024-04-06 18:14:41", supermercado: "Carrefour" }, { id: "132", info: "Café instantaneo suave La planta en frasco 100 g.", precio: "5535.00", fecha: "2024-04-06 18:14:41", supermercado: "Carrefour" }, { id: "135", info: "Cápsulas de café Viaggio colombia espresso x 10 uni", precio: "9315.00", fecha: "2024-04-06 18:14:41", supermercado: "Carrefour" }, { id: "136", info: "Café instantáneo La Virginia suave dp 100 g.", precio: "3270.00", fecha: "2024-04-06 18:14:41", supermercado: "Carrefour" }, { id: "137", info: "Cápsulas de café Viaggio espresso x 10 uni", precio: "9350.00", fecha: "2024-04-06 18:14:41", supermercado: "Carrefour" }, { id: "138", info: "Cápsulas de café reutilizables Domestic para Dolce Gusto 2 u.", precio: "10479.00", fecha: "2024-04-06 18:14:41", supermercado: "Carrefour" }, { id: "141", info: "Cebada instantaneo El pocillo intensa doy pack 100 g.", precio: "1925.00", fecha: "2024-04-06 18:14:41", supermercado: "Carrefour" }, { id: "142", info: "Cápsulas de café Viaggio brasil espresso x 10 uni", precio: "9315.00", fecha: "2024-04-06 18:14:41", supermercado: "Carrefour" }, { id: "143", info: "Granos de café con chocolate 150 g.", precio: "3990.00", fecha: "2024-04-06 18:14:41", supermercado: "Carrefour" }, { id: "144", info: "Pack x 4 cápsulas para café Caffettino recargables", precio: "14990.00", fecha: "2024-04-06 18:14:41", supermercado: "Carrefour" }, { id: "145", info: "Cápsulas de café choya La Virginia x 8 uni", precio: "10900.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "146", info: "Molinillo Indo Deli capuchino 40 g.", precio: "4500.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "147", info: "Porta filtro para café número 2 Domestic 1 u.", precio: "4259.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "148", info: "Café en cápsulas Lavazza deciso intensidad 10 10 u.", precio: "10990.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "149", info: "Cápsulas de café cappuccino La Virginia x 8 uni", precio: "10900.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "150", info: "Cappuccino La Virginia mousse avellana 10 15.5 g.", precio: "5100.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "151", info: "Cápsulas de café Viaggio decaffeinato espresso x 10 uni", precio: "9350.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "153", info: "Filtro de café tipo canasta Domestic 50 u.", precio: "2780.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "154", info: "Café tostado y molido Starbucks verona softpack 250 g.", precio: "18590.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "155", info: "Cappuccino La Virginia cortado en sobre 12.5 g.", precio: "4650.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "156", info: "Café Gimoka en cápsulas brasile aluminio x 10 uni", precio: "9600.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "157", info: "Café tostado y molido Starbucks house blend softpack 250 g.", precio: "18590.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "158", info: "Café en capsula Viaggio vaniglia espresso 55 g.", precio: "9315.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "159", info: "Café tostado Starbucks molido blonde 250 g.", precio: "18590.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "160", info: "Cápsulas de café nescafé® Dolce Gusto® espresso intenso x 16 cápsulas", precio: "14745.00", fecha: "2024-04-06 18:14:52", supermercado: "Carrefour" }, { id: "161", info: "Café Dolca Suave Nescafé® 170 Gr", precio: "4800.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "162", info: "Cafe Dolca Suave Nescafe® 100 Gr", precio: "5137.50", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "163", info: "Café Dolca Original Nescafé® 170 Gr", precio: "4800.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "164", info: "Café Molido La Virginia 500 Gr", precio: "4345.90", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "165", info: "Cafe Molido La Morenita 500 Gr", precio: "4236.05", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "166", info: "Café Gold Nescafé® 100 Gr", precio: "9759.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "167", info: "Café Molido Clasico La Virginia 250 Gr", precio: "2210.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "168", info: "Café Molido La Morenita 250 Gr", precio: "2177.50", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "169", info: "Café Dolca Original Nescafe® 170 Gr", precio: "5850.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "170", info: "Café Molido Morenita Intenso 1kg.", precio: "8677.50", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "171", info: "Café En Capsulas Equilibrio La Virginia 52 Gr", precio: "4062.50", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "172", info: "Café Suave Mas Aroma Arlistan 170 Gr", precio: "5100.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "173", info: "Café La Planta De Café Molido 250 Gr", precio: "3450.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "174", info: "Café Dolca Suave Nescafé® 170 Gr", precio: "5850.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "175", info: "Café Suave Mas Aroma Arlistan 100 Gr", precio: "3150.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "176", info: "Café Bonafide Molido Sensaciones 500 Gr", precio: "7150.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "177", info: "Café Dolca Nescafé® Original 100 Gr", precio: "4110.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "178", info: "Cafe La Morenita Capsulas Colombia X52g", precio: "4290.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "179", info: "Café Bonafide Molido Sabor Intenso 500 Gr", precio: "7150.00", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "180", info: "Cafe En Cápsulas Sutil La Virginia 52 Gr", precio: "4062.50", fecha: "2024-04-06 18:26:18", supermercado: "Disco" }, { id: "181", info: "Cafe En Saquito Torrado La Virginia 100 Gr", precio: "2340.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "182", info: "Cafe Nescafe® Dolca Suave 50 Gr", precio: "2730.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "183", info: "Café Suave Mas Aroma Arlistan 50 Gr", precio: "1650.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "184", info: "Café La Virginia Selección Tostado X100g", precio: "3347.50", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "185", info: "Café Cabrales Molido 125g", precio: "2956.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "186", info: "Café La Virginia Clasico Espuma X170g", precio: "3835.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "187", info: "Café Bonafide Molido Sensaciones 1 Kg", precio: "12750.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "188", info: "Café Dolca Nescafé® Original 50 Gr", precio: "2730.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "189", info: "Cafe Descafeinado Kalma 100 Gr", precio: "3022.50", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "190", info: "Cafe La Virginia Suave Espuma Dpx100g", precio: "3300.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "191", info: "Café Dolca Capuccino Nescafe® 12,5 Gr", precio: "250.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "192", info: "Café Bonafide Molido Sabor Intenso 250 Gr", precio: "3750.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "193", info: "Café Molido Gimoka Vellutato", precio: "16000.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "194", info: "Café Dolca Choco Mocha Nescafé® 125 Gr", precio: "3000.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "195", info: "Café Bonafide Molido Sensaciones 250 Gr", precio: "3750.00", fecha: "2024-04-06 18:26:41", supermercado: "Disco" }, { id: "196", info: "Café Cabrales molido Peru X250g", precio: "10634.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "197", info: "Cafe En Capsulas Espresso Cioccolato Viaggio 10 Cápsulas", precio: "9350.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "198", info: "Café Espresso En Capsula Vainilla Viaggio 55 Gr", precio: "9350.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "199", info: "Cafe En Cápsulas Espresso Intenso Viaggio 10 U", precio: "8650.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "200", info: "Café En Capsulas Cremoso gimoka 10 U", precio: "8600.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "201", info: "Café El Pocillo Cebada Tostada Instantánea Maltife 170 Gr", precio: "2850.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "202", info: "Café Cebada Tostada Instantánea El Pocillo 100 Gr", precio: "2450.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "203", info: "Café En Cápsulas Espresso Arabica Viaggio 10 Capsulas", precio: "8650.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "204", info: "Café En Cápsulas Vellutato Gimoka 10 U", precio: "8600.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "205", info: "Café En Capsulas Intenso Gimoka 10 U", precio: "8600.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "206", info: "Café En Capsulas Lungo Gimoka 10 U", precio: "8600.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "207", info: "Café Esperesso En Capsulas Caramelo Viaggio 55 Gr", precio: "9350.00", fecha: "2024-04-06 18:26:58", supermercado: "Disco" }, { id: "208", info: "Nescafé® Tradición X 150gr", precio: "4725.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "209", info: "Capsulas Blonde Espresso Starbucks® Nespresso® 10 U", precio: "7612.50", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "210", info: "Mix Cappuccino Tradicional La Virginia 125 Gr", precio: "1787.50", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "211", info: "Cápsulas Cappuccino Dulce De Leche  Nescafé® X 16u", precio: "7943.25", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "212", info: "Cebada Maltitime Instantanea Cuisine And Co 170 Gr", precio: "1750.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "213", info: "Starbucks® Caffé Verona™ X 250gr", precio: "14700.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "214", info: "Cápsulas Starbucks Pike Place Starbucks® Nespresso® 10 U", precio: "10150.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "215", info: "Crema No Lactea En Polvo Coffee Mate® 170 Gr", precio: "3250.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "216", info: "Starbucks® Nespresso® Espresso Roast 10 U", precio: "10150.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "217", info: "Coffee Mate® Original 170 Gr", precio: "2800.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "218", info: "Mix Cappuccino La Virginia Mousse Dp155g", precio: "3500.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "219", info: "Mix Cappuccino La Virginia  Tradicional Dp275g", precio: "5850.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "220", info: "Mix Cappuccino Light La Virginia 90 Gr", precio: "4250.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "221", info: "Mix Cappuccino La Virginia Tradicional 125g", precio: "4000.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "222", info: "Capsulas Macchiato Nostro 100g", precio: "7000.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "223", info: "Cápsulas Espresso Fortissimo Viaggio 55 Gr - 10 Cápsulas", precio: "8000.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "224", info: "Capsulas Dgc Cappuccino La Virginia 116 Gr", precio: "10900.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "225", info: "Mix Cappuccino La Virginia  Dulce De Leche  Dp", precio: "3500.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "226", info: "Capsulas Macchiato Forte 100g", precio: "7000.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "227", info: "Starbucks® Cápsulas Madagascar Vainilla Macchiato X 12u.", precio: "7954.00", fecha: "2024-04-06 18:27:15", supermercado: "Disco" }, { id: "228", info: "Capsulas  Macchiato Grosso 100g", precio: "7000.00", fecha: "2024-04-06 18:27:31", supermercado: "Disco" }, { id: "229", info: "Mix Cortado La Virginia 125gr", precio: "1917.50", fecha: "2024-04-06 18:27:31", supermercado: "Disco" }, { id: "230", info: "Capsulas Dulce De Leche La Virginia 104 Gr", precio: "7085.00", fecha: "2024-04-06 18:27:31", supermercado: "Disco" }, { id: "231", info: "Mix Cappuccino La Virginia Mousse 155gr", precio: "3315.00", fecha: "2024-04-06 18:27:31", supermercado: "Disco" }, { id: "232", info: "Capsulas Sublime Gimoka 10 U", precio: "9600.00", fecha: "2024-04-06 18:27:31", supermercado: "Disco" }, { id: "233", info: "Mix Cortado La Virginia E125g", precio: "3022.50", fecha: "2024-04-06 18:27:31", supermercado: "Disco" }, { id: "234", info: "Capsulas Colombia Gimoka 10 U", precio: "9600.00", fecha: "2024-04-06 18:27:31", supermercado: "Disco" }, { id: "235", info: "Capsulas Macchiato Decaf 100g", precio: "7000.00", fecha: "2024-04-06 18:27:31", supermercado: "Disco" }, { id: "236", info: "Capsulas La Virginia 104 Gr", precio: "7085.00", fecha: "2024-04-06 18:27:31", supermercado: "Disco" }, { id: "237", info: "Capsulas Brasil Gimoka 10 U", precio: "9600.00", fecha: "2024-04-06 18:27:31", supermercado: "Disco" }, { id: "238", info: "Capsulas Ristretto Gimoka 10 U", precio: "9600.00", fecha: "2024-04-06 18:27:31", supermercado: "Disco" }, { id: "240", info: "Café Instantáneo Suave Doy Pack Dolca x 170 g.", precio: "4788.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "241", info: "Café Espresso Molido 100% Arábica La Virginia x 500 g.", precio: "11200.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "243", info: "Café Instantáneo Original Nescafé Dolca x 170g.", precio: "5844.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "244", info: "Café Molido Torrado Equilibrado La Virginia x 250 g.", precio: "3600.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "245", info: "Café Instantáneo Suave Nescafé Dolca x 50g.", precio: "2712.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "246", info: "Café Tostado Molido Colombia Morenita x 500 g.", precio: "12405.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "247", info: "Café en Saquitos La Virginia x 20 un.", precio: "3700.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "248", info: "Café Instantáneo Original Nescafé Dolca x 100g.", precio: "4080.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "249", info: "Cafe en Capsulas Espresso La Virginia x 10 Un.", precio: "5756.25", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "250", info: "Café Instantáneo Suave Nescafé Dolca x 170g.", precio: "5844.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "251", info: "Café Tostado Molido Puro Aroma La Virginia x 250 g.", precio: "4750.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "252", info: "Malta Instantánea Doy Pack Best x 100 g.", precio: "1087.50", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "253", info: "Cafe Molido Clasico La Virginia x 1 Kg.", precio: "14350.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "254", info: "Café Tostado en Capsulas Expresso Equilibrado La Virginia x 10 Un.", precio: "4626.75", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "255", info: "Polvo para Preparar Infusión a Base de Café Suave Arlistan x 100 g.", precio: "3350.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "256", info: "Café Instantáneo Capuccino Doy Pack La Anónima x 125 g.", precio: "1950.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "257", info: "Café Tostado en Capsulas Expresso Intenso La Virginia x 10 Un.", precio: "4626.75", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "258", info: "Café en Saquitos La Morenita x 20 un.", precio: "3609.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "259", info: "Café Instantáneo La Morenita x 100 g.", precio: "2700.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "260", info: "Café Instantáneo Tostado Gold Nescafé x 100 g.", precio: "14550.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "261", info: "Café con Leche en Capsulas Cabrales x 12 un.", precio: "11145.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "262", info: "Café Instantáneo Nescafé Tradición x 150g.", precio: "7000.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "263", info: "Café Tostado en Capsulas Expresso Sutil La Virginia x 10 Un.", precio: "4596.75", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "264", info: "Café Instántaneo Cappuccino Doy Pack Dolca x 225 g.", precio: "4550.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "265", info: "Café Torrado Molido La Anónima x 250 g.", precio: "3879.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "266", info: "Polvo para Preparar Infusión Base de Café Suave Arlistan x 50 g.", precio: "1750.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "267", info: "Cafe en Capsulas Cortado La Virginia x 10 Un.", precio: "5756.25", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "268", info: "Café Tostado en Capsulas Brasil La Morenita x 10 Un.", precio: "6479.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "269", info: "Café Tostado en Capsulas Colombia La Morenita x 10 Un.", precio: "6479.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "270", info: "Café Instantáneo Selección Granulado La Virginia x 100 g.", precio: "5475.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "271", info: "Café Instantáneo Clásico Pack ahorro La Virginia x 100 g.", precio: "3509.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "272", info: "Cafe Molido Intenso La Morenita x 1 Kg.", precio: "14205.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "273", info: "Café en Capsula Espresso Roast Starbucks x 10 Un.", precio: "8136.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "274", info: "Café Molido La Planta de Café x 500 g.", precio: "8139.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "275", info: "Café Molido Intenso La Mortenita x 500 g.", precio: "7425.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "276", info: "Café Molido Torrado Equilibrado La Virginia x 500 g.", precio: "7300.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "277", info: "Café Instantáneo Clásico Dp La Virginia x 170 g.", precio: "5479.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "278", info: "Café en Saquitos Cabrales x 18 un.", precio: "3659.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "279", info: "Café Instántaneo Chocolate Mocha Doy Pack Dolca x 125 g.", precio: "3300.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "280", info: "Cafe Torrado Molido La Planta De Cafe x 125 g.", precio: "1855.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "281", info: "Café Instantáneo Original Nescafé Dolca x 50g.", precio: "2712.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "282", info: "Cápsulas Blonde Espresso Starbucks Nespresso x 10u.", precio: "8136.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "283", info: "Café Molido Suave Bonafide Sensaciones x 500 g.", precio: "7050.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "284", info: "Cafe Instantaneo Descafeinado Kalma La Virginia x 100 g.", precio: "4989.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "285", info: "Café Instantáneo Capuccino Doy Pack La Anónima x 210 g.", precio: "4100.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "286", info: "Café Instantáneo Suave La Virginia x 100 g.", precio: "3995.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "287", info: "Coffee Mate Suave x 170g.", precio: "3850.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "288", info: "Café Instantáneo Cappuccino Espuma de Vainilla Dp La Virginia x 155 g.", precio: "3745.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "289", info: "Café Instantáneo Tradicional Cappuccino Dp La Virginia x 125 g.", precio: "2949.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "290", info: "Café Instantáneo Suave Nescafé Dolca x 100g.", precio: "4080.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "291", info: "Café Tostado y Molido Starbucks Single-Origin Colombia x 250g.", precio: "21900.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "292", info: "Cafe en Capsulas Cappuccino Tradicional La Virginia x 8 Un.", precio: "9206.25", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "293", info: "Cafe en Capsulas Cappuccino La Virginia x 8 Un.", precio: "9206.25", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "294", info: "Café Tostado en Capsulas Blend Italiano La Morenita x 10 Un.", precio: "7125.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "295", info: "Café Tostado en Capsulas Etiopia La Morenita x 10 Un.", precio: "6439.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "296", info: "Café Instantáneo Suave La Virginia x 170 g.", precio: "6329.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "297", info: "Polvo para Preparar Infusión a Base de Café Suave Arlistan x 100 g.", precio: "5350.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "298", info: "Café en Saquitos Los 5 Hispanos x 20 un.", precio: "4195.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "299", info: "Café Molido La Planta de Café x 250 g.", precio: "4145.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "300", info: "Café Instantáneo Cappuccino Dulce de Leche Dp La Virginia x 155 g.", precio: "3745.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "301", info: "Café Instantáneo Cappuccino Mousse de Chocolate y Avellanas Dp La Virginia x 155 g.", precio: "3745.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "302", info: "Café Instantáneo Suave Pack ahorro La Virginia x 100 g.", precio: "3509.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "303", info: "Café Instantáneo Nescafé Dolca Cookies & Cream x 125 g.", precio: "3350.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "304", info: "Café Instantáneo Nescafé Dolca Caramel x 125 g.", precio: "3300.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "305", info: "Café Instantáneo Latte Dp La Virginia x 125 g.", precio: "3149.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "306", info: "Café Instantáneo Cortado Dp La Virginia x 125 g.", precio: "3125.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "307", info: "Cebada Tostada Instantánea Intensa Doy Pack El Pocillo x 100 g.", precio: "2500.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "309", info: "Café Tostado y Molido Starbucks House Blend x 250 g.", precio: "21900.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "310", info: "Café Tostado y Molido Starbucks Caffé Verona x 250 g .", precio: "21900.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "311", info: "Café Tostado y Molido Starbucks Veranda x 250 g.", precio: "21900.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "312", info: "Café Tostado y Molido Equilibrado Nescafé Gold x 250g.", precio: "16750.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "313", info: "Café Molido Gold Intensidad 7 Doy Pack Nescafé x 100 g.", precio: "12400.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "314", info: "Cafe en Capsulas Cappuccino DDL La Virginia x 8 Un.", precio: "9206.25", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "315", info: "Cápsulas Pike Place Starbucks Nespresso x 10u.", precio: "8136.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "316", info: "Café Instantáneo Nescafé Descafeinado x 100g.", precio: "10200.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "317", info: "Café Instantáneo Clásico sin Azúcar Frasco La Planta de Café x 170 g.", precio: "8459.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "318", info: "Café Molido Los 5 Hispanos x 500 g.", precio: "7929.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "319", info: "Café Instáneo Clásico sin Azúcar Doy Pack La Planta de Café x 160 g.", precio: "7775.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "320", info: "Café Instáneo Suave sin Azúcar Doy Pack La Planta de Café x 160 g.", precio: "7775.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "321", info: "Café Tostado Molido en Capsulas Cabrales x 55 g.", precio: "7395.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "322", info: "Café Molido Tostado Cabrales x 250 g.", precio: "6355.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "323", info: "Café Instantáneo Clásico La Virginia x 170 g.", precio: "6350.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "324", info: "Café Instantáneo Tradicional Cappuccino Doy Pack La Virginia x 275 g.", precio: "6245.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "325", info: "Café Inst Suave sin Azúcar Doy Pack La Planta de Café x 110 g.", precio: "6175.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "326", info: "Café Instantáneo Suave sin Azúcar Frasco La Planta de Café x 100 g.", precio: "6175.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "327", info: "Cafe en Saquitos La Virginia x 20 Un.", precio: "5949.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "328", info: "Café Instantáneo Suave  La Virginia x 170 g.", precio: "5479.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "329", info: "Café Instantáneo Suave en Saquitos La Virginia x 36 Un.", precio: "4389.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "330", info: "Café Instantáneo Clásico En Sobres La Virginia x 36 Un.", precio: "4389.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "331", info: "Cappuccino Tradicional Sobres La Virginia x 10 Un.", precio: "4275.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "332", info: "Café Molido los 5 Hispanos x 250 g.", precio: "4155.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "334", info: "Cebada Tostada Instantanea El Pocillo x 170 g.", precio: "4100.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "335", info: "Café Instantáneo La Virginia x 100 g.", precio: "3995.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "336", info: "Coffee Mate Original x 170g.", precio: "3850.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "337", info: "Café Molido Intenso La Mortenita x 250 g.", precio: "3709.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "338", info: "Café Instantáneo Nescafé Dolca Latte x 125 g.", precio: "3300.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "340", info: "Café Instántaneo Cappuccino Doy Pack Dolca x 125 g.", precio: "3300.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "341", info: "Café Instántaneo Cortado Doy Pack Dolca x 125 g.", precio: "3300.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "342", info: "Café Instantáneo Capuccino Light Dp La Virginia x 100 g.", precio: "3115.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }, { id: "343", info: "Café Instantáneo Cappuccino La Morenita x 125 g.", precio: "2985.00", fecha: "2024-04-06 18:39:33", supermercado: "La Anonima" }] }, { type: "table", name: "cerveza", database: "comparaprecios", data: [{ id: "1", info: "Cerveza rubia Andes Origen 473 cc.", precio: "1039.35", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "2", info: "Cerveza negra Quilmes stout lata 473 cc.", precio: "897.00", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "3", info: "Cerveza rubia Schneider 710 cc.", precio: "990.50", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "4", info: "Cerveza rubia Corona 330 cc.", precio: "1114.75", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "5", info: "Cerveza rubia Corona 710 cc.", precio: "2258.75", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "6", info: "Cerveza rubia Quilmes 473 cc.", precio: "897.00", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "7", info: "Cerveza roja Patagonia amber lager 730 cc.", precio: "2163.85", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "8", info: "Cerveza rubia Patagonia 24.7 IPA con sauco 730 cc.", precio: "2163.85", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "9", info: "Cerveza rubia Quilmes clásica 340 cc.", precio: "458.25", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "10", info: "Cerveza blanca Brahma musica en lata 473 cc.", precio: "897.00", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "11", info: "Cerveza Patagonia ipa ow vera 730 cc.", precio: "2163.85", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "12", info: "Cerveza rubia Imperial extra lager en lata 473 cc.", precio: "1500.00", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "13", info: "Cerveza rubia Quilmes bajo cero en botella retornable 1 lt.", precio: "1361.75", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "14", info: "Cerveza blanca Schneider afa en lata 473 cc.", precio: "689.00", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "15", info: "Cerveza blanca Stella Artois vintage en lata 473 cc.", precio: "1266.85", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "16", info: "Cerveza blanca retor Warsteiner pilsener 1 lt.", precio: "2700.00", fecha: "2024-04-06 18:21:19", supermercado: "Carrefour" }, { id: "17", info: "Cerveza Corona en lata 410 cc.", precio: "1374.75", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "18", info: "Cerveza rubia Patagonia bohemian 730 cc.", precio: "2163.85", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "19", info: "Cerveza rubia Patagonia 24.7 IPA sauco 473 cc.", precio: "1422.85", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "20", info: "Cerveza rubia Ipa Imperial 473 cc.", precio: "1420.00", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "21", info: "Cerveza rubia Imperial golden lata 710 cc.", precio: "2530.00", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "22", info: "Cerveza sin alcohol Imperial roja en lata 355 cc.", precio: "1050.00", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "23", info: "Cerveza blanca Miller genuine draft en lata 473 cc.", precio: "880.00", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "24", info: "Cerveza roja Imperial lata 473 cc.", precio: "1420.00", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "25", info: "Cerveza variedades weisse Patagonia 730 cc.", precio: "2163.85", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "26", info: "Cerveza rubia Imperial lager 710 cc.", precio: "2530.00", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "27", info: "Cerveza dorada Brahma lata 473 cc.", precio: "897.00", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "28", info: "Cerveza blanca Grolsch en lata 473 cc.", precio: "975.00", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "29", info: "Cerveza blanca Quilmes doble malta en lata 473 cc.", precio: "1173.00", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "30", info: "Cerveza blanca Salta cautiva lata 473 cc.", precio: "1500.00", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "31", info: "Cerveza golden ale Pampa brewing lata 473 cc.", precio: "1072.50", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "32", info: "Cerveza rubia Heineken 710 cc.", precio: "1540.00", fecha: "2024-04-06 18:21:28", supermercado: "Carrefour" }, { id: "33", info: "Cerveza rubia Miller 710 cc.", precio: "1400.00", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "34", info: "Cerveza roja Imperial botella retornable 1 l.", precio: "2770.00", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "35", info: "Cerveza roja Salta cautiva lata 473 cc.", precio: "1550.00", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "36", info: "Cerveza ipa varied Patagonia 24.7 km retornable 1 lt.", precio: "2287.35", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "37", info: "Cerveza rubia Patagonia bohemian 473 cc.", precio: "1422.85", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "38", info: "Cerveza lager Goose island en botella 730 cc.", precio: "1903.85", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "39", info: "Cerveza lager coco Patagonia porrón 335 cc.", precio: "1422.85", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "40", info: "Cerveza sin alcohol Stella artois porrón 330 cc.", precio: "740.35", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "41", info: "Cerveza ipa Pampa Brewing lata 473 cc.", precio: "1300.00", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "42", info: "Cerveza roja Rabieta honey 473 cc.", precio: "1689.35", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "43", info: "Cerveza rubia Rabieta ipa 473 cc.", precio: "1689.35", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "44", info: "Cerveza rubia Heineken 330 cc.", precio: "800.00", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "45", info: "Cerveza ipa Grolsch en lata 473 cc.", precio: "975.00", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "46", info: "Cerveza negra Peñón del Águila schwarzbier 473 cc.", precio: "1950.00", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "47", info: "Cerveza artesanal honey Antares lata 473 cc.", precio: "2720.00", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "48", info: "Cerveza artesanal IPA Antares lata 473 cc.", precio: "2720.00", fecha: "2024-04-06 18:21:39", supermercado: "Carrefour" }, { id: "49", info: "Cerveza Goose Island lata 473 cc.", precio: "1331.85", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "50", info: "Cerveza roja Rabieta irish ale 473 cc.", precio: "1689.35", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "51", info: "Cerveza artesanal scotch Antares lata 473 cc.", precio: "2500.00", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "52", info: "Cerveza rubia Rabieta golden ale 473 cc.", precio: "1689.35", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "53", info: "Cerveza artesanal kolsch Antares lata 473 cc.", precio: "2500.00", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "54", info: "Cerveza roja Rabieta ipa 473 cc.", precio: "1689.35", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "55", info: "Cerveza rubia Peñón del Águila hefeweizen 473 cc.", precio: "1950.00", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "56", info: "Cerveza blanca Temple golden en lata 473 cc.", precio: "1422.85", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "57", info: "Cerveza session ipa Salta cautiva en lata 473 cc.", precio: "1400.00", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "58", info: "Cerveza rubia Miller 1 l.", precio: "1292.00", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "59", info: "Cerveza negra Peñón del Águila 473 cc.", precio: "1950.00", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "60", info: "Cerveza rubia Sol 473 cc.", precio: "975.00", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "61", info: "Cerveza blanca Blue moon blegian en lata 473 cc.", precio: "1100.00", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "62", info: "Cerveza rubia Peñón del águila 473 cc.", precio: "1950.00", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "63", info: "Cerveza rubia Peñón del Águila mexican lager 473 cc.", precio: "1950.00", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "64", info: "Cerveza red ale Lit lata 473 cc.", precio: "1490.00", fecha: "2024-04-06 18:21:50", supermercado: "Carrefour" }, { id: "65", info: "Cerveza rubia Schneider 473 cc.", precio: "689.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "66", info: "Cerveza rubia Antares caravana ipa 473 cc.", precio: "2720.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "67", info: "Cerveza apa Rabieta lata 473 cc.", precio: "1689.35", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "68", info: "Cerveza lager Goose island en lata 710 cc.", precio: "1825.85", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "69", info: "Cerveza blanca Miller edicion limitada en botella retornable 1 lt.", precio: "2925.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "70", info: "Cerveza blanca Antares playa grande en lata 473 cc.", precio: "2670.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "71", info: "Cerveza light lager Lit lata 473 cc.", precio: "1715.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "72", info: "Malta líquida sin alcohol Barbaroja porron 330 cc.", precio: "1710.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "73", info: "Cerveza american amber Peñón del Águila lata 473 cc.", precio: "2230.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "74", info: "Cerveza sin alcohol honey Barbaroja porron 330 cc.", precio: "1710.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "75", info: "Cerveza sin alcohol rubia Barbaroja porron 330 cc.", precio: "1710.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "76", info: "Cerveza de arándano Peñon del águila 473 cc.", precio: "2710.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "77", info: "Cerveza Budweiser música en lata 473 cc.", precio: "928.85", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "78", info: "Cerveza rubia Peñón del Águila waldbier 473 cc.", precio: "2515.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "79", info: "Malta líquida sin alcohol Barbaroja porron 625 cc.", precio: "2715.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "80", info: "Cerveza rubia Peñón del Águila maracuyá sour 473 cc.", precio: "2710.00", fecha: "2024-04-06 18:22:00", supermercado: "Carrefour" }, { id: "81", info: "Cerveza sin tacc Gauther de mijo framb en lata 473 cc.", precio: "3265.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "82", info: "Cerveza ipa Eazy 27 lata 473 cc.", precio: "1338.35", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "83", info: "Cerveza rubia Antares honey 500 cc.", precio: "3130.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "84", info: "Cerveza Siete cholas ipa en lata 473 cc.", precio: "2600.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "85", info: "Cerveza sin alcohol honey Barbaroja porron 625 cc.", precio: "2715.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "86", info: "Cerveza lager Barbaroja porron 330 cc.", precio: "1820.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "87", info: "Cerveza pale ale Barbaroja porron 625 cc.", precio: "2910.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "88", info: "Cerveza lemon Barbaroja porron 625 cc.", precio: "2910.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "89", info: "Cerveza sin alcohol honey Barbaroja porron 330 cc.", precio: "1955.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "90", info: "Cerveza session ipa Beepure botella 500 ml.", precio: "2269.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "91", info: "Cerveza micro ipa Antares 25 años en lata 473 cc.", precio: "3645.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "92", info: "Cerveza frutada Barbaroja porron 625 cc.", precio: "2910.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "93", info: "Cerveza Barbaroja con maracuya porron 625 cc.", precio: "3100.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "94", info: "Cerveza ipa Barbaroja porron 330 cc.", precio: "1955.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "95", info: "Cerveza sin alcohol lemon Barbaroja porron 330 cc.", precio: "1710.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "96", info: "Cerveza honey Beepure botella 500 ml.", precio: "2069.00", fecha: "2024-04-06 18:22:11", supermercado: "Carrefour" }, { id: "97", info: "Cerveza Siete cholas blonde ale en lata 473 cc.", precio: "2000.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "98", info: "Cerveza blanca Cusquena porrón 330 cc.", precio: "5800.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "99", info: "Pack de cerveza Peñon del aguila 2 latas 473 cc + 1 copa.", precio: "14505.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "100", info: "Cerveza red ipa Bierhaus lata 473 cc.", precio: "2560.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "101", info: "Cerveza negra dark Cusquena en botella 330 cc.", precio: "5800.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "102", info: "Cerveza de trigo Cusquena porrón 330 cc.", precio: "4640.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "103", info: "Cerveza ipa Bierhaus lata 473 cc.", precio: "2540.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "104", info: "Cerveza Siete chola porter en lata 473 cc.", precio: "2000.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "105", info: "Cerveza rubia Oranjeboom strong 8.5 en lata 500 cc.", precio: "5345.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "106", info: "Cerveza honey Bierhaus  lata 473 cc.", precio: "2000.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "107", info: "Cerveza rubia Monastere blond 500 cc.", precio: "6750.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "108", info: "Cerveza rubia Weidmann hefetrub 500 cc.", precio: "5700.00", fecha: "2024-04-06 18:22:21", supermercado: "Carrefour" }, { id: "109", info: "Cerveza Heineken Retornable 1 L", precio: "2161.25", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "110", info: "Cerveza Schneider Rubia 710 Ml", precio: "1326.00", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "111", info: "Cerveza Imperial Golden 1 L", precio: "1735.50", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "112", info: "Cerveza Brahma Dorada Retornable 1 L", precio: "1784.25", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "113", info: "Cerveza Quilmes Clásica Retornable 1 L", precio: "1840.00", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "114", info: "Cerveza Budweiser Retornable 1 L", precio: "1800.00", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "115", info: "Cerveza Andes Origen Rubia 473 Ml X 6 Un", precio: "7195.50", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "116", info: "Cerveza Imperial Extra Lager Uar 473 Ml", precio: "999.00", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "117", info: "Cerveza Brahma Chopp 473 Ml X 6 Un", precio: "6210.75", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "118", info: "Cerveza Andes Origen Ipa Andina 473 Ml X 6 Un", precio: "7195.50", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "119", info: "Cerveza Quilmes Ipa Retornable 1 L", precio: "1784.25", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "120", info: "Cerveza Imperial Ipa 473 Ml", precio: "1040.00", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "121", info: "Cerveza Schneider Afa 1lt Ret.", precio: "1543.75", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "122", info: "Cerveza Imperial Ipa Retornable 1 L", precio: "1800.50", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "123", info: "Cerveza Imperial Golden 710 Ml", precio: "1644.50", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "124", info: "Cerveza Amstel Lager 710 Ml", precio: "1250.00", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "125", info: "Cerveza Quilmes 0.0473 Ml X 6 Un", precio: "5419.50", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "126", info: "Cerveza Andes Origen Rubia Retornable 1 L", precio: "2034.00", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "127", info: "Cerveza Brahma Dorada 473 Ml X 6 Un", precio: "6210.75", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "128", info: "Cerveza Warsteiner Retornable 1 L", precio: "2041.00", fecha: "2024-04-06 18:36:13", supermercado: "Disco" }, { id: "129", info: "Cerveza Imperial Golden Ligera 473cc", precio: "1007.50", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "130", info: "Cerveza Grolsch 473 Ml", precio: "1150.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "131", info: "Cerveza Corona 410 Ml X 6 Un", precio: "9521.25", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "132", info: "Cerveza Miller Lager Ed. 1lt", precio: "1963.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "133", info: "Cerveza Grolsch Retornable 925 Ml", precio: "2161.25", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "134", info: "Cerveza Andes Origen Roja 473 Ml X 6 Un", precio: "7195.50", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "135", info: "Cerveza Quilmes Ipa 473 Ml X 6 Un", precio: "6210.75", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "136", info: "Cerveza Brahma Chopp Botella Retornable 1ltx1", precio: "1784.25", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "137", info: "Cerveza Heineken 150 Años 710 Ml", precio: "2002.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "138", info: "Cerveza Stella Artois 710 Ml X 4 Un", precio: "12183.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "139", info: "Cerveza Imperial Apa 1 L", precio: "2770.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "140", info: "Cerveza Stella Artois 473 Cc Six Pack Sin Alcohol", precio: "9950.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "141", info: "Cerveza Imperial Rubia 710 Ml", precio: "2530.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "142", info: "Cerveza Andes Origen Fresquita 473 Ml X 4 Un", precio: "6396.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "143", info: "Cerveza Imperial Apa 473 Ml", precio: "1600.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "144", info: "Cerveza Amstel Lager Retornaable 1 L", precio: "2450.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "145", info: "Cerveza Andes Origen Roja Botella Retornable 1ltx1", precio: "2712.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "146", info: "Cerveza Stella Artois Vinage Rubia 473cc Sixpa", precio: "11707.00", fecha: "2024-04-06 18:36:33", supermercado: "Disco" }, { id: "147", info: "Cerveza Patagonia 24.7 730 Ml", precio: "2498.25", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "148", info: "Cerveza Patagonia Amber Lager 730 Ml", precio: "2498.25", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "149", info: "Cerveza Antares Ipa 473 Ml", precio: "1350.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "150", info: "Cerveza Heineken 330 Ml", precio: "1040.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "151", info: "Cerveza Andes Origen Fresquita Retornable 1 L", precio: "2034.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "152", info: "Cerveza Heineken Cero 355 Ml", precio: "882.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "153", info: "Cerveza Miller Ed. 330cc", precio: "1400.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "154", info: "Cerveza Antares Caravana 473 Ml", precio: "2700.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "155", info: "Cerveza Budweiser 710 Ml X 4 Un", precio: "8946.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "156", info: "Cerveza Stella Artois Blanche 473 Ml X 6 Un", precio: "11707.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "157", info: "Cerveza Pampa Brewing Honey 473 Ml", precio: "1650.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "158", info: "Cerveza Patagonia Amber Lager 473 Ml X 6 Un", precio: "13135.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "159", info: "Cerveza Patagonia Ipa Estelar 473cc Six Pack", precio: "13134.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "160", info: "Cerveza Andes Origen Negra 473 Ml X 6 Un", precio: "9594.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "161", info: "Cerveza Pampa Brewing Cream Stout 473 Ml", precio: "1650.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "162", info: "Cerveza Patagonia Vera Ipa 730 Ml", precio: "3331.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "163", info: "Cerveza Andes Origen Rubia Lata 710 Ml X 4 Un", precio: "9898.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "164", info: "Cerveza Guinness Extra Stout 473 Ml", precio: "2600.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "165", info: "Cerveza Heineken Cero 330 Ml", precio: "1600.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "166", info: "Cerveza Miller 710 Ml", precio: "2800.00", fecha: "2024-04-06 18:36:50", supermercado: "Disco" }, { id: "167", info: "Cerveza Pampa Brewing Golden Ale 473 Ml", precio: "825.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "168", info: "Cerveza Rubia Patagonia Bohemian Pilsener 730 Ml", precio: "2498.25", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "169", info: "Cerveza Patagonia Vera Ipa 473 Ml X 6 Un", precio: "9851.25", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "170", info: "Cerveza Pampa Brewing Amber Ale 473 Ml", precio: "825.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "171", info: "Cerveza Patagonia Weisse 730 Ml", precio: "2498.25", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "172", info: "Cerveza Antares Kolsch 473 Ml", precio: "1250.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "173", info: "Cerveza Antares Scotch 473 Ml", precio: "2500.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "174", info: "Cerveza Antares Honey 473 Ml", precio: "2700.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "175", info: "Cerveza Patagonia 24.7 473 Ml X 6 Un", precio: "13135.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "176", info: "Cerveza Imperial Roja 0.0% 355cc", precio: "1165.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "177", info: "Cerveza Amstel Lager 473cc", precio: "1420.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "178", info: "Cerveza Patagonia Amber Lager Botella Retornable 1ltx1", precio: "3521.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "179", info: "Cerveza Imperial Golden 0.0355cc", precio: "1165.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "180", info: "Cerveza Blue Moon 473 Ml", precio: "2200.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "181", info: "Cerveza Sol Rubia 330 Ml", precio: "1500.00", fecha: "2024-04-06 18:37:06", supermercado: "Disco" }, { id: "182", info: "Cerveza Goose Island Ipa 473 Ml X 6 Un", precio: "8594.60", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "183", info: "Cerveza Salta Cautiva Rubia 1 L", precio: "1735.50", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "184", info: "Cerveza Salta Cautiva Retornable Blend 1 L", precio: "1735.50", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "185", info: "Cerveza Patagonia Bohemian Pilsener 473 Ml X 6 Un", precio: "9851.25", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "186", info: "Cerveza Salta Cautiva Roja 473 Ml", precio: "1007.50", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "187", info: "Cerveza Salta Cautiva Rubia 473 Ml", precio: "1007.50", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "188", info: "Cerveza Rabieta Golden Ale 473 Ml", precio: "2000.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "189", info: "Cerveza Temple Wolf Ipa 473 Ml X 6 Un", precio: "13135.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "190", info: "Cerveza Miller 473 Ml", precio: "1760.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "191", info: "Cerveza Iguana 1lt Retornalbe", precio: "2120.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "192", info: "Cerveza Bierhaus Chalaland 473 Ml", precio: "3250.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "193", info: "Cerveza Blue Moon 355 Ml", precio: "2800.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "194", info: "Cerveza Temple Scottish 473 Ml X 6 Un", precio: "13135.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "195", info: "Cerveza Temple Honey 473 Ml X 6 Un", precio: "13135.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "196", info: "Cerveza Rabieta American Ipa 473 Ml", precio: "2600.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "197", info: "Cerveza Peñon Del águila Rubia 473 Ml", precio: "2100.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "198", info: "Cerveza Kunstmann Ipa Session 470cc", precio: "2566.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "199", info: "Cerveza Peñon Del águila Negra 473 Ml", precio: "2100.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "200", info: "Cerveza Peñon Del Aguila Mexican Lager 473 Ml", precio: "2100.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "201", info: "Cerveza Grolsch Ipa  473 Ml", precio: "1950.00", fecha: "2024-04-06 18:37:22", supermercado: "Disco" }, { id: "202", info: "Cerveza Temple Indie Golden 473 Ml X 6 Un", precio: "8537.75", fecha: "2024-04-06 18:37:39", supermercado: "Disco" }, { id: "203", info: "Cerveza Chachingo Grape Ale 740 Ml", precio: "2668.80", fecha: "2024-04-06 18:37:39", supermercado: "Disco" }, { id: "204", info: "Cerveza Bierhaus Chalalager 473 Ml", precio: "1400.00", fecha: "2024-04-06 18:37:39", supermercado: "Disco" }, { id: "205", info: "Cerveza Bierhaus Honey 473 Ml", precio: "1100.00", fecha: "2024-04-06 18:37:39", supermercado: "Disco" }, { id: "206", info: "Cerveza Salta Cautiva Negra 473 Ml", precio: "1007.50", fecha: "2024-04-06 18:37:39", supermercado: "Disco" }, { id: "207", info: "Cerveza Bierhaus Ipa 473 Ml", precio: "1400.00", fecha: "2024-04-06 18:37:39", supermercado: "Disco" }, { id: "210", info: "Cerveza Ortuzar Honey 473 Ml", precio: "1325.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "211", info: "Cerveza Ortuzar Dubbel 473 Ml", precio: "1350.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "212", info: "Cerveza Cusqueña Oscura 330 Ml", precio: "3755.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "213", info: "Cerveza Sol Rubia 473 Ml", precio: "1950.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "214", info: "Cerveza Kunstmann Torobayo Roja 470 Ml", precio: "1539.60", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "215", info: "Cerveza Kilikia Lager 500 Ml", precio: "11600.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "216", info: "Cerveza Cusqueña Trigo 330 Ml", precio: "3955.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "217", info: "Cerveza Salta Cautiva Session Ipa 473cc", precio: "1508.87", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "218", info: "Cerveza Ortuzar Scottish 473 Ml", precio: "2650.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "219", info: "Cerveza Ortuzar German Pils 473cc", precio: "2750.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "220", info: "Cerveza Kilikia Dark 500 Ml", precio: "11600.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "221", info: "Cerveza Cusqueña 330 Ml", precio: "3455.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "222", info: "Cerveza Bitburger Lata 500 Ml", precio: "3399.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "223", info: "Cerveza Köstritzer 500 Ml", precio: "4255.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "224", info: "Cerveza Kinig Pilsener 500 Ml", precio: "3555.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "225", info: "Cerveza Ortuzar Poker 473 Ml", precio: "3000.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "226", info: "Cerveza Honey Beepure 500 Ml", precio: "1950.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "227", info: "Cerveza Scotish Beepure 500 Ml", precio: "1950.00", fecha: "2024-04-06 18:37:55", supermercado: "Disco" }, { id: "228", info: "Cerveza Belgian White Beepure 500 Ml", precio: "2250.00", fecha: "2024-04-06 18:38:11", supermercado: "Disco" }, { id: "229", info: "Cerveza Köstritzer 330 Ml", precio: "4255.00", fecha: "2024-04-06 18:38:11", supermercado: "Disco" }, { id: "230", info: "Cerveza Bitburger 330 Ml", precio: "3399.00", fecha: "2024-04-06 18:38:11", supermercado: "Disco" }, { id: "231", info: "Cerveza Ortuzar Golden 473 Ml", precio: "1325.00", fecha: "2024-04-06 18:38:11", supermercado: "Disco" }, { id: "232", info: "Cerveza Elitar 500ml Kilikia", precio: "11600.00", fecha: "2024-04-06 18:38:11", supermercado: "Disco" }, { id: "233", info: "Cerveza De Trigo Weidmann Rubia 500 Ml", precio: "5700.00", fecha: "2024-04-06 18:38:11", supermercado: "Disco" }, { id: "234", info: "Cerveza Oranjeboom Extra Strong 500 Ml", precio: "5100.00", fecha: "2024-04-06 18:38:11", supermercado: "Disco" }, { id: "235", info: "Cerveza Oranjeboom Original 500 Ml", precio: "5300.00", fecha: "2024-04-06 18:38:11", supermercado: "Disco" }, { id: "236", info: "Cerveza Trio Extra Stout", precio: "9585.59", fecha: "2024-04-06 18:38:11", supermercado: "Disco" }, { id: "237", info: "Cerveza Monastère Blond 500ml", precio: "6750.00", fecha: "2024-04-06 18:38:11", supermercado: "Disco" }, { id: "239", info: "Cerv Lager Landvik Lata 330 Ml Pack X6", precio: "2950.00", fecha: "2024-04-06 18:38:11", supermercado: "Disco" }, { id: "244", info: "Cerveza Quilmes Hinchada Lata 473cc x1", precio: "1400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "245", info: "Cerveza Quilmes Hinchada Lata 473cc x1", precio: "1400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "246", info: "Cerveza Lata Rugby Imperial x 473 cc.", precio: "1450.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "247", info: "Cerveza Quilmes Hinchada Lata 473cc x6", precio: "8250.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "248", info: "Cerveza Quilmes Clásica Botella Retornable 1Lt x1", precio: "925.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "249", info: "Cerveza Budweiser Lata 710cc x4", precio: "8950.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "250", info: "Cerveza Corona  Botella No Retornable 710cc x1", precio: "3500.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "251", info: "Cerveza Patagonia 24.7 Botella No Retornable 730cc x1", precio: "3350.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "252", info: "Cerveza Rubia Lata Andes Origen x 710 cc.", precio: "2500.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "253", info: "Cerveza Temple Indie Golden Lata 473cc x6", precio: "11400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "254", info: "Cerveza Lata Pack x 6 Un. 150 Años Heineken x 473 cc.", precio: "11850.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "255", info: "Cerveza Andes Origen Rubia Lata 473cc x6", precio: "9600.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "256", info: "Cerveza Patagonia Amber Lager Botella No Retornable 730cc x1", precio: "3350.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "257", info: "Cerveza Lata Heineken x 710 cc.", precio: "2700.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "258", info: "Cerveza Andes Origen IPA Andina Lata 473cc x6", precio: "9600.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "259", info: "Cerveza Imperial Lata x 710 cc.", precio: "2600.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "260", info: "Cerveza Stella Artois  Lata 473cc x1", precio: "1950.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "261", info: "Cerveza Corona Botella No Retornable 330cc x1", precio: "1750.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "262", info: "Cerveza Quilmes IPA Lata 473cc x6", precio: "8450.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "263", info: "Cerveza Temple Wolf IPA Lata 473cc x6", precio: "11400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "264", info: "Cerveza Andes Origen Roja Lata 473cc x6", precio: "6240.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "265", info: "Cerveza Andes Origen IPA Roja Lata 473cc x6", precio: "9600.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "266", info: "Cerveza Brahma Dorada Botella Retornable 1Lt. x1", precio: "2400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "267", info: "Cerveza Budweiser Lata 473cc x6", precio: "8550.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "268", info: "Cerveza Patagonia Weisse Botella No Retornable 730cc x1", precio: "3350.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "269", info: "Cerveza Patagonia Vera IPA Lata 473cc x6", precio: "11750.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "270", info: "Cerveza Lager x 6 Un. Goose Island x 473 cc.", precio: "11950.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "271", info: "Cerveza Andes Origen IPA Andina Lata 473cc x1", precio: "1600.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "272", info: "Cerveza Andes Origen Fresquita Lata 473cc x4", precio: "6400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "273", info: "Cerveza Quilmes 0.0% Lata 473cc x6", precio: "3600.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "274", info: "Cerveza Coco Lager Patagonia x 355 cc.", precio: "2200.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "275", info: "Cerveza Corona Lata 410cc x6", precio: "12650.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "276", info: "Cerveza Brahma Chopp Lata 473cc x6", precio: "8250.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "277", info: "Cerveza Música Pack x 6 Un. Brahma x 473 cc.", precio: "7395.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "278", info: "Cerveza Ipa Estelar x 6 Un. Patagonia x 473 cc.", precio: "13100.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "279", info: "Cerveza Stella Artois 0.0% Lata 473cc x1", precio: "1700.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "280", info: "Cerveza Corona Lata 410cc x1", precio: "2150.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "281", info: "Cerveza Rubia Pack x 4 Un. Andes Origen x 710 cc.", precio: "9900.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "282", info: "Cerveza Budweiser Lata 710cc x1", precio: "2250.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "283", info: "Cerveza Stella Artois Blanche Lata 473cc x1", precio: "1950.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "284", info: "Cerveza Andes Origen Rubia Lata 473cc x1", precio: "1600.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "285", info: "Cerveza Andes Origen Fresquita Lata 473cc x1", precio: "1600.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "286", info: "Cerveza Temple Honey Lata 473cc x6", precio: "11400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "287", info: "Cerveza Extra Osc. Waldbier Lata Peñón Del Águila x 473 cc.", precio: "2450.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "288", info: "Cerveza Quilmes Doble Malta Lata 473cc x1", precio: "1400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "289", info: "Cerveza Quilmes Doble Malta Lata 473cc x6", precio: "8250.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "290", info: "Cerveza Lata x 6 Un. Schneider x 473 cc..", precio: "7500.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "291", info: "Cerveza Temple Wolf IPA Lata 473cc x1", precio: "1900.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "292", info: "Cerveza Budweiser Lata 473cc", precio: "1450.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "293", info: "Cerveza Temple Cósmica Lata 473cc x6", precio: "11400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "294", info: "Cerveza Pack x 6 Un. Michelob x 473 cc.", precio: "9450.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "295", info: "Cerveza Long Neck Six Pack Corona", precio: "8150.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "296", info: "Cerveza Lata Ipa Beta Peñón del Águila x 473 cc.", precio: "2500.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "297", info: "Cerveza de Miel Honigbier Lata Peñón Del Águila x 473 cc.", precio: "2400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "298", info: "Cerveza Andes Origen IPA Roja Lata 473cc x1", precio: "1600.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "299", info: "Cerveza Lager Lata Amstel x 473 cc.", precio: "1300.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "300", info: "Cerveza Lata Amstel x 710 cc.", precio: "2300.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "301", info: "Cerveza Lata Red Irish Ale Rabieta x 473 cc.", precio: "2150.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "302", info: "Cerveza Patagonia Vera IPA Lata 473cc x1", precio: "2000.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "303", info: "Cerveza Lata Cream Stout Pampa Brewing x 473 cc.", precio: "1800.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "304", info: "Cerveza Quilmes 0.0% Lata 473cc x1", precio: "840.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "305", info: "Cerveza Goose Island IPA Lata 473cc x6", precio: "12250.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "306", info: "Cerveza Grolsch Pack x 6 Latas de 473 cc.", precio: "11850.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "307", info: "Cerveza Ipa Estelar Patagonia x 473 cc.", precio: "2200.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "308", info: "Cerveza Temple Honey Lata 473cc x1", precio: "1900.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "309", info: "Cerveza Temple Cósmica Lata 473cc x1", precio: "1900.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "310", info: "Cerveza Lata Pack x6 Stella Artois x 1614 cc.", precio: "2400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "311", info: "Cerveza Stella Artois Lata x 269 cc.", precio: "400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "312", info: "Cerveza 27 Eazy Lata 473cc x6", precio: "6300.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "313", info: "Cerveza Lata Pack x 6 Un. Warsteiner x 473 cc.", precio: "11050.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "314", info: "Cerveza Pack x 6 Un. Edición Limitada Miller x 473 cc.", precio: "10700.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "315", info: "Cerveza Roja x 6 Un. Imperial x 473 cc.", precio: "9750.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "316", info: "Cerveza Roja Lata Salta x 6 Latas de 473 cc.", precio: "9450.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "317", info: "Cerveza Rubia Lata Salta x 6 Latas de 473 cc.", precio: "9450.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "318", info: "Cerveza Lager Amstel Pack x 6 Latas de 473 cc", precio: "8650.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "319", info: "Cerveza Schneider Pack x 6 Latas de 473 cc.", precio: "8400.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "320", info: "Cerveza sin Retorno Grape Ale Chachingo x 740 cc.", precio: "2225.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "321", info: "Cerveza sin Retorno Botanic Lager Chachingo x 740 cc.", precio: "2225.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "322", info: "Cerveza Micro Ipa 25 Años Antares x 473 cc.", precio: "4350.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "323", info: "Cerveza NO Retornable Bohemian Patagonia x 730 cc.", precio: "3350.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "324", info: "Cerveza Honey Antares x 473 cc.", precio: "3250.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "325", info: "Cerveza Caravana Antares x 473 cc.", precio: "3250.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "326", info: "Cerveza Ipa Antares x 473 cc.", precio: "3250.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }, { id: "327", info: "Cerveza Dorada Citrica Playa Grande Antares x 473 cc.", precio: "3200.00", fecha: "2024-04-06 18:44:45", supermercado: "La Anonima" }] }, { type: "table", name: "leche", database: "comparaprecios", data: [{ id: "1", info: "Leche entera UAT Carrefour classic tetra 1 lt.", precio: "999.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "2", info: "Leche UAT entera Carrefour classic brik 1 lt.", precio: "999.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "3", info: "Leche ultra entera Carrefour classic sachet 1 lt.", precio: "940.80", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "4", info: "Leche entera larga vida La Serenísima clásica 3% botella 1 l.", precio: "1715.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "5", info: "Leche multivitaminas 3% La Serenísima sachet 1 l.", precio: "1240.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "6", info: "Leche multivitaminas 1% La Serenísima sachet 1 l.", precio: "1240.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "7", info: "Leche La Serenísima reducida en lactosa sachet 1 l.", precio: "1269.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "8", info: "Leche entera La Serenísima uat fortificada 3% tetra 200 cc.", precio: "755.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "9", info: "Leche entera Casanto 3 ultra para sachet 1 l.", precio: "1079.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "10", info: "Leche clásica Las tres niñas 3% fortificada 1 lt.", precio: "1350.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "11", info: "Leche multivitaminas 2% La Serenísima sachet 1 l.", precio: "1269.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "12", info: "Leche condensada Carrefour tetra 395 g.", precio: "1992.90", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "13", info: "Leche modificada en polvo Armonía 400 g.", precio: "4140.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "14", info: "Leche Las tres niñas 0% t graso fortificada 1 lt.", precio: "1350.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "15", info: "Leche UAT parcialmente descremada Carrefour classic brik 1 lt.", precio: "999.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "16", info: "Leche parcialmente descremada UAT Carrefour classic tetra 1 lt.", precio: "999.00", fecha: "2024-04-06 18:15:24", supermercado: "Carrefour" }, { id: "17", info: "Leche ulta parcial descremada Carrefour classic sachet 1 lt.", precio: "940.80", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "18", info: "Leche descremada larga vida La Serenísima cero lactosa 1 l.", precio: "1525.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "19", info: "Leche descremada La Serenísima UAT proteinas 1 l.", precio: "1530.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "20", info: "Leche La serenisima clásica 3% 1L.", precio: "1635.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "21", info: "Leche reducida en lactosa UAT Carrefour classic 1 lt.", precio: "1478.70", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "22", info: "Leche descremada larga vida La Serenísima liviana 1% botella 1 l.", precio: "1715.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "23", info: "Leche La serenísima con prebióticos 1lt.", precio: "1530.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "24", info: "Leche descremada Casanto 1 ultra para sachet 1 l.", precio: "1079.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "25", info: "Leche La serenísima clásica más liviana 2% 1L", precio: "1640.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "26", info: "Leche descremada La Serenísima hierro 1 l.", precio: "1755.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "27", info: "Leche La SerenÍsima barista 1L.", precio: "1530.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "28", info: "Leche descremada larga vida La Serenísima 0% 1 l.", precio: "1715.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "29", info: "Leche liviana Las tres niñas 2% fortificada 1 lt.", precio: "1350.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "30", info: "Leche descremada larga vida La Serenísima 2 % 1 l.", precio: "1715.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "31", info: "Leche descremada Casanto 2 ultra para sachet 1 l.", precio: "1079.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "32", info: "Leche descremada La Serenísima extra calcio 1 l.", precio: "1755.00", fecha: "2024-04-06 18:15:33", supermercado: "Carrefour" }, { id: "33", info: "Leche en polvo descremada Carrefour classic pouch 250 g.", precio: "2290.80", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "34", info: "Leche en polvo La serenísima descremada 400 g.", precio: "4150.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "35", info: "Leche en polvo La lechera entera 400 g.", precio: "2955.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "36", info: "Leche en polvo LA lechera entera 800 g.", precio: "5250.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "37", info: "Leche en polvo La serenísima zero lactosa 400 g.", precio: "5035.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "38", info: "Leche en polvo La serenísima entera 400 g.", precio: "3930.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "39", info: "Leche en polvo descremada fortificada La Serenísima 200 g.", precio: "1800.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "40", info: "Leche en polvo entera Carrefour classic pouch 400 g.", precio: "3079.30", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "41", info: "Leche en polvo entera La Serenísima bolsa 200 g.", precio: "1790.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "42", info: "Leche en polvo descremada Carrefour classic pouch 125 g.", precio: "1186.80", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "43", info: "Leche en polvo entera Carrefour classic pouch 125 g.", precio: "1186.80", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "44", info: "Bebida a base de proteínas lácteas Molico bolsa 800 g.", precio: "3810.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "45", info: "Leche en polvo descremada Svelty 370 g.", precio: "4430.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "46", info: "Leche en polvo entera Franz con vitamina A y D 800 g.", precio: "7315.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "47", info: "Leche en polvo entera Purísima 400 g.", precio: "3625.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "48", info: "Leche en polvo descremada Svelty 750 g.", precio: "8910.00", fecha: "2024-04-06 18:15:43", supermercado: "Carrefour" }, { id: "66", info: "Bebida lactea La serenísima frutilla sachet 900 cc.", precio: "1260.00", fecha: "2024-04-06 18:16:04", supermercado: "Carrefour" }, { id: "67", info: "Bebida lactea La serenísima vainilla sachet 900 cc.", precio: "1260.00", fecha: "2024-04-06 18:16:04", supermercado: "Carrefour" }, { id: "70", info: "Leche fermentada Actimel sabor frutilla 100 cc.", precio: "1089.00", fecha: "2024-04-06 18:16:04", supermercado: "Carrefour" }, { id: "71", info: "Leche fermentada multifruta Actimel 100 g.", precio: "1089.00", fecha: "2024-04-06 18:16:04", supermercado: "Carrefour" }, { id: "73", info: "Leche chocotalada UAT Cindor tetra 200 cc.", precio: "1190.00", fecha: "2024-04-06 18:16:04", supermercado: "Carrefour" }, { id: "74", info: "Leche UAT las tres niñas cookies and cream 200 cc.", precio: "736.00", fecha: "2024-04-06 18:16:04", supermercado: "Carrefour" }, { id: "76", info: "Leche fermentada plus guaraná y frutos rojos Actimel 100 g.", precio: "1089.00", fecha: "2024-04-06 18:16:04", supermercado: "Carrefour" }, { id: "77", info: "Bebida láctea La serenísima sabor frutilla UAT 1 lt.", precio: "2180.00", fecha: "2024-04-06 18:16:04", supermercado: "Carrefour" }, { id: "80", info: "Leche protein c chocolate La Serenísima bot larga vida 1 l.", precio: "2409.00", fecha: "2024-04-06 18:16:04", supermercado: "Carrefour" }, { id: "82", info: "Bebida láctea La Serenísima sense caramel 1 l.", precio: "2269.00", fecha: "2024-04-06 18:16:15", supermercado: "Carrefour" }, { id: "83", info: "Bebida lactea La serenísima frutilla brick 200 cc.", precio: "665.00", fecha: "2024-04-06 18:16:15", supermercado: "Carrefour" }, { id: "84", info: "Leche fermentada Kids mix de frutas Actimel 100 g.", precio: "1089.00", fecha: "2024-04-06 18:16:15", supermercado: "Carrefour" }, { id: "85", info: "Bebida lactea La serenísima vainilla brick 200 cc.", precio: "665.00", fecha: "2024-04-06 18:16:15", supermercado: "Carrefour" }, { id: "87", info: "Alimento bebible vegetal La serenísima sabor coco 1 lt.", precio: "2610.00", fecha: "2024-04-06 18:16:15", supermercado: "Carrefour" }, { id: "88", info: "Bebida láctea La serenísima sense cappuccino 200 cc.", precio: "939.00", fecha: "2024-04-06 18:16:15", supermercado: "Carrefour" }, { id: "90", info: "Bebida láctea La serenísima sense caramel 200 cc.", precio: "939.00", fecha: "2024-04-06 18:16:15", supermercado: "Carrefour" }, { id: "91", info: "Bebida láctea Bananita dolca 185 cc.", precio: "859.00", fecha: "2024-04-06 18:16:15", supermercado: "Carrefour" }, { id: "92", info: "Milkshake Nesquik sabor banana brick 190 cc.", precio: "1150.00", fecha: "2024-04-06 18:16:15", supermercado: "Carrefour" }, { id: "95", info: "Leche Uat La Serenisima 1 - 1 Lt", precio: "1227.04", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "96", info: "Leche La Serenisima Zerolact Bot 1l", precio: "1315.53", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "97", info: "Leche Las Tres Niñas Liviana X 1lt", precio: "971.25", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "98", info: "Leche La Serenisima Liviana Bot 1l", precio: "1199.00", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "99", info: "Leche Las Tres Niñas Clásica 3entera", precio: "971.25", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "100", info: "Leche Uat Serenisima 3 - 1 Lt", precio: "1227.04", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "101", info: "Leche Cuisine Y Co Semi Descremada 1l", precio: "1000.00", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "102", info: "Leche La Serenisima Entera Bot 1l", precio: "1199.00", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "103", info: "Leche Manfrey Entera U.a.t. Sin Atributo Sin Atributo Sin Atributo Sin Atributo", precio: "950.00", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "104", info: "Leche Uat La Serenísima Proteina 1lt", precio: "1315.53", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "105", info: "Leche Descremada La Serenísima 1sachet 1lt", precio: "1271.60", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "106", info: "Leche Entera La Serenísima 3sachet 1lt", precio: "1271.60", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "108", info: "Leche Descremada 1casanto 1l", precio: "1078.48", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "109", info: "Leche Descremada 0las Tres Niñas 1lt", precio: "971.25", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "110", info: "Leche Entera 3casanto 1l", precio: "1078.48", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "111", info: "Leche Reducida En Lactosa X 1l", precio: "1271.60", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "112", info: "Leche La Serenisima Entera 200cc", precio: "565.85", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "113", info: "Leche Las Tres Niñas Clásica Liviana 2", precio: "971.25", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "114", info: "Leche Uat Descremada La Serenísima 0", precio: "1287.06", fecha: "2024-04-06 18:27:58", supermercado: "Disco" }, { id: "115", info: "Leche De Almendras La Serenísima 1l", precio: "1695.69", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "116", info: "Leche La Serenísima Barista 1lt", precio: "1315.53", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "117", info: "Leche Uat Descremada La Serenísima Hierro 1lt", precio: "1315.53", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "118", info: "Leche La Serenisima Protein Con Chocolate 1l", precio: "1809.20", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "120", info: "Leche Uat La Serenísima Descremada 21lt", precio: "1199.00", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "121", info: "Leche Descremada La Serenísima 2sachet 1lt", precio: "1271.60", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "122", info: "Leche Uat Desc La Serenisima Calcio 1l", precio: "1315.53", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "125", info: "Leche Infantil Nido® 3 Defensas Listo Para Tomar 200ml", precio: "800.00", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "126", info: "Leche Uat Choc Las Tres Niñas 1l", precio: "2400.00", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "127", info: "Leche Silk A Base De  Coco 1l", precio: "3029.50", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "128", info: "Bebida Lactea A B/ Leche Ent Ls Sense Caramel Brik 1l", precio: "2269.94", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "130", info: "Leche Las Tres Niñas Cookies & Cream 200ml", precio: "800.00", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "131", info: "Madalenas Vainilla Con Dulce De Leche Cuisine And Co 180 Gr", precio: "1250.00", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "132", info: "Leche En Polvo Nutrifuerza La Lechera® 800 Gr", precio: "7831.00", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "133", info: "Leche En Polvo Descremada La Serenisima 200 Gr", precio: "2536.00", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "134", info: "Leche En Polvo Descremada Cuisine And Co. 800 Gr", precio: "6800.00", fecha: "2024-04-06 18:28:17", supermercado: "Disco" }, { id: "135", info: "Galletitas Donuts Chocolate Con Leche 78 Gr", precio: "1235.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "136", info: "Leche En Polvo Entera Cuisine And Co 800 Gr", precio: "6800.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "137", info: "Madalenas Chocolate Con Dulce De Leche Cuisine And Co. 180 Gr", precio: "1250.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "138", info: "Leche En Polvo Descremada Cuisine And Co 400 Gr", precio: "3850.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "139", info: "Madalenas Rellenas Con Dulce De Leche Bimbo 180 Gr", precio: "2100.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "140", info: "Cápsulas Cappuccino Dulce De Leche  Nescafé® X 16u", precio: "7943.25", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "141", info: "Leche En Polvo Entera Cuisine And Co 400 Gr", precio: "3850.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "142", info: "Madalenas Rellenas Con Dulce De Leche Valente 180 Gr", precio: "1900.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "143", info: "Leche En Polvo Descremada La Serenisima 400 Gr", precio: "5192.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "144", info: "Leche En Polvo Nidina® 1 800 Gr", precio: "13900.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "145", info: "Madalenas Chocolate Rellenas Con Dulce De Leche Bimbo 180 Gr", precio: "2100.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "146", info: "Galletitas Leche Donuts 52 Gr", precio: "1400.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "147", info: "Leche En Polvo Zero Lactosa La Serenisima 400 Gr", precio: "6279.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "148", info: "Leche En Polvo Plus Descremada Instantanea Purisima 800 Gr", precio: "8300.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "149", info: "Leche Nutrifuerza La Lechera® 400 Gr", precio: "4350.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "150", info: "Leche En Polvo Organica Nido 800 Gr", precio: "11900.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "151", info: "Madalenas Chocolate Con Dulce De Leche Valente 180 Gr", precio: "1900.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "152", info: "Leche En Polvo Plus Entera Instantanea Purisima 800 Gr", precio: "8250.00", fecha: "2024-04-06 18:28:34", supermercado: "Disco" }, { id: "153", info: "Leche En Polvo Entera La Serenisima 400 Gr", precio: "3374.80", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "154", info: "Leche En Polvo Entera Reducida En Lactosa Purisima 400 Gr", precio: "4900.00", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "155", info: "Mix Cappuccino La Virginia  Dulce De Leche  Dp", precio: "2275.00", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "156", info: "Magdalenas Chocolate Con Dulce De Leche Don Satur 220 Gr", precio: "1850.00", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "157", info: "Leche En Polvo Purisima Kids. X800g", precio: "4907.50", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "158", info: "Capsulas Dulce De Leche La Virginia 104 Gr", precio: "7085.00", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "159", info: "Leche En Polvo Bebe Advanced 3 Sancor 800 Gr", precio: "23100.00", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "160", info: "Leche En Polvo Bebe 3 Sancor 800 Gr", precio: "18000.00", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "161", info: "Leche Uat 2 Sancor Bebe Advanced 500ml", precio: "3550.00", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "162", info: "Leche Uat Sancor Bebé Advanced 3 200 Ml", precio: "1100.00", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "163", info: "Leche Uat Nutrilon 1 200 Ml", precio: "1800.00", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "164", info: "Leche Uat Sancor Bebe Advanced 2 200 Ml", precio: "1600.00", fecha: "2024-04-06 18:28:51", supermercado: "Disco" }, { id: "165", info: "Leche Uat Nutrilon 4 200 Ml", precio: "1550.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "166", info: "Leche Uat Nutrilon 3 200 Ml", precio: "1600.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "167", info: "Dulce De Leche Not Dulce De Leche  250 Gr", precio: "1495.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "168", info: "Leche De Coco Mais Coco 200 Ml", precio: "3500.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "169", info: "Leche De Coco Mais Coco 200 Ml", precio: "3000.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "170", info: "Leche De Coco Sococo 200 Gr", precio: "5650.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "171", info: "Leche De Coco Mais Coco 500 Ml", precio: "8000.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "172", info: "Leche De Coco Sococo 200 Gr", precio: "4850.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "173", info: "Dulce De Leche La Serenisima Clasico 400g", precio: "2120.40", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "174", info: "Dulce De Leche La Serenisima Colonial 400 G", precio: "2534.39", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "175", info: "Dulce De Leche La Serenísima Repostero 400g", precio: "2293.42", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "176", info: "Dulce De Leche Cuisine And Co 400g", precio: "1100.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "177", info: "Oblea Leche 4 Fingers Kitkat® 41.5 Gr", precio: "1250.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "178", info: "Dulce De Leche La Serenisima Colonial 1kg", precio: "5530.97", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "179", info: "Alfajor Negro Con Dulce De Leche Jorgito Mini 155 Gr", precio: "2600.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "180", info: "Dulce De Leche La Serenisima Colonial 250g", precio: "1663.33", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "181", info: "Oblea Leche Nugaton 27 Gr", precio: "700.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "182", info: "Arroz Con Leche Tregar Canela 180gr", precio: "1000.00", fecha: "2024-04-06 18:29:10", supermercado: "Disco" }, { id: "183", info: "Alfajor Dulce De Leche Chocoarroz 22 Gr", precio: "422.50", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "184", info: "Chocolate Con Leche Milka 55g.", precio: "1170.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "185", info: "Chocolate Block Con Leche Cofler 300 Gr", precio: "4290.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "186", info: "Alfajor Triple Milka Dulce De Leche 70g.", precio: "766.35", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "187", info: "Dulce De Leche La Serenisima Red Lactosa Pote 300g", precio: "1408.80", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "188", info: "Caramelos Butter Toffees Dulce De Leche Arcor 140 Gr", precio: "1072.50", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "189", info: "Dulce De Leche Milkaut Repostero 400g", precio: "2800.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "190", info: "Dulce De Leche Milkaut De Campo Familiar X 395 G", precio: "2250.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "191", info: "Dulce De Leche La Cremeria Milkaut Con Crema 320g", precio: "2300.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "192", info: "Alfajor Negro Con Dulce De Leche Jorgito 330 Gr", precio: "5500.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "193", info: "Tableta De Chocolate Con Leche Cofler 140 Gr", precio: "2550.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "194", info: "Flan Dulce De Leche Sobre Exquisita 40 Gr", precio: "900.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "195", info: "Chocolate Full Mani Con Dulce De Leche Georgalos X9g", precio: "300.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "196", info: "Postre Light Sabor Dulce De Leche Exquisita X 60 Gr", precio: "1050.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "197", info: "Chocolate Con Leche Cofler 55 Gr", precio: "1400.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "198", info: "Dulce De Leche Franz 1kg", precio: "3500.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "199", info: "Chocolate Con Leche Hersheys 92 Gr", precio: "2050.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "200", info: "Chocolate Con Leche Milka Leger 50g", precio: "1800.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "201", info: "Chocolate Arcor Con Leche 25 Gr", precio: "850.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "202", info: "Postre Dulce De Leche Royal 75 G", precio: "900.00", fecha: "2024-04-06 18:29:26", supermercado: "Disco" }, { id: "203", info: "Alfajor De Arroz Dulce De Leche Con Chocolate Lulemuu 22gr", precio: "325.00", fecha: "2024-04-06 18:29:43", supermercado: "Disco" }, { id: "204", info: "Flan Sancor Casero Con Dulce De Leche 2 X 115gr", precio: "1410.00", fecha: "2024-04-06 18:29:43", supermercado: "Disco" }, { id: "205", info: "Tableta De Dulce De Leche Vauquita 140 Gr", precio: "1850.00", fecha: "2024-04-06 18:29:43", supermercado: "Disco" }, { id: "206", info: "Bocadito Dulce De Leche Bonafide 16 Gr", precio: "400.00", fecha: "2024-04-06 18:29:43", supermercado: "Disco" }, { id: "207", info: "Pastillas De Chocolate Droste Con Leche 100 Gr", precio: "2015.00", fecha: "2024-04-06 18:29:43", supermercado: "Disco" }, { id: "208", info: "Chocolate Aireado Con Leche Hersheys 85 Gr", precio: "1332.50", fecha: "2024-04-06 18:29:43", supermercado: "Disco" }, { id: "209", info: "Tableta Chocolate De Leche Y Almendras Cofler 140 Gr", precio: "3850.00", fecha: "2024-04-06 18:29:43", supermercado: "Disco" }, { id: "210", info: "Alfajor Negro Con Dulce De Leche Tatin 60 Gr", precio: "459.00", fecha: "2024-04-06 18:29:43", supermercado: "Disco" }, { id: "211", info: "Helado Dulce De Leche Exquisita X 52gr", precio: "1550.00", fecha: "2024-04-06 18:29:43", supermercado: "Disco" }, { id: "212", info: "Alfajor Happy Food Coco Y Dulce De Leche X3 150gr", precio: "2470.00", fecha: "2024-04-06 18:29:58", supermercado: "Disco" }, { id: "213", info: "Oblea Chocolate Con Leche Hershey\\'s 102 Gr", precio: "1950.00", fecha: "2024-04-06 18:29:58", supermercado: "Disco" }, { id: "214", info: "Chocolate Con Leche Belgian 100 Gr", precio: "5460.00", fecha: "2024-04-06 18:29:58", supermercado: "Disco" }, { id: "215", info: "Alfajor Chocoarroz Dulce De Leche 22 Gr", precio: "2210.00", fecha: "2024-04-06 18:29:58", supermercado: "Disco" }, { id: "216", info: "Hersheys Chocolate Con Leche 82gr", precio: "2359.49", fecha: "2024-04-06 18:29:58", supermercado: "Disco" }, { id: "218", info: "Leche fermentada multifruta Actimel 100g.", precio: "1278.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "219", info: "Leche fermentada Plus guaraná y frutos rojos Actimel 100g.", precio: "1278.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "220", info: "Leche en Polvo Nutrifuerza La Lechera x 800 g.", precio: "8400.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "221", info: "Leche en Polvo Nido 4 Prebio 3 x 800g.", precio: "12750.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "222", info: "Leche en Polvo Nutrifuerza La Lechera x 400 g.", precio: "4600.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "223", info: "Leche fermentada frutilla Actimel 100g.", precio: "1278.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "224", info: "Leche L.V. Entera Tregar x 1 Lt.", precio: "1012.50", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "225", info: "Leche L.V. Descremada La Anónima x 1 lt.", precio: "1365.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "226", info: "Leche LV Parcialmente Descremada Tregar x 1 Lt.", precio: "1012.50", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "227", info: "Leche L.V. Entera La Anónima x 1 lt.", precio: "1365.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "228", info: "Leche LV Entera Clásica 3% Las Tres Niñas x 1 Lt.", precio: "1350.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "229", info: "Leche Entera La Anónima Ultra Fortificada Sachet x 1 Lt.", precio: "1250.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "230", info: "Leche Descremada La Anónima Ultra Fortificada Sachet x 1 Lt", precio: "1200.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "231", info: "Leche L.V. La Anónima Entera x 1 Lt.", precio: "1365.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "232", info: "Leche L.V. Parcialmente Descremada Fortificada Hierro 1% La Serenísima x 1 kg.", precio: "2100.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "233", info: "Leche Ultra Parcialmente Descremada Sachet 1% Casanto x 1 Lt.", precio: "1062.50", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "234", info: "Leche Larga Vida Descremado  Fort. con Vitamina Ad Verónica x 1 Lt.", precio: "1079.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "235", info: "Leche Ultra Entera Sachet 3% Casanto x 1 Lt.", precio: "1062.50", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "236", info: "Leche LV Entera Clasica 3% La Serenisima x 1 Lt.", precio: "1462.50", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "237", info: "Leche Parcialmente Descremada 0% Lactosa La Serenísima Botella x 1 Lt.", precio: "2100.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "238", info: "Leche L.V. Parcialmente Descremada Fortificada Extra Calcio La Serenísima x 1 Lt.", precio: "2100.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "239", info: "Leche LV Parcialmente Descremada Liviana 1% Las Tres Niñas x 1 Lt.", precio: "1350.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "240", info: "Leche Ultra Parcialmente Descremada Sachet 2% Casanto x 1 Lt.", precio: "1062.50", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "241", info: "Leche Reducida en Lactosa Sachet La Serenisima x 1 Lt.", precio: "1400.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "242", info: "Leche LV Descremada 0% Fortificada c/Vit. Bot La Serenísima x 1 Lt.", precio: "2100.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "243", info: "Leche Parcialmente Descremadaultra Multidefensas La Serenísima x 1 Lt.", precio: "1450.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "244", info: "Leche LV Entera Clásica Fortificada c/ Vitamina 3% La Serenísima x 200 cc.", precio: "990.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "245", info: "Leche Modificada en Polvo Inst Franciscana x 800 g.", precio: "3493.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "246", info: "Leche Entera Multidefensas 3%Sachet La Serenísima x 1 Lt.", precio: "1450.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "247", info: "Leche L.V. La Anónima Descremada x 1 Lt.", precio: "1365.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "248", info: "Leche LV Parcialmente Descremada Liviana 1% La Serenisima x 1 Lt.", precio: "1462.50", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "249", info: "Leche Parcialmente Descremada 0% Lactosa Las Tres Niñas x 1 Lt.", precio: "1400.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "250", info: "Leche 0% Lactosa La Anónima x 1 Lt.", precio: "2100.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "251", info: "Leche LV Parcialmente Descremada Clásica Liviana 2% Las Tres Niñas x 1 Lt.", precio: "1350.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "252", info: "Leche L.V. Entera Clásica 3% La Serenísima Botella x 1 Lt.", precio: "2050.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "253", info: "Leche L.V. Parcialmente Descremada Liviana 1% La Serenísima Botella x 1 Lt.", precio: "2050.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "255", info: "Leche en Polvo Descremada La Anónima x 400 g.", precio: "3325.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "258", info: "Leche Lv. Reducida en Lactosada Ilolay x 1 Lt.", precio: "2050.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "259", info: "Leche Larga Vida Entera Ilolay x 1 L.", precio: "1900.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "260", info: "Leche Parcialmente Descremada Multidefensas 2% Sachet La Serenísima x 1 Lt.", precio: "1500.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "261", info: "Leche Condensada Orgánica Nestlé x 395 g.", precio: "3700.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "263", info: "Leche en Polvo Entera La Anónima x 800 g.", precio: "6355.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "264", info: "Leche L.V. Parc. Descremada 2% La Serenísima Botella x 1 Lt.", precio: "2050.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "265", info: "Leche L.V. Parcialmente Descremada Manfrey x 1 Lt.", precio: "1300.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "267", info: "Leche Condensada Light Nestlé x 395 g.", precio: "3700.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "268", info: "Leche en Polvo Descremada Est La Serenísima x 400 g.", precio: "4700.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "269", info: "Leche en Polvo Santa Clara Entera Fortificada A y D x 800 g.", precio: "4600.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "270", info: "Leche Larga Vida Descremada Ilolay x 1 L.", precio: "1900.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "271", info: "Leche LV Descremada 0% Las Tres Niñas x 1 Lt.", precio: "1350.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "272", info: "Leche en Polvo Zero Lactosa Est La Serenísima x 400 g.", precio: "5700.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "274", info: "Leche Uat Cookies y Cream Las Tres Niñas x 200 cc.", precio: "480.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "276", info: "Leche en Polvo Nido Fortigrow x 800g.", precio: "11550.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "277", info: "Leche La Serenisima Protein Con Chocolate  x1L", precio: "2900.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "281", info: "Leche LV Parcialmente Descremada Prebiótica 1% Botella La Serenísima x 1 Lt.", precio: "2100.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "282", info: "Leche L.V. Parcialmente Descremada 0% Botella La Serenísima x 1 Lt.", precio: "2050.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "283", info: "Leche L.V. Entera Manfrey x 1 Lt.", precio: "1350.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "284", info: "Leche en Polvo Etapa 3 Forti protectus Lata Nido x 800 g.", precio: "14300.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "285", info: "Leche en Polvo Descremada Plus Purísima x 800 g.", precio: "7649.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "286", info: "Leche en Polvo Entera Purísima x 400 g.", precio: "3939.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "287", info: "Leche Parcialmente Descremada Barista Botella La Serenisima x 1 Lt.", precio: "2100.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "289", info: "Leche en Polvo Orgánica Nido x 800 g.", precio: "10720.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "290", info: "Leche en Polvo Etapa 4 Realidad Aumentada Lata Nido x 800 g.", precio: "10240.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "291", info: "Leche en Polvo Descremada Svelty x 750g.", precio: "10400.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "292", info: "Leche en Polvo Fortigrow Realidad Aumentada Nido  x  750 g.", precio: "8280.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "293", info: "Leche en Polvo 0% Lactosa Svelty x 350 g.", precio: "8150.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "294", info: "Leche en Polvo Entera Plus Purísima x 800 g.", precio: "7795.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "295", info: "Leche Modificada en Polvo Nut. Eq. Armonía x 800 g.", precio: "7450.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "296", info: "Leche en Polvo Entera La Paulina x 800 g.", precio: "7209.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "297", info: "Leche en Polvo Descremada Santa Clara Fortificada 0% Grasa x 800 g.", precio: "7200.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "298", info: "Leche Modificada en Polvo Estuche Formidable x 800 g.", precio: "6339.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "299", info: "Leche en Polvo Descremada Svelty x 370g.", precio: "5700.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "300", info: "Leche en Polvo Fortigrow Realidad Aumentada Nido x 370 g.", precio: "4520.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }, { id: "301", info: "Leche en Polvo Descremada en Sobres Purísima x 150 g.", precio: "3805.00", fecha: "2024-04-06 18:40:12", supermercado: "La Anonima" }] }, { type: "table", name: "pan", database: "comparaprecios", data: [{ id: "1", info: "Pan de mesa Veneziana blanco 600 g.", precio: "3100.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "2", info: "Pan blanco Lactal bolsa 315 g.", precio: "1830.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "3", info: "Pan de mesa Carrefour classic con salvado 620 g.", precio: "2691.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "4", info: "Pan de mesa Carrefour classic blanco lacteado 600 g.", precio: "3084.90", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "5", info: "Pan de mesa Bimbo tipo artesano 500 g.", precio: "4770.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "6", info: "Pan blanco Bimbo 550 g.", precio: "4160.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "7", info: "Pan Blanco Lactal rodajas finas en bolsa 460 g.", precio: "2490.50", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "8", info: "Pan de salvado Lactal bolsa 330 g.", precio: "2380.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "9", info: "Pan integral Fargo grano entero bolsa 350 g.", precio: "3580.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "10", info: "Pan de salvado Lactal rodajas finas 560 g.", precio: "2900.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "11", info: "Pan Fargo cereales y semillas bolsa 400 g.", precio: "3580.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "12", info: "Pan salvado Fargo plus bolsa 600 g.", precio: "4590.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "13", info: "Pan artesanal doble integral Carrefour 570 g.", precio: "3555.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "14", info: "Pan de mesa Bimbo liviano acti leche 400 g.", precio: "3240.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "15", info: "Pan lacteado Carrefour classic de mesa 360 g.", precio: "1881.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "16", info: "Baguette clásica x uni", precio: "1050.00", fecha: "2024-04-06 18:19:08", supermercado: "Carrefour" }, { id: "17", info: "Pan integral Dr. Cormillot Veneziana 639 g.", precio: "3685.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "18", info: "Pan con semillas Oroweat bolsa 600 g.", precio: "6380.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "19", info: "Pan de mesa blanco cristal 600 g", precio: "2290.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "20", info: "Pan con cereales Oroweat 600 g.", precio: "6380.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "21", info: "Pan de mesa Veneziana integral con salvado 360 g.", precio: "2300.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "22", info: "Pan para hamburguesa Fargo en bolsa 210 g.", precio: "1770.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "23", info: "Pan blanco Fargo en bolsa 330 g.", precio: "2930.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "24", info: "Pan de campo La Veneziana tipo casero 400 g.", precio: "2570.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "25", info: "Pan de mesa artesanal Carrefour blanco 580 g.", precio: "3230.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "26", info: "Pan de mesa salvado cristal 380 g.", precio: "1690.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "27", info: "Pan tipo de campo Bimbo artesano con semillas en bolsa 500 g.", precio: "5720.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "28", info: "Pan lacteado Fargo original bolsa 380 g.", precio: "2930.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "29", info: "Pan de mesa blanco cristal 380 g", precio: "1690.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "30", info: "Pan salvado Fargo plus 350 g.", precio: "3395.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "31", info: "Pan con lino Bimbo 380 g.", precio: "3900.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "32", info: "Pan de mesa lacteado La Perla 620 g.", precio: "3280.00", fecha: "2024-04-06 18:19:16", supermercado: "Carrefour" }, { id: "33", info: "Mini baguette clásica x uni", precio: "489.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "34", info: "Pan de mesa Cormillot Veneziana multicereal 410 g.", precio: "2970.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "35", info: "Pan roseta congelada Mamá cocina 6 uni", precio: "2165.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "36", info: "Pan de pebetes 250 g. x 4 uni", precio: "1190.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "37", info: "Pan multisemilla La Perla 600 g.", precio: "3330.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "38", info: "Pan trisalvado light Dr. Cormillot Veneziana 360 g.", precio: "2300.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "39", info: "Pan blanco Bimbo cero cero en bolsa 385 g.", precio: "3570.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "40", info: "Pan de mesa chico La Perla 330 g.", precio: "1750.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "41", info: "Pan para super panchos Fargo en bolsa 390 g.", precio: "3000.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "42", info: "Pan integral Bimbo 600 g.", precio: "4450.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "43", info: "Pan La Perla multicereal 600 g.", precio: "3330.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "44", info: "Pan con salvado La Perla 640 g.", precio: "3370.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "45", info: "Pan con salvado La Perla 350 g.", precio: "1900.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "46", info: "Pan de chips La Perla 16 u.", precio: "1500.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "47", info: "Mini ciriolla toscana x uni", precio: "1099.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "48", info: "Pan de molde Smams sin tacc 200 g.", precio: "4835.00", fecha: "2024-04-06 18:19:27", supermercado: "Carrefour" }, { id: "49", info: "Pan campito salvado 1 u.", precio: "2150.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "50", info: "Pan campero Kansas 2 uni", precio: "1750.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "51", info: "Pan campito semillas 1 u.", precio: "2030.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "52", info: "Pan de mesa lacteado Veneziana 400 g.", precio: "2100.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "53", info: "Rapiditas clasicas Bimbo bolsa 275 g.", precio: "2390.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "54", info: "Pan para hamburguesas Bimbo artesano 4 uni", precio: "2310.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "55", info: "Pan para hamburguesa Bimbo con sésamo 4 uni", precio: "1930.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "56", info: "Pan para pancho Bimbo artesano bolsa 6 uni", precio: "2310.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "57", info: "Tortillas de trigo Carrefour classic 300 g.", precio: "1487.20", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "58", info: "Rapiditas light Bimbo bolsa 275 g.", precio: "2390.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "59", info: "Pan para pancho Lactal 210 g.", precio: "1370.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "60", info: "Pan para hamburguesa Lactal bolsa x 4 uni", precio: "1370.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "61", info: "Rapiditas integrales Bimbo bolsa 275 g.", precio: "2390.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "62", info: "Pan para hamburguesa Fargo con sésamo x 4 uni", precio: "1770.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "63", info: "Pan de papa para hamburguesa Bimbo artesano 4 uni", precio: "2690.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "64", info: "Pan para pancho Fargo x 6 uni", precio: "1770.00", fecha: "2024-04-06 18:19:38", supermercado: "Carrefour" }, { id: "65", info: "Tortilla integral Veneziana 6 u.", precio: "1220.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "66", info: "Pan para panchos Veneziana 6 u.", precio: "1400.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "67", info: "Pan para panchos La perla 6 uni", precio: "1200.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "68", info: "Pan para pancho Bimbo 6 uni", precio: "2000.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "69", info: "Tortillas clásicas Veneziana 165 g.", precio: "1280.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "70", info: "Pan para hamburguesas Veneziana 4 u.", precio: "1400.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "71", info: "Pan de papa para panchos Bimbo artesano en bolsa 6 uni", precio: "2750.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "72", info: "Pan de panchos 230 g. x 6 uni", precio: "1190.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "73", info: "Pan para hamburguesa La perla 4 uni", precio: "1200.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "74", info: "Pan para hamburguesa La Perla con sesamo 200 g.", precio: "1430.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "75", info: "Pan para hamburguesa Bimbo brioche bolsa x 4 uni", precio: "2690.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "76", info: "Tortillas con trigo Tía rosa en bolsa 10 uni", precio: "2620.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "77", info: "Pan para hamburguesa Veneziana 4 u.", precio: "1540.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "78", info: "Pan para hamburguesa de queso", precio: "2990.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "79", info: "Pan para hamburguesa con puré de papa", precio: "2990.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "80", info: "Pan para hamburguesa brioche", precio: "2690.00", fecha: "2024-04-06 18:19:48", supermercado: "Carrefour" }, { id: "81", info: "Pan de hamburguesa de papa Kansas con parmesano 4 uni", precio: "2800.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "82", info: "Pan de pancho Kansas 6 uni", precio: "1550.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "83", info: "Pan de hamburguesa de papa Kansas tradicional 4 uni", precio: "2350.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "84", info: "Pan para super pancho La Perla 6 u.", precio: "1980.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "85", info: "Pan de hamburguesa de papa Kansas con sesamo 4 uni", precio: "2500.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "86", info: "Pan para hamburguesa de remolacha veggie", precio: "2990.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "87", info: "Pan dehamburguesa de espinaca veggie.", precio: "2990.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "88", info: "Media barra orgánica 120 g. x unidad", precio: "599.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "89", info: "Pan campaigne orgánico 300 g. x unidad", precio: "1155.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "90", info: "Pan de hamburguesa de amapolas veggie.", precio: "2850.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "91", info: "Petit moule de lino y miel orgánico 360 g. x unidad", precio: "2049.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "92", info: "Barra organica 250 g. x unidad", precio: "1099.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "93", info: "Petit moule pasas y nueces orgánico 360 g. x unidad", precio: "2755.00", fecha: "2024-04-06 18:19:58", supermercado: "Carrefour" }, { id: "94", info: "Pan Blanco Artesano Bimbo 500 Gr", precio: "4900.00", fecha: "2024-04-06 18:33:11", supermercado: "Disco" }, { id: "95", info: "Pan Salvado Lactal 330 Gr", precio: "2450.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "96", info: "Pan Blanco Bimbo 550 Gr", precio: "4250.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "97", info: "Pan Integral Grano Entero Fargo 350 Gr", precio: "3600.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "98", info: "Pan Mix De Cereales Fargo 400 Gr", precio: "3600.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "99", info: "Pan De Salvado Lactal 560 Gr", precio: "3650.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "100", info: "Pan De Hamburguesa Artesano Bimbo 4 U", precio: "2400.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "101", info: "Pan De Panchos Bimbo Artesano 6 U", precio: "2400.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "102", info: "Pan Integral Artesano Bimbo 500 Gr", precio: "5750.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "103", info: "Pan Salvado Con Semillas De Chia Y De Lino Lactal 330 Gr", precio: "2750.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "104", info: "Pan Rallado Mama Cocina X 500gr", precio: "1100.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "105", info: "Pan Fargo Lacteado 550 Gr", precio: "3850.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "106", info: "Pan Rallado Fortificado Preferido 500 Gr", precio: "1012.50", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "107", info: "Pan Rallado Fortificado Preferido 1 Kg", precio: "1912.50", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "108", info: "Pan Blanco Lacteado Fargo 330 Gr", precio: "2950.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "109", info: "Pan De Semillas Bimbo Artesano 500 Gr", precio: "5750.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "110", info: "Pan Lacteado Fargo 380 Gr", precio: "2950.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "111", info: "Pan Para Panchos La Perla 220 Gr", precio: "1350.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "112", info: "Pan Fargo Hamburguesa Con Sesamo 210g", precio: "1800.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "113", info: "Pan Fargo Salvado Plus 350 Gr", precio: "3400.00", fecha: "2024-04-06 18:33:12", supermercado: "Disco" }, { id: "114", info: "Pan Rall Preferido Ajo Y Perej Fortificado X500g", precio: "1200.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "115", info: "Pan Fargo Pancho 210g", precio: "1800.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "116", info: "Pan Pannini", precio: "636.75", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "117", info: "Pan Rallado Pureza Integral X 350 Gr", precio: "1250.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "118", info: "Pan Rallado Disco", precio: "1199.25", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "119", info: "Pan De Mesa Salvado La Perla 350 Gr", precio: "2100.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "120", info: "Pan Lomitero (m)", precio: "636.75", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "121", info: "Pan Para Pancho Bimbo X 6u", precio: "2000.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "122", info: "Pan Blanco Bimbo Cero Cero 385g", precio: "2700.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "123", info: "Pan Altamura", precio: "1899.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "124", info: "Pan Tipo Aleman Multicereal", precio: "6999.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "125", info: "Pan Estrella", precio: "4499.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "126", info: "Pan Bavaria X 500 Gr", precio: "6999.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "127", info: "Pan Rallado Lucchetti X500 Gr", precio: "1150.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "128", info: "Rebozador Preferido Fortificado X1kg", precio: "2550.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "129", info: "Rebozador Mama Cocina Para Freir X 1kg", precio: "2000.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "130", info: "Rebozador Mama Cocina Para Freir X 500gr", precio: "1050.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "131", info: "Rebozador Preferido Fortificado 500g", precio: "1350.00", fecha: "2024-04-06 18:33:35", supermercado: "Disco" }, { id: "132", info: "Rebozador Preferido Horno Fortificado X500g", precio: "1200.00", fecha: "2024-04-06 18:33:53", supermercado: "Disco" }, { id: "133", info: "Rebozador Mama Cocina Para Horno X 500gr", precio: "1350.00", fecha: "2024-04-06 18:33:53", supermercado: "Disco" }, { id: "134", info: "Rebozador Preferido Horno Fort X1kg", precio: "2287.50", fecha: "2024-04-06 18:33:53", supermercado: "Disco" }, { id: "135", info: "Rebozador Tipo Panko Mama Cocina 400 Gr", precio: "2200.00", fecha: "2024-04-06 18:33:53", supermercado: "Disco" }, { id: "138", info: "Rebozador Preferido Crunch Fortificado 900g", precio: "3862.50", fecha: "2024-04-06 18:33:53", supermercado: "Disco" }, { id: "144", info: "Pan Lacteado Grande Best x 600 g.", precio: "2600.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "145", info: "Pan Doble Integral La Anónima x 540 g.", precio: "3400.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "146", info: "Pan para Pancho x 6 un. Best x 210 g.", precio: "1200.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "147", info: "Pan con Salvado Grande Best x 600 g.", precio: "2800.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "148", info: "Pan de Mesa Chico Noly x 360 g.", precio: "1250.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "149", info: "Pan de Mesa Blanco Grande Lactal Bimbo x 460 g.", precio: "3320.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "150", info: "Pan Rallado Morixe x 1 Kg.", precio: "1594.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "151", info: "Pan para Hamburguesas x 4 un. Best x 210 g.", precio: "1200.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "152", info: "Pan Rallado La Anónima x 500 g.", precio: "1050.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "153", info: "Pan para Hamburguesas Artesano x 4 Un. Bimbo x 240 g.", precio: "2550.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "154", info: "Pan c/Salvado Chico Best x 360 g.", precio: "1900.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "155", info: "Pan Lacteado Chico Best x 360 g.", precio: "1850.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "156", info: "Pan De Mesa Blanco Bimbo x 550 g.", precio: "4600.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "157", info: "Pan Lactal Mesa Multicereal Familiar. Mimago x 650 g.", precio: "3650.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "158", info: "Pan de Salvado La Anónima con Semillas de Lino x 540 g.", precio: "3400.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "159", info: "Pan de Mesa Grande Best x 600 g.", precio: "2800.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "160", info: "Pan para Hamburguesas con Sésamo x 4 Un. Fargo x 210 g.", precio: "1945.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "161", info: "Pan de Viena para Hamburguesas Mimago x 240 g.", precio: "1250.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "162", info: "Pan Salvado Plus Fortificado Familiar Fargo x 600 g.", precio: "4900.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "163", info: "Pan Semillas del Campo Artesano Bimbo x 500 g.", precio: "6300.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "164", info: "Pan Blanco Artesano Bimbo x 500 g.", precio: "5100.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "165", info: "Pan para Panchos x 6 Un. Fargo x 210 g.", precio: "1945.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "166", info: "Pan Rallado Fortificado Cañuelas x 1 Kg.", precio: "1799.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "167", info: "Pan Rallado Fortificado Preferido x 1 Kg.", precio: "2900.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "168", info: "Pan Rallado (Kg)", precio: "1850.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "169", info: "Pan de Mesa Blanco Chico Bimbo x 400 g.", precio: "3579.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "170", info: "Pan para Hamburguesas de Papa Artesano x 4 Un. Bimbo x 240 g.", precio: "3039.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "171", info: "Pan Rallado Fortificado Cañuelas x 500 g.", precio: "859.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "172", info: "Pan Blanco Lacteado Fargo x 380 g.", precio: "3219.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "173", info: "Pan con Salvado Diet Noly x 600 g.", precio: "3050.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "174", info: "Pan para Pancho Artesano x 6 Un. Bimbo x 240 g.", precio: "2550.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "175", info: "Pan de Mesa Chico Best x 360 g.", precio: "1850.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "176", info: "Pan de Viena para Panchos Mimago x 240 g.", precio: "1250.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "177", info: "Pan Integral Artesano Bimbo x 500 g.", precio: "6300.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "178", info: "Pan de Mesa Lacteado Rodajas Finas Fargo x 330 g.", precio: "3235.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "179", info: "Pan de Mesa Grande Noly x 600 g.", precio: "2950.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "180", info: "Pan para Pancho Lacteado x 6 Un. Bimbo x 210 g.", precio: "2165.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "181", info: "Pan Integral Grano Entero Bimbo x 600 g.", precio: "5655.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "182", info: "Pan de Mesa Multicereal Chico Mimago x 390 g.", precio: "2250.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "183", info: "Pan Lacteado Noly Rodajas Finas x 360 g.", precio: "1850.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "184", info: "Pan Rallado Int con Semillas Pureza x 350 g.", precio: "1200.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "185", info: "Pan Cereales y Semillas Fargo x 400 g.", precio: "4069.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "186", info: "Pan Artesanal Doble Integral Mimago x 550 g.", precio: "3450.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "187", info: "Pan Blanco Multicereal La Anónima x 540 g.", precio: "3400.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "188", info: "Pan de Mesa Lacteado Pack Familiar Mimago x 590 g.", precio: "3100.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "189", info: "Pan para Hamburguesas Brioche Artesano x 4 Un. Bimbo x 240 g.", precio: "3050.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "190", info: "Pan para Hamburguesas Lacteado con Sésamo X 4 Un. Bimbo x 210 g.", precio: "2175.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "191", info: "Pan de Mesa Lacteado Mimago x 360 g.", precio: "1950.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "192", info: "Pan con Salvado Diet Chico Noly x 360 g.", precio: "1900.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "193", info: "Pan para Pancho Noly x 210 g.", precio: "1200.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "194", info: "Pan Rallado Fortificado con Vitamina Mamá Cocina x 1000 g.", precio: "1975.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "195", info: "Pan Rallado Fortificado Preferido x 500 g.", precio: "1600.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "196", info: "Pan Rallado Mamá Cocina x 500 g.", precio: "935.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "197", info: "Pan Tipo Chipa (Kg)", precio: "8999.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "198", info: "Pan de Miga 505 x 18 un. 1,320 Kg.", precio: "9685.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "199", info: "Pan Integral Grano Entero Fargo x 350 g.", precio: "4069.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "200", info: "Pan Artesanal Con Semillas Mimago x 590 g.", precio: "3800.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "201", info: "Pan Lacteado Estilo Campo La Anónima x 540 g.", precio: "3650.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "202", info: "Pan Lacteado Noly Grande x 600 g.", precio: "2950.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "203", info: "Pan Salvado sin Sal La Anónima x 360 g.", precio: "2350.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "204", info: "Pan Salvado Chico Mimago x 360 g.", precio: "2100.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "205", info: "Pan para Panchos Lactal x 210 g.", precio: "1515.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "206", info: "Pan para Hamburguesas  Lactal x 210 g.", precio: "1515.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "207", info: "Pan para Hamburguesas x 4 un. Noly x 210 g.", precio: "1250.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "208", info: "Pan Rallado para Horno Preferido x 500 g.", precio: "1360.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "209", info: "Pan Felipe (Kg)", precio: "2450.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "210", info: "Pan Blanco sin Glutén Schar x 200 g.", precio: "3500.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "211", info: "Pan Felipe (Kg)", precio: "452.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "212", info: "Pan con Cereales Avena Trigo Chía Lino Oroweat x 600 g.", precio: "7005.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "213", info: "Pan con Semillas de Amapola Girasol Lino Avena Oroweat x 600 g.", precio: "7005.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "214", info: "Pan Tipo Campo La Anónima", precio: "4450.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "215", info: "Pan Lino Bimbo x 380 g.", precio: "4305.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "216", info: "Pan de Mesa Salvado Grande Lactal x 560 g.", precio: "3700.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "217", info: "Pan Figazzita La Anónima (Kg)", precio: "3650.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "218", info: "Pan Salvado Pack Familiar Mimago x 600 g.", precio: "3300.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "219", info: "Pan de Superpancho x 6 Un. Fargo x 390 g.", precio: "3269.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "220", info: "Pan para Panchos Artesano Papa x 6 Un. Bimbo x 240 g.", precio: "3050.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "221", info: "Pan de Miga Blanco x 6 un. 505 x 290 g.", precio: "2599.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "222", info: "Pan Milonguita (Kg)", precio: "2550.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "223", info: "Pan Mignon (Kg)", precio: "2500.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "224", info: "Pan Flauta La Anónima (Kg)", precio: "2400.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "225", info: "Pan Felipe sin Sal La Anónima (Kg)", precio: "2150.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "226", info: "Pan para Panchos Largo Mimago x 390 g.", precio: "2050.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }, { id: "227", info: "Pan de Salvado Sin Sal Doña Noly x 360 g.", precio: "1850.00", fecha: "2024-04-06 18:42:55", supermercado: "La Anonima" }] }, { type: "table", name: "yerba", database: "comparaprecios", data: [{ id: "1", info: "Yerba mate Mañanita bajo polvo 4flex 1 kg.", precio: "3530.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "2", info: "Yerba mate Taragüi con palo origen controlado 1 kg.", precio: "3595.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "3", info: "Yerba mate Amanda tradicional 1 kg.", precio: "3200.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "4", info: "Yerba mate Cbsé con hierbas serranas 1 kg.", precio: "3715.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "5", info: "Yerba mate Taragüi con palo origen controlado 4flex 500 g.", precio: "1990.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "6", info: "Yerba mate Mañanita bajo polvo 4flex 500 g.", precio: "1990.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "7", info: "Yerba mate Cbsé con hierbas serranas 500 g.", precio: "1995.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "8", info: "Yerba mate Chamigo con palo 500 g.", precio: "1250.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "9", info: "Yerba mate Amanda 500 g.", precio: "1735.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "10", info: "Yerba mate Nobleza Gaucha suave 1 kg.", precio: "3380.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "11", info: "Yerba mate suave Unión 4flex 1 kg.", precio: "3805.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "12", info: "Yerba mate Nobleza Gaucha suave 500 g.", precio: "1760.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "13", info: "Yerba mate de campo orígen controlado La Merced 500 g.", precio: "2880.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "14", info: "Yerba mate sin palo 4flex Taragüi 1 kg.", precio: "4120.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "15", info: "Yerba mate 4flex liviana Unión 1 kg.", precio: "4015.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "16", info: "Yerba mate Cbsé naranja 500 g.", precio: "1995.00", fecha: "2024-04-06 18:17:40", supermercado: "Carrefour" }, { id: "17", info: "Yerba Mate Nobleza Gaucha Selección x 1 Kg.", precio: "3380.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "18", info: "Yerba mate Cruz de Malta con palo sin TACC 1 kg.", precio: "3700.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "19", info: "Yerba mate campo sur La Merced 500 g.", precio: "2880.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "20", info: "Yerba mate Cachamate hierbas rosas 500 g.", precio: "1735.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "21", info: "Yerba mate con palo edulcorada Salus 1 kg.", precio: "3200.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "22", info: "Yerba mate barbacua La Merced 500 g.", precio: "2880.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "23", info: "Yerba mate Amanda selección especial 500 g.", precio: "1805.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "24", info: "Yerba mate Union suave origen controlado 4flex 500 g.", precio: "1990.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "25", info: "Yerba mate sin palo 4flex Taragüi 500 g.", precio: "2430.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "26", info: "Yerba mate con palo Carrefour sin TACC 500 g.", precio: "1691.50", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "27", info: "Yerba mate Rosamonte suave plus 500 g.", precio: "2020.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "28", info: "Yerba mate Rosamonte 55 aniversario 500 g.", precio: "2465.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "29", info: "Yerba mate selección Nobleza Gaucha 500 g.", precio: "1760.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "30", info: "Yerba mate Cachamate hierbas serranas 1 kg.", precio: "2880.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "31", info: "Yerba mate Amanda sin palo 500 g.", precio: "2225.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "32", info: "Yerba mate Cruz De Malta natural 1 kg.", precio: "3350.00", fecha: "2024-04-06 18:17:49", supermercado: "Carrefour" }, { id: "33", info: "Yerba Arroyo verde hierbas serranas 500 g.", precio: "1190.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "34", info: "Yerba mate Cruz de Malta bold ment sin TACC 500 g.", precio: "1745.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "35", info: "Yerba mate Cachamate sabor coco 500 g,", precio: "1980.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "36", info: "Yerba mate Rosamonte 55 aniversario 1 kg.", precio: "5150.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "37", info: "Yerba mate Salus con limón menta 500 g.", precio: "1950.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "38", info: "Yerba mate campo y monte La Merced 500 g.", precio: "2880.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "39", info: "Yerba mate con palo 4flex Taragüi 250 g.", precio: "1259.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "40", info: "Yerba mate Cbsé con hierbas y guaraná 500 g.", precio: "1995.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "41", info: "Yerba mate Cruz de Malta con palo 500 g.", precio: "2040.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "42", info: "Yerba mate Cbsé silueta naranja Cormillot 500 g.", precio: "1995.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "43", info: "Yerba Arroyo verde con burrito 500 g.", precio: "1535.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "44", info: "Yerba mate Verdeflor con hierbas serranas 500 g.", precio: "1770.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "45", info: "Yerba mate Cbsé limón 500 g.", precio: "1995.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "46", info: "Yerba mate Cachamate rosa paquete 1 kg.", precio: "2415.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "47", info: "Yerba mate con palo edulcorada Salus 500 g.", precio: "1680.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "48", info: "Yerba mate La Tranquera especial suave con palo 500 g.", precio: "1665.00", fecha: "2024-04-06 18:17:59", supermercado: "Carrefour" }, { id: "49", info: "Yerba mate suave 4flex Unión 250 g.", precio: "1259.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "50", info: "Yerba mate Cbsé pomelo 500 g.", precio: "1995.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "51", info: "Yerba mate Chamigo con palo sin tacc 1 kg.", precio: "2350.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "52", info: "Yerba mate Buenas y santas de hierbas 500 g.", precio: "1900.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "53", info: "Yerba mate Romance con palo original 1 kg.", precio: "4650.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "54", info: "Yerba mate Carrefour con palo sin TACC 250 g.", precio: "1137.50", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "55", info: "Yerba mate Romance con palo 1 kg.", precio: "3420.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "56", info: "Yerba mate suave Amanda 1 kg.", precio: "3610.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "57", info: "Yerba mate de monte orígen controlado La Merced 500 g.", precio: "2880.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "58", info: "Yerba mate Verdeflor con naranja 500 g.", precio: "1700.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "59", info: "Yerba mate Cachamate amarilla paquete 500 g.", precio: "1775.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "60", info: "Yerba mate Verdeflor con menta 500 g.", precio: "1700.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "61", info: "Yerba mate Cbsé silueta Cormillot 500 g.", precio: "1995.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "62", info: "Yerba mate sabor naranja Carrefour sin TACC 500 g.", precio: "1682.10", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "63", info: "Yerba mate Cruz de Malta manzanilla sin TACC 500 g.", precio: "1745.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "64", info: "Yerba compuesta Arregui 500 g.", precio: "1600.00", fecha: "2024-04-06 18:18:10", supermercado: "Carrefour" }, { id: "65", info: "Yerba mate Liebig con palo original 500 g.", precio: "3190.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "66", info: "Yerba mate con peperina Arregui 500 g.", precio: "1600.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "67", info: "Yerba mate Verdeflor boldo 500 g.", precio: "1700.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "68", info: "Yerba mate Rosamonte suave 55 aniversario 500 g.", precio: "2795.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "69", info: "Yerba mate Cbsé miel 500 g.", precio: "1995.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "70", info: "Yerba mate La cumbrecita con hierbas naturales 500 g.", precio: "2090.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "71", info: "Yerba mate sabor a menta Carrefour sin TACC 500 g.", precio: "1682.10", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "72", info: "Yerba mate Cbsé endulife dr. cormillot 500 g.", precio: "1995.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "73", info: "Yerba mate con cedrón Arregui 500 g.", precio: "1600.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "74", info: "Yerba mate Cachamate selección 500 g.", precio: "1925.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "75", info: "Yerba mate Amanda de campo 1 kg.", precio: "3350.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "76", info: "Yerba mate con menta Arregui 500 g.", precio: "1600.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "77", info: "Yerba mate Carrefour sin TACC Selection caja 500 g.", precio: "2166.30", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "78", info: "Yerba mate Cbsé frutos tropicales 500 g.", precio: "1995.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "79", info: "Yerba mate Cbsé hierbas cuyanas 500 g.", precio: "1995.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "80", info: "Yerba mate Playadito lata 500 g.", precio: "8615.00", fecha: "2024-04-06 18:18:21", supermercado: "Carrefour" }, { id: "81", info: "Yerba mate Ytacua 1 kg.", precio: "1817.00", fecha: "2024-04-06 18:18:31", supermercado: "Carrefour" }, { id: "82", info: "Mate listo Taragüi 1 u.", precio: "995.00", fecha: "2024-04-06 18:18:31", supermercado: "Carrefour" }, { id: "83", info: "Yerba mate orgánica Dicomere libre de gluten 500 g.", precio: "3980.00", fecha: "2024-04-06 18:18:31", supermercado: "Carrefour" }, { id: "84", info: "Yerba con poleo Arregui 500 g.", precio: "1600.00", fecha: "2024-04-06 18:18:31", supermercado: "Carrefour" }, { id: "85", info: "Yerba Mate Suave Playadito 500 Gr", precio: "2000.00", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "86", info: "Yerba Mate 4flex Mañanita 1 Kg", precio: "2421.90", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "87", info: "Yerba Mate De Campo La Merced 500 Gr", precio: "2226.25", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "88", info: "Yerba Mate Campo Sur La Merced 500 Gr", precio: "2502.50", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "89", info: "Yerba Mater Canarias 1 Kg", precio: "5330.00", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "90", info: "Yerba Mate Campo Y Monte La Merced 500 Gr", precio: "2080.65", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "91", info: "Yerba Mate 4flex Mañanita 1/2 Kg", precio: "1368.90", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "92", info: "Yerba Mate Barcbacua La Merced 500 Gr", precio: "2502.50", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "93", info: "Yerba Mate Canarias 500 Gr", precio: "2729.00", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "94", info: "Yerba Mate Con Palo Suave Rosamonte 500 Gr", precio: "1430.00", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "95", info: "Yerba 55 Edicion Con Palo Rosamonte 1 Kg", precio: "3347.50", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "96", info: "Yerba Mate Suave Sin Tacc Nobleza Gaucha 1 Kg", precio: "2210.00", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "97", info: "Mate Cocido Taragui 300 Gr", precio: "2405.00", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "98", info: "Yerba Mate 4flex Taragui 1/2kg", precio: "1357.85", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "99", info: "Yerba Serena Canarias 1 Kg", precio: "6685.25", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "100", info: "Yerba Salus Natural 1 Kg", precio: "2535.00", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "101", info: "Yerba Mate Monte La Merced 500 Gr", precio: "2502.50", fecha: "2024-04-06 18:31:36", supermercado: "Disco" }, { id: "102", info: "Mate Cocido Unión 150 Gr", precio: "1267.50", fecha: "2024-04-06 18:31:57", supermercado: "Disco" }, { id: "104", info: "Yerba Mate 4flex Sin Palo Taragui 500 Gr", precio: "1688.05", fecha: "2024-04-06 18:31:57", supermercado: "Disco" }, { id: "105", info: "Yerba Mate Cuisine And Co 500 Gr", precio: "1700.00", fecha: "2024-04-06 18:31:57", supermercado: "Disco" }, { id: "107", info: "Mate Cocido Taragui 75 Gr", precio: "715.00", fecha: "2024-04-06 18:31:57", supermercado: "Disco" }, { id: "108", info: "Yerba Mate Con Hierbas Cuisine And Co 500 Gr", precio: "1650.00", fecha: "2024-04-06 18:31:57", supermercado: "Disco" }, { id: "109", info: "Yerba Mate 4flex Union 1/2 Kg", precio: "1560.00", fecha: "2024-04-06 18:31:57", supermercado: "Disco" }, { id: "110", info: "Mate Cocido Sabor Tradicional La Tranquera 62.5 Gr", precio: "780.00", fecha: "2024-04-06 18:31:57", supermercado: "Disco" }, { id: "111", info: "Yerba Selección Especial La Tranquera 1 Kg", precio: "2567.50", fecha: "2024-04-06 18:31:57", supermercado: "Disco" }, { id: "112", info: "Yerba Hierbas Serranas Salus 500 Gr", precio: "1332.50", fecha: "2024-04-06 18:31:57", supermercado: "Disco" }, { id: "113", info: "Yerba Suave 55 Edicion Con Palo Rosamonte 1 Kg", precio: "3802.50", fecha: "2024-04-06 18:31:57", supermercado: "Disco" }, { id: "114", info: "Yerba Mate Con Palo Amarilla Cachamate 1 Kg", precio: "2015.00", fecha: "2024-04-06 18:31:57", supermercado: "Disco" }, { id: "116", info: "Yerba Pipore Con Palo Sublime", precio: "1625.00", fecha: "2024-04-06 18:32:20", supermercado: "Disco" }, { id: "117", info: "Yerba Mate Con Manzanilla Cruz De Malta 500 Gr", precio: "1202.50", fecha: "2024-04-06 18:32:20", supermercado: "Disco" }, { id: "118", info: "Yerba Selección Especial La Tranquera 500 Gr", precio: "1625.00", fecha: "2024-04-06 18:32:20", supermercado: "Disco" }, { id: "119", info: "Yerba Mate Con Palo Amarilla Cachamate 500 Gr", precio: "1202.50", fecha: "2024-04-06 18:32:20", supermercado: "Disco" }, { id: "120", info: "Yerba Mate Suave Naranja Cachamate 500 Gr", precio: "975.00", fecha: "2024-04-06 18:32:20", supermercado: "Disco" }, { id: "121", info: "Yerba Limon Y Menta Salus 500 Gr", precio: "1332.50", fecha: "2024-04-06 18:32:20", supermercado: "Disco" }, { id: "123", info: "Yerba Mate Limón Cbsé 500 Gr", precio: "2400.00", fecha: "2024-04-06 18:32:20", supermercado: "Disco" }, { id: "124", info: "Yerba Hierbas Reales Buenas Y Santas 500 Gr", precio: "2400.00", fecha: "2024-04-06 18:32:20", supermercado: "Disco" }, { id: "125", info: "Yerba Mate Suave Seleccion Especial La Tranquera 1 Kg", precio: "4350.00", fecha: "2024-04-06 18:32:20", supermercado: "Disco" }, { id: "126", info: "Yerba Mate Verdeflor Con Palo Sabor Naranja", precio: "2000.00", fecha: "2024-04-06 18:32:20", supermercado: "Disco" }, { id: "127", info: "Yerba Mate Hierbas Del Litoral Cachamate 500 Gr", precio: "1950.00", fecha: "2024-04-06 18:32:20", supermercado: "Disco" }, { id: "128", info: "Yerba 55 Edicion Con Palo Rosamonte 500 Gr", precio: "1820.00", fecha: "2024-04-06 18:32:41", supermercado: "Disco" }, { id: "129", info: "Yerba Canarias Hierbas Te Verde Y Jengi", precio: "11131.90", fecha: "2024-04-06 18:32:41", supermercado: "Disco" }, { id: "130", info: "Yerba Mate Romance Suave 1 Kg", precio: "2730.00", fecha: "2024-04-06 18:32:41", supermercado: "Disco" }, { id: "131", info: "Yerba Mate Cachamai Compuesta X 500 Gr.", precio: "1332.50", fecha: "2024-04-06 18:32:41", supermercado: "Disco" }, { id: "132", info: "Mate Listo Taragui 38 Gr", precio: "715.00", fecha: "2024-04-06 18:32:41", supermercado: "Disco" }, { id: "133", info: "Cbsé Fusión Yerba Mate Sabores Inspiradores 25u", precio: "747.50", fecha: "2024-04-06 18:32:41", supermercado: "Disco" }, { id: "134", info: "Yerba Mate Verdeflor Con Palo Premium X 500g", precio: "2275.00", fecha: "2024-04-06 18:32:41", supermercado: "Disco" }, { id: "135", info: "Yerba Mate Organic Maycha Mate And Co. 50 Gr", precio: "2892.50", fecha: "2024-04-06 18:32:41", supermercado: "Disco" }, { id: "136", info: "Kombucha Aloja Yerba Mate 354 Ml", precio: "4199.00", fecha: "2024-04-06 18:32:41", supermercado: "Disco" }, { id: "138", info: "Yerba Mate c/Palo Suave Piporé x 1 Kg.", precio: "3110.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "139", info: "Yerba Mate Compuesta Verdeflor Hierbas Serranas x 500 g.", precio: "2350.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "140", info: "Yerba Mate c/ Palo Tradicional Piporé x 1 Kg.", precio: "3060.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "141", info: "Yerba Mate c/Palo Suave Playadito x 1 Kg.", precio: "4400.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "143", info: "Yerba Mate c/Palo 4Flex Mañanita x 1 Kg.", precio: "3697.50", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "144", info: "Yerba Mate con Palo Chamingo x 1 Kg.", precio: "2900.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "145", info: "Yerba Mate con Palo Amanda Tradicional x 500 g.", precio: "2000.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "146", info: "Yerba Mate Rosamonte Suave Especial x 1 Kg.", precio: "4550.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "147", info: "Yerba Mate c/Palo Seleccionada Especial Amanda x 1 Kg.", precio: "4400.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "148", info: "Yerba Mate Selección Nobleza Gaucha x 1 Kg.", precio: "3700.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "149", info: "Yerba Mate con Palo Sublime Piporé x 500 g.", precio: "2400.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "150", info: "Yerba Mate c/ Palo Suave Original Unión x 1 Kg.", precio: "3769.75", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "151", info: "Yerba Mate con Palo Suave Nobleza Gaucha x 1 Kg.", precio: "3650.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "153", info: "Yerba Mate c/Palo Suave Piporé x 500 g.", precio: "2500.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "154", info: "Yerba Mate con Palo Hierbas Serranas Amanda x 500 g.", precio: "1850.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "155", info: "Yerba Mate c/Palo Suave Playadito x 500 g.", precio: "2000.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "156", info: "Yerba Mate c/Palo Premium Andresito x 1 Kg.", precio: "5700.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "157", info: "Yerba Mate Compuesta c/ Hierbas Serranas CBSé x 500 g.", precio: "2062.50", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "159", info: "Yerba Mate con Palo Rosamonte x 1 Kg.", precio: "3800.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "160", info: "Yerba Compuesta con Menta Verdeflor x 500 g.", precio: "2350.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "161", info: "Yerba Mate con Palo Suave Chamigo x 500 g.", precio: "1550.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "162", info: "Yerba Mate Tradicional Amanda x 1 kg.", precio: "2899.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "163", info: "Yerba Mate Hierbas Serranas Natura x 500 g.", precio: "1900.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "164", info: "Yerba Mate c/Palo Suave Liviana Unión x 1 Kg.", precio: "4600.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "165", info: "Yerba Mate con Palo Romance x 1000 g.", precio: "4250.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "166", info: "Yerba Mate Frutos del Bosque CBSé x 500 g.", precio: "2819.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "167", info: "Yerba Compuesta Melisa Verdeflor x 500 g.", precio: "2350.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "168", info: "Yerba Mate c/Palo 4Flex Suave Unión x 500 g.", precio: "1993.25", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "169", info: "Yerba Mate Suave Amanda x 500 g.", precio: "2300.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "170", info: "Yerba Mate Selección Especial Cruz de Malta x 500 g.", precio: "2200.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "174", info: "Yerba Mate Despalada s/ Tacc Rosamonte x 1 Kg.", precio: "4700.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "175", info: "Yerba Mate c/Palo 4Flex Taragui x 1 Kg.", precio: "3782.50", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "176", info: "Yerba Mate Selección Especial Cruz de Malta x 1 Kg.", precio: "4300.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "177", info: "Yerba Mate Despalada Playadito x 500 g.", precio: "3750.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "178", info: "Yerba Mate con Palo Suave Selección Especial La Tranquera x 1 Kg.", precio: "3699.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "179", info: "Yerba Mate Compuesta con Hierbas Playadito x 500 g.", precio: "3500.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "180", info: "Yerba Mate con Palo Amanda Premium x 500 g.", precio: "2850.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "181", info: "Yerba Mate con Palo Suave 55 Aniversario Rosamonte x 500 g.", precio: "2750.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "183", info: "Yerba Compuesta Verdeflor con Boldo x 500 g.", precio: "2350.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "184", info: "Yerba Mate Rosamonte Suave Especial x 500 g.", precio: "2350.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "185", info: "Yerba Compuesta con Cedrón Verdeflor x 500 g.", precio: "2350.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "186", info: "Yerba Compuesta con Naranja Verdeflor x 500 g.", precio: "2350.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "187", info: "Yerba Mate Selección Nobleza Gaucha x 500 g.", precio: "1900.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "189", info: "Yerba Mate Compuesta c/ Hierbas Serranas CBSé x 1 Kg.", precio: "5445.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "191", info: "Yerba Mate Tradicional con Palo Cruz de Malta x 1 Kg.", precio: "4200.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "192", info: "Yerba Mate Natural c/Stevia Salus x 1 Kg.", precio: "4000.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "194", info: "Yerba Mate c/Palo de Monte La Merced x 500 g.", precio: "3700.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "195", info: "Yerba Mate c/Palo Campo & Monte La Merced x 500 g.", precio: "3700.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "196", info: "Yerba Mate c/Palo Campo Sur La Merced x 500 g.", precio: "3700.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "197", info: "Yerba Mate c/ Palo Naranja CBSé x 500 g.", precio: "2850.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "198", info: "Yerba Mate c/ Palo Limón CBSé x 500 g.", precio: "2850.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "199", info: "Yerba Mate c/ Palo Jengibre CBSé x 500 g.", precio: "2819.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "200", info: "Yerba Mate con Palo La Anónima x 500 g.", precio: "2550.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "201", info: "Yerba Mate con Palo Liviana 4Flex Unión x 500 g.", precio: "2509.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "202", info: "Yerba Mate Despalada s/ Tacc  Rosamonte x 500 g.", precio: "2450.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "203", info: "Yerba Compuesta con Peperina Verdeflor x 500 g.", precio: "2350.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "204", info: "Yerba Mate c/Palo 4Flex Mañanita x 500 g.", precio: "1993.25", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "205", info: "Yerba Mate con Palo Suave Mundial Cachamate x 500 g.", precio: "2300.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "207", info: "Yerba Mate Compuesta Hierbas Serranas Cachamate x 500 g.", precio: "2250.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "208", info: "Yerba Mate c/ Palo Tradicional Piporé x 500 g.", precio: "2200.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "209", info: "Yerba Mate con Palo Cruz de Malta x 500 g.", precio: "2150.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "210", info: "Yerba Mate Tipo Tradicional Don Basilio x 500 g.", precio: "2100.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "211", info: "Yerba Mate con Palo Boldo y Menta Cruz de Malta x 500 g.", precio: "1900.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "212", info: "Yerba Mate Listo Taragui x 1 un.", precio: "1350.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "214", info: "Yerba Mate con Palo Tradicional Verdeflor x 1 Kg.", precio: "5819.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "215", info: "Yerba Mate Suave con Palo 55 Aniversario Rosamonte x 1 Kg.", precio: "5300.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "216", info: "Yerba Mate Selección Especial s/P 4Flex Taragui x 1 Kg.", precio: "5285.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "217", info: "Yerba Compuesta Verdeflor con Hierbas Serranas x 1 Kg.", precio: "4715.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "218", info: "Yerba Mate con Palo 55 Aniversario Rosamonte x 1 Kg.", precio: "4650.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "219", info: "Yerba Mate Hierbas Serranas Etiqueta Negra CBSé x 500 g.", precio: "4519.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "220", info: "Yerba Mate con Palo Suave Romance x 1 Kg.", precio: "4500.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "221", info: "Yerba Mate con Palo Natura x 1 Kg.", precio: "4450.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "222", info: "Yerba Mate con Palo Amanda Campo x 1 Kg.", precio: "4400.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "223", info: "Yerba Mate Compuesta Amarilla Cachamate x 1 Kg.", precio: "4350.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "225", info: "Yerba Mate con Palo Romance x 1 Kg.", precio: "4050.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "226", info: "Yerba Mate c/Palo de Campo La Merced x 500 g.", precio: "3700.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "227", info: "Yerba Mate c/Palo Barbacuá La Merced x 500 g.", precio: "3700.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "228", info: "Yerba Mate c/Palo Seleccionda. Especial La Tranquera x 1 Kg.", precio: "3595.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "229", info: "Yerba Mate con Palo Liebig Original x 500 g.", precio: "3550.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "231", info: "Yerba Mate Comp. Hierbas Piporé x 500 g.", precio: "2950.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "232", info: "Yerba Mate Comp. Hierbas Pampeanas Cachamate x 500 g.", precio: "2950.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "233", info: "Yerba Mate c/Palo Premiun Andresito x 500 g.", precio: "2950.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "234", info: "Yerba Mate con Palo Naranja Pipore x 500 g.", precio: "2950.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "235", info: "Yerba Mate c/ Palo Pomelo CBSé x 500 g.", precio: "2850.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "236", info: "Yerba Mate c/ Palo Guaraná CBSé x 500 g.", precio: "2819.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "237", info: "Yerba Mate c/ Palo Silueta Naranja CBSé x 500 g.", precio: "2805.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "240", info: "Yerba Mate Selección Especial s/P 4Flex Taragui x 500 g.", precio: "2679.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "241", info: "Yerba Mate Tipo Especial Don Basilio x 500 g.", precio: "2550.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "242", info: "Yerba Mate con Palo 55 Aniversario Rosamonte x 500 g.", precio: "2450.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "243", info: "Yerba Mate con palo  Hierbas Buenas Y Santas x 500 g.", precio: "1837.50", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "244", info: "Yerba Mate con Palo Verdeflor x 500 g.", precio: "1799.25", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "245", info: "Yerba Mate c/Palo 4Flex Taragui x 500 g.", precio: "1993.25", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "246", info: "Yerba Mate con Palo Natura x 500 g.", precio: "2300.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "247", info: "Yerba Mate con Palo Especial Amanda x 500 g.", precio: "2300.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "248", info: "Yerba Mate Mezcla Hierbas Cuyana Cachamate x 500 g.", precio: "2250.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "249", info: "Yerba Mate Compuesta Amarilla Cachamate x 500 g.", precio: "2250.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "250", info: "Yerba Mate Compuesta Rosa Cachamate x 500 g.", precio: "2250.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "251", info: "Yerba Mate con Palo Romance x 500 g.", precio: "2200.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "252", info: "Yerba Mate Natural c/Stevia Salus x 500 g.", precio: "2050.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }, { id: "253", info: "Yerba Mate con Palo Suave Nobleza Gaucha x 500 g.", precio: "1900.00", fecha: "2024-04-06 18:41:42", supermercado: "La Anonima" }] }]; //! moment.js
    //! version : 2.30.1
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    var Af;

    function S() { return Af.apply(null, arguments) }

    function K1(e) { Af = e }

    function or(e) { return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]" }

    function ga(e) { return e != null && Object.prototype.toString.call(e) === "[object Object]" }

    function V(e, r) { return Object.prototype.hasOwnProperty.call(e, r) }

    function Mc(e) { if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0; var r; for (r in e)
            if (V(e, r)) return !1;
        return !0 }

    function Pe(e) { return e === void 0 }

    function Er(e) { return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]" }

    function co(e) { return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]" }

    function Mf(e, r) { var a = [],
            i, o = e.length; for (i = 0; i < o; ++i) a.push(r(e[i], i)); return a }

    function Br(e, r) { for (var a in r) V(r, a) && (e[a] = r[a]); return V(r, "toString") && (e.toString = r.toString), V(r, "valueOf") && (e.valueOf = r.valueOf), e }

    function mr(e, r, a, i) { return Kf(e, r, a, i, !0).utc() }

    function q1() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidEra: null, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], era: null, meridiem: null, rfc2822: !1, weekdayMismatch: !1 } }

    function Y(e) { return e._pf == null && (e._pf = q1()), e._pf }
    var A0;
    Array.prototype.some ? A0 = Array.prototype.some : A0 = function(e) { var r = Object(this),
            a = r.length >>> 0,
            i; for (i = 0; i < a; i++)
            if (i in r && e.call(this, r[i], i, r)) return !0;
        return !1 };

    function Pc(e) { var r = null,
            a = !1,
            i = e._d && !isNaN(e._d.getTime()); if (i && (r = Y(e), a = A0.call(r.parsedDateParts, function(o) { return o != null }), i = r.overflow < 0 && !r.empty && !r.invalidEra && !r.invalidMonth && !r.invalidWeekday && !r.weekdayMismatch && !r.nullInput && !r.invalidFormat && !r.userInvalidated && (!r.meridiem || r.meridiem && a), e._strict && (i = i && r.charsLeftOver === 0 && r.unusedTokens.length === 0 && r.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e)) e._isValid = i;
        else return i; return e._isValid }

    function Vn(e) { var r = mr(NaN); return e != null ? Br(Y(r), e) : Y(r).userInvalidated = !0, r }
    var il = S.momentProperties = [],
        kt = !1;

    function kc(e, r) { var a, i, o, n = il.length; if (Pe(r._isAMomentObject) || (e._isAMomentObject = r._isAMomentObject), Pe(r._i) || (e._i = r._i), Pe(r._f) || (e._f = r._f), Pe(r._l) || (e._l = r._l), Pe(r._strict) || (e._strict = r._strict), Pe(r._tzm) || (e._tzm = r._tzm), Pe(r._isUTC) || (e._isUTC = r._isUTC), Pe(r._offset) || (e._offset = r._offset), Pe(r._pf) || (e._pf = Y(r)), Pe(r._locale) || (e._locale = r._locale), n > 0)
            for (a = 0; a < n; a++) i = il[a], o = r[i], Pe(o) || (e[i] = o); return e }

    function so(e) { kc(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), kt === !1 && (kt = !0, S.updateOffset(this), kt = !1) }

    function nr(e) { return e instanceof so || e != null && e._isAMomentObject != null }

    function Pf(e) { S.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e) }

    function $e(e, r) { var a = !0; return Br(function() { if (S.deprecationHandler != null && S.deprecationHandler(null, e), a) { var i = [],
                    o, n, t, c = arguments.length; for (n = 0; n < c; n++) { if (o = "", typeof arguments[n] == "object") { o += `
[` + n + "] "; for (t in arguments[0]) V(arguments[0], t) && (o += t + ": " + arguments[0][t] + ", ");
                        o = o.slice(0, -2) } else o = arguments[n];
                    i.push(o) }
                Pf(e + `
Arguments: ` + Array.prototype.slice.call(i).join("") + `
` + new Error().stack), a = !1 } return r.apply(this, arguments) }, r) }
    var ol = {};

    function kf(e, r) { S.deprecationHandler != null && S.deprecationHandler(e, r), ol[e] || (Pf(r), ol[e] = !0) }
    S.suppressDeprecationWarnings = !1;
    S.deprecationHandler = null;

    function hr(e) { return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]" }

    function X1(e) { var r, a; for (a in e) V(e, a) && (r = e[a], hr(r) ? this[a] = r : this["_" + a] = r);
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }

    function M0(e, r) { var a = Br({}, e),
            i; for (i in r) V(r, i) && (ga(e[i]) && ga(r[i]) ? (a[i] = {}, Br(a[i], e[i]), Br(a[i], r[i])) : r[i] != null ? a[i] = r[i] : delete a[i]); for (i in e) V(e, i) && !V(r, i) && ga(e[i]) && (a[i] = Br({}, a[i])); return a }

    function wc(e) { e != null && this.set(e) }
    var P0;
    Object.keys ? P0 = Object.keys : P0 = function(e) { var r, a = []; for (r in e) V(e, r) && a.push(r); return a };
    var Q1 = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" };

    function Z1(e, r, a) { var i = this._calendar[e] || this._calendar.sameElse; return hr(i) ? i.call(r, a) : i }

    function pr(e, r, a) { var i = "" + Math.abs(e),
            o = r - i.length,
            n = e >= 0; return (n ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + i }
    var _c = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Eo = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        wt = {},
        $a = {};

    function z(e, r, a, i) { var o = i;
        typeof i == "string" && (o = function() { return this[i]() }), e && ($a[e] = o), r && ($a[r[0]] = function() { return pr(o.apply(this, arguments), r[1], r[2]) }), a && ($a[a] = function() { return this.localeData().ordinal(o.apply(this, arguments), e) }) }

    function J1(e) { return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "") }

    function ep(e) { var r = e.match(_c),
            a, i; for (a = 0, i = r.length; a < i; a++) $a[r[a]] ? r[a] = $a[r[a]] : r[a] = J1(r[a]); return function(o) { var n = "",
                t; for (t = 0; t < i; t++) n += hr(r[t]) ? r[t].call(o, e) : r[t]; return n } }

    function Ho(e, r) { return e.isValid() ? (r = wf(r, e.localeData()), wt[r] = wt[r] || ep(r), wt[r](e)) : e.localeData().invalidDate() }

    function wf(e, r) { var a = 5;

        function i(o) { return r.longDateFormat(o) || o } for (Eo.lastIndex = 0; a >= 0 && Eo.test(e);) e = e.replace(Eo, i), Eo.lastIndex = 0, a -= 1; return e }
    var rp = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };

    function ap(e) { var r = this._longDateFormat[e],
            a = this._longDateFormat[e.toUpperCase()]; return r || !a ? r : (this._longDateFormat[e] = a.match(_c).map(function(i) { return i === "MMMM" || i === "MM" || i === "DD" || i === "dddd" ? i.slice(1) : i }).join(""), this._longDateFormat[e]) }
    var ip = "Invalid date";

    function op() { return this._invalidDate }
    var np = "%d",
        tp = /\d{1,2}/;

    function cp(e) { return this._ordinal.replace("%d", e) }
    var sp = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", w: "a week", ww: "%d weeks", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };

    function lp(e, r, a, i) { var o = this._relativeTime[a]; return hr(o) ? o(e, r, a, i) : o.replace(/%d/i, e) }

    function up(e, r) { var a = this._relativeTime[e > 0 ? "future" : "past"]; return hr(a) ? a(r) : a.replace(/%s/i, r) }
    var nl = { D: "date", dates: "date", date: "date", d: "day", days: "day", day: "day", e: "weekday", weekdays: "weekday", weekday: "weekday", E: "isoWeekday", isoweekdays: "isoWeekday", isoweekday: "isoWeekday", DDD: "dayOfYear", dayofyears: "dayOfYear", dayofyear: "dayOfYear", h: "hour", hours: "hour", hour: "hour", ms: "millisecond", milliseconds: "millisecond", millisecond: "millisecond", m: "minute", minutes: "minute", minute: "minute", M: "month", months: "month", month: "month", Q: "quarter", quarters: "quarter", quarter: "quarter", s: "second", seconds: "second", second: "second", gg: "weekYear", weekyears: "weekYear", weekyear: "weekYear", GG: "isoWeekYear", isoweekyears: "isoWeekYear", isoweekyear: "isoWeekYear", w: "week", weeks: "week", week: "week", W: "isoWeek", isoweeks: "isoWeek", isoweek: "isoWeek", y: "year", years: "year", year: "year" };

    function Ke(e) { return typeof e == "string" ? nl[e] || nl[e.toLowerCase()] : void 0 }

    function zc(e) { var r = {},
            a, i; for (i in e) V(e, i) && (a = Ke(i), a && (r[a] = e[i])); return r }
    var fp = { date: 9, day: 11, weekday: 11, isoWeekday: 11, dayOfYear: 4, hour: 13, millisecond: 16, minute: 14, month: 8, quarter: 7, second: 15, weekYear: 1, isoWeekYear: 1, week: 5, isoWeek: 5, year: 1 };

    function dp(e) { var r = [],
            a; for (a in e) V(e, a) && r.push({ unit: a, priority: fp[a] }); return r.sort(function(i, o) { return i.priority - o.priority }), r }
    var _f = /\d/,
        Ie = /\d\d/,
        zf = /\d{3}/,
        Ec = /\d{4}/,
        Bn = /[+-]?\d{6}/,
        X = /\d\d?/,
        Ef = /\d\d\d\d?/,
        Tf = /\d\d\d\d\d\d?/,
        Un = /\d{1,3}/,
        Tc = /\d{1,4}/,
        Gn = /[+-]?\d{1,6}/,
        ti = /\d+/,
        Hn = /[+-]?\d+/,
        pp = /Z|[+-]\d\d:?\d\d/gi,
        Wn = /Z|[+-]\d\d(?::?\d\d)?/gi,
        mp = /[+-]?\d+(\.\d{1,3})?/,
        lo = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        ci = /^[1-9]\d?/,
        Oc = /^([1-9]\d|\d)/,
        yn;
    yn = {};

    function A(e, r, a) { yn[e] = hr(r) ? r : function(i, o) { return i && a ? a : r } }

    function hp(e, r) { return V(yn, e) ? yn[e](r._strict, r._locale) : new RegExp(gp(e)) }

    function gp(e) { return Mr(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(r, a, i, o, n) { return a || i || o || n })) }

    function Mr(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }

    function Be(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

    function R(e) { var r = +e,
            a = 0; return r !== 0 && isFinite(r) && (a = Be(r)), a }
    var k0 = {};

    function H(e, r) { var a, i = r,
            o; for (typeof e == "string" && (e = [e]), Er(r) && (i = function(n, t) { t[r] = R(n) }), o = e.length, a = 0; a < o; a++) k0[e[a]] = i }

    function uo(e, r) { H(e, function(a, i, o, n) { o._w = o._w || {}, r(a, o._w, o, n) }) }

    function vp(e, r, a) { r != null && V(k0, e) && k0[e](r, a._a, a, e) }

    function $n(e) { return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 }
    var ye = 0,
        Dr = 1,
        ur = 2,
        ue = 3,
        er = 4,
        Sr = 5,
        pa = 6,
        Cp = 7,
        Lp = 8;
    z("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? pr(e, 4) : "+" + e });
    z(0, ["YY", 2], 0, function() { return this.year() % 100 });
    z(0, ["YYYY", 4], 0, "year");
    z(0, ["YYYYY", 5], 0, "year");
    z(0, ["YYYYYY", 6, !0], 0, "year");
    A("Y", Hn);
    A("YY", X, Ie);
    A("YYYY", Tc, Ec);
    A("YYYYY", Gn, Bn);
    A("YYYYYY", Gn, Bn);
    H(["YYYYY", "YYYYYY"], ye);
    H("YYYY", function(e, r) { r[ye] = e.length === 2 ? S.parseTwoDigitYear(e) : R(e) });
    H("YY", function(e, r) { r[ye] = S.parseTwoDigitYear(e) });
    H("Y", function(e, r) { r[ye] = parseInt(e, 10) });

    function Yi(e) { return $n(e) ? 366 : 365 }
    S.parseTwoDigitYear = function(e) { return R(e) + (R(e) > 68 ? 1900 : 2e3) };
    var Of = si("FullYear", !0);

    function yp() { return $n(this.year()) }

    function si(e, r) { return function(a) { return a != null ? (Yf(this, e, a), S.updateOffset(this, r), this) : Zi(this, e) } }

    function Zi(e, r) { if (!e.isValid()) return NaN; var a = e._d,
            i = e._isUTC; switch (r) {
            case "Milliseconds":
                return i ? a.getUTCMilliseconds() : a.getMilliseconds();
            case "Seconds":
                return i ? a.getUTCSeconds() : a.getSeconds();
            case "Minutes":
                return i ? a.getUTCMinutes() : a.getMinutes();
            case "Hours":
                return i ? a.getUTCHours() : a.getHours();
            case "Date":
                return i ? a.getUTCDate() : a.getDate();
            case "Day":
                return i ? a.getUTCDay() : a.getDay();
            case "Month":
                return i ? a.getUTCMonth() : a.getMonth();
            case "FullYear":
                return i ? a.getUTCFullYear() : a.getFullYear();
            default:
                return NaN } }

    function Yf(e, r, a) { var i, o, n, t, c; if (!(!e.isValid() || isNaN(a))) { switch (i = e._d, o = e._isUTC, r) {
                case "Milliseconds":
                    return void(o ? i.setUTCMilliseconds(a) : i.setMilliseconds(a));
                case "Seconds":
                    return void(o ? i.setUTCSeconds(a) : i.setSeconds(a));
                case "Minutes":
                    return void(o ? i.setUTCMinutes(a) : i.setMinutes(a));
                case "Hours":
                    return void(o ? i.setUTCHours(a) : i.setHours(a));
                case "Date":
                    return void(o ? i.setUTCDate(a) : i.setDate(a));
                case "FullYear":
                    break;
                default:
                    return }
            n = a, t = e.month(), c = e.date(), c = c === 29 && t === 1 && !$n(n) ? 28 : c, o ? i.setUTCFullYear(n, t, c) : i.setFullYear(n, t, c) } }

    function xp(e) { return e = Ke(e), hr(this[e]) ? this[e]() : this }

    function Dp(e, r) { if (typeof e == "object") { e = zc(e); var a = dp(e),
                i, o = a.length; for (i = 0; i < o; i++) this[a[i].unit](e[a[i].unit]) } else if (e = Ke(e), hr(this[e])) return this[e](r); return this }

    function Sp(e, r) { return (e % r + r) % r }
    var ne;
    Array.prototype.indexOf ? ne = Array.prototype.indexOf : ne = function(e) { var r; for (r = 0; r < this.length; ++r)
            if (this[r] === e) return r;
        return -1 };

    function Yc(e, r) { if (isNaN(e) || isNaN(r)) return NaN; var a = Sp(r, 12); return e += (r - a) / 12, a === 1 ? $n(e) ? 29 : 28 : 31 - a % 7 % 2 }
    z("M", ["MM", 2], "Mo", function() { return this.month() + 1 });
    z("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) });
    z("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) });
    A("M", X, ci);
    A("MM", X, Ie);
    A("MMM", function(e, r) { return r.monthsShortRegex(e) });
    A("MMMM", function(e, r) { return r.monthsRegex(e) });
    H(["M", "MM"], function(e, r) { r[Dr] = R(e) - 1 });
    H(["MMM", "MMMM"], function(e, r, a, i) { var o = a._locale.monthsParse(e, i, a._strict);
        o != null ? r[Dr] = o : Y(a).invalidMonth = e });
    var Ap = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Nf = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        Rf = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Mp = lo,
        Pp = lo;

    function kp(e, r) { return e ? or(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Rf).test(r) ? "format" : "standalone"][e.month()] : or(this._months) ? this._months : this._months.standalone }

    function wp(e, r) { return e ? or(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Rf.test(r) ? "format" : "standalone"][e.month()] : or(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }

    function _p(e, r, a) { var i, o, n, t = e.toLocaleLowerCase(); if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) n = mr([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(n, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(n, "").toLocaleLowerCase(); return a ? r === "MMM" ? (o = ne.call(this._shortMonthsParse, t), o !== -1 ? o : null) : (o = ne.call(this._longMonthsParse, t), o !== -1 ? o : null) : r === "MMM" ? (o = ne.call(this._shortMonthsParse, t), o !== -1 ? o : (o = ne.call(this._longMonthsParse, t), o !== -1 ? o : null)) : (o = ne.call(this._longMonthsParse, t), o !== -1 ? o : (o = ne.call(this._shortMonthsParse, t), o !== -1 ? o : null)) }

    function zp(e, r, a) { var i, o, n; if (this._monthsParseExact) return _p.call(this, e, r, a); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) { if (o = mr([2e3, i]), a && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), !a && !this._monthsParse[i] && (n = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[i] = new RegExp(n.replace(".", ""), "i")), a && r === "MMMM" && this._longMonthsParse[i].test(e)) return i; if (a && r === "MMM" && this._shortMonthsParse[i].test(e)) return i; if (!a && this._monthsParse[i].test(e)) return i } }

    function Ff(e, r) { if (!e.isValid()) return e; if (typeof r == "string") { if (/^\d+$/.test(r)) r = R(r);
            else if (r = e.localeData().monthsParse(r), !Er(r)) return e } var a = r,
            i = e.date(); return i = i < 29 ? i : Math.min(i, Yc(e.year(), a)), e._isUTC ? e._d.setUTCMonth(a, i) : e._d.setMonth(a, i), e }

    function bf(e) { return e != null ? (Ff(this, e), S.updateOffset(this, !0), this) : Zi(this, "Month") }

    function Ep() { return Yc(this.year(), this.month()) }

    function Tp(e) { return this._monthsParseExact ? (V(this, "_monthsRegex") || If.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (V(this, "_monthsShortRegex") || (this._monthsShortRegex = Mp), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }

    function Op(e) { return this._monthsParseExact ? (V(this, "_monthsRegex") || If.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (V(this, "_monthsRegex") || (this._monthsRegex = Pp), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }

    function If() {
        function e(s, l) { return l.length - s.length } var r = [],
            a = [],
            i = [],
            o, n, t, c; for (o = 0; o < 12; o++) n = mr([2e3, o]), t = Mr(this.monthsShort(n, "")), c = Mr(this.months(n, "")), r.push(t), a.push(c), i.push(c), i.push(t);
        r.sort(e), a.sort(e), i.sort(e), this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i") }

    function Yp(e, r, a, i, o, n, t) { var c; return e < 100 && e >= 0 ? (c = new Date(e + 400, r, a, i, o, n, t), isFinite(c.getFullYear()) && c.setFullYear(e)) : c = new Date(e, r, a, i, o, n, t), c }

    function Ji(e) { var r, a; return e < 100 && e >= 0 ? (a = Array.prototype.slice.call(arguments), a[0] = e + 400, r = new Date(Date.UTC.apply(null, a)), isFinite(r.getUTCFullYear()) && r.setUTCFullYear(e)) : r = new Date(Date.UTC.apply(null, arguments)), r }

    function xn(e, r, a) { var i = 7 + r - a,
            o = (7 + Ji(e, 0, i).getUTCDay() - r) % 7; return -o + i - 1 }

    function jf(e, r, a, i, o) { var n = (7 + a - i) % 7,
            t = xn(e, i, o),
            c = 1 + 7 * (r - 1) + n + t,
            s, l; return c <= 0 ? (s = e - 1, l = Yi(s) + c) : c > Yi(e) ? (s = e + 1, l = c - Yi(e)) : (s = e, l = c), { year: s, dayOfYear: l } }

    function eo(e, r, a) { var i = xn(e.year(), r, a),
            o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1,
            n, t; return o < 1 ? (t = e.year() - 1, n = o + Pr(t, r, a)) : o > Pr(e.year(), r, a) ? (n = o - Pr(e.year(), r, a), t = e.year() + 1) : (t = e.year(), n = o), { week: n, year: t } }

    function Pr(e, r, a) { var i = xn(e, r, a),
            o = xn(e + 1, r, a); return (Yi(e) - i + o) / 7 }
    z("w", ["ww", 2], "wo", "week");
    z("W", ["WW", 2], "Wo", "isoWeek");
    A("w", X, ci);
    A("ww", X, Ie);
    A("W", X, ci);
    A("WW", X, Ie);
    uo(["w", "ww", "W", "WW"], function(e, r, a, i) { r[i.substr(0, 1)] = R(e) });

    function Np(e) { return eo(e, this._week.dow, this._week.doy).week }
    var Rp = { dow: 0, doy: 6 };

    function Fp() { return this._week.dow }

    function bp() { return this._week.doy }

    function Ip(e) { var r = this.localeData().week(this); return e == null ? r : this.add((e - r) * 7, "d") }

    function jp(e) { var r = eo(this, 1, 4).week; return e == null ? r : this.add((e - r) * 7, "d") }
    z("d", 0, "do", "day");
    z("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) });
    z("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) });
    z("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) });
    z("e", 0, 0, "weekday");
    z("E", 0, 0, "isoWeekday");
    A("d", X);
    A("e", X);
    A("E", X);
    A("dd", function(e, r) { return r.weekdaysMinRegex(e) });
    A("ddd", function(e, r) { return r.weekdaysShortRegex(e) });
    A("dddd", function(e, r) { return r.weekdaysRegex(e) });
    uo(["dd", "ddd", "dddd"], function(e, r, a, i) { var o = a._locale.weekdaysParse(e, i, a._strict);
        o != null ? r.d = o : Y(a).invalidWeekday = e });
    uo(["d", "e", "E"], function(e, r, a, i) { r[i] = R(e) });

    function Vp(e, r) { return typeof e != "string" ? e : isNaN(e) ? (e = r.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10) }

    function Bp(e, r) { return typeof e == "string" ? r.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e }

    function Nc(e, r) { return e.slice(r, 7).concat(e.slice(0, r)) }
    var Up = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Vf = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Gp = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        Hp = lo,
        Wp = lo,
        $p = lo;

    function Kp(e, r) { var a = or(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(r) ? "format" : "standalone"]; return e === !0 ? Nc(a, this._week.dow) : e ? a[e.day()] : a }

    function qp(e) { return e === !0 ? Nc(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }

    function Xp(e) { return e === !0 ? Nc(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }

    function Qp(e, r, a) { var i, o, n, t = e.toLocaleLowerCase(); if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) n = mr([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(n, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(n, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(n, "").toLocaleLowerCase(); return a ? r === "dddd" ? (o = ne.call(this._weekdaysParse, t), o !== -1 ? o : null) : r === "ddd" ? (o = ne.call(this._shortWeekdaysParse, t), o !== -1 ? o : null) : (o = ne.call(this._minWeekdaysParse, t), o !== -1 ? o : null) : r === "dddd" ? (o = ne.call(this._weekdaysParse, t), o !== -1 || (o = ne.call(this._shortWeekdaysParse, t), o !== -1) ? o : (o = ne.call(this._minWeekdaysParse, t), o !== -1 ? o : null)) : r === "ddd" ? (o = ne.call(this._shortWeekdaysParse, t), o !== -1 || (o = ne.call(this._weekdaysParse, t), o !== -1) ? o : (o = ne.call(this._minWeekdaysParse, t), o !== -1 ? o : null)) : (o = ne.call(this._minWeekdaysParse, t), o !== -1 || (o = ne.call(this._weekdaysParse, t), o !== -1) ? o : (o = ne.call(this._shortWeekdaysParse, t), o !== -1 ? o : null)) }

    function Zp(e, r, a) { var i, o, n; if (this._weekdaysParseExact) return Qp.call(this, e, r, a); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) { if (o = mr([2e3, 1]).day(i), a && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (n = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[i] = new RegExp(n.replace(".", ""), "i")), a && r === "dddd" && this._fullWeekdaysParse[i].test(e)) return i; if (a && r === "ddd" && this._shortWeekdaysParse[i].test(e)) return i; if (a && r === "dd" && this._minWeekdaysParse[i].test(e)) return i; if (!a && this._weekdaysParse[i].test(e)) return i } }

    function Jp(e) { if (!this.isValid()) return e != null ? this : NaN; var r = Zi(this, "Day"); return e != null ? (e = Vp(e, this.localeData()), this.add(e - r, "d")) : r }

    function e4(e) { if (!this.isValid()) return e != null ? this : NaN; var r = (this.day() + 7 - this.localeData()._week.dow) % 7; return e == null ? r : this.add(e - r, "d") }

    function r4(e) { if (!this.isValid()) return e != null ? this : NaN; if (e != null) { var r = Bp(e, this.localeData()); return this.day(this.day() % 7 ? r : r - 7) } else return this.day() || 7 }

    function a4(e) { return this._weekdaysParseExact ? (V(this, "_weekdaysRegex") || Rc.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (V(this, "_weekdaysRegex") || (this._weekdaysRegex = Hp), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }

    function i4(e) { return this._weekdaysParseExact ? (V(this, "_weekdaysRegex") || Rc.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (V(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Wp), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }

    function o4(e) { return this._weekdaysParseExact ? (V(this, "_weekdaysRegex") || Rc.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (V(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = $p), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }

    function Rc() {
        function e(h, g) { return g.length - h.length } var r = [],
            a = [],
            i = [],
            o = [],
            n, t, c, s, l; for (n = 0; n < 7; n++) t = mr([2e3, 1]).day(n), c = Mr(this.weekdaysMin(t, "")), s = Mr(this.weekdaysShort(t, "")), l = Mr(this.weekdays(t, "")), r.push(c), a.push(s), i.push(l), o.push(c), o.push(s), o.push(l);
        r.sort(e), a.sort(e), i.sort(e), o.sort(e), this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i") }

    function Fc() { return this.hours() % 12 || 12 }

    function n4() { return this.hours() || 24 }
    z("H", ["HH", 2], 0, "hour");
    z("h", ["hh", 2], 0, Fc);
    z("k", ["kk", 2], 0, n4);
    z("hmm", 0, 0, function() { return "" + Fc.apply(this) + pr(this.minutes(), 2) });
    z("hmmss", 0, 0, function() { return "" + Fc.apply(this) + pr(this.minutes(), 2) + pr(this.seconds(), 2) });
    z("Hmm", 0, 0, function() { return "" + this.hours() + pr(this.minutes(), 2) });
    z("Hmmss", 0, 0, function() { return "" + this.hours() + pr(this.minutes(), 2) + pr(this.seconds(), 2) });

    function Bf(e, r) { z(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), r) }) }
    Bf("a", !0);
    Bf("A", !1);

    function Uf(e, r) { return r._meridiemParse }
    A("a", Uf);
    A("A", Uf);
    A("H", X, Oc);
    A("h", X, ci);
    A("k", X, ci);
    A("HH", X, Ie);
    A("hh", X, Ie);
    A("kk", X, Ie);
    A("hmm", Ef);
    A("hmmss", Tf);
    A("Hmm", Ef);
    A("Hmmss", Tf);
    H(["H", "HH"], ue);
    H(["k", "kk"], function(e, r, a) { var i = R(e);
        r[ue] = i === 24 ? 0 : i });
    H(["a", "A"], function(e, r, a) { a._isPm = a._locale.isPM(e), a._meridiem = e });
    H(["h", "hh"], function(e, r, a) { r[ue] = R(e), Y(a).bigHour = !0 });
    H("hmm", function(e, r, a) { var i = e.length - 2;
        r[ue] = R(e.substr(0, i)), r[er] = R(e.substr(i)), Y(a).bigHour = !0 });
    H("hmmss", function(e, r, a) { var i = e.length - 4,
            o = e.length - 2;
        r[ue] = R(e.substr(0, i)), r[er] = R(e.substr(i, 2)), r[Sr] = R(e.substr(o)), Y(a).bigHour = !0 });
    H("Hmm", function(e, r, a) { var i = e.length - 2;
        r[ue] = R(e.substr(0, i)), r[er] = R(e.substr(i)) });
    H("Hmmss", function(e, r, a) { var i = e.length - 4,
            o = e.length - 2;
        r[ue] = R(e.substr(0, i)), r[er] = R(e.substr(i, 2)), r[Sr] = R(e.substr(o)) });

    function t4(e) { return (e + "").toLowerCase().charAt(0) === "p" }
    var c4 = /[ap]\.?m?\.?/i,
        s4 = si("Hours", !0);

    function l4(e, r, a) { return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM" }
    var Gf = { calendar: Q1, longDateFormat: rp, invalidDate: ip, ordinal: np, dayOfMonthOrdinalParse: tp, relativeTime: sp, months: Ap, monthsShort: Nf, week: Rp, weekdays: Up, weekdaysMin: Gp, weekdaysShort: Vf, meridiemParse: c4 },
        Q = {},
        Li = {},
        ro;

    function u4(e, r) { var a, i = Math.min(e.length, r.length); for (a = 0; a < i; a += 1)
            if (e[a] !== r[a]) return a;
        return i }

    function tl(e) { return e && e.toLowerCase().replace("_", "-") }

    function f4(e) { for (var r = 0, a, i, o, n; r < e.length;) { for (n = tl(e[r]).split("-"), a = n.length, i = tl(e[r + 1]), i = i ? i.split("-") : null; a > 0;) { if (o = Kn(n.slice(0, a).join("-")), o) return o; if (i && i.length >= a && u4(n, i) >= a - 1) break;
                a-- }
            r++ } return ro }

    function d4(e) { return !!(e && e.match("^[^/\\\\]*$")) }

    function Kn(e) { var r = null,
            a; if (Q[e] === void 0 && typeof Ko < "u" && Ko && Ko.exports && d4(e)) try { r = ro._abbr, a = require, a("./locale/" + e), Zr(r) } catch { Q[e] = null }
        return Q[e] }

    function Zr(e, r) { var a; return e && (Pe(r) ? a = Or(e) : a = bc(e, r), a ? ro = a : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), ro._abbr }

    function bc(e, r) { if (r !== null) { var a, i = Gf; if (r.abbr = e, Q[e] != null) kf("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = Q[e]._config;
            else if (r.parentLocale != null)
                if (Q[r.parentLocale] != null) i = Q[r.parentLocale]._config;
                else if (a = Kn(r.parentLocale), a != null) i = a._config;
            else return Li[r.parentLocale] || (Li[r.parentLocale] = []), Li[r.parentLocale].push({ name: e, config: r }), null; return Q[e] = new wc(M0(i, r)), Li[e] && Li[e].forEach(function(o) { bc(o.name, o.config) }), Zr(e), Q[e] } else return delete Q[e], null }

    function p4(e, r) { if (r != null) { var a, i, o = Gf;
            Q[e] != null && Q[e].parentLocale != null ? Q[e].set(M0(Q[e]._config, r)) : (i = Kn(e), i != null && (o = i._config), r = M0(o, r), i == null && (r.abbr = e), a = new wc(r), a.parentLocale = Q[e], Q[e] = a), Zr(e) } else Q[e] != null && (Q[e].parentLocale != null ? (Q[e] = Q[e].parentLocale, e === Zr() && Zr(e)) : Q[e] != null && delete Q[e]); return Q[e] }

    function Or(e) { var r; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ro; if (!or(e)) { if (r = Kn(e), r) return r;
            e = [e] } return f4(e) }

    function m4() { return P0(Q) }

    function Ic(e) { var r, a = e._a; return a && Y(e).overflow === -2 && (r = a[Dr] < 0 || a[Dr] > 11 ? Dr : a[ur] < 1 || a[ur] > Yc(a[ye], a[Dr]) ? ur : a[ue] < 0 || a[ue] > 24 || a[ue] === 24 && (a[er] !== 0 || a[Sr] !== 0 || a[pa] !== 0) ? ue : a[er] < 0 || a[er] > 59 ? er : a[Sr] < 0 || a[Sr] > 59 ? Sr : a[pa] < 0 || a[pa] > 999 ? pa : -1, Y(e)._overflowDayOfYear && (r < ye || r > ur) && (r = ur), Y(e)._overflowWeeks && r === -1 && (r = Cp), Y(e)._overflowWeekday && r === -1 && (r = Lp), Y(e).overflow = r), e }
    var h4 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        g4 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        v4 = /Z|[+-]\d\d(?::?\d\d)?/,
        To = [
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
        _t = [
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
        C4 = /^\/?Date\((-?\d+)/i,
        L4 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        y4 = { UT: 0, GMT: 0, EDT: -4 * 60, EST: -5 * 60, CDT: -5 * 60, CST: -6 * 60, MDT: -6 * 60, MST: -7 * 60, PDT: -7 * 60, PST: -8 * 60 };

    function Hf(e) { var r, a, i = e._i,
            o = h4.exec(i) || g4.exec(i),
            n, t, c, s, l = To.length,
            h = _t.length; if (o) { for (Y(e).iso = !0, r = 0, a = l; r < a; r++)
                if (To[r][1].exec(o[1])) { t = To[r][0], n = To[r][2] !== !1; break }
            if (t == null) { e._isValid = !1; return } if (o[3]) { for (r = 0, a = h; r < a; r++)
                    if (_t[r][1].exec(o[3])) { c = (o[2] || " ") + _t[r][0]; break }
                if (c == null) { e._isValid = !1; return } } if (!n && c != null) { e._isValid = !1; return } if (o[4])
                if (v4.exec(o[4])) s = "Z";
                else { e._isValid = !1; return }
            e._f = t + (c || "") + (s || ""), Vc(e) } else e._isValid = !1 }

    function x4(e, r, a, i, o, n) { var t = [D4(e), Nf.indexOf(r), parseInt(a, 10), parseInt(i, 10), parseInt(o, 10)]; return n && t.push(parseInt(n, 10)), t }

    function D4(e) { var r = parseInt(e, 10); return r <= 49 ? 2e3 + r : r <= 999 ? 1900 + r : r }

    function S4(e) { return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }

    function A4(e, r, a) { if (e) { var i = Vf.indexOf(e),
                o = new Date(r[0], r[1], r[2]).getDay(); if (i !== o) return Y(a).weekdayMismatch = !0, a._isValid = !1, !1 } return !0 }

    function M4(e, r, a) { if (e) return y4[e]; if (r) return 0; var i = parseInt(a, 10),
            o = i % 100,
            n = (i - o) / 100; return n * 60 + o }

    function Wf(e) { var r = L4.exec(S4(e._i)),
            a; if (r) { if (a = x4(r[4], r[3], r[2], r[5], r[6], r[7]), !A4(r[1], a, e)) return;
            e._a = a, e._tzm = M4(r[8], r[9], r[10]), e._d = Ji.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Y(e).rfc2822 = !0 } else e._isValid = !1 }

    function P4(e) { var r = C4.exec(e._i); if (r !== null) { e._d = new Date(+r[1]); return } if (Hf(e), e._isValid === !1) delete e._isValid;
        else return; if (Wf(e), e._isValid === !1) delete e._isValid;
        else return;
        e._strict ? e._isValid = !1 : S.createFromInputFallback(e) }
    S.createFromInputFallback = $e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) });

    function ka(e, r, a) { return e ? ? r ? ? a }

    function k4(e) { var r = new Date(S.now()); return e._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()] }

    function jc(e) { var r, a, i = [],
            o, n, t; if (!e._d) { for (o = k4(e), e._w && e._a[ur] == null && e._a[Dr] == null && w4(e), e._dayOfYear != null && (t = ka(e._a[ye], o[ye]), (e._dayOfYear > Yi(t) || e._dayOfYear === 0) && (Y(e)._overflowDayOfYear = !0), a = Ji(t, 0, e._dayOfYear), e._a[Dr] = a.getUTCMonth(), e._a[ur] = a.getUTCDate()), r = 0; r < 3 && e._a[r] == null; ++r) e._a[r] = i[r] = o[r]; for (; r < 7; r++) e._a[r] = i[r] = e._a[r] == null ? r === 2 ? 1 : 0 : e._a[r];
            e._a[ue] === 24 && e._a[er] === 0 && e._a[Sr] === 0 && e._a[pa] === 0 && (e._nextDay = !0, e._a[ue] = 0), e._d = (e._useUTC ? Ji : Yp).apply(null, i), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ue] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (Y(e).weekdayMismatch = !0) } }

    function w4(e) { var r, a, i, o, n, t, c, s, l;
        r = e._w, r.GG != null || r.W != null || r.E != null ? (n = 1, t = 4, a = ka(r.GG, e._a[ye], eo(q(), 1, 4).year), i = ka(r.W, 1), o = ka(r.E, 1), (o < 1 || o > 7) && (s = !0)) : (n = e._locale._week.dow, t = e._locale._week.doy, l = eo(q(), n, t), a = ka(r.gg, e._a[ye], l.year), i = ka(r.w, l.week), r.d != null ? (o = r.d, (o < 0 || o > 6) && (s = !0)) : r.e != null ? (o = r.e + n, (r.e < 0 || r.e > 6) && (s = !0)) : o = n), i < 1 || i > Pr(a, n, t) ? Y(e)._overflowWeeks = !0 : s != null ? Y(e)._overflowWeekday = !0 : (c = jf(a, i, o, n, t), e._a[ye] = c.year, e._dayOfYear = c.dayOfYear) }
    S.ISO_8601 = function() {};
    S.RFC_2822 = function() {};

    function Vc(e) { if (e._f === S.ISO_8601) { Hf(e); return } if (e._f === S.RFC_2822) { Wf(e); return }
        e._a = [], Y(e).empty = !0; var r = "" + e._i,
            a, i, o, n, t, c = r.length,
            s = 0,
            l, h; for (o = wf(e._f, e._locale).match(_c) || [], h = o.length, a = 0; a < h; a++) n = o[a], i = (r.match(hp(n, e)) || [])[0], i && (t = r.substr(0, r.indexOf(i)), t.length > 0 && Y(e).unusedInput.push(t), r = r.slice(r.indexOf(i) + i.length), s += i.length), $a[n] ? (i ? Y(e).empty = !1 : Y(e).unusedTokens.push(n), vp(n, i, e)) : e._strict && !i && Y(e).unusedTokens.push(n);
        Y(e).charsLeftOver = c - s, r.length > 0 && Y(e).unusedInput.push(r), e._a[ue] <= 12 && Y(e).bigHour === !0 && e._a[ue] > 0 && (Y(e).bigHour = void 0), Y(e).parsedDateParts = e._a.slice(0), Y(e).meridiem = e._meridiem, e._a[ue] = _4(e._locale, e._a[ue], e._meridiem), l = Y(e).era, l !== null && (e._a[ye] = e._locale.erasConvertYear(l, e._a[ye])), jc(e), Ic(e) }

    function _4(e, r, a) { var i; return a == null ? r : e.meridiemHour != null ? e.meridiemHour(r, a) : (e.isPM != null && (i = e.isPM(a), i && r < 12 && (r += 12), !i && r === 12 && (r = 0)), r) }

    function z4(e) { var r, a, i, o, n, t, c = !1,
            s = e._f.length; if (s === 0) { Y(e).invalidFormat = !0, e._d = new Date(NaN); return } for (o = 0; o < s; o++) n = 0, t = !1, r = kc({}, e), e._useUTC != null && (r._useUTC = e._useUTC), r._f = e._f[o], Vc(r), Pc(r) && (t = !0), n += Y(r).charsLeftOver, n += Y(r).unusedTokens.length * 10, Y(r).score = n, c ? n < i && (i = n, a = r) : (i == null || n < i || t) && (i = n, a = r, t && (c = !0));
        Br(e, a || r) }

    function E4(e) { if (!e._d) { var r = zc(e._i),
                a = r.day === void 0 ? r.date : r.day;
            e._a = Mf([r.year, r.month, a, r.hour, r.minute, r.second, r.millisecond], function(i) { return i && parseInt(i, 10) }), jc(e) } }

    function T4(e) { var r = new so(Ic($f(e))); return r._nextDay && (r.add(1, "d"), r._nextDay = void 0), r }

    function $f(e) { var r = e._i,
            a = e._f; return e._locale = e._locale || Or(e._l), r === null || a === void 0 && r === "" ? Vn({ nullInput: !0 }) : (typeof r == "string" && (e._i = r = e._locale.preparse(r)), nr(r) ? new so(Ic(r)) : (co(r) ? e._d = r : or(a) ? z4(e) : a ? Vc(e) : O4(e), Pc(e) || (e._d = null), e)) }

    function O4(e) { var r = e._i;
        Pe(r) ? e._d = new Date(S.now()) : co(r) ? e._d = new Date(r.valueOf()) : typeof r == "string" ? P4(e) : or(r) ? (e._a = Mf(r.slice(0), function(a) { return parseInt(a, 10) }), jc(e)) : ga(r) ? E4(e) : Er(r) ? e._d = new Date(r) : S.createFromInputFallback(e) }

    function Kf(e, r, a, i, o) { var n = {}; return (r === !0 || r === !1) && (i = r, r = void 0), (a === !0 || a === !1) && (i = a, a = void 0), (ga(e) && Mc(e) || or(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = o, n._l = a, n._i = e, n._f = r, n._strict = i, T4(n) }

    function q(e, r, a, i) { return Kf(e, r, a, i, !1) }
    var Y4 = $e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = q.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : Vn() }),
        N4 = $e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = q.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : Vn() });

    function qf(e, r) { var a, i; if (r.length === 1 && or(r[0]) && (r = r[0]), !r.length) return q(); for (a = r[0], i = 1; i < r.length; ++i)(!r[i].isValid() || r[i][e](a)) && (a = r[i]); return a }

    function R4() { var e = [].slice.call(arguments, 0); return qf("isBefore", e) }

    function F4() { var e = [].slice.call(arguments, 0); return qf("isAfter", e) }
    var b4 = function() { return Date.now ? Date.now() : +new Date },
        yi = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function I4(e) { var r, a = !1,
            i, o = yi.length; for (r in e)
            if (V(e, r) && !(ne.call(yi, r) !== -1 && (e[r] == null || !isNaN(e[r])))) return !1;
        for (i = 0; i < o; ++i)
            if (e[yi[i]]) { if (a) return !1;
                parseFloat(e[yi[i]]) !== R(e[yi[i]]) && (a = !0) }
        return !0 }

    function j4() { return this._isValid }

    function V4() { return tr(NaN) }

    function qn(e) { var r = zc(e),
            a = r.year || 0,
            i = r.quarter || 0,
            o = r.month || 0,
            n = r.week || r.isoWeek || 0,
            t = r.day || 0,
            c = r.hour || 0,
            s = r.minute || 0,
            l = r.second || 0,
            h = r.millisecond || 0;
        this._isValid = I4(r), this._milliseconds = +h + l * 1e3 + s * 6e4 + c * 1e3 * 60 * 60, this._days = +t + n * 7, this._months = +o + i * 3 + a * 12, this._data = {}, this._locale = Or(), this._bubble() }

    function Wo(e) { return e instanceof qn }

    function w0(e) { return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e) }

    function B4(e, r, a) { var i = Math.min(e.length, r.length),
            o = Math.abs(e.length - r.length),
            n = 0,
            t; for (t = 0; t < i; t++)(a && e[t] !== r[t] || !a && R(e[t]) !== R(r[t])) && n++; return n + o }

    function Xf(e, r) { z(e, 0, 0, function() { var a = this.utcOffset(),
                i = "+"; return a < 0 && (a = -a, i = "-"), i + pr(~~(a / 60), 2) + r + pr(~~a % 60, 2) }) }
    Xf("Z", ":");
    Xf("ZZ", "");
    A("Z", Wn);
    A("ZZ", Wn);
    H(["Z", "ZZ"], function(e, r, a) { a._useUTC = !0, a._tzm = Bc(Wn, e) });
    var U4 = /([\+\-]|\d\d)/gi;

    function Bc(e, r) { var a = (r || "").match(e),
            i, o, n; return a === null ? null : (i = a[a.length - 1] || [], o = (i + "").match(U4) || ["-", 0, 0], n = +(o[1] * 60) + R(o[2]), n === 0 ? 0 : o[0] === "+" ? n : -n) }

    function Uc(e, r) { var a, i; return r._isUTC ? (a = r.clone(), i = (nr(e) || co(e) ? e.valueOf() : q(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + i), S.updateOffset(a, !1), a) : q(e).local() }

    function _0(e) { return -Math.round(e._d.getTimezoneOffset()) }
    S.updateOffset = function() {};

    function G4(e, r, a) { var i = this._offset || 0,
            o; if (!this.isValid()) return e != null ? this : NaN; if (e != null) { if (typeof e == "string") { if (e = Bc(Wn, e), e === null) return this } else Math.abs(e) < 16 && !a && (e = e * 60); return !this._isUTC && r && (o = _0(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), i !== e && (!r || this._changeInProgress ? Jf(this, tr(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, S.updateOffset(this, !0), this._changeInProgress = null)), this } else return this._isUTC ? i : _0(this) }

    function H4(e, r) { return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, r), this) : -this.utcOffset() }

    function W4(e) { return this.utcOffset(0, e) }

    function $4(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(_0(this), "m")), this }

    function K4() { if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") { var e = Bc(pp, this._i);
            e != null ? this.utcOffset(e) : this.utcOffset(0, !0) } return this }

    function q4(e) { return this.isValid() ? (e = e ? q(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1 }

    function X4() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }

    function Q4() { if (!Pe(this._isDSTShifted)) return this._isDSTShifted; var e = {},
            r; return kc(e, this), e = $f(e), e._a ? (r = e._isUTC ? mr(e._a) : q(e._a), this._isDSTShifted = this.isValid() && B4(e._a, r.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted }

    function Z4() { return this.isValid() ? !this._isUTC : !1 }

    function J4() { return this.isValid() ? this._isUTC : !1 }

    function Qf() { return this.isValid() ? this._isUTC && this._offset === 0 : !1 }
    var em = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        rm = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function tr(e, r) { var a = e,
            i = null,
            o, n, t; return Wo(e) ? a = { ms: e._milliseconds, d: e._days, M: e._months } : Er(e) || !isNaN(+e) ? (a = {}, r ? a[r] = +e : a.milliseconds = +e) : (i = em.exec(e)) ? (o = i[1] === "-" ? -1 : 1, a = { y: 0, d: R(i[ur]) * o, h: R(i[ue]) * o, m: R(i[er]) * o, s: R(i[Sr]) * o, ms: R(w0(i[pa] * 1e3)) * o }) : (i = rm.exec(e)) ? (o = i[1] === "-" ? -1 : 1, a = { y: ta(i[2], o), M: ta(i[3], o), w: ta(i[4], o), d: ta(i[5], o), h: ta(i[6], o), m: ta(i[7], o), s: ta(i[8], o) }) : a == null ? a = {} : typeof a == "object" && ("from" in a || "to" in a) && (t = am(q(a.from), q(a.to)), a = {}, a.ms = t.milliseconds, a.M = t.months), n = new qn(a), Wo(e) && V(e, "_locale") && (n._locale = e._locale), Wo(e) && V(e, "_isValid") && (n._isValid = e._isValid), n }
    tr.fn = qn.prototype;
    tr.invalid = V4;

    function ta(e, r) { var a = e && parseFloat(e.replace(",", ".")); return (isNaN(a) ? 0 : a) * r }

    function cl(e, r) { var a = {}; return a.months = r.month() - e.month() + (r.year() - e.year()) * 12, e.clone().add(a.months, "M").isAfter(r) && --a.months, a.milliseconds = +r - +e.clone().add(a.months, "M"), a }

    function am(e, r) { var a; return e.isValid() && r.isValid() ? (r = Uc(r, e), e.isBefore(r) ? a = cl(e, r) : (a = cl(r, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : { milliseconds: 0, months: 0 } }

    function Zf(e, r) { return function(a, i) { var o, n; return i !== null && !isNaN(+i) && (kf(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = a, a = i, i = n), o = tr(a, i), Jf(this, o, e), this } }

    function Jf(e, r, a, i) { var o = r._milliseconds,
            n = w0(r._days),
            t = w0(r._months);
        e.isValid() && (i = i ? ? !0, t && Ff(e, Zi(e, "Month") + t * a), n && Yf(e, "Date", Zi(e, "Date") + n * a), o && e._d.setTime(e._d.valueOf() + o * a), i && S.updateOffset(e, n || t)) }
    var im = Zf(1, "add"),
        om = Zf(-1, "subtract");

    function ed(e) { return typeof e == "string" || e instanceof String }

    function nm(e) { return nr(e) || co(e) || ed(e) || Er(e) || cm(e) || tm(e) || e === null || e === void 0 }

    function tm(e) { var r = ga(e) && !Mc(e),
            a = !1,
            i = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
            o, n, t = i.length; for (o = 0; o < t; o += 1) n = i[o], a = a || V(e, n); return r && a }

    function cm(e) { var r = or(e),
            a = !1; return r && (a = e.filter(function(i) { return !Er(i) && ed(e) }).length === 0), r && a }

    function sm(e) { var r = ga(e) && !Mc(e),
            a = !1,
            i = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
            o, n; for (o = 0; o < i.length; o += 1) n = i[o], a = a || V(e, n); return r && a }

    function lm(e, r) { var a = e.diff(r, "days", !0); return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse" }

    function um(e, r) { arguments.length === 1 && (arguments[0] ? nm(arguments[0]) ? (e = arguments[0], r = void 0) : sm(arguments[0]) && (r = arguments[0], e = void 0) : (e = void 0, r = void 0)); var a = e || q(),
            i = Uc(a, this).startOf("day"),
            o = S.calendarFormat(this, i) || "sameElse",
            n = r && (hr(r[o]) ? r[o].call(this, a) : r[o]); return this.format(n || this.localeData().calendar(o, this, q(a))) }

    function fm() { return new so(this) }

    function dm(e, r) { var a = nr(e) ? e : q(e); return this.isValid() && a.isValid() ? (r = Ke(r) || "millisecond", r === "millisecond" ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(r).valueOf()) : !1 }

    function pm(e, r) { var a = nr(e) ? e : q(e); return this.isValid() && a.isValid() ? (r = Ke(r) || "millisecond", r === "millisecond" ? this.valueOf() < a.valueOf() : this.clone().endOf(r).valueOf() < a.valueOf()) : !1 }

    function mm(e, r, a, i) { var o = nr(e) ? e : q(e),
            n = nr(r) ? r : q(r); return this.isValid() && o.isValid() && n.isValid() ? (i = i || "()", (i[0] === "(" ? this.isAfter(o, a) : !this.isBefore(o, a)) && (i[1] === ")" ? this.isBefore(n, a) : !this.isAfter(n, a))) : !1 }

    function hm(e, r) { var a = nr(e) ? e : q(e),
            i; return this.isValid() && a.isValid() ? (r = Ke(r) || "millisecond", r === "millisecond" ? this.valueOf() === a.valueOf() : (i = a.valueOf(), this.clone().startOf(r).valueOf() <= i && i <= this.clone().endOf(r).valueOf())) : !1 }

    function gm(e, r) { return this.isSame(e, r) || this.isAfter(e, r) }

    function vm(e, r) { return this.isSame(e, r) || this.isBefore(e, r) }

    function Cm(e, r, a) { var i, o, n; if (!this.isValid()) return NaN; if (i = Uc(e, this), !i.isValid()) return NaN; switch (o = (i.utcOffset() - this.utcOffset()) * 6e4, r = Ke(r), r) {
            case "year":
                n = $o(this, i) / 12; break;
            case "month":
                n = $o(this, i); break;
            case "quarter":
                n = $o(this, i) / 3; break;
            case "second":
                n = (this - i) / 1e3; break;
            case "minute":
                n = (this - i) / 6e4; break;
            case "hour":
                n = (this - i) / 36e5; break;
            case "day":
                n = (this - i - o) / 864e5; break;
            case "week":
                n = (this - i - o) / 6048e5; break;
            default:
                n = this - i } return a ? n : Be(n) }

    function $o(e, r) { if (e.date() < r.date()) return -$o(r, e); var a = (r.year() - e.year()) * 12 + (r.month() - e.month()),
            i = e.clone().add(a, "months"),
            o, n; return r - i < 0 ? (o = e.clone().add(a - 1, "months"), n = (r - i) / (i - o)) : (o = e.clone().add(a + 1, "months"), n = (r - i) / (o - i)), -(a + n) || 0 }
    S.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    S.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

    function Lm() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }

    function ym(e) { if (!this.isValid()) return null; var r = e !== !0,
            a = r ? this.clone().utc() : this; return a.year() < 0 || a.year() > 9999 ? Ho(a, r ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : hr(Date.prototype.toISOString) ? r ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ho(a, "Z")) : Ho(a, r ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }

    function xm() { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var e = "moment",
            r = "",
            a, i, o, n; return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", r = "Z"), a = "[" + e + '("]', i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", n = r + '[")]', this.format(a + i + o + n) }

    function Dm(e) { e || (e = this.isUtc() ? S.defaultFormatUtc : S.defaultFormat); var r = Ho(this, e); return this.localeData().postformat(r) }

    function Sm(e, r) { return this.isValid() && (nr(e) && e.isValid() || q(e).isValid()) ? tr({ to: this, from: e }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate() }

    function Am(e) { return this.from(q(), e) }

    function Mm(e, r) { return this.isValid() && (nr(e) && e.isValid() || q(e).isValid()) ? tr({ from: this, to: e }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate() }

    function Pm(e) { return this.to(q(), e) }

    function rd(e) { var r; return e === void 0 ? this._locale._abbr : (r = Or(e), r != null && (this._locale = r), this) }
    var ad = $e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return e === void 0 ? this.localeData() : this.locale(e) });

    function id() { return this._locale }
    var Dn = 1e3,
        Ka = 60 * Dn,
        Sn = 60 * Ka,
        od = (365 * 400 + 97) * 24 * Sn;

    function qa(e, r) { return (e % r + r) % r }

    function nd(e, r, a) { return e < 100 && e >= 0 ? new Date(e + 400, r, a) - od : new Date(e, r, a).valueOf() }

    function td(e, r, a) { return e < 100 && e >= 0 ? Date.UTC(e + 400, r, a) - od : Date.UTC(e, r, a) }

    function km(e) { var r, a; if (e = Ke(e), e === void 0 || e === "millisecond" || !this.isValid()) return this; switch (a = this._isUTC ? td : nd, e) {
            case "year":
                r = a(this.year(), 0, 1); break;
            case "quarter":
                r = a(this.year(), this.month() - this.month() % 3, 1); break;
            case "month":
                r = a(this.year(), this.month(), 1); break;
            case "week":
                r = a(this.year(), this.month(), this.date() - this.weekday()); break;
            case "isoWeek":
                r = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break;
            case "day":
            case "date":
                r = a(this.year(), this.month(), this.date()); break;
            case "hour":
                r = this._d.valueOf(), r -= qa(r + (this._isUTC ? 0 : this.utcOffset() * Ka), Sn); break;
            case "minute":
                r = this._d.valueOf(), r -= qa(r, Ka); break;
            case "second":
                r = this._d.valueOf(), r -= qa(r, Dn); break } return this._d.setTime(r), S.updateOffset(this, !0), this }

    function wm(e) { var r, a; if (e = Ke(e), e === void 0 || e === "millisecond" || !this.isValid()) return this; switch (a = this._isUTC ? td : nd, e) {
            case "year":
                r = a(this.year() + 1, 0, 1) - 1; break;
            case "quarter":
                r = a(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break;
            case "month":
                r = a(this.year(), this.month() + 1, 1) - 1; break;
            case "week":
                r = a(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break;
            case "isoWeek":
                r = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break;
            case "day":
            case "date":
                r = a(this.year(), this.month(), this.date() + 1) - 1; break;
            case "hour":
                r = this._d.valueOf(), r += Sn - qa(r + (this._isUTC ? 0 : this.utcOffset() * Ka), Sn) - 1; break;
            case "minute":
                r = this._d.valueOf(), r += Ka - qa(r, Ka) - 1; break;
            case "second":
                r = this._d.valueOf(), r += Dn - qa(r, Dn) - 1; break } return this._d.setTime(r), S.updateOffset(this, !0), this }

    function _m() { return this._d.valueOf() - (this._offset || 0) * 6e4 }

    function zm() { return Math.floor(this.valueOf() / 1e3) }

    function Em() { return new Date(this.valueOf()) }

    function Tm() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }

    function Om() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }

    function Ym() { return this.isValid() ? this.toISOString() : null }

    function Nm() { return Pc(this) }

    function Rm() { return Br({}, Y(this)) }

    function Fm() { return Y(this).overflow }

    function bm() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }
    z("N", 0, 0, "eraAbbr");
    z("NN", 0, 0, "eraAbbr");
    z("NNN", 0, 0, "eraAbbr");
    z("NNNN", 0, 0, "eraName");
    z("NNNNN", 0, 0, "eraNarrow");
    z("y", ["y", 1], "yo", "eraYear");
    z("y", ["yy", 2], 0, "eraYear");
    z("y", ["yyy", 3], 0, "eraYear");
    z("y", ["yyyy", 4], 0, "eraYear");
    A("N", Gc);
    A("NN", Gc);
    A("NNN", Gc);
    A("NNNN", qm);
    A("NNNNN", Xm);
    H(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, r, a, i) { var o = a._locale.erasParse(e, i, a._strict);
        o ? Y(a).era = o : Y(a).invalidEra = e });
    A("y", ti);
    A("yy", ti);
    A("yyy", ti);
    A("yyyy", ti);
    A("yo", Qm);
    H(["y", "yy", "yyy", "yyyy"], ye);
    H(["yo"], function(e, r, a, i) { var o;
        a._locale._eraYearOrdinalRegex && (o = e.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? r[ye] = a._locale.eraYearOrdinalParse(e, o) : r[ye] = parseInt(e, 10) });

    function Im(e, r) { var a, i, o, n = this._eras || Or("en")._eras; for (a = 0, i = n.length; a < i; ++a) { switch (typeof n[a].since) {
                case "string":
                    o = S(n[a].since).startOf("day"), n[a].since = o.valueOf(); break } switch (typeof n[a].until) {
                case "undefined":
                    n[a].until = 1 / 0; break;
                case "string":
                    o = S(n[a].until).startOf("day").valueOf(), n[a].until = o.valueOf(); break } } return n }

    function jm(e, r, a) { var i, o, n = this.eras(),
            t, c, s; for (e = e.toUpperCase(), i = 0, o = n.length; i < o; ++i)
            if (t = n[i].name.toUpperCase(), c = n[i].abbr.toUpperCase(), s = n[i].narrow.toUpperCase(), a) switch (r) {
                case "N":
                case "NN":
                case "NNN":
                    if (c === e) return n[i]; break;
                case "NNNN":
                    if (t === e) return n[i]; break;
                case "NNNNN":
                    if (s === e) return n[i]; break } else if ([t, c, s].indexOf(e) >= 0) return n[i] }

    function Vm(e, r) { var a = e.since <= e.until ? 1 : -1; return r === void 0 ? S(e.since).year() : S(e.since).year() + (r - e.offset) * a }

    function Bm() { var e, r, a, i = this.localeData().eras(); for (e = 0, r = i.length; e < r; ++e)
            if (a = this.clone().startOf("day").valueOf(), i[e].since <= a && a <= i[e].until || i[e].until <= a && a <= i[e].since) return i[e].name;
        return "" }

    function Um() { var e, r, a, i = this.localeData().eras(); for (e = 0, r = i.length; e < r; ++e)
            if (a = this.clone().startOf("day").valueOf(), i[e].since <= a && a <= i[e].until || i[e].until <= a && a <= i[e].since) return i[e].narrow;
        return "" }

    function Gm() { var e, r, a, i = this.localeData().eras(); for (e = 0, r = i.length; e < r; ++e)
            if (a = this.clone().startOf("day").valueOf(), i[e].since <= a && a <= i[e].until || i[e].until <= a && a <= i[e].since) return i[e].abbr;
        return "" }

    function Hm() { var e, r, a, i, o = this.localeData().eras(); for (e = 0, r = o.length; e < r; ++e)
            if (a = o[e].since <= o[e].until ? 1 : -1, i = this.clone().startOf("day").valueOf(), o[e].since <= i && i <= o[e].until || o[e].until <= i && i <= o[e].since) return (this.year() - S(o[e].since).year()) * a + o[e].offset;
        return this.year() }

    function Wm(e) { return V(this, "_erasNameRegex") || Hc.call(this), e ? this._erasNameRegex : this._erasRegex }

    function $m(e) { return V(this, "_erasAbbrRegex") || Hc.call(this), e ? this._erasAbbrRegex : this._erasRegex }

    function Km(e) { return V(this, "_erasNarrowRegex") || Hc.call(this), e ? this._erasNarrowRegex : this._erasRegex }

    function Gc(e, r) { return r.erasAbbrRegex(e) }

    function qm(e, r) { return r.erasNameRegex(e) }

    function Xm(e, r) { return r.erasNarrowRegex(e) }

    function Qm(e, r) { return r._eraYearOrdinalRegex || ti }

    function Hc() { var e = [],
            r = [],
            a = [],
            i = [],
            o, n, t, c, s, l = this.eras(); for (o = 0, n = l.length; o < n; ++o) t = Mr(l[o].name), c = Mr(l[o].abbr), s = Mr(l[o].narrow), r.push(t), e.push(c), a.push(s), i.push(t), i.push(c), i.push(s);
        this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + a.join("|") + ")", "i") }
    z(0, ["gg", 2], 0, function() { return this.weekYear() % 100 });
    z(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 });

    function Xn(e, r) { z(0, [e, e.length], 0, r) }
    Xn("gggg", "weekYear");
    Xn("ggggg", "weekYear");
    Xn("GGGG", "isoWeekYear");
    Xn("GGGGG", "isoWeekYear");
    A("G", Hn);
    A("g", Hn);
    A("GG", X, Ie);
    A("gg", X, Ie);
    A("GGGG", Tc, Ec);
    A("gggg", Tc, Ec);
    A("GGGGG", Gn, Bn);
    A("ggggg", Gn, Bn);
    uo(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, r, a, i) { r[i.substr(0, 2)] = R(e) });
    uo(["gg", "GG"], function(e, r, a, i) { r[i] = S.parseTwoDigitYear(e) });

    function Zm(e) { return cd.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy) }

    function Jm(e) { return cd.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }

    function eh() { return Pr(this.year(), 1, 4) }

    function rh() { return Pr(this.isoWeekYear(), 1, 4) }

    function ah() { var e = this.localeData()._week; return Pr(this.year(), e.dow, e.doy) }

    function ih() { var e = this.localeData()._week; return Pr(this.weekYear(), e.dow, e.doy) }

    function cd(e, r, a, i, o) { var n; return e == null ? eo(this, i, o).year : (n = Pr(e, i, o), r > n && (r = n), oh.call(this, e, r, a, i, o)) }

    function oh(e, r, a, i, o) { var n = jf(e, r, a, i, o),
            t = Ji(n.year, 0, n.dayOfYear); return this.year(t.getUTCFullYear()), this.month(t.getUTCMonth()), this.date(t.getUTCDate()), this }
    z("Q", 0, "Qo", "quarter");
    A("Q", _f);
    H("Q", function(e, r) { r[Dr] = (R(e) - 1) * 3 });

    function nh(e) { return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3) }
    z("D", ["DD", 2], "Do", "date");
    A("D", X, ci);
    A("DD", X, Ie);
    A("Do", function(e, r) { return e ? r._dayOfMonthOrdinalParse || r._ordinalParse : r._dayOfMonthOrdinalParseLenient });
    H(["D", "DD"], ur);
    H("Do", function(e, r) { r[ur] = R(e.match(X)[0]) });
    var sd = si("Date", !0);
    z("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    A("DDD", Un);
    A("DDDD", zf);
    H(["DDD", "DDDD"], function(e, r, a) { a._dayOfYear = R(e) });

    function th(e) { var r = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return e == null ? r : this.add(e - r, "d") }
    z("m", ["mm", 2], 0, "minute");
    A("m", X, Oc);
    A("mm", X, Ie);
    H(["m", "mm"], er);
    var ch = si("Minutes", !1);
    z("s", ["ss", 2], 0, "second");
    A("s", X, Oc);
    A("ss", X, Ie);
    H(["s", "ss"], Sr);
    var sh = si("Seconds", !1);
    z("S", 0, 0, function() { return ~~(this.millisecond() / 100) });
    z(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) });
    z(0, ["SSS", 3], 0, "millisecond");
    z(0, ["SSSS", 4], 0, function() { return this.millisecond() * 10 });
    z(0, ["SSSSS", 5], 0, function() { return this.millisecond() * 100 });
    z(0, ["SSSSSS", 6], 0, function() { return this.millisecond() * 1e3 });
    z(0, ["SSSSSSS", 7], 0, function() { return this.millisecond() * 1e4 });
    z(0, ["SSSSSSSS", 8], 0, function() { return this.millisecond() * 1e5 });
    z(0, ["SSSSSSSSS", 9], 0, function() { return this.millisecond() * 1e6 });
    A("S", Un, _f);
    A("SS", Un, Ie);
    A("SSS", Un, zf);
    var Ur, ld;
    for (Ur = "SSSS"; Ur.length <= 9; Ur += "S") A(Ur, ti);

    function lh(e, r) { r[pa] = R(("0." + e) * 1e3) }
    for (Ur = "S"; Ur.length <= 9; Ur += "S") H(Ur, lh);
    ld = si("Milliseconds", !1);
    z("z", 0, 0, "zoneAbbr");
    z("zz", 0, 0, "zoneName");

    function uh() { return this._isUTC ? "UTC" : "" }

    function fh() { return this._isUTC ? "Coordinated Universal Time" : "" }
    var y = so.prototype;
    y.add = im;
    y.calendar = um;
    y.clone = fm;
    y.diff = Cm;
    y.endOf = wm;
    y.format = Dm;
    y.from = Sm;
    y.fromNow = Am;
    y.to = Mm;
    y.toNow = Pm;
    y.get = xp;
    y.invalidAt = Fm;
    y.isAfter = dm;
    y.isBefore = pm;
    y.isBetween = mm;
    y.isSame = hm;
    y.isSameOrAfter = gm;
    y.isSameOrBefore = vm;
    y.isValid = Nm;
    y.lang = ad;
    y.locale = rd;
    y.localeData = id;
    y.max = N4;
    y.min = Y4;
    y.parsingFlags = Rm;
    y.set = Dp;
    y.startOf = km;
    y.subtract = om;
    y.toArray = Tm;
    y.toObject = Om;
    y.toDate = Em;
    y.toISOString = ym;
    y.inspect = xm;
    typeof Symbol < "u" && Symbol.for != null && (y[Symbol.for("nodejs.util.inspect.custom")] = function() { return "Moment<" + this.format() + ">" });
    y.toJSON = Ym;
    y.toString = Lm;
    y.unix = zm;
    y.valueOf = _m;
    y.creationData = bm;
    y.eraName = Bm;
    y.eraNarrow = Um;
    y.eraAbbr = Gm;
    y.eraYear = Hm;
    y.year = Of;
    y.isLeapYear = yp;
    y.weekYear = Zm;
    y.isoWeekYear = Jm;
    y.quarter = y.quarters = nh;
    y.month = bf;
    y.daysInMonth = Ep;
    y.week = y.weeks = Ip;
    y.isoWeek = y.isoWeeks = jp;
    y.weeksInYear = ah;
    y.weeksInWeekYear = ih;
    y.isoWeeksInYear = eh;
    y.isoWeeksInISOWeekYear = rh;
    y.date = sd;
    y.day = y.days = Jp;
    y.weekday = e4;
    y.isoWeekday = r4;
    y.dayOfYear = th;
    y.hour = y.hours = s4;
    y.minute = y.minutes = ch;
    y.second = y.seconds = sh;
    y.millisecond = y.milliseconds = ld;
    y.utcOffset = G4;
    y.utc = W4;
    y.local = $4;
    y.parseZone = K4;
    y.hasAlignedHourOffset = q4;
    y.isDST = X4;
    y.isLocal = Z4;
    y.isUtcOffset = J4;
    y.isUtc = Qf;
    y.isUTC = Qf;
    y.zoneAbbr = uh;
    y.zoneName = fh;
    y.dates = $e("dates accessor is deprecated. Use date instead.", sd);
    y.months = $e("months accessor is deprecated. Use month instead", bf);
    y.years = $e("years accessor is deprecated. Use year instead", Of);
    y.zone = $e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", H4);
    y.isDSTShifted = $e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Q4);

    function dh(e) { return q(e * 1e3) }

    function ph() { return q.apply(null, arguments).parseZone() }

    function ud(e) { return e }
    var B = wc.prototype;
    B.calendar = Z1;
    B.longDateFormat = ap;
    B.invalidDate = op;
    B.ordinal = cp;
    B.preparse = ud;
    B.postformat = ud;
    B.relativeTime = lp;
    B.pastFuture = up;
    B.set = X1;
    B.eras = Im;
    B.erasParse = jm;
    B.erasConvertYear = Vm;
    B.erasAbbrRegex = $m;
    B.erasNameRegex = Wm;
    B.erasNarrowRegex = Km;
    B.months = kp;
    B.monthsShort = wp;
    B.monthsParse = zp;
    B.monthsRegex = Op;
    B.monthsShortRegex = Tp;
    B.week = Np;
    B.firstDayOfYear = bp;
    B.firstDayOfWeek = Fp;
    B.weekdays = Kp;
    B.weekdaysMin = Xp;
    B.weekdaysShort = qp;
    B.weekdaysParse = Zp;
    B.weekdaysRegex = a4;
    B.weekdaysShortRegex = i4;
    B.weekdaysMinRegex = o4;
    B.isPM = t4;
    B.meridiem = l4;

    function An(e, r, a, i) { var o = Or(),
            n = mr().set(i, r); return o[a](n, e) }

    function fd(e, r, a) { if (Er(e) && (r = e, e = void 0), e = e || "", r != null) return An(e, r, a, "month"); var i, o = []; for (i = 0; i < 12; i++) o[i] = An(e, i, a, "month"); return o }

    function Wc(e, r, a, i) { typeof e == "boolean" ? (Er(r) && (a = r, r = void 0), r = r || "") : (r = e, a = r, e = !1, Er(r) && (a = r, r = void 0), r = r || ""); var o = Or(),
            n = e ? o._week.dow : 0,
            t, c = []; if (a != null) return An(r, (a + n) % 7, i, "day"); for (t = 0; t < 7; t++) c[t] = An(r, (t + n) % 7, i, "day"); return c }

    function mh(e, r) { return fd(e, r, "months") }

    function hh(e, r) { return fd(e, r, "monthsShort") }

    function gh(e, r, a) { return Wc(e, r, a, "weekdays") }

    function vh(e, r, a) { return Wc(e, r, a, "weekdaysShort") }

    function Ch(e, r, a) { return Wc(e, r, a, "weekdaysMin") }
    Zr("en", { eras: [{ since: "0001-01-01", until: 1 / 0, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }], dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var r = e % 10,
                a = R(e % 100 / 10) === 1 ? "th" : r === 1 ? "st" : r === 2 ? "nd" : r === 3 ? "rd" : "th"; return e + a } });
    S.lang = $e("moment.lang is deprecated. Use moment.locale instead.", Zr);
    S.langData = $e("moment.langData is deprecated. Use moment.localeData instead.", Or);
    var gr = Math.abs;

    function Lh() { var e = this._data; return this._milliseconds = gr(this._milliseconds), this._days = gr(this._days), this._months = gr(this._months), e.milliseconds = gr(e.milliseconds), e.seconds = gr(e.seconds), e.minutes = gr(e.minutes), e.hours = gr(e.hours), e.months = gr(e.months), e.years = gr(e.years), this }

    function dd(e, r, a, i) { var o = tr(r, a); return e._milliseconds += i * o._milliseconds, e._days += i * o._days, e._months += i * o._months, e._bubble() }

    function yh(e, r) { return dd(this, e, r, 1) }

    function xh(e, r) { return dd(this, e, r, -1) }

    function sl(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

    function Dh() { var e = this._milliseconds,
            r = this._days,
            a = this._months,
            i = this._data,
            o, n, t, c, s; return e >= 0 && r >= 0 && a >= 0 || e <= 0 && r <= 0 && a <= 0 || (e += sl(z0(a) + r) * 864e5, r = 0, a = 0), i.milliseconds = e % 1e3, o = Be(e / 1e3), i.seconds = o % 60, n = Be(o / 60), i.minutes = n % 60, t = Be(n / 60), i.hours = t % 24, r += Be(t / 24), s = Be(pd(r)), a += s, r -= sl(z0(s)), c = Be(a / 12), a %= 12, i.days = r, i.months = a, i.years = c, this }

    function pd(e) { return e * 4800 / 146097 }

    function z0(e) { return e * 146097 / 4800 }

    function Sh(e) { if (!this.isValid()) return NaN; var r, a, i = this._milliseconds; if (e = Ke(e), e === "month" || e === "quarter" || e === "year") switch (r = this._days + i / 864e5, a = this._months + pd(r), e) {
            case "month":
                return a;
            case "quarter":
                return a / 3;
            case "year":
                return a / 12 } else switch (r = this._days + Math.round(z0(this._months)), e) {
            case "week":
                return r / 7 + i / 6048e5;
            case "day":
                return r + i / 864e5;
            case "hour":
                return r * 24 + i / 36e5;
            case "minute":
                return r * 1440 + i / 6e4;
            case "second":
                return r * 86400 + i / 1e3;
            case "millisecond":
                return Math.floor(r * 864e5) + i;
            default:
                throw new Error("Unknown unit " + e) } }

    function Yr(e) { return function() { return this.as(e) } }
    var md = Yr("ms"),
        Ah = Yr("s"),
        Mh = Yr("m"),
        Ph = Yr("h"),
        kh = Yr("d"),
        wh = Yr("w"),
        _h = Yr("M"),
        zh = Yr("Q"),
        Eh = Yr("y"),
        Th = md;

    function Oh() { return tr(this) }

    function Yh(e) { return e = Ke(e), this.isValid() ? this[e + "s"]() : NaN }

    function Aa(e) { return function() { return this.isValid() ? this._data[e] : NaN } }
    var Nh = Aa("milliseconds"),
        Rh = Aa("seconds"),
        Fh = Aa("minutes"),
        bh = Aa("hours"),
        Ih = Aa("days"),
        jh = Aa("months"),
        Vh = Aa("years");

    function Bh() { return Be(this.days() / 7) }
    var Cr = Math.round,
        ja = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };

    function Uh(e, r, a, i, o) { return o.relativeTime(r || 1, !!a, e, i) }

    function Gh(e, r, a, i) { var o = tr(e).abs(),
            n = Cr(o.as("s")),
            t = Cr(o.as("m")),
            c = Cr(o.as("h")),
            s = Cr(o.as("d")),
            l = Cr(o.as("M")),
            h = Cr(o.as("w")),
            g = Cr(o.as("y")),
            m = n <= a.ss && ["s", n] || n < a.s && ["ss", n] || t <= 1 && ["m"] || t < a.m && ["mm", t] || c <= 1 && ["h"] || c < a.h && ["hh", c] || s <= 1 && ["d"] || s < a.d && ["dd", s]; return a.w != null && (m = m || h <= 1 && ["w"] || h < a.w && ["ww", h]), m = m || l <= 1 && ["M"] || l < a.M && ["MM", l] || g <= 1 && ["y"] || ["yy", g], m[2] = r, m[3] = +e > 0, m[4] = i, Uh.apply(null, m) }

    function Hh(e) { return e === void 0 ? Cr : typeof e == "function" ? (Cr = e, !0) : !1 }

    function Wh(e, r) { return ja[e] === void 0 ? !1 : r === void 0 ? ja[e] : (ja[e] = r, e === "s" && (ja.ss = r - 1), !0) }

    function $h(e, r) { if (!this.isValid()) return this.localeData().invalidDate(); var a = !1,
            i = ja,
            o, n; return typeof e == "object" && (r = e, e = !1), typeof e == "boolean" && (a = e), typeof r == "object" && (i = Object.assign({}, ja, r), r.s != null && r.ss == null && (i.ss = r.s - 1)), o = this.localeData(), n = Gh(this, !a, i, o), a && (n = o.pastFuture(+this, n)), o.postformat(n) }
    var zt = Math.abs;

    function Pa(e) { return (e > 0) - (e < 0) || +e }

    function Qn() { if (!this.isValid()) return this.localeData().invalidDate(); var e = zt(this._milliseconds) / 1e3,
            r = zt(this._days),
            a = zt(this._months),
            i, o, n, t, c = this.asSeconds(),
            s, l, h, g; return c ? (i = Be(e / 60), o = Be(i / 60), e %= 60, i %= 60, n = Be(a / 12), a %= 12, t = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", s = c < 0 ? "-" : "", l = Pa(this._months) !== Pa(c) ? "-" : "", h = Pa(this._days) !== Pa(c) ? "-" : "", g = Pa(this._milliseconds) !== Pa(c) ? "-" : "", s + "P" + (n ? l + n + "Y" : "") + (a ? l + a + "M" : "") + (r ? h + r + "D" : "") + (o || i || e ? "T" : "") + (o ? g + o + "H" : "") + (i ? g + i + "M" : "") + (e ? g + t + "S" : "")) : "P0D" }
    var I = qn.prototype;
    I.isValid = j4;
    I.abs = Lh;
    I.add = yh;
    I.subtract = xh;
    I.as = Sh;
    I.asMilliseconds = md;
    I.asSeconds = Ah;
    I.asMinutes = Mh;
    I.asHours = Ph;
    I.asDays = kh;
    I.asWeeks = wh;
    I.asMonths = _h;
    I.asQuarters = zh;
    I.asYears = Eh;
    I.valueOf = Th;
    I._bubble = Dh;
    I.clone = Oh;
    I.get = Yh;
    I.milliseconds = Nh;
    I.seconds = Rh;
    I.minutes = Fh;
    I.hours = bh;
    I.days = Ih;
    I.weeks = Bh;
    I.months = jh;
    I.years = Vh;
    I.humanize = $h;
    I.toISOString = Qn;
    I.toString = Qn;
    I.toJSON = Qn;
    I.locale = rd;
    I.localeData = id;
    I.toIsoString = $e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Qn);
    I.lang = ad;
    z("X", 0, 0, "unix");
    z("x", 0, 0, "valueOf");
    A("x", Hn);
    A("X", mp);
    H("X", function(e, r, a) { a._d = new Date(parseFloat(e) * 1e3) });
    H("x", function(e, r, a) { a._d = new Date(R(e)) }); //! moment.js
    S.version = "2.30.1";
    K1(q);
    S.fn = y;
    S.min = R4;
    S.max = F4;
    S.now = b4;
    S.utc = mr;
    S.unix = dh;
    S.months = mh;
    S.isDate = co;
    S.locale = Zr;
    S.invalid = Vn;
    S.duration = tr;
    S.isMoment = nr;
    S.weekdays = gh;
    S.parseZone = ph;
    S.localeData = Or;
    S.isDuration = Wo;
    S.monthsShort = hh;
    S.weekdaysMin = Ch;
    S.defineLocale = bc;
    S.updateLocale = p4;
    S.locales = m4;
    S.weekdaysShort = vh;
    S.normalizeUnits = Ke;
    S.relativeTimeRounding = Hh;
    S.relativeTimeThreshold = Wh;
    S.calendarFormat = lm;
    S.prototype = y;
    S.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" };
    var hd = { exports: {} },
        Kh = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
        qh = Kh,
        Xh = qh;

    function gd() {}

    function vd() {}
    vd.resetWarningCache = gd;
    var Qh = function() {
        function e(i, o, n, t, c, s) { if (s !== Xh) { var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); throw l.name = "Invariant Violation", l } }
        e.isRequired = e;

        function r() { return e } var a = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: r, element: e, elementType: e, instanceOf: r, node: e, objectOf: r, oneOf: r, oneOfType: r, shape: r, exact: r, checkPropTypes: vd, resetWarningCache: gd }; return a.PropTypes = a, a };
    hd.exports = Qh();
    var Zh = hd.exports;
    const la = ll(Zh),
        T = ({ handleRadioChange: e, idBusqueda: r, nameFiltro: a, filtro: i, texto: o }) => p.jsx("label", { htmlFor: r, children: p.jsxs("div", { className: "filtro", children: [p.jsx("input", { type: "radio", id: r, name: a, value: r, checked: i === r, onChange: e }), o] }) });
    T.propTypes = { handleRadioChange: la.func, idBusqueda: la.string, nameFiltro: la.string, filtro: la.string, texto: la.string };
    const Cd = ({ productoSeleccionado: e, filtrado: r }) => { const [a, i] = ke.useState(""), [o, n] = ke.useState(""), [t, c] = ke.useState(""), s = l => { const { id: h, name: g } = l.target;
            g === "filtroUno" ? i(h) : g === "filtroDos" ? n(h) : g === "filtroTres" && c(h) }; return ke.useEffect(() => { const l = [a, o, t].filter(Boolean);
            l.length > 0 && r(l) }, [a, o, t]), p.jsxs(p.Fragment, { children: [e === "aceite" && p.jsxs("div", { children: [p.jsx("h2", { children: "Filtrar por:" }), p.jsxs("div", { children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "900", nameFiltro: "filtroUno", filtro: a, texto: "900 CC." }), p.jsx(T, { handleRadioChange: s, idBusqueda: "5 l", nameFiltro: "filtroUno", filtro: a, texto: "1,5 litros" })] }), p.jsxs("div", { children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "girasol", nameFiltro: "filtroDos", filtro: o, texto: "Girasol" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "maíz", nameFiltro: "filtroDos", filtro: o, texto: "Maíz" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "oliva", nameFiltro: "filtroDos", filtro: o, texto: "Oliva" })] }), p.jsx("div", { children: p.jsx("button", { onClick: () => { r(" "), i(""), n(""), c("") }, style: { margin: 0 }, children: "Volver a la lista completa" }) })] }), e === "azucar" && p.jsxs("div", { children: [p.jsx("h2", { children: "Filtrar por:" }), p.jsx("div", { children: p.jsx(T, { handleRadioChange: s, idBusqueda: "1 k", nameFiltro: "filtroUno", filtro: a, texto: "1 Kilo" }) }), p.jsxs("div", { children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "chango", nameFiltro: "filtroDos", filtro: o, texto: "Chango" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "hileret", nameFiltro: "filtroDos", filtro: o, texto: "Hileret" })] }), p.jsx("div", { children: p.jsx("button", { onClick: () => { r(" "), i(""), n(""), c("") }, style: { margin: 0 }, children: "Volver a la lista completa" }) })] }), e === "cafe" && p.jsxs("div", { children: [p.jsx("div", { children: p.jsx("h2", { children: "Filtrar por:" }) }), p.jsxs("div", { children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "arlistan", nameFiltro: "filtroUno", filtro: a, texto: "Arlistan" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "dolca", nameFiltro: "filtroUno", filtro: a, texto: "Dolca" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "nescafe", nameFiltro: "filtroUno", filtro: a, texto: "Nescafe" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "bonafide", nameFiltro: "filtroUno", filtro: a, texto: "Bonafide" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "morenita", nameFiltro: "filtroUno", filtro: a, texto: "La Morenita" })] }), p.jsxs("div", { children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "instant", nameFiltro: "filtroDos", filtro: o, texto: "Instantáneo" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "capsula", nameFiltro: "filtroDos", filtro: o, texto: "Capsula" })] }), p.jsxs("div", { children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "50 g", nameFiltro: "filtroTres", filtro: t, texto: "50 Gramos" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "100 g", nameFiltro: "filtroTres", filtro: t, texto: "100 Gramos" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "125 g", nameFiltro: "filtroTres", filtro: t, texto: "125 Gramos" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "170 g", nameFiltro: "filtroTres", filtro: t, texto: "170 Gramos" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "250 g", nameFiltro: "filtroTres", filtro: t, texto: "250 Gramos" })] }), p.jsx("div", { children: p.jsx("button", { onClick: () => { r(" "), i(""), n(""), c("") }, style: { margin: 0 }, children: "Volver a la lista completa" }) })] }), e === "cerveza" && p.jsxs("div", { className: "centrar", children: [p.jsx("div", { children: p.jsx("h2", { children: "Filtrar por:" }) }), p.jsxs("div", { style: { width: "75vw", display: "flex", justifyContent: "center", flexWrap: "wrap" }, children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "quilmes", nameFiltro: "filtroUno", filtro: a, texto: "Quilmes" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "brahma", nameFiltro: "filtroUno", filtro: a, texto: "Brahma" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "schneider", nameFiltro: "filtroUno", filtro: a, texto: "Schneider" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "imperial", nameFiltro: "filtroUno", filtro: a, texto: "Imperial" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "andes", nameFiltro: "filtroUno", filtro: a, texto: "Andes" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "stella", nameFiltro: "filtroUno", filtro: a, texto: "Stella Atois" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "corona", nameFiltro: "filtroUno", filtro: a, texto: "Corona" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "heineken", nameFiltro: "filtroUno", filtro: a, texto: "Heineken" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "patagonia", nameFiltro: "filtroUno", filtro: a, texto: "Patagonia" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "budweiser", nameFiltro: "filtroUno", filtro: a, texto: "Budweiser" })] }), p.jsxs("div", { children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "1 l", nameFiltro: "filtroDos", filtro: o, texto: "1 Litro" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "473", nameFiltro: "filtroDos", filtro: o, texto: "Lata" })] }), p.jsx("div", { children: p.jsx("button", { onClick: () => { r(" "), i(""), n(""), c("") }, style: { margin: 0 }, children: "Volver a la lista completa" }) })] }), e === "leche" && p.jsxs("div", { children: [p.jsx("div", { children: p.jsx("h2", { children: "Filtrar por:" }) }), p.jsxs("div", { children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "1 l", nameFiltro: "filtroUno", filtro: a, texto: "1 Litro" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "sachet", nameFiltro: "filtroUno", filtro: a, texto: "Sachet" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "en polvo", nameFiltro: "filtroUno", filtro: a, texto: "En polvo" }), p.jsx("label", { htmlFor: "en polvo", children: p.jsxs("div", { className: "filtro", children: [p.jsx("input", { type: "radio", id: "en polvo", name: "filtroUno", value: "en polvo", checked: a === "en polvo", onChange: s }), "En polvo"] }) })] }), p.jsx("div", { children: p.jsx("button", { onClick: () => { r(" "), i(""), n(""), c("") }, style: { margin: 0 }, children: "Volver a la lista completa" }) })] }), e === "pan" && p.jsxs("div", { children: [p.jsx("div", { children: p.jsx("h2", { children: "Filtrar por:" }) }), p.jsxs("div", { children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "rallado", nameFiltro: "filtroUno", filtro: a, texto: "Pan rallado" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "pancho", nameFiltro: "filtroUno", filtro: a, texto: "Pan para pancho" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "hamburguesas", nameFiltro: "filtroUno", filtro: a, texto: "Pan para hamburguesas" })] }), p.jsx("div", { children: p.jsx("button", { onClick: () => { r(" "), i(""), n(""), c("") }, style: { margin: 0 }, children: "Volver a la lista completa" }) })] }), e === "yerba" && p.jsxs("div", { children: [p.jsx("div", { children: p.jsx("h2", { children: "Filtrar por:" }) }), p.jsxs("div", { children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "tarag", nameFiltro: "filtroUno", filtro: a, texto: "Taragüi" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "uni", nameFiltro: "filtroUno", filtro: a, texto: "Unión" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "playadito", nameFiltro: "filtroUno", filtro: a, texto: "Playadito" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "tranquera", nameFiltro: "filtroUno", filtro: a, texto: "La Tranquera" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "verdeflor", nameFiltro: "filtroUno", filtro: a, texto: "Verdeflor" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "nobleza", nameFiltro: "filtroUno", filtro: a, texto: "Nobleza Gaucha" })] }), p.jsxs("div", { children: [p.jsx(T, { handleRadioChange: s, idBusqueda: "1 k", nameFiltro: "filtroDos", filtro: o, texto: "1 Kilo" }), p.jsx(T, { handleRadioChange: s, idBusqueda: "500 g", nameFiltro: "filtroDos", filtro: o, texto: "Medio kilo" })] }), p.jsx("div", { children: p.jsx("button", { onClick: () => { r(" "), i(""), n(""), c("") }, style: { margin: 0 }, children: "Volver a la lista completa" }) })] })] }) };
    Cd.propTypes = { productoSeleccionado: la.string, filtrado: la.func };

    function Jh() { const [e, r] = ke.useState([]), [a, i] = ke.useState([]), [o, n] = ke.useState([]), [t, c] = ke.useState([]), [s, l] = ke.useState("");
        ke.useEffect(() => { r($1) }, []), ke.useEffect(() => { a.sort((v, x) => v.precio - x.precio), a.forEach(v => { try { const x = Number(v.precio.replace(",", "."));
                    v.fecha = S(v.fecha, "YYYY/MM/DD HH:mm:ss").format("DD/MM/YYYY HH:mm:ss"), v.precio = g(x) } catch (x) { console.log("no ando el .replace(): ", x, " item: ", v.info) } }), n([...a]) }, [a]); const h = v => { l(v.target.value), m(v.target.value), c("") },
            g = v => v.toLocaleString("es-ES", { style: "decimal", useGrouping: !0, minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            m = v => { const x = e.find(U => U.name.toLowerCase() === v.toLowerCase());
                x && i(x.data) },
            D = v => { let x = [];
                v.length == 1 ? x = [...o.filter(f => f.info.toLowerCase().includes(v[0].toLowerCase()))] : v.length == 2 ? x = [...o.filter(u => u.info.toLowerCase().includes(v[0].toLowerCase())).filter(u => u.info.toLowerCase().includes(v[1].toLowerCase()))] : v.length == 3 && (x = [...o.filter(d => d.info.toLowerCase().includes(v[0].toLowerCase())).filter(d => d.info.toLowerCase().includes(v[1].toLowerCase())).filter(d => d.info.toLowerCase().includes(v[2].toLowerCase()))]), x = [...new Set(x)], x.sort((U, f) => parseFloat(U.precio.replace(",", ".")) - parseFloat(f.precio.replace(",", "."))), x.length < 1 ? c([{ id: "1", info: "No se encontraron datos", precio: "000,00", fecha: "recien", supermercado: "Ninguno" }]) : c(x) }; return p.jsxs(p.Fragment, { children: [p.jsx("h1", { id: "titulo", children: "Compara precios" }), p.jsxs("div", { className: "centrar", children: [p.jsxs("div", { children: [p.jsx("h2", { style: { display: "inline" }, children: "Producto seleccionado: " }), p.jsxs("select", { value: s, onChange: v => { h(v) }, children: [p.jsx("option", { value: "", disabled: !0, children: "Selecciona un producto" }), p.jsx("option", { value: "aceite", children: "Aceite" }), p.jsx("option", { value: "azucar", children: "Azúcar" }), p.jsx("option", { value: "cafe", children: "Café" }), p.jsx("option", { value: "cerveza", children: "Cerveza" }), p.jsx("option", { value: "leche", children: "Leche" }), p.jsx("option", { value: "pan", children: "Pan" }), p.jsx("option", { value: "yerba", children: "Yerba" })] })] }), p.jsx("a", { href: "#titulo", style: { position: "fixed", bottom: "10px", right: "20px" }, children: p.jsx("svg", { style: { width: "35px" }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", children: p.jsx("path", { d: "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" }) }) })] }), p.jsx("div", { className: "centrar", children: p.jsx(Cd, { productoSeleccionado: s, filtrado: D }) }), p.jsx("ol", { children: (t.length > 0 ? t : o).map(v => p.jsxs("li", { children: [p.jsx("h2", { children: v.info }), p.jsxs("footer", { children: [p.jsxs("div", { children: [p.jsx("h3", { children: "Precio: " }), " ", p.jsxs("h2", { children: ["$ ", v.precio] })] }), p.jsxs("div", { children: [p.jsx("h3", { children: "Supermercado: " }), p.jsx("h4", { children: v.supermercado })] })] }), p.jsxs("div", { className: "actualizado", children: ["Actualizado: ", v.fecha] })] }, v.id)) })] }) }
    Et.createRoot(document.getElementById("root")).render(p.jsx(Rd.StrictMode, { children: p.jsx(Jh, {}) }))
});
export default e6();
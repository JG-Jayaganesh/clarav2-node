/*!
 * Living Actor Avatar
 * Powered by Living Actor
 * (c) 1999-2015 Cantoche All Rights Reserved
 * 
 * @Author: Laurent Durieu
 * @WebSite: http://www.livingactor.com
 * @Version: 1.1.1.432
 * @Core Version: 1.1.1.432
 * @LastRelease: Thu, October 1, 2015 at 18:09:05 
 * @Encoding: UTF-8
 */
function LivingActor() {}
LivingActor.Logs = function() {
    LivingActor.Logs.prototype.logPrefix = "";
    LivingActor.Logs.prototype.error = function(b, a) {
        if (this._canLog("errror", a)) {
            console.error(this._getPrefix(), b)
        }
    };
    LivingActor.Logs.prototype.warn = function(b, a) {
        if (this._canLog("warn", a)) {
            console.warn(this._getPrefix(), b)
        }
    };
    LivingActor.Logs.prototype.info = function(b, a) {
        if (this._canLog("info", a)) {
            console.info(this._getPrefix(), b)
        }
    };
    LivingActor.Logs.prototype.log = function(b, a) {
        if (this._canLog("log", a)) {
            console.log(this._getPrefix(), b)
        }
    };
    LivingActor.Logs.prototype.setPrefix = function(a) {
        if (!a) {
            a = ""
        }
        this.logPrefix = a
    };
    LivingActor.Logs.prototype._getPrefix = function() {
        var b = "";
        if (LivingActor.Logs.includeDate) {
            var a = new Date();
            if (a.getHours() < 10) {
                b += "0" + a.getHours()
            } else {
                b += a.getHours()
            }
            b += ":";
            if (a.getMinutes() < 10) {
                b += "0" + a.getMinutes()
            } else {
                b += a.getMinutes()
            }
            b += ":";
            if (a.getSeconds() < 10) {
                b += "0" + a.getSeconds()
            } else {
                b += a.getSeconds()
            }
            b += " "
        }
        b += this.logPrefix != "" ? "(" + this.logPrefix + ")  " : "";
        return b
    };
    LivingActor.Logs.prototype._canLog = function(a, b) {
        if (typeof console == "function" || typeof console == "object") {
            if (b) {
                return true
            } else {
                switch (LivingActor.Logs.currentMode) {
                    case LivingActor.Logs.MODE_DEBUG:
                        return true;
                        break;
                    case LivingActor.Logs.MODE_PREPROD:
                        if (a == "info" || a == "error" || a == "warn") {
                            return true
                        } else {
                            return false
                        }
                        break;
                    case LivingActor.Logs.MODE_RELEASE:
                        if (a == "info") {
                            return true
                        } else {
                            return false
                        }
                        break
                }
            }
        } else {
            return false
        }
    }
};
LivingActor.Logs.setMode = function(a) {
    switch (a) {
        case LivingActor.Logs.MODE_DEBUG:
        case LivingActor.Logs.MODE_PREPROD:
        case LivingActor.Logs.MODE_RELEASE:
            LivingActor.Logs.currentMode = a;
            break;
        default:
            this.error("This Log mode do not exist : " + a, true);
            break
    }
};
LivingActor.Logs.version = "1.0";
LivingActor.Logs.MODE_DEBUG = "debug";
LivingActor.Logs.MODE_PREPROD = "preprod";
LivingActor.Logs.MODE_RELEASE = "release";
LivingActor.Logs.currentMode = LivingActor.Logs.MODE_RELEASE;
LivingActor.Logs.includeDate = true;
if (typeof(JSON) == "undefined") {
    (function() {
        function d(ax, at) {
            function av(z) {
                if (av[z] !== aj) {
                    return av[z]
                }
                var x;
                if ("bug-string-char-index" == z) {
                    x = "a" != "a" [0]
                } else {
                    if ("json" == z) {
                        x = av("json-stringify") && av("json-parse")
                    } else {
                        var v;
                        if ("json-stringify" == z) {
                            x = at.stringify;
                            var y = "function" == typeof x && aq;
                            if (y) {
                                (v = function() {
                                    return 1
                                }).toJSON = v;
                                try {
                                    y = "0" === x(0) && "0" === x(new ao) && '""' == x(new aw) && x(am) === aj && x(aj) === aj && x() === aj && "1" === x(v) && "[1]" == x([v]) && "[null]" == x([aj]) && "null" == x(null) && "[null,null,null]" == x([aj, am, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == x({
                                        a: [v, !0, !1, null, "\x00\b\n\f\r\t"]
                                    }) && "1" === x(null, v) && "[\n 1,\n 2\n]" == x([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == x(new ar(-8640000000000000)) && '"+275760-09-13T00:00:00.000Z"' == x(new ar(8640000000000000)) && '"-000001-01-01T00:00:00.000Z"' == x(new ar(-62198755200000)) && '"1969-12-31T23:59:59.999Z"' == x(new ar(-1))
                                } catch (u) {
                                    y = !1
                                }
                            }
                            x = y
                        }
                        if ("json-parse" == z) {
                            x = at.parse;
                            if ("function" == typeof x) {
                                try {
                                    if (0 === x("0") && !x(!1)) {
                                        v = x('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                        var q = 5 == v.a.length && 1 === v.a[0];
                                        if (q) {
                                            try {
                                                q = !x('"\t"')
                                            } catch (w) {}
                                            if (q) {
                                                try {
                                                    q = 1 !== x("01")
                                                } catch (t) {}
                                            }
                                            if (q) {
                                                try {
                                                    q = 1 !== x("1.")
                                                } catch (r) {}
                                            }
                                        }
                                    }
                                } catch (p) {
                                    q = !1
                                }
                            }
                            x = q
                        }
                    }
                }
                return av[z] = !!x
            }
            ax || (ax = b.Object());
            at || (at = b.Object());
            var ao = ax.Number || b.Number,
                aw = ax.String || b.String,
                ai = ax.Object || b.Object,
                ar = ax.Date || b.Date,
                ak = ax.SyntaxError || b.SyntaxError,
                ad = ax.TypeError || b.TypeError,
                ab = ax.Math || b.Math,
                ah = ax.JSON || b.JSON;
            "object" == typeof ah && ah && (at.stringify = ah.stringify, at.parse = ah.parse);
            var ai = ai.prototype,
                am = ai.toString,
                al, au, aj, aq = new ar(-3509827334573292);
            try {
                aq = -109252 == aq.getUTCFullYear() && 0 === aq.getUTCMonth() && 1 === aq.getUTCDate() && 10 == aq.getUTCHours() && 37 == aq.getUTCMinutes() && 6 == aq.getUTCSeconds() && 708 == aq.getUTCMilliseconds()
            } catch (X) {}
            if (!av("json")) {
                var ap = av("bug-string-char-index");
                if (!aq) {
                    var ag = ab.floor,
                        aa = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                        an = function(p, q) {
                            return aa[q] + 365 * (p - 1970) + ag((p - 1969 + (q = +(1 < q))) / 4) - ag((p - 1901 + q) / 100) + ag((p - 1601 + q) / 400)
                        }
                }(al = ai.hasOwnProperty) || (al = function(p) {
                    var r = {},
                        q;
                    (r.__proto__ = null, r.__proto__ = {
                        toString: 1
                    }, r).toString != am ? al = function(t) {
                        var u = this.__proto__;
                        t = t in (this.__proto__ = null, this);
                        this.__proto__ = u;
                        return t
                    } : (q = r.constructor, al = function(t) {
                        var u = (this.constructor || q).prototype;
                        return t in this && !(t in u && this[t] === u[t])
                    });
                    r = null;
                    return al.call(this, p)
                });
                au = function(q, v) {
                    var t = 0,
                        p, r, u;
                    (p = function() {
                        this.valueOf = 0
                    }).prototype.valueOf = 0;
                    r = new p;
                    for (u in r) {
                        al.call(r, u) && t++
                    }
                    p = r = null;
                    t ? au = 2 == t ? function(x, A) {
                        var z = {},
                            w = "[object Function]" == am.call(x),
                            y;
                        for (y in x) {
                            w && "prototype" == y || al.call(z, y) || !(z[y] = 1) || !al.call(x, y) || A(y)
                        }
                    } : function(x, A) {
                        var z = "[object Function]" == am.call(x),
                            w, y;
                        for (w in x) {
                            z && "prototype" == w || !al.call(x, w) || (y = "constructor" === w) || A(w)
                        }(y || al.call(x, w = "constructor")) && A(w)
                    } : (r = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), au = function(x, A) {
                        var z = "[object Function]" == am.call(x),
                            w, y = !z && "function" != typeof x.constructor && j[typeof x.hasOwnProperty] && x.hasOwnProperty || al;
                        for (w in x) {
                            z && "prototype" == w || !y.call(x, w) || A(w)
                        }
                        for (z = r.length; w = r[--z]; y.call(x, w) && A(w)) {}
                    });
                    return au(q, v)
                };
                if (!av("json-stringify")) {
                    var n = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        af = function(p, q) {
                            return ("000000" + (q || 0)).slice(-p)
                        },
                        N = function(q) {
                            for (var w = '"', p = 0, r = q.length, t = !ap || 10 < r, v = t && (ap ? q.split("") : q); p < r; p++) {
                                var u = q.charCodeAt(p);
                                switch (u) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        w += n[u];
                                        break;
                                    default:
                                        if (32 > u) {
                                            w += "\\u00" + af(2, u.toString(16));
                                            break
                                        }
                                        w += t ? v[p] : q.charAt(p)
                                }
                            }
                            return w + '"'
                        },
                        Z = function(K, I, J, C, E, x, G) {
                            var D, y, B, A, w, u, M, L, v;
                            try {
                                D = I[K]
                            } catch (H) {}
                            if ("object" == typeof D && D) {
                                if (y = am.call(D), "[object Date]" != y || al.call(D, "toJSON")) {
                                    "function" == typeof D.toJSON && ("[object Number]" != y && "[object String]" != y && "[object Array]" != y || al.call(D, "toJSON")) && (D = D.toJSON(K))
                                } else {
                                    if (D > -1 / 0 && D < 1 / 0) {
                                        if (an) {
                                            A = ag(D / 86400000);
                                            for (y = ag(A / 365.2425) + 1970 - 1; an(y + 1, 0) <= A; y++) {}
                                            for (B = ag((A - an(y, 0)) / 30.42); an(y, B + 1) <= A; B++) {}
                                            A = 1 + A - an(y, B);
                                            w = (D % 86400000 + 86400000) % 86400000;
                                            u = ag(w / 3600000) % 24;
                                            M = ag(w / 60000) % 60;
                                            L = ag(w / 1000) % 60;
                                            w %= 1000
                                        } else {
                                            y = D.getUTCFullYear(), B = D.getUTCMonth(), A = D.getUTCDate(), u = D.getUTCHours(), M = D.getUTCMinutes(), L = D.getUTCSeconds(), w = D.getUTCMilliseconds()
                                        }
                                        D = (0 >= y || 10000 <= y ? (0 > y ? "-" : "+") + af(6, 0 > y ? -y : y) : af(4, y)) + "-" + af(2, B + 1) + "-" + af(2, A) + "T" + af(2, u) + ":" + af(2, M) + ":" + af(2, L) + "." + af(3, w) + "Z"
                                    } else {
                                        D = null
                                    }
                                }
                            }
                            J && (D = J.call(I, K, D));
                            if (null === D) {
                                return "null"
                            }
                            y = am.call(D);
                            if ("[object Boolean]" == y) {
                                return "" + D
                            }
                            if ("[object Number]" == y) {
                                return D > -1 / 0 && D < 1 / 0 ? "" + D : "null"
                            }
                            if ("[object String]" == y) {
                                return N("" + D)
                            }
                            if ("object" == typeof D) {
                                for (K = G.length; K--;) {
                                    if (G[K] === D) {
                                        throw ad()
                                    }
                                }
                                G.push(D);
                                v = [];
                                I = x;
                                x += E;
                                if ("[object Array]" == y) {
                                    B = 0;
                                    for (K = D.length; B < K; B++) {
                                        y = Z(B, D, J, C, E, x, G), v.push(y === aj ? "null" : y)
                                    }
                                    K = v.length ? E ? "[\n" + x + v.join(",\n" + x) + "\n" + I + "]" : "[" + v.join(",") + "]" : "[]"
                                } else {
                                    au(C || D, function(p) {
                                        var q = Z(p, D, J, C, E, x, G);
                                        q !== aj && v.push(N(p) + ":" + (E ? " " : "") + q)
                                    }), K = v.length ? E ? "{\n" + x + v.join(",\n" + x) + "\n" + I + "}" : "{" + v.join(",") + "}" : "{}"
                                }
                                G.pop();
                                return K
                            }
                        };
                    at.stringify = function(z, x, y) {
                        var t, v, p, w;
                        if (j[typeof x] && x) {
                            if ("[object Function]" == (w = am.call(x))) {
                                v = x
                            } else {
                                if ("[object Array]" == w) {
                                    p = {};
                                    for (var u = 0, r = x.length, q; u < r; q = x[u++], (w = am.call(q), "[object String]" == w || "[object Number]" == w) && (p[q] = 1)) {}
                                }
                            }
                        }
                        if (y) {
                            if ("[object Number]" == (w = am.call(y))) {
                                if (0 < (y -= y % 1)) {
                                    for (t = "", 10 < y && (y = 10); t.length < y; t += " ") {}
                                }
                            } else {
                                "[object String]" == w && (t = 10 >= y.length ? y : y.slice(0, 10))
                            }
                        }
                        return Z("", (q = {}, q[""] = z, q), v, p, t, "", [])
                    }
                }
                if (!av("json-parse")) {
                    var m = aw.fromCharCode,
                        k = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        az, ae, ay = function() {
                            az = ae = null;
                            throw ak()
                        },
                        ac = function() {
                            for (var p = ae, w = p.length, u, r, t, q, v; az < w;) {
                                switch (v = p.charCodeAt(az), v) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        az++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return u = ap ? p.charAt(az) : p[az], az++, u;
                                    case 34:
                                        u = "@";
                                        for (az++; az < w;) {
                                            if (v = p.charCodeAt(az), 32 > v) {
                                                ay()
                                            } else {
                                                if (92 == v) {
                                                    switch (v = p.charCodeAt(++az), v) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            u += k[v];
                                                            az++;
                                                            break;
                                                        case 117:
                                                            r = ++az;
                                                            for (t = az + 4; az < t; az++) {
                                                                v = p.charCodeAt(az), 48 <= v && 57 >= v || 97 <= v && 102 >= v || 65 <= v && 70 >= v || ay()
                                                            }
                                                            u += m("0x" + p.slice(r, az));
                                                            break;
                                                        default:
                                                            ay()
                                                    }
                                                } else {
                                                    if (34 == v) {
                                                        break
                                                    }
                                                    v = p.charCodeAt(az);
                                                    for (r = az; 32 <= v && 92 != v && 34 != v;) {
                                                        v = p.charCodeAt(++az)
                                                    }
                                                    u += p.slice(r, az)
                                                }
                                            }
                                        }
                                        if (34 == p.charCodeAt(az)) {
                                            return az++, u
                                        }
                                        ay();
                                    default:
                                        r = az;
                                        45 == v && (q = !0, v = p.charCodeAt(++az));
                                        if (48 <= v && 57 >= v) {
                                            for (48 == v && (v = p.charCodeAt(az + 1), 48 <= v && 57 >= v) && ay(); az < w && (v = p.charCodeAt(az), 48 <= v && 57 >= v); az++) {}
                                            if (46 == p.charCodeAt(az)) {
                                                for (t = ++az; t < w && (v = p.charCodeAt(t), 48 <= v && 57 >= v); t++) {}
                                                t == az && ay();
                                                az = t
                                            }
                                            v = p.charCodeAt(az);
                                            if (101 == v || 69 == v) {
                                                v = p.charCodeAt(++az);
                                                43 != v && 45 != v || az++;
                                                for (t = az; t < w && (v = p.charCodeAt(t), 48 <= v && 57 >= v); t++) {}
                                                t == az && ay();
                                                az = t
                                            }
                                            return +p.slice(r, az)
                                        }
                                        q && ay();
                                        if ("true" == p.slice(az, az + 4)) {
                                            return az += 4, !0
                                        }
                                        if ("false" == p.slice(az, az + 5)) {
                                            return az += 5, !1
                                        }
                                        if ("null" == p.slice(az, az + 4)) {
                                            return az += 4, null
                                        }
                                        ay()
                                }
                            }
                            return "$"
                        },
                        Y = function(q) {
                            var r, p;
                            "$" == q && ay();
                            if ("string" == typeof q) {
                                if ("@" == (ap ? q.charAt(0) : q[0])) {
                                    return q.slice(1)
                                }
                                if ("[" == q) {
                                    for (r = [];; p || (p = !0)) {
                                        q = ac();
                                        if ("]" == q) {
                                            break
                                        }
                                        p && ("," == q ? (q = ac(), "]" == q && ay()) : ay());
                                        "," == q && ay();
                                        r.push(Y(q))
                                    }
                                    return r
                                }
                                if ("{" == q) {
                                    for (r = {};; p || (p = !0)) {
                                        q = ac();
                                        if ("}" == q) {
                                            break
                                        }
                                        p && ("," == q ? (q = ac(), "}" == q && ay()) : ay());
                                        "," != q && "string" == typeof q && "@" == (ap ? q.charAt(0) : q[0]) && ":" == ac() || ay();
                                        r[q.slice(1)] = Y(ac())
                                    }
                                    return r
                                }
                                ay()
                            }
                            return q
                        },
                        o = function(q, p, r) {
                            r = F(q, p, r);
                            r === aj ? delete q[p] : q[p] = r
                        },
                        F = function(q, p, u) {
                            var r = q[p],
                                t;
                            if ("object" == typeof r && r) {
                                if ("[object Array]" == am.call(r)) {
                                    for (t = r.length; t--;) {
                                        o(r, t, u)
                                    }
                                } else {
                                    au(r, function(v) {
                                        o(r, v, u)
                                    })
                                }
                            }
                            return u.call(q, p, r)
                        };
                    at.parse = function(p, t) {
                        var r, q;
                        az = 0;
                        ae = "" + p;
                        r = Y(ac());
                        "$" != ac() && ay();
                        az = ae = null;
                        return t && "[object Function]" == am.call(t) ? F((q = {}, q[""] = r, q), "", t) : r
                    }
                }
            }
            at.runInContext = d;
            return at
        }
        var g = typeof define === "function" && define.amd,
            j = {
                "function": !0,
                object: !0
            },
            h = j[typeof exports] && exports && !exports.nodeType && exports,
            b = j[typeof window] && window || this,
            l = h && j[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        !l || l.global !== l && l.window !== l && l.self !== l || (b = l);
        if (h && !g) {
            d(b, h)
        } else {
            var f = b.JSON,
                c = b.JSON3,
                e = !1,
                a = d(b, b.JSON3 = {
                    noConflict: function() {
                        e || (e = !0, b.JSON = f, b.JSON3 = c, f = c = null);
                        return a
                    }
                });
            b.JSON = {
                parse: a.parse,
                stringify: a.stringify
            }
        }
        g && define(function() {
            return a
        })
    }).call(this)
}
LivingActor.Ajax = function(a) {
    this.crossDomain = (!a) ? false : true;
    this.xmlhttp = (!a) ? this._getAjaxObject() : false;
    this._onErrorFct = false;
    this._onOkFct = false;
    this._scriptID = "";
    this.timeoutID = null;
    this.autoAddJson = true
};
LivingActor.Ajax.version = "1.0";
LivingActor.Ajax.count = 0;
LivingActor.Ajax.map = new Array();
LivingActor.Ajax.DEFAULT_TIMEOUT = 12000;
LivingActor.Ajax.DEFAULT_FCT_PREFIX = "CallbackFct_";
LivingActor.Ajax.prototype.createScript = function(c, f) {
    if (!this._scriptID) {
        this._scriptID = "LivingActorAjax_" + (++LivingActor.Ajax.count)
    }
    var b = this._scriptID.replace("-", "_");
    LivingActor.Ajax.map[this._scriptID] = this;
    f.callback = LivingActor.Ajax.DEFAULT_FCT_PREFIX + b;
    window[f.callback] = function(h) {
        LivingActor.Ajax.JSONP_callBackFunction(h, b)
    };
    var e = !c.match(/\?/) ? "?" : "";
    var g = LivingActor.Ajax.preprocessVars(f);
    var a = document.createElement("script");
    a.src = c + e + g;
    a.id = this._scriptID;
    a.type = "text/javascript";
    a.async = true;
    var d = document.getElementsByTagName("script")[0];
    d.parentNode.insertBefore(a, d)
};
LivingActor.Ajax.prototype.clearScript = function(a) {
    if (this.timeoutID) {
        clearTimeout(this.timeoutID)
    }
    this.timeoutID = null;
    this._onErrorFct = false;
    var b = document.getElementById(this._scriptID);
    if (b && b.parentNode) {
        b.parentNode.removeChild(b)
    }
    if (!a) {
        window[LivingActor.Ajax.DEFAULT_FCT_PREFIX + this._scriptID] = null
    } else {
        window[LivingActor.Ajax.DEFAULT_FCT_PREFIX + this._scriptID] = function(c) {}
    }
    if (LivingActor.Ajax.map[this._scriptID]) {
        delete LivingActor.Ajax.map[this._scriptID]
    }
};
LivingActor.Ajax.post = function(a, f, j, d, g, c, h) {
    var e = (location && location.protocol == "file:") ? true : false;
    var b = /^(https?:|ftp:|file:)/i;
    if (!g && (b.test(a) || e)) {
        return LivingActor.Ajax._crossPost(a, f, j, d, c, h)
    } else {
        return LivingActor.Ajax._localPost(a, f, j, d)
    }
};
LivingActor.Ajax._crossPost = function(b, g, a, e, h, d) {
    if (!d && !b.match(/\?/) && !b.match(/\.(php|js(on)?|asp)$/)) {
        b += ".json"
    }
    var f = new LivingActor.Ajax(true);
    if (h) {
        var c = /[^a-z0-9_]/i;
        h = h.replace(c, "_");
        f._scriptID = h
    }
    f.onReady(a);
    f.onError(e);
    f.createScript(b, g);
    f.timeoutID = setTimeout(function() {
        if (f._onErrorFct && typeof(f._onErrorFct) == "function") {
            f._onErrorFct()
        }
        if (typeof(f.clearScript) == "function") {
            f.clearScript(true)
        }
    }, LivingActor.Ajax.DEFAULT_TIMEOUT);
    return f
};
LivingActor.Ajax.JSONP_callBackFunction = function(a, c) {
    if (c) {
        if (LivingActor.Ajax.map[c]) {
            var b = LivingActor.Ajax.map[c];
            if (typeof(b._onOkFct) == "function") {
                b._onOkFct(a)
            }
            if (typeof(b.clearScript) == "function") {
                b.clearScript()
            }
        }
    }
};
LivingActor.Ajax._localPost = function(b, g, a, c) {
    var f = new LivingActor.Ajax(false);
    if (!f.xmlhttp) {
        throw new Error("Could not create ajax object.")
    } else {
        var h = LivingActor.Ajax.preprocessVars(g);
        f.onReady(a);
        f.onError(c);
        f.xmlhttp.onreadystatechange = function() {
            if (f.xmlhttp) {
                switch (f.xmlhttp.readyState) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    case 4:
                        if (f.xmlhttp.status == 200) {
                            if (f._onOkFct) {
                                f._onOkFct(f.xmlhttp.responseText)
                            }
                        } else {
                            if (f._onErrorFct) {
                                f._onErrorFct("status = " + f.xmlhttp.status)
                            }
                        }
                        break
                }
            }
        };
        try {
            f.xmlhttp.open("POST", b, true);
            f.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            f.xmlhttp.send(h)
        } catch (d) {
            if (f._onErrorFct) {
                f._onErrorFct(d.message)
            }
        }
    }
    return f
};
LivingActor.Ajax.preprocessVars = function(a) {
    var c = "";
    for (var b in a) {
        c += "&" + encodeURI(b) + "=" + encodeURI(a[b])
    }
    return c
};
LivingActor.Ajax.prototype.onError = function(a) {
    this._onErrorFct = a
};
LivingActor.Ajax.prototype.onReady = function(a) {
    this._onOkFct = a
};
LivingActor.Ajax.prototype.abort = function() {
    if (this.xmlhttp) {
        this.xmlhttp.abort()
    } else {
        this.clearScript(true)
    }
};
LivingActor.Ajax.prototype._getAjaxObject = function() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest()
    }
    if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
    return null
};
LivingActor.Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(c) {
        var a = "";
        var k, h, f, j, g, e, d;
        var b = 0;
        c = LivingActor.Base64._utf8_encode(c);
        while (b < c.length) {
            k = c.charCodeAt(b++);
            h = c.charCodeAt(b++);
            f = c.charCodeAt(b++);
            j = k >> 2;
            g = ((k & 3) << 4) | (h >> 4);
            e = ((h & 15) << 2) | (f >> 6);
            d = f & 63;
            if (isNaN(h)) {
                e = d = 64
            } else {
                if (isNaN(f)) {
                    d = 64
                }
            }
            a = a + this._keyStr.charAt(j) + this._keyStr.charAt(g) + this._keyStr.charAt(e) + this._keyStr.charAt(d)
        }
        return a
    },
    decode: function(c) {
        var a = "";
        var k, h, f;
        var j, g, e, d;
        var b = 0;
        c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (b < c.length) {
            j = this._keyStr.indexOf(c.charAt(b++));
            g = this._keyStr.indexOf(c.charAt(b++));
            e = this._keyStr.indexOf(c.charAt(b++));
            d = this._keyStr.indexOf(c.charAt(b++));
            k = (j << 2) | (g >> 4);
            h = ((g & 15) << 4) | (e >> 2);
            f = ((e & 3) << 6) | d;
            a = a + String.fromCharCode(k);
            if (e != 64) {
                a = a + String.fromCharCode(h)
            }
            if (d != 64) {
                a = a + String.fromCharCode(f)
            }
        }
        a = LivingActor.Base64._utf8_decode(a);
        return a
    },
    _utf8_encode: function(b) {
        var a = "";
        if (b) {
            b = "" + b;
            b = b.replace(/\r\n/g, "\n");
            for (var e = 0; e < b.length; e++) {
                var d = b.charCodeAt(e);
                if (d < 128) {
                    a += String.fromCharCode(d)
                } else {
                    if ((d > 127) && (d < 2048)) {
                        a += String.fromCharCode((d >> 6) | 192);
                        a += String.fromCharCode((d & 63) | 128)
                    } else {
                        a += String.fromCharCode((d >> 12) | 224);
                        a += String.fromCharCode(((d >> 6) & 63) | 128);
                        a += String.fromCharCode((d & 63) | 128)
                    }
                }
            }
        }
        return a
    },
    _utf8_decode: function(a) {
        var b = "";
        var d = 0;
        var e = c1 = c2 = 0;
        while (d < a.length) {
            e = a.charCodeAt(d);
            if (e < 128) {
                b += String.fromCharCode(e);
                d++
            } else {
                if ((e > 191) && (e < 224)) {
                    c2 = a.charCodeAt(d + 1);
                    b += String.fromCharCode(((e & 31) << 6) | (c2 & 63));
                    d += 2
                } else {
                    c2 = a.charCodeAt(d + 1);
                    c3 = a.charCodeAt(d + 2);
                    b += String.fromCharCode(((e & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    d += 3
                }
            }
        }
        return b
    },
    COOKIES_DOMAIN: false,
    COOKIES_PATH: false,
    COOKIES_PREFIX: false,
    stringToArray: function(f) {
        var a = {};
        if (f) {
            f = this.decode(f);
            if (f && f.indexOf("JSON_") == 0) {
                return JSON.parse(f.substr(5))
            }
            var b = f.split("&");
            for (var d = 0; d < b.length; d++) {
                var e = b[d].split("=");
                var g = this.decode(unescape(e[1]));
                while (escape(g.substring(g.length - 1, g.length)) == "%00") {
                    g = g.substring(0, g.length - 1)
                }
                a[e[0]] = g
            }
        }
        return a
    },
    arrayToString: function(a) {
        if (typeof(JSON) != "undefined") {
            var c = "JSON_" + JSON.stringify(a)
        } else {
            var c = "";
            for (var b in a) {
                if (c != "") {
                    c += "&"
                }
                var d = a[b];
                c += b + "=" + this.encode(d.toString())
            }
        }
        return this.encode(c)
    },
    createCookieFromArray: function(b, a, d) {
        var c = this.arrayToString(a);
        this.createCookie(b, c, d)
    },
    readCookieToArray: function(a) {
        var b = this.readCookie(a);
        return this.stringToArray(b)
    },
    createCookie: function(c, e, h) {
        var a = "";
        if (h) {
            var b = new Date();
            b.setTime(b.getTime() + (h * 24 * 60 * 60 * 1000));
            a = "; expires=" + b.toGMTString()
        }
        var g = (!this.COOKIES_DOMAIN || this.COOKIES_DOMAIN == "") ? "" : " domain=" + this.COOKIES_DOMAIN;
        var f = (!this.COOKIES_PATH || this.COOKIES_PATH == "") ? "/" : this.COOKIES_PATH;
        var d = (!this.COOKIES_PREFIX) ? "" : this.COOKIES_PREFIX;
        document.cookie = d + "" + c + "=" + e + a + "; path=" + f + ";" + g
    },
    readCookie: function(b) {
        var e = (!this.COOKIES_PREFIX) ? "" : this.COOKIES_PREFIX;
        var f = e + b + "=";
        var a = document.cookie.split(";");
        for (var d = 0; d < a.length; d++) {
            var g = a[d];
            while (g.charAt(0) == " ") {
                g = g.substring(1, g.length)
            }
            if (g.indexOf(f) == 0) {
                return unescape(g.substring(f.length, g.length))
            }
        }
        return null
    },
    removeCookie: function(a) {
        this.createCookie(a, "", -1)
    }
};
LivingActor.Events = function() {
    LivingActor.Events.prototype._eventListener = null;
    LivingActor.Events.prototype.destructor = function() {
        this._eventListener = null
    };
    LivingActor.Events.prototype.addEventListener = function(b, c, a) {
        if (!this._eventListener) {
            this._eventListener = new Array()
        }
        this._eventListener.push({
            type: b,
            target: c,
            fct: a
        })
    };
    LivingActor.Events.prototype.removeEventListener = function(b, c) {
        if (this._eventListener) {
            for (var a = this._eventListener.length - 1; a >= 0; a--) {
                if ((this._eventListener[a]).type == b && (this._eventListener[a]).target == c) {
                    this._eventListener.splice(a, 1)
                }
            }
        }
    };
    LivingActor.Events.prototype.dispatchEvent = function(d, e, b) {
        if (this._eventListener) {
            for (var c = this._eventListener.length - 1; c >= 0; c--) {
                if ((this._eventListener[c]).type == d) {
                    if (b) {
                        var f = {
                            fct: (this._eventListener[c]).fct,
                            type: d,
                            parameters: e,
                            target: (this._eventListener[c]).target
                        };
                        this._removeFromDelay(f);
                        LivingActor.Events._delayed.push(f);
                        if (LivingActor.Events._timeout != false) {
                            clearTimeout(LivingActor.Events._timeout)
                        }
                        var g = this;
                        LivingActor.Events._timeout = setTimeout(function() {
                            g._dispatchDelayedEvent()
                        }, 50)
                    } else {
                        var a = (this._eventListener[c]).fct;
                        if (typeof(a) == "function") {
                            a(this, d, e)
                        } else {
                            if (typeof(((this._eventListener[c]).target)[a]) == "function") {
                                ((this._eventListener[c]).target)[a](this, d, e)
                            } else {
                                this.warn(a + " do not exist")
                            }
                        }
                    }
                }
            }
        }
    };
    LivingActor.Events.prototype._removeFromDelay = function(c) {
        for (var b = LivingActor.Events._delayed.length - 1; b >= 0; b--) {
            var a = LivingActor.Events._delayed[b];
            if (c.type == a.type && c.fct == a.fct && c.target == a.target) {
                LivingActor.Events._delayed.splice(b, 1)
            }
        }
        return false
    };
    LivingActor.Events.prototype._dispatchDelayedEvent = function() {
        for (var b = LivingActor.Events._delayed.length - 1; b >= 0; b--) {
            var a = LivingActor.Events._delayed[b];
            if (typeof(a.fct) == "function") {
                a.fct(this, a.type, a.parameters)
            } else {
                if (typeof((a.target)[a.fct]) == "function") {
                    (a.target)[a.fct](this, a.type, a.parameters)
                } else {
                    this.warn(a.fct + " do not exist")
                }
            }
            LivingActor.Events._delayed.splice(b, 1)
        }
    }
};
LivingActor.Events.version = "1.0";
LivingActor.Events._timeout = null;
LivingActor.Events._delayed = new Array();
LivingActor.Events.prototype = new LivingActor.Logs();
LivingActor.Events.prototype.constructor = LivingActor.Events;
LivingActor.webkitIPad = function() {};
LivingActor.webkitIPad.webkit_tools = {
    $: function(a) {
        if (typeof(a) == "string") {
            return document.getElementById(a)
        }
        return a
    },
    extend: function(d, c) {
        for (var e in c) {
            d[e] = c[e]
        }
        return d
    },
    empty: function() {},
    compact: function(e) {
        var c = [];
        var d = e.length;
        for (var f = 0; f < d; f++) {
            if (e[f] !== null) {
                c.push(e[f])
            }
        }
        return c
    },
    getCalculatedStyle: function(a, b) {
        var c = "";
        if (document.defaultView && document.defaultView.getComputedStyle) {
            c = document.defaultView.getComputedStyle(a, "").getPropertyValue(b)
        } else {
            if (a.currentStyle) {
                b = b.replace(/\-(\w)/g, function(d, e) {
                    return e.toUpperCase()
                });
                c = a.currentStyle[b]
            }
        }
        return c
    },
    bindAsEventListener: function(c, b) {
        var a = c;
        return function(d) {
            a.call(b, d || window.event)
        }
    },
    cumulativeOffset: function(b) {
        var a = 0,
            c = 0;
        do {
            a += b.offsetTop || 0;
            c += b.offsetLeft || 0;
            if (b.offsetParent == document.body) {
                if (b.style.position == "absolute") {
                    break
                }
            }
            b = b.offsetParent
        } while (b);
        return {
            left: c,
            top: a
        }
    },
    getDimensions: function(c) {
        var g = c.style.display;
        if (g != "none" && g != null) {
            return {
                width: c.offsetWidth,
                height: c.offsetHeight
            }
        }
        var b = c.style;
        var f = b.visibility;
        var d = b.position;
        var a = b.display;
        b.visibility = "hidden";
        if (d != "fixed") {
            b.position = "absolute"
        }
        b.display = "block";
        var h = c.clientWidth;
        var e = c.clientHeight;
        b.display = a;
        b.position = d;
        b.visibility = f;
        return {
            width: h,
            height: e
        }
    },
    hasClassName: function(a, b) {
        var c = a.className;
        return (c.length > 0 && (c == b || new RegExp("(^|\\s)" + b + "(\\s|$)").test(c)))
    },
    addClassName: function(a, b) {
        if (!this.hasClassName(a, b)) {
            a.className += (a.className ? " " : "") + b
        }
        return a
    },
    removeClassName: function(a, b) {
        a.className = this.strip(a.className.replace(new RegExp("(^|\\s+)" + b + "(\\s+|$)"), " "));
        return a
    },
    strip: function(a) {
        return a.replace(/^\s+/, "").replace(/\s+$/, "")
    }
};
LivingActor.webkitIPad.webkit_droppables = function() {
    this.initialize = function() {
        this.droppables = [];
        this.droppableRegions = []
    };
    this.add = function(a, c) {
        a = LivingActor.webkitIPad.webkit_tools.$(a);
        var b = {
            accept: [],
            hoverClass: null,
            onDrop: LivingActor.webkitIPad.webkit_tools.empty,
            onOver: LivingActor.webkitIPad.webkit_tools.empty,
            onOut: LivingActor.webkitIPad.webkit_tools.empty
        };
        b = LivingActor.webkitIPad.webkit_tools.extend(b, c || {});
        this.droppables.push({
            r: a,
            p: b
        })
    };
    this.remove = function(a) {
        a = LivingActor.webkitIPad.webkit_tools.$(a);
        var c = this.droppables;
        var b = c.length;
        while (b--) {
            if (c[b].r == a) {
                c[b] = null;
                this.droppables = LivingActor.webkitIPad.webkit_tools.compact(c);
                return true
            }
        }
        return false
    };
    this.prepare = function() {
        var e = this.droppables;
        var a = e.length;
        var c = [];
        var b = null;
        while (a--) {
            b = e[a].r;
            if (b.style.display != "none") {
                c.push({
                    i: a,
                    size: LivingActor.webkitIPad.webkit_tools.getDimensions(b),
                    offset: LivingActor.webkitIPad.webkit_tools.cumulativeOffset(b)
                })
            }
        }
        this.droppableRegions = c
    };
    this.finalize = function(a, h, c, f) {
        var g = this.isOver(a, h);
        var b = this.maxZIndex(g);
        var d = this.process(b, c);
        if (d) {
            this.drop(b, c, f)
        }
        this.process(-1, c);
        return d
    };
    this.check = function(a, e, c) {
        var d = this.isOver(a, e);
        var b = this.maxZIndex(d);
        return this.process(b, c)
    };
    this.isOver = function(k, j) {
        var h = this.droppableRegions;
        var g = h.length;
        var e = [];
        var b = 0;
        var c = 0;
        var f = 0;
        var a = 0;
        var d = 0;
        while (g--) {
            b = h[g];
            d = b.offset.top;
            a = d + b.size.height;
            if ((j > d) && (j < a)) {
                f = b.offset.left;
                c = f + b.size.width;
                if ((k > f) && (k < c)) {
                    e.push(b.i)
                }
            }
        }
        return e
    };
    this.maxZIndex = function(f) {
        var e = this.droppables;
        var a = f.length;
        var b = -1;
        var c = -100000000;
        var g = 0;
        while (a--) {
            g = parseInt(e[f[a]].r.style.zIndex || 0);
            if (g > c) {
                c = g;
                b = f[a]
            }
        }
        return b
    };
    this.process = function(a, c) {
        if (this.lastIndex != a) {
            if (this.lastIndex != null) {
                var f = this.droppables[this.lastIndex];
                var e = f.p;
                var b = f.r;
                if (e.hoverClass) {
                    LivingActor.webkitIPad.webkit_tools.removeClassName(b, e.hoverClass)
                }
                e.onOut();
                this.lastIndex = null;
                this.lastOutput = false
            }
            if (a != -1) {
                var f = this.droppables[a];
                var e = f.p;
                var b = f.r;
                if (this.hasClassNames(c, e.accept)) {
                    if (e.hoverClass) {
                        LivingActor.webkitIPad.webkit_tools.addClassName(b, e.hoverClass)
                    }
                    e.onOver();
                    this.lastIndex = a;
                    this.lastOutput = true
                }
            }
        }
        return this.lastOutput
    };
    this.drop = function(a, b, c) {
        if (a != -1) {
            this.droppables[a].p.onDrop(b, c)
        }
    };
    this.hasClassNames = function(b, c) {
        var a = c.length;
        if (a == 0) {
            return true
        }
        while (a--) {
            if (LivingActor.webkitIPad.webkit_tools.hasClassName(b, c[a])) {
                return true
            }
        }
        return false
    };
    this.initialize()
};
LivingActor.webkitIPad.webkit_drop = new LivingActor.webkitIPad.webkit_droppables();
LivingActor.webkitIPad.webkit_draggable = function(a, b) {
    this.initialize = function(c, e) {
        this.root = LivingActor.webkitIPad.webkit_tools.$(c);
        var d = {
            scroll: false,
            revert: false,
            handle: this.root,
            zIndex: 1000,
            onStart: LivingActor.webkitIPad.webkit_tools.empty,
            onEnd: LivingActor.webkitIPad.webkit_tools.empty
        };
        this.p = LivingActor.webkitIPad.webkit_tools.extend(d, e || {});
        d.handle = LivingActor.webkitIPad.webkit_tools.$(d.handle);
        this.prepare();
        this.bindEvents()
    };
    this.prepare = function() {
        var c = this.root.style;
        if (LivingActor.webkitIPad.webkit_tools.getCalculatedStyle(this.root, "position") != "absolute") {
            c.position = "relative"
        }
        c.top = c.top || "0px";
        c.left = c.left || "0px";
        c.right = "";
        c.bottom = "";
        c.zIndex = c.zIndex || "0"
    };
    this.bindEvents = function() {
        var c = this.p.handle;
        this.ts = LivingActor.webkitIPad.webkit_tools.bindAsEventListener(this.touchStart, this);
        this.tm = LivingActor.webkitIPad.webkit_tools.bindAsEventListener(this.touchMove, this);
        this.te = LivingActor.webkitIPad.webkit_tools.bindAsEventListener(this.touchEnd, this);
        c.addEventListener("touchstart", this.ts, false);
        c.addEventListener("touchmove", this.tm, false);
        c.addEventListener("touchend", this.te, false)
    };
    this.destroy = function() {
        var c = this.p.handle;
        c.removeEventListener("touchstart", this.ts);
        c.removeEventListener("touchmove", this.tm);
        c.removeEventListener("touchend", this.te)
    };
    this.set = function(c, d) {
        this.p[c] = d
    };
    this.touchStart = function(g) {
        var j = this.p;
        var f = this.root;
        var c = f.style;
        var e = g.targetTouches[0];
        touchX = e.pageX;
        touchY = e.pageY;
        c.top = this.root.style.top || "0px";
        c.left = this.root.style.left || "0px";
        c.bottom = null;
        c.right = null;
        var d = LivingActor.webkitIPad.webkit_tools.cumulativeOffset(f);
        var h = this.getPosition();
        j.rx = h.x;
        j.ry = h.y;
        j.tx = touchX;
        j.ty = touchY;
        j.z = parseInt(this.root.style.zIndex);
        c.zIndex = j.zIndex;
        LivingActor.webkitIPad.webkit_drop.prepare();
        j.onStart()
    };
    this.touchMove = function(d) {
        d.preventDefault();
        d.stopPropagation();
        var f = this.p;
        var c = this.root;
        var h = c.style;
        var l = d.targetTouches[0];
        if (l == null) {
            return
        }
        var g = l.pageX;
        var e = l.pageY;
        var k = g - f.tx;
        var j = e - f.ty;
        h.left = f.rx + k + "px";
        h.top = f.ry + j + "px";
        if (f.scroll) {
            s = this.getScroll(g, e);
            if ((s[0] != 0) || (s[1] != 0)) {
                window.scrollTo(window.scrollX + s[0], window.scrollY + s[1])
            }
        }
        LivingActor.webkitIPad.webkit_drop.check(g, e, c);
        this.lastCurX = g;
        this.lastCurY = e
    };
    this.touchEnd = function(e) {
        var d = this.root;
        var f = this.p;
        var g = LivingActor.webkitIPad.webkit_drop.finalize(this.lastCurX, this.lastCurY, d, e);
        if (((f.revert) && (!g)) || (f.revert === "always")) {
            var c = d.style;
            c.top = (f.ry + "px");
            c.left = (f.rx + "px")
        }
        d.style.zIndex = this.p.z;
        this.p.onEnd()
    };
    this.getPosition = function() {
        var c = this.root.style;
        return {
            x: parseInt(c.left || 0),
            y: parseInt(c.top || 0)
        }
    };
    this.getScroll = function(f, e) {
        var d = window.scrollX;
        var c = window.scrollY;
        var m = window.innerWidth;
        var l = window.innerHeight;
        var k = 10;
        var h = 100;
        var j = 0;
        var g = 0;
        if (e - c < h) {
            g = -k
        } else {
            if ((c + l) - e < h) {
                g = k
            }
        }
        if (f - d < h) {
            j = -k
        } else {
            if ((d + m) - f < h) {
                j = k
            }
        }
        return [j, g]
    };
    this.initialize(a, b)
};
LivingActor.webkitIPad.webkit_drop = function(a, b) {
    this.initialize = function(c, e) {
        var d = {
            onClick: LivingActor.webkitIPad.webkit_tools.empty
        };
        this.root = LivingActor.webkitIPad.webkit_tools.$(c);
        this.p = LivingActor.webkitIPad.webkit_tools.extend(d, e || {});
        this.bindEvents()
    };
    this.bindEvents = function() {
        var c = this.root;
        this.ts = LivingActor.webkitIPad.webkit_tools.bindAsEventListener(this.touchStart, this);
        this.tm = LivingActor.webkitIPad.webkit_tools.bindAsEventListener(this.touchMove, this);
        this.te = LivingActor.webkitIPad.webkit_tools.bindAsEventListener(this.touchEnd, this);
        c.addEventListener("touchstart", this.ts, false);
        c.addEventListener("touchmove", this.tm, false);
        c.addEventListener("touchend", this.te, false);
        this.bound = true
    };
    this.touchStart = function() {
        this.moved = false;
        if (this.bound == false) {
            this.root.addEventListener("touchmove", this.tm, false);
            this.bound = true
        }
    };
    this.touchMove = function() {
        this.moved = true;
        this.root.removeEventListener("touchmove", this.tm);
        this.bound = false
    };
    this.touchEnd = function() {
        if (this.moved == false) {
            this.p.onClick()
        }
    };
    this.setEvent = function(c) {
        if (typeof(c) == "function") {
            this.p.onClick = c
        }
    };
    this.unbind = function() {
        var c = this.root;
        c.removeEventListener("touchstart", this.ts);
        c.removeEventListener("touchmove", this.tm);
        c.removeEventListener("touchend", this.te)
    };
    this.initialize(a, b)
};
LivingActor.Toast = function(f) {
    var d = null;
    var c = null;
    var b = f;
    var e = function() {
        if (!c) {
            c = LivingActor.$(b);
            if (!c || c.length <= 0) {
                c = LivingActor.$("<div></div>");
                LivingActor.$("body").append(c);
                c.hide()
            }
            c.addClass(LivingActor.Toast.CLASS)
        }
        return c
    };
    var a = function(j, h) {
        if (d) {
            clearTimeout(d)
        }
        var g = LivingActor.$("<div class='" + LivingActor.Toast.CLASS_MSG + "'></div>");
        g.html(j);
        if (h) {
            g.addClass(h)
        }
        e().removeClass(Cp_Toast.CLASS + "-fade").removeClass(Cp_Toast.CLASS + "-up");
        return g
    };
    this.fadeIn = function(k, j, m, g, l) {
        var h = a(k, j);
        if (!m) {
            m = LivingActor.Toast.DEFAULT_DURATION
        }
        if (!g) {
            g = LivingActor.Toast.DEFAULT_SHOW_DURATION
        }
        if (!l) {
            l = LivingActor.Toast.DEFAULT_HIDE_DURATION
        }
        e().addClass(Cp_Toast.CLASS + "-fade");
        e().append(h).css({
            opacity: 0
        }).show().animate({
            opacity: 1
        }, {
            duration: g,
            queue: false,
            complete: function() {
                d = setTimeout(function() {
                    e().css({
                        opacity: 1
                    }).show().animate({
                        opacity: 0
                    }, {
                        duration: l,
                        queue: false,
                        complete: function() {
                            e().html("")
                        }
                    })
                }, m)
            }
        })
    };
    this.slideUp = function(m, l, o, g, n) {
        var j = a(m, l);
        if (!o) {
            o = LivingActor.Toast.DEFAULT_DURATION
        }
        if (!g) {
            g = LivingActor.Toast.DEFAULT_SHOW_DURATION
        }
        if (!n) {
            n = LivingActor.Toast.DEFAULT_HIDE_DURATION
        }
        e().addClass(Cp_Toast.CLASS + "-up");
        var k = e().height();
        e().append(j).css({
            bottom: -k
        }).show().animate({
            opacity: 1
        }, {
            duration: g,
            queue: false,
            complete: function() {
                d = setTimeout(function() {
                    e().css({
                        bottom: 0,
                        opacity: 1,
                        opacity: 1
                    }).show().animate({
                        opacity: 0
                    }, {
                        duration: n,
                        queue: false,
                        complete: function() {
                            e().html("")
                        }
                    })
                }, o)
            }
        })
    };
    this.hide = function() {
        if (d) {
            clearTimeout(d)
        }
        e().html("").hide()
    }
};
LivingActor.Toast.prototype = new LivingActor.Toast();
LivingActor.Toast.prototype.constructor = LivingActor.Toast;
LivingActor.Toast.CLASS = "LivingActor-ui-Toast";
LivingActor.Toast.CLASS_MSG = "LivingActor-ui-ToastMsg";
LivingActor.Toast.DEFAULT_DURATION = 1100;
LivingActor.Toast.DEFAULT_HIDE_DURATION = 300;
LivingActor.Toast.DEFAULT_HIDE_DURATION = 300;
LivingActor.Tools = function() {};
LivingActor.Tools.version = "1.0";
LivingActor.Tools.isMobileDevice = false;
LivingActor.Tools.isiPad = false;
LivingActor.Tools.isiPhone = false;
LivingActor.Tools.isAndroid = false;
LivingActor.Tools.isWindowsPhone = false;
LivingActor.Tools.isBlackberry = false;
LivingActor.Tools.isOpera = false;
if (navigator && navigator.userAgent) {
    LivingActor.Tools.isiPad = navigator.userAgent.match(/iPad/i) ? true : false;
    LivingActor.Tools.isiPhone = navigator.userAgent.match(/(iPhone|ipod)/i) ? true : false;
    LivingActor.Tools.isWindowsPhone = navigator.userAgent.match(/(iris|3g_t|windows ce|opera mobi|windows ce; smartphone;|windows ce; iemobile|Windows Phone)/i) ? true : false;
    LivingActor.Tools.isBlackberry = navigator.userAgent.match(/blackberry|BB10|PlayBook/i) ? true : false;
    LivingActor.Tools.isOpera = navigator.userAgent.match(/opera mini/i) ? true : false;
    LivingActor.Tools.isAndroid = navigator.userAgent.match(/android/i) ? true : false;
    LivingActor.Tools.isMobileDevice = LivingActor.Tools.isiPad || LivingActor.Tools.isiPhone || LivingActor.Tools.isWindowsPhone || LivingActor.Tools.isBlackberry || LivingActor.Tools.isOpera || LivingActor.Tools.isAndroid
}
LivingActor.Tools.cloneObject = function(c) {
    if (typeof(c) != "object" || c == null) {
        return c
    } else {
        var b = c.constructor();
        for (var a in c) {
            b[a] = LivingActor.Tools.cloneObject(c[a])
        }
        return b
    }
};
LivingActor.Tools.LoadJS = function(a) {
    var b = document.createElement("script");
    b.setAttribute("type", "text/javascript");
    b.setAttribute("src", LivingActor.Tools.FormatURL(a));
    if (typeof b != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(b)
    }
};
LivingActor.Tools.LoadCSS = function(a) {
    var b = document.createElement("link");
    b.setAttribute("rel", "stylesheet");
    b.setAttribute("type", "text/css");
    b.setAttribute("href", LivingActor.Tools.FormatURL(a));
    if (typeof b != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(b)
    }
};
LivingActor.Tools.FormatURL = function(a) {
    if (a) {
        var c = /^(https?:)/;
        var b = (("https:" == document.location.protocol) ? "https:" : "http:");
        a = a.replace(c, b)
    }
    return a
};
LivingActor.Tools.getLang = function() {
    var a = navigator.language || navigator.userLanguage;
    return a
};
LivingActor.Tools.sleep = function(b) {
    var a = new Date().getTime();
    while (new Date().getTime() < a + b) {}
};
LivingActor.Tools.getDimension = function(a) {
    var c = a;
    var b = {
        w: 0,
        h: 0,
        x: 0,
        y: 0
    };
    if (c) {
        b.w = c.offsetWidth;
        b.h = c.offsetHeight;
        b.x = c.offsetLeft;
        b.y = c.offsetTop;
        while ((c = c.offsetParent) != null) {
            b.x += c.offsetLeft;
            b.y += c.offsetTop
        }
    }
    return b
};
LivingActor.Tools._FlashVersion = -1;
LivingActor.Tools.getFlashVersion = function() {
    if (LivingActor.Tools._FlashVersion == -1) {
        try {
            if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
                LivingActor.Tools._FlashVersion = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
                return LivingActor.Tools._FlashVersion
            }
        } catch (b) {}
        try {
            try {
                var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                try {
                    a.AllowScriptAccess = "always"
                } catch (b) {
                    LivingActor.Tools._FlashVersion = "6,0,0";
                    return LivingActor.Tools._FlashVersion
                }
            } catch (b) {}
            LivingActor.Tools._FlashVersion = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
            return LivingActor.Tools._FlashVersion
        } catch (b) {}
        LivingActor.Tools._FlashVersion = false
    }
    return LivingActor.Tools._FlashVersion
};
LivingActor.Tools.CHARMAP_HEXA = "abcdef0123456789";
LivingActor.Tools.randString = function(d, e) {
    if (!d) {
        d = 10
    }
    if (!e) {
        e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    }
    var b = "";
    for (var c = 0; c < parseInt(d); c++) {
        var a = LivingActor.Tools.rand(0, e.length - 1);
        b += e.substring(a, a + 1)
    }
    return b
};
LivingActor.Tools.isCanvasSupported = function() {
    try {
        if (navigator && navigator.userAgent && navigator.userAgent.match(/opera/i)) {
            return false
        }
        var a = document.createElement("canvas");
        return !!(a.getContext && a.getContext("2d"))
    } catch (b) {
        return false
    }
};
LivingActor.Tools.inArray = function(c, b) {
    var a = LivingActor.Tools.ArrayIndexOf(c, b);
    return (a >= 0)
};
LivingActor.Tools.ArrayIndexOf = function(c, b) {
    for (var a = 0; a < c.length; a++) {
        if (c[a] == b) {
            return a
        }
    }
    return -1
};
LivingActor.Tools.randFloat = function(b, a) {
    return Math.random() * (a - b) + b
};
LivingActor.Tools.rand = function(b, a) {
    var c = Math.random() * (a - b) + b;
    return Math.round(c)
};
LivingActor.Tools.isBool = function(a) {
    return typeof a === "boolean"
};
LivingActor.Tools.isNumber = function(a) {
    return typeof a === "number"
};
LivingActor.Tools.isObject = function(a) {
    return typeof a === "object"
};
LivingActor.Tools.signOf = function(a) {
    return (a >= 0) ? 1 : -1
};
LivingActor.Tools.addEventListener = function(a, c, d) {
    if (c && a) {
        if (a.addEventListener) {
            c = c.replace(/^on/i, "");
            a.addEventListener(c, d, false)
        } else {
            if (a.attachEvent) {
                var b = /^on/i;
                if (!b.test(c)) {
                    c = "on" + c
                }
                a.attachEvent(c, d)
            }
        }
    }
};
LivingActor.Tools.removeEventListener = function(a, c, d) {
    if (c && a) {
        if (a.removeEventListener) {
            c = c.replace(/^on/i, "");
            a.removeEventListener(c, d, false)
        } else {
            if (a.detachEvent) {
                var b = /^on/i;
                if (!b.test(c)) {
                    c = "on" + c
                }
                a.detachEvent(c, d)
            }
        }
    }
};
LivingActor.Tools.isCSS_FixedEnable = function() {
    try {
        var b = document.body;
        if (document.createElement && b && b.appendChild && b.removeChild) {
            var d = document.createElement("div");
            if (!d.getBoundingClientRect) {
                return null
            }
            d.innerHTML = "x";
            d.style.cssText = "position:fixed;top:100px;";
            b.appendChild(d);
            var f = b.style.height,
                h = b.scrollTop;
            b.style.height = "3000px";
            b.scrollTop = 500;
            var a = d.getBoundingClientRect().top;
            b.style.height = f;
            var c = a === 100;
            b.removeChild(d);
            b.scrollTop = h;
            return c
        }
    } catch (g) {}
    return null
};
LivingActor.Tools.getDomAttribute = function(b, a) {
    if (b) {
        if (typeof b.getAttribute == "function") {
            return b.getAttribute(a)
        } else {
            return b[a]
        }
    }
};
LivingActor.Tools.setDomAttribute = function(c, a, b) {
    if (c) {
        if (typeof c.setAttribute == "function") {
            c.setAttribute(a, b)
        } else {
            c[a] = b
        }
    }
};
LivingActor.Tools.basename = function(e, c) {
    var d = e;
    var b = /\/([^\/]+)$/;
    var a = b.exec(e);
    if (a) {
        d = a[1]
    }
    if (c && d) {
        d = d.replace(/(\.[\d\w]{2,5})$/, "")
    }
    return d
};
LivingActor.Tools.getNextNode = function(b, a) {
    if (b.firstChild) {
        return b.firstChild
    }
    while (b) {
        if (b.nextSibling) {
            return b.nextSibling
        }
        b = b.parentNode
    }
};
LivingActor.Tools.getNodesInRange = function(c) {
    var f = c.startContainer;
    var a = c.endContainer;
    var d = c.commonAncestorContainer;
    var b = [];
    var e;
    for (e = f.parentNode; e; e = e.parentNode) {
        b.push(e);
        if (e == d) {
            break
        }
    }
    b.reverse();
    for (e = f; e; e = LivingActor.Tools.getNextNode(e)) {
        b.push(e);
        if (e == a) {
            break
        }
    }
    return b
};
LivingActor.Tools.Notification = function(c, a) {
    if (typeof(Notification) != "undefined") {
        try {
            Notification.requestPermission(function(d) {
                var e = new Notification(c, {
                    body: a
                })
            })
        } catch (b) {}
    }
};
LivingActor.Tools.hasClass = function(c, b) {
    var a = new RegExp("(^|\\s+)" + b + "($|\\s+)");
    return a.test(c.className)
};
LivingActor.Tools.addClass = function(b, a) {
    if (!LivingActor.Tools.hasClass(b, a)) {
        b.className = b.className + " " + a
    }
};
LivingActor.Tools.removeClass = function(c, b) {
    var a = new RegExp("(^|\\s+)" + b + "($|\\s+)");
    c.className = c.className.replace(a, "$1")
};
LivingActor.Tools.mailTo = function(b, c, a) {
    document.location.href = "mailto:" + encodeURI(b) + "?subject=" + encodeURI(c) + "&body=" + encodeURI(a)
};
LivingActor.UploadDragAndDrop = function(c, p) {
    var m = p;
    var h = null;
    var t = [];
    var k = 0;
    var d = 0;
    var a = 262144;
    this.onProgressFct;
    this.onDragOverFct;
    this.onDropFct;
    this.onDragOutFct;
    this.onCompleteFct;
    this.onFileCompleteFct;
    this.json = false;
    this.errorText = "Fichier trop gros (dépassement de la taille maximale)";
    this.currentXHR;
    this.requestData = {};
    this.getDropArea = function() {
        return h
    };
    this.setMaxSize = function(v) {
        a = v * 1024
    };
    this.browse = function() {
        LivingActor.$(h).find("#la_inputbtnfiles").trigger("click")
    };
    this.abort = function() {
        if (this.currentXHR) {
            o.currentXHR.abort()
        }
    };
    var o = this;

    function l() {
        h.addEventListener("drop", r, false);
        h.addEventListener("dragover", f, false);
        h.addEventListener("dragleave", j, false);
        if (LivingActor.$(h).find("#la_inputbtnfiles").length <= 0) {
            LivingActor.$(h).append("<input type='file' multiple id='la_inputbtnfiles' style='display:none'/>")
        }
        LivingActor.$(h).find("#la_inputbtnfiles").unbind("change").bind("change", e)
    }

    function e(v) {
        v.stopPropagation();
        v.preventDefault();
        q(v.target.files);
        if (typeof(o.onDropFct) == "function") {
            o.onDropFct(o, v, v.target.files)
        }
    }

    function f(v) {
        v.stopPropagation();
        v.preventDefault();
        LivingActor.$(h).addClass("hover");
        if (typeof(o.onDragOverFct) == "function") {
            o.onDragOverFct(o, v)
        }
    }

    function j(v) {
        v.stopPropagation();
        v.preventDefault();
        LivingActor.$(h).removeClass("hover");
        if (typeof(o.onDragOutFct) == "function") {
            o.onDragOutFct(o, v)
        }
    }

    function r(v) {
        v.stopPropagation();
        v.preventDefault();
        q(v.dataTransfer.files);
        if (typeof(o.onDropFct) == "function") {
            o.onDropFct(o, v, v.dataTransfer.files)
        }
    }

    function g(w, v, x) {
        d += v;
        if (typeof(o.onCompleteFct) == "function") {
            o.onFileCompleteFct(o, w, x)
        }
        u()
    }

    function n(x, w) {
        var v = d + x.loaded;
        if (typeof(o.onProgressFct) == "function") {
            o.onProgressFct(o, v / k, w, x.loaded / w.size)
        }
    }

    function q(w) {
        if (!w || !w.length || t.length) {
            return
        }
        k = 0;
        d = 0;
        for (var v = 0; v < w.length && v < LivingActor.UploadDragAndDrop.MAX_FILE; v++) {
            t.push(w[v]);
            k += w[v].size
        }
        u()
    }

    function b(x, v) {
        var z = new XMLHttpRequest();
        z.open("POST", m);
        if (o.json) {
            z.responseType = "json"
        }
        z.onload = function(A) {
            g(x, x.size, z.response)
        };
        z.onerror = function() {
            g(x, x.size, z.response);
            o.currentXHR = null
        };
        z.upload.onprogress = function(A) {
            n(A, x)
        };
        z.upload.onloadstart = function(A) {};
        var y = new FormData();
        if (o.requestData) {
            for (var w in o.requestData) {
                y.append(w, o.requestData[w])
            }
        }
        y.append("myfile", x);
        z.send(y);
        o.currentXHR = z
    }

    function u() {
        if (t.length) {
            LivingActor.$(h).addClass("uploading");
            var v = t.shift();
            if (v.size >= a) {
                alert(o.errorText);
                g(v.size)
            } else {
                b(v, status)
            }
        } else {
            LivingActor.$(h).removeClass("uploading").removeClass("hover");
            if (typeof(o.onCompleteFct) == "function") {
                o.onCompleteFct(o)
            }
        }
    }
    LivingActor.$(function() {
        h = LivingActor.$(c).get(0);
        if (h) {
            l()
        }
    })
};
LivingActor.UploadDragAndDrop.version = "1.0";
LivingActor.UploadDragAndDrop.MAX_FILE = 30;
LivingActor.Vector = function(c, b, a) {
    this.x = c;
    this.y = b;
    this.z = (!a) ? 0 : a
};
LivingActor.Vector.version = "1.0";
LivingActor.Vector.prototype.getNorme = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
};
LivingActor.Vector.prototype.clone = function() {
    return (new LivingActor.Vector(this.x, this.y, this.z))
};
LivingActor.Vector.prototype.invert = function() {
    return this.multi(-1)
};
LivingActor.Vector.prototype.scalaire = function(a) {
    return this.x * a.x + this.y * a.y + this.z * a.z
};
LivingActor.Vector.prototype.projTo = function(a) {
    var b = a.getNorme();
    if (b == 0) {
        return (new LivingActor.Vector(0, 0, 0))
    } else {
        var c = this.scalaire(a);
        var d = LivingActor.Vector.UnitVector(a);
        d.multi(c / b);
        return d
    }
};
LivingActor.Vector.prototype.getPerpendicularVector = function() {
    if (this.x == 0 && this.y == 0 && this.z == 0) {
        return (new LivingActor.Vector(0, 0, 0))
    } else {
        if (this.x == 0 && this.y == 0) {
            return LivingActor.Vector.UnitVector((new LivingActor.Vector(0, this.z, -this.y)))
        } else {
            return LivingActor.Vector.UnitVector((new LivingActor.Vector(-this.y, this.x, 0)))
        }
    }
};
LivingActor.Vector.prototype.multi = function(a, b) {
    if (b) {
        return this.clone().multi(a, false)
    } else {
        this.x = a * this.x;
        this.y = a * this.y;
        this.z = a * this.z;
        return this
    }
};
LivingActor.Vector.prototype.sum = function(a, b) {
    if (b) {
        return this.clone().sum(a, false)
    } else {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this
    }
};
LivingActor.Vector.prototype.sumNeg = function(a, b) {
    if (b) {
        return this.clone().sumNeg(a, false)
    } else {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this
    }
};
LivingActor.Vector.AxV1_plus_BxV2 = function(b, c, d, a) {
    return (new LivingActor.Vector(b * c.x + d * a.x, b * c.y + d * a.y, b * c.z + d * a.z))
};
LivingActor.Vector.UnitVector = function(a) {
    var b = a.getNorme();
    if (b == 0) {
        return (new LivingActor.Vector(0, 0, 0))
    } else {
        return (new LivingActor.Vector(a.x / b, a.y / b, a.z / b))
    }
};
LivingActor.Xml = function(a) {
    this.dom = this._getDomObject(a);
    try {
        LivingActor.Xml.isIE7_8 = (LivingActor.$.browser.msie && LivingActor.$.browser.version < 9)
    } catch (b) {}
};
LivingActor.Xml.version = "1.0";
LivingActor.Xml.isIE7_8 = false;
LivingActor.Xml.prototype._getDomObject = function(a) {
    var b = false;
    if (window.DOMParser) {
        parser = new DOMParser();
        b = parser.parseFromString(a, "text/xml")
    } else {
        b = new ActiveXObject("Microsoft.XMLDOM");
        b.async = false;
        b.loadXML(a)
    }
    return b
};
LivingActor.Xml.prototype.getValue = function(b) {
    var a = new Array();
    var e = this.find(b);
    for (var d = 0; d < e.length; d++) {
        var c = (LivingActor.Xml.isIE7_8) ? LivingActor.$(e[d]).text() : e[d].textContent;
        a.push(c)
    }
    return a
};
LivingActor.Xml.prototype.find = function(f, h) {
    var n = new Array();
    var m = (h) ? h : this.dom;
    if (m) {
        var c = /^(\.([*\w]+))?(\[(\w+)=["'](\w+)["']\])?$/;
        if (c.test(f)) {
            try {
                var d = c.exec(f);
                var b = d[2];
                var l = d[4];
                var a = d[5];
                var k = false;
                if (b) {
                    k = m.getElementsByTagName(b)
                } else {
                    if (l && a) {
                        k = m.getElementsByTagName("*")
                    }
                }
                for (var g = 0; g < k.length; g++) {
                    if (l && a) {
                        if (k[g].getAttribute(l) == a) {
                            n.push(k[g])
                        }
                    } else {
                        n.push(k[g])
                    }
                }
            } catch (j) {
                throw new Error("Could not parse XML")
            }
        } else {
            throw new Error("Invalid request " + f)
        }
    } else {
        throw new Error("Dom not specified")
    }
    return n
};
(function() {
    var savedJQuery = false;
    if (typeof(jQuery) == "function") {
        var savedJQuery = jQuery
    }
    var savedDols = false;
    if (typeof($) == "function") {
        var savedDols = $
    }(function(a, b) {
        function G(a) {
            var b = F[a] = {};
            return p.each(a.split(s), function(a, c) {
                b[c] = !0
            }), b
        }

        function J(a, c, d) {
            if (d === b && a.nodeType === 1) {
                var e = "data-" + c.replace(I, "-$1").toLowerCase();
                d = a.getAttribute(e);
                if (typeof d == "string") {
                    try {
                        d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d
                    } catch (f) {}
                    p.data(a, c, d)
                } else {
                    d = b
                }
            }
            return d
        }

        function K(a) {
            var b;
            for (b in a) {
                if (b === "data" && p.isEmptyObject(a[b])) {
                    continue
                }
                if (b !== "toJSON") {
                    return !1
                }
            }
            return !0
        }

        function ba() {
            return !1
        }

        function bb() {
            return !0
        }

        function bh(a) {
            return !a || !a.parentNode || a.parentNode.nodeType === 11
        }

        function bi(a, b) {
            do {
                a = a[b]
            } while (a && a.nodeType !== 1);
            return a
        }

        function bj(a, b, c) {
            b = b || 0;
            if (p.isFunction(b)) {
                return p.grep(a, function(a, d) {
                    var e = !!b.call(a, d, a);
                    return e === c
                })
            }
            if (b.nodeType) {
                return p.grep(a, function(a, d) {
                    return a === b === c
                })
            }
            if (typeof b == "string") {
                var d = p.grep(a, function(a) {
                    return a.nodeType === 1
                });
                if (be.test(b)) {
                    return p.filter(b, d, !c)
                }
                b = p.filter(b, d)
            }
            return p.grep(a, function(a, d) {
                return p.inArray(a, b) >= 0 === c
            })
        }

        function bk(a) {
            var b = bl.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement) {
                while (b.length) {
                    c.createElement(b.pop())
                }
            }
            return c
        }

        function bC(a, b) {
            return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
        }

        function bD(a, b) {
            if (b.nodeType !== 1 || !p.hasData(a)) {
                return
            }
            var c, d, e, f = p._data(a),
                g = p._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) {
                    for (d = 0, e = h[c].length; d < e; d++) {
                        p.event.add(b, c, h[c][d])
                    }
                }
            }
            g.data && (g.data = p.extend({}, g.data))
        }

        function bE(a, b) {
            var c;
            if (b.nodeType !== 1) {
                return
            }
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute(p.expando)
        }

        function bF(a) {
            return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
        }

        function bG(a) {
            bv.test(a.type) && (a.defaultChecked = a.checked)
        }

        function bY(a, b) {
            if (b in a) {
                return b
            }
            var c = b.charAt(0).toUpperCase() + b.slice(1),
                d = b,
                e = bW.length;
            while (e--) {
                b = bW[e] + c;
                if (b in a) {
                    return b
                }
            }
            return d
        }

        function bZ(a, b) {
            return a = b || a, p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
        }

        function b$(a, b) {
            var c, d, e = [],
                f = 0,
                g = a.length;
            for (; f < g; f++) {
                c = a[f];
                if (!c.style) {
                    continue
                }
                e[f] = p._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && bZ(c) && (e[f] = p._data(c, "olddisplay", cc(c.nodeName)))) : (d = bH(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d))
            }
            for (f = 0; f < g; f++) {
                c = a[f];
                if (!c.style) {
                    continue
                }
                if (!b || c.style.display === "none" || c.style.display === "") {
                    c.style.display = b ? e[f] || "" : "none"
                }
            }
            return a
        }

        function b_(a, b, c) {
            var d = bP.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function ca(a, b, c, d) {
            var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
                f = 0;
            for (; e < 4; e += 2) {
                c === "margin" && (f += p.css(a, c + bV[e], !0)), d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bV[e])) || 0), c !== "margin" && (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bV[e])) || 0, c !== "padding" && (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0))
            }
            return f
        }

        function cb(a, b, c) {
            var d = b === "width" ? a.offsetWidth : a.offsetHeight,
                e = !0,
                f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
            if (d <= 0 || d == null) {
                d = bH(a, b);
                if (d < 0 || d == null) {
                    d = a.style[b]
                }
                if (bQ.test(d)) {
                    return d
                }
                e = f && (p.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
            }
            return d + ca(a, b, c || (f ? "border" : "content"), e) + "px"
        }

        function cc(a) {
            if (bS[a]) {
                return bS[a]
            }
            var b = p("<" + a + ">").appendTo(e.body),
                c = b.css("display");
            b.remove();
            if (c === "none" || c === "") {
                bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {
                    frameBorder: 0,
                    width: 0,
                    height: 0
                }));
                if (!bJ || !bI.createElement) {
                    bJ = (bI.contentWindow || bI.contentDocument).document, bJ.write("<!doctype html><html><body>"), bJ.close()
                }
                b = bJ.body.appendChild(bJ.createElement(a)), c = bH(b, "display"), e.body.removeChild(bI)
            }
            return bS[a] = c, c
        }

        function ci(a, b, c, d) {
            var e;
            if (p.isArray(b)) {
                p.each(b, function(b, e) {
                    c || ce.test(a) ? d(a, e) : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
                })
            } else {
                if (!c && p.type(b) === "object") {
                    for (e in b) {
                        ci(a + "[" + e + "]", b[e], c, d)
                    }
                } else {
                    d(a, b)
                }
            }
        }

        function cz(a) {
            return function(b, c) {
                typeof b != "string" && (c = b, b = "*");
                var d, e, f, g = b.toLowerCase().split(s),
                    h = 0,
                    i = g.length;
                if (p.isFunction(c)) {
                    for (; h < i; h++) {
                        d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
                    }
                }
            }
        }

        function cA(a, c, d, e, f, g) {
            f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
            var h, i = a[f],
                j = 0,
                k = i ? i.length : 0,
                l = a === cv;
            for (; j < k && (l || !h); j++) {
                h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = cA(a, c, d, e, h, g)))
            }
            return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h
        }

        function cB(a, c) {
            var d, e, f = p.ajaxSettings.flatOptions || {};
            for (d in c) {
                c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d])
            }
            e && p.extend(!0, a, e)
        }

        function cC(a, c, d) {
            var e, f, g, h, i = a.contents,
                j = a.dataTypes,
                k = a.responseFields;
            for (f in k) {
                f in d && (c[k[f]] = d[f])
            }
            while (j[0] === "*") {
                j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"))
            }
            if (e) {
                for (f in i) {
                    if (i[f] && i[f].test(e)) {
                        j.unshift(f);
                        break
                    }
                }
            }
            if (j[0] in d) {
                g = j[0]
            } else {
                for (f in d) {
                    if (!j[0] || a.converters[f + " " + j[0]]) {
                        g = f;
                        break
                    }
                    h || (h = f)
                }
                g = g || h
            }
            if (g) {
                return g !== j[0] && j.unshift(g), d[g]
            }
        }

        function cD(a, b) {
            var c, d, e, f, g = a.dataTypes.slice(),
                h = g[0],
                i = {},
                j = 0;
            a.dataFilter && (b = a.dataFilter(b, a.dataType));
            if (g[1]) {
                for (c in a.converters) {
                    i[c.toLowerCase()] = a.converters[c]
                }
            }
            for (; e = g[++j];) {
                if (e !== "*") {
                    if (h !== "*" && h !== e) {
                        c = i[h + " " + e] || i["* " + e];
                        if (!c) {
                            for (d in i) {
                                f = d.split(" ");
                                if (f[1] === e) {
                                    c = i[h + " " + f[0]] || i["* " + f[0]];
                                    if (c) {
                                        c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                                        break
                                    }
                                }
                            }
                        }
                        if (c !== !0) {
                            if (c && a["throws"]) {
                                b = c(b)
                            } else {
                                try {
                                    b = c(b)
                                } catch (k) {
                                    return {
                                        state: "parsererror",
                                        error: c ? k : "No conversion from " + h + " to " + e
                                    }
                                }
                            }
                        }
                    }
                    h = e
                }
            }
            return {
                state: "success",
                data: b
            }
        }

        function cL() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function cM() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }

        function cU() {
            return setTimeout(function() {
                cN = b
            }, 0), cN = p.now()
        }

        function cV(a, b) {
            p.each(b, function(b, c) {
                var d = (cT[b] || []).concat(cT["*"]),
                    e = 0,
                    f = d.length;
                for (; e < f; e++) {
                    if (d[e].call(a, b, c)) {
                        return
                    }
                }
            })
        }

        function cW(a, b, c) {
            var d, e = 0,
                f = 0,
                g = cS.length,
                h = p.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    var b = cN || cU(),
                        c = Math.max(0, j.startTime + j.duration - b),
                        d = 1 - (c / j.duration || 0),
                        e = 0,
                        f = j.tweens.length;
                    for (; e < f; e++) {
                        j.tweens[e].run(d)
                    }
                    return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: p.extend({}, b),
                    opts: p.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: cN || cU(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c, d) {
                        var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(e), e
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        for (; c < d; c++) {
                            j.tweens[c].run(1)
                        }
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            cX(k, j.opts.specialEasing);
            for (; e < g; e++) {
                d = cS[e].call(j, a, k, j.opts);
                if (d) {
                    return d
                }
            }
            return cV(j, k), p.isFunction(j.opts.start) && j.opts.start.call(a, j), p.fx.timer(p.extend(i, {
                anim: j,
                queue: j.opts.queue,
                elem: a
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function cX(a, b) {
            var c, d, e, f, g;
            for (c in a) {
                d = p.camelCase(c), e = b[d], f = a[c], p.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = p.cssHooks[d];
                if (g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) {
                        c in a || (a[c] = f[c], b[c] = e)
                    }
                } else {
                    b[d] = e
                }
            }
        }

        function cY(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = a.style,
                n = {},
                o = [],
                q = a.nodeType && bZ(a);
            c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function() {
                j.unqueued || k()
            }), j.unqueued++, l.always(function() {
                l.always(function() {
                    j.unqueued--, p.queue(a, "fx").length || j.empty.fire()
                })
            })), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)), c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function() {
                m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
            }));
            for (d in b) {
                f = b[d];
                if (cP.exec(f)) {
                    delete b[d];
                    if (f === (q ? "hide" : "show")) {
                        continue
                    }
                    o.push(d)
                }
            }
            g = o.length;
            if (g) {
                h = p._data(a, "fxshow") || p._data(a, "fxshow", {}), q ? p(a).show() : l.done(function() {
                    p(a).hide()
                }), l.done(function() {
                    var b;
                    p.removeData(a, "fxshow", !0);
                    for (b in n) {
                        p.style(a, b, n[b])
                    }
                });
                for (d = 0; d < g; d++) {
                    e = o[d], i = l.createTween(e, q ? h[e] : 0), n[e] = h[e] || p.style(a, e), e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0))
                }
            }
        }

        function cZ(a, b, c, d, e) {
            return new cZ.prototype.init(a, b, c, d, e)
        }

        function c$(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            b = b ? 1 : 0;
            for (; e < 4; e += 2 - b) {
                c = bV[e], d["margin" + c] = d["padding" + c] = a
            }
            return b && (d.opacity = d.width = a), d
        }

        function da(a) {
            return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
        }
        var c, d, e = a.document,
            f = a.location,
            g = a.navigator,
            h = a.jQuery,
            i = a.$,
            j = Array.prototype.push,
            k = Array.prototype.slice,
            l = Array.prototype.indexOf,
            m = Object.prototype.toString,
            n = Object.prototype.hasOwnProperty,
            o = String.prototype.trim,
            p = function(a, b) {
                return new p.fn.init(a, b, c)
            },
            q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            r = /\S/,
            s = /\s+/,
            t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            w = /^[\],:{}\s]*$/,
            x = /(?:^|:|,)(?:\s*\[)+/g,
            y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
            A = /^-ms-/,
            B = /-([\da-z])/gi,
            C = function(a, b) {
                return (b + "").toUpperCase()
            },
            D = function() {
                e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready())
            },
            E = {};
        p.fn = p.prototype = {
            constructor: p,
            init: function(a, c, d) {
                var f, g, h, i;
                if (!a) {
                    return this
                }
                if (a.nodeType) {
                    return this.context = this[0] = a, this.length = 1, this
                }
                if (typeof a == "string") {
                    a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);
                    if (f && (f[1] || !c)) {
                        if (f[1]) {
                            return c = c instanceof p ? c[0] : c, i = c && c.nodeType ? c.ownerDocument || c : e, a = p.parseHTML(f[1], i, !0), v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0), p.merge(this, a)
                        }
                        g = e.getElementById(f[2]);
                        if (g && g.parentNode) {
                            if (g.id !== f[2]) {
                                return d.find(a)
                            }
                            this.length = 1, this[0] = g
                        }
                        return this.context = e, this.selector = a, this
                    }
                    return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
                }
                return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this))
            },
            selector: "",
            jquery: "1.8.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return k.call(this)
            },
            get: function(a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var d = p.merge(this.constructor(), a);
                return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
            },
            each: function(a, b) {
                return p.each(this, a, b)
            },
            ready: function(a) {
                return p.ready.promise().done(a), this
            },
            eq: function(a) {
                return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(p.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: j,
            sort: [].sort,
            splice: [].splice
        }, p.fn.init.prototype = p.fn, p.extend = p.fn.extend = function() {
            var a, c, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !p.isFunction(h) && (h = {}), j === i && (h = this, --i);
            for (; i < j; i++) {
                if ((a = arguments[i]) != null) {
                    for (c in a) {
                        d = h[c], e = a[c];
                        if (h === e) {
                            continue
                        }
                        k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {}, h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
                    }
                }
            }
            return h
        }, p.extend({
            noConflict: function(b) {
                return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? p.readyWait++ : p.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? --p.readyWait : p.isReady) {
                    return
                }
                if (!e.body) {
                    return setTimeout(p.ready, 1)
                }
                p.isReady = !0;
                if (a !== !0 && --p.readyWait > 0) {
                    return
                }
                d.resolveWith(e, [p]), p.fn.trigger && p(e).trigger("ready").off("ready")
            },
            isFunction: function(a) {
                return p.type(a) === "function"
            },
            isArray: Array.isArray || function(a) {
                return p.type(a) === "array"
            },
            isWindow: function(a) {
                return a != null && a == a.window
            },
            isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return a == null ? String(a) : E[m.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) {
                    return !1
                }
                try {
                    if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) {
                        return !1
                    }
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a) {}
                return d === b || n.call(a, d)
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) {
                    return !1
                }
                return !0
            },
            error: function(a) {
                throw new Error(a)
            },
            parseHTML: function(a, b, c) {
                var d;
                return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null : []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
            },
            parseJSON: function(b) {
                if (!b || typeof b != "string") {
                    return null
                }
                b = p.trim(b);
                if (a.JSON && a.JSON.parse) {
                    return a.JSON.parse(b)
                }
                if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) {
                    return (new Function("return " + b))()
                }
                p.error("Invalid JSON: " + b)
            },
            parseXML: function(c) {
                var d, e;
                if (!c || typeof c != "string") {
                    return null
                }
                try {
                    a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch (f) {
                    d = b
                }
                return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c), d
            },
            noop: function() {},
            globalEval: function(b) {
                b && r.test(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(A, "ms-").replace(B, C)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, c, d) {
                var e, f = 0,
                    g = a.length,
                    h = g === b || p.isFunction(a);
                if (d) {
                    if (h) {
                        for (e in a) {
                            if (c.apply(a[e], d) === !1) {
                                break
                            }
                        }
                    } else {
                        for (; f < g;) {
                            if (c.apply(a[f++], d) === !1) {
                                break
                            }
                        }
                    }
                } else {
                    if (h) {
                        for (e in a) {
                            if (c.call(a[e], e, a[e]) === !1) {
                                break
                            }
                        }
                    } else {
                        for (; f < g;) {
                            if (c.call(a[f], f, a[f++]) === !1) {
                                break
                            }
                        }
                    }
                }
                return a
            },
            trim: o && !o.call(" ") ? function(a) {
                return a == null ? "" : o.call(a)
            } : function(a) {
                return a == null ? "" : (a + "").replace(t, "")
            },
            makeArray: function(a, b) {
                var c, d = b || [];
                return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)), d
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (l) {
                        return l.call(b, a, c)
                    }
                    d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                    for (; c < d; c++) {
                        if (c in b && b[c] === a) {
                            return c
                        }
                    }
                }
                return -1
            },
            merge: function(a, c) {
                var d = c.length,
                    e = a.length,
                    f = 0;
                if (typeof d == "number") {
                    for (; f < d; f++) {
                        a[e++] = c[f]
                    }
                } else {
                    while (c[f] !== b) {
                        a[e++] = c[f++]
                    }
                }
                return a.length = e, a
            },
            grep: function(a, b, c) {
                var d, e = [],
                    f = 0,
                    g = a.length;
                c = !!c;
                for (; f < g; f++) {
                    d = !!b(a[f], f), c !== d && e.push(a[f])
                }
                return e
            },
            map: function(a, c, d) {
                var e, f, g = [],
                    h = 0,
                    i = a.length,
                    j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
                if (j) {
                    for (; h < i; h++) {
                        e = c(a[h], h, d), e != null && (g[g.length] = e)
                    }
                } else {
                    for (f in a) {
                        e = c(a[f], f, d), e != null && (g[g.length] = e)
                    }
                }
                return g.concat.apply([], g)
            },
            guid: 1,
            proxy: function(a, c) {
                var d, e, f;
                return typeof c == "string" && (d = a[c], c = a, a = d), p.isFunction(a) ? (e = k.call(arguments, 2), f = function() {
                    return a.apply(c, e.concat(k.call(arguments)))
                }, f.guid = a.guid = a.guid || p.guid++, f) : b
            },
            access: function(a, c, d, e, f, g, h) {
                var i, j = d == null,
                    k = 0,
                    l = a.length;
                if (d && typeof d == "object") {
                    for (k in d) {
                        p.access(a, c, k, d[k], 1, g, e)
                    }
                    f = 1
                } else {
                    if (e !== b) {
                        i = h === b && p.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
                            return i.call(p(a), c)
                        }) : (c.call(a, e), c = null));
                        if (c) {
                            for (; k < l; k++) {
                                c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h)
                            }
                        }
                        f = 1
                    }
                }
                return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
            },
            now: function() {
                return (new Date).getTime()
            }
        }), p.ready.promise = function(b) {
            if (!d) {
                d = p.Deferred();
                if (e.readyState === "complete") {
                    setTimeout(p.ready, 1)
                } else {
                    if (e.addEventListener) {
                        e.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", p.ready, !1)
                    } else {
                        e.attachEvent("onreadystatechange", D), a.attachEvent("onload", p.ready);
                        var c = !1;
                        try {
                            c = a.frameElement == null && e.documentElement
                        } catch (f) {}
                        c && c.doScroll && function g() {
                            if (!p.isReady) {
                                try {
                                    c.doScroll("left")
                                } catch (a) {
                                    return setTimeout(g, 50)
                                }
                                p.ready()
                            }
                        }()
                    }
                }
            }
            return d.promise(b)
        }, p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
            E["[object " + b + "]"] = b.toLowerCase()
        }), c = p(e);
        var F = {};
        p.Callbacks = function(a) {
            a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
            var c, d, e, f, g, h, i = [],
                j = !a.once && [],
                k = function(b) {
                    c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0;
                    for (; i && h < g; h++) {
                        if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                            c = !1;
                            break
                        }
                    }
                    e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
                },
                l = {
                    add: function() {
                        if (i) {
                            var b = i.length;
                            (function d(b) {
                                p.each(b, function(b, c) {
                                    var e = p.type(c);
                                    e === "function" && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && e !== "string" && d(c)
                                })
                            })(arguments), e ? g = i.length : c && (f = b, k(c))
                        }
                        return this
                    },
                    remove: function() {
                        return i && p.each(arguments, function(a, b) {
                            var c;
                            while ((c = p.inArray(b, i, c)) > -1) {
                                i.splice(c, 1), e && (c <= g && g--, c <= h && h--)
                            }
                        }), this
                    },
                    has: function(a) {
                        return p.inArray(a, i) > -1
                    },
                    empty: function() {
                        return i = [], this
                    },
                    disable: function() {
                        return i = j = c = b, this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return j = b, c || l.disable(), this
                    },
                    locked: function() {
                        return !j
                    },
                    fireWith: function(a, b) {
                        return b = b || [], b = [a, b.slice ? b.slice() : b], i && (!d || j) && (e ? j.push(b) : k(b)), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return l
        }, p.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", p.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return p.Deferred(function(c) {
                                p.each(b, function(b, d) {
                                    var f = d[0],
                                        g = a[b];
                                    e[d[1]](p.isFunction(g) ? function() {
                                        var a = g.apply(this, arguments);
                                        a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                                    } : c[f])
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return a != null ? p.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, p.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b = 0,
                    c = k.call(arguments),
                    d = c.length,
                    e = d !== 1 || a && p.isFunction(a.promise) ? d : 0,
                    f = e === 1 ? a : p.Deferred(),
                    g = function(a, b, c) {
                        return function(d) {
                            b[a] = this, c[a] = arguments.length > 1 ? k.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                        }
                    },
                    h, i, j;
                if (d > 1) {
                    h = new Array(d), i = new Array(d), j = new Array(d);
                    for (; b < d; b++) {
                        c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
                    }
                }
                return e || f.resolveWith(j, c), f.promise()
            }
        }), p.support = function() {
            var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
            n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5";
            if (!c || !c.length) {
                return {}
            }
            f = e.createElement("select"), g = f.appendChild(e.createElement("option")), h = n.getElementsByTagName("input")[0], b = {
                leadingWhitespace: n.firstChild.nodeType === 3,
                tbody: !n.getElementsByTagName("tbody").length,
                htmlSerialize: !!n.getElementsByTagName("link").length,
                style: /top/.test(d.getAttribute("style")),
                hrefNormalized: d.getAttribute("href") === "/a",
                opacity: /^0.5/.test(d.style.opacity),
                cssFloat: !!d.style.cssFloat,
                checkOn: h.value === "on",
                optSelected: g.selected,
                getSetAttribute: n.className !== "t",
                enctype: !!e.createElement("form").enctype,
                html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                boxModel: e.compatMode === "CSS1Compat",
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled;
            try {
                delete n.test
            } catch (o) {
                b.deleteExpando = !1
            }!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function() {
                b.noCloneEvent = !1
            }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)), h = e.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = h.value === "t", h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), i = e.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, i.removeChild(h), i.appendChild(n);
            if (n.attachEvent) {
                for (k in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) {
                    j = "on" + k, l = j in n, l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"), b[k + "Bubbles"] = l
                }
            }
            return p(function() {
                var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    i = e.getElementsByTagName("body")[0];
                if (!i) {
                    return
                }
                c = e.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", i.insertBefore(c, i.firstChild), d = e.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && f[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {
                    width: "4px"
                }).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), i.removeChild(c), c = d = f = g = null
            }), i.removeChild(n), c = d = f = g = h = i = n = null, b
        }();
        var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            I = /([A-Z])/g;
        p.extend({
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando], !!a && !K(a)
            },
            data: function(a, c, d, e) {
                if (!p.acceptData(a)) {
                    return
                }
                var f, g, h = p.expando,
                    i = typeof c == "string",
                    j = a.nodeType,
                    k = j ? p.cache : a,
                    l = j ? a[h] : a[h] && h;
                if ((!l || !k[l] || !e && !k[l].data) && i && d === b) {
                    return
                }
                l || (j ? a[h] = l = p.deletedIds.pop() || p.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = p.noop));
                if (typeof c == "object" || typeof c == "function") {
                    e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c)
                }
                return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[p.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f, g
            },
            removeData: function(a, b, c) {
                if (!p.acceptData(a)) {
                    return
                }
                var d, e, f, g = a.nodeType,
                    h = g ? p.cache : a,
                    i = g ? a[p.expando] : p.expando;
                if (!h[i]) {
                    return
                }
                if (b) {
                    d = c ? h[i] : h[i].data;
                    if (d) {
                        p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, f = b.length; e < f; e++) {
                            delete d[b[e]]
                        }
                        if (!(c ? K : p.isEmptyObject)(d)) {
                            return
                        }
                    }
                }
                if (!c) {
                    delete h[i].data;
                    if (!K(h[i])) {
                        return
                    }
                }
                g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null
            },
            _data: function(a, b, c) {
                return p.data(a, b, c, !0)
            },
            acceptData: function(a) {
                var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
                return !b || b !== !0 && a.getAttribute("classid") === b
            }
        }), p.fn.extend({
            data: function(a, c) {
                var d, e, f, g, h, i = this[0],
                    j = 0,
                    k = null;
                if (a === b) {
                    if (this.length) {
                        k = p.data(i);
                        if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
                            f = i.attributes;
                            for (h = f.length; j < h; j++) {
                                g = f[j].name, g.indexOf("data-") || (g = p.camelCase(g.substring(5)), J(i, g, k[g]))
                            }
                            p._data(i, "parsedAttrs", !0)
                        }
                    }
                    return k
                }
                return typeof a == "object" ? this.each(function() {
                    p.data(this, a)
                }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this, function(c) {
                    if (c === b) {
                        return k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = p.data(i, a), k = J(i, a, k)), k === b && d[1] ? this.data(d[0]) : k
                    }
                    d[1] = c, this.each(function() {
                        var b = p(this);
                        b.triggerHandler("setData" + e, d), p.data(this, a, c), b.triggerHandler("changeData" + e, d)
                    })
                }, null, c, arguments.length > 1, null, !1))
            },
            removeData: function(a) {
                return this.each(function() {
                    p.removeData(this, a)
                })
            }
        }), p.extend({
            queue: function(a, b, c) {
                var d;
                if (a) {
                    return b = (b || "fx") + "queue", d = p._data(a, b), c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)), d || []
                }
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = p.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = p._queueHooks(a, b),
                    g = function() {
                        p.dequeue(a, b)
                    };
                e === "inprogress" && (e = c.shift(), d--), e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return p._data(a, c) || p._data(a, c, {
                    empty: p.Callbacks("once memory").add(function() {
                        p.removeData(a, b + "queue", !0), p.removeData(a, c, !0)
                    })
                })
            }
        }), p.fn.extend({
            queue: function(a, c) {
                var d = 2;
                return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function() {
                    var b = p.queue(this, a, c);
                    p._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    p.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                return a = p.fx ? p.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, c) {
                var d, e = 1,
                    f = p.Deferred(),
                    g = this,
                    h = this.length,
                    i = function() {
                        --e || f.resolveWith(g, [g])
                    };
                typeof a != "string" && (c = a, a = b), a = a || "fx";
                while (h--) {
                    d = p._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i))
                }
                return i(), f.promise(c)
            }
        });
        var L, M, N, O = /[\t\r\n]/g,
            P = /\r/g,
            Q = /^(?:button|input)$/i,
            R = /^(?:button|input|object|select|textarea)$/i,
            S = /^a(?:rea|)$/i,
            T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            U = p.support.getSetAttribute;
        p.fn.extend({
            attr: function(a, b) {
                return p.access(this, p.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    p.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return p.access(this, p.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = p.propFix[a] || a, this.each(function() {
                    try {
                        this[a] = b, delete this[a]
                    } catch (c) {}
                })
            },
            addClass: function(a) {
                var b, c, d, e, f, g, h;
                if (p.isFunction(a)) {
                    return this.each(function(b) {
                        p(this).addClass(a.call(this, b, this.className))
                    })
                }
                if (a && typeof a == "string") {
                    b = a.split(s);
                    for (c = 0, d = this.length; c < d; c++) {
                        e = this[c];
                        if (e.nodeType === 1) {
                            if (!e.className && b.length === 1) {
                                e.className = a
                            } else {
                                f = " " + e.className + " ";
                                for (g = 0, h = b.length; g < h; g++) {
                                    f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ")
                                }
                                e.className = p.trim(f)
                            }
                        }
                    }
                }
                return this
            },
            removeClass: function(a) {
                var c, d, e, f, g, h, i;
                if (p.isFunction(a)) {
                    return this.each(function(b) {
                        p(this).removeClass(a.call(this, b, this.className))
                    })
                }
                if (a && typeof a == "string" || a === b) {
                    c = (a || "").split(s);
                    for (h = 0, i = this.length; h < i; h++) {
                        e = this[h];
                        if (e.nodeType === 1 && e.className) {
                            d = (" " + e.className + " ").replace(O, " ");
                            for (f = 0, g = c.length; f < g; f++) {
                                while (d.indexOf(" " + c[f] + " ") >= 0) {
                                    d = d.replace(" " + c[f] + " ", " ")
                                }
                            }
                            e.className = a ? p.trim(d) : ""
                        }
                    }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a,
                    d = typeof b == "boolean";
                return p.isFunction(a) ? this.each(function(c) {
                    p(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if (c === "string") {
                        var e, f = 0,
                            g = p(this),
                            h = b,
                            i = a.split(s);
                        while (e = i[f++]) {
                            h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
                        }
                    } else {
                        if (c === "undefined" || c === "boolean") {
                            this.className && p._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || ""
                        }
                    }
                })
            },
            hasClass: function(a) {
                var b = " " + a + " ",
                    c = 0,
                    d = this.length;
                for (; c < d; c++) {
                    if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0) {
                        return !0
                    }
                }
                return !1
            },
            val: function(a) {
                var c, d, e, f = this[0];
                if (!arguments.length) {
                    if (f) {
                        return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "" : d)
                    }
                    return
                }
                return e = p.isFunction(a), this.each(function(d) {
                    var f, g = p(this);
                    if (this.nodeType !== 1) {
                        return
                    }
                    e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function(a) {
                        return a == null ? "" : a + ""
                    })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                    if (!c || !("set" in c) || c.set(this, f, "value") === b) {
                        this.value = f
                    }
                })
            }
        }), p.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b, c, d, e, f = a.selectedIndex,
                            g = [],
                            h = a.options,
                            i = a.type === "select-one";
                        if (f < 0) {
                            return null
                        }
                        c = i ? f : 0, d = i ? f + 1 : h.length;
                        for (; c < d; c++) {
                            e = h[c];
                            if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
                                b = p(e).val();
                                if (i) {
                                    return b
                                }
                                g.push(b)
                            }
                        }
                        return i && !g.length && h.length ? p(h[f]).val() : g
                    },
                    set: function(a, b) {
                        var c = p.makeArray(b);
                        return p(a).find("option").each(function() {
                            this.selected = p.inArray(p(this).val(), c) >= 0
                        }), c.length || (a.selectedIndex = -1), c
                    }
                }
            },
            attrFn: {},
            attr: function(a, c, d, e) {
                var f, g, h, i = a.nodeType;
                if (!a || i === 3 || i === 8 || i === 2) {
                    return
                }
                if (e && p.isFunction(p.fn[c])) {
                    return p(a)[c](d)
                }
                if (typeof a.getAttribute == "undefined") {
                    return p.prop(a, c, d)
                }
                h = i !== 1 || !p.isXMLDoc(a), h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M : L));
                if (d !== b) {
                    if (d === null) {
                        p.removeAttr(a, c);
                        return
                    }
                    return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d)
                }
                return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f)
            },
            removeAttr: function(a, b) {
                var c, d, e, f, g = 0;
                if (b && a.nodeType === 1) {
                    d = b.split(s);
                    for (; g < d.length; g++) {
                        e = d[g], e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e : c), f && c in a && (a[c] = !1))
                    }
                }
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (Q.test(a.nodeName) && a.parentNode) {
                            p.error("type property can't be changed")
                        } else {
                            if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b), c && (a.value = c), b
                            }
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
                    },
                    set: function(a, b, c) {
                        if (L && p.nodeName(a, "button")) {
                            return L.set(a, b, c)
                        }
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, c, d) {
                var e, f, g, h = a.nodeType;
                if (!a || h === 3 || h === 8 || h === 2) {
                    return
                }
                return g = h !== 1 || !p.isXMLDoc(a), g && (c = p.propFix[c] || c, f = p.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
                    }
                }
            }
        }), M = {
            get: function(a, c) {
                var d, e = p.prop(a, c);
                return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
            },
            set: function(a, b, c) {
                var d;
                return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
            }
        }, U || (N = {
            name: !0,
            id: !0,
            coords: !0
        }, L = p.valHooks.button = {
            get: function(a, c) {
                var d;
                return d = a.getAttributeNode(c), d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
            },
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || (d = e.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
            }
        }, p.each(["width", "height"], function(a, b) {
            p.attrHooks[b] = p.extend(p.attrHooks[b], {
                set: function(a, c) {
                    if (c === "") {
                        return a.setAttribute(b, "auto"), c
                    }
                }
            })
        }), p.attrHooks.contenteditable = {
            get: L.get,
            set: function(a, b, c) {
                b === "" && (b = "false"), L.set(a, b, c)
            }
        }), p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function(a, c) {
            p.attrHooks[c] = p.extend(p.attrHooks[c], {
                get: function(a) {
                    var d = a.getAttribute(c, 2);
                    return d === null ? b : d
                }
            })
        }), p.support.style || (p.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || b
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        }), p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            }
        })), p.support.enctype || (p.propFix.enctype = "encoding"), p.support.checkOn || p.each(["radio", "checkbox"], function() {
            p.valHooks[this] = {
                get: function(a) {
                    return a.getAttribute("value") === null ? "on" : a.value
                }
            }
        }), p.each(["radio", "checkbox"], function() {
            p.valHooks[this] = p.extend(p.valHooks[this], {
                set: function(a, b) {
                    if (p.isArray(b)) {
                        return a.checked = p.inArray(p(a).val(), b) >= 0
                    }
                }
            })
        });
        var V = /^(?:textarea|input|select)$/i,
            W = /^([^\.]*|)(?:\.(.+)|)$/,
            X = /(?:^|\s)hover(\.\S+|)\b/,
            Y = /^key/,
            Z = /^(?:mouse|contextmenu)|click/,
            $ = /^(?:focusinfocus|focusoutblur)$/,
            _ = function(a) {
                return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1")
            };
        p.event = {
                add: function(a, c, d, e, f) {
                    var g, h, i, j, k, l, m, n, o, q, r;
                    if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) {
                        return
                    }
                    d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = p.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                        return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b
                    }, h.elem = a), c = p.trim(_(c)).split(" ");
                    for (j = 0; j < c.length; j++) {
                        k = W.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = p.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = p.event.special[l] || {}, n = p.extend({
                            type: l,
                            origType: k[1],
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: f,
                            needsContext: f && p.expr.match.needsContext.test(f),
                            namespace: m.join(".")
                        }, o), q = i[l];
                        if (!q) {
                            q = i[l] = [], q.delegateCount = 0;
                            if (!r.setup || r.setup.call(a, e, m, h) === !1) {
                                a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
                            }
                        }
                        r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), p.event.global[l] = !0
                    }
                    a = null
                },
                global: {},
                remove: function(a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
                    if (!r || !(m = r.events)) {
                        return
                    }
                    b = p.trim(_(b || "")).split(" ");
                    for (f = 0; f < b.length; f++) {
                        g = W.exec(b[f]) || [], h = i = g[1], j = g[2];
                        if (!h) {
                            for (h in m) {
                                p.event.remove(a, h + b[f], c, d, !0)
                            }
                            continue
                        }
                        n = p.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (l = 0; l < o.length; l++) {
                            q = o[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q))
                        }
                        o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h])
                    }
                    p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0))
                },
                customEvent: {
                    getData: !0,
                    setData: !0,
                    changeData: !0
                },
                trigger: function(c, d, f, g) {
                    if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                        var h, i, j, k, l, m, n, o, q, r, s = c.type || c,
                            t = [];
                        if ($.test(s + p.event.triggered)) {
                            return
                        }
                        s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
                        if ((!f || p.event.customEvent[s]) && !p.event.global[s]) {
                            return
                        }
                        c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s, c) : new p.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = s.indexOf(":") < 0 ? "on" + s : "";
                        if (!f) {
                            h = p.cache;
                            for (j in h) {
                                h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0)
                            }
                            return
                        }
                        c.result = b, c.target || (c.target = f), d = d != null ? p.makeArray(d) : [], d.unshift(c), n = p.event.special[s] || {};
                        if (n.trigger && n.trigger.apply(f, d) === !1) {
                            return
                        }
                        q = [
                            [f, n.bindType || s]
                        ];
                        if (!g && !n.noBubble && !p.isWindow(f)) {
                            r = n.delegateType || s, k = $.test(r + s) ? f : f.parentNode;
                            for (l = f; k; k = k.parentNode) {
                                q.push([k, r]), l = k
                            }
                            l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
                        }
                        for (j = 0; j < q.length && !c.isPropagationStopped(); j++) {
                            k = q[j][0], c.type = q[j][1], o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"), o && o.apply(k, d), o = m && k[m], o && p.acceptData(k) && o.apply && o.apply(k, d) === !1 && c.preventDefault()
                        }
                        return c.type = s, !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)), c.result
                    }
                    return
                },
                dispatch: function(c) {
                    c = p.event.fix(c || a.event);
                    var d, e, f, g, h, i, j, l, m, n, o = (p._data(this, "events") || {})[c.type] || [],
                        q = o.delegateCount,
                        r = k.call(arguments),
                        s = !c.exclusive && !c.namespace,
                        t = p.event.special[c.type] || {},
                        u = [];
                    r[0] = c, c.delegateTarget = this;
                    if (t.preDispatch && t.preDispatch.call(this, c) === !1) {
                        return
                    }
                    if (q && (!c.button || c.type !== "click")) {
                        for (f = c.target; f != this; f = f.parentNode || this) {
                            if (f.disabled !== !0 || c.type !== "click") {
                                h = {}, j = [];
                                for (d = 0; d < q; d++) {
                                    l = o[d], m = l.selector, h[m] === b && (h[m] = l.needsContext ? p(m, this).index(f) >= 0 : p.find(m, this, null, [f]).length), h[m] && j.push(l)
                                }
                                j.length && u.push({
                                    elem: f,
                                    matches: j
                                })
                            }
                        }
                    }
                    o.length > q && u.push({
                        elem: this,
                        matches: o.slice(q)
                    });
                    for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
                        i = u[d], c.currentTarget = i.elem;
                        for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
                            l = i.matches[e];
                            if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) {
                                c.data = l.data, c.handleObj = l, g = ((p.event.special[l.origType] || {}).handle || l.handler).apply(i.elem, r), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation()))
                            }
                        }
                    }
                    return t.postDispatch && t.postDispatch.call(this, c), c.result
                },
                props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(a, b) {
                        return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(a, c) {
                        var d, f, g, h = c.button,
                            i = c.fromElement;
                        return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a
                    }
                },
                fix: function(a) {
                    if (a[p.expando]) {
                        return a
                    }
                    var b, c, d = a,
                        f = p.event.fixHooks[a.type] || {},
                        g = f.props ? this.props.concat(f.props) : this.props;
                    a = p.Event(d);
                    for (b = g.length; b;) {
                        c = g[--b], a[c] = d[c]
                    }
                    return a.target || (a.target = d.srcElement || e), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, d) : a
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        delegateType: "focusin"
                    },
                    blur: {
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        setup: function(a, b, c) {
                            p.isWindow(this) && (this.onbeforeunload = c)
                        },
                        teardown: function(a, b) {
                            this.onbeforeunload === b && (this.onbeforeunload = null)
                        }
                    }
                },
                simulate: function(a, b, c, d) {
                    var e = p.extend(new p.Event, c, {
                        type: a,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
                }
            }, p.event.handle = p.event.dispatch, p.removeEvent = e.removeEventListener ? function(a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c, !1)
            } : function(a, b, c) {
                var d = "on" + b;
                a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c))
            }, p.Event = function(a, b) {
                if (this instanceof p.Event) {
                    a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a, b && p.extend(this, b), this.timeStamp = a && a.timeStamp || p.now(), this[p.expando] = !0
                } else {
                    return new p.Event(a, b)
                }
            }, p.Event.prototype = {
                preventDefault: function() {
                    this.isDefaultPrevented = bb;
                    var a = this.originalEvent;
                    if (!a) {
                        return
                    }
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                },
                stopPropagation: function() {
                    this.isPropagationStopped = bb;
                    var a = this.originalEvent;
                    if (!a) {
                        return
                    }
                    a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = bb, this.stopPropagation()
                },
                isDefaultPrevented: ba,
                isPropagationStopped: ba,
                isImmediatePropagationStopped: ba
            }, p.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(a, b) {
                p.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(a) {
                        var c, d = this,
                            e = a.relatedTarget,
                            f = a.handleObj,
                            g = f.selector;
                        if (!e || e !== d && !p.contains(d, e)) {
                            a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b
                        }
                        return c
                    }
                }
            }), p.support.submitBubbles || (p.event.special.submit = {
                setup: function() {
                    if (p.nodeName(this, "form")) {
                        return !1
                    }
                    p.event.add(this, "click._submit keypress._submit", function(a) {
                        var c = a.target,
                            d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
                        d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function(a) {
                            a._submit_bubble = !0
                        }), p._data(d, "_submit_attached", !0))
                    })
                },
                postDispatch: function(a) {
                    a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
                },
                teardown: function() {
                    if (p.nodeName(this, "form")) {
                        return !1
                    }
                    p.event.remove(this, "._submit")
                }
            }), p.support.changeBubbles || (p.event.special.change = {
                setup: function() {
                    if (V.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") {
                            p.event.add(this, "propertychange._change", function(a) {
                                a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                            }), p.event.add(this, "click._change", function(a) {
                                this._just_changed && !a.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, a, !0)
                            })
                        }
                        return !1
                    }
                    p.event.add(this, "beforeactivate._change", function(a) {
                        var b = a.target;
                        V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function(a) {
                            this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
                        }), p._data(b, "_change_attached", !0))
                    })
                },
                handle: function(a) {
                    var b = a.target;
                    if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
                        return a.handleObj.handler.apply(this, arguments)
                    }
                },
                teardown: function() {
                    return p.event.remove(this, "._change"), !V.test(this.nodeName)
                }
            }), p.support.focusinBubbles || p.each({
                focus: "focusin",
                blur: "focusout"
            }, function(a, b) {
                var c = 0,
                    d = function(a) {
                        p.event.simulate(b, a.target, p.event.fix(a), !0)
                    };
                p.event.special[b] = {
                    setup: function() {
                        c++ === 0 && e.addEventListener(a, d, !0)
                    },
                    teardown: function() {
                        --c === 0 && e.removeEventListener(a, d, !0)
                    }
                }
            }), p.fn.extend({
                on: function(a, c, d, e, f) {
                    var g, h;
                    if (typeof a == "object") {
                        typeof c != "string" && (d = d || c, c = b);
                        for (h in a) {
                            this.on(h, c, d, a[h], f)
                        }
                        return this
                    }
                    d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
                    if (e === !1) {
                        e = ba
                    } else {
                        if (!e) {
                            return this
                        }
                    }
                    return f === 1 && (g = e, e = function(a) {
                        return p().off(a), g.apply(this, arguments)
                    }, e.guid = g.guid || (g.guid = p.guid++)), this.each(function() {
                        p.event.add(this, a, e, d, c)
                    })
                },
                one: function(a, b, c, d) {
                    return this.on(a, b, c, d, 1)
                },
                off: function(a, c, d) {
                    var e, f;
                    if (a && a.preventDefault && a.handleObj) {
                        return e = a.handleObj, p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this
                    }
                    if (typeof a == "object") {
                        for (f in a) {
                            this.off(f, c, a[f])
                        }
                        return this
                    }
                    if (c === !1 || typeof c == "function") {
                        d = c, c = b
                    }
                    return d === !1 && (d = ba), this.each(function() {
                        p.event.remove(this, a, d, c)
                    })
                },
                bind: function(a, b, c) {
                    return this.on(a, null, b, c)
                },
                unbind: function(a, b) {
                    return this.off(a, null, b)
                },
                live: function(a, b, c) {
                    return p(this.context).on(a, this.selector, b, c), this
                },
                die: function(a, b) {
                    return p(this.context).off(a, this.selector || "**", b), this
                },
                delegate: function(a, b, c, d) {
                    return this.on(b, a, c, d)
                },
                undelegate: function(a, b, c) {
                    return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)
                },
                trigger: function(a, b) {
                    return this.each(function() {
                        p.event.trigger(a, b, this)
                    })
                },
                triggerHandler: function(a, b) {
                    if (this[0]) {
                        return p.event.trigger(a, b, this[0], !0)
                    }
                },
                toggle: function(a) {
                    var b = arguments,
                        c = a.guid || p.guid++,
                        d = 0,
                        e = function(c) {
                            var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
                            return p._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                        };
                    e.guid = c;
                    while (d < b.length) {
                        b[d++].guid = c
                    }
                    return this.click(e)
                },
                hover: function(a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }
            }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
                p.fn[b] = function(a, c) {
                    return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                }, Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks), Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
            }),
            function(a, b) {
                function bc(a, b, c, d) {
                    c = c || [], b = b || r;
                    var e, f, i, j, k = b.nodeType;
                    if (!a || typeof a != "string") {
                        return c
                    }
                    if (k !== 1 && k !== 9) {
                        return []
                    }
                    i = g(b);
                    if (!i && !d) {
                        if (e = P.exec(a)) {
                            if (j = e[1]) {
                                if (k === 9) {
                                    f = b.getElementById(j);
                                    if (!f || !f.parentNode) {
                                        return c
                                    }
                                    if (f.id === j) {
                                        return c.push(f), c
                                    }
                                } else {
                                    if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && h(b, f) && f.id === j) {
                                        return c.push(f), c
                                    }
                                }
                            } else {
                                if (e[2]) {
                                    return w.apply(c, x.call(b.getElementsByTagName(a), 0)), c
                                }
                                if ((j = e[3]) && _ && b.getElementsByClassName) {
                                    return w.apply(c, x.call(b.getElementsByClassName(j), 0)), c
                                }
                            }
                        }
                    }
                    return bp(a.replace(L, "$1"), b, c, d, i)
                }

                function bd(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return c === "input" && b.type === a
                    }
                }

                function be(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return (c === "input" || c === "button") && b.type === a
                    }
                }

                function bf(a) {
                    return z(function(b) {
                        return b = +b, z(function(c, d) {
                            var e, f = a([], c.length, b),
                                g = f.length;
                            while (g--) {
                                c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                            }
                        })
                    })
                }

                function bg(a, b, c) {
                    if (a === b) {
                        return c
                    }
                    var d = a.nextSibling;
                    while (d) {
                        if (d === b) {
                            return -1
                        }
                        d = d.nextSibling
                    }
                    return 1
                }

                function bh(a, b) {
                    var c, d, f, g, h, i, j, k = C[o][a];
                    if (k) {
                        return b ? 0 : k.slice(0)
                    }
                    h = a, i = [], j = e.preFilter;
                    while (h) {
                        if (!c || (d = M.exec(h))) {
                            d && (h = h.slice(d[0].length)), i.push(f = [])
                        }
                        c = !1;
                        if (d = N.exec(h)) {
                            f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = d[0].replace(L, " ")
                        }
                        for (g in e.filter) {
                            (d = W[g].exec(h)) && (!j[g] || (d = j[g](d, r, !0))) && (f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = g, c.matches = d)
                        }
                        if (!c) {
                            break
                        }
                    }
                    return b ? h.length : h ? bc.error(a) : C(a, i).slice(0)
                }

                function bi(a, b, d) {
                    var e = b.dir,
                        f = d && b.dir === "parentNode",
                        g = u++;
                    return b.first ? function(b, c, d) {
                        while (b = b[e]) {
                            if (f || b.nodeType === 1) {
                                return a(b, c, d)
                            }
                        }
                    } : function(b, d, h) {
                        if (!h) {
                            var i, j = t + " " + g + " ",
                                k = j + c;
                            while (b = b[e]) {
                                if (f || b.nodeType === 1) {
                                    if ((i = b[o]) === k) {
                                        return b.sizset
                                    }
                                    if (typeof i == "string" && i.indexOf(j) === 0) {
                                        if (b.sizset) {
                                            return b
                                        }
                                    } else {
                                        b[o] = k;
                                        if (a(b, d, h)) {
                                            return b.sizset = !0, b
                                        }
                                        b.sizset = !1
                                    }
                                }
                            }
                        } else {
                            while (b = b[e]) {
                                if (f || b.nodeType === 1) {
                                    if (a(b, d, h)) {
                                        return b
                                    }
                                }
                            }
                        }
                    }
                }

                function bj(a) {
                    return a.length > 1 ? function(b, c, d) {
                        var e = a.length;
                        while (e--) {
                            if (!a[e](b, c, d)) {
                                return !1
                            }
                        }
                        return !0
                    } : a[0]
                }

                function bk(a, b, c, d, e) {
                    var f, g = [],
                        h = 0,
                        i = a.length,
                        j = b != null;
                    for (; h < i; h++) {
                        if (f = a[h]) {
                            if (!c || c(f, d, e)) {
                                g.push(f), j && b.push(h)
                            }
                        }
                    }
                    return g
                }

                function bl(a, b, c, d, e, f) {
                    return d && !d[o] && (d = bl(d)), e && !e[o] && (e = bl(e, f)), z(function(f, g, h, i) {
                        if (f && e) {
                            return
                        }
                        var j, k, l, m = [],
                            n = [],
                            o = g.length,
                            p = f || bo(b || "*", h.nodeType ? [h] : h, [], f),
                            q = a && (f || !b) ? bk(p, m, a, h, i) : p,
                            r = c ? e || (f ? a : o || d) ? [] : g : q;
                        c && c(q, r, h, i);
                        if (d) {
                            l = bk(r, n), d(l, [], h, i), j = l.length;
                            while (j--) {
                                if (k = l[j]) {
                                    r[n[j]] = !(q[n[j]] = k)
                                }
                            }
                        }
                        if (f) {
                            j = a && r.length;
                            while (j--) {
                                if (k = r[j]) {
                                    f[m[j]] = !(g[m[j]] = k)
                                }
                            }
                        } else {
                            r = bk(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : w.apply(g, r)
                        }
                    })
                }

                function bm(a) {
                    var b, c, d, f = a.length,
                        g = e.relative[a[0].type],
                        h = g || e.relative[" "],
                        i = g ? 1 : 0,
                        j = bi(function(a) {
                            return a === b
                        }, h, !0),
                        k = bi(function(a) {
                            return y.call(b, a) > -1
                        }, h, !0),
                        m = [function(a, c, d) {
                            return !g && (d || c !== l) || ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
                        }];
                    for (; i < f; i++) {
                        if (c = e.relative[a[i].type]) {
                            m = [bi(bj(m), c)]
                        } else {
                            c = e.filter[a[i].type].apply(null, a[i].matches);
                            if (c[o]) {
                                d = ++i;
                                for (; d < f; d++) {
                                    if (e.relative[a[d].type]) {
                                        break
                                    }
                                }
                                return bl(i > 1 && bj(m), i > 1 && a.slice(0, i - 1).join("").replace(L, "$1"), c, i < d && bm(a.slice(i, d)), d < f && bm(a = a.slice(d)), d < f && a.join(""))
                            }
                            m.push(c)
                        }
                    }
                    return bj(m)
                }

                function bn(a, b) {
                    var d = b.length > 0,
                        f = a.length > 0,
                        g = function(h, i, j, k, m) {
                            var n, o, p, q = [],
                                s = 0,
                                u = "0",
                                x = h && [],
                                y = m != null,
                                z = l,
                                A = h || f && e.find.TAG("*", m && i.parentNode || i),
                                B = t += z == null ? 1 : Math.E;
                            y && (l = i !== r && i, c = g.el);
                            for (;
                                (n = A[u]) != null; u++) {
                                if (f && n) {
                                    for (o = 0; p = a[o]; o++) {
                                        if (p(n, i, j)) {
                                            k.push(n);
                                            break
                                        }
                                    }
                                    y && (t = B, c = ++g.el)
                                }
                                d && ((n = !p && n) && s--, h && x.push(n))
                            }
                            s += u;
                            if (d && u !== s) {
                                for (o = 0; p = b[o]; o++) {
                                    p(x, q, i, j)
                                }
                                if (h) {
                                    if (s > 0) {
                                        while (u--) {
                                            !x[u] && !q[u] && (q[u] = v.call(k))
                                        }
                                    }
                                    q = bk(q)
                                }
                                w.apply(k, q), y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k)
                            }
                            return y && (t = B, l = z), x
                        };
                    return g.el = 0, d ? z(g) : g
                }

                function bo(a, b, c, d) {
                    var e = 0,
                        f = b.length;
                    for (; e < f; e++) {
                        bc(a, b[e], c, d)
                    }
                    return c
                }

                function bp(a, b, c, d, f) {
                    var g, h, j, k, l, m = bh(a),
                        n = m.length;
                    if (!d && m.length === 1) {
                        h = m[0] = m[0].slice(0);
                        if (h.length > 2 && (j = h[0]).type === "ID" && b.nodeType === 9 && !f && e.relative[h[1].type]) {
                            b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
                            if (!b) {
                                return c
                            }
                            a = a.slice(h.shift().length)
                        }
                        for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
                            j = h[g];
                            if (e.relative[k = j.type]) {
                                break
                            }
                            if (l = e.find[k]) {
                                if (d = l(j.matches[0].replace(V, ""), R.test(h[0].type) && b.parentNode || b, f)) {
                                    h.splice(g, 1), a = d.length && h.join("");
                                    if (!a) {
                                        return w.apply(c, x.call(d, 0)), c
                                    }
                                    break
                                }
                            }
                        }
                    }
                    return i(a, m)(d, b, f, c, R.test(a)), c
                }

                function bq() {}
                var c, d, e, f, g, h, i, j, k, l, m = !0,
                    n = "undefined",
                    o = ("sizcache" + Math.random()).replace(".", ""),
                    q = String,
                    r = a.document,
                    s = r.documentElement,
                    t = 0,
                    u = 0,
                    v = [].pop,
                    w = [].push,
                    x = [].slice,
                    y = [].indexOf || function(a) {
                        var b = 0,
                            c = this.length;
                        for (; b < c; b++) {
                            if (this[b] === a) {
                                return b
                            }
                        }
                        return -1
                    },
                    z = function(a, b) {
                        return a[o] = b == null || b, a
                    },
                    A = function() {
                        var a = {},
                            b = [];
                        return z(function(c, d) {
                            return b.push(c) > e.cacheLength && delete a[b.shift()], a[c] = d
                        }, a)
                    },
                    B = A(),
                    C = A(),
                    D = A(),
                    E = "[\\x20\\t\\r\\n\\f]",
                    F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                    G = F.replace("w", "w#"),
                    H = "([*^$|!~]?=)",
                    I = "\\[" + E + "*(" + F + ")" + E + "*(?:" + H + E + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + G + ")|)|)" + E + "*\\]",
                    J = ":(" + F + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + I + ")|[^:]|\\\\.)*|.*))\\)|)",
                    K = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)",
                    L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
                    M = new RegExp("^" + E + "*," + E + "*"),
                    N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"),
                    O = new RegExp(J),
                    P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                    Q = /^:not/,
                    R = /[\x20\t\r\n\f]*[+~]/,
                    S = /:not\($/,
                    T = /h\d/i,
                    U = /input|select|textarea|button/i,
                    V = /\\(?!\\)/g,
                    W = {
                        ID: new RegExp("^#(" + F + ")"),
                        CLASS: new RegExp("^\\.(" + F + ")"),
                        NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                        TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + I),
                        PSEUDO: new RegExp("^" + J),
                        POS: new RegExp(K, "i"),
                        CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)", "i"),
                        needsContext: new RegExp("^" + E + "*[>+~]|" + K, "i")
                    },
                    X = function(a) {
                        var b = r.createElement("div");
                        try {
                            return a(b)
                        } catch (c) {
                            return !1
                        } finally {
                            b = null
                        }
                    },
                    Y = X(function(a) {
                        return a.appendChild(r.createComment("")), !a.getElementsByTagName("*").length
                    }),
                    Z = X(function(a) {
                        return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== n && a.firstChild.getAttribute("href") === "#"
                    }),
                    $ = X(function(a) {
                        a.innerHTML = "<select></select>";
                        var b = typeof a.lastChild.getAttribute("multiple");
                        return b !== "boolean" && b !== "string"
                    }),
                    _ = X(function(a) {
                        return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length === 2)
                    }),
                    ba = X(function(a) {
                        a.id = o + 0, a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>", s.insertBefore(a, s.firstChild);
                        var b = r.getElementsByName && r.getElementsByName(o).length === 2 + r.getElementsByName(o + 0).length;
                        return d = !r.getElementById(o), s.removeChild(a), b
                    });
                try {
                    x.call(s.childNodes, 0)[0].nodeType
                } catch (bb) {
                    x = function(a) {
                        var b, c = [];
                        for (; b = this[a]; a++) {
                            c.push(b)
                        }
                        return c
                    }
                }
                bc.matches = function(a, b) {
                    return bc(a, null, null, b)
                }, bc.matchesSelector = function(a, b) {
                    return bc(b, null, null, [a]).length > 0
                }, f = bc.getText = function(a) {
                    var b, c = "",
                        d = 0,
                        e = a.nodeType;
                    if (e) {
                        if (e === 1 || e === 9 || e === 11) {
                            if (typeof a.textContent == "string") {
                                return a.textContent
                            }
                            for (a = a.firstChild; a; a = a.nextSibling) {
                                c += f(a)
                            }
                        } else {
                            if (e === 3 || e === 4) {
                                return a.nodeValue
                            }
                        }
                    } else {
                        for (; b = a[d]; d++) {
                            c += f(b)
                        }
                    }
                    return c
                }, g = bc.isXML = function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                }, h = bc.contains = s.contains ? function(a, b) {
                    var c = a.nodeType === 9 ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
                } : s.compareDocumentPosition ? function(a, b) {
                    return b && !!(a.compareDocumentPosition(b) & 16)
                } : function(a, b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                    return !1
                }, bc.attr = function(a, b) {
                    var c, d = g(a);
                    return d || (b = b.toLowerCase()), (c = e.attrHandle[b]) ? c(a) : d || $ ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null)
                }, e = bc.selectors = {
                    cacheLength: 50,
                    createPseudo: z,
                    match: W,
                    attrHandle: Z ? {} : {
                        href: function(a) {
                            return a.getAttribute("href", 2)
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    find: {
                        ID: d ? function(a, b, c) {
                            if (typeof b.getElementById !== n && !c) {
                                var d = b.getElementById(a);
                                return d && d.parentNode ? [d] : []
                            }
                        } : function(a, c, d) {
                            if (typeof c.getElementById !== n && !d) {
                                var e = c.getElementById(a);
                                return e ? e.id === a || typeof e.getAttributeNode !== n && e.getAttributeNode("id").value === a ? [e] : b : []
                            }
                        },
                        TAG: Y ? function(a, b) {
                            if (typeof b.getElementsByTagName !== n) {
                                return b.getElementsByTagName(a)
                            }
                        } : function(a, b) {
                            var c = b.getElementsByTagName(a);
                            if (a === "*") {
                                var d, e = [],
                                    f = 0;
                                for (; d = c[f]; f++) {
                                    d.nodeType === 1 && e.push(d)
                                }
                                return e
                            }
                            return c
                        },
                        NAME: ba && function(a, b) {
                            if (typeof b.getElementsByName !== n) {
                                return b.getElementsByName(name)
                            }
                        },
                        CLASS: _ && function(a, b, c) {
                            if (typeof b.getElementsByClassName !== n && !c) {
                                return b.getElementsByClassName(a)
                            }
                        }
                    },
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(a) {
                            return a[1] = a[1].replace(V, ""), a[3] = (a[4] || a[5] || "").replace(V, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || bc.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && bc.error(a[0]), a
                        },
                        PSEUDO: function(a) {
                            var b, c;
                            if (W.CHILD.test(a[0])) {
                                return null
                            }
                            if (a[3]) {
                                a[2] = a[3]
                            } else {
                                if (b = a[4]) {
                                    O.test(b) && (c = bh(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b
                                }
                            }
                            return a.slice(0, 3)
                        }
                    },
                    filter: {
                        ID: d ? function(a) {
                            return a = a.replace(V, ""),
                                function(b) {
                                    return b.getAttribute("id") === a
                                }
                        } : function(a) {
                            return a = a.replace(V, ""),
                                function(b) {
                                    var c = typeof b.getAttributeNode !== n && b.getAttributeNode("id");
                                    return c && c.value === a
                                }
                        },
                        TAG: function(a) {
                            return a === "*" ? function() {
                                return !0
                            } : (a = a.replace(V, "").toLowerCase(), function(b) {
                                return b.nodeName && b.nodeName.toLowerCase() === a
                            })
                        },
                        CLASS: function(a) {
                            var b = B[o][a];
                            return b || (b = B(a, new RegExp("(^|" + E + ")" + a + "(" + E + "|$)"))),
                                function(a) {
                                    return b.test(a.className || typeof a.getAttribute !== n && a.getAttribute("class") || "")
                                }
                        },
                        ATTR: function(a, b, c) {
                            return function(d, e) {
                                var f = bc.attr(d, a);
                                return f == null ? b === "!=" : b ? (f += "", b === "=" ? f === c : b === "!=" ? f !== c : b === "^=" ? c && f.indexOf(c) === 0 : b === "*=" ? c && f.indexOf(c) > -1 : b === "$=" ? c && f.substr(f.length - c.length) === c : b === "~=" ? (" " + f + " ").indexOf(c) > -1 : b === "|=" ? f === c || f.substr(0, c.length + 1) === c + "-" : !1) : !0
                            }
                        },
                        CHILD: function(a, b, c, d) {
                            return a === "nth" ? function(a) {
                                var b, e, f = a.parentNode;
                                if (c === 1 && d === 0) {
                                    return !0
                                }
                                if (f) {
                                    e = 0;
                                    for (b = f.firstChild; b; b = b.nextSibling) {
                                        if (b.nodeType === 1) {
                                            e++;
                                            if (a === b) {
                                                break
                                            }
                                        }
                                    }
                                }
                                return e -= d, e === c || e % c === 0 && e / c >= 0
                            } : function(b) {
                                var c = b;
                                switch (a) {
                                    case "only":
                                    case "first":
                                        while (c = c.previousSibling) {
                                            if (c.nodeType === 1) {
                                                return !1
                                            }
                                        }
                                        if (a === "first") {
                                            return !0
                                        }
                                        c = b;
                                    case "last":
                                        while (c = c.nextSibling) {
                                            if (c.nodeType === 1) {
                                                return !1
                                            }
                                        }
                                        return !0
                                }
                            }
                        },
                        PSEUDO: function(a, b) {
                            var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || bc.error("unsupported pseudo: " + a);
                            return d[o] ? d(b) : d.length > 1 ? (c = [a, a, "", b], e.setFilters.hasOwnProperty(a.toLowerCase()) ? z(function(a, c) {
                                var e, f = d(a, b),
                                    g = f.length;
                                while (g--) {
                                    e = y.call(a, f[g]), a[e] = !(c[e] = f[g])
                                }
                            }) : function(a) {
                                return d(a, 0, c)
                            }) : d
                        }
                    },
                    pseudos: {
                        not: z(function(a) {
                            var b = [],
                                c = [],
                                d = i(a.replace(L, "$1"));
                            return d[o] ? z(function(a, b, c, e) {
                                var f, g = d(a, null, e, []),
                                    h = a.length;
                                while (h--) {
                                    if (f = g[h]) {
                                        a[h] = !(b[h] = f)
                                    }
                                }
                            }) : function(a, e, f) {
                                return b[0] = a, d(b, null, f, c), !c.pop()
                            }
                        }),
                        has: z(function(a) {
                            return function(b) {
                                return bc(a, b).length > 0
                            }
                        }),
                        contains: z(function(a) {
                            return function(b) {
                                return (b.textContent || b.innerText || f(b)).indexOf(a) > -1
                            }
                        }),
                        enabled: function(a) {
                            return a.disabled === !1
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && !!a.checked || b === "option" && !!a.selected
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        },
                        parent: function(a) {
                            return !e.pseudos.empty(a)
                        },
                        empty: function(a) {
                            var b;
                            a = a.firstChild;
                            while (a) {
                                if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) {
                                    return !1
                                }
                                a = a.nextSibling
                            }
                            return !0
                        },
                        header: function(a) {
                            return T.test(a.nodeName)
                        },
                        text: function(a) {
                            var b, c;
                            return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
                        },
                        radio: bd("radio"),
                        checkbox: bd("checkbox"),
                        file: bd("file"),
                        password: bd("password"),
                        image: bd("image"),
                        submit: be("submit"),
                        reset: be("reset"),
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && a.type === "button" || b === "button"
                        },
                        input: function(a) {
                            return U.test(a.nodeName)
                        },
                        focus: function(a) {
                            var b = a.ownerDocument;
                            return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
                        },
                        active: function(a) {
                            return a === a.ownerDocument.activeElement
                        },
                        first: bf(function(a, b, c) {
                            return [0]
                        }),
                        last: bf(function(a, b, c) {
                            return [b - 1]
                        }),
                        eq: bf(function(a, b, c) {
                            return [c < 0 ? c + b : c]
                        }),
                        even: bf(function(a, b, c) {
                            for (var d = 0; d < b; d += 2) {
                                a.push(d)
                            }
                            return a
                        }),
                        odd: bf(function(a, b, c) {
                            for (var d = 1; d < b; d += 2) {
                                a.push(d)
                            }
                            return a
                        }),
                        lt: bf(function(a, b, c) {
                            for (var d = c < 0 ? c + b : c; --d >= 0;) {
                                a.push(d)
                            }
                            return a
                        }),
                        gt: bf(function(a, b, c) {
                            for (var d = c < 0 ? c + b : c; ++d < b;) {
                                a.push(d)
                            }
                            return a
                        })
                    }
                }, j = s.compareDocumentPosition ? function(a, b) {
                    return a === b ? (k = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
                } : function(a, b) {
                    if (a === b) {
                        return k = !0, 0
                    }
                    if (a.sourceIndex && b.sourceIndex) {
                        return a.sourceIndex - b.sourceIndex
                    }
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        h = b.parentNode,
                        i = g;
                    if (g === h) {
                        return bg(a, b)
                    }
                    if (!g) {
                        return -1
                    }
                    if (!h) {
                        return 1
                    }
                    while (i) {
                        e.unshift(i), i = i.parentNode
                    }
                    i = h;
                    while (i) {
                        f.unshift(i), i = i.parentNode
                    }
                    c = e.length, d = f.length;
                    for (var j = 0; j < c && j < d; j++) {
                        if (e[j] !== f[j]) {
                            return bg(e[j], f[j])
                        }
                    }
                    return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1)
                }, [0, 0].sort(j), m = !k, bc.uniqueSort = function(a) {
                    var b, c = 1;
                    k = m, a.sort(j);
                    if (k) {
                        for (; b = a[c]; c++) {
                            b === a[c - 1] && a.splice(c--, 1)
                        }
                    }
                    return a
                }, bc.error = function(a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }, i = bc.compile = function(a, b) {
                    var c, d = [],
                        e = [],
                        f = D[o][a];
                    if (!f) {
                        b || (b = bh(a)), c = b.length;
                        while (c--) {
                            f = bm(b[c]), f[o] ? d.push(f) : e.push(f)
                        }
                        f = D(a, bn(e, d))
                    }
                    return f
                }, r.querySelectorAll && function() {
                    var a, b = bp,
                        c = /'|\\/g,
                        d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                        e = [":focus"],
                        f = [":active", ":focus"],
                        h = s.matchesSelector || s.mozMatchesSelector || s.webkitMatchesSelector || s.oMatchesSelector || s.msMatchesSelector;
                    X(function(a) {
                        a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || e.push("\\[" + E + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || e.push(":checked")
                    }), X(function(a) {
                        a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + E + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
                    }), e = new RegExp(e.join("|")), bp = function(a, d, f, g, h) {
                        if (!g && !h && (!e || !e.test(a))) {
                            var i, j, k = !0,
                                l = o,
                                m = d,
                                n = d.nodeType === 9 && a;
                            if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                                i = bh(a), (k = d.getAttribute("id")) ? l = k.replace(c, "\\$&") : d.setAttribute("id", l), l = "[id='" + l + "'] ", j = i.length;
                                while (j--) {
                                    i[j] = l + i[j].join("")
                                }
                                m = R.test(a) && d.parentNode || d, n = i.join(",")
                            }
                            if (n) {
                                try {
                                    return w.apply(f, x.call(m.querySelectorAll(n), 0)), f
                                } catch (p) {} finally {
                                    k || d.removeAttribute("id")
                                }
                            }
                        }
                        return b(a, d, f, g, h)
                    }, h && (X(function(b) {
                        a = h.call(b, "div");
                        try {
                            h.call(b, "[test!='']:sizzle"), f.push("!=", J)
                        } catch (c) {}
                    }), f = new RegExp(f.join("|")), bc.matchesSelector = function(b, c) {
                        c = c.replace(d, "='$1']");
                        if (!g(b) && !f.test(c) && (!e || !e.test(c))) {
                            try {
                                var i = h.call(b, c);
                                if (i || a || b.document && b.document.nodeType !== 11) {
                                    return i
                                }
                            } catch (j) {}
                        }
                        return bc(c, null, null, [b]).length > 0
                    })
                }(), e.pseudos.nth = e.pseudos.eq, e.filters = bq.prototype = e.pseudos, e.setFilters = new bq, bc.attr = p.attr, p.find = bc, p.expr = bc.selectors, p.expr[":"] = p.expr.pseudos, p.unique = bc.uniqueSort, p.text = bc.getText, p.isXMLDoc = bc.isXML, p.contains = bc.contains
            }(a);
        var bc = /Until$/,
            bd = /^(?:parents|prev(?:Until|All))/,
            be = /^.[^:#\[\.,]*$/,
            bf = p.expr.match.needsContext,
            bg = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        p.fn.extend({
            find: function(a) {
                var b, c, d, e, f, g, h = this;
                if (typeof a != "string") {
                    return p(a).filter(function() {
                        for (b = 0, c = h.length; b < c; b++) {
                            if (p.contains(h[b], this)) {
                                return !0
                            }
                        }
                    })
                }
                g = this.pushStack("", "find", a);
                for (b = 0, c = this.length; b < c; b++) {
                    d = g.length, p.find(a, this[b], g);
                    if (b > 0) {
                        for (e = d; e < g.length; e++) {
                            for (f = 0; f < d; f++) {
                                if (g[f] === g[e]) {
                                    g.splice(e--, 1);
                                    break
                                }
                            }
                        }
                    }
                }
                return g
            },
            has: function(a) {
                var b, c = p(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; b < d; b++) {
                        if (p.contains(this, c[b])) {
                            return !0
                        }
                    }
                })
            },
            not: function(a) {
                return this.pushStack(bj(this, a, !1), "not", a)
            },
            filter: function(a) {
                return this.pushStack(bj(this, a, !0), "filter", a)
            },
            is: function(a) {
                return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
            },
            closest: function(a, b) {
                var c, d = 0,
                    e = this.length,
                    f = [],
                    g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
                for (; d < e; d++) {
                    c = this[d];
                    while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                        if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
                            f.push(c);
                            break
                        }
                        c = c.parentNode
                    }
                }
                return f = f.length > 1 ? p.unique(f) : f, this.pushStack(f, "closest", a)
            },
            index: function(a) {
                return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(a, b) {
                var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a),
                    d = p.merge(this.get(), c);
                return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d))
            },
            addBack: function(a) {
                return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
            }
        }), p.fn.andSelf = p.fn.addBack, p.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && b.nodeType !== 11 ? b : null
            },
            parents: function(a) {
                return p.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return p.dir(a, "parentNode", c)
            },
            next: function(a) {
                return bi(a, "nextSibling")
            },
            prev: function(a) {
                return bi(a, "previousSibling")
            },
            nextAll: function(a) {
                return p.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return p.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return p.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return p.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return p.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return p.sibling(a.firstChild)
            },
            contents: function(a) {
                return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes)
            }
        }, function(a, b) {
            p.fn[a] = function(c, d) {
                var e = p.map(this, b, c);
                return bc.test(a) || (d = c), d && typeof d == "string" && (e = p.filter(d, e)), e = this.length > 1 && !bg[a] ? p.unique(e) : e, this.length > 1 && bd.test(a) && (e = e.reverse()), this.pushStack(e, a, k.call(arguments).join(","))
            }
        }), p.extend({
            filter: function(a, b, c) {
                return c && (a = ":not(" + a + ")"), b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
            },
            dir: function(a, c, d) {
                var e = [],
                    f = a[c];
                while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) {
                    f.nodeType === 1 && e.push(f), f = f[c]
                }
                return e
            },
            sibling: function(a, b) {
                var c = [];
                for (; a; a = a.nextSibling) {
                    a.nodeType === 1 && a !== b && c.push(a)
                }
                return c
            }
        });
        var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            bm = / jQuery\d+="(?:null|\d+)"/g,
            bn = /^\s+/,
            bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            bp = /<([\w:]+)/,
            bq = /<tbody/i,
            br = /<|&#?\w+;/,
            bs = /<(?:script|style|link)/i,
            bt = /<(?:script|object|embed|option|style)/i,
            bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
            bv = /^(?:checkbox|radio)$/,
            bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
            bx = /\/(java|ecma)script/i,
            by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
            bz = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            },
            bA = bk(e),
            bB = bA.appendChild(e.createElement("div"));
        bz.optgroup = bz.option, bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead, bz.th = bz.td, p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]), p.fn.extend({
                text: function(a) {
                    return p.access(this, function(a) {
                        return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
                    }, null, a, arguments.length)
                },
                wrapAll: function(a) {
                    if (p.isFunction(a)) {
                        return this.each(function(b) {
                            p(this).wrapAll(a.call(this, b))
                        })
                    }
                    if (this[0]) {
                        var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                            var a = this;
                            while (a.firstChild && a.firstChild.nodeType === 1) {
                                a = a.firstChild
                            }
                            return a
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(a) {
                    return p.isFunction(a) ? this.each(function(b) {
                        p(this).wrapInner(a.call(this, b))
                    }) : this.each(function() {
                        var b = p(this),
                            c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    })
                },
                wrap: function(a) {
                    var b = p.isFunction(a);
                    return this.each(function(c) {
                        p(this).wrapAll(b ? a.call(this, c) : a)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0, function(a) {
                        (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, !0, function(a) {
                        (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
                    })
                },
                before: function() {
                    if (!bh(this[0])) {
                        return this.domManip(arguments, !1, function(a) {
                            this.parentNode.insertBefore(a, this)
                        })
                    }
                    if (arguments.length) {
                        var a = p.clean(arguments);
                        return this.pushStack(p.merge(a, this), "before", this.selector)
                    }
                },
                after: function() {
                    if (!bh(this[0])) {
                        return this.domManip(arguments, !1, function(a) {
                            this.parentNode.insertBefore(a, this.nextSibling)
                        })
                    }
                    if (arguments.length) {
                        var a = p.clean(arguments);
                        return this.pushStack(p.merge(this, a), "after", this.selector)
                    }
                },
                remove: function(a, b) {
                    var c, d = 0;
                    for (;
                        (c = this[d]) != null; d++) {
                        if (!a || p.filter(a, [c]).length) {
                            !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c)
                        }
                    }
                    return this
                },
                empty: function() {
                    var a, b = 0;
                    for (;
                        (a = this[b]) != null; b++) {
                        a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
                        while (a.firstChild) {
                            a.removeChild(a.firstChild)
                        }
                    }
                    return this
                },
                clone: function(a, b) {
                    return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function() {
                        return p.clone(this, a, b)
                    })
                },
                html: function(a) {
                    return p.access(this, function(a) {
                        var c = this[0] || {},
                            d = 0,
                            e = this.length;
                        if (a === b) {
                            return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b
                        }
                        if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = a.replace(bo, "<$1></$2>");
                            try {
                                for (; d < e; d++) {
                                    c = this[d] || {}, c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a)
                                }
                                c = 0
                            } catch (f) {}
                        }
                        c && this.empty().append(a)
                    }, null, a, arguments.length)
                },
                replaceWith: function(a) {
                    return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function(b) {
                        var c = p(this),
                            d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    }) : (typeof a != "string" && (a = p(a).detach()), this.each(function() {
                        var b = this.nextSibling,
                            c = this.parentNode;
                        p(this).remove(), b ? p(b).before(a) : p(c).append(a)
                    }))
                },
                detach: function(a) {
                    return this.remove(a, !0)
                },
                domManip: function(a, c, d) {
                    a = [].concat.apply([], a);
                    var e, f, g, h, i = 0,
                        j = a[0],
                        k = [],
                        l = this.length;
                    if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) {
                        return this.each(function() {
                            p(this).domManip(a, c, d)
                        })
                    }
                    if (p.isFunction(j)) {
                        return this.each(function(e) {
                            var f = p(this);
                            a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
                        })
                    }
                    if (this[0]) {
                        e = p.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);
                        if (f) {
                            c = c && p.nodeName(f, "tr");
                            for (h = e.cacheable || l - 1; i < l; i++) {
                                d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0))
                            }
                        }
                        g = f = null, k.length && p.each(k, function(a, b) {
                            b.src ? p.ajax ? p.ajax({
                                url: b.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")), b.parentNode && b.parentNode.removeChild(b)
                        })
                    }
                    return this
                }
            }), p.buildFragment = function(a, c, d) {
                var f, g, h, i = a[0];
                return c = c || e, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0, f = p.fragments[i], h = f !== b), f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)), {
                    fragment: f,
                    cacheable: g
                }
            }, p.fragments = {}, p.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(a, b) {
                p.fn[a] = function(c) {
                    var d, e = 0,
                        f = [],
                        g = p(c),
                        h = g.length,
                        i = this.length === 1 && this[0].parentNode;
                    if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) {
                        return g[b](this[0]), this
                    }
                    for (; e < h; e++) {
                        d = (e > 0 ? this.clone(!0) : this).get(), p(g[e])[b](d), f = f.concat(d)
                    }
                    return this.pushStack(f, a, g.selector)
                }
            }), p.extend({
                clone: function(a, b, c) {
                    var d, e, f, g;
                    p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML, bB.removeChild(g = bB.firstChild));
                    if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
                        bE(a, g), d = bF(a), e = bF(g);
                        for (f = 0; d[f]; ++f) {
                            e[f] && bE(d[f], e[f])
                        }
                    }
                    if (b) {
                        bD(a, g);
                        if (c) {
                            d = bF(a), e = bF(g);
                            for (f = 0; d[f]; ++f) {
                                bD(d[f], e[f])
                            }
                        }
                    }
                    return d = e = null, g
                },
                clean: function(a, b, c, d) {
                    var f, g, h, i, j, k, l, m, n, o, q, r, s = b === e && bA,
                        t = [];
                    if (!b || typeof b.createDocumentFragment == "undefined") {
                        b = e
                    }
                    for (f = 0;
                        (h = a[f]) != null; f++) {
                        typeof h == "number" && (h += "");
                        if (!h) {
                            continue
                        }
                        if (typeof h == "string") {
                            if (!br.test(h)) {
                                h = b.createTextNode(h)
                            } else {
                                s = s || bk(b), l = b.createElement("div"), s.appendChild(l), h = h.replace(bo, "<$1></$2>"), i = (bp.exec(h) || ["", ""])[1].toLowerCase(), j = bz[i] || bz._default, k = j[0], l.innerHTML = j[1] + h + j[2];
                                while (k--) {
                                    l = l.lastChild
                                }
                                if (!p.support.tbody) {
                                    m = bq.test(h), n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
                                    for (g = n.length - 1; g >= 0; --g) {
                                        p.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g])
                                    }
                                }!p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild), h = l.childNodes, l.parentNode.removeChild(l)
                            }
                        }
                        h.nodeType ? t.push(h) : p.merge(t, h)
                    }
                    l && (h = l = s = null);
                    if (!p.support.appendChecked) {
                        for (f = 0;
                            (h = t[f]) != null; f++) {
                            p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG)
                        }
                    }
                    if (c) {
                        q = function(a) {
                            if (!a.type || bx.test(a.type)) {
                                return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
                            }
                        };
                        for (f = 0;
                            (h = t[f]) != null; f++) {
                            if (!p.nodeName(h, "script") || !q(h)) {
                                c.appendChild(h), typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [f + 1, 0].concat(r)), f += r.length)
                            }
                        }
                    }
                    return t
                },
                cleanData: function(a, b) {
                    var c, d, e, f, g = 0,
                        h = p.expando,
                        i = p.cache,
                        j = p.support.deleteExpando,
                        k = p.event.special;
                    for (;
                        (e = a[g]) != null; g++) {
                        if (b || p.acceptData(e)) {
                            d = e[h], c = d && i[d];
                            if (c) {
                                if (c.events) {
                                    for (f in c.events) {
                                        k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle)
                                    }
                                }
                                i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d))
                            }
                        }
                    }
                }
            }),
            function() {
                var a, b;
                p.uaMatch = function(a) {
                    a = a.toLowerCase();
                    var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                }, a = p.uaMatch(g.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), p.browser = b, p.sub = function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    p.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function c(c, d) {
                        return d && d instanceof p && !(d instanceof a) && (d = a(d)), p.fn.init.call(this, c, d, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(e);
                    return a
                }
            }();
        var bH, bI, bJ, bK = /alpha\([^)]*\)/i,
            bL = /opacity=([^)]*)/,
            bM = /^(top|right|bottom|left)$/,
            bN = /^(none|table(?!-c[ea]).+)/,
            bO = /^margin/,
            bP = new RegExp("^(" + q + ")(.*)$", "i"),
            bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
            bR = new RegExp("^([-+])=(" + q + ")", "i"),
            bS = {},
            bT = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            bU = {
                letterSpacing: 0,
                fontWeight: 400
            },
            bV = ["Top", "Right", "Bottom", "Left"],
            bW = ["Webkit", "O", "Moz", "ms"],
            bX = p.fn.toggle;
        p.fn.extend({
            css: function(a, c) {
                return p.access(this, function(a, c, d) {
                    return d !== b ? p.style(a, c, d) : p.css(a, c)
                }, a, c, arguments.length > 1)
            },
            show: function() {
                return b$(this, !0)
            },
            hide: function() {
                return b$(this)
            },
            toggle: function(a, b) {
                var c = typeof a == "boolean";
                return p.isFunction(a) && p.isFunction(b) ? bX.apply(this, arguments) : this.each(function() {
                    (c ? a : bZ(this)) ? p(this).show(): p(this).hide()
                })
            }
        }), p.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = bH(a, "opacity");
                            return c === "" ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": p.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, c, d, e) {
                if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) {
                    return
                }
                var f, g, h, i = p.camelCase(c),
                    j = a.style;
                c = p.cssProps[i] || (p.cssProps[i] = bY(j, i)), h = p.cssHooks[c] || p.cssHooks[i];
                if (d === b) {
                    return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c]
                }
                g = typeof d, g === "string" && (f = bR.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
                if (d == null || g === "number" && isNaN(d)) {
                    return
                }
                g === "number" && !p.cssNumber[i] && (d += "px");
                if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) {
                    try {
                        j[c] = d
                    } catch (k) {}
                }
            },
            css: function(a, c, d, e) {
                var f, g, h, i = p.camelCase(c);
                return c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i)), h = p.cssHooks[c] || p.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = bH(a, c)), f === "normal" && c in bU && (f = bU[c]), d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f
            },
            swap: function(a, b, c) {
                var d, e, f = {};
                for (e in b) {
                    f[e] = a.style[e], a.style[e] = b[e]
                }
                d = c.call(a);
                for (e in b) {
                    a.style[e] = f[e]
                }
                return d
            }
        }), a.getComputedStyle ? bH = function(b, c) {
            var d, e, f, g, h = a.getComputedStyle(b, null),
                i = b.style;
            return h && (d = h[c], d === "" && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)), bQ.test(d) && bO.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
        } : e.documentElement.currentStyle && (bH = function(a, b) {
            var c, d, e = a.currentStyle && a.currentStyle[b],
                f = a.style;
            return e == null && f && f[b] && (e = f[b]), bQ.test(e) && !bM.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e
        }), p.each(["height", "width"], function(a, b) {
            p.cssHooks[b] = {
                get: function(a, c, d) {
                    if (c) {
                        return a.offsetWidth === 0 && bN.test(bH(a, "display")) ? p.swap(a, bT, function() {
                            return cb(a, b, d)
                        }) : cb(a, b, d)
                    }
                },
                set: function(a, c, d) {
                    return b_(a, c, d ? ca(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
                }
            }
        }), p.support.opacity || (p.cssHooks.opacity = {
            get: function(a, b) {
                return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1;
                if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
                    c.removeAttribute("filter");
                    if (d && !d.filter) {
                        return
                    }
                }
                c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e
            }
        }), p(function() {
            p.support.reliableMarginRight || (p.cssHooks.marginRight = {
                get: function(a, b) {
                    return p.swap(a, {
                        display: "inline-block"
                    }, function() {
                        if (b) {
                            return bH(a, "marginRight")
                        }
                    })
                }
            }), !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function(a, b) {
                p.cssHooks[b] = {
                    get: function(a, c) {
                        if (c) {
                            var d = bH(a, b);
                            return bQ.test(d) ? p(a).position()[b] + "px" : d
                        }
                    }
                }
            })
        }), p.expr && p.expr.filters && (p.expr.filters.hidden = function(a) {
            return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none"
        }, p.expr.filters.visible = function(a) {
            return !p.expr.filters.hidden(a)
        }), p.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            p.cssHooks[a + b] = {
                expand: function(c) {
                    var d, e = typeof c == "string" ? c.split(" ") : [c],
                        f = {};
                    for (d = 0; d < 4; d++) {
                        f[a + bV[d] + b] = e[d] || e[d - 2] || e[0]
                    }
                    return f
                }
            }, bO.test(a) || (p.cssHooks[a + b].set = b_)
        });
        var cd = /%20/g,
            ce = /\[\]$/,
            cf = /\r?\n/g,
            cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            ch = /^(?:select|textarea)/i;
        p.fn.extend({
            serialize: function() {
                return p.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? p.makeArray(this.elements) : this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || ch.test(this.nodeName) || cg.test(this.type))
                }).map(function(a, b) {
                    var c = p(this).val();
                    return c == null ? null : p.isArray(c) ? p.map(c, function(a, c) {
                        return {
                            name: b.name,
                            value: a.replace(cf, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(cf, "\r\n")
                    }
                }).get()
            }
        }), p.param = function(a, c) {
            var d, e = [],
                f = function(a, b) {
                    b = p.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
            if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) {
                p.each(a, function() {
                    f(this.name, this.value)
                })
            } else {
                for (d in a) {
                    ci(d, a[d], c, f)
                }
            }
            return e.join("&").replace(cd, "+")
        };
        var cj, ck, cl = /#.*$/,
            cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            co = /^(?:GET|HEAD)$/,
            cp = /^\/\//,
            cq = /\?/,
            cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            cs = /([?&])_=[^&]*/,
            ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            cu = p.fn.load,
            cv = {},
            cw = {},
            cx = ["*/"] + ["*"];
        try {
            ck = f.href
        } catch (cy) {
            ck = e.createElement("a"), ck.href = "", ck = ck.href
        }
        cj = ct.exec(ck.toLowerCase()) || [], p.fn.load = function(a, c, d) {
            if (typeof a != "string" && cu) {
                return cu.apply(this, arguments)
            }
            if (!this.length) {
                return this
            }
            var e, f, g, h = this,
                i = a.indexOf(" ");
            return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), p.isFunction(c) ? (d = c, c = b) : c && typeof c == "object" && (f = "POST"), p.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: c,
                complete: function(a, b) {
                    d && h.each(d, g || [a.responseText, b, a])
                }
            }).done(function(a) {
                g = arguments, h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a)
            }), this
        }, p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
            p.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), p.each(["get", "post"], function(a, c) {
            p[c] = function(a, d, e, f) {
                return p.isFunction(d) && (f = f || e, e = d, d = b), p.ajax({
                    type: c,
                    url: a,
                    data: d,
                    success: e,
                    dataType: f
                })
            }
        }), p.extend({
            getScript: function(a, c) {
                return p.get(a, b, c, "script")
            },
            getJSON: function(a, b, c) {
                return p.get(a, b, c, "json")
            },
            ajaxSetup: function(a, b) {
                return b ? cB(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings), cB(a, b), a
            },
            ajaxSettings: {
                url: ck,
                isLocal: cn.test(cj[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": cx
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": p.parseJSON,
                    "text xml": p.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: cz(cv),
            ajaxTransport: cz(cw),
            ajax: function(a, c) {
                function y(a, c, f, i) {
                    var k, s, t, u, w, y = c;
                    if (v === 2) {
                        return
                    }
                    v = 2, h && clearTimeout(h), g = b, e = i || "", x.readyState = a > 0 ? 4 : 0, f && (u = cC(l, x, f));
                    if (a >= 200 && a < 300 || a === 304) {
                        l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)), a === 304 ? (y = "notmodified", k = !0) : (k = cD(l, u), y = k.state, s = k.data, t = k.error, k = !t)
                    } else {
                        t = y;
                        if (!y || a) {
                            y = "error", a < 0 && (a = 0)
                        }
                    }
                    x.status = a, x.statusText = (c || y) + "", k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]), x.statusCode(r), r = b, j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]), q.fireWith(m, [x, y]), j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop"))
                }
                typeof a == "object" && (c = a, a = b), c = c || {};
                var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c),
                    m = l.context || l,
                    n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
                    o = p.Deferred(),
                    q = p.Callbacks("once memory"),
                    r = l.statusCode || {},
                    t = {},
                    u = {},
                    v = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        setRequestHeader: function(a, b) {
                            if (!v) {
                                var c = a.toLowerCase();
                                a = u[c] = u[c] || a, t[a] = b
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return v === 2 ? e : null
                        },
                        getResponseHeader: function(a) {
                            var c;
                            if (v === 2) {
                                if (!f) {
                                    f = {};
                                    while (c = cm.exec(e)) {
                                        f[c[1].toLowerCase()] = c[2]
                                    }
                                }
                                c = f[a.toLowerCase()]
                            }
                            return c === b ? null : c
                        },
                        overrideMimeType: function(a) {
                            return v || (l.mimeType = a), this
                        },
                        abort: function(a) {
                            return a = a || w, g && g.abort(a), y(0, a), this
                        }
                    };
                o.promise(x), x.success = x.done, x.error = x.fail, x.complete = q.add, x.statusCode = function(a) {
                    if (a) {
                        var b;
                        if (v < 2) {
                            for (b in a) {
                                r[b] = [r[b], a[b]]
                            }
                        } else {
                            b = a[x.status], x.always(b)
                        }
                    }
                    return this
                }, l.url = ((a || l.url) + "").replace(cl, "").replace(cp, cj[1] + "//"), l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s), l.crossDomain == null && (i = ct.exec(l.url.toLowerCase()) || !1, l.crossDomain = i && i.join(":") + (i[3] ? "" : i[1] === "http:" ? 80 : 443) !== cj.join(":") + (cj[3] ? "" : cj[1] === "http:" ? 80 : 443)), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), cA(cv, l, c, x);
                if (v === 2) {
                    return x
                }
                j = l.global, l.type = l.type.toUpperCase(), l.hasContent = !co.test(l.type), j && p.active++ === 0 && p.event.trigger("ajaxStart");
                if (!l.hasContent) {
                    l.data && (l.url += (cq.test(l.url) ? "&" : "?") + l.data, delete l.data), d = l.url;
                    if (l.cache === !1) {
                        var z = p.now(),
                            A = l.url.replace(cs, "$1_=" + z);
                        l.url = A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "")
                    }
                }(l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "") : l.accepts["*"]);
                for (k in l.headers) {
                    x.setRequestHeader(k, l.headers[k])
                }
                if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
                    w = "abort";
                    for (k in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) {
                        x[k](l[k])
                    }
                    g = cA(cw, l, c, x);
                    if (!g) {
                        y(-1, "No Transport")
                    } else {
                        x.readyState = 1, j && n.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                            x.abort("timeout")
                        }, l.timeout));
                        try {
                            v = 1, g.send(t, y)
                        } catch (B) {
                            if (v < 2) {
                                y(-1, B)
                            } else {
                                throw B
                            }
                        }
                    }
                    return x
                }
                return x.abort()
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
        var cE = [],
            cF = /\?/,
            cG = /(=)\?(?=&|$)|\?\?/,
            cH = p.now();
        p.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = cE.pop() || p.expando + "_" + cH++;
                return this[a] = !0, a
            }
        }), p.ajaxPrefilter("json jsonp", function(c, d, e) {
            var f, g, h, i = c.data,
                j = c.url,
                k = c.jsonp !== !1,
                l = k && cG.test(j),
                m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cG.test(i);
            if (c.dataTypes[0] === "jsonp" || l || m) {
                return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(cG, "$1" + f) : m ? c.data = i.replace(cG, "$1" + f) : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
                    return h || p.error(f + " was not called"), h[0]
                }, c.dataTypes[0] = "json", a[f] = function() {
                    h = arguments
                }, e.always(function() {
                    a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, cE.push(f)), h && p.isFunction(g) && g(h[0]), h = g = b
                }), "script"
            }
        }), p.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(a) {
                    return p.globalEval(a), a
                }
            }
        }), p.ajaxPrefilter("script", function(a) {
            a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), p.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
                return {
                    send: function(f, g) {
                        c = e.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                            if (e || !c.readyState || /loaded|complete/.test(c.readyState)) {
                                c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || g(200, "success")
                            }
                        }, d.insertBefore(c, d.firstChild)
                    },
                    abort: function() {
                        c && c.onload(0, 1)
                    }
                }
            }
        });
        var cI, cJ = a.ActiveXObject ? function() {
                for (var a in cI) {
                    cI[a](0, 1)
                }
            } : !1,
            cK = 0;
        p.ajaxSettings.xhr = a.ActiveXObject ? function() {
                return !this.isLocal && cL() || cM()
            } : cL,
            function(a) {
                p.extend(p.support, {
                    ajax: !!a,
                    cors: !!a && "withCredentials" in a
                })
            }(p.ajaxSettings.xhr()), p.support.ajax && p.ajaxTransport(function(c) {
                if (!c.crossDomain || p.support.cors) {
                    var d;
                    return {
                        send: function(e, f) {
                            var g, h, i = c.xhr();
                            c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                            if (c.xhrFields) {
                                for (h in c.xhrFields) {
                                    i[h] = c.xhrFields[h]
                                }
                            }
                            c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (h in e) {
                                    i.setRequestHeader(h, e[h])
                                }
                            } catch (j) {}
                            i.send(c.hasContent && c.data || null), d = function(a, e) {
                                var h, j, k, l, m;
                                try {
                                    if (d && (e || i.readyState === 4)) {
                                        d = b, g && (i.onreadystatechange = p.noop, cJ && delete cI[g]);
                                        if (e) {
                                            i.readyState !== 4 && i.abort()
                                        } else {
                                            h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                            try {
                                                l.text = i.responseText
                                            } catch (a) {}
                                            try {
                                                j = i.statusText
                                            } catch (n) {
                                                j = ""
                                            }!h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
                                        }
                                    }
                                } catch (o) {
                                    e || f(-1, o)
                                }
                                l && f(h, j, l, k)
                            }, c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cK, cJ && (cI || (cI = {}, p(a).unload(cJ)), cI[g] = d), i.onreadystatechange = d) : d()
                        },
                        abort: function() {
                            d && d(0, 1)
                        }
                    }
                }
            });
        var cN, cO, cP = /^(?:toggle|show|hide)$/,
            cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
            cR = /queueHooks$/,
            cS = [cY],
            cT = {
                "*": [function(a, b) {
                    var c, d, e = this.createTween(a, b),
                        f = cQ.exec(b),
                        g = e.cur(),
                        h = +g || 0,
                        i = 1,
                        j = 20;
                    if (f) {
                        c = +f[2], d = f[3] || (p.cssNumber[a] ? "" : "px");
                        if (d !== "px" && h) {
                            h = p.css(e.elem, a, !0) || c || 1;
                            do {
                                i = i || ".5", h = h / i, p.style(e.elem, a, h + d)
                            } while (i !== (i = e.cur() / g) && i !== 1 && --j)
                        }
                        e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
                    }
                    return e
                }]
            };
        p.Animation = p.extend(cW, {
            tweener: function(a, b) {
                p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                var c, d = 0,
                    e = a.length;
                for (; d < e; d++) {
                    c = a[d], cT[c] = cT[c] || [], cT[c].unshift(b)
                }
            },
            prefilter: function(a, b) {
                b ? cS.unshift(a) : cS.push(a)
            }
        }), p.Tween = cZ, cZ.prototype = {
            constructor: cZ,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (p.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = cZ.propHooks[this.prop];
                return a && a.get ? a.get(this) : cZ.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = cZ.propHooks[this.prop];
                return this.options.duration ? this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : cZ.propHooks._default.set(this), this
            }
        }, cZ.prototype.init.prototype = cZ.prototype, cZ.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
                },
                set: function(a) {
                    p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, p.each(["toggle", "show", "hide"], function(a, b) {
            var c = p.fn[b];
            p.fn[b] = function(d, e, f) {
                return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(c$(b, !0), d, e, f)
            }
        }), p.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(bZ).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = p.isEmptyObject(a),
                    f = p.speed(b, c, d),
                    g = function() {
                        var b = cW(this, p.extend({}, a), f);
                        e && b.stop(!0)
                    };
                return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, c, d) {
                var e = function(a) {
                    var b = a.stop;
                    delete a.stop, b(d)
                };
                return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        c = a != null && a + "queueHooks",
                        f = p.timers,
                        g = p._data(this);
                    if (c) {
                        g[c] && g[c].stop && e(g[c])
                    } else {
                        for (c in g) {
                            g[c] && g[c].stop && cR.test(c) && e(g[c])
                        }
                    }
                    for (c = f.length; c--;) {
                        f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1))
                    }(b || !d) && p.dequeue(this, a)
                })
            }
        }), p.each({
            slideDown: c$("show"),
            slideUp: c$("hide"),
            slideToggle: c$("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            p.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), p.speed = function(a, b, c) {
            var d = a && typeof a == "object" ? p.extend({}, a) : {
                complete: c || !c && b || p.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !p.isFunction(b) && b
            };
            d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
            if (d.queue == null || d.queue === !0) {
                d.queue = "fx"
            }
            return d.old = d.complete, d.complete = function() {
                p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue)
            }, d
        }, p.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return 0.5 - Math.cos(a * Math.PI) / 2
            }
        }, p.timers = [], p.fx = cZ.prototype.init, p.fx.tick = function() {
            var a, b = p.timers,
                c = 0;
            for (; c < b.length; c++) {
                a = b[c], !a() && b[c] === a && b.splice(c--, 1)
            }
            b.length || p.fx.stop()
        }, p.fx.timer = function(a) {
            a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.interval = 13, p.fx.stop = function() {
            clearInterval(cO), cO = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fx.step = {}, p.expr && p.expr.filters && (p.expr.filters.animated = function(a) {
            return p.grep(p.timers, function(b) {
                return a === b.elem
            }).length
        });
        var c_ = /^(?:body|html)$/i;
        p.fn.offset = function(a) {
            if (arguments.length) {
                return a === b ? this : this.each(function(b) {
                    p.offset.setOffset(this, a, b)
                })
            }
            var c, d, e, f, g, h, i, j = {
                    top: 0,
                    left: 0
                },
                k = this[0],
                l = k && k.ownerDocument;
            if (!l) {
                return
            }
            return (d = l.body) === k ? p.offset.bodyOffset(k) : (c = l.documentElement, p.contains(c, k) ? (typeof k.getBoundingClientRect != "undefined" && (j = k.getBoundingClientRect()), e = da(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
                top: j.top + h - f,
                left: j.left + i - g
            }) : j)
        }, p.offset = {
            bodyOffset: function(a) {
                var b = a.offsetTop,
                    c = a.offsetLeft;
                return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0), {
                    top: b,
                    left: c
                }
            },
            setOffset: function(a, b, c) {
                var d = p.css(a, "position");
                d === "static" && (a.style.position = "relative");
                var e = p(a),
                    f = e.offset(),
                    g = p.css(a, "top"),
                    h = p.css(a, "left"),
                    i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1,
                    j = {},
                    k = {},
                    l, m;
                i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), p.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
            }
        }, p.fn.extend({
            position: function() {
                if (!this[0]) {
                    return
                }
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = c_.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                return c.top -= parseFloat(p.css(a, "marginTop")) || 0, c.left -= parseFloat(p.css(a, "marginLeft")) || 0, d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0, {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent || e.body;
                    while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static") {
                        a = a.offsetParent
                    }
                    return a || e.body
                })
            }
        }), p.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, c) {
            var d = /Y/.test(c);
            p.fn[a] = function(e) {
                return p.access(this, function(a, e, f) {
                    var g = da(a);
                    if (f === b) {
                        return g ? c in g ? g[c] : g.document.documentElement[e] : a[e]
                    }
                    g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f
                }, a, e, arguments.length, null)
            }
        }), p.each({
            Height: "height",
            Width: "width"
        }, function(a, c) {
            p.each({
                padding: "inner" + a,
                content: c,
                "": "outer" + a
            }, function(d, e) {
                p.fn[e] = function(e, f) {
                    var g = arguments.length && (d || typeof e != "boolean"),
                        h = d || (e === !0 || f === !0 ? "margin" : "border");
                    return p.access(this, function(c, d, e) {
                        var f;
                        return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
                    }, c, g ? e : b, g, null)
                }
            })
        }), a.jQuery = a.$ = p, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return p
        })
    })(window);
    (function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    })(function(e) {
        function t(t, s) {
            var n, a, o, r = t.nodeName.toLowerCase();
            return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
        }

        function i(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                return "hidden" === e.css(this, "visibility")
            }).length
        }
        e.ui = e.ui || {}, e.extend(e.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            scrollParent: function(t) {
                var i = this.css("position"),
                    s = "absolute" === i,
                    n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    a = this.parents().filter(function() {
                        var t = e(this);
                        return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var e = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++e)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(i) {
                    return !!e.data(i, t)
                }
            }) : function(t, i, s) {
                return !!e.data(t, s[3])
            },
            focusable: function(i) {
                return t(i, !isNaN(e.attr(i, "tabindex")))
            },
            tabbable: function(i) {
                var s = e.attr(i, "tabindex"),
                    n = isNaN(s);
                return (n || s >= 0) && t(i, !n)
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
            function s(t, i, s, a) {
                return e.each(n, function() {
                    i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), i
            }
            var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                a = i.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + i] = function(t) {
                return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
                    e(this).css(a, s(this, t) + "px")
                })
            }, e.fn["outer" + i] = function(t, n) {
                return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                    e(this).css(a, s(this, t, !0, n) + "px")
                })
            }
        }), e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
            return function(i) {
                return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
            focus: function(t) {
                return function(i, s) {
                    return "number" == typeof i ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            e(t).focus(), s && s.call(t)
                        }, i)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            disableSelection: function() {
                var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(e + ".ui-disableSelection", function(e) {
                        e.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(t) {
                if (void 0 !== t) {
                    return this.css("zIndex", t)
                }
                if (this.length) {
                    for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                        if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) {
                            return s
                        }
                        n = n.parent()
                    }
                }
                return 0
            }
        }), e.ui.plugin = {
            add: function(t, i, s) {
                var n, a = e.ui[t].prototype;
                for (n in s) {
                    a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
                }
            },
            call: function(e, t, i, s) {
                var n, a = e.plugins[t];
                if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) {
                    for (n = 0; a.length > n; n++) {
                        e.options[a[n][0]] && a[n][1].apply(e.element, i)
                    }
                }
            }
        };
        var s = 0,
            n = Array.prototype.slice;
        e.cleanData = function(t) {
            return function(i) {
                var s, n, a;
                for (a = 0; null != (n = i[a]); a++) {
                    try {
                        s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
                    } catch (o) {}
                }
                t(i)
            }
        }(e.cleanData), e.widget = function(t, i, s) {
            var n, a, o, r, h = {},
                l = t.split(".")[0];
            return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
                return !!e.data(t, n)
            }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) {
                return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
            }, e.extend(o, a, {
                version: s.version,
                _proto: e.extend({}, s),
                _childConstructors: []
            }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) {
                return e.isFunction(s) ? (h[t] = function() {
                    var e = function() {
                            return i.prototype[t].apply(this, arguments)
                        },
                        n = function(e) {
                            return i.prototype[t].apply(this, e)
                        };
                    return function() {
                        var t, i = this._super,
                            a = this._superApply;
                        return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                    }
                }(), void 0) : (h[t] = s, void 0)
            }), o.prototype = e.widget.extend(r, {
                widgetEventPrefix: a ? r.widgetEventPrefix || t : t
            }, h, {
                constructor: o,
                namespace: l,
                widgetName: t,
                widgetFullName: n
            }), a ? (e.each(a._childConstructors, function(t, i) {
                var s = i.prototype;
                e.widget(s.namespace + "." + s.widgetName, o, i._proto)
            }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
        }, e.widget.extend = function(t) {
            for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++) {
                for (i in a[o]) {
                    s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s)
                }
            }
            return t
        }, e.widget.bridge = function(t, i) {
            var s = i.prototype.widgetFullName || t;
            e.fn[t] = function(a) {
                var o = "string" == typeof a,
                    r = n.call(arguments, 1),
                    h = this;
                return o ? this.each(function() {
                    var i, n = e.data(this, s);
                    return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
                }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function() {
                    var t = e.data(this, s);
                    t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
                })), h
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(t, i) {
                i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === i && this.destroy()
                    }
                }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(t, i) {
                var s, n, a, o = t;
                if (0 === arguments.length) {
                    return e.widget.extend({}, this.options)
                }
                if ("string" == typeof t) {
                    if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                        for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) {
                            n[s[a]] = n[s[a]] || {}, n = n[s[a]]
                        }
                        if (t = s.pop(), 1 === arguments.length) {
                            return void 0 === n[t] ? null : n[t]
                        }
                        n[t] = i
                    } else {
                        if (1 === arguments.length) {
                            return void 0 === this.options[t] ? null : this.options[t]
                        }
                        o[t] = i
                    }
                }
                return this._setOptions(o), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) {
                    this._setOption(t, e[t])
                }
                return this
            },
            _setOption: function(e, t) {
                return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(t, i, s) {
                var n, a = this;
                "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
                    function r() {
                        return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                    }
                    "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                    var h = s.match(/^([\w:-]*)\s*(.*)$/),
                        l = h[1] + a.eventNamespace,
                        u = h[2];
                    u ? n.delegate(u, l, r) : i.bind(l, r)
                })
            },
            _off: function(t, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function(e, t) {
                function i() {
                    return ("string" == typeof e ? s[e] : e).apply(s, arguments)
                }
                var s = this;
                return setTimeout(i, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        e(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(t) {
                        e(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        e(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(t) {
                        e(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(t, i, s) {
                var n, a, o = this.options[t];
                if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) {
                    for (n in a) {
                        n in i || (i[n] = a[n])
                    }
                }
                return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, i) {
            e.Widget.prototype["_" + t] = function(s, n, a) {
                "string" == typeof n && (n = {
                    effect: n
                });
                var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
                n = n || {}, "number" == typeof n && (n = {
                    duration: n
                }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
                    e(this)[t](), a && a.call(s[0]), i()
                })
            }
        }), e.widget;
        var a = !1;
        e(document).mouseup(function() {
            a = !1
        }), e.widget("ui.mouse", {
            version: "1.11.4",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function(i) {
                    return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (!a) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var i = this,
                        s = 1 === t.which,
                        n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        i.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                        return i._mouseMove(e)
                    }, this._mouseUpDelegate = function(e) {
                        return i._mouseUp(e)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
                }
            },
            _mouseMove: function(t) {
                if (this._mouseMoved) {
                    if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) {
                        return this._mouseUp(t)
                    }
                    if (!t.which) {
                        return this._mouseUp(t)
                    }
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
            },
            _mouseDistanceMet: function(e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }), e.widget("ui.draggable", e.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(e, t) {
                this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
            },
            _mouseCapture: function(t) {
                var i = this.options;
                return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
            },
            _blockFrames: function(t) {
                this.iframeBlocks = this.document.find(t).map(function() {
                    var t = e(this);
                    return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(t) {
                var i = this.document[0];
                if (this.handleElement.is(t.target)) {
                    try {
                        i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
                    } catch (s) {}
                }
            },
            _mouseStart: function(t) {
                var i = this.options;
                return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return "fixed" === e(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
            },
            _refreshOffsets: function(e) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                }
            },
            _mouseDrag: function(t, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var s = this._uiHash();
                    if (this._trigger("drag", t, s) === !1) {
                        return this._mouseUp({}), !1
                    }
                    this.position = s.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var i = this,
                    s = !1;
                return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    i._trigger("stop", t) !== !1 && i._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1
            },
            _mouseUp: function(t) {
                return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this.handleElement.removeClass("ui-draggable-handle")
            },
            _createHelper: function(t) {
                var i = this.options,
                    s = e.isFunction(i.helper),
                    n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _isRootNode: function(e) {
                return /(html|body)/i.test(e.tagName) || e === this.document[0]
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(),
                    i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) {
                    return {
                        top: 0,
                        left: 0
                    }
                }
                var e = this.element.position(),
                    t = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, i, s, n = this.options,
                    a = this.document[0];
                return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
            },
            _convertPositionTo: function(e, t) {
                t || (t = this.position);
                var i = "absolute" === e ? 1 : -1,
                    s = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                    left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(e, t) {
                var i, s, n, a, o = this.options,
                    r = this._isRootNode(this.scrollParent[0]),
                    h = e.pageX,
                    l = e.pageY;
                return r && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
                    top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                    left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _normalizeRightBottom: function() {
                "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
            },
            _trigger: function(t, i, s) {
                return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), e.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, i, s) {
                var n = e.extend({}, i, {
                    item: s.element
                });
                s.sortables = [], e(s.options.connectToSortable).each(function() {
                    var i = e(this).sortable("instance");
                    i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n))
                })
            },
            stop: function(t, i, s) {
                var n = e.extend({}, i, {
                    item: s.element
                });
                s.cancelHelperRemoval = !1, e.each(s.sortables, function() {
                    var e = this;
                    e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                        position: e.placeholder.css("position"),
                        top: e.placeholder.css("top"),
                        left: e.placeholder.css("left")
                    }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n))
                })
            },
            drag: function(t, i, s) {
                e.each(s.sortables, function() {
                    var n = !1,
                        a = this;
                    a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function() {
                        return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n
                    })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function() {
                        return i.helper[0]
                    }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function() {
                        this.refreshPositions()
                    }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), e.ui.plugin.add("draggable", "cursor", {
            start: function(t, i, s) {
                var n = e("body"),
                    a = s.options;
                n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
            },
            stop: function(t, i, s) {
                var n = s.options;
                n._cursor && e("body").css("cursor", n._cursor)
            }
        }), e.ui.plugin.add("draggable", "opacity", {
            start: function(t, i, s) {
                var n = e(i.helper),
                    a = s.options;
                n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
            },
            stop: function(t, i, s) {
                var n = s.options;
                n._opacity && e(i.helper).css("opacity", n._opacity)
            }
        }), e.ui.plugin.add("draggable", "scroll", {
            start: function(e, t, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function(t, i, s) {
                var n = s.options,
                    a = !1,
                    o = s.scrollParentNotHidden[0],
                    r = s.document[0];
                o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
            }
        }), e.ui.plugin.add("draggable", "snap", {
            start: function(t, i, s) {
                var n = s.options;
                s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                    var t = e(this),
                        i = t.offset();
                    this !== s.element[0] && s.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function(t, i, s) {
                var n, a, o, r, h, l, u, d, c, p, f = s.options,
                    m = f.snapTolerance,
                    g = i.offset.left,
                    v = g + s.helperProportions.width,
                    y = i.offset.top,
                    b = y + s.helperProportions.height;
                for (c = s.snapElements.length - 1; c >= 0; c--) {
                    h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {
                        snapItem: s.snapElements[c].item
                    })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
                        top: u - s.helperProportions.height,
                        left: 0
                    }).top), a && (i.position.top = s._convertPositionTo("relative", {
                        top: d,
                        left: 0
                    }).top), o && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: h - s.helperProportions.width
                    }).left), r && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: l
                    }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
                        top: u,
                        left: 0
                    }).top), a && (i.position.top = s._convertPositionTo("relative", {
                        top: d - s.helperProportions.height,
                        left: 0
                    }).top), o && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left), r && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: l - s.helperProportions.width
                    }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {
                        snapItem: s.snapElements[c].item
                    })), s.snapElements[c].snapping = n || a || o || r || p)
                }
            }
        }), e.ui.plugin.add("draggable", "stack", {
            start: function(t, i, s) {
                var n, a = s.options,
                    o = e.makeArray(e(a.stack)).sort(function(t, i) {
                        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                    });
                o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function(t) {
                    e(this).css("zIndex", n + t)
                }), this.css("zIndex", n + o.length))
            }
        }), e.ui.plugin.add("draggable", "zIndex", {
            start: function(t, i, s) {
                var n = e(i.helper),
                    a = s.options;
                n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
            },
            stop: function(t, i, s) {
                var n = s.options;
                n._zIndex && e(i.helper).css("zIndex", n._zIndex)
            }
        }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(e) {
                return parseInt(e, 10) || 0
            },
            _isNumber: function(e) {
                return !isNaN(parseInt(e, 10))
            },
            _hasScroll: function(t, i) {
                if ("hidden" === e(t).css("overflow")) {
                    return !1
                }
                var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                    n = !1;
                return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
            },
            _create: function() {
                var t, i, s, n, a, o = this,
                    r = this.options;
                if (this.element.addClass("ui-resizable"), e.extend(this, {
                        _aspectRatio: !!r.aspectRatio,
                        aspectRatio: r.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this._handles = e(), this.handles.constructor === String) {
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) {
                        s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
                            zIndex: r.zIndex
                        }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n)
                    }
                }
                this._renderAxis = function(t) {
                    var i, s, n, a;
                    t = t || this.element;
                    for (i in this.handles) {
                        this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], {
                            mousedown: o._mouseDown
                        })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                    }
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
                    o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
                }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
                }).mouseleave(function() {
                    r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, i = function(t) {
                    e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left")
                }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _mouseCapture: function(t) {
                var i, s, n = !1;
                for (i in this.handles) {
                    s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0)
                }
                return !this.options.disabled && n
            },
            _mouseStart: function(t) {
                var i, s, n, a = this.options,
                    o = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: i,
                    top: s
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.originalSize = this._helper ? {
                    width: o.outerWidth(),
                    height: o.outerHeight()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.sizeDiff = {
                    width: o.outerWidth() - o.width(),
                    height: o.outerHeight() - o.height()
                }, this.originalPosition = {
                    left: i,
                    top: s
                }, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var i, s, n = this.originalMousePosition,
                    a = this.axis,
                    o = t.pageX - n.left || 0,
                    r = t.pageY - n.top || 0,
                    h = this._change[a];
                return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var i, s, n, a, o, r, h, l = this.options,
                    u = this;
                return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
                    width: u.helper.width() - a,
                    height: u.helper.height() - n
                }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
                    top: h,
                    left: r
                })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var e = {};
                return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
            },
            _updateVirtualBoundaries: function(e) {
                var t, i, s, n, a, o = this.options;
                a = {
                    minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                    maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                    minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                    maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
                }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a
            },
            _updateCache: function(e) {
                this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
            },
            _updateRatio: function(e) {
                var t = this.position,
                    i = this.size,
                    s = this.axis;
                return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
            },
            _respectSize: function(e) {
                var t = this._vBoundaries,
                    i = this.axis,
                    s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                    n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                    a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                    o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                    r = this.originalPosition.left + this.originalSize.width,
                    h = this.position.top + this.size.height,
                    l = /sw|nw|w/.test(i),
                    u = /nw|ne|n/.test(i);
                return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
            },
            _getPaddingPlusBorderDimensions: function(e) {
                for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) {
                    i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0
                }
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length) {
                    for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) {
                        e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                            height: i.height() - this.outerDimensions.height || 0,
                            width: i.width() - this.outerDimensions.width || 0
                        })
                    }
                }
            },
            _renderProxy: function() {
                var t = this.element,
                    i = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(e, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function(e, t) {
                    var i = this.originalSize,
                        s = this.originalPosition;
                    return {
                        left: s.left + t,
                        width: i.width - t
                    }
                },
                n: function(e, t, i) {
                    var s = this.originalSize,
                        n = this.originalPosition;
                    return {
                        top: n.top + i,
                        height: s.height - i
                    }
                },
                s: function(e, t, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(t, i, s) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
                },
                sw: function(t, i, s) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
                },
                ne: function(t, i, s) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
                },
                nw: function(t, i, s) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
                }
            },
            _propagate: function(t, i) {
                e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), e.ui.plugin.add("resizable", "animate", {
            stop: function(t) {
                var i = e(this).resizable("instance"),
                    s = i.options,
                    n = i._proportionallyResizeElements,
                    a = n.length && /textarea/i.test(n[0].nodeName),
                    o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                    r = a ? 0 : i.sizeDiff.width,
                    h = {
                        width: i.size.width - r,
                        height: i.size.height - o
                    },
                    l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(e.extend(h, u && l ? {
                    top: u,
                    left: l
                } : {}), {
                    duration: s.animateDuration,
                    easing: s.animateEasing,
                    step: function() {
                        var s = {
                            width: parseInt(i.element.css("width"), 10),
                            height: parseInt(i.element.css("height"), 10),
                            top: parseInt(i.element.css("top"), 10),
                            left: parseInt(i.element.css("left"), 10)
                        };
                        n && n.length && e(n[0]).css({
                            width: s.width,
                            height: s.height
                        }), i._updateCache(s), i._propagate("resize", t)
                    }
                })
            }
        }), e.ui.plugin.add("resizable", "containment", {
            start: function() {
                var t, i, s, n, a, o, r, h = e(this).resizable("instance"),
                    l = h.options,
                    u = h.element,
                    d = l.containment,
                    c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
                c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = {
                    left: 0,
                    top: 0
                }, h.containerPosition = {
                    left: 0,
                    top: 0
                }, h.parentData = {
                    element: e(document),
                    left: 0,
                    top: 0,
                    width: e(document).width(),
                    height: e(document).height() || document.body.parentNode.scrollHeight
                }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, s) {
                    i[e] = h._num(t.css("padding" + s))
                }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = {
                    height: t.innerHeight() - i[3],
                    width: t.innerWidth() - i[1]
                }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = {
                    element: c,
                    left: s.left,
                    top: s.top,
                    width: o,
                    height: r
                }))
            },
            resize: function(t) {
                var i, s, n, a, o = e(this).resizable("instance"),
                    r = o.options,
                    h = o.containerOffset,
                    l = o.position,
                    u = o._aspectRatio || t.shiftKey,
                    d = {
                        top: 0,
                        left: 0
                    },
                    c = o.containerElement,
                    p = !0;
                c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
            },
            stop: function() {
                var t = e(this).resizable("instance"),
                    i = t.options,
                    s = t.containerOffset,
                    n = t.containerPosition,
                    a = t.containerElement,
                    o = e(t.helper),
                    r = o.offset(),
                    h = o.outerWidth() - t.sizeDiff.width,
                    l = o.outerHeight() - t.sizeDiff.height;
                t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                    left: r.left - n.left - s.left,
                    width: h,
                    height: l
                }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                    left: r.left - n.left - s.left,
                    width: h,
                    height: l
                })
            }
        }), e.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = e(this).resizable("instance"),
                    i = t.options;
                e(i.alsoResize).each(function() {
                    var t = e(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            },
            resize: function(t, i) {
                var s = e(this).resizable("instance"),
                    n = s.options,
                    a = s.originalSize,
                    o = s.originalPosition,
                    r = {
                        height: s.size.height - a.height || 0,
                        width: s.size.width - a.width || 0,
                        top: s.position.top - o.top || 0,
                        left: s.position.left - o.left || 0
                    };
                e(n.alsoResize).each(function() {
                    var t = e(this),
                        s = e(this).data("ui-resizable-alsoresize"),
                        n = {},
                        a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(a, function(e, t) {
                        var i = (s[t] || 0) + (r[t] || 0);
                        i && i >= 0 && (n[t] = i || null)
                    }), t.css(n)
                })
            },
            stop: function() {
                e(this).removeData("resizable-alsoresize")
            }
        }), e.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = e(this).resizable("instance"),
                    i = t.options,
                    s = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: 0.25,
                    display: "block",
                    position: "relative",
                    height: s.height,
                    width: s.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = e(this).resizable("instance");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = e(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), e.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t, i = e(this).resizable("instance"),
                    s = i.options,
                    n = i.size,
                    a = i.originalSize,
                    o = i.originalPosition,
                    r = i.axis,
                    h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                    l = h[0] || 1,
                    u = h[1] || 1,
                    d = Math.round((n.width - a.width) / l) * l,
                    c = Math.round((n.height - a.height) / u) * u,
                    p = a.width + d,
                    f = a.height + c,
                    m = s.maxWidth && p > s.maxWidth,
                    g = s.maxHeight && f > s.maxHeight,
                    v = s.minWidth && s.minWidth > p,
                    y = s.minHeight && s.minHeight > f;
                s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = l - t.width, i.size.width = p, i.position.left = o.left + a.width - p))
            }
        }), e.ui.resizable
    });
    LivingActor.JQversion = jQuery.fn.jquery;
    LivingActor.jQuery = jQuery;
    LivingActor.$ = jQuery.noConflict();
    if (savedJQuery != false) {
        jQuery = savedJQuery
    }
    if (savedDols != false) {
        $ = savedDols
    }
    LivingActor.recentBrowser = false;
    var version = LivingActor.$.browser.version;
    if (version) {
        var reg = /^(\d+)\./;
        var split = version.match(reg);
        if (split.length >= 2) {
            version = parseInt(split)
        }
        if ((LivingActor.$.browser.msie && version >= 9) || (LivingActor.$.browser.mozilla && version >= 11) || (LivingActor.$.browser.chrome && version >= 18) || (LivingActor.$.browser.safari && version >= 534)) {
            LivingActor.recentBrowser = true
        }
    }
})();
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof module !== "undefined" && module.exports) {
            module.exports = a(require("jquery"))
        } else {
            a(LivingActor.$)
        }
    }
})(function(d) {
    var a = d.scrollTo = function(g, f, e) {
        return d(window).scrollTo(g, f, e)
    };
    a.defaults = {
        axis: "xy",
        duration: 0,
        limit: true
    };

    function b(e) {
        return !e.nodeName || d.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) !== -1
    }
    d.fn.scrollTo = function(h, g, f) {
        if (typeof g === "object") {
            f = g;
            g = 0
        }
        if (typeof f === "function") {
            f = {
                onAfter: f
            }
        }
        if (h === "max") {
            h = 9000000000
        }
        f = d.extend({}, a.defaults, f);
        g = g || f.duration;
        var e = f.queue && f.axis.length > 1;
        if (e) {
            g /= 2
        }
        f.offset = c(f.offset);
        f.over = c(f.over);
        return this.each(function() {
            if (h === null) {
                return
            }
            var p = b(this),
                o = p ? this.contentWindow || window : this,
                m = d(o),
                n = h,
                j = {},
                l;
            switch (typeof n) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(n)) {
                        n = c(n);
                        break
                    }
                    n = p ? d(n) : d(n, o);
                    if (!n.length) {
                        return
                    }
                case "object":
                    if (n.is || n.style) {
                        l = (n = d(n)).offset()
                    }
            }
            var q = d.isFunction(f.offset) && f.offset(o, n) || f.offset;
            d.each(f.axis.split(""), function(u, v) {
                var x = v === "x" ? "Left" : "Top",
                    z = x.toLowerCase(),
                    t = "scroll" + x,
                    w = m[t](),
                    r = a.max(o, v);
                if (l) {
                    j[t] = l[z] + (p ? 0 : w - m.offset()[z]);
                    if (f.margin) {
                        j[t] -= parseInt(n.css("margin" + x), 10) || 0;
                        j[t] -= parseInt(n.css("border" + x + "Width"), 10) || 0
                    }
                    j[t] += q[z] || 0;
                    if (f.over[z]) {
                        j[t] += n[v === "x" ? "width" : "height"]() * f.over[z]
                    }
                } else {
                    var y = n[z];
                    j[t] = y.slice && y.slice(-1) === "%" ? parseFloat(y) / 100 * r : y
                }
                if (f.limit && /^\d+$/.test(j[t])) {
                    j[t] = j[t] <= 0 ? 0 : Math.min(j[t], r)
                }
                if (!u && f.axis.length > 1) {
                    if (w === j[t]) {
                        j = {}
                    } else {
                        if (e) {
                            k(f.onAfterFirst);
                            j = {}
                        }
                    }
                }
            });
            k(f.onAfter);

            function k(t) {
                var r = d.extend({}, f, {
                    queue: true,
                    duration: g,
                    complete: t && function() {
                        t.call(o, n, f)
                    }
                });
                m.animate(j, r)
            }
        })
    };
    a.max = function(l, k) {
        var j = k === "x" ? "Width" : "Height",
            f = "scroll" + j;
        if (!b(l)) {
            return l[f] - d(l)[j.toLowerCase()]()
        }
        var h = "client" + j,
            m = l.ownerDocument || l.document,
            g = m.documentElement,
            e = m.body;
        return Math.max(g[f], e[f]) - Math.min(g[h], e[h])
    };

    function c(e) {
        return d.isFunction(e) || d.isPlainObject(e) ? e : {
            top: e,
            left: e
        }
    }
    d.Tween.propHooks.scrollLeft = d.Tween.propHooks.scrollTop = {
        get: function(e) {
            return d(e.elem)[e.prop]()
        },
        set: function(e) {
            var g = this.get(e);
            if (e.options.interrupt && e._last && e._last !== g) {
                return d(e.elem).stop()
            }
            var f = Math.round(e.now);
            if (g !== f) {
                d(e.elem)[e.prop](f);
                e._last = this.get(e)
            }
        }
    };
    return a
});
LivingActor.ResourcesLoader = function() {
    this.resourcesList;
    this.loaderlist;
    this.audioOk_onReady = true;
    this.maxParalleleLoad = 3;
    this.defaultMute = false;
    if (LivingActor.Tools.isMobileDevice) {
        this.maxParalleleLoad = 1;
        LivingActor.SoundResources.initMobileObject()
    }
    this._paralleleLoad = 0
};
LivingActor.ResourcesLoader.version = "1.0";
LivingActor.ResourcesLoader.disableSound = false;
LivingActor.ResourcesLoader.prototype = new LivingActor.Events();
LivingActor.ResourcesLoader.prototype.constructor = LivingActor.ResourcesLoader;
LivingActor.ResourcesLoader.TYPE_audio = "audio";
LivingActor.ResourcesLoader.TYPE_video = "video";
LivingActor.ResourcesLoader.TYPE_picture = "picture";
LivingActor.ResourcesLoader.TYPE_other = "other";
LivingActor.ResourcesLoader.EVENT_fileLoaded = "fileLoaded";
LivingActor.ResourcesLoader.EVENT_allFileLoaded = "allFileLoaded";
LivingActor.ResourcesLoader.EVENT_loadError = "loadError";
LivingActor.ResourcesLoader.prototype.activateSound = function() {
    LivingActor.SoundResources.activateMobileSound()
};
LivingActor.ResourcesLoader.prototype.clear = function() {
    this.resourcesList = [];
    this.loaderlist = [];
    this._paralleleLoad = 0
};
LivingActor.ResourcesLoader.prototype.addfile = function(d, b, c) {
    if (!this.resourcesList) {
        this.resourcesList = []
    }
    if (!this.loaderlist) {
        this.loaderlist = []
    }
    switch (b) {
        case LivingActor.ResourcesLoader.TYPE_audio:
            if (LivingActor.ResourcesLoader.disableSound) {
                return
            } else {
                var a = LivingActor.SoundResources.getBestType();
                if (a == false) {
                    return
                }
            }
        case LivingActor.ResourcesLoader.TYPE_video:
        case LivingActor.ResourcesLoader.TYPE_picture:
            break;
        case LivingActor.ResourcesLoader.TYPE_other:
        default:
            b = LivingActor.ResourcesLoader.TYPE_other;
            break
    }
    this.resourcesList.push({
        type: b,
        path: d,
        loaded: false,
        loading: false,
        error: false,
        ref: c
    })
};
LivingActor.ResourcesLoader.prototype.start = function() {
    if (this.resourcesList.length > 0) {
        this._getNext();
        return true
    } else {
        this.warn("LivingActor.ResourcesLoader Nothing to load");
        return false
    }
};
LivingActor.ResourcesLoader.prototype.abort = function() {
    if (this.loaderlist) {
        for (var a = 0; a < this.loaderlist.length; a++) {
            try {
                var c = this.loaderlist[a];
                switch (c.type) {
                    case LivingActor.ResourcesLoader.TYPE_audio:
                        c.loader.unload();
                        break;
                    case LivingActor.ResourcesLoader.TYPE_video:
                        break;
                    case LivingActor.ResourcesLoader.TYPE_picture:
                        c.loader.src = "";
                        break
                }
            } catch (b) {}
        }
    }
    this.clear()
};
LivingActor.ResourcesLoader.prototype._getNext = function() {
    var b = this;
    for (var d = 0; d < this.resourcesList.length; d++) {
        if (this._paralleleLoad >= this.maxParalleleLoad) {
            return
        }
        var c = this.resourcesList[d];
        if (c.loading == false && c.loaded == false && !c.error) {
            c.loading = true;
            switch (c.type) {
                case LivingActor.ResourcesLoader.TYPE_audio:
                    this._paralleleLoad++;
                    var e = new LivingActor.SoundResources();
                    e.addEventListener(LivingActor.SoundResources.EVENT_OnLoad, b, function(h, f, g) {
                        LivingActor.ResourcesLoader.onResourceLoaded(b, h.res, true)
                    });
                    e.addEventListener(LivingActor.SoundResources.EVENT_OnError, b, function(h, f, g) {
                        LivingActor.ResourcesLoader.onResourceLoaded(b, h.res, false)
                    });
                    if (e.load(c, d) === false) {
                        this.sendEvent(c)
                    }
                    c.loader = e;
                    this.loaderlist.push({
                        type: c.type,
                        loader: e
                    });
                    return this._getNext();
                    break;
                case LivingActor.ResourcesLoader.TYPE_video:
                    break;
                case LivingActor.ResourcesLoader.TYPE_picture:
                    this._paralleleLoad++;
                    var a = new Image();
                    a.src = c.path;
                    LivingActor.$(a).bind("load", function() {
                        LivingActor.ResourcesLoader.onResourceLoaded(b, c)
                    });
                    c.loader = a;
                    this.loaderlist.push({
                        type: c.type,
                        loader: a
                    });
                    return this._getNext();
                    break;
                default:
                    break
            }
        }
    }
};
LivingActor.ResourcesLoader.prototype.sendEvent = function(c) {
    this._paralleleLoad -= 1;
    this.dispatchEvent(LivingActor.ResourcesLoader.EVENT_fileLoaded, c, false);
    var b = true;
    for (var a = 0; a < this.resourcesList.length; a++) {
        if (!(this.resourcesList[a].loaded || this.resourcesList[a].error)) {
            b = false
        }
    }
    if (b) {
        this.dispatchEvent(LivingActor.ResourcesLoader.EVENT_allFileLoaded, this.resourcesList, false);
        this.clear()
    } else {
        this._getNext()
    }
};
LivingActor.ResourcesLoader.onResourceLoaded = function(a, b, c) {
    b.loaded = c;
    b.loading = false;
    b.error = !c;
    a.sendEvent(b)
};
LivingActor.SoundResources = function(b) {
    this.type;
    switch (b) {
        case LivingActor.SoundResources.TYPE_HTML5:
        case LivingActor.SoundResources.TYPE_HTML5MOBILE:
        case LivingActor.SoundResources.TYPE_FLASH:
            this.type = b;
            break;
        default:
            this.type = LivingActor.SoundResources.getBestType();
            break
    }
    this.loader = false;
    this.res = false;
    this.swfRef = -1;
    if (LivingActor.Tools.isMobileDevice) {
        LivingActor.SoundResources.initMobileObject()
    }
    var a = false;
    this.isMuted = function() {
        return a
    };
    this.muted = function(c) {
        a = c;
        switch (this.type) {
            case LivingActor.SoundResources.TYPE_HTML5MOBILE:
            case LivingActor.SoundResources.TYPE_HTML5:
                this.loader.muted = c;
                if (c && LivingActor.Tools.isMobileDevice) {
                    this.unload()
                }
                break;
            case LivingActor.SoundResources.TYPE_FLASH:
                if (LivingActor.SoundResources.swfPlayer) {
                    LivingActor.SoundResources.swfPlayer.volume((a) ? 0.001 : 1, this.swfRef)
                }
                break
        }
    }
};
LivingActor.SoundResources.prototype = new LivingActor.Events();
LivingActor.SoundResources.prototype.constructor = LivingActor.SoundResources;
LivingActor.SoundResources.TYPE_HTML5 = "html5";
LivingActor.SoundResources.TYPE_HTML5MOBILE = "mobile";
LivingActor.SoundResources.TYPE_FLASH = "flash";
LivingActor.SoundResources.EVENT_OnLoad = "onLoad";
LivingActor.SoundResources.EVENT_OnError = "onError";
LivingActor.SoundResources.EVENT_OnEnd = "onEnd";
LivingActor.SoundResources.EMPTY_FILE = "a.mp3";
LivingActor.SoundResources.nb_HTLM_object = 7;
LivingActor.SoundResources.soundSwfPlayerLocation = "";
LivingActor.SoundResources.getBestType = function(a) {
    var c = "";
    var b = LivingActor.SoundResources.getCapabilities();
    var d = b.flash;
    if (!a && !b.flashtested) {
        b.flashtested = LivingActor.SoundResources.checkFlashActivated();
        if (b.flashtested) {
            LivingActor.SoundResources._Capabilities.flashtested = b.flashtested
        } else {
            d = false
        }
    }
    if (b.html5mp3 || d) {
        if (b.prefer == "flash") {
            if (d) {
                c = LivingActor.SoundResources.TYPE_FLASH
            } else {
                if (LivingActor.Tools.isMobileDevice) {
                    c = LivingActor.SoundResources.TYPE_HTML5MOBILE
                } else {
                    c = LivingActor.SoundResources.TYPE_HTML5
                }
            }
        } else {
            if (b.html5mp3) {
                if (LivingActor.Tools.isMobileDevice) {
                    c = LivingActor.SoundResources.TYPE_HTML5MOBILE
                } else {
                    c = LivingActor.SoundResources.TYPE_HTML5
                }
            } else {
                c = LivingActor.SoundResources.TYPE_FLASH
            }
        }
    }
    return c
};
LivingActor.SoundResources.prototype.load = function(c, a) {
    var b = this;
    this.res = c;
    var d = null;
    switch (this.type) {
        case LivingActor.SoundResources.TYPE_HTML5MOBILE:
            d = LivingActor.$("audio.livingactoraudio_rl").get(a);
            if (!d) {
                c.error = true;
                return false
            }
            d.defaultMuted = true;
            d.loop = false;
            d.muted = true;
            break;
        case LivingActor.SoundResources.TYPE_HTML5:
            d = new Audio();
            break;
        case LivingActor.SoundResources.TYPE_FLASH:
            if (LivingActor.SoundResources.swfPlayer) {
                d = LivingActor.SoundResources.swfPlayer;
                this.swfRef = LivingActor.SoundResources.swfPlayer.load(c.path);
                LivingActor.SoundResources.MAP[this.swfRef] = this
            }
            break;
        default:
            break
    }
    this.loader = d;
    switch (this.type) {
        case LivingActor.SoundResources.TYPE_HTML5MOBILE:
            LivingActor.$(d).unbind("canplay");
            LivingActor.Tools.addEventListener(d, "canplay", function(e) {
                e.target.pause();
                e.target.currentTime = 0
            });
        case LivingActor.SoundResources.TYPE_HTML5:
            LivingActor.$(d).unbind("canplaythrough");
            LivingActor.Tools.addEventListener(d, "canplaythrough", function(e) {
                if (!c.loaded && !c.error) {
                    e.target.currentTime = 0;
                    e.target.muted = true;
                    b.dispatchEvent(LivingActor.SoundResources.EVENT_OnLoad, {
                        resource: c
                    })
                }
            });
            LivingActor.Tools.addEventListener(d, "error", function(e) {
                if (e.target.src != "a") {
                    b.dispatchEvent(LivingActor.SoundResources.EVENT_OnError, {
                        resource: c
                    })
                }
            });
            d.src = c.path;
            if (this.type == LivingActor.SoundResources.TYPE_HTML5MOBILE) {
                d.load();
                d.play();
                d.pause()
            }
            break;
        case LivingActor.SoundResources.TYPE_FLASH:
            break
    }
    return true
};
LivingActor.SoundResources.prototype.play = function() {
    switch (this.type) {
        case LivingActor.SoundResources.TYPE_HTML5MOBILE:
        case LivingActor.SoundResources.TYPE_HTML5:
            this.loader.play();
            if (!this.isMuted()) {
                this.muted(false)
            }
            break;
        case LivingActor.SoundResources.TYPE_FLASH:
            if (LivingActor.SoundResources.swfPlayer) {
                LivingActor.SoundResources.swfPlayer.play(this.swfRef)
            }
            break
    }
};
LivingActor.SoundResources.prototype.pause = function() {
    switch (this.type) {
        case LivingActor.SoundResources.TYPE_HTML5MOBILE:
        case LivingActor.SoundResources.TYPE_HTML5:
            this.loader.pause();
            break;
        case LivingActor.SoundResources.TYPE_FLASH:
            if (LivingActor.SoundResources.swfPlayer) {
                LivingActor.SoundResources.swfPlayer.pause(this.swfRef)
            }
            break
    }
};
LivingActor.SoundResources.prototype.stop = function() {
    switch (this.type) {
        case LivingActor.SoundResources.TYPE_HTML5MOBILE:
            try {
                this.loader.noteOff(0)
            } catch (a) {}
            break;
        case LivingActor.SoundResources.TYPE_HTML5:
            this.loader.pause();
            this.loader.currentTime = 0;
            break;
        case LivingActor.SoundResources.TYPE_FLASH:
            if (LivingActor.SoundResources.swfPlayer) {
                LivingActor.SoundResources.swfPlayer.stop(this.swfRef)
            }
            break
    }
};
LivingActor.SoundResources.prototype.unload = function() {
    switch (this.type) {
        case LivingActor.SoundResources.TYPE_HTML5MOBILE:
            if (this.loader) {
                LivingActor.$(this.loader).remove()
            }
            LivingActor.SoundResources.addMobileObject(1);
            break;
        case LivingActor.SoundResources.TYPE_HTML5:
            if (this.loader) {
                this.loader = null
            }
            break;
        case LivingActor.SoundResources.TYPE_FLASH:
            if (LivingActor.SoundResources.swfPlayer) {
                LivingActor.SoundResources.swfPlayer.unload(this.swfRef)
            }
            break
    }
};
LivingActor.SoundResources.prototype.seek = function(b) {
    switch (this.type) {
        case LivingActor.SoundResources.TYPE_HTML5MOBILE:
        case LivingActor.SoundResources.TYPE_HTML5:
            try {
                this.loader.noteOff(b)
            } catch (a) {}
            this.loader.currentTime = b;
            break;
        case LivingActor.SoundResources.TYPE_FLASH:
            if (LivingActor.SoundResources.swfPlayer) {
                this.LivingActor.SoundResources.swfPlayer.seek(b, this.swfRef)
            }
            break
    }
};
LivingActor.SoundResources.activateMobileSound = function() {
    var a = LivingActor.$("#LivingActorAudio .livingactoraudio_rl.livingactoraudio_notactivated");
    a.each(function() {
        try {
            LivingActor.$(this).get(0).src = LivingActor.SoundResources.EMPTY_FILE;
            LivingActor.$(this).get(0).load();
            LivingActor.$(this).get(0).play();
            LivingActor.$(this).removeClass("livingactoraudio_notactivated")
        } catch (b) {}
    })
};
LivingActor.SoundResources.initMobileObject = function() {
    if (LivingActor.$("#LivingActorAudio").length <= 0) {
        LivingActor.SoundResources.addMobileObject(LivingActor.SoundResources.nb_HTLM_object)
    }
};
LivingActor.SoundResources.addMobileObject = function(c) {
    if (LivingActor.$("#LivingActorAudio").length <= 0) {
        LivingActor.SoundResources.soundToActivated = [];
        LivingActor.$("body").append("<div id='LivingActorAudio' style='display:none'></div>")
    }
    for (var b = 0; b < c; b++) {
        var a = LivingActor.$("<audio class='livingactoraudio_rl livingactoraudio_notactivated' src='" + LivingActor.SoundResources.EMPTY_FILE + "' controls></audio>");
        LivingActor.$("#LivingActorAudio").append(a)
    }
};
LivingActor.SoundResources.swfPlayer = null;
LivingActor.SoundResources.MAP = null;
LivingActor.SoundResources.initSWFPlayer = function() {
    var a = LivingActor.SoundResources.getBestType(true);
    if (a == LivingActor.SoundResources.TYPE_FLASH && !LivingActor.SoundResources.swfPlayer) {
        var b = function() {
            LivingActor.SoundResources.MAP = [];
            LivingActor.SoundResources.swfPlayer = new LA_AudioPlayerLite();
            LivingActor.SoundResources.swfPlayer.embed(LivingActor.SoundResources.soundSwfPlayerLocation, LivingActor.$);
            LivingActor.SoundResources.swfPlayer.onLoaded = function(c) {
                if (LivingActor.SoundResources.MAP[c]) {
                    var d = LivingActor.SoundResources.MAP[c];
                    d.dispatchEvent(LivingActor.SoundResources.EVENT_OnLoad, {
                        resource: d.res
                    })
                }
            };
            LivingActor.SoundResources.swfPlayer.onError = function(c) {
                if (LivingActor.SoundResources.MAP[c]) {
                    var d = LivingActor.SoundResources.MAP[c];
                    d.dispatchEvent(LivingActor.SoundResources.EVENT_OnError, {
                        resource: d.res
                    })
                }
            };
            LivingActor.SoundResources.swfPlayer.onEnd = function(c) {
                if (LivingActor.SoundResources.MAP[c]) {
                    var d = LivingActor.SoundResources.MAP[c];
                    d.dispatchEvent(LivingActor.SoundResources.EVENT_OnEnd, {
                        resource: d.res
                    })
                }
            }
        };
        (b)()
    }
};
LivingActor.SoundResources.checkFlashActivated = function() {
    if (LivingActor.SoundResources.swfPlayer) {
        try {
            LivingActor.SoundResources.swfPlayer.AS_TLCommand("test");
            return true
        } catch (a) {
            return false
        }
    }
    return false
};
LivingActor.SoundResources._Capabilities = null;
LivingActor.SoundResources.getCapabilities = function() {
    if (!LivingActor.SoundResources._Capabilities) {
        var b = "flash";
        if (LivingActor.$.browser.chrome || LivingActor.$.browser.safari) {
            b = "html5"
        }
        var a = LivingActor.Tools.getFlashVersion();
        var g = false;
        var f = false;
        try {
            var d = new Audio();
            g = (d) ? true : false;
            f = !(d.canPlayType("audio/mp3") === "" || d.canPlayType("audio/mpeg") === "")
        } catch (c) {
            g = false;
            f = false
        }
        if (LivingActor.$.browser.msie && navigator && navigator.userAgent && navigator.userAgent.match(/android/i)) {
            f = false;
            g = false;
            a = false
        }
        LivingActor.SoundResources._Capabilities = {
            flash: (a !== false),
            flashtested: false,
            html5: g,
            html5mp3: f,
            prefer: b
        }
    }
    return LivingActor.SoundResources._Capabilities
};
LivingActor.Sequencer = function() {
    var c = [];
    var a = 0;
    var g = 0;
    var f = false;
    var h = true;
    var e = true;
    var d = 0;
    this.currentSequence;
    this.fps = LivingActor.Tools.isMobileDevice ? 15 : 30;
    this.analyseFct = [];
    this.addBlockParseFct = function(j) {
        this.analyseFct.push(j)
    };
    this.isPlaying = function() {
        return !h
    };
    this.stop = function() {
        h = true;
        e = false;
        d = 0;
        if (f != false) {
            clearTimeout(f)
        }
    };
    this.setAvatar = function(j) {
        if (!LivingActor.Tools.inArray(c, j)) {
            c.push(j)
        }
    };
    this.getAvatarList = function() {
        return c
    };
    this.clearAvatarList = function() {
        c = []
    };
    this.pause = function() {
        if (!e) {
            d = (g - a) / 1000;
            e = true;
            if (f != false) {
                clearTimeout(f)
            }
        }
    };
    this.resume = function() {
        if (e) {
            this.playSequence(this.currentSequence, d)
        }
    };
    this.isPaused = function() {
        return e
    };
    this.playSequence = function(l, j) {
        if (!j) {
            j = 0
        }
        if (!h) {
            this.stop()
        }
        e = false;
        d = 0;
        for (var k = 0; k < c.length; k++) {
            c[k].stop()
        }
        this.currentSequence = l;
        a = (new Date()).getTime() - (j * 1000);
        LivingActor.Sequencer.timeCumul = 0;
        LivingActor.Sequencer.timecount = 0;
        g = (new Date()).getTime();
        h = false;
        if (j <= 0) {
            this.dispatchEvent(LivingActor.Sequencer.EVENT_start, {
                sequence: l
            }, false)
        }
        b(this)
    };
    this.analyseData = function(r, m) {
        var t = false;
        var p = true;
        var q = false;
        for (var o = 0; o < r.length; o++) {
            var k = r[o];
            var l = m - k.timeoffset();
            switch (k.types()) {
                case "GoReturn":
                    t = true;
                    for (var n = 0; n < c.length; n++) {
                        var j = k.parameter("name");
                        if (!j) {
                            j = k.parameter("to")
                        }
                        c[n].gotoAndStop(l, j, k.duration())
                    }
                    break;
                case "NoSpeak":
                    p = false;
                    break;
                case "Voice":
                case "Text":
                    q = true;
                    break;
                default:
                    break
            }
        }
        for (var n = 0; n < c.length; n++) {
            c[n].enableSpeak(p && q);
            if (!t) {
                if (p && q) {
                    c[n].gotoAndStop(m, LivingActor.Avatar.RESTPOSE, -1)
                } else {
                    c[n].gotoRestpose()
                }
            }
        }
    };
    var b = function(n) {
        if (n.currentSequence) {
            var l = g;
            g = (new Date()).getTime();
            var k = (g - a - d) / 1000;
            LivingActor.Sequencer.timeCumul += g - l;
            LivingActor.Sequencer.timecount++;
            var m = n.currentSequence.play(k, k);
            n.analyseData(m, k);
            for (var j = 0; j < n.analyseFct.length; j++) {
                if (typeof(n.analyseFct[j]) == "function") {
                    (n.analyseFct[j])(m, k)
                }
            }
            if (!h && k <= n.currentSequence.duration()) {
                f = setTimeout(function() {
                    b(n)
                }, 1000 / n.fps)
            } else {
                n.dispatchEvent(LivingActor.Sequencer.EVENT_end, {
                    sequence: n.currentSequence
                }, false)
            }
        }
    }
};
LivingActor.Sequencer.version = "1.0";
LivingActor.Sequencer.prototype = new LivingActor.Events();
LivingActor.Sequencer.prototype.constructor = LivingActor.Sequencer;
LivingActor.Sequencer.EVENT_end = "end";
LivingActor.Sequencer.EVENT_start = "start";
LivingActor.Sequencer.TYPE_audio = "audio";
LivingActor.Sequencer.timeCumul = 0;
LivingActor.Sequencer.timecount = 0;
LivingActor.Sequencer.getCurrentRealFPS = function() {
    if (LivingActor.Sequencer.timecount <= 0) {
        return false
    }
    return Math.round(100 * 1000 / (LivingActor.Sequencer.timeCumul / LivingActor.Sequencer.timecount)) / 100
};
LivingActor.Sequencer.extractResources = function(e) {
    var g = [];
    if (e) {
        var j = e.getTrackList();
        for (var b = 0; b < j.length; b++) {
            var c = j[b];
            var a = c.getBlocks();
            for (var h = 0; h < a.length; h++) {
                var f = a[h];
                switch (f.types()) {
                    case "Voice":
                        var d = f.parameter("children");
                        if (d) {
                            g.push({
                                type: LivingActor.Sequencer.TYPE_audio,
                                file: d,
                                blockid: f.id()
                            })
                        }
                        break
                }
            }
        }
    }
    return g
};
LivingActor.Sequencer.prototype.destructor = function() {
    LivingActor.Events.prototype.destructor.call(this)
};
LivingActor.Sequencer_parser = function() {};
LivingActor.Sequencer_parser.version = "1.0";
LivingActor.Sequencer_parser.prototype = new LivingActor.Events();
LivingActor.Sequencer_parser.prototype.constructor = LivingActor.Sequencer_parser;
LivingActor.Sequencer_parser.prototype.destructor = function() {
    LivingActor.Events.prototype.destructor.call(this)
};
LivingActor.Sequencer_parser.prototype.parseXML = function(c) {
    var m = new Array();
    if (c) {
        var C = {};
        var x = (LivingActor.$.browser.msie && LivingActor.$.browser.version < 9);
        if (typeof(c) == "string") {
            c = new LivingActor.Xml(c)
        }
        var d = c.find(".Sequence");
        for (var e = 0; e < d.length; e++) {
            var o = d[e];
            var k = new LivingActor.Sequence(o.getAttribute("name"));
            k.parameter("session_id", o.getAttribute("session_id"));
            k.parameter("hasAlerte", o.getAttribute("hasAlerte"));
            k.parameter("mntring", o.getAttribute("mntring"));
            for (var w = 0; w < o.attributes.length; w++) {
                var v = o.attributes[w].name;
                var z = o.attributes[w].value;
                switch (v) {
                    case "timeOffset":
                    case "duration":
                    case "name":
                        break;
                    default:
                        k.parameter(v, z);
                        break
                }
            }
            var y = c.find(".Track", o);
            if (y.length > 0) {
                for (var f = 0; f < y.length; f++) {
                    var j = y[f];
                    var t = new LivingActor.Track(j.getAttribute("type"));
                    for (var w = 0; w < j.attributes.length; w++) {
                        var v = j.attributes[w].name;
                        var z = j.attributes[w].value;
                        if (v != "type") {
                            t.parameter(v, z)
                        }
                    }
                    var B = c.find(".*", j);
                    for (var r = 0; r < B.length; r++) {
                        var A = B[r];
                        var b = A.getAttribute("type");
                        if (b == null) {
                            b = A.nodeName
                        }
                        var h = new LivingActor.Block(parseFloat(A.getAttribute("timeOffset")), parseFloat(A.getAttribute("duration")), b);
                        t.addBlock(h);
                        for (var w = 0; w < A.attributes.length; w++) {
                            var v = A.attributes[w].name;
                            var z = A.attributes[w].value;
                            switch (v) {
                                case "type":
                                case "timeOffset":
                                case "duration":
                                    break;
                                default:
                                    h.parameter(v, z);
                                    break
                            }
                        }
                        var p = (x) ? LivingActor.$(A).text() : A.textContent;
                        if (p) {
                            h.parameter("children", p)
                        }
                    }
                    k.addTrack(t, parseInt(j.getAttribute("stack")))
                }
                m.push(k);
                C[k.name()] = k
            }
        }
        var l = c.find(".SequenceList");
        for (var a = 0; a < l.length; a++) {
            var o = l[a];
            var D = new LivingActor.SequenceList(o.getAttribute("name"));
            var q = o.getAttribute("mode");
            D.setSequenceMode(q);
            var d = c.find(".Sequence", o);
            for (var g = 0; g < d.length; g++) {
                var u = d[g].getAttribute("name");
                if (C[u]) {
                    D.addSequence(C[u])
                }
            }
            m.push(D);
            C[D.name()] = D
        }
    }
    return m
};
LivingActor.Sequencer_parser.prototype.parseJSON = function(a) {};
LivingActor.Sequencer_parser.prototype.toXML = function(j) {
    var n = "";
    for (var a = 0; a < j.length; a++) {
        var m = j[a];
        n += "\n<Sequence";
        if (m._parameters) {
            for (var e = 0; e < m._parameters.length; e++) {
                var k = m.parameter(e);
                n += " " + e + '="' + k + '"'
            }
        }
        n += ' name="' + m.name() + '"';
        n += ">";
        var g = m.getTrackList();
        for (var h = 0; h < g.length; h++) {
            var c = g[h];
            n += "\n\t<Track";
            if (c._parameters) {
                for (var e = 0; e < c._parameters.length; e++) {
                    var k = c.parameter(e);
                    n += " " + e + '="' + k + '"'
                }
            }
            n += ' type="' + c.types() + '"';
            n += ">";
            var d = c.getBlocks();
            for (var l = 0; l < d.length; l++) {
                var f = d[l];
                n += "\n\t\t<" + f.types();
                if (f._parameters) {
                    for (var e = 0; e < f._parameters.length; e++) {
                        if (e != "children") {
                            var k = f.parameter(e);
                            n += " " + e + '="' + k + '"'
                        }
                    }
                }
                n += ' type="' + f.types() + '"';
                n += ' timeOffset="' + f.timeoffset() + '"';
                n += ' duration="' + f.duration() + '"';
                var b = f.parameter("children");
                if (b) {
                    n += "><![CDATA[" + b + "]]></" + f.types() + ">"
                } else {
                    n += "/>"
                }
            }
            n += "\n\t</Track>"
        }
        n += "\n</Sequence>"
    }
    return n
};
LivingActor.Sequencer_parser.prototype.toJSON = function(a) {};
LivingActor.Sequencer_parser.prototype.toHTML = function(c) {
    var d = /</g;
    var b = /\n/g;
    var a = /\t/g;
    c = c.replace(d, "&#60");
    c = c.replace(b, "<br/>");
    c = c.replace(a, "&nbsp;&nbsp;&nbsp;");
    return c
};
LivingActor.Block_Event = function() {};
LivingActor.Block_Event.DURATION_CHANGE = "durationChange";
LivingActor.Block_Event.TIMEOFFSET_CHANGE = "timeoffsetChange";
LivingActor.Block_Event.PARAMETER_CHANGE = "parameterChange";
LivingActor.Block_Event.TYPE_CHANGE = "typeChange";
LivingActor.Block_Event.NAME_CHANGE = "nameChange";
LivingActor.Block_Event.DELETED = "deleted";
LivingActor.Block = function(a, c, b) {
    this._id = LivingActor.Block._ID_COUNT++;
    this._type = b == null ? null : b;
    this._name = "";
    this._timeoffset = a == null ? 0 : parseFloat(a);
    this._duration = c == null ? 0 : parseFloat(c);
    this._parameters = null;
    this._parent = false;
    if (isNaN(this._timeoffset)) {
        this.error("Timeoffset value is incorrect. Block id :" + this._id)
    }
    if (isNaN(this._duration)) {
        this.error("Duration value is incorrect. Block id :" + this._id)
    }
    this.id = function() {
        return this._id
    }
};
LivingActor.Block.prototype = new LivingActor.Events();
LivingActor.Block.prototype.constructor = LivingActor.Block;
LivingActor.Block.version = "1.0";
LivingActor.Block._ID_COUNT = 1;
LivingActor.Block.prototype.destructor = function() {
    LA_Events.prototype.destructor.call(this);
    this._parameters = null;
    this.dispatchEvent(LivingActor.Block_Event.DELETED, null, false)
};
LivingActor.Block.prototype.types = function(a) {
    if (a == null) {
        return this._type
    } else {
        if (this._type != a) {
            this._type = a;
            this.dispatchEvent(LivingActor.Block_Event.TYPE_CHANGE, {
                type: this._type
            }, true)
        }
        return this
    }
};
LivingActor.Block.prototype.name = function(a) {
    if (a == null) {
        return this._name
    } else {
        if (this._name != a) {
            this._name = a;
            this.dispatchEvent(LivingActor.Block_Event.NAME_CHANGE, {
                name: this._name
            }, true)
        }
        return this
    }
};
LivingActor.Block.prototype.parent = function() {
    return this._parent
};
LivingActor.Block.prototype.duration = function(a) {
    if (a != null) {
        a = parseFloat(a);
        if (this._duration = a) {
            this._duration = a;
            this.dispatchEvent(LivingActor.Block_Event.DURATION_CHANGE, {
                duration: this._duration
            }, true)
        }
        return this
    } else {
        return this._duration
    }
};
LivingActor.Block.prototype.timeoffset = function(a) {
    if (a != null) {
        a = parseFloat(a);
        if (this._timeoffset = a) {
            this._timeoffset = a;
            this.dispatchEvent(LivingActor.Block_Event.TIMEOFFSET_CHANGE, {
                timeoffset: this._timeoffset
            }, true)
        }
        return this
    } else {
        return this._timeoffset
    }
};
LivingActor.Block.prototype.parameter = function(a, b) {
    if (!a) {
        this.error("Label could not be empty")
    } else {
        if (b == null) {
            if (this._parameters == null) {
                return null
            } else {
                return this._parameters[a]
            }
        } else {
            if (this._parameters == null) {
                this._parameters = new Array()
            }
            if (this._parameters[a] != b) {
                this._parameters[a] = b;
                this.dispatchEvent(LivingActor.Block_Event.PARAMETER_CHANGE, {
                    label: b
                }, true)
            }
        }
    }
    return this
};
LivingActor.Block.prototype.removeParameter = function(a) {
    if (this._parameters != null) {
        var b = (this._parameters[a] != null);
        delete this._parameters[a];
        if (b) {
            this.dispatchEvent(LivingActor.Block_Event.PARAMETER_CHANGE, {
                label: null
            }, true)
        }
    }
    return this
};
LivingActor.Block.prototype.clone = function() {
    var b = new LivingActor.Block(this.timeoffset(), this.duration(), this.type());
    b.name(this.name());
    for (var a = 0; a < this._parameters.length; a++) {
        b.parameter(a, LA_Tools.cloneObject(this.parameter(a)))
    }
    return b
};
LivingActor.Sequence_Event = function() {};
LivingActor.Sequence_Event.NEW_TRACK = "newTrack";
LivingActor.Sequence_Event.TRACK_REMOVE = "trackRemove";
LivingActor.Sequence = function(a) {
    this._trackList = new Array();
    this.isSequenceList = false;
    this._name = a
};
LivingActor.Sequence.prototype = new LivingActor.Block();
LivingActor.Sequence.prototype.constructor = LivingActor.Sequence;
LivingActor.Sequence.version = "1.0";
LivingActor.Sequence.prototype.play = function(b) {
    var f = [];
    for (var c = 0; c < this._trackList.length; c++) {
        var a = this._trackList[c];
        var e = a.getBlocks(b);
        for (var d = 0; d < e.length; d++) {
            f.push(e[d])
        }
    }
    return f
};
LivingActor.Sequence.prototype.destructor = function() {
    LivingActor.Block.prototype.destructor.call(this);
    for (var b = this.length() - 1; b >= 0; b--) {
        var a = this._trackList[b];
        this.removeTrack(a.id())
    }
    this._trackList = null
};
LivingActor.Sequence.prototype.length = function() {
    return this._trackList.length
};
LivingActor.Sequence.prototype.getTrackIndex = function(b) {
    for (var a = 0; a < this._trackList.length; a++) {
        if (this._trackList[a].id() == b) {
            return a
        }
    }
    return -1
};
LivingActor.Sequence.prototype.removeTrack = function(c) {
    var b = this.getTrackIndex(c);
    if (b >= 0) {
        var a = this._trackList.splice(b, 1);
        a = a[0];
        a._parent = false;
        a.removeEventListener(LivingActor.Track_Event.DURATION_CHANGE, this);
        this._refreshDuration();
        this.dispatchEvent(LivingActor.Sequence_Event.TRACK_REMOVE, {
            tracks: a
        })
    }
    return this
};
LivingActor.Sequence.prototype.addTrack = function(a, b) {
    if (a == null) {
        this.error("Track is not defined. Sequence id:" + this.id())
    } else {
        if (b == null || b > this.length()) {
            b = this.length()
        } else {
            if (b < 0) {
                b = 0
            }
        }
        this._trackList.splice(b, 0, a);
        a._parent = this;
        this._refreshDuration();
        a.addEventListener(LivingActor.Track_Event.DURATION_CHANGE, this, "_refreshDuration");
        this.dispatchEvent(LivingActor.Sequence_Event.NEW_TRACK, {
            track: a
        })
    }
    return this
};
LivingActor.Sequence.prototype._refreshDuration = function() {
    var c = 0;
    for (var b = 0; b < this._trackList.length; b++) {
        var a = this._trackList[b];
        if (c < a.duration()) {
            c = a.duration()
        }
    }
    LivingActor.Block.prototype.duration.call(this, c);
    return this
};
LivingActor.Sequence.prototype.duration = function(a) {
    if (a == null) {
        this._refreshDuration();
        return LivingActor.Block.prototype.duration.call(this)
    } else {
        this.warn("Sequence duration could not been set. Sequence id:" + this.id())
    }
    return this
};
LivingActor.Sequence.prototype.getTrackList = function() {
    return this._trackList.concat()
};
LivingActor.Sequence.prototype.join = function(d, h) {
    var a = 0;
    var f = [];
    for (var g = 0; g < this._trackList.length; g++) {
        var b = this._trackList[g].getBlocks();
        for (var e = 0; e < b.length; e++) {
            var c = b[e];
            if (c.types() == d) {
                f.push(c);
                var l = c.timeoffset() + c.duration();
                if (l > a) {
                    a = l
                }
            }
        }
    }
    if (f.length > 1) {
        for (var g = 0; g < f.length - 1; g++) {
            for (var e = g + 1; e < f.length; e++) {
                if (f[g].timeoffset() > f[e].timeoffset()) {
                    var n = f[g];
                    f[g] = f[e];
                    f[e] = n
                }
            }
        }
        var m = f[0];
        var k = m.parameter("children");
        for (var g = 1; g < f.length; g++) {
            k += h + f[g].parameter("children")
        }
        m.duration(a - m.timeoffset());
        m.parameter("children", k);
        for (var g = f.length - 1; g >= 1; g--) {
            f[g].parent().removeBlock(f[g].id())
        }
    }
};
LivingActor.Sequence.prototype.clone = function() {
    var c = Cp_Block.prototype.clone.call(this);
    for (var b = 0; b < this._trackList.length; b++) {
        var a = this._trackList[b];
        this.addTrack(a.copy(), b)
    }
    return c
};
LivingActor.SequenceList = function(a) {
    this._sequenceList = new Array();
    this.mode = LivingActor.SequenceList.RANDOM;
    this.lastIndex = -1;
    this.isSequenceList = true;
    this._name = a
};
LivingActor.SequenceList.prototype = new LivingActor.Sequence();
LivingActor.SequenceList.prototype.constructor = LivingActor.SequenceList;
LivingActor.SequenceList.version = "1.0";
LivingActor.SequenceList.RANDOM = "random";
LivingActor.SequenceList.ONCE = "once";
LivingActor.SequenceList.LASTREPEAT = "lastrepeat";
LivingActor.SequenceList.prototype.addSequence = function(a) {
    this._sequenceList.push(a)
};
LivingActor.SequenceList.prototype.extractSequence = function() {
    switch (this.mode) {
        case LivingActor.SequenceList.RANDOM:
            this.lastIndex = LivingActor.Tools.rand(0, this._sequenceList.length - 1);
            return this._sequenceList[this.lastIndex];
            break;
        case LivingActor.SequenceList.ONCE:
            if (this.lastIndex + 1 >= this._sequenceList.length) {
                return
            }
            this.lastIndex++;
            return this._sequenceList[this.lastIndex];
            break;
        case LivingActor.SequenceList.LASTREPEAT:
            this.lastIndex++;
            if (this.lastIndex >= this._sequenceList.length) {
                this.lastIndex = this._sequenceList.length - 1
            }
            return this._sequenceList[this.lastIndex];
            break
    }
};
LivingActor.SequenceList.prototype.join = function(a, b) {};
LivingActor.SequenceList.prototype.play = function(a) {
    if (this._sequenceList.length <= 0) {
        return
    } else {
        switch (this.mode) {
            case LivingActor.SequenceList.RANDOM:
                this.lastIndex = LivingActor.Tools.rand(0, this._sequenceList.length - 1);
                this._sequenceList[this.lastIndex].play(i);
                break;
            case LivingActor.SequenceList.ONCE:
                this.lastIndex++;
                if (this.lastIndex >= this._sequenceList.length) {
                    return
                } else {
                    this._sequenceList[this.lastIndex].play(a)
                }
                break;
            case LivingActor.SequenceList.LASTREPEAT:
                this.lastIndex++;
                if (this.lastIndex >= this._sequenceList.length) {
                    this.lastIndex = this._sequenceList.length - 1
                }
                this._sequenceList[this.lastIndex].play(a);
                break
        }
    }
};
LivingActor.SequenceList.prototype.destructor = function() {
    for (var a = 0; a < this._sequenceList.length; a++) {
        this._sequenceList[a].destructor()
    }
    this._sequenceList = []
};
LivingActor.SequenceList.prototype.setSequenceMode = function(a) {
    if (a) {
        a = a.toLowerCase()
    }
    switch (a) {
        case LivingActor.SequenceList.RANDOM:
        case LivingActor.SequenceList.ONCE:
        case LivingActor.SequenceList.LASTREPEAT:
            this.mode = a;
            break;
        default:
            this.mode = LivingActor.SequenceList.RANDOM;
            break
    }
};
LivingActor.SequenceList.prototype.length = function() {
    return this._sequenceList.length
};
LivingActor.SequenceList.prototype.getTrackIndex = function(a) {
    return -1
};
LivingActor.SequenceList.prototype.removeTrack = function(a) {
    return this
};
LivingActor.SequenceList.prototype.addTrack = function(a, b) {
    return this
};
LivingActor.SequenceList.prototype._refreshDuration = function() {
    return this
};
LivingActor.SequenceList.prototype.getTrackList = function() {
    return []
};
LivingActor.SequenceList.prototype.duration = function(a) {};
LivingActor.SequenceList.prototype.clone = function() {};
LivingActor.Track_Event = function() {};
LivingActor.Track_Event.DURATION_CHANGE = "durationChange";
LivingActor.Track_Event.PARAMETER_CHANGE = "parameterChange";
LivingActor.Track_Event.TYPE_CHANGE = "typeChange";
LivingActor.Track_Event.NAME_CHANGE = "nameChange";
LivingActor.Track_Event.DELETED = "deleted";
LivingActor.Track_Event.NEW_BLOCK = "newBlock";
LivingActor.Track_Event.BLOCK_REMOVE = "blockRemove";
LivingActor.Track = function(a) {
    this._id = LivingActor.Track._ID_COUNT++;
    this._type = a == null ? "" : a;
    this._name = "";
    this._duration = 0;
    this._parameters = null;
    this._blockList = new Array();
    this._parent = false;
    this.id = function() {
        return this._id
    }
};
LivingActor.Track.prototype = new LivingActor.Events();
LivingActor.Track.prototype.constructor = LivingActor.Track;
LivingActor.Track.version = "1.0";
LivingActor.Track._ID_COUNT = 1;
LivingActor.Track.prototype.destructor = function() {
    LA_Events.prototype.destructor.call(this);
    this._parameters = null;
    this.dispatchEvent(LivingActor.Track_Event.DELETED, null, false)
};
LivingActor.Track.prototype.types = function(a) {
    if (a == null) {
        return this._type
    } else {
        if (this._type != a) {
            this._type = a;
            this.dispatchEvent(LivingActor.Track_Event.TYPE_CHANGE, {
                type: this._type
            }, true)
        }
        return this
    }
};
LivingActor.Track.prototype.name = function(a) {
    if (a == null) {
        return this._name
    } else {
        if (this._name != a) {
            this._name = a;
            this.dispatchEvent(LivingActor.Track_Event.NAME_CHANGE, {
                name: this._name
            }, true)
        }
        return this
    }
};
LivingActor.Track.prototype.duration = function(a) {
    if (a != null) {
        this.warn("Track duration could not been set. Track id " + this.id());
        return this
    } else {
        this._refreshDuration();
        return this._duration
    }
};
LivingActor.Track.prototype.parameter = function(a, b) {
    if (!a) {
        this.error("Label could not be empty")
    } else {
        if (b == null) {
            if (this._parameters == null) {
                return null
            } else {
                return this._parameters[a]
            }
        } else {
            if (this._parameters == null) {
                this._parameters = new Array()
            }
            if (this._parameters[a] != b) {
                this._parameters[a] = b;
                this.dispatchEvent(LivingActor.Track_Event.PARAMETER_CHANGE, {
                    label: b
                }, true)
            }
        }
    }
    return this
};
LivingActor.Track.prototype.removeParameter = function(a) {
    if (this._parameters != null) {
        var b = (this._parameters[a] != null);
        delete this._parameters[a];
        if (b) {
            this.dispatchEvent(LivingActor.Track_Event.PARAMETER_CHANGE, {
                label: null
            }, true)
        }
    }
    return this
};
LivingActor.Track.prototype.parent = function() {
    return this._parent
};
LivingActor.Track.prototype.clone = function() {
    var b = new LivingActor.Track(this.type());
    b.name(this.name());
    for (var a = 0; a < this._parameters.length; a++) {
        b.parameter(a, LA_Tools.cloneObject(this.parameter(a)))
    }
    return b
};
LivingActor.Track.prototype.addBlock = function(a) {
    if (a == null) {
        this.error("Block is not defined. Track id:" + this.id())
    } else {
        this._blockList.push(a);
        a._parent = this;
        this._refreshDuration();
        a.addEventListener(LivingActor.Block_Event.TIMEOFFSET_CHANGE, this, "_refreshDuration");
        a.addEventListener(LivingActor.Block_Event.DURATION_CHANGE, this, "_refreshDuration");
        this.dispatchEvent(LivingActor.Track_Event.NEW_BLOCK, {
            block: a
        }, true)
    }
    return this
};
LivingActor.Track.prototype.removeBlock = function(b) {
    var a = this._indexOf(b);
    if (a >= 0) {
        var c = this._blockList.splice(a, 1);
        c = c[0];
        c._parent = false;
        c.removeEventListener(LivingActor.Block_Event.TIMEOFFSET_CHANGE, this);
        c.removeEventListener(LivingActor.Block_Event.DURATION_CHANGE, this);
        this._refreshDuration();
        this.dispatchEvent(LivingActor.Track_Event.BLOCK_REMOVE, {
            block: c
        }, true)
    }
    return this
};
LivingActor.Track.prototype.getBlocks = function(a, d) {
    if (typeof(a) == "undefined" && typeof(d) == "undefined") {
        return this._blockList.concat()
    } else {
        if (typeof(a) == "undefined") {
            a = 0
        }
        if (typeof(d) == "undefined") {
            d = a
        }
        var g = new Array();
        for (var c = 0; c < this._blockList.length; c++) {
            var e = this._blockList[c];
            var f = e.timeoffset();
            var b = f + e.duration();
            if (a <= f && f < d || a < b && b <= d || f <= a && d <= b) {
                g.push(e)
            }
        }
        return g
    }
};
LivingActor.Track.prototype.getNextBlock = function(c) {
    var e = false;
    for (var b = 0; b < this._blockList.length; b++) {
        var d = this._blockList[b];
        var f = d.timeoffset();
        var a = f + d.duration();
        if (c < f || c < a) {
            if (!e) {
                e = d
            } else {
                if (c < f) {
                    if (f < d.timeoffset()) {
                        e = d
                    }
                } else {
                    if (a < d.timeoffset() + d.duration()) {
                        e = d
                    }
                }
            }
        }
    }
    return e
};
LivingActor.Track.prototype._refreshDuration = function() {
    var a = 0;
    for (var c = 0; c < this._blockList.length; c++) {
        var d = this._blockList[c];
        var b = d.duration() + d.timeoffset();
        if (b > a) {
            a = b
        }
    }
    this._duration = a;
    this.dispatchEvent(LivingActor.Block_Event.DURATION_CHANGE, {
        duration: this._duration
    }, true);
    return this
};
LivingActor.Track.prototype._indexOf = function(b) {
    for (var a = 0; a < this._blockList.length; a++) {
        var c = this._blockList[a];
        if (c.id() == b) {
            return a
        }
    }
    return -1
};
LivingActor.S2A = function() {
    this.toPushAnim = []
};
LivingActor.S2A.prototype = new LivingActor.Events();
LivingActor.S2A.prototype.constructor = LivingActor.S2A;
LivingActor.S2A.Behavior_modarate = {
    speak: 0.4,
    argue: 0.25,
    explain: 0.15
};
LivingActor.S2A.Behavior_dynamic = {
    speak: 0.1,
    argue: 0.55,
    explain: 0.35
};
LivingActor.S2A.Behavior_timorous = {
    speak: 1,
    argue: 0,
    explain: 0
};
LivingActor.S2A.generate = function(q, h, o, a) {
    if (!a) {
        a = LivingActor.S2A.Behavior_modarate
    }
    if (!o) {
        o = 0
    }
    h = parseFloat(h);
    var c = LivingActor.Tools.cloneObject(a);
    var d = [];
    if (q && h > 0.5) {
        var n = {
            speak: [],
            argue: [],
            explain: []
        };
        for (var j in q.animList) {
            if (q.animList && q.animList[j] && q.animList[j].isLoaded == true) {
                if (q.animList[j].isSpeak) {
                    n.speak.push(q.animList[j])
                } else {
                    if (q.animList[j].isArgue) {
                        n.argue.push(q.animList[j])
                    } else {
                        if (q.animList[j].isExplain) {
                            n.explain.push(q.animList[j])
                        }
                    }
                }
            }
        }
        if (n.speak.length <= 0) {
            c.speak = 0
        }
        if (n.argue.length <= 0) {
            c.argue = 0
        }
        if (n.explain.length <= 0) {
            c.explain = 0
        }
        var m = c.speak + c.argue + c.explain;
        if (m > 0) {
            var b = 0;
            var k = {
                speak: [],
                argue: [],
                explain: []
            };
            do {
                var r;
                var p = LivingActor.Tools.randFloat(0, m);
                if (p <= c.speak) {
                    r = "speak"
                } else {
                    if (c.speak < p && p <= (c.speak + c.argue)) {
                        r = "argue"
                    } else {
                        r = "explain"
                    }
                }
                var j = LivingActor.Tools.rand(0, n[r].length - 1);
                var g = n[r][j];
                n[r].splice(j, 1);
                if (n[r].length <= 0) {
                    n[r] = k[r];
                    k[r] = []
                }(k[r]).push(g);
                if (n[r].length <= 0) {
                    n[r] = k[r];
                    k[r] = []
                }
                var e = LivingActor.Tools.randFloat(0.5, 1.5);
                var l = LivingActor.Tools.randFloat(0.2, 1.1);
                if (d.length <= 0) {
                    e = 0
                }
                var f = new LivingActor.Block(o + b + e, g.getMinDuration() + l, "GoReturn");
                f.parameter("from", "Restpose");
                f.parameter("to", g.name);
                f.parameter("label", g.name);
                f.parameter("name", g.name);
                b += l + e + g.getMinDuration();
                if (b > h) {
                    break
                } else {
                    d.push(f)
                }
            } while (b < h)
        }
    }
    return d
};
LivingActor.S2A.prototype.clear = function() {
    this.toPushAnim = []
};
LivingActor.S2A.prototype.addAnim = function(a, c, b) {
    if (a) {
        if (!b) {
            b = 0
        }
        if (!c) {
            c = 3
        }
        this.toPushAnim.push({
            name: a,
            duration: c,
            timeoffset: b
        })
    }
};
LivingActor.S2A.prototype.generateSequence = function(r, a, t, l) {
    var h = new LivingActor.Sequence("S2A_Generated");
    var n = new LivingActor.Track("anim");
    if (r) {
        var b = false;
        for (var q = 0; q < this.toPushAnim.length; q++) {
            var o = r.getAnim(this.toPushAnim[q].name, true);
            if (o) {
                var d = o.getMinDuration();
                if (this.toPushAnim[q].duration > d) {
                    d = this.toPushAnim[q].duration
                }
                var f = new LivingActor.Block(this.toPushAnim[q].timeoffset, d, "GoReturn");
                f.name(o.name);
                f.parameter("from", "Restpose");
                f.parameter("to", o.name);
                f.parameter("name", o.name);
                f.parameter("label", o.name);
                n.addBlock(f);
                if (!b || f.timeoffset() < b.timeoffset()) {
                    b = f
                }
            }
        }
        var m = 0;
        var j = [];
        if (b && b.timeoffset() > 0.8) {
            j.push([0, b.timeoffset()])
        }
        var e = b;
        while (e) {
            var c = e.timeoffset() + e.duration();
            var g = n.getNextBlock(c + 0.1);
            if (g && g.timeoffset() - c > 0.8) {
                j.push([c, g.timeoffset()])
            }
            m = c;
            e = g
        }
        if (m + 0.8 < a) {
            j.push([m, a])
        }
        for (var p = 0; p < j.length; p++) {
            var v = LivingActor.S2A.generate(r, j[p][1] - j[p][0], j[p][0], l);
            for (var q = 0; q < v.length; q++) {
                n.addBlock(v[q])
            }
        }
        this.clear();
        if (t) {
            var w = new LivingActor.Track("Lips");
            var u = new LivingActor.Block(0, n.duration(), "Text");
            w.addBlock(u);
            h.addTrack(w, 0)
        }
    } else {
        this.warn("LivingActor.S2A.generateSequence Avata is not defined", true)
    }
    h.addTrack(n, 0);
    return h
};
LivingActor.Animation = function(a_name, a_avatarKey) {
    this.name = a_name;
    this.fps = 8;
    this.isLoaded = false;
    this.priority = 5;
    this.avatarKey = a_avatarKey;
    this.totalFrame = 0;
    this.isIdle = (a_name && a_name.match(/^(Wait_|idle_|Speak_|LookLeft)/i));
    this.isSpeak = (a_name && a_name.match(/^Speak_/i));
    this.isArgue = (a_name && a_name.match(/^Argue_/i));
    this.isExplain = (a_name && a_name.match(/^Explain_/i));
    this.goFrames;
    this.returnFrames;
    this.loopFrames;
    this.animPicture;
    this.animPictureDom;
    this.lipsPicture;
    this.lipsPictureDom;
    this._lastLipsframeIndex = -1;
    var _getLoopLipsFrameIndex = function(object) {
        var lipsframe = LivingActor.Tools.rand(0, object.loopFrames.length - 1);
        if (object.loopFrames.length > 2 && lipsframe == object._lastLipsframeIndex) {
            return _getLoopLipsFrameIndex(object)
        } else {
            return lipsframe
        }
    };
    eval(function(p, a, c, k, e, r) {
        e = function(c) {
            return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!"".replace(/^/, String)) {
            while (c--) {
                r[e(c)] = k[c] || e(c)
            }
            k = [function(e) {
                return r[e]
            }];
            e = function() {
                return "\\w+"
            };
            c = 1
        }
        while (c--) {
            if (k[c]) {
                p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c])
            }
        }
        return p
    }('4 6=q;4 v=x(a,b){7(!6&&a.9){4 c=["",""];6=[[],[]];4 d=2*a.y;4 e=[a.9,a.n,""+a.o.5];4 i=-1;4 f="";r(f.5<d){i++;4 w=i%3;7(e[w]!=""){f+=e[w].p(0,1);e[w]=e[w].p(1)}7(e.s("")=="")e=[a.9,a.n,""+a.o.5]}c[0]=f;4 e=[a.9,a.n,""+a.o.5];4 i=-1;4 g="";r(g.5<d){i++;4 w=i%3;7(e[w]!=""){g+=e[w].p(e[w].5-1,e[w].5);e[w]=e[w].p(0,e[w].5-1)}7(e.s("")=="")e=[a.9,a.n,""+a.o.5]}c[1]=g;4 h=[c,6];8(4 l=0;l<2;l++){4 k=h[0][l].z("");8(4 i=0;i<k.5;i++)h[1][l][i]=i;8(4 i=0;i<k.5-1;i++)8(4 j=i+1;j<k.5;j++){7(k[i]>k[j]){4 t=k[i];k[i]=k[j];k[j]=t;4 m=h[1][l][i];h[1][l][i]=h[1][l][j];h[1][l][j]=m}}8(4 i=0;i<k.5-1;i++)8(4 j=i+1;j<k.5;j++){7(k[i]==k[j]&&h[1][l][i]>h[1][l][j]){4 m=h[1][l][i];h[1][l][i]=h[1][l][j];h[1][l][j]=m}}}}7(6)u[6[0][2*b],6[0][2*b+1],6[1][2*b],6[1][2*b+1]];A u q};', 37, 37, "||||var|length|_specificIndexMap|if|for|avatarKey||||||||||||||name|goFrames|substring|false|while|join||return|_specificIndex||function|totalFrame|split|else".split("|"), 0, {}));
    this.getFrame = function(timeoffset, totalDuration) {
        var returnframe = 0;
        var lipsframe = -1;
        var isInLoop = false;
        var end = false;
        if (totalDuration >= 0 && timeoffset >= totalDuration) {
            end = true;
            if (this.returnFrames.length > 0) {
                returnframe = this.returnFrames[this.returnFrames.length - 1]
            } else {
                if (this.goFrames.length > 0) {
                    returnframe = this.goFrames[0]
                } else {
                    returnframe = this.loopFrames[0]
                }
            }
        } else {
            if (totalDuration >= 0 && timeoffset <= this.getGoDuration() && this.goFrames.length > 0) {
                var i = Math.round(timeoffset * this.fps);
                isInLoop = false;
                if (i >= this.goFrames.length) {
                    i = this.goFrames.length - 1
                }
                returnframe = this.goFrames[i]
            } else {
                if (totalDuration >= 0 && totalDuration - timeoffset < this.getReturnDuration() && this.returnFrames.length > 0) {
                    var j = Math.round((this.getReturnDuration() - totalDuration + timeoffset) * this.fps);
                    isInLoop = false;
                    if (j >= this.returnFrames.length) {
                        j = this.returnFrames.length - 1
                    }
                    returnframe = this.returnFrames[j]
                } else {
                    isInLoop = true;
                    if (this.loopFrames.length > 0) {
                        var lipsframeIndex = _getLoopLipsFrameIndex(this);
                        this._lastLipsframeIndex = lipsframeIndex;
                        lipsframe = this.loopFrames[lipsframeIndex]
                    }
                    if (this.goFrames.length > 0) {
                        returnframe = this.goFrames[this.goFrames.length - 1]
                    } else {
                        returnframe = this.returnFrames[0]
                    }
                }
            }
        }
        if (lipsframe < 0) {
            lipsframe = returnframe
        }
        return {
            frame: returnframe,
            splitFrame: _specificIndex(this, returnframe),
            loopframe: lipsframe,
            inloop: isInLoop,
            end: end
        }
    }
};
LivingActor.Animation.prototype = new LivingActor.Animation();
LivingActor.Animation.prototype.constructor = LivingActor.Animation;
LivingActor.Animation.prototype.init = function(e, g, d, h, c) {
    this.fps = e;
    this.goFrames = [];
    for (var b = 0; b < g; b++) {
        this.goFrames.push(b)
    }
    this.totalFrame = g;
    this.returnFrames = [];
    if (d < 0) {
        for (var b = 0; b < -d; b++) {
            var a = g - 1 - b;
            if (a >= 0) {
                this.returnFrames.push(a)
            }
        }
    } else {
        for (var b = 0; b < d; b++) {
            this.returnFrames.push(g + b)
        }
        this.totalFrame += d
    }
    this.loopFrames = [];
    var f = d > 0 ? this.goFrames.length + this.returnFrames.length : this.goFrames.length;
    for (var b = 0; b < h; b++) {
        this.loopFrames.push(f + b)
    }
    this.priority = c
};
LivingActor.Animation.prototype.getGoDuration = function() {
    if (!this.goFrames) {
        return 0
    } else {
        return this.goFrames.length / this.fps
    }
};
LivingActor.Animation.prototype.getReturnDuration = function() {
    if (!this.returnFrames) {
        return 0
    } else {
        return this.returnFrames.length / this.fps
    }
};
LivingActor.Animation.prototype.getMinDuration = function() {
    return this.getGoDuration() + this.getReturnDuration()
};
LivingActor.Animation.prototype.unload = function() {
    this.isLoaded = false;
    this.totalFrame = 0;
    this.animPicture = null;
    this.animPictureDom = null;
    this.lipsPicture = null;
    this.lipsPictureDom = null;
    this._lastLipsframeIndex = -1
};
LivingActor.Avatar = function(b) {
    this.type = "Actor";
    this.offsetMode = "RELATIVE";
    var e = -1;
    var k = 0;
    var j = null;
    this.avatarKey = "";
    this.html5Canvas = false;
    this.fps = LivingActor.Avatar.DEFAULT_FPS;
    this.lipsfps = 8;
    this.name = b;
    this.animList;
    this.idleList;
    this.width = 200;
    this.height = 300;
    this.displayWidth = false;
    this.displayHeight = false;
    this.x = 0;
    this.y = 0;
    this.talking = false;
    this.stopped = true;
    this.DLMode = LivingActor.Avatar.DLMODE_DELAYED;
    this.autoIdle = true;
    this.isReady = false;
    this.isEmbeded = false;
    this.pendingLoad;
    this.loaded;
    this.src = "";
    this._programIdle = false;
    this._programLoop = false;
    this._currentAnim = false;
    this._currentAnimTotalDuration;
    this._lastUp;
    this._lastDelay = 0;
    this._lastStart;
    this._delayFromStart = 0;
    this._lastLipsRefresh = 0;
    this._lastLipsframe = 0;
    var f = function(m) {
        if (m._currentAnim) {
            m.gotoAndStop(m._delayFromStart, m._currentAnim, m._currentAnimTotalDuration)
        }
    };
    var c = function(q, z) {
        var x = q;
        if (z) {
            var B = z.match(/\((\d+);(\d+)\)/);
            x.width = B[1];
            x.height = B[2];
            x.avatarKey = false;
            var A = z.match(/Id = (\w+)/m);
            if (A) {
                x.avatarKey = A[1]
            }
            var v = z.match(/([\w_]+)\s*\{([^}]+)\}/g);
            var o = /(\w+)\s=\s(-?\d+)/;
            for (var r = 0; r < v.length; r++) {
                var n = v[r];
                if (n) {
                    var m = ("" + n).match(/^([\w\d_-]+)\s*\{/);
                    if (m) {
                        m = m[1];
                        var t = [0, 0, 0, 0, 5];
                        var w = n.match(/(\w+)\s=\s(-?\d+)/g);
                        for (var u = 0; u < w.length; u++) {
                            var y = o.exec(w[u]);
                            if (!(y == null)) {
                                switch (y[1].toUpperCase()) {
                                    case "GO":
                                        t[0] = parseInt(y[2]);
                                        break;
                                    case "RETURN":
                                        t[1] = parseInt(y[2]);
                                        break;
                                    case "LOOP":
                                        t[2] = parseInt(y[2]);
                                        break;
                                    case "FPS":
                                        t[3] = parseInt(y[2]);
                                        break;
                                    case "PRIORITY":
                                        t[4] = parseInt(y[2]);
                                        break
                                }
                            }
                        }
                        var p = new LivingActor.Animation(m, x.avatarKey);
                        p.init(t[3], t[0], t[1], t[2], t[4]);
                        x.addAnim(p)
                    }
                }
            }
        } else {
            q.error("Could not load avatar info")
        }
        return x
    };
    var g = function(o, n, p, m) {
        if (o.loaded[n] == true) {
            h(o, o.pendingLoad[n])
        } else {
            o.loaded[n] = false;
            LivingActor.Ajax.post(p, {
                r: (new Date()).getTime()
            }, function(q) {
                var r = c(o, q);
                o.pendingLoad[n].avatar = r;
                d(o, n, p, false)
            }, function(q) {}, false, "LivingActorAvatar_" + m)
        }
    };
    var a = function(o, n, p) {
        if (o.loaded[n] == true) {
            h(o, o.pendingLoad[n]);
            return false
        } else {
            o.loaded[n] = false;
            var m = new Image();
            LivingActor.$(m).bind("load", function() {
                d(o, n, p, m)
            });
            m.src = p;
            return m
        }
    };
    var d = function(n, m, o, p) {
        n.pendingLoad[m].loaded += 1;
        n.pendingLoad[m].loadedFile.push(o);
        n.pendingLoad[m].loader.push(p);
        if (n.pendingLoad[m].loaded + n.pendingLoad[m].error == n.pendingLoad[m].src.length) {
            n.loaded[m] = true;
            h(n, n.pendingLoad[m])
        }
    };
    var h = function(r, u, v) {
        var n;
        switch (u.type) {
            case "animation":
                n = LivingActor.Avatar.Event_AnimLoaded;
                var q = r.getAnim(u.name);
                if (q.isIdle) {
                    r.idleList.push(q)
                }
                var o = /_Lips\.png$/;
                k--;
                for (var p = 0; p < u.loadedFile.length; p++) {
                    var m = u.loadedFile[p];
                    if (!o.test(m)) {
                        q.animPicture = m;
                        q.animPictureDom = u.loader[p]
                    } else {
                        q.lipsPicture = m;
                        q.lipsPictureDom = u.loader[p]
                    }
                }
                if (!r.html5Canvas) {
                    if (j && (LivingActor.$.browser.chrome || LivingActor.$.browser.mozilla)) {
                        j.append("<div style=\"position:absolute;top:0;width:1px;height:1px;left:0;background:url('" + q.animPicture + "') 0 0 no-repeat\"/><div style=\"position:absolute;top:0;width:1px;height:1px;left:0;background:url('" + q.lipsPicture + "') 0 0 no-repeat\"/>")
                    }
                }
                q.isLoaded = true;
                break;
            case "avatar":
                n = LivingActor.Avatar.Event_AvatarLoaded;
                break;
            default:
                n = false;
                break
        }
        if (n) {
            r.dispatchEvent(n, u, false)
        }
        if (r.priorityLoad) {
            var w = false;
            for (var t = 0; t < r.priorityLoad.length; t++) {
                if (r && r.priorityLoad[t] && r.priorityLoad[t].isLoaded == false) {
                    w = true
                }
            }
            if (!w) {
                if (r.DLMode != LivingActor.Avatar.DLMODE_MINIMUM) {
                    r.priorityLoad = false;
                    r.isReady = true;
                    r.dispatchEvent(LivingActor.Avatar.Event_MinAnimSetLoaded, {}, false)
                }
            }
        }
    };
    var l = function(n, p) {
        if (j && n._currentAnim != p && (p && p.isLoaded)) {
            if (!n.html5Canvas) {
                var m = null;
                if (!n._currentAnim) {
                    m = j.find("div:visible")
                }
                var o = Math.floor((n.displayWidth - n.width) / 2);
                if (!n.avatarKey) {
                    j.append("<div style='position:absolute;top:0;width:" + n.displayWidth + "px;height:" + n.height + 'px;left:0;background:url("' + p.animPicture + '") ' + o + "px 0 no-repeat' class='norm base anim" + p.name + "'/><div style='position:absolute;top:0;width:" + n.displayWidth + "px;height:" + n.height + 'px;left:0;background:url("' + p.lipsPicture + '") ' + o + "px 0 no-repeat' class='norm lips anim" + p.name + "'/>")
                } else {
                    var q = Math.floor(n.height / 2);
                    j.append("<div style='position:absolute;top:0;width:" + n.displayWidth + "px;height:" + q + 'px;left:0;background:url("' + p.animPicture + '") ' + o + "px 0 no-repeat' class='norm base Hx anim" + p.name + "'/><div style='position:absolute;top:0;width:" + n.displayWidth + "px;height:" + q + 'px;left:0;background:url("' + p.animPicture + '") ' + o + "px 0 no-repeat' class='norm base Hy anim" + p.name + "'/><div style='position:absolute;top:" + q + "px;width:" + n.displayWidth + "px;height:" + q + 'px;left:0;background:url("' + p.animPicture + '") ' + o + "px 0 no-repeat' class='norm base Bx anim" + p.name + "'/><div style='position:absolute;top:" + q + "px;width:" + n.displayWidth + "px;height:" + q + 'px;left:0;background:url("' + p.animPicture + '") ' + o + "px 0 no-repeat' class='norm base By anim" + p.name + "'/><div style='position:absolute;top:0;width:" + n.displayWidth + "px;height:" + n.height + 'px;left:0;background:url("' + p.lipsPicture + '") ' + o + "px 0 no-repeat' class='norm lips anim" + p.name + "'/>")
                }
                if (n._currentAnim) {
                    m = j.find("div.anim" + n._currentAnim.name)
                }
                m.remove()
            }
            n._currentAnim = p
        }
    };
    this.loadAvatarFromText = function(n, q, p) {
        if (!this.pendingLoad) {
            this.pendingLoad = {}
        }
        if (!this.loaded) {
            this.loaded = {}
        }
        var m = "avatar" + n;
        this.src = n;
        this.pendingLoad[m] = {
            type: "avatar",
            name: n,
            src: [q + n + "/data.txt"],
            loader: [],
            loadedFile: [],
            loaded: 0,
            error: 0,
            message: ""
        };
        this.loaded[m] = false;
        var o = c(this, p);
        this.pendingLoad[m].avatar = o;
        d(this, m, q + n + "/data.txt", false)
    };
    this.loadAvatar = function(o) {
        if (!this.pendingLoad) {
            this.pendingLoad = {}
        }
        if (!this.loaded) {
            this.loaded = {}
        }
        this.src = o;
        var n = o;
        var m = o.match(/[\w_-]+\/?$/);
        if (m.length > 0) {
            n = m[0]
        }
        this.pendingLoad["avatar" + o] = {
            type: "avatar",
            name: o,
            src: [o + "/data.txt"],
            loader: [],
            loadedFile: [],
            loaded: 0,
            error: 0,
            message: ""
        };
        for (var p = 0; p < this.pendingLoad["avatar" + o].src.length; p++) {
            g(this, "avatar" + o, this.pendingLoad["avatar" + o].src[p], n)
        }
    };
    this.loadAnimation = function(n) {
        if (!this.pendingLoad) {
            this.pendingLoad = {}
        }
        if (!this.loaded) {
            this.loaded = {}
        }
        this.pendingLoad[n.name] = {
            type: "animation",
            name: n.name,
            src: [this.src + "/" + n.name + ".png", this.src + "/" + n.name + "_Lips.png"],
            loader: [],
            loadedFile: [],
            loaded: 0,
            error: 0,
            message: ""
        };
        for (var m = 0; m < this.pendingLoad[n.name].src.length; m++) {
            a(this, n.name, this.pendingLoad[n.name].src[m])
        }
    };
    this.getID = function() {
        if (e < 0) {
            e = LivingActor.Avatar.IDCOUNTER++
        }
        return e
    };
    this.refreshTime = function() {
        var n = this;
        var m = (new Date()).getTime();
        this._lastDelay = (m - this._lastUp) / 1000;
        this._delayFromStart = (m - this._lastStart) / 1000;
        this._lastUp = m;
        if (this._delayFromStart > this._currentAnimTotalDuration) {
            if (this._programIdle != false) {
                clearTimeout(this._programIdle)
            }
            this.dispatchEvent(LivingActor.Avatar.EVENT_AnimEnded, {
                anim: this._currentAnim
            }, false);
            this.stopped = true;
            if (this.autoIdle) {
                this.gotoRestpose();
                this._programIdle = setTimeout(function() {
                    n.startIdle()
                }, LivingActor.Avatar.IDLE_GAP)
            } else {
                this.gotoRestpose()
            }
        } else {
            f(this);
            if (!this.stopped) {
                this._programLoop = setTimeout(function() {
                    n.refreshTime()
                }, 1000 / this.fps)
            }
        }
    };
    this.enableSpeak = function(m) {
        this.talking = m
    };
    this.embed = function(n) {
        if (!this.isEmbeded) {
            this.isEmbeded = true;
            var u = LivingActor.$(n);
            if (!this.displayWidth) {
                this.displayWidth = this.width
            }
            if (!this.displayHeight) {
                this.displayHeight = this.height
            }
            var m = "";
            if (LivingActor.Avatar.ENABLE_CANVAS && !LivingActor.Tools.isAndroid && LivingActor.Tools.isCanvasSupported()) {
                m = "<canvas width='" + this.displayWidth + "' height='" + this.displayHeight + "' style='position:relative;pointer-events:none;z-index:200'></canvas>"
            }
            var q = this.offsetMode == "FREE";
            var t = q ? "" : "position:" + this.offsetMode;
            j = LivingActor.$("<div class='livingactoravatar' style='" + t + ";z-index:250'>" + m + "</div>");
            if (m != "") {
                this.html5Canvas = j.find("canvas").get(0)
            } else {
                this.html5Canvas = false
            }
            var p = this;
            j.click(function(v) {
                if (v.ctrlKey && v.shiftKey) {
                    p.dispatchEvent(LivingActor.Avatar.Event_ShiftClick, {})
                }
            });
            j.css({
                width: this.displayWidth,
                height: this.displayHeight
            });
            if (!q) {
                j.css({
                    left: this.x,
                    top: this.y
                })
            }
            u.append(j);
            if (!this.html5Canvas) {
                if (LivingActor.$.browser.chrome || LivingActor.$.browser.mozilla) {
                    for (var o = 0; o < this.animList.length; o++) {
                        if (this.animList && this.animList[o] && this.animList[o].isLoaded) {
                            var r = this.animList[o];
                            j.append("<div style=\"position:absolute;top:0;width:1px;height:1px;left:0;background:url('" + r.animPicture + "') 0 0 no-repeat\"/><div style=\"position:absolute;top:0;width:1px;height:1px;left:0;background:url('" + r.lipsPicture + "') 0 0 no-repeat\"/>")
                        }
                    }
                }
            }
            if (this.autoIdle) {
                this.startIdle()
            } else {
                this.gotoRestpose()
            }
            this.dispatchEvent(LivingActor.Avatar.Event_Embeded, {}, false)
        }
    };
    this.remove = function() {
        if (this.isEmbeded) {
            this.isEmbeded = false;
            if (j) {
                j.remove()
            }
        }
    };
    this.unload = function() {
        if (this.isEmbeded) {
            this.remove()
        }
        if (this.animList) {
            for (var m = 0; m < this.animList.length; m++) {
                this.animList[m].unload()
            }
        }
        this.isReady = false;
        this.isEmbeded = false;
        this.pendingLoad = null;
        this.loaded = false
    };
    this.startIdle = function() {
        if (this._programLoop != false) {
            clearTimeout(this._programLoop)
        }
        if (this._programIdle != false) {
            clearTimeout(this._programIdle)
        }
        this.enableSpeak(false);
        this.gotoRestpose();
        if (this.idleList.length > 0) {
            var m = LivingActor.Tools.rand(0, this.idleList.length - 1);
            var o = this.idleList[m];
            var n = o.getMinDuration();
            this.playAnim(o, n + LivingActor.Tools.randFloat(0, 2))
        }
    };
    this.stop = function() {
        if (this._programLoop != false) {
            clearTimeout(this._programLoop)
        }
        if (this._programIdle != false) {
            clearTimeout(this._programIdle)
        }
        this.stopped = true;
        this.gotoRestpose()
    };
    this.playAnim = function(o, m) {
        if (this._programLoop != false) {
            clearTimeout(this._programLoop)
        }
        if (this._programIdle != false) {
            clearTimeout(this._programIdle)
        }
        var n;
        if (typeof(o) == "string") {
            n = this.getAnim(o)
        } else {
            n = o
        }
        if (n) {
            l(this, n);
            this._currentAnimTotalDuration = m;
            this._lastStart = (new Date()).getTime();
            this._lastUp = this._lastStart;
            this.stopped = false;
            this.refreshTime()
        } else {
            this.warn(o + " animation do not exist")
        }
    };
    this.gotoAndStop = function(t, r, x) {
        var C;
        if (typeof(r) == "string") {
            C = this.getAnim(r, true)
        } else {
            C = r
        }
        var y = LivingActor.Avatar.PIC_COLS == 0 ? 10000 : LivingActor.Avatar.PIC_COLS;
        if (C) {
            l(this, C);
            var z = C.getFrame(t, x);
            var F = Math.floor((this.displayWidth - this.width) / 2);
            var p = Math.floor(this.displayHeight - this.height);
            if (!this.avatarKey) {
                var u = this.width * z.frame;
                if (!this.html5Canvas) {
                    j.find("div.base:visible").css("background-position", "-" + (-F + u) + "px 0px")
                } else {
                    var q = this.html5Canvas.getContext("2d");
                    q.clearRect(0, 0, this.html5Canvas.width, this.html5Canvas.height);
                    var L = C.animPictureDom;
                    q.drawImage(L, J, 0, this.width, this.height, F, 0, this.width, this.height)
                }
            } else {
                var J = this.width * (z.splitFrame[0] % y);
                var m = Math.floor(z.splitFrame[0] / y) * this.height;
                var H = this.width * (z.splitFrame[1] % y);
                var v = Math.floor(z.splitFrame[1] / y) * this.height;
                var G = this.width * (z.splitFrame[2] % y);
                var B = Math.floor(z.splitFrame[2] / y) * this.height;
                var E = this.width * (z.splitFrame[3] % y);
                var n = Math.floor(z.splitFrame[3] / y) * this.height;
                var A = Math.floor(this.height / 2);
                if (!this.html5Canvas) {
                    j.find("div.base.Hx:visible").css("background-position", (-(-F + J)) + "px " + (-(m)) + "px");
                    j.find("div.base.Hy:visible").css("background-position", (-(-F + H)) + "px " + (-(v)) + "px");
                    j.find("div.base.Bx:visible").css("background-position", (-(-F + G)) + "px " + (-(B + A)) + "px");
                    j.find("div.base.By:visible").css("background-position", (-(-F + E)) + "px " + (-(n + A)) + "px")
                } else {
                    var q = this.html5Canvas.getContext("2d");
                    q.clearRect(0, 0, this.html5Canvas.width, this.html5Canvas.height);
                    var L = C.animPictureDom;
                    q.drawImage(L, J, m, this.width, A, F, 0, this.width, A);
                    q.drawImage(L, H, v, this.width, A, F, 0, this.width, A);
                    q.drawImage(L, G, A + B, this.width, A, F, A, this.width, A);
                    q.drawImage(L, E, A + n, this.width, A, F, A, this.width, A)
                }
            }
            if (this.talking) {
                if (z.inloop) {
                    var I = t - this._lastLipsRefresh;
                    var D = 1 / this.lipsfps;
                    if (I > 0.9 * D) {
                        this._lastLipsframe = z.loopframe;
                        this._lastLipsRefresh = t
                    }
                    if (this._lastLipsframe < 0) {
                        this._lastLipsframe = 0
                    }
                    var K = this.width * (this._lastLipsframe % y);
                    var o = Math.floor(this._lastLipsframe / y) * this.height;
                    if (!this.html5Canvas) {
                        j.find("div.lips:visible").show().css("background-position", "-" + (-F + K) + "px -" + o + "px")
                    } else {
                        var q = this.html5Canvas.getContext("2d");
                        var w = C.lipsPictureDom;
                        q.drawImage(w, K, o, this.width, this.height, F, 0, this.width, this.height)
                    }
                } else {
                    var K = this.width * (z.frame % y);
                    var o = Math.floor(z.frame / y) * this.height;
                    this._lastLipsRefresh = 0;
                    this._lastLipsframe = -1;
                    if (!this.html5Canvas) {
                        j.find("div.lips:visible").css("background-position", "-" + (-F + K) + "px -" + o + "px")
                    } else {
                        var q = this.html5Canvas.getContext("2d");
                        var w = C.lipsPictureDom;
                        q.drawImage(w, K, o, this.width, this.height, F, 0, this.width, this.height)
                    }
                }
                if (!this.html5Canvas) {
                    j.find("div.lips:visible").show()
                }
            } else {
                if (!this.html5Canvas) {
                    j.find("div.lips:visible").hide()
                }
            }
        } else {
            if (r != LivingActor.Avatar.RESTPOSE) {
                this.gotoAndStop(t, LivingActor.Avatar.RESTPOSE, x)
            }
        }
    };
    this.gotoRestpose = function() {
        if (j) {
            var p = this.getAnim(LivingActor.Avatar.RESTPOSE, true);
            if (p) {
                l(this, p);
                var o = Math.floor((this.displayWidth - this.width) / 2);
                if (!this.avatarKey) {
                    if (!this.html5Canvas) {
                        j.find("div.anim").css("background-position", o + "px 0px")
                    } else {
                        var n = this.html5Canvas.getContext("2d");
                        n.clearRect(0, 0, this.html5Canvas.width, this.html5Canvas.height);
                        var m = p.animPictureDom;
                        n.drawImage(m, 0, 0, this.width, this.height, o, 0, this.width, this.height)
                    }
                } else {
                    var q = Math.floor(this.height / 2);
                    if (!this.html5Canvas) {
                        var r = this.width - o;
                        j.find("div.base.Hx:visible").css("background-position", o + "px 0px");
                        j.find("div.base.Hy:visible").css("background-position", "-" + r + "px 0px");
                        j.find("div.base.Bx:visible").css("background-position", o + "px -" + q + "px");
                        j.find("div.base.By:visible").css("background-position", "-" + r + "px -" + q + "px")
                    } else {
                        var n = this.html5Canvas.getContext("2d");
                        n.clearRect(0, 0, this.html5Canvas.width, this.html5Canvas.height);
                        var m = p.animPictureDom;
                        n.drawImage(m, 0, 0, this.width, q, o, 0, this.width, q);
                        n.drawImage(m, this.width, 0, this.width, q, o, 0, this.width, q);
                        n.drawImage(m, 0, q, this.width, q, o, q, this.width, q);
                        n.drawImage(m, this.width, q, this.width, q, o, q, this.width, q)
                    }
                }
                if (!this.html5Canvas) {
                    j.find("div.lips").hide()
                }
            } else {
                this.warn(LivingActor.Avatar.RESTPOSE + " animation do not exist")
            }
        }
    };
    this.getAnim = function(m, o) {
        for (var n = 0; n < this.animList.length; n++) {
            if (this.animList[n].name == m) {
                if (!o || this.animList[n].isLoaded) {
                    return this.animList[n]
                }
            }
        }
        return false
    };
    this.addAnim = function(m) {
        if (!this.animList) {
            this.animList = []
        }
        if (!this.idleList) {
            this.idleList = []
        }
        this.animList.push(m);
        if (!LivingActor.Avatar.FORCE_FPS && this.fps < m.fps) {
            this.fps = m.fps
        }
        if (m.priority == 1) {
            if (!this.priorityLoad) {
                this.priorityLoad = []
            }
            this.priorityLoad.push(m)
        }
    };
    this.loadAllAnimation = function() {
        this.addEventListener(LivingActor.Avatar.Event_AnimLoaded, this, this._loadAllAnimation);
        this._loadAllAnimation(this, null, null)
    };
    this._loadAllAnimation = function(p, o, q) {
        if (p.priorityLoad && p.priorityLoad.length > 0) {
            for (var m = p.priorityLoad.length - 1; m >= 0; m--) {
                if (p.priorityLoad && p.priorityLoad[m]) {
                    if (p.priorityLoad[m].isLoaded == false) {
                        if (!p.pendingLoad[p.priorityLoad[m].name]) {
                            p.loadAnimation(p.priorityLoad[m]);
                            k++
                        }
                    } else {
                        p.priorityLoad.splice(m, 1)
                    }
                    if (k >= 1) {
                        return
                    }
                }
            }
        }
        if (p.DLMode == LivingActor.Avatar.DLMODE_MINIMUM) {
            return
        }
        for (var n = 0; n < p.animList.length; n++) {
            if (k >= 1) {
                return
            }
            if (p.animList[n].isLoaded == false) {
                if (!p.pendingLoad[p.animList[n].name]) {
                    p.loadAnimation(p.animList[n]);
                    k++;
                    return
                }
            }
        }
        p.dispatchEvent(LivingActor.Avatar.Event_AllAnimLoaded, {}, false);
        p.isLoaded = true
    }
};
LivingActor.Avatar.EVENT_AnimEnded = "AnimEnded";
LivingActor.Avatar.Event_AnimLoaded = "AnimLoaded";
LivingActor.Avatar.Event_AvatarLoaded = "AvatarLoaded";
LivingActor.Avatar.Event_LoadError = "LoadError";
LivingActor.Avatar.Event_AllAnimLoaded = "AllAnimLoaded";
LivingActor.Avatar.Event_MinAnimSetLoaded = "MinAnimSetLoaded";
LivingActor.Avatar.Event_ShiftClick = "ShiftClick";
LivingActor.Avatar.Event_Embeded = "Embeded";
LivingActor.Avatar.RESTPOSE = "Restpose";
LivingActor.Avatar.FORCE_FPS = false;
LivingActor.Avatar.DEFAULT_FPS = 8;
LivingActor.Avatar.ENABLE_CANVAS = true;
LivingActor.Avatar.PIC_COLS = 5;
LivingActor.Avatar.DLMODE_MINIMUM = "MINIMUM";
LivingActor.Avatar.DLMODE_DIRECT = "DIRECT";
LivingActor.Avatar.DLMODE_DELAYED = "DELAYED";
LivingActor.Avatar.IDLE_GAP = 3000;
LivingActor.Avatar.IDCOUNTER = 1;
LivingActor.Avatar.prototype = new LivingActor.Events();
LivingActor.Avatar.prototype.constructor = LivingActor.Avatar;
LivingActor.AvatarAPIOptions = function(c) {
    this._anims = null;
    var b = c;
    var a = true;
    this.clear = function() {
        this._anims = []
    };
    this.addAnim = function(d, e, l) {
        var k = LivingActor.AvatarAPIOptions.NO_ERROR;
        if (!this._anims) {
            this._anims = []
        }
        var h = b ? b.getAnim(d, true) : null;
        if (h) {
            var j = h.getMinDuration();
            if (j > l) {
                k = LivingActor.AvatarAPIOptions.ERROR_tooShortDuration;
                l = j
            }
        } else {
            if (b) {
                k = LivingActor.AvatarAPIOptions.ERROR_unknownAnimation;
                return k
            }
        }
        var g = e + l;
        for (var f in this._anims) {
            if ((this._anims[f].toff < e && e < this._anims[f].tend) || (this._anims[f].toff < g && g < this._anims[f].tend) || (e < this._anims[f].toff && this._anims[f].tend > g)) {
                k = LivingActor.AvatarAPIOptions.ERROR_overlap;
                return k
            }
        }
        this._anims.push({
            n: d,
            toff: e,
            dur: l,
            tend: e + l
        });
        return k
    };
    this.disableVoice = function() {
        a = false
    };
    this.enableVoice = function() {
        a = true
    };
    this.isVoiceEnabled = function() {
        return a
    };
    this.pushInS2AObject = function(d) {
        if (!d) {
            return
        }
        for (var e in this._anims) {
            d.addAnim(this._anims[e]["n"], this._anims[e]["dur"], this._anims[e]["toff"])
        }
    }
};
LivingActor.AvatarAPIOptions.prototype = new LivingActor.Events();
LivingActor.AvatarAPIOptions.prototype.constructor = LivingActor.AvatarAPIOptions;
LivingActor.AvatarAPIOptions.ERROR_tooShortDuration = "Too short duration";
LivingActor.AvatarAPIOptions.ERROR_overlap = "Overlap";
LivingActor.AvatarAPIOptions.ERROR_unknownAnimation = "Unknown animation";
LivingActor.AvatarAPIOptions.NO_ERROR = "ok";
LivingActor.AvatarAPIScenarii = function(j) {
    if (!j) {
        j = {}
    }
    if (j.autoPlay == null) {
        j.autoPlay = false
    }
    if (j.onLoadingStart == null) {
        j.onLoadingStart = false
    }
    if (j.onLoadingComplete == null) {
        j.onLoadingComplete = false
    }
    if (j.onFinished == null) {
        j.onFinished = false
    }
    this.hasError = false;
    this.options = j;
    var h = true;
    var c = [];
    var f = 0;
    var g = 0;
    var a = 0;
    var e = false;
    var d = false;
    var b = function(k) {
        if (c.length > a) {
            var l = c[a];
            if (d) {
                l.play()
            }
            a++
        } else {
            if (typeof(k.options.onFinished) == "function") {
                try {
                    k.options.onFinished(LivingActor.AvatarAPIScenarii.EVENT_onFinished)
                } catch (m) {}
            }
        }
    };
    this.addSpeechTurn = function(l) {
        f++;
        var k = this;
        c.push(l);
        if (l.isReady()) {
            g++
        } else {
            h = false;
            l.addEventListener(LivingActor.AvatarAPISpeechTurn.EVENT_allLoaded, null, function(p, m, n) {
                g++;
                if (n.hasError === true) {
                    k.hasError = true
                }
                if (f === g) {
                    k.dispatchEvent(LivingActor.AvatarAPIScenarii.EVENT_allPreloaded, {});
                    h = n.hasError === true ? false : true;
                    if (h) {
                        k.info("Ready to play the Scenarii");
                        if (k.options.autoPlay === true) {
                            k.play()
                        }
                    } else {
                        k.error("Generation error: Cannot run the Scenarii.")
                    }
                    if (typeof(k.options.onLoadingComplete) == "function") {
                        try {
                            k.options.onLoadingComplete(LivingActor.AvatarAPIScenarii.EVENT_onLoadingComplete, {
                                isSuccess: !k.hasError
                            })
                        } catch (o) {}
                    }
                }
            })
        }
        l.addEventListener(LivingActor.AvatarAPISpeechTurn.EVENT_endPlaying, null, function(o, m, n) {
            b(k)
        })
    };
    this.play = function() {
        if (h && !d) {
            d = true;
            a = 0;
            b(this)
        }
    };
    this.pause = function() {
        if (h && d) {
            d = false;
            var k = c[a - 1];
            k.pause();
            this.dispatchEvent(LivingActor.AvatarAPISpeechTurn.EVENT_onPaused, {})
        }
    };
    this.resume = function() {
        if (h && !d) {
            d = true;
            var k = c[a - 1];
            k.resume();
            this.dispatchEvent(LivingActor.AvatarAPISpeechTurn.EVENT_onResume, {})
        }
    };
    this.isPaused = function() {
        return e
    };
    this.restart = function() {
        if (h) {
            var k = c[a - 1];
            k.stop();
            d = true;
            a = 0;
            b(this);
            this.dispatchEvent(LivingActor.AvatarAPISpeechTurn.EVENT_onRestart, {})
        }
    };
    this.isReady = function() {
        return h
    };
    (function(k) {
        if (typeof(k.options.onLoadingStart) == "function") {
            try {
                k.options.onLoadingStart(LivingActor.AvatarAPIScenarii.EVENT_onLoadingStart)
            } catch (l) {}
        }
    })(this)
};
LivingActor.AvatarAPIScenarii.prototype = new LivingActor.Events();
LivingActor.AvatarAPIScenarii.prototype.constructor = LivingActor.AvatarAPIScenarii;
LivingActor.AvatarAPIScenarii.EVENT_allPreloaded = "allPreloaded";
LivingActor.AvatarAPIScenarii.EVENT_loaderror = "error";
LivingActor.AvatarAPIScenarii.EVENT_onLoadingStart = "onLoadingStart";
LivingActor.AvatarAPIScenarii.EVENT_onLoadingComplete = "onLoadingComplete";
LivingActor.AvatarAPIScenarii.EVENT_onPaused = "onPaused";
LivingActor.AvatarAPIScenarii.EVENT_onResume = "onResume";
LivingActor.AvatarAPIScenarii.EVENT_onRestart = "onRestart";
LivingActor.AvatarAPIScenarii.EVENT_onFinished = "onFinished";
LivingActor.AvatarAPISpeechTurn = function() {
    this.avatars = [];
    var g = [];
    var c = [];
    var r = {};
    var q = true;
    var m = false;
    var o = 0;
    var h = 500;
    var l = 0;
    var k = false;
    var d = null;
    var p = false;
    var f = function(u, w, v) {
        if (k === true) {
            u.info("The Turn has more than one speaker.")
        }
        for (var t in u.avatars) {
            if (t === w.getAvatar().avatarKey) {
                u.warn("The Avatar has already a speech for this turn. Second Action ignored.");
                return true
            }
        }
        if (v === "xml" || v === "tts") {
            k = true
        }
        u.avatars[w.getAvatar().avatarKey] = w;
        return false
    };
    var j = function(t, w) {
        if (m) {
            if (l === g.length) {
                var v = w.sequence._duration;
                var u = 0;
                if ((o - v) > v) {
                    u = (o * 1000) - (Math.floor(v) * 1000)
                }
                setTimeout(function() {
                    if (h > 0) {
                        if (d) {
                            clearTimeout(d);
                            d = null;
                            p = false;
                            t.dispatchEvent(LivingActor.AvatarAPISpeechTurn.EVENT_endPlaying, {})
                        } else {
                            d = setTimeout(function() {
                                d = null;
                                p = false;
                                t.dispatchEvent(LivingActor.AvatarAPISpeechTurn.EVENT_endPlaying, {})
                            }, h)
                        }
                    } else {
                        p = false;
                        t.dispatchEvent(LivingActor.AvatarAPISpeechTurn.EVENT_endPlaying, {})
                    }
                    m = false
                }, u)
            }
        }
    };
    var n = function(u) {
        if (c && c.length <= 0) {
            q = true
        }
        for (var t in r) {
            if (r[t] == true) {
                q = false
            }
        }
        if (true === q) {
            u.dispatchEvent(LivingActor.AvatarAPISpeechTurn.EVENT_allLoaded, {
                hasError: false
            })
        }
    };
    var b = function(v, u, x, t) {
        var w = "xml";
        if (f(v, u, w)) {
            return false
        }
        var y = v.avatars[u.getAvatar().avatarKey];
        LivingActor.Ajax.DEFAULT_TIMEOUT = 90000;
        g.push({
            type: w,
            sequenceID: x,
            avatar: y,
            options: t
        });
        y.addEventListener(LivingActor.AvatarAPI.EVENT_onSequenceEnd, null, function(B, z, A) {
            j(v, A)
        })
    };
    var a = function(w, u, x, t) {
        g.push({
            type: "anim",
            avatar: u,
            duration: x,
            options: t
        });
        var y = 0;
        for (var v = 0; v < t._anims.length; v++) {
            y += t._anims[v].tend
        }
        if (y > o) {
            o = y
        }
    };
    var e = function(v, u, y, t) {
        var w = "tts";
        if (f(v, u, w)) {
            return false
        }
        var x = (Date.now()) + Math.floor(Math.random() * 1000);
        var z = v.avatars[u.getAvatar().avatarKey];
        LivingActor.Ajax.DEFAULT_TIMEOUT = 90000;
        c.push(x);
        z.textToSpeechPreGenerate(x, y, t);
        g.push({
            type: "tts",
            sequenceID: x,
            avatar: z,
            options: t
        });
        z.addEventListener(LivingActor.AvatarAPI.EVENT_PreGenReady, null, function(E, B, C) {
            var D = false;
            for (var A = 0; A < c.length && !D; A++) {
                if (c[A] === C.ref) {
                    D = true;
                    c.splice(A, 1);
                    n(v)
                }
            }
        });
        z.addEventListener(LivingActor.AvatarAPI.EVENT_WebServiceError, null, function(C, A, B) {
            v.dispatchEvent(LivingActor.AvatarAPISpeechTurn.EVENT_allLoaded, {
                hasError: true
            })
        });
        z.addEventListener(LivingActor.AvatarAPI.EVENT_onSequenceEnd, null, function(C, A, B) {
            j(v, B)
        })
    };
    this.getActions = function() {
        return g
    };
    this.isReady = function() {
        return q
    };
    this.getXmlSequence = function(u, w, t) {
        var v = this;
        if (u.getAvatar() && u.getAvatar().isReady) {
            b(v, u, w, t)
        } else {
            q = false;
            r[u.getID()] = true;
            u.addEventListener(LivingActor.AvatarAPI.EVENT_AvatarComplete, null, function(z, x, y) {
                r[u.getID()] = false;
                b(v, u, w, t);
                n(v)
            })
        }
    };
    this.textToSpeech = function(u, w, t) {
        q = false;
        var v = this;
        if (u.getAvatar() && u.getAvatar().isReady) {
            e(v, u, w, t)
        } else {
            r[u.getID()] = true;
            u.addEventListener(LivingActor.AvatarAPI.EVENT_AvatarComplete, null, function(z, x, y) {
                r[u.getID()] = false;
                e(v, u, w, t);
                n(v)
            })
        }
    };
    this.playDuringTime = function(u, w, t) {
        var v = this;
        if (u.getAvatar() && u.getAvatar().isReady) {
            a(v, u, w, t)
        } else {
            q = false;
            r[u.getID()] = true;
            u.addEventListener(LivingActor.AvatarAPI.EVENT_AvatarComplete, null, function(z, x, y) {
                r[u.getID()] = false;
                a(v, u, w, t);
                n(v)
            })
        }
    };
    this.play = function() {
        if (!q) {
            return false
        } else {
            p = true;
            m = true;
            l = 0;
            for (var t = 0; t < g.length; t++) {
                l++;
                switch (g[t].type) {
                    case "tts":
                        g[t].avatar.runPreGeneratedTTS(g[t].sequenceID, g[t].options);
                        break;
                    case "xml":
                        g[t].avatar.getXmlSequence(g[t].sequenceID, g[t].options);
                        break;
                    case "anim":
                        g[t].avatar.playDuringTime(g[t].duration, g[t].options);
                        break;
                    default:
                        break
                }
            }
            return true
        }
    };
    this.pause = function() {
        if (q) {
            m = false;
            for (var t = 0; t < g.length; t++) {
                g[t].avatar.pause()
            }
        }
    };
    this.resume = function() {
        if (q) {
            m = true;
            if (!p) {
                this.play()
            } else {
                for (var t = 0; t < g.length; t++) {
                    g[t].avatar.resume()
                }
            }
        }
    };
    this.stop = function() {
        if (q) {
            m = false;
            p = false;
            for (var t = 0; t < g.length; t++) {
                switch (g[t].type) {
                    case "tts":
                    case "xml":
                        g[t].avatar.stop();
                        break;
                    default:
                        break
                }
            }
        }
    };
    this.setPause = function(t) {
        if (t < 0) {
            t = 0
        } else {
            if (1 <= t && t <= 20) {
                this.warn("Duration must be in milliseconds.")
            }
        }
        h = t
    }
};
LivingActor.AvatarAPISpeechTurn.prototype = new LivingActor.Events();
LivingActor.AvatarAPISpeechTurn.prototype.constructor = LivingActor.AvatarAPISpeechTurn;
LivingActor.AvatarAPISpeechTurn.EVENT_allLoaded = "allLoaded";
LivingActor.AvatarAPISpeechTurn.EVENT_error = "error";
LivingActor.AvatarAPISpeechTurn.EVENT_startPlaying = "startPlaying";
LivingActor.AvatarAPISpeechTurn.EVENT_endPlaying = "endPlaying";
LivingActor.AvatarAPISpeechTurn.EVENT_onAnim = "onAnim";
LivingActor.AvatarAPI = function(r) {
    if (!r) {
        r = {}
    }
    if (r.width == null) {
        r.width = false
    }
    if (r.avatar == null) {
        r.avatar = false
    }
    if (r.avatar_txt == null) {
        r.avatar_txt = false
    }
    if (r.divid == null) {
        r.divid = false
    }
    if (r.progressiveDL == null) {
        r.progressiveDL = true
    }
    if (r.defaultBehavior == null) {
        r.defaultBehavior = LivingActor.S2A.Behavior_dynamic
    }
    if (r.onLoadStart == null) {
        r.onLoadStart = false
    }
    if (r.onLoadComplete == null) {
        r.onLoadComplete = false
    }
    if (r.onSoundLoaded == null) {
        r.onSoundLoaded = false
    }
    if (r.onPregenReady == null) {
        r.onPregenReady = false
    }
    if (r.disableSound == null) {
        r.disableSound = false
    }
    if (r.onPlayEnd == null) {
        r.onPlayEnd = false
    }
    if (r.onTTSError == null) {
        r.onTTSError = false
    }
    if (r.key == null) {
        r.key = false
    }
    if (r.voice == null) {
        r.voice = false
    }
    if (r.webservice == null) {
        r.webservice = "http://www.livingactor.com/AvatarAPI/"
    }
    if (r.soundSwfLocation == null) {
        r.soundSwfLocation = "http://livingactor_us.s3.amazonaws.com/sequences/js/"
    }
    var g = window.location.pathname;
    var e = window.location.host;
    var o = ++LivingActor.AvatarAPI.IDCount;
    this.disableTTSAbort = false;
    this.options = r;
    var p = ["webservice", "soundSwfLocation", "avatar"];
    for (var m = 0; m < p.length; m++) {
        this.options[p[m]] = LivingActor.Tools.FormatURL(this.options[p[m]])
    }
    this._avatar = null;
    this._s2a = null;
    this._sequencePlayer = null;
    this._resourcesLoader = null;
    var n = this;
    var b = [];
    var f = [];
    var q = false;
    var a = false;
    var k = function(z, v) {
        var t = [];
        for (var u in z) {
            var y = z[u];
            switch (y.types()) {
                case "GoReturn":
                case "NoSpeak":
                case "Text":
                    break;
                case "Voice":
                    t.push(y.id());
                    if (!LivingActor.Tools.inArray(b, y.id())) {
                        for (var x in f) {
                            if (!f[x].error && f[x].ref == y.id()) {
                                try {
                                    f[x].loader.play();
                                    if (typeof(f[x].loader.muted) == "function") {
                                        f[x].loader.muted(n.GlobalParameters.Settings[0].mute)
                                    }
                                } catch (w) {}
                            }
                        }
                    }
                    break;
                case "Interface":
                case "Hide":
                case "Script":
                case "Place":
                case "Redirect":
                case "ExtendedView":
                default:
                    break
            }
        }
        b = t
    };
    if (k) {}
    var d = function(C, u) {
        if (C) {
            var x = u.getTrackList();
            for (var z in x) {
                var t = x[z];
                var A = t.getBlocks();
                for (var y in A) {
                    var v = A[y];
                    if (v.types() == "Auto") {
                        var B = LivingActor.S2A.generate(C, v.duration(), v.timeoffset());
                        t.removeBlock(v.id());
                        for (var w in B) {
                            t.addBlock(B[w])
                        }
                    }
                }
            }
        }
    };
    d();
    this.getID = function() {
        return o
    };
    this.stop = function() {
        if (this._sequencePlayer) {
            this._sequencePlayer.stop();
            b = [];
            for (var t in f) {
                try {
                    f[t].loader.pause();
                    f[t].loader.unload()
                } catch (u) {}
            }
            f = []
        }
        if (this._avatar) {
            this._avatar.startIdle()
        }
    };
    this.mute = function() {
        for (var t in f) {
            try {
                f[t].loader.muted(true)
            } catch (u) {
                this.warn(u.message)
            }
        }
        q = true
    };
    this.unmute = function() {
        for (var t in f) {
            try {
                f[t].loader.muted(false)
            } catch (u) {
                this.warn(u.message)
            }
        }
        q = false
    };
    this.isMute = function() {
        return q
    };
    this.pause = function() {
        if (this._sequencePlayer) {
            for (var t in f) {
                try {
                    f[t].loader.pause()
                } catch (u) {
                    this.warn(u.message)
                }
            }
            b = [];
            this._sequencePlayer.pause()
        }
    };
    this.resume = function() {
        if (this._sequencePlayer) {
            this._sequencePlayer.resume()
        }
    };
    this.isPaused = function() {
        if (this._sequencePlayer) {
            return this._sequencePlayer.isPaused()
        }
        return false
    };
    this.load = function() {
        var t = this.options.progressiveDL;
        this.addEventListener(LivingActor.AvatarAPI.EVENT_AvatarReady, null, function(w, u, v) {
            w.log("Minimum set of avatar has been loaded");
            if (t) {
                w.embed(w.options.divid)
            }
        });
        this.addEventListener(LivingActor.AvatarAPI.EVENT_AvatarComplete, null, function(w, u, v) {
            w.log("All avatar's animations has been loaded");
            if (!t) {
                w.embed(w.options.divid)
            }
        });
        this.manualLoad(this.options.avatar, this.options.avatar_txt)
    };
    this.manualLoad = function(u, x) {
        if (typeof(this.options.onLoadStart) == "function") {
            try {
                this.options.onLoadStart()
            } catch (w) {}
        }
        var v = this;
        var t = new LivingActor.Avatar(u);
        t.addEventListener(LivingActor.Avatar.Event_LoadError, document, function(A, y, z) {
            v.warn(y, z)
        });
        t.addEventListener(LivingActor.Avatar.Event_AvatarLoaded, document, function(A, y, z) {
            A.loadAllAnimation();
            v._avatar = A
        });
        t.addEventListener(LivingActor.Avatar.Event_MinAnimSetLoaded, document, function(B, y, z) {
            v.dispatchEvent(LivingActor.AvatarAPI.EVENT_AvatarReady, {
                avatar: B
            });
            if (typeof(v.options.onLoadComplete) == "function") {
                try {
                    v.options.onLoadComplete(LivingActor.AvatarAPI.EVENT_AvatarReady)
                } catch (A) {}
            }
        });
        t.addEventListener(LivingActor.Avatar.Event_AllAnimLoaded, document, function(B, y, z) {
            v.dispatchEvent(LivingActor.AvatarAPI.EVENT_AvatarComplete, {
                avatar: B
            });
            if (typeof(v.options.onLoadComplete) == "function") {
                try {
                    v.options.onLoadComplete(LivingActor.AvatarAPI.EVENT_AvatarComplete)
                } catch (A) {}
            }
        });
        if (x) {
            t.loadAvatarFromText(u, "/", x)
        } else {
            t.loadAvatar(u)
        }
    };
    this.getAvatar = function() {
        return this._avatar
    };
    this.getAnimations = function() {
        if (!this._avatar) {
            this.warn("Avatar not loaded yet", true)
        } else {
            var u = [];
            for (var t in this._avatar.animList) {
                u.push(this._avatar.animList[t].name)
            }
            return u
        }
    };
    this.unload = function(t) {
        if (this._avatar) {
            this._avatar.unload();
            this._avatar = null
        }
    };
    this.embed = function(t) {
        LivingActor.SoundResources.initSWFPlayer();
        if (this._avatar) {
            this._avatar.displayWidth = this.options.width;
            this._avatar.embed(t)
        }
    };
    this.playFromXML = function(y, F) {
        if (a != false) {
            clearTimeout(a)
        }
        var u = new LivingActor.Sequencer_parser();
        var B = u.parseXML(y);
        if (B.length > 0) {
            this._sequencePlayer.setAvatar(this._avatar);
            var w = B[0];
            if (F) {
                var z = w.getTrackList();
                for (var x in z) {
                    if (z[x].types() == "anim") {
                        w.removeTrack(z[x].id())
                    }
                }
                if (!this._s2a) {
                    this._s2a = new LivingActor.S2A()
                }
                this._s2a.clear();
                F.pushInS2AObject(this._s2a);
                var v = this._s2a.generateSequence(this._avatar, w.duration(), true, this.options.defaultBehavior);
                var C = v.getTrackList();
                for (var x in C) {
                    if (C[x].types() == "anim") {
                        w.addTrack(C[x], 0)
                    }
                }
            } else {
                d(this._avatar, w)
            }
            var G = false;
            if (this._resourcesLoader) {
                var t = LivingActor.Sequencer.extractResources(w);
                this.stop();
                this._resourcesLoader.abort();
                for (var E = 0; E < t.length; E++) {
                    switch (t[E].type) {
                        case LivingActor.Sequencer.TYPE_audio:
                            var A = LivingActor.Tools.FormatURL(t[E].file);
                            this._resourcesLoader.addfile(A, LivingActor.ResourcesLoader.TYPE_audio, t[E].blockid);
                            break
                    }
                }
                var D = this;
                this._resourcesLoader.removeEventListener(LivingActor.ResourcesLoader.EVENT_allFileLoaded, this);
                this._resourcesLoader.addEventListener(LivingActor.ResourcesLoader.EVENT_allFileLoaded, this, function(J, H, K) {
                    f = K;
                    if (typeof(D.options.onSoundLoaded) == "function") {
                        try {
                            D.options.onSoundLoaded()
                        } catch (I) {}
                    }
                    D.dispatchEvent(LivingActor.AvatarAPI.EVENT_SoundLoadEnded, {
                        sequence: w
                    }, false);
                    D._sequencePlayer.playSequence(w)
                });
                G = this._resourcesLoader.start()
            }
            if (!G) {
                this._sequencePlayer.playSequence(w)
            }
            return true
        } else {
            this.warn("Could not parse XML", true)
        }
        return false
    };
    var c = null;
    this.playDuringTime = function(x, w, u) {
        if (LivingActor.AvatarAPI.SERVER_OFF) {
            if (this._avatar) {
                if (!this._s2a) {
                    this._s2a = new LivingActor.S2A()
                }
                this._s2a.clear();
                this._sequencePlayer.setAvatar(this._avatar);
                if (w) {
                    w.pushInS2AObject(this._s2a)
                }
                var y = this._s2a.generateSequence(this._avatar, x, u, this.options.defaultBehavior);
                this._sequencePlayer.playSequence(y)
            }
        } else {
            var t = this.options.key;
            if (c) {
                c.abort()
            }
            var v = this;
            this.info("Empty Sequence request sent");
            c = LivingActor.Ajax.post(this.options.webservice + "s2a", {
                duration: x,
                publicKey: t,
                p: g,
                d: e
            }, function(A) {
                v.info("Empty Sequence answer receive");
                c = null;
                var z = v.playFromXML(A, w);
                if (!z) {
                    var B = new LivingActor.Xml(A);
                    var C = B.getValue(".message");
                    v.warn("Empty Sequence error : " + C, true)
                }
            }, function(z) {
                v.dispatchEvent(LivingActor.AvatarAPI.EVENT_WebServiceError, {
                    message: z
                });
                j = null
            }, false, false, true)
        }
    };
    var h = null;
    this.getXmlSequence = function(v, w) {
        this._resourcesLoader.activateSound();
        var t = this.options.key;
        if (h) {
            h.abort()
        }
        var u = this;
        this.info("Sequence request sent");
        h = LivingActor.Ajax.post(this.options.webservice + "read", {
            sequenceID: v,
            publicKey: t,
            p: g,
            d: e
        }, function(y) {
            u.info("Sequence answer receive");
            h = null;
            var x = u.playFromXML(y, w);
            if (!x) {
                var z = new LivingActor.Xml(y);
                var A = z.getValue(".message");
                u.warn("Sequence error : " + A, true)
            }
        }, function(x) {
            u.dispatchEvent(LivingActor.AvatarAPI.EVENT_WebServiceError, {
                message: x
            });
            j = null
        }, false, false, true)
    };
    this.loadXmlSequence = function(v) {
        this._resourcesLoader.activateSound();
        var t = this.options.key;
        if (h) {
            h.abort()
        }
        var u = this;
        this.info("Sequence request sent");
        h = LivingActor.Ajax.post(this.options.webservice + "read", {
            sequenceID: v,
            publicKey: t,
            p: g,
            d: e
        }, function(w) {
            u.info("Sequence answer receive");
            h = null;
            var z = new LivingActor.Sequencer_parser();
            var x = z.parseXML(w);
            if (x.length > 0) {
                u._sequencePlayer.setAvatar(this._avatar);
                var y = x[0];
                u.dispatchEvent(LivingActor.AvatarAPI.EVENT_onXMLLoaded, {
                    xml: w,
                    sequence: y
                })
            } else {
                u.dispatchEvent(LivingActor.AvatarAPI.EVENT_WebServiceError, {
                    message: w
                })
            }
        }, function(w) {
            u.dispatchEvent(LivingActor.AvatarAPI.EVENT_WebServiceError, {
                message: w
            })
        }, false, false, true)
    };
    var j = null;
    this.textToSpeech = function(x, w) {
        this._resourcesLoader.activateSound();
        var v = (!w || (w && w.isVoiceEnabled())) ? this.options.voice : false;
        var t = this.options.key;
        if (j) {
            j.abort()
        }
        var u = this;
        this.info("TTS request sent");
        j = LivingActor.Ajax.post(this.options.webservice + "s2a", {
            ttsVoiceID: v ? v : "",
            ttsText: x,
            publicKey: t,
            p: g,
            d: e
        }, function(z) {
            u.info("TTS answer receive");
            j = null;
            var y = u.playFromXML(z, w);
            if (!y) {
                var A = new LivingActor.Xml(z);
                var B = A.getValue(".message");
                u.warn("TTS error : " + B, true)
            }
        }, function(y) {
            u.dispatchEvent(LivingActor.AvatarAPI.EVENT_WebServiceError, {
                message: y
            });
            j = null
        }, false, false, true)
    };
    var l = {};
    this.textToSpeechPreGenerate = function(y, x, w) {
        this._resourcesLoader.activateSound();
        var v = (!w || (w && w.isVoiceEnabled())) ? this.options.voice : false;
        var t = this.options.key;
        var u = this;
        this.info("TTS request sent");
        LivingActor.Ajax.post(this.options.webservice + "s2a", {
            ttsVoiceID: v ? v : "",
            ttsText: x,
            publicKey: t,
            p: g,
            d: e
        }, function(z) {
            u.info("TTS answer receive");
            var A = new LivingActor.Xml(z);
            var B = A.getValue(".message");
            if (B && B.count > 0) {
                u.warn("TTS error : " + B, true);
                u.dispatchEvent(LivingActor.AvatarAPI.EVENT_WebServiceError, {
                    message: z
                })
            } else {
                l[y] = {
                    xml: z,
                    options: w
                };
                u.dispatchEvent(LivingActor.AvatarAPI.EVENT_PreGenReady, {
                    ref: y
                })
            }
        }, function(z) {
            u.dispatchEvent(LivingActor.AvatarAPI.EVENT_WebServiceError, {
                message: z
            });
            j = null
        }, false, false, true)
    };
    this.runPreGeneratedTTS = function(u) {
        if (l[u]) {
            var t = n.playFromXML(l[u].xml, l[u].options);
            return t
        }
        return false
    };
    this.startIdle = function(u) {
        if (!u) {
            u = 0
        }
        if (a != false) {
            clearTimeout(a)
        }
        var t = this.getAvatar();
        if (t) {
            if (u <= 0) {
                t.startIdle()
            } else {
                a = setTimeout(function() {
                    t.startIdle()
                }, 2000)
            }
        }
    };
    (function(t) {
        LivingActor.$(function() {
            if (t.options.autoLoad === true) {
                t.load()
            }
            if (!t._sequencePlayer) {
                t._sequencePlayer = new LivingActor.Sequencer();
                t._sequencePlayer.addBlockParseFct(k);
                t._sequencePlayer.addEventListener(LivingActor.Sequencer.EVENT_end, this, function(x, w, y) {
                    t.dispatchEvent(LivingActor.AvatarAPI.EVENT_onSequenceEnd, {
                        sequence: y.sequence
                    }, false);
                    var v = t.getAvatar();
                    v.gotoRestpose();
                    if (v.autoIdle) {
                        t.startIdle(2000)
                    }
                })
            }
            if (typeof(t.options.onTTSError) == "function") {
                try {
                    t.addEventListener(LivingActor.AvatarAPI.EVENT_WebServiceError, null, t.options.onTTSError)
                } catch (u) {}
            }
            if (typeof(t.options.onPregenReady) == "function") {
                try {
                    t.addEventListener(LivingActor.AvatarAPI.EVENT_PreGenReady, null, t.options.onPregenReady)
                } catch (u) {}
            }
            if (typeof(t.options.onPlayEnd) == "function") {
                try {
                    t._sequencePlayer.addEventListener(LivingActor.Sequencer.EVENT_end, null, t.options.onPlayEnd)
                } catch (u) {}
            }
            LivingActor.SoundResources.soundSwfPlayerLocation = t.options.soundSwfLocation;
            if (t.options.disableSound !== true) {
                t._resourcesLoader = new LivingActor.ResourcesLoader()
            }
        })
    })(this)
};
LivingActor.AvatarAPI.prototype = new LivingActor.Events();
LivingActor.AvatarAPI.prototype.constructor = LivingActor.AvatarAPI;
LivingActor.AvatarAPI.IDCount = 0;
LivingActor.AvatarAPI.EVENT_AvatarReady = "AvatarReady";
LivingActor.AvatarAPI.EVENT_AvatarComplete = "AvatarComplete";
LivingActor.AvatarAPI.EVENT_WebServiceError = "WebServiceError";
LivingActor.AvatarAPI.EVENT_SoundLoadEnded = "SoundLoadEnded";
LivingActor.AvatarAPI.EVENT_PreGenReady = "PreGenReady";
LivingActor.AvatarAPI.EVENT_onSequenceEnd = "onSequenceEnd";
LivingActor.AvatarAPI.EVENT_onXMLLoaded = "onXMLLoaded";
LivingActor.AvatarAPI.SERVER_OFF = false;
var LA_AudioPlayerLite = function() {
    this.swfName = "LA_AudioPlayer.swf";
    this.playerID = "LA_AudioPlayer" + Math.floor(10000 * Math.random());
    if (!LA_AudioPlayerLite.map) {
        LA_AudioPlayerLite.map = {}
    }
    LA_AudioPlayerLite.map[this.playerID] = this;
    this.onLoaded = null;
    this.onError = null;
    this.onEnd = null;
    this.onPause = null;
    this.onStart = null
};
LA_AudioPlayerLite.prototype.embed = function(d, c) {
    var e = "LAS" + Math.round(10000 * Math.random(), 0);
    if (c) {
        c("body").append("<div id='" + e + "'></div>")
    } else {
        document.body.innerHTML += "<div id='" + e + "'></div>"
    }
    var a = {
        playerID: this.playerID
    };
    var f = {
        menu: "false",
        wmode: "transparent",
        allowScriptAccess: "always"
    };
    var b = {
        id: this.playerID,
        name: this.playerID
    };
    LivingActor.swfobject.embedSWF(this.FormatURL(d + this.swfName), e, "1", "1", "9.0.0", "", a, f, b);
    if (c) {
        c("#" + this.playerID).css({
            position: "absolute",
            top: 0,
            left: 0
        })
    }
};
LA_AudioPlayerLite.prototype.FormatURL = function(a) {
    if (a) {
        var c = /^(https?:)/;
        var b = (("https:" == document.location.protocol) ? "https:" : "http:");
        a = a.replace(c, b)
    }
    return a
};
LA_AudioPlayerLite.prototype.GetE = function(a) {
    return document.getElementById(a)
};
LA_AudioPlayerLite.prototype.getPlayer = function(a) {
    return (window && window[a]) ? window[a] : document[a]
};
LA_AudioPlayerLite.prototype.AS_TLCommand = function(a) {
    return this.getPlayer(this.playerID).AS_TLCommand(a)
};
LA_AudioPlayerLite.prototype.load = function(a) {
    return this.AS_TLCommand({
        action: "load",
        url: a
    })
};
LA_AudioPlayerLite.prototype.stopAll = function() {
    return this.AS_TLCommand({
        action: "stopAll"
    })
};
LA_AudioPlayerLite.prototype.play = function(a) {
    this.AS_TLCommand({
        action: "play",
        ref: a
    })
};
LA_AudioPlayerLite.prototype.pause = function(a) {
    this.AS_TLCommand({
        action: "pause",
        ref: a
    })
};
LA_AudioPlayerLite.prototype.stop = function(a) {
    this.AS_TLCommand({
        action: "stop",
        ref: a
    })
};
LA_AudioPlayerLite.prototype.unload = function(a) {
    this.AS_TLCommand({
        action: "unload",
        ref: a
    })
};
LA_AudioPlayerLite.prototype.duration = function(a) {
    return this.AS_TLCommand({
        action: "duration",
        ref: a
    })
};
LA_AudioPlayerLite.prototype.volume = function(b, a) {
    if (b) {
        return this.AS_TLCommand({
            action: "volume",
            volume: b,
            ref: a
        })
    } else {
        return this.AS_TLCommand({
            action: "volume"
        })
    }
};
LA_AudioPlayerLite.onEvent = function(a, c, b) {
    var d = LA_AudioPlayerLite.map[a];
    if (d) {
        if (typeof(d[c]) == "function") {
            d[c](b)
        }
    }
};
LivingActor.swfobject = function() {
    var b = "undefined",
        Q = "object",
        n = "Shockwave Flash",
        p = "ShockwaveFlash.ShockwaveFlash",
        P = "application/x-shockwave-flash",
        m = "SWFObjectExprInst",
        j = window,
        K = document,
        T = navigator,
        o = [],
        N = [],
        i = [],
        d = [],
        J, Z = null,
        M = null,
        l = null,
        e = false,
        A = false;
    var h = function() {
        var v = typeof K.getElementById != b && typeof K.getElementsByTagName != b && typeof K.createElement != b,
            AC = [0, 0, 0],
            x = null;
        if (typeof T.plugins != b && typeof T.plugins[n] == Q) {
            x = T.plugins[n].description;
            if (x && !(typeof T.mimeTypes != b && T.mimeTypes[P] && !T.mimeTypes[P].enabledPlugin)) {
                x = x.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                AC[0] = parseInt(x.replace(/^(.*)\..*$/, "$1"), 10);
                AC[1] = parseInt(x.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                AC[2] = /r/.test(x) ? parseInt(x.replace(/^.*r(.*)$/, "$1"), 10) : 0
            }
        } else {
            if (typeof j.ActiveXObject != b) {
                var y = null,
                    AB = false;
                try {
                    y = new ActiveXObject(p + ".7")
                } catch (t) {
                    try {
                        y = new ActiveXObject(p + ".6");
                        AC = [6, 0, 21];
                        y.AllowScriptAccess = "always"
                    } catch (t) {
                        if (AC[0] == 6) {
                            AB = true
                        }
                    }
                    if (!AB) {
                        try {
                            y = new ActiveXObject(p)
                        } catch (t) {}
                    }
                }
                if (!AB && y) {
                    try {
                        x = y.GetVariable("$version");
                        if (x) {
                            x = x.split(" ")[1].split(",");
                            AC = [parseInt(x[0], 10), parseInt(x[1], 10), parseInt(x[2], 10)]
                        }
                    } catch (t) {}
                }
            }
        }
        var AD = T.userAgent.toLowerCase(),
            r = T.platform.toLowerCase(),
            AA = /webkit/.test(AD) ? parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
            q = false,
            z = r ? /win/.test(r) : /win/.test(AD),
            w = r ? /mac/.test(r) : /mac/.test(AD);
        /*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/
        return {
            w3cdom: v,
            pv: AC,
            webkit: AA,
            ie: q,
            win: z,
            mac: w
        }
    }();
    var L = function() {
        if (!h.w3cdom) {
            return
        }
        f(H);
        if (h.ie && h.win) {
            try {
                K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");
                J = C("__ie_ondomload");
                if (J) {
                    I(J, "onreadystatechange", S)
                }
            } catch (q) {}
        }
        if (h.webkit && typeof K.readyState != b) {
            Z = setInterval(function() {
                if (/loaded|complete/.test(K.readyState)) {
                    E()
                }
            }, 10)
        }
        if (typeof K.addEventListener != b) {
            K.addEventListener("DOMContentLoaded", E, null)
        }
        R(E)
    }();

    function S() {
        if (J.readyState == "complete") {
            if (J.parentNode) {
                J.parentNode.removeChild(J)
            }
            E()
        }
    }

    function E() {
        if (e) {
            return
        }
        if (h.ie && h.win) {
            var v = a("span");
            try {
                var u = K.getElementsByTagName("body")[0].appendChild(v);
                u.parentNode.removeChild(u)
            } catch (w) {
                return
            }
        }
        e = true;
        if (Z) {
            clearInterval(Z);
            Z = null
        }
        var q = o.length;
        for (var r = 0; r < q; r++) {
            o[r]()
        }
    }

    function f(q) {
        if (e) {
            q()
        } else {
            o[o.length] = q
        }
    }

    function R(r) {
        if (typeof j.addEventListener != b) {
            j.addEventListener("load", r, false)
        } else {
            if (typeof K.addEventListener != b) {
                K.addEventListener("load", r, false)
            } else {
                if (typeof j.attachEvent != b) {
                    I(j, "onload", r)
                } else {
                    if (typeof j.onload == "function") {
                        var q = j.onload;
                        j.onload = function() {
                            q();
                            r()
                        }
                    } else {
                        j.onload = r
                    }
                }
            }
        }
    }

    function H() {
        var t = N.length;
        for (var q = 0; q < t; q++) {
            var u = N[q].id;
            if (h.pv[0] > 0) {
                var r = C(u);
                if (r) {
                    N[q].width = r.getAttribute("width") ? r.getAttribute("width") : "0";
                    N[q].height = r.getAttribute("height") ? r.getAttribute("height") : "0";
                    if (c(N[q].swfVersion)) {
                        if (h.webkit && h.webkit < 312) {
                            Y(r)
                        }
                        W(u, true)
                    } else {
                        if (N[q].expressInstall && !A && c("6.0.65") && (h.win || h.mac)) {
                            k(N[q])
                        } else {
                            O(r)
                        }
                    }
                }
            } else {
                W(u, true)
            }
        }
    }

    function Y(t) {
        var q = t.getElementsByTagName(Q)[0];
        if (q) {
            var w = a("embed"),
                y = q.attributes;
            if (y) {
                var v = y.length;
                for (var u = 0; u < v; u++) {
                    if (y[u].nodeName == "DATA") {
                        w.setAttribute("src", y[u].nodeValue)
                    } else {
                        w.setAttribute(y[u].nodeName, y[u].nodeValue)
                    }
                }
            }
            var x = q.childNodes;
            if (x) {
                var z = x.length;
                for (var r = 0; r < z; r++) {
                    if (x[r].nodeType == 1 && x[r].nodeName == "PARAM") {
                        w.setAttribute(x[r].getAttribute("name"), x[r].getAttribute("value"))
                    }
                }
            }
            t.parentNode.replaceChild(w, t)
        }
    }

    function k(w) {
        A = true;
        var u = C(w.id);
        if (u) {
            if (w.altContentId) {
                var y = C(w.altContentId);
                if (y) {
                    M = y;
                    l = w.altContentId
                }
            } else {
                M = G(u)
            }
            if (!(/%$/.test(w.width)) && parseInt(w.width, 10) < 310) {
                w.width = "310"
            }
            if (!(/%$/.test(w.height)) && parseInt(w.height, 10) < 137) {
                w.height = "137"
            }
            K.title = K.title.slice(0, 47) + " - Flash Player Installation";
            var z = h.ie && h.win ? "ActiveX" : "PlugIn",
                q = K.title,
                r = "MMredirectURL=" + j.location + "&MMplayerType=" + z + "&MMdoctitle=" + q,
                x = w.id;
            if (h.ie && h.win && u.readyState != 4) {
                var t = a("div");
                x += "SWFObjectNew";
                t.setAttribute("id", x);
                u.parentNode.insertBefore(t, u);
                u.style.display = "none";
                var v = function() {
                    u.parentNode.removeChild(u)
                };
                I(j, "onload", v)
            }
            U({
                data: w.expressInstall,
                id: m,
                width: w.width,
                height: w.height
            }, {
                flashvars: r
            }, x)
        }
    }

    function O(t) {
        if (h.ie && h.win && t.readyState != 4) {
            var r = a("div");
            t.parentNode.insertBefore(r, t);
            r.parentNode.replaceChild(G(t), r);
            t.style.display = "none";
            var q = function() {
                t.parentNode.removeChild(t)
            };
            I(j, "onload", q)
        } else {
            t.parentNode.replaceChild(G(t), t)
        }
    }

    function G(v) {
        var u = a("div");
        if (h.win && h.ie) {
            u.innerHTML = v.innerHTML
        } else {
            var r = v.getElementsByTagName(Q)[0];
            if (r) {
                var w = r.childNodes;
                if (w) {
                    var q = w.length;
                    for (var t = 0; t < q; t++) {
                        if (!(w[t].nodeType == 1 && w[t].nodeName == "PARAM") && !(w[t].nodeType == 8)) {
                            u.appendChild(w[t].cloneNode(true))
                        }
                    }
                }
            }
        }
        return u
    }

    function U(AG, AE, t) {
        var q, v = C(t);
        if (v) {
            if (typeof AG.id == b) {
                AG.id = t
            }
            if (h.ie && h.win) {
                var AF = "";
                for (var AB in AG) {
                    if (AG[AB] != Object.prototype[AB]) {
                        if (AB.toLowerCase() == "data") {
                            AE.movie = AG[AB]
                        } else {
                            if (AB.toLowerCase() == "styleclass") {
                                AF += ' class="' + AG[AB] + '"'
                            } else {
                                if (AB.toLowerCase() != "classid") {
                                    AF += " " + AB + '="' + AG[AB] + '"'
                                }
                            }
                        }
                    }
                }
                var AD = "";
                for (var AA in AE) {
                    if (AE[AA] != Object.prototype[AA]) {
                        AD += '<param name="' + AA + '" value="' + AE[AA] + '" />'
                    }
                }
                v.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + AF + ">" + AD + "</object>";
                i[i.length] = AG.id;
                q = C(AG.id)
            } else {
                if (h.webkit && h.webkit < 312) {
                    var AC = a("embed");
                    AC.setAttribute("type", P);
                    for (var z in AG) {
                        if (AG[z] != Object.prototype[z]) {
                            if (z.toLowerCase() == "data") {
                                AC.setAttribute("src", AG[z])
                            } else {
                                if (z.toLowerCase() == "styleclass") {
                                    AC.setAttribute("class", AG[z])
                                } else {
                                    if (z.toLowerCase() != "classid") {
                                        AC.setAttribute(z, AG[z])
                                    }
                                }
                            }
                        }
                    }
                    for (var y in AE) {
                        if (AE[y] != Object.prototype[y]) {
                            if (y.toLowerCase() != "movie") {
                                AC.setAttribute(y, AE[y])
                            }
                        }
                    }
                    v.parentNode.replaceChild(AC, v);
                    q = AC
                } else {
                    var u = a(Q);
                    u.setAttribute("type", P);
                    for (var x in AG) {
                        if (AG[x] != Object.prototype[x]) {
                            if (x.toLowerCase() == "styleclass") {
                                u.setAttribute("class", AG[x])
                            } else {
                                if (x.toLowerCase() != "classid") {
                                    u.setAttribute(x, AG[x])
                                }
                            }
                        }
                    }
                    for (var w in AE) {
                        if (AE[w] != Object.prototype[w] && w.toLowerCase() != "movie") {
                            F(u, w, AE[w])
                        }
                    }
                    v.parentNode.replaceChild(u, v);
                    q = u
                }
            }
        }
        return q
    }

    function F(t, q, r) {
        var u = a("param");
        u.setAttribute("name", q);
        u.setAttribute("value", r);
        t.appendChild(u)
    }

    function X(r) {
        var q = C(r);
        if (q && (q.nodeName == "OBJECT" || q.nodeName == "EMBED")) {
            if (h.ie && h.win) {
                if (q.readyState == 4) {
                    B(r)
                } else {
                    j.attachEvent("onload", function() {
                        B(r)
                    })
                }
            } else {
                q.parentNode.removeChild(q)
            }
        }
    }

    function B(t) {
        var r = C(t);
        if (r) {
            for (var q in r) {
                if (typeof r[q] == "function") {
                    r[q] = null
                }
            }
            r.parentNode.removeChild(r)
        }
    }

    function C(t) {
        var q = null;
        try {
            q = K.getElementById(t)
        } catch (r) {}
        return q
    }

    function a(q) {
        return K.createElement(q)
    }

    function I(t, q, r) {
        t.attachEvent(q, r);
        d[d.length] = [t, q, r]
    }

    function c(t) {
        var r = h.pv,
            q = t.split(".");
        q[0] = parseInt(q[0], 10);
        q[1] = parseInt(q[1], 10) || 0;
        q[2] = parseInt(q[2], 10) || 0;
        return (r[0] > q[0] || (r[0] == q[0] && r[1] > q[1]) || (r[0] == q[0] && r[1] == q[1] && r[2] >= q[2])) ? true : false
    }

    function V(v, r) {
        if (h.ie && h.mac) {
            return
        }
        var u = K.getElementsByTagName("head")[0],
            t = a("style");
        t.setAttribute("type", "text/css");
        t.setAttribute("media", "screen");
        if (!(h.ie && h.win) && typeof K.createTextNode != b) {
            t.appendChild(K.createTextNode(v + " {" + r + "}"))
        }
        u.appendChild(t);
        if (h.ie && h.win && typeof K.styleSheets != b && K.styleSheets.length > 0) {
            var q = K.styleSheets[K.styleSheets.length - 1];
            if (typeof q.addRule == Q) {
                q.addRule(v, r)
            }
        }
    }

    function W(t, q) {
        var r = q ? "visible" : "hidden";
        if (e && C(t)) {
            C(t).style.visibility = r
        } else {
            V("#" + t, "visibility:" + r)
        }
    }

    function g(s) {
        var r = /[\\\"<>\.;]/;
        var q = r.exec(s) != null;
        return q ? encodeURIComponent(s) : s
    }
    var D = function() {
        if (h.ie && h.win) {
            window.attachEvent("onunload", function() {
                var w = d.length;
                for (var v = 0; v < w; v++) {
                    d[v][0].detachEvent(d[v][1], d[v][2])
                }
                var t = i.length;
                for (var u = 0; u < t; u++) {
                    X(i[u])
                }
                for (var r in h) {
                    h[r] = null
                }
                h = null;
                for (var q in LivingActor.swfobject) {
                    LivingActor.swfobject[q] = null
                }
                LivingActor.swfobject = null
            })
        }
    }();
    return {
        registerObject: function(u, q, t) {
            if (!h.w3cdom || !u || !q) {
                return
            }
            var r = {};
            r.id = u;
            r.swfVersion = q;
            r.expressInstall = t ? t : false;
            N[N.length] = r;
            W(u, false)
        },
        getObjectById: function(v) {
            var q = null;
            if (h.w3cdom) {
                var t = C(v);
                if (t) {
                    var u = t.getElementsByTagName(Q)[0];
                    if (!u || (u && typeof t.SetVariable != b)) {
                        q = t
                    } else {
                        if (typeof u.SetVariable != b) {
                            q = u
                        }
                    }
                }
            }
            return q
        },
        embedSWF: function(x, AE, AB, AD, q, w, r, z, AC) {
            if (!h.w3cdom || !x || !AE || !AB || !AD || !q) {
                return
            }
            AB += "";
            AD += "";
            if (c(q)) {
                W(AE, false);
                var AA = {};
                if (AC && typeof AC === Q) {
                    for (var v in AC) {
                        if (AC[v] != Object.prototype[v]) {
                            AA[v] = AC[v]
                        }
                    }
                }
                AA.data = x;
                AA.width = AB;
                AA.height = AD;
                var y = {};
                if (z && typeof z === Q) {
                    for (var u in z) {
                        if (z[u] != Object.prototype[u]) {
                            y[u] = z[u]
                        }
                    }
                }
                if (r && typeof r === Q) {
                    for (var t in r) {
                        if (r[t] != Object.prototype[t]) {
                            if (typeof y.flashvars != b) {
                                y.flashvars += "&" + t + "=" + r[t]
                            } else {
                                y.flashvars = t + "=" + r[t]
                            }
                        }
                    }
                }
                f(function() {
                    U(AA, y, AE);
                    if (AA.id == AE) {
                        W(AE, true)
                    }
                })
            } else {
                if (w && !A && c("6.0.65") && (h.win || h.mac)) {
                    A = true;
                    W(AE, false);
                    f(function() {
                        var AF = {};
                        AF.id = AF.altContentId = AE;
                        AF.width = AB;
                        AF.height = AD;
                        AF.expressInstall = w;
                        k(AF)
                    })
                }
            }
        },
        getFlashPlayerVersion: function() {
            return {
                major: h.pv[0],
                minor: h.pv[1],
                release: h.pv[2]
            }
        },
        hasFlashPlayerVersion: c,
        createSWF: function(t, r, q) {
            if (h.w3cdom) {
                return U(t, r, q)
            } else {
                return undefined
            }
        },
        removeSWF: function(q) {
            if (h.w3cdom) {
                X(q)
            }
        },
        createCSS: function(r, q) {
            if (h.w3cdom) {
                V(r, q)
            }
        },
        addDomLoadEvent: f,
        addLoadEvent: R,
        getQueryParamValue: function(v) {
            var u = K.location.search || K.location.hash;
            if (v == null) {
                return g(u)
            }
            if (u) {
                var t = u.substring(1).split("&");
                for (var r = 0; r < t.length; r++) {
                    if (t[r].substring(0, t[r].indexOf("=")) == v) {
                        return g(t[r].substring((t[r].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (A && M) {
                var q = C(m);
                if (q) {
                    q.parentNode.replaceChild(M, q);
                    if (l) {
                        W(l, true);
                        if (h.ie && h.win) {
                            M.style.display = "block"
                        }
                    }
                    M = null;
                    l = null;
                    A = false
                }
            }
        }
    }
}();
LivingActor.Name = "Living Actor Avatar";
LivingActor.Version = "1.1.1.432";
(function() {
    var a = new LivingActor.Logs();
    a.info(LivingActor.Name + " v." + LivingActor.Version, true);
    a.info("(c)1999-2013 Cantoche. All rights reserved.", true)
})();
This ad is supporting your extension Allow Right - Click: More info | Privacy Policy | Hide on this page
!(function (e, t) {
     "object" == typeof exports && "object" == typeof module
          ? (module.exports = t(require("react")))
          : "function" == typeof define && define.amd
          ? define(["React"], t)
          : "object" == typeof exports
          ? (exports.Wheel = t(require("react")))
          : (e.Wheel = t(e.React));
})(window, function (e) {
     return (function (e) {
          var t = {};
          function r(n) {
               if (t[n]) return t[n].exports;
               var o = (t[n] = { i: n, l: !1, exports: {} });
               return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
          }
          return (
               (r.m = e),
               (r.c = t),
               (r.d = function (e, t, n) {
                    r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
               }),
               (r.r = function (e) {
                    "undefined" != typeof Symbol &&
                         Symbol.toStringTag &&
                         Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                         Object.defineProperty(e, "__esModule", { value: !0 });
               }),
               (r.t = function (e, t) {
                    if ((1 & t && (e = r(e)), 8 & t)) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var n = Object.create(null);
                    if (
                         (r.r(n),
                         Object.defineProperty(n, "default", { enumerable: !0, value: e }),
                         2 & t && "string" != typeof e)
                    )
                         for (var o in e)
                              r.d(
                                   n,
                                   o,
                                   function (t) {
                                        return e[t];
                                   }.bind(null, o)
                              );
                    return n;
               }),
               (r.n = function (e) {
                    var t =
                         e && e.__esModule
                              ? function () {
                                     return e.default;
                                }
                              : function () {
                                     return e;
                                };
                    return r.d(t, "a", t), t;
               }),
               (r.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
               }),
               (r.p = ""),
               r((r.s = 10))
          );
     })([
          function (t, r) {
               t.exports = e;
          },
          function (e, t, r) {
               "use strict";
               (function (e) {
                    var n = r(2),
                         o = r(0),
                         i = r.n(o),
                         a = r(5),
                         s = r.n(a),
                         c = r(6),
                         l = r(7),
                         u = r(4),
                         f = r(3),
                         d = r.n(f);
                    function h() {
                         return (h =
                              Object.assign ||
                              function (e) {
                                   for (var t = 1; t < arguments.length; t++) {
                                        var r = arguments[t];
                                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                   }
                                   return e;
                              }).apply(this, arguments);
                    }
                    var p = function (e, t) {
                              for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
                              return r;
                         },
                         g = function (e) {
                              return (
                                   null !== e &&
                                   "object" == typeof e &&
                                   "[object Object]" ===
                                        (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
                                   !Object(n.typeOf)(e)
                              );
                         },
                         m = Object.freeze([]),
                         y = Object.freeze({});
                    function v(e) {
                         return "function" == typeof e;
                    }
                    function b(e) {
                         return e.displayName || e.name || "Component";
                    }
                    function S(e) {
                         return e && "string" == typeof e.styledComponentId;
                    }
                    var w = (void 0 !== e && (e.env.REACT_APP_SC_ATTR || e.env.SC_ATTR)) || "data-styled",
                         k = "undefined" != typeof window && "HTMLElement" in window,
                         C = Boolean(
                              "boolean" == typeof SC_DISABLE_SPEEDY
                                   ? SC_DISABLE_SPEEDY
                                   : void 0 !== e &&
                                     void 0 !== e.env.REACT_APP_SC_DISABLE_SPEEDY &&
                                     "" !== e.env.REACT_APP_SC_DISABLE_SPEEDY
                                   ? "false" !== e.env.REACT_APP_SC_DISABLE_SPEEDY && e.env.REACT_APP_SC_DISABLE_SPEEDY
                                   : void 0 !== e &&
                                     void 0 !== e.env.SC_DISABLE_SPEEDY &&
                                     "" !== e.env.SC_DISABLE_SPEEDY &&
                                     "false" !== e.env.SC_DISABLE_SPEEDY &&
                                     e.env.SC_DISABLE_SPEEDY
                         );
                    function A(e) {
                         for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                              r[n - 1] = arguments[n];
                         throw new Error(
                              "An error occurred. See https://git.io/JUIaE#" +
                                   e +
                                   " for more information." +
                                   (r.length > 0 ? " Args: " + r.join(", ") : "")
                         );
                    }
                    var x = (function () {
                              function e(e) {
                                   (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e);
                              }
                              var t = e.prototype;
                              return (
                                   (t.indexOfGroup = function (e) {
                                        for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
                                        return t;
                                   }),
                                   (t.insertRules = function (e, t) {
                                        if (e >= this.groupSizes.length) {
                                             for (var r = this.groupSizes, n = r.length, o = n; e >= o; )
                                                  (o <<= 1) < 0 && A(16, "" + e);
                                             (this.groupSizes = new Uint32Array(o)),
                                                  this.groupSizes.set(r),
                                                  (this.length = o);
                                             for (var i = n; i < o; i++) this.groupSizes[i] = 0;
                                        }
                                        for (var a = this.indexOfGroup(e + 1), s = 0, c = t.length; s < c; s++)
                                             this.tag.insertRule(a, t[s]) && (this.groupSizes[e]++, a++);
                                   }),
                                   (t.clearGroup = function (e) {
                                        if (e < this.length) {
                                             var t = this.groupSizes[e],
                                                  r = this.indexOfGroup(e),
                                                  n = r + t;
                                             this.groupSizes[e] = 0;
                                             for (var o = r; o < n; o++) this.tag.deleteRule(r);
                                        }
                                   }),
                                   (t.getGroup = function (e) {
                                        var t = "";
                                        if (e >= this.length || 0 === this.groupSizes[e]) return t;
                                        for (
                                             var r = this.groupSizes[e], n = this.indexOfGroup(e), o = n + r, i = n;
                                             i < o;
                                             i++
                                        )
                                             t += this.tag.getRule(i) + "/*!sc*/\n";
                                        return t;
                                   }),
                                   e
                              );
                         })(),
                         O = new Map(),
                         P = new Map(),
                         T = 1,
                         R = function (e) {
                              if (O.has(e)) return O.get(e);
                              for (; P.has(T); ) T++;
                              var t = T++;
                              return O.set(e, t), P.set(t, e), t;
                         },
                         E = function (e) {
                              return P.get(e);
                         },
                         j = function (e, t) {
                              O.set(e, t), P.set(t, e);
                         },
                         L = "style[" + w + '][data-styled-version="5.2.1"]',
                         I = new RegExp("^" + w + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
                         M = function (e, t, r) {
                              for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
                                   (n = o[i]) && e.registerName(t, n);
                         },
                         N = function (e, t) {
                              for (var r = t.innerHTML.split("/*!sc*/\n"), n = [], o = 0, i = r.length; o < i; o++) {
                                   var a = r[o].trim();
                                   if (a) {
                                        var s = a.match(I);
                                        if (s) {
                                             var c = 0 | parseInt(s[1], 10),
                                                  l = s[2];
                                             0 !== c && (j(l, c), M(e, l, s[3]), e.getTag().insertRules(c, n)),
                                                  (n.length = 0);
                                        } else n.push(a);
                                   }
                              }
                         },
                         W = function () {
                              return r.nc;
                         },
                         z = function (e) {
                              var t = document.head,
                                   r = e || t,
                                   n = document.createElement("style"),
                                   o = (function (e) {
                                        for (var t = e.childNodes, r = t.length; r >= 0; r--) {
                                             var n = t[r];
                                             if (n && 1 === n.nodeType && n.hasAttribute(w)) return n;
                                        }
                                   })(r),
                                   i = void 0 !== o ? o.nextSibling : null;
                              n.setAttribute(w, "active"), n.setAttribute("data-styled-version", "5.2.1");
                              var a = W();
                              return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
                         },
                         D = (function () {
                              function e(e) {
                                   var t = (this.element = z(e));
                                   t.appendChild(document.createTextNode("")),
                                        (this.sheet = (function (e) {
                                             if (e.sheet) return e.sheet;
                                             for (var t = document.styleSheets, r = 0, n = t.length; r < n; r++) {
                                                  var o = t[r];
                                                  if (o.ownerNode === e) return o;
                                             }
                                             A(17);
                                        })(t)),
                                        (this.length = 0);
                              }
                              var t = e.prototype;
                              return (
                                   (t.insertRule = function (e, t) {
                                        try {
                                             return this.sheet.insertRule(t, e), this.length++, !0;
                                        } catch (e) {
                                             return !1;
                                        }
                                   }),
                                   (t.deleteRule = function (e) {
                                        this.sheet.deleteRule(e), this.length--;
                                   }),
                                   (t.getRule = function (e) {
                                        var t = this.sheet.cssRules[e];
                                        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
                                   }),
                                   e
                              );
                         })(),
                         B = (function () {
                              function e(e) {
                                   var t = (this.element = z(e));
                                   (this.nodes = t.childNodes), (this.length = 0);
                              }
                              var t = e.prototype;
                              return (
                                   (t.insertRule = function (e, t) {
                                        if (e <= this.length && e >= 0) {
                                             var r = document.createTextNode(t),
                                                  n = this.nodes[e];
                                             return this.element.insertBefore(r, n || null), this.length++, !0;
                                        }
                                        return !1;
                                   }),
                                   (t.deleteRule = function (e) {
                                        this.element.removeChild(this.nodes[e]), this.length--;
                                   }),
                                   (t.getRule = function (e) {
                                        return e < this.length ? this.nodes[e].textContent : "";
                                   }),
                                   e
                              );
                         })(),
                         F = (function () {
                              function e(e) {
                                   (this.rules = []), (this.length = 0);
                              }
                              var t = e.prototype;
                              return (
                                   (t.insertRule = function (e, t) {
                                        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
                                   }),
                                   (t.deleteRule = function (e) {
                                        this.rules.splice(e, 1), this.length--;
                                   }),
                                   (t.getRule = function (e) {
                                        return e < this.length ? this.rules[e] : "";
                                   }),
                                   e
                              );
                         })(),
                         G = k,
                         H = { isServer: !k, useCSSOMInjection: !C },
                         K = (function () {
                              function e(e, t, r) {
                                   void 0 === e && (e = y),
                                        void 0 === t && (t = {}),
                                        (this.options = h({}, H, {}, e)),
                                        (this.gs = t),
                                        (this.names = new Map(r)),
                                        !this.options.isServer &&
                                             k &&
                                             G &&
                                             ((G = !1),
                                             (function (e) {
                                                  for (
                                                       var t = document.querySelectorAll(L), r = 0, n = t.length;
                                                       r < n;
                                                       r++
                                                  ) {
                                                       var o = t[r];
                                                       o &&
                                                            "active" !== o.getAttribute(w) &&
                                                            (N(e, o), o.parentNode && o.parentNode.removeChild(o));
                                                  }
                                             })(this));
                              }
                              e.registerId = function (e) {
                                   return R(e);
                              };
                              var t = e.prototype;
                              return (
                                   (t.reconstructWithOptions = function (t, r) {
                                        return (
                                             void 0 === r && (r = !0),
                                             new e(h({}, this.options, {}, t), this.gs, (r && this.names) || void 0)
                                        );
                                   }),
                                   (t.allocateGSInstance = function (e) {
                                        return (this.gs[e] = (this.gs[e] || 0) + 1);
                                   }),
                                   (t.getTag = function () {
                                        return (
                                             this.tag ||
                                             (this.tag =
                                                  ((r = (t = this.options).isServer),
                                                  (n = t.useCSSOMInjection),
                                                  (o = t.target),
                                                  (e = r ? new F(o) : n ? new D(o) : new B(o)),
                                                  new x(e)))
                                        );
                                        var e, t, r, n, o;
                                   }),
                                   (t.hasNameForId = function (e, t) {
                                        return this.names.has(e) && this.names.get(e).has(t);
                                   }),
                                   (t.registerName = function (e, t) {
                                        if ((R(e), this.names.has(e))) this.names.get(e).add(t);
                                        else {
                                             var r = new Set();
                                             r.add(t), this.names.set(e, r);
                                        }
                                   }),
                                   (t.insertRules = function (e, t, r) {
                                        this.registerName(e, t), this.getTag().insertRules(R(e), r);
                                   }),
                                   (t.clearNames = function (e) {
                                        this.names.has(e) && this.names.get(e).clear();
                                   }),
                                   (t.clearRules = function (e) {
                                        this.getTag().clearGroup(R(e)), this.clearNames(e);
                                   }),
                                   (t.clearTag = function () {
                                        this.tag = void 0;
                                   }),
                                   (t.toString = function () {
                                        return (function (e) {
                                             for (var t = e.getTag(), r = t.length, n = "", o = 0; o < r; o++) {
                                                  var i = E(o);
                                                  if (void 0 !== i) {
                                                       var a = e.names.get(i),
                                                            s = t.getGroup(o);
                                                       if (void 0 !== a && 0 !== s.length) {
                                                            var c = w + ".g" + o + '[id="' + i + '"]',
                                                                 l = "";
                                                            void 0 !== a &&
                                                                 a.forEach(function (e) {
                                                                      e.length > 0 && (l += e + ",");
                                                                 }),
                                                                 (n += "" + s + c + '{content:"' + l + '"}/*!sc*/\n');
                                                       }
                                                  }
                                             }
                                             return n;
                                        })(this);
                                   }),
                                   e
                              );
                         })(),
                         U = /(a)(d)/gi,
                         $ = function (e) {
                              return String.fromCharCode(e + (e > 25 ? 39 : 97));
                         };
                    function q(e) {
                         var t,
                              r = "";
                         for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = $(t % 52) + r;
                         return ($(t % 52) + r).replace(U, "$1-$2");
                    }
                    var J = function (e, t) {
                              for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
                              return e;
                         },
                         X = function (e) {
                              return J(5381, e);
                         };
                    function Y(e) {
                         for (var t = 0; t < e.length; t += 1) {
                              var r = e[t];
                              if (v(r) && !S(r)) return !1;
                         }
                         return !0;
                    }
                    var _ = X("5.2.1"),
                         Q = (function () {
                              function e(e, t, r) {
                                   (this.rules = e),
                                        (this.staticRulesId = ""),
                                        (this.isStatic = (void 0 === r || r.isStatic) && Y(e)),
                                        (this.componentId = t),
                                        (this.baseHash = J(_, t)),
                                        (this.baseStyle = r),
                                        K.registerId(t);
                              }
                              return (
                                   (e.prototype.generateAndInjectStyles = function (e, t, r) {
                                        var n = this.componentId,
                                             o = [];
                                        if (
                                             (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, r)),
                                             this.isStatic && !r.hash)
                                        )
                                             if (this.staticRulesId && t.hasNameForId(n, this.staticRulesId))
                                                  o.push(this.staticRulesId);
                                             else {
                                                  var i = ge(this.rules, e, t, r).join(""),
                                                       a = q(J(this.baseHash, i.length) >>> 0);
                                                  if (!t.hasNameForId(n, a)) {
                                                       var s = r(i, "." + a, void 0, n);
                                                       t.insertRules(n, a, s);
                                                  }
                                                  o.push(a), (this.staticRulesId = a);
                                             }
                                        else {
                                             for (
                                                  var c = this.rules.length,
                                                       l = J(this.baseHash, r.hash),
                                                       u = "",
                                                       f = 0;
                                                  f < c;
                                                  f++
                                             ) {
                                                  var d = this.rules[f];
                                                  if ("string" == typeof d) u += d;
                                                  else if (d) {
                                                       var h = ge(d, e, t, r),
                                                            p = Array.isArray(h) ? h.join("") : h;
                                                       (l = J(l, p + f)), (u += p);
                                                  }
                                             }
                                             if (u) {
                                                  var g = q(l >>> 0);
                                                  if (!t.hasNameForId(n, g)) {
                                                       var m = r(u, "." + g, void 0, n);
                                                       t.insertRules(n, g, m);
                                                  }
                                                  o.push(g);
                                             }
                                        }
                                        return o.join(" ");
                                   }),
                                   e
                              );
                         })(),
                         V = /^\s*\/\/.*$/gm,
                         Z = [":", "[", ".", "#"];
                    function ee(e) {
                         var t,
                              r,
                              n,
                              o,
                              i = void 0 === e ? y : e,
                              a = i.options,
                              s = void 0 === a ? y : a,
                              l = i.plugins,
                              u = void 0 === l ? m : l,
                              f = new c.a(s),
                              d = [],
                              h = (function (e) {
                                   function t(t) {
                                        if (t)
                                             try {
                                                  e(t + "}");
                                             } catch (e) {}
                                   }
                                   return function (r, n, o, i, a, s, c, l, u, f) {
                                        switch (r) {
                                             case 1:
                                                  if (0 === u && 64 === n.charCodeAt(0)) return e(n + ";"), "";
                                                  break;
                                             case 2:
                                                  if (0 === l) return n + "/*|*/";
                                                  break;
                                             case 3:
                                                  switch (l) {
                                                       case 102:
                                                       case 112:
                                                            return e(o[0] + n), "";
                                                       default:
                                                            return n + (0 === f ? "/*|*/" : "");
                                                  }
                                             case -2:
                                                  n.split("/*|*/}").forEach(t);
                                        }
                                   };
                              })(function (e) {
                                   d.push(e);
                              }),
                              p = function (e, n, i) {
                                   return (0 === n && Z.includes(i[r.length])) || i.match(o) ? e : "." + t;
                              };
                         function g(e, i, a, s) {
                              void 0 === s && (s = "&");
                              var c = e.replace(V, ""),
                                   l = i && a ? a + " " + i + " { " + c + " }" : c;
                              return (
                                   (t = s),
                                   (r = i),
                                   (n = new RegExp("\\" + r + "\\b", "g")),
                                   (o = new RegExp("(\\" + r + "\\b){2,}")),
                                   f(a || !i ? "" : i, l)
                              );
                         }
                         return (
                              f.use(
                                   [].concat(u, [
                                        function (e, t, o) {
                                             2 === e &&
                                                  o.length &&
                                                  o[0].lastIndexOf(r) > 0 &&
                                                  (o[0] = o[0].replace(n, p));
                                        },
                                        h,
                                        function (e) {
                                             if (-2 === e) {
                                                  var t = d;
                                                  return (d = []), t;
                                             }
                                        },
                                   ])
                              ),
                              (g.hash = u.length
                                   ? u
                                          .reduce(function (e, t) {
                                               return t.name || A(15), J(e, t.name);
                                          }, 5381)
                                          .toString()
                                   : ""),
                              g
                         );
                    }
                    var te = i.a.createContext(),
                         re = (te.Consumer, i.a.createContext()),
                         ne = (re.Consumer, new K()),
                         oe = ee();
                    function ie() {
                         return Object(o.useContext)(te) || ne;
                    }
                    function ae() {
                         return Object(o.useContext)(re) || oe;
                    }
                    function se(e) {
                         var t = Object(o.useState)(e.stylisPlugins),
                              r = t[0],
                              n = t[1],
                              a = ie(),
                              c = Object(o.useMemo)(
                                   function () {
                                        var t = a;
                                        return (
                                             e.sheet
                                                  ? (t = e.sheet)
                                                  : e.target &&
                                                    (t = t.reconstructWithOptions({ target: e.target }, !1)),
                                             e.disableCSSOMInjection &&
                                                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                                             t
                                        );
                                   },
                                   [e.disableCSSOMInjection, e.sheet, e.target]
                              ),
                              l = Object(o.useMemo)(
                                   function () {
                                        return ee({ options: { prefix: !e.disableVendorPrefixes }, plugins: r });
                                   },
                                   [e.disableVendorPrefixes, r]
                              );
                         return (
                              Object(o.useEffect)(
                                   function () {
                                        s()(r, e.stylisPlugins) || n(e.stylisPlugins);
                                   },
                                   [e.stylisPlugins]
                              ),
                              i.a.createElement(
                                   te.Provider,
                                   { value: c },
                                   i.a.createElement(re.Provider, { value: l }, e.children)
                              )
                         );
                    }
                    var ce = (function () {
                              function e(e, t) {
                                   var r = this;
                                   (this.inject = function (e, t) {
                                        void 0 === t && (t = oe);
                                        var n = r.name + t.hash;
                                        e.hasNameForId(r.id, n) || e.insertRules(r.id, n, t(r.rules, n, "@keyframes"));
                                   }),
                                        (this.toString = function () {
                                             return A(12, String(r.name));
                                        }),
                                        (this.name = e),
                                        (this.id = "sc-keyframes-" + e),
                                        (this.rules = t);
                              }
                              return (
                                   (e.prototype.getName = function (e) {
                                        return void 0 === e && (e = oe), this.name + e.hash;
                                   }),
                                   e
                              );
                         })(),
                         le = /([A-Z])/,
                         ue = /([A-Z])/g,
                         fe = /^ms-/,
                         de = function (e) {
                              return "-" + e.toLowerCase();
                         };
                    function he(e) {
                         return le.test(e) ? e.replace(ue, de).replace(fe, "-ms-") : e;
                    }
                    var pe = function (e) {
                         return null == e || !1 === e || "" === e;
                    };
                    function ge(e, t, r, n) {
                         if (Array.isArray(e)) {
                              for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
                                   "" !== (o = ge(e[a], t, r, n)) &&
                                        (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
                              return i;
                         }
                         return pe(e)
                              ? ""
                              : S(e)
                              ? "." + e.styledComponentId
                              : v(e)
                              ? "function" != typeof (c = e) || (c.prototype && c.prototype.isReactComponent) || !t
                                   ? e
                                   : ge(e(t), t, r, n)
                              : e instanceof ce
                              ? r
                                   ? (e.inject(r, n), e.getName(n))
                                   : e
                              : g(e)
                              ? (function e(t, r) {
                                     var n,
                                          o,
                                          i = [];
                                     for (var a in t)
                                          t.hasOwnProperty(a) &&
                                               !pe(t[a]) &&
                                               (g(t[a])
                                                    ? i.push.apply(i, e(t[a], a))
                                                    : v(t[a])
                                                    ? i.push(he(a) + ":", t[a], ";")
                                                    : i.push(
                                                           he(a) +
                                                                ": " +
                                                                ((n = a),
                                                                (null == (o = t[a]) || "boolean" == typeof o || "" === o
                                                                     ? ""
                                                                     : "number" != typeof o || 0 === o || n in l.a
                                                                     ? String(o).trim()
                                                                     : o + "px") + ";")
                                                      ));
                                     return r ? [r + " {"].concat(i, ["}"]) : i;
                                })(e)
                              : e.toString();
                         var c;
                    }
                    function me(e) {
                         for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                              r[n - 1] = arguments[n];
                         return v(e) || g(e)
                              ? ge(p(m, [e].concat(r)))
                              : 0 === r.length && 1 === e.length && "string" == typeof e[0]
                              ? e
                              : ge(p(e, r));
                    }
                    new Set();
                    var ye = function (e, t, r) {
                              return void 0 === r && (r = y), (e.theme !== r.theme && e.theme) || t || r.theme;
                         },
                         ve = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                         be = /(^-|-$)/g;
                    function Se(e) {
                         return e.replace(ve, "-").replace(be, "");
                    }
                    var we = function (e) {
                         return q(X(e) >>> 0);
                    };
                    function ke(e) {
                         return "string" == typeof e && !0;
                    }
                    var Ce = function (e) {
                              return (
                                   "function" == typeof e || ("object" == typeof e && null !== e && !Array.isArray(e))
                              );
                         },
                         Ae = function (e) {
                              return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
                         };
                    function xe(e, t, r) {
                         var n = e[r];
                         Ce(t) && Ce(n) ? Oe(n, t) : (e[r] = t);
                    }
                    function Oe(e) {
                         for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                              r[n - 1] = arguments[n];
                         for (var o = 0, i = r; o < i.length; o++) {
                              var a = i[o];
                              if (Ce(a)) for (var s in a) Ae(s) && xe(e, a[s], s);
                         }
                         return e;
                    }
                    var Pe = i.a.createContext();
                    Pe.Consumer;
                    var Te = {};
                    function Re(e, t, r) {
                         var n = S(e),
                              a = !ke(e),
                              s = t.attrs,
                              c = void 0 === s ? m : s,
                              l = t.componentId,
                              f =
                                   void 0 === l
                                        ? (function (e, t) {
                                               var r = "string" != typeof e ? "sc" : Se(e);
                                               Te[r] = (Te[r] || 0) + 1;
                                               var n = r + "-" + we("5.2.1" + r + Te[r]);
                                               return t ? t + "-" + n : n;
                                          })(t.displayName, t.parentComponentId)
                                        : l,
                              p = t.displayName,
                              g =
                                   void 0 === p
                                        ? (function (e) {
                                               return ke(e) ? "styled." + e : "Styled(" + b(e) + ")";
                                          })(e)
                                        : p,
                              w =
                                   t.displayName && t.componentId
                                        ? Se(t.displayName) + "-" + t.componentId
                                        : t.componentId || f,
                              k = n && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
                              C = t.shouldForwardProp;
                         n &&
                              e.shouldForwardProp &&
                              (C = t.shouldForwardProp
                                   ? function (r, n) {
                                          return e.shouldForwardProp(r, n) && t.shouldForwardProp(r, n);
                                     }
                                   : e.shouldForwardProp);
                         var A,
                              x = new Q(r, w, n ? e.componentStyle : void 0),
                              O = x.isStatic && 0 === c.length,
                              P = function (e, t) {
                                   return (function (e, t, r, n) {
                                        var i = e.attrs,
                                             a = e.componentStyle,
                                             s = e.defaultProps,
                                             c = e.foldedComponentIds,
                                             l = e.shouldForwardProp,
                                             f = e.styledComponentId,
                                             d = e.target,
                                             p = (function (e, t, r) {
                                                  void 0 === e && (e = y);
                                                  var n = h({}, t, { theme: e }),
                                                       o = {};
                                                  return (
                                                       r.forEach(function (e) {
                                                            var t,
                                                                 r,
                                                                 i,
                                                                 a = e;
                                                            for (t in (v(a) && (a = a(n)), a))
                                                                 n[t] = o[t] =
                                                                      "className" === t
                                                                           ? ((r = o[t]),
                                                                             (i = a[t]),
                                                                             r && i ? r + " " + i : r || i)
                                                                           : a[t];
                                                       }),
                                                       [n, o]
                                                  );
                                             })(ye(t, Object(o.useContext)(Pe), s) || y, t, i),
                                             g = p[0],
                                             m = p[1],
                                             b = (function (e, t, r, n) {
                                                  var o = ie(),
                                                       i = ae();
                                                  return t
                                                       ? e.generateAndInjectStyles(y, o, i)
                                                       : e.generateAndInjectStyles(r, o, i);
                                             })(a, n, g),
                                             S = r,
                                             w = m.$as || t.$as || m.as || t.as || d,
                                             k = ke(w),
                                             C = m !== t ? h({}, t, {}, m) : t,
                                             A = {};
                                        for (var x in C)
                                             "$" !== x[0] &&
                                                  "as" !== x &&
                                                  ("forwardedAs" === x
                                                       ? (A.as = C[x])
                                                       : (l ? l(x, u.a) : !k || Object(u.a)(x)) && (A[x] = C[x]));
                                        return (
                                             t.style && m.style !== t.style && (A.style = h({}, t.style, {}, m.style)),
                                             (A.className = Array.prototype
                                                  .concat(c, f, b !== f ? b : null, t.className, m.className)
                                                  .filter(Boolean)
                                                  .join(" ")),
                                             (A.ref = S),
                                             Object(o.createElement)(w, A)
                                        );
                                   })(A, e, t, O);
                              };
                         return (
                              (P.displayName = g),
                              ((A = i.a.forwardRef(P)).attrs = k),
                              (A.componentStyle = x),
                              (A.displayName = g),
                              (A.shouldForwardProp = C),
                              (A.foldedComponentIds = n
                                   ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
                                   : m),
                              (A.styledComponentId = w),
                              (A.target = n ? e.target : e),
                              (A.withComponent = function (e) {
                                   var n = t.componentId,
                                        o = (function (e, t) {
                                             if (null == e) return {};
                                             var r,
                                                  n,
                                                  o = {},
                                                  i = Object.keys(e);
                                             for (n = 0; n < i.length; n++)
                                                  (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                                             return o;
                                        })(t, ["componentId"]),
                                        i = n && n + "-" + (ke(e) ? e : Se(b(e)));
                                   return Re(e, h({}, o, { attrs: k, componentId: i }), r);
                              }),
                              Object.defineProperty(A, "defaultProps", {
                                   get: function () {
                                        return this._foldedDefaultProps;
                                   },
                                   set: function (t) {
                                        this._foldedDefaultProps = n ? Oe({}, e.defaultProps, t) : t;
                                   },
                              }),
                              (A.toString = function () {
                                   return "." + A.styledComponentId;
                              }),
                              a &&
                                   d()(A, e, {
                                        attrs: !0,
                                        componentStyle: !0,
                                        displayName: !0,
                                        foldedComponentIds: !0,
                                        shouldForwardProp: !0,
                                        styledComponentId: !0,
                                        target: !0,
                                        withComponent: !0,
                                   }),
                              A
                         );
                    }
                    var Ee = function (e) {
                         return (function e(t, r, o) {
                              if ((void 0 === o && (o = y), !Object(n.isValidElementType)(r))) return A(1, String(r));
                              var i = function () {
                                   return t(r, o, me.apply(void 0, arguments));
                              };
                              return (
                                   (i.withConfig = function (n) {
                                        return e(t, r, h({}, o, {}, n));
                                   }),
                                   (i.attrs = function (n) {
                                        return e(
                                             t,
                                             r,
                                             h({}, o, { attrs: Array.prototype.concat(o.attrs, n).filter(Boolean) })
                                        );
                                   }),
                                   i
                              );
                         })(Re, e);
                    };
                    [
                         "a",
                         "abbr",
                         "address",
                         "area",
                         "article",
                         "aside",
                         "audio",
                         "b",
                         "base",
                         "bdi",
                         "bdo",
                         "big",
                         "blockquote",
                         "body",
                         "br",
                         "button",
                         "canvas",
                         "caption",
                         "cite",
                         "code",
                         "col",
                         "colgroup",
                         "data",
                         "datalist",
                         "dd",
                         "del",
                         "details",
                         "dfn",
                         "dialog",
                         "div",
                         "dl",
                         "dt",
                         "em",
                         "embed",
                         "fieldset",
                         "figcaption",
                         "figure",
                         "footer",
                         "form",
                         "h1",
                         "h2",
                         "h3",
                         "h4",
                         "h5",
                         "h6",
                         "head",
                         "header",
                         "hgroup",
                         "hr",
                         "html",
                         "i",
                         "iframe",
                         "img",
                         "input",
                         "ins",
                         "kbd",
                         "keygen",
                         "label",
                         "legend",
                         "li",
                         "link",
                         "main",
                         "map",
                         "mark",
                         "marquee",
                         "menu",
                         "menuitem",
                         "meta",
                         "meter",
                         "nav",
                         "noscript",
                         "object",
                         "ol",
                         "optgroup",
                         "option",
                         "output",
                         "p",
                         "param",
                         "picture",
                         "pre",
                         "progress",
                         "q",
                         "rp",
                         "rt",
                         "ruby",
                         "s",
                         "samp",
                         "script",
                         "section",
                         "select",
                         "small",
                         "source",
                         "span",
                         "strong",
                         "style",
                         "sub",
                         "summary",
                         "sup",
                         "table",
                         "tbody",
                         "td",
                         "textarea",
                         "tfoot",
                         "th",
                         "thead",
                         "time",
                         "title",
                         "tr",
                         "track",
                         "u",
                         "ul",
                         "var",
                         "video",
                         "wbr",
                         "circle",
                         "clipPath",
                         "defs",
                         "ellipse",
                         "foreignObject",
                         "g",
                         "image",
                         "line",
                         "linearGradient",
                         "marker",
                         "mask",
                         "path",
                         "pattern",
                         "polygon",
                         "polyline",
                         "radialGradient",
                         "rect",
                         "stop",
                         "svg",
                         "text",
                         "tspan",
                    ].forEach(function (e) {
                         Ee[e] = Ee(e);
                    });
                    !(function () {
                         function e(e, t) {
                              (this.rules = e),
                                   (this.componentId = t),
                                   (this.isStatic = Y(e)),
                                   K.registerId(this.componentId + 1);
                         }
                         var t = e.prototype;
                         (t.createStyles = function (e, t, r, n) {
                              var o = n(ge(this.rules, t, r, n).join(""), ""),
                                   i = this.componentId + e;
                              r.insertRules(i, i, o);
                         }),
                              (t.removeStyles = function (e, t) {
                                   t.clearRules(this.componentId + e);
                              }),
                              (t.renderStyles = function (e, t, r, n) {
                                   e > 2 && K.registerId(this.componentId + e),
                                        this.removeStyles(e, r),
                                        this.createStyles(e, t, r, n);
                              });
                    })();
                    !(function () {
                         function e() {
                              var e = this;
                              (this._emitSheetCSS = function () {
                                   var t = e.instance.toString(),
                                        r = W();
                                   return (
                                        "<style " +
                                        [r && 'nonce="' + r + '"', w + '="true"', 'data-styled-version="5.2.1"']
                                             .filter(Boolean)
                                             .join(" ") +
                                        ">" +
                                        t +
                                        "</style>"
                                   );
                              }),
                                   (this.getStyleTags = function () {
                                        return e.sealed ? A(2) : e._emitSheetCSS();
                                   }),
                                   (this.getStyleElement = function () {
                                        var t;
                                        if (e.sealed) return A(2);
                                        var r =
                                                  (((t = {})[w] = ""),
                                                  (t["data-styled-version"] = "5.2.1"),
                                                  (t.dangerouslySetInnerHTML = { __html: e.instance.toString() }),
                                                  t),
                                             n = W();
                                        return (
                                             n && (r.nonce = n),
                                             [i.a.createElement("style", h({}, r, { key: "sc-0-0" }))]
                                        );
                                   }),
                                   (this.seal = function () {
                                        e.sealed = !0;
                                   }),
                                   (this.instance = new K({ isServer: !0 })),
                                   (this.sealed = !1);
                         }
                         var t = e.prototype;
                         (t.collectStyles = function (e) {
                              return this.sealed ? A(2) : i.a.createElement(se, { sheet: this.instance }, e);
                         }),
                              (t.interleaveWithNodeStream = function (e) {
                                   return A(3);
                              });
                    })();
                    t.a = Ee;
               }.call(this, r(8)));
          },
          function (e, t, r) {
               "use strict";
               e.exports = r(9);
          },
          function (e, t, r) {
               "use strict";
               var n = r(2),
                    o = {
                         childContextTypes: !0,
                         contextType: !0,
                         contextTypes: !0,
                         defaultProps: !0,
                         displayName: !0,
                         getDefaultProps: !0,
                         getDerivedStateFromError: !0,
                         getDerivedStateFromProps: !0,
                         mixins: !0,
                         propTypes: !0,
                         type: !0,
                    },
                    i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
                    a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
                    s = {};
               function c(e) {
                    return n.isMemo(e) ? a : s[e.$$typeof] || o;
               }
               (s[n.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
                    (s[n.Memo] = a);
               var l = Object.defineProperty,
                    u = Object.getOwnPropertyNames,
                    f = Object.getOwnPropertySymbols,
                    d = Object.getOwnPropertyDescriptor,
                    h = Object.getPrototypeOf,
                    p = Object.prototype;
               e.exports = function e(t, r, n) {
                    if ("string" != typeof r) {
                         if (p) {
                              var o = h(r);
                              o && o !== p && e(t, o, n);
                         }
                         var a = u(r);
                         f && (a = a.concat(f(r)));
                         for (var s = c(t), g = c(r), m = 0; m < a.length; ++m) {
                              var y = a[m];
                              if (!(i[y] || (n && n[y]) || (g && g[y]) || (s && s[y]))) {
                                   var v = d(r, y);
                                   try {
                                        l(t, y, v);
                                   } catch (e) {}
                              }
                         }
                    }
                    return t;
               };
          },
          function (e, t, r) {
               "use strict";
               var n =
                         /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                    o = (function (e) {
                         var t = {};
                         return function (r) {
                              return void 0 === t[r] && (t[r] = e(r)), t[r];
                         };
                    })(function (e) {
                         return (
                              n.test(e) || (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91)
                         );
                    });
               t.a = o;
          },
          function (e, t) {
               e.exports = function (e, t, r, n) {
                    var o = r ? r.call(n, e, t) : void 0;
                    if (void 0 !== o) return !!o;
                    if (e === t) return !0;
                    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                    var i = Object.keys(e),
                         a = Object.keys(t);
                    if (i.length !== a.length) return !1;
                    for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
                         var l = i[c];
                         if (!s(l)) return !1;
                         var u = e[l],
                              f = t[l];
                         if (!1 === (o = r ? r.call(n, u, f, l) : void 0) || (void 0 === o && u !== f)) return !1;
                    }
                    return !0;
               };
          },
          function (e, t, r) {
               "use strict";
               t.a = function (e) {
                    function t(e, t, n) {
                         var o = t.trim().split(p);
                         t = o;
                         var i = o.length,
                              a = e.length;
                         switch (a) {
                              case 0:
                              case 1:
                                   var s = 0;
                                   for (e = 0 === a ? "" : e[0] + " "; s < i; ++s) t[s] = r(e, t[s], n).trim();
                                   break;
                              default:
                                   var c = (s = 0);
                                   for (t = []; s < i; ++s)
                                        for (var l = 0; l < a; ++l) t[c++] = r(e[l] + " ", o[s], n).trim();
                         }
                         return t;
                    }
                    function r(e, t, r) {
                         var n = t.charCodeAt(0);
                         switch ((33 > n && (n = (t = t.trim()).charCodeAt(0)), n)) {
                              case 38:
                                   return t.replace(g, "$1" + e.trim());
                              case 58:
                                   return e.trim() + t.replace(g, "$1" + e.trim());
                              default:
                                   if (0 < 1 * r && 0 < t.indexOf("\f"))
                                        return t.replace(g, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim());
                         }
                         return e + t;
                    }
                    function n(e, t, r, i) {
                         var a = e + ";",
                              s = 2 * t + 3 * r + 4 * i;
                         if (944 === s) {
                              e = a.indexOf(":", 9) + 1;
                              var c = a.substring(e, a.length - 1).trim();
                              return (
                                   (c = a.substring(0, e).trim() + c + ";"),
                                   1 === R || (2 === R && o(c, 1)) ? "-webkit-" + c + c : c
                              );
                         }
                         if (0 === R || (2 === R && !o(a, 1))) return a;
                         switch (s) {
                              case 1015:
                                   return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
                              case 951:
                                   return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
                              case 963:
                                   return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
                              case 1009:
                                   if (100 !== a.charCodeAt(4)) break;
                              case 969:
                              case 942:
                                   return "-webkit-" + a + a;
                              case 978:
                                   return "-webkit-" + a + "-moz-" + a + a;
                              case 1019:
                              case 983:
                                   return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
                              case 883:
                                   if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                                   if (0 < a.indexOf("image-set(", 11)) return a.replace(x, "$1-webkit-$2") + a;
                                   break;
                              case 932:
                                   if (45 === a.charCodeAt(4))
                                        switch (a.charCodeAt(5)) {
                                             case 103:
                                                  return (
                                                       "-webkit-box-" +
                                                       a.replace("-grow", "") +
                                                       "-webkit-" +
                                                       a +
                                                       "-ms-" +
                                                       a.replace("grow", "positive") +
                                                       a
                                                  );
                                             case 115:
                                                  return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                                             case 98:
                                                  return (
                                                       "-webkit-" +
                                                       a +
                                                       "-ms-" +
                                                       a.replace("basis", "preferred-size") +
                                                       a
                                                  );
                                        }
                                   return "-webkit-" + a + "-ms-" + a + a;
                              case 964:
                                   return "-webkit-" + a + "-ms-flex-" + a + a;
                              case 1023:
                                   if (99 !== a.charCodeAt(8)) break;
                                   return (
                                        "-webkit-box-pack" +
                                        (c = a
                                             .substring(a.indexOf(":", 15))
                                             .replace("flex-", "")
                                             .replace("space-between", "justify")) +
                                        "-webkit-" +
                                        a +
                                        "-ms-flex-pack" +
                                        c +
                                        a
                                   );
                              case 1005:
                                   return d.test(a) ? a.replace(f, ":-webkit-") + a.replace(f, ":-moz-") + a : a;
                              case 1e3:
                                   switch (
                                        ((t = (c = a.substring(13).trim()).indexOf("-") + 1),
                                        c.charCodeAt(0) + c.charCodeAt(t))
                                   ) {
                                        case 226:
                                             c = a.replace(b, "tb");
                                             break;
                                        case 232:
                                             c = a.replace(b, "tb-rl");
                                             break;
                                        case 220:
                                             c = a.replace(b, "lr");
                                             break;
                                        default:
                                             return a;
                                   }
                                   return "-webkit-" + a + "-ms-" + c + a;
                              case 1017:
                                   if (-1 === a.indexOf("sticky", 9)) break;
                              case 975:
                                   switch (
                                        ((t = (a = e).length - 10),
                                        (s =
                                             (c = (33 === a.charCodeAt(t) ? a.substring(0, t) : a)
                                                  .substring(e.indexOf(":", 7) + 1)
                                                  .trim()).charCodeAt(0) +
                                             (0 | c.charCodeAt(7))))
                                   ) {
                                        case 203:
                                             if (111 > c.charCodeAt(8)) break;
                                        case 115:
                                             a = a.replace(c, "-webkit-" + c) + ";" + a;
                                             break;
                                        case 207:
                                        case 102:
                                             a =
                                                  a.replace(c, "-webkit-" + (102 < s ? "inline-" : "") + "box") +
                                                  ";" +
                                                  a.replace(c, "-webkit-" + c) +
                                                  ";" +
                                                  a.replace(c, "-ms-" + c + "box") +
                                                  ";" +
                                                  a;
                                   }
                                   return a + ";";
                              case 938:
                                   if (45 === a.charCodeAt(5))
                                        switch (a.charCodeAt(6)) {
                                             case 105:
                                                  return (
                                                       (c = a.replace("-items", "")),
                                                       "-webkit-" + a + "-webkit-box-" + c + "-ms-flex-" + c + a
                                                  );
                                             case 115:
                                                  return "-webkit-" + a + "-ms-flex-item-" + a.replace(k, "") + a;
                                             default:
                                                  return (
                                                       "-webkit-" +
                                                       a +
                                                       "-ms-flex-line-pack" +
                                                       a.replace("align-content", "").replace(k, "") +
                                                       a
                                                  );
                                        }
                                   break;
                              case 973:
                              case 989:
                                   if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
                              case 931:
                              case 953:
                                   if (!0 === A.test(e))
                                        return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                                             ? n(e.replace("stretch", "fill-available"), t, r, i).replace(
                                                    ":fill-available",
                                                    ":stretch"
                                               )
                                             : a.replace(c, "-webkit-" + c) +
                                                    a.replace(c, "-moz-" + c.replace("fill-", "")) +
                                                    a;
                                   break;
                              case 962:
                                   if (
                                        ((a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a),
                                        211 === r + i && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10))
                                   )
                                        return a.substring(0, a.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + a;
                         }
                         return a;
                    }
                    function o(e, t) {
                         var r = e.indexOf(1 === t ? ":" : "{"),
                              n = e.substring(0, 3 !== t ? r : 10);
                         return (r = e.substring(r + 1, e.length - 1)), I(2 !== t ? n : n.replace(C, "$1"), r, t);
                    }
                    function i(e, t) {
                         var r = n(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                         return r !== t + ";" ? r.replace(w, " or ($1)").substring(4) : "(" + t + ")";
                    }
                    function a(e, t, r, n, o, i, a, s, l, u) {
                         for (var f, d = 0, h = t; d < L; ++d)
                              switch ((f = j[d].call(c, e, h, r, n, o, i, a, s, l, u))) {
                                   case void 0:
                                   case !1:
                                   case !0:
                                   case null:
                                        break;
                                   default:
                                        h = f;
                              }
                         if (h !== t) return h;
                    }
                    function s(e) {
                         return (
                              void 0 !== (e = e.prefix) &&
                                   ((I = null), e ? ("function" != typeof e ? (R = 1) : ((R = 2), (I = e))) : (R = 0)),
                              s
                         );
                    }
                    function c(e, r) {
                         var s = e;
                         if ((33 > s.charCodeAt(0) && (s = s.trim()), (s = [s]), 0 < L)) {
                              var c = a(-1, r, s, s, P, O, 0, 0, 0, 0);
                              void 0 !== c && "string" == typeof c && (r = c);
                         }
                         var f = (function e(r, s, c, f, d) {
                              for (
                                   var h,
                                        p,
                                        g,
                                        b,
                                        w,
                                        k = 0,
                                        C = 0,
                                        A = 0,
                                        x = 0,
                                        j = 0,
                                        I = 0,
                                        N = (g = h = 0),
                                        W = 0,
                                        z = 0,
                                        D = 0,
                                        B = 0,
                                        F = c.length,
                                        G = F - 1,
                                        H = "",
                                        K = "",
                                        U = "",
                                        $ = "";
                                   W < F;

                              ) {
                                   if (
                                        ((p = c.charCodeAt(W)),
                                        W === G &&
                                             0 !== C + x + A + k &&
                                             (0 !== C && (p = 47 === C ? 10 : 47), (x = A = k = 0), F++, G++),
                                        0 === C + x + A + k)
                                   ) {
                                        if (W === G && (0 < z && (H = H.replace(u, "")), 0 < H.trim().length)) {
                                             switch (p) {
                                                  case 32:
                                                  case 9:
                                                  case 59:
                                                  case 13:
                                                  case 10:
                                                       break;
                                                  default:
                                                       H += c.charAt(W);
                                             }
                                             p = 59;
                                        }
                                        switch (p) {
                                             case 123:
                                                  for (h = (H = H.trim()).charCodeAt(0), g = 1, B = ++W; W < F; ) {
                                                       switch ((p = c.charCodeAt(W))) {
                                                            case 123:
                                                                 g++;
                                                                 break;
                                                            case 125:
                                                                 g--;
                                                                 break;
                                                            case 47:
                                                                 switch ((p = c.charCodeAt(W + 1))) {
                                                                      case 42:
                                                                      case 47:
                                                                           e: {
                                                                                for (N = W + 1; N < G; ++N)
                                                                                     switch (c.charCodeAt(N)) {
                                                                                          case 47:
                                                                                               if (
                                                                                                    42 === p &&
                                                                                                    42 ===
                                                                                                         c.charCodeAt(
                                                                                                              N - 1
                                                                                                         ) &&
                                                                                                    W + 2 !== N
                                                                                               ) {
                                                                                                    W = N + 1;
                                                                                                    break e;
                                                                                               }
                                                                                               break;
                                                                                          case 10:
                                                                                               if (47 === p) {
                                                                                                    W = N + 1;
                                                                                                    break e;
                                                                                               }
                                                                                     }
                                                                                W = N;
                                                                           }
                                                                 }
                                                                 break;
                                                            case 91:
                                                                 p++;
                                                            case 40:
                                                                 p++;
                                                            case 34:
                                                            case 39:
                                                                 for (; W++ < G && c.charCodeAt(W) !== p; );
                                                       }
                                                       if (0 === g) break;
                                                       W++;
                                                  }
                                                  switch (
                                                       ((g = c.substring(B, W)),
                                                       0 === h && (h = (H = H.replace(l, "").trim()).charCodeAt(0)),
                                                       h)
                                                  ) {
                                                       case 64:
                                                            switch (
                                                                 (0 < z && (H = H.replace(u, "")),
                                                                 (p = H.charCodeAt(1)))
                                                            ) {
                                                                 case 100:
                                                                 case 109:
                                                                 case 115:
                                                                 case 45:
                                                                      z = s;
                                                                      break;
                                                                 default:
                                                                      z = E;
                                                            }
                                                            if (
                                                                 ((B = (g = e(s, z, g, p, d + 1)).length),
                                                                 0 < L &&
                                                                      ((w = a(
                                                                           3,
                                                                           g,
                                                                           (z = t(E, H, D)),
                                                                           s,
                                                                           P,
                                                                           O,
                                                                           B,
                                                                           p,
                                                                           d,
                                                                           f
                                                                      )),
                                                                      (H = z.join("")),
                                                                      void 0 !== w &&
                                                                           0 === (B = (g = w.trim()).length) &&
                                                                           ((p = 0), (g = ""))),
                                                                 0 < B)
                                                            )
                                                                 switch (p) {
                                                                      case 115:
                                                                           H = H.replace(S, i);
                                                                      case 100:
                                                                      case 109:
                                                                      case 45:
                                                                           g = H + "{" + g + "}";
                                                                           break;
                                                                      case 107:
                                                                           (g =
                                                                                (H = H.replace(m, "$1 $2")) +
                                                                                "{" +
                                                                                g +
                                                                                "}"),
                                                                                (g =
                                                                                     1 === R ||
                                                                                     (2 === R && o("@" + g, 3))
                                                                                          ? "@-webkit-" + g + "@" + g
                                                                                          : "@" + g);
                                                                           break;
                                                                      default:
                                                                           (g = H + g),
                                                                                112 === f && ((K += g), (g = ""));
                                                                 }
                                                            else g = "";
                                                            break;
                                                       default:
                                                            g = e(s, t(s, H, D), g, f, d + 1);
                                                  }
                                                  (U += g), (g = D = z = N = h = 0), (H = ""), (p = c.charCodeAt(++W));
                                                  break;
                                             case 125:
                                             case 59:
                                                  if (1 < (B = (H = (0 < z ? H.replace(u, "") : H).trim()).length))
                                                       switch (
                                                            (0 === N &&
                                                                 ((h = H.charCodeAt(0)),
                                                                 45 === h || (96 < h && 123 > h)) &&
                                                                 (B = (H = H.replace(" ", ":")).length),
                                                            0 < L &&
                                                                 void 0 !==
                                                                      (w = a(1, H, s, r, P, O, K.length, f, d, f)) &&
                                                                 0 === (B = (H = w.trim()).length) &&
                                                                 (H = "\0\0"),
                                                            (h = H.charCodeAt(0)),
                                                            (p = H.charCodeAt(1)),
                                                            h)
                                                       ) {
                                                            case 0:
                                                                 break;
                                                            case 64:
                                                                 if (105 === p || 99 === p) {
                                                                      $ += H + c.charAt(W);
                                                                      break;
                                                                 }
                                                            default:
                                                                 58 !== H.charCodeAt(B - 1) &&
                                                                      (K += n(H, h, p, H.charCodeAt(2)));
                                                       }
                                                  (D = z = N = h = 0), (H = ""), (p = c.charCodeAt(++W));
                                        }
                                   }
                                   switch (p) {
                                        case 13:
                                        case 10:
                                             47 === C
                                                  ? (C = 0)
                                                  : 0 === 1 + h && 107 !== f && 0 < H.length && ((z = 1), (H += "\0")),
                                                  0 < L * M && a(0, H, s, r, P, O, K.length, f, d, f),
                                                  (O = 1),
                                                  P++;
                                             break;
                                        case 59:
                                        case 125:
                                             if (0 === C + x + A + k) {
                                                  O++;
                                                  break;
                                             }
                                        default:
                                             switch ((O++, (b = c.charAt(W)), p)) {
                                                  case 9:
                                                  case 32:
                                                       if (0 === x + k + C)
                                                            switch (j) {
                                                                 case 44:
                                                                 case 58:
                                                                 case 9:
                                                                 case 32:
                                                                      b = "";
                                                                      break;
                                                                 default:
                                                                      32 !== p && (b = " ");
                                                            }
                                                       break;
                                                  case 0:
                                                       b = "\\0";
                                                       break;
                                                  case 12:
                                                       b = "\\f";
                                                       break;
                                                  case 11:
                                                       b = "\\v";
                                                       break;
                                                  case 38:
                                                       0 === x + C + k && ((z = D = 1), (b = "\f" + b));
                                                       break;
                                                  case 108:
                                                       if (0 === x + C + k + T && 0 < N)
                                                            switch (W - N) {
                                                                 case 2:
                                                                      112 === j &&
                                                                           58 === c.charCodeAt(W - 3) &&
                                                                           (T = j);
                                                                 case 8:
                                                                      111 === I && (T = I);
                                                            }
                                                       break;
                                                  case 58:
                                                       0 === x + C + k && (N = W);
                                                       break;
                                                  case 44:
                                                       0 === C + A + x + k && ((z = 1), (b += "\r"));
                                                       break;
                                                  case 34:
                                                  case 39:
                                                       0 === C && (x = x === p ? 0 : 0 === x ? p : x);
                                                       break;
                                                  case 91:
                                                       0 === x + C + A && k++;
                                                       break;
                                                  case 93:
                                                       0 === x + C + A && k--;
                                                       break;
                                                  case 41:
                                                       0 === x + C + k && A--;
                                                       break;
                                                  case 40:
                                                       if (0 === x + C + k) {
                                                            if (0 === h)
                                                                 switch (2 * j + 3 * I) {
                                                                      case 533:
                                                                           break;
                                                                      default:
                                                                           h = 1;
                                                                 }
                                                            A++;
                                                       }
                                                       break;
                                                  case 64:
                                                       0 === C + A + x + k + N + g && (g = 1);
                                                       break;
                                                  case 42:
                                                  case 47:
                                                       if (!(0 < x + k + A))
                                                            switch (C) {
                                                                 case 0:
                                                                      switch (2 * p + 3 * c.charCodeAt(W + 1)) {
                                                                           case 235:
                                                                                C = 47;
                                                                                break;
                                                                           case 220:
                                                                                (B = W), (C = 42);
                                                                      }
                                                                      break;
                                                                 case 42:
                                                                      47 === p &&
                                                                           42 === j &&
                                                                           B + 2 !== W &&
                                                                           (33 === c.charCodeAt(B + 2) &&
                                                                                (K += c.substring(B, W + 1)),
                                                                           (b = ""),
                                                                           (C = 0));
                                                            }
                                             }
                                             0 === C && (H += b);
                                   }
                                   (I = j), (j = p), W++;
                              }
                              if (0 < (B = K.length)) {
                                   if (
                                        ((z = s),
                                        0 < L &&
                                             void 0 !== (w = a(2, K, z, r, P, O, B, f, d, f)) &&
                                             0 === (K = w).length)
                                   )
                                        return $ + K + U;
                                   if (((K = z.join(",") + "{" + K + "}"), 0 != R * T)) {
                                        switch ((2 !== R || o(K, 2) || (T = 0), T)) {
                                             case 111:
                                                  K = K.replace(v, ":-moz-$1") + K;
                                                  break;
                                             case 112:
                                                  K =
                                                       K.replace(y, "::-webkit-input-$1") +
                                                       K.replace(y, "::-moz-$1") +
                                                       K.replace(y, ":-ms-input-$1") +
                                                       K;
                                        }
                                        T = 0;
                                   }
                              }
                              return $ + K + U;
                         })(E, s, r, 0, 0);
                         return (
                              0 < L && void 0 !== (c = a(-2, f, s, s, P, O, f.length, 0, 0, 0)) && (f = c),
                              "",
                              (T = 0),
                              (O = P = 1),
                              f
                         );
                    }
                    var l = /^\0+/g,
                         u = /[\0\r\f]/g,
                         f = /: */g,
                         d = /zoo|gra/,
                         h = /([,: ])(transform)/g,
                         p = /,\r+?/g,
                         g = /([\t\r\n ])*\f?&/g,
                         m = /@(k\w+)\s*(\S*)\s*/,
                         y = /::(place)/g,
                         v = /:(read-only)/g,
                         b = /[svh]\w+-[tblr]{2}/,
                         S = /\(\s*(.*)\s*\)/g,
                         w = /([\s\S]*?);/g,
                         k = /-self|flex-/g,
                         C = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                         A = /stretch|:\s*\w+\-(?:conte|avail)/,
                         x = /([^-])(image-set\()/,
                         O = 1,
                         P = 1,
                         T = 0,
                         R = 1,
                         E = [],
                         j = [],
                         L = 0,
                         I = null,
                         M = 0;
                    return (
                         (c.use = function e(t) {
                              switch (t) {
                                   case void 0:
                                   case null:
                                        L = j.length = 0;
                                        break;
                                   default:
                                        if ("function" == typeof t) j[L++] = t;
                                        else if ("object" == typeof t)
                                             for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
                                        else M = 0 | !!t;
                              }
                              return e;
                         }),
                         (c.set = s),
                         void 0 !== e && s(e),
                         c
                    );
               };
          },
          function (e, t, r) {
               "use strict";
               t.a = {
                    animationIterationCount: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1,
               };
          },
          function (e, t) {
               var r,
                    n,
                    o = (e.exports = {});
               function i() {
                    throw new Error("setTimeout has not been defined");
               }
               function a() {
                    throw new Error("clearTimeout has not been defined");
               }
               function s(e) {
                    if (r === setTimeout) return setTimeout(e, 0);
                    if ((r === i || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
                    try {
                         return r(e, 0);
                    } catch (t) {
                         try {
                              return r.call(null, e, 0);
                         } catch (t) {
                              return r.call(this, e, 0);
                         }
                    }
               }
               !(function () {
                    try {
                         r = "function" == typeof setTimeout ? setTimeout : i;
                    } catch (e) {
                         r = i;
                    }
                    try {
                         n = "function" == typeof clearTimeout ? clearTimeout : a;
                    } catch (e) {
                         n = a;
                    }
               })();
               var c,
                    l = [],
                    u = !1,
                    f = -1;
               function d() {
                    u && c && ((u = !1), c.length ? (l = c.concat(l)) : (f = -1), l.length && h());
               }
               function h() {
                    if (!u) {
                         var e = s(d);
                         u = !0;
                         for (var t = l.length; t; ) {
                              for (c = l, l = []; ++f < t; ) c && c[f].run();
                              (f = -1), (t = l.length);
                         }
                         (c = null),
                              (u = !1),
                              (function (e) {
                                   if (n === clearTimeout) return clearTimeout(e);
                                   if ((n === a || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
                                   try {
                                        n(e);
                                   } catch (t) {
                                        try {
                                             return n.call(null, e);
                                        } catch (t) {
                                             return n.call(this, e);
                                        }
                                   }
                              })(e);
                    }
               }
               function p(e, t) {
                    (this.fun = e), (this.array = t);
               }
               function g() {}
               (o.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    l.push(new p(e, t)), 1 !== l.length || u || s(h);
               }),
                    (p.prototype.run = function () {
                         this.fun.apply(null, this.array);
                    }),
                    (o.title = "browser"),
                    (o.browser = !0),
                    (o.env = {}),
                    (o.argv = []),
                    (o.version = ""),
                    (o.versions = {}),
                    (o.on = g),
                    (o.addListener = g),
                    (o.once = g),
                    (o.off = g),
                    (o.removeListener = g),
                    (o.removeAllListeners = g),
                    (o.emit = g),
                    (o.prependListener = g),
                    (o.prependOnceListener = g),
                    (o.listeners = function (e) {
                         return [];
                    }),
                    (o.binding = function (e) {
                         throw new Error("process.binding is not supported");
                    }),
                    (o.cwd = function () {
                         return "/";
                    }),
                    (o.chdir = function (e) {
                         throw new Error("process.chdir is not supported");
                    }),
                    (o.umask = function () {
                         return 0;
                    });
          },
          function (e, t, r) {
               "use strict";
               /** @license React v16.13.1
                * react-is.production.min.js
                *
                * Copyright (c) Facebook, Inc. and its affiliates.
                *
                * This source code is licensed under the MIT license found in the
                * LICENSE file in the root directory of this source tree.
                */ var n = "function" == typeof Symbol && Symbol.for,
                    o = n ? Symbol.for("react.element") : 60103,
                    i = n ? Symbol.for("react.portal") : 60106,
                    a = n ? Symbol.for("react.fragment") : 60107,
                    s = n ? Symbol.for("react.strict_mode") : 60108,
                    c = n ? Symbol.for("react.profiler") : 60114,
                    l = n ? Symbol.for("react.provider") : 60109,
                    u = n ? Symbol.for("react.context") : 60110,
                    f = n ? Symbol.for("react.async_mode") : 60111,
                    d = n ? Symbol.for("react.concurrent_mode") : 60111,
                    h = n ? Symbol.for("react.forward_ref") : 60112,
                    p = n ? Symbol.for("react.suspense") : 60113,
                    g = n ? Symbol.for("react.suspense_list") : 60120,
                    m = n ? Symbol.for("react.memo") : 60115,
                    y = n ? Symbol.for("react.lazy") : 60116,
                    v = n ? Symbol.for("react.block") : 60121,
                    b = n ? Symbol.for("react.fundamental") : 60117,
                    S = n ? Symbol.for("react.responder") : 60118,
                    w = n ? Symbol.for("react.scope") : 60119;
               function k(e) {
                    if ("object" == typeof e && null !== e) {
                         var t = e.$$typeof;
                         switch (t) {
                              case o:
                                   switch ((e = e.type)) {
                                        case f:
                                        case d:
                                        case a:
                                        case c:
                                        case s:
                                        case p:
                                             return e;
                                        default:
                                             switch ((e = e && e.$$typeof)) {
                                                  case u:
                                                  case h:
                                                  case y:
                                                  case m:
                                                  case l:
                                                       return e;
                                                  default:
                                                       return t;
                                             }
                                   }
                              case i:
                                   return t;
                         }
                    }
               }
               function C(e) {
                    return k(e) === d;
               }
               (t.AsyncMode = f),
                    (t.ConcurrentMode = d),
                    (t.ContextConsumer = u),
                    (t.ContextProvider = l),
                    (t.Element = o),
                    (t.ForwardRef = h),
                    (t.Fragment = a),
                    (t.Lazy = y),
                    (t.Memo = m),
                    (t.Portal = i),
                    (t.Profiler = c),
                    (t.StrictMode = s),
                    (t.Suspense = p),
                    (t.isAsyncMode = function (e) {
                         return C(e) || k(e) === f;
                    }),
                    (t.isConcurrentMode = C),
                    (t.isContextConsumer = function (e) {
                         return k(e) === u;
                    }),
                    (t.isContextProvider = function (e) {
                         return k(e) === l;
                    }),
                    (t.isElement = function (e) {
                         return "object" == typeof e && null !== e && e.$$typeof === o;
                    }),
                    (t.isForwardRef = function (e) {
                         return k(e) === h;
                    }),
                    (t.isFragment = function (e) {
                         return k(e) === a;
                    }),
                    (t.isLazy = function (e) {
                         return k(e) === y;
                    }),
                    (t.isMemo = function (e) {
                         return k(e) === m;
                    }),
                    (t.isPortal = function (e) {
                         return k(e) === i;
                    }),
                    (t.isProfiler = function (e) {
                         return k(e) === c;
                    }),
                    (t.isStrictMode = function (e) {
                         return k(e) === s;
                    }),
                    (t.isSuspense = function (e) {
                         return k(e) === p;
                    }),
                    (t.isValidElementType = function (e) {
                         return (
                              "string" == typeof e ||
                              "function" == typeof e ||
                              e === a ||
                              e === d ||
                              e === c ||
                              e === s ||
                              e === p ||
                              e === g ||
                              ("object" == typeof e &&
                                   null !== e &&
                                   (e.$$typeof === y ||
                                        e.$$typeof === m ||
                                        e.$$typeof === l ||
                                        e.$$typeof === u ||
                                        e.$$typeof === h ||
                                        e.$$typeof === b ||
                                        e.$$typeof === S ||
                                        e.$$typeof === w ||
                                        e.$$typeof === v))
                         );
                    }),
                    (t.typeOf = k);
          },
          function (e, t, r) {
               "use strict";
               r.r(t),
                    r.d(t, "Wheel", function () {
                         return v;
                    });
               var n = r(0),
                    o = r.n(n),
                    i = function (e, t, r) {
                         return Math.min(Math.max(e, +r), t);
                    };
               const a = new Image();
               a.src =
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAENCAMAAADwnMpiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACZUExURUdwTP+OROJKK+JKK/6PReJKK/+QQ+JKK+JKK+JKK+JKK/2MQ/+LRv2LQeNLK+JKK/BrNuRNLPyJQeNLK/d+PfFvN/iFQONLK/BtOPV3OvmCPfFxOPR4PeNMLO5oNexiNPmBPudVL+hXL+pcMepfMuZSLvV7PORPLPFyPedULuhYMOpfM+5nNetdMfupXexhM+2dRuNOLeJKK+Smm3cAAAAydFJOUwAY9Okb+hT+8f3uIRYm5fdz1yvdQWQx4mtRNV1L0HqNOsOwo5W6RcRWz6qGgLYFnA6eKwdCNwAACLhJREFUGBntwNeSg8C1BdANdHMaGLJyzprRaNL+/4+7df1iV7lsgyI0Wnh5eXl5eXl5eXl5+S/8t3jQG/ez5W779bX+f1+b7fI8ms4mseOjS5yo937erk0aCP+FCP9BJHU/NstpL3JgPSeeZafc1SIkhf+FiDYf29EheoOlfLXq/+RGC4WVSertF+PoDbZRg9HP0ATC+kRc7zQaOLCGH83OH6EWXk50eDxPFCzgR++7oRHh1XS4ziYO2k31PksjwpsQSb1NP/bRVm9FtjaaNyWmXPYU2kj1dqUrvLkg8DbjCG0TvW88zTsJzHoU+2gPP+qvTcA7CkyeFW9oibg/94R3JibPCh8tEE2PYcAHkDDvx2g6NduHAR8kMMd3hSZ7m2wTzQcKvFPPQWPFWenywdLhcuCjkdRsbQI+nsn7EZrHL5aJ5lME4WbloGHUbG74LJKWWYxGic9JyicKwn3PQWP4q00ofK60zGI0hHrPXT5dEG5WPpogWgw1m8DNpwrPV+y8gM2gk2WMJ/NXeyNsCgk3Ex/P5PTmLpvEzHsOnkeNS5fN4uZjhWdR0zJl06TlVOE51Gio2Tx62Fd4BtUfajaRTrIIj6f6Q81mCpJFhEdT/aFmU4n3GeGx1LTUbDBvGeGRnHGp2Wjep8Lj+L08ZcMlmcLDTOYumy4YTh08SLE3bD5dHnw8RLQzbAN3PsEjqMwTtoK7KXB//ngYsCXMMsLdTfKUbSHeSOHO4o3L9gjKg4+7UouQbZLOB7gnf5YIW8VsI9xRMU/ZMuHIwd2onWHbBGUPdzNL2D7pusCdxEfNFjKfCnfxlhm2kSRjH/ewKgO2UjovcAdqm7KlzFLh9sYeWyuZ4ebivWZr6WOMG/Onhi1msjfcVpEHbLGgXOGmnEXIVku3CrdUlMJWE+8dN+QsDFtOH2PcTlEK2870fdyKnxm2XpAXuJU4F7afOTu4kZGhBaQc4DaitdAG7qeDmxgbWkHKCW5BbQLaIf10cAM9j5aQcoDrvS01beEufFytKGkNyWNcLXNpDzPCtaK90B6yV7jSwdAm4QHXedtp2kTv3nCVoqRdyhhXGbm0izvCNdReaBfZO7hCL6Rtwgku539q2kYvcLkop32OChd7N7RPuMKlnJ3QPnqBS8WJ0D6ydnChvksbhQNcxtkKbaT7uEzh0Uqy9XGRUUo7JREu4ZyEdjIHXKLwaCkZ4RKjlJaSrY/6nI3QVomD+gqP1jIT1DdKaa1gjNqcjdBackZthUeLbVDbKKXFyjfU5JyEFnMVaio82kyvUFM/pc1khnqcrdBmkqGeOKHdlqhn6tJuX6jF3wnt9oFa1FBot9BHHTNDu4l+Qx1noeWCCDWoD6HlpEANg5C2kwFqGGlab4LqnJPQej1UF3m0Xw/Vvbu0Xw/VLYX266EylbMDeqhsYtgBPVSWBeyAHqpyNsIOWKGqyGMHyABVjV12gMSo6izsAB2hIvUh7IDUR0VFyC5IfFTU1+wA+UBF/k7YBV+oSCXshCUq6oXshAwVjYRdELyjGuck7IJghWpUwk4wMao5uOwEz0E1mbATvnxU4myEXSBLVBN57ASZopqDy05IV6gmE3ZCGKES5yTshPUbKlEeO0F2qKbnshOCKaoZCTshnKASfyvshKFCJSphJ8jORyUTw07QfVQzDdgJ4QDV/Ai7QD4UKnE+2AlyRjWxYSeYGaqZaXaBDCNUsxB2gfz4qMT/Yie4U1SjPHaBJDGq6bnsgmDroJqpsAvMFBX9CDtAhjGqcT7YBbJzUE1k2AXhOyqaaXaA5BEqyoQdkC58VOOf2AXJBBWphB2gtw4qGhh2gBmjqnFA+8kxQlVnof1Mhqr8De0neYyqHI/2c88+qhoYWk/KASo7BLReunRQWSa0nQwnqG5J67mfDqpb03ZSDlBDQtuZs4MaUlouyAvUoWm5cOqjhkhot3QfoY53Wi45oJY97WaWCrXMaTWdF6gnpdW8dx+1/GrazGwj1HOgzXQ+QE2ftJgkYx81zWkxc1aoq6S93H2Mur41rZXmK9RWBLRVMBz7qG1EW4mXKdS3p63CXYQL5LSUOcW4REo7ufsBLvEd0ErufIWLDGglNz/4uMiINkrLmYPL7GmhtJwpXCinfdxyrHChX5fWcfOZwqViTdu4856Di02FlnH3Kx+X29Ey4WmAa+S0SuAtY1zFo03SYRbhKr+aFnHzscJ1YqE1JNysfFzpndZIk3OMqy1pCzMfK1xvTjtob1f4uIGENpAwH0e4hW9NC6TDz8LHTTgBWy/wTisHN7Ji2wXm+K5wMyO2m5i8H+OGNmwzcctF4eOWSraXmPJcOLgtw7aSMM8KBzf2G7CddLjvRz5uLhK2kKTJz0HhHsZsHRGTLwYO7uOTLSNpeJpGPu5lzjYRMfl5pXBHQ7aHpN52Gvm4p++UbaHNcTFwcGd+wFYQU+4OEe5vIGw+Sb3tNPbxCFM2nehwPyocPMiOzabDdTZx8DhzNpgOj4uJwkN5bCodrhcrhQf71mwi0eE6myg83m/AxpHU22QDB09RsFlETLLtFw6eZcwGEW3yz3H0hidasinE9TbZROHJjmwC0ebjcxw5eD6PzyZikl1/oNAMLp9JxPW+sp7y0RTfwmcRSb39YhY5aJJf4TOIuN5XNoscNE3Mh5PAJKfsEDlooh4fSrT5+OmvlI+mGvFRRFzvazGOHTTajg8gos3HbrpSPhrvg/clos3Hz+gQOWgHw7sR0ebjp9+LHLQI70IkNeuffi9y0Da8MQnScL1dzCaOj1ZKeSuivfnfzEHLubye6GT+965ghSOvITqZ/72rb9jjFPASIql3/JspWGcasibRZr7pT3zYKTpqVhXoZL6bxr+w2mci/F9Eu+UxO6hvdED0Z4T/kWgv/5sOftEhh7+Q/050Wh4XM/WL7ln9DTX/SXSYn/oT/xud9dv/y8MgkCAdzj/H0S9evtVk1hv433h5eXl5ebna/wE/LWKN4f9AUgAAAABJRU5ErkJggg==";
               var s = r(1);
               const c = s.a.img`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`,
                    l = s.a.div`
  position: relative;
  width: 75vw;
  max-width: 75vh;
  height: 75vw;
  max-height: 75vh;
  object-fit: contain;
  flex-shrink: 0;
  z-index: 5;
  pointer-events: none;
`,
                    u = s.a.div`
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${(e) => e.startRotationDegrees}deg);

  &.started-spinning {
    animation: spin ${({ startSpinningTime: e }) => e / 1e3}s
        cubic-bezier(0.71, -0.29, 0.96, 0.9) 0s 1 normal forwards running,
      continueSpin ${({ continueSpinningTime: e }) => e / 1e3}s
        linear ${({ startSpinningTime: e }) => e / 1e3}s 1 normal
        forwards running,
      stopSpin ${({ stopSpinningTime: e }) => e / 1e3}s
        cubic-bezier(0, 0, 0.35, 1.02)
        ${({ startSpinningTime: e, continueSpinningTime: t }) => (e + t) / 1e3}s
        1 normal forwards running;
  }

  @keyframes spin {
    from {
      transform: rotate(${(e) => e.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(e) => e.startRotationDegrees + 360}deg);
    }
  }
  @keyframes continueSpin {
    from {
      transform: rotate(${(e) => e.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(e) => e.startRotationDegrees + 360}deg);
    }
  }
  @keyframes stopSpin {
    from {
      transform: rotate(${(e) => e.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(e) => 1440 + e.finalRotationDegrees}deg);
    }
  }
`,
                    f = Object(s.a)(c)`
  position: absolute;
  z-index: 5;
  width: 17%;
  right: 6px;
  top: 15px;
`,
                    d = ["darkgrey", "lightgrey"],
                    h = ["black"],
                    p = s.a.canvas`
  width: 98%;
  height: 98%;
`;
               var g = function (e) {
                         var t = e.width,
                              r = e.height,
                              a = e.data,
                              s = e.outerBorderColor,
                              c = e.outerBorderWidth,
                              l = e.innerRadius,
                              u = e.innerBorderColor,
                              f = e.innerBorderWidth,
                              d = e.radiusLineColor,
                              h = e.radiusLineWidth,
                              g = e.fontSize,
                              m = e.perpendicularText,
                              y = e.textDistance,
                              v = Object(n.createRef)(),
                              b = {
                                   outerBorderColor: s,
                                   outerBorderWidth: c,
                                   innerRadius: l,
                                   innerBorderColor: u,
                                   innerBorderWidth: f,
                                   radiusLineColor: d,
                                   radiusLineWidth: h,
                                   fontSize: g,
                                   perpendicularText: m,
                                   textDistance: y,
                              };
                         return (
                              Object(n.useEffect)(
                                   function () {
                                        !(function (e, t, r) {
                                             var n = t.length,
                                                  o = r.outerBorderColor,
                                                  a = r.outerBorderWidth,
                                                  s = r.innerRadius,
                                                  c = r.innerBorderColor,
                                                  l = r.innerBorderWidth,
                                                  u = r.radiusLineColor,
                                                  f = r.radiusLineWidth,
                                                  d = r.fontSize,
                                                  h = r.perpendicularText,
                                                  p = r.textDistance;
                                             (a *= 2), (l *= 2), (f *= 2), (d *= 2);
                                             var g = e.current;
                                             if (null == g ? void 0 : g.getContext("2d")) {
                                                  var m = g.getContext("2d");
                                                  m.clearRect(0, 0, 500, 500),
                                                       (m.strokeStyle = "transparent"),
                                                       (m.lineWidth = 0);
                                                  var y = Math.PI / (n / 2),
                                                       v = g.width / 2 - 10,
                                                       b = (v * i(0, 100, p)) / 100,
                                                       S = (v * i(0, 100, s)) / 100,
                                                       w = g.width / 2,
                                                       k = g.height / 2;
                                                  m.font = "bold " + d + "px Helvetica, Arial";
                                                  for (var C = 0; C < t.length; C++) {
                                                       var A = 0 + C * y,
                                                            x = t[C].style;
                                                       (m.fillStyle = x && x.backgroundColor),
                                                            m.beginPath(),
                                                            m.arc(w, k, v, A, A + y, !1),
                                                            m.arc(w, k, S, A + y, A, !0),
                                                            m.stroke(),
                                                            m.fill(),
                                                            m.save(),
                                                            (m.strokeStyle = f <= 0 ? "transparent" : u),
                                                            (m.lineWidth = f);
                                                       for (var O = 0; O < t.length; O++) {
                                                            var P = 0 + O * y;
                                                            m.beginPath(),
                                                                 m.moveTo(
                                                                      w + (S + 1) * Math.cos(P),
                                                                      k + (S + 1) * Math.sin(P)
                                                                 ),
                                                                 m.lineTo(
                                                                      w + (v - 1) * Math.cos(P),
                                                                      k + (v - 1) * Math.sin(P)
                                                                 ),
                                                                 m.closePath(),
                                                                 m.stroke();
                                                       }
                                                       (m.strokeStyle = a <= 0 ? "transparent" : o),
                                                            (m.lineWidth = a),
                                                            m.beginPath(),
                                                            m.arc(w, k, v - m.lineWidth / 2, 0, 2 * Math.PI),
                                                            m.closePath(),
                                                            m.stroke(),
                                                            (m.strokeStyle = l <= 0 ? "transparent" : c),
                                                            (m.lineWidth = l),
                                                            m.beginPath(),
                                                            m.arc(w, k, S + m.lineWidth / 2 - 1, 0, 2 * Math.PI),
                                                            m.closePath(),
                                                            m.stroke(),
                                                            (m.fillStyle = x && x.textColor),
                                                            m.translate(
                                                                 w + Math.cos(A + y / 2) * b,
                                                                 k + Math.sin(A + y / 2) * b
                                                            );
                                                       var T = t[C].option,
                                                            R = h ? A + y / 2 + Math.PI / 2 : A + y / 2;
                                                       m.rotate(R),
                                                            m.fillText(T, -m.measureText(T).width / 2, d / 2.7),
                                                            m.restore();
                                                  }
                                             }
                                        })(v, a, b);
                                   },
                                   [v, a, b]
                              ),
                              o.a.createElement(p, { ref: v, width: t, height: r })
                         );
                    },
                    m = function () {
                         return (m =
                              Object.assign ||
                              function (e) {
                                   for (var t, r = 1, n = arguments.length; r < n; r++)
                                        for (var o in (t = arguments[r]))
                                             Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                   return e;
                              }).apply(this, arguments);
                    },
                    y = function (e, t) {
                         for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
                         return e;
                    },
                    v = function (e) {
                         var t = e.mustStartSpinning,
                              r = e.prizeNumber,
                              i = e.data,
                              s = e.onStopSpinning,
                              c =
                                   void 0 === s
                                        ? function () {
                                               return null;
                                          }
                                        : s,
                              p = e.backgroundColors,
                              v = void 0 === p ? d : p,
                              b = e.textColors,
                              S = void 0 === b ? h : b,
                              w = e.outerBorderColor,
                              k = void 0 === w ? "black" : w,
                              C = e.outerBorderWidth,
                              A = void 0 === C ? 5 : C,
                              x = e.innerRadius,
                              O = void 0 === x ? 0 : x,
                              P = e.innerBorderColor,
                              T = void 0 === P ? "black" : P,
                              R = e.innerBorderWidth,
                              E = void 0 === R ? 0 : R,
                              j = e.radiusLineColor,
                              L = void 0 === j ? "black" : j,
                              I = e.radiusLineWidth,
                              M = void 0 === I ? 5 : I,
                              N = e.fontSize,
                              W = void 0 === N ? 20 : N,
                              z = e.perpendicularText,
                              D = void 0 !== z && z,
                              B = e.textDistance,
                              F = void 0 === B ? 60 : B,
                              G = e.spinDuration,
                              H = void 0 === G ? 1 : G,
                              K = Object(n.useState)(y([], i)),
                              U = K[0],
                              $ = K[1],
                              q = Object(n.useState)(0),
                              J = q[0],
                              X = q[1],
                              Y = Object(n.useState)(0),
                              _ = Y[0],
                              Q = Y[1],
                              V = Object(n.useState)(!1),
                              Z = V[0],
                              ee = V[1],
                              te = Object(n.useState)(!1),
                              re = te[0],
                              ne = te[1],
                              oe = Object(n.useState)(!1),
                              ie = oe[0],
                              ae = oe[1],
                              se = Object(n.useState)(!1),
                              ce = se[0],
                              le = se[1],
                              ue = Math.max(0.01, H),
                              fe = 2600 * ue,
                              de = 750 * ue,
                              he = 8e3 * ue,
                              pe = fe + de + he,
                              ge = Object(n.useRef)(!1);
                         Object(n.useEffect)(
                              function () {
                                   for (var e, t, r = i.length, n = [{ option: "" }], o = 0; o < r; o++)
                                        n[o] = m(m({}, i[o]), {
                                             style: {
                                                  backgroundColor:
                                                       (null === (e = i[o].style) || void 0 === e
                                                            ? void 0
                                                            : e.backgroundColor) || v[o % v.length],
                                                  textColor:
                                                       (null === (t = i[o].style) || void 0 === t
                                                            ? void 0
                                                            : t.textColor) || S[o % S.length],
                                             },
                                        });
                                   $(y([], n)), le(!0);
                              },
                              [i, v, S]
                         ),
                              Object(n.useEffect)(
                                   function () {
                                        if (t && !ie) {
                                             ae(!0), me();
                                             var e = (function (e, t) {
                                                  var r = 360 / t,
                                                       n =
                                                            r * (t - e) -
                                                            (43 + r / 2) +
                                                            (2 * Math.random() - 1) * r * 0.35;
                                                  return t - e > t / 2 ? -360 + n : n;
                                             })(r, i.length);
                                             Q(e);
                                        }
                                   },
                                   [t]
                              ),
                              Object(n.useEffect)(
                                   function () {
                                        re && (ae(!1), X(_));
                                   },
                                   [re]
                              );
                         var me = function () {
                              ee(!0),
                                   ne(!1),
                                   (ge.current = !0),
                                   setTimeout(function () {
                                        ge.current && ((ge.current = !1), ee(!1), ne(!0), c());
                                   }, pe);
                         };
                         return ce
                              ? o.a.createElement(
                                     l,
                                     null,
                                     o.a.createElement(
                                          u,
                                          {
                                               className: Z ? "started-spinning" : "",
                                               startSpinningTime: fe,
                                               continueSpinningTime: de,
                                               stopSpinningTime: he,
                                               startRotationDegrees: J,
                                               finalRotationDegrees: _,
                                          },
                                          o.a.createElement(g, {
                                               width: "900",
                                               height: "900",
                                               data: U,
                                               outerBorderColor: k,
                                               outerBorderWidth: A,
                                               innerRadius: O,
                                               innerBorderColor: T,
                                               innerBorderWidth: E,
                                               radiusLineColor: L,
                                               radiusLineWidth: M,
                                               fontSize: W,
                                               perpendicularText: D,
                                               textDistance: F,
                                          })
                                     ),
                                     o.a.createElement(f, { src: a.src, alt: "roulette-static" })
                                )
                              : null;
                    };
          },
     ]);
});

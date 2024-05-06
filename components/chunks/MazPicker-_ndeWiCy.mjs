import '../assets/MazPicker.css';
import { nextTick as Se, defineComponent as Me, defineAsyncComponent as ne, computed as I, openBlock as q, createElementBlock as re, normalizeClass as ie, createBlock as _, unref as Q, createCommentVNode as W, createElementVNode as oe, getCurrentInstance as ze, ref as ee, onMounted as Oe, useSlots as Ae, normalizeStyle as Te, renderSlot as ye, resolveDynamicComponent as Ye, withDirectives as De, mergeProps as Be, toHandlers as qe, vModelDynamic as Ue, createTextVNode as Fe, toDisplayString as je, withModifiers as We, withCtx as de, createVNode as se, onBeforeMount as xe, onUnmounted as Ne, watch as pe, Transition as Ze, vShow as Re } from "vue";
var fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function me(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ce = { exports: {} };
(function(e, c) {
  (function(f, a) {
    e.exports = a();
  })(fe, function() {
    var f = 1e3, a = 6e4, g = 36e5, k = "millisecond", M = "second", l = "minute", O = "hour", p = "day", $ = "week", Y = "month", X = "quarter", N = "year", B = "date", y = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, T = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, S = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(u) {
      var i = ["th", "st", "nd", "rd"], s = u % 100;
      return "[" + u + (i[(s - 20) % 10] || i[s] || i[0]) + "]";
    } }, F = function(u, i, s) {
      var d = String(u);
      return !d || d.length >= i ? u : "" + Array(i + 1 - d.length).join(s) + u;
    }, E = { s: F, z: function(u) {
      var i = -u.utcOffset(), s = Math.abs(i), d = Math.floor(s / 60), o = s % 60;
      return (i <= 0 ? "+" : "-") + F(d, 2, "0") + ":" + F(o, 2, "0");
    }, m: function u(i, s) {
      if (i.date() < s.date())
        return -u(s, i);
      var d = 12 * (s.year() - i.year()) + (s.month() - i.month()), o = i.clone().add(d, Y), m = s - o < 0, t = i.clone().add(d + (m ? -1 : 1), Y);
      return +(-(d + (s - o) / (m ? o - t : t - o)) || 0);
    }, a: function(u) {
      return u < 0 ? Math.ceil(u) || 0 : Math.floor(u);
    }, p: function(u) {
      return { M: Y, y: N, w: $, d: p, D: B, h: O, m: l, s: M, ms: k, Q: X }[u] || String(u || "").toLowerCase().replace(/s$/, "");
    }, u: function(u) {
      return u === void 0;
    } }, V = "en", L = {};
    L[V] = S;
    var P = "$isDayjsObject", A = function(u) {
      return u instanceof H || !(!u || !u[P]);
    }, x = function u(i, s, d) {
      var o;
      if (!i)
        return V;
      if (typeof i == "string") {
        var m = i.toLowerCase();
        L[m] && (o = m), s && (L[m] = s, o = m);
        var t = i.split("-");
        if (!o && t.length > 1)
          return u(t[0]);
      } else {
        var n = i.name;
        L[n] = i, o = n;
      }
      return !d && o && (V = o), o || !d && V;
    }, z = function(u, i) {
      if (A(u))
        return u.clone();
      var s = typeof i == "object" ? i : {};
      return s.date = u, s.args = arguments, new H(s);
    }, v = E;
    v.l = x, v.i = A, v.w = function(u, i) {
      return z(u, { locale: i.$L, utc: i.$u, x: i.$x, $offset: i.$offset });
    };
    var H = function() {
      function u(s) {
        this.$L = x(s.locale, null, !0), this.parse(s), this.$x = this.$x || s.x || {}, this[P] = !0;
      }
      var i = u.prototype;
      return i.parse = function(s) {
        this.$d = function(d) {
          var o = d.date, m = d.utc;
          if (o === null)
            return /* @__PURE__ */ new Date(NaN);
          if (v.u(o))
            return /* @__PURE__ */ new Date();
          if (o instanceof Date)
            return new Date(o);
          if (typeof o == "string" && !/Z$/i.test(o)) {
            var t = o.match(w);
            if (t) {
              var n = t[2] - 1 || 0, h = (t[7] || "0").substring(0, 3);
              return m ? new Date(Date.UTC(t[1], n, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, h)) : new Date(t[1], n, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, h);
            }
          }
          return new Date(o);
        }(s), this.init();
      }, i.init = function() {
        var s = this.$d;
        this.$y = s.getFullYear(), this.$M = s.getMonth(), this.$D = s.getDate(), this.$W = s.getDay(), this.$H = s.getHours(), this.$m = s.getMinutes(), this.$s = s.getSeconds(), this.$ms = s.getMilliseconds();
      }, i.$utils = function() {
        return v;
      }, i.isValid = function() {
        return this.$d.toString() !== y;
      }, i.isSame = function(s, d) {
        var o = z(s);
        return this.startOf(d) <= o && o <= this.endOf(d);
      }, i.isAfter = function(s, d) {
        return z(s) < this.startOf(d);
      }, i.isBefore = function(s, d) {
        return this.endOf(d) < z(s);
      }, i.$g = function(s, d, o) {
        return v.u(s) ? this[d] : this.set(o, s);
      }, i.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, i.valueOf = function() {
        return this.$d.getTime();
      }, i.startOf = function(s, d) {
        var o = this, m = !!v.u(d) || d, t = v.p(s), n = function(R, U) {
          var J = v.w(o.$u ? Date.UTC(o.$y, U, R) : new Date(o.$y, U, R), o);
          return m ? J : J.endOf(p);
        }, h = function(R, U) {
          return v.w(o.toDate()[R].apply(o.toDate("s"), (m ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(U)), o);
        }, b = this.$W, C = this.$M, j = this.$D, G = "set" + (this.$u ? "UTC" : "");
        switch (t) {
          case N:
            return m ? n(1, 0) : n(31, 11);
          case Y:
            return m ? n(1, C) : n(0, C + 1);
          case $:
            var Z = this.$locale().weekStart || 0, K = (b < Z ? b + 7 : b) - Z;
            return n(m ? j - K : j + (6 - K), C);
          case p:
          case B:
            return h(G + "Hours", 0);
          case O:
            return h(G + "Minutes", 1);
          case l:
            return h(G + "Seconds", 2);
          case M:
            return h(G + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, i.endOf = function(s) {
        return this.startOf(s, !1);
      }, i.$set = function(s, d) {
        var o, m = v.p(s), t = "set" + (this.$u ? "UTC" : ""), n = (o = {}, o[p] = t + "Date", o[B] = t + "Date", o[Y] = t + "Month", o[N] = t + "FullYear", o[O] = t + "Hours", o[l] = t + "Minutes", o[M] = t + "Seconds", o[k] = t + "Milliseconds", o)[m], h = m === p ? this.$D + (d - this.$W) : d;
        if (m === Y || m === N) {
          var b = this.clone().set(B, 1);
          b.$d[n](h), b.init(), this.$d = b.set(B, Math.min(this.$D, b.daysInMonth())).$d;
        } else
          n && this.$d[n](h);
        return this.init(), this;
      }, i.set = function(s, d) {
        return this.clone().$set(s, d);
      }, i.get = function(s) {
        return this[v.p(s)]();
      }, i.add = function(s, d) {
        var o, m = this;
        s = Number(s);
        var t = v.p(d), n = function(C) {
          var j = z(m);
          return v.w(j.date(j.date() + Math.round(C * s)), m);
        };
        if (t === Y)
          return this.set(Y, this.$M + s);
        if (t === N)
          return this.set(N, this.$y + s);
        if (t === p)
          return n(1);
        if (t === $)
          return n(7);
        var h = (o = {}, o[l] = a, o[O] = g, o[M] = f, o)[t] || 1, b = this.$d.getTime() + s * h;
        return v.w(b, this);
      }, i.subtract = function(s, d) {
        return this.add(-1 * s, d);
      }, i.format = function(s) {
        var d = this, o = this.$locale();
        if (!this.isValid())
          return o.invalidDate || y;
        var m = s || "YYYY-MM-DDTHH:mm:ssZ", t = v.z(this), n = this.$H, h = this.$m, b = this.$M, C = o.weekdays, j = o.months, G = o.meridiem, Z = function(U, J, te, ae) {
          return U && (U[J] || U(d, m)) || te[J].slice(0, ae);
        }, K = function(U) {
          return v.s(n % 12 || 12, U, "0");
        }, R = G || function(U, J, te) {
          var ae = U < 12 ? "AM" : "PM";
          return te ? ae.toLowerCase() : ae;
        };
        return m.replace(T, function(U, J) {
          return J || function(te) {
            switch (te) {
              case "YY":
                return String(d.$y).slice(-2);
              case "YYYY":
                return v.s(d.$y, 4, "0");
              case "M":
                return b + 1;
              case "MM":
                return v.s(b + 1, 2, "0");
              case "MMM":
                return Z(o.monthsShort, b, j, 3);
              case "MMMM":
                return Z(j, b);
              case "D":
                return d.$D;
              case "DD":
                return v.s(d.$D, 2, "0");
              case "d":
                return String(d.$W);
              case "dd":
                return Z(o.weekdaysMin, d.$W, C, 2);
              case "ddd":
                return Z(o.weekdaysShort, d.$W, C, 3);
              case "dddd":
                return C[d.$W];
              case "H":
                return String(n);
              case "HH":
                return v.s(n, 2, "0");
              case "h":
                return K(1);
              case "hh":
                return K(2);
              case "a":
                return R(n, h, !0);
              case "A":
                return R(n, h, !1);
              case "m":
                return String(h);
              case "mm":
                return v.s(h, 2, "0");
              case "s":
                return String(d.$s);
              case "ss":
                return v.s(d.$s, 2, "0");
              case "SSS":
                return v.s(d.$ms, 3, "0");
              case "Z":
                return t;
            }
            return null;
          }(U) || t.replace(":", "");
        });
      }, i.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, i.diff = function(s, d, o) {
        var m, t = this, n = v.p(d), h = z(s), b = (h.utcOffset() - this.utcOffset()) * a, C = this - h, j = function() {
          return v.m(t, h);
        };
        switch (n) {
          case N:
            m = j() / 12;
            break;
          case Y:
            m = j();
            break;
          case X:
            m = j() / 3;
            break;
          case $:
            m = (C - b) / 6048e5;
            break;
          case p:
            m = (C - b) / 864e5;
            break;
          case O:
            m = C / g;
            break;
          case l:
            m = C / a;
            break;
          case M:
            m = C / f;
            break;
          default:
            m = C;
        }
        return o ? m : v.a(m);
      }, i.daysInMonth = function() {
        return this.endOf(Y).$D;
      }, i.$locale = function() {
        return L[this.$L];
      }, i.locale = function(s, d) {
        if (!s)
          return this.$L;
        var o = this.clone(), m = x(s, d, !0);
        return m && (o.$L = m), o;
      }, i.clone = function() {
        return v.w(this.$d, this);
      }, i.toDate = function() {
        return new Date(this.valueOf());
      }, i.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, i.toISOString = function() {
        return this.$d.toISOString();
      }, i.toString = function() {
        return this.$d.toUTCString();
      }, u;
    }(), r = H.prototype;
    return z.prototype = r, [["$ms", k], ["$s", M], ["$m", l], ["$H", O], ["$W", p], ["$M", Y], ["$y", N], ["$D", B]].forEach(function(u) {
      r[u[1]] = function(i) {
        return this.$g(i, u[0], u[1]);
      };
    }), z.extend = function(u, i) {
      return u.$i || (u(i, H, z), u.$i = !0), z;
    }, z.locale = x, z.isDayjs = A, z.unix = function(u) {
      return z(1e3 * u);
    }, z.en = L[V], z.Ls = L, z.p = {}, z;
  });
})(Ce);
var Je = Ce.exports;
const D = /* @__PURE__ */ me(Je);
var Le = { exports: {} };
(function(e, c) {
  (function(f, a) {
    e.exports = a();
  })(fe, function() {
    var f = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, g = /\d\d/, k = /\d\d?/, M = /\d*[^-_:/,()\s\d]+/, l = {}, O = function(y) {
      return (y = +y) + (y > 68 ? 1900 : 2e3);
    }, p = function(y) {
      return function(w) {
        this[y] = +w;
      };
    }, $ = [/[+-]\d\d:?(\d\d)?|Z/, function(y) {
      (this.zone || (this.zone = {})).offset = function(w) {
        if (!w || w === "Z")
          return 0;
        var T = w.match(/([+-]|\d\d)/g), S = 60 * T[1] + (+T[2] || 0);
        return S === 0 ? 0 : T[0] === "+" ? -S : S;
      }(y);
    }], Y = function(y) {
      var w = l[y];
      return w && (w.indexOf ? w : w.s.concat(w.f));
    }, X = function(y, w) {
      var T, S = l.meridiem;
      if (S) {
        for (var F = 1; F <= 24; F += 1)
          if (y.indexOf(S(F, 0, w)) > -1) {
            T = F > 12;
            break;
          }
      } else
        T = y === (w ? "pm" : "PM");
      return T;
    }, N = { A: [M, function(y) {
      this.afternoon = X(y, !1);
    }], a: [M, function(y) {
      this.afternoon = X(y, !0);
    }], S: [/\d/, function(y) {
      this.milliseconds = 100 * +y;
    }], SS: [g, function(y) {
      this.milliseconds = 10 * +y;
    }], SSS: [/\d{3}/, function(y) {
      this.milliseconds = +y;
    }], s: [k, p("seconds")], ss: [k, p("seconds")], m: [k, p("minutes")], mm: [k, p("minutes")], H: [k, p("hours")], h: [k, p("hours")], HH: [k, p("hours")], hh: [k, p("hours")], D: [k, p("day")], DD: [g, p("day")], Do: [M, function(y) {
      var w = l.ordinal, T = y.match(/\d+/);
      if (this.day = T[0], w)
        for (var S = 1; S <= 31; S += 1)
          w(S).replace(/\[|\]/g, "") === y && (this.day = S);
    }], M: [k, p("month")], MM: [g, p("month")], MMM: [M, function(y) {
      var w = Y("months"), T = (Y("monthsShort") || w.map(function(S) {
        return S.slice(0, 3);
      })).indexOf(y) + 1;
      if (T < 1)
        throw new Error();
      this.month = T % 12 || T;
    }], MMMM: [M, function(y) {
      var w = Y("months").indexOf(y) + 1;
      if (w < 1)
        throw new Error();
      this.month = w % 12 || w;
    }], Y: [/[+-]?\d+/, p("year")], YY: [g, function(y) {
      this.year = O(y);
    }], YYYY: [/\d{4}/, p("year")], Z: $, ZZ: $ };
    function B(y) {
      var w, T;
      w = y, T = l && l.formats;
      for (var S = (y = w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(x, z, v) {
        var H = v && v.toUpperCase();
        return z || T[v] || f[v] || T[H].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(r, u, i) {
          return u || i.slice(1);
        });
      })).match(a), F = S.length, E = 0; E < F; E += 1) {
        var V = S[E], L = N[V], P = L && L[0], A = L && L[1];
        S[E] = A ? { regex: P, parser: A } : V.replace(/^\[|\]$/g, "");
      }
      return function(x) {
        for (var z = {}, v = 0, H = 0; v < F; v += 1) {
          var r = S[v];
          if (typeof r == "string")
            H += r.length;
          else {
            var u = r.regex, i = r.parser, s = x.slice(H), d = u.exec(s)[0];
            i.call(z, d), x = x.replace(d, "");
          }
        }
        return function(o) {
          var m = o.afternoon;
          if (m !== void 0) {
            var t = o.hours;
            m ? t < 12 && (o.hours += 12) : t === 12 && (o.hours = 0), delete o.afternoon;
          }
        }(z), z;
      };
    }
    return function(y, w, T) {
      T.p.customParseFormat = !0, y && y.parseTwoDigitYear && (O = y.parseTwoDigitYear);
      var S = w.prototype, F = S.parse;
      S.parse = function(E) {
        var V = E.date, L = E.utc, P = E.args;
        this.$u = L;
        var A = P[1];
        if (typeof A == "string") {
          var x = P[2] === !0, z = P[3] === !0, v = x || z, H = P[2];
          z && (H = P[2]), l = this.$locale(), !x && H && (l = T.Ls[H]), this.$d = function(s, d, o) {
            try {
              if (["x", "X"].indexOf(d) > -1)
                return new Date((d === "X" ? 1e3 : 1) * s);
              var m = B(d)(s), t = m.year, n = m.month, h = m.day, b = m.hours, C = m.minutes, j = m.seconds, G = m.milliseconds, Z = m.zone, K = /* @__PURE__ */ new Date(), R = h || (t || n ? 1 : K.getDate()), U = t || K.getFullYear(), J = 0;
              t && !n || (J = n > 0 ? n - 1 : K.getMonth());
              var te = b || 0, ae = C || 0, he = j || 0, ve = G || 0;
              return Z ? new Date(Date.UTC(U, J, R, te, ae, he, ve + 60 * Z.offset * 1e3)) : o ? new Date(Date.UTC(U, J, R, te, ae, he, ve)) : new Date(U, J, R, te, ae, he, ve);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(V, A, L), this.init(), H && H !== !0 && (this.$L = this.locale(H).$L), v && V != this.format(A) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (A instanceof Array)
          for (var r = A.length, u = 1; u <= r; u += 1) {
            P[1] = A[u - 1];
            var i = T.apply(this, P);
            if (i.isValid()) {
              this.$d = i.$d, this.$L = i.$L, this.init();
              break;
            }
            u === r && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          F.call(this, E);
      };
    };
  });
})(Le);
var Qe = Le.exports;
const Xe = /* @__PURE__ */ me(Qe);
var Ie = { exports: {} };
(function(e, c) {
  (function(f, a) {
    e.exports = a();
  })(fe, function() {
    return function(f, a, g) {
      a.prototype.isBetween = function(k, M, l, O) {
        var p = g(k), $ = g(M), Y = (O = O || "()")[0] === "(", X = O[1] === ")";
        return (Y ? this.isAfter(p, l) : !this.isBefore(p, l)) && (X ? this.isBefore($, l) : !this.isAfter($, l)) || (Y ? this.isBefore(p, l) : !this.isAfter(p, l)) && (X ? this.isAfter($, l) : !this.isBefore($, l));
      };
    };
  });
})(Ie);
var Ge = Ie.exports;
const Ke = /* @__PURE__ */ me(Ge), ce = "__maz-click-outside__", Ve = () => document.ontouchstart === null ? "touchstart" : "click";
async function Ee(e, c) {
  try {
    Pe(e);
    const f = c.instance, a = c.value, g = typeof a == "function";
    if (!g)
      throw new Error("[maz-ui](vClickOutside) the callback should be a function");
    await Se(), e[ce] = (M) => {
      if ((!e || M.target && !e.contains(M.target)) && a && g)
        return a.call(f, M);
    };
    const k = Ve();
    document.addEventListener(k, e[ce], { passive: !0 });
  } catch (f) {
    console.error("[maz-ui](vClickOutside)", f);
  }
}
function Pe(e) {
  try {
    const c = Ve();
    document.removeEventListener(c, e[ce], !1), delete e[ce];
  } catch (c) {
    console.error("[maz-ui](vClickOutside)", c);
  }
}
function _e(e, c) {
  try {
    if (c.value === c.oldValue)
      return;
    Ee(e, c);
  } catch (f) {
    console.error("[maz-ui](vClickOutside)", f);
  }
}
const et = {
  mounted: Ee,
  updated: _e,
  unmounted: Pe
}, tt = {
  month: "short",
  day: "numeric",
  year: "numeric"
}, ke = (e, c, f) => {
  if (c === void 0)
    throw new TypeError("[maz-ui](FilterDate) The `locale` attribute is required.");
  if (typeof c != "string")
    throw new TypeError("[maz-ui](FilterDate) The `locale` attribute must be a string.");
  const a = f ?? tt;
  try {
    const g = e instanceof Date ? e : new Date(e);
    return new Intl.DateTimeFormat(c, a).format(g);
  } catch (g) {
    throw new Error(`[maz-ui](FilterDate) ${g}`);
  }
};
var He = { exports: {} };
(function(e, c) {
  (function(f, a) {
    e.exports = a();
  })(fe, function() {
    return function(f, a) {
      a.prototype.weekday = function(g) {
        var k = this.$locale().weekStart || 0, M = this.$W, l = (M < k ? M + 7 : M) - k;
        return this.$utils().u(g) ? l : this.subtract(l, "day").add(g, "day");
      };
    };
  });
})(He);
var at = He.exports;
const nt = /* @__PURE__ */ me(at), rt = (e) => e ? (e = e.toString(), e.charAt(0).toUpperCase() + e.slice(1)) : "";
D.extend(nt);
function we({
  value: e,
  locale: c,
  options: f
}) {
  return e ? rt(ke(e, c, f)) : void 0;
}
function ot({
  value: e,
  locale: c,
  options: f
}) {
  const a = we({
    value: e.start,
    locale: c,
    options: f
  }), g = we({
    value: e.end,
    locale: c,
    options: f
  });
  return a || g ? `${a || "..."} - ${g || "..."}` : void 0;
}
function Bt(e) {
  return D(e).startOf("month").day();
}
function Ct(e, c) {
  const f = D().locale(e), a = [];
  for (let g = 0; g < 7; g++) {
    const k = f.day(g + c).toDate(), M = ke(k, e, { weekday: "short" });
    a.push(M);
  }
  return a;
}
function Lt(e) {
  return D(e).daysInMonth();
}
function It(e) {
  return D().isSame(e, "date");
}
function Vt(e, c, f) {
  return D(e).isSame(c, f);
}
function it(e, c) {
  return D(e).day() === c;
}
function ge(e, c = "YYYY-MM-DD") {
  if (e)
    return D(e).format(c);
}
function st(e, c = "YYYY-MM-DD") {
  return {
    start: ge(e.start, c),
    end: ge(e.end, c)
  };
}
function be({
  value: e,
  minDate: c,
  maxDate: f,
  format: a
}) {
  return c && D(e).isBefore(c) ? {
    newValue: c,
    newCurrentDate: D(c, a).format()
  } : f && D(e).isAfter(f) ? {
    newValue: f,
    newCurrentDate: D(f, a).format()
  } : {
    newValue: void 0,
    newCurrentDate: void 0
  };
}
function le({
  value: e,
  disabledWeekly: c
}) {
  return c.some((f) => it(e, f));
}
function ue({
  value: e,
  disabledDates: c
}) {
  return c.some((f) => D(e).isSame(D(f), "date"));
}
const Et = function(e, c, f = 0, a = !0) {
  e.scrollTo({
    top: c.offsetTop - f,
    behavior: a ? "smooth" : "auto"
  });
}, Pt = (e, c) => e.reduce((f, a) => Math.abs(a - c) < Math.abs(f - c) ? a : f);
function lt() {
  try {
    return typeof window > "u" ? void 0 : window.navigator.language;
  } catch (e) {
    throw new Error(`[MazPhoneNumberInput] (browserLocale) ${e}`);
  }
}
async function ut() {
  try {
    const e = await fetch("https://ipwho.is"), { country_code: c } = await e.json();
    return c;
  } catch (e) {
    console.error(`[maz-ui](MazPicker)(fetchCountryCode) ${e}`);
  }
}
const dt = { class: "m-picker-container__wrapper" }, ct = /* @__PURE__ */ Me({
  __name: "MazPickerContainer",
  props: {
    modelValue: {
      type: [String, Object],
      default: void 0
    },
    calendarDate: { type: String, required: !0 },
    color: { type: String, required: !0 },
    locale: { type: String, required: !0 },
    noHeader: { type: Boolean, default: !1 },
    firstDayOfWeek: { type: Number, required: !0 },
    double: { type: Boolean, required: !0 },
    hasDate: { type: Boolean, required: !0 },
    minDate: { type: String, default: void 0 },
    maxDate: { type: String, default: void 0 },
    inline: { type: Boolean, required: !0 },
    noShortcuts: { type: Boolean, required: !0 },
    shortcuts: {
      type: Array,
      required: !0
    },
    shortcut: { type: String, default: void 0 },
    hasTime: { type: Boolean, required: !0 },
    isOpen: { type: Boolean, required: !0 },
    format: { type: String, required: !0 },
    isHour12: { type: Boolean, required: !0 },
    formatterOptions: {
      type: Object,
      required: !0
    },
    minuteInterval: { type: Number, required: !0 },
    disabled: { type: Boolean, required: !0 },
    disabledWeekly: { type: Array, required: !0 },
    disabledHours: { type: Array, required: !0 },
    disabledDates: { type: Array, required: !0 }
  },
  emits: ["update:model-value", "update:calendar-date", "close"],
  setup(e, { emit: c }) {
    const f = ne(() => import("./MazPickerTime-Cc2hHJlp.mjs")), a = ne(() => import("./MazPickerHeader-BpNxHXI2.mjs")), g = ne(() => import("./MazPickerCalendar-BXadlngJ.mjs").then((p) => p.M)), k = e, M = c, l = I({
      get: () => k.modelValue,
      set: (p) => {
        M("update:model-value", p);
      }
    }), O = I({
      get: () => k.calendarDate,
      set: (p) => M("update:calendar-date", p)
    });
    return (p, $) => (q(), re(
      "div",
      {
        class: ie(["m-picker-container", {
          "--has-double": e.double,
          "--is-inline": e.inline,
          "--has-date": e.hasDate
        }])
      },
      [
        e.noHeader ? W("v-if", !0) : (q(), _(Q(a), {
          key: 0,
          color: e.color,
          "has-time": e.hasTime,
          "model-value": e.modelValue,
          locale: e.locale,
          "calendar-date": O.value,
          "has-date": e.hasDate,
          "formatter-options": e.formatterOptions,
          double: e.double,
          "no-shortcuts": e.noShortcuts,
          class: "m-picker-container__header"
        }, null, 8, ["color", "has-time", "model-value", "locale", "calendar-date", "has-date", "formatter-options", "double", "no-shortcuts"])),
        oe("div", dt, [
          e.hasDate ? (q(), _(Q(g), {
            key: 0,
            modelValue: l.value,
            "onUpdate:modelValue": $[0] || ($[0] = (Y) => l.value = Y),
            "calendar-date": O.value,
            "onUpdate:calendarDate": $[1] || ($[1] = (Y) => O.value = Y),
            color: e.color,
            locale: e.locale,
            "has-time": e.hasTime,
            double: e.double,
            "min-date": e.minDate,
            "max-date": e.maxDate,
            "first-day-of-week": e.firstDayOfWeek,
            disabled: e.disabled,
            "disabled-weekly": e.disabledWeekly,
            "disabled-dates": e.disabledDates,
            shortcuts: e.shortcuts,
            shortcut: e.shortcut,
            "no-shortcuts": e.noShortcuts,
            class: "m-picker-container__calendar"
          }, null, 8, ["modelValue", "calendar-date", "color", "locale", "has-time", "double", "min-date", "max-date", "first-day-of-week", "disabled", "disabled-weekly", "disabled-dates", "shortcuts", "shortcut", "no-shortcuts"])) : W("v-if", !0),
          e.hasTime ? (q(), _(Q(f), {
            key: 1,
            modelValue: l.value,
            "onUpdate:modelValue": $[2] || ($[2] = (Y) => l.value = Y),
            "calendar-date": O.value,
            "onUpdate:calendarDate": $[3] || ($[3] = (Y) => O.value = Y),
            "is-open": e.isOpen,
            color: e.color,
            locale: e.locale,
            "min-date": e.minDate,
            "max-date": e.maxDate,
            "has-date": e.hasDate,
            format: e.format,
            disabled: e.disabled,
            "disabled-hours": e.disabledHours,
            "minute-interval": e.minuteInterval,
            "formatter-options": e.formatterOptions,
            "is-hour12": e.isHour12,
            class: "m-picker-container__time"
          }, null, 8, ["modelValue", "calendar-date", "is-open", "color", "locale", "min-date", "max-date", "has-date", "format", "disabled", "disabled-hours", "minute-interval", "formatter-options", "is-hour12"])) : W("v-if", !0)
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), $e = (e, c) => {
  const f = e.__vccOpts || e;
  for (const [a, g] of c)
    f[a] = g;
  return f;
}, ft = /* @__PURE__ */ $e(ct, [["__scopeId", "data-v-eea709c5"]]), mt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, ht = /* @__PURE__ */ oe(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  },
  null,
  -1
  /* HOISTED */
), vt = [
  ht
];
function yt(e, c) {
  return q(), re("svg", mt, [...vt]);
}
const pt = { render: yt };
function bt(e, c) {
  let f;
  return function(...a) {
    clearTimeout(f), f = setTimeout(() => {
      e.apply(this, a);
    }, c);
  };
}
function Dt({
  componentName: e,
  providedId: c
}) {
  const f = ze();
  return I(() => c ?? `${e}-${f == null ? void 0 : f.uid}`);
}
const wt = {
  key: 0,
  class: "m-input-wrapper-left"
}, gt = { class: "m-input-wrapper-input" }, Mt = ["id", "type", "name", "inputmode", "placeholder", "aria-label", "disabled", "readonly", "required"], kt = { key: 0 }, $t = {
  key: 1,
  class: "m-input-wrapper-right"
}, Yt = /* @__PURE__ */ Me({
  inheritAttrs: !1,
  __name: "MazInput",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { default: void 0 },
    placeholder: { default: void 0 },
    label: { default: void 0 },
    name: { default: void 0 },
    color: { default: "primary" },
    type: { default: "text" },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    id: { default: void 0 },
    error: { type: Boolean, default: !1 },
    success: { type: Boolean, default: !1 },
    warning: { type: Boolean, default: !1 },
    hint: { default: void 0 },
    inputClasses: { default: void 0 },
    noBorder: { type: Boolean, default: !1 },
    noRadius: { type: Boolean, default: !1 },
    inputmode: { default: "text" },
    size: { default: "md" },
    debounce: { type: [Boolean, Number], default: !1 },
    debounceDelay: { default: 500 },
    validButton: { type: Boolean, default: !1 },
    validButtonLoading: { type: Boolean, default: !1 },
    autoFocus: { type: Boolean, default: !1 },
    borderActive: { type: Boolean, default: !1 },
    leftIcon: { default: void 0 },
    rightIcon: { default: void 0 },
    roundedSize: { default: void 0 },
    block: { type: Boolean }
  },
  emits: ["update:model-value", "focus", "blur", "click", "change"],
  setup(e, { emit: c }) {
    const f = ne(() => import("./MazBtn-DWDitOvL.mjs")), a = ne(() => import("./MazIcon-Cxrv3_OK.mjs")), g = ne(() => import("./eye-slash-tjfxO0LK.mjs")), k = ne(() => import("./eye-DqO_Jx56.mjs")), M = ne(() => import("./check-CL-vqe79.mjs")), l = e, O = c, p = ee(!1), $ = ee(!1), Y = ee(), X = Dt({
      componentName: "MazInput",
      providedId: l.id
    });
    Oe(() => {
      var r;
      l.autoFocus && ((r = Y.value) == null || r.focus());
    });
    const N = I(() => l.type === "password"), B = I(() => p.value ? "text" : l.type), y = I(() => {
      if (!l.noBorder) {
        if (l.error)
          return "maz-border-danger";
        if (l.success)
          return "maz-border-success";
        if (l.warning)
          return "maz-border-warning";
        if ($.value || l.borderActive) {
          if (l.color === "black")
            return "maz-border-black";
          if (l.color === "danger")
            return "maz-border-danger";
          if (l.color === "info")
            return "maz-border-info";
          if (l.color === "primary")
            return "maz-border-primary";
          if (l.color === "secondary")
            return "maz-border-secondary";
          if (l.color === "success")
            return "maz-border-success";
          if (l.color === "warning")
            return "maz-border-warning";
          if (l.color === "white")
            return "maz-border-white";
        }
        return "--default-border";
      }
    }), w = Ae(), T = I(() => {
      const { required: r, placeholder: u } = l;
      if (u)
        return r ? `${u} *` : u;
    }), S = I(() => V.value !== void 0 && V.value !== ""), F = bt(
      (r) => {
        O("update:model-value", r);
      },
      typeof l.debounce == "number" ? l.debounce : l.debounceDelay ?? 500
    ), E = (r) => {
      if (l.debounce)
        return F(r);
      O("update:model-value", r);
    }, V = I({
      get: () => l.modelValue,
      set: (r) => E(r)
    }), L = I(() => (!!l.label || !!l.hint) && ($.value || !!S.value || !!l.placeholder || ["date", "month", "week"].includes(l.type))), P = I(() => !!l.label || !!l.hint);
    function A() {
      return !!w["right-icon"] || N.value || !!w["valid-button"] || l.validButton || !!l.rightIcon;
    }
    function x() {
      return !!w["left-icon"] || !!l.leftIcon;
    }
    function z(r) {
      O("focus", r), $.value = !0;
    }
    function v(r) {
      O("blur", r), $.value = !1;
    }
    function H(r) {
      return O("change", r);
    }
    return (r, u) => (q(), re(
      "div",
      {
        class: ie(["m-input", [
          {
            "--is-focused": $.value || r.borderActive,
            "--should-up": L.value,
            "--has-label": P.value,
            "--is-disabled": r.disabled,
            "--is-readonly": r.readonly,
            "--has-z-2": r.error || r.warning || r.success,
            "--has-state": r.error || r.warning || r.success,
            "--block": r.block
          },
          l.class,
          `--${r.color}`,
          `--${r.size}`
        ]]),
        style: Te(r.style)
      },
      [
        oe(
          "div",
          {
            class: ie(["m-input-wrapper", [
              r.inputClasses,
              y.value,
              r.roundedSize ? `--rounded-${r.roundedSize}` : { "maz-rounded": !r.noRadius }
            ]])
          },
          [
            x() ? (q(), re("div", wt, [
              W(`
          @slot left-icon - The icon to display on the left of the input
        `),
              r.$slots["left-icon"] || r.leftIcon ? ye(r.$slots, "left-icon", { key: 0 }, () => [
                typeof r.leftIcon == "string" ? (q(), _(Q(a), {
                  key: 0,
                  name: r.leftIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : r.leftIcon ? (q(), _(Ye(r.leftIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : W("v-if", !0)
              ], !0) : W("v-if", !0)
            ])) : W("v-if", !0),
            oe("div", gt, [
              De(oe("input", Be({
                id: Q(X),
                ref_key: "input",
                ref: Y,
                "onUpdate:modelValue": u[0] || (u[0] = (i) => V.value = i),
                type: B.value,
                name: r.name
              }, r.$attrs, {
                inputmode: r.inputmode,
                placeholder: T.value,
                "aria-label": r.label || r.placeholder,
                disabled: r.disabled,
                readonly: r.readonly,
                required: r.required,
                class: "m-input-input"
              }, qe({
                blur: v,
                focus: z,
                change: H
              }, !0), {
                onClick: u[1] || (u[1] = (i) => r.$emit("click", i))
              }), null, 16, Mt), [
                [Ue, V.value]
              ]),
              r.label || r.hint ? (q(), re(
                "span",
                {
                  key: 0,
                  ref: "label",
                  class: ie(["m-input-label", [
                    {
                      "maz-text-danger-600": r.error,
                      "maz-text-success-600": r.success,
                      "maz-text-warning-600": r.warning
                    }
                  ]])
                },
                [
                  Fe(
                    je(r.hint || r.label) + " ",
                    1
                    /* TEXT */
                  ),
                  r.required ? (q(), re("sup", kt, "*")) : W("v-if", !0)
                ],
                2
                /* CLASS */
              )) : W("v-if", !0)
            ]),
            A() ? (q(), re("div", $t, [
              W(`
          @slot right-icon - The icon to display on the right of the input
        `),
              r.$slots["right-icon"] || r.rightIcon ? ye(r.$slots, "right-icon", { key: 0 }, () => [
                typeof r.rightIcon == "string" ? (q(), _(Q(a), {
                  key: 0,
                  name: r.rightIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : r.rightIcon ? (q(), _(Ye(r.rightIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : W("v-if", !0)
              ], !0) : W("v-if", !0),
              N.value ? (q(), _(Q(f), {
                key: 1,
                color: "transparent",
                tabindex: "-1",
                size: "mini",
                onClick: u[2] || (u[2] = We((i) => p.value = !p.value, ["stop"]))
              }, {
                default: de(() => [
                  p.value ? (q(), _(Q(g), {
                    key: 0,
                    class: "maz-text-xl maz-text-muted"
                  })) : (q(), _(Q(k), {
                    key: 1,
                    class: "maz-text-xl maz-text-muted"
                  }))
                ]),
                _: 1
                /* STABLE */
              })) : W("v-if", !0),
              W(`
          @slot valid-button - Replace the valid button by your own
        `),
              r.$slots["valid-button"] || r.validButton ? ye(r.$slots, "valid-button", { key: 2 }, () => [
                se(Q(f), {
                  color: "transparent",
                  disabled: r.disabled,
                  tabindex: "-1",
                  loading: r.validButtonLoading,
                  class: "m-input-valid-button",
                  size: "mini",
                  type: "submit"
                }, {
                  default: de(() => [
                    se(Q(M), { class: "maz-text-2xl maz-text-normal" })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "loading"])
              ], !0) : W("v-if", !0)
            ])) : W("v-if", !0)
          ],
          2
          /* CLASS */
        )
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), St = /* @__PURE__ */ $e(Yt, [["__scopeId", "data-v-b2106d63"]]), zt = /* @__PURE__ */ Me({
  inheritAttrs: !1,
  __name: "MazPicker",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { default: void 0 },
    format: { default: "YYYY-MM-DD" },
    open: { type: Boolean, default: !1 },
    label: { default: void 0 },
    placeholder: { default: void 0 },
    inputDateStyle: { default: () => ({
      dateStyle: "full"
    }) },
    locale: { default: void 0 },
    noHeader: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    firstDayOfWeek: { default: 0 },
    autoClose: { type: Boolean, default: !1 },
    customElementSelector: { default: void 0 },
    double: { type: Boolean, default: !1 },
    inline: { type: Boolean, default: !1 },
    color: { default: "primary" },
    pickerPosition: { default: void 0 },
    time: { type: Boolean, default: !1 },
    onlyTime: { type: Boolean, default: !1 },
    minuteInterval: { default: 5 },
    noUseBrowserLocale: { type: Boolean, default: !1 },
    noFetchLocal: { type: Boolean, default: !1 },
    noShortcuts: { type: Boolean, default: !1 },
    shortcuts: { default: () => [
      {
        label: "Last 7 days",
        identifier: "last7Days",
        value: {
          start: D().subtract(6, "day").format("YYYY-MM-DD"),
          end: D().format("YYYY-MM-DD")
        }
      },
      {
        label: "Last 30 days",
        identifier: "last30Days",
        value: {
          start: D().subtract(29, "day").format("YYYY-MM-DD"),
          end: D().format("YYYY-MM-DD")
        }
      },
      {
        label: "This week",
        identifier: "thisWeek",
        value: {
          start: D().startOf("week").format("YYYY-MM-DD"),
          end: D().endOf("week").format("YYYY-MM-DD")
        }
      },
      {
        label: "Last week",
        identifier: "lastWeek",
        value: {
          start: D().subtract(1, "week").startOf("week").format("YYYY-MM-DD"),
          end: D().subtract(1, "week").endOf("week").format("YYYY-MM-DD")
        }
      },
      {
        label: "This month",
        identifier: "thisMonth",
        value: {
          start: D().set("date", 1).format("YYYY-MM-DD"),
          end: D().set("date", D().daysInMonth()).format("YYYY-MM-DD")
        }
      },
      {
        label: "This year",
        identifier: "thisYear",
        value: {
          start: D().startOf("year").format("YYYY-MM-DD"),
          end: D().endOf("year").format("YYYY-MM-DD")
        }
      },
      {
        label: "Last year",
        identifier: "lastYear",
        value: {
          start: D().subtract(1, "year").startOf("year").format("YYYY-MM-DD"),
          end: D().subtract(1, "year").endOf("year").format("YYYY-MM-DD")
        }
      }
    ] },
    shortcut: { default: void 0 },
    minDate: { default: void 0 },
    maxDate: { default: void 0 },
    disabledWeekly: { default: () => [] },
    disabledDates: { default: () => [] },
    disabledHours: { default: () => [] },
    block: { type: Boolean }
  },
  emits: ["update:model-value", "close"],
  setup(e, { emit: c }) {
    D.extend(Xe), D.extend(Ke);
    const f = {
      dateStyle: "full"
    }, a = e, g = ze(), k = ee(a.locale || "en-US"), M = I(() => a.locale ?? k.value), l = I(() => `mazPickerContainer-${g == null ? void 0 : g.uid}`), O = c, p = ee(), $ = I(() => a.time || a.onlyTime), Y = I(() => a.double && !a.onlyTime), X = I(() => !a.onlyTime), N = I(() => typeof B.value == "object");
    xe(() => {
      N.value && $.value && console.error("[maz-ui](MazPicker) You can't use time picker with range picker"), $.value && !(a.format.includes("h") || a.format.includes("H")) && console.error(
        '[maz-ui](MazPicker) When you use the time picker, you must provided a format with time - Ex: "YYYY-MM-DD HH:mm"'
      ), a.format.includes("h") && !(a.format.includes("a") || a.format.includes("A")) && console.error(
        '[maz-ui](MazPicker) if you use the 12 format "h" or "hh", you must add "a" or "A" at the end of the format - Ex: "YYYY-MM-DD hh:mm a"'
      );
    });
    const B = I({
      get: () => a.modelValue && typeof a.modelValue == "object" ? {
        start: a.modelValue.start ? D(a.modelValue.start, a.format).format() : void 0,
        end: a.modelValue.end ? D(a.modelValue.end, a.format).format() : void 0
      } : a.modelValue ? D(a.modelValue, a.format).format() : void 0,
      set: (t) => {
        if (a.disabled)
          return;
        o(t);
        const n = typeof t == "object";
        a.autoClose && (!n || n && t.end) && v();
      }
    }), w = ee(((t) => {
      const n = (typeof t == "object" ? t.start : t) ?? D().format();
      return a.minDate && D(n).isBefore(a.minDate) ? a.minDate : a.maxDate && D(n).isAfter(a.maxDate) ? a.minDate ?? a.maxDate : n;
    })(B.value)), T = I(
      () => a.format.includes("a") || a.format.includes("A") || a.format.includes("h")
    ), S = I(() => ({
      ...f,
      ...a.inputDateStyle,
      timeStyle: a.inputDateStyle.timeStyle ?? $.value ? "short" : void 0,
      hour12: a.inputDateStyle.hour12 ?? T.value
    })), F = I(() => {
      if (B.value)
        return a.onlyTime ? B.value ? ke(D(B.value).format(), M.value, {
          timeStyle: S.value.timeStyle,
          hour12: S.value.hour12
        }) : void 0 : typeof B.value == "object" ? ot({
          value: B.value,
          locale: M.value,
          options: S.value
        }) : we({
          value: D(B.value).format(),
          locale: M.value,
          options: S.value
        });
    }), E = ee(!1), V = ee(!1), L = ee({
      vertical: "bottom",
      horizontal: "left"
    }), P = I(() => (E.value || a.open || V.value) && !a.disabled || a.inline), A = ee(!1);
    Oe(async () => {
      if (A.value = !0, a.customElementSelector && u(a.customElementSelector), !a.locale) {
        const t = lt();
        if (!a.noUseBrowserLocale && t)
          k.value = t;
        else if (!a.noFetchLocal) {
          const n = await ut();
          n && (k.value = n);
        }
      }
    }), Ne(() => {
      a.customElementSelector && i(a.customElementSelector);
    });
    const x = async () => {
      if (a.pickerPosition) {
        const t = a.pickerPosition.includes("right") ? "right" : "left", n = a.pickerPosition.includes("top") ? "top" : "bottom";
        return {
          horizontal: t,
          vertical: n
        };
      } else
        return {
          horizontal: "left",
          vertical: await z(p.value)
        };
    }, z = async (t) => {
      if (typeof window > "u")
        return "bottom";
      const n = 30;
      await Se();
      const h = document.querySelector(`#${l.value}`), b = t == null ? void 0 : t.getBoundingClientRect(), C = window.innerHeight, j = ((h == null ? void 0 : h.clientHeight) ?? 0) - n, G = (b && C - b.bottom) ?? 0, Z = (b && b.top) ?? 0, K = G && G >= j, R = Z && Z >= j;
      return !K && (R || Z >= G) ? "top" : "bottom";
    }, v = () => {
      E.value = !1, V.value = !1, O("close");
    };
    function H() {
      a.customElementSelector || v();
    }
    const r = () => {
      V.value = !V.value;
    }, u = (t) => {
      const n = document.querySelector(t);
      if (n)
        n.addEventListener("click", r);
      else
        throw new Error(
          `[maz-ui](MazPicker) impossible to find custom element with selector "${t}"`
        );
    }, i = (t) => {
      const n = document.querySelector(t);
      n == null || n.removeEventListener("click", r);
    }, s = (t) => {
      if (a.minDate || a.maxDate) {
        if (typeof t == "string") {
          const { newValue: n, newCurrentDate: h } = be({
            value: t,
            minDate: a.minDate,
            maxDate: a.maxDate,
            format: a.format
          });
          n && o(n), h && d(h);
        } else if (typeof t == "object" && (t.start || t.end)) {
          let n = t.start, h = t.end;
          if (t.start) {
            const { newValue: b, newCurrentDate: C } = be({
              value: t.start,
              minDate: a.minDate,
              maxDate: a.maxDate,
              format: a.format
            });
            b && (n = b), C && d(C);
          }
          if (t.end) {
            const { newValue: b } = be({
              value: t.end,
              minDate: a.minDate,
              maxDate: a.maxDate,
              format: a.format
            });
            b && (h = b);
          }
          o({
            start: n,
            end: h
          });
        }
      }
    }, d = (t) => {
      t && !D(w.value).isSame(t, "month") && (w.value = t);
    }, o = (t) => {
      if (typeof t == "object") {
        const n = st(t, a.format);
        O("update:model-value", n), n.start && d(n.start);
      } else
        O("update:model-value", ge(t, a.format));
    };
    pe(
      () => [B.value, a.minDate, a.maxDate],
      (t, n) => {
        const h = t[0], b = n == null ? void 0 : n[0];
        typeof h == "object" && (h.start || h.end) ? (!b || typeof b == "object" && (b.start !== h.start || b.end !== h.end)) && (o(h), s(h)) : typeof h == "string" && h !== b && (o(h), s(h));
      },
      { immediate: !0 }
    );
    function m(t) {
      t.code === "Escape" && P.value && (t.preventDefault(), v());
    }
    return pe(
      () => P.value,
      async (t) => {
        t ? (L.value = await x(), !a.inline && A.value && document.addEventListener("keydown", m)) : !a.inline && A.value && document.removeEventListener("keydown", m);
      },
      { immediate: !0 }
    ), pe(
      () => [B.value, a.disabledWeekly, a.disabledDates],
      (t) => {
        const n = t[0], h = t[1], b = t[2];
        typeof n == "object" && (n.start || n.end) ? ((n.start && le({ value: n.start, disabledWeekly: h }) || n.start && ue({ value: n.start, disabledDates: b }) || n.end && le({ value: n.end, disabledWeekly: h }) || n.end && ue({ value: n.end, disabledDates: b })) && (B.value = { start: void 0, end: void 0 }), (n.end && le({ value: n.end, disabledWeekly: h }) || n.end && ue({ value: n.end, disabledDates: b })) && (B.value = { start: n.start, end: void 0 })) : typeof n == "string" && (le({ value: n, disabledWeekly: h }) || ue({ value: n, disabledDates: b })) && (B.value = void 0);
      },
      { immediate: !0 }
    ), (t, n) => De((q(), re(
      "div",
      {
        ref_key: "MazPicker",
        ref: p,
        class: ie(["m-picker", [
          `m-picker--${t.color}`,
          `m-picker--${L.value.vertical}`,
          `m-picker--${L.value.horizontal}`,
          {
            "--is-open": P.value,
            "--is-disabled": t.disabled,
            "--block": t.block
          },
          a.class
        ]]),
        role: "none",
        style: Te(t.style)
      },
      [
        !t.customElementSelector && !t.inline ? (q(), _(St, Be({
          key: 0,
          "model-value": F.value,
          readonly: ""
        }, t.$attrs, {
          block: "",
          autocomplete: "off",
          class: "m-picker__input",
          label: t.label,
          disabled: t.disabled,
          placeholder: t.placeholder,
          color: t.color,
          onClick: n[1] || (n[1] = (h) => E.value = !E.value)
        }), {
          "right-icon": de(() => [
            oe("button", {
              type: "button",
              tabindex: "-1",
              class: "m-picker__button",
              onClick: n[0] || (n[0] = (h) => E.value = !E.value)
            }, [
              se(Q(pt), { class: "m-picker__button__chevron maz-text-lg" })
            ])
          ]),
          _: 1
          /* STABLE */
        }, 16, ["model-value", "label", "disabled", "placeholder", "color"])) : W("v-if", !0),
        se(Ze, {
          name: L.value.vertical === "top" ? "maz-slideinvert" : "maz-slide",
          persisted: ""
        }, {
          default: de(() => [
            De(se(ft, {
              id: l.value,
              ref: "PickerContainer",
              modelValue: B.value,
              "onUpdate:modelValue": n[2] || (n[2] = (h) => B.value = h),
              "calendar-date": w.value,
              "onUpdate:calendarDate": n[3] || (n[3] = (h) => w.value = h),
              "is-open": P.value,
              color: t.color,
              locale: M.value,
              "has-date": X.value,
              double: Y.value,
              "has-time": $.value,
              "formatter-options": S.value,
              "no-header": t.noHeader,
              "min-date": t.minDate,
              format: t.format,
              "is-hour12": T.value,
              "max-date": t.maxDate,
              "disabled-weekly": t.disabledWeekly,
              inline: t.inline,
              "first-day-of-week": t.firstDayOfWeek,
              shortcuts: t.shortcuts,
              shortcut: t.shortcut,
              disabled: t.disabled,
              "disabled-hours": t.disabledHours,
              "disabled-dates": t.disabledDates,
              "minute-interval": t.minuteInterval,
              "no-shortcuts": t.noShortcuts,
              onClose: v
            }, null, 8, ["id", "modelValue", "calendar-date", "is-open", "color", "locale", "has-date", "double", "has-time", "formatter-options", "no-header", "min-date", "format", "is-hour12", "max-date", "disabled-weekly", "inline", "first-day-of-week", "shortcuts", "shortcut", "disabled", "disabled-hours", "disabled-dates", "minute-interval", "no-shortcuts"]), [
              [Re, P.value]
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ],
      6
      /* CLASS, STYLE */
    )), [
      [Q(et), H]
    ]);
  }
}), Ht = /* @__PURE__ */ $e(zt, [["__scopeId", "data-v-ba37f958"]]);
export {
  Ht as M,
  $e as _,
  ke as a,
  Bt as b,
  rt as c,
  D as d,
  It as e,
  Pt as f,
  Lt as g,
  it as h,
  Vt as i,
  bt as j,
  Ct as k,
  Et as s
};

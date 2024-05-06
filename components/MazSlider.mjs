import './assets/MazSlider.css';
import { defineComponent as te, ref as y, computed as f, watch as F, onMounted as ne, onBeforeUnmount as oe, nextTick as g, openBlock as b, createElementBlock as w, Fragment as T, createCommentVNode as ae, createElementVNode as _, normalizeStyle as B, normalizeClass as j, renderList as K, toDisplayString as se } from "vue";
function le(a, l) {
  let n;
  return function(...c) {
    clearTimeout(n), n = setTimeout(() => {
      a.apply(this, c);
    }, l);
  };
}
const ue = (a) => {
  const l = document.documentElement, n = document.body, c = a.getBoundingClientRect();
  return {
    y: c.top + (window.pageYOffset || l.scrollTop) - (l.clientTop || n.clientTop || 0),
    x: c.left + (window.pageXOffset || l.scrollLeft) - (l.clientLeft || n.clientLeft || 0)
  };
}, re = (a, l, n = !1) => {
  const c = "targetTouches" in a ? a.targetTouches[0] : a, v = ue(l), i = {
    x: c.pageX - v.x,
    y: c.pageY - v.y
  };
  return {
    x: n ? l.offsetWidth - i.x : i.x,
    y: n ? l.offsetHeight - i.y : i.y
  };
}, q = (a, l, n, c) => c === "minus" ? l ? a >= l : !0 : n ? a <= n : !0, I = (a, l, n) => {
  const c = a + 1, i = l < c ? c - l : l - c;
  return 100 / n * i / 100;
}, ie = ["aria-valuenow", "aria-valuemin", "aria-valuemax"], ce = ["data-label", "onMousedownPassive", "onTouchstartPassive", "onFocusPassive", "onBlurPassive", "onTouchendPassive", "onKeydownPassive"], de = /* @__PURE__ */ te({
  __name: "MazSlider",
  props: {
    /** Array of cursors values */
    modelValue: {
      type: [Number, Array],
      required: !0,
      validator: (a) => ["number"].includes(typeof a) || Array.isArray(a) || a === null
    },
    /** array of cursors label */
    labels: { type: Array, default: void 0 },
    /** min value of sliders */
    min: { type: Number, default: 0 },
    /** max value of sliders */
    max: { type: Number, default: 100 },
    /** height size of slider bar */
    size: { type: String, default: void 0 },
    /** remove div in different colors */
    noDivider: { type: Boolean, default: !1 },
    /** become a logarithmic slider (exponential) */
    log: { type: Boolean, default: !1 },
    /** main slider color */
    color: {
      type: String,
      default: "primary"
    },
    /** disables cursor animation when active */
    noCursorAnim: { type: Boolean, default: !1 }
  },
  emits: ["update:model-value"],
  setup(a, { emit: l }) {
    const n = a, c = l, v = y(), i = y(), m = y(), d = y(), C = y([]), k = y([]), p = f(() => typeof n.modelValue == "number" ? [n.modelValue] : n.modelValue ? n.modelValue : [0]), M = f(() => Math.log(n.min || 1)), X = f(() => Math.log(n.max)), L = f(() => {
      const { min: e, max: t } = n;
      return (X.value - M.value) / (t - e);
    }), A = f(() => {
      const { min: e, max: t } = n;
      return t - e;
    }), Y = f(() => ({
      paddingTop: n.labels ? "2.5em" : "1em"
    })), H = f(() => Array.isArray(n.modelValue));
    F(
      () => n.modelValue,
      () => d.value = p.value,
      { immediate: !0 }
    ), F(
      () => [p.value, n.min, n.max, n.log].join(","),
      () => z(!0)
    );
    const $ = le(() => z(), 300);
    ne(() => {
      z(!0), window.addEventListener("resize", $);
    }), oe(() => {
      window.removeEventListener("resize", $);
    });
    const z = async (e) => {
      e === !0 && U(), await Q(), await g();
      for (const [t, u] of p.value.entries())
        P(t);
    }, R = (e, t) => {
      e.key === "ArrowLeft" ? d.value && q(d.value[t] - 1, d.value[t - 1], d.value[t + 1], "minus") && (d.value[t]--, x(d.value)) : e.key === "ArrowRight" && d.value && q(d.value[t] + 1, d.value[t - 1], d.value[t + 1], "plus") && (d.value[t]++, x(d.value));
    }, W = (e) => {
      i.value = void 0, D(e);
    }, U = () => {
      const { min: e, max: t } = n, u = p.value.map(
        (o) => o < e ? e : o > t ? t : o
      );
      x(u), d.value = u;
    }, x = (e) => {
      const t = H.value ? [...e] : e[0];
      c("update:model-value", t);
    }, G = (e) => {
      const { labels: t } = n;
      return t ? t[e] : void 0;
    }, P = (e) => {
      D(e), n.noDivider || J();
    }, D = async (e) => {
      var u;
      await g();
      const t = document.querySelectorAll(".m-slider .m-slider__btn");
      if (t) {
        const o = t[e], s = (o == null ? void 0 : o.clientWidth) + 16, r = {
          left: typeof ((u = m.value) == null ? void 0 : u[e]) == "number" ? `${m.value[e] - s / 2 || 1}px` : ""
        };
        C.value[e] = r;
      }
    }, J = () => {
      if (m.value) {
        const e = [...m.value];
        e.push(0);
        const t = e.length, u = Math.round(t / 2);
        k.value = e.map((o, s) => ({
          left: `${s === 0 ? 0 : e[s - 1]}px`,
          // ATTENTION: buttonPositions.value[i - 1]
          right: `${s + 1 === t ? 0 : "calc( 100% - " + o + "px )"}`,
          backgroundColor: u === s + 1 ? void 0 : s < u ? (
            // ligthen
            `rgba(255, 255, 255, ${I(s, u, t)})`
          ) : (
            // darken
            `rgba(0, 0, 0, ${I(s, u, t)})`
          )
        }));
      }
    }, Q = async () => {
      var s, r;
      await g();
      const { min: e, max: t, log: u } = n, o = (s = v.value) == null ? void 0 : s.clientWidth;
      o ? m.value = (r = d.value) == null ? void 0 : r.map(
        (h) => u ? o / t * (e + (Math.log(h) - M.value) / L.value) : o / A.value * (h - e)
      ) : console.warn("[maz-ui][MazSlider] ref component not found");
    }, E = async () => {
      var s, r, h;
      await g();
      const { max: e, min: t, log: u } = n, o = (s = v.value) == null ? void 0 : s.clientWidth;
      if (o)
        return u ? (r = m.value) == null ? void 0 : r.map((V) => {
          const Z = V / (o / e), ee = Math.exp((Z - t) * L.value + M.value);
          return Math.round(ee);
        }) : (h = m.value) == null ? void 0 : h.map(
          (V) => Math.round(V / (o / A.value)) + t
        );
      console.warn("[maz-ui][MazSlider] ref component not found");
    }, S = (e, t) => {
      i.value === void 0 && (i.value = t, P(t));
    }, O = async () => {
      if (i.value === void 0)
        return;
      const e = await E();
      e && x(e), i.value = void 0;
    }, N = async (e) => {
      var u;
      if (await g(), i.value === void 0)
        return;
      const t = (u = v.value) == null ? void 0 : u.clientWidth;
      if (m.value) {
        const o = m.value[i.value - 1] || 0, s = m.value[i.value + 1] || t;
        if (!v.value)
          return console.error("[maz-ui](MazSlider/handleMousemove) MazSlider not available");
        m.value[i.value] = (() => {
          const r = re(e, v.value).x;
          return r < o ? o : s && r > s ? s : r;
        })(), d.value = await E(), P(i.value);
      }
    };
    return (e, t) => (b(), w(
      T,
      null,
      [
        ae(" eslint-disable vuejs-accessibility/mouse-events-have-key-events "),
        _(
          "div",
          {
            style: B([Y.value, { fontSize: a.size }]),
            class: j(["m-slider", [`m-slider--${a.color}`]]),
            role: "button",
            tabindex: "-1",
            onMousemovePassive: N,
            onMouseupPassive: O,
            onMouseleavePassive: O,
            onTouchmovePassive: N
          },
          [
            _("div", {
              ref_key: "MazSlider",
              ref: v,
              class: "m-slider__bar",
              role: "slider",
              "aria-valuenow": a.modelValue.toString(),
              "aria-valuemin": a.min,
              "aria-valuemax": a.max
            }, [
              (b(!0), w(
                T,
                null,
                K(k.value, (u, o) => (b(), w(
                  "div",
                  {
                    key: `divider-${o}`,
                    style: B([u]),
                    class: "m-slider__divider"
                  },
                  null,
                  4
                  /* STYLE */
                ))),
                128
                /* KEYED_FRAGMENT */
              )),
              (b(!0), w(
                T,
                null,
                K(p.value, (u, o) => {
                  var s;
                  return b(), w("button", {
                    key: `cursor-${o}`,
                    type: "button",
                    "data-label": G(o),
                    class: j(["m-slider__btn", {
                      "active-cursor": o === i.value && !a.noCursorAnim
                    }]),
                    style: B([C.value[o]]),
                    onMousedownPassive: (r) => S(r, o),
                    onTouchstartPassive: (r) => S(r, o),
                    onFocusPassive: (r) => S(r, o),
                    onBlurPassive: (r) => W(o),
                    onTouchendPassive: (r) => W(o),
                    onKeydownPassive: (r) => R(r, o)
                  }, [
                    _(
                      "span",
                      null,
                      se((s = d.value) == null ? void 0 : s[o]),
                      1
                      /* TEXT */
                    )
                  ], 46, ce);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, ie)
          ],
          38
          /* CLASS, STYLE, NEED_HYDRATION */
        )
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    ));
  }
}), ve = (a, l) => {
  const n = a.__vccOpts || a;
  for (const [c, v] of l)
    n[c] = v;
  return n;
}, fe = /* @__PURE__ */ ve(de, [["__scopeId", "data-v-4993a04d"]]);
export {
  fe as default
};

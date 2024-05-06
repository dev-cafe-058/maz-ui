import './assets/MazCircularProgressBar.css';
import { defineComponent as _, useCssVars as $, useSlots as y, computed as r, ref as S, watch as B, openBlock as p, createElementBlock as v, normalizeClass as P, createElementVNode as n, renderSlot as l, createTextVNode as u, toDisplayString as i, createCommentVNode as m, getCurrentInstance as b, normalizeStyle as A, unref as g, createBlock as M, createSlots as I, withCtx as k } from "vue";
const N = { class: "maz-sr-only" }, V = {
  key: 0,
  class: "m-animated-counter__fix"
}, D = /* @__PURE__ */ _({
  __name: "MazAnimatedCounter",
  props: {
    count: {},
    duration: { default: 1e3 },
    prefix: { default: void 0 },
    suffix: { default: void 0 }
  },
  setup(a) {
    $((t) => ({
      "0b7109b2": h.value,
      e965ff72: t.count
    }));
    const e = a, s = y(), f = r(() => !!e.prefix || !!s.prefix), d = r(() => !!e.suffix || !!s.suffix), c = S(!0);
    B(
      () => e.count,
      (t, x) => {
        t !== x && (c.value = !1, setTimeout(() => {
          c.value = !0;
        }, 100));
      }
    );
    const h = r(() => `${e.duration}ms`);
    return (t, x) => (p(), v(
      "span",
      {
        class: P(["m-animated-counter", {
          "--animated": c.value,
          "--prefixed": f.value,
          "--suffixed": d.value
        }])
      },
      [
        n("span", N, [
          l(t.$slots, "prefix", {}, () => [
            u(
              i(t.prefix),
              1
              /* TEXT */
            )
          ], !0),
          u(
            " " + i(t.count) + " ",
            1
            /* TEXT */
          ),
          l(t.$slots, "suffix", {}, () => [
            u(
              i(t.suffix),
              1
              /* TEXT */
            )
          ], !0)
        ]),
        f.value || d.value ? (p(), v("span", V, [
          m(' @slot Prefix slot - Add a prefix next to the number (e.g: "$") '),
          l(t.$slots, "prefix", {}, () => [
            u(
              i(t.prefix),
              1
              /* TEXT */
            )
          ], !0),
          m(' @slot Suffix slot - Add a suffix next to the number (e.g: "%") '),
          l(t.$slots, "suffix", {}, () => [
            u(
              i(t.suffix),
              1
              /* TEXT */
            )
          ], !0)
        ])) : m("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}), z = (a, e) => {
  const s = a.__vccOpts || a;
  for (const [f, d] of e)
    s[f] = d;
  return s;
}, E = /* @__PURE__ */ z(D, [["__scopeId", "data-v-ca68c5dd"]]);
function L({
  componentName: a,
  providedId: e
}) {
  const s = b();
  return r(() => e ?? `${a}-${s == null ? void 0 : s.uid}`);
}
const T = { class: "outer" }, W = { class: "inner" }, j = { key: 0 }, q = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  viewBox: "0 0 100 100"
}, G = ["id"], O = ["stop-color"], R = ["stop-color"], U = ["stroke-width", "stroke", "stroke-linecap"], F = /* @__PURE__ */ _({
  __name: "MazCircularProgressBar",
  props: {
    percentage: { default: 0 },
    size: { default: "10em" },
    duration: { default: 1e3 },
    color: { default: void 0 },
    autoColor: { type: Boolean },
    prefix: { default: void 0 },
    suffix: { default: void 0 },
    strokeLinecap: { default: "round" },
    strokeWidth: { default: 6 },
    stroke: { default: void 0 }
  },
  setup(a) {
    $((o) => ({
      72728559: C.value,
      "1cd555a4": w.value
    }));
    const e = a, s = y(), f = r(() => !!e.prefix || !!s.prefix), d = r(() => !!e.suffix || !!s.suffix), c = L({
      componentName: "MazCircularProgressBar"
    }), h = r(() => e.percentage > 100 ? 100 : e.percentage <= 0 ? 0.5 : e.percentage), t = r(
      () => e.autoColor ? x(e.percentage) : e.color
    );
    function x(o) {
      return o < 50 || o > 100 ? "danger" : o < 100 ? "warning" : "success";
    }
    const C = r(() => `${e.duration}ms`), w = r(() => Math.round(290 - 290 * (h.value / 100)));
    return (o, H) => (p(), v(
      "div",
      {
        class: "m-circular-progress-bar",
        style: A([
          {
            fontSize: o.size
          }
        ])
      },
      [
        n("div", T, [
          n("div", W, [
            g(s).default ? (p(), v("span", j, [
              m(" @slot Default slot - Replace the percaentage value "),
              l(o.$slots, "default", {}, void 0, !0)
            ])) : (p(), M(E, {
              key: 1,
              count: o.percentage,
              duration: o.duration
            }, I({
              _: 2
              /* DYNAMIC */
            }, [
              f.value ? {
                name: "prefix",
                fn: k(() => [
                  m(' @slot Prefix slot - Add a prefix next to the number (e.g: "$") '),
                  l(o.$slots, "prefix", {}, () => [
                    u(
                      i(o.prefix),
                      1
                      /* TEXT */
                    )
                  ], !0)
                ]),
                key: "0"
              } : void 0,
              d.value ? {
                name: "suffix",
                fn: k(() => [
                  m(' @slot Suffix slot - Add a suffix next to the number (e.g: "%") '),
                  l(o.$slots, "suffix", {}, () => [
                    u(
                      i(o.suffix),
                      1
                      /* TEXT */
                    )
                  ], !0)
                ]),
                key: "1"
              } : void 0
            ]), 1032, ["count", "duration"]))
          ])
        ]),
        (p(), v("svg", q, [
          n("defs", null, [
            n("linearGradient", {
              id: `${g(c)}-gradient`,
              x1: "0",
              x2: "0",
              y1: "1",
              y2: "0"
            }, [
              n("stop", {
                offset: "0%",
                "stop-color": t.value ? `var(--maz-color-${t.value}-400)` : "var(--maz-color-primary)"
              }, null, 8, O),
              n("stop", {
                offset: "100%",
                "stop-color": t.value ? `var(--maz-color-${t.value}-700)` : "var(--maz-color-secondary)"
              }, null, 8, R)
            ], 8, G)
          ]),
          n("circle", {
            cx: "50",
            cy: "50",
            r: "46",
            "stroke-width": o.strokeWidth,
            "stroke-dasharray": "290",
            "stroke-dashoffset": "290",
            stroke: o.stroke ? o.stroke : `url(#${g(c)}-gradient)`,
            fill: "none",
            "stroke-linecap": o.strokeLinecap
          }, null, 8, U)
        ]))
      ],
      4
      /* STYLE */
    ));
  }
}), K = /* @__PURE__ */ z(F, [["__scopeId", "data-v-fd58f273"]]);
export {
  K as default
};

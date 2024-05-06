import './assets/MazAnimatedCounter.css';
import { defineComponent as v, useCssVars as _, useSlots as h, computed as l, ref as C, watch as $, openBlock as p, createElementBlock as m, normalizeClass as A, createElementVNode as S, renderSlot as f, createTextVNode as o, toDisplayString as a, createCommentVNode as d } from "vue";
const b = { class: "maz-sr-only" }, g = {
  key: 0,
  class: "m-animated-counter__fix"
}, k = /* @__PURE__ */ v({
  __name: "MazAnimatedCounter",
  props: {
    count: {},
    duration: { default: 1e3 },
    prefix: { default: void 0 },
    suffix: { default: void 0 }
  },
  setup(n) {
    _((e) => ({
      "0b7109b2": x.value,
      e965ff72: e.count
    }));
    const t = n, s = h(), r = l(() => !!t.prefix || !!s.prefix), u = l(() => !!t.suffix || !!s.suffix), i = C(!0);
    $(
      () => t.count,
      (e, c) => {
        e !== c && (i.value = !1, setTimeout(() => {
          i.value = !0;
        }, 100));
      }
    );
    const x = l(() => `${t.duration}ms`);
    return (e, c) => (p(), m(
      "span",
      {
        class: A(["m-animated-counter", {
          "--animated": i.value,
          "--prefixed": r.value,
          "--suffixed": u.value
        }])
      },
      [
        S("span", b, [
          f(e.$slots, "prefix", {}, () => [
            o(
              a(e.prefix),
              1
              /* TEXT */
            )
          ], !0),
          o(
            " " + a(e.count) + " ",
            1
            /* TEXT */
          ),
          f(e.$slots, "suffix", {}, () => [
            o(
              a(e.suffix),
              1
              /* TEXT */
            )
          ], !0)
        ]),
        r.value || u.value ? (p(), m("span", g, [
          d(' @slot Prefix slot - Add a prefix next to the number (e.g: "$") '),
          f(e.$slots, "prefix", {}, () => [
            o(
              a(e.prefix),
              1
              /* TEXT */
            )
          ], !0),
          d(' @slot Suffix slot - Add a suffix next to the number (e.g: "%") '),
          f(e.$slots, "suffix", {}, () => [
            o(
              a(e.suffix),
              1
              /* TEXT */
            )
          ], !0)
        ])) : d("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}), y = (n, t) => {
  const s = n.__vccOpts || n;
  for (const [r, u] of t)
    s[r] = u;
  return s;
}, V = /* @__PURE__ */ y(k, [["__scopeId", "data-v-ca68c5dd"]]);
export {
  V as default
};

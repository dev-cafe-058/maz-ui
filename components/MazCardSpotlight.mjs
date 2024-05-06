import './assets/MazCardSpotlight.css';
import { defineComponent as g, useCssVars as k, ref as c, computed as m, onMounted as E, onUnmounted as w, openBlock as z, createElementBlock as B, normalizeClass as b, normalizeStyle as h, createElementVNode as i, renderSlot as S, withDirectives as y, vShow as C } from "vue";
const $ = { class: "inner" }, M = /* @__PURE__ */ g({
  __name: "MazCardSpotlight",
  props: {
    color: { default: "primary" },
    noElevation: { type: Boolean, default: !1 },
    padding: { type: Boolean, default: !0 },
    contentClass: { default: void 0 },
    contentStyle: { default: void 0 },
    innerOpacity: { default: 0.95 }
  },
  setup(l) {
    k((e) => ({
      "474a7292": e.innerOpacity,
      f69a3cbc: u.value
    }));
    const n = l, o = c(), r = c(), t = c(!1);
    function d({ clientX: e, clientY: p }) {
      var v, s, f;
      t.value = !0;
      const a = (v = r.value) == null ? void 0 : v.getBoundingClientRect();
      a && ((f = (s = o.value) == null ? void 0 : s.animate) == null || f.call(
        s,
        [
          {
            transform: `translate(${e - a.left - a.width / 2}px,${p - a.top - a.height / 2}px)`
          }
        ],
        {
          duration: 300,
          fill: "forwards"
        }
      ));
    }
    const u = m(() => `var(--maz-color-${n.color}-alpha)`), _ = m(() => `var(--maz-color-${n.color}-alpha-20)`);
    return E(() => {
      window.addEventListener("mousemove", d);
    }), w(() => {
      window.removeEventListener("mousemove", d);
    }), (e, p) => (z(), B(
      "div",
      {
        class: b(["m-card-spotlight", { "maz-elevation": !e.noElevation }]),
        style: h({ backgroundColor: _.value })
      },
      [
        i("div", $, [
          i(
            "div",
            {
              class: b(["content", [{ "maz-p-4": e.padding }, e.contentClass]])
            },
            [
              S(e.$slots, "default", {}, void 0, !0)
            ],
            2
            /* CLASS */
          )
        ]),
        y(i(
          "div",
          {
            ref_key: "blobElement",
            ref: o,
            class: "blob",
            style: h({ backgroundColor: u.value })
          },
          null,
          4
          /* STYLE */
        ), [
          [C, t.value]
        ]),
        y(i(
          "div",
          {
            ref_key: "fakeblobElement",
            ref: r,
            class: "fakeblob"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [C, t.value]
        ])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), O = (l, n) => {
  const o = l.__vccOpts || l;
  for (const [r, t] of n)
    o[r] = t;
  return o;
}, L = /* @__PURE__ */ O(M, [["__scopeId", "data-v-14299ed5"]]);
export {
  L as default
};

import './assets/MazTabsContentItem.css';
import { inject as p, defineComponent as d, ref as c, watch as f, computed as i, openBlock as l, createBlock as v, Transition as _, withCtx as T, withDirectives as z, createElementVNode as C, renderSlot as w, vShow as h } from "vue";
function y(t, n) {
  const e = p(t, n);
  if (!e)
    throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${t}`);
  return e;
}
const I = /* @__PURE__ */ d({
  __name: "MazTabsContentItem",
  props: {
    tab: { type: Number, required: !0 }
  },
  setup(t) {
    const n = c("maz-tab-transition"), e = c(), o = t, { currentTab: r } = y("maz-tabs");
    f(
      () => r.value,
      async (a, s) => {
        if (typeof a == "number" && typeof s == "number") {
          const b = s < a;
          n.value = b ? "maz-tab-transition" : "maz-tab-reverse-transition";
        }
      },
      { immediate: !0 }
    );
    const m = i(() => o.tab - 1), u = i(() => r.value - 1 === m.value);
    return (a, s) => (l(), v(_, {
      name: n.value,
      persisted: ""
    }, {
      default: T(() => [
        z(C(
          "div",
          {
            ref_key: "MazTabsContentItem",
            ref: e,
            class: "m-tabs-content-item"
          },
          [
            w(a.$slots, "default", {}, void 0, !0)
          ],
          512
          /* NEED_PATCH */
        ), [
          [h, u.value]
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["name"]));
  }
}), M = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, r] of n)
    e[o] = r;
  return e;
}, S = /* @__PURE__ */ M(I, [["__scopeId", "data-v-bb2d5094"]]);
export {
  S as default
};

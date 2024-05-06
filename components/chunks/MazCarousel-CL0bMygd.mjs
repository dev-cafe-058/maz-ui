import '../assets/MazCarousel.css';
import { defineComponent as g, defineAsyncComponent as p, useSlots as N, ref as v, openBlock as a, createElementBlock as r, normalizeClass as n, renderSlot as c, createCommentVNode as i, createVNode as u, unref as d, withCtx as B, createElementVNode as k, pushScopeId as W, popScopeId as x } from "vue";
const $ = (t) => (W("data-v-a779ef5a"), t = t(), x(), t), T = { key: 0 }, V = {
  key: 1,
  class: "m-carousel__header__actions"
}, w = /* @__PURE__ */ $(() => /* @__PURE__ */ k(
  "div",
  { class: "m-carousel__items__spacer" },
  null,
  -1
  /* HOISTED */
)), E = /* @__PURE__ */ g({
  __name: "MazCarousel",
  props: {
    noScrollBtn: { type: Boolean },
    ariaLabelPreviousButton: { default: "Scroll to previous items" },
    ariaLabelNextButton: { default: "Scroll to next items" },
    hideScrollbar: { type: Boolean }
  },
  setup(t) {
    const l = p(() => import("./MazBtn-BC5OegPu.mjs")), s = p(() => import("./chevron-left-CcZaP3Rc.mjs")), m = p(() => import("./chevron-right-BKWCeY9O.mjs")), _ = t, h = N(), S = v(!1), b = v(!1), f = v(), y = () => !_.noScrollBtn || h.title, C = () => !!h.title, I = () => {
      const e = f.value;
      e == null || e.scrollTo(e.scrollLeft + e.clientWidth, 0);
    }, L = () => {
      const e = f.value;
      e == null || e.scrollTo(e.scrollLeft - e.clientWidth, 0);
    }, z = (e) => {
      const o = e.target;
      if (!o)
        return;
      S.value = o.scrollLeft >= 20;
      const M = o.scrollWidth - o.clientWidth;
      b.value = o.scrollLeft >= M - 20;
    };
    return (e, o) => (a(), r(
      "div",
      {
        class: n(["m-carousel", {
          "--hide-scrollbar": e.hideScrollbar
        }])
      },
      [
        y() ? (a(), r(
          "div",
          {
            key: 0,
            class: n(["m-carousel__header", { "--has-title": C() }])
          },
          [
            C() ? (a(), r("div", T, [
              c(e.$slots, "title", {}, void 0, !0)
            ])) : i("v-if", !0),
            e.noScrollBtn ? i("v-if", !0) : (a(), r("div", V, [
              u(d(l), {
                color: "transparent",
                class: n(["m-carousel__btn", { "--muted": !S.value }]),
                "no-elevation": "",
                fab: "",
                "aria-label": e.ariaLabelPreviousButton,
                onClick: L
              }, {
                default: B(() => [
                  c(e.$slots, "previous-icon", {}, () => [
                    u(d(s), { class: "maz-text-lg" })
                  ], !0)
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["class", "aria-label"]),
              u(d(l), {
                color: "transparent",
                class: n(["m-carousel__btn", { "--muted": b.value }]),
                fab: "",
                "no-elevation": "",
                "aria-label": e.ariaLabelNextButton,
                onClick: I
              }, {
                default: B(() => [
                  c(e.$slots, "next-icon", {}, () => [
                    u(d(m), { class: "maz-text-lg" })
                  ], !0)
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["class", "aria-label"])
            ]))
          ],
          2
          /* CLASS */
        )) : i("v-if", !0),
        k(
          "div",
          {
            ref_key: "MazCarouselItems",
            ref: f,
            class: "m-carousel__items",
            onScroll: z
          },
          [
            i(" Insert your items "),
            c(e.$slots, "default", {}, void 0, !0),
            w
          ],
          544
          /* NEED_HYDRATION, NEED_PATCH */
        )
      ],
      2
      /* CLASS */
    ));
  }
}), P = (t, l) => {
  const s = t.__vccOpts || t;
  for (const [m, _] of l)
    s[m] = _;
  return s;
}, H = /* @__PURE__ */ P(E, [["__scopeId", "data-v-a779ef5a"]]);
export {
  H as M,
  P as _
};

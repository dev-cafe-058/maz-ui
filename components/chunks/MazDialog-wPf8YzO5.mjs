import '../assets/MazDialog.css';
import { defineComponent as V, ref as N, onMounted as S, watch as F, openBlock as d, createBlock as k, Teleport as O, createVNode as L, Transition as P, withCtx as y, createElementBlock as C, normalizeClass as g, createElementVNode as p, withModifiers as H, mergeProps as h, renderSlot as m, createCommentVNode as n, defineAsyncComponent as w, useAttrs as K, computed as z, createTextVNode as W, toDisplayString as I, unref as M } from "vue";
const T = "--backdrop-present", q = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "MazBackdrop",
  props: {
    modelValue: { type: Boolean, default: !1 },
    teleportSelector: { default: "body" },
    beforeClose: { type: Function, default: void 0 },
    persistent: { type: Boolean, default: !1 },
    noCloseOnEscKey: { type: Boolean, default: !1 },
    transitionName: { default: "backdrop-anim" },
    backdropClass: { default: void 0 },
    backdropContentClass: { default: void 0 }
  },
  emits: ["open", "close", "update:model-value", "before-close"],
  setup(r, { expose: c, emit: a }) {
    const l = () => {
      document.documentElement.classList.add(T);
    }, u = async () => {
      document.querySelector(".m-backdrop.--present") || document.documentElement.classList.remove(T);
    }, i = a, e = r, s = N(e.modelValue);
    function o() {
      E(!1);
    }
    async function E(t) {
      var b;
      t || (i("before-close"), await ((b = e.beforeClose) == null ? void 0 : b.call(e))), s.value = t;
    }
    function B() {
      i("open");
    }
    function A() {
      i("update:model-value", !1), i("close"), v();
    }
    function $() {
      e.persistent || o();
    }
    function f(t) {
      !e.noCloseOnEscKey && t.key === "Escape" && !e.persistent && o();
    }
    function D() {
      l(), document.addEventListener("keyup", f, !1);
    }
    function v() {
      document.removeEventListener("keyup", f), u();
    }
    return S(() => {
      e.modelValue ? D() : v();
    }), F(
      () => e.modelValue,
      (t) => {
        s.value = t, t ? D() : v();
      }
    ), c({
      onBackdropAnimationEnter: B,
      onBackdropAnimationLeave: A,
      onBackdropClicked: $,
      close: o,
      present: s,
      toggleModal: E,
      onKeyPress: f
    }), (t, b) => (d(), k(O, { to: t.teleportSelector }, [
      L(P, {
        appear: "",
        name: t.transitionName,
        onAfterEnter: B,
        onAfterLeave: A
      }, {
        default: y(() => [
          s.value ? (d(), C(
            "div",
            {
              key: 0,
              class: g(["m-backdrop --present", [t.backdropClass]]),
              tabindex: "-1",
              role: "dialog"
            },
            [
              p(
                "button",
                {
                  class: g(["m-backdrop-overlay", { "--disabled": t.persistent }]),
                  tabindex: "-1",
                  onClick: H($, ["self"])
                },
                null,
                2
                /* CLASS */
              ),
              p(
                "div",
                h({
                  class: ["m-backdrop-content", t.backdropContentClass]
                }, t.$attrs, {
                  role: "document",
                  tabindex: "0"
                }),
                [
                  m(t.$slots, "default", { close: o })
                ],
                16
                /* FULL_PROPS */
              )
            ],
            2
            /* CLASS */
          )) : n("v-if", !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ], 8, ["to"]));
  }
}), U = {
  key: 0,
  id: "dialogTitle",
  class: "maz-my-0 maz-text-xl maz-font-semibold"
}, X = {
  id: "dialogDesc",
  class: "m-dialog-content"
}, j = {
  key: 0,
  class: "m-dialog-footer"
}, G = /* @__PURE__ */ V({
  __name: "MazDialog",
  props: {
    title: { default: void 0 },
    noClose: { type: Boolean, default: !1 },
    width: { default: "500px" },
    maxWidth: { default: "95vw" },
    maxHeight: { default: "95vh" },
    scrollable: { type: Boolean, default: !1 },
    persistent: { type: Boolean, default: !1 }
  },
  emits: [
    /** Model binding */
    "update:model-value",
    /** Emitted when dialog is closed (after animation) */
    "close",
    /** Emitted when dialog is opened (after animation) */
    "open"
  ],
  setup(r) {
    const c = w(() => import("./MazBtn-Bz4-bhWf.mjs")), a = w(() => import("./x-mark-BP8zWe_C.mjs")), l = K(), u = z(() => ({
      ...l,
      class: void 0,
      style: void 0
    })), i = z(() => ({
      class: l.class,
      style: l.style
    }));
    return (e, s) => (d(), k(q, h(u.value, {
      persistent: e.persistent,
      "transition-name": "modal-anim",
      "aria-labelledby": "dialogTitle",
      "aria-describedby": "dialogDesc",
      onClose: s[0] || (s[0] = (o) => e.$emit("close", o)),
      onOpen: s[1] || (s[1] = (o) => e.$emit("open", o)),
      "onUpdate:modelValue": s[2] || (s[2] = (o) => e.$emit("update:model-value", o))
    }), {
      default: y(({ close: o }) => [
        p(
          "div",
          h({
            class: ["m-dialog", { "--scrollable": e.scrollable }],
            role: "dialog",
            "aria-modal": "true",
            style: [{ width: e.width, maxWidth: e.maxWidth, maxHeight: e.maxHeight }]
          }, i.value),
          [
            n(`
          @slot Header slot
            @binding {Function} close close function
        `),
            m(e.$slots, "header", { close: o }, () => [
              p(
                "div",
                {
                  class: g(["m-dialog-header", { "--has-title": e.$slots.title || e.title }])
                },
                [
                  e.$slots.title || e.title ? (d(), C("h2", U, [
                    n(`
                @slot Title slot in the header
              `),
                    m(e.$slots, "title", {}, () => [
                      W(
                        I(e.title),
                        1
                        /* TEXT */
                      )
                    ], !0)
                  ])) : n("v-if", !0),
                  !e.noClose && !e.persistent ? (d(), k(M(c), {
                    key: 1,
                    class: "m-dialog-closebtn",
                    color: "transparent",
                    onClick: o
                  }, {
                    default: y(() => [
                      L(M(a), { class: "maz-text-lg" })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onClick"])) : n("v-if", !0)
                ],
                2
                /* CLASS */
              )
            ], !0),
            p("div", X, [
              n(`
            @slot Default content
              @binding {Function} close close function
          `),
              m(e.$slots, "default", { close: o }, void 0, !0)
            ]),
            e.$slots.footer ? (d(), C("div", j, [
              n(`
            @slot Footer slot
              @binding {Function} close close function
          `),
              m(e.$slots, "footer", { close: o }, void 0, !0)
            ])) : n("v-if", !0)
          ],
          16
          /* FULL_PROPS */
        )
      ]),
      _: 3
      /* FORWARDED */
    }, 16, ["persistent"]));
  }
}), J = (r, c) => {
  const a = r.__vccOpts || r;
  for (const [l, u] of c)
    a[l] = u;
  return a;
}, R = /* @__PURE__ */ J(G, [["__scopeId", "data-v-6ded3568"]]);
export {
  R as M,
  J as _
};

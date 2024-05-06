import './assets/MazDrawer.css';
import { defineComponent as h, ref as S, onMounted as g, watch as N, openBlock as d, createBlock as D, Teleport as T, createVNode as v, Transition as O, withCtx as k, createElementBlock as L, normalizeClass as i, createElementVNode as s, withModifiers as P, mergeProps as K, renderSlot as b, createCommentVNode as M, defineAsyncComponent as z, normalizeStyle as F, createTextVNode as q, toDisplayString as I, unref as A } from "vue";
const V = "--backdrop-present", U = /* @__PURE__ */ h({
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
  setup(C, { expose: c, emit: m }) {
    const e = () => {
      document.documentElement.classList.add(V);
    }, n = async () => {
      document.querySelector(".m-backdrop.--present") || document.documentElement.classList.remove(V);
    }, t = m, a = C, l = S(a.modelValue);
    function r() {
      y(!1);
    }
    async function y(o) {
      var f;
      o || (t("before-close"), await ((f = a.beforeClose) == null ? void 0 : f.call(a))), l.value = o;
    }
    function E() {
      t("open");
    }
    function $() {
      t("update:model-value", !1), t("close"), u();
    }
    function w() {
      a.persistent || r();
    }
    function p(o) {
      !a.noCloseOnEscKey && o.key === "Escape" && !a.persistent && r();
    }
    function B() {
      e(), document.addEventListener("keyup", p, !1);
    }
    function u() {
      document.removeEventListener("keyup", p), n();
    }
    return g(() => {
      a.modelValue ? B() : u();
    }), N(
      () => a.modelValue,
      (o) => {
        l.value = o, o ? B() : u();
      }
    ), c({
      onBackdropAnimationEnter: E,
      onBackdropAnimationLeave: $,
      onBackdropClicked: w,
      close: r,
      present: l,
      toggleModal: y,
      onKeyPress: p
    }), (o, f) => (d(), D(T, { to: o.teleportSelector }, [
      v(O, {
        appear: "",
        name: o.transitionName,
        onAfterEnter: E,
        onAfterLeave: $
      }, {
        default: k(() => [
          l.value ? (d(), L(
            "div",
            {
              key: 0,
              class: i(["m-backdrop --present", [o.backdropClass]]),
              tabindex: "-1",
              role: "dialog"
            },
            [
              s(
                "button",
                {
                  class: i(["m-backdrop-overlay", { "--disabled": o.persistent }]),
                  tabindex: "-1",
                  onClick: P(w, ["self"])
                },
                null,
                2
                /* CLASS */
              ),
              s(
                "div",
                K({
                  class: ["m-backdrop-content", o.backdropContentClass]
                }, o.$attrs, {
                  role: "document",
                  tabindex: "0"
                }),
                [
                  b(o.$slots, "default", { close: r })
                ],
                16
                /* FULL_PROPS */
              )
            ],
            2
            /* CLASS */
          )) : M("v-if", !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ], 8, ["to"]));
  }
}), X = { class: "m-drawer-header__title" }, j = {
  key: 0,
  class: "m-drawer-header__close"
}, G = { class: "m-drawer-body" }, J = /* @__PURE__ */ h({
  __name: "MazDrawer",
  props: {
    title: { default: void 0 },
    variant: { default: "right" },
    size: { default: "30rem" },
    backdropClass: { default: void 0 },
    noClose: { type: Boolean, default: !1 }
  },
  emits: ["before-close", "open", "close", "update:model-value"],
  setup(C) {
    const c = z(() => import("./chunks/MazBtn-BydIwD1J.mjs").then((e) => e.M)), m = z(() => import("./chunks/x-mark-BP8zWe_C.mjs"));
    return (e, n) => (d(), D(U, {
      "backdrop-class": ["m-drawer", `--${e.variant}`, e.backdropClass],
      style: F({
        "--maz-drawer-size": e.size
      }),
      onClose: n[0] || (n[0] = (t) => e.$emit("close")),
      onOpen: n[1] || (n[1] = (t) => e.$emit("open")),
      onBeforeClose: n[2] || (n[2] = (t) => e.$emit("before-close")),
      "onUpdate:modelValue": n[3] || (n[3] = (t) => e.$emit("update:model-value", t))
    }, {
      default: k(({ close: t }) => [
        s(
          "div",
          {
            class: i(["m-drawer-content-wrap", [`--${e.variant}`]])
          },
          [
            s(
              "header",
              {
                class: i(["m-drawer-header", [e.$slots.title || e.title ? "--between" : "--end"]])
              },
              [
                s("h4", X, [
                  b(e.$slots, "title", { close: t }, () => [
                    q(
                      I(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                e.noClose ? M("v-if", !0) : (d(), L("div", j, [
                  v(A(c), {
                    size: "sm",
                    color: "transparent",
                    onClick: t
                  }, {
                    default: k(() => [
                      v(A(m), { class: "icon maz-text-lg" })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onClick"])
                ]))
              ],
              2
              /* CLASS */
            ),
            s("div", G, [
              b(e.$slots, "default", { close: t })
            ])
          ],
          2
          /* CLASS */
        )
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["backdrop-class", "style"]));
  }
});
export {
  J as default
};

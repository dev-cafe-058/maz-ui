import '../assets/MazBottomSheet.css';
import { defineComponent as S, ref as L, onMounted as V, watch as D, openBlock as c, createBlock as k, Teleport as P, createVNode as M, Transition as $, withCtx as v, createElementBlock as A, normalizeClass as b, createElementVNode as r, withModifiers as N, mergeProps as O, renderSlot as z, createCommentVNode as C, defineAsyncComponent as I, unref as w, pushScopeId as T, popScopeId as x } from "vue";
const g = "--backdrop-present", K = /* @__PURE__ */ S({
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
  setup(t, { expose: a, emit: l }) {
    const d = () => {
      document.documentElement.classList.add(g);
    }, s = async () => {
      document.querySelector(".m-backdrop.--present") || document.documentElement.classList.remove(g);
    }, n = l, e = t, i = L(e.modelValue);
    function m() {
      _(!1);
    }
    async function _(o) {
      var f;
      o || (n("before-close"), await ((f = e.beforeClose) == null ? void 0 : f.call(e))), i.value = o;
    }
    function y() {
      n("open");
    }
    function h() {
      n("update:model-value", !1), n("close"), u();
    }
    function B() {
      e.persistent || m();
    }
    function p(o) {
      !e.noCloseOnEscKey && o.key === "Escape" && !e.persistent && m();
    }
    function E() {
      d(), document.addEventListener("keyup", p, !1);
    }
    function u() {
      document.removeEventListener("keyup", p), s();
    }
    return V(() => {
      e.modelValue ? E() : u();
    }), D(
      () => e.modelValue,
      (o) => {
        i.value = o, o ? E() : u();
      }
    ), a({
      onBackdropAnimationEnter: y,
      onBackdropAnimationLeave: h,
      onBackdropClicked: B,
      close: m,
      present: i,
      toggleModal: _,
      onKeyPress: p
    }), (o, f) => (c(), k(P, { to: o.teleportSelector }, [
      M($, {
        appear: "",
        name: o.transitionName,
        onAfterEnter: y,
        onAfterLeave: h
      }, {
        default: v(() => [
          i.value ? (c(), A(
            "div",
            {
              key: 0,
              class: b(["m-backdrop --present", [o.backdropClass]]),
              tabindex: "-1",
              role: "dialog"
            },
            [
              r(
                "button",
                {
                  class: b(["m-backdrop-overlay", { "--disabled": o.persistent }]),
                  tabindex: "-1",
                  onClick: N(B, ["self"])
                },
                null,
                2
                /* CLASS */
              ),
              r(
                "div",
                O({
                  class: ["m-backdrop-content", o.backdropContentClass]
                }, o.$attrs, {
                  role: "document",
                  tabindex: "0"
                }),
                [
                  z(o.$slots, "default", { close: m })
                ],
                16
                /* FULL_PROPS */
              )
            ],
            2
            /* CLASS */
          )) : C("v-if", !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ], 8, ["to"]));
  }
}), F = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, j = /* @__PURE__ */ r(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "M6 18 18 6M6 6l12 12"
  },
  null,
  -1
  /* HOISTED */
), q = [
  j
];
function U(t, a) {
  return c(), A("svg", F, [...q]);
}
const X = { render: U }, G = (t) => (T("data-v-46b34248"), t = t(), x(), t), H = /* @__PURE__ */ G(() => /* @__PURE__ */ r(
  "div",
  { class: "m-bottom-sheet__content-wrapper" },
  [
    /* @__PURE__ */ r("p", null, "Default content")
  ],
  -1
  /* HOISTED */
)), J = /* @__PURE__ */ S({
  __name: "MazBottomSheet",
  props: {
    noClose: { type: Boolean, default: !1 },
    noPadding: { type: Boolean, default: !1 }
  },
  emits: ["update:model-value", "open", "close"],
  setup(t, { emit: a }) {
    const l = I(() => import("./MazBtn-_NGDIlQK.mjs")), d = a;
    return (s, n) => (c(), k(K, {
      "transition-name": "bottom-sheet-anim",
      "backdrop-class": "--bottom-sheet",
      onClose: n[0] || (n[0] = (e) => s.$emit("close", e)),
      onOpen: n[1] || (n[1] = (e) => s.$emit("open", e)),
      "onUpdate:modelValue": n[2] || (n[2] = (e) => d("update:model-value", e))
    }, {
      default: v(({ close: e }) => [
        r(
          "div",
          {
            class: b(["m-bottom-sheet__container", {
              "maz-py-6": !t.noPadding
            }])
          },
          [
            C(" Slot content "),
            z(s.$slots, "default", { close: e }, () => [
              H
            ], !0),
            t.noClose ? C("v-if", !0) : (c(), k(w(l), {
              key: 0,
              size: "sm",
              class: "m-bottom-sheet__close",
              color: "transparent",
              onClick: e
            }, {
              default: v(() => [
                M(w(X), { class: "maz-text-lg" })
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["onClick"]))
          ],
          2
          /* CLASS */
        )
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}), Q = (t, a) => {
  const l = t.__vccOpts || t;
  for (const [d, s] of a)
    l[d] = s;
  return l;
}, W = /* @__PURE__ */ Q(J, [["__scopeId", "data-v-46b34248"]]);
export {
  W as M,
  Q as _
};

import '../assets/MazDialogPromise.css';
import { ref as j, defineComponent as V, onMounted as W, watch as K, openBlock as p, createBlock as $, Teleport as q, createVNode as D, Transition as I, withCtx as v, createElementBlock as h, normalizeClass as w, createElementVNode as k, withModifiers as U, mergeProps as M, renderSlot as f, createCommentVNode as m, defineAsyncComponent as T, useAttrs as X, computed as S, createTextVNode as g, toDisplayString as y, unref as d, Fragment as P, renderList as G } from "vue";
const J = j(), b = j([]), Q = (n, o) => new Promise((r, i) => {
  b.value = [
    ...b.value,
    {
      id: n,
      isActive: !0,
      resolve: async () => {
        await (o == null ? void 0 : o()), r(!0);
      },
      reject: i
    }
  ];
}), H = (n) => (b.value = b.value.filter(({ id: o }) => o !== n), b.value), N = (n, o, r = !1) => {
  var i;
  o && ((i = o[n]) == null || i.call(o, r), o.isActive = !1, setTimeout(() => {
    H(o.id);
  }, 500));
}, R = () => ({
  confirmDialogData: J,
  dialogState: b,
  showDialogAndWaitChoice: Q,
  removeDialogFromState: H,
  rejectDialog: (n, o = "cancel") => N("reject", n, o),
  resolveDialog: (n, o = "accept") => N("resolve", n, o)
}), O = "--backdrop-present", Y = /* @__PURE__ */ V({
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
  setup(n, { expose: o, emit: r }) {
    const i = () => {
      document.documentElement.classList.add(O);
    }, c = async () => {
      document.querySelector(".m-backdrop.--present") || document.documentElement.classList.remove(O);
    }, u = r, e = n, l = j(e.modelValue);
    function s() {
      C(!1);
    }
    async function C(a) {
      var F;
      a || (u("before-close"), await ((F = e.beforeClose) == null ? void 0 : F.call(e))), l.value = a;
    }
    function t() {
      u("open");
    }
    function A() {
      u("update:model-value", !1), u("close"), E();
    }
    function z() {
      e.persistent || s();
    }
    function B(a) {
      !e.noCloseOnEscKey && a.key === "Escape" && !e.persistent && s();
    }
    function L() {
      i(), document.addEventListener("keyup", B, !1);
    }
    function E() {
      document.removeEventListener("keyup", B), c();
    }
    return W(() => {
      e.modelValue ? L() : E();
    }), K(
      () => e.modelValue,
      (a) => {
        l.value = a, a ? L() : E();
      }
    ), o({
      onBackdropAnimationEnter: t,
      onBackdropAnimationLeave: A,
      onBackdropClicked: z,
      close: s,
      present: l,
      toggleModal: C,
      onKeyPress: B
    }), (a, F) => (p(), $(q, { to: a.teleportSelector }, [
      D(I, {
        appear: "",
        name: a.transitionName,
        onAfterEnter: t,
        onAfterLeave: A
      }, {
        default: v(() => [
          l.value ? (p(), h(
            "div",
            {
              key: 0,
              class: w(["m-backdrop --present", [a.backdropClass]]),
              tabindex: "-1",
              role: "dialog"
            },
            [
              k(
                "button",
                {
                  class: w(["m-backdrop-overlay", { "--disabled": a.persistent }]),
                  tabindex: "-1",
                  onClick: U(z, ["self"])
                },
                null,
                2
                /* CLASS */
              ),
              k(
                "div",
                M({
                  class: ["m-backdrop-content", a.backdropContentClass]
                }, a.$attrs, {
                  role: "document",
                  tabindex: "0"
                }),
                [
                  f(a.$slots, "default", { close: s })
                ],
                16
                /* FULL_PROPS */
              )
            ],
            2
            /* CLASS */
          )) : m("v-if", !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ], 8, ["to"]));
  }
}), Z = {
  key: 0,
  id: "dialogTitle",
  class: "maz-my-0 maz-text-xl maz-font-semibold"
}, x = {
  id: "dialogDesc",
  class: "m-dialog-content"
}, _ = {
  key: 0,
  class: "m-dialog-footer"
}, ee = /* @__PURE__ */ V({
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
  setup(n) {
    const o = T(() => import("./MazBtn-CauvhLv6.mjs")), r = T(() => import("./x-mark-BP8zWe_C.mjs")), i = X(), c = S(() => ({
      ...i,
      class: void 0,
      style: void 0
    })), u = S(() => ({
      class: i.class,
      style: i.style
    }));
    return (e, l) => (p(), $(Y, M(c.value, {
      persistent: e.persistent,
      "transition-name": "modal-anim",
      "aria-labelledby": "dialogTitle",
      "aria-describedby": "dialogDesc",
      onClose: l[0] || (l[0] = (s) => e.$emit("close", s)),
      onOpen: l[1] || (l[1] = (s) => e.$emit("open", s)),
      "onUpdate:modelValue": l[2] || (l[2] = (s) => e.$emit("update:model-value", s))
    }), {
      default: v(({ close: s }) => [
        k(
          "div",
          M({
            class: ["m-dialog", { "--scrollable": e.scrollable }],
            role: "dialog",
            "aria-modal": "true",
            style: [{ width: e.width, maxWidth: e.maxWidth, maxHeight: e.maxHeight }]
          }, u.value),
          [
            m(`
          @slot Header slot
            @binding {Function} close close function
        `),
            f(e.$slots, "header", { close: s }, () => [
              k(
                "div",
                {
                  class: w(["m-dialog-header", { "--has-title": e.$slots.title || e.title }])
                },
                [
                  e.$slots.title || e.title ? (p(), h("h2", Z, [
                    m(`
                @slot Title slot in the header
              `),
                    f(e.$slots, "title", {}, () => [
                      g(
                        y(e.title),
                        1
                        /* TEXT */
                      )
                    ], !0)
                  ])) : m("v-if", !0),
                  !e.noClose && !e.persistent ? (p(), $(d(o), {
                    key: 1,
                    class: "m-dialog-closebtn",
                    color: "transparent",
                    onClick: s
                  }, {
                    default: v(() => [
                      D(d(r), { class: "maz-text-lg" })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onClick"])) : m("v-if", !0)
                ],
                2
                /* CLASS */
              )
            ], !0),
            k("div", x, [
              m(`
            @slot Default content
              @binding {Function} close close function
          `),
              f(e.$slots, "default", { close: s }, void 0, !0)
            ]),
            e.$slots.footer ? (p(), h("div", _, [
              m(`
            @slot Footer slot
              @binding {Function} close close function
          `),
              f(e.$slots, "footer", { close: s }, void 0, !0)
            ])) : m("v-if", !0)
          ],
          16
          /* FULL_PROPS */
        )
      ]),
      _: 3
      /* FORWARDED */
    }, 16, ["persistent"]));
  }
}), te = (n, o) => {
  const r = n.__vccOpts || n;
  for (const [i, c] of o)
    r[i] = c;
  return r;
}, oe = /* @__PURE__ */ te(ee, [["__scopeId", "data-v-6ded3568"]]), ne = { class: "maz-space-x-2" }, le = /* @__PURE__ */ V({
  __name: "MazDialogPromise",
  props: {
    /** Dialog Data - type DialogData */
    data: { type: Object, default: void 0 },
    /** Uniq identifier */
    identifier: { type: String, required: !0 },
    /** Custom buttons - type DialogButton[] */
    buttons: { type: Array, default: () => [] }
  },
  setup(n) {
    const o = T(() => import("./MazBtn-CauvhLv6.mjs")), r = n, { dialogState: i, rejectDialog: c, resolveDialog: u } = R(), e = S(
      () => i.value.find(({ id: l }) => l === r.identifier)
    );
    return (l, s) => {
      var C;
      return p(), $(oe, {
        "model-value": ((C = e.value) == null ? void 0 : C.isActive) ?? !1,
        "onUpdate:modelValue": s[2] || (s[2] = (t) => d(c)(e.value))
      }, {
        title: v(() => [
          f(l.$slots, "title", {}, () => {
            var t;
            return [
              g(
                y((t = n.data) == null ? void 0 : t.title),
                1
                /* TEXT */
              )
            ];
          })
        ]),
        default: v(() => [
          m(`
        @slot Default slot - Place your content
          @binding {Function} resolve resolve function
          @binding {Function} reject reject function
      `),
          f(l.$slots, "default", {
            resolve: (t) => d(u)(e.value, t),
            reject: (t) => d(c)(e.value, t)
          }, () => {
            var t;
            return [
              g(
                y((t = n.data) == null ? void 0 : t.message),
                1
                /* TEXT */
              )
            ];
          })
        ]),
        footer: v(() => [
          m(`
        @slot Footer Buttons slot
          @binding {Function} resolve resolve function
          @binding {Function} reject reject function
      `),
          f(l.$slots, "footer-button", {
            resolve: (t) => d(u)(e.value, t),
            reject: (t) => d(c)(e.value, t)
          }, () => [
            k("div", ne, [
              n.buttons.length > 0 ? (p(!0), h(
                P,
                { key: 0 },
                G(n.buttons, (t, A) => (p(), $(d(o), {
                  key: A,
                  color: t.color,
                  size: t.size,
                  outline: t.outline,
                  rounded: t.rounded,
                  disabled: t.disabled,
                  block: t.block,
                  loading: t.loading,
                  onClick: (z) => t.type === "resolve" ? d(u)(e.value, t.response) : d(c)(e.value, t.response)
                }, {
                  default: v(() => [
                    g(
                      y(t.text),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["color", "size", "outline", "rounded", "disabled", "block", "loading", "onClick"]))),
                128
                /* KEYED_FRAGMENT */
              )) : (p(), h(
                P,
                { key: 1 },
                [
                  D(d(o), {
                    color: "danger",
                    outline: "",
                    onClick: s[0] || (s[0] = (t) => d(c)(e.value))
                  }, {
                    default: v(() => [
                      f(l.$slots, "cancel-text", {}, () => {
                        var t;
                        return [
                          g(
                            y(((t = n.data) == null ? void 0 : t.cancelText) || "Cancel"),
                            1
                            /* TEXT */
                          )
                        ];
                      })
                    ]),
                    _: 3
                    /* FORWARDED */
                  }),
                  D(d(o), {
                    color: "success",
                    onClick: s[1] || (s[1] = (t) => d(u)(e.value))
                  }, {
                    default: v(() => [
                      f(l.$slots, "confirm-text", {}, () => {
                        var t;
                        return [
                          g(
                            y(((t = n.data) == null ? void 0 : t.confirmText) || "Confirm"),
                            1
                            /* TEXT */
                          )
                        ];
                      })
                    ]),
                    _: 3
                    /* FORWARDED */
                  })
                ],
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["model-value"]);
    };
  }
});
export {
  te as _,
  le as a,
  R as u
};

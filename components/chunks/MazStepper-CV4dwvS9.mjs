import '../assets/MazStepper.css';
import { defineComponent as J, useCssVars as K, defineAsyncComponent as v, computed as b, useSlots as Q, ref as U, openBlock as a, createElementBlock as c, Fragment as g, renderList as X, normalizeClass as A, createElementVNode as d, createBlock as z, resolveDynamicComponent as P, createCommentVNode as l, renderSlot as m, unref as T, createTextVNode as y, toDisplayString as $, createVNode as Y, withCtx as Z, withDirectives as ee, vShow as te } from "vue";
const oe = { class: "m-stepper" }, ne = ["disabled", "onClick"], se = { class: "m-stepper__header__wrapper" }, ae = { class: "m-stepper__count --primary" }, le = { class: "m-stepper__count__circle" }, ie = { class: "m-stepper__header__content" }, re = { class: "m-stepper__title" }, ce = {
  key: 0,
  class: "m-stepper__subtitle"
}, de = {
  key: 0,
  class: "m-stepper__right"
}, ue = { class: "m-stepper__content__wrapper" }, pe = /* @__PURE__ */ J({
  __name: "MazStepper",
  props: {
    modelValue: { default: void 0 },
    steps: { default: void 0 },
    color: { default: "primary" },
    disabledNextSteps: { type: Boolean },
    disabledPreviousSteps: { type: Boolean },
    autoValidateSteps: { type: Boolean },
    allStepsOpened: { type: Boolean },
    allStepsValidated: { type: Boolean },
    canCloseSteps: { type: Boolean }
  },
  emits: ["update:model-value"],
  setup(f, { emit: C }) {
    K((t) => ({
      "2c439d26": R.value,
      fbd49c76: q.value
    }));
    const S = v(() => import("./MazIcon-Cxrv3_OK.mjs")), k = v(() => import("./MazTransitionExpand-DLMtNsk_.mjs")), I = v(() => import("./check-circle-CtCMBYyp.mjs")), W = v(
      () => import("./exclamation-circle-DzBJ8vGa.mjs")
    ), j = v(() => import("./exclamation-triangle-BfZLmRbP.mjs")), n = f, L = C, R = b(() => `var(--maz-color-${n.color})`), q = b(() => `var(--maz-color-${n.color}-contrast)`), E = Q(), h = b(
      () => Object.keys(E).filter((t) => t.startsWith("content-")).length
    ), N = U(1), s = b({
      get: () => n.modelValue ?? N.value,
      set: (t) => {
        N.value = t, L("update:model-value", t);
      }
    }), V = (t) => F(t) ? { icon: I, class: "--success" } : O(t) ? { icon: j, class: "--warning" } : B(t) ? { icon: W, class: "--error" } : { class: "--normal" };
    function p(t) {
      var o, e;
      return (e = (o = n.steps) == null ? void 0 : o[t - 1]) == null ? void 0 : e.icon;
    }
    const D = (t, o) => {
      var e, i;
      return (i = (e = n.steps) == null ? void 0 : e[o - 1]) == null ? void 0 : i[t];
    }, w = (t) => {
      s.value === t && n.canCloseSteps ? s.value = 0 : t < 1 ? s.value = 1 : t > h.value ? s.value = h.value : s.value = t;
    }, x = (t, o) => {
      var r, _;
      const e = t === "titleInfo" ? "title-info" : t, i = Object.keys(E).filter((H) => H.startsWith(`${e}-`)).includes(`${e}-${o}`), u = !!((_ = (r = n.steps) == null ? void 0 : r[o - 1]) != null && _[t]);
      return i || u;
    }, F = (t) => {
      var u, r;
      const o = (r = (u = n.steps) == null ? void 0 : u[t - 1]) == null ? void 0 : r.success, e = B(t) || O(t), i = n.autoValidateSteps && t < s.value && !e;
      return o ?? (i || n.allStepsValidated);
    }, M = (t) => {
      var r, _;
      const o = (_ = (r = n.steps) == null ? void 0 : r[t - 1]) == null ? void 0 : _.disabled, e = s.value === t && !n.canCloseSteps, i = n.disabledNextSteps && t > s.value, u = n.disabledPreviousSteps && t < s.value;
      return o ?? (e || i || u || n.allStepsOpened);
    }, B = (t) => {
      var o, e;
      return (e = (o = n.steps) == null ? void 0 : o[t - 1]) == null ? void 0 : e.error;
    }, O = (t) => {
      var o, e;
      return (e = (o = n.steps) == null ? void 0 : o[t - 1]) == null ? void 0 : e.warning;
    }, G = (t) => t === h.value;
    return (t, o) => (a(), c("div", oe, [
      (a(!0), c(
        g,
        null,
        X(h.value, (e) => (a(), c(
          g,
          { key: e },
          [
            x("title", e) ? (a(), c("button", {
              key: 0,
              type: "button",
              disabled: M(e),
              class: A(["m-stepper__header", [
                {
                  "--is-current-step": e === s.value || t.allStepsOpened,
                  "--disabled": e !== s.value && !t.allStepsOpened && M(e)
                },
                `${V(e).class}`
              ]]),
              onClick: (i) => w(e)
            }, [
              d("div", se, [
                d("span", ae, [
                  d("div", le, [
                    V(e).icon ? (a(), z(P(V(e).icon), {
                      key: 0,
                      class: "icon maz-text-xl"
                    })) : l("v-if", !0)
                  ]),
                  l(`
              @slot icon-\${step} - Replace step number in the circle by an icon for the step
            `),
                  m(t.$slots, `icon-${e}`, {}, () => [
                    p(e) ? (a(), c(
                      g,
                      { key: 0 },
                      [
                        typeof p(e) == "string" ? (a(), z(T(S), {
                          key: 0,
                          name: p(e)
                        }, null, 8, ["name"])) : p(e) ? (a(), z(P(p(e)), { key: 1 })) : l("v-if", !0)
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : (a(), c(
                      g,
                      { key: 1 },
                      [
                        y(
                          $(e),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ], !0)
                ]),
                d("div", ie, [
                  d("span", re, [
                    l(`
                @slot title-\${step} - Title of the step
              `),
                    m(t.$slots, `title-${e}`, {}, () => [
                      y(
                        $(D("title", e)),
                        1
                        /* TEXT */
                      )
                    ], !0)
                  ]),
                  x("subtitle", e) ? (a(), c("span", ce, [
                    l(`
                @slot title-\${step} - Subtitle of the step
              `),
                    m(t.$slots, `subtitle-${e}`, {}, () => [
                      y(
                        $(D("subtitle", e)),
                        1
                        /* TEXT */
                      )
                    ], !0)
                  ])) : l("v-if", !0)
                ])
              ]),
              x("titleInfo", e) ? (a(), c("span", de, [
                l(`
            @slot title-info-\${step} - Info of the right of the step
          `),
                m(t.$slots, `title-info-${e}`, {}, () => [
                  y(
                    $(D("titleInfo", e)),
                    1
                    /* TEXT */
                  )
                ], !0)
              ])) : l("v-if", !0)
            ], 10, ne)) : l("v-if", !0),
            d(
              "div",
              {
                class: A(["m-stepper__content", {
                  "--no-border": G(e)
                }])
              },
              [
                Y(
                  T(k),
                  null,
                  {
                    default: Z(() => [
                      ee(d(
                        "div",
                        null,
                        [
                          d("div", ue, [
                            l(` @slot content-\${step} - Content of the step
                @binding {boolean} validated - If the step is validated
                @binding {boolean} error - If the step has an error
                @binding {boolean} warning - If the step has a warning
                @binding {Function} previous-step - Function to go to the previous step
                @binding {Function} next-step - Function to go to the next step
              `),
                            m(t.$slots, `content-${e}`, {
                              validated: F(e),
                              error: B(e),
                              warning: O(e),
                              nextStep: () => w(e + 1),
                              previousStep: () => w(e - 1)
                            }, void 0, !0)
                          ])
                        ],
                        512
                        /* NEED_PATCH */
                      ), [
                        [te, t.allStepsOpened || s.value === e]
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )
              ],
              2
              /* CLASS */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))
    ]));
  }
}), _e = (f, C) => {
  const S = f.__vccOpts || f;
  for (const [k, I] of C)
    S[k] = I;
  return S;
}, me = /* @__PURE__ */ _e(pe, [["__scopeId", "data-v-75d50bd6"]]);
export {
  me as M,
  _e as _
};

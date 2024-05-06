import './assets/MazRadioButtons.css';
import { defineComponent as z, defineAsyncComponent as k, openBlock as r, createElementBlock as s, normalizeClass as c, Fragment as _, renderList as B, normalizeStyle as p, createElementVNode as b, createVNode as h, Transition as S, withCtx as $, withDirectives as C, unref as w, vShow as V, createCommentVNode as y, renderSlot as N, createTextVNode as q, toDisplayString as D } from "vue";
const I = ["for", "aria-checked", "onKeydown"], M = ["id", "name", "value", "onChange"], R = {
  key: 0,
  class: "m-radio-buttons__items__checkbox"
}, T = /* @__PURE__ */ z({
  __name: "MazRadioButtons",
  props: {
    modelValue: { type: [String, Number, Boolean], default: void 0 },
    options: {},
    name: { default: "MazButtonsRadio" },
    color: { default: "primary" },
    elevation: { type: Boolean, default: !1 },
    orientation: { default: "row" },
    noWrap: { type: Boolean, default: !1 },
    equalSize: { type: Boolean, default: !1 },
    selector: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 }
  },
  emits: ["update:model-value", "change"],
  setup(l, { emit: u }) {
    const t = k(() => import("./chunks/check-CL-vqe79.mjs")), n = l, d = u;
    function m(e) {
      d("update:model-value", e.value);
    }
    function o(e) {
      return n.modelValue === e;
    }
    function g(e, f) {
      ["Space"].includes(e.code) && (e.preventDefault(), m(f));
    }
    return (e, f) => (r(), s(
      "div",
      {
        class: c(["m-radio-buttons", [`--${e.orientation}`, { "--no-wrap": e.noWrap, "--block": e.block }]])
      },
      [
        (r(!0), s(
          _,
          null,
          B(e.options, (a, i) => (r(), s("label", {
            key: `option-${i}-${a.value.toString()}`,
            for: `option-${i}-${a.value.toString()}`,
            class: c(["m-radio-buttons__items maz-group", [
              {
                "--is-selected": o(a.value),
                "--elevation": e.elevation,
                "--equal-size": e.equalSize
              },
              a.classes
            ]]),
            tabindex: "0",
            style: p([
              o(a.value) ? {
                color: `var(--maz-color-${e.color}-contrast)`,
                backgroundColor: `var(--maz-color-${e.color})`
              } : {},
              a.style
            ]),
            role: "radio",
            "aria-checked": o(a.value),
            onKeydown: (v) => g(v, a)
          }, [
            b("input", {
              id: `option-${i}-${a.value.toString()}`,
              type: "radio",
              name: e.name,
              value: a.value,
              class: "maz-hidden",
              onChange: (v) => m(a)
            }, null, 40, M),
            e.selector ? (r(), s("div", R, [
              b(
                "span",
                {
                  class: c({
                    "--is-selected": o(a.value)
                  }),
                  style: p([
                    o(a.value) ? { backgroundColor: `var(--maz-color-${n.color}-600)` } : {}
                  ])
                },
                [
                  h(
                    S,
                    {
                      name: "maz-radio-buttons-scale",
                      persisted: ""
                    },
                    {
                      default: $(() => [
                        C(h(
                          w(t),
                          { class: "maz-h-full maz-w-full" },
                          null,
                          512
                          /* NEED_PATCH */
                        ), [
                          [V, o(a.value)]
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ],
                6
                /* CLASS, STYLE */
              )
            ])) : y("v-if", !0),
            y(`
        @slot Label of the radio
          @binding {Boolean} selected - If the option is selected
          @binding {string | number | boolean} option - The value of the option
      `),
            N(e.$slots, "default", {
              option: a,
              selected: o(a.value)
            }, () => [
              q(
                D(a.label),
                1
                /* TEXT */
              )
            ], !0)
          ], 46, I))),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), E = (l, u) => {
  const t = l.__vccOpts || l;
  for (const [n, d] of u)
    t[n] = d;
  return t;
}, L = /* @__PURE__ */ E(T, [["__scopeId", "data-v-7f9271c8"]]);
export {
  L as default
};

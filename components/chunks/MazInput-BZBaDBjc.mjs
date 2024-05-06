import '../assets/MazInput.css';
import { getCurrentInstance as K, computed as r, defineComponent as Q, defineAsyncComponent as m, ref as k, onMounted as W, useSlots as X, openBlock as n, createElementBlock as v, normalizeClass as I, normalizeStyle as Y, createElementVNode as B, createCommentVNode as o, renderSlot as w, createBlock as d, unref as s, resolveDynamicComponent as V, withDirectives as Z, mergeProps as x, toHandlers as _, vModelDynamic as ee, createTextVNode as te, toDisplayString as oe, withModifiers as ae, withCtx as M, createVNode as S } from "vue";
function ne(i, u) {
  let a;
  return function(...f) {
    clearTimeout(a), a = setTimeout(() => {
      i.apply(this, f);
    }, u);
  };
}
function le({
  componentName: i,
  providedId: u
}) {
  const a = K();
  return r(() => u ?? `${i}-${a == null ? void 0 : a.uid}`);
}
const re = {
  key: 0,
  class: "m-input-wrapper-left"
}, ie = { class: "m-input-wrapper-input" }, se = ["id", "type", "name", "inputmode", "placeholder", "aria-label", "disabled", "readonly", "required"], ue = { key: 0 }, de = {
  key: 1,
  class: "m-input-wrapper-right"
}, fe = /* @__PURE__ */ Q({
  inheritAttrs: !1,
  __name: "MazInput",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { default: void 0 },
    placeholder: { default: void 0 },
    label: { default: void 0 },
    name: { default: void 0 },
    color: { default: "primary" },
    type: { default: "text" },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    id: { default: void 0 },
    error: { type: Boolean, default: !1 },
    success: { type: Boolean, default: !1 },
    warning: { type: Boolean, default: !1 },
    hint: { default: void 0 },
    inputClasses: { default: void 0 },
    noBorder: { type: Boolean, default: !1 },
    noRadius: { type: Boolean, default: !1 },
    inputmode: { default: "text" },
    size: { default: "md" },
    debounce: { type: [Boolean, Number], default: !1 },
    debounceDelay: { default: 500 },
    validButton: { type: Boolean, default: !1 },
    validButtonLoading: { type: Boolean, default: !1 },
    autoFocus: { type: Boolean, default: !1 },
    borderActive: { type: Boolean, default: !1 },
    leftIcon: { default: void 0 },
    rightIcon: { default: void 0 },
    roundedSize: { default: void 0 },
    block: { type: Boolean }
  },
  emits: ["update:model-value", "focus", "blur", "click", "change"],
  setup(i, { emit: u }) {
    const a = m(() => import("./MazBtn-CPyDRy19.mjs")), f = m(() => import("./MazIcon-Cxrv3_OK.mjs")), z = m(() => import("./eye-slash-tjfxO0LK.mjs")), q = m(() => import("./eye-DqO_Jx56.mjs")), T = m(() => import("./check-CL-vqe79.mjs")), t = i, c = u, y = k(!1), p = k(!1), $ = k(), D = le({
      componentName: "MazInput",
      providedId: t.id
    });
    W(() => {
      var e;
      t.autoFocus && ((e = $.value) == null || e.focus());
    });
    const C = r(() => t.type === "password"), N = r(() => y.value ? "text" : t.type), P = r(() => {
      if (!t.noBorder) {
        if (t.error)
          return "maz-border-danger";
        if (t.success)
          return "maz-border-success";
        if (t.warning)
          return "maz-border-warning";
        if (p.value || t.borderActive) {
          if (t.color === "black")
            return "maz-border-black";
          if (t.color === "danger")
            return "maz-border-danger";
          if (t.color === "info")
            return "maz-border-info";
          if (t.color === "primary")
            return "maz-border-primary";
          if (t.color === "secondary")
            return "maz-border-secondary";
          if (t.color === "success")
            return "maz-border-success";
          if (t.color === "warning")
            return "maz-border-warning";
          if (t.color === "white")
            return "maz-border-white";
        }
        return "--default-border";
      }
    }), g = X(), A = r(() => {
      const { required: e, placeholder: l } = t;
      if (l)
        return e ? `${l} *` : l;
    }), E = r(() => b.value !== void 0 && b.value !== ""), L = ne(
      (e) => {
        c("update:model-value", e);
      },
      typeof t.debounce == "number" ? t.debounce : t.debounceDelay ?? 500
    ), R = (e) => {
      if (t.debounce)
        return L(e);
      c("update:model-value", e);
    }, b = r({
      get: () => t.modelValue,
      set: (e) => R(e)
    }), F = r(() => (!!t.label || !!t.hint) && (p.value || !!E.value || !!t.placeholder || ["date", "month", "week"].includes(t.type))), U = r(() => !!t.label || !!t.hint);
    function O() {
      return !!g["right-icon"] || C.value || !!g["valid-button"] || t.validButton || !!t.rightIcon;
    }
    function H() {
      return !!g["left-icon"] || !!t.leftIcon;
    }
    function j(e) {
      c("focus", e), p.value = !0;
    }
    function G(e) {
      c("blur", e), p.value = !1;
    }
    function J(e) {
      return c("change", e);
    }
    return (e, l) => (n(), v(
      "div",
      {
        class: I(["m-input", [
          {
            "--is-focused": p.value || e.borderActive,
            "--should-up": F.value,
            "--has-label": U.value,
            "--is-disabled": e.disabled,
            "--is-readonly": e.readonly,
            "--has-z-2": e.error || e.warning || e.success,
            "--has-state": e.error || e.warning || e.success,
            "--block": e.block
          },
          t.class,
          `--${e.color}`,
          `--${e.size}`
        ]]),
        style: Y(e.style)
      },
      [
        B(
          "div",
          {
            class: I(["m-input-wrapper", [
              e.inputClasses,
              P.value,
              e.roundedSize ? `--rounded-${e.roundedSize}` : { "maz-rounded": !e.noRadius }
            ]])
          },
          [
            H() ? (n(), v("div", re, [
              o(`
          @slot left-icon - The icon to display on the left of the input
        `),
              e.$slots["left-icon"] || e.leftIcon ? w(e.$slots, "left-icon", { key: 0 }, () => [
                typeof e.leftIcon == "string" ? (n(), d(s(f), {
                  key: 0,
                  name: e.leftIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : e.leftIcon ? (n(), d(V(e.leftIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : o("v-if", !0)
              ], !0) : o("v-if", !0)
            ])) : o("v-if", !0),
            B("div", ie, [
              Z(B("input", x({
                id: s(D),
                ref_key: "input",
                ref: $,
                "onUpdate:modelValue": l[0] || (l[0] = (h) => b.value = h),
                type: N.value,
                name: e.name
              }, e.$attrs, {
                inputmode: e.inputmode,
                placeholder: A.value,
                "aria-label": e.label || e.placeholder,
                disabled: e.disabled,
                readonly: e.readonly,
                required: e.required,
                class: "m-input-input"
              }, _({
                blur: G,
                focus: j,
                change: J
              }, !0), {
                onClick: l[1] || (l[1] = (h) => e.$emit("click", h))
              }), null, 16, se), [
                [ee, b.value]
              ]),
              e.label || e.hint ? (n(), v(
                "span",
                {
                  key: 0,
                  ref: "label",
                  class: I(["m-input-label", [
                    {
                      "maz-text-danger-600": e.error,
                      "maz-text-success-600": e.success,
                      "maz-text-warning-600": e.warning
                    }
                  ]])
                },
                [
                  te(
                    oe(e.hint || e.label) + " ",
                    1
                    /* TEXT */
                  ),
                  e.required ? (n(), v("sup", ue, "*")) : o("v-if", !0)
                ],
                2
                /* CLASS */
              )) : o("v-if", !0)
            ]),
            O() ? (n(), v("div", de, [
              o(`
          @slot right-icon - The icon to display on the right of the input
        `),
              e.$slots["right-icon"] || e.rightIcon ? w(e.$slots, "right-icon", { key: 0 }, () => [
                typeof e.rightIcon == "string" ? (n(), d(s(f), {
                  key: 0,
                  name: e.rightIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : e.rightIcon ? (n(), d(V(e.rightIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : o("v-if", !0)
              ], !0) : o("v-if", !0),
              C.value ? (n(), d(s(a), {
                key: 1,
                color: "transparent",
                tabindex: "-1",
                size: "mini",
                onClick: l[2] || (l[2] = ae((h) => y.value = !y.value, ["stop"]))
              }, {
                default: M(() => [
                  y.value ? (n(), d(s(z), {
                    key: 0,
                    class: "maz-text-xl maz-text-muted"
                  })) : (n(), d(s(q), {
                    key: 1,
                    class: "maz-text-xl maz-text-muted"
                  }))
                ]),
                _: 1
                /* STABLE */
              })) : o("v-if", !0),
              o(`
          @slot valid-button - Replace the valid button by your own
        `),
              e.$slots["valid-button"] || e.validButton ? w(e.$slots, "valid-button", { key: 2 }, () => [
                S(s(a), {
                  color: "transparent",
                  disabled: e.disabled,
                  tabindex: "-1",
                  loading: e.validButtonLoading,
                  class: "m-input-valid-button",
                  size: "mini",
                  type: "submit"
                }, {
                  default: M(() => [
                    S(s(T), { class: "maz-text-2xl maz-text-normal" })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "loading"])
              ], !0) : o("v-if", !0)
            ])) : o("v-if", !0)
          ],
          2
          /* CLASS */
        )
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), ce = (i, u) => {
  const a = i.__vccOpts || i;
  for (const [f, z] of u)
    a[f] = z;
  return a;
}, me = /* @__PURE__ */ ce(fe, [["__scopeId", "data-v-b2106d63"]]);
export {
  me as M,
  ce as _
};

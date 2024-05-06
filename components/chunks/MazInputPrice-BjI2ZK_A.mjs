import '../assets/MazInputPrice.css';
import { getCurrentInstance as K, computed as d, defineComponent as M, defineAsyncComponent as z, ref as B, onMounted as Q, useSlots as W, openBlock as s, createElementBlock as g, normalizeClass as C, normalizeStyle as X, createElementVNode as w, createCommentVNode as u, renderSlot as V, createBlock as y, unref as v, resolveDynamicComponent as E, withDirectives as Z, mergeProps as x, toHandlers as _, vModelDynamic as ee, createTextVNode as te, toDisplayString as oe, withModifiers as re, withCtx as F, createVNode as P, nextTick as ae, onBeforeMount as ne } from "vue";
const le = {
  style: "currency",
  minimumFractionDigits: 2,
  round: !1
}, ie = (n, l, o) => {
  let i = Number(n);
  return o.round && (i = Math.floor(i), o.minimumFractionDigits = 0), new Intl.NumberFormat(l, o).format(i);
}, ue = (n, l, o) => {
  if (n === void 0)
    throw new TypeError("[maz-ui](FilterCurrency) The `number` attribute is required.");
  if (l === void 0)
    throw new TypeError("[maz-ui](FilterCurrency) The `locale` attribute is required.");
  if (typeof l != "string")
    throw new TypeError("[maz-ui](FilterCurrency) The `locale` attribute must be a string.");
  if (o.currency === void 0)
    throw new TypeError("[maz-ui](FilterCurrency) The `options.currency` attribute is required.");
}, se = (n, l, o) => {
  const i = {
    ...le,
    ...o
  };
  ue(n, l, i);
  try {
    return ie(n, l, i);
  } catch (f) {
    throw new Error(`[maz-ui](FilterCurrency) ${f}`);
  }
};
function de(n, l) {
  let o;
  return function(...i) {
    clearTimeout(o), o = setTimeout(() => {
      n.apply(this, i);
    }, l);
  };
}
function ce({
  componentName: n,
  providedId: l
}) {
  const o = K();
  return d(() => l ?? `${n}-${o == null ? void 0 : o.uid}`);
}
const me = {
  key: 0,
  class: "m-input-wrapper-left"
}, fe = { class: "m-input-wrapper-input" }, pe = ["id", "type", "name", "inputmode", "placeholder", "aria-label", "disabled", "readonly", "required"], ve = { key: 0 }, ye = {
  key: 1,
  class: "m-input-wrapper-right"
}, be = /* @__PURE__ */ M({
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
  setup(n, { emit: l }) {
    const o = z(() => import("./MazBtn-Ng8Jql0R.mjs")), i = z(() => import("./MazIcon-Cxrv3_OK.mjs")), f = z(() => import("./eye-slash-tjfxO0LK.mjs")), N = z(() => import("./eye-DqO_Jx56.mjs")), T = z(() => import("./check-CL-vqe79.mjs")), t = n, c = l, b = B(!1), p = B(!1), a = B(), r = ce({
      componentName: "MazInput",
      providedId: t.id
    });
    Q(() => {
      var e;
      t.autoFocus && ((e = a.value) == null || e.focus());
    });
    const h = d(() => t.type === "password"), S = d(() => b.value ? "text" : t.type), q = d(() => {
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
    }), $ = W(), A = d(() => {
      const { required: e, placeholder: m } = t;
      if (m)
        return e ? `${m} *` : m;
    }), D = d(() => k.value !== void 0 && k.value !== ""), R = de(
      (e) => {
        c("update:model-value", e);
      },
      typeof t.debounce == "number" ? t.debounce : t.debounceDelay ?? 500
    ), U = (e) => {
      if (t.debounce)
        return R(e);
      c("update:model-value", e);
    }, k = d({
      get: () => t.modelValue,
      set: (e) => U(e)
    }), L = d(() => (!!t.label || !!t.hint) && (p.value || !!D.value || !!t.placeholder || ["date", "month", "week"].includes(t.type))), O = d(() => !!t.label || !!t.hint);
    function j() {
      return !!$["right-icon"] || h.value || !!$["valid-button"] || t.validButton || !!t.rightIcon;
    }
    function H() {
      return !!$["left-icon"] || !!t.leftIcon;
    }
    function Y(e) {
      c("focus", e), p.value = !0;
    }
    function G(e) {
      c("blur", e), p.value = !1;
    }
    function J(e) {
      return c("change", e);
    }
    return (e, m) => (s(), g(
      "div",
      {
        class: C(["m-input", [
          {
            "--is-focused": p.value || e.borderActive,
            "--should-up": L.value,
            "--has-label": O.value,
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
        style: X(e.style)
      },
      [
        w(
          "div",
          {
            class: C(["m-input-wrapper", [
              e.inputClasses,
              q.value,
              e.roundedSize ? `--rounded-${e.roundedSize}` : { "maz-rounded": !e.noRadius }
            ]])
          },
          [
            H() ? (s(), g("div", me, [
              u(`
          @slot left-icon - The icon to display on the left of the input
        `),
              e.$slots["left-icon"] || e.leftIcon ? V(e.$slots, "left-icon", { key: 0 }, () => [
                typeof e.leftIcon == "string" ? (s(), y(v(i), {
                  key: 0,
                  name: e.leftIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : e.leftIcon ? (s(), y(E(e.leftIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : u("v-if", !0)
              ], !0) : u("v-if", !0)
            ])) : u("v-if", !0),
            w("div", fe, [
              Z(w("input", x({
                id: v(r),
                ref_key: "input",
                ref: a,
                "onUpdate:modelValue": m[0] || (m[0] = (I) => k.value = I),
                type: S.value,
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
                focus: Y,
                change: J
              }, !0), {
                onClick: m[1] || (m[1] = (I) => e.$emit("click", I))
              }), null, 16, pe), [
                [ee, k.value]
              ]),
              e.label || e.hint ? (s(), g(
                "span",
                {
                  key: 0,
                  ref: "label",
                  class: C(["m-input-label", [
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
                  e.required ? (s(), g("sup", ve, "*")) : u("v-if", !0)
                ],
                2
                /* CLASS */
              )) : u("v-if", !0)
            ]),
            j() ? (s(), g("div", ye, [
              u(`
          @slot right-icon - The icon to display on the right of the input
        `),
              e.$slots["right-icon"] || e.rightIcon ? V(e.$slots, "right-icon", { key: 0 }, () => [
                typeof e.rightIcon == "string" ? (s(), y(v(i), {
                  key: 0,
                  name: e.rightIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : e.rightIcon ? (s(), y(E(e.rightIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : u("v-if", !0)
              ], !0) : u("v-if", !0),
              h.value ? (s(), y(v(o), {
                key: 1,
                color: "transparent",
                tabindex: "-1",
                size: "mini",
                onClick: m[2] || (m[2] = re((I) => b.value = !b.value, ["stop"]))
              }, {
                default: F(() => [
                  b.value ? (s(), y(v(f), {
                    key: 0,
                    class: "maz-text-xl maz-text-muted"
                  })) : (s(), y(v(N), {
                    key: 1,
                    class: "maz-text-xl maz-text-muted"
                  }))
                ]),
                _: 1
                /* STABLE */
              })) : u("v-if", !0),
              u(`
          @slot valid-button - Replace the valid button by your own
        `),
              e.$slots["valid-button"] || e.validButton ? V(e.$slots, "valid-button", { key: 2 }, () => [
                P(v(o), {
                  color: "transparent",
                  disabled: e.disabled,
                  tabindex: "-1",
                  loading: e.validButtonLoading,
                  class: "m-input-valid-button",
                  size: "mini",
                  type: "submit"
                }, {
                  default: F(() => [
                    P(v(T), { class: "maz-text-2xl maz-text-normal" })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "loading"])
              ], !0) : u("v-if", !0)
            ])) : u("v-if", !0)
          ],
          2
          /* CLASS */
        )
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), he = (n, l) => {
  const o = n.__vccOpts || n;
  for (const [i, f] of l)
    o[i] = f;
  return o;
}, ze = /* @__PURE__ */ he(be, [["__scopeId", "data-v-b2106d63"]]), ge = /* @__PURE__ */ w(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    class: "maz-text-mute maz-ml-1 maz-h-6 maz-w-6"
  },
  [
    /* @__PURE__ */ w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    })
  ],
  -1
  /* HOISTED */
), ke = /* @__PURE__ */ M({
  __name: "MazInputPrice",
  props: {
    modelValue: { default: void 0 },
    currency: { default: "EUR" },
    locale: { default: "fr-FR" },
    min: { default: 0 },
    max: { default: Number.POSITIVE_INFINITY },
    noIcon: { type: Boolean, default: !1 },
    block: { type: Boolean }
  },
  emits: ["update:model-value", "formatted"],
  setup(n, { emit: l }) {
    const o = n, i = l, f = B(!1), N = d(() => c(o.modelValue).toString()), T = d(() => {
      const a = typeof o.modelValue == "string" ? Number(o.modelValue) : o.modelValue;
      return c(a);
    }), t = d(
      () => se(T.value, o.locale, { currency: o.currency })
    ), c = (a) => {
      let r = typeof a == "string" ? Number.parseFloat(
        // eslint-disable-next-line no-useless-escape
        a.replace(",", ".").replaceAll(/[^\d.]/g, "")
      ) : a;
      return (!r || Number.isNaN(r)) && (r = 0), r < o.min && (r = o.min), r > o.max && (r = o.max), r;
    }, b = d({
      get: () => {
        if (f.value)
          return N.value;
        if (typeof o.modelValue == "number")
          return t.value;
      },
      set: (a) => {
        if (Number.isNaN(a))
          p();
        else {
          const r = c(a);
          p(r);
        }
      }
    }), p = async (a) => {
      const r = typeof a == "number" ? c(a) : void 0;
      i("update:model-value", r), await ae(), i("formatted", t.value);
    };
    return ne(() => {
      p(c(o.modelValue));
    }), (a, r) => (s(), y(ze, {
      modelValue: b.value,
      "onUpdate:modelValue": r[0] || (r[0] = (h) => b.value = h),
      class: "maz-input-price",
      block: a.block,
      onFocus: r[1] || (r[1] = (h) => f.value = !0),
      onBlur: r[2] || (r[2] = (h) => f.value = !1)
    }, {
      "left-icon": F(() => [
        a.noIcon ? u("v-if", !0) : V(a.$slots, "left-icon", { key: 0 }, () => [
          ge
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["modelValue", "block"]));
  }
});
export {
  he as _,
  ke as a
};

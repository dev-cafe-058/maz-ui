import '../assets/MazInputNumber.css';
import { defineComponent as L, defineAsyncComponent as C, useAttrs as oe, useSlots as j, onBeforeMount as ne, computed as s, openBlock as a, createBlock as d, resolveDynamicComponent as V, normalizeClass as B, withCtx as P, createElementBlock as b, createCommentVNode as i, renderSlot as M, unref as m, getCurrentInstance as te, ref as A, onMounted as le, normalizeStyle as K, createElementVNode as N, withDirectives as ae, mergeProps as Y, toHandlers as ie, vModelDynamic as se, createTextVNode as re, toDisplayString as ue, withModifiers as q, createVNode as S, withKeys as O } from "vue";
const de = /* @__PURE__ */ L({
  __name: "MazBtn",
  props: {
    variant: { default: "button" },
    size: { default: "md" },
    color: { default: "primary" },
    type: { default: "button" },
    rounded: { type: Boolean },
    roundedSize: { default: "lg" },
    noRounded: { type: Boolean },
    outline: { type: Boolean },
    pastel: { type: Boolean },
    block: { type: Boolean },
    noUnderline: { type: Boolean },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    fab: { type: Boolean },
    icon: { default: void 0 },
    leftIcon: { default: void 0 },
    rightIcon: { default: void 0 },
    noPadding: { type: Boolean },
    noElevation: { type: Boolean },
    contentClass: { default: void 0 }
  },
  setup(f) {
    const p = C(() => import("./MazSpinner-DkLBbDGC.mjs")), n = C(() => import("./MazIcon-Cxrv3_OK.mjs")), { href: g, to: u } = oe(), $ = j(), r = f;
    ne(() => {
      r.icon && !r.fab && console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props');
    });
    const t = s(() => g ? "a" : u ? "router-link" : "button"), y = s(
      () => r.pastel ? `--${r.color}-pastel` : r.outline ? `--${r.color}-outline` : `--${r.color}`
    ), h = s(
      () => (r.loading || r.disabled) && t.value === "button"
    ), z = s(() => h.value ? "--cursor-default" : "--cursor-pointer"), w = s(() => `--is-${r.variant}`), k = s(() => r.loading && r.variant === "button"), o = s(() => !!$["left-icon"] || r.leftIcon), c = s(() => !!$["right-icon"] || r.rightIcon), v = s(() => o.value || c.value), T = s(() => r.fab && (r.icon || !!$.icon)), F = s(() => t.value === "button" ? r.type : void 0);
    return (l, U) => (a(), d(V(t.value), {
      disabled: h.value || void 0,
      class: B(["m-btn", [
        `--${l.size}`,
        !l.fab && l.roundedSize && `--rounded-${l.roundedSize}`,
        y.value,
        z.value,
        w.value,
        {
          "--block": l.block,
          "--no-underline": l.noUnderline,
          "--fab": l.fab,
          "--loading": l.loading,
          "--disabled": h.value,
          "--icon": v.value,
          "--rounded": l.rounded,
          "--no-rounded": l.noRounded,
          "--no-padding": l.noPadding,
          "--no-elevation": l.noElevation
        }
      ]]),
      type: F.value
    }, {
      default: P(() => [
        o.value ? (a(), b(
          "div",
          {
            key: 0,
            class: B(["m-btn__icon-left maz-flex maz-flex-center", { "maz-invisible": k.value }])
          },
          [
            i(`
        @slot left-icon - The icon to display on the left of the button
      `),
            M(l.$slots, "left-icon", {}, () => [
              typeof l.leftIcon == "string" ? (a(), d(m(n), {
                key: 0,
                name: l.leftIcon
              }, null, 8, ["name"])) : l.leftIcon ? (a(), d(V(l.leftIcon), { key: 1 })) : i("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : i("v-if", !0),
        T.value ? (a(), b(
          "div",
          {
            key: 1,
            class: B(["m-btn__icon", { "maz-invisible": k.value }])
          },
          [
            i(`
        @slot icon - The icon to display on the fab button
      `),
            M(l.$slots, "icon", {}, () => [
              typeof l.icon == "string" ? (a(), d(m(n), {
                key: 0,
                name: l.icon
              }, null, 8, ["name"])) : l.icon ? (a(), d(V(l.icon), { key: 1 })) : i("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : i("v-if", !0),
        l.$slots.default ? (a(), b(
          "span",
          {
            key: 2,
            class: B([{ "maz-invisible": k.value }, l.contentClass])
          },
          [
            i(`
        @slot default - The content of the button
      `),
            M(l.$slots, "default", {}, void 0, !0)
          ],
          2
          /* CLASS */
        )) : i("v-if", !0),
        c.value ? (a(), b(
          "div",
          {
            key: 3,
            class: B(["m-btn__icon-right", { "maz-invisible": k.value }])
          },
          [
            i(`
        @slot right-icon - The icon to display on the right of the button
      `),
            M(l.$slots, "right-icon", {}, () => [
              typeof l.rightIcon == "string" ? (a(), d(m(n), {
                key: 0,
                name: l.rightIcon
              }, null, 8, ["name"])) : l.rightIcon ? (a(), d(V(l.rightIcon), { key: 1 })) : i("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : i("v-if", !0),
        k.value ? (a(), d(m(p), {
          key: 4,
          class: "m-btn-loader",
          size: "2em",
          color: l.color
        }, null, 8, ["color"])) : i("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled", "class", "type"]));
  }
}), G = (f, p) => {
  const n = f.__vccOpts || f;
  for (const [g, u] of p)
    n[g] = u;
  return n;
}, R = /* @__PURE__ */ G(de, [["__scopeId", "data-v-4d87e490"]]), ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: R
}, Symbol.toStringTag, { value: "Module" }));
function H(f, p) {
  let n;
  return function(...g) {
    clearTimeout(n), n = setTimeout(() => {
      f.apply(this, g);
    }, p);
  };
}
function me({
  componentName: f,
  providedId: p
}) {
  const n = te();
  return s(() => p ?? `${f}-${n == null ? void 0 : n.uid}`);
}
const fe = {
  key: 0,
  class: "m-input-wrapper-left"
}, pe = { class: "m-input-wrapper-input" }, ve = ["id", "type", "name", "inputmode", "placeholder", "aria-label", "disabled", "readonly", "required"], be = { key: 0 }, ye = {
  key: 1,
  class: "m-input-wrapper-right"
}, he = /* @__PURE__ */ L({
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
  setup(f, { emit: p }) {
    const n = C(() => Promise.resolve().then(() => ce)), g = C(() => import("./MazIcon-Cxrv3_OK.mjs")), u = C(() => import("./eye-slash-tjfxO0LK.mjs")), $ = C(() => import("./eye-DqO_Jx56.mjs")), r = C(() => import("./check-CL-vqe79.mjs")), t = f, y = p, h = A(!1), z = A(!1), w = A(), k = me({
      componentName: "MazInput",
      providedId: t.id
    });
    le(() => {
      var e;
      t.autoFocus && ((e = w.value) == null || e.focus());
    });
    const o = s(() => t.type === "password"), c = s(() => h.value ? "text" : t.type), v = s(() => {
      if (!t.noBorder) {
        if (t.error)
          return "maz-border-danger";
        if (t.success)
          return "maz-border-success";
        if (t.warning)
          return "maz-border-warning";
        if (z.value || t.borderActive) {
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
    }), T = j(), F = s(() => {
      const { required: e, placeholder: I } = t;
      if (I)
        return e ? `${I} *` : I;
    }), l = s(() => D.value !== void 0 && D.value !== ""), U = H(
      (e) => {
        y("update:model-value", e);
      },
      typeof t.debounce == "number" ? t.debounce : t.debounceDelay ?? 500
    ), J = (e) => {
      if (t.debounce)
        return U(e);
      y("update:model-value", e);
    }, D = s({
      get: () => t.modelValue,
      set: (e) => J(e)
    }), Q = s(() => (!!t.label || !!t.hint) && (z.value || !!l.value || !!t.placeholder || ["date", "month", "week"].includes(t.type))), W = s(() => !!t.label || !!t.hint);
    function X() {
      return !!T["right-icon"] || o.value || !!T["valid-button"] || t.validButton || !!t.rightIcon;
    }
    function Z() {
      return !!T["left-icon"] || !!t.leftIcon;
    }
    function _(e) {
      y("focus", e), z.value = !0;
    }
    function x(e) {
      y("blur", e), z.value = !1;
    }
    function ee(e) {
      return y("change", e);
    }
    return (e, I) => (a(), b(
      "div",
      {
        class: B(["m-input", [
          {
            "--is-focused": z.value || e.borderActive,
            "--should-up": Q.value,
            "--has-label": W.value,
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
        style: K(e.style)
      },
      [
        N(
          "div",
          {
            class: B(["m-input-wrapper", [
              e.inputClasses,
              v.value,
              e.roundedSize ? `--rounded-${e.roundedSize}` : { "maz-rounded": !e.noRadius }
            ]])
          },
          [
            Z() ? (a(), b("div", fe, [
              i(`
          @slot left-icon - The icon to display on the left of the input
        `),
              e.$slots["left-icon"] || e.leftIcon ? M(e.$slots, "left-icon", { key: 0 }, () => [
                typeof e.leftIcon == "string" ? (a(), d(m(g), {
                  key: 0,
                  name: e.leftIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : e.leftIcon ? (a(), d(V(e.leftIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : i("v-if", !0)
              ], !0) : i("v-if", !0)
            ])) : i("v-if", !0),
            N("div", pe, [
              ae(N("input", Y({
                id: m(k),
                ref_key: "input",
                ref: w,
                "onUpdate:modelValue": I[0] || (I[0] = (E) => D.value = E),
                type: c.value,
                name: e.name
              }, e.$attrs, {
                inputmode: e.inputmode,
                placeholder: F.value,
                "aria-label": e.label || e.placeholder,
                disabled: e.disabled,
                readonly: e.readonly,
                required: e.required,
                class: "m-input-input"
              }, ie({
                blur: x,
                focus: _,
                change: ee
              }, !0), {
                onClick: I[1] || (I[1] = (E) => e.$emit("click", E))
              }), null, 16, ve), [
                [se, D.value]
              ]),
              e.label || e.hint ? (a(), b(
                "span",
                {
                  key: 0,
                  ref: "label",
                  class: B(["m-input-label", [
                    {
                      "maz-text-danger-600": e.error,
                      "maz-text-success-600": e.success,
                      "maz-text-warning-600": e.warning
                    }
                  ]])
                },
                [
                  re(
                    ue(e.hint || e.label) + " ",
                    1
                    /* TEXT */
                  ),
                  e.required ? (a(), b("sup", be, "*")) : i("v-if", !0)
                ],
                2
                /* CLASS */
              )) : i("v-if", !0)
            ]),
            X() ? (a(), b("div", ye, [
              i(`
          @slot right-icon - The icon to display on the right of the input
        `),
              e.$slots["right-icon"] || e.rightIcon ? M(e.$slots, "right-icon", { key: 0 }, () => [
                typeof e.rightIcon == "string" ? (a(), d(m(g), {
                  key: 0,
                  name: e.rightIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : e.rightIcon ? (a(), d(V(e.rightIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : i("v-if", !0)
              ], !0) : i("v-if", !0),
              o.value ? (a(), d(m(n), {
                key: 1,
                color: "transparent",
                tabindex: "-1",
                size: "mini",
                onClick: I[2] || (I[2] = q((E) => h.value = !h.value, ["stop"]))
              }, {
                default: P(() => [
                  h.value ? (a(), d(m(u), {
                    key: 0,
                    class: "maz-text-xl maz-text-muted"
                  })) : (a(), d(m($), {
                    key: 1,
                    class: "maz-text-xl maz-text-muted"
                  }))
                ]),
                _: 1
                /* STABLE */
              })) : i("v-if", !0),
              i(`
          @slot valid-button - Replace the valid button by your own
        `),
              e.$slots["valid-button"] || e.validButton ? M(e.$slots, "valid-button", { key: 2 }, () => [
                S(m(n), {
                  color: "transparent",
                  disabled: e.disabled,
                  tabindex: "-1",
                  loading: e.validButtonLoading,
                  class: "m-input-valid-button",
                  size: "mini",
                  type: "submit"
                }, {
                  default: P(() => [
                    S(m(r), { class: "maz-text-2xl maz-text-normal" })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "loading"])
              ], !0) : i("v-if", !0)
            ])) : i("v-if", !0)
          ],
          2
          /* CLASS */
        )
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), ge = /* @__PURE__ */ G(he, [["__scopeId", "data-v-b2106d63"]]), ze = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, ke = /* @__PURE__ */ N(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "M12 4.5v15m7.5-7.5h-15"
  },
  null,
  -1
  /* HOISTED */
), Ie = [
  ke
];
function Be(f, p) {
  return a(), b("svg", ze, [...Ie]);
}
const $e = { render: Be }, we = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ce = /* @__PURE__ */ N(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "M5 12h14"
  },
  null,
  -1
  /* HOISTED */
), Me = [
  Ce
];
function Ve(f, p) {
  return a(), b("svg", we, [...Me]);
}
const Te = { render: Ve }, Se = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "MazInputNumber",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    max: { default: Number.POSITIVE_INFINITY },
    min: { default: Number.NEGATIVE_INFINITY },
    step: { default: 1 },
    size: { default: "md" },
    noButtons: { type: Boolean, default: !1 },
    textCenter: { type: Boolean, default: !0 },
    inputmode: { default: "numeric" },
    block: { type: Boolean }
  },
  emits: ["update:model-value", "focus", "blur", "click", "change"],
  setup(f, { emit: p }) {
    const n = f, g = p, u = s({
      get: () => n.modelValue,
      set: (o) => y(o)
    });
    function $(o) {
      return Math.round(o / n.step) * n.step;
    }
    const r = (o) => {
      if (typeof o == "number")
        return o <= n.min ? n.min : o >= n.max ? n.max : $(o);
    }, t = H((o) => y(o), 300), y = (o) => {
      o = r(o), u.value !== o && g("update:model-value", o);
    };
    y(u.value);
    const h = s(() => n.modelValue && n.modelValue >= n.max), z = s(() => n.modelValue && n.modelValue <= n.min), w = () => {
      if (!(n.disabled || h.value)) {
        if ((u.value === void 0 || u.value === null) && Number.isFinite(n.min)) {
          u.value = n.min;
          return;
        }
        u.value = (u.value ?? 0) + 1 * n.step;
      }
    }, k = () => {
      if (!(n.disabled || z.value)) {
        if ((u.value === void 0 || u.value === null) && Number.isFinite(n.min)) {
          u.value = n.min;
          return;
        }
        u.value = (u.value ?? 0) - 1 * n.step;
      }
    };
    return (o, c) => (a(), b(
      "div",
      {
        class: B(["m-input-number", [`m-input-number--${o.size}`, n.class, { "--block": o.block }]]),
        style: K(o.style)
      },
      [
        o.noButtons ? i("v-if", !0) : (a(), d(R, {
          key: 0,
          color: "transparent",
          size: o.size,
          tabindex: "-1",
          class: "m-input-number__button m-input-number__decrement-button",
          disabled: z.value || o.disabled,
          onClick: k
        }, {
          default: P(() => [
            S(m(Te), { class: "m-input-number__button__icon" })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["size", "disabled"])),
        S(ge, Y({
          "model-value": u.value,
          type: "number",
          class: ["m-input-number__input", { "--no-buttons": o.noButtons, "--text-center": o.textCenter }],
          disabled: o.disabled,
          min: o.min,
          max: o.max,
          step: o.step
        }, o.$attrs, {
          inputmode: o.inputmode,
          size: o.size,
          block: "",
          onKeydown: [
            O(q(w, ["prevent"]), ["up"]),
            O(q(k, ["prevent"]), ["down"])
          ],
          onFocus: c[0] || (c[0] = (v) => o.$emit("focus", v)),
          onChange: c[1] || (c[1] = (v) => o.$emit("change", v)),
          onBlur: c[2] || (c[2] = (v) => o.$emit("blur", v)),
          onClick: c[3] || (c[3] = (v) => o.$emit("click", v)),
          "onUpdate:modelValue": c[4] || (c[4] = (v) => m(t)(v))
        }), null, 16, ["model-value", "class", "disabled", "min", "max", "step", "inputmode", "size", "onKeydown"]),
        o.noButtons ? i("v-if", !0) : (a(), d(R, {
          key: 1,
          color: "transparent",
          "no-shadow": "",
          tabindex: "-1",
          size: o.size,
          class: "m-input-number__button m-input-number__increment-button",
          disabled: h.value || o.disabled,
          onClick: w
        }, {
          default: P(() => [
            S(m($e), { class: "m-input-number__button__icon" })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["size", "disabled"]))
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  G as _,
  Se as a
};

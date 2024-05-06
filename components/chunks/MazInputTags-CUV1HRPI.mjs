import '../assets/MazInputTags.css';
import { getCurrentInstance as ne, computed as u, defineComponent as N, defineAsyncComponent as V, ref as T, onMounted as le, useSlots as H, openBlock as a, createElementBlock as b, normalizeClass as M, normalizeStyle as K, createElementVNode as E, createCommentVNode as s, renderSlot as S, createBlock as p, unref as v, resolveDynamicComponent as F, withDirectives as ae, mergeProps as G, toHandlers as re, vModelDynamic as se, createTextVNode as X, toDisplayString as J, withModifiers as Q, withCtx as A, createVNode as P, useAttrs as ie, onBeforeMount as ue, TransitionGroup as de, Fragment as ce, renderList as fe, withKeys as O } from "vue";
function pe(f, y) {
  let n;
  return function(...h) {
    clearTimeout(n), n = setTimeout(() => {
      f.apply(this, h);
    }, y);
  };
}
function me({
  componentName: f,
  providedId: y
}) {
  const n = ne();
  return u(() => y ?? `${f}-${n == null ? void 0 : n.uid}`);
}
const ve = {
  key: 0,
  class: "m-input-wrapper-left"
}, be = { class: "m-input-wrapper-input" }, ye = ["id", "type", "name", "inputmode", "placeholder", "aria-label", "disabled", "readonly", "required"], he = { key: 0 }, ge = {
  key: 1,
  class: "m-input-wrapper-right"
}, ze = /* @__PURE__ */ N({
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
  setup(f, { emit: y }) {
    const n = V(() => Promise.resolve().then(() => Be)), h = V(() => import("./MazIcon-Cxrv3_OK.mjs")), g = V(() => import("./eye-slash-tjfxO0LK.mjs")), z = V(() => import("./eye-DqO_Jx56.mjs")), r = V(() => import("./check-CL-vqe79.mjs")), o = f, k = y, m = T(!1), $ = T(!1), D = T(), w = me({
      componentName: "MazInput",
      providedId: o.id
    });
    le(() => {
      var e;
      o.autoFocus && ((e = D.value) == null || e.focus());
    });
    const C = u(() => o.type === "password"), l = u(() => m.value ? "text" : o.type), i = u(() => {
      if (!o.noBorder) {
        if (o.error)
          return "maz-border-danger";
        if (o.success)
          return "maz-border-success";
        if (o.warning)
          return "maz-border-warning";
        if ($.value || o.borderActive) {
          if (o.color === "black")
            return "maz-border-black";
          if (o.color === "danger")
            return "maz-border-danger";
          if (o.color === "info")
            return "maz-border-info";
          if (o.color === "primary")
            return "maz-border-primary";
          if (o.color === "secondary")
            return "maz-border-secondary";
          if (o.color === "success")
            return "maz-border-success";
          if (o.color === "warning")
            return "maz-border-warning";
          if (o.color === "white")
            return "maz-border-white";
        }
        return "--default-border";
      }
    }), c = H(), d = u(() => {
      const { required: e, placeholder: B } = o;
      if (B)
        return e ? `${B} *` : B;
    }), t = u(() => L.value !== void 0 && L.value !== ""), I = pe(
      (e) => {
        k("update:model-value", e);
      },
      typeof o.debounce == "number" ? o.debounce : o.debounceDelay ?? 500
    ), R = (e) => {
      if (o.debounce)
        return I(e);
      k("update:model-value", e);
    }, L = u({
      get: () => o.modelValue,
      set: (e) => R(e)
    }), Y = u(() => (!!o.label || !!o.hint) && ($.value || !!t.value || !!o.placeholder || ["date", "month", "week"].includes(o.type))), Z = u(() => !!o.label || !!o.hint);
    function _() {
      return !!c["right-icon"] || C.value || !!c["valid-button"] || o.validButton || !!o.rightIcon;
    }
    function x() {
      return !!c["left-icon"] || !!o.leftIcon;
    }
    function ee(e) {
      k("focus", e), $.value = !0;
    }
    function oe(e) {
      k("blur", e), $.value = !1;
    }
    function te(e) {
      return k("change", e);
    }
    return (e, B) => (a(), b(
      "div",
      {
        class: M(["m-input", [
          {
            "--is-focused": $.value || e.borderActive,
            "--should-up": Y.value,
            "--has-label": Z.value,
            "--is-disabled": e.disabled,
            "--is-readonly": e.readonly,
            "--has-z-2": e.error || e.warning || e.success,
            "--has-state": e.error || e.warning || e.success,
            "--block": e.block
          },
          o.class,
          `--${e.color}`,
          `--${e.size}`
        ]]),
        style: K(e.style)
      },
      [
        E(
          "div",
          {
            class: M(["m-input-wrapper", [
              e.inputClasses,
              i.value,
              e.roundedSize ? `--rounded-${e.roundedSize}` : { "maz-rounded": !e.noRadius }
            ]])
          },
          [
            x() ? (a(), b("div", ve, [
              s(`
          @slot left-icon - The icon to display on the left of the input
        `),
              e.$slots["left-icon"] || e.leftIcon ? S(e.$slots, "left-icon", { key: 0 }, () => [
                typeof e.leftIcon == "string" ? (a(), p(v(h), {
                  key: 0,
                  name: e.leftIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : e.leftIcon ? (a(), p(F(e.leftIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : s("v-if", !0)
              ], !0) : s("v-if", !0)
            ])) : s("v-if", !0),
            E("div", be, [
              ae(E("input", G({
                id: v(w),
                ref_key: "input",
                ref: D,
                "onUpdate:modelValue": B[0] || (B[0] = (q) => L.value = q),
                type: l.value,
                name: e.name
              }, e.$attrs, {
                inputmode: e.inputmode,
                placeholder: d.value,
                "aria-label": e.label || e.placeholder,
                disabled: e.disabled,
                readonly: e.readonly,
                required: e.required,
                class: "m-input-input"
              }, re({
                blur: oe,
                focus: ee,
                change: te
              }, !0), {
                onClick: B[1] || (B[1] = (q) => e.$emit("click", q))
              }), null, 16, ye), [
                [se, L.value]
              ]),
              e.label || e.hint ? (a(), b(
                "span",
                {
                  key: 0,
                  ref: "label",
                  class: M(["m-input-label", [
                    {
                      "maz-text-danger-600": e.error,
                      "maz-text-success-600": e.success,
                      "maz-text-warning-600": e.warning
                    }
                  ]])
                },
                [
                  X(
                    J(e.hint || e.label) + " ",
                    1
                    /* TEXT */
                  ),
                  e.required ? (a(), b("sup", he, "*")) : s("v-if", !0)
                ],
                2
                /* CLASS */
              )) : s("v-if", !0)
            ]),
            _() ? (a(), b("div", ge, [
              s(`
          @slot right-icon - The icon to display on the right of the input
        `),
              e.$slots["right-icon"] || e.rightIcon ? S(e.$slots, "right-icon", { key: 0 }, () => [
                typeof e.rightIcon == "string" ? (a(), p(v(h), {
                  key: 0,
                  name: e.rightIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : e.rightIcon ? (a(), p(F(e.rightIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : s("v-if", !0)
              ], !0) : s("v-if", !0),
              C.value ? (a(), p(v(n), {
                key: 1,
                color: "transparent",
                tabindex: "-1",
                size: "mini",
                onClick: B[2] || (B[2] = Q((q) => m.value = !m.value, ["stop"]))
              }, {
                default: A(() => [
                  m.value ? (a(), p(v(g), {
                    key: 0,
                    class: "maz-text-xl maz-text-muted"
                  })) : (a(), p(v(z), {
                    key: 1,
                    class: "maz-text-xl maz-text-muted"
                  }))
                ]),
                _: 1
                /* STABLE */
              })) : s("v-if", !0),
              s(`
          @slot valid-button - Replace the valid button by your own
        `),
              e.$slots["valid-button"] || e.validButton ? S(e.$slots, "valid-button", { key: 2 }, () => [
                P(v(n), {
                  color: "transparent",
                  disabled: e.disabled,
                  tabindex: "-1",
                  loading: e.validButtonLoading,
                  class: "m-input-valid-button",
                  size: "mini",
                  type: "submit"
                }, {
                  default: A(() => [
                    P(v(r), { class: "maz-text-2xl maz-text-normal" })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "loading"])
              ], !0) : s("v-if", !0)
            ])) : s("v-if", !0)
          ],
          2
          /* CLASS */
        )
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), U = (f, y) => {
  const n = f.__vccOpts || f;
  for (const [h, g] of y)
    n[h] = g;
  return n;
}, ke = /* @__PURE__ */ U(ze, [["__scopeId", "data-v-b2106d63"]]), Ie = /* @__PURE__ */ N({
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
    const y = V(() => import("./MazSpinner-DibP0zFm.mjs")), n = V(() => import("./MazIcon-Cxrv3_OK.mjs")), { href: h, to: g } = ie(), z = H(), r = f;
    ue(() => {
      r.icon && !r.fab && console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props');
    });
    const o = u(() => h ? "a" : g ? "router-link" : "button"), k = u(
      () => r.pastel ? `--${r.color}-pastel` : r.outline ? `--${r.color}-outline` : `--${r.color}`
    ), m = u(
      () => (r.loading || r.disabled) && o.value === "button"
    ), $ = u(() => m.value ? "--cursor-default" : "--cursor-pointer"), D = u(() => `--is-${r.variant}`), w = u(() => r.loading && r.variant === "button"), C = u(() => !!z["left-icon"] || r.leftIcon), l = u(() => !!z["right-icon"] || r.rightIcon), i = u(() => C.value || l.value), c = u(() => r.fab && (r.icon || !!z.icon)), d = u(() => o.value === "button" ? r.type : void 0);
    return (t, I) => (a(), p(F(o.value), {
      disabled: m.value || void 0,
      class: M(["m-btn", [
        `--${t.size}`,
        !t.fab && t.roundedSize && `--rounded-${t.roundedSize}`,
        k.value,
        $.value,
        D.value,
        {
          "--block": t.block,
          "--no-underline": t.noUnderline,
          "--fab": t.fab,
          "--loading": t.loading,
          "--disabled": m.value,
          "--icon": i.value,
          "--rounded": t.rounded,
          "--no-rounded": t.noRounded,
          "--no-padding": t.noPadding,
          "--no-elevation": t.noElevation
        }
      ]]),
      type: d.value
    }, {
      default: A(() => [
        C.value ? (a(), b(
          "div",
          {
            key: 0,
            class: M(["m-btn__icon-left maz-flex maz-flex-center", { "maz-invisible": w.value }])
          },
          [
            s(`
        @slot left-icon - The icon to display on the left of the button
      `),
            S(t.$slots, "left-icon", {}, () => [
              typeof t.leftIcon == "string" ? (a(), p(v(n), {
                key: 0,
                name: t.leftIcon
              }, null, 8, ["name"])) : t.leftIcon ? (a(), p(F(t.leftIcon), { key: 1 })) : s("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : s("v-if", !0),
        c.value ? (a(), b(
          "div",
          {
            key: 1,
            class: M(["m-btn__icon", { "maz-invisible": w.value }])
          },
          [
            s(`
        @slot icon - The icon to display on the fab button
      `),
            S(t.$slots, "icon", {}, () => [
              typeof t.icon == "string" ? (a(), p(v(n), {
                key: 0,
                name: t.icon
              }, null, 8, ["name"])) : t.icon ? (a(), p(F(t.icon), { key: 1 })) : s("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : s("v-if", !0),
        t.$slots.default ? (a(), b(
          "span",
          {
            key: 2,
            class: M([{ "maz-invisible": w.value }, t.contentClass])
          },
          [
            s(`
        @slot default - The content of the button
      `),
            S(t.$slots, "default", {}, void 0, !0)
          ],
          2
          /* CLASS */
        )) : s("v-if", !0),
        l.value ? (a(), b(
          "div",
          {
            key: 3,
            class: M(["m-btn__icon-right", { "maz-invisible": w.value }])
          },
          [
            s(`
        @slot right-icon - The icon to display on the right of the button
      `),
            S(t.$slots, "right-icon", {}, () => [
              typeof t.rightIcon == "string" ? (a(), p(v(n), {
                key: 0,
                name: t.rightIcon
              }, null, 8, ["name"])) : t.rightIcon ? (a(), p(F(t.rightIcon), { key: 1 })) : s("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : s("v-if", !0),
        w.value ? (a(), p(v(y), {
          key: 4,
          class: "m-btn-loader",
          size: "2em",
          color: t.color
        }, null, 8, ["color"])) : s("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled", "class", "type"]));
  }
}), W = /* @__PURE__ */ U(Ie, [["__scopeId", "data-v-4d87e490"]]), Be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: W
}, Symbol.toStringTag, { value: "Module" })), $e = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, we = /* @__PURE__ */ E(
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
), Me = [
  we
];
function Ce(f, y) {
  return a(), b("svg", $e, [...Me]);
}
const Te = { render: Ce };
function j(f) {
  return !!f;
}
const Ve = /* @__PURE__ */ N({
  inheritAttrs: !1,
  __name: "MazInputTags",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { default: void 0 },
    placeholder: { default: void 0 },
    label: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    success: { type: Boolean, default: !1 },
    warning: { type: Boolean, default: !1 },
    size: { default: "md" },
    color: { default: "primary" },
    block: { type: Boolean }
  },
  emits: ["update:model-value"],
  setup(f, { emit: y }) {
    const n = f, h = T(!1), g = T(), z = T(), r = T(), o = T(), k = y, m = u(
      () => {
        var l;
        return (l = n.modelValue) == null ? void 0 : l.map((i) => ({
          tag: i,
          id: Math.random().toString(36).slice(2, 11)
        }));
      }
    ), $ = (l) => {
      if (g.value) {
        r.value = void 0, l.preventDefault();
        const c = g.value.trim().split(",").map((d) => d.trim() === "," ? void 0 : d.trim()).filter(j).filter(
          (d) => {
            var t, I;
            return !((I = (t = n.modelValue) == null ? void 0 : t.filter(j)) != null && I.some((R) => R === d));
          }
        );
        k(
          "update:model-value",
          n.modelValue ? [...n.modelValue, ...c] : [...c]
        ), g.value = void 0;
      }
    }, D = u(() => {
      if (n.error)
        return "maz-border-danger";
      if (n.success)
        return "maz-border-success";
      if (n.warning)
        return "maz-border-warning";
      if (h.value) {
        if (n.color === "primary")
          return "maz-border-primary";
        if (n.color === "secondary")
          return "maz-border-secondary";
        if (n.color === "info")
          return "maz-border-info";
        if (n.color === "danger")
          return "maz-border-danger";
        if (n.color === "success")
          return "maz-border-success";
        if (n.color === "warning")
          return "maz-border-warning";
        if (n.color === "black")
          return "maz-border-black";
        if (n.color === "white")
          return "maz-border-white";
      }
      return "maz-border-border dark:maz-border-color-lighter";
    }), w = () => {
      var l, i;
      o.value && clearTimeout(o.value), r.value ? (C(r.value), r.value = void 0) : (r.value = (i = (l = m.value) == null ? void 0 : l[m.value.length - 1]) == null ? void 0 : i.id, o.value = setTimeout(() => {
        r.value = void 0;
      }, 2e3));
    }, C = (l) => {
      var c;
      const i = (c = m.value) == null ? void 0 : c.filter((d) => d.id !== l).map((d) => d.tag);
      k("update:model-value", i);
    };
    return (l, i) => (a(), b(
      "div",
      {
        class: M(["m-input-tags", [D.value, `--${l.color}`, `--${l.size}`, n.class, { "--block": l.block }]]),
        style: K(l.style),
        onFocusCapture: i[3] || (i[3] = (c) => h.value = !0),
        onBlurCapture: i[4] || (i[4] = (c) => h.value = !1)
      },
      [
        P(de, { name: "maz-tags" }, {
          default: A(() => [
            (a(!0), b(
              ce,
              null,
              fe(m.value, ({ tag: c, id: d }, t) => (a(), b("div", {
                key: `tag-${t}`,
                class: "m-input-tags__wrapper"
              }, [
                P(W, {
                  class: "m-input-tags__tag !maz-h-full",
                  disabled: l.disabled,
                  size: l.size,
                  color: z.value === d || r.value === d ? "danger" : l.color,
                  "right-icon": v(Te),
                  onClick: Q((I) => C(d), ["stop"]),
                  onMouseenter: (I) => z.value = d,
                  onFocus: (I) => z.value = d,
                  onMouseleave: i[0] || (i[0] = (I) => z.value = void 0),
                  onBlur: i[1] || (i[1] = (I) => z.value = void 0)
                }, {
                  default: A(() => [
                    X(
                      J(c),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["disabled", "size", "color", "right-icon", "onClick", "onMouseenter", "onFocus"])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }),
        P(ke, G({
          key: "input-tags",
          modelValue: g.value,
          "onUpdate:modelValue": i[2] || (i[2] = (c) => g.value = c)
        }, l.$attrs, {
          placeholder: l.placeholder,
          label: l.label,
          "aria-label": l.label || l.placeholder,
          error: l.error,
          disabled: l.disabled,
          color: l.color,
          block: l.block,
          size: l.size,
          "no-border": "",
          class: "m-input-tags__input",
          onKeydown: [
            O($, ["enter"]),
            O(w, ["delete"])
          ]
        }), null, 16, ["modelValue", "placeholder", "label", "aria-label", "error", "disabled", "color", "block", "size"])
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    ));
  }
}), De = /* @__PURE__ */ U(Ve, [["__scopeId", "data-v-cae47bd8"]]);
export {
  De as M,
  U as _
};

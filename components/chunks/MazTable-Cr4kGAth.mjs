import '../assets/MazTable.css';
import { openBlock as s, createElementBlock as g, createElementVNode as C, getCurrentInstance as et, computed as c, defineComponent as oe, defineAsyncComponent as J, ref as E, onMounted as tt, useSlots as Le, normalizeClass as B, normalizeStyle as ie, createCommentVNode as u, renderSlot as I, createBlock as S, unref as v, resolveDynamicComponent as pe, withDirectives as Ue, mergeProps as Pe, toHandlers as ot, vModelDynamic as lt, createTextVNode as re, toDisplayString as Z, withModifiers as ce, withCtx as O, createVNode as A, useCssVars as Ve, onBeforeMount as Oe, nextTick as Be, Transition as at, Fragment as he, renderList as we, useAttrs as nt, inject as st, pushScopeId as qe, popScopeId as Re, toRefs as rt, provide as it, watch as ke } from "vue";
const ut = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, dt = /* @__PURE__ */ C(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"
  },
  null,
  -1
  /* HOISTED */
), ct = [
  dt
];
function Qe(r, d) {
  return s(), g("svg", ut, [...ct]);
}
const We = { render: Qe }, pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We,
  render: Qe
}, Symbol.toStringTag, { value: "Module" })), ft = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, mt = /* @__PURE__ */ C(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
  },
  null,
  -1
  /* HOISTED */
), vt = [
  mt
];
function bt(r, d) {
  return s(), g("svg", ft, [...vt]);
}
const ht = { render: bt }, yt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, gt = /* @__PURE__ */ C(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "M15.75 19.5 8.25 12l7.5-7.5"
  },
  null,
  -1
  /* HOISTED */
), zt = [
  gt
];
function kt(r, d) {
  return s(), g("svg", yt, [...zt]);
}
const je = { render: kt }, $t = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, wt = /* @__PURE__ */ C(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
  },
  null,
  -1
  /* HOISTED */
), Vt = [
  wt
];
function It(r, d) {
  return s(), g("svg", $t, [...Vt]);
}
const De = { render: It };
function St(r, d) {
  let t;
  return function(...b) {
    clearTimeout(t), t = setTimeout(() => {
      r.apply(this, b);
    }, d);
  };
}
function Ee({
  componentName: r,
  providedId: d
}) {
  const t = et();
  return c(() => d ?? `${r}-${t == null ? void 0 : t.uid}`);
}
const Bt = {
  key: 0,
  class: "m-input-wrapper-left"
}, Ct = { class: "m-input-wrapper-input" }, Mt = ["id", "type", "name", "inputmode", "placeholder", "aria-label", "disabled", "readonly", "required"], _t = { key: 0 }, At = {
  key: 1,
  class: "m-input-wrapper-right"
}, Tt = /* @__PURE__ */ oe({
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
  setup(r, { emit: d }) {
    const t = J(() => Promise.resolve().then(() => Qt)), b = J(() => import("./MazIcon-DAWEYUs6.mjs")), z = J(() => import("./eye-slash-tjfxO0LK.mjs")), m = J(() => import("./eye-DqO_Jx56.mjs")), h = J(() => Promise.resolve().then(() => no)), o = r, L = d, T = E(!1), w = E(!1), F = E(), M = Ee({
      componentName: "MazInput",
      providedId: o.id
    });
    tt(() => {
      var a;
      o.autoFocus && ((a = F.value) == null || a.focus());
    });
    const R = c(() => o.type === "password"), k = c(() => T.value ? "text" : o.type), V = c(() => {
      if (!o.noBorder) {
        if (o.error)
          return "maz-border-danger";
        if (o.success)
          return "maz-border-success";
        if (o.warning)
          return "maz-border-warning";
        if (w.value || o.borderActive) {
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
    }), j = Le(), W = c(() => {
      const { required: a, placeholder: P } = o;
      if (P)
        return a ? `${P} *` : P;
    }), y = c(() => x.value !== void 0 && x.value !== ""), X = St(
      (a) => {
        L("update:model-value", a);
      },
      typeof o.debounce == "number" ? o.debounce : o.debounceDelay ?? 500
    ), ae = (a) => {
      if (o.debounce)
        return X(a);
      L("update:model-value", a);
    }, x = c({
      get: () => o.modelValue,
      set: (a) => ae(a)
    }), ee = c(() => (!!o.label || !!o.hint) && (w.value || !!y.value || !!o.placeholder || ["date", "month", "week"].includes(o.type))), ue = c(() => !!o.label || !!o.hint);
    function ne() {
      return !!j["right-icon"] || R.value || !!j["valid-button"] || o.validButton || !!o.rightIcon;
    }
    function U() {
      return !!j["left-icon"] || !!o.leftIcon;
    }
    function se(a) {
      L("focus", a), w.value = !0;
    }
    function fe(a) {
      L("blur", a), w.value = !1;
    }
    function G(a) {
      return L("change", a);
    }
    return (a, P) => (s(), g(
      "div",
      {
        class: B(["m-input", [
          {
            "--is-focused": w.value || a.borderActive,
            "--should-up": ee.value,
            "--has-label": ue.value,
            "--is-disabled": a.disabled,
            "--is-readonly": a.readonly,
            "--has-z-2": a.error || a.warning || a.success,
            "--has-state": a.error || a.warning || a.success,
            "--block": a.block
          },
          o.class,
          `--${a.color}`,
          `--${a.size}`
        ]]),
        style: ie(a.style)
      },
      [
        C(
          "div",
          {
            class: B(["m-input-wrapper", [
              a.inputClasses,
              V.value,
              a.roundedSize ? `--rounded-${a.roundedSize}` : { "maz-rounded": !a.noRadius }
            ]])
          },
          [
            U() ? (s(), g("div", Bt, [
              u(`
          @slot left-icon - The icon to display on the left of the input
        `),
              a.$slots["left-icon"] || a.leftIcon ? I(a.$slots, "left-icon", { key: 0 }, () => [
                typeof a.leftIcon == "string" ? (s(), S(v(b), {
                  key: 0,
                  name: a.leftIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : a.leftIcon ? (s(), S(pe(a.leftIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : u("v-if", !0)
              ], !0) : u("v-if", !0)
            ])) : u("v-if", !0),
            C("div", Ct, [
              Ue(C("input", Pe({
                id: v(M),
                ref_key: "input",
                ref: F,
                "onUpdate:modelValue": P[0] || (P[0] = (te) => x.value = te),
                type: k.value,
                name: a.name
              }, a.$attrs, {
                inputmode: a.inputmode,
                placeholder: W.value,
                "aria-label": a.label || a.placeholder,
                disabled: a.disabled,
                readonly: a.readonly,
                required: a.required,
                class: "m-input-input"
              }, ot({
                blur: fe,
                focus: se,
                change: G
              }, !0), {
                onClick: P[1] || (P[1] = (te) => a.$emit("click", te))
              }), null, 16, Mt), [
                [lt, x.value]
              ]),
              a.label || a.hint ? (s(), g(
                "span",
                {
                  key: 0,
                  ref: "label",
                  class: B(["m-input-label", [
                    {
                      "maz-text-danger-600": a.error,
                      "maz-text-success-600": a.success,
                      "maz-text-warning-600": a.warning
                    }
                  ]])
                },
                [
                  re(
                    Z(a.hint || a.label) + " ",
                    1
                    /* TEXT */
                  ),
                  a.required ? (s(), g("sup", _t, "*")) : u("v-if", !0)
                ],
                2
                /* CLASS */
              )) : u("v-if", !0)
            ]),
            ne() ? (s(), g("div", At, [
              u(`
          @slot right-icon - The icon to display on the right of the input
        `),
              a.$slots["right-icon"] || a.rightIcon ? I(a.$slots, "right-icon", { key: 0 }, () => [
                typeof a.rightIcon == "string" ? (s(), S(v(b), {
                  key: 0,
                  name: a.rightIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : a.rightIcon ? (s(), S(pe(a.rightIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : u("v-if", !0)
              ], !0) : u("v-if", !0),
              R.value ? (s(), S(v(t), {
                key: 1,
                color: "transparent",
                tabindex: "-1",
                size: "mini",
                onClick: P[2] || (P[2] = ce((te) => T.value = !T.value, ["stop"]))
              }, {
                default: O(() => [
                  T.value ? (s(), S(v(z), {
                    key: 0,
                    class: "maz-text-xl maz-text-muted"
                  })) : (s(), S(v(m), {
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
              a.$slots["valid-button"] || a.validButton ? I(a.$slots, "valid-button", { key: 2 }, () => [
                A(v(t), {
                  color: "transparent",
                  disabled: a.disabled,
                  tabindex: "-1",
                  loading: a.validButtonLoading,
                  class: "m-input-valid-button",
                  size: "mini",
                  type: "submit"
                }, {
                  default: O(() => [
                    A(v(h), { class: "maz-text-2xl maz-text-normal" })
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
}), le = (r, d) => {
  const t = r.__vccOpts || r;
  for (const [b, z] of d)
    t[b] = z;
  return t;
}, Te = /* @__PURE__ */ le(Tt, [["__scopeId", "data-v-b2106d63"]]);
let Ce = null;
function Kt(r, d) {
  Ce && clearTimeout(Ce), Ce = setTimeout(r, d);
}
function Lt(r, d) {
  const t = r.length, b = d.length, z = [];
  for (let m = 0; m <= t; m++)
    z[m] = [m];
  for (let m = 0; m <= b; m++)
    z[0][m] = m;
  for (let m = 1; m <= t; m++)
    for (let h = 1; h <= b; h++) {
      const o = r[m - 1] === d[h - 1] ? 0 : 1;
      z[m][h] = Math.min(
        z[m - 1][h] + 1,
        z[m][h - 1] + 1,
        z[m - 1][h - 1] + o
      );
    }
  return z[t][b];
}
function Fe(r) {
  return r.normalize("NFD").replaceAll(/[\u0300-\u036F]/g, "").toLowerCase();
}
function Ge(r, d) {
  const t = Lt(r, d), b = Math.max(r.length, d.length);
  return 1 - t / b;
}
function Pt(r, d, t = 0.75) {
  return Ge(r, d) >= t;
}
function Me(r, d, t = 0.75) {
  const b = c(
    () => Fe(typeof r == "string" ? r : r.value)
  ), z = c(
    () => Fe(typeof d == "string" ? d : d.value)
  ), m = c(() => typeof t == "number" ? t : t.value), h = c(() => Ge(b.value, z.value));
  return {
    isMatching: c(
      () => Pt(b.value, z.value, m.value)
    ),
    score: h
  };
}
const Ye = (r, d, t) => {
  var h;
  r.stopPropagation();
  const b = typeof t.value == "function" ? t.value : t.value.handler, z = typeof t.value == "object" ? t.value.exclude : void 0;
  let m = !1;
  if (z && z.length > 0) {
    for (const o of z)
      if (!m && r.target instanceof HTMLElement) {
        const L = (h = document.querySelector(o)) == null ? void 0 : h.getAttribute("id");
        m = r.target.getAttribute("id") === L;
      }
  }
  !d.contains(r.target) && !m && (b == null || b());
};
function Ze() {
  return document.ontouchstart === null ? "touchstart" : "click";
}
function Ot(r, d) {
  const t = Ze();
  document.removeEventListener(t, (b) => Ye(b, r, d));
}
function Et(r, d) {
  if (typeof d.value != "function" && typeof d.value == "object" && typeof d.value.handler != "function") {
    console.error("[maz-ui](vClosable) v-closable directive requires a handler function");
    return;
  }
  const t = Ze();
  document.addEventListener(t, (b) => Ye(b, r, d));
}
const Nt = {
  mounted: Et,
  unmounted: Ot
}, jt = ["aria-label"], Dt = { class: "m-select-list__no-results" }, Ft = {
  key: 2,
  class: "m-select-list__scroll-wrapper",
  tabindex: "-1"
}, Ht = { class: "m-select-list-optgroup" }, Ut = ["onClick"], qt = /* @__PURE__ */ oe({
  inheritAttrs: !1,
  __name: "MazSelect",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    id: { default: void 0 },
    modelValue: { default: void 0 },
    options: { default: void 0 },
    optionValueKey: { default: "value" },
    optionLabelKey: { default: "label" },
    optionInputValueKey: { default: "label" },
    listPosition: { default: "bottom left" },
    itemHeight: { default: void 0 },
    maxListHeight: { default: 240 },
    maxListWidth: { default: void 0 },
    size: { default: "md" },
    color: { default: "primary" },
    search: { type: Boolean },
    searchPlaceholder: { default: "Search in options" },
    open: { type: Boolean },
    multiple: { type: Boolean, default: void 0 },
    required: { type: Boolean },
    disabled: { type: Boolean },
    block: { type: Boolean },
    excludeSelectors: { default: void 0 }
  },
  emits: ["close", "open", "blur", "focus", "change", "update:model-value", "selected-option"],
  setup(r, { expose: d, emit: t }) {
    Ve((e) => ({
      "417b570e": k.value,
      "16c577f8": M.value,
      "081fe860": R.value
    }));
    const b = J(() => Promise.resolve().then(() => uo)), z = J(() => Promise.resolve().then(() => pt)), m = J(() => import("./chevron-down-CzMH-gFW.mjs")), h = J(() => import("./no-symbol-QAqP9IlR.mjs"));
    d({
      /** Method to open the option list */
      openList: D,
      /** Method to close the option list */
      closeList: q
    });
    const o = r, L = t, T = E(!1), w = E(), F = c(
      () => ["black", "transparent", "white"].includes(o.color)
    ), M = c(
      () => F.value ? "var(--maz-color-black)" : `var(--maz-color-${o.color}-800)`
    ), R = c(
      () => F.value ? "var(--maz-color-muted)" : `var(--maz-color-${o.color}-100)`
    ), k = c(
      () => F.value ? "var(--maz-color-muted)" : `var(--maz-color-${o.color}-200)`
    ), V = c(() => T.value || o.open), j = Ee({
      componentName: "MazSelect",
      providedId: o.id
    });
    function W(e) {
      return {
        [o.optionValueKey]: e,
        [o.optionLabelKey]: e,
        [o.optionInputValueKey]: e
      };
    }
    function y(e) {
      return {
        ...e,
        [o.optionValueKey]: e[o.optionValueKey],
        [o.optionLabelKey]: e[o.optionLabelKey],
        [o.optionInputValueKey]: e[o.optionInputValueKey]
      };
    }
    const X = c(() => {
      var n;
      const e = [];
      if (!((n = o.options) != null && n.length))
        return [];
      for (const f of o.options)
        typeof f == "string" || typeof f == "number" || typeof f == "boolean" ? e.push(W(f)) : typeof f == "object" && "options" in f && Array.isArray(f.options) ? e.push(
          { label: f.label, isOptGroup: !0 },
          ...f.options.map(
            (i) => typeof i == "string" || typeof i == "number" || typeof i == "boolean" ? W(i) : y(i)
          )
        ) : e.push(y(f));
      return e;
    }), ae = c(
      () => {
        var e;
        return ((e = X.value) == null ? void 0 : e.filter((n) => o.multiple ? Array.isArray(o.modelValue) ? o.modelValue.includes(n[o.optionValueKey]) && !U(n[o.optionValueKey]) : !1 : o.modelValue === n[o.optionValueKey] && !U(n[o.optionValueKey]))) ?? [];
      }
    );
    Oe(() => {
      var e;
      (e = o.options) != null && e.length || console.warn("[maz-ui](MazSelect) you must provide options"), K();
    });
    const x = E(), ee = E(), ue = E(), ne = E(), U = (e) => e == null;
    function se(e) {
      var f;
      return (((f = ae.value) == null ? void 0 : f.some(
        (i) => i[o.optionValueKey] === e[o.optionValueKey]
      )) ?? !1) && !U(e[o.optionValueKey]);
    }
    const fe = c(() => {
      var n;
      if (o.multiple && o.modelValue && Array.isArray(o.modelValue))
        return o.modelValue.map(
          (f) => {
            var i, _;
            return (_ = (i = X.value) == null ? void 0 : i.find((H) => H[o.optionValueKey] === f)) == null ? void 0 : _[o.optionInputValueKey];
          }
        ).join(", ");
      const e = (n = X.value) == null ? void 0 : n.find(
        (f) => f[o.optionValueKey] === o.modelValue
      );
      return U(o.modelValue) || e == null ? void 0 : e[o.optionInputValueKey];
    }), G = c(
      () => o.listPosition.includes("bottom") ? "maz-slide" : "maz-slideinvert"
    ), a = E(""), P = E("");
    function te(e) {
      return e.normalize("NFD").replaceAll(/[\u0300-\u036F]/g, "").replaceAll(/[^\dA-Za-z\u0400-\u04FF]/g, "");
    }
    const Y = (e, n) => n && e && te(e.toString().toLocaleLowerCase().trim()).includes(
      te(n.toLocaleLowerCase().trim())
    );
    function ye(e) {
      var n;
      return e ? (n = X.value) == null ? void 0 : n.filter((f) => {
        const i = f[o.optionLabelKey], _ = f[o.optionValueKey], H = f[o.optionInputValueKey];
        return Y(i, e) || Y(H, e) || Y(_, e) || typeof i == "string" && Me(i, e).isMatching.value || typeof H == "string" && Me(H, e).isMatching.value || typeof _ == "string" && Me(_, e).isMatching.value;
      }) : X.value;
    }
    const Q = c(() => ye(a.value));
    async function q(e) {
      var f, i;
      if (!V.value)
        return;
      if (e && ("relatedTarget" in e && ((f = x.value) != null && f.contains(e.relatedTarget)) || e.type === "keydown"))
        return e.preventDefault();
      const n = e && "relatedTarget" in e && e.relatedTarget instanceof HTMLElement && e.relatedTarget.getAttribute("id");
      if ((i = o.excludeSelectors) != null && i.includes(`#${n}`))
        return e == null ? void 0 : e.preventDefault();
      await Be(), T.value = !1, w.value = 0, L("close", e);
    }
    async function D(e) {
      o.disabled || V.value || (e == null || e.preventDefault(), T.value = !0, await p(), L("focus", e), L("open", T.value));
    }
    function ge() {
      var e, n;
      (n = ((e = ee.value) == null ? void 0 : e.$el).querySelector("input")) == null || n.focus();
    }
    function ze(e) {
      T.value ? q(e) : ge();
    }
    function Ie(e) {
      var n, f;
      a.value = e, (f = ((n = ue.value) == null ? void 0 : n.$el).querySelector("input")) == null || f.focus();
    }
    function Se(e) {
      var f;
      e === "Backspace" && P.value.length > 0 ? P.value = P.value.slice(0, -1) : P.value += e;
      const n = ye(P.value);
      n != null && n.length && (w.value = (f = Q.value) == null ? void 0 : f.findIndex(
        (i) => i[o.optionValueKey] === n[0][o.optionValueKey]
      ), typeof w.value == "number" && w.value >= 0 && p(w.value)), Kt(() => {
        P.value = "";
      }, 1e3);
    }
    const me = (e) => {
      const n = e.key;
      /^[\dA-Za-z\u0400-\u04FF]$/.test(n) ? (e.preventDefault(), D(e), o.search ? Ie(n) : Se(n)) : ve(e);
    }, ve = (e) => {
      const n = e.code, f = ["ArrowUp", "ArrowDown"].includes(n), i = ["Enter"].includes(n), _ = n === "Escape" && V.value;
      f ? l(e, w.value) : i ? $(e, w.value) : _ && q(e);
    }, l = (e, n) => {
      var _;
      e.preventDefault();
      const f = e.code;
      V.value || D(e);
      const i = (_ = Q.value) == null ? void 0 : _.length;
      i && (typeof n == "number" ? n === i - 1 && f === "ArrowDown" ? w.value = 0 : n === 0 && f === "ArrowUp" ? w.value = i - 1 : w.value = f === "ArrowDown" ? n + 1 : n - 1 : w.value = f === "ArrowDown" ? 0 : i - 1, p(w.value));
    }, $ = (e, n) => {
      var i, _, H;
      if (e.preventDefault(), !V.value)
        return D(e);
      const f = n ? ((i = Q.value) == null ? void 0 : i[n]) ?? ((_ = Q.value) == null ? void 0 : _[0]) : (H = Q.value) == null ? void 0 : H[0];
      U(f) || N(f);
    };
    async function p(e) {
      var f, i;
      await Be(), typeof e != "number" && K();
      const n = e ?? w.value;
      typeof n == "number" && n >= 0 && ((i = (f = ne.value) == null ? void 0 : f.querySelectorAll(".m-select-list-item")[n]) == null || i.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "start"
      }));
    }
    function K(e) {
      var f;
      const n = (f = Q.value) == null ? void 0 : f.findIndex((i) => {
        var _, H;
        return o.multiple && Array.isArray(o.modelValue) ? e ? e[o.optionValueKey] === i[o.optionValueKey] : [...o.modelValue].reverse()[0] === i[o.optionValueKey] : ((H = (_ = ae.value) == null ? void 0 : _[0]) == null ? void 0 : H[o.optionValueKey]) === i[o.optionValueKey];
      });
      w.value = n && n >= 0 ? n : 0;
    }
    function N(e, n = !0) {
      var H;
      n && !o.multiple && Be(() => q()), a.value = "";
      const f = (H = ae.value) == null ? void 0 : H.some(
        (de) => de[o.optionValueKey] === e[o.optionValueKey]
      );
      let i = ae.value;
      f && o.multiple ? i = i == null ? void 0 : i.filter(
        (de) => de[o.optionValueKey] !== e[o.optionValueKey]
      ) : o.multiple ? i.push(e) : i = [e];
      const _ = i.map((de) => de[o.optionValueKey]);
      L("update:model-value", o.multiple ? _ : _[0]), L("selected-option", e), K(e), ge();
    }
    return (e, n) => {
      var f;
      return Ue((s(), g(
        "div",
        {
          ref_key: "mazSelectElement",
          ref: x,
          class: B(["m-select", [
            { "--is-open": V.value, "--disabled": e.disabled, "--block": e.block },
            o.class,
            `--${e.size}`
          ]]),
          style: ie(e.style)
        },
        [
          A(Te, Pe({
            id: v(j),
            ref_key: "mazInputComponent",
            ref: ee,
            class: "m-select-input"
          }, e.$attrs, {
            required: e.required,
            "border-active": T.value,
            color: e.color,
            "model-value": fe.value,
            autocomplete: "off",
            size: e.size,
            block: "",
            disabled: e.disabled,
            onFocus: ce(D, ["prevent", "stop"]),
            onBlur: ce(q, ["prevent", "stop"]),
            onClick: ce(D, ["prevent", "stop"]),
            onChange: n[0] || (n[0] = (i) => L("change", i)),
            onKeydown: me
          }), {
            "right-icon": O(() => [
              C("button", {
                tabindex: "-1",
                type: "button",
                class: "m-select-input__toggle-button maz-custom",
                "aria-label": `${V.value ? "collapse" : "expand"} list of options`,
                onClick: ce(ze, ["stop"])
              }, [
                A(v(m), { class: "m-select-chevron maz-text-xl" })
              ], 8, jt)
            ]),
            _: 1
            /* STABLE */
          }, 16, ["id", "required", "border-active", "color", "model-value", "size", "disabled"]),
          A(at, { name: G.value }, {
            default: O(() => [
              V.value ? (s(), g(
                "div",
                {
                  key: 0,
                  ref_key: "optionsListElement",
                  ref: ne,
                  class: B(["m-select-list", {
                    "--top": e.listPosition.includes("top"),
                    "--left": e.listPosition.includes("left"),
                    "--right": e.listPosition.includes("right"),
                    "--bottom": e.listPosition.includes("bottom")
                  }]),
                  style: ie({
                    maxHeight: `${e.maxListHeight}px`,
                    maxWidth: `${e.maxListWidth}px`
                  })
                },
                [
                  e.search ? (s(), S(Te, {
                    key: 0,
                    ref_key: "searchInputComponent",
                    ref: ue,
                    modelValue: a.value,
                    "onUpdate:modelValue": [
                      n[1] || (n[1] = (i) => a.value = i),
                      n[2] || (n[2] = (i) => w.value = 0)
                    ],
                    size: "sm",
                    color: e.color,
                    placeholder: e.searchPlaceholder,
                    name: "search",
                    autocomplete: "off",
                    tabindex: "-1",
                    class: "m-select-list__search-input maz-flex-none",
                    "left-icon": v(z),
                    onKeydown: ve
                  }, null, 8, ["modelValue", "color", "placeholder", "left-icon"])) : u("v-if", !0),
                  u(`
          @slot No results slot - Displayed when no results corresponding with search query
        `),
                  !Q.value || Q.value.length <= 0 ? I(e.$slots, "no-results", { key: 1 }, () => [
                    C("span", Dt, [
                      A(v(h), { class: "maz-h-6 maz-w-6 maz-text-normal" })
                    ])
                  ], !0) : (s(), g("div", Ft, [
                    (s(!0), g(
                      he,
                      null,
                      we(Q.value, (i, _) => (s(), g(
                        he,
                        { key: _ },
                        [
                          u(`
              @slot Custom optgroup label
                @binding {String} label - the label of the optgroup
            `),
                          i.label && i.isOptGroup ? I(e.$slots, "optgroup", {
                            key: 0,
                            label: i.label
                          }, () => [
                            C(
                              "span",
                              Ht,
                              Z(i.label),
                              1
                              /* TEXT */
                            )
                          ], !0) : (s(), g("button", {
                            key: 1,
                            tabindex: "-1",
                            type: "button",
                            class: B(["m-select-list-item maz-custom maz-flex-none", [
                              {
                                "--is-keyboard-selected": w.value === _,
                                "--is-selected": se(i),
                                "--is-none-value": U(i[e.optionValueKey])
                              }
                            ]]),
                            style: ie(e.itemHeight ? { height: `${e.itemHeight}px` } : void 0),
                            onClick: ce((H) => N(i), ["prevent", "stop"])
                          }, [
                            e.multiple ? (s(), S(v(b), {
                              key: 0,
                              tabindex: "-1",
                              "model-value": se(i),
                              size: "sm",
                              color: e.color
                            }, null, 8, ["model-value", "color"])) : u("v-if", !0),
                            u(`
                @slot Custom option
                  @binding {Object} option - the option object
                  @binding {Boolean} is-selected - if the option is selected
              `),
                            I(e.$slots, "default", {
                              option: i,
                              isSelected: se(i)
                            }, () => [
                              C(
                                "span",
                                null,
                                Z(i[e.optionLabelKey]),
                                1
                                /* TEXT */
                              )
                            ], !0)
                          ], 14, Ut))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]))
                ],
                6
                /* CLASS, STYLE */
              )) : u("v-if", !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["name"])
        ],
        6
        /* CLASS, STYLE */
      )), [
        [v(Nt), {
          exclude: (f = e.excludeSelectors) != null && f.length ? e.excludeSelectors : [],
          handler: q
        }]
      ]);
    };
  }
}), He = /* @__PURE__ */ le(qt, [["__scopeId", "data-v-8441f9de"]]), Rt = /* @__PURE__ */ oe({
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
  setup(r) {
    const d = J(() => import("./MazSpinner-DYkIZhje.mjs")), t = J(() => import("./MazIcon-DAWEYUs6.mjs")), { href: b, to: z } = nt(), m = Le(), h = r;
    Oe(() => {
      h.icon && !h.fab && console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props');
    });
    const o = c(() => b ? "a" : z ? "router-link" : "button"), L = c(
      () => h.pastel ? `--${h.color}-pastel` : h.outline ? `--${h.color}-outline` : `--${h.color}`
    ), T = c(
      () => (h.loading || h.disabled) && o.value === "button"
    ), w = c(() => T.value ? "--cursor-default" : "--cursor-pointer"), F = c(() => `--is-${h.variant}`), M = c(() => h.loading && h.variant === "button"), R = c(() => !!m["left-icon"] || h.leftIcon), k = c(() => !!m["right-icon"] || h.rightIcon), V = c(() => R.value || k.value), j = c(() => h.fab && (h.icon || !!m.icon)), W = c(() => o.value === "button" ? h.type : void 0);
    return (y, X) => (s(), S(pe(o.value), {
      disabled: T.value || void 0,
      class: B(["m-btn", [
        `--${y.size}`,
        !y.fab && y.roundedSize && `--rounded-${y.roundedSize}`,
        L.value,
        w.value,
        F.value,
        {
          "--block": y.block,
          "--no-underline": y.noUnderline,
          "--fab": y.fab,
          "--loading": y.loading,
          "--disabled": T.value,
          "--icon": V.value,
          "--rounded": y.rounded,
          "--no-rounded": y.noRounded,
          "--no-padding": y.noPadding,
          "--no-elevation": y.noElevation
        }
      ]]),
      type: W.value
    }, {
      default: O(() => [
        R.value ? (s(), g(
          "div",
          {
            key: 0,
            class: B(["m-btn__icon-left maz-flex maz-flex-center", { "maz-invisible": M.value }])
          },
          [
            u(`
        @slot left-icon - The icon to display on the left of the button
      `),
            I(y.$slots, "left-icon", {}, () => [
              typeof y.leftIcon == "string" ? (s(), S(v(t), {
                key: 0,
                name: y.leftIcon
              }, null, 8, ["name"])) : y.leftIcon ? (s(), S(pe(y.leftIcon), { key: 1 })) : u("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : u("v-if", !0),
        j.value ? (s(), g(
          "div",
          {
            key: 1,
            class: B(["m-btn__icon", { "maz-invisible": M.value }])
          },
          [
            u(`
        @slot icon - The icon to display on the fab button
      `),
            I(y.$slots, "icon", {}, () => [
              typeof y.icon == "string" ? (s(), S(v(t), {
                key: 0,
                name: y.icon
              }, null, 8, ["name"])) : y.icon ? (s(), S(pe(y.icon), { key: 1 })) : u("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : u("v-if", !0),
        y.$slots.default ? (s(), g(
          "span",
          {
            key: 2,
            class: B([{ "maz-invisible": M.value }, y.contentClass])
          },
          [
            u(`
        @slot default - The content of the button
      `),
            I(y.$slots, "default", {}, void 0, !0)
          ],
          2
          /* CLASS */
        )) : u("v-if", !0),
        k.value ? (s(), g(
          "div",
          {
            key: 3,
            class: B(["m-btn__icon-right", { "maz-invisible": M.value }])
          },
          [
            u(`
        @slot right-icon - The icon to display on the right of the button
      `),
            I(y.$slots, "right-icon", {}, () => [
              typeof y.rightIcon == "string" ? (s(), S(v(t), {
                key: 0,
                name: y.rightIcon
              }, null, 8, ["name"])) : y.rightIcon ? (s(), S(pe(y.rightIcon), { key: 1 })) : u("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : u("v-if", !0),
        M.value ? (s(), S(v(d), {
          key: 4,
          class: "m-btn-loader",
          size: "2em",
          color: y.color
        }, null, 8, ["color"])) : u("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled", "class", "type"]));
  }
}), be = /* @__PURE__ */ le(Rt, [["__scopeId", "data-v-4d87e490"]]), Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: be
}, Symbol.toStringTag, { value: "Module" }));
function Ne(r, d) {
  const t = st(r, d);
  if (!t)
    throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${r}`);
  return t;
}
const Wt = /* @__PURE__ */ oe({
  __name: "MazTableRow",
  props: {
    noHoverable: { type: Boolean }
  },
  setup(r) {
    const { hoverable: d, backgroundEven: t, backgroundOdd: b } = Ne("maz-table");
    return (z, m) => (s(), g(
      "tr",
      {
        class: B(["m-table-row", {
          "--hoverable": v(d) && !z.noHoverable,
          "--background-odd": v(b),
          "--background-even": v(t)
        }])
      },
      [
        I(z.$slots, "default", {}, void 0, !0)
      ],
      2
      /* CLASS */
    ));
  }
}), _e = /* @__PURE__ */ le(Wt, [["__scopeId", "data-v-57ba9a97"]]), Gt = /* @__PURE__ */ oe({
  __name: "MazTableCell",
  setup(r) {
    const { size: d } = Ne("maz-table");
    return (t, b) => (s(), g(
      "td",
      {
        class: B(["m-table-cell", `--${v(d)}`])
      },
      [
        I(t.$slots, "default", {}, void 0, !0)
      ],
      2
      /* CLASS */
    ));
  }
}), $e = /* @__PURE__ */ le(Gt, [["__scopeId", "data-v-0668079a"]]), Yt = /* @__PURE__ */ oe({
  __name: "MazTableTitle",
  setup(r) {
    const { size: d } = Ne("maz-table");
    return (t, b) => (s(), g(
      "th",
      {
        class: B(["m-table-title", `--${v(d)}`])
      },
      [
        I(t.$slots, "default", {}, void 0, !0)
      ],
      2
      /* CLASS */
    ));
  }
}), Ae = /* @__PURE__ */ le(Yt, [["__scopeId", "data-v-7d02b262"]]), Zt = (r) => (qe("data-v-26d3bae5"), r = r(), Re(), r), Jt = { class: "m-loading-bar" }, Xt = /* @__PURE__ */ Zt(() => /* @__PURE__ */ C(
  "div",
  null,
  null,
  -1
  /* HOISTED */
)), xt = [
  Xt
], eo = /* @__PURE__ */ oe({
  __name: "MazLoadingBar",
  props: {
    color: { default: "primary" },
    height: { default: "0.125rem" }
  },
  setup(r) {
    Ve((b) => ({
      "4d5d421f": b.height,
      d3c0e8e8: t.value.alpha,
      ccfba46a: t.value.main
    }));
    const d = r, t = c(() => ({
      alpha: `var(--maz-color-${d.color}-alpha-20)`,
      main: `var(--maz-color-${d.color})`
    }));
    return (b, z) => (s(), g("div", Jt, xt));
  }
}), to = /* @__PURE__ */ le(eo, [["__scopeId", "data-v-26d3bae5"]]), oo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, lo = /* @__PURE__ */ C(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "m4.5 12.75 6 6 9-13.5"
  },
  null,
  -1
  /* HOISTED */
), ao = [
  lo
];
function Je(r, d) {
  return s(), g("svg", oo, [...ao]);
}
const Xe = { render: Je }, no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xe,
  render: Je
}, Symbol.toStringTag, { value: "Module" })), so = ["for", "aria-checked"], ro = ["id", "checked", "disabled", "name"], io = /* @__PURE__ */ oe({
  inheritAttrs: !1,
  __name: "MazCheckbox",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { type: [Boolean, Array], default: void 0 },
    id: { default: void 0 },
    color: { default: "primary" },
    value: { type: [String, Number, Boolean], default: void 0 },
    name: { default: "m-checkbox" },
    size: { default: "md" },
    label: { default: void 0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    /* emitted when value change */
    "update:model-value",
    /* emited when value change */
    "change"
  ],
  setup(r, { emit: d }) {
    Ve((k) => ({
      "3eedcc0a": L.value,
      a3137f46: h.value,
      "03d4fcac": T.value,
      "5778d022": w.value
    }));
    const t = r, b = d, z = Ee({
      componentName: "MazCheckbox",
      providedId: t.id
    }), m = c(
      () => typeof t.value != "boolean" && Array.isArray(t.modelValue) ? t.modelValue.includes(t.value) : typeof t.modelValue == "boolean" ? t.modelValue : !1
    ), h = c(() => {
      switch (t.size) {
        case "xl":
          return "2.25rem";
        case "lg":
          return "2rem";
        default:
          return "1.625rem";
        case "sm":
          return "1.425rem";
        case "xs":
          return "1.325rem";
        case "mini":
          return "1.2rem";
      }
    }), o = c(() => {
      switch (t.size) {
        case "xl":
          return "maz-text-2xl";
        case "lg":
          return "maz-text-xl";
        default:
          return "maz-text-lg";
        case "sm":
          return "maz-text-base";
        case "xs":
          return "maz-text-sm";
        case "mini":
          return "maz-text-xs";
      }
    }), L = c(() => `var(--maz-color-${t.color}-contrast)`), T = c(() => `var(--maz-color-${t.color})`), w = c(
      () => ["black", "transparent"].includes(t.color) ? "var(--maz-color-muted)" : `var(--maz-color-${t.color}-alpha)`
    );
    function F(k) {
      ["Space"].includes(k.code) && (k.preventDefault(), R(t.value ?? !t.modelValue));
    }
    function M(k) {
      return typeof k == "boolean" && (typeof t.modelValue == "boolean" || t.modelValue === void 0 || t.modelValue === null) ? !t.modelValue : Array.isArray(t.modelValue) && typeof k != "boolean" ? t.modelValue.includes(k) ? t.modelValue.filter((V) => V !== k) : [...t.modelValue, k] : [k];
    }
    function R(k) {
      const V = M(k);
      b("update:model-value", V), b("change", V);
    }
    return (k, V) => (s(), g("label", {
      for: v(z),
      class: B(["m-checkbox", [{ "--disabled": k.disabled }, t.class]]),
      tabindex: "0",
      style: ie(k.style),
      role: "checkbox",
      "aria-checked": m.value,
      onKeydown: F
    }, [
      C("input", Pe({
        id: v(z),
        checked: m.value
      }, k.$attrs, {
        tabindex: "-1",
        disabled: k.disabled,
        name: k.name,
        type: "checkbox",
        onChange: V[0] || (V[0] = (j) => {
          var W;
          return R(k.value ?? ((W = j == null ? void 0 : j.target) == null ? void 0 : W.checked));
        })
      }), null, 16, ro),
      C("span", null, [
        A(v(Xe), {
          class: B(["check-icon", o.value])
        }, null, 8, ["class"])
      ]),
      I(k.$slots, "default", {}, () => [
        re(
          Z(k.label),
          1
          /* TEXT */
        )
      ], !0)
    ], 46, so));
  }
}), Ke = /* @__PURE__ */ le(io, [["__scopeId", "data-v-06d3ee3a"]]), uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ke
}, Symbol.toStringTag, { value: "Module" })), xe = (r) => (qe("data-v-04b924e2"), r = r(), Re(), r), co = {
  key: 0,
  class: "m-table-header"
}, po = { class: "m-table-spacer" }, fo = { class: "m-table-header-title" }, mo = {
  key: 0,
  class: "m-table-header-search"
}, vo = { key: 0 }, bo = { key: 1 }, ho = {
  key: 0,
  class: "m-table-sort-icon-wrapper"
}, yo = { class: "maz-text-center maz-text-muted" }, go = {
  key: 1,
  class: "m-table-footer"
}, zo = /* @__PURE__ */ xe(() => /* @__PURE__ */ C(
  "div",
  { class: "m-table-spacer" },
  null,
  -1
  /* HOISTED */
)), ko = {
  key: 0,
  class: "m-table-footer-pagination"
}, $o = { class: "m-table-footer-pagination-items-per-page" }, wo = /* @__PURE__ */ xe(() => /* @__PURE__ */ C(
  "span",
  { class: "maz-hidden maz-text-sm maz-text-muted tab-s:maz-block" },
  " Item per page ",
  -1
  /* HOISTED */
)), Vo = {
  key: 0,
  class: "maz-whitespace-nowrap maz-text-sm"
}, Io = { class: "m-table-footer-pagination-buttons" }, So = /* @__PURE__ */ oe({
  __name: "MazTable",
  props: {
    tableClass: { default: void 0 },
    tableStyle: { default: void 0 },
    modelValue: { default: void 0 },
    size: { default: "md" },
    title: { default: void 0 },
    headers: { default: void 0 },
    sortable: { type: Boolean },
    headersAlign: { default: "left" },
    rows: { default: void 0 },
    hoverable: { type: Boolean },
    search: { type: Boolean },
    noSearchInRow: { type: Boolean },
    searchPlaceholder: { default: "Search" },
    noSearchBy: { type: Boolean },
    searchByPlaceholder: { default: "Search by" },
    searchByAllLabel: { default: "All" },
    searchQuery: { default: void 0 },
    backgroundOdd: { type: Boolean },
    backgroundEven: { type: Boolean },
    elevation: { type: Boolean },
    divider: { type: Boolean },
    caption: { default: void 0 },
    captionSide: { default: "bottom" },
    pagination: { type: Boolean },
    page: { default: 1 },
    pageSize: { default: 20 },
    totalPages: { default: void 0 },
    paginationAllLabel: { default: "All" },
    noPaginateRows: { type: Boolean },
    totalItems: { default: void 0 },
    loading: { type: Boolean },
    selectable: { type: Boolean },
    selectedKey: { default: void 0 },
    tableLayout: { default: void 0 },
    color: { default: "primary" }
  },
  emits: ["update:model-value", "update:search-query", "update:page", "update:page-size"],
  setup(r, { emit: d }) {
    Ve((l) => ({
      "80c1f54c": t.tableLayout,
      "472efd1f": t.captionSide
    }));
    const t = r, b = c(
      () => t.divider && !t.backgroundEven && !t.backgroundOdd
    ), z = d, { size: m, hoverable: h, backgroundEven: o, backgroundOdd: L } = rt(t);
    it("maz-table", {
      size: m,
      hoverable: h,
      backgroundEven: o,
      backgroundOdd: L
    });
    const T = E(Q()), w = c(() => t.selectable || !!t.selectedKey), F = E(t.page);
    ke(
      () => t.page,
      (l) => {
        F.value = l;
      }
    );
    const M = c({
      get: () => F.value,
      set: (l) => {
        F.value = l, z("update:page", l);
      }
    }), R = c(() => [
      { label: t.paginationAllLabel, value: Number.POSITIVE_INFINITY },
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 20, value: 20 },
      { label: 50, value: 50 },
      { label: 100, value: 100 },
      { label: 200, value: 200 }
    ]), k = E(t.pageSize);
    ke(
      () => t.pageSize,
      (l) => {
        k.value = l;
      }
    );
    const V = c({
      get: () => k.value,
      set: (l) => {
        k.value = l, z("update:page-size", l);
      }
    }), j = c(() => {
      var l;
      return t.totalPages ?? (V.value === Number.POSITIVE_INFINITY || !((l = t.rows) != null && l.length)) ? 1 : Math.ceil(t.rows.length / V.value);
    });
    function W() {
      M.value = 1;
    }
    function y() {
      M.value = j.value;
    }
    function X() {
      M.value = M.value - 1;
    }
    function ae() {
      M.value = M.value + 1;
    }
    const x = c(() => {
      if (!t.pagination || t.noPaginateRows || V.value === Number.POSITIVE_INFINITY)
        return T.value;
      const l = (F.value - 1) * V.value, $ = l + V.value;
      return T.value.slice(l, $);
    });
    ke(
      () => [t.rows, t.modelValue],
      () => {
        T.value = Q();
      }
    );
    const ee = E(), ue = c(() => [
      // eslint-disable-next-line unicorn/no-null
      { label: t.searchByAllLabel, value: null },
      ...Y.value.map((l) => ({
        label: l.label,
        value: l.key
      }))
    ]), ne = E(t.searchQuery);
    ke(
      () => t.searchQuery,
      (l) => {
        ne.value = l;
      }
    );
    const U = c({
      get: () => ne.value,
      set: (l) => {
        ne.value = l, z("update:search-query", l);
      }
    });
    function se(l) {
      return [...l].sort(($, p) => {
        if (q.value === void 0 || D.value === void 0)
          return 0;
        const K = $[Y.value[q.value].key], N = p[Y.value[q.value].key];
        return typeof K == "string" && typeof N == "string" ? D.value === "ASC" ? K.localeCompare(N) : N.localeCompare(K) : D.value === "ASC" ? K - N : N - K;
      });
    }
    function fe(l) {
      if (t.noSearchInRow || typeof U.value != "string")
        return x.value;
      const $ = U.value.toLowerCase();
      return [...l].filter((p) => ee.value ? String(p[ee.value]).toLowerCase().includes($) : Object.values(p).some((K) => typeof K == "string" || typeof K == "number" || typeof K == "boolean" ? String(K).toLowerCase().includes($) : !1));
    }
    const G = c(() => {
      const l = fe(x.value);
      return se(l);
    }), a = Le(), P = c(() => t.search || !!t.title || !!a.title), te = c(() => t.pagination), Y = E(ye());
    function ye() {
      var l;
      return ((l = t.headers) == null ? void 0 : l.map(
        ($) => typeof $ == "string" ? { label: $, align: t.headersAlign } : { align: t.headersAlign, thHeaders: $.headers, ...$ }
      )) ?? [];
    }
    function Q() {
      var l;
      return ((l = t.rows) == null ? void 0 : l.map(($) => {
        var p;
        return {
          selected: (p = t.modelValue) == null ? void 0 : p.includes(t.selectedKey ? $[t.selectedKey] : $),
          ...$
        };
      })) ?? [];
    }
    const q = E(), D = E();
    function ge(l) {
      l === q.value ? D.value = D.value === void 0 ? "DESC" : D.value === "DESC" ? "ASC" : void 0 : D.value = "DESC", q.value = D.value === void 0 ? void 0 : l;
    }
    const ze = c({
      get: () => G.value.every((l) => l.selected) ?? !1,
      set: Ie
    });
    function Ie(l) {
      for (const $ of G.value)
        $.selected = l;
      me();
    }
    function Se(l, $) {
      G.value[$].selected = l, me();
    }
    function me(l) {
      l = l ?? ve();
      const $ = l != null && l.length ? l : void 0;
      z("update:model-value", $);
    }
    function ve() {
      return G.value.filter((l) => l.selected).map((l) => t.selectedKey ? l[t.selectedKey] : l);
    }
    return Oe(() => {
      const l = ve();
      l != null && l.length && me(l);
    }), (l, $) => (s(), g(
      "div",
      {
        class: B(["m-table", { "--has-header": P.value }])
      },
      [
        P.value ? (s(), g("div", co, [
          C("div", po, [
            l.title || l.$slots.title ? I(l.$slots, "title", { key: 0 }, () => [
              C(
                "span",
                fo,
                Z(l.title),
                1
                /* TEXT */
              )
            ], !0) : u("v-if", !0)
          ]),
          l.search ? (s(), g("div", mo, [
            l.noSearchBy ? u("v-if", !0) : (s(), S(He, {
              key: 0,
              modelValue: ee.value,
              "onUpdate:modelValue": $[0] || ($[0] = (p) => ee.value = p),
              color: l.color,
              style: { width: "8rem" },
              placeholder: l.searchByPlaceholder,
              size: v(m),
              options: ue.value
            }, null, 8, ["modelValue", "color", "placeholder", "size", "options"])),
            A(Te, {
              modelValue: U.value,
              "onUpdate:modelValue": $[1] || ($[1] = (p) => U.value = p),
              size: v(m),
              color: l.color,
              placeholder: l.searchPlaceholder,
              "left-icon": v(We)
            }, null, 8, ["modelValue", "size", "color", "placeholder", "left-icon"])
          ])) : u("v-if", !0)
        ])) : u("v-if", !0),
        C(
          "table",
          {
            class: B([{ "--elevation": l.elevation, "--has-layout": l.tableLayout }, l.tableClass]),
            style: ie(l.tableStyle)
          },
          [
            l.caption || l.$slots.caption ? (s(), g("caption", vo, [
              u(`
          @slot caption - add caption on top or bottom of the table
        `),
              I(l.$slots, "caption", {}, () => [
                re(
                  Z(l.caption),
                  1
                  /* TEXT */
                )
              ], !0)
            ])) : u("v-if", !0),
            Y.value ? (s(), g("thead", bo, [
              u(`
          @slot thead - content in thead element
        `),
              I(l.$slots, "thead", {}, () => [
                A(_e, { "no-hoverable": "" }, {
                  default: O(() => [
                    w.value ? (s(), S(Ae, {
                      key: 0,
                      align: "left",
                      class: B([`--${v(m)}`, "m-table-select-column"])
                    }, {
                      default: O(() => [
                        A(Ke, {
                          modelValue: ze.value,
                          "onUpdate:modelValue": $[2] || ($[2] = (p) => ze.value = p),
                          size: "xs"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["class"])) : u("v-if", !0),
                    (s(!0), g(
                      he,
                      null,
                      we(Y.value, (p, K) => (s(), S(Ae, {
                        key: K,
                        scope: p.scope,
                        align: p.align,
                        rowspan: p.rowspan,
                        colspan: p.colspan,
                        headers: p.thHeaders,
                        style: ie({ width: p.width, textAlign: p.align }),
                        class: B(["maz-group", [
                          { "--hidden": p.hidden, "--sortable": p.sortable ?? l.sortable },
                          p.classes,
                          `--${v(m)}`
                        ]]),
                        onClick: (N) => (p.sortable ?? l.sortable) && ge(K)
                      }, {
                        default: O(() => [
                          C(
                            "span",
                            {
                              class: B({ "maz-sr-only": p.srOnly })
                            },
                            [
                              u(`
                @slot header - replace column header
                  @binding {Object} header - header data
                  @binding {String} label - header label
              `),
                              I(l.$slots, "header", {
                                header: p,
                                label: p.label
                              }, () => [
                                u(`
                    @slot header-label-{key} - replace column header label
                      @binding {Object} header - header data
                      @binding {String} label - header label
                  `),
                                I(l.$slots, `header-label-${p.key}`, {
                                  header: p,
                                  label: p.label
                                }, () => [
                                  re(
                                    Z(p.label),
                                    1
                                    /* TEXT */
                                  )
                                ], !0),
                                p.sortable ?? l.sortable ? (s(), g("div", ho, [
                                  A(v(ht), {
                                    class: B(["m-table-sort-icon maz-hidden group-hover:maz-block", {
                                      "--sorted": K === q.value,
                                      "--up": D.value === "DESC",
                                      "--down": D.value === "ASC"
                                    }])
                                  }, null, 8, ["class"])
                                ])) : u("v-if", !0)
                              ], !0)
                            ],
                            2
                            /* CLASS */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["scope", "align", "rowspan", "colspan", "headers", "style", "class", "onClick"]))),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    l.$slots.actions ? (s(), S(Ae, {
                      key: 1,
                      align: "left",
                      class: B(`--${v(m)}`)
                    }, {
                      default: O(() => [
                        u(`
                @slot actions-header - replace text of actions header
              `),
                        I(l.$slots, "actions-header", {}, () => [
                          re(" Actions ")
                        ], !0)
                      ]),
                      _: 3
                      /* FORWARDED */
                    }, 8, ["class"])) : u("v-if", !0)
                  ]),
                  _: 3
                  /* FORWARDED */
                })
              ], !0)
            ])) : u("v-if", !0),
            l.loading ? (s(), S(to, {
              key: 2,
              color: l.color,
              class: "!maz-absolute"
            }, null, 8, ["color"])) : u("v-if", !0),
            C(
              "tbody",
              {
                class: B({ "--divider": b.value })
              },
              [
                I(l.$slots, "default", {}, () => [
                  G.value.length > 0 ? (s(!0), g(
                    he,
                    { key: 0 },
                    we(G.value, (p, K) => (s(), S(_e, {
                      key: K,
                      class: B(p.classes),
                      onClick: (N) => p.action && p.action(p)
                    }, {
                      default: O(() => [
                        w.value ? (s(), S(
                          $e,
                          {
                            key: 0,
                            class: "m-table-select-column"
                          },
                          {
                            default: O(() => [
                              u(`
                  @slot select - replace checkbox component
                    @binding {Object} row - row data
                    @binding {Boolean} selected - if selected or not
                `),
                              I(l.$slots, "select", {
                                row: p,
                                selected: p.selected
                              }, () => [
                                A(Ke, {
                                  size: "xs",
                                  "model-value": p.selected,
                                  "onUpdate:modelValue": (N) => Se(N, K)
                                }, null, 8, ["model-value", "onUpdate:modelValue"])
                              ], !0)
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        )) : u("v-if", !0),
                        (s(!0), g(
                          he,
                          null,
                          we(Y.value, ({ key: N, align: e, classes: n }, f) => (s(), S($e, {
                            key: f,
                            align: e,
                            class: B(n)
                          }, {
                            default: O(() => [
                              u(`
                  @slot cell - replace all row cells
                    @binding {Object} row - row data
                    @binding {Boolean} value - cell value
                `),
                              N ? I(l.$slots, "cell", {
                                key: 0,
                                row: p,
                                value: p[N]
                              }, () => [
                                u(`
                    @slot cell-{key} - replace row cells of column
                      @binding {Object} row - row data
                      @binding {Boolean} value - cell value
                  `),
                                I(l.$slots, `cell-${N}`, {
                                  row: p,
                                  value: p[N]
                                }, () => [
                                  re(
                                    Z(p[N]),
                                    1
                                    /* TEXT */
                                  )
                                ], !0)
                              ], !0) : u("v-if", !0)
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["align", "class"]))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        l.$slots.actions ? (s(), S(
                          $e,
                          { key: 1 },
                          {
                            default: O(() => [
                              u(`
                  @slot actions - will add actions column
                    @binding {Object} row - row data
                `),
                              I(l.$slots, "actions", { row: p }, void 0, !0)
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        )) : u("v-if", !0)
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["class", "onClick"]))),
                    128
                    /* KEYED_FRAGMENT */
                  )) : (s(), S(_e, { key: 1 }, {
                    default: O(() => [
                      A($e, {
                        colspan: Y.value.length + (w.value ? 1 : 0) + (l.$slots.actions ? 1 : 0)
                      }, {
                        default: O(() => [
                          u(`
                  @slot no-results - replace no results
                `),
                          I(l.$slots, "no-results", {}, () => [
                            C("p", yo, [
                              u(`
                      @slot no-results-text - replace no results test only
                    `),
                              I(l.$slots, "no-results-text", {}, () => [
                                re(" No results ")
                              ], !0)
                            ])
                          ], !0)
                        ]),
                        _: 3
                        /* FORWARDED */
                      }, 8, ["colspan"])
                    ]),
                    _: 3
                    /* FORWARDED */
                  }))
                ], !0)
              ],
              2
              /* CLASS */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        te.value ? (s(), g("div", go, [
          zo,
          l.pagination ? (s(), g("div", ko, [
            C("div", $o, [
              wo,
              A(He, {
                modelValue: V.value,
                "onUpdate:modelValue": $[3] || ($[3] = (p) => V.value = p),
                options: R.value,
                size: v(m),
                color: l.color,
                "list-position": "top",
                style: { width: "5rem" }
              }, null, 8, ["modelValue", "options", "size", "color"])
            ]),
            j.value ? (s(), g(
              "span",
              Vo,
              Z(M.value) + " - " + Z(G.value.length) + " of " + Z(j.value),
              1
              /* TEXT */
            )) : u("v-if", !0),
            C("div", Io, [
              A(be, {
                disabled: M.value === 1,
                size: v(m),
                color: "transparent",
                fab: "",
                "no-elevation": "",
                onClick: W
              }, {
                default: O(() => [
                  A(v(De), { class: "maz-text-base" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled", "size"]),
              A(be, {
                disabled: M.value === 1,
                size: v(m),
                color: "transparent",
                fab: "",
                "no-elevation": "",
                onClick: X
              }, {
                default: O(() => [
                  A(v(je), { class: "maz-text-base" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled", "size"]),
              A(be, {
                disabled: M.value === j.value,
                size: v(m),
                color: "transparent",
                fab: "",
                "no-elevation": "",
                onClick: ae
              }, {
                default: O(() => [
                  A(v(je), { class: "maz-rotate-180 maz-text-base" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled", "size"]),
              A(be, {
                disabled: M.value === j.value,
                size: v(m),
                color: "transparent",
                fab: "",
                "no-elevation": "",
                onClick: y
              }, {
                default: O(() => [
                  A(v(De), { class: "maz-rotate-180 maz-text-base" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled", "size"])
            ])
          ])) : u("v-if", !0)
        ])) : u("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}), Co = /* @__PURE__ */ le(So, [["__scopeId", "data-v-04b924e2"]]);
export {
  Co as M,
  le as _,
  Ne as i
};

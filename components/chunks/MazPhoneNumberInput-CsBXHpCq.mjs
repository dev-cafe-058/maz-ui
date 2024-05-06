import '../assets/MazPhoneNumberInput.css';
import { getCurrentInstance as We, computed as y, defineComponent as ae, defineAsyncComponent as j, ref as P, onMounted as ge, useSlots as Qe, openBlock as z, createElementBlock as T, normalizeClass as N, normalizeStyle as te, createElementVNode as W, createCommentVNode as h, renderSlot as R, createBlock as O, unref as F, resolveDynamicComponent as Se, withDirectives as Fe, mergeProps as ue, toHandlers as Ge, vModelDynamic as Je, createTextVNode as ve, toDisplayString as X, withModifiers as oe, withCtx as Q, createVNode as J, useCssVars as Ze, onBeforeMount as Xe, nextTick as ne, Transition as xe, Fragment as ke, renderList as _e, inject as eo, mergeModels as Ie, useModel as oo, provide as to, watch as fe } from "vue";
import { getCountries as Le, getCountryCallingCode as se, isSupportedCountry as lo, parsePhoneNumberFromString as no, AsYouType as ao, getExampleNumber as ro } from "libphonenumber-js";
function so(n, l) {
  let t;
  return function(...d) {
    clearTimeout(t), t = setTimeout(() => {
      n.apply(this, d);
    }, l);
  };
}
function be({
  componentName: n,
  providedId: l
}) {
  const t = We();
  return y(() => l ?? `${n}-${t == null ? void 0 : t.uid}`);
}
const uo = {
  key: 0,
  class: "m-input-wrapper-left"
}, io = { class: "m-input-wrapper-input" }, co = ["id", "type", "name", "inputmode", "placeholder", "aria-label", "disabled", "readonly", "required"], fo = { key: 0 }, po = {
  key: 1,
  class: "m-input-wrapper-right"
}, mo = /* @__PURE__ */ ae({
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
    const t = j(() => import("./MazBtn-Dnq16gKt.mjs")), d = j(() => import("./MazIcon-BfD79t7M.mjs")), v = j(() => import("./eye-slash-tjfxO0LK.mjs")), p = j(() => import("./eye-DqO_Jx56.mjs")), g = j(() => import("./check-7UA4j2f2.mjs")), o = n, k = l, L = P(!1), m = P(!1), V = P(), s = be({
      componentName: "MazInput",
      providedId: o.id
    });
    ge(() => {
      var r;
      o.autoFocus && ((r = V.value) == null || r.focus());
    });
    const f = y(() => o.type === "password"), C = y(() => L.value ? "text" : o.type), I = y(() => {
      if (!o.noBorder) {
        if (o.error)
          return "maz-border-danger";
        if (o.success)
          return "maz-border-success";
        if (o.warning)
          return "maz-border-warning";
        if (m.value || o.borderActive) {
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
    }), Y = Qe(), b = y(() => {
      const { required: r, placeholder: A } = o;
      if (A)
        return r ? `${A} *` : A;
    }), $ = y(() => U.value !== void 0 && U.value !== ""), w = so(
      (r) => {
        k("update:model-value", r);
      },
      typeof o.debounce == "number" ? o.debounce : o.debounceDelay ?? 500
    ), D = (r) => {
      if (o.debounce)
        return w(r);
      k("update:model-value", r);
    }, U = y({
      get: () => o.modelValue,
      set: (r) => D(r)
    }), G = y(() => (!!o.label || !!o.hint) && (m.value || !!$.value || !!o.placeholder || ["date", "month", "week"].includes(o.type))), a = y(() => !!o.label || !!o.hint);
    function B() {
      return !!Y["right-icon"] || f.value || !!Y["valid-button"] || o.validButton || !!o.rightIcon;
    }
    function E() {
      return !!Y["left-icon"] || !!o.leftIcon;
    }
    function M(r) {
      k("focus", r), m.value = !0;
    }
    function q(r) {
      k("blur", r), m.value = !1;
    }
    function le(r) {
      return k("change", r);
    }
    return (r, A) => (z(), T(
      "div",
      {
        class: N(["m-input", [
          {
            "--is-focused": m.value || r.borderActive,
            "--should-up": G.value,
            "--has-label": a.value,
            "--is-disabled": r.disabled,
            "--is-readonly": r.readonly,
            "--has-z-2": r.error || r.warning || r.success,
            "--has-state": r.error || r.warning || r.success,
            "--block": r.block
          },
          o.class,
          `--${r.color}`,
          `--${r.size}`
        ]]),
        style: te(r.style)
      },
      [
        W(
          "div",
          {
            class: N(["m-input-wrapper", [
              r.inputClasses,
              I.value,
              r.roundedSize ? `--rounded-${r.roundedSize}` : { "maz-rounded": !r.noRadius }
            ]])
          },
          [
            E() ? (z(), T("div", uo, [
              h(`
          @slot left-icon - The icon to display on the left of the input
        `),
              r.$slots["left-icon"] || r.leftIcon ? R(r.$slots, "left-icon", { key: 0 }, () => [
                typeof r.leftIcon == "string" ? (z(), O(F(d), {
                  key: 0,
                  name: r.leftIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : r.leftIcon ? (z(), O(Se(r.leftIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : h("v-if", !0)
              ], !0) : h("v-if", !0)
            ])) : h("v-if", !0),
            W("div", io, [
              Fe(W("input", ue({
                id: F(s),
                ref_key: "input",
                ref: V,
                "onUpdate:modelValue": A[0] || (A[0] = (Z) => U.value = Z),
                type: C.value,
                name: r.name
              }, r.$attrs, {
                inputmode: r.inputmode,
                placeholder: b.value,
                "aria-label": r.label || r.placeholder,
                disabled: r.disabled,
                readonly: r.readonly,
                required: r.required,
                class: "m-input-input"
              }, Ge({
                blur: q,
                focus: M,
                change: le
              }, !0), {
                onClick: A[1] || (A[1] = (Z) => r.$emit("click", Z))
              }), null, 16, co), [
                [Je, U.value]
              ]),
              r.label || r.hint ? (z(), T(
                "span",
                {
                  key: 0,
                  ref: "label",
                  class: N(["m-input-label", [
                    {
                      "maz-text-danger-600": r.error,
                      "maz-text-success-600": r.success,
                      "maz-text-warning-600": r.warning
                    }
                  ]])
                },
                [
                  ve(
                    X(r.hint || r.label) + " ",
                    1
                    /* TEXT */
                  ),
                  r.required ? (z(), T("sup", fo, "*")) : h("v-if", !0)
                ],
                2
                /* CLASS */
              )) : h("v-if", !0)
            ]),
            B() ? (z(), T("div", po, [
              h(`
          @slot right-icon - The icon to display on the right of the input
        `),
              r.$slots["right-icon"] || r.rightIcon ? R(r.$slots, "right-icon", { key: 0 }, () => [
                typeof r.rightIcon == "string" ? (z(), O(F(d), {
                  key: 0,
                  name: r.rightIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : r.rightIcon ? (z(), O(Se(r.rightIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : h("v-if", !0)
              ], !0) : h("v-if", !0),
              f.value ? (z(), O(F(t), {
                key: 1,
                color: "transparent",
                tabindex: "-1",
                size: "mini",
                onClick: A[2] || (A[2] = oe((Z) => L.value = !L.value, ["stop"]))
              }, {
                default: Q(() => [
                  L.value ? (z(), O(F(v), {
                    key: 0,
                    class: "maz-text-xl maz-text-muted"
                  })) : (z(), O(F(p), {
                    key: 1,
                    class: "maz-text-xl maz-text-muted"
                  }))
                ]),
                _: 1
                /* STABLE */
              })) : h("v-if", !0),
              h(`
          @slot valid-button - Replace the valid button by your own
        `),
              r.$slots["valid-button"] || r.validButton ? R(r.$slots, "valid-button", { key: 2 }, () => [
                J(F(t), {
                  color: "transparent",
                  disabled: r.disabled,
                  tabindex: "-1",
                  loading: r.validButtonLoading,
                  class: "m-input-valid-button",
                  size: "mini",
                  type: "submit"
                }, {
                  default: Q(() => [
                    J(F(g), { class: "maz-text-2xl maz-text-normal" })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "loading"])
              ], !0) : h("v-if", !0)
            ])) : h("v-if", !0)
          ],
          2
          /* CLASS */
        )
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), re = (n, l) => {
  const t = n.__vccOpts || n;
  for (const [d, v] of l)
    t[d] = v;
  return t;
}, he = /* @__PURE__ */ re(mo, [["__scopeId", "data-v-b2106d63"]]);
let pe = null;
function yo(n, l) {
  pe && clearTimeout(pe), pe = setTimeout(n, l);
}
function vo(n, l) {
  const t = n.length, d = l.length, v = [];
  for (let p = 0; p <= t; p++)
    v[p] = [p];
  for (let p = 0; p <= d; p++)
    v[0][p] = p;
  for (let p = 1; p <= t; p++)
    for (let g = 1; g <= d; g++) {
      const o = n[p - 1] === l[g - 1] ? 0 : 1;
      v[p][g] = Math.min(
        v[p - 1][g] + 1,
        v[p][g - 1] + 1,
        v[p - 1][g - 1] + o
      );
    }
  return v[t][d];
}
function $e(n) {
  return n.normalize("NFD").replaceAll(/[\u0300-\u036F]/g, "").toLowerCase();
}
function Ae(n, l) {
  const t = vo(n, l), d = Math.max(n.length, l.length);
  return 1 - t / d;
}
function ho(n, l, t = 0.75) {
  return Ae(n, l) >= t;
}
function me(n, l, t = 0.75) {
  const d = y(
    () => $e(typeof n == "string" ? n : n.value)
  ), v = y(
    () => $e(typeof l == "string" ? l : l.value)
  ), p = y(() => typeof t == "number" ? t : t.value), g = y(() => Ae(d.value, v.value));
  return {
    isMatching: y(
      () => ho(d.value, v.value, p.value)
    ),
    score: g
  };
}
const Ee = (n, l, t) => {
  var g;
  n.stopPropagation();
  const d = typeof t.value == "function" ? t.value : t.value.handler, v = typeof t.value == "object" ? t.value.exclude : void 0;
  let p = !1;
  if (v && v.length > 0) {
    for (const o of v)
      if (!p && n.target instanceof HTMLElement) {
        const k = (g = document.querySelector(o)) == null ? void 0 : g.getAttribute("id");
        p = n.target.getAttribute("id") === k;
      }
  }
  !l.contains(n.target) && !p && (d == null || d());
};
function Te() {
  return document.ontouchstart === null ? "touchstart" : "click";
}
function go(n, l) {
  const t = Te();
  document.removeEventListener(t, (d) => Ee(d, n, l));
}
function bo(n, l) {
  if (typeof l.value != "function" && typeof l.value == "object" && typeof l.value.handler != "function") {
    console.error("[maz-ui](vClosable) v-closable directive requires a handler function");
    return;
  }
  const t = Te();
  document.addEventListener(t, (d) => Ee(d, n, l));
}
const zo = {
  mounted: bo,
  unmounted: go
}, Co = ["aria-label"], Vo = { class: "m-select-list__no-results" }, wo = {
  key: 2,
  class: "m-select-list__scroll-wrapper",
  tabindex: "-1"
}, So = { class: "m-select-list-optgroup" }, ko = ["onClick"], Io = /* @__PURE__ */ ae({
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
  setup(n, { expose: l, emit: t }) {
    Ze((e) => ({
      "417b570e": C.value,
      "16c577f8": s.value,
      "081fe860": f.value
    }));
    const d = j(() => import("./MazCheckbox-C1O-MBZa.mjs")), v = j(() => import("./magnifying-glass-DZGg7953.mjs")), p = j(() => import("./chevron-down-CzMH-gFW.mjs")), g = j(() => import("./no-symbol-QAqP9IlR.mjs"));
    l({
      /** Method to open the option list */
      openList: _,
      /** Method to close the option list */
      closeList: x
    });
    const o = n, k = t, L = P(!1), m = P(), V = y(
      () => ["black", "transparent", "white"].includes(o.color)
    ), s = y(
      () => V.value ? "var(--maz-color-black)" : `var(--maz-color-${o.color}-800)`
    ), f = y(
      () => V.value ? "var(--maz-color-muted)" : `var(--maz-color-${o.color}-100)`
    ), C = y(
      () => V.value ? "var(--maz-color-muted)" : `var(--maz-color-${o.color}-200)`
    ), I = y(() => L.value || o.open), Y = be({
      componentName: "MazSelect",
      providedId: o.id
    });
    function b(e) {
      return {
        [o.optionValueKey]: e,
        [o.optionLabelKey]: e,
        [o.optionInputValueKey]: e
      };
    }
    function $(e) {
      return {
        ...e,
        [o.optionValueKey]: e[o.optionValueKey],
        [o.optionLabelKey]: e[o.optionLabelKey],
        [o.optionInputValueKey]: e[o.optionInputValueKey]
      };
    }
    const w = y(() => {
      var u;
      const e = [];
      if (!((u = o.options) != null && u.length))
        return [];
      for (const c of o.options)
        typeof c == "string" || typeof c == "number" || typeof c == "boolean" ? e.push(b(c)) : typeof c == "object" && "options" in c && Array.isArray(c.options) ? e.push(
          { label: c.label, isOptGroup: !0 },
          ...c.options.map(
            (i) => typeof i == "string" || typeof i == "number" || typeof i == "boolean" ? b(i) : $(i)
          )
        ) : e.push($(c));
      return e;
    }), D = y(
      () => {
        var e;
        return ((e = w.value) == null ? void 0 : e.filter((u) => o.multiple ? Array.isArray(o.modelValue) ? o.modelValue.includes(u[o.optionValueKey]) && !E(u[o.optionValueKey]) : !1 : o.modelValue === u[o.optionValueKey] && !E(u[o.optionValueKey]))) ?? [];
      }
    );
    Xe(() => {
      var e;
      (e = o.options) != null && e.length || console.warn("[maz-ui](MazSelect) you must provide options"), ce();
    });
    const U = P(), G = P(), a = P(), B = P(), E = (e) => e == null;
    function M(e) {
      var c;
      return (((c = D.value) == null ? void 0 : c.some(
        (i) => i[o.optionValueKey] === e[o.optionValueKey]
      )) ?? !1) && !E(e[o.optionValueKey]);
    }
    const q = y(() => {
      var u;
      if (o.multiple && o.modelValue && Array.isArray(o.modelValue))
        return o.modelValue.map(
          (c) => {
            var i, S;
            return (S = (i = w.value) == null ? void 0 : i.find((K) => K[o.optionValueKey] === c)) == null ? void 0 : S[o.optionInputValueKey];
          }
        ).join(", ");
      const e = (u = w.value) == null ? void 0 : u.find(
        (c) => c[o.optionValueKey] === o.modelValue
      );
      return E(o.modelValue) || e == null ? void 0 : e[o.optionInputValueKey];
    }), le = y(
      () => o.listPosition.includes("bottom") ? "maz-slide" : "maz-slideinvert"
    ), r = P(""), A = P("");
    function Z(e) {
      return e.normalize("NFD").replaceAll(/[\u0300-\u036F]/g, "").replaceAll(/[^\dA-Za-z\u0400-\u04FF]/g, "");
    }
    const ie = (e, u) => u && e && Z(e.toString().toLocaleLowerCase().trim()).includes(
      Z(u.toLocaleLowerCase().trim())
    );
    function ze(e) {
      var u;
      return e ? (u = w.value) == null ? void 0 : u.filter((c) => {
        const i = c[o.optionLabelKey], S = c[o.optionValueKey], K = c[o.optionInputValueKey];
        return ie(i, e) || ie(K, e) || ie(S, e) || typeof i == "string" && me(i, e).isMatching.value || typeof K == "string" && me(K, e).isMatching.value || typeof S == "string" && me(S, e).isMatching.value;
      }) : w.value;
    }
    const H = y(() => ze(r.value));
    async function x(e) {
      var c, i;
      if (!I.value)
        return;
      if (e && ("relatedTarget" in e && ((c = U.value) != null && c.contains(e.relatedTarget)) || e.type === "keydown"))
        return e.preventDefault();
      const u = e && "relatedTarget" in e && e.relatedTarget instanceof HTMLElement && e.relatedTarget.getAttribute("id");
      if ((i = o.excludeSelectors) != null && i.includes(`#${u}`))
        return e == null ? void 0 : e.preventDefault();
      await ne(), L.value = !1, m.value = 0, k("close", e);
    }
    async function _(e) {
      o.disabled || I.value || (e == null || e.preventDefault(), L.value = !0, await de(), k("focus", e), k("open", L.value));
    }
    function Ce() {
      var e, u;
      (u = ((e = G.value) == null ? void 0 : e.$el).querySelector("input")) == null || u.focus();
    }
    function Ue(e) {
      L.value ? x(e) : Ce();
    }
    function Oe(e) {
      var u, c;
      r.value = e, (c = ((u = a.value) == null ? void 0 : u.$el).querySelector("input")) == null || c.focus();
    }
    function Ye(e) {
      var c;
      e === "Backspace" && A.value.length > 0 ? A.value = A.value.slice(0, -1) : A.value += e;
      const u = ze(A.value);
      u != null && u.length && (m.value = (c = H.value) == null ? void 0 : c.findIndex(
        (i) => i[o.optionValueKey] === u[0][o.optionValueKey]
      ), typeof m.value == "number" && m.value >= 0 && de(m.value)), yo(() => {
        A.value = "";
      }, 1e3);
    }
    const qe = (e) => {
      const u = e.key;
      /^[\dA-Za-z\u0400-\u04FF]$/.test(u) ? (e.preventDefault(), _(e), o.search ? Oe(u) : Ye(u)) : Ve(e);
    }, Ve = (e) => {
      const u = e.code, c = ["ArrowUp", "ArrowDown"].includes(u), i = ["Enter"].includes(u), S = u === "Escape" && I.value;
      c ? He(e, m.value) : i ? je(e, m.value) : S && x(e);
    }, He = (e, u) => {
      var S;
      e.preventDefault();
      const c = e.code;
      I.value || _(e);
      const i = (S = H.value) == null ? void 0 : S.length;
      i && (typeof u == "number" ? u === i - 1 && c === "ArrowDown" ? m.value = 0 : u === 0 && c === "ArrowUp" ? m.value = i - 1 : m.value = c === "ArrowDown" ? u + 1 : u - 1 : m.value = c === "ArrowDown" ? 0 : i - 1, de(m.value));
    }, je = (e, u) => {
      var i, S, K;
      if (e.preventDefault(), !I.value)
        return _(e);
      const c = u ? ((i = H.value) == null ? void 0 : i[u]) ?? ((S = H.value) == null ? void 0 : S[0]) : (K = H.value) == null ? void 0 : K[0];
      E(c) || we(c);
    };
    async function de(e) {
      var c, i;
      await ne(), typeof e != "number" && ce();
      const u = e ?? m.value;
      typeof u == "number" && u >= 0 && ((i = (c = B.value) == null ? void 0 : c.querySelectorAll(".m-select-list-item")[u]) == null || i.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "start"
      }));
    }
    function ce(e) {
      var c;
      const u = (c = H.value) == null ? void 0 : c.findIndex((i) => {
        var S, K;
        return o.multiple && Array.isArray(o.modelValue) ? e ? e[o.optionValueKey] === i[o.optionValueKey] : [...o.modelValue].reverse()[0] === i[o.optionValueKey] : ((K = (S = D.value) == null ? void 0 : S[0]) == null ? void 0 : K[o.optionValueKey]) === i[o.optionValueKey];
      });
      m.value = u && u >= 0 ? u : 0;
    }
    function we(e, u = !0) {
      var K;
      u && !o.multiple && ne(() => x()), r.value = "";
      const c = (K = D.value) == null ? void 0 : K.some(
        (ee) => ee[o.optionValueKey] === e[o.optionValueKey]
      );
      let i = D.value;
      c && o.multiple ? i = i == null ? void 0 : i.filter(
        (ee) => ee[o.optionValueKey] !== e[o.optionValueKey]
      ) : o.multiple ? i.push(e) : i = [e];
      const S = i.map((ee) => ee[o.optionValueKey]);
      k("update:model-value", o.multiple ? S : S[0]), k("selected-option", e), ce(e), Ce();
    }
    return (e, u) => {
      var c;
      return Fe((z(), T(
        "div",
        {
          ref_key: "mazSelectElement",
          ref: U,
          class: N(["m-select", [
            { "--is-open": I.value, "--disabled": e.disabled, "--block": e.block },
            o.class,
            `--${e.size}`
          ]]),
          style: te(e.style)
        },
        [
          J(he, ue({
            id: F(Y),
            ref_key: "mazInputComponent",
            ref: G,
            class: "m-select-input"
          }, e.$attrs, {
            required: e.required,
            "border-active": L.value,
            color: e.color,
            "model-value": q.value,
            autocomplete: "off",
            size: e.size,
            block: "",
            disabled: e.disabled,
            onFocus: oe(_, ["prevent", "stop"]),
            onBlur: oe(x, ["prevent", "stop"]),
            onClick: oe(_, ["prevent", "stop"]),
            onChange: u[0] || (u[0] = (i) => k("change", i)),
            onKeydown: qe
          }), {
            "right-icon": Q(() => [
              W("button", {
                tabindex: "-1",
                type: "button",
                class: "m-select-input__toggle-button maz-custom",
                "aria-label": `${I.value ? "collapse" : "expand"} list of options`,
                onClick: oe(Ue, ["stop"])
              }, [
                J(F(p), { class: "m-select-chevron maz-text-xl" })
              ], 8, Co)
            ]),
            _: 1
            /* STABLE */
          }, 16, ["id", "required", "border-active", "color", "model-value", "size", "disabled"]),
          J(xe, { name: le.value }, {
            default: Q(() => [
              I.value ? (z(), T(
                "div",
                {
                  key: 0,
                  ref_key: "optionsListElement",
                  ref: B,
                  class: N(["m-select-list", {
                    "--top": e.listPosition.includes("top"),
                    "--left": e.listPosition.includes("left"),
                    "--right": e.listPosition.includes("right"),
                    "--bottom": e.listPosition.includes("bottom")
                  }]),
                  style: te({
                    maxHeight: `${e.maxListHeight}px`,
                    maxWidth: `${e.maxListWidth}px`
                  })
                },
                [
                  e.search ? (z(), O(he, {
                    key: 0,
                    ref_key: "searchInputComponent",
                    ref: a,
                    modelValue: r.value,
                    "onUpdate:modelValue": [
                      u[1] || (u[1] = (i) => r.value = i),
                      u[2] || (u[2] = (i) => m.value = 0)
                    ],
                    size: "sm",
                    color: e.color,
                    placeholder: e.searchPlaceholder,
                    name: "search",
                    autocomplete: "off",
                    tabindex: "-1",
                    class: "m-select-list__search-input maz-flex-none",
                    "left-icon": F(v),
                    onKeydown: Ve
                  }, null, 8, ["modelValue", "color", "placeholder", "left-icon"])) : h("v-if", !0),
                  h(`
          @slot No results slot - Displayed when no results corresponding with search query
        `),
                  !H.value || H.value.length <= 0 ? R(e.$slots, "no-results", { key: 1 }, () => [
                    W("span", Vo, [
                      J(F(g), { class: "maz-h-6 maz-w-6 maz-text-normal" })
                    ])
                  ], !0) : (z(), T("div", wo, [
                    (z(!0), T(
                      ke,
                      null,
                      _e(H.value, (i, S) => (z(), T(
                        ke,
                        { key: S },
                        [
                          h(`
              @slot Custom optgroup label
                @binding {String} label - the label of the optgroup
            `),
                          i.label && i.isOptGroup ? R(e.$slots, "optgroup", {
                            key: 0,
                            label: i.label
                          }, () => [
                            W(
                              "span",
                              So,
                              X(i.label),
                              1
                              /* TEXT */
                            )
                          ], !0) : (z(), T("button", {
                            key: 1,
                            tabindex: "-1",
                            type: "button",
                            class: N(["m-select-list-item maz-custom maz-flex-none", [
                              {
                                "--is-keyboard-selected": m.value === S,
                                "--is-selected": M(i),
                                "--is-none-value": E(i[e.optionValueKey])
                              }
                            ]]),
                            style: te(e.itemHeight ? { height: `${e.itemHeight}px` } : void 0),
                            onClick: oe((K) => we(i), ["prevent", "stop"])
                          }, [
                            e.multiple ? (z(), O(F(d), {
                              key: 0,
                              tabindex: "-1",
                              "model-value": M(i),
                              size: "sm",
                              color: e.color
                            }, null, 8, ["model-value", "color"])) : h("v-if", !0),
                            h(`
                @slot Custom option
                  @binding {Object} option - the option object
                  @binding {Boolean} is-selected - if the option is selected
              `),
                            R(e.$slots, "default", {
                              option: i,
                              isSelected: M(i)
                            }, () => [
                              W(
                                "span",
                                null,
                                X(i[e.optionLabelKey]),
                                1
                                /* TEXT */
                              )
                            ], !0)
                          ], 14, ko))
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
              )) : h("v-if", !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["name"])
        ],
        6
        /* CLASS, STYLE */
      )), [
        [F(zo), {
          exclude: (c = e.excludeSelectors) != null && c.length ? e.excludeSelectors : [],
          handler: x
        }]
      ]);
    };
  }
}), $o = /* @__PURE__ */ re(Io, [["__scopeId", "data-v-8441f9de"]]);
function Me(n) {
  return !!n;
}
function Be(n) {
  return [...n].map((l) => {
    const t = l.codePointAt(0);
    return t ? t % 32 + 127461 : void 0;
  }).filter(Me).map((l) => String.fromCodePoint(l)).join("");
}
function Ke() {
  if (typeof window > "u")
    return;
  const n = window.navigator.language;
  if (!n)
    return;
  let l = n.slice(3, 7).toUpperCase();
  return l === "" && (l = n.slice(0, 2).toUpperCase()), l === "EN" && (l = "US"), l === "JA" && (l = "JP"), {
    locale: l,
    browserLocale: n
  };
}
let ye, Pe;
function Bo(n, l, t) {
  return t != null && t[l] ? t[l] : ((Pe !== n || !ye) && (Pe = n, ye = new Intl.DisplayNames([n], { type: "region" })), ye.of(l));
}
function Po(n, l) {
  var v;
  const t = [], d = Le();
  n = n ?? ((v = Ke()) == null ? void 0 : v.browserLocale) ?? "en-US";
  for (const p of d) {
    const g = Bo(n, p, l);
    if (g)
      try {
        const o = se(p);
        t.push({
          iso2: p,
          dialCode: o,
          name: g
        });
      } catch (o) {
        console.error(`[MazPhoneNumberInput](getCountryCallingCode) ${o}`);
      }
  }
  return t;
}
async function Fo() {
  try {
    const n = await fetch("https://ipwho.is"), { country_code: l } = await n.json();
    return l;
  } catch (n) {
    throw new Error(`[MazPhoneNumberInput](fetchCountryCode) ${n}`);
  }
}
function Lo(n) {
  if (!n)
    return "";
  const l = new RegExp(/[^\d ()+-]/g);
  return n.replaceAll(l, "").trim();
}
function Ne() {
  return {
    sanitizePhoneNumber: Lo,
    fetchCountryCode: Fo,
    getBrowserLocale: Ke,
    getCountriesList: Po
  };
}
function Re(n, l) {
  const t = eo(n, l);
  if (!t)
    throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${n}`);
  return t;
}
const Ao = ["id"], Eo = {
  key: 0,
  class: "maz-text-lg"
}, To = /* @__PURE__ */ ae({
  __name: "CountrySelector",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { default: void 0 },
    id: {},
    color: {},
    size: {},
    preferredCountries: { default: void 0 },
    ignoredCountries: { default: void 0 },
    onlyCountries: { default: void 0 },
    customCountriesList: { default: void 0 },
    locales: {},
    listPosition: { default: "bottom left" },
    noFlags: { type: Boolean },
    noSearch: { type: Boolean },
    disabled: { type: Boolean },
    showCodeOnList: { type: Boolean },
    countryLocale: { default: void 0 },
    success: { type: Boolean },
    error: { type: Boolean },
    countrySelectorDisplayName: { type: Boolean },
    width: { default: "9rem" },
    excludeSelectors: { default: void 0 }
  },
  emits: ["update:model-value"],
  setup(n) {
    const l = n, { phoneNumber: t } = Re("data"), d = P(), { getCountriesList: v } = Ne(), p = y(() => v(l.countryLocale, l.customCountriesList)), g = y(
      () => {
        var s;
        return (s = p.value) == null ? void 0 : s.filter((f) => {
          var C;
          return !((C = l.ignoredCountries) != null && C.includes(f.iso2));
        });
      }
    ), o = y(() => {
      const s = l.onlyCountries || l.preferredCountries;
      return s == null ? void 0 : s.map(
        (f) => {
          var C;
          return (C = g.value) == null ? void 0 : C.find((I) => I.iso2.includes(f));
        }
      );
    }), k = y(
      () => {
        var s;
        return (s = g.value) == null ? void 0 : s.filter((f) => {
          var C;
          return !((C = l.preferredCountries) != null && C.includes(f.iso2));
        });
      }
    ), L = y(
      () => l.preferredCountries ? [...o.value ?? [], ...k.value ?? []] : l.onlyCountries ? o.value : g.value
    ), m = y(
      () => {
        var s;
        return (s = L.value) == null ? void 0 : s.map(
          (f) => f ? {
            ...f,
            dialCode: `+${f.dialCode}`
          } : void 0
        ).filter(Me);
      }
    );
    async function V() {
      var s, f;
      (f = (s = d.value) == null ? void 0 : s.$el.querySelector("input")) == null || f.focus();
    }
    return (s, f) => (z(), T(
      "div",
      {
        class: N(["m-country-selector", [l.class, { "--no-flags": s.noFlags }]]),
        style: te(s.style)
      },
      [
        s.modelValue && !s.noFlags ? (z(), T("button", {
          key: 0,
          id: `country-selector-flag-button-${s.id}`,
          class: N(["m-country-selector__country-flag maz-text-xl", {
            "--should-have-bottom-flag": s.locales.countrySelector.placeholder.length > 0
          }]),
          tabindex: "-1",
          type: "button",
          onClick: V
        }, [
          h(`
        @slot Country selector flag
          @binding {String} country-code - current selected country code - Ex: \`"FR"\`
      `),
          R(s.$slots, "selector-flag", { countryCode: s.modelValue }, () => [
            ve(
              X(F(Be)(s.modelValue)),
              1
              /* TEXT */
            )
          ], !0)
        ], 10, Ao)) : h("v-if", !0),
        J($o, ue({
          id: `country-selector-${s.id}`,
          ref_key: "CountrySelectorRef",
          ref: d,
          "model-value": s.modelValue
        }, s.$attrs, {
          class: "m-country-selector__select",
          "option-value-key": "iso2",
          "option-label-key": "name",
          "option-input-value-key": s.countrySelectorDisplayName ? "name" : "dialCode",
          "max-list-width": 250,
          disabled: s.disabled,
          color: s.color,
          size: s.size,
          error: s.error,
          "list-position": s.listPosition,
          "item-height": 38,
          success: s.success,
          search: !s.noSearch,
          "search-placeholder": s.locales.countrySelector.searchPlaceholder,
          options: m.value,
          hint: F(t) && !s.modelValue ? s.locales.countrySelector.error : void 0,
          label: s.locales.countrySelector.placeholder,
          style: {
            width: s.width
          },
          "exclude-selectors": [`#country-selector-flag-button-${s.id}`, ...s.excludeSelectors ?? []],
          "onUpdate:modelValue": f[0] || (f[0] = (C) => s.$emit("update:model-value", C))
        }), {
          "no-results": Q(() => [
            R(s.$slots, "no-results", {}, void 0, !0)
          ]),
          default: Q(({ option: C, isSelected: I }) => [
            W(
              "div",
              {
                class: N(["m-country-selector__select__item maz-flex maz-items-center maz-gap-1 maz-truncate", {
                  "m-country-selector__select__item--selected": I
                }])
              },
              [
                !s.noFlags && typeof C.iso2 == "string" ? (z(), T("span", Eo, [
                  h(`
              @slot Country list flag
                @binding {String} country-code - country code of option - Ex: \`"FR"\`
                @binding {{ iso2: string; dialCode: string; name: string; }} option - country data
                @binding {Boolean} is-selected - \`true\` if option is selected
            `),
                  R(s.$slots, "country-list-flag", {
                    countryCode: C.iso2,
                    option: C,
                    isSelected: I
                  }, () => [
                    ve(
                      X(F(Be)(C.iso2)),
                      1
                      /* TEXT */
                    )
                  ], !0)
                ])) : h("v-if", !0),
                s.showCodeOnList ? (z(), T(
                  "span",
                  {
                    key: 1,
                    class: N(["maz-w-9 maz-flex-none", { "maz-text-muted": !I }])
                  },
                  X(C.dialCode),
                  3
                  /* TEXT, CLASS */
                )) : h("v-if", !0),
                W(
                  "span",
                  {
                    class: N(["maz-flex-1 maz-truncate", { "maz-font-semibold": I }])
                  },
                  X(C.name),
                  3
                  /* TEXT, CLASS */
                )
              ],
              2
              /* CLASS */
            )
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["id", "model-value", "option-input-value-key", "disabled", "color", "size", "error", "list-position", "success", "search", "search-placeholder", "options", "hint", "label", "style", "exclude-selectors"])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), Mo = /* @__PURE__ */ re(To, [["__scopeId", "data-v-b24f2449"]]);
function Ko(n) {
  try {
    const l = lo(n);
    return l || (console.error(`[maz-ui](MazPhoneNumberInput) The code country "${n}" is not available`), !1);
  } catch (l) {
    return console.error(`[maz-ui](MazPhoneNumberInput) ${l}`), !1;
  }
}
function No({
  phoneNumber: n,
  countryCode: l
}) {
  try {
    if (!n)
      return {
        isValid: !1,
        countryCode: l
      };
    const t = no(n, l);
    return {
      countryCode: (t == null ? void 0 : t.country) ?? l,
      isValid: (t == null ? void 0 : t.isValid()) ?? !1,
      isPossible: t == null ? void 0 : t.isPossible(),
      countryCallingCode: t == null ? void 0 : t.countryCallingCode,
      nationalNumber: t == null ? void 0 : t.nationalNumber,
      type: t == null ? void 0 : t.getType(),
      formatInternational: t == null ? void 0 : t.formatInternational(),
      formatNational: t == null ? void 0 : t.formatNational(),
      uri: t == null ? void 0 : t.getURI(),
      e164: t == null ? void 0 : t.format("E.164"),
      rfc3966: t == null ? void 0 : t.format("RFC3966"),
      phoneNumber: n
    };
  } catch (t) {
    throw new Error(`[MazPhoneNumberInput](getResultsFromPhoneNumber) ${t}`);
  }
}
function Ro(n, l) {
  try {
    return l ? new ao(n).input(l) : "";
  } catch (t) {
    throw new Error(`[MazPhoneNumberInput](getAsYouTypeFormat) ${t}`);
  }
}
async function Do() {
  const { default: n } = await import("./examples.mobile.json-um0ibyv5.mjs");
  return n;
}
function Uo(n, l) {
  var t;
  try {
    return n && l ? (t = ro(l, n)) == null ? void 0 : t.formatNational() : void 0;
  } catch (d) {
    console.error(`[maz-ui](MazPhoneNumberInput) ${d}`);
  }
}
function De() {
  function n(l, t) {
    return se(l) === se(t);
  }
  return {
    getAsYouTypeFormat: Ro,
    getPhoneNumberResults: No,
    getPhoneNumberExamplesFile: Do,
    getPhoneNumberExample: Uo,
    isSameCountryCallingCode: n,
    isCountryAvailable: Ko,
    getCountries: Le,
    getCountryCallingCode: se
  };
}
const Oo = /* @__PURE__ */ ae({
  __name: "PhoneInput",
  props: /* @__PURE__ */ Ie({
    id: {},
    color: {},
    size: {},
    locales: {},
    label: { default: void 0 },
    noExample: { type: Boolean },
    disabled: { type: Boolean },
    hasRadius: { type: Boolean },
    success: { type: Boolean },
    error: { type: Boolean },
    autoFormat: { type: Boolean },
    noFormattingAsYouType: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:model-value"], ["update:modelValue"]),
  setup(n, { emit: l }) {
    const t = n, d = l, v = oo(n, "modelValue"), { getPhoneNumberExamplesFile: p, getPhoneNumberExample: g } = De(), { selectionRange: o, results: k, selectedCountry: L } = Re("data"), m = P(), V = P(!1), s = y(() => {
      var $;
      if (t.label)
        return t.label;
      const b = t.locales.phoneInput.placeholder;
      if (t.noExample || !m.value)
        return b;
      {
        const w = g(m.value, L.value);
        return ($ = k.value) != null && $.isValid || !w ? b : `${t.locales.phoneInput.example} ${w}`;
      }
    }), f = P();
    async function C() {
      try {
        if (m.value)
          return;
        m.value = await p();
      } catch (b) {
        console.error("[maz-ui](MazPhoneNumberInput) while loading phone number examples file", b);
      }
    }
    async function I(b) {
      f.value && b && Y(f.value, b), await ne(), d("update:model-value", b);
    }
    function Y(b, $) {
      const w = b.$el.querySelector("input");
      o.value.start = w == null ? void 0 : w.selectionStart, o.value.end = w == null ? void 0 : w.selectionEnd, o.value.cursorAtEnd = $ && typeof o.value.start == "number" && $.length > 0 ? o.value.start >= $.length : !0;
    }
    return ge(() => {
      t.noExample || C();
    }), (b, $) => (z(), O(he, ue({
      id: b.id,
      ref_key: "PhoneInputRef",
      ref: f,
      "model-value": v.value
    }, b.$attrs, {
      label: s.value,
      disabled: b.disabled,
      color: b.color,
      error: b.error,
      size: b.size,
      success: b.success,
      type: "tel",
      inputmode: "tel",
      class: ["m-phone-input", [
        {
          "--border-radius": b.hasRadius,
          "--error": b.error || !F(k).isValid,
          "--focused": V.value
        }
      ]],
      onFocus: $[0] || ($[0] = (w) => V.value = !0),
      onBlur: $[1] || ($[1] = (w) => V.value = !1),
      "onUpdate:modelValue": $[2] || ($[2] = (w) => I(w))
    }), null, 16, ["id", "model-value", "label", "disabled", "color", "error", "size", "success", "class"]));
  }
}), Yo = /* @__PURE__ */ re(Oo, [["__scopeId", "data-v-5bc0c1a2"]]), qo = {
  countrySelector: {
    placeholder: "Country code",
    error: "Choose country",
    searchPlaceholder: "Search the country"
  },
  phoneInput: {
    placeholder: "Phone number",
    example: "Example:"
  }
}, Ho = /* @__PURE__ */ ae({
  inheritAttrs: !1,
  __name: "MazPhoneNumberInput",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { default: void 0 },
    defaultPhoneNumber: { default: void 0 },
    countryCode: { default: void 0 },
    defaultCountryCode: { default: void 0 },
    id: { default: void 0 },
    placeholder: { default: void 0 },
    preferredCountries: { default: void 0 },
    ignoredCountries: { default: void 0 },
    onlyCountries: { default: void 0 },
    translations: { default: void 0 },
    listPosition: { default: "bottom left" },
    color: { default: "primary" },
    size: { default: "md" },
    noFlags: { type: Boolean },
    disabled: { type: Boolean },
    noExample: { type: Boolean },
    noSearch: { type: Boolean },
    noUseBrowserLocale: { type: Boolean },
    fetchCountry: { type: Boolean },
    noCountrySelector: { type: Boolean },
    showCodeOnList: { type: Boolean },
    customCountriesList: { default: void 0 },
    autoFormat: { type: Boolean, default: !0 },
    noFormattingAsYouType: { type: Boolean, default: !1 },
    countryLocale: { default: void 0 },
    noValidationError: { type: Boolean },
    noValidationSuccess: { type: Boolean },
    success: { type: Boolean },
    error: { type: Boolean },
    countrySelectorDisplayName: { type: Boolean },
    countrySelectorWidth: { default: "9rem" },
    block: { type: Boolean },
    excludeSelectors: { default: void 0 },
    orientation: { default: "responsive" }
  },
  emits: ["update:model-value", "country-code", "update:country-code", "update", "data"],
  setup(n, { emit: l }) {
    const t = l, d = n, { fetchCountryCode: v, sanitizePhoneNumber: p, getBrowserLocale: g } = Ne(), { isCountryAvailable: o, getPhoneNumberResults: k, getAsYouTypeFormat: L } = De(), m = be({
      componentName: "MazPhoneNumberInput",
      providedId: d.id
    }), V = P(""), s = P(), f = P({
      isValid: !1,
      countryCode: void 0
    }), C = P({
      start: 0,
      end: 0,
      cursorAtEnd: !0
    });
    to("data", {
      selectedCountry: s,
      phoneNumber: V,
      results: f,
      selectionRange: C
    });
    const I = y(() => ({
      ...qo,
      ...d.translations
    }));
    ge(async () => {
      var a;
      if (D(d.countryCode ?? d.defaultCountryCode), d.fetchCountry && !s.value) {
        const B = await v();
        D(B);
      }
      if (!d.defaultCountryCode && !d.noUseBrowserLocale && !s.value) {
        const B = (a = g()) == null ? void 0 : a.locale;
        D(B);
      }
    });
    const Y = P();
    function b() {
      var a;
      return (a = Y.value) == null ? void 0 : a.$el.querySelector("input");
    }
    async function $() {
      var a;
      await ne(), (a = b()) == null || a.select();
    }
    function w(a) {
      G({
        countryCode: a,
        autoFormat: d.autoFormat,
        noFormattingAsYouType: d.noFormattingAsYouType
      }), $();
    }
    function D(a) {
      if (a) {
        if (!o(a)) {
          s.value = void 0;
          return;
        }
        s.value = a;
      }
    }
    function U({
      newPhoneNumber: a,
      autoFormat: B,
      noFormattingAsYouType: E,
      updateResults: M = !0
    }) {
      const q = p(a);
      if (M && (f.value = k({
        phoneNumber: q,
        countryCode: s.value
      })), f.value.isValid && f.value.formatNational && B)
        V.value = f.value.formatNational;
      else if (C.value.cursorAtEnd && !E) {
        const le = L(s.value, q);
        V.value = le;
      } else
        V.value = q;
      f.value.countryCode && f.value.countryCode !== s.value && G({
        countryCode: f.value.countryCode,
        autoFormat: B,
        noFormattingAsYouType: E,
        updateResults: !1
      });
    }
    function G({
      countryCode: a,
      autoFormat: B,
      noFormattingAsYouType: E,
      updateResults: M = !0
    }) {
      if (!a) {
        s.value = void 0;
        return;
      }
      a !== s.value && D(a), M && (f.value = k({
        phoneNumber: V.value,
        countryCode: a
      })), U({
        newPhoneNumber: V.value,
        autoFormat: B,
        noFormattingAsYouType: E,
        updateResults: !1
      });
    }
    return fe(
      () => d.modelValue ?? d.defaultPhoneNumber,
      (a, B) => {
        a && a !== B && a !== V.value && U({
          newPhoneNumber: a,
          autoFormat: d.autoFormat,
          noFormattingAsYouType: d.noFormattingAsYouType
        });
      },
      {
        immediate: !0
      }
    ), fe(
      () => d.countryCode ?? d.defaultCountryCode,
      (a, B) => {
        a && a !== B && a !== s.value && G({
          countryCode: a,
          autoFormat: d.autoFormat,
          noFormattingAsYouType: d.noFormattingAsYouType
        });
      },
      {
        immediate: !0
      }
    ), fe(
      f,
      (a) => {
        t("update", a), t("data", a), a.e164 && a.isValid ? t("update:model-value", a.e164) : t("update:model-value", V.value), t("country-code", s.value), t("update:country-code", s.value);
      },
      {
        immediate: !0
      }
    ), (a, B) => {
      var E;
      return z(), T(
        "div",
        {
          class: N(["m-phone-number-input", [d.class, { "--block": a.block }, a.orientation ? `--${a.orientation}` : void 0]]),
          style: te(a.style)
        },
        [
          a.noCountrySelector ? h("v-if", !0) : (z(), O(Mo, {
            key: 0,
            id: F(m),
            "model-value": s.value,
            color: a.color,
            size: a.size,
            "country-locale": a.countryLocale,
            "country-selector-display-name": a.countrySelectorDisplayName,
            "custom-countries-list": a.customCountriesList,
            "ignored-countries": a.ignoredCountries,
            "list-position": a.listPosition,
            "no-flags": a.noFlags,
            "no-search": a.noSearch,
            "exclude-selectors": a.excludeSelectors,
            error: a.error || (a.noValidationError ? !1 : !!V.value && !s.value),
            success: a.success || (a.noValidationSuccess ? !1 : (E = f.value) == null ? void 0 : E.isValid),
            locales: I.value,
            disabled: a.disabled,
            "show-code-on-list": a.showCodeOnList,
            "only-countries": a.onlyCountries,
            "preferred-countries": a.preferredCountries,
            width: a.countrySelectorWidth,
            "onUpdate:modelValue": w
          }, {
            "no-results": Q(() => [
              h(`
          @slot Replace the "no results" icon in the country selector list
        `),
              R(a.$slots, "no-results", {}, void 0, !0)
            ]),
            "selector-flag": Q(({ countryCode: M }) => [
              h(`
          @slot Country selector flag
            @binding {String} country-code - current selected country code - Ex: \`"FR"\`
        `),
              R(a.$slots, "selector-flag", { countryCode: M }, void 0, !0)
            ]),
            "country-list-flag": Q(({ isSelected: M, option: q }) => [
              h(`
          @slot Country list flag
            @binding {String} country-code - country code of option - Ex: \`"FR"\`
            @binding {{ iso2: string; dialCode: string; name: string; }} option - country data
            @binding {Boolean} is-selected - \`true\` if option is selected
        `),
              R(a.$slots, "country-list-flag", {
                countryCode: q.iso2,
                option: q,
                isSelected: M
              }, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["id", "model-value", "color", "size", "country-locale", "country-selector-display-name", "custom-countries-list", "ignored-countries", "list-position", "no-flags", "no-search", "exclude-selectors", "error", "success", "locales", "disabled", "show-code-on-list", "only-countries", "preferred-countries", "width"])),
          J(Yo, {
            id: F(m),
            ref_key: "PhoneInputRef",
            ref: Y,
            "model-value": V.value,
            color: a.color,
            size: a.size,
            "no-example": a.noExample,
            block: "",
            disabled: a.disabled,
            "has-radius": !a.noCountrySelector,
            success: a.success || (a.noValidationSuccess ? !1 : f.value.isValid),
            error: a.error || (a.noValidationError ? !1 : !!V.value && !f.value.isValid),
            locales: I.value,
            "no-formatting-as-you-type": a.noFormattingAsYouType,
            "auto-format": a.autoFormat,
            label: a.placeholder,
            "onUpdate:modelValue": B[0] || (B[0] = (M) => U({
              newPhoneNumber: M,
              autoFormat: a.autoFormat,
              noFormattingAsYouType: a.noFormattingAsYouType
            }))
          }, null, 8, ["id", "model-value", "color", "size", "no-example", "disabled", "has-radius", "success", "error", "locales", "no-formatting-as-you-type", "auto-format", "label"])
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
}), Qo = /* @__PURE__ */ re(Ho, [["__scopeId", "data-v-174cbd16"]]);
export {
  Qo as M,
  re as _,
  Re as i,
  be as u
};

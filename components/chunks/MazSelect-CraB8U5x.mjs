import '../assets/MazSelect.css';
import { getCurrentInstance as Me, computed as c, defineComponent as be, defineAsyncComponent as B, ref as I, onMounted as Te, useSlots as De, openBlock as v, createElementBlock as w, normalizeClass as q, normalizeStyle as Y, createElementVNode as T, createCommentVNode as y, renderSlot as U, createBlock as $, unref as V, resolveDynamicComponent as me, withDirectives as ge, mergeProps as ze, toHandlers as Ee, vModelDynamic as Pe, createTextVNode as Fe, toDisplayString as re, withModifiers as H, withCtx as x, createVNode as O, useCssVars as Ne, onBeforeMount as He, nextTick as se, Transition as Oe, Fragment as ve, renderList as qe } from "vue";
function Ue(u, i) {
  let s;
  return function(...d) {
    clearTimeout(s), s = setTimeout(() => {
      u.apply(this, d);
    }, i);
  };
}
function Ve({
  componentName: u,
  providedId: i
}) {
  const s = Me();
  return c(() => i ?? `${u}-${s == null ? void 0 : s.uid}`);
}
const je = {
  key: 0,
  class: "m-input-wrapper-left"
}, Re = { class: "m-input-wrapper-input" }, We = ["id", "type", "name", "inputmode", "placeholder", "aria-label", "disabled", "readonly", "required"], Qe = { key: 0 }, Ge = {
  key: 1,
  class: "m-input-wrapper-right"
}, Ze = /* @__PURE__ */ be({
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
  setup(u, { emit: i }) {
    const s = B(() => import("./MazBtn-78ToUjeK.mjs")), d = B(() => import("./MazIcon-Cxrv3_OK.mjs")), m = B(() => import("./eye-slash-tjfxO0LK.mjs")), r = B(() => import("./eye-DqO_Jx56.mjs")), b = B(() => import("./check-7UA4j2f2.mjs")), t = u, z = i, k = I(!1), f = I(!1), D = I(), _ = Ve({
      componentName: "MazInput",
      providedId: t.id
    });
    Te(() => {
      var o;
      t.autoFocus && ((o = D.value) == null || o.focus());
    });
    const W = c(() => t.type === "password"), ee = c(() => k.value ? "text" : t.type), K = c(() => {
      if (!t.noBorder) {
        if (t.error)
          return "maz-border-danger";
        if (t.success)
          return "maz-border-success";
        if (t.warning)
          return "maz-border-warning";
        if (f.value || t.borderActive) {
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
    }), j = De(), Q = c(() => {
      const { required: o, placeholder: h } = t;
      if (h)
        return o ? `${h} *` : h;
    }), G = c(() => A.value !== void 0 && A.value !== ""), L = Ue(
      (o) => {
        z("update:model-value", o);
      },
      typeof t.debounce == "number" ? t.debounce : t.debounceDelay ?? 500
    ), E = (o) => {
      if (t.debounce)
        return L(o);
      z("update:model-value", o);
    }, A = c({
      get: () => t.modelValue,
      set: (o) => E(o)
    }), Z = c(() => (!!t.label || !!t.hint) && (f.value || !!G.value || !!t.placeholder || ["date", "month", "week"].includes(t.type))), J = c(() => !!t.label || !!t.hint);
    function X() {
      return !!j["right-icon"] || W.value || !!j["valid-button"] || t.validButton || !!t.rightIcon;
    }
    function C() {
      return !!j["left-icon"] || !!t.leftIcon;
    }
    function R(o) {
      z("focus", o), f.value = !0;
    }
    function te(o) {
      z("blur", o), f.value = !1;
    }
    function oe(o) {
      return z("change", o);
    }
    return (o, h) => (v(), w(
      "div",
      {
        class: q(["m-input", [
          {
            "--is-focused": f.value || o.borderActive,
            "--should-up": Z.value,
            "--has-label": J.value,
            "--is-disabled": o.disabled,
            "--is-readonly": o.readonly,
            "--has-z-2": o.error || o.warning || o.success,
            "--has-state": o.error || o.warning || o.success,
            "--block": o.block
          },
          t.class,
          `--${o.color}`,
          `--${o.size}`
        ]]),
        style: Y(o.style)
      },
      [
        T(
          "div",
          {
            class: q(["m-input-wrapper", [
              o.inputClasses,
              K.value,
              o.roundedSize ? `--rounded-${o.roundedSize}` : { "maz-rounded": !o.noRadius }
            ]])
          },
          [
            C() ? (v(), w("div", je, [
              y(`
          @slot left-icon - The icon to display on the left of the input
        `),
              o.$slots["left-icon"] || o.leftIcon ? U(o.$slots, "left-icon", { key: 0 }, () => [
                typeof o.leftIcon == "string" ? (v(), $(V(d), {
                  key: 0,
                  name: o.leftIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : o.leftIcon ? (v(), $(me(o.leftIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : y("v-if", !0)
              ], !0) : y("v-if", !0)
            ])) : y("v-if", !0),
            T("div", Re, [
              ge(T("input", ze({
                id: V(_),
                ref_key: "input",
                ref: D,
                "onUpdate:modelValue": h[0] || (h[0] = (M) => A.value = M),
                type: ee.value,
                name: o.name
              }, o.$attrs, {
                inputmode: o.inputmode,
                placeholder: Q.value,
                "aria-label": o.label || o.placeholder,
                disabled: o.disabled,
                readonly: o.readonly,
                required: o.required,
                class: "m-input-input"
              }, Ee({
                blur: te,
                focus: R,
                change: oe
              }, !0), {
                onClick: h[1] || (h[1] = (M) => o.$emit("click", M))
              }), null, 16, We), [
                [Pe, A.value]
              ]),
              o.label || o.hint ? (v(), w(
                "span",
                {
                  key: 0,
                  ref: "label",
                  class: q(["m-input-label", [
                    {
                      "maz-text-danger-600": o.error,
                      "maz-text-success-600": o.success,
                      "maz-text-warning-600": o.warning
                    }
                  ]])
                },
                [
                  Fe(
                    re(o.hint || o.label) + " ",
                    1
                    /* TEXT */
                  ),
                  o.required ? (v(), w("sup", Qe, "*")) : y("v-if", !0)
                ],
                2
                /* CLASS */
              )) : y("v-if", !0)
            ]),
            X() ? (v(), w("div", Ge, [
              y(`
          @slot right-icon - The icon to display on the right of the input
        `),
              o.$slots["right-icon"] || o.rightIcon ? U(o.$slots, "right-icon", { key: 0 }, () => [
                typeof o.rightIcon == "string" ? (v(), $(V(d), {
                  key: 0,
                  name: o.rightIcon,
                  class: "maz-text-xl maz-text-muted"
                }, null, 8, ["name"])) : o.rightIcon ? (v(), $(me(o.rightIcon), {
                  key: 1,
                  class: "maz-text-xl maz-text-muted"
                })) : y("v-if", !0)
              ], !0) : y("v-if", !0),
              W.value ? (v(), $(V(s), {
                key: 1,
                color: "transparent",
                tabindex: "-1",
                size: "mini",
                onClick: h[2] || (h[2] = H((M) => k.value = !k.value, ["stop"]))
              }, {
                default: x(() => [
                  k.value ? (v(), $(V(m), {
                    key: 0,
                    class: "maz-text-xl maz-text-muted"
                  })) : (v(), $(V(r), {
                    key: 1,
                    class: "maz-text-xl maz-text-muted"
                  }))
                ]),
                _: 1
                /* STABLE */
              })) : y("v-if", !0),
              y(`
          @slot valid-button - Replace the valid button by your own
        `),
              o.$slots["valid-button"] || o.validButton ? U(o.$slots, "valid-button", { key: 2 }, () => [
                O(V(s), {
                  color: "transparent",
                  disabled: o.disabled,
                  tabindex: "-1",
                  loading: o.validButtonLoading,
                  class: "m-input-valid-button",
                  size: "mini",
                  type: "submit"
                }, {
                  default: x(() => [
                    O(V(b), { class: "maz-text-2xl maz-text-normal" })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "loading"])
              ], !0) : y("v-if", !0)
            ])) : y("v-if", !0)
          ],
          2
          /* CLASS */
        )
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), ke = (u, i) => {
  const s = u.__vccOpts || u;
  for (const [d, m] of i)
    s[d] = m;
  return s;
}, ye = /* @__PURE__ */ ke(Ze, [["__scopeId", "data-v-b2106d63"]]);
let ue = null;
function Je(u, i) {
  ue && clearTimeout(ue), ue = setTimeout(u, i);
}
function Xe(u, i) {
  const s = u.length, d = i.length, m = [];
  for (let r = 0; r <= s; r++)
    m[r] = [r];
  for (let r = 0; r <= d; r++)
    m[0][r] = r;
  for (let r = 1; r <= s; r++)
    for (let b = 1; b <= d; b++) {
      const t = u[r - 1] === i[b - 1] ? 0 : 1;
      m[r][b] = Math.min(
        m[r - 1][b] + 1,
        m[r][b - 1] + 1,
        m[r - 1][b - 1] + t
      );
    }
  return m[s][d];
}
function he(u) {
  return u.normalize("NFD").replaceAll(/[\u0300-\u036F]/g, "").toLowerCase();
}
function Ie(u, i) {
  const s = Xe(u, i), d = Math.max(u.length, i.length);
  return 1 - s / d;
}
function Ye(u, i, s = 0.75) {
  return Ie(u, i) >= s;
}
function ie(u, i, s = 0.75) {
  const d = c(
    () => he(typeof u == "string" ? u : u.value)
  ), m = c(
    () => he(typeof i == "string" ? i : i.value)
  ), r = c(() => typeof s == "number" ? s : s.value), b = c(() => Ie(d.value, m.value));
  return {
    isMatching: c(
      () => Ye(d.value, m.value, r.value)
    ),
    score: b
  };
}
const we = (u, i, s) => {
  var b;
  u.stopPropagation();
  const d = typeof s.value == "function" ? s.value : s.value.handler, m = typeof s.value == "object" ? s.value.exclude : void 0;
  let r = !1;
  if (m && m.length > 0) {
    for (const t of m)
      if (!r && u.target instanceof HTMLElement) {
        const z = (b = document.querySelector(t)) == null ? void 0 : b.getAttribute("id");
        r = u.target.getAttribute("id") === z;
      }
  }
  !i.contains(u.target) && !r && (d == null || d());
};
function Ke() {
  return document.ontouchstart === null ? "touchstart" : "click";
}
function xe(u, i) {
  const s = Ke();
  document.removeEventListener(s, (d) => we(d, u, i));
}
function _e(u, i) {
  if (typeof i.value != "function" && typeof i.value == "object" && typeof i.value.handler != "function") {
    console.error("[maz-ui](vClosable) v-closable directive requires a handler function");
    return;
  }
  const s = Ke();
  document.addEventListener(s, (d) => we(d, u, i));
}
const et = {
  mounted: _e,
  unmounted: xe
}, tt = ["aria-label"], ot = { class: "m-select-list__no-results" }, lt = {
  key: 2,
  class: "m-select-list__scroll-wrapper",
  tabindex: "-1"
}, at = { class: "m-select-list-optgroup" }, nt = ["onClick"], st = /* @__PURE__ */ be({
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
  setup(u, { expose: i, emit: s }) {
    Ne((e) => ({
      "417b570e": ee.value,
      "16c577f8": _.value,
      "081fe860": W.value
    }));
    const d = B(() => import("./MazCheckbox-PgXh8RSO.mjs")), m = B(() => import("./magnifying-glass-DZGg7953.mjs")), r = B(() => import("./chevron-down-CzMH-gFW.mjs")), b = B(() => import("./no-symbol-QAqP9IlR.mjs"));
    i({
      /** Method to open the option list */
      openList: F,
      /** Method to close the option list */
      closeList: P
    });
    const t = u, z = s, k = I(!1), f = I(), D = c(
      () => ["black", "transparent", "white"].includes(t.color)
    ), _ = c(
      () => D.value ? "var(--maz-color-black)" : `var(--maz-color-${t.color}-800)`
    ), W = c(
      () => D.value ? "var(--maz-color-muted)" : `var(--maz-color-${t.color}-100)`
    ), ee = c(
      () => D.value ? "var(--maz-color-muted)" : `var(--maz-color-${t.color}-200)`
    ), K = c(() => k.value || t.open), j = Ve({
      componentName: "MazSelect",
      providedId: t.id
    });
    function Q(e) {
      return {
        [t.optionValueKey]: e,
        [t.optionLabelKey]: e,
        [t.optionInputValueKey]: e
      };
    }
    function G(e) {
      return {
        ...e,
        [t.optionValueKey]: e[t.optionValueKey],
        [t.optionLabelKey]: e[t.optionLabelKey],
        [t.optionInputValueKey]: e[t.optionInputValueKey]
      };
    }
    const L = c(() => {
      var l;
      const e = [];
      if (!((l = t.options) != null && l.length))
        return [];
      for (const n of t.options)
        typeof n == "string" || typeof n == "number" || typeof n == "boolean" ? e.push(Q(n)) : typeof n == "object" && "options" in n && Array.isArray(n.options) ? e.push(
          { label: n.label, isOptGroup: !0 },
          ...n.options.map(
            (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean" ? Q(a) : G(a)
          )
        ) : e.push(G(n));
      return e;
    }), E = c(
      () => {
        var e;
        return ((e = L.value) == null ? void 0 : e.filter((l) => t.multiple ? Array.isArray(t.modelValue) ? t.modelValue.includes(l[t.optionValueKey]) && !C(l[t.optionValueKey]) : !1 : t.modelValue === l[t.optionValueKey] && !C(l[t.optionValueKey]))) ?? [];
      }
    );
    He(() => {
      var e;
      (e = t.options) != null && e.length || console.warn("[maz-ui](MazSelect) you must provide options"), ne();
    });
    const A = I(), Z = I(), J = I(), X = I(), C = (e) => e == null;
    function R(e) {
      var n;
      return (((n = E.value) == null ? void 0 : n.some(
        (a) => a[t.optionValueKey] === e[t.optionValueKey]
      )) ?? !1) && !C(e[t.optionValueKey]);
    }
    const te = c(() => {
      var l;
      if (t.multiple && t.modelValue && Array.isArray(t.modelValue))
        return t.modelValue.map(
          (n) => {
            var a, p;
            return (p = (a = L.value) == null ? void 0 : a.find((g) => g[t.optionValueKey] === n)) == null ? void 0 : p[t.optionInputValueKey];
          }
        ).join(", ");
      const e = (l = L.value) == null ? void 0 : l.find(
        (n) => n[t.optionValueKey] === t.modelValue
      );
      return C(t.modelValue) || e == null ? void 0 : e[t.optionInputValueKey];
    }), oe = c(
      () => t.listPosition.includes("bottom") ? "maz-slide" : "maz-slideinvert"
    ), o = I(""), h = I("");
    function M(e) {
      return e.normalize("NFD").replaceAll(/[\u0300-\u036F]/g, "").replaceAll(/[^\dA-Za-z\u0400-\u04FF]/g, "");
    }
    const le = (e, l) => l && e && M(e.toString().toLocaleLowerCase().trim()).includes(
      M(l.toLocaleLowerCase().trim())
    );
    function de(e) {
      var l;
      return e ? (l = L.value) == null ? void 0 : l.filter((n) => {
        const a = n[t.optionLabelKey], p = n[t.optionValueKey], g = n[t.optionInputValueKey];
        return le(a, e) || le(g, e) || le(p, e) || typeof a == "string" && ie(a, e).isMatching.value || typeof g == "string" && ie(g, e).isMatching.value || typeof p == "string" && ie(p, e).isMatching.value;
      }) : L.value;
    }
    const S = c(() => de(o.value));
    async function P(e) {
      var n, a;
      if (!K.value)
        return;
      if (e && ("relatedTarget" in e && ((n = A.value) != null && n.contains(e.relatedTarget)) || e.type === "keydown"))
        return e.preventDefault();
      const l = e && "relatedTarget" in e && e.relatedTarget instanceof HTMLElement && e.relatedTarget.getAttribute("id");
      if ((a = t.excludeSelectors) != null && a.includes(`#${l}`))
        return e == null ? void 0 : e.preventDefault();
      await se(), k.value = !1, f.value = 0, z("close", e);
    }
    async function F(e) {
      t.disabled || K.value || (e == null || e.preventDefault(), k.value = !0, await ae(), z("focus", e), z("open", k.value));
    }
    function ce() {
      var e, l;
      (l = ((e = Z.value) == null ? void 0 : e.$el).querySelector("input")) == null || l.focus();
    }
    function Se(e) {
      k.value ? P(e) : ce();
    }
    function $e(e) {
      var l, n;
      o.value = e, (n = ((l = J.value) == null ? void 0 : l.$el).querySelector("input")) == null || n.focus();
    }
    function Be(e) {
      var n;
      e === "Backspace" && h.value.length > 0 ? h.value = h.value.slice(0, -1) : h.value += e;
      const l = de(h.value);
      l != null && l.length && (f.value = (n = S.value) == null ? void 0 : n.findIndex(
        (a) => a[t.optionValueKey] === l[0][t.optionValueKey]
      ), typeof f.value == "number" && f.value >= 0 && ae(f.value)), Je(() => {
        h.value = "";
      }, 1e3);
    }
    const Ce = (e) => {
      const l = e.key;
      /^[\dA-Za-z\u0400-\u04FF]$/.test(l) ? (e.preventDefault(), F(e), t.search ? $e(l) : Be(l)) : pe(e);
    }, pe = (e) => {
      const l = e.code, n = ["ArrowUp", "ArrowDown"].includes(l), a = ["Enter"].includes(l), p = l === "Escape" && K.value;
      n ? Le(e, f.value) : a ? Ae(e, f.value) : p && P(e);
    }, Le = (e, l) => {
      var p;
      e.preventDefault();
      const n = e.code;
      K.value || F(e);
      const a = (p = S.value) == null ? void 0 : p.length;
      a && (typeof l == "number" ? l === a - 1 && n === "ArrowDown" ? f.value = 0 : l === 0 && n === "ArrowUp" ? f.value = a - 1 : f.value = n === "ArrowDown" ? l + 1 : l - 1 : f.value = n === "ArrowDown" ? 0 : a - 1, ae(f.value));
    }, Ae = (e, l) => {
      var a, p, g;
      if (e.preventDefault(), !K.value)
        return F(e);
      const n = l ? ((a = S.value) == null ? void 0 : a[l]) ?? ((p = S.value) == null ? void 0 : p[0]) : (g = S.value) == null ? void 0 : g[0];
      C(n) || fe(n);
    };
    async function ae(e) {
      var n, a;
      await se(), typeof e != "number" && ne();
      const l = e ?? f.value;
      typeof l == "number" && l >= 0 && ((a = (n = X.value) == null ? void 0 : n.querySelectorAll(".m-select-list-item")[l]) == null || a.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "start"
      }));
    }
    function ne(e) {
      var n;
      const l = (n = S.value) == null ? void 0 : n.findIndex((a) => {
        var p, g;
        return t.multiple && Array.isArray(t.modelValue) ? e ? e[t.optionValueKey] === a[t.optionValueKey] : [...t.modelValue].reverse()[0] === a[t.optionValueKey] : ((g = (p = E.value) == null ? void 0 : p[0]) == null ? void 0 : g[t.optionValueKey]) === a[t.optionValueKey];
      });
      f.value = l && l >= 0 ? l : 0;
    }
    function fe(e, l = !0) {
      var g;
      l && !t.multiple && se(() => P()), o.value = "";
      const n = (g = E.value) == null ? void 0 : g.some(
        (N) => N[t.optionValueKey] === e[t.optionValueKey]
      );
      let a = E.value;
      n && t.multiple ? a = a == null ? void 0 : a.filter(
        (N) => N[t.optionValueKey] !== e[t.optionValueKey]
      ) : t.multiple ? a.push(e) : a = [e];
      const p = a.map((N) => N[t.optionValueKey]);
      z("update:model-value", t.multiple ? p : p[0]), z("selected-option", e), ne(e), ce();
    }
    return (e, l) => {
      var n;
      return ge((v(), w(
        "div",
        {
          ref_key: "mazSelectElement",
          ref: A,
          class: q(["m-select", [
            { "--is-open": K.value, "--disabled": e.disabled, "--block": e.block },
            t.class,
            `--${e.size}`
          ]]),
          style: Y(e.style)
        },
        [
          O(ye, ze({
            id: V(j),
            ref_key: "mazInputComponent",
            ref: Z,
            class: "m-select-input"
          }, e.$attrs, {
            required: e.required,
            "border-active": k.value,
            color: e.color,
            "model-value": te.value,
            autocomplete: "off",
            size: e.size,
            block: "",
            disabled: e.disabled,
            onFocus: H(F, ["prevent", "stop"]),
            onBlur: H(P, ["prevent", "stop"]),
            onClick: H(F, ["prevent", "stop"]),
            onChange: l[0] || (l[0] = (a) => z("change", a)),
            onKeydown: Ce
          }), {
            "right-icon": x(() => [
              T("button", {
                tabindex: "-1",
                type: "button",
                class: "m-select-input__toggle-button maz-custom",
                "aria-label": `${K.value ? "collapse" : "expand"} list of options`,
                onClick: H(Se, ["stop"])
              }, [
                O(V(r), { class: "m-select-chevron maz-text-xl" })
              ], 8, tt)
            ]),
            _: 1
            /* STABLE */
          }, 16, ["id", "required", "border-active", "color", "model-value", "size", "disabled"]),
          O(Oe, { name: oe.value }, {
            default: x(() => [
              K.value ? (v(), w(
                "div",
                {
                  key: 0,
                  ref_key: "optionsListElement",
                  ref: X,
                  class: q(["m-select-list", {
                    "--top": e.listPosition.includes("top"),
                    "--left": e.listPosition.includes("left"),
                    "--right": e.listPosition.includes("right"),
                    "--bottom": e.listPosition.includes("bottom")
                  }]),
                  style: Y({
                    maxHeight: `${e.maxListHeight}px`,
                    maxWidth: `${e.maxListWidth}px`
                  })
                },
                [
                  e.search ? (v(), $(ye, {
                    key: 0,
                    ref_key: "searchInputComponent",
                    ref: J,
                    modelValue: o.value,
                    "onUpdate:modelValue": [
                      l[1] || (l[1] = (a) => o.value = a),
                      l[2] || (l[2] = (a) => f.value = 0)
                    ],
                    size: "sm",
                    color: e.color,
                    placeholder: e.searchPlaceholder,
                    name: "search",
                    autocomplete: "off",
                    tabindex: "-1",
                    class: "m-select-list__search-input maz-flex-none",
                    "left-icon": V(m),
                    onKeydown: pe
                  }, null, 8, ["modelValue", "color", "placeholder", "left-icon"])) : y("v-if", !0),
                  y(`
          @slot No results slot - Displayed when no results corresponding with search query
        `),
                  !S.value || S.value.length <= 0 ? U(e.$slots, "no-results", { key: 1 }, () => [
                    T("span", ot, [
                      O(V(b), { class: "maz-h-6 maz-w-6 maz-text-normal" })
                    ])
                  ], !0) : (v(), w("div", lt, [
                    (v(!0), w(
                      ve,
                      null,
                      qe(S.value, (a, p) => (v(), w(
                        ve,
                        { key: p },
                        [
                          y(`
              @slot Custom optgroup label
                @binding {String} label - the label of the optgroup
            `),
                          a.label && a.isOptGroup ? U(e.$slots, "optgroup", {
                            key: 0,
                            label: a.label
                          }, () => [
                            T(
                              "span",
                              at,
                              re(a.label),
                              1
                              /* TEXT */
                            )
                          ], !0) : (v(), w("button", {
                            key: 1,
                            tabindex: "-1",
                            type: "button",
                            class: q(["m-select-list-item maz-custom maz-flex-none", [
                              {
                                "--is-keyboard-selected": f.value === p,
                                "--is-selected": R(a),
                                "--is-none-value": C(a[e.optionValueKey])
                              }
                            ]]),
                            style: Y(e.itemHeight ? { height: `${e.itemHeight}px` } : void 0),
                            onClick: H((g) => fe(a), ["prevent", "stop"])
                          }, [
                            e.multiple ? (v(), $(V(d), {
                              key: 0,
                              tabindex: "-1",
                              "model-value": R(a),
                              size: "sm",
                              color: e.color
                            }, null, 8, ["model-value", "color"])) : y("v-if", !0),
                            y(`
                @slot Custom option
                  @binding {Object} option - the option object
                  @binding {Boolean} is-selected - if the option is selected
              `),
                            U(e.$slots, "default", {
                              option: a,
                              isSelected: R(a)
                            }, () => [
                              T(
                                "span",
                                null,
                                re(a[e.optionLabelKey]),
                                1
                                /* TEXT */
                              )
                            ], !0)
                          ], 14, nt))
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
              )) : y("v-if", !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["name"])
        ],
        6
        /* CLASS, STYLE */
      )), [
        [V(et), {
          exclude: (n = e.excludeSelectors) != null && n.length ? e.excludeSelectors : [],
          handler: P
        }]
      ]);
    };
  }
}), it = /* @__PURE__ */ ke(st, [["__scopeId", "data-v-8441f9de"]]);
export {
  it as M,
  ke as _,
  Ve as u
};

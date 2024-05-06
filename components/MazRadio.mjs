import './assets/MazRadio.css';
import { getCurrentInstance as g, computed as r, defineComponent as S, useCssVars as y, openBlock as k, createElementBlock as z, unref as p, normalizeClass as I, normalizeStyle as C, createElementVNode as u, mergeProps as B, createCommentVNode as V, renderSlot as N, createTextVNode as _, toDisplayString as w, pushScopeId as M, popScopeId as x } from "vue";
function D({
  componentName: o,
  providedId: t
}) {
  const a = g();
  return r(() => t ?? `${o}-${a == null ? void 0 : a.uid}`);
}
const E = (o) => (M("data-v-0b81d1b5"), o = o(), x(), o), R = ["for", "aria-checked"], T = ["id", "value", "disabled", "name", "checked"], $ = /* @__PURE__ */ E(() => /* @__PURE__ */ u(
  "span",
  null,
  [
    /* @__PURE__ */ u("span", { class: "round" })
  ],
  -1
  /* HOISTED */
)), q = /* @__PURE__ */ S({
  __name: "MazRadio",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    id: { default: void 0 },
    modelValue: { type: [String, Number, Boolean], default: void 0 },
    value: { type: [String, Number, Boolean] },
    name: {},
    label: { default: void 0 },
    color: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:model-value", "change"],
  setup(o, { emit: t }) {
    y((e) => ({
      "8d62fd0a": f.value,
      "1b5dc564": v.value,
      "22c54cde": b.value
    }));
    const a = o, n = t, s = D({
      componentName: "MazCheckbox",
      providedId: a.id
    }), i = r(() => a.modelValue === a.value), f = r(() => {
      switch (a.size) {
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
    }), v = r(() => `var(--maz-color-${a.color})`), b = r(
      () => ["black", "transparent"].includes(a.color) ? "var(--maz-color-muted)" : `var(--maz-color-${a.color}-alpha)`
    );
    function h(e, l) {
      ["Space"].includes(e.code) && (e.preventDefault(), c(l));
    }
    function c(e) {
      n("update:model-value", e), n("change", e);
    }
    return (e, l) => (k(), z("label", {
      for: p(s),
      class: I(["m-checkbox", [{ "--disabled": e.disabled, "--selected": i.value }, a.class]]),
      tabindex: "0",
      role: "radio",
      style: C(e.style),
      "aria-checked": i.value,
      onKeydown: l[1] || (l[1] = (d) => h(d, e.value))
    }, [
      u("input", B({
        id: p(s),
        value: e.value
      }, e.$attrs, {
        tabindex: "-1",
        disabled: e.disabled,
        name: e.name,
        type: "radio",
        checked: i.value,
        onChange: l[0] || (l[0] = (d) => {
          var m;
          return c((m = d == null ? void 0 : d.target) == null ? void 0 : m.value);
        })
      }), null, 16, T),
      $,
      V(`
      @slot Label of the radio
        @binding {Boolean} is-selected - If the radio is selected
        @binding {string | number | boolean} value - The value of the radio
    `),
      N(e.$slots, "default", {
        isSelected: i.value,
        value: e.value
      }, () => [
        _(
          w(e.label),
          1
          /* TEXT */
        )
      ], !0)
    ], 46, R));
  }
}), H = (o, t) => {
  const a = o.__vccOpts || o;
  for (const [n, s] of t)
    a[n] = s;
  return a;
}, L = /* @__PURE__ */ H(q, [["__scopeId", "data-v-0b81d1b5"]]);
export {
  L as default
};

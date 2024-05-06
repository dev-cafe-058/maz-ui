import '../assets/MazCheckbox.css';
import { defineComponent as v, useCssVars as g, computed as l, openBlock as C, createElementBlock as S, unref as r, normalizeClass as i, normalizeStyle as I, createElementVNode as m, mergeProps as w, createVNode as A, renderSlot as B, createTextVNode as N, toDisplayString as _ } from "vue";
import { u as M, _ as D } from "./MazSelect-CraB8U5x.mjs";
import E from "./check-7UA4j2f2.mjs";
const q = ["for", "aria-checked"], H = ["id", "checked", "disabled", "name"], K = /* @__PURE__ */ v({
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
  setup(f, { emit: p }) {
    g((a) => ({
      "3eedcc0a": k.value,
      a3137f46: b.value,
      "03d4fcac": x.value,
      "5778d022": y.value
    }));
    const e = f, c = p, s = M({
      componentName: "MazCheckbox",
      providedId: e.id
    }), n = l(
      () => typeof e.value != "boolean" && Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : typeof e.modelValue == "boolean" ? e.modelValue : !1
    ), b = l(() => {
      switch (e.size) {
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
    }), h = l(() => {
      switch (e.size) {
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
    }), k = l(() => `var(--maz-color-${e.color}-contrast)`), x = l(() => `var(--maz-color-${e.color})`), y = l(
      () => ["black", "transparent"].includes(e.color) ? "var(--maz-color-muted)" : `var(--maz-color-${e.color}-alpha)`
    );
    function V(a) {
      ["Space"].includes(a.code) && (a.preventDefault(), d(e.value ?? !e.modelValue));
    }
    function z(a) {
      return typeof a == "boolean" && (typeof e.modelValue == "boolean" || e.modelValue === void 0 || e.modelValue === null) ? !e.modelValue : Array.isArray(e.modelValue) && typeof a != "boolean" ? e.modelValue.includes(a) ? e.modelValue.filter((o) => o !== a) : [...e.modelValue, a] : [a];
    }
    function d(a) {
      const o = z(a);
      c("update:model-value", o), c("change", o);
    }
    return (a, o) => (C(), S("label", {
      for: r(s),
      class: i(["m-checkbox", [{ "--disabled": a.disabled }, e.class]]),
      tabindex: "0",
      style: I(a.style),
      role: "checkbox",
      "aria-checked": n.value,
      onKeydown: V
    }, [
      m("input", w({
        id: r(s),
        checked: n.value
      }, a.$attrs, {
        tabindex: "-1",
        disabled: a.disabled,
        name: a.name,
        type: "checkbox",
        onChange: o[0] || (o[0] = (t) => {
          var u;
          return d(a.value ?? ((u = t == null ? void 0 : t.target) == null ? void 0 : u.checked));
        })
      }), null, 16, H),
      m("span", null, [
        A(r(E), {
          class: i(["check-icon", h.value])
        }, null, 8, ["class"])
      ]),
      B(a.$slots, "default", {}, () => [
        N(
          _(a.label),
          1
          /* TEXT */
        )
      ], !0)
    ], 46, q));
  }
}), $ = /* @__PURE__ */ D(K, [["__scopeId", "data-v-06d3ee3a"]]);
export {
  $ as default
};

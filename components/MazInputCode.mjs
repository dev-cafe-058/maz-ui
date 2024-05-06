import './assets/MazInputCode.css';
import { defineComponent as N, useCssVars as S, ref as b, watch as x, computed as m, openBlock as v, createElementBlock as g, normalizeClass as V, normalizeStyle as k, Fragment as M, renderList as P, createCommentVNode as q, createElementVNode as $, mergeProps as D } from "vue";
const E = ["disabled"], F = ["inputmode", "pattern", "required", "value", "onInput", "onKeydown"], K = /* @__PURE__ */ N({
  inheritAttrs: !1,
  __name: "MazInputCode",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { default: void 0 },
    codeLength: { default: 4 },
    type: { default: "text" },
    acceptAlpha: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    success: { type: Boolean, default: !1 },
    warning: { type: Boolean, default: !1 },
    size: { default: "md" },
    color: { default: "primary" }
  },
  emits: ["update:model-value", "completed"],
  setup(u, { emit: i }) {
    S((e) => ({
      "29dc0bd8": C.value
    }));
    const a = u, d = i, c = b([]), l = b(/* @__PURE__ */ new Map());
    x(
      () => a.modelValue,
      (e, t) => {
        e !== t && (l.value = z());
      },
      { immediate: !0 }
    );
    const p = m({
      get: () => l.value,
      set: (e) => {
        const t = w(e);
        d("update:model-value", t), (t == null ? void 0 : t.toString().length) === a.codeLength && d("completed");
      }
    });
    function z(e = a.modelValue) {
      const t = /* @__PURE__ */ new Map();
      for (const o of Array.from({ length: a.codeLength }, (n, r) => r))
        if (e === void 0)
          t.set(o + 1, void 0);
        else {
          const n = [...e.toString()];
          t.set(o + 1, n[o]);
        }
      return t;
    }
    function I(e, t) {
      var n;
      const o = h((n = e.target) == null ? void 0 : n.value);
      p.value = l.value.set(t, o), o && f(t);
    }
    function w(e) {
      const t = [...e.values()].join("");
      return a.type === "text" ? t : t && !Number.isNaN(Number(t)) ? Number(t) : void 0;
    }
    function h(e) {
      var t;
      return (t = a.acceptAlpha ? e.match(/^[\w.]$/i) : e.match(/\d+/g)) == null ? void 0 : t.toString();
    }
    function B(e, t) {
      const o = l.value.get(t);
      if (e.key === "Backspace" && !o) {
        const n = t - 1 < 0 ? 0 : t - 1;
        p.value = l.value.set(n, void 0), f(n - 1);
      }
    }
    function L(e) {
      var n;
      const t = (n = e.clipboardData) == null ? void 0 : n.getData("text");
      if (!t)
        return;
      const o = Array.from({ length: a.codeLength }, (r, s) => ({
        index: s + 1,
        value: [...t.toString()][s] ?? void 0
      }));
      for (const { index: r, value: s } of o) {
        const y = s ? h(s) : void 0;
        y && l.value.set(r, y);
      }
      setTimeout(() => {
        const r = _(), s = r >= a.codeLength ? a.codeLength - 1 : r;
        f(s, !1);
      }, 0);
    }
    function _() {
      return [...l.value.values()].filter(Boolean).length;
    }
    function f(e, t = !0) {
      setTimeout(() => {
        const o = c.value[e];
        e + 1 > a.codeLength || !o || (o.focus(), t && o.select());
      }, 0);
    }
    const A = m(() => a.error ? "!maz-border-danger" : a.success ? "!maz-border-success" : a.warning ? "!maz-border-warning" : ""), C = m(() => `var(--maz-color-${a.color})`);
    return (e, t) => (v(), g("fieldset", {
      class: V(["m-input-code", [e.size ? `--${e.size}` : void 0, a.class]]),
      disabled: e.disabled,
      style: k(e.style)
    }, [
      (v(!0), g(
        M,
        null,
        P(e.codeLength, (o) => (v(), g(
          "div",
          {
            key: o,
            class: V(["input-wrapper", A.value])
          },
          [
            q(" eslint-disable-next-line vuejs-accessibility/form-control-has-label "),
            $("input", D({
              ref_for: !0,
              ref: (n) => {
                c.value[o - 1] = n;
              },
              type: "text",
              minlength: "1",
              maxlength: "1",
              inputmode: e.acceptAlpha ? "text" : "numeric",
              pattern: e.acceptAlpha ? "[a-zA-Z0-9]{1}" : "[0-9]{1}",
              autocomplete: "do-not-autofill",
              required: e.required
            }, e.$attrs, {
              value: p.value.get(o),
              onInput: (n) => I(n, o),
              onKeydown: (n) => B(n, o),
              onPaste: L
            }), null, 16, F)
          ],
          2
          /* CLASS */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))
    ], 14, E));
  }
}), T = (u, i) => {
  const a = u.__vccOpts || u;
  for (const [d, c] of i)
    a[d] = c;
  return a;
}, O = /* @__PURE__ */ T(K, [["__scopeId", "data-v-ee4bab42"]]);
export {
  O as default
};

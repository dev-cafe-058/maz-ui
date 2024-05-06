import '../assets/MazPickerShortcuts.css';
import { defineComponent as h, ref as f, watch as i, openBlock as l, createElementBlock as n, Fragment as v, renderList as y, createBlock as _, normalizeClass as k, withModifiers as S, withCtx as b, createTextVNode as z, toDisplayString as B } from "vue";
import g from "./MazBtn-DWDitOvL.mjs";
import { _ as x } from "./MazPicker-_ndeWiCy.mjs";
const C = { class: "maz-picker-shortcuts" }, q = /* @__PURE__ */ h({
  __name: "MazPickerShortcuts",
  props: {
    color: { type: String, required: !0 },
    modelValue: {
      type: [String, Object],
      default: void 0
    },
    shortcuts: {
      type: Array,
      required: !0
    },
    double: { type: Boolean, required: !0 },
    shortcut: { type: String, default: void 0 },
    disabled: { type: Boolean, required: !0 }
  },
  emits: ["update:model-value"],
  setup(c, { emit: d }) {
    const r = c, m = d, s = f(r.shortcut), u = (o, e) => {
      s.value = e, m("update:model-value", o);
    };
    return i(
      () => r.modelValue,
      (o) => {
        const e = o;
        e != null && e.end || (s.value = void 0);
      }
    ), i(
      () => r.shortcut,
      (o) => {
        const e = r.shortcuts.find(({ identifier: t }) => o === t);
        if (e) {
          const { value: t, identifier: a } = e;
          u(t, a);
        }
      },
      { immediate: !0 }
    ), (o, e) => (l(), n("div", C, [
      (l(!0), n(
        v,
        null,
        y(c.shortcuts, ({ identifier: t, label: a, value: p }) => (l(), _(g, {
          key: t,
          type: "button",
          size: "sm",
          disabled: c.disabled,
          color: t === s.value ? r.color : "transparent",
          class: k({ "--is-selected": t === s.value }),
          onClick: S((w) => u(p, t), ["stop"])
        }, {
          default: b(() => [
            z(
              B(a),
              1
              /* TEXT */
            )
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["disabled", "color", "class", "onClick"]))),
        128
        /* KEYED_FRAGMENT */
      ))
    ]));
  }
}), j = /* @__PURE__ */ x(q, [["__scopeId", "data-v-e013a34a"]]);
export {
  j as default
};

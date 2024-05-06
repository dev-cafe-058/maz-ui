import '../assets/MazPickerYearSwitcher.css';
import { defineComponent as C, ref as b, computed as w, openBlock as m, createElementBlock as _, createElementVNode as u, createVNode as s, withModifiers as l, withCtx as i, unref as o, Fragment as D, renderList as S, createBlock as Y, normalizeClass as B, createTextVNode as M, toDisplayString as q } from "vue";
import { d as c, a as I, i as y, _ as N } from "./MazPicker-_ndeWiCy.mjs";
import d from "./MazBtn-DWDitOvL.mjs";
import { X as V } from "./x-mark-CKwYEQQZ.mjs";
import { C as z } from "./MazPickerCalendar-BXadlngJ.mjs";
const E = { class: "maz-picker-year-switcher" }, L = { class: "maz-picker-year-switcher__header" }, P = { class: "maz-flex maz-space-x-2" }, T = { class: "maz-picker-year-switcher__main" }, X = /* @__PURE__ */ C({
  __name: "MazPickerYearSwitcher",
  props: {
    color: { type: String, required: !0 },
    locale: { type: String, required: !0 },
    calendarDate: { type: String, required: !0 }
  },
  emits: ["update:calendar-date", "close"],
  setup(n, { emit: v }) {
    const p = n, f = v, t = b(p.calendarDate), k = w(() => Array.from({ length: 15 }, (a, r) => r - 7).map((a) => {
      const r = c(t.value).get("year"), e = c(t.value).set("year", r + a);
      return {
        label: I(e.format(), p.locale, {
          year: "numeric"
        }),
        date: e
      };
    })), h = (a) => {
      f("update:calendar-date", c(a).format()), f("close");
    }, x = () => {
      t.value = c(t.value).subtract(7, "year").format();
    }, g = () => {
      t.value = c(t.value).add(7, "year").format();
    };
    return (a, r) => (m(), _("div", E, [
      u("div", L, [
        u("div", P, [
          s(d, {
            size: "xs",
            color: "transparent",
            type: "button",
            onClick: l(x, ["stop"])
          }, {
            default: i(() => [
              s(o(z), { class: "maz-text-lg" })
            ]),
            _: 1
            /* STABLE */
          }),
          s(d, {
            size: "xs",
            color: "transparent",
            type: "button",
            onClick: l(g, ["stop"])
          }, {
            default: i(() => [
              s(o(z), { class: "maz-rotate-180 maz-text-lg" })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        s(d, {
          size: "xs",
          color: "transparent",
          type: "button",
          onClick: r[0] || (r[0] = l((e) => a.$emit("close", e), ["stop"]))
        }, {
          default: i(() => [
            s(o(V), { class: "maz-text-lg" })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      u("div", T, [
        (m(!0), _(
          D,
          null,
          S(k.value, (e) => (m(), Y(d, {
            key: e.label,
            size: "sm",
            type: "button",
            class: B({
              "--is-selected": o(y)(e.date, n.calendarDate, "year")
            }),
            color: o(y)(e.date, n.calendarDate, "year") ? n.color : "transparent",
            onClick: l(($) => h(e.date), ["stop"])
          }, {
            default: i(() => [
              M(
                q(e.label),
                1
                /* TEXT */
              )
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["class", "color", "onClick"]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]));
  }
}), J = /* @__PURE__ */ N(X, [["__scopeId", "data-v-698468b9"]]);
export {
  J as default
};

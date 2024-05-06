import '../assets/MazPickerMonthSwitcher.css';
import { defineComponent as g, computed as v, openBlock as l, createElementBlock as d, createElementVNode as m, createVNode as u, withModifiers as p, withCtx as h, unref as s, normalizeClass as f, Fragment as w, renderList as x, createBlock as D, createTextVNode as M, toDisplayString as S } from "vue";
import { d as C, c as n, a as c, i as k, _ as B } from "./MazPicker-_ndeWiCy.mjs";
import z from "./MazBtn-DWDitOvL.mjs";
import { X as q } from "./x-mark-CKwYEQQZ.mjs";
const $ = { class: "maz-picker-month-switcher" }, N = { class: "maz-picker-month-switcher__header" }, V = /* @__PURE__ */ g({
  __name: "MazPickerMonthSwitcher",
  props: {
    calendarDate: { type: String, required: !0 },
    color: { type: String, required: !0 },
    locale: { type: String, required: !0 },
    double: { type: Boolean, required: !0 }
  },
  emits: ["update:calendar-date", "close"],
  setup(r, { emit: b }) {
    const a = r, i = b, _ = v(() => Array.from({ length: 12 }, (o, e) => e).map((o) => {
      const e = C(a.calendarDate).set("month", o);
      return a.double ? {
        label: `${n(
          c(e.format(), a.locale, {
            month: "short"
          })
        )} - ${n(
          c(e.add(1, "month").format(), a.locale, {
            month: "short"
          })
        )}`,
        date: e
      } : {
        label: n(
          c(e.format(), a.locale, {
            month: "long"
          })
        ),
        date: e
      };
    })), y = (o) => {
      i("update:calendar-date", o.format()), i("close");
    };
    return (o, e) => (l(), d("div", $, [
      m("div", N, [
        u(z, {
          size: "xs",
          color: "transparent",
          type: "button",
          onClick: e[0] || (e[0] = p((t) => o.$emit("close", t), ["stop"]))
        }, {
          default: h(() => [
            u(s(q), { class: "maz-text-lg" })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      m(
        "div",
        {
          class: f(["maz-picker-month-switcher__main", { "--has-double": r.double }])
        },
        [
          (l(!0), d(
            w,
            null,
            x(_.value, (t) => (l(), D(z, {
              key: t.label,
              size: a.double ? "sm" : "xs",
              class: f({
                "--is-selected": s(k)(t.date, r.calendarDate, "month")
              }),
              color: s(k)(t.date, r.calendarDate, "month") ? r.color : "transparent",
              type: "button",
              onClick: p((E) => y(t.date), ["stop"])
            }, {
              default: h(() => [
                M(
                  S(t.label),
                  1
                  /* TEXT */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["size", "class", "color", "onClick"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )
    ]));
  }
}), A = /* @__PURE__ */ B(V, [["__scopeId", "data-v-0730e711"]]);
export {
  A as default
};

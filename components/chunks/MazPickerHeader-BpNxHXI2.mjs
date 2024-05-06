import '../assets/MazPickerHeader.css';
import { defineComponent as q, computed as l, ref as D, watch as j, openBlock as r, createElementBlock as o, normalizeClass as k, createVNode as d, TransitionGroup as c, withCtx as p, Fragment as y, renderList as f, toDisplayString as v, createCommentVNode as g } from "vue";
import { a as i, c as h, d as Z, _ as z } from "./MazPicker-_ndeWiCy.mjs";
const B = {
  key: 0,
  class: "m-picker-header__date"
}, w = /* @__PURE__ */ q({
  __name: "MazPickerHeader",
  props: {
    modelValue: {
      type: [String, Object],
      default: void 0
    },
    color: { type: String, required: !0 },
    locale: { type: String, required: !0 },
    noShortcuts: { type: Boolean, required: !0 },
    double: { type: Boolean, required: !0 },
    hasDate: { type: Boolean, required: !0 },
    hasTime: { type: Boolean, required: !0 },
    formatterOptions: {
      type: Object,
      required: !0
    },
    calendarDate: { type: String, required: !0 }
  },
  setup(m) {
    const e = m, _ = l(
      () => {
        var t;
        return typeof e.modelValue == "string" ? e.modelValue : (t = e.modelValue) == null ? void 0 : t.start;
      }
    ), s = D("maz-slidevnext"), O = l(() => e.modelValue && typeof e.modelValue == "object" ? `${e.modelValue.start ? i(e.modelValue.start, e.locale, {
      year: "numeric",
      timeZone: e.formatterOptions.timeZone
    }) : "..."} - ${e.modelValue.end ? i(e.modelValue.end, e.locale, {
      year: "numeric",
      timeZone: e.formatterOptions.timeZone
    }) : "..."}` : typeof e.modelValue == "string" ? i(e.modelValue, e.locale, {
      year: "numeric",
      timeZone: e.formatterOptions.timeZone
    }) : "-"), S = l(() => e.hasDate ? [O.value] : void 0), $ = l(() => {
      if (e.modelValue && typeof e.modelValue == "object" && (e.modelValue.start || e.modelValue.end)) {
        const t = e.noShortcuts && !e.double ? "short" : "long";
        return `${e.modelValue.start ? h(
          i(e.modelValue.start, e.locale, {
            weekday: t,
            month: t,
            day: "numeric",
            timeZone: e.formatterOptions.timeZone
          })
        ) : "..."} - ${e.modelValue.end ? h(
          i(e.modelValue.end, e.locale, {
            weekday: t,
            month: t,
            day: "numeric",
            timeZone: e.formatterOptions.timeZone
          })
        ) : "..."}`;
      } else if (typeof e.modelValue == "string")
        return h(
          i(e.modelValue, e.locale, {
            weekday: "long",
            month: "long",
            day: "numeric",
            timeZone: e.formatterOptions.timeZone
          })
        );
      return "-";
    }), x = l(() => e.hasDate ? [$.value] : void 0), b = l(() => _.value ? i(_.value, e.locale, {
      timeStyle: "short",
      timeZone: e.formatterOptions.timeZone,
      hour12: e.formatterOptions.hour12
    }) : void 0), V = l(() => e.hasTime ? [b.value] : void 0);
    return j(
      () => e.modelValue,
      (t, u) => {
        const a = typeof t == "object" ? t.start : t, n = typeof u == "object" ? u.start : u;
        s.value = Z(a).isAfter(n, "date") || Z(a).isSame(n, "date") ? "maz-slidevnext" : "maz-slidevprev";
      }
    ), (t, u) => (r(), o(
      "div",
      {
        class: k(["m-picker-header", [`--${m.color}`]])
      },
      [
        m.hasDate ? (r(), o("div", B, [
          d(c, {
            name: s.value,
            tag: "div",
            class: "m-picker-header__year-transition"
          }, {
            default: p(() => [
              (r(!0), o(
                y,
                null,
                f(S.value, (a, n) => (r(), o(
                  "span",
                  {
                    key: `${a}-${n}`,
                    class: "m-picker-header__year-text"
                  },
                  v(a),
                  1
                  /* TEXT */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"]),
          d(c, {
            name: s.value,
            tag: "div",
            class: "m-picker-header__date-transition"
          }, {
            default: p(() => [
              (r(!0), o(
                y,
                null,
                f(x.value, (a, n) => (r(), o(
                  "span",
                  {
                    key: `${a}-${n}`,
                    class: "m-picker-header__date-text"
                  },
                  v(a),
                  1
                  /* TEXT */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ])) : g("v-if", !0),
        V.value ? (r(), o(
          "div",
          {
            key: 1,
            class: k(["m-picker-header__time", { "--has-date": m.hasDate }])
          },
          [
            d(c, {
              name: s.value,
              tag: "div",
              class: "m-picker-header__time-transition"
            }, {
              default: p(() => [
                (r(!0), o(
                  y,
                  null,
                  f(V.value, (a, n) => (r(), o(
                    "span",
                    {
                      key: `${a}-${n}`,
                      class: "m-picker-header__time-text"
                    },
                    v(a),
                    1
                    /* TEXT */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["name"])
          ],
          2
          /* CLASS */
        )) : g("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}), N = /* @__PURE__ */ z(w, [["__scopeId", "data-v-fcf07ce1"]]);
export {
  N as default
};

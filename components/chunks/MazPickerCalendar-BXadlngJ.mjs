import '../assets/MazPickerCalendar.css';
import { openBlock as d, createElementBlock as f, createElementVNode as N, defineComponent as P, computed as o, createVNode as k, withCtx as S, unref as B, createTextVNode as X, toDisplayString as H, useCssVars as ue, ref as O, watch as ce, TransitionGroup as me, Fragment as W, renderList as j, normalizeClass as Y, createBlock as q, defineAsyncComponent as G, createCommentVNode as E, Transition as Z } from "vue";
import { d as D, c as R, a as I, _ as A, g as ve, b as fe, i as z, e as ye, h as pe, j as he, k as be } from "./MazPicker-_ndeWiCy.mjs";
import $ from "./MazBtn-DWDitOvL.mjs";
const De = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, ke = /* @__PURE__ */ N(
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
), ge = [
  ke
];
function Ve(r, g) {
  return d(), f("svg", De, [...ge]);
}
const _ = { render: Ve }, we = { class: "m-picker-calendar-switcher" }, ze = /* @__PURE__ */ P({
  __name: "MazPickerCalendarSwitcher",
  props: {
    calendarDate: { type: String, default: void 0 },
    locale: { type: String, required: !0 },
    double: { type: Boolean, required: !0 }
  },
  emits: [
    "previous",
    "next",
    "open-month-switcher",
    "open-year-switcher",
    "update:calendar-date"
  ],
  setup(r, { emit: g }) {
    const e = r, y = g, s = o(() => D(e.calendarDate)), n = o(() => e.double ? `${R(
      I(s.value.format(), e.locale, { month: "long" })
    )} - ${R(
      I(s.value.add(1, "month").format(), e.locale, {
        month: "long"
      })
    )}` : R(I(s.value.format(), e.locale, { month: "long" }))), w = o(
      () => I(s.value.format(), e.locale, { year: "numeric" })
    ), u = () => {
      y("update:calendar-date", D(e.calendarDate).subtract(1, "month").format());
    }, m = () => {
      y("update:calendar-date", D(e.calendarDate).add(1, "month").format());
    };
    return (V, v) => (d(), f("div", we, [
      k($, {
        size: "xs",
        color: "transparent",
        type: "button",
        onClick: u
      }, {
        default: S(() => [
          k(B(_), { class: "maz-text-lg" })
        ]),
        _: 1
        /* STABLE */
      }),
      k($, {
        size: "sm",
        color: "transparent",
        type: "button",
        class: "m-picker-calendar-switcher__date",
        onClick: v[0] || (v[0] = (b) => V.$emit("open-month-switcher", b))
      }, {
        default: S(() => [
          X(
            H(n.value),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      k($, {
        size: "sm",
        color: "transparent",
        type: "button",
        class: "m-picker-calendar-switcher__date",
        onClick: v[1] || (v[1] = (b) => V.$emit("open-year-switcher", b))
      }, {
        default: S(() => [
          X(
            H(w.value),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      k($, {
        size: "xs",
        color: "transparent",
        type: "button",
        onClick: m
      }, {
        default: S(() => [
          k(B(_), { class: "maz-rotate-180 maz-text-lg" })
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), Se = /* @__PURE__ */ A(ze, [["__scopeId", "data-v-d8857bed"]]), Me = /* @__PURE__ */ P({
  __name: "MazPickerCalendarGrid",
  props: {
    modelValue: {
      type: [String, Object],
      default: void 0
    },
    calendarDate: { type: String, required: !0 },
    hasTime: { type: Boolean, required: !0 },
    locale: { type: String, required: !0 },
    firstDayOfWeek: { type: Number, required: !0 },
    color: { type: String, required: !0 },
    minDate: { type: String, default: void 0 },
    maxDate: { type: String, default: void 0 },
    disabledWeekly: { type: Array, required: !0 },
    disabledDates: { type: Array, required: !0 },
    hoverredDay: { type: Object, default: void 0 },
    disabled: { type: Boolean, required: !0 }
  },
  emits: ["update:model-value", "update:hoverred-day"],
  setup(r, { emit: g }) {
    ue((t) => ({
      f23621ca: m.value,
      "58cfd862": v.value,
      ba90d262: V.value
    }));
    const e = r, y = g, s = O(), n = O("maz-slidenext"), w = o(() => [e.calendarDate]), u = o(() => e.modelValue && typeof e.modelValue == "object"), m = o(() => `var(--maz-color-${e.color}-alpha-20)`), V = o(() => `var(--maz-color-${e.color}-alpha)`), v = o(() => `var(--maz-color-${e.color}-alpha-20)`), b = o({
      get: () => e.modelValue,
      set: (t) => y("update:model-value", t)
    }), C = o(
      () => Array.from({ length: ve(e.calendarDate) }, (t, a) => a + 1).map((t) => ({
        label: t,
        date: D(e.calendarDate).set("date", t)
      }))
    ), U = o(() => (fe(e.calendarDate) - e.firstDayOfWeek + 7) % 7), p = (t) => {
      const a = e.modelValue;
      a.start && !a.end && t && t.isAfter(a.start) ? y("update:hoverred-day", t) : y("update:hoverred-day");
    }, M = (t) => {
      const a = e.modelValue;
      return !a.start || !e.hoverredDay ? void 0 : D(t).isBetween(a.start, e.hoverredDay, "date", "(]") ? 3 : void 0;
    }, l = (t) => {
      if (e.hoverredDay)
        return D(t).isSame(e.hoverredDay);
    }, i = (t) => {
      var a;
      return e.modelValue && e.modelValue && typeof e.modelValue == "object" && (a = e.modelValue) != null && a.start ? z(t, e.modelValue.start, "date") : !1;
    }, x = (t) => {
      var a;
      return e.modelValue && e.modelValue && typeof e.modelValue == "object" && (a = e.modelValue) != null && a.end ? z(t, e.modelValue.end, "date") : !1;
    }, ee = (t) => {
      const a = e.modelValue;
      return typeof a == "object" ? a.start && z(t, a.start, "date") || a.end && z(t, a.end, "date") || Q(t) ? e.color : "transparent" : K(t) ? e.color : "transparent";
    }, J = (t) => {
      if (e.modelValue && typeof e.modelValue == "object") {
        if (e.modelValue.start && z(t, e.modelValue.start, "date"))
          return 1;
        if (e.modelValue.end) {
          if (z(t, e.modelValue.end, "date"))
            return 1;
          if (Q(t))
            return 2;
        }
      } else if (K(t))
        return 1;
      return 0;
    }, te = (t) => {
      u.value && p();
      const a = t.format();
      if (typeof b.value == "object") {
        let h = b.value;
        h.start && h.end && (h = {
          start: void 0,
          end: void 0
        });
        const F = D(a).isBefore(h.start, "date");
        b.value = !h.start || F ? {
          start: a,
          end: void 0
        } : {
          start: h.start,
          end: a
        };
      } else
        b.value = a;
    }, ae = (t) => ye(t), K = (t) => {
      if (!e.modelValue)
        return !1;
      const a = e.modelValue;
      return z(t, a, "date");
    }, Q = (t) => {
      const a = e.modelValue;
      return !a.start || !a.end ? !1 : D(t).isBetween(a.start, a.end, "date", "()");
    }, re = (t) => e.minDate ? D(t).isBefore(e.minDate, "date") : !1, le = (t) => {
      var a;
      return (a = e.disabledWeekly) != null && a.length ? e.disabledWeekly.some((h) => pe(t, h)) : !1;
    }, oe = (t) => {
      var a;
      return (a = e.disabledDates) != null && a.length ? e.disabledDates.some((h) => z(t, h, "date")) : !1;
    }, de = (t) => e.maxDate ? D(t).isAfter(e.maxDate, "date") : !1, ne = he(() => {
      s.value && (s.value.style.minHeight = "");
    }, 400), se = () => {
      var t;
      s.value && (s.value.style.minHeight = `${((t = s.value) == null ? void 0 : t.clientHeight) || 176}px`, ne());
    };
    return ce(
      () => e.calendarDate,
      (t, a) => {
        n.value = D(t).isAfter(a, "date") ? "maz-slidenext" : "maz-slideprev", se();
      }
    ), (t, a) => (d(), f(
      "div",
      {
        ref_key: "MazPickerGrid",
        ref: s,
        class: "maz-picker-calendar-grid"
      },
      [
        k(me, { name: n.value }, {
          default: S(() => [
            (d(!0), f(
              W,
              null,
              j([w.value], (h, F) => (d(), f(
                "div",
                {
                  key: `${h[F]}`,
                  class: Y(["maz-picker-calendar-grid__container", { "--is-range": u.value }])
                },
                [
                  (d(!0), f(
                    W,
                    null,
                    j(U.value, (L) => (d(), f("div", { key: L }))),
                    128
                    /* KEYED_FRAGMENT */
                  )),
                  (d(!0), f(
                    W,
                    null,
                    j(C.value, ({ label: L, date: c }, ie) => (d(), q($, {
                      key: ie,
                      size: "mini",
                      color: ee(c),
                      type: "button",
                      disabled: r.disabled || re(c) || de(c) || le(c) || oe(c),
                      class: Y({
                        "--is-today": ae(c),
                        "--is-first": i(c),
                        "--is-last": x(c) || u.value && l(c),
                        "--is-selected": J(c) === 1,
                        "--is-between": J(c) === 2,
                        "--is-between-hoverred": u.value ? M(c) === 3 : void 0
                      }),
                      onClick: (T) => te(c),
                      onMouseover: (T) => u.value ? p(c) : void 0,
                      onMouseleave: a[0] || (a[0] = (T) => u.value ? p() : void 0),
                      onFocus: (T) => u.value ? p(c) : void 0,
                      onBlur: a[1] || (a[1] = (T) => u.value ? p() : void 0)
                    }, {
                      default: S(() => [
                        N(
                          "span",
                          null,
                          H(L),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["color", "disabled", "class", "onClick", "onMouseover", "onFocus"]))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                2
                /* CLASS */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Ce = /* @__PURE__ */ A(Me, [["__scopeId", "data-v-5cd73ae4"]]), xe = { class: "maz-picker-calendar-days" }, qe = /* @__PURE__ */ P({
  __name: "MazPickerCalendarDays",
  props: {
    locale: { type: String, required: !0 },
    firstDayOfWeek: { type: Number, required: !0 }
  },
  setup(r) {
    const g = r, e = o(() => be(g.locale, g.firstDayOfWeek));
    return (y, s) => (d(), f("div", xe, [
      (d(!0), f(
        W,
        null,
        j(e.value, (n) => (d(), f(
          "span",
          { key: n },
          H(n),
          1
          /* TEXT */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))
    ]));
  }
}), $e = /* @__PURE__ */ A(qe, [["__scopeId", "data-v-a7b7f610"]]), Be = { class: "maz-picker-calendar-month --has-padding" }, Oe = /* @__PURE__ */ P({
  __name: "MazPickerCalendarMonth",
  props: {
    modelValue: {
      type: [String, Object],
      default: void 0
    },
    color: { type: String, required: !0 },
    locale: { type: String, required: !0 },
    hasTime: { type: Boolean, required: !0 },
    firstDayOfWeek: { type: Number, required: !0 },
    calendarDate: { type: String, required: !0 },
    offsetMonth: { type: Number, default: 0 },
    minDate: { type: String, default: void 0 },
    maxDate: { type: String, default: void 0 },
    disabledWeekly: { type: Array, required: !0 },
    disabledDates: { type: Array, required: !0 },
    hoverredDay: { type: Object, default: void 0 },
    disabled: { type: Boolean, required: !0 }
  },
  emits: ["update:model-value", "update:calendar-date", "update:hoverred-day"],
  setup(r, { emit: g }) {
    const e = r, y = g, s = o({
      get: () => e.modelValue,
      set: (m) => y("update:model-value", m)
    }), n = o({
      get: () => e.hoverredDay,
      set: (m) => y("update:hoverred-day", m)
    });
    function w(m) {
      return D(e.calendarDate).add(m, "month").format();
    }
    const u = o({
      get: () => w(e.offsetMonth),
      set: (m) => y("update:calendar-date", m)
    });
    return (m, V) => (d(), f("div", Be, [
      k($e, {
        locale: r.locale,
        "first-day-of-week": r.firstDayOfWeek,
        class: "maz-picker-calendar-month__days"
      }, null, 8, ["locale", "first-day-of-week"]),
      k(Ce, {
        modelValue: s.value,
        "onUpdate:modelValue": V[0] || (V[0] = (v) => s.value = v),
        "hoverred-day": n.value,
        "onUpdate:hoverredDay": V[1] || (V[1] = (v) => n.value = v),
        locale: r.locale,
        color: r.color,
        "has-time": r.hasTime,
        "calendar-date": u.value,
        "first-day-of-week": r.firstDayOfWeek,
        "min-date": r.minDate,
        "max-date": r.maxDate,
        "disabled-weekly": r.disabledWeekly,
        "disabled-dates": r.disabledDates,
        disabled: r.disabled
      }, null, 8, ["modelValue", "hoverred-day", "locale", "color", "has-time", "calendar-date", "first-day-of-week", "min-date", "max-date", "disabled-weekly", "disabled-dates", "disabled"])
    ]));
  }
}), We = /* @__PURE__ */ A(Oe, [["__scopeId", "data-v-429e64ae"]]), je = { class: "maz-picker-calendar flex" }, Pe = { class: "maz-picker-calendar__months" }, Ae = /* @__PURE__ */ P({
  __name: "MazPickerCalendar",
  props: {
    modelValue: {
      type: [String, Object],
      default: void 0
    },
    calendarDate: { type: String, required: !0 },
    color: { type: String, required: !0 },
    locale: { type: String, required: !0 },
    firstDayOfWeek: { type: Number, required: !0 },
    double: { type: Boolean, required: !0 },
    minDate: { type: String, default: void 0 },
    maxDate: { type: String, default: void 0 },
    disabledWeekly: { type: Array, required: !0 },
    disabledDates: { type: Array, required: !0 },
    shortcuts: {
      type: Array,
      required: !0
    },
    noShortcuts: { type: Boolean, required: !0 },
    hasTime: { type: Boolean, required: !0 },
    shortcut: { type: String, default: void 0 },
    disabled: { type: Boolean, required: !0 }
  },
  emits: ["update:model-value", "update:calendar-date"],
  setup(r, { emit: g }) {
    const e = G(() => import("./MazPickerMonthSwitcher-BzEZ5x7j.mjs")), y = G(() => import("./MazPickerYearSwitcher-B2Dk5iso.mjs")), s = G(() => import("./MazPickerShortcuts-BreMu-Sy.mjs")), n = r, w = g, u = O(), m = o(() => n.modelValue && typeof n.modelValue == "object"), V = o(
      () => !n.noShortcuts && n.shortcuts.length > 0 && m.value
    ), v = O(!1), b = O(!1), C = o({
      get: () => n.modelValue,
      set: (M) => w("update:model-value", M)
    }), U = o(() => Array.from({ length: n.double ? 2 : 1 }, (M, l) => l)), p = o({
      get: () => n.calendarDate,
      set: (M) => w("update:calendar-date", M)
    });
    return (M, l) => (d(), f("div", je, [
      V.value ? (d(), q(B(s), {
        key: 0,
        modelValue: C.value,
        "onUpdate:modelValue": l[0] || (l[0] = (i) => C.value = i),
        color: r.color,
        shortcuts: r.shortcuts,
        shortcut: r.shortcut,
        double: r.double,
        disabled: r.disabled
      }, null, 8, ["modelValue", "color", "shortcuts", "shortcut", "double", "disabled"])) : E("v-if", !0),
      N(
        "div",
        {
          class: Y(["maz-picker-calendar__main", { "--has-double": r.double }])
        },
        [
          k(Se, {
            "calendar-date": p.value,
            "onUpdate:calendarDate": l[1] || (l[1] = (i) => p.value = i),
            locale: r.locale,
            double: r.double,
            onOpenMonthSwitcher: l[2] || (l[2] = (i) => v.value = !0),
            onOpenYearSwitcher: l[3] || (l[3] = (i) => b.value = !0)
          }, null, 8, ["calendar-date", "locale", "double"]),
          k(Z, { name: "maz-picker-slide" }, {
            default: S(() => [
              v.value ? (d(), q(B(e), {
                key: 0,
                "calendar-date": p.value,
                "onUpdate:calendarDate": l[4] || (l[4] = (i) => p.value = i),
                color: r.color,
                double: r.double,
                locale: r.locale,
                onClose: l[5] || (l[5] = (i) => v.value = !1)
              }, null, 8, ["calendar-date", "color", "double", "locale"])) : E("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }),
          k(Z, { name: "maz-picker-slide" }, {
            default: S(() => [
              b.value ? (d(), q(B(y), {
                key: 0,
                "calendar-date": p.value,
                "onUpdate:calendarDate": l[6] || (l[6] = (i) => p.value = i),
                color: r.color,
                locale: r.locale,
                onClose: l[7] || (l[7] = (i) => b.value = !1)
              }, null, 8, ["calendar-date", "color", "locale"])) : E("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }),
          N("div", Pe, [
            (d(!0), f(
              W,
              null,
              j(U.value, (i) => (d(), q(We, {
                key: i,
                modelValue: C.value,
                "onUpdate:modelValue": l[8] || (l[8] = (x) => C.value = x),
                "hoverred-day": u.value,
                "onUpdate:hoverredDay": l[9] || (l[9] = (x) => u.value = x),
                "calendar-date": p.value,
                locale: r.locale,
                "has-time": r.hasTime,
                color: r.color,
                "offset-month": i,
                "first-day-of-week": r.firstDayOfWeek,
                "min-date": r.minDate,
                "max-date": r.maxDate,
                disabled: r.disabled,
                "disabled-weekly": r.disabledWeekly,
                "disabled-dates": r.disabledDates
              }, null, 8, ["modelValue", "hoverred-day", "calendar-date", "locale", "has-time", "color", "offset-month", "first-day-of-week", "min-date", "max-date", "disabled", "disabled-weekly", "disabled-dates"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        2
        /* CLASS */
      )
    ]));
  }
}), Te = /* @__PURE__ */ A(Ae, [["__scopeId", "data-v-8ce2d3a5"]]), Ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Te
}, Symbol.toStringTag, { value: "Module" }));
export {
  _ as C,
  Ue as M
};

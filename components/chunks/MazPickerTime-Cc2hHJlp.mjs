import '../assets/MazPickerTime.css';
import { defineComponent as W, ref as x, computed as n, watch as B, nextTick as h, openBlock as d, createElementBlock as _, normalizeClass as g, Fragment as w, renderList as M, createElementVNode as b, normalizeStyle as S, createBlock as E, withModifiers as G, withCtx as J, createTextVNode as K, toDisplayString as Q } from "vue";
import { d as i, f as $, s as R, _ as U } from "./MazPicker-_ndeWiCy.mjs";
import X from "./MazBtn-DWDitOvL.mjs";
const Y = { class: "m-picker-time__column__items" }, Z = /* @__PURE__ */ W({
  __name: "MazPickerTime",
  props: {
    modelValue: {
      type: [String, Object],
      default: void 0
    },
    calendarDate: { type: String, required: !0 },
    formatterOptions: {
      type: Object,
      required: !0
    },
    locale: { type: String, required: !0 },
    color: { type: String, required: !0 },
    isOpen: { type: Boolean, required: !0 },
    hasDate: { type: Boolean, required: !0 },
    minuteInterval: { type: Number, required: !0 },
    disabledHours: { type: Array, default: void 0 },
    format: { type: String, required: !0 },
    isHour12: { type: Boolean, required: !0 },
    minDate: { type: String, default: void 0 },
    maxDate: { type: String, default: void 0 },
    disabled: { type: Boolean, required: !0 }
  },
  emits: ["update:model-value"],
  setup(v, { emit: P }) {
    const a = v, T = (e) => {
      if (!a.disabledHours)
        return e;
      const t = Array.from({ length: 24 }, (u, s) => s).filter(
        (u) => {
          var s;
          return !((s = a.disabledHours) != null && s.includes(u)) || !0;
        }
      ), r = $(t, e);
      return r !== e && q("hour", i(o.value).set("hour", r)), r;
    }, z = P, l = x(), c = x(), p = n(() => typeof o.value == "string" ? T(i(o.value).get("hour")) : void 0), A = n(
      () => typeof o.value == "string" ? $(
        H.value.map(({ value: e }) => e.get("minute")),
        i(o.value).get("minute")
      ) : void 0
    ), C = (e) => {
      if (a.isHour12) {
        const r = y.value === "pm" ? e + 12 : e;
        return r === 12 ? 0 : r === 24 ? 12 : r;
      } else
        return e;
    }, N = n(() => Array.from({ length: a.isHour12 ? 12 : 24 }, (e, t) => t).map((e) => {
      const t = e + (a.isHour12 ? 1 : 0), r = C(t), u = i(o.value).set("hour", r), s = I(r) || (a.minDate && o.value ? i(a.minDate).isAfter(u, "hour") : !1) || (a.maxDate && o.value ? i(a.maxDate).isBefore(u, "hour") : !1);
      return {
        label: `${t < 10 ? "0" : ""}${t}`,
        value: i(o.value).set("hour", r),
        isDisabled: s
      };
    })), H = n(() => {
      const e = Math.floor(60 / a.minuteInterval) - 0;
      return Array.from({ length: e }, (t, r) => r * a.minuteInterval).map((t) => {
        const r = i(o.value).set("minute", t), u = (a.minDate && o.value ? i(a.minDate).isAfter(r, "minute") : !1) || (a.maxDate && o.value ? i(a.maxDate).isBefore(r, "minute") : !1);
        return {
          label: `${t < 10 ? "0" : ""}${t}`,
          value: r,
          isDisabled: u
        };
      });
    }), y = n(() => typeof p.value == "number" ? p.value >= 12 ? "pm" : "am" : void 0), V = n(
      () => a.isHour12 ? [
        { label: "AM", value: "am" },
        { label: "PM", value: "pm" }
      ] : []
    ), j = n(() => {
      const e = [
        {
          identifier: "hour",
          values: N.value
        },
        {
          identifier: "minute",
          values: H.value
        }
      ];
      return a.isHour12 && e.push({
        identifier: "ampm",
        values: V.value
      }), e;
    }), o = n({
      get: () => a.modelValue,
      set: (e) => {
        z("update:model-value", e);
      }
    });
    B(
      () => a.isOpen,
      async (e) => {
        var t;
        if (e) {
          if (await h(), l.value) {
            const r = l.value.querySelector(
              ".m-picker-time__column .m-btn"
            ), u = r == null ? void 0 : r.offsetHeight, m = ((t = l.value) == null ? void 0 : t.offsetHeight) / 2 - u / 2;
            c.value = m / 16;
          }
          k(!1);
        }
      },
      { immediate: !0 }
    ), B(
      () => a.modelValue,
      async (e, t) => {
        e !== t && (await h(), k(!0));
      },
      { immediate: !0 }
    );
    const k = (e) => {
      f("hour", e), f("minute", e), a.isHour12 && f("ampm", e);
    }, I = (e) => (a.disabledHours && a.disabledHours.includes(e)) ?? !1, D = (e, t) => t === "am" || t === "pm" ? y.value === t : e === "hour" ? p.value === t.get(e) : e === "minute" ? A.value === t.get(e) : !1, f = async (e, t = !0) => {
      if (l.value) {
        const r = l.value.querySelector(`.m-picker-time__column__${e}`), u = l.value.querySelector(
          `.m-picker-time__column__${e} .--is-selected`
        );
        c.value && r && u && l.value && (await h(), R(r, u, c.value * 16, t));
      }
    }, q = async (e, t) => {
      const r = i(o.value);
      if (e === "hour" && typeof t == "object" && (o.value = r.set("hour", t.get("hour")).format()), e === "minute" && typeof t == "object") {
        const u = r.set("minute", t.get("minute"));
        o.value = u.format();
      }
      if (e === "ampm" && (y.value !== t || !p.value) && (t === "am" && (o.value = r.set("hour", r.get("hour")).subtract(12, "hour").format()), t === "pm")) {
        const u = r.get("hour"), s = u + 12 > 12 && u + 12 < 24 ? u + 12 : u === 0 ? 12 : u;
        o.value = r.set("hour", s).format();
      }
      await h(), f(e);
    };
    return (e, t) => (d(), _(
      "div",
      {
        ref_key: "MazPickerTime",
        ref: l,
        class: g(["m-picker-time", { "--has-date": v.hasDate }])
      },
      [
        (d(!0), _(
          w,
          null,
          M(j.value, ({ values: r, identifier: u }, s) => (d(), _(
            "div",
            {
              key: s,
              class: g(["m-picker-time__column", [`m-picker-time__column__${u}`]])
            },
            [
              b(
                "div",
                {
                  style: S({ height: `${c.value}rem` }),
                  class: "m-picker-time__column__divider"
                },
                null,
                4
                /* STYLE */
              ),
              b("div", Y, [
                (d(!0), _(
                  w,
                  null,
                  M(r, ({ value: m, label: O, isDisabled: L }, F) => (d(), E(X, {
                    key: F,
                    size: "xs",
                    color: D(u, m) ? v.color : "transparent",
                    class: g({ "--is-selected": D(u, m) }),
                    disabled: L || v.disabled,
                    type: "button",
                    onClick: G((ee) => q(u, m), ["stop"])
                  }, {
                    default: J(() => [
                      K(
                        Q(O),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["color", "class", "disabled", "onClick"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              b(
                "div",
                {
                  style: S({ height: `${c.value}rem` }),
                  class: "m-picker-time__column__divider"
                },
                null,
                4
                /* STYLE */
              )
            ],
            2
            /* CLASS */
          ))),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), ae = /* @__PURE__ */ U(Z, [["__scopeId", "data-v-c85d4cb7"]]);
export {
  ae as default
};

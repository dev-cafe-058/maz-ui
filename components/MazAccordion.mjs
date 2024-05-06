import './assets/MazAccordion.css';
import { defineComponent as z, useCssVars as B, openBlock as v, createBlock as I, TransitionGroup as O, withCtx as $, renderSlot as f, nextTick as S, ref as y, computed as g, onMounted as V, onUnmounted as A, createElementBlock as b, normalizeClass as C, normalizeStyle as x, createElementVNode as u, withDirectives as k, vShow as w, getCurrentInstance as L, useSlots as T, Fragment as D, renderList as N, unref as _, createVNode as M } from "vue";
const j = /* @__PURE__ */ z({
  __name: "MazTransitionExpand",
  props: {
    animationDuration: { default: "300ms" }
  },
  setup(r) {
    B((t) => ({
      "26239c6e": t.animationDuration
    }));
    const l = (t) => {
      const a = getComputedStyle(t).width;
      t.style.width = a, t.style.position = "absolute", t.style.visibility = "hidden", t.style.height = "auto", t.style.top = "bottom";
      const s = getComputedStyle(t).height;
      t.style.width = "", t.style.position = "", t.style.visibility = "", t.style.height = "0px", getComputedStyle(t).height, S(() => {
        t.style.height = s;
      });
    }, n = (t) => {
      t.style.height = "auto";
    }, d = (t) => {
      const a = getComputedStyle(t).height;
      t.style.height = a, getComputedStyle(t).height, S(() => {
        t.style.height = "0px";
      });
    };
    return (t, a) => (v(), I(O, {
      class: "m-transition-expand",
      name: "maz-expand",
      tag: "div",
      onEnter: a[0] || (a[0] = (s) => l(s)),
      onAfterEnter: a[1] || (a[1] = (s) => n(s)),
      onLeave: a[2] || (a[2] = (s) => d(s))
    }, {
      default: $(() => [
        f(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}), E = (r, l) => {
  const n = r.__vccOpts || r;
  for (const [d, t] of l)
    n[d] = t;
  return n;
}, U = /* @__PURE__ */ E(j, [["__scopeId", "data-v-49c2af88"]]), q = { class: "inner" }, F = /* @__PURE__ */ z({
  __name: "MazCardSpotlight",
  props: {
    color: { default: "primary" },
    noElevation: { type: Boolean, default: !1 },
    padding: { type: Boolean, default: !0 },
    contentClass: { default: void 0 },
    contentStyle: { default: void 0 },
    innerOpacity: { default: 0.95 }
  },
  setup(r) {
    B((i) => ({
      "474a7292": i.innerOpacity,
      f69a3cbc: s.value
    }));
    const l = r, n = y(), d = y(), t = y(!1);
    function a({ clientX: i, clientY: c }) {
      var e, m, o;
      t.value = !0;
      const p = (e = d.value) == null ? void 0 : e.getBoundingClientRect();
      p && ((o = (m = n.value) == null ? void 0 : m.animate) == null || o.call(
        m,
        [
          {
            transform: `translate(${i - p.left - p.width / 2}px,${c - p.top - p.height / 2}px)`
          }
        ],
        {
          duration: 300,
          fill: "forwards"
        }
      ));
    }
    const s = g(() => `var(--maz-color-${l.color}-alpha)`), h = g(() => `var(--maz-color-${l.color}-alpha-20)`);
    return V(() => {
      window.addEventListener("mousemove", a);
    }), A(() => {
      window.removeEventListener("mousemove", a);
    }), (i, c) => (v(), b(
      "div",
      {
        class: C(["m-card-spotlight", { "maz-elevation": !i.noElevation }]),
        style: x({ backgroundColor: h.value })
      },
      [
        u("div", q, [
          u(
            "div",
            {
              class: C(["content", [{ "maz-p-4": i.padding }, i.contentClass]])
            },
            [
              f(i.$slots, "default", {}, void 0, !0)
            ],
            2
            /* CLASS */
          )
        ]),
        k(u(
          "div",
          {
            ref_key: "blobElement",
            ref: n,
            class: "blob",
            style: x({ backgroundColor: s.value })
          },
          null,
          4
          /* STYLE */
        ), [
          [w, t.value]
        ]),
        k(u(
          "div",
          {
            ref_key: "fakeblobElement",
            ref: d,
            class: "fakeblob"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [w, t.value]
        ])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), G = /* @__PURE__ */ E(F, [["__scopeId", "data-v-14299ed5"]]), P = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, R = /* @__PURE__ */ u(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "M12 4.5v15m7.5-7.5h-15"
  },
  null,
  -1
  /* HOISTED */
), W = [
  R
];
function H(r, l) {
  return v(), b("svg", P, [...W]);
}
const J = { render: H };
function K({
  componentName: r,
  providedId: l
}) {
  const n = L();
  return g(() => l ?? `${r}-${n == null ? void 0 : n.uid}`);
}
const Q = {
  class: "m-accordion",
  role: "presentation"
}, X = ["aria-controls", "aria-expanded", "onClick"], Y = ["id", "aria-labelledby", "aria-hidden"], Z = { class: "maz-pt-4" }, tt = /* @__PURE__ */ z({
  __name: "MazAccordion",
  props: {
    id: { default: void 0 },
    modelValue: { default: 0 }
  },
  emits: ["update:model-value"],
  setup(r, { emit: l }) {
    const n = r, d = l, t = K({
      componentName: "MazAccordion",
      providedId: n.id
    }), a = T(), s = g(
      () => Object.keys(a).filter((e) => e.startsWith("title-")).length
    ), h = y(n.modelValue), i = g({
      get: () => n.modelValue || h.value,
      set: (e) => {
        h.value = e, d("update:model-value", e);
      }
    });
    function c(e) {
      return i.value === e;
    }
    function p(e) {
      i.value === e ? (h.value = 0, d("update:model-value", 0)) : (h.value = e, d("update:model-value", e));
    }
    return (e, m) => (v(), b("div", Q, [
      (v(!0), b(
        D,
        null,
        N(s.value, (o) => (v(), I(
          G,
          {
            key: o,
            class: "spotlight"
          },
          {
            default: $(() => [
              u("button", {
                class: "header",
                "aria-controls": `step-${o}-${_(t)}`,
                "aria-expanded": c(o),
                onClick: (et) => p(o)
              }, [
                f(e.$slots, `title-${o}`, {
                  isOpen: c(o)
                }, void 0, !0),
                M(_(J), {
                  class: C(["header-icon", { "--rotate": c(o) }])
                }, null, 8, ["class"])
              ], 8, X),
              M(
                U,
                { "animation-duration": "300ms" },
                {
                  default: $(() => [
                    k(u("div", {
                      id: `step-${o}-${_(t)}`,
                      role: "region",
                      "aria-labelledby": `step-${o}-${_(t)}`,
                      "aria-hidden": !c(o)
                    }, [
                      u("div", Z, [
                        f(e.$slots, "content", {
                          isOpen: c(o)
                        }, void 0, !0),
                        f(e.$slots, `content-${o}`, {
                          isOpen: c(o)
                        }, void 0, !0)
                      ])
                    ], 8, Y), [
                      [w, c(o)]
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              )
            ]),
            _: 2
            /* DYNAMIC */
          },
          1024
          /* DYNAMIC_SLOTS */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))
    ]));
  }
}), nt = /* @__PURE__ */ E(tt, [["__scopeId", "data-v-7a54c498"]]);
export {
  nt as default
};

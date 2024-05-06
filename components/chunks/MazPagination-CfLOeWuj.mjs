import '../assets/MazPagination.css';
import { defineComponent as q, defineAsyncComponent as T, useAttrs as H, useSlots as J, onBeforeMount as K, computed as t, openBlock as s, createBlock as p, resolveDynamicComponent as F, normalizeClass as S, withCtx as k, createElementBlock as b, createCommentVNode as l, renderSlot as c, unref as m, createElementVNode as u, createVNode as v, mergeProps as h, createTextVNode as $, toDisplayString as M, Fragment as Q, renderList as W } from "vue";
const X = /* @__PURE__ */ q({
  __name: "MazBtn",
  props: {
    variant: { default: "button" },
    size: { default: "md" },
    color: { default: "primary" },
    type: { default: "button" },
    rounded: { type: Boolean },
    roundedSize: { default: "lg" },
    noRounded: { type: Boolean },
    outline: { type: Boolean },
    pastel: { type: Boolean },
    block: { type: Boolean },
    noUnderline: { type: Boolean },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    fab: { type: Boolean },
    icon: { default: void 0 },
    leftIcon: { default: void 0 },
    rightIcon: { default: void 0 },
    noPadding: { type: Boolean },
    noElevation: { type: Boolean },
    contentClass: { default: void 0 }
  },
  setup(y) {
    const V = T(() => import("./MazSpinner-BxYAlebs.mjs")), d = T(() => import("./MazIcon-Cxrv3_OK.mjs")), { href: P, to: C } = H(), B = J(), e = y;
    K(() => {
      e.icon && !e.fab && console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props');
    });
    const I = t(() => P ? "a" : C ? "router-link" : "button"), i = t(
      () => e.pastel ? `--${e.color}-pastel` : e.outline ? `--${e.color}-outline` : `--${e.color}`
    ), g = t(
      () => (e.loading || e.disabled) && I.value === "button"
    ), f = t(() => g.value ? "--cursor-default" : "--cursor-pointer"), R = t(() => `--is-${e.variant}`), z = t(() => e.loading && e.variant === "button"), E = t(() => !!B["left-icon"] || e.leftIcon), D = t(() => !!B["right-icon"] || e.rightIcon), O = t(() => E.value || D.value), U = t(() => e.fab && (e.icon || !!B.icon)), w = t(() => I.value === "button" ? e.type : void 0);
    return (a, j) => (s(), p(F(I.value), {
      disabled: g.value || void 0,
      class: S(["m-btn", [
        `--${a.size}`,
        !a.fab && a.roundedSize && `--rounded-${a.roundedSize}`,
        i.value,
        f.value,
        R.value,
        {
          "--block": a.block,
          "--no-underline": a.noUnderline,
          "--fab": a.fab,
          "--loading": a.loading,
          "--disabled": g.value,
          "--icon": O.value,
          "--rounded": a.rounded,
          "--no-rounded": a.noRounded,
          "--no-padding": a.noPadding,
          "--no-elevation": a.noElevation
        }
      ]]),
      type: w.value
    }, {
      default: k(() => [
        E.value ? (s(), b(
          "div",
          {
            key: 0,
            class: S(["m-btn__icon-left maz-flex maz-flex-center", { "maz-invisible": z.value }])
          },
          [
            l(`
        @slot left-icon - The icon to display on the left of the button
      `),
            c(a.$slots, "left-icon", {}, () => [
              typeof a.leftIcon == "string" ? (s(), p(m(d), {
                key: 0,
                name: a.leftIcon
              }, null, 8, ["name"])) : a.leftIcon ? (s(), p(F(a.leftIcon), { key: 1 })) : l("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : l("v-if", !0),
        U.value ? (s(), b(
          "div",
          {
            key: 1,
            class: S(["m-btn__icon", { "maz-invisible": z.value }])
          },
          [
            l(`
        @slot icon - The icon to display on the fab button
      `),
            c(a.$slots, "icon", {}, () => [
              typeof a.icon == "string" ? (s(), p(m(d), {
                key: 0,
                name: a.icon
              }, null, 8, ["name"])) : a.icon ? (s(), p(F(a.icon), { key: 1 })) : l("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : l("v-if", !0),
        a.$slots.default ? (s(), b(
          "span",
          {
            key: 2,
            class: S([{ "maz-invisible": z.value }, a.contentClass])
          },
          [
            l(`
        @slot default - The content of the button
      `),
            c(a.$slots, "default", {}, void 0, !0)
          ],
          2
          /* CLASS */
        )) : l("v-if", !0),
        D.value ? (s(), b(
          "div",
          {
            key: 3,
            class: S(["m-btn__icon-right", { "maz-invisible": z.value }])
          },
          [
            l(`
        @slot right-icon - The icon to display on the right of the button
      `),
            c(a.$slots, "right-icon", {}, () => [
              typeof a.rightIcon == "string" ? (s(), p(m(d), {
                key: 0,
                name: a.rightIcon
              }, null, 8, ["name"])) : a.rightIcon ? (s(), p(F(a.rightIcon), { key: 1 })) : l("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : l("v-if", !0),
        z.value ? (s(), p(m(V), {
          key: 4,
          class: "m-btn-loader",
          size: "2em",
          color: a.color
        }, null, 8, ["color"])) : l("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled", "class", "type"]));
  }
}), G = (y, V) => {
  const d = y.__vccOpts || y;
  for (const [P, C] of V)
    d[P] = C;
  return d;
}, N = /* @__PURE__ */ G(X, [["__scopeId", "data-v-4d87e490"]]), Y = {
  class: "m-pagination",
  role: "navigation",
  "aria-label": "page navigation"
}, Z = { class: "maz-sr-only" }, _ = { class: "maz-sr-only" }, x = ["id"], ee = { class: "maz-sr-only" }, ae = { class: "maz-sr-only" }, oe = { class: "maz-sr-only" }, ne = /* @__PURE__ */ q({
  __name: "MazPagination",
  props: {
    modelValue: { default: 1 },
    buttonProps: { default: void 0 },
    resultsSize: { default: void 0 },
    activeColor: { default: "primary" },
    size: { default: "md" },
    totalPages: {},
    pageRange: { default: 2 },
    loading: { type: Boolean }
  },
  emits: ["update:model-value"],
  setup(y, { emit: V }) {
    const d = T(() => import("./chevron-left-CcZaP3Rc.mjs")), P = T(() => import("./chevron-double-left-zoBBzOlh.mjs")), C = T(() => import("./ellipsis-horizontal-VGAsnCwV.mjs")), B = {
      size: "md",
      color: "theme",
      outline: !0,
      noElevation: !0,
      fab: !0
    }, e = y, I = V, i = t(() => ({
      ...B,
      ...e.buttonProps
    })), g = t(() => e.modelValue > 1 ? e.modelValue - 1 : 1), f = t(
      () => e.modelValue < e.totalPages ? e.modelValue + 1 : e.totalPages
    ), R = t(
      () => Array.from({ length: e.totalPages }, (o, r) => {
        const n = r + 1;
        return {
          number: n,
          isActive: n === e.modelValue,
          loading: n === e.modelValue && e.loading
        };
      })
    ), z = t(
      () => e.modelValue - e.pageRange > 1 ? R.value.slice(0, 1) : []
    ), E = t(
      () => e.modelValue < e.totalPages - e.pageRange ? R.value.slice(-1) : []
    ), D = t(() => e.modelValue - e.pageRange - 1 < 0 ? 0 : e.modelValue - e.pageRange - 1 > e.totalPages - e.pageRange ? e.totalPages - e.pageRange : e.modelValue - e.pageRange - 1), O = t(
      () => e.modelValue + e.pageRange > e.totalPages ? e.totalPages : e.modelValue + e.pageRange < e.pageRange ? e.pageRange : e.modelValue + e.pageRange
    ), U = t(() => R.value.slice(D.value, O.value)), w = t(
      () => e.modelValue - e.pageRange > 2 ? [{ divider: !0 }] : []
    ), a = t(
      () => e.modelValue < e.totalPages - e.pageRange - 1 ? [{ divider: !0 }] : []
    ), j = t(() => [
      ...z.value,
      ...w.value,
      ...U.value,
      ...a.value,
      ...E.value
    ]);
    function A(o) {
      o !== e.modelValue && I("update:model-value", o);
    }
    return (o, r) => (s(), b("nav", Y, [
      u("ul", null, [
        u("li", null, [
          v(N, h(i.value, {
            disabled: o.modelValue === 1,
            "aria-label": "First Page, Page 1",
            "aria-setsize": o.resultsSize ?? void 0,
            "aria-posinset": "1",
            size: o.size,
            onClick: r[0] || (r[0] = (n) => A(1))
          }), {
            default: k(() => [
              u("span", Z, [
                l(`
              @slot Accessible text for screen reader of the previous page button
                @binding {number} page - first page number
            `),
                c(o.$slots, "first-page-sr", { page: 1 }, () => [
                  $("First Page, page 1")
                ], !0)
              ]),
              v(m(P))
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["disabled", "aria-setsize", "size"])
        ]),
        u("li", null, [
          v(N, h(i.value, {
            disabled: o.modelValue === 1,
            "aria-label": `Previous Page, Page ${g.value}`,
            "aria-setsize": o.resultsSize ?? void 0,
            "aria-posinset": g.value,
            size: o.size,
            onClick: r[1] || (r[1] = (n) => A(g.value))
          }), {
            default: k(() => [
              u("span", _, [
                l(`
              @slot Accessible text for screen reader of the first page button
                @binding {number} page - previous page number
            `),
                c(o.$slots, "previous-page-sr", { page: g.value }, () => [
                  $(
                    " Previous Page, page " + M(g.value),
                    1
                    /* TEXT */
                  )
                ], !0)
              ]),
              v(m(d))
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["disabled", "aria-label", "aria-setsize", "aria-posinset", "size"])
        ]),
        (s(!0), b(
          Q,
          null,
          W(j.value, (n, L) => (s(), b("li", {
            id: "number" in n ? `button-${L}-${n.number}` : `ellipsis-${L}`,
            key: "number" in n ? `button-${L}-${n.number}` : `ellipsis-${L}`
          }, [
            "number" in n ? (s(), p(N, h({ key: 0 }, {
              ...i.value,
              color: n.isActive ? o.activeColor : i.value.color,
              outline: n.isActive ? !1 : i.value.outline
            }, {
              size: o.size,
              "aria-label": `Page ${n.number}`,
              "aria-current": n.isActive ? "true" : "false",
              "aria-setsize": o.resultsSize ?? void 0,
              loading: n.loading,
              "aria-posinset": n.number,
              class: { active: n.isActive },
              onClick: (te) => n.isActive ? void 0 : A(n.number)
            }), {
              default: k(() => [
                u("span", ee, [
                  l(`
                @slot Accessible text for screen reader of the current page button
                  @binding {number} page - current page number
              `),
                  c(o.$slots, "page-sr", {
                    page: n.number
                  }, () => [
                    $(
                      "Page " + M(n.number),
                      1
                      /* TEXT */
                    )
                  ], !0)
                ]),
                $(
                  " " + M(n.number),
                  1
                  /* TEXT */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1040, ["size", "aria-label", "aria-current", "aria-setsize", "loading", "aria-posinset", "class", "onClick"])) : n.divider ? (s(), b(
              "div",
              h({ key: 1 }, i.value, { class: "flex p-2 flex-center" }),
              [
                v(m(C))
              ],
              16
              /* FULL_PROPS */
            )) : l("v-if", !0)
          ], 8, x))),
          128
          /* KEYED_FRAGMENT */
        )),
        u("li", null, [
          v(N, h(i.value, {
            disabled: o.modelValue === o.totalPages,
            "aria-label": `Next Page, Page ${f.value}`,
            "aria-setsize": o.resultsSize ?? void 0,
            "aria-posinset": f.value,
            size: o.size,
            onClick: r[2] || (r[2] = (n) => A(f.value))
          }), {
            default: k(() => [
              u("span", ae, [
                l(`
              @slot Accessible text for screen reader of the next page button
                @binding {number} page - next page number
            `),
                c(o.$slots, "next-page-sr", { page: f.value }, () => [
                  $(
                    "Next Page, page " + M(f.value),
                    1
                    /* TEXT */
                  )
                ], !0)
              ]),
              v(m(d), { class: "-maz-rotate-180" })
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["disabled", "aria-label", "aria-setsize", "aria-posinset", "size"])
        ]),
        u("li", null, [
          v(N, h(i.value, {
            disabled: o.modelValue === o.totalPages,
            "aria-label": `Next Page, Page ${o.totalPages}`,
            "aria-setsize": o.resultsSize ?? void 0,
            "aria-posinset": o.totalPages,
            size: o.size,
            onClick: r[3] || (r[3] = (n) => A(o.totalPages))
          }), {
            default: k(() => [
              u("span", oe, [
                l(`
              @slot Accessible text for screen reader of the last page button
                @binding {number} page - last page number
            `),
                c(o.$slots, "last-page-sr", { page: o.totalPages }, () => [
                  $(
                    "Last Page, page " + M(o.totalPages),
                    1
                    /* TEXT */
                  )
                ], !0)
              ]),
              v(m(P), { class: "-maz-rotate-180" })
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["disabled", "aria-label", "aria-setsize", "aria-posinset", "size"])
        ])
      ])
    ]));
  }
}), se = /* @__PURE__ */ G(ne, [["__scopeId", "data-v-8c4883e6"]]);
export {
  se as M,
  G as _
};

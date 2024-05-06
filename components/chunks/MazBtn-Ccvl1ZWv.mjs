import '../assets/MazBtn.css';
import { defineComponent as E, defineAsyncComponent as B, useAttrs as R, useSlots as w, onBeforeMount as A, computed as l, openBlock as n, createBlock as a, resolveDynamicComponent as d, normalizeClass as r, withCtx as D, createElementBlock as c, createCommentVNode as t, renderSlot as f, unref as v } from "vue";
const L = /* @__PURE__ */ E({
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
  setup(u) {
    const p = B(() => import("./MazSpinner-B_WP-2kr.mjs")), i = B(() => import("./MazIcon-Cxrv3_OK.mjs")), { href: b, to: m } = R(), y = w(), e = u;
    A(() => {
      e.icon && !e.fab && console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props');
    });
    const h = l(() => b ? "a" : m ? "router-link" : "button"), I = l(
      () => e.pastel ? `--${e.color}-pastel` : e.outline ? `--${e.color}-outline` : `--${e.color}`
    ), g = l(
      () => (e.loading || e.disabled) && h.value === "button"
    ), C = l(() => g.value ? "--cursor-default" : "--cursor-pointer"), $ = l(() => `--is-${e.variant}`), s = l(() => e.loading && e.variant === "button"), k = l(() => !!y["left-icon"] || e.leftIcon), z = l(() => !!y["right-icon"] || e.rightIcon), M = l(() => k.value || z.value), S = l(() => e.fab && (e.icon || !!y.icon)), T = l(() => h.value === "button" ? e.type : void 0);
    return (o, U) => (n(), a(d(h.value), {
      disabled: g.value || void 0,
      class: r(["m-btn", [
        `--${o.size}`,
        !o.fab && o.roundedSize && `--rounded-${o.roundedSize}`,
        I.value,
        C.value,
        $.value,
        {
          "--block": o.block,
          "--no-underline": o.noUnderline,
          "--fab": o.fab,
          "--loading": o.loading,
          "--disabled": g.value,
          "--icon": M.value,
          "--rounded": o.rounded,
          "--no-rounded": o.noRounded,
          "--no-padding": o.noPadding,
          "--no-elevation": o.noElevation
        }
      ]]),
      type: T.value
    }, {
      default: D(() => [
        k.value ? (n(), c(
          "div",
          {
            key: 0,
            class: r(["m-btn__icon-left maz-flex maz-flex-center", { "maz-invisible": s.value }])
          },
          [
            t(`
        @slot left-icon - The icon to display on the left of the button
      `),
            f(o.$slots, "left-icon", {}, () => [
              typeof o.leftIcon == "string" ? (n(), a(v(i), {
                key: 0,
                name: o.leftIcon
              }, null, 8, ["name"])) : o.leftIcon ? (n(), a(d(o.leftIcon), { key: 1 })) : t("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : t("v-if", !0),
        S.value ? (n(), c(
          "div",
          {
            key: 1,
            class: r(["m-btn__icon", { "maz-invisible": s.value }])
          },
          [
            t(`
        @slot icon - The icon to display on the fab button
      `),
            f(o.$slots, "icon", {}, () => [
              typeof o.icon == "string" ? (n(), a(v(i), {
                key: 0,
                name: o.icon
              }, null, 8, ["name"])) : o.icon ? (n(), a(d(o.icon), { key: 1 })) : t("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : t("v-if", !0),
        o.$slots.default ? (n(), c(
          "span",
          {
            key: 2,
            class: r([{ "maz-invisible": s.value }, o.contentClass])
          },
          [
            t(`
        @slot default - The content of the button
      `),
            f(o.$slots, "default", {}, void 0, !0)
          ],
          2
          /* CLASS */
        )) : t("v-if", !0),
        z.value ? (n(), c(
          "div",
          {
            key: 3,
            class: r(["m-btn__icon-right", { "maz-invisible": s.value }])
          },
          [
            t(`
        @slot right-icon - The icon to display on the right of the button
      `),
            f(o.$slots, "right-icon", {}, () => [
              typeof o.rightIcon == "string" ? (n(), a(v(i), {
                key: 0,
                name: o.rightIcon
              }, null, 8, ["name"])) : o.rightIcon ? (n(), a(d(o.rightIcon), { key: 1 })) : t("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : t("v-if", !0),
        s.value ? (n(), a(v(p), {
          key: 4,
          class: "m-btn-loader",
          size: "2em",
          color: o.color
        }, null, 8, ["color"])) : t("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled", "class", "type"]));
  }
}), P = (u, p) => {
  const i = u.__vccOpts || u;
  for (const [b, m] of p)
    i[b] = m;
  return i;
}, N = /* @__PURE__ */ P(L, [["__scopeId", "data-v-4d87e490"]]);
export {
  N as M,
  P as _
};

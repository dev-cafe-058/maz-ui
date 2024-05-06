import '../assets/MazBtn.css';
import { defineComponent as E, defineAsyncComponent as B, useAttrs as O, useSlots as P, onBeforeMount as R, computed as l, openBlock as n, createBlock as a, resolveDynamicComponent as d, normalizeClass as r, withCtx as j, createElementBlock as c, createCommentVNode as t, renderSlot as f, unref as v } from "vue";
const w = /* @__PURE__ */ E({
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
    const p = B(() => import("./MazSpinner-BtpIL60X.mjs")), i = B(() => import("./MazIcon-Cxrv3_OK.mjs")), { href: b, to: y } = O(), m = P(), o = u;
    R(() => {
      o.icon && !o.fab && console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props');
    });
    const h = l(() => b ? "a" : y ? "router-link" : "button"), I = l(
      () => o.pastel ? `--${o.color}-pastel` : o.outline ? `--${o.color}-outline` : `--${o.color}`
    ), g = l(
      () => (o.loading || o.disabled) && h.value === "button"
    ), C = l(() => g.value ? "--cursor-default" : "--cursor-pointer"), $ = l(() => `--is-${o.variant}`), s = l(() => o.loading && o.variant === "button"), z = l(() => !!m["left-icon"] || o.leftIcon), k = l(() => !!m["right-icon"] || o.rightIcon), M = l(() => z.value || k.value), S = l(() => o.fab && (o.icon || !!m.icon)), T = l(() => h.value === "button" ? o.type : void 0);
    return (e, L) => (n(), a(d(h.value), {
      disabled: g.value || void 0,
      class: r(["m-btn", [
        `--${e.size}`,
        !e.fab && e.roundedSize && `--rounded-${e.roundedSize}`,
        I.value,
        C.value,
        $.value,
        {
          "--block": e.block,
          "--no-underline": e.noUnderline,
          "--fab": e.fab,
          "--loading": e.loading,
          "--disabled": g.value,
          "--icon": M.value,
          "--rounded": e.rounded,
          "--no-rounded": e.noRounded,
          "--no-padding": e.noPadding,
          "--no-elevation": e.noElevation
        }
      ]]),
      type: T.value
    }, {
      default: j(() => [
        z.value ? (n(), c(
          "div",
          {
            key: 0,
            class: r(["m-btn__icon-left maz-flex maz-flex-center", { "maz-invisible": s.value }])
          },
          [
            t(`
        @slot left-icon - The icon to display on the left of the button
      `),
            f(e.$slots, "left-icon", {}, () => [
              typeof e.leftIcon == "string" ? (n(), a(v(i), {
                key: 0,
                name: e.leftIcon
              }, null, 8, ["name"])) : e.leftIcon ? (n(), a(d(e.leftIcon), { key: 1 })) : t("v-if", !0)
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
            f(e.$slots, "icon", {}, () => [
              typeof e.icon == "string" ? (n(), a(v(i), {
                key: 0,
                name: e.icon
              }, null, 8, ["name"])) : e.icon ? (n(), a(d(e.icon), { key: 1 })) : t("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : t("v-if", !0),
        e.$slots.default ? (n(), c(
          "span",
          {
            key: 2,
            class: r([{ "maz-invisible": s.value }, e.contentClass])
          },
          [
            t(`
        @slot default - The content of the button
      `),
            f(e.$slots, "default", {}, void 0, !0)
          ],
          2
          /* CLASS */
        )) : t("v-if", !0),
        k.value ? (n(), c(
          "div",
          {
            key: 3,
            class: r(["m-btn__icon-right", { "maz-invisible": s.value }])
          },
          [
            t(`
        @slot right-icon - The icon to display on the right of the button
      `),
            f(e.$slots, "right-icon", {}, () => [
              typeof e.rightIcon == "string" ? (n(), a(v(i), {
                key: 0,
                name: e.rightIcon
              }, null, 8, ["name"])) : e.rightIcon ? (n(), a(d(e.rightIcon), { key: 1 })) : t("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : t("v-if", !0),
        s.value ? (n(), a(v(p), {
          key: 4,
          class: "m-btn-loader",
          size: "2em",
          color: e.color
        }, null, 8, ["color"])) : t("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled", "class", "type"]));
  }
}), A = (u, p) => {
  const i = u.__vccOpts || u;
  for (const [b, y] of p)
    i[b] = y;
  return i;
}, D = /* @__PURE__ */ A(w, [["__scopeId", "data-v-4d87e490"]]), F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D
}, Symbol.toStringTag, { value: "Module" }));
export {
  F as M,
  A as _
};

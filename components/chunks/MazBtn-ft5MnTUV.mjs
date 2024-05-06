import '../assets/MazBtn.css';
import { defineComponent as E, defineAsyncComponent as h, useAttrs as R, useSlots as w, onBeforeMount as A, computed as l, openBlock as n, createBlock as a, resolveDynamicComponent as r, normalizeClass as s, withCtx as D, createElementBlock as u, createCommentVNode as t, renderSlot as d, unref as c } from "vue";
import { _ as L } from "./MazCard-CcpMovXM.mjs";
const P = /* @__PURE__ */ E({
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
  setup(g) {
    const z = h(() => import("./MazSpinner-DFEVMVIO.mjs")), f = h(() => import("./MazIcon-Cxrv3_OK.mjs")), { href: k, to: B } = R(), p = w(), o = g;
    A(() => {
      o.icon && !o.fab && console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props');
    });
    const v = l(() => k ? "a" : B ? "router-link" : "button"), I = l(
      () => o.pastel ? `--${o.color}-pastel` : o.outline ? `--${o.color}-outline` : `--${o.color}`
    ), b = l(
      () => (o.loading || o.disabled) && v.value === "button"
    ), C = l(() => b.value ? "--cursor-default" : "--cursor-pointer"), $ = l(() => `--is-${o.variant}`), i = l(() => o.loading && o.variant === "button"), m = l(() => !!p["left-icon"] || o.leftIcon), y = l(() => !!p["right-icon"] || o.rightIcon), M = l(() => m.value || y.value), S = l(() => o.fab && (o.icon || !!p.icon)), T = l(() => v.value === "button" ? o.type : void 0);
    return (e, U) => (n(), a(r(v.value), {
      disabled: b.value || void 0,
      class: s(["m-btn", [
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
          "--disabled": b.value,
          "--icon": M.value,
          "--rounded": e.rounded,
          "--no-rounded": e.noRounded,
          "--no-padding": e.noPadding,
          "--no-elevation": e.noElevation
        }
      ]]),
      type: T.value
    }, {
      default: D(() => [
        m.value ? (n(), u(
          "div",
          {
            key: 0,
            class: s(["m-btn__icon-left maz-flex maz-flex-center", { "maz-invisible": i.value }])
          },
          [
            t(`
        @slot left-icon - The icon to display on the left of the button
      `),
            d(e.$slots, "left-icon", {}, () => [
              typeof e.leftIcon == "string" ? (n(), a(c(f), {
                key: 0,
                name: e.leftIcon
              }, null, 8, ["name"])) : e.leftIcon ? (n(), a(r(e.leftIcon), { key: 1 })) : t("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : t("v-if", !0),
        S.value ? (n(), u(
          "div",
          {
            key: 1,
            class: s(["m-btn__icon", { "maz-invisible": i.value }])
          },
          [
            t(`
        @slot icon - The icon to display on the fab button
      `),
            d(e.$slots, "icon", {}, () => [
              typeof e.icon == "string" ? (n(), a(c(f), {
                key: 0,
                name: e.icon
              }, null, 8, ["name"])) : e.icon ? (n(), a(r(e.icon), { key: 1 })) : t("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : t("v-if", !0),
        e.$slots.default ? (n(), u(
          "span",
          {
            key: 2,
            class: s([{ "maz-invisible": i.value }, e.contentClass])
          },
          [
            t(`
        @slot default - The content of the button
      `),
            d(e.$slots, "default", {}, void 0, !0)
          ],
          2
          /* CLASS */
        )) : t("v-if", !0),
        y.value ? (n(), u(
          "div",
          {
            key: 3,
            class: s(["m-btn__icon-right", { "maz-invisible": i.value }])
          },
          [
            t(`
        @slot right-icon - The icon to display on the right of the button
      `),
            d(e.$slots, "right-icon", {}, () => [
              typeof e.rightIcon == "string" ? (n(), a(c(f), {
                key: 0,
                name: e.rightIcon
              }, null, 8, ["name"])) : e.rightIcon ? (n(), a(r(e.rightIcon), { key: 1 })) : t("v-if", !0)
            ], !0)
          ],
          2
          /* CLASS */
        )) : t("v-if", !0),
        i.value ? (n(), a(c(z), {
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
}), V = /* @__PURE__ */ L(P, [["__scopeId", "data-v-4d87e490"]]);
export {
  V as default
};

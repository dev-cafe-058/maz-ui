import './assets/MazLink.css';
import { defineComponent as p, defineAsyncComponent as s, openBlock as n, createBlock as l, resolveDynamicComponent as d, mergeProps as h, withCtx as c, createCommentVNode as o, renderSlot as r, unref as f, createVNode as m } from "vue";
const v = /* @__PURE__ */ p({
  __name: "MazLink",
  props: {
    id: { default: void 0 },
    title: { default: void 0 },
    href: { default: "#" },
    to: { default: void 0 },
    color: { default: "primary" },
    target: { default: "_slef" },
    download: { default: void 0 },
    rel: { default: void 0 },
    ariaLabel: { default: void 0 },
    underline: { type: Boolean, default: !1 },
    underlineOnlyHover: { type: Boolean, default: !0 },
    autoExternal: { type: Boolean },
    leftIcon: { default: void 0 },
    rightIcon: { default: void 0 }
  },
  setup(a) {
    const i = s(
      () => import("./chunks/arrow-top-right-on-square-CkcBq4qD.mjs")
    ), t = s(() => import("./chunks/MazIcon-Cxrv3_OK.mjs"));
    return (e, u) => (n(), l(d(e.to ? "router-link" : "a"), h({
      id: e.id,
      class: ["m-link", [
        {
          "--underline": e.underline,
          "--underline-only-hover": !e.underline && e.underlineOnlyHover
        },
        `--${e.color}`
      ]],
      to: e.to,
      href: e.href,
      title: e.title,
      target: e.target,
      rel: e.rel,
      download: e.download,
      "aria-label": e.ariaLabel
    }, e.$attrs), {
      default: c(() => [
        o(`
      @slot left-icon - The icon to display on the left of the text
    `),
        r(e.$slots, "left-icon", {}, () => [
          typeof e.leftIcon == "string" ? (n(), l(f(t), {
            key: 0,
            name: e.leftIcon
          }, null, 8, ["name"])) : e.leftIcon ? (n(), l(d(e.leftIcon), { key: 1 })) : o("v-if", !0)
        ], !0),
        o(`
      @slot Text of the link
    `),
        r(e.$slots, "default", {}, void 0, !0),
        o(`
      @slot right-icon - The icon to display on the left of the text
    `),
        r(e.$slots, "right-icon", {}, () => [
          typeof e.rightIcon == "string" ? (n(), l(f(t), {
            key: 0,
            name: e.rightIcon
          }, null, 8, ["name"])) : e.rightIcon ? (n(), l(d(e.rightIcon), { key: 1 })) : o("v-if", !0)
        ], !0),
        o(`
      @slot external-icon - Replace the default external icon
    `),
        e.autoExternal && e.target === "_blank" ? r(e.$slots, "external-icon", { key: 0 }, () => [
          m(f(i))
        ], !0) : o("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 16, ["id", "class", "to", "href", "title", "target", "rel", "download", "aria-label"]));
  }
}), y = (a, i) => {
  const t = a.__vccOpts || a;
  for (const [e, u] of i)
    t[e] = u;
  return t;
}, k = /* @__PURE__ */ y(v, [["__scopeId", "data-v-439cf950"]]);
export {
  k as default
};

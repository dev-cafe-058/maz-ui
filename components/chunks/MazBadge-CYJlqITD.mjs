import '../assets/MazBadge.css';
import { defineComponent as o, openBlock as a, createElementBlock as l, normalizeClass as t, normalizeStyle as n, renderSlot as r } from "vue";
import { _ as s } from "./MazTabsBar-BXDEQkZM.mjs";
const d = /* @__PURE__ */ o({
  __name: "MazBadge",
  props: {
    color: { default: "primary" },
    size: { default: "0.8em" },
    nowrap: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    pastel: { type: Boolean, default: !1 },
    roundedSize: { default: "md" }
  },
  setup(p) {
    return (e, f) => (a(), l(
      "span",
      {
        class: t(["m-badge", [
          `--${e.color}`,
          { "--outline": e.outline, "--pastel": e.pastel, "--nowrap": e.nowrap },
          `--rounded-${e.roundedSize}`
        ]]),
        style: n({ fontSize: e.size })
      },
      [
        r(e.$slots, "default", {}, void 0, !0)
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), m = /* @__PURE__ */ s(d, [["__scopeId", "data-v-bcdf6ba1"]]);
export {
  m as default
};

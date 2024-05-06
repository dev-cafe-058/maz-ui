import './assets/MazFullscreenLoader.css';
import { defineComponent as r, defineAsyncComponent as l, onMounted as m, onUnmounted as c, openBlock as o, createElementBlock as n, createVNode as d, unref as u, renderSlot as i, createCommentVNode as p } from "vue";
const z = { class: "maz-fixed maz-inset-0 maz-z-default-backdrop maz-flex maz-flex-col maz-gap-2 maz-bg-overlay maz-text-center maz-backdrop-blur maz-flex-center" }, f = { key: 0 }, y = /* @__PURE__ */ r({
  __name: "MazFullscreenLoader",
  props: {
    color: { default: "primary" },
    size: { default: "3em" }
  },
  setup(_) {
    const t = l(() => import("./chunks/MazSpinner-CfA_KEZT.mjs")), a = () => {
      document.documentElement.classList.add("--maz-fullscreen-loader-present");
    }, s = async () => {
      document.documentElement.classList.remove("--maz-fullscreen-loader-present");
    };
    return m(() => {
      a();
    }), c(() => {
      s();
    }), (e, k) => (o(), n("div", z, [
      d(u(t), {
        color: e.color,
        size: e.size
      }, null, 8, ["color", "size"]),
      e.$slots.default ? (o(), n("span", f, [
        i(e.$slots, "default")
      ])) : p("v-if", !0)
    ]));
  }
});
export {
  y as default
};

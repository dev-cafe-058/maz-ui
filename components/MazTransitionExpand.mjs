import './assets/MazTransitionExpand.css';
import { defineComponent as p, useCssVars as d, openBlock as h, createBlock as u, TransitionGroup as y, withCtx as g, renderSlot as l, nextTick as r } from "vue";
const c = /* @__PURE__ */ p({
  __name: "MazTransitionExpand",
  props: {
    animationDuration: { default: "300ms" }
  },
  setup(n) {
    d((t) => ({
      "26239c6e": t.animationDuration
    }));
    const a = (t) => {
      const o = getComputedStyle(t).width;
      t.style.width = o, t.style.position = "absolute", t.style.visibility = "hidden", t.style.height = "auto", t.style.top = "bottom";
      const i = getComputedStyle(t).height;
      t.style.width = "", t.style.position = "", t.style.visibility = "", t.style.height = "0px", getComputedStyle(t).height, r(() => {
        t.style.height = i;
      });
    }, s = (t) => {
      t.style.height = "auto";
    }, e = (t) => {
      const o = getComputedStyle(t).height;
      t.style.height = o, getComputedStyle(t).height, r(() => {
        t.style.height = "0px";
      });
    };
    return (t, o) => (h(), u(y, {
      class: "m-transition-expand",
      name: "maz-expand",
      tag: "div",
      onEnter: o[0] || (o[0] = (i) => a(i)),
      onAfterEnter: o[1] || (o[1] = (i) => s(i)),
      onLeave: o[2] || (o[2] = (i) => e(i))
    }, {
      default: g(() => [
        l(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}), f = (n, a) => {
  const s = n.__vccOpts || n;
  for (const [e, t] of a)
    s[e] = t;
  return s;
}, v = /* @__PURE__ */ f(c, [["__scopeId", "data-v-49c2af88"]]);
export {
  v as default
};

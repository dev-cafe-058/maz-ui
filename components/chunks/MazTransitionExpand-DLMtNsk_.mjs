import '../assets/MazTransitionExpand.css';
import { defineComponent as e, useCssVars as p, openBlock as d, createBlock as h, TransitionGroup as u, withCtx as y, renderSlot as g, nextTick as s } from "vue";
import { _ as l } from "./MazStepper-CV4dwvS9.mjs";
const f = /* @__PURE__ */ e({
  __name: "MazTransitionExpand",
  props: {
    animationDuration: { default: "300ms" }
  },
  setup(x) {
    p((t) => ({
      "26239c6e": t.animationDuration
    }));
    const a = (t) => {
      const o = getComputedStyle(t).width;
      t.style.width = o, t.style.position = "absolute", t.style.visibility = "hidden", t.style.height = "auto", t.style.top = "bottom";
      const i = getComputedStyle(t).height;
      t.style.width = "", t.style.position = "", t.style.visibility = "", t.style.height = "0px", getComputedStyle(t).height, s(() => {
        t.style.height = i;
      });
    }, n = (t) => {
      t.style.height = "auto";
    }, r = (t) => {
      const o = getComputedStyle(t).height;
      t.style.height = o, getComputedStyle(t).height, s(() => {
        t.style.height = "0px";
      });
    };
    return (t, o) => (d(), h(u, {
      class: "m-transition-expand",
      name: "maz-expand",
      tag: "div",
      onEnter: o[0] || (o[0] = (i) => a(i)),
      onAfterEnter: o[1] || (o[1] = (i) => n(i)),
      onLeave: o[2] || (o[2] = (i) => r(i))
    }, {
      default: y(() => [
        g(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}), v = /* @__PURE__ */ l(f, [["__scopeId", "data-v-49c2af88"]]);
export {
  v as default
};

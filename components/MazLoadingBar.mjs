import './assets/MazLoadingBar.css';
import { defineComponent as r, useCssVars as s, computed as n, openBlock as l, createElementBlock as d, pushScopeId as p, popScopeId as _, createElementVNode as i } from "vue";
const m = (o) => (p("data-v-26d3bae5"), o = o(), _(), o), u = { class: "m-loading-bar" }, h = /* @__PURE__ */ m(() => /* @__PURE__ */ i(
  "div",
  null,
  null,
  -1
  /* HOISTED */
)), f = [
  h
], v = /* @__PURE__ */ r({
  __name: "MazLoadingBar",
  props: {
    color: { default: "primary" },
    height: { default: "0.125rem" }
  },
  setup(o) {
    s((t) => ({
      "4d5d421f": t.height,
      d3c0e8e8: a.value.alpha,
      ccfba46a: a.value.main
    }));
    const e = o, a = n(() => ({
      alpha: `var(--maz-color-${e.color}-alpha-20)`,
      main: `var(--maz-color-${e.color})`
    }));
    return (t, c) => (l(), d("div", u, f));
  }
}), g = (o, e) => {
  const a = o.__vccOpts || o;
  for (const [t, c] of e)
    a[t] = c;
  return a;
}, z = /* @__PURE__ */ g(v, [["__scopeId", "data-v-26d3bae5"]]);
export {
  z as default
};

import '../assets/MazSpinner.css';
import { defineComponent as t, openBlock as o, createElementBlock as c, normalizeClass as n, pushScopeId as s, popScopeId as r, createElementVNode as i } from "vue";
import { _ as p } from "./MazBtn-BydIwD1J.mjs";
const a = (e) => (s("data-v-c67298ec"), e = e(), r(), e), d = ["width", "height"], l = /* @__PURE__ */ a(() => /* @__PURE__ */ i(
  "path",
  { d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" },
  null,
  -1
  /* HOISTED */
)), m = [
  l
], h = /* @__PURE__ */ t({
  __name: "MazSpinner",
  props: {
    size: { type: String, default: "2em" },
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(e) {
    return (_, u) => (o(), c("svg", {
      width: e.size,
      height: e.size,
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 50 50",
      "xml:space": "preserve",
      class: n(["m-spinner", `m-spinner--${e.color}`]),
      style: { "enable-background": "new 0 0 50 50" }
    }, m, 10, d));
  }
}), f = /* @__PURE__ */ p(h, [["__scopeId", "data-v-c67298ec"]]);
export {
  f as default
};

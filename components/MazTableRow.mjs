import './assets/MazTableRow.css';
import { inject as c, defineComponent as l, openBlock as s, createElementBlock as d, normalizeClass as u, unref as a, renderSlot as p } from "vue";
function b(o, r) {
  const e = c(o, r);
  if (!e)
    throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${o}`);
  return e;
}
const i = /* @__PURE__ */ l({
  __name: "MazTableRow",
  props: {
    noHoverable: { type: Boolean }
  },
  setup(o) {
    const { hoverable: r, backgroundEven: e, backgroundOdd: n } = b("maz-table");
    return (t, _) => (s(), d(
      "tr",
      {
        class: u(["m-table-row", {
          "--hoverable": a(r) && !t.noHoverable,
          "--background-odd": a(n),
          "--background-even": a(e)
        }])
      },
      [
        p(t.$slots, "default", {}, void 0, !0)
      ],
      2
      /* CLASS */
    ));
  }
}), v = (o, r) => {
  const e = o.__vccOpts || o;
  for (const [n, t] of r)
    e[n] = t;
  return e;
}, m = /* @__PURE__ */ v(i, [["__scopeId", "data-v-57ba9a97"]]);
export {
  m as default
};

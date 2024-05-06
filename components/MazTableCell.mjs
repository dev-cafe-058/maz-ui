import './assets/MazTableCell.css';
import { inject as c, defineComponent as l, openBlock as a, createElementBlock as s, normalizeClass as i, unref as _, renderSlot as u } from "vue";
function p(t, o) {
  const e = c(t, o);
  if (!e)
    throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${t}`);
  return e;
}
const d = /* @__PURE__ */ l({
  __name: "MazTableCell",
  setup(t) {
    const { size: o } = p("maz-table");
    return (e, r) => (a(), s(
      "td",
      {
        class: i(["m-table-cell", `--${_(o)}`])
      },
      [
        u(e.$slots, "default", {}, void 0, !0)
      ],
      2
      /* CLASS */
    ));
  }
}), f = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [r, n] of o)
    e[r] = n;
  return e;
}, v = /* @__PURE__ */ f(d, [["__scopeId", "data-v-0668079a"]]);
export {
  v as default
};

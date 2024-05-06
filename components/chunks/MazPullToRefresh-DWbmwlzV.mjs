import '../assets/MazPullToRefresh.css';
import { defineComponent as R, defineAsyncComponent as x, computed as y, ref as _, watch as V, onUnmounted as Y, openBlock as d, createElementBlock as c, normalizeClass as L, normalizeStyle as $, renderSlot as m, createCommentVNode as b, createElementVNode as g, createVNode as A, unref as N, pushScopeId as H, popScopeId as q } from "vue";
function k() {
  return typeof document < "u";
}
function D() {
  if (!k())
    return !1;
  const o = navigator, u = window.matchMedia("(display-mode: standalone)").matches;
  return o.standalone || u;
}
const T = (o) => (H("data-v-1b0a2f5a"), o = o(), q(), o), F = {
  key: 0,
  class: "header-text"
}, O = /* @__PURE__ */ T(() => /* @__PURE__ */ g(
  "span",
  null,
  "Pull to refresh",
  -1
  /* HOISTED */
)), U = {
  key: 1,
  class: "header-text"
}, j = /* @__PURE__ */ T(() => /* @__PURE__ */ g(
  "span",
  null,
  " Release to refresh ",
  -1
  /* HOISTED */
)), G = {
  key: 2,
  class: "header-text"
}, J = { class: "maz-flex maz-flex-col maz-flex-center" }, K = /* @__PURE__ */ R({
  __name: "MazPullToRefresh",
  props: {
    distance: { default: 100 },
    offset: { default: 0 },
    action: { type: Function, default: void 0 },
    containerSelector: { default: void 0 },
    headerClass: { default: void 0 },
    spinnerColor: { default: "theme" },
    disabled: { type: Boolean, default: !1 },
    standaloneMode: { type: Boolean, default: !1 }
  },
  emits: ["loaded", "start", "error", "finish", "response"],
  setup(o, { emit: u }) {
    const v = x(() => import("./MazSpinner-C75WMoEA.mjs")), a = o, r = u, s = y(
      () => a.disabled || a.action === void 0 || a.standaloneMode && k() && !D()
    ), h = _({
      top: 0,
      bottom: 0
    }), t = _({
      from: -1,
      to: -1,
      distance: 0,
      available: !1,
      state: "end"
    }), i = _(!1), l = y(() => {
      if (typeof document > "u" || s.value)
        return;
      const e = a.containerSelector ? document.querySelector(a.containerSelector) : document.body;
      if (!e)
        throw new Error("MazPullToRefresh - container not found");
      return e;
    }), p = y(() => t.value.state !== "move" && t.value.state !== "end" || s.value ? 0 : t.value.distance > a.distance ? a.distance : t.value.distance);
    function B(e) {
      const { top: n, height: f } = e.getBoundingClientRect();
      h.value = {
        top: n,
        bottom: window.innerHeight - (f + n + a.offset)
      };
    }
    function w(e) {
      i.value = e;
    }
    function S(e) {
      if (i.value || h.value.top < 0 && h.value.bottom < 0 || s.value)
        return;
      const n = e.touches.item(0);
      n && (t.value.state = "start", t.value.from = n.pageY);
    }
    function E(e) {
      if (i.value || t.value.from < 0 || window.scrollY > 0 || s.value)
        return;
      const n = e.touches.item(0);
      if (!n)
        return;
      t.value.to = n.pageY;
      const f = t.value.to - t.value.from;
      t.value.distance = f > 0 ? f : 0, t.value.available = t.value.distance >= a.distance, t.value.state = "move";
    }
    function C() {
      i.value || s.value || (p.value === a.distance && t.value.state === "move" && window.scrollY <= 0 ? I() : z());
    }
    function z() {
      t.value = {
        from: -1,
        to: -1,
        distance: 0,
        available: !1,
        state: "end"
      };
    }
    async function I() {
      var e;
      try {
        w(!0), r("start");
        const n = await ((e = a.action) == null ? void 0 : e.call(a));
        r("loaded"), r("response", n);
      } catch (n) {
        throw r("error", n), n;
      } finally {
        z(), w(!1), r("finish");
      }
    }
    V(
      () => s.value,
      (e) => {
        e === !0 ? M() : P();
      },
      { immediate: !0 }
    );
    function P() {
      !l.value || s.value || document === void 0 || (l.value.addEventListener("touchstart", S), l.value.addEventListener("touchmove", E), l.value.addEventListener("touchend", C), B(l.value));
    }
    function M() {
      !l.value || document === void 0 || (l.value.removeEventListener("touchstart", S), l.value.removeEventListener("touchmove", E), l.value.removeEventListener("touchend", C));
    }
    return Y(() => {
      M();
    }), (e, n) => (d(), c(
      "div",
      {
        class: L(["m-pull-to-refresh", { "--available": t.value.available || p.value > 10 }])
      },
      [
        s.value ? b("v-if", !0) : (d(), c(
          "div",
          {
            key: 0,
            class: L(["loading-header", e.headerClass]),
            style: $({ height: p.value + "px" })
          },
          [
            t.value.available ? t.value.available && !i.value ? (d(), c("div", U, [
              m(e.$slots, "pull-ready", {}, () => [
                j
              ], !0)
            ])) : b("v-if", !0) : (d(), c("div", F, [
              m(e.$slots, "pull-before", {}, () => [
                O
              ], !0)
            ])),
            i.value ? (d(), c("div", G, [
              m(e.$slots, "pull-loading", {}, () => [
                g("div", J, [
                  A(N(v), {
                    color: e.spinnerColor,
                    size: "2.5em"
                  }, null, 8, ["color"])
                ])
              ], !0)
            ])) : b("v-if", !0)
          ],
          6
          /* CLASS, STYLE */
        )),
        m(e.$slots, "default", {}, void 0, !0)
      ],
      2
      /* CLASS */
    ));
  }
}), Q = (o, u) => {
  const v = o.__vccOpts || o;
  for (const [a, r] of u)
    v[a] = r;
  return v;
}, X = /* @__PURE__ */ Q(K, [["__scopeId", "data-v-1b0a2f5a"]]);
export {
  X as M,
  Q as _
};

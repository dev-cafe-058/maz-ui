import './assets/MazReadingProgressBar.css';
import { defineComponent as p, computed as m, ref as u, watch as v, onMounted as g, onBeforeUnmount as h, openBlock as w, createBlock as b, Teleport as y, createElementVNode as d, mergeProps as S, normalizeClass as _, normalizeStyle as B, nextTick as C } from "vue";
function k(o, l) {
  let t = 0;
  return async function() {
    const r = Date.now();
    r - t >= l && (await o(), t = r);
  };
}
const z = /* @__PURE__ */ p({
  __name: "MazReadingProgressBar",
  props: {
    height: { default: "4px" },
    color: { default: "primary" },
    teleportSelector: { default: "body" },
    contentSelector: { default: "body" },
    offset: { default: 0 },
    barClass: { default: void 0 },
    distance: { default: void 0 }
  },
  emits: ["begin", "complete"],
  setup(o, { emit: l }) {
    const t = o, r = m(() => `var(--maz-color-${t.color})`), a = l, s = u(), n = u(0);
    v(
      () => t.distance,
      (e) => {
        e && (n.value = e);
      },
      {
        immediate: !0
      }
    );
    const c = k(() => {
      const e = window.scrollY;
      if (e >= 0 && e <= n.value) {
        const i = e / n.value * 100;
        s.value = `${i}%`;
      } else
        e <= 0 ? (s.value = "0%", a("begin")) : e > n.value ? (s.value = "100%", a("complete")) : s.value = "0%";
    }, 15);
    async function f() {
      if (n.value === 0) {
        const e = document.querySelector(t.contentSelector);
        if (!e) {
          console.error(`HTML Element with selector "${t.contentSelector}" not found.`);
          return;
        }
        await C(), n.value = e.offsetHeight + e.offsetTop + t.offset - window.innerHeight;
      }
      window.addEventListener("scroll", c, {
        passive: !0
      });
    }
    return g(() => {
      f();
    }), h(() => {
      window.removeEventListener("scroll", c);
    }), (e, i) => (w(), b(y, { to: e.teleportSelector }, [
      d(
        "div",
        S({ class: "m-reading-progress-bar" }, e.$attrs),
        [
          d(
            "div",
            {
              class: _(e.barClass),
              style: B({
                width: s.value ?? "0px",
                height: e.height,
                backgroundColor: r.value
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )
        ],
        16
        /* FULL_PROPS */
      )
    ], 8, ["to"]));
  }
}), E = (o, l) => {
  const t = o.__vccOpts || o;
  for (const [r, a] of l)
    t[r] = a;
  return t;
}, H = /* @__PURE__ */ E(z, [["__scopeId", "data-v-d1e0c920"]]);
export {
  H as default
};

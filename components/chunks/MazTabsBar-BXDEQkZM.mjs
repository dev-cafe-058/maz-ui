import '../assets/MazTabsBar.css';
import { inject as I, ref as i, defineComponent as N, defineAsyncComponent as O, computed as V, onBeforeMount as W, onMounted as B, watch as j, openBlock as f, createElementBlock as p, normalizeClass as g, createElementVNode as q, normalizeStyle as S, Fragment as H, renderList as U, createCommentVNode as v, renderSlot as C, createTextVNode as T, toDisplayString as k, createBlock as Q, unref as X, withCtx as D } from "vue";
function F(o, s) {
  const n = I(o, s);
  if (!n)
    throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${o}`);
  return n;
}
function x(o) {
  return new Promise((s) => setTimeout(s, o));
}
const G = (o, s) => {
  const n = o.__vccOpts || o;
  for (const [c, b] of s)
    n[c] = b;
  return n;
};
i("system");
i("system");
const J = ["disabled", "onClick"], K = /* @__PURE__ */ N({
  __name: "MazTabsBar",
  props: {
    items: {},
    persistent: { type: Boolean },
    queryParam: { default: "tab" },
    block: { type: Boolean },
    noElevation: { type: Boolean },
    autoScroll: { type: Boolean, default: !0 }
  },
  setup(o) {
    const s = O(() => import("./MazBadge-CYJlqITD.mjs")), { currentTab: n, updateCurrentTab: c } = F("maz-tabs");
    function b(e) {
      c(e + 1), l.persistent && M(e + 1);
    }
    const l = o, h = i(), y = i([]);
    function _(e) {
      return n.value === e + 1;
    }
    function L({
      mazBtn: e,
      index: t
    }) {
      y.value[t] = e && "$el" in e ? e.$el : e;
    }
    const d = V(
      () => l.items.map((e) => ({
        label: typeof e == "string" ? e : e.label,
        disabled: typeof e == "string" ? !1 : e.disabled ?? !1,
        badge: typeof e == "string" ? void 0 : e.badge
      }))
    ), w = i(), m = i(!1);
    async function z() {
      if (!l.autoScroll)
        return;
      await x(150);
      const e = h.value, t = y.value[n.value - 1];
      if (!e || !t)
        return;
      const a = 50;
      if (t.offsetLeft - a < e.scrollLeft || t.offsetLeft + t.offsetWidth > e.scrollLeft + e.clientWidth) {
        const E = window.getComputedStyle(e, "padding-left").paddingLeft, R = Number(E.slice(0, -2));
        e.scrollTo({
          left: t.offsetLeft - R - a,
          behavior: m.value ? "smooth" : "instant"
        });
      }
      if (typeof n.value != "number")
        return;
      const r = (t == null ? void 0 : t.offsetWidth) ?? 0, u = (t == null ? void 0 : t.offsetHeight) ?? 0, A = (t == null ? void 0 : t.offsetLeft) ?? 0;
      w.value = {
        transform: `translateX(${A}px)`,
        width: `${r}px`,
        height: `${u}px`
      }, m.value = !0;
    }
    function P(e, t) {
      return t ? {} : n.value === e + 1 ? "color: var(--maz-color-text)" : "color: var(--maz-color-muted)";
    }
    W(() => {
      (n.value < 1 || n.value > d.value.length) && console.error(
        `[maz-ui](MazTabsBar) The model-value should be between 1 and ${d.value.length}`
      );
    }), B(() => {
      l.persistent && z();
    }), j(
      () => [n.value, d.value],
      () => {
        z();
      }
    );
    function $() {
      const e = new URL(window.location.href);
      return Number(e.searchParams.get(l.queryParam));
    }
    function M(e) {
      const t = new URL(window.location.href);
      t.searchParams.set(l.queryParam, String(e)), window.history.replaceState({}, document.title, t.toString());
    }
    return B(async () => {
      l.persistent && c($() || n.value || 1);
    }), (e, t) => (f(), p(
      "div",
      {
        ref_key: "tabsBarRef",
        ref: h,
        class: g(["m-tabs-bar", {
          "--block": e.block,
          "--elevation": !e.noElevation
        }])
      },
      [
        q(
          "div",
          {
            class: g(["m-tabs-bar__indicator", { "--animated": m.value }]),
            style: S([w.value])
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        (f(!0), p(
          H,
          null,
          U(d.value, (a, r) => (f(), p("button", {
            key: r,
            ref_for: !0,
            ref: (u) => L({ mazBtn: u, index: r }),
            class: g([{ "--active": _(r), "--disabled": a.disabled }, "m-tabs-bar__item"]),
            disabled: a.disabled,
            style: S(P(r, a.disabled)),
            onClick: (u) => a.disabled ? void 0 : b(r)
          }, [
            v(`
          @slot item - Content of item to display in the tabs bar
            @binding {MazTabsBarItem[]} item - all data of the item
            @binding {boolean} active - \`true\` if the tab is active
            @binding {number} index - index of the item
        `),
            C(e.$slots, "item", {
              item: a,
              active: _(r),
              index: r
            }, () => [
              T(
                k(a.label) + " ",
                1
                /* TEXT */
              ),
              a.badge ? (f(), Q(X(s), {
                key: 0,
                color: a.badge.color,
                pastel: a.badge.pastel,
                outline: a.badge.outline,
                "rounded-size": a.badge.roundedSize,
                size: a.badge.size ?? "0.7rem",
                class: "m-tabs-bar__item__badge"
              }, {
                default: D(() => [
                  v(`
              @slot badge-content - Content in the badge
                @binding {string | number | boolean} content - content of the badge provided in item
            `),
                  C(e.$slots, "badge-content", {
                    content: a.badge.content
                  }, () => [
                    T(
                      k(a.badge.content),
                      1
                      /* TEXT */
                    )
                  ], !0)
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["color", "pastel", "outline", "rounded-size", "size"])) : v("v-if", !0)
            ], !0)
          ], 14, J))),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), Z = /* @__PURE__ */ G(K, [["__scopeId", "data-v-5d58f952"]]);
export {
  Z as M,
  G as _
};

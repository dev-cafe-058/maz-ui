import './assets/MazDropdown.css';
import { getCurrentInstance as Y, computed as Z, nextTick as x, defineComponent as ee, defineAsyncComponent as A, ref as I, watch as L, resolveComponent as oe, withDirectives as T, openBlock as b, createElementBlock as w, unref as d, normalizeClass as y, normalizeStyle as ne, createElementVNode as D, withModifiers as E, renderSlot as f, createTextVNode as $, toDisplayString as M, createCommentVNode as k, createVNode as U, mergeProps as te, withCtx as B, createBlock as N, Transition as le, Fragment as S, renderList as se, vShow as re } from "vue";
function ae({
  componentName: n,
  providedId: t
}) {
  const a = Y();
  return Z(() => t ?? `${n}-${a == null ? void 0 : a.uid}`);
}
function ie(n, t) {
  let a;
  return function(...m) {
    clearTimeout(a), a = setTimeout(() => {
      n.apply(this, m);
    }, t);
  };
}
const z = "__maz-click-outside__", F = () => document.ontouchstart === null ? "touchstart" : "click";
async function V(n, t) {
  try {
    R(n);
    const a = t.instance, m = t.value, s = typeof m == "function";
    if (!s)
      throw new Error("[maz-ui](vClickOutside) the callback should be a function");
    await x(), n[z] = (p) => {
      if ((!n || p.target && !n.contains(p.target)) && m && s)
        return m.call(a, p);
    };
    const g = F();
    document.addEventListener(g, n[z], { passive: !0 });
  } catch (a) {
    console.error("[maz-ui](vClickOutside)", a);
  }
}
function R(n) {
  try {
    const t = F();
    document.removeEventListener(t, n[z], !1), delete n[z];
  } catch (t) {
    console.error("[maz-ui](vClickOutside)", t);
  }
}
function ue(n, t) {
  try {
    if (t.value === t.oldValue)
      return;
    V(n, t);
  } catch (a) {
    console.error("[maz-ui](vClickOutside)", a);
  }
}
const de = {
  mounted: V,
  updated: ue,
  unmounted: R
}, ce = ["id"], pe = ["aria-expanded"], fe = ["id"], me = { class: "button-span" }, ve = ["target", "href"], be = ["onClick"], ye = /* @__PURE__ */ ee({
  inheritAttrs: !1,
  __name: "MazDropdown",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    items: { default: () => [] },
    open: { type: Boolean },
    id: { default: void 0 },
    trigger: { default: "both" },
    color: { default: "transparent" },
    position: { default: "bottom left" },
    noCloseOnClick: { type: Boolean },
    disabled: { type: Boolean },
    noChevron: { type: Boolean },
    screenReaderDescription: { default: "Open menu dropdown" }
  },
  emits: [
    /**
     * emitted when a menu item is clicked
     */
    "menuitem-clicked",
    /**
     * Triggers when the number changes
     *
     * @property {boolean} open new value
     */
    "update:open"
  ],
  setup(n, { emit: t }) {
    const a = A(() => import("./chunks/MazBtn-BydIwD1J.mjs").then((e) => e.M)), m = A(() => import("./chunks/chevron-down-CzMH-gFW.mjs")), s = n, g = t, p = ae({
      componentName: "MazDropdown",
      providedId: s.id
    }), i = I(s.open), r = I();
    function q() {
      i.value && u(!1);
    }
    function H() {
      u(!i.value);
    }
    function _() {
      ["click"].includes(s.trigger) && H();
    }
    function j() {
      ["hover", "both"].includes(s.trigger) && u(!0);
    }
    function K() {
      ["hover", "both"].includes(s.trigger) && (i.value === !1 ? u(!0) : v(!0));
    }
    function P() {
      ["hover", "both"].includes(s.trigger) && v(!1);
    }
    function Q() {
      v(!1);
    }
    const u = (e) => {
      s.disabled || (i.value = e, g("update:open", e));
    }, v = ie((e) => {
      u(e);
    }, 200);
    async function G(e, l) {
      var c;
      g("menuitem-clicked", l), await ((c = e.action) == null ? void 0 : c.call(e)), s.noCloseOnClick || h();
    }
    function h() {
      s.noCloseOnClick === !1 && u(!1);
    }
    function O(e) {
      e.key === "Escape" ? (e.preventDefault(), u(!1)) : ["ArrowDown", "ArrowUp"].includes(e.key) ? W(e) : e.key === "Enter" && typeof r.value == "number" && (e.preventDefault(), document.querySelectorAll(`#${p.value} .menuitem`)[r.value].click(), h());
    }
    function J(e) {
      ["ArrowDown", "ArrowUp", "Enter"].includes(e.key) && i.value === !1 && (e.preventDefault(), u(!0));
    }
    function W(e) {
      var o;
      e.preventDefault();
      const l = e.key;
      i.value || u(!0);
      const c = (o = s.items) == null ? void 0 : o.length;
      c && (typeof r.value == "number" ? r.value === c - 1 && l === "ArrowDown" ? r.value = 0 : r.value === 0 && l === "ArrowUp" ? r.value = c - 1 : r.value = l === "ArrowDown" ? r.value + 1 : r.value - 1 : r.value = l === "ArrowDown" ? 0 : c - 1);
    }
    return L(
      () => i.value,
      (e) => {
        e ? document.addEventListener("keydown", O) : document.removeEventListener("keydown", O), r.value = void 0;
      }
    ), L(
      () => s.open,
      (e) => u(e)
    ), (e, l) => {
      const c = oe("RouterLink");
      return T((b(), w("div", {
        id: d(p),
        class: y(["m-dropdown", [s.class]]),
        style: ne(e.style)
      }, [
        D("div", {
          role: "button",
          tabindex: "0",
          class: "m-dropdown__wrapper",
          "aria-expanded": i.value,
          "aria-haspopup": "menu",
          onClick: E(_, ["stop"]),
          onFocus: j,
          onBlur: Q,
          onKeydown: J,
          onMouseenter: K,
          onMouseleave: P
        }, [
          D("span", {
            id: `${d(p)}-labelspan`,
            class: "maz-sr-only"
          }, [
            f(e.$slots, "screen-reader-description", {}, () => [
              $(
                M(e.screenReaderDescription),
                1
                /* TEXT */
              )
            ])
          ], 8, fe),
          k(`
        @slot Custom Element
          @binding {Boolen} is-open close function
          @default \`<MazBtn />\`
      `),
          f(e.$slots, "element", { isOpen: i.value }, () => [
            U(d(a), te({
              color: e.color,
              disabled: e.disabled,
              "aria-labelledby": `${d(p)}-labelspan`
            }, e.$attrs, { tabindex: "-1" }), {
              default: B(() => [
                D("span", me, [
                  k(" @slot Button text "),
                  f(e.$slots, "default"),
                  e.noChevron ? k("v-if", !0) : (b(), N(d(m), {
                    key: 0,
                    class: y([{ "maz-rotate-180": i.value }, "chevron-icon"])
                  }, null, 8, ["class"]))
                ]),
                k(" @slot Menu Label ")
              ]),
              _: 3
              /* FORWARDED */
            }, 16, ["color", "disabled", "aria-labelledby"])
          ])
        ], 40, pe),
        U(le, {
          name: "maz-scale-fade",
          persisted: ""
        }, {
          default: B(() => [
            T(D(
              "div",
              {
                role: "menu",
                "aria-label": "Menu",
                class: y(["menu", {
                  "--top": e.position.includes("top"),
                  "--left": e.position.includes("left"),
                  "--right": e.position.includes("right"),
                  "--bottom": e.position.includes("bottom")
                }]),
                tabindex: "-1",
                onFocus: l[0] || (l[0] = (o) => d(v)(!0)),
                onBlur: l[1] || (l[1] = (o) => d(v)(!1)),
                onMouseenter: l[2] || (l[2] = (o) => ["hover", "both"].includes(e.trigger) ? d(v)(!0) : void 0),
                onMouseleave: l[3] || (l[3] = (o) => ["hover", "both"].includes(e.trigger) ? d(v)(!1) : void 0)
              },
              [
                k(`
          @slot Custom dropdown panel
            @binding {Array} items - items prop data
        `),
                f(e.$slots, "dropdown", { items: e.items }, () => [
                  (b(!0), w(
                    S,
                    null,
                    se(e.items, (o, C) => (b(), w(
                      S,
                      { key: C },
                      [
                        k(`
              @slot Custom menu item
                @binding {Object} item - menu item
            `),
                        f(e.$slots, "menuitem", { item: o }, () => [
                          o.to ? (b(), N(c, {
                            key: 0,
                            target: o.href ? o.target ?? "_self" : void 0,
                            to: o.to,
                            class: y(["menuitem", [
                              {
                                "--is-keyboard-selected": r.value === C
                              },
                              o.class
                            ]]),
                            tabindex: "-1",
                            onClick: E(h, ["stop"])
                          }, {
                            default: B(() => [
                              f(e.$slots, "menuitem-label", { item: o }, () => [
                                $(
                                  M(o.label),
                                  1
                                  /* TEXT */
                                )
                              ])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["target", "to", "class"])) : o.href ? (b(), w("a", {
                            key: 1,
                            target: o.href ? o.target ?? "_self" : void 0,
                            href: o.href,
                            tabindex: "-1",
                            class: y(["menuitem", [
                              {
                                "--is-keyboard-selected": r.value === C
                              },
                              o.class
                            ]]),
                            onClick: E(h, ["stop"])
                          }, [
                            f(e.$slots, "menuitem-label", { item: o }, () => [
                              $(
                                M(o.label),
                                1
                                /* TEXT */
                              )
                            ])
                          ], 10, ve)) : o.action ? (b(), w("button", {
                            key: 2,
                            tabindex: "-1",
                            type: "button",
                            class: y(["menuitem", [
                              {
                                "--is-keyboard-selected": r.value === C
                              },
                              o.class
                            ]]),
                            onClick: E((X) => o.action ? G(o, X) : h(), ["stop"])
                          }, [
                            f(e.$slots, "menuitem-label", { item: o }, () => [
                              $(
                                M(o.label),
                                1
                                /* TEXT */
                              )
                            ])
                          ], 10, be)) : k("v-if", !0)
                        ])
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ],
              34
              /* CLASS, NEED_HYDRATION */
            ), [
              [re, i.value]
            ])
          ]),
          _: 3
          /* FORWARDED */
        })
      ], 14, ce)), [
        [d(de), q]
      ]);
    };
  }
});
export {
  ye as default
};

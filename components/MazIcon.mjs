import { inject as b, defineComponent as C, ref as g, computed as p, onMounted as P, watchEffect as _, openBlock as h, createElementBlock as S, Fragment as $, createCommentVNode as a, mergeProps as A, nextTick as q } from "vue";
function H(l, u) {
  const s = b(l, u);
  if (!s)
    throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${l}`);
  return s;
}
const I = ["innerHTML"], G = /* @__PURE__ */ C({
  __name: "MazIcon",
  props: {
    /** The source path of the SVG file - e.g: `/icons/home.svg` */
    src: { type: String, default: void 0 },
    /** The path of the folder where the SVG files are stored - e.g: `/icons` */
    path: { type: String, default: void 0 },
    /** The name of the SVG file - e.g: `home` */
    name: { type: String, default: void 0 },
    /** The size of the SVG file - e.g: `1em` */
    size: { type: String, default: void 0 },
    /** The title of the SVG file - e.g: `Home` */
    title: { type: String, default: void 0 },
    /** The function to transform the source of the SVG file - e.g: `(svg) => svg` */
    transformSource: {
      type: Function,
      default: (l) => l
    }
  },
  emits: ["loaded", "unloaded", "error"],
  setup(l, { emit: u }) {
    const s = {}, i = g(), v = g(), w = () => {
      try {
        return H("mazIconPath");
      } catch {
        return;
      }
    }, o = l, d = u, f = p(() => o.path ?? w()), E = p(() => o.src ? o.src : f.value ? `${f.value}/${o.name}.svg` : `/${o.name}.svg`);
    P(() => {
      !o.name && !o.src && console.error('[maz-ui](MazIcon) you should provide "name" or "src" as prop');
    });
    const y = (e, n) => {
      const t = e.querySelectorAll("title");
      if (t.length > 0)
        t[0].textContent = n;
      else {
        const r = document.createElementNS("http://www.w3.org/2000/svg", "title");
        r.textContent = n, e.append(r);
      }
    }, z = (e) => Object.keys(e).reduce((n, t) => (e[t] !== !1 && e[t] !== null && e[t] !== void 0 && (n[t] = e[t]), n), {}), M = (e) => {
      const n = {}, t = e.attributes;
      if (!t)
        return n;
      for (let r = t.length - 1; r >= 0; r--)
        n[t[r].name] = t[r].value;
      return n;
    }, T = (e) => {
      let n = e.cloneNode(!0);
      return n = o.transformSource(e), o.title && y(n, o.title), e.innerHTML;
    }, x = async (e) => {
      s[e] || (s[e] = L(e));
      try {
        i.value = await s[e], await q(), d("loaded", v.value);
      } catch (n) {
        i.value && (i.value = void 0, d("unloaded")), delete s[e], d("error", n);
      }
    }, L = (e) => new Promise((n, t) => {
      const r = new XMLHttpRequest();
      r.open("GET", e, !0), r.addEventListener("load", () => {
        if (r.status >= 200 && r.status < 400)
          try {
            let c = new DOMParser().parseFromString(r.responseText, "text/xml").querySelectorAll("svg")[0];
            c ? (c = o.transformSource(c), n(c)) : t(new Error('Loaded file is not valid SVG"'));
          } catch (m) {
            t(m);
          }
        else
          t(new Error("Error loading SVG"));
      }), r.addEventListener("error", () => t()), r.send();
    });
    return _(() => x(E.value)), (e, n) => (h(), S(
      $,
      null,
      [
        a(" eslint-disable vue/no-v-html "),
        a(" eslint-disable vue/html-self-closing "),
        i.value ? (h(), S("svg", A({
          key: 0,
          ref_key: "svgElem",
          ref: v,
          width: "1em",
          height: "1em"
        }, {
          ...M(i.value),
          ...z(e.$attrs)
        }, {
          style: `font-size: ${l.size}`,
          innerHTML: T(i.value)
        }), null, 16, I)) : a("v-if", !0),
        a(" eslint-enable vue/no-v-html "),
        a(" eslint-enable vue/html-self-closing ")
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    ));
  }
});
export {
  G as default
};

import { defineComponent as b, ref as f, computed as g, onMounted as P, watchEffect as _, openBlock as p, createElementBlock as h, Fragment as A, createCommentVNode as s, mergeProps as C, nextTick as $ } from "vue";
import { i as q } from "./MazTable-Cr4kGAth.mjs";
const H = ["innerHTML"], G = /* @__PURE__ */ b({
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
      default: (a) => a
    }
  },
  emits: ["loaded", "unloaded", "error"],
  setup(a, { emit: S }) {
    const i = {}, l = f(), d = f(), w = () => {
      try {
        return q("mazIconPath");
      } catch {
        return;
      }
    }, o = a, c = S, m = g(() => o.path ?? w()), y = g(() => o.src ? o.src : m.value ? `${m.value}/${o.name}.svg` : `/${o.name}.svg`);
    P(() => {
      !o.name && !o.src && console.error('[maz-ui](MazIcon) you should provide "name" or "src" as prop');
    });
    const E = (e, n) => {
      const t = e.querySelectorAll("title");
      if (t.length > 0)
        t[0].textContent = n;
      else {
        const r = document.createElementNS("http://www.w3.org/2000/svg", "title");
        r.textContent = n, e.append(r);
      }
    }, M = (e) => Object.keys(e).reduce((n, t) => (e[t] !== !1 && e[t] !== null && e[t] !== void 0 && (n[t] = e[t]), n), {}), z = (e) => {
      const n = {}, t = e.attributes;
      if (!t)
        return n;
      for (let r = t.length - 1; r >= 0; r--)
        n[t[r].name] = t[r].value;
      return n;
    }, T = (e) => {
      let n = e.cloneNode(!0);
      return n = o.transformSource(e), o.title && E(n, o.title), e.innerHTML;
    }, x = async (e) => {
      i[e] || (i[e] = L(e));
      try {
        l.value = await i[e], await $(), c("loaded", d.value);
      } catch (n) {
        l.value && (l.value = void 0, c("unloaded")), delete i[e], c("error", n);
      }
    }, L = (e) => new Promise((n, t) => {
      const r = new XMLHttpRequest();
      r.open("GET", e, !0), r.addEventListener("load", () => {
        if (r.status >= 200 && r.status < 400)
          try {
            let u = new DOMParser().parseFromString(r.responseText, "text/xml").querySelectorAll("svg")[0];
            u ? (u = o.transformSource(u), n(u)) : t(new Error('Loaded file is not valid SVG"'));
          } catch (v) {
            t(v);
          }
        else
          t(new Error("Error loading SVG"));
      }), r.addEventListener("error", () => t()), r.send();
    });
    return _(() => x(y.value)), (e, n) => (p(), h(
      A,
      null,
      [
        s(" eslint-disable vue/no-v-html "),
        s(" eslint-disable vue/html-self-closing "),
        l.value ? (p(), h("svg", C({
          key: 0,
          ref_key: "svgElem",
          ref: d,
          width: "1em",
          height: "1em"
        }, {
          ...z(l.value),
          ...M(e.$attrs)
        }, {
          style: `font-size: ${a.size}`,
          innerHTML: T(l.value)
        }), null, 16, H)) : s("v-if", !0),
        s(" eslint-enable vue/no-v-html "),
        s(" eslint-enable vue/html-self-closing ")
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    ));
  }
});
export {
  G as default
};

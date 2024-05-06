import '../assets/index.css';
var Je = Object.defineProperty;
var et = (s, e, t) => e in s ? Je(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var l = (s, e, t) => (et(s, typeof e != "symbol" ? e + "" : e, t), t);
import { inject as tt, createVNode as V, render as ne, nextTick as st, defineComponent as Me, defineAsyncComponent as T, ref as v, computed as p, watch as ke, onMounted as ue, onBeforeUnmount as Pe, openBlock as E, createElementBlock as B, withModifiers as A, withKeys as nt, withDirectives as $e, unref as x, vShow as _e, createCommentVNode as C, createElementVNode as O, normalizeClass as Ee, createBlock as N, Transition as ot, withCtx as ye, resolveDynamicComponent as it, toDisplayString as be, createTextVNode as rt, normalizeStyle as at, getCurrentInstance as lt, onUnmounted as ct } from "vue";
function Ce(s, e) {
  const t = tt(s, e);
  if (!t)
    throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${s}`);
  return t;
}
function zs(s, e) {
  let t;
  return function(...n) {
    clearTimeout(t), t = setTimeout(() => {
      s.apply(this, n);
    }, e);
  };
}
function ut(s) {
  return !!s;
}
function Fe(s, e) {
  let t = e == null ? void 0 : e.element;
  function n() {
    t && ne(null, t);
  }
  const o = V(
    s,
    { ...e == null ? void 0 : e.props, ...e != null && e.addDestroyInProps ? { destroy: n } : {} },
    e == null ? void 0 : e.children
  );
  return e != null && e.app ? (o.appContext = e.app._context, t ? ne(o, t) : typeof document < "u" && (t = document.createElement("div"), ne(o, t))) : (t = t ?? document.body, ne(o, t)), { vNode: o, destroy: n, el: t };
}
function L() {
  return typeof document < "u";
}
class mt {
  constructor(e, t) {
    l(this, "defaultOptions", {
      element: void 0,
      timeout: 60 * 1e3 * 5,
      // 5 minutes
      once: !1,
      immediate: !0
    });
    l(this, "options");
    l(this, "timeoutHandler");
    l(this, "isIdle", !1);
    l(this, "isDestroy", !1);
    l(this, "startTime", 0);
    l(this, "remainingTime", 0);
    l(this, "lastClientX", -1);
    l(this, "lastClientY", -1);
    l(this, "eventNames", [
      "DOMMouseScroll",
      "mousedown",
      "mousemove",
      "mousewheel",
      "MSPointerDown",
      "MSPointerMove",
      "keydown",
      "touchmove",
      "touchstart",
      "wheel",
      "click"
    ]);
    l(this, "handleEvent", (e) => {
      try {
        if (this.remainingTime > 0)
          return;
        if (e.type === "mousemove") {
          const { clientX: t, clientY: n } = e;
          if (t === void 0 && n === void 0 || t === this.lastClientX && n === this.lastClientY)
            return;
          this.lastClientX = t, this.lastClientY = n;
        }
        this.resetTimeout(), this.callback({ isIdle: this.isIdle, eventType: e.type });
      } catch (t) {
        throw new Error(`[IdleTimeout](handleEvent) ${t}`);
      }
    });
    this.callback = e, this.options = {
      ...this.defaultOptions,
      ...t
    }, L() && this.start();
  }
  get element() {
    return this.options.element ?? document.body;
  }
  start() {
    if (!L()) {
      console.warn("[IdleTimeout](start) you should run this method on client side");
      return;
    }
    for (const e of this.eventNames)
      this.element.addEventListener(e, this.handleEvent);
    this.resetTimeout(), this.options.immediate && this.callback({ isIdle: !1 });
  }
  pause() {
    const e = this.startTime + this.options.timeout - Date.now();
    e <= 0 || (this.remainingTime = e, this.timeoutHandler && (clearTimeout(this.timeoutHandler), this.timeoutHandler = void 0));
  }
  resume() {
    this.remainingTime <= 0 || (this.resetTimeout(), this.callback({ isIdle: this.isIdle }), this.remainingTime = 0);
  }
  reset() {
    this.isDestroy = !1, this.isIdle = !1, this.remainingTime = 0, this.resetTimeout(), this.callback({ isIdle: this.isIdle });
  }
  destroy() {
    if (!L()) {
      console.warn("[IdleTimeout](destroy) you should run this method on client side");
      return;
    }
    this.isDestroy = !0;
    for (const e of this.eventNames)
      this.element.removeEventListener(e, this.handleEvent);
    this.timeoutHandler && clearTimeout(this.timeoutHandler);
  }
  resetTimeout() {
    this.isIdle = !1, this.timeoutHandler && (clearTimeout(this.timeoutHandler), this.timeoutHandler = void 0), this.timeoutHandler = setTimeout(
      this.handleTimeout.bind(this),
      this.remainingTime || this.options.timeout
    ), this.startTime = Date.now();
  }
  handleTimeout() {
    this.isIdle = !0, this.callback({ isIdle: this.isIdle }), this.options.once && this.destroy();
  }
  get destroyed() {
    return this.isDestroy;
  }
  get timeout() {
    return this.options.timeout;
  }
  set timeout(e) {
    this.options.timeout = e;
  }
  get idle() {
    return this.isIdle;
  }
  set idle(e) {
    e ? this.handleTimeout() : this.reset(), this.callback({ isIdle: this.isIdle });
  }
}
class dt {
  constructor(e, t) {
    l(this, "eventHandlerFunction");
    l(this, "event", "visibilitychange");
    l(this, "timeoutHandler");
    l(this, "options");
    l(this, "defaultOptions", {
      timeout: 5e3,
      once: !1,
      immediate: !0
    });
    l(this, "isVisible", !1);
    this.callback = e, this.options = {
      ...this.defaultOptions,
      ...t
    }, this.eventHandlerFunction = this.eventHandler.bind(this), L() && this.start();
  }
  start() {
    if (!L()) {
      console.warn("[UserVisibility](start) you should run this method on client side");
      return;
    }
    this.options.immediate && this.emitCallback(), this.addEventListener();
  }
  emitCallback() {
    this.isVisible = document.visibilityState === "visible", this.callback({ isVisible: this.isVisible }), this.options.once && this.destroy();
  }
  eventHandler() {
    document.visibilityState === "visible" && !this.isVisible ? (this.clearTimeout(), this.emitCallback()) : document.visibilityState === "hidden" && this.initTimeout();
  }
  clearTimeout() {
    this.timeoutHandler && (clearTimeout(this.timeoutHandler), this.timeoutHandler = void 0);
  }
  initTimeout() {
    this.clearTimeout(), this.timeoutHandler = setTimeout(this.emitCallback.bind(this), this.options.timeout);
  }
  addEventListener() {
    document.addEventListener(this.event, this.eventHandlerFunction);
  }
  removeEventListener() {
    document.removeEventListener(this.event, this.eventHandlerFunction);
  }
  destroy() {
    this.removeEventListener(), this.timeoutHandler && clearTimeout(this.timeoutHandler);
  }
}
function ht(s) {
  return new Promise((e) => setTimeout(e, s));
}
class Es {
  constructor({ src: e, identifier: t, once: n = !0, async: o = !0, defer: i = !0 }) {
    l(this, "src");
    l(this, "script");
    l(this, "once");
    l(this, "async");
    l(this, "defer");
    l(this, "identifier");
    if (typeof window > "u")
      throw new TypeError("[ScriptLoader]: Is supported only on browser side");
    if (!e)
      throw new Error('[ScriptLoader]: You should provide the attribut "src"');
    if (!t)
      throw new Error('[ScriptLoader]: You should provide the attribut "identifier"');
    this.src = e, this.identifier = t, this.once = n, this.async = o, this.defer = i;
  }
  removeTag(e) {
    var t;
    typeof e == "string" ? (t = document.head.querySelector(`[data-identifier="${e}"]`)) == null || t.remove() : e.remove();
  }
  load() {
    const e = window, t = document.head.querySelectorAll(`[data-identifier="${this.identifier}"]`);
    if (this.once && e[this.identifier] && t.length > 0)
      return this.script = e[this.identifier], Promise.resolve(this.script);
    if (!this.once && t.length > 0)
      for (const n of t)
        this.removeTag(n);
    return this.injectScript();
  }
  injectScript() {
    const e = window;
    return new Promise((t, n) => {
      try {
        const o = document.createElement("script");
        o.src = this.src, o.async = this.async, o.defer = this.defer, o.dataset.identifier = this.identifier, o.addEventListener("error", (i) => n(new Error(`[ScriptLoader](injectScript) ${i.message}`))), o.addEventListener("load", (i) => (this.script = i, e[this.identifier] = i, t(i))), document.head.append(o);
      } catch (o) {
        throw new Error(`[ScriptLoader](init) ${o}`);
      }
    });
  }
}
function Ls(s) {
  return [...s].map((e) => {
    const t = e.codePointAt(0);
    return t ? t % 32 + 127461 : void 0;
  }).filter(ut).map((e) => String.fromCodePoint(e)).join("");
}
class ft {
  constructor(e) {
    l(this, "defaultOptions", {
      preventDefaultOnTouchMove: !1,
      preventDefaultOnMouseWheel: !1,
      threshold: 50,
      immediate: !1,
      triggerOnEnd: !1
    });
    l(this, "element");
    l(this, "xStart");
    l(this, "yStart");
    l(this, "xEnd");
    l(this, "yEnd");
    l(this, "xDiff");
    l(this, "yDiff");
    l(this, "onToucheStartCallback");
    l(this, "onToucheMoveCallback");
    l(this, "onToucheEndCallback");
    l(this, "onMouseWheelCallback");
    l(this, "options");
    if (this.inputOption = e, this.options = { ...this.defaultOptions, ...e }, !this.options.element)
      throw new Error(
        "[SwipeHandler] Element should be provided. Its can be a string selector or an HTMLElement"
      );
    if (typeof this.options.element == "string") {
      const t = document.querySelector(this.options.element);
      if (!(t instanceof HTMLElement))
        throw new TypeError("[SwipeHandler] String selector for element is not found");
      this.element = t;
    } else
      this.element = this.options.element;
    this.onToucheStartCallback = this.toucheStartHandler.bind(this), this.onToucheMoveCallback = this.handleTouchMove.bind(this), this.onToucheEndCallback = this.handleTouchEnd.bind(this), this.onMouseWheelCallback = this.handleMouseWheel.bind(this), this.options.immediate && this.start();
  }
  start() {
    this.element.addEventListener("touchstart", this.onToucheStartCallback, { passive: !0 }), this.element.addEventListener("touchmove", this.onToucheMoveCallback, { passive: !0 }), this.options.triggerOnEnd && this.element.addEventListener("touchend", this.onToucheEndCallback, { passive: !0 }), this.options.preventDefaultOnMouseWheel && this.element.addEventListener("mousewheel", this.onMouseWheelCallback, { passive: !1 });
  }
  stop() {
    this.element.removeEventListener("touchstart", this.onToucheStartCallback), this.element.removeEventListener("touchmove", this.onToucheMoveCallback), this.element.removeEventListener("touchend", this.onToucheEndCallback), this.options.preventDefaultOnMouseWheel && this.element.removeEventListener("mousewheel", this.onMouseWheelCallback);
  }
  handleMouseWheel(e) {
    e.preventDefault();
  }
  toucheStartHandler(e) {
    this.xStart = e.touches[0].clientX, this.yStart = e.touches[0].clientY, this.emitValuesChanged();
  }
  emitValuesChanged() {
    var e, t;
    (t = (e = this.options).onValuesChanged) == null || t.call(e, {
      xStart: this.xStart,
      yStart: this.yStart,
      xEnd: this.xEnd,
      yEnd: this.yEnd,
      xDiff: this.xDiff,
      yDiff: this.yDiff
    });
  }
  handleTouchMove(e) {
    this.options.preventDefaultOnTouchMove && e.cancelable && e.preventDefault(), this.xEnd = e.touches[0].clientX, this.yEnd = e.touches[0].clientY, !(!this.xStart || !this.yStart) && (this.xDiff = this.xStart - this.xEnd, this.yDiff = this.yStart - this.yEnd, this.emitValuesChanged(), this.options.triggerOnEnd || this.runCallbacks(e));
  }
  handleTouchEnd(e) {
    this.runCallbacks(e), this.emitValuesChanged();
  }
  runCallbacks(e) {
    var t, n, o, i, r, c, m, y;
    typeof this.xDiff != "number" || typeof this.yDiff != "number" || Math.abs(this.xDiff) < this.options.threshold && Math.abs(this.yDiff) < this.options.threshold || (Math.abs(this.xDiff) > Math.abs(this.yDiff) ? this.xDiff > 0 ? (n = (t = this.options).onLeft) == null || n.call(t, e) : (i = (o = this.options).onRight) == null || i.call(o, e) : this.yDiff > 0 ? (c = (r = this.options).onUp) == null || c.call(r, e) : (y = (m = this.options).onDown) == null || y.call(m, e), this.resetValues());
  }
  resetValues() {
    this.xStart = void 0, this.yStart = void 0, this.xEnd = void 0, this.yEnd = void 0, this.xDiff = void 0, this.yDiff = void 0, this.emitValuesChanged();
  }
}
function Ts(s, e) {
  let t = 0;
  return async function() {
    const n = Date.now();
    n - t >= e && (await s(), t = n);
  };
}
const ce = "__maz-click-outside__", Ne = () => document.ontouchstart === null ? "touchstart" : "click";
async function Ve(s, e) {
  try {
    Be(s);
    const t = e.instance, n = e.value, o = typeof n == "function";
    if (!o)
      throw new Error("[maz-ui](vClickOutside) the callback should be a function");
    await st(), s[ce] = (r) => {
      if ((!s || r.target && !s.contains(r.target)) && n && o)
        return n.call(t, r);
    };
    const i = Ne();
    document.addEventListener(i, s[ce], { passive: !0 });
  } catch (t) {
    console.error("[maz-ui](vClickOutside)", t);
  }
}
function Be(s) {
  try {
    const e = Ne();
    document.removeEventListener(e, s[ce], !1), delete s[ce];
  } catch (e) {
    console.error("[maz-ui](vClickOutside)", e);
  }
}
function vt(s, e) {
  try {
    if (e.value === e.oldValue)
      return;
    Ve(s, e);
  } catch (t) {
    console.error("[maz-ui](vClickOutside)", t);
  }
}
const pt = {
  mounted: Ve,
  updated: vt,
  unmounted: Be
}, gt = {
  install: (s) => {
    s.directive("click-outside", pt);
  }
}, qe = (s, e, t) => {
  var r;
  s.stopPropagation();
  const n = typeof t.value == "function" ? t.value : t.value.handler, o = typeof t.value == "object" ? t.value.exclude : void 0;
  let i = !1;
  if (o && o.length > 0) {
    for (const c of o)
      if (!i && s.target instanceof HTMLElement) {
        const m = (r = document.querySelector(c)) == null ? void 0 : r.getAttribute("id");
        i = s.target.getAttribute("id") === m;
      }
  }
  !e.contains(s.target) && !i && (n == null || n());
};
function Ue() {
  return document.ontouchstart === null ? "touchstart" : "click";
}
function yt(s, e) {
  const t = Ue();
  document.removeEventListener(t, (n) => qe(n, s, e));
}
function bt(s, e) {
  if (typeof e.value != "function" && typeof e.value == "object" && typeof e.value.handler != "function") {
    console.error("[maz-ui](vClosable) v-closable directive requires a handler function");
    return;
  }
  const t = Ue();
  document.addEventListener(t, (n) => qe(n, s, e));
}
const wt = {
  mounted: bt,
  unmounted: yt
}, zt = {
  install: (s) => {
    s.directive("closable", wt);
  }
}, Le = {
  position: "top"
};
class We {
  constructor(e = {}) {
    l(this, "options");
    this.options = {
      ...Le,
      ...e
    };
  }
  getPosition({ modifiers: e, value: t }) {
    return e.top ? "top" : e.bottom ? "bottom" : e.left ? "left" : e.right ? "right" : typeof t == "string" ? "top" : t.position ?? this.options.position;
  }
  getText({ value: e }) {
    return typeof e == "string" ? e : e.text;
  }
  getOpen({ value: e }) {
    return typeof e == "string" ? !1 : e.open ?? !1;
  }
  getColor({ value: e }) {
    return typeof e == "string" ? "default" : e.color ?? "default";
  }
  create(e, t) {
    e.setAttribute("data-tooltip", this.getText(t)), e.classList.add("m-tooltip");
    const n = this.getPosition(t);
    e.classList.add(`m-tooltip--${n}`), e.classList.add(`m-tooltip--${this.getColor(t)}`), this.getOpen(t) && e.classList.add("m-tooltip--open");
  }
  update(e, t) {
    this.remove(e, t), this.create(e, t);
  }
  remove(e, t) {
    e.removeAttribute("data-tooltip"), e.classList.remove("m-tooltip"), e.classList.remove("m-tooltip--top"), e.classList.remove("m-tooltip--bottom"), e.classList.remove("m-tooltip--left"), e.classList.remove("m-tooltip--right"), e.classList.remove("m-tooltip--open"), e.classList.remove(`m-tooltip--${this.getColor(t)}`);
  }
}
let oe;
const Is = {
  beforeMount(s, e) {
    const t = typeof e.value == "object" ? e.value : {};
    return oe = new We(t), oe.create(s, e);
  },
  updated(s, e) {
    return oe.update(s, e);
  },
  unmounted(s, e) {
    return oe.remove(s, e);
  }
}, Et = {
  install: (s, e = Le) => {
    const t = {
      ...Le,
      ...e
    }, n = new We(t);
    s.directive("tooltip", {
      beforeMount: n.create.bind(n),
      updated: n.update.bind(n),
      unmounted: n.remove.bind(n)
    });
  }
}, Lt = `
.maz-zoom-img {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 1050;
  background-color: hsla(238, 15%, 40%, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.maz-zoom-img,
.maz-zoom-img * {
  box-sizing: border-box;
}

.maz-zoom-img .maz-zoom-img__wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  min-height: 0;
  max-width: 100%;
  max-height: 100%;
  transition: all 300ms ease-in-out;
  opacity: 0;
  transform: scale(0.5);
}

.maz-zoom-img.maz-animate .maz-zoom-img__wrapper {
  opacity: 1;
  transform: scale(1);
}

.maz-zoom-img.maz-animate .maz-zoom-img__loader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(238, 15%, 40%, 0.7);
  border-radius: 1rem;
  z-index: 2;
  min-width: 60px;
  min-height: 60px;
}
.maz-zoom-img.maz-animate .maz-zoom-img__loader[hidden] {
  display: none;
}

@-webkit-keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.maz-zoom-img.maz-animate .maz-zoom-img__loader__svg {
  animation: spin .6s linear infinite;
}

.maz-zoom-img img {
  max-width: 100%;
  max-height: 100%;
  min-width: 0;
  border-radius: 1rem;
}

.maz-zoom-img .maz-zoom-btn {
  margin: 0 auto;
  border: none;
  background-color: hsla(0, 0%, 7%, 0.5);
  box-shadow: 0 0 0.5rem 0 hsla(0, 0%, 0%, 0.2);
  height: 2.2rem;
  min-height: 2.2rem;
  width: 2.2rem;
  min-width: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.2rem;
  cursor: pointer;
  flex: 0 0 auto;
  outline: none;
}

.maz-zoom-img .maz-zoom-btn svg {
  fill: white;
}

.maz-zoom-img .maz-zoom-btn.maz-zoom-btn--close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
}

.maz-zoom-img .maz-zoom-btn.maz-zoom-btn--previous {
  position: absolute;
  left: 0.5rem;
  z-index: 1;
}

.maz-zoom-img .maz-zoom-btn.maz-zoom-btn--next {
  position: absolute;
  right: 0.5rem;
  z-index: 1;
}

.maz-zoom-img .maz-zoom-btn:hover {
  background-color: hsl(0, 0%, 0%);
}`, xe = {
  close: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  next: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',
  previous: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',
  spinner: '<svg width="40px" height="40px" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve" class="maz-zoom-img__loader__svg" data-v-6d1cb50c=""><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"></path></svg>'
};
class Tt {
  constructor(e) {
    l(this, "options");
    l(this, "loader");
    l(this, "wrapper");
    l(this, "img");
    l(this, "keydownHandler");
    l(this, "onImgLoadedCallback");
    l(this, "buttonsAdded");
    l(this, "defaultOptions", {
      scale: !0,
      blur: !0,
      disabled: !1
    });
    l(this, "mouseEnterListener");
    l(this, "mouseLeaveListener");
    l(this, "renderPreviewListener");
    if (!e.value)
      throw new Error(
        '[MazUI](zoom-img) Image path must be defined. Ex: `v-zoom-img="<PATH_TO_IMAGE>"`'
      );
    if (typeof e.value == "object" && !e.value.src)
      throw new Error("[maz-ui](zoom-img) src of image must be provided");
    this.buttonsAdded = !1, this.options = this.buildOptions(e), this.keydownHandler = this.keydownLister.bind(this), this.loader = this.getLoader(), this.wrapper = document.createElement("div"), this.wrapper.classList.add("maz-zoom-img__wrapper"), this.wrapper.prepend(this.loader), this.img = document.createElement("img"), this.onImgLoadedCallback = this.onImgLoaded.bind(this), this.imgEventHandler(!0);
  }
  buildOptions(e) {
    return {
      ...this.defaultOptions,
      ...typeof e.value == "object" ? e.value : { src: e.value }
    };
  }
  get allInstances() {
    return [...document.querySelectorAll(".maz-zoom-img-instance")];
  }
  create(e) {
    this.options.disabled || (e.style.cursor = "pointer", setTimeout(() => e.classList.add("maz-zoom-img-instance")), e.setAttribute("data-zoom-src", this.options.src), this.options.alt && e.setAttribute("data-zoom-alt", this.options.alt), e.style.transition = "all 300ms ease-in-out", this.mouseEnterListener = () => this.mouseEnter(e), this.mouseLeaveListener = () => this.mouseLeave(e), this.renderPreviewListener = () => this.renderPreview(e, this.options), e.addEventListener("mouseenter", this.mouseEnterListener), e.addEventListener("mouseleave", this.mouseLeaveListener), e.addEventListener("click", this.renderPreviewListener));
  }
  update(e) {
    this.options = this.buildOptions(e);
  }
  remove(e) {
    this.imgEventHandler(!1), e.removeEventListener("mouseenter", this.mouseEnterListener), e.removeEventListener("mouseleave", this.mouseLeaveListener), e.removeEventListener("click", this.renderPreviewListener), e.classList.remove("maz-zoom-img-instance"), e.removeAttribute("data-zoom-src"), e.removeAttribute("data-zoom-alt"), e.style.cursor = "";
  }
  renderPreview(e, t) {
    e.classList.add(
      "maz-is-open"
      /* OPEN */
    ), this.addStyle(Lt);
    const n = document.createElement("div");
    n.classList.add("maz-zoom-img"), n.setAttribute("id", "MazImgPreviewFullsize"), n.addEventListener("click", (o) => {
      n.isEqualNode(o.target) && this.closePreview();
    }), typeof t == "object" && (this.img.setAttribute("src", t.src), t.alt && this.img.setAttribute("alt", t.alt), this.img.id = "MazImgElement"), this.wrapper.append(this.img), n.append(this.wrapper), document.body.append(n), this.keyboardEventHandler(!0), setTimeout(() => {
      n && n.classList.add("maz-animate");
    }, 100);
  }
  onImgLoaded() {
    this.wrapper.style.width = `${this.img.width}px`, this.wrapper.style.minWidth = "200px", this.loader.hidden = !0;
    const e = this.getButton(), t = [], n = this.allInstances.length > 1;
    if (!this.buttonsAdded) {
      if (this.buttonsAdded = !0, n) {
        const o = this.getButton("previous"), i = this.getButton("next");
        t.push(o, i);
      }
      this.wrapper.append(e), n && (this.wrapper.prepend(t[0]), this.wrapper.append(t[1]));
    }
  }
  getLoader() {
    const e = document.createElement("div");
    return e.classList.add("maz-zoom-img__loader"), e.innerHTML = xe.spinner, e;
  }
  mouseLeave(e) {
    this.options.scale && (e.style.transform = ""), this.options.blur && (e.style.filter = ""), e.style.zIndex = "";
  }
  mouseEnter(e) {
    e.style.zIndex = "1", this.options.scale && (e.style.transform = "scale(1.1)"), this.options.blur && (e.style.filter = "blur(2px)");
  }
  keydownLister(e) {
    e.preventDefault(), (e.key === "Escape" || e.key === " ") && this.closePreview(), (e.key === "ArrowLeft" || e.key === "ArrowRight") && this.nextPreviousImage(e.key === "ArrowRight");
  }
  getButton(e = "close") {
    const t = document.createElement("button");
    return t.innerHTML = xe[e], t.addEventListener("click", () => {
      e === "close" ? this.closePreview() : this.allInstances && this.nextPreviousImage(e === "next");
    }), t.classList.add("maz-zoom-btn"), t.classList.add(`maz-zoom-btn--${e}`), t;
  }
  closePreview() {
    const e = document.querySelector("#MazImgPreviewFullsize"), t = document.querySelector("#MazPreviewStyle"), n = document.querySelector(
      ".maz-zoom-img-instance.maz-is-open"
    );
    n && n.classList.remove(
      "maz-is-open"
      /* OPEN */
    ), e && e.classList.remove("maz-animate"), this.keyboardEventHandler(!1), setTimeout(() => {
      e && e.remove(), t && t.remove();
    }, 300);
  }
  getNewInstanceIndex(e) {
    return e < 0 ? this.allInstances.length - 1 : e >= this.allInstances.length ? 0 : e;
  }
  nextPreviousImage(e) {
    const t = e, n = document.querySelector(
      ".maz-zoom-img-instance.maz-is-open"
    );
    if (n) {
      const o = this.allInstances.indexOf(n), i = t ? o + 1 : o - 1, r = this.allInstances[this.getNewInstanceIndex(i)];
      r && this.useNextInstance(n, r);
    }
  }
  useNextInstance(e, t) {
    e.classList.remove(
      "maz-is-open"
      /* OPEN */
    ), t.classList.add(
      "maz-is-open"
      /* OPEN */
    );
    const n = t.getAttribute("data-zoom-src"), o = t.getAttribute("data-zoom-alt");
    this.wrapper.style.width = "", this.loader.hidden = !1, n && this.img.setAttribute("src", n), o && this.img.setAttribute("alt", o);
  }
  addStyle(e) {
    const t = document.createElement("style");
    t.id = "MazPreviewStyle", t.textContent = e, document.head.append(t);
  }
  keyboardEventHandler(e) {
    if (e)
      return document.addEventListener("keydown", this.keydownHandler);
    document.removeEventListener("keydown", this.keydownHandler);
  }
  imgEventHandler(e) {
    if (e)
      return this.img.addEventListener("load", this.onImgLoadedCallback);
    this.img.removeEventListener("load", this.onImgLoadedCallback);
  }
}
let ie;
const It = {
  created(s, e) {
    ie = new Tt(e), ie.create(s);
  },
  updated(s, e) {
    ie.update(e);
  },
  unmounted(s) {
    ie.remove(s);
  }
}, kt = {
  install(s) {
    s.directive("zoom-img", It);
  }
}, Ct = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Te = {
  baseClass: "m-lazy-img",
  loadedClass: "m-lazy-loaded",
  loadingClass: "m-lazy-loading",
  errorClass: "m-lazy-error",
  noPhotoClass: "m-lazy-no-photo",
  noPhoto: !1,
  observerOnce: !0,
  loadOnce: !1,
  noUseErrorPhoto: !1,
  observerOptions: {
    threshold: 0.1
  }
};
class je {
  constructor(e = {}) {
    l(this, "observers", []);
    l(this, "defaultOptions", Te);
    l(this, "options");
    l(this, "onImgLoadedCallback");
    l(this, "onImgErrorCallback");
    l(this, "hasImgLoaded", !1);
    this.options = this.buildOptions(e), this.onImgLoadedCallback = this.imageIsLoaded.bind(this), this.onImgErrorCallback = this.imageHasError.bind(this);
  }
  async loadErrorPhoto() {
    const { default: e } = await import("./no-photography-BJX8HSus.mjs");
    return e;
  }
  buildOptions(e) {
    return {
      ...this.defaultOptions,
      ...e,
      observerOptions: {
        ...this.defaultOptions.observerOptions,
        ...e.observerOptions
      }
    };
  }
  removeClass(e, t) {
    e.classList.remove(t);
  }
  addClass(e, t) {
    e.classList.add(t);
  }
  removeAllStateClasses(e) {
    this.removeClass(e, this.options.loadedClass), this.removeClass(e, this.options.loadingClass), this.removeClass(e, this.options.errorClass), this.removeClass(e, this.options.noPhotoClass);
  }
  setBaseClass(e) {
    this.addClass(e, this.options.baseClass);
  }
  imageIsLoading(e) {
    var t, n;
    this.addClass(e, this.options.loadingClass), (n = (t = this.options).onLoading) == null || n.call(t, e);
  }
  imageHasNoPhoto(e) {
    this.removeClass(e, this.options.loadingClass), this.addClass(e, this.options.noPhotoClass), this.setDefaultPhoto(e);
  }
  imageIsLoaded(e) {
    var t, n;
    this.hasImgLoaded = !0, this.removeClass(e, this.options.loadingClass), this.addClass(e, this.options.loadedClass), (n = (t = this.options).onLoaded) == null || n.call(t, e);
  }
  imageHasError(e) {
    var t, n;
    this.removeClass(e, this.options.loadingClass), this.addClass(e, this.options.errorClass), (n = (t = this.options).onError) == null || n.call(t, e), this.setDefaultPhoto(e);
  }
  getSrc(e) {
    return typeof e.value == "object" ? e.value.src : e.value;
  }
  getImageUrl(e, t) {
    const n = this.getImgElement(e).getAttribute("data-lazy-src");
    return n || this.getSrc(t);
  }
  async setPictureSourceUrls(e) {
    const t = e.querySelectorAll("source");
    if (t.length > 0)
      for await (const n of t) {
        const o = n.getAttribute("data-lazy-srcset");
        if (o)
          n.srcset = o;
        else
          return this.imageHasError(e);
      }
    else
      this.imageHasError(e);
  }
  hasBgImgMode(e) {
    return e.arg === "bg-image";
  }
  isPictureElement(e) {
    return e instanceof HTMLPictureElement;
  }
  getImgElement(e) {
    return this.isPictureElement(e) ? e.querySelector("img") : e;
  }
  async setDefaultPhoto(e) {
    if (this.options.noUseErrorPhoto)
      return;
    const t = this.options.fallbackSrc ?? this.options.errorPhoto;
    typeof t == "string" && this.addClass(e, this.options.noPhotoClass);
    const n = t ?? await this.loadErrorPhoto(), o = e.querySelectorAll("source");
    if (o.length > 0)
      for await (const i of o)
        i.srcset = n;
    else
      this.setImgSrc(e, n);
  }
  addEventListenerToImg(e) {
    const t = this.getImgElement(e);
    t.addEventListener("load", () => this.onImgLoadedCallback(e), {
      once: !0
    }), t.addEventListener("error", (n) => this.onImgErrorCallback(e, n), { once: !0 });
  }
  async loadImage(e, t) {
    if (this.imageIsLoading(e), this.isPictureElement(e))
      this.addEventListenerToImg(e), await this.setPictureSourceUrls(e);
    else {
      const n = this.getImageUrl(e, t);
      if (!n)
        return this.imageHasError(e);
      this.hasBgImgMode(t) ? (e.style.backgroundImage = `url('${n}')`, this.imageIsLoaded(e)) : (this.addEventListenerToImg(e), this.setImgSrc(e, n));
    }
  }
  setImgSrc(e, t) {
    const n = this.getImgElement(e);
    n.src = t;
  }
  handleIntersectionObserver(e, t, n, o) {
    var i, r;
    this.observers.push(o);
    for (const c of n)
      if (c.isIntersecting) {
        if ((r = (i = this.options).onIntersecting) == null || r.call(i, c.target), this.options.observerOnce && o.unobserve(e), this.options.loadOnce && this.hasImgLoaded)
          return;
        this.loadImage(e, t);
      }
  }
  createObserver(e, t) {
    const n = (r, c) => {
      this.handleIntersectionObserver(e, t, r, c);
    }, o = this.options.observerOptions;
    new IntersectionObserver(n, o).observe(e);
  }
  async imageHandler(e, t, n) {
    if (n === "update")
      for await (const o of this.observers)
        o.unobserve(e);
    window.IntersectionObserver ? this.createObserver(e, t) : this.loadImage(e, t);
  }
  async bindUpdateHandler(e, t, n) {
    if (this.options.noPhoto)
      return this.imageHasNoPhoto(e);
    await this.imageHandler(e, t, n);
  }
  async add(e, t) {
    if (this.hasBgImgMode(t) && this.isPictureElement(e))
      throw new Error(`[MazLazyImg] You can't use the "bg-image" mode with "<picture />" element`);
    setTimeout(() => this.setBaseClass(e), 0), e.getAttribute("src") || this.setImgSrc(e, Ct), await this.bindUpdateHandler(e, t, "bind");
  }
  async update(e, t) {
    t.value !== t.oldValue && (this.hasImgLoaded = !1, this.removeAllStateClasses(e), await this.bindUpdateHandler(e, t, "update"));
  }
  remove(e, t) {
    this.hasImgLoaded = !1, this.hasBgImgMode(t) && (e.style.backgroundImage = ""), this.removeAllStateClasses(e);
    for (const n of this.observers)
      n.unobserve(e);
    this.observers = [];
  }
}
let re;
const ks = {
  created(s, e) {
    const t = typeof e.value == "object" ? e.value : {};
    re = new je(t), re.add(s, e);
  },
  updated(s, e) {
    re.update(s, e);
  },
  unmounted(s, e) {
    re.remove(s, e);
  }
}, St = {
  install(s, e = {}) {
    const t = {
      ...Te,
      ...e,
      observerOptions: {
        ...Te.observerOptions,
        ...e.observerOptions
      }
    }, n = new je(t);
    s.directive("lazy-img", {
      created: n.add.bind(n),
      updated: n.update.bind(n),
      unmounted: n.remove.bind(n)
    });
  }
}, xt = ["onKeypress"], At = { class: "m-fullscreen-img-scroller" }, Ot = ["src", "alt"], Ht = /* @__PURE__ */ Me({
  __name: "MazFullscreenImg",
  props: {
    src: {},
    clickedElementBounds: { default: void 0 },
    offset: { default: void 0 },
    animation: { default: () => ({
      duration: 300,
      easing: "ease-in-out"
    }) },
    openInstanceClass: { default: "m-fullscreen-img-instance" },
    clickedElement: {},
    destroy: { type: Function, default: void 0 },
    alt: { default: void 0 },
    zoom: { type: Boolean, default: !0 }
  },
  emits: ["close", "previous", "next", "before-close"],
  setup(s, { emit: e }) {
    const t = e, n = T(() => import("./MazSpinner-D-qUIhjN.mjs")), o = T(() => import("./x-mark-BP8zWe_C.mjs")), i = T(() => import("./chevron-left-CcZaP3Rc.mjs")), r = s, c = v(!1), m = v(!1), y = v(!1), z = v(!1), b = v(!1), f = v(r.clickedElement), k = p(() => r.clickedElement.getBoundingClientRect()), U = p(
      () => k.value.height < k.value.width
    ), $ = v(r.src), H = v(r.alt), Q = v(), I = v(), W = p(() => b.value ? "--is-zoomed maz-cursor-zoom-out" : "maz-cursor-zoom-in");
    function j() {
      c.value = !0, m.value = !1, y.value = !0;
    }
    ke(
      () => y.value,
      (u) => {
        u && se();
      }
    );
    function D() {
      t("before-close"), ve();
    }
    function M(u) {
      u.key === "Escape" && (u.preventDefault(), D()), (u.key === "ArrowLeft" || u.key === "ArrowRight") && (u.preventDefault(), R(u.key === "ArrowRight" ? "next" : "previous"));
    }
    function me() {
      document.documentElement.classList.add("--m-fullscreen-open");
    }
    function de() {
      document.documentElement.classList.remove("--m-fullscreen-open");
    }
    function G() {
      return [...document.querySelectorAll(".m-fullscreen-img-instance")];
    }
    function he(u, d) {
      return d < 0 ? u.length - 1 : d >= u.length ? 0 : d;
    }
    async function fe(u, d) {
      u.classList.remove(r.openInstanceClass), d.classList.add(r.openInstanceClass);
      const a = d.getAttribute("data-src"), h = d.getAttribute("data-alt");
      H.value = h, a && ($.value = a), c.value = !1, c.value || (m.value = !0);
    }
    function R(u) {
      const d = document.querySelector(
        `.m-fullscreen-img-instance.${r.openInstanceClass}`
      );
      if (d) {
        const a = G(), h = a.indexOf(d), g = u === "next" ? h + 1 : h - 1, w = a[he(a, g)];
        f.value = w, w && fe(d, w), t(u), b.value ? J(I.value) : F();
      }
    }
    function J(u) {
      U.value ? (u.style.width = `${window.innerWidth}px`, u.style.removeProperty("height")) : (u.style.height = `${window.innerHeight}px`, u.style.removeProperty("width")), u.style.removeProperty("top"), u.style.removeProperty("left");
    }
    async function ee() {
      const u = I.value;
      b.value ? (b.value = !b.value, F()) : (b.value = !b.value, J(u));
    }
    function Y(u) {
      var d;
      return (d = I.value) == null ? void 0 : d.animate(u, {
        duration: r.animation.duration,
        // Durée de l'animation en millisecondes
        easing: r.animation.easing
        // Fonction d'interpolation pour l'animation inverse
      });
    }
    function te(u = r.offset ?? 0) {
      const d = (f.value instanceof HTMLImageElement ? f.value.naturalWidth : f.value.clientWidth) || 1, a = (f.value instanceof HTMLImageElement ? f.value.naturalHeight : f.value.clientHeight) || 1, h = window.innerWidth, g = window.innerHeight, w = Math.min(
        (h - 2 * u) / d,
        (g - 2 * u) / a
      ), pe = (h - d * w) / 2, ge = (g - a * w) / 2;
      return {
        centerX: pe,
        centerY: ge,
        originalWidth: d,
        originalHeight: a,
        scale: w
      };
    }
    function _({ trigger: u }) {
      const { originalWidth: d, originalHeight: a, scale: h, centerX: g, centerY: w } = te(), { top: pe, left: ge, width: Qe, height: Ge } = k.value, Se = [
        {
          top: `${pe}px`,
          left: `${ge}px`,
          width: `${Qe}px`,
          height: `${Ge}px`,
          opacity: 0
        },
        {
          top: `${w}px`,
          left: `${g}px`,
          width: `${d * h}px`,
          height: `${a * h}px`,
          opacity: 1
        }
      ];
      return {
        frames: u === "open" ? Se : Se.reverse()
      };
    }
    function F() {
      const { centerX: u, centerY: d, originalHeight: a, originalWidth: h, scale: g } = te(), w = {
        top: `${d}px`,
        left: `${u}px`,
        width: `${h * g}px`,
        height: `${a * g}px`
      };
      if (!I.value)
        throw console.error("[maz-ui](vFullscreenImg) ImgElement is not defined");
      Object.assign(I.value.style, w);
    }
    function se() {
      const { frames: u } = _({
        trigger: "open"
      }), d = Y(u);
      if (!d)
        throw console.error("[maz-ui](vFullscreenImg) open animation is not defined");
      d.onfinish = () => {
        F();
      };
    }
    function ve() {
      const { frames: u } = _({
        trigger: "close"
      }), d = Y(u);
      if (!d)
        throw console.error("[maz-ui](vFullscreenImg) close animation is not defined");
      d.onfinish = () => {
        var a, h;
        t("close"), (a = Q.value) == null || a.remove(), (h = r.destroy) == null || h.call(r);
      };
    }
    function P() {
      b.value || F();
    }
    return ue(() => {
      m.value = !0, document.addEventListener("keydown", M), window.addEventListener("resize", P), me(), z.value = G().length > 1;
    }), Pe(() => {
      document.removeEventListener("keydown", M), window.removeEventListener("resize", P), de();
    }), (u, d) => (E(), B("div", {
      ref_key: "FullscreenImgElement",
      ref: Q,
      role: "button",
      class: "m-fullscreen-img",
      tabindex: "0",
      onClick: A(D, ["stop"]),
      onKeypress: nt(A(D, ["prevent"]), ["esc"])
    }, [
      $e(V(
        x(n),
        { class: "m-fullscreen-img-loader maz-h-16" },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_e, m.value]
      ]),
      y.value && z.value ? (E(), B("button", {
        key: 0,
        type: "button",
        class: "m-fullscreen-btn --next",
        onClick: d[0] || (d[0] = A((a) => R("next"), ["stop"]))
      }, [
        V(x(i), { class: "maz-rotate-180 maz-text-3xl" })
      ])) : C("v-if", !0),
      y.value && z.value ? (E(), B("button", {
        key: 1,
        type: "button",
        class: "m-fullscreen-btn --previous",
        onClick: d[1] || (d[1] = A((a) => R("previous"), ["stop"]))
      }, [
        V(x(i), { class: "maz-text-3xl" })
      ])) : C("v-if", !0),
      O("button", {
        type: "button",
        class: "m-fullscreen-btn --close",
        onClick: D
      }, [
        V(x(o), { class: "maz-text-3xl" })
      ]),
      O("div", At, [
        C(" eslint-disable-next-line vuejs-accessibility/no-static-element-interactions, vuejs-accessibility/click-events-have-key-events "),
        O("img", {
          ref_key: "ImgElement",
          ref: I,
          src: $.value,
          alt: H.value ?? void 0,
          tabindex: "0",
          class: Ee([W.value]),
          onLoad: j,
          onClick: d[2] || (d[2] = A((a) => u.zoom ? ee() : void 0, ["stop"]))
        }, null, 42, Ot)
      ])
    ], 40, xt));
  }
}), Re = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [n, o] of e)
    t[n] = o;
  return t;
}, Dt = /* @__PURE__ */ Re(Ht, [["__scopeId", "data-v-d975dba3"]]), Ae = "m-fullscreen-is-open";
class Mt {
  constructor() {
    l(this, "options");
    l(this, "defaultOptions", {
      scaleOnHover: !1,
      blurOnHover: !1,
      disabled: !1,
      zoom: !0,
      offset: 80,
      animation: {
        duration: 300,
        easing: "ease-in-out"
      }
    });
    l(this, "mouseEnterListener");
    l(this, "mouseLeaveListener");
    l(this, "renderPreviewListener");
  }
  buildOptions(e, t) {
    const n = typeof t.value == "object" ? t.value : { src: t.value, alt: void 0 }, o = (n == null ? void 0 : n.src) ?? this.getImgSrc(e), i = (n == null ? void 0 : n.alt) ?? this.getImgAlt(e);
    return {
      ...this.defaultOptions,
      ...n,
      src: o,
      alt: i
    };
  }
  get allInstances() {
    return [...document.querySelectorAll(".m-fullscreen-img-instance")];
  }
  getImgSrc(e) {
    var n;
    const t = ((n = this.options) == null ? void 0 : n.src) || e.getAttribute("src") || e.getAttribute("data-src");
    if (!t)
      throw new Error(
        '[maz-ui](fullscreen-img) src of image must be provided by `v-fullscreen=""`, `v-fullscreen="{ src: "" }"`, `src=""` or `data-src=""` atributes'
      );
    return t;
  }
  getImgAlt(e) {
    var t;
    return ((t = this.options) == null ? void 0 : t.alt) || e.getAttribute("alt") || e.getAttribute("data-alt");
  }
  create(e, t) {
    if (this.options = this.buildOptions(e, t), this.options.disabled)
      return;
    e.style.cursor = "move", (this.options.scaleOnHover || this.options.blurOnHover) && (e.style.transition = "all 200ms ease-in-out"), e.classList.add("m-fullscreen-img-instance"), e.setAttribute("data-src", this.getImgSrc(e));
    const n = this.getImgAlt(e);
    n && e.setAttribute("data-alt", n), this.mouseEnterListener = () => this.mouseEnter(e), this.mouseLeaveListener = () => this.mouseLeave(e), this.renderPreviewListener = () => this.renderPreview(e), e.addEventListener("mouseenter", this.mouseEnterListener), e.addEventListener("mouseleave", this.mouseLeaveListener), e.addEventListener("click", this.renderPreviewListener);
  }
  update(e, t) {
    this.options = this.buildOptions(e, t);
  }
  remove(e) {
    e.removeEventListener("mouseenter", this.mouseEnterListener), e.removeEventListener("mouseleave", this.mouseLeaveListener), e.removeEventListener("click", this.renderPreviewListener), e.classList.remove("m-fullscreen-img-instance"), e.style.cursor = "";
  }
  renderPreview(e) {
    return e.classList.add(Ae), Fe(Dt, {
      props: {
        ...this.options,
        openInstanceClass: Ae,
        clickedElement: e,
        clickedElementBounds: e.getBoundingClientRect()
      },
      addDestroyInProps: !0
    });
  }
  mouseLeave(e) {
    this.options.scaleOnHover && (e.style.transform = ""), this.options.blurOnHover && (e.style.filter = ""), e.style.zIndex = "";
  }
  mouseEnter(e) {
    e.style.zIndex = "1", this.options.scaleOnHover && (e.style.transform = "scale(1.04)"), this.options.blurOnHover && (e.style.filter = "blur(3px)");
  }
}
let ae;
const Pt = {
  mounted(s, e) {
    return ae = new Mt(), ae.create(s, e);
  },
  updated(s, e) {
    return ae.update(s, e);
  },
  unmounted(s) {
    return ae.remove(s);
  }
}, $t = {
  install(s) {
    s.directive("fullscreen-img", Pt);
  }
}, _t = [
  zt,
  kt,
  St,
  gt,
  $t,
  Et
], Cs = {
  install(s) {
    for (const e of _t)
      e.install(s, {});
  }
}, Ft = (s) => s ? (s = s.toString(), s.charAt(0).toUpperCase() + s.slice(1)) : "", Nt = {
  style: "currency",
  minimumFractionDigits: 2,
  round: !1
}, Vt = (s, e, t) => {
  let n = Number(s);
  return t.round && (n = Math.floor(n), t.minimumFractionDigits = 0), new Intl.NumberFormat(e, t).format(n);
}, Bt = (s, e, t) => {
  if (s === void 0)
    throw new TypeError("[maz-ui](FilterCurrency) The `number` attribute is required.");
  if (e === void 0)
    throw new TypeError("[maz-ui](FilterCurrency) The `locale` attribute is required.");
  if (typeof e != "string")
    throw new TypeError("[maz-ui](FilterCurrency) The `locale` attribute must be a string.");
  if (t.currency === void 0)
    throw new TypeError("[maz-ui](FilterCurrency) The `options.currency` attribute is required.");
}, qt = (s, e, t) => {
  const n = {
    ...Nt,
    ...t
  };
  Bt(s, e, n);
  try {
    return Vt(s, e, n);
  } catch (o) {
    throw new Error(`[maz-ui](FilterCurrency) ${o}`);
  }
}, Ut = {
  month: "short",
  day: "numeric",
  year: "numeric"
}, Wt = (s, e, t) => {
  if (e === void 0)
    throw new TypeError("[maz-ui](FilterDate) The `locale` attribute is required.");
  if (typeof e != "string")
    throw new TypeError("[maz-ui](FilterDate) The `locale` attribute must be a string.");
  const n = t ?? Ut;
  try {
    const o = s instanceof Date ? s : new Date(s);
    return new Intl.DateTimeFormat(e, n).format(o);
  } catch (o) {
    throw new Error(`[maz-ui](FilterDate) ${o}`);
  }
}, jt = {
  minimumFractionDigits: 2
}, Rt = (s, e, t) => {
  const n = {
    ...jt,
    ...t
  };
  if (s === void 0)
    throw new TypeError("[maz-ui](FilterNumber) The `number` attribute is required.");
  if (e === void 0)
    throw new TypeError("[maz-ui](FilterNumber) The `locale` attribute is required.");
  if (typeof e != "string")
    throw new TypeError("[maz-ui](FilterNumber) The `locale` attribute must be a string.");
  try {
    return new Intl.NumberFormat(e, n).format(Number(s));
  } catch (o) {
    throw new Error(`[maz-ui](FilterNumber) ${o}`);
  }
}, Yt = {
  capitalize: Ft,
  currency: qt,
  date: Wt,
  number: Rt
}, Ss = {
  install(s) {
    s.provide("filters", Yt);
  }
};
function Kt({ timeout: s = 1e3, callback: e, remainingTimeUpdate: t = 200 }) {
  const n = v(s), o = v(s);
  let i;
  function r(b) {
    typeof b == "number" && (o.value = b), typeof b == "number" && (n.value = b), c();
  }
  function c() {
    i || (i = setInterval(() => {
      o.value -= t, o.value <= 0 && (z(), e == null || e());
    }, t));
  }
  function m() {
    i && (clearInterval(i), i = void 0);
  }
  function y() {
    !i && o.value > 0 && c();
  }
  function z() {
    o.value = n.value, m();
  }
  return {
    remainingTime: o,
    start: r,
    pause: m,
    resume: y,
    stop: z
  };
}
const Xt = { class: "m-toast__message-wrapper" }, Zt = { class: "m-toast__message" }, Qt = { class: "maz-flex maz-items-center maz-gap-2" }, Gt = { key: 0 }, Jt = {
  key: 4,
  class: "progress-bar maz-absolute maz-inset-x-0 maz-bottom-0 maz-h-1"
}, es = /* @__PURE__ */ Me({
  __name: "MazToast",
  props: {
    message: { default: void 0 },
    position: { default: "bottom-right" },
    maxToasts: { type: [Number, Boolean], default: !1 },
    timeout: { type: [Number, Boolean], default: 1e4 },
    queue: { type: Boolean },
    noPauseOnHover: { type: Boolean },
    type: { default: "info" },
    link: { default: void 0 },
    action: { default: void 0 },
    persistent: { type: Boolean },
    icon: { type: Boolean, default: !0 }
  },
  emits: ["close", "click", "open"],
  setup(s, { expose: e, emit: t }) {
    const n = T(() => import("./MazBtn-DfhVY7vx.mjs")), o = T(() => import("./x-mark-BP8zWe_C.mjs")), i = T(
      () => import("./arrow-top-right-on-square-CkcBq4qD.mjs")
    ), r = T(
      () => import("./exclamation-triangle-BfZLmRbP.mjs")
    ), c = T(
      () => import("./exclamation-circle-DzBJ8vGa.mjs")
    ), m = T(
      () => import("./information-circle-C0pE_7kr.mjs")
    ), y = T(() => import("./check-circle-CtCMBYyp.mjs")), z = T(() => import("./link-D7FkvsK4.mjs")), b = v(), f = s, k = p(() => {
      if (f.icon)
        switch (f.type) {
          case "danger":
            return r;
          case "info":
            return m;
          case "success":
            return y;
          case "warning":
            return c;
          default:
            return;
        }
    }), U = t, $ = p(() => f.position.includes("top") ? "top" : "bottom"), H = p(() => f.position.includes("left") ? "left" : f.position.includes("right") ? "right" : "center"), Q = p(() => H.value !== "center" ? H.value === "right" ? "m-slide-right" : "m-slide-left" : $.value === "top" ? "m-slide-top" : "m-slide-bottom"), I = v(!1), W = v(!1), j = v(), D = `m-toast-container --${$.value} --${H.value}`, M = `.${D.replaceAll(" ", ".")}`, { start: me, stop: de, pause: G, resume: he, remainingTime: fe } = Kt({
      callback: P,
      timeout: typeof f.timeout == "number" ? f.timeout : 0
    });
    function R() {
      const a = document.querySelector(M);
      if (!a && !a) {
        const h = document.body, g = document.createElement("div");
        g.className = D, h.append(g);
      }
    }
    function J() {
      const a = document.querySelector(M);
      return !f.queue && f.maxToasts === !1 ? !1 : typeof f.maxToasts == "number" && a ? f.maxToasts <= a.childElementCount : a && a.childElementCount > 0;
    }
    function ee() {
      if (J()) {
        j.value = setTimeout(ee, 250);
        return;
      }
      const a = document.querySelector(M);
      b.value && a && a.prepend(b.value), W.value = !0, typeof f.timeout == "number" && f.timeout > 0 && me();
    }
    const Y = v("100%");
    function te() {
      switch (f.type) {
        case "danger":
          return "maz-bg-danger-700";
        case "info":
          return "maz-bg-info-700";
        case "success":
          return "maz-bg-success-700";
        case "warning":
          return "maz-bg-warning-700";
        default:
          return "maz-bg-secondary";
      }
    }
    ke(
      () => fe.value,
      (a) => {
        if (typeof a == "number" && typeof f.timeout == "number") {
          const h = 100 * a / f.timeout;
          Y.value = `${h}%`, a <= 0 && P();
        }
      }
    );
    function _(a) {
      U("click", a), f.persistent || P();
    }
    async function F(a, h) {
      var g;
      I.value = !0, await a(), I.value = !1, (g = f.action) != null && g.closeToast && _(h);
    }
    function se(a) {
      f.noPauseOnHover || (a ? G() : he());
    }
    function ve() {
      de(), j.value && clearTimeout(j.value);
    }
    function P() {
      ve(), W.value = !1;
    }
    e({ close: P });
    function u() {
      U("open");
    }
    function d() {
      var h;
      U("close"), (h = b.value) == null || h.remove();
      const a = document.querySelector(M);
      a && !(a != null && a.hasChildNodes()) && a.remove();
    }
    return ue(() => {
      R(), ee();
    }), (a, h) => (E(), N(ot, {
      name: Q.value,
      onAfterLeave: d,
      onAfterEnter: u,
      persisted: ""
    }, {
      default: ye(() => [
        $e(O(
          "button",
          {
            ref_key: "Toaster",
            ref: b,
            class: Ee(["m-toast", [
              `--${a.type}`,
              `--${$.value}`,
              `--${H.value}`,
              { "maz-pb-1": typeof a.timeout == "number" && a.timeout > 0, "--persistent": a.persistent }
            ]]),
            role: "alert",
            onMouseover: h[2] || (h[2] = (g) => se(!0)),
            onMouseleave: h[3] || (h[3] = (g) => se(!1)),
            onClick: h[4] || (h[4] = A((g) => {
              var w;
              return a.link && !((w = a.link) != null && w.closeToast) ? void 0 : _(g);
            }, ["stop"]))
          },
          [
            k.value ? (E(), N(it(k.value), {
              key: 0,
              class: "maz-text-2xl"
            })) : C("v-if", !0),
            O("div", Xt, [
              O(
                "p",
                Zt,
                be(a.message),
                1
                /* TEXT */
              )
            ]),
            a.action ? (E(), N(x(n), {
              key: 1,
              "data-test": "action-btn",
              color: a.type,
              pastel: "",
              loading: I.value,
              size: "sm",
              onClick: h[0] || (h[0] = A((g) => a.action ? F(a.action.func, g) : void 0, ["stop"]))
            }, {
              default: ye(() => [
                rt(
                  be(a.action.text),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["color", "loading"])) : C("v-if", !0),
            a.link ? (E(), N(x(n), {
              key: 2,
              "data-test": "link-btn",
              color: a.type,
              pastel: "",
              size: "xs",
              href: a.link.href,
              target: a.link.target ?? "_self"
            }, {
              default: ye(() => {
                var g;
                return [
                  O("div", Qt, [
                    a.link.text ? (E(), B(
                      "span",
                      Gt,
                      be(a.link.text),
                      1
                      /* TEXT */
                    )) : C("v-if", !0),
                    ((g = a.link) == null ? void 0 : g.target) == "_blank" ? (E(), N(x(i), {
                      key: 1,
                      class: "maz-text-xl"
                    })) : (E(), N(x(z), {
                      key: 2,
                      class: "maz-text-xl"
                    }))
                  ])
                ];
              }),
              _: 1
              /* STABLE */
            }, 8, ["color", "href", "target"])) : C("v-if", !0),
            a.persistent ? C("v-if", !0) : (E(), B("button", {
              key: 3,
              class: "--close",
              onClick: h[1] || (h[1] = A((g) => _(g), ["stop"]))
            }, [
              V(x(o), { class: "--icon maz-text-xl" })
            ])),
            typeof a.timeout == "number" && a.timeout > 0 ? (E(), B("div", Jt, [
              O(
                "div",
                {
                  style: at({
                    width: Y.value
                  }),
                  class: Ee(["maz-h-full !maz-transition-all !maz-duration-200 !maz-ease-linear", te()])
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ])) : C("v-if", !0)
          ],
          34
          /* CLASS, NEED_HYDRATION */
        ), [
          [_e, W.value]
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["name"]));
  }
}), ts = /* @__PURE__ */ Re(es, [["__scopeId", "data-v-b7764b1b"]]), ss = {
  position: "bottom-right",
  timeout: 1e4,
  persistent: !1,
  icon: !0
};
class ns {
  constructor(e, t) {
    this.app = e, this.globalOptions = t;
  }
  show(e, t) {
    const n = {
      ...ss,
      ...this.globalOptions,
      ...t,
      message: e
    }, { destroy: o, vNode: i } = Fe(ts, {
      props: n,
      app: this.app
    });
    return {
      destroy: o,
      close: () => {
        var r, c;
        return (c = (r = i.component) == null ? void 0 : r.exposed) == null ? void 0 : c.close();
      }
    };
  }
  getLocalOptions(e, t) {
    return {
      type: e,
      ...t
    };
  }
  message(e, t) {
    return this.show(e, this.getLocalOptions("theme", t));
  }
  success(e, t) {
    return this.show(e, this.getLocalOptions("success", t));
  }
  error(e, t) {
    return this.show(e, this.getLocalOptions("danger", t));
  }
  info(e, t) {
    return this.show(e, this.getLocalOptions("info", t));
  }
  warning(e, t) {
    return this.show(e, this.getLocalOptions("warning", t));
  }
}
let Oe;
const xs = {
  install(s, e) {
    Oe = new ns(s, e), s.provide("toast", Oe);
  }
}, q = "", os = (s) => s.filter((e, t, n) => t === n.indexOf(e)), is = (s) => (e = q) => typeof e == "function" ? s.findIndex((...t) => e(...t)) > -1 : s.includes(e), rs = (s) => s.length > 0, as = (s) => (e = q) => os([...s, e]), ls = (s) => (e = q) => s.filter((t) => t !== e);
class cs {
  constructor() {
    l(this, "_loaders", v([]));
  }
  get loaders() {
    return p(() => this._loaders.value);
  }
  stop(e = q) {
    this._loaders.value = ls(this._loaders.value)(e);
  }
  start(e = q) {
    return this._loaders.value = as(this._loaders.value)(e), () => this.stop(e);
  }
  get anyLoading() {
    return p(() => rs(this._loaders.value));
  }
  isLoading(e = q) {
    return p(() => is(this._loaders.value)(e)).value;
  }
}
const us = new cs(), As = {
  install: (s) => {
    s.provide("wait", us);
  }
}, we = {
  delay: 100,
  observer: {
    root: void 0,
    rootMargin: "0px",
    threshold: 0.2
  },
  animation: {
    once: !0,
    duration: 300,
    delay: 0
  }
};
class ms {
  constructor(e) {
    l(this, "options");
    this.options = {
      delay: (e == null ? void 0 : e.delay) ?? we.delay,
      observer: {
        ...we.observer,
        ...e == null ? void 0 : e.observer
      },
      animation: {
        ...we.animation,
        ...e == null ? void 0 : e.animation
      }
    };
  }
  handleIntersect(e, t) {
    for (const n of e) {
      const i = n.target.getAttribute("data-maz-aos-children") === "true", r = n.target.getAttribute("data-maz-aos") ? [n.target] : [];
      if (i) {
        const c = [...document.querySelectorAll("[data-maz-aos-anchor]")].map(
          (m) => m.getAttribute("data-maz-aos-anchor") === `#${n.target.id}` ? m : void 0
        );
        for (const m of c)
          m && r.push(m);
      }
      for (const c of r) {
        const m = c.getAttribute("data-maz-aos-once"), y = typeof m == "string" ? m === "true" : this.options.animation.once;
        if (typeof this.options.observer.threshold == "number" && n.intersectionRatio > this.options.observer.threshold) {
          const z = c.getAttribute("data-maz-aos-duration"), b = c.getAttribute("data-maz-aos-delay");
          if (z || (c.style.transitionDuration = `${this.options.animation.duration}ms`, setTimeout(() => {
            c.style.transitionDuration = "0";
          }, 1e3)), b || (c.style.transitionDelay = `${this.options.animation.delay}ms`, setTimeout(() => {
            c.style.transitionDelay = "0";
          }, 1e3)), c.classList.add("maz-aos-animate"), y) {
            const f = c.getAttribute("data-maz-aos-anchor");
            if (f) {
              const k = document.querySelector(f);
              k && t.unobserve(k);
            }
            t.unobserve(c);
          }
        } else
          c.classList.remove("maz-aos-animate");
      }
    }
  }
  async handleObserver() {
    await ht(this.options.delay);
    const e = new IntersectionObserver(this.handleIntersect.bind(this), {
      ...this.options.observer
    });
    for (const t of document.querySelectorAll("[data-maz-aos]")) {
      const n = t.getAttribute("data-maz-aos-anchor");
      if (n) {
        const o = document.querySelector(n);
        o ? (o.setAttribute("data-maz-aos-children", "true"), e.observe(o)) : console.warn(`[maz-ui](aos) no element found with selector "${n}"`);
      } else
        e.observe(t);
    }
  }
  runAnimations() {
    if (L())
      return this.handleObserver();
    console.warn("[MazAos](runAnimations) should be executed on client side");
  }
}
let le;
const Os = {
  install: (s, e) => {
    le = new ms(e), s.provide("aos", le), L() && (e != null && e.router ? e.router.afterEach(async () => {
      le.runAnimations();
    }) : le.runAnimations());
  }
}, ds = {
  darkClass: "dark",
  lightClass: "light",
  storageThemeKey: "theme",
  storageThemeValueDark: "dark",
  storageThemeValueLight: "light",
  storageThemeValueSystem: "system",
  watchChanges: !0
}, K = v("system"), S = v("system");
function He() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function X({
  darkClass: s,
  lightClass: e,
  storageThemeKey: t,
  storageThemeValueDark: n,
  setLocalStorageValue: o = !0,
  setSelectedTheme: i = !0
}) {
  L() && (document.documentElement.classList.remove(e), document.documentElement.classList.add(s), K.value = n, i && (S.value = n), o && (localStorage[t] = n));
}
function Z({
  darkClass: s,
  lightClass: e,
  storageThemeKey: t,
  storageThemeValueLight: n,
  setLocalStorageValue: o = !0,
  setSelectedTheme: i = !0
}) {
  L() && (document.documentElement.classList.remove(s), document.documentElement.classList.add(e), K.value = n, i && (S.value = n), o && (localStorage[t] = n));
}
function Ye({
  setLocalStorageValue: s = !0,
  ...e
}) {
  if (L())
    return document.documentElement.classList.remove(e.darkClass), document.documentElement.classList.remove(e.lightClass), K.value = e.storageThemeValueSystem, S.value = e.storageThemeValueSystem, s && (localStorage[e.storageThemeKey] = e.storageThemeValueSystem), Ie(e);
}
function Ke(s) {
  if (!s.defaultTheme)
    return console.error("[maz-ui](useThemeHandler) No default theme set");
  if (!["light", "dark"].includes(s.defaultTheme))
    return console.error('[maz-ui](useThemeHandler) Default theme must be "light" or "dark"');
  switch (s.defaultTheme) {
    case "dark":
      return X({
        ...s,
        setLocalStorageValue: !1,
        setSelectedTheme: !0
      });
    case "light":
      return Z({
        ...s,
        setLocalStorageValue: !1,
        setSelectedTheme: !0
      });
  }
}
function Ie(s) {
  return L() ? !localStorage[s.storageThemeKey] && s.defaultTheme ? Ke(s) : localStorage[s.storageThemeKey] === s.storageThemeValueDark || !localStorage[s.storageThemeKey] && He() || localStorage[s.storageThemeKey] === s.storageThemeValueSystem && He() ? X({
    ...s,
    setLocalStorageValue: !1,
    setSelectedTheme: !1
  }) : Z({
    ...s,
    setLocalStorageValue: !1,
    setSelectedTheme: !1
  }) : void 0;
}
function ze({
  theme: s,
  ...e
}) {
  return s === "system" ? Ye(e) : s === "dark" ? X(e) : Z(e);
}
function hs(s) {
  return K.value === s.storageThemeValueDark ? Z(s) : X(s);
}
function Hs(s) {
  const e = {
    ...ds,
    ...s
  };
  function t() {
    Ie(e);
  }
  return ue(() => {
    localStorage[e.storageThemeKey] && (S.value = localStorage[e.storageThemeKey]), e.watchChanges && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", t);
  }), Pe(() => {
    e.watchChanges && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", t);
  }), ke(S, (n) => {
    switch (localStorage[e.storageThemeKey] = n, n) {
      case e.storageThemeValueDark: {
        X(e);
        break;
      }
      case e.storageThemeValueLight: {
        Z(e);
        break;
      }
      case e.storageThemeValueSystem: {
        Ye(e);
        break;
      }
    }
  }), {
    autoSetTheme: () => Ie(e),
    toggleTheme: () => hs(e),
    setSystemTheme: () => ze({ ...e, theme: "system" }),
    setDarkTheme: () => ze({ ...e, theme: "dark" }),
    setLightTheme: () => ze({ ...e, theme: "light" }),
    setDefaultTheme: () => Ke(e),
    hasDarkTheme: p(() => S.value === e.storageThemeValueDark),
    hasLightTheme: p(() => S.value === e.storageThemeValueLight),
    hasSystemTheme: p(() => S.value === e.storageThemeValueSystem),
    theme: K,
    selectedTheme: S
  };
}
function Ds({
  componentName: s,
  providedId: e
}) {
  const t = lt();
  return p(() => e ?? `${s}-${t == null ? void 0 : t.uid}`);
}
function Ms() {
  return Ce("aos");
}
function Ps() {
  return Ce("wait");
}
function $s() {
  return Ce("toast");
}
function _s({
  callback: s,
  options: e
}) {
  return new mt(s, e);
}
function Fs({
  callback: s,
  options: e
}) {
  return new dt(s, e);
}
function fs(s = {}) {
  const {
    internalWindow: e = L() ? window : void 0,
    initialWidth: t = Number.POSITIVE_INFINITY,
    initialHeight: n = Number.POSITIVE_INFINITY,
    includeScrollbar: o = !0
  } = s, i = v(t), r = v(n);
  function c() {
    e && (o ? (i.value = e.innerWidth, r.value = e.innerHeight) : (i.value = e.document.documentElement.clientWidth, r.value = e.document.documentElement.clientHeight));
  }
  return c(), ue(() => {
    e && window.addEventListener("resize", c, { passive: !0 });
  }), ct(() => {
    e && window.removeEventListener("resize", c);
  }), { width: i, height: r };
}
function vs(s) {
  const e = {};
  for (const [t, n] of Object.entries(s))
    e[t] = Number.parseInt(n, 10);
  return e;
}
function Ns({
  initialWidth: s = 0,
  initialHeight: e,
  includeScrollbar: t,
  internalWindow: n,
  listenOrientation: o,
  breakpoints: i,
  mediumBreakPoint: r = "md",
  largeBreakPoint: c = "lg"
}) {
  const { width: m } = fs({
    initialWidth: s,
    // (SSR) mobile first
    initialHeight: e,
    includeScrollbar: t,
    internalWindow: n,
    listenOrientation: o
  }), y = vs(i), z = p(() => m.value >= y[c]), b = p(
    () => m.value >= y[r] && m.value < y[c]
  ), f = p(() => m.value >= 0 && m.value < y[r]);
  return {
    width: m,
    numericBreakpoints: y,
    isSmallScreen: f,
    isLargeScreen: z,
    isMediumScreen: b,
    breakpoints: i
  };
}
function Vs(s) {
  const e = new ft({
    ...s,
    element: s.element,
    onValuesChanged(m) {
      t.value = m.xDiff, n.value = m.yDiff, o.value = m.xStart, i.value = m.xEnd, r.value = m.yStart, c.value = m.yEnd;
    }
  }), t = v(), n = v(), o = v(), i = v(), r = v(), c = v();
  return {
    xDiff: t,
    yDiff: n,
    xStart: o,
    xEnd: i,
    yStart: r,
    yEnd: c,
    start: e.start,
    stop: e.stop
  };
}
function Xe(s) {
  const e = s.join(", ").match(/\b\w+\b/g);
  return e ? e.length : 0;
}
function ps(s, e = 150) {
  const t = Xe([s]);
  return Math.ceil(t / e);
}
function Bs(s) {
  const e = p(
    () => {
      var r;
      return typeof s.velocity == "number" ? s.velocity : ((r = s.velocity) == null ? void 0 : r.value) ?? 150;
    }
  ), t = p(() => {
    var r;
    return typeof s.contentSelector == "string" ? s.contentSelector : (r = s.contentSelector) == null ? void 0 : r.value;
  }), n = p(() => {
    var r, c, m;
    if (typeof ((r = s.contentRef) == null ? void 0 : r.value) == "object")
      return (c = s.contentRef.value) == null ? void 0 : c.textContent;
    if (t.value && typeof document < "u") {
      const y = document.querySelector(t.value);
      if (y)
        return y.textContent;
    }
    return typeof s.content == "string" ? s.content : (m = s.content) == null ? void 0 : m.value;
  }), o = p(() => ps(n.value, e.value)), i = p(() => Xe([n.value]));
  return {
    content: n,
    wordCount: i,
    velocity: e,
    duration: o
  };
}
function gs(s, e) {
  const t = s.length, n = e.length, o = [];
  for (let i = 0; i <= t; i++)
    o[i] = [i];
  for (let i = 0; i <= n; i++)
    o[0][i] = i;
  for (let i = 1; i <= t; i++)
    for (let r = 1; r <= n; r++) {
      const c = s[i - 1] === e[r - 1] ? 0 : 1;
      o[i][r] = Math.min(
        o[i - 1][r] + 1,
        o[i][r - 1] + 1,
        o[i - 1][r - 1] + c
      );
    }
  return o[t][n];
}
function De(s) {
  return s.normalize("NFD").replaceAll(/[\u0300-\u036F]/g, "").toLowerCase();
}
function Ze(s, e) {
  const t = gs(s, e), n = Math.max(s.length, e.length);
  return 1 - t / n;
}
function ys(s, e, t = 0.75) {
  return Ze(s, e) >= t;
}
function qs(s, e, t = 0.75) {
  const n = p(
    () => De(typeof s == "string" ? s : s.value)
  ), o = p(
    () => De(typeof e == "string" ? e : e.value)
  ), i = p(() => typeof t == "number" ? t : t.value), r = p(() => Ze(n.value, o.value));
  return {
    isMatching: p(
      () => ys(n.value, o.value, i.value)
    ),
    score: r
  };
}
export {
  Rt as A,
  xs as B,
  Oe as C,
  As as D,
  us as E,
  ms as F,
  Os as G,
  le as H,
  mt as I,
  Hs as J,
  Ds as K,
  Ms as L,
  Ps as M,
  $s as N,
  _s as O,
  Fs as P,
  Kt as Q,
  Ns as R,
  Es as S,
  ns as T,
  dt as U,
  fs as V,
  cs as W,
  Vs as X,
  Bs as Y,
  qs as Z,
  Re as _,
  L as a,
  ft as b,
  Ls as c,
  zs as d,
  Ts as e,
  pt as f,
  gt as g,
  St as h,
  Ce as i,
  ks as j,
  kt as k,
  $t as l,
  Fe as m,
  Pt as n,
  wt as o,
  Cs as p,
  zt as q,
  Et as r,
  ht as s,
  ut as t,
  Is as u,
  It as v,
  Ss as w,
  Ft as x,
  qt as y,
  Wt as z
};

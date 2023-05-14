(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [968], {
        1082: function() {},
        2544: function(e, t, i) {
            "use strict";
            let s, r, a, l;

            function n(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function o(e = {}, t = {}) {
                Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : n(t[i]) && n(e[i]) && Object.keys(t[i]).length > 0 && o(e[i], t[i])
                })
            }
            i.d(t, {
                W_: function() {
                    return j
                },
                ZP: function() {
                    return H
                }
            });
            let d = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function c() {
                let e = "undefined" != typeof document ? document : {};
                return o(e, d), e
            }
            let p = {
                document: d,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function u() {
                let e = "undefined" != typeof window ? window : {};
                return o(e, p), e
            }

            function h(e, t = 0) {
                return setTimeout(e, t)
            }

            function f() {
                return Date.now()
            }

            function m(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function v(...e) {
                let t = Object(e[0]),
                    i = ["__proto__", "constructor", "prototype"];
                for (let s = 1; s < e.length; s += 1) {
                    let r = e[s];
                    if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                        let e = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                        for (let i = 0, s = e.length; i < s; i += 1) {
                            let s = e[i],
                                a = Object.getOwnPropertyDescriptor(r, s);
                            void 0 !== a && a.enumerable && (m(t[s]) && m(r[s]) ? r[s].__swiper__ ? t[s] = r[s] : v(t[s], r[s]) : !m(t[s]) && m(r[s]) ? (t[s] = {}, r[s].__swiper__ ? t[s] = r[s] : v(t[s], r[s])) : t[s] = r[s])
                        }
                    }
                }
                return t
            }

            function g(e, t, i) {
                e.style.setProperty(t, i)
            }

            function w({
                swiper: e,
                targetPosition: t,
                side: i
            }) {
                let s;
                let r = u(),
                    a = -e.translate,
                    l = null,
                    n = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
                let o = t > a ? "next" : "prev",
                    d = (e, t) => "next" === o && e >= t || "prev" === o && e <= t,
                    c = () => {
                        s = new Date().getTime(), null === l && (l = s);
                        let o = Math.max(Math.min((s - l) / n, 1), 0),
                            p = a + (.5 - Math.cos(o * Math.PI) / 2) * (t - a);
                        if (d(p, t) && (p = t), e.wrapperEl.scrollTo({
                                [i]: p
                            }), d(p, t)) {
                            e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                    [i]: p
                                })
                            }), r.cancelAnimationFrame(e.cssModeFrameID);
                            return
                        }
                        e.cssModeFrameID = r.requestAnimationFrame(c)
                    };
                c()
            }

            function T(e, t = "") {
                return [...e.children].filter(e => e.matches(t))
            }

            function S(e, t = []) {
                let i = document.createElement(e);
                return i.classList.add(...Array.isArray(t) ? t : [t]), i
            }

            function b(e, t) {
                let i = u();
                return i.getComputedStyle(e, null).getPropertyValue(t)
            }

            function x(e) {
                let t, i = e;
                if (i) {
                    for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                    return t
                }
            }

            function E(e, t, i) {
                let s = u();
                return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function y() {
                return s || (s = function() {
                    let e = u(),
                        t = c();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), s
            }

            function C({
                swiper: e,
                runCallbacks: t,
                direction: i,
                step: s
            }) {
                let {
                    activeIndex: r,
                    previousIndex: a
                } = e, l = i;
                if (l || (l = r > a ? "next" : r < a ? "prev" : "reset"), e.emit(`transition${s}`), t && r !== a) {
                    if ("reset" === l) {
                        e.emit(`slideResetTransition${s}`);
                        return
                    }
                    e.emit(`slideChangeTransition${s}`), "next" === l ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
                }
            }

            function M(e) {
                let t = this,
                    i = c(),
                    s = u(),
                    r = t.touchEventsData;
                r.evCache.push(e);
                let {
                    params: a,
                    touches: l,
                    enabled: n
                } = t;
                if (!n || !a.simulateTouch && "mouse" === e.pointerType || t.animating && a.preventInteractionOnTransition) return;
                !t.animating && a.cssMode && a.loop && t.loopFix();
                let o = e;
                o.originalEvent && (o = o.originalEvent);
                let d = o.target;
                if ("wrapper" === a.touchEventsTarget && !t.wrapperEl.contains(d) || "which" in o && 3 === o.which || "button" in o && o.button > 0 || r.isTouched && r.isMoved) return;
                let p = !!a.noSwipingClass && "" !== a.noSwipingClass,
                    h = e.composedPath ? e.composedPath() : e.path;
                p && o.target && o.target.shadowRoot && h && (d = h[0]);
                let m = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                    v = !!(o.target && o.target.shadowRoot);
                if (a.noSwiping && (v ? function(e, t = this) {
                        return function t(i) {
                            if (!i || i === c() || i === u()) return null;
                            i.assignedSlot && (i = i.assignedSlot);
                            let s = i.closest(e);
                            return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                        }(t)
                    }(m, d) : d.closest(m))) {
                    t.allowClick = !0;
                    return
                }
                if (a.swipeHandler && !d.closest(a.swipeHandler)) return;
                l.currentX = o.pageX, l.currentY = o.pageY;
                let g = l.currentX,
                    w = l.currentY,
                    T = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                    S = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (T && (g <= S || g >= s.innerWidth - S)) {
                    if ("prevent" !== T) return;
                    e.preventDefault()
                }
                Object.assign(r, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), l.startX = g, l.startY = w, r.touchStartTime = f(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (r.allowThresholdMove = !1);
                let b = !0;
                d.matches(r.focusableElements) && (b = !1, "SELECT" === d.nodeName && (r.isTouched = !1)), i.activeElement && i.activeElement.matches(r.focusableElements) && i.activeElement !== d && i.activeElement.blur();
                let x = b && t.allowTouchMove && a.touchStartPreventDefault;
                (a.touchStartForcePreventDefault || x) && !d.isContentEditable && o.preventDefault(), t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", o)
            }

            function P(e) {
                let t;
                let i = c(),
                    s = this,
                    r = s.touchEventsData,
                    {
                        params: a,
                        touches: l,
                        rtlTranslate: n,
                        enabled: o
                    } = s;
                if (!o || !a.simulateTouch && "mouse" === e.pointerType) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), !r.isTouched) {
                    r.startMoving && r.isScrolling && s.emit("touchMoveOpposite", d);
                    return
                }
                let p = r.evCache.findIndex(e => e.pointerId === d.pointerId);
                p >= 0 && (r.evCache[p] = d);
                let u = r.evCache.length > 1 ? r.evCache[0] : d,
                    h = u.pageX,
                    m = u.pageY;
                if (d.preventedByNestedSwiper) {
                    l.startX = h, l.startY = m;
                    return
                }
                if (!s.allowTouchMove) {
                    d.target.matches(r.focusableElements) || (s.allowClick = !1), r.isTouched && (Object.assign(l, {
                        startX: h,
                        startY: m,
                        prevX: s.touches.currentX,
                        prevY: s.touches.currentY,
                        currentX: h,
                        currentY: m
                    }), r.touchStartTime = f());
                    return
                }
                if (a.touchReleaseOnEdges && !a.loop) {
                    if (s.isVertical()) {
                        if (m < l.startY && s.translate <= s.maxTranslate() || m > l.startY && s.translate >= s.minTranslate()) {
                            r.isTouched = !1, r.isMoved = !1;
                            return
                        }
                    } else if (h < l.startX && s.translate <= s.maxTranslate() || h > l.startX && s.translate >= s.minTranslate()) return
                }
                if (i.activeElement && d.target === i.activeElement && d.target.matches(r.focusableElements)) {
                    r.isMoved = !0, s.allowClick = !1;
                    return
                }
                if (r.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                l.currentX = h, l.currentY = m;
                let v = l.currentX - l.startX,
                    g = l.currentY - l.startY;
                if (s.params.threshold && Math.sqrt(v ** 2 + g ** 2) < s.params.threshold) return;
                if (void 0 === r.isScrolling) {
                    let e;
                    s.isHorizontal() && l.currentY === l.startY || s.isVertical() && l.currentX === l.startX ? r.isScrolling = !1 : v * v + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(v)) / Math.PI, r.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
                }
                if (r.isScrolling && s.emit("touchMoveOpposite", d), void 0 === r.startMoving && (l.currentX !== l.startX || l.currentY !== l.startY) && (r.startMoving = !0), r.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && r.evCache.length > 1) {
                    r.isTouched = !1;
                    return
                }
                if (!r.startMoving) return;
                s.allowClick = !1, !a.cssMode && d.cancelable && d.preventDefault(), a.touchMoveStopPropagation && !a.nested && d.stopPropagation();
                let w = s.isHorizontal() ? v : g,
                    T = s.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
                a.oneWayMovement && (w = Math.abs(w) * (n ? 1 : -1), T = Math.abs(T) * (n ? 1 : -1)), l.diff = w, w *= a.touchRatio, n && (w = -w, T = -T);
                let S = s.touchesDirection;
                s.swipeDirection = w > 0 ? "prev" : "next", s.touchesDirection = T > 0 ? "prev" : "next";
                let b = s.params.loop && !(s.virtual && s.params.virtual.enabled) && !a.cssMode;
                if (!r.isMoved) {
                    if (b && s.loopFix({
                            direction: s.swipeDirection
                        }), r.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        s.wrapperEl.dispatchEvent(e)
                    }
                    r.allowMomentumBounce = !1, a.grabCursor && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!0), s.emit("sliderFirstMove", d)
                }
                r.isMoved && S !== s.touchesDirection && b && Math.abs(w) >= 1 && (s.loopFix({
                    direction: s.swipeDirection,
                    setTranslate: !0
                }), t = !0), s.emit("sliderMove", d), r.isMoved = !0, r.currentTranslate = w + r.startTranslate;
                let x = !0,
                    E = a.resistanceRatio;
                if (a.touchReleaseOnEdges && (E = 0), w > 0 ? (b && !t && r.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), r.currentTranslate > s.minTranslate() && (x = !1, a.resistance && (r.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + r.startTranslate + w) ** E))) : w < 0 && (b && !t && r.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: s.slides.length - ("auto" === a.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
                    }), r.currentTranslate < s.maxTranslate() && (x = !1, a.resistance && (r.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - r.startTranslate - w) ** E))), x && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), s.allowSlidePrev || s.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
                    if (Math.abs(w) > a.threshold || r.allowThresholdMove) {
                        if (!r.allowThresholdMove) {
                            r.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, r.currentTranslate = r.startTranslate, l.diff = s.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY;
                            return
                        }
                    } else {
                        r.currentTranslate = r.startTranslate;
                        return
                    }
                }
                a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(r.currentTranslate), s.setTranslate(r.currentTranslate))
            }

            function k(e) {
                let t;
                let i = this,
                    s = i.touchEventsData,
                    r = s.evCache.findIndex(t => t.pointerId === e.pointerId);
                if (r >= 0 && s.evCache.splice(r, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type)) return;
                let {
                    params: a,
                    touches: l,
                    rtlTranslate: n,
                    slidesGrid: o,
                    enabled: d
                } = i;
                if (!d || !a.simulateTouch && "mouse" === e.pointerType) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), s.allowTouchCallbacks && i.emit("touchEnd", c), s.allowTouchCallbacks = !1, !s.isTouched) {
                    s.isMoved && a.grabCursor && i.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
                    return
                }
                a.grabCursor && s.isMoved && s.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
                let p = f(),
                    u = p - s.touchStartTime;
                if (i.allowClick) {
                    let e = c.path || c.composedPath && c.composedPath();
                    i.updateClickedSlide(e && e[0] || c.target), i.emit("tap click", c), u < 300 && p - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", c)
                }
                if (s.lastClickTime = f(), h(() => {
                        i.destroyed || (i.allowClick = !0)
                    }), !s.isTouched || !s.isMoved || !i.swipeDirection || 0 === l.diff || s.currentTranslate === s.startTranslate) {
                    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
                    return
                }
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, t = a.followFinger ? n ? i.translate : -i.translate : -s.currentTranslate, a.cssMode) return;
                if (i.params.freeMode && a.freeMode.enabled) {
                    i.freeMode.onTouchEnd({
                        currentPos: t
                    });
                    return
                }
                let m = 0,
                    v = i.slidesSizesGrid[0];
                for (let e = 0; e < o.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                    let i = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                    void 0 !== o[e + i] ? t >= o[e] && t < o[e + i] && (m = e, v = o[e + i] - o[e]) : t >= o[e] && (m = e, v = o[o.length - 1] - o[o.length - 2])
                }
                let g = null,
                    w = null;
                a.rewind && (i.isBeginning ? w = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (g = 0));
                let T = (t - o[m]) / v,
                    S = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                if (u > a.longSwipesMs) {
                    if (!a.longSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    "next" === i.swipeDirection && (T >= a.longSwipesRatio ? i.slideTo(a.rewind && i.isEnd ? g : m + S) : i.slideTo(m)), "prev" === i.swipeDirection && (T > 1 - a.longSwipesRatio ? i.slideTo(m + S) : null !== w && T < 0 && Math.abs(T) > a.longSwipesRatio ? i.slideTo(w) : i.slideTo(m))
                } else {
                    if (!a.shortSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    let e = i.navigation && (c.target === i.navigation.nextEl || c.target === i.navigation.prevEl);
                    e ? c.target === i.navigation.nextEl ? i.slideTo(m + S) : i.slideTo(m) : ("next" === i.swipeDirection && i.slideTo(null !== g ? g : m + S), "prev" === i.swipeDirection && i.slideTo(null !== w ? w : m))
                }
            }

            function L() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: a
                } = e, n = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let o = n && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(l), l = setTimeout(() => {
                    e.autoplay.resume()
                }, 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function O(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function z() {
                let e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: i,
                        enabled: s
                    } = e;
                if (!s) return;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                let r = e.maxTranslate() - e.minTranslate();
                (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let A = (e, t) => {
                let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                if (i) {
                    let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                    t && t.remove()
                }
            };

            function I(e) {
                A(this, e.target), this.update()
            }
            let G = !1;

            function _() {}
            let D = (e, t) => {
                    let i = c(),
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            device: l
                        } = e,
                        n = !!s.nested,
                        o = "on" === t ? "addEventListener" : "removeEventListener";
                    r[o]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), i[o]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: n
                    }), i[o]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), (s.preventClicks || s.preventClicksPropagation) && r[o]("click", e.onClick, !0), s.cssMode && a[o]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", L, !0) : e[t]("observerUpdate", L, !0), r[o]("load", e.onLoad, {
                        capture: !0
                    })
                },
                B = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var V = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopedSlides: null,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let N = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function r(...i) {
                                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(s, i)
                            }
                            return r.__emitterProxy = t, s.on(e, r, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit(...e) {
                            let t, i, s;
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
                            "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], i = e.slice(1, e.length), s = r) : (t = e[0].events, i = e[0].data, s = e[0].context || r), i.unshift(s);
                            let a = Array.isArray(t) ? t : t.split(" ");
                            return a.forEach(e => {
                                r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(t => {
                                    t.apply(s, [e, ...i])
                                }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e => {
                                    e.apply(s, i)
                                })
                            }), r
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(b(i, "padding-left") || 0, 10) - parseInt(b(i, "padding-right") || 0, 10), t = t - parseInt(b(i, "padding-top") || 0, 10) - parseInt(b(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function i(e) {
                                return t.isHorizontal() ? e : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[e]
                            }

                            function s(e, t) {
                                return parseFloat(e.getPropertyValue(i(t)) || 0)
                            }
                            let r = t.params,
                                {
                                    wrapperEl: a,
                                    slidesEl: l,
                                    size: n,
                                    rtlTranslate: o,
                                    wrongRTL: d
                                } = t,
                                c = t.virtual && r.virtual.enabled,
                                p = c ? t.virtual.slides.length : t.slides.length,
                                u = T(l, `.${t.params.slideClass}, swiper-slide`),
                                h = c ? t.virtual.slides.length : u.length,
                                f = [],
                                m = [],
                                v = [],
                                w = r.slidesOffsetBefore;
                            "function" == typeof w && (w = r.slidesOffsetBefore.call(t));
                            let S = r.slidesOffsetAfter;
                            "function" == typeof S && (S = r.slidesOffsetAfter.call(t));
                            let x = t.snapGrid.length,
                                y = t.slidesGrid.length,
                                C = r.spaceBetween,
                                M = -w,
                                P = 0,
                                k = 0;
                            if (void 0 === n) return;
                            "string" == typeof C && C.indexOf("%") >= 0 && (C = parseFloat(C.replace("%", "")) / 100 * n), t.virtualSize = -C, u.forEach(e => {
                                o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), r.centeredSlides && r.cssMode && (g(a, "--swiper-centered-offset-before", ""), g(a, "--swiper-centered-offset-after", ""));
                            let L = r.grid && r.grid.rows > 1 && t.grid;
                            L && t.grid.initSlides(h);
                            let O = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                            for (let a = 0; a < h; a += 1) {
                                let l;
                                if (e = 0, u[a] && (l = u[a]), L && t.grid.updateSlide(a, l, h, i), !u[a] || "none" !== b(l, "display")) {
                                    if ("auto" === r.slidesPerView) {
                                        O && (u[a].style[i("width")] = "");
                                        let n = getComputedStyle(l),
                                            o = l.style.transform,
                                            d = l.style.webkitTransform;
                                        if (o && (l.style.transform = "none"), d && (l.style.webkitTransform = "none"), r.roundLengths) e = t.isHorizontal() ? E(l, "width", !0) : E(l, "height", !0);
                                        else {
                                            let t = s(n, "width"),
                                                i = s(n, "padding-left"),
                                                r = s(n, "padding-right"),
                                                a = s(n, "margin-left"),
                                                o = s(n, "margin-right"),
                                                d = n.getPropertyValue("box-sizing");
                                            if (d && "border-box" === d) e = t + a + o;
                                            else {
                                                let {
                                                    clientWidth: s,
                                                    offsetWidth: n
                                                } = l;
                                                e = t + i + r + a + o + (n - s)
                                            }
                                        }
                                        o && (l.style.transform = o), d && (l.style.webkitTransform = d), r.roundLengths && (e = Math.floor(e))
                                    } else e = (n - (r.slidesPerView - 1) * C) / r.slidesPerView, r.roundLengths && (e = Math.floor(e)), u[a] && (u[a].style[i("width")] = `${e}px`);
                                    u[a] && (u[a].swiperSlideSize = e), v.push(e), r.centeredSlides ? (M = M + e / 2 + P / 2 + C, 0 === P && 0 !== a && (M = M - n / 2 - C), 0 === a && (M = M - n / 2 - C), .001 > Math.abs(M) && (M = 0), r.roundLengths && (M = Math.floor(M)), k % r.slidesPerGroup == 0 && f.push(M), m.push(M)) : (r.roundLengths && (M = Math.floor(M)), (k - Math.min(t.params.slidesPerGroupSkip, k)) % t.params.slidesPerGroup == 0 && f.push(M), m.push(M), M = M + e + C), t.virtualSize += e + C, P = e, k += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, n) + S, o && d && ("slide" === r.effect || "coverflow" === r.effect) && (a.style.width = `${t.virtualSize+r.spaceBetween}px`), r.setWrapperSize && (a.style[i("width")] = `${t.virtualSize+r.spaceBetween}px`), L && t.grid.updateWrapperSize(e, f, i), !r.centeredSlides) {
                                let e = [];
                                for (let i = 0; i < f.length; i += 1) {
                                    let s = f[i];
                                    r.roundLengths && (s = Math.floor(s)), f[i] <= t.virtualSize - n && e.push(s)
                                }
                                f = e, Math.floor(t.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - n)
                            }
                            if (c && r.loop) {
                                let e = v[0] + C;
                                if (r.slidesPerGroup > 1) {
                                    let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / r.slidesPerGroup),
                                        s = e * r.slidesPerGroup;
                                    for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + s)
                                }
                                for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1) 1 === r.slidesPerGroup && f.push(f[f.length - 1] + e), m.push(m[m.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === f.length && (f = [0]), 0 !== r.spaceBetween) {
                                let e = t.isHorizontal() && o ? "marginLeft" : i("marginRight");
                                u.filter((e, t) => !r.cssMode || !!r.loop || t !== u.length - 1).forEach(t => {
                                    t.style[e] = `${C}px`
                                })
                            }
                            if (r.centeredSlides && r.centeredSlidesBounds) {
                                let e = 0;
                                v.forEach(t => {
                                    e += t + (r.spaceBetween ? r.spaceBetween : 0)
                                }), e -= r.spaceBetween;
                                let t = e - n;
                                f = f.map(e => e < 0 ? -w : e > t ? t + S : e)
                            }
                            if (r.centerInsufficientSlides) {
                                let e = 0;
                                if (v.forEach(t => {
                                        e += t + (r.spaceBetween ? r.spaceBetween : 0)
                                    }), (e -= r.spaceBetween) < n) {
                                    let t = (n - e) / 2;
                                    f.forEach((e, i) => {
                                        f[i] = e - t
                                    }), m.forEach((e, i) => {
                                        m[i] = e + t
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: u,
                                    snapGrid: f,
                                    slidesGrid: m,
                                    slidesSizesGrid: v
                                }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                                g(a, "--swiper-centered-offset-before", `${-f[0]}px`), g(a, "--swiper-centered-offset-after", `${t.size/2-v[v.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    i = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                            }
                            if (h !== p && t.emit("slidesLengthChange"), f.length !== x && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), m.length !== y && t.emit("slidesGridLengthChange"), r.watchSlidesProgress && t.updateSlidesOffset(), !c && !r.cssMode && ("slide" === r.effect || "fade" === r.effect)) {
                                let e = `${r.containerModifierClass}backface-hidden`,
                                    i = t.el.classList.contains(e);
                                h <= r.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                a = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let l = e => r ? i.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : i.slides[e];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || []).forEach(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let e = i.activeIndex + t;
                                        if (e > i.slides.length && !r) break;
                                        s.push(l(e))
                                    }
                            } else s.push(l(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let e = s[t].offsetHeight;
                                    a = e > a ? e : a
                                }(a || 0 === a) && (i.wrapperEl.style.height = `${a}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t
                        },
                        updateSlidesProgress: function(e = this && this.translate || 0) {
                            let t = this,
                                i = t.params,
                                {
                                    slides: s,
                                    rtlTranslate: r,
                                    snapGrid: a
                                } = t;
                            if (0 === s.length) return;
                            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                            let l = -e;
                            r && (l = e), s.forEach(e => {
                                e.classList.remove(i.slideVisibleClass)
                            }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            for (let e = 0; e < s.length; e += 1) {
                                let n = s[e],
                                    o = n.swiperSlideOffset;
                                i.cssMode && i.centeredSlides && (o -= s[0].swiperSlideOffset);
                                let d = (l + (i.centeredSlides ? t.minTranslate() : 0) - o) / (n.swiperSlideSize + i.spaceBetween),
                                    c = (l - a[0] + (i.centeredSlides ? t.minTranslate() : 0) - o) / (n.swiperSlideSize + i.spaceBetween),
                                    p = -(l - o),
                                    u = p + t.slidesSizesGrid[e],
                                    h = p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size;
                                h && (t.visibleSlides.push(n), t.visibleSlidesIndexes.push(e), s[e].classList.add(i.slideVisibleClass)), n.progress = r ? -d : d, n.originalProgress = r ? -c : c
                            }
                        },
                        updateProgress: function(e) {
                            let t = this;
                            if (void 0 === e) {
                                let i = t.rtlTranslate ? -1 : 1;
                                e = t && t.translate && t.translate * i || 0
                            }
                            let i = t.params,
                                s = t.maxTranslate() - t.minTranslate(),
                                {
                                    progress: r,
                                    isBeginning: a,
                                    isEnd: l,
                                    progressLoop: n
                                } = t,
                                o = a,
                                d = l;
                            if (0 === s) r = 0, a = !0, l = !0;
                            else {
                                r = (e - t.minTranslate()) / s;
                                let i = 1 > Math.abs(e - t.minTranslate()),
                                    n = 1 > Math.abs(e - t.maxTranslate());
                                a = i || r <= 0, l = n || r >= 1, i && (r = 0), n && (r = 1)
                            }
                            if (i.loop) {
                                let i = x(t.slides.filter(e => "0" === e.getAttribute("data-swiper-slide-index"))[0]),
                                    s = x(t.slides.filter(e => 1 * e.getAttribute("data-swiper-slide-index") == t.slides.length - 1)[0]),
                                    r = t.slidesGrid[i],
                                    a = t.slidesGrid[s],
                                    l = t.slidesGrid[t.slidesGrid.length - 1],
                                    o = Math.abs(e);
                                (n = o >= r ? (o - r) / l : (o + l - a) / l) > 1 && (n -= 1)
                            }
                            Object.assign(t, {
                                progress: r,
                                progressLoop: n,
                                isBeginning: a,
                                isEnd: l
                            }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (o && !a || d && !l) && t.emit("fromEdge"), t.emit("progress", r)
                        },
                        updateSlidesClasses: function() {
                            let e;
                            let {
                                slides: t,
                                params: i,
                                slidesEl: s,
                                activeIndex: r
                            } = this, a = this.virtual && i.virtual.enabled, l = e => T(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
                            if (t.forEach(e => {
                                    e.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
                                }), a) {
                                if (i.loop) {
                                    let t = r - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = l(`[data-swiper-slide-index="${t}"]`)
                                } else e = l(`[data-swiper-slide-index="${r}"]`)
                            } else e = t[r];
                            if (e) {
                                e.classList.add(i.slideActiveClass);
                                let s = function(e, t) {
                                    let i = [];
                                    for (; e.nextElementSibling;) {
                                        let s = e.nextElementSibling;
                                        t ? s.matches(t) && i.push(s) : i.push(s), e = s
                                    }
                                    return i
                                }(e, `.${i.slideClass}, swiper-slide`)[0];
                                i.loop && !s && (s = t[0]), s && s.classList.add(i.slideNextClass);
                                let r = function(e, t) {
                                    let i = [];
                                    for (; e.previousElementSibling;) {
                                        let s = e.previousElementSibling;
                                        t ? s.matches(t) && i.push(s) : i.push(s), e = s
                                    }
                                    return i
                                }(e, `.${i.slideClass}, swiper-slide`)[0];
                                i.loop, r && r.classList.add(i.slidePrevClass)
                            }
                            this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, i;
                            let s = this,
                                r = s.rtlTranslate ? s.translate : -s.translate,
                                {
                                    snapGrid: a,
                                    params: l,
                                    activeIndex: n,
                                    realIndex: o,
                                    snapIndex: d
                                } = s,
                                c = e,
                                p = e => {
                                    let t = e - s.virtual.slidesBefore;
                                    return t < 0 && (t = s.virtual.slides.length + t), t >= s.virtual.slides.length && (t -= s.virtual.slides.length), t
                                };
                            if (void 0 === c && (c = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: i,
                                        params: s
                                    } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                                    return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(s)), a.indexOf(r) >= 0) t = a.indexOf(r);
                            else {
                                let e = Math.min(l.slidesPerGroupSkip, c);
                                t = e + Math.floor((c - e) / l.slidesPerGroup)
                            }
                            if (t >= a.length && (t = a.length - 1), c === n) {
                                t !== d && (s.snapIndex = t, s.emit("snapIndexChange")), s.params.loop && s.virtual && s.params.virtual.enabled && (s.realIndex = p(c));
                                return
                            }
                            i = s.virtual && l.virtual.enabled && l.loop ? p(c) : s.slides[c] ? parseInt(s.slides[c].getAttribute("data-swiper-slide-index") || c, 10) : c, Object.assign(s, {
                                snapIndex: t,
                                realIndex: i,
                                previousIndex: n,
                                activeIndex: c
                            }), s.emit("activeIndexChange"), s.emit("snapIndexChange"), o !== i && s.emit("realIndexChange"), (s.initialized || s.params.runCallbacksOnInit) && s.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            let t;
                            let i = this,
                                s = i.params,
                                r = e.closest(`.${s.slideClass}, swiper-slide`),
                                a = !1;
                            if (r) {
                                for (let e = 0; e < i.slides.length; e += 1)
                                    if (i.slides[e] === r) {
                                        a = !0, t = e;
                                        break
                                    }
                            }
                            if (r && a) i.clickedSlide = r, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = t;
                            else {
                                i.clickedSlide = void 0, i.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let a = function(e, t = "x") {
                                let i, s, r;
                                let a = u(),
                                    l = function(e) {
                                        let t;
                                        let i = u();
                                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                                    }(e, null);
                                return a.WebKitCSSMatrix ? ((s = l.transform || l.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new a.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
                            }(r, e);
                            return i && (a = -a), a || 0
                        },
                        setTranslate: function(e, t) {
                            let i = this,
                                {
                                    rtlTranslate: s,
                                    params: r,
                                    wrapperEl: a,
                                    progress: l
                                } = i,
                                n = 0,
                                o = 0;
                            i.isHorizontal() ? n = s ? -e : e : o = e, r.roundLengths && (n = Math.floor(n), o = Math.floor(o)), r.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -n : -o : r.virtualTranslate || (a.style.transform = `translate3d(${n}px, ${o}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? n : o;
                            let d = i.maxTranslate() - i.minTranslate();
                            (0 === d ? 0 : (e - i.minTranslate()) / d) !== l && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e = 0, t = this.params.speed, i = !0, s = !0, r) {
                            let a;
                            let l = this,
                                {
                                    params: n,
                                    wrapperEl: o
                                } = l;
                            if (l.animating && n.preventInteractionOnTransition) return !1;
                            let d = l.minTranslate(),
                                c = l.maxTranslate();
                            if (a = s && e > d ? d : s && e < c ? c : e, l.updateProgress(a), n.cssMode) {
                                let e = l.isHorizontal();
                                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -a;
                                else {
                                    if (!l.support.smoothScroll) return w({
                                        swiper: l,
                                        targetPosition: -a,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    o.scrollTo({
                                        [e ? "left" : "top"]: -a,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (l.setTransition(0), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, i && l.emit("transitionEnd"))
                            }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            let i = this;
                            i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`), i.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), C({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            let i = this,
                                {
                                    params: s
                                } = i;
                            i.animating = !1, s.cssMode || (i.setTransition(0), C({
                                swiper: i,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e = 0, t = this.params.speed, i = !0, s, r) {
                            let a;
                            "string" == typeof e && (e = parseInt(e, 10));
                            let l = this,
                                n = e;
                            n < 0 && (n = 0);
                            let {
                                params: o,
                                snapGrid: d,
                                slidesGrid: c,
                                previousIndex: p,
                                activeIndex: u,
                                rtlTranslate: h,
                                wrapperEl: f,
                                enabled: m
                            } = l;
                            if (l.animating && o.preventInteractionOnTransition || !m && !s && !r) return !1;
                            let v = Math.min(l.params.slidesPerGroupSkip, n),
                                g = v + Math.floor((n - v) / l.params.slidesPerGroup);
                            g >= d.length && (g = d.length - 1);
                            let T = -d[g];
                            if (o.normalizeSlideIndex)
                                for (let e = 0; e < c.length; e += 1) {
                                    let t = -Math.floor(100 * T),
                                        i = Math.floor(100 * c[e]),
                                        s = Math.floor(100 * c[e + 1]);
                                    void 0 !== c[e + 1] ? t >= i && t < s - (s - i) / 2 ? n = e : t >= i && t < s && (n = e + 1) : t >= i && (n = e)
                                }
                            if (l.initialized && n !== u && (!l.allowSlideNext && T < l.translate && T < l.minTranslate() || !l.allowSlidePrev && T > l.translate && T > l.maxTranslate() && (u || 0) !== n)) return !1;
                            if (n !== (p || 0) && i && l.emit("beforeSlideChangeStart"), l.updateProgress(T), a = n > u ? "next" : n < u ? "prev" : "reset", h && -T === l.translate || !h && T === l.translate) return l.updateActiveIndex(n), o.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== o.effect && l.setTranslate(T), "reset" !== a && (l.transitionStart(i, a), l.transitionEnd(i, a)), !1;
                            if (o.cssMode) {
                                let e = l.isHorizontal(),
                                    i = h ? T : -T;
                                if (0 === t) {
                                    let t = l.virtual && l.params.virtual.enabled;
                                    t && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                        f[e ? "scrollLeft" : "scrollTop"] = i
                                    })) : f[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                                        l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1
                                    })
                                } else {
                                    if (!l.support.smoothScroll) return w({
                                        swiper: l,
                                        targetPosition: i,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    f.scrollTo({
                                        [e ? "left" : "top"]: i,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return l.setTransition(t), l.setTranslate(T), l.updateActiveIndex(n), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, s), l.transitionStart(i, a), 0 === t ? l.transitionEnd(i, a) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(i, a))
                            }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
                            if ("string" == typeof e) {
                                let t = parseInt(e, 10);
                                e = t
                            }
                            let r = e;
                            return this.params.loop && (this.virtual && this.params.virtual.enabled ? r += this.virtual.slidesBefore : r = x(this.slides.filter(e => 1 * e.getAttribute("data-swiper-slide-index") === r)[0])), this.slideTo(r, t, i, s)
                        },
                        slideNext: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    enabled: r,
                                    params: a,
                                    animating: l
                                } = s;
                            if (!r) return s;
                            let n = a.slidesPerGroup;
                            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (n = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                            let o = s.activeIndex < a.slidesPerGroupSkip ? 1 : n,
                                d = s.virtual && a.virtual.enabled;
                            if (a.loop) {
                                if (l && !d && a.loopPreventsSliding) return !1;
                                s.loopFix({
                                    direction: "next"
                                }), s._clientLeft = s.wrapperEl.clientLeft
                            }
                            return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    params: r,
                                    snapGrid: a,
                                    slidesGrid: l,
                                    rtlTranslate: n,
                                    enabled: o,
                                    animating: d
                                } = s;
                            if (!o) return s;
                            let c = s.virtual && r.virtual.enabled;
                            if (r.loop) {
                                if (d && !c && r.loopPreventsSliding) return !1;
                                s.loopFix({
                                    direction: "prev"
                                }), s._clientLeft = s.wrapperEl.clientLeft
                            }
                            let p = n ? s.translate : -s.translate;

                            function u(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let h = u(p),
                                f = a.map(e => u(e)),
                                m = a[f.indexOf(h) - 1];
                            if (void 0 === m && r.cssMode) {
                                let e;
                                a.forEach((t, i) => {
                                    h >= t && (e = i)
                                }), void 0 !== e && (m = a[e > 0 ? e - 1 : e])
                            }
                            let v = 0;
                            if (void 0 !== m && ((v = l.indexOf(m)) < 0 && (v = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (v = Math.max(v = v - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                                let r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                                return s.slideTo(r, e, t, i)
                            }
                            return s.slideTo(v, e, t, i)
                        },
                        slideReset: function(e = this.params.speed, t = !0, i) {
                            return this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e = this.params.speed, t = !0, i, s = .5) {
                            let r = this.activeIndex,
                                a = Math.min(this.params.slidesPerGroupSkip, r),
                                l = a + Math.floor((r - a) / this.params.slidesPerGroup),
                                n = this.rtlTranslate ? this.translate : -this.translate;
                            if (n >= this.snapGrid[l]) {
                                let e = this.snapGrid[l],
                                    t = this.snapGrid[l + 1];
                                n - e > (t - e) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[l - 1],
                                    t = this.snapGrid[l];
                                n - e <= (t - e) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this,
                                {
                                    params: i,
                                    slidesEl: s
                                } = t,
                                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                                a = t.clickedIndex,
                                l = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = x(T(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), h(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = x(T(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), h(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a)
                            } else t.slideTo(a)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let {
                                params: t,
                                slidesEl: i
                            } = this;
                            if (!t.loop || this.virtual && this.params.virtual.enabled) return;
                            let s = T(i, `.${t.slideClass}, swiper-slide`);
                            s.forEach((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }), this.loopFix({
                                slideRealIndex: e,
                                direction: t.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function({
                            slideRealIndex: e,
                            slideTo: t = !0,
                            direction: i,
                            setTranslate: s,
                            activeSlideIndex: r,
                            byController: a
                        } = {}) {
                            let l = this;
                            if (!l.params.loop) return;
                            l.emit("beforeLoopFix");
                            let {
                                slides: n,
                                allowSlidePrev: o,
                                allowSlideNext: d,
                                slidesEl: c,
                                params: p
                            } = l;
                            if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && p.virtual.enabled) {
                                t && (p.centeredSlides || 0 !== l.snapIndex ? p.centeredSlides && l.snapIndex < p.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = o, l.allowSlideNext = d, l.emit("loopFix");
                                return
                            }
                            let u = "auto" === p.slidesPerView ? l.slidesPerViewDynamic() : Math.ceil(parseFloat(p.slidesPerView, 10)),
                                h = p.loopedSlides || u;
                            h % p.slidesPerGroup != 0 && (h += p.slidesPerGroup - h % p.slidesPerGroup), l.loopedSlides = h;
                            let f = [],
                                m = [],
                                v = l.activeIndex;
                            void 0 === r ? r = x(l.slides.filter(e => e.classList.contains("swiper-slide-active"))[0]) : v = r;
                            let g = "next" === i || !i,
                                w = "prev" === i || !i,
                                T = 0,
                                S = 0;
                            if (r < h) {
                                T = h - r;
                                for (let e = 0; e < h - r; e += 1) {
                                    let t = e - Math.floor(e / n.length) * n.length;
                                    f.push(n.length - t - 1)
                                }
                            } else if (r > l.slides.length - 2 * h) {
                                S = r - (l.slides.length - 2 * h);
                                for (let e = 0; e < S; e += 1) {
                                    let t = e - Math.floor(e / n.length) * n.length;
                                    m.push(t)
                                }
                            }
                            if (w && f.forEach(e => {
                                    c.prepend(l.slides[e])
                                }), g && m.forEach(e => {
                                    c.append(l.slides[e])
                                }), l.recalcSlides(), p.watchSlidesProgress && l.updateSlidesOffset(), t) {
                                if (f.length > 0 && w) {
                                    if (void 0 === e) {
                                        let e = l.slidesGrid[v],
                                            t = l.slidesGrid[v + T];
                                        l.slideTo(v + T, 0, !1, !0), s && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t - e)
                                    } else s && l.slideToLoop(e, 0, !1, !0)
                                } else if (m.length > 0 && g) {
                                    if (void 0 === e) {
                                        let e = l.slidesGrid[v],
                                            t = l.slidesGrid[v - S];
                                        l.slideTo(v - S, 0, !1, !0), s && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t - e)
                                    } else l.slideToLoop(e, 0, !1, !0)
                                }
                            }
                            if (l.allowSlidePrev = o, l.allowSlideNext = d, l.controller && l.controller.control && !a) {
                                let t = {
                                    slideRealIndex: e,
                                    slideTo: !1,
                                    direction: i,
                                    setTranslate: s,
                                    activeSlideIndex: r,
                                    byController: !0
                                };
                                Array.isArray(l.controller.control) ? l.controller.control.forEach(e => {
                                    e.params.loop && e.loopFix(t)
                                }) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix(t)
                            }
                            l.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                slides: e,
                                params: t,
                                slidesEl: i
                            } = this;
                            if (!t.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let s = [];
                            e.forEach(e => {
                                let t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                                s[t] = e
                            }), e.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), s.forEach(e => {
                                i.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            if (!this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                            let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                            t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = this,
                                t = c(),
                                {
                                    params: i
                                } = e;
                            e.onTouchStart = M.bind(e), e.onTouchMove = P.bind(e), e.onTouchEnd = k.bind(e), i.cssMode && (e.onScroll = z.bind(e)), e.onClick = O.bind(e), e.onLoad = I.bind(e), G || (t.addEventListener("touchstart", _), G = !0), D(e, "on")
                        },
                        detachEvents: function() {
                            D(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: i,
                                    params: s,
                                    el: r
                                } = e,
                                a = s.breakpoints;
                            if (!a || a && 0 === Object.keys(a).length) return;
                            let l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!l || e.currentBreakpoint === l) return;
                            let n = l in a ? a[l] : void 0,
                                o = n || e.originalParams,
                                d = B(e, s),
                                c = B(e, o),
                                p = s.enabled;
                            d && !c ? (r.classList.remove(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.classList.add(`${s.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                let i = s[t] && s[t].enabled,
                                    r = o[t] && o[t].enabled;
                                i && !r && e[t].disable(), !i && r && e[t].enable()
                            });
                            let u = o.direction && o.direction !== s.direction,
                                h = s.loop && (o.slidesPerView !== s.slidesPerView || u);
                            u && i && e.changeDirection(), v(e.params, o);
                            let f = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), p && !f ? e.disable() : !p && f && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", o)
                        },
                        getBreakpoint: function(e, t = "window", i) {
                            if (!e || "container" === t && !i) return;
                            let s = !1,
                                r = u(),
                                a = "window" === t ? r.innerHeight : i.clientHeight,
                                l = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: a * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < l.length; e += 1) {
                                let {
                                    point: a,
                                    value: n
                                } = l[e];
                                "window" === t ? r.matchMedia(`(min-width: ${n}px)`).matches && (s = a) : n <= i.clientWidth && (s = a)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let e = this,
                                {
                                    isLocked: t,
                                    params: i
                                } = e,
                                {
                                    slidesOffsetBefore: s
                                } = i;
                            if (s) {
                                let t = e.slides.length - 1,
                                    i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                                e.isLocked = e.size > i
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                el: s,
                                device: r
                            } = this, a = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...a), s.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e.classList.remove(...t), this.emitContainerClasses()
                        }
                    }
                },
                $ = {};
            class F {
                constructor(...e) {
                    let t, i;
                    1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e, i || (i = {}), i = v({}, i), t && !i.el && (i.el = t);
                    let s = c();
                    if (i.el && "string" == typeof i.el && s.querySelectorAll(i.el).length > 1) {
                        let e = [];
                        return s.querySelectorAll(i.el).forEach(t => {
                            let s = v({}, i, {
                                el: t
                            });
                            e.push(new F(s))
                        }), e
                    }
                    let l = this;
                    l.__swiper__ = !0, l.support = y(), l.device = function(e = {}) {
                        return r || (r = function({
                            userAgent: e
                        } = {}) {
                            let t = y(),
                                i = u(),
                                s = i.navigator.platform,
                                r = e || i.navigator.userAgent,
                                a = {
                                    ios: !1,
                                    android: !1
                                },
                                l = i.screen.width,
                                n = i.screen.height,
                                o = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                                d = r.match(/(iPad).*OS\s([\d_]+)/),
                                c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                                p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                h = "MacIntel" === s;
                            return !d && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${n}`) >= 0 && ((d = r.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), h = !1), o && "Win32" !== s && (a.os = "android", a.android = !0), (d || p || c) && (a.os = "ios", a.ios = !0), a
                        }(e)), r
                    }({
                        userAgent: i.userAgent
                    }), l.browser = (a || (a = function() {
                        let e = u(),
                            t = !1;

                        function i() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }
                        if (i()) {
                            let i = String(e.navigator.userAgent);
                            if (i.includes("Version/")) {
                                let [e, s] = i.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                                t = e < 16 || 16 === e && s < 2
                            }
                        }
                        return {
                            isSafari: t || i(),
                            needPerspectiveFix: t,
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), a), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
                    let n = {};
                    l.modules.forEach(e => {
                        var t;
                        e({
                            params: i,
                            swiper: l,
                            extendParams: (t = i, function(e = {}) {
                                let i = Object.keys(e)[0],
                                    s = e[i];
                                if ("object" != typeof s || null === s || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {
                                        auto: !0
                                    }), !(i in t && "enabled" in s))) {
                                    v(n, e);
                                    return
                                }!0 === t[i] && (t[i] = {
                                    enabled: !0
                                }), "object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {
                                    enabled: !1
                                }), v(n, e)
                            }),
                            on: l.on.bind(l),
                            once: l.once.bind(l),
                            off: l.off.bind(l),
                            emit: l.emit.bind(l)
                        })
                    });
                    let o = v({}, V, n);
                    return l.params = v({}, o, $, i), l.originalParams = v({}, l.params), l.passedParams = v({}, i), l.params && l.params.on && Object.keys(l.params.on).forEach(e => {
                        l.on(e, l.params.on[e])
                    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                        enabled: l.params.enabled,
                        el: t,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === l.params.direction,
                        isVertical: () => "vertical" === l.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: l.params.focusableElements,
                            lastClickTime: f(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            evCache: []
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.emit("_swiper"), l.params.init && l.init(), l
                }
                recalcSlides() {
                    let e = this,
                        {
                            slidesEl: t,
                            params: i
                        } = e;
                    e.slides = T(t, `.${i.slideClass}, swiper-slide`)
                }
                enable() {
                    let e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    let e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = this.maxTranslate(),
                        r = (s - i) * e + i;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: a,
                        size: l,
                        activeIndex: n
                    } = this, o = 1;
                    if (i.centeredSlides) {
                        let e, t = s[n].swiperSlideSize;
                        for (let i = n + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0));
                        for (let i = n - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0))
                    } else if ("current" === e)
                        for (let e = n + 1; e < s.length; e += 1) {
                            let i = t ? r[e] + a[e] - r[n] < l : r[e] - r[n] < l;
                            i && (o += 1)
                        } else
                            for (let e = n - 1; e >= 0; e -= 1) {
                                let t = r[n] - r[e] < l;
                                t && (o += 1)
                            }
                    return o
                }
                update() {
                    let e = this;
                    if (!e || e.destroyed) return;
                    let {
                        snapGrid: t,
                        params: i
                    } = e;

                    function s() {
                        let t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
                        t.complete && A(e, t)
                    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    let i = this,
                        s = i.params.direction;
                    return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), i.emit("changeDirection"), t && i.update()), i
                }
                changeLanguageDirection(e) {
                    let t = this;
                    (!t.rtl || "rtl" !== e) && (t.rtl || "ltr" !== e) && (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = e || t.params.el;
                    if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                    i.swiper = t, i.shadowEl && (t.isElement = !0);
                    let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        r = (() => {
                            if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                                let e = i.shadowRoot.querySelector(s());
                                return e
                            }
                            return T(i, s())[0]
                        })();
                    return !r && t.params.createElements && (r = S("div", t.params.wrapperClass), i.append(r), T(i, `.${t.params.slideClass}`).forEach(e => {
                        r.append(e)
                    })), Object.assign(t, {
                        el: i,
                        wrapperEl: r,
                        slidesEl: t.isElement ? i : r,
                        mounted: !0,
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === b(i, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === b(i, "direction")),
                        wrongRTL: "-webkit-box" === b(r, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let i = t.mount(e);
                    return !1 === i || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                        e.complete ? A(t, e) : e.addEventListener("load", e => {
                            A(t, e.target)
                        })
                    }), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e = !0, t = !0) {
                    let i = this,
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            slides: l
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttribute("style"), a.removeAttribute("style"), l && l.length && l.forEach(e => {
                        e.classList.remove(s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.el.swiper = null, function(e) {
                        let t = e;
                        Object.keys(t).forEach(e => {
                            try {
                                t[e] = null
                            } catch (e) {}
                            try {
                                delete t[e]
                            } catch (e) {}
                        })
                    }(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    v($, e)
                }
                static get extendedDefaults() {
                    return $
                }
                static get defaults() {
                    return V
                }
                static installModule(e) {
                    F.prototype.__modules__ || (F.prototype.__modules__ = []);
                    let t = F.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach(e => F.installModule(e)), F) : (F.installModule(e), F)
                }
            }
            Object.keys(N).forEach(e => {
                Object.keys(N[e]).forEach(t => {
                    F.prototype[t] = N[e][t]
                })
            }), F.use([function({
                swiper: e,
                on: t,
                emit: i
            }) {
                let s = u(),
                    r = null,
                    a = null,
                    l = () => {
                        e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
                    },
                    n = () => {
                        e && !e.destroyed && e.initialized && (r = new ResizeObserver(t => {
                            a = s.requestAnimationFrame(() => {
                                let {
                                    width: i,
                                    height: s
                                } = e, r = i, a = s;
                                t.forEach(({
                                    contentBoxSize: t,
                                    contentRect: i,
                                    target: s
                                }) => {
                                    s && s !== e.el || (r = i ? i.width : (t[0] || t).inlineSize, a = i ? i.height : (t[0] || t).blockSize)
                                }), (r !== i || a !== s) && l()
                            })
                        })).observe(e.el)
                    },
                    o = () => {
                        a && s.cancelAnimationFrame(a), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
                    },
                    d = () => {
                        e && !e.destroyed && e.initialized && i("orientationchange")
                    };
                t("init", () => {
                    if (e.params.resizeObserver && void 0 !== s.ResizeObserver) {
                        n();
                        return
                    }
                    s.addEventListener("resize", l), s.addEventListener("orientationchange", d)
                }), t("destroy", () => {
                    o(), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", d)
                })
            }, function({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r = [],
                    a = u(),
                    l = (e, t = {}) => {
                        let i = a.MutationObserver || a.WebkitMutationObserver,
                            l = new i(e => {
                                if (1 === e.length) {
                                    s("observerUpdate", e[0]);
                                    return
                                }
                                let t = function() {
                                    s("observerUpdate", e[0])
                                };
                                a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                            });
                        l.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }), r.push(l)
                    },
                    n = () => {
                        if (e.params.observer) {
                            if (e.params.observeParents) {
                                let t = function(e, t) {
                                    let i = [],
                                        s = e.parentElement;
                                    for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
                                    return i
                                }(e.el);
                                for (let e = 0; e < t.length; e += 1) l(t[e])
                            }
                            l(e.el, {
                                childList: e.params.observeSlideChildren
                            }), l(e.wrapperEl, {
                                attributes: !1
                            })
                        }
                    },
                    o = () => {
                        r.forEach(e => {
                            e.disconnect()
                        }), r.splice(0, r.length)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", n), i("destroy", o)
            }]);
            var H = F;

            function j({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), e.navigation = {
                    nextEl: null,
                    prevEl: null
                };
                let r = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);

                function a(t) {
                    let i;
                    return t && "string" == typeof t && e.isElement && (i = e.el.shadowRoot.querySelector(t)) ? i : (t && ("string" == typeof t && (i = [...document.querySelectorAll(t)]), e.params.uniqueNavElements && "string" == typeof t && i.length > 1 && 1 === e.el.querySelectorAll(t).length && (i = e.el.querySelector(t))), t && !i) ? t : i
                }

                function l(t, i) {
                    let s = e.params.navigation;
                    (t = r(t)).forEach(t => {
                        t && (t.classList[i ? "add" : "remove"](s.disabledClass), "BUTTON" === t.tagName && (t.disabled = i), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](s.lockClass))
                    })
                }

                function n() {
                    let {
                        nextEl: t,
                        prevEl: i
                    } = e.navigation;
                    if (e.params.loop) {
                        l(i, !1), l(t, !1);
                        return
                    }
                    l(i, e.isBeginning && !e.params.rewind), l(t, e.isEnd && !e.params.rewind)
                }

                function o(t) {
                    t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), s("navigationPrev"))
                }

                function d(t) {
                    t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), s("navigationNext"))
                }

                function c() {
                    var t, i, s;
                    let l = e.params.navigation;
                    if (e.params.navigation = (t = e.originalParams.navigation, i = e.params.navigation, s = {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }, e.params.createElements && Object.keys(s).forEach(r => {
                            if (!i[r] && !0 === i.auto) {
                                let a = T(e.el, `.${s[r]}`)[0];
                                a || ((a = S("div", s[r])).className = s[r], e.el.append(a)), i[r] = a, t[r] = a
                            }
                        }), i), !(l.nextEl || l.prevEl)) return;
                    let n = a(l.nextEl),
                        c = a(l.prevEl);
                    Object.assign(e.navigation, {
                        nextEl: n,
                        prevEl: c
                    }), n = r(n), c = r(c);
                    let p = (t, i) => {
                        t && t.addEventListener("click", "next" === i ? d : o), !e.enabled && t && t.classList.add(l.lockClass)
                    };
                    n.forEach(e => p(e, "next")), c.forEach(e => p(e, "prev"))
                }

                function p() {
                    let {
                        nextEl: t,
                        prevEl: i
                    } = e.navigation;
                    t = r(t), i = r(i);
                    let s = (t, i) => {
                        t.removeEventListener("click", "next" === i ? d : o), t.classList.remove(e.params.navigation.disabledClass)
                    };
                    t.forEach(e => s(e, "next")), i.forEach(e => s(e, "prev"))
                }
                i("init", () => {
                    !1 === e.params.navigation.enabled ? h() : (c(), n())
                }), i("toEdge fromEdge lock unlock", () => {
                    n()
                }), i("destroy", () => {
                    p()
                }), i("enable disable", () => {
                    let {
                        nextEl: t,
                        prevEl: i
                    } = e.navigation;
                    [...t = r(t), ...i = r(i)].filter(e => !!e).forEach(t => t.classList[e.enabled ? "remove" : "add"](e.params.navigation.lockClass))
                }), i("click", (t, i) => {
                    let {
                        nextEl: a,
                        prevEl: l
                    } = e.navigation;
                    a = r(a), l = r(l);
                    let n = i.target;
                    if (e.params.navigation.hideOnClick && !l.includes(n) && !a.includes(n)) {
                        let t;
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                        a.length ? t = a[0].classList.contains(e.params.navigation.hiddenClass) : l.length && (t = l[0].classList.contains(e.params.navigation.hiddenClass)), !0 === t ? s("navigationShow") : s("navigationHide"), [...a, ...l].filter(e => !!e).forEach(t => t.classList.toggle(e.params.navigation.hiddenClass))
                    }
                });
                let u = () => {
                        e.el.classList.remove(e.params.navigation.navigationDisabledClass), c(), n()
                    },
                    h = () => {
                        e.el.classList.add(e.params.navigation.navigationDisabledClass), p()
                    };
                Object.assign(e.navigation, {
                    enable: u,
                    disable: h,
                    update: n,
                    init: c,
                    destroy: p
                })
            }
        }
    }
]);
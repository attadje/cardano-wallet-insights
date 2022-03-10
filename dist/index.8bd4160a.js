/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.PerfectScrollbar = e();
}(this, function() {
    "use strict";
    function t1(t) {
        return getComputedStyle(t);
    }
    function e1(t, e) {
        for(var i in e){
            var r = e[i];
            "number" == typeof r && (r += "px"), t.style[i] = r;
        }
        return t;
    }
    function i1(t) {
        var e = document.createElement("div");
        return e.className = t, e;
    }
    function r1(t, e) {
        if (!v1) throw new Error("No element matching method supported");
        return v1.call(t, e);
    }
    function l1(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
    }
    function n1(t2, e) {
        return Array.prototype.filter.call(t2.children, function(t) {
            return r1(t, e);
        });
    }
    function o1(t, e) {
        var i = t.element.classList, r = m.state.scrolling(e);
        i.contains(r) ? clearTimeout(Y1[e]) : i.add(r);
    }
    function s1(t, e) {
        Y1[e] = setTimeout(function() {
            return t.isAlive && t.element.classList.remove(m.state.scrolling(e));
        }, t.settings.scrollingThreshold);
    }
    function a1(t, e) {
        o1(t, e), s1(t, e);
    }
    function c1(t) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0), e;
    }
    function h1(t, e, i, r, l) {
        var n = i[0], o = i[1], s = i[2], h = i[3], u = i[4], d = i[5];
        void 0 === r && (r = !0), void 0 === l && (l = !1);
        var f = t.element;
        t.reach[h] = null, f[s] < 1 && (t.reach[h] = "start"), f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"), e && (f.dispatchEvent(c1("ps-scroll-" + h)), e < 0 ? f.dispatchEvent(c1("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c1("ps-scroll-" + d)), r && a1(t, h)), t.reach[h] && (e || l) && f.dispatchEvent(c1("ps-" + h + "-reach-" + t.reach[h]));
    }
    function u1(t) {
        return parseInt(t, 10) || 0;
    }
    function d1(t) {
        return r1(t, "input,[contenteditable]") || r1(t, "select,[contenteditable]") || r1(t, "textarea,[contenteditable]") || r1(t, "button,[contenteditable]");
    }
    function f1(e) {
        var i = t1(e);
        return u1(i.width) + u1(i.paddingLeft) + u1(i.paddingRight) + u1(i.borderLeftWidth) + u1(i.borderRightWidth);
    }
    function p1(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
    }
    function b1(t, i) {
        var r = {
            width: i.railXWidth
        }, l = Math.floor(t.scrollTop);
        i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : r.left = t.scrollLeft, i.isScrollbarXUsingBottom ? r.bottom = i.scrollbarXBottom - l : r.top = i.scrollbarXTop + l, e1(i.scrollbarXRail, r);
        var n = {
            top: l,
            height: i.railYHeight
        };
        i.isScrollbarYUsingRight ? i.isRtl ? n.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : n.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : n.left = i.scrollbarYLeft + t.scrollLeft, e1(i.scrollbarYRail, n), e1(i.scrollbarX, {
            left: i.scrollbarXLeft,
            width: i.scrollbarXWidth - i.railBorderXWidth
        }), e1(i.scrollbarY, {
            top: i.scrollbarYTop,
            height: i.scrollbarYHeight - i.railBorderYWidth
        });
    }
    function g1(t, e2) {
        function i(e) {
            b[d] = g + Y * (e[a] - v), o1(t, f), R(t), e.stopPropagation(), e.preventDefault();
        }
        function r() {
            s1(t, f), t[p].classList.remove(m.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", i);
        }
        var l = e2[0], n = e2[1], a = e2[2], c = e2[3], h = e2[4], u = e2[5], d = e2[6], f = e2[7], p = e2[8], b = t.element, g = null, v = null, Y = null;
        t.event.bind(t[h], "mousedown", function(e) {
            g = b[d], v = e[a], Y = (t[n] - t[l]) / (t[c] - t[u]), t.event.bind(t.ownerDocument, "mousemove", i), t.event.once(t.ownerDocument, "mouseup", r), t[p].classList.add(m.state.clicking), e.stopPropagation(), e.preventDefault();
        });
    }
    var v1 = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector), m = {
        main: "ps",
        element: {
            thumb: function(t) {
                return "ps__thumb-" + t;
            },
            rail: function(t) {
                return "ps__rail-" + t;
            },
            consuming: "ps__child--consume"
        },
        state: {
            focus: "ps--focus",
            clicking: "ps--clicking",
            active: function(t) {
                return "ps--active-" + t;
            },
            scrolling: function(t) {
                return "ps--scrolling-" + t;
            }
        }
    }, Y1 = {
        x: null,
        y: null
    }, X = function(t) {
        this.element = t, this.handlers = {
        };
    }, w = {
        isEmpty: {
            configurable: !0
        }
    };
    X.prototype.bind = function(t, e) {
        void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
    }, X.prototype.unbind = function(t, e) {
        var i = this;
        this.handlers[t] = this.handlers[t].filter(function(r) {
            return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1);
        });
    }, X.prototype.unbindAll = function() {
        var t = this;
        for(var e in t.handlers)t.unbind(e);
    }, w.isEmpty.get = function() {
        var t = this;
        return Object.keys(this.handlers).every(function(e) {
            return 0 === t.handlers[e].length;
        });
    }, Object.defineProperties(X.prototype, w);
    var y = function() {
        this.eventElements = [];
    };
    y.prototype.eventElement = function(t) {
        var e3 = this.eventElements.filter(function(e) {
            return e.element === t;
        })[0];
        return e3 || (e3 = new X(t), this.eventElements.push(e3)), e3;
    }, y.prototype.bind = function(t, e, i) {
        this.eventElement(t).bind(e, i);
    }, y.prototype.unbind = function(t, e, i) {
        var r = this.eventElement(t);
        r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
    }, y.prototype.unbindAll = function() {
        this.eventElements.forEach(function(t) {
            return t.unbindAll();
        }), this.eventElements = [];
    }, y.prototype.once = function(t3, e, i) {
        var r = this.eventElement(t3), l = function(t) {
            r.unbind(e, l), i(t);
        };
        r.bind(e, l);
    };
    var W = function(t, e, i, r, l) {
        void 0 === r && (r = !0), void 0 === l && (l = !1);
        var n;
        if ("top" === e) n = [
            "contentHeight",
            "containerHeight",
            "scrollTop",
            "y",
            "up",
            "down"
        ];
        else {
            if ("left" !== e) throw new Error("A proper axis should be provided");
            n = [
                "contentWidth",
                "containerWidth",
                "scrollLeft",
                "x",
                "left",
                "right"
            ];
        }
        h1(t, i, n, r, l);
    }, L = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    }, R = function(t4) {
        var e = t4.element, i = Math.floor(e.scrollTop);
        t4.containerWidth = e.clientWidth, t4.containerHeight = e.clientHeight, t4.contentWidth = e.scrollWidth, t4.contentHeight = e.scrollHeight, e.contains(t4.scrollbarXRail) || (n1(e, m.element.rail("x")).forEach(function(t) {
            return l1(t);
        }), e.appendChild(t4.scrollbarXRail)), e.contains(t4.scrollbarYRail) || (n1(e, m.element.rail("y")).forEach(function(t) {
            return l1(t);
        }), e.appendChild(t4.scrollbarYRail)), !t4.settings.suppressScrollX && t4.containerWidth + t4.settings.scrollXMarginOffset < t4.contentWidth ? (t4.scrollbarXActive = !0, t4.railXWidth = t4.containerWidth - t4.railXMarginWidth, t4.railXRatio = t4.containerWidth / t4.railXWidth, t4.scrollbarXWidth = p1(t4, u1(t4.railXWidth * t4.containerWidth / t4.contentWidth)), t4.scrollbarXLeft = u1((t4.negativeScrollAdjustment + e.scrollLeft) * (t4.railXWidth - t4.scrollbarXWidth) / (t4.contentWidth - t4.containerWidth))) : t4.scrollbarXActive = !1, !t4.settings.suppressScrollY && t4.containerHeight + t4.settings.scrollYMarginOffset < t4.contentHeight ? (t4.scrollbarYActive = !0, t4.railYHeight = t4.containerHeight - t4.railYMarginHeight, t4.railYRatio = t4.containerHeight / t4.railYHeight, t4.scrollbarYHeight = p1(t4, u1(t4.railYHeight * t4.containerHeight / t4.contentHeight)), t4.scrollbarYTop = u1(i * (t4.railYHeight - t4.scrollbarYHeight) / (t4.contentHeight - t4.containerHeight))) : t4.scrollbarYActive = !1, t4.scrollbarXLeft >= t4.railXWidth - t4.scrollbarXWidth && (t4.scrollbarXLeft = t4.railXWidth - t4.scrollbarXWidth), t4.scrollbarYTop >= t4.railYHeight - t4.scrollbarYHeight && (t4.scrollbarYTop = t4.railYHeight - t4.scrollbarYHeight), b1(e, t4), t4.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), t4.scrollbarXWidth = 0, t4.scrollbarXLeft = 0, e.scrollLeft = 0), t4.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), t4.scrollbarYHeight = 0, t4.scrollbarYTop = 0, e.scrollTop = 0);
    }, T = {
        "click-rail": function(t5) {
            t5.event.bind(t5.scrollbarY, "mousedown", function(t) {
                return t.stopPropagation();
            }), t5.event.bind(t5.scrollbarYRail, "mousedown", function(e) {
                var i = e.pageY - window.pageYOffset - t5.scrollbarYRail.getBoundingClientRect().top > t5.scrollbarYTop ? 1 : -1;
                t5.element.scrollTop += i * t5.containerHeight, R(t5), e.stopPropagation();
            }), t5.event.bind(t5.scrollbarX, "mousedown", function(t) {
                return t.stopPropagation();
            }), t5.event.bind(t5.scrollbarXRail, "mousedown", function(e) {
                var i = e.pageX - window.pageXOffset - t5.scrollbarXRail.getBoundingClientRect().left > t5.scrollbarXLeft ? 1 : -1;
                t5.element.scrollLeft += i * t5.containerWidth, R(t5), e.stopPropagation();
            });
        },
        "drag-thumb": function(t) {
            g1(t, [
                "containerWidth",
                "contentWidth",
                "pageX",
                "railXWidth",
                "scrollbarX",
                "scrollbarXWidth",
                "scrollLeft",
                "x",
                "scrollbarXRail"
            ]), g1(t, [
                "containerHeight",
                "contentHeight",
                "pageY",
                "railYHeight",
                "scrollbarY",
                "scrollbarYHeight",
                "scrollTop",
                "y",
                "scrollbarYRail"
            ]);
        },
        keyboard: function(t) {
            function e4(e, r) {
                var l = Math.floor(i.scrollTop);
                if (0 === e) {
                    if (!t.scrollbarYActive) return !1;
                    if (0 === l && r > 0 || l >= t.contentHeight - t.containerHeight && r < 0) return !t.settings.wheelPropagation;
                }
                var n = i.scrollLeft;
                if (0 === r) {
                    if (!t.scrollbarXActive) return !1;
                    if (0 === n && e < 0 || n >= t.contentWidth - t.containerWidth && e > 0) return !t.settings.wheelPropagation;
                }
                return !0;
            }
            var i = t.element, l2 = function() {
                return r1(i, ":hover");
            }, n2 = function() {
                return r1(t.scrollbarX, ":focus") || r1(t.scrollbarY, ":focus");
            };
            t.event.bind(t.ownerDocument, "keydown", function(r) {
                if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (l2() || n2())) {
                    var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                    if (o) {
                        if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
                        else for(; o.shadowRoot;)o = o.shadowRoot.activeElement;
                        if (d1(o)) return;
                    }
                    var s = 0, a = 0;
                    switch(r.which){
                        case 37:
                            s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
                            break;
                        case 38:
                            a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
                            break;
                        case 39:
                            s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
                            break;
                        case 40:
                            a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
                            break;
                        case 32:
                            a = r.shiftKey ? t.containerHeight : -t.containerHeight;
                            break;
                        case 33:
                            a = t.containerHeight;
                            break;
                        case 34:
                            a = -t.containerHeight;
                            break;
                        case 36:
                            a = t.contentHeight;
                            break;
                        case 35:
                            a = -t.contentHeight;
                            break;
                        default:
                            return;
                    }
                    t.settings.suppressScrollX && 0 !== s || t.settings.suppressScrollY && 0 !== a || (i.scrollTop -= a, i.scrollLeft += s, R(t), e4(s, a) && r.preventDefault());
                }
            });
        },
        wheel: function(e5) {
            function i2(t, i) {
                var r = Math.floor(o.scrollTop), l = 0 === o.scrollTop, n = r + o.offsetHeight === o.scrollHeight, s = 0 === o.scrollLeft, a = o.scrollLeft + o.offsetWidth === o.scrollWidth;
                return !(Math.abs(i) > Math.abs(t) ? l || n : s || a) || !e5.settings.wheelPropagation;
            }
            function r2(t) {
                var e = t.deltaX, i = -1 * t.deltaY;
                return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), t.shiftKey ? [
                    -i,
                    -e
                ] : [
                    e,
                    i
                ];
            }
            function l3(e, i, r) {
                if (!L.isWebKit && o.querySelector("select:focus")) return !0;
                if (!o.contains(e)) return !1;
                for(var l = e; l && l !== o;){
                    if (l.classList.contains(m.element.consuming)) return !0;
                    var n = t1(l);
                    if ([
                        n.overflow,
                        n.overflowX,
                        n.overflowY
                    ].join("").match(/(scroll|auto)/)) {
                        var s = l.scrollHeight - l.clientHeight;
                        if (s > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === s && r < 0)) return !0;
                        var a = l.scrollWidth - l.clientWidth;
                        if (a > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === a && i > 0)) return !0;
                    }
                    l = l.parentNode;
                }
                return !1;
            }
            function n3(t) {
                var n = r2(t), s = n[0], a = n[1];
                if (!l3(t.target, s, a)) {
                    var c = !1;
                    e5.settings.useBothWheelAxes ? e5.scrollbarYActive && !e5.scrollbarXActive ? (a ? o.scrollTop -= a * e5.settings.wheelSpeed : o.scrollTop += s * e5.settings.wheelSpeed, c = !0) : e5.scrollbarXActive && !e5.scrollbarYActive && (s ? o.scrollLeft += s * e5.settings.wheelSpeed : o.scrollLeft -= a * e5.settings.wheelSpeed, c = !0) : (o.scrollTop -= a * e5.settings.wheelSpeed, o.scrollLeft += s * e5.settings.wheelSpeed), R(e5), (c = c || i2(s, a)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault());
                }
            }
            var o = e5.element;
            void 0 !== window.onwheel ? e5.event.bind(o, "wheel", n3) : void 0 !== window.onmousewheel && e5.event.bind(o, "mousewheel", n3);
        },
        touch: function(e6) {
            function i3(t, i) {
                var r = Math.floor(h2.scrollTop), l = h2.scrollLeft, n = Math.abs(t), o = Math.abs(i);
                if (o > n) {
                    if (i < 0 && r === e6.contentHeight - e6.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && L.isChrome;
                } else if (n > o && (t < 0 && l === e6.contentWidth - e6.containerWidth || t > 0 && 0 === l)) return !0;
                return !0;
            }
            function r3(t, i) {
                h2.scrollTop -= i, h2.scrollLeft -= t, R(e6);
            }
            function l4(t) {
                return t.targetTouches ? t.targetTouches[0] : t;
            }
            function n4(t) {
                return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE));
            }
            function o2(t) {
                if (n4(t)) {
                    var e = l4(t);
                    u.pageX = e.pageX, u.pageY = e.pageY, d = (new Date).getTime(), null !== p2 && clearInterval(p2);
                }
            }
            function s2(e, i, r) {
                if (!h2.contains(e)) return !1;
                for(var l = e; l && l !== h2;){
                    if (l.classList.contains(m.element.consuming)) return !0;
                    var n = t1(l);
                    if ([
                        n.overflow,
                        n.overflowX,
                        n.overflowY
                    ].join("").match(/(scroll|auto)/)) {
                        var o = l.scrollHeight - l.clientHeight;
                        if (o > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === o && r < 0)) return !0;
                        var s = l.scrollLeft - l.clientWidth;
                        if (s > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === s && i > 0)) return !0;
                    }
                    l = l.parentNode;
                }
                return !1;
            }
            function a2(t) {
                if (n4(t)) {
                    var e = l4(t), o = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    }, a = o.pageX - u.pageX, c = o.pageY - u.pageY;
                    if (s2(t.target, a, c)) return;
                    r3(a, c), u = o;
                    var h = (new Date).getTime(), p = h - d;
                    p > 0 && (f.x = a / p, f.y = c / p, d = h), i3(a, c) && t.preventDefault();
                }
            }
            function c2() {
                e6.settings.swipeEasing && (clearInterval(p2), p2 = setInterval(function() {
                    e6.isInitialized ? clearInterval(p2) : f.x || f.y ? Math.abs(f.x) < 0.01 && Math.abs(f.y) < 0.01 ? clearInterval(p2) : (r3(30 * f.x, 30 * f.y), f.x *= 0.8, f.y *= 0.8) : clearInterval(p2);
                }, 10));
            }
            if (L.supportsTouch || L.supportsIePointer) {
                var h2 = e6.element, u = {
                }, d = 0, f = {
                }, p2 = null;
                L.supportsTouch ? (e6.event.bind(h2, "touchstart", o2), e6.event.bind(h2, "touchmove", a2), e6.event.bind(h2, "touchend", c2)) : L.supportsIePointer && (window.PointerEvent ? (e6.event.bind(h2, "pointerdown", o2), e6.event.bind(h2, "pointermove", a2), e6.event.bind(h2, "pointerup", c2)) : window.MSPointerEvent && (e6.event.bind(h2, "MSPointerDown", o2), e6.event.bind(h2, "MSPointerMove", a2), e6.event.bind(h2, "MSPointerUp", c2)));
            }
        }
    }, H = function(r, l) {
        var n = this;
        if (void 0 === l && (l = {
        }), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
        this.element = r, r.classList.add(m.main), this.settings = {
            handlers: [
                "click-rail",
                "drag-thumb",
                "keyboard",
                "wheel",
                "touch"
            ],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollingThreshold: 1000,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !0,
            wheelSpeed: 1
        };
        for(var o in l)n.settings[o] = l[o];
        this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
        var s = function() {
            return r.classList.add(m.state.focus);
        }, a = function() {
            return r.classList.remove(m.state.focus);
        };
        this.isRtl = "rtl" === t1(r).direction, this.isNegativeScroll = (function() {
            var t = r.scrollLeft, e = null;
            return r.scrollLeft = -1, e = r.scrollLeft < 0, r.scrollLeft = t, e;
        })(), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new y, this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = i1(m.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = i1(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
        var c = t1(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u1(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u1(c.borderLeftWidth) + u1(c.borderRightWidth), e1(this.scrollbarXRail, {
            display: "block"
        }), this.railXMarginWidth = u1(c.marginLeft) + u1(c.marginRight), e1(this.scrollbarXRail, {
            display: ""
        }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i1(m.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = i1(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
        var h = t1(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(h.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u1(h.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? f1(this.scrollbarY) : null, this.railBorderYWidth = u1(h.borderTopWidth) + u1(h.borderBottomWidth), e1(this.scrollbarYRail, {
            display: "block"
        }), this.railYMarginHeight = u1(h.marginTop) + u1(h.marginBottom), e1(this.scrollbarYRail, {
            display: ""
        }), this.railYHeight = null, this.railYRatio = null, this.reach = {
            x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
            y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
        }, this.isAlive = !0, this.settings.handlers.forEach(function(t) {
            return T[t](n);
        }), this.lastScrollTop = Math.floor(r.scrollTop), this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function(t) {
            return n.onScroll(t);
        }), R(this);
    };
    return H.prototype.update = function() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e1(this.scrollbarXRail, {
            display: "block"
        }), e1(this.scrollbarYRail, {
            display: "block"
        }), this.railXMarginWidth = u1(t1(this.scrollbarXRail).marginLeft) + u1(t1(this.scrollbarXRail).marginRight), this.railYMarginHeight = u1(t1(this.scrollbarYRail).marginTop) + u1(t1(this.scrollbarYRail).marginBottom), e1(this.scrollbarXRail, {
            display: "none"
        }), e1(this.scrollbarYRail, {
            display: "none"
        }), R(this), W(this, "top", 0, !1, !0), W(this, "left", 0, !1, !0), e1(this.scrollbarXRail, {
            display: ""
        }), e1(this.scrollbarYRail, {
            display: ""
        }));
    }, H.prototype.onScroll = function(t) {
        this.isAlive && (R(this), W(this, "top", this.element.scrollTop - this.lastScrollTop), W(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
    }, H.prototype.destroy = function() {
        this.isAlive && (this.event.unbindAll(), l1(this.scrollbarX), l1(this.scrollbarY), l1(this.scrollbarXRail), l1(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
    }, H.prototype.removePsClasses = function() {
        this.element.className = this.element.className.split(" ").filter(function(t) {
            return !t.match(/^ps([-_].+|)$/);
        }).join(" ");
    }, H;
});

//# sourceMappingURL=index.8bd4160a.js.map

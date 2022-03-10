/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function() {
    'use strict';
    function e1(e) {
        return e && '[object Function]' === ({
        }).toString.call(e);
    }
    function t1(e, t) {
        if (1 !== e.nodeType) return [];
        var o = window.getComputedStyle(e, null);
        return t ? o[t] : o;
    }
    function o1(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
    }
    function n1(e) {
        if (!e || -1 !== [
            'HTML',
            'BODY',
            '#document'
        ].indexOf(e.nodeName)) return window.document.body;
        var i = t1(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n1(o1(e));
    }
    function r1(e) {
        var o = e && e.offsetParent, i = o && o.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== [
            'TD',
            'TABLE'
        ].indexOf(o.nodeName) && 'static' === t1(o, 'position') ? r1(o) : o : window.document.documentElement;
    }
    function p1(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || r1(e.firstElementChild) === e);
    }
    function s1(e) {
        return null === e.parentNode ? e : s1(e.parentNode);
    }
    function d1(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = o ? e : t, n = o ? t : e, a = document.createRange();
        a.setStart(i, 0), a.setEnd(n, 0);
        var f = a.commonAncestorContainer;
        if (e !== f && t !== f || i.contains(n)) return p1(f) ? f : r1(f);
        var l = s1(e);
        return l.host ? d1(l.host, t) : d1(e, s1(t).host);
    }
    function a1(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top', o = 'top' === t ? 'scrollTop' : 'scrollLeft', i = e.nodeName;
        if ('BODY' === i || 'HTML' === i) {
            var n = window.document.documentElement, r = window.document.scrollingElement || n;
            return r[o];
        }
        return e[o];
    }
    function f1(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = a1(t, 'top'), n = a1(t, 'left'), r = o ? -1 : 1;
        return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e;
    }
    function l1(e, t) {
        var o = 'x' === t ? 'Left' : 'Top', i = 'Left' == o ? 'Right' : 'Bottom';
        return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0];
    }
    function m1(e, t, o, i) {
        return _(t['offset' + e], o['client' + e], o['offset' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
    }
    function h1() {
        var e = window.document.body, t = window.document.documentElement, o = ie() && window.getComputedStyle(t);
        return {
            height: m1('Height', e, t, o),
            width: m1('Width', e, t, o)
        };
    }
    function c1(e) {
        return se({
        }, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        });
    }
    function g1(e) {
        var o = {
        };
        if (ie()) try {
            o = e.getBoundingClientRect();
            var i = a1(e, 'top'), n = a1(e, 'left');
            o.top += i, o.left += n, o.bottom += i, o.right += n;
        } catch (e2) {
        }
        else o = e.getBoundingClientRect();
        var r = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }, p = 'HTML' === e.nodeName ? h1() : {
        }, s = p.width || e.clientWidth || r.right - r.left, d = p.height || e.clientHeight || r.bottom - r.top, f = e.offsetWidth - s, m = e.offsetHeight - d;
        if (f || m) {
            var g = t1(e);
            f -= l1(g, 'x'), m -= l1(g, 'y'), r.width -= f, r.height -= m;
        }
        return c1(r);
    }
    function u1(e, o) {
        var i = ie(), r = 'HTML' === o.nodeName, p = g1(e), s = g1(o), d = n1(e), a = t1(o), l = +a.borderTopWidth.split('px')[0], m = +a.borderLeftWidth.split('px')[0], h = c1({
            top: p.top - s.top - l,
            left: p.left - s.left - m,
            width: p.width,
            height: p.height
        });
        if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
            var u = +a.marginTop.split('px')[0], b = +a.marginLeft.split('px')[0];
            h.top -= l - u, h.bottom -= l - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b;
        }
        return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = f1(h, o)), h;
    }
    function b1(e) {
        var t = window.document.documentElement, o = u1(e, t), i = _(t.clientWidth, window.innerWidth || 0), n = _(t.clientHeight, window.innerHeight || 0), r = a1(t), p = a1(t, 'left'), s = {
            top: r - o.top + o.marginTop,
            left: p - o.left + o.marginLeft,
            width: i,
            height: n
        };
        return c1(s);
    }
    function y1(e) {
        var i = e.nodeName;
        return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t1(e, 'position') || y1(o1(e));
    }
    function w1(e, t, i, r) {
        var p = {
            top: 0,
            left: 0
        }, s = d1(e, t);
        if ('viewport' === r) p = b1(s);
        else {
            var a;
            'scrollParent' === r ? (a = n1(o1(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
            var f = u1(a, s);
            if ('HTML' === a.nodeName && !y1(s)) {
                var l = h1(), m = l.height, c = l.width;
                p.top += f.top - f.marginTop, p.bottom = m + f.top, p.left += f.left - f.marginLeft, p.right = c + f.left;
            } else p = f;
        }
        return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p;
    }
    function v1(e) {
        var t = e.width, o = e.height;
        return t * o;
    }
    function E(e3, t2, o, i2, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e3.indexOf('auto')) return e3;
        var p = w1(o, i2, r, n), s = {
            top: {
                width: p.width,
                height: t2.top - p.top
            },
            right: {
                width: p.right - t2.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t2.bottom
            },
            left: {
                width: t2.left - p.left,
                height: p.height
            }
        }, d = Object.keys(s).map(function(e) {
            return se({
                key: e
            }, s[e], {
                area: v1(s[e])
            });
        }).sort(function(e, t) {
            return t.area - e.area;
        }), a = d.filter(function(e) {
            var t = e.width, i = e.height;
            return t >= o.clientWidth && i >= o.clientHeight;
        }), f = 0 < a.length ? a[0].key : d[0].key, l = e3.split('-')[1];
        return f + (l ? '-' + l : '');
    }
    function x(e, t, o) {
        var i = d1(t, o);
        return u1(o, i);
    }
    function O(e) {
        var t = window.getComputedStyle(e), o = parseFloat(t.marginTop) + parseFloat(t.marginBottom), i = parseFloat(t.marginLeft) + parseFloat(t.marginRight), n = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + o
        };
        return n;
    }
    function L(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
        });
    }
    function S(e, t, o) {
        o = o.split('-')[0];
        var i = O(e), n = {
            width: i.width,
            height: i.height
        }, r = -1 !== [
            'right',
            'left'
        ].indexOf(o), p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height';
        return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n;
    }
    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function C(e4, t, o) {
        if (Array.prototype.findIndex) return e4.findIndex(function(e) {
            return e[t] === o;
        });
        var i = T(e4, function(e) {
            return e[t] === o;
        });
        return e4.indexOf(i);
    }
    function N(t3, o, i3) {
        var n = void 0 === i3 ? t3 : t3.slice(0, C(t3, 'name', i3));
        return n.forEach(function(t) {
            t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var i = t.function || t.fn;
            t.enabled && e1(i) && (o.offsets.popper = c1(o.offsets.popper), o.offsets.reference = c1(o.offsets.reference), o = i(o, t));
        }), o;
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {
                },
                attributes: {
                },
                flipped: !1,
                offsets: {
                }
            };
            e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
        }
    }
    function W(e5, t) {
        return e5.some(function(e) {
            var o = e.name, i = e.enabled;
            return i && o === t;
        });
    }
    function B(e) {
        for(var t = [
            !1,
            'ms',
            'Webkit',
            'Moz',
            'O'
        ], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++){
            var i = t[n], r = i ? '' + i + o : e;
            if ('undefined' != typeof window.document.body.style[r]) return r;
        }
        return null;
    }
    function D() {
        return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
    }
    function H(e, t, o, i) {
        var r = 'BODY' === e.nodeName, p = r ? window : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || H(n1(p.parentNode), t, o, i), i.push(p);
    }
    function P(e, t, o, i) {
        o.updateBound = i, window.addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n1(e);
        return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
    }
    function A() {
        this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function M(e6, t) {
        return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound);
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
    }
    function I() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
    }
    function R(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function U(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = '';
            -1 !== [
                'width',
                'height',
                'top',
                'right',
                'bottom',
                'left'
            ].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i;
        });
    }
    function Y(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function F(e7, t, o2) {
        var i = T(e7, function(e) {
            var o = e.name;
            return o === t;
        }), n = !!i && e7.some(function(e) {
            return e.name === o2 && e.enabled && e.order < i.order;
        });
        if (!n) {
            var r = '`' + t + '`';
            console.warn('`' + o2 + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
        }
        return n;
    }
    function j(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
    }
    function K(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = ae.indexOf(e), i = ae.slice(o + 1).concat(ae.slice(0, o));
        return t ? i.reverse() : i;
    }
    function q(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +n[1], p = n[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch(p){
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = i;
            }
            var d = c1(s);
            return d[t] / 100 * r;
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
        }
        return r;
    }
    function G(e8, t4, o3, i4) {
        var n2 = [
            0,
            0
        ], r = -1 !== [
            'right',
            'left'
        ].indexOf(i4), p2 = e8.split(/(\+|\-)/).map(function(e) {
            return e.trim();
        }), s = p2.indexOf(T(p2, function(e) {
            return -1 !== e.search(/,|\s/);
        }));
        p2[s] && -1 === p2[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/, a = -1 === s ? [
            p2
        ] : [
            p2.slice(0, s).concat([
                p2[s].split(d)[0]
            ]),
            [
                p2[s].split(d)[1]
            ].concat(p2.slice(s + 1))
        ];
        return a = a.map(function(e9, i) {
            var n = (1 === i ? !r : r) ? 'height' : 'width', p = !1;
            return e9.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== [
                    '+',
                    '-'
                ].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
            }, []).map(function(e) {
                return q(e, n, t4, o3);
            });
        }), a.forEach(function(e, t) {
            e.forEach(function(o, i) {
                R(o) && (n2[t] += o * ('-' === e[i - 1] ? -1 : 1));
            });
        }), n2;
    }
    for(var z = Math.min, V = Math.floor, _ = Math.max, X = [
        'native code',
        '[object MutationObserverConstructor]'
    ], Q = function(e) {
        return X.some(function(t) {
            return -1 < (e || '').toString().indexOf(t);
        });
    }, J = 'undefined' != typeof window, Z = [
        'Edge',
        'Trident',
        'Firefox'
    ], $ = 0, ee = 0; ee < Z.length; ee += 1)if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
        $ = 1;
        break;
    }
    var i1, te = J && Q(window.MutationObserver), oe = te ? function(e) {
        var t = !1, o = 0, i = document.createElement('span'), n = new MutationObserver(function() {
            e(), t = !1;
        });
        return n.observe(i, {
            attributes: !0
        }), function() {
            t || (t = !0, i.setAttribute('x-index', o), ++o);
        };
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e();
            }, $));
        };
    }, ie = function() {
        return void 0 == i1 && (i1 = -1 !== navigator.appVersion.indexOf('MSIE 10')), i1;
    }, ne = function(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }, re = function() {
        function e10(e, t) {
            for(var o, n = 0; n < t.length; n++)o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
        return function(t, o, i) {
            return o && e10(t.prototype, o), i && e10(t, i), t;
        };
    }(), pe = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o, e;
    }, se = Object.assign || function(e) {
        for(var t, o = 1; o < arguments.length; o++)for(var i in t = arguments[o], t)Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
    }, de = [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start'
    ], ae = de.slice(3), fe = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    }, le = function() {
        function t5(o, i) {
            var n = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {
            };
            ne(this, t5), this.scheduleUpdate = function() {
                return requestAnimationFrame(n.update);
            }, this.update = oe(this.update.bind(this)), this.options = se({
            }, t5.Defaults, r), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {
            }, Object.keys(se({
            }, t5.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                n.options.modifiers[e] = se({
                }, t5.Defaults.modifiers[e] || {
                }, r.modifiers ? r.modifiers[e] : {
                });
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return se({
                    name: e
                }, n.options.modifiers[e]);
            }).sort(function(e, t) {
                return e.order - t.order;
            }), this.modifiers.forEach(function(t) {
                t.enabled && e1(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
            }), this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(), this.state.eventsEnabled = p;
        }
        return re(t5, [
            {
                key: 'update',
                value: function() {
                    return k.call(this);
                }
            },
            {
                key: 'destroy',
                value: function() {
                    return D.call(this);
                }
            },
            {
                key: 'enableEventListeners',
                value: function() {
                    return A.call(this);
                }
            },
            {
                key: 'disableEventListeners',
                value: function() {
                    return I.call(this);
                }
            }
        ]), t5;
    }();
    return le.Utils = ('undefined' == typeof window ? global : window).PopperUtils, le.placements = de, le.Defaults = {
        placement: 'bottom',
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {
        },
        onUpdate: function() {
        },
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement, o = t.split('-')[0], i = t.split('-')[1];
                    if (i) {
                        var n = e.offsets, r = n.reference, p = n.popper, s = -1 !== [
                            'bottom',
                            'top'
                        ].indexOf(o), d = s ? 'left' : 'top', a = s ? 'width' : 'height', f = {
                            start: pe({
                            }, d, r[d]),
                            end: pe({
                            }, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = se({
                        }, p, f[i]);
                    }
                    return e;
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var o, i = t.offset, n = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = n.split('-')[0];
                    return o = R(+i) ? [
                        +i,
                        0
                    ] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e11, t) {
                    var o4 = t.boundariesElement || r1(e11.instance.popper);
                    e11.instance.reference === o4 && (o4 = r1(o4));
                    var i = w1(e11.instance.popper, e11.instance.reference, t.padding, o4);
                    t.boundaries = i;
                    var n3 = t.priority, p = e11.offsets.popper, s = {
                        primary: function(e) {
                            var o = p[e];
                            return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])), pe({
                            }, e, o);
                        },
                        secondary: function(e) {
                            var o = 'right' === e ? 'left' : 'top', n = p[o];
                            return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({
                            }, o, n);
                        }
                    };
                    return n3.forEach(function(e) {
                        var t = -1 === [
                            'left',
                            'top'
                        ].indexOf(e) ? 'secondary' : 'primary';
                        p = se({
                        }, p, s[t](e));
                    }), e11.offsets.popper = p, e11;
                },
                priority: [
                    'left',
                    'right',
                    'top',
                    'bottom'
                ],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets, o = t.popper, i = t.reference, n = e.placement.split('-')[0], r = V, p = -1 !== [
                        'top',
                        'bottom'
                    ].indexOf(n), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top', a = p ? 'width' : 'height';
                    return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e;
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var o = t.element;
                    if ('string' == typeof o) {
                        if (o = e.instance.popper.querySelector(o), !o) return e;
                    } else if (!e.instance.popper.contains(o)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var i = e.placement.split('-')[0], n = e.offsets, r = n.popper, p = n.reference, s = -1 !== [
                        'left',
                        'right'
                    ].indexOf(i), d = s ? 'height' : 'width', a = s ? 'top' : 'left', f = s ? 'left' : 'top', l = s ? 'bottom' : 'right', m = O(o)[d];
                    p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)), p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
                    var h = p[a] + p[d] / 2 - m / 2, g = h - c1(e.offsets.popper)[a];
                    return g = _(z(r[d] - m, g), 0), e.arrowElement = o, e.offsets.arrow = {
                    }, e.offsets.arrow[a] = Math.round(g), e.offsets.arrow[f] = '', e;
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = w1(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement), i = e.placement.split('-')[0], n = L(i), r = e.placement.split('-')[1] || '', p = [];
                    switch(t.behavior){
                        case fe.FLIP:
                            p = [
                                i,
                                n
                            ];
                            break;
                        case fe.CLOCKWISE:
                            p = K(i);
                            break;
                        case fe.COUNTERCLOCKWISE:
                            p = K(i, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (i !== s || p.length === d + 1) return e;
                        i = e.placement.split('-')[0], n = L(i);
                        var a = e.offsets.popper, f = e.offsets.reference, l = V, m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom), h = l(a.left) < l(o.left), c = l(a.right) > l(o.right), g = l(a.top) < l(o.top), u = l(a.bottom) > l(o.bottom), b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u, y = -1 !== [
                            'top',
                            'bottom'
                        ].indexOf(i), w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({
                        }, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'));
                    }), e;
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement, o = t.split('-')[0], i = e.offsets, n = i.popper, r = i.reference, p = -1 !== [
                        'left',
                        'right'
                    ].indexOf(o), s = -1 === [
                        'top',
                        'left'
                    ].indexOf(o);
                    return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = c1(n), e;
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e12) {
                    if (!F(e12.instance.modifiers, 'hide', 'preventOverflow')) return e12;
                    var t = e12.offsets.reference, o = T(e12.instance.modifiers, function(e) {
                        return 'preventOverflow' === e.name;
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e12.hide) return e12;
                        e12.hide = !0, e12.attributes['x-out-of-boundaries'] = '';
                    } else {
                        if (!1 === e12.hide) return e12;
                        e12.hide = !1, e12.attributes['x-out-of-boundaries'] = !1;
                    }
                    return e12;
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e13, t) {
                    var o = t.x, i = t.y, n = e13.offsets.popper, p = T(e13.instance.modifiers, function(e) {
                        return 'applyStyle' === e.name;
                    }).gpuAcceleration;
                    void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === p ? t.gpuAcceleration : p, f = r1(e13.instance.popper), l = g1(f), m = {
                        position: n.position
                    }, h = {
                        left: V(n.left),
                        top: V(n.top),
                        bottom: V(n.bottom),
                        right: V(n.right)
                    }, c = 'bottom' === o ? 'top' : 'bottom', u = 'right' === i ? 'left' : 'right', b = B('transform');
                    if (d = 'bottom' == c ? -l.height + h.bottom : h.top, s = 'right' == u ? -l.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
                    else {
                        var y = 'bottom' == c ? -1 : 1, w = 'right' == u ? -1 : 1;
                        m[c] = d * y, m[u] = s * w, m.willChange = c + ', ' + u;
                    }
                    var v = {
                        "x-placement": e13.placement
                    };
                    return e13.attributes = se({
                    }, v, e13.attributes), e13.styles = se({
                    }, m, e13.styles), e13;
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.offsets.arrow && U(e.arrowElement, e.offsets.arrow), e;
                },
                onLoad: function(e, t, o, i, n) {
                    var r = x(n, t, e), p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), U(t, {
                        position: 'absolute'
                    }), o;
                },
                gpuAcceleration: void 0
            }
        }
    }, le;
});

//# sourceMappingURL=index.a5b09cf1.js.map

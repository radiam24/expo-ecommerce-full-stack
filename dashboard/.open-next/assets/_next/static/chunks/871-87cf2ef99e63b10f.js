'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [871],
    {
        4961: function (e, t, n) {
            n.d(t, {
                Tx: function () {
                    return o
                },
                Kg: function () {
                    return u
                },
            })
            var r = n(2265)
            function o(e) {
                let { value: t, defaultValue: n, onChange: o } = e,
                    [l, i] = r.useState(n),
                    u = void 0 !== t,
                    a = u ? t : l,
                    d = r.useCallback(
                        (e) => {
                            let t = 'function' == typeof e ? e(a) : e
                            u || i(t), o && o(t)
                        },
                        [u, o, a]
                    )
                return [a, d]
            }
            var l = n(5729),
                i = n(6668)
            let u = () => {
                let [e, t] = r.useState(0),
                    n = r.useRef([])
                return (
                    r.useEffect(() => {
                        function e(e) {
                            e.startCoordinates &&
                            e.endCoordinates.screenY <=
                                e.startCoordinates.screenY
                                ? t(e.endCoordinates.height / 2)
                                : t(0)
                        }
                        return (
                            'ios' === l.Z.OS
                                ? (n.current = [
                                      i.Z.addListener(
                                          'keyboardWillChangeFrame',
                                          e
                                      ),
                                  ])
                                : (n.current = [
                                      i.Z.addListener('keyboardDidHide', e),
                                      i.Z.addListener('keyboardDidShow', e),
                                  ]),
                            () => {
                                n.current.forEach((e) => {
                                    e.remove()
                                })
                            }
                        )
                    }, [t, n]),
                    e
                )
            }
        },
        9989: function (e, t, n) {
            n.d(t, {
                N3: function () {
                    return r.N3
                },
                aV: function () {
                    return d
                },
                xX: function () {
                    return a
                },
            })
            var r = n(3656),
                o = n(2265),
                l = n(5729),
                i = n(1848),
                u = n(6129)
            let a = o.createContext({ exited: !0, setExited: (e) => {} }),
                d = o.forwardRef((e, t) => {
                    let {
                            children: n,
                            isOpen: d,
                            useRNModal: c = !1,
                            useRNModalOnAndroid: s = !1,
                            isKeyboardDismissable: m = !0,
                            animationPreset: f = 'fade',
                            onRequestClose: p,
                            style: v,
                        } = e,
                        [w, E] = o.useState(!d)
                    ;(0, u.Zs)({ enabled: d && m, callback: p || (() => {}) })
                    let y = {}
                    return ('web' === l.Z.OS && (y.zIndex = 9999),
                    'slide' === f
                        ? ((y.overflow = 'hidden'), (y.display = 'flex'))
                        : (y.display = w && !d ? 'none' : 'flex'),
                    !d && w)
                        ? null
                        : c || (s && 'android' === l.Z.OS)
                          ? o.createElement(
                                a.Provider,
                                { value: { exited: w, setExited: E } },
                                o.createElement(
                                    i.Z,
                                    {
                                        statusBarTranslucent: !0,
                                        transparent: !0,
                                        visible: d,
                                        onRequestClose: p,
                                        animationType: f,
                                        ref: t,
                                    },
                                    n
                                )
                            )
                          : o.createElement(
                                r.Xj,
                                { style: [v, y] },
                                o.createElement(
                                    a.Provider,
                                    { value: { exited: w, setExited: E } },
                                    n
                                )
                            )
                })
            d.displayName = 'Overlay'
        },
        3656: function (e, t, n) {
            let r
            function o(e) {
                var t = 'pageXOffset' === e ? 'scrollLeft' : 'scrollTop'
                return function (n, r) {
                    var o,
                        l =
                            'window' in (o = n) && o.window === o
                                ? o
                                : 'nodeType' in o &&
                                  o.nodeType === document.DOCUMENT_NODE &&
                                  (o.defaultView || !1)
                    if (void 0 === r) return l ? l[e] : n[t]
                    l ? l.scrollTo(l[e], r) : (n[t] = r)
                }
            }
            n.d(t, {
                Xj: function () {
                    return f
                },
                N3: function () {
                    return m
                },
                tk: function () {
                    return O
                },
            }),
                o('pageXOffset'),
                o('pageYOffset'),
                'undefined' != typeof window && window.visualViewport
            var l = n(2265)
            new WeakMap(),
                n(2618),
                'undefined' != typeof window && window.visualViewport
            var i = n(4392),
                u = n(9167)
            function a() {
                return (a = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t]
                              for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) &&
                                      (e[r] = n[r])
                          }
                          return e
                      }).apply(this, arguments)
            }
            let d = l.createContext(null),
                c = 0
            function s(e) {
                let { style: t, ...n } = e
                return l.createElement(
                    i.Z,
                    a(
                        {
                            pointerEvents: 'box-none',
                            style: [u.Z.absoluteFill, t],
                            collapsable: !1,
                        },
                        n
                    )
                )
            }
            let m = function (e) {
                let [t, n] = l.useState([])
                return l.createElement(
                    d.Provider,
                    {
                        value: {
                            items: t,
                            setOverlayItem: (e) => {
                                let t = ++c
                                return (
                                    n((n) => n.concat([{ id: t, node: e }])), t
                                )
                            },
                            removeOverlayItem: (e) => {
                                n((t) => t.filter((t) => t.id !== e))
                            },
                            updateOverlayItem: (e, t) => {
                                n((n) =>
                                    n.find((t) => t.id == e)
                                        ? n.map((n) =>
                                              n.id === e
                                                  ? { id: e, node: t }
                                                  : n
                                          )
                                        : n.concat([{ id: e, node: t }])
                                )
                            },
                            isSSR: null == e ? void 0 : e.isSSR,
                        },
                    },
                    e.children,
                    t.map((e) =>
                        l.createElement(l.Fragment, { key: e.id }, e.node)
                    )
                )
            }
            function f(e) {
                let t = l.useContext(d),
                    n = l.useRef(void 0),
                    r = l.createElement(s, e)
                return ((0, l.useEffect)(() => {
                    void 0 === n.current
                        ? (n.current = null == t ? void 0 : t.setOverlayItem(r))
                        : n.current &&
                          (null == t || t.updateOverlayItem(n.current, r))
                }, [e]),
                (0, l.useEffect)(
                    () => () => {
                        n.current &&
                            (null == t || t.removeOverlayItem(n.current))
                    },
                    []
                ),
                null != t && t.isSSR && !n.current)
                    ? l.createElement(i.Z, { style: { display: 'none' } }, r)
                    : null
            }
            var p = n(6582),
                v = n(5463),
                w = n(2319)
            function E(e, t) {
                let n = window.getComputedStyle(e),
                    r = /(auto|scroll)/.test(
                        n.overflow + n.overflowX + n.overflowY
                    )
                return (
                    r &&
                        t &&
                        (r =
                            e.scrollHeight !== e.clientHeight ||
                            e.scrollWidth !== e.clientWidth),
                    r
                )
            }
            function y(e, t) {
                let n = e
                for (E(n, t) && (n = n.parentElement); n && !E(n, t); )
                    n = n.parentElement
                return (
                    n || document.scrollingElement || document.documentElement
                )
            }
            let h = 'undefined' != typeof document && window.visualViewport,
                g = new Set([
                    'checkbox',
                    'radio',
                    'range',
                    'color',
                    'file',
                    'image',
                    'button',
                    'submit',
                    'reset',
                ]),
                b = 0
            function O(e = {}) {
                let { isDisabled: t } = e
                ;(0, p.b)(() => {
                    if (!t) {
                        let e, t, n, o, l
                        return (
                            1 == ++b &&
                                (r = (0, v.gn)()
                                    ? ((n = null),
                                      (o = () => {
                                          if (n) return
                                          let e = window.pageXOffset,
                                              t = window.pageYOffset
                                          ;(n = (0, w.t)(
                                              C(window, 'scroll', () => {
                                                  window.scrollTo(0, 0)
                                              }),
                                              x(
                                                  document.documentElement,
                                                  'paddingRight',
                                                  `${window.innerWidth - document.documentElement.clientWidth}px`
                                              ),
                                              x(
                                                  document.documentElement,
                                                  'overflow',
                                                  'hidden'
                                              ),
                                              x(
                                                  document.body,
                                                  'marginTop',
                                                  `-${t}px`
                                              ),
                                              () => {
                                                  window.scrollTo(e, t)
                                              }
                                          )),
                                              window.scrollTo(0, 0)
                                      }),
                                      (l = (0, w.t)(
                                          C(
                                              document,
                                              'touchstart',
                                              (n) => {
                                                  ;((e = y(n.target, !0)) !==
                                                      document.documentElement ||
                                                      e !== document.body) &&
                                                      e instanceof
                                                          HTMLElement &&
                                                      'auto' ===
                                                          window.getComputedStyle(
                                                              e
                                                          )
                                                              .overscrollBehavior &&
                                                      (t = x(
                                                          e,
                                                          'overscrollBehavior',
                                                          'contain'
                                                      ))
                                              },
                                              { passive: !1, capture: !0 }
                                          ),
                                          C(
                                              document,
                                              'touchmove',
                                              (t) => {
                                                  if (
                                                      !e ||
                                                      e ===
                                                          document.documentElement ||
                                                      e === document.body
                                                  ) {
                                                      t.preventDefault()
                                                      return
                                                  }
                                                  e.scrollHeight ===
                                                      e.clientHeight &&
                                                      e.scrollWidth ===
                                                          e.clientWidth &&
                                                      t.preventDefault()
                                              },
                                              { passive: !1, capture: !0 }
                                          ),
                                          C(
                                              document,
                                              'touchend',
                                              (e) => {
                                                  let n = e.target
                                                  S(n) &&
                                                      n !==
                                                          document.activeElement &&
                                                      (e.preventDefault(),
                                                      o(),
                                                      (n.style.transform =
                                                          'translateY(-2000px)'),
                                                      n.focus(),
                                                      requestAnimationFrame(
                                                          () => {
                                                              n.style.transform =
                                                                  ''
                                                          }
                                                      )),
                                                      t && t()
                                              },
                                              { passive: !1, capture: !0 }
                                          ),
                                          C(
                                              document,
                                              'focus',
                                              (e) => {
                                                  let t = e.target
                                                  S(t) &&
                                                      (o(),
                                                      (t.style.transform =
                                                          'translateY(-2000px)'),
                                                      requestAnimationFrame(
                                                          () => {
                                                              ;(t.style.transform =
                                                                  ''),
                                                                  h &&
                                                                      (h.height <
                                                                      window.innerHeight
                                                                          ? requestAnimationFrame(
                                                                                () => {
                                                                                    T(
                                                                                        t
                                                                                    )
                                                                                }
                                                                            )
                                                                          : h.addEventListener(
                                                                                'resize',
                                                                                () =>
                                                                                    T(
                                                                                        t
                                                                                    ),
                                                                                {
                                                                                    once: !0,
                                                                                }
                                                                            ))
                                                          }
                                                      ))
                                              },
                                              !0
                                          )
                                      )),
                                      () => {
                                          null == t || t(),
                                              null == n || n(),
                                              l()
                                      })
                                    : (0, w.t)(
                                          x(
                                              document.documentElement,
                                              'paddingRight',
                                              `${window.innerWidth - document.documentElement.clientWidth}px`
                                          ),
                                          x(
                                              document.documentElement,
                                              'overflow',
                                              'hidden'
                                          )
                                      )),
                            () => {
                                0 == --b && r()
                            }
                        )
                    }
                }, [t])
            }
            function x(e, t, n) {
                let r = e.style[t]
                return (
                    (e.style[t] = n),
                    () => {
                        e.style[t] = r
                    }
                )
            }
            function C(e, t, n, r) {
                return (
                    e.addEventListener(t, n, r),
                    () => {
                        e.removeEventListener(t, n, r)
                    }
                )
            }
            function T(e) {
                let t = document.scrollingElement || document.documentElement
                for (; e && e !== t; ) {
                    let t = y(e)
                    if (
                        t !== document.documentElement &&
                        t !== document.body &&
                        t !== e
                    ) {
                        let n = t.getBoundingClientRect().top,
                            r = e.getBoundingClientRect().top
                        r > n + e.clientHeight && (t.scrollTop += r - n)
                    }
                    e = t.parentElement
                }
            }
            function S(e) {
                return (
                    (e instanceof HTMLInputElement && !g.has(e.type)) ||
                    e instanceof HTMLTextAreaElement ||
                    (e instanceof HTMLElement && e.isContentEditable)
                )
            }
        },
    },
])

;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [95, 340],
    {
        5911: function (e, r, t) {
            Promise.resolve().then(t.bind(t, 2368)),
                Promise.resolve().then(t.t.bind(t, 2972, 23)),
                Promise.resolve().then(t.bind(t, 1189)),
                Promise.resolve().then(t.bind(t, 2948))
        },
        2368: function (e, r, t) {
            'use strict'
            t.d(r, {
                Image: function () {
                    return m
                },
            })
            var l = t(3864),
                n = t(2265)
            function s() {
                return (s = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var r = 1; r < arguments.length; r++) {
                              var t = arguments[r]
                              for (var l in t)
                                  Object.prototype.hasOwnProperty.call(t, l) &&
                                      (e[l] = t[l])
                          }
                          return e
                      }).apply(this, arguments)
            }
            let a = (e) =>
                (0, n.forwardRef)((r, t) => {
                    let { ...l } = r,
                        a = l.source
                    'number' != typeof a &&
                        (l.source.uri ||
                            (a = {
                                uri: l.source.default
                                    ? l.source.default.src
                                    : l.source,
                            }))
                    let { alt: o, ...i } = l
                    return (
                        'string' != typeof o &&
                            console.warn(
                                'Please pass alt prop to Image component'
                            ),
                        n.createElement(
                            e,
                            s({}, i, {
                                source: a,
                                'aria-label':
                                    (null == l ? void 0 : l['aria-label']) || o,
                                role: (null == l ? void 0 : l.role) || 'img',
                                alt: o,
                                ref: t,
                            })
                        )
                    )
                })
            var o = t(2142),
                i = t(5729),
                u = t(3018),
                c = t(5245)
            let f = (0, u.D)({
                    base: 'max-w-full',
                    variants: {
                        size: {
                            '2xs': 'h-6 w-6',
                            xs: 'h-10 w-10',
                            sm: 'h-16 w-16',
                            md: 'h-20 w-20',
                            lg: 'h-24 w-24',
                            xl: 'h-32 w-32',
                            '2xl': 'h-64 w-64',
                            full: 'h-full w-full',
                            none: '',
                        },
                    },
                }),
                h = (function (e) {
                    let { Root: r } = e,
                        t = a(r)
                    return (t.displayName = 'Image'), t
                })({ Root: o.Z })
            ;(0, c.BO)(h, { className: 'style' })
            let m = n.forwardRef((e, r) => {
                let { size: t = 'md', className: n, ...s } = e
                return (0, l.jsx)(h, {
                    className: f({ size: t, class: n }),
                    ...s,
                    ref: r,
                    style:
                        'web' === i.Z.OS
                            ? { height: 'revert-layer', width: 'revert-layer' }
                            : void 0,
                })
            })
            m.displayName = 'Image'
        },
    },
    function (e) {
        e.O(0, [189, 121, 972, 971, 117, 744], function () {
            return e((e.s = 5911))
        }),
            (_N_E = e.O())
    },
])

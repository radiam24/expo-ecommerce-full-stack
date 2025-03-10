;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [663],
    {
        5166: function (e, t, r) {
            Promise.resolve().then(r.bind(r, 7081)),
                Promise.resolve().then(r.t.bind(r, 2972, 23)),
                Promise.resolve().then(r.bind(r, 1189)),
                Promise.resolve().then(r.bind(r, 2948))
        },
        7081: function (e, t, r) {
            'use strict'
            r.d(t, {
                Avatar: function () {
                    return E
                },
                AvatarFallbackText: function () {
                    return P
                },
            })
            var a = r(3864),
                n = r(2265)
            function l() {
                return (l = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t]
                              for (var a in r)
                                  Object.prototype.hasOwnProperty.call(r, a) &&
                                      (e[a] = r[a])
                          }
                          return e
                      }).apply(this, arguments)
            }
            let s = (e) =>
                (0, n.forwardRef)((t, r) => {
                    let { children: a, ...s } = t
                    return n.createElement(e, l({ ref: r }, s), a)
                })
            function o() {
                return (o = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t]
                              for (var a in r)
                                  Object.prototype.hasOwnProperty.call(r, a) &&
                                      (e[a] = r[a])
                          }
                          return e
                      }).apply(this, arguments)
            }
            var u = (e) =>
                (0, n.forwardRef)((t, r) => {
                    let { children: a, ...l } = t
                    return n.createElement(e, o({ ref: r }, l), a)
                })
            function i() {
                return (i = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t]
                              for (var a in r)
                                  Object.prototype.hasOwnProperty.call(r, a) &&
                                      (e[a] = r[a])
                          }
                          return e
                      }).apply(this, arguments)
            }
            var c = (e) =>
                (0, n.forwardRef)((t, r) => {
                    let { children: a, ...l } = t
                    return n.createElement(
                        e,
                        i({ ref: r }, l),
                        [...a].flat(1 / 0).reverse()
                    )
                })
            function f() {
                return (f = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t]
                              for (var a in r)
                                  Object.prototype.hasOwnProperty.call(r, a) &&
                                      (e[a] = r[a])
                          }
                          return e
                      }).apply(this, arguments)
            }
            var p = (e) =>
                (0, n.forwardRef)((t, r) => {
                    let { source: a, ...l } = t,
                        [s, o] = n.useState(!1),
                        u =
                            a &&
                            ((a.hasOwnProperty('uri') && null === a.uri) ||
                                !a.hasOwnProperty(a, 'uri'))
                                ? a
                                : null
                    return n.createElement(
                        n.Fragment,
                        null,
                        u &&
                            !s &&
                            n.createElement(
                                e,
                                f({ ref: r }, l, {
                                    source: a,
                                    onError: () => {
                                        o(!0)
                                    },
                                })
                            )
                    )
                })
            function b() {
                return (b = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t]
                              for (var a in r)
                                  Object.prototype.hasOwnProperty.call(r, a) &&
                                      (e[a] = r[a])
                          }
                          return e
                      }).apply(this, arguments)
            }
            let d = (e) => {
                    let t = e.split(' '),
                        r = ''
                    for (
                        let e = 0;
                        e < t.length &&
                        (t[e].length > 0 && (r += t[e].charAt(0)),
                        !(r.length >= 2));
                        e++
                    );
                    return r.toUpperCase()
                },
                v = (e) =>
                    (0, n.forwardRef)((t, r) => {
                        let { children: a, ...l } = t,
                            s = ''
                        return (
                            'string' == typeof a && (s = d(a)),
                            n.createElement(e, b({ ref: r }, l), s)
                        )
                    })
            var h = r(4392),
                g = r(2142),
                m = r(1118),
                x = r(3018),
                w = r(6148),
                y = r(5245)
            let O = 'AVATAR',
                j = (function (e) {
                    let {
                            Root: t,
                            Badge: r,
                            Group: a,
                            Image: n,
                            FallbackText: l,
                        } = e,
                        o = s(t)
                    return (
                        (o.Badge = u(r)),
                        (o.Group = c(a)),
                        (o.Image = p(n)),
                        (o.FallbackText = v(l)),
                        (o.displayName = 'Avatar'),
                        (o.Badge.displayName = 'Avatar.Badge'),
                        (o.Group.displayName = 'Avatar.Group'),
                        (o.Image.displayName = 'Avatar.Image'),
                        (o.FallbackText.displayName = 'Avatar.FallbackText'),
                        o
                    )
                })({
                    Root: (0, w.a)(h.Z, O),
                    Badge: h.Z,
                    Group: h.Z,
                    Image: g.Z,
                    FallbackText: m.Z,
                })
            ;(0, y.BO)(j, { className: 'style' }),
                (0, y.BO)(j.Badge, { className: 'style' }),
                (0, y.BO)(j.Group, { className: 'style' }),
                (0, y.BO)(j.Image, { className: 'style' }),
                (0, y.BO)(j.FallbackText, { className: 'style' })
            let N = (0, x.D)({
                    base: 'rounded-full justify-center items-center relative bg-primary-600 group-[.avatar-group]/avatar-group:-ml-2.5',
                    variants: {
                        size: {
                            xs: 'w-6 h-6',
                            sm: 'w-8 h-8',
                            md: 'w-12 h-12',
                            lg: 'w-16 h-16',
                            xl: 'w-24 h-24',
                            '2xl': 'w-32 h-32',
                        },
                    },
                }),
                k = (0, x.D)({
                    base: 'text-typography-0 font-semibold overflow-hidden text-transform:uppercase web:cursor-default',
                    parentVariants: {
                        size: {
                            xs: 'text-2xs',
                            sm: 'text-xs',
                            md: 'text-base',
                            lg: 'text-xl',
                            xl: 'text-3xl',
                            '2xl': 'text-5xl',
                        },
                    },
                })
            ;(0, x.D)({
                base: 'group/avatar-group flex-row-reverse relative avatar-group',
            }),
                (0, x.D)({
                    base: 'w-5 h-5 bg-success-500 rounded-full absolute right-0 bottom-0 border-background-0 border-2',
                    parentVariants: {
                        size: {
                            xs: 'w-2 h-2',
                            sm: 'w-2 h-2',
                            md: 'w-3 h-3',
                            lg: 'w-4 h-4',
                            xl: 'w-6 h-6',
                            '2xl': 'w-8 h-8',
                        },
                    },
                }),
                (0, x.D)({ base: 'h-full w-full rounded-full absolute' })
            let E = n.forwardRef((e, t) => {
                    let { className: r, size: n = 'md', ...l } = e
                    return (0, a.jsx)(j, {
                        ref: t,
                        ...l,
                        className: N({ size: n, class: r }),
                        context: { size: n },
                    })
                }),
                P = n.forwardRef((e, t) => {
                    let { className: r, size: n, ...l } = e,
                        { size: s } = (0, w.y)(O)
                    return (0, a.jsx)(j.FallbackText, {
                        ref: t,
                        ...l,
                        className: k({
                            parentVariants: { size: s },
                            size: n,
                            class: r,
                        }),
                    })
                })
        },
        4864: function (e, t, r) {
            'use strict'
            r.d(t, {
                H: function () {
                    return n
                },
                O: function () {
                    return l
                },
            })
            var a = r(2265)
            let n = (0, a.createContext)({}),
                l = () => (0, a.useContext)(n)
        },
        6148: function (e, t, r) {
            'use strict'
            r.d(t, {
                a: function () {
                    return l
                },
                y: function () {
                    return s
                },
            })
            var a = r(2265),
                n = r(4864)
            let l = function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 'Global'
                    return a.forwardRef((r, l) => {
                        let { context: s, ...o } = r,
                            u = {},
                            i = (0, n.O)()
                        return (
                            void 0 !== i[t]
                                ? ((i[t] = s), (u = i))
                                : (u = { ...i, [t]: s }),
                            a.createElement(
                                n.H.Provider,
                                { value: u },
                                a.createElement(e, { ...o, ref: l })
                            )
                        )
                    })
                },
                s = function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 'Global'
                    return (0, n.O)()[e]
                }
        },
    },
    function (e) {
        e.O(0, [189, 121, 972, 971, 117, 744], function () {
            return e((e.s = 5166))
        }),
            (_N_E = e.O())
    },
])

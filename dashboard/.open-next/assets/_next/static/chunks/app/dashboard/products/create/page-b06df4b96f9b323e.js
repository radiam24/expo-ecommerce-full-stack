;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [648],
    {
        2203: function (e, s, t) {
            Promise.resolve().then(t.bind(t, 8887))
        },
        8887: function (e, s, t) {
            'use strict'
            t.r(s),
                t.d(s, {
                    default: function () {
                        return p
                    },
                })
            var n = t(3864),
                r = t(9149),
                a = t(9586),
                c = t(9067),
                x = t(2884),
                l = t(8800),
                i = t(7106),
                d = t(5479),
                h = t(9376),
                u = t(2265)
            t(3079)
            var o = (0, t(2119).$)('dbe782d0c2924c6d434715fa1b3b15ad111ef107')
            function p() {
                let [e, s] = (0, u.useState)(''),
                    [t, p] = (0, u.useState)(''),
                    [j, g] = (0, u.useState)(''),
                    m = (0, h.useSearchParams)().get('errorMessage')
                return (0, n.jsx)(r.x, {
                    className:
                        'flex-1 min-h-screen justify-center items-center',
                    children: (0, n.jsx)(a.NI, {
                        isInvalid: !!m,
                        className:
                            'p-4 border rounded-lg max-w-[500px] w-full border-outline-300 bg-white m-2',
                        children: (0, n.jsxs)(x.g, {
                            space: 'xl',
                            children: [
                                (0, n.jsx)(c.X, {
                                    className:
                                        'text-typography-900 leading-3 pt-3',
                                    children: 'Create product',
                                }),
                                (0, n.jsxs)(x.g, {
                                    space: 'xs',
                                    children: [
                                        (0, n.jsx)(l.x, {
                                            className:
                                                'text-typography-500 leading-1',
                                            children: 'Name',
                                        }),
                                        (0, n.jsx)(i.II, {
                                            children: (0, n.jsx)(i.UP, {
                                                value: e,
                                                onChangeText: s,
                                                type: 'text',
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)(x.g, {
                                    space: 'xs',
                                    children: [
                                        (0, n.jsx)(l.x, {
                                            className:
                                                'text-typography-500 leading-1',
                                            children: 'Description',
                                        }),
                                        (0, n.jsx)(i.II, {
                                            children: (0, n.jsx)(i.UP, {
                                                value: t,
                                                onChangeText: p,
                                                type: 'text',
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)(x.g, {
                                    space: 'xs',
                                    children: [
                                        (0, n.jsx)(l.x, {
                                            className:
                                                'text-typography-500 leading-1',
                                            children: 'Price',
                                        }),
                                        (0, n.jsx)(i.II, {
                                            children: (0, n.jsx)(i.UP, {
                                                value: j,
                                                onChangeText: g,
                                                type: 'text',
                                            }),
                                        }),
                                    ],
                                }),
                                m &&
                                    (0, n.jsx)(l.x, {
                                        className: 'text-red-500',
                                        children: m,
                                    }),
                                (0, n.jsx)(d.zx, {
                                    onPress: () => o(e, t, Number(j)),
                                    children: (0, n.jsx)(d.oD, {
                                        children: 'Save product',
                                    }),
                                }),
                            ],
                        }),
                    }),
                })
            }
        },
    },
    function (e) {
        e.O(0, [189, 121, 913, 965, 662, 745, 971, 117, 744], function () {
            return e((e.s = 2203))
        }),
            (_N_E = e.O())
    },
])

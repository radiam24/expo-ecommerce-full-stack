;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [626],
    {
        6697: function (e, s, a) {
            Promise.resolve().then(a.bind(a, 5622))
        },
        5622: function (e, s, a) {
            'use strict'
            a.r(s),
                a.d(s, {
                    default: function () {
                        return v
                    },
                })
            var r = a(3864),
                n = a(9586),
                t = a(9067),
                l = a(2884),
                c = a(8800),
                i = a(7106),
                x = a(2265),
                d = a(5473),
                o = a(3018)
            let p = d.$
                    ? 'flex relative z-0 box-border border-0 list-none min-w-0 min-h-0 bg-transparent items-stretch m-0 p-0 text-decoration-none'
                    : '',
                h = (0, o.D)({
                    base: 'flex-row '.concat(p),
                    variants: {
                        space: {
                            xs: 'gap-1',
                            sm: 'gap-2',
                            md: 'gap-3',
                            lg: 'gap-4',
                            xl: 'gap-5',
                            '2xl': 'gap-6',
                            '3xl': 'gap-7',
                            '4xl': 'gap-8',
                        },
                        reversed: { true: 'flex-row-reverse' },
                    },
                }),
                g = x.forwardRef((e, s) => {
                    let { className: a, space: n, reversed: t, ...l } = e
                    return (0, r.jsx)('div', {
                        className: h({ space: n, reversed: t, class: a }),
                        ...l,
                        ref: s,
                    })
                })
            g.displayName = 'HStack'
            var u = a(5479),
                m = a(9149)
            a(3079)
            var f = a(2119),
                j = (0, f.$)('94900518c42b68191c66744daa649dbc09a6012d'),
                b = (0, f.$)('cf624507944225fb4655a6cb311c56adc311ecdf'),
                N = a(9376)
            function v() {
                let [e, s] = (0, x.useState)(''),
                    [a, d] = (0, x.useState)(''),
                    o = (0, N.useSearchParams)().get('errorMessage')
                return (0, r.jsx)(m.x, {
                    className:
                        'flex-1 min-h-screen justify-center items-center',
                    children: (0, r.jsx)(n.NI, {
                        isInvalid: !!o,
                        className:
                            'p-4 border rounded-lg max-w-[500px] w-full border-outline-300 bg-white m-2',
                        children: (0, r.jsxs)(l.g, {
                            space: 'xl',
                            children: [
                                (0, r.jsx)(t.X, {
                                    className:
                                        'text-typography-900 leading-3 pt-3',
                                    children: 'Login',
                                }),
                                (0, r.jsxs)(l.g, {
                                    space: 'xs',
                                    children: [
                                        (0, r.jsx)(c.x, {
                                            className:
                                                'text-typography-500 leading-1',
                                            children: 'Email',
                                        }),
                                        (0, r.jsx)(i.II, {
                                            children: (0, r.jsx)(i.UP, {
                                                value: e,
                                                onChangeText: s,
                                                type: 'text',
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(l.g, {
                                    space: 'xs',
                                    children: [
                                        (0, r.jsx)(c.x, {
                                            className:
                                                'text-typography-500 leading-1',
                                            children: 'Password',
                                        }),
                                        (0, r.jsx)(i.II, {
                                            className: 'text-center',
                                            children: (0, r.jsx)(i.UP, {
                                                value: a,
                                                onChangeText: d,
                                                type: 'password',
                                            }),
                                        }),
                                    ],
                                }),
                                o &&
                                    (0, r.jsx)(c.x, {
                                        className: 'text-red-500',
                                        children: o,
                                    }),
                                (0, r.jsxs)(g, {
                                    space: 'sm',
                                    children: [
                                        (0, r.jsx)(u.zx, {
                                            className: 'flex-1',
                                            variant: 'outline',
                                            onPress: () => j(e, a),
                                            children: (0, r.jsx)(u.oD, {
                                                children: 'Sign up',
                                            }),
                                        }),
                                        (0, r.jsx)(u.zx, {
                                            className: 'flex-1',
                                            onPress: () => b(e, a),
                                            children: (0, r.jsx)(u.oD, {
                                                children: 'Sign in',
                                            }),
                                        }),
                                    ],
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
            return e((e.s = 6697))
        }),
            (_N_E = e.O())
    },
])

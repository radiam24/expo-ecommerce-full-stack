;(() => {
    var e = {}
    ;(e.id = 626),
        (e.ids = [626]),
        (e.modules = {
            72934: (e) => {
                'use strict'
                e.exports = require('next/dist/client/components/action-async-storage.external.js')
            },
            54580: (e) => {
                'use strict'
                e.exports = require('next/dist/client/components/request-async-storage.external.js')
            },
            45869: (e) => {
                'use strict'
                e.exports = require('next/dist/client/components/static-generation-async-storage.external.js')
            },
            20399: (e) => {
                'use strict'
                e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
            },
            55315: (e) => {
                'use strict'
                e.exports = require('path')
            },
            17360: (e) => {
                'use strict'
                e.exports = require('url')
            },
            39698: (e, t, a) => {
                'use strict'
                a.r(t),
                    a.d(t, {
                        GlobalError: () => o.a,
                        __next_app__: () => u,
                        originalPathname: () => p,
                        pages: () => d,
                        routeModule: () => m,
                        tree: () => l,
                    }),
                    a(22454),
                    a(70986),
                    a(73210),
                    a(90996)
                var r = a(30170),
                    s = a(45002),
                    n = a(83876),
                    o = a.n(n),
                    i = a(66299),
                    c = {}
                for (let e in i)
                    0 >
                        [
                            'default',
                            'tree',
                            'pages',
                            'GlobalError',
                            'originalPathname',
                            '__next_app__',
                            'routeModule',
                        ].indexOf(e) && (c[e] = () => i[e])
                a.d(t, c)
                let l = [
                        '',
                        {
                            children: [
                                'login',
                                {
                                    children: [
                                        '__PAGE__',
                                        {},
                                        {
                                            page: [
                                                () =>
                                                    Promise.resolve().then(
                                                        a.bind(a, 22454)
                                                    ),
                                                '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/login/page.tsx',
                                            ],
                                        },
                                    ],
                                },
                                {
                                    layout: [
                                        () =>
                                            Promise.resolve().then(
                                                a.bind(a, 70986)
                                            ),
                                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/login/layout.tsx',
                                    ],
                                    metadata: {
                                        icon: [
                                            async (e) =>
                                                (
                                                    await Promise.resolve().then(
                                                        a.bind(a, 57481)
                                                    )
                                                ).default(e),
                                        ],
                                        apple: [],
                                        openGraph: [],
                                        twitter: [],
                                        manifest: void 0,
                                    },
                                },
                            ],
                        },
                        {
                            layout: [
                                () => Promise.resolve().then(a.bind(a, 73210)),
                                '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/layout.tsx',
                            ],
                            'not-found': [
                                () =>
                                    Promise.resolve().then(
                                        a.t.bind(a, 90996, 23)
                                    ),
                                'next/dist/client/components/not-found-error',
                            ],
                            metadata: {
                                icon: [
                                    async (e) =>
                                        (
                                            await Promise.resolve().then(
                                                a.bind(a, 57481)
                                            )
                                        ).default(e),
                                ],
                                apple: [],
                                openGraph: [],
                                twitter: [],
                                manifest: void 0,
                            },
                        },
                    ],
                    d = [
                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/login/page.tsx',
                    ],
                    p = '/login/page',
                    u = { require: a, loadChunk: () => Promise.resolve() },
                    m = new r.AppPageRouteModule({
                        definition: {
                            kind: s.x.APP_PAGE,
                            page: '/login/page',
                            pathname: '/login',
                            bundlePath: '',
                            filename: '',
                            appPaths: [],
                        },
                        userland: { loaderTree: l },
                    })
            },
            46421: (e, t, a) => {
                let r = {
                    '94900518c42b68191c66744daa649dbc09a6012d': () =>
                        Promise.resolve()
                            .then(a.bind(a, 57166))
                            .then((e) => e.handleSignup),
                    cf624507944225fb4655a6cb311c56adc311ecdf: () =>
                        Promise.resolve()
                            .then(a.bind(a, 57166))
                            .then((e) => e.handleLogin),
                }
                async function s(e, ...t) {
                    return (await r[e]()).apply(null, t)
                }
                e.exports = {
                    '94900518c42b68191c66744daa649dbc09a6012d': s.bind(
                        null,
                        '94900518c42b68191c66744daa649dbc09a6012d'
                    ),
                    cf624507944225fb4655a6cb311c56adc311ecdf: s.bind(
                        null,
                        'cf624507944225fb4655a6cb311c56adc311ecdf'
                    ),
                }
            },
            85257: (e, t, a) => {
                Promise.resolve().then(a.bind(a, 69204))
            },
            32204: (e, t, a) => {
                Promise.resolve().then(a.bind(a, 27952)),
                    Promise.resolve().then(a.bind(a, 76507))
            },
            69204: (e, t, a) => {
                'use strict'
                a.r(t), a.d(t, { default: () => P })
                var r = a(21493),
                    s = a(79543),
                    n = a(28245),
                    o = a(62256),
                    i = a(35095),
                    c = a(2403),
                    l = a(28964),
                    d = a.n(l),
                    p = a(76864),
                    u = a(41495)
                let m = p.$
                        ? 'flex relative z-0 box-border border-0 list-none min-w-0 min-h-0 bg-transparent items-stretch m-0 p-0 text-decoration-none'
                        : '',
                    x = (0, u.D)({
                        base: `flex-row ${m}`,
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
                    g = d().forwardRef(
                        ({ className: e, space: t, reversed: a, ...s }, n) =>
                            r.jsx('div', {
                                className: x({
                                    space: t,
                                    reversed: a,
                                    class: e,
                                }),
                                ...s,
                                ref: n,
                            })
                    )
                g.displayName = 'HStack'
                var h = a(89735),
                    b = a(22795)
                a(70689)
                var f = a(11294),
                    v = (0, f.$)('94900518c42b68191c66744daa649dbc09a6012d'),
                    y = (0, f.$)('cf624507944225fb4655a6cb311c56adc311ecdf'),
                    j = a(34178)
                function P() {
                    let [e, t] = (0, l.useState)(''),
                        [a, d] = (0, l.useState)(''),
                        p = (0, j.useSearchParams)().get('errorMessage')
                    return r.jsx(b.x, {
                        className:
                            'flex-1 min-h-screen justify-center items-center',
                        children: r.jsx(s.NI, {
                            isInvalid: !!p,
                            className:
                                'p-4 border rounded-lg max-w-[500px] w-full border-outline-300 bg-white m-2',
                            children: (0, r.jsxs)(o.g, {
                                space: 'xl',
                                children: [
                                    r.jsx(n.X, {
                                        className:
                                            'text-typography-900 leading-3 pt-3',
                                        children: 'Login',
                                    }),
                                    (0, r.jsxs)(o.g, {
                                        space: 'xs',
                                        children: [
                                            r.jsx(i.x, {
                                                className:
                                                    'text-typography-500 leading-1',
                                                children: 'Email',
                                            }),
                                            r.jsx(c.II, {
                                                children: r.jsx(c.UP, {
                                                    value: e,
                                                    onChangeText: t,
                                                    type: 'text',
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(o.g, {
                                        space: 'xs',
                                        children: [
                                            r.jsx(i.x, {
                                                className:
                                                    'text-typography-500 leading-1',
                                                children: 'Password',
                                            }),
                                            r.jsx(c.II, {
                                                className: 'text-center',
                                                children: r.jsx(c.UP, {
                                                    value: a,
                                                    onChangeText: d,
                                                    type: 'password',
                                                }),
                                            }),
                                        ],
                                    }),
                                    p &&
                                        r.jsx(i.x, {
                                            className: 'text-red-500',
                                            children: p,
                                        }),
                                    (0, r.jsxs)(g, {
                                        space: 'sm',
                                        children: [
                                            r.jsx(h.zx, {
                                                className: 'flex-1',
                                                variant: 'outline',
                                                onPress: () => v(e, a),
                                                children: r.jsx(h.oD, {
                                                    children: 'Sign up',
                                                }),
                                            }),
                                            r.jsx(h.zx, {
                                                className: 'flex-1',
                                                onPress: () => y(e, a),
                                                children: r.jsx(h.oD, {
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
            57166: (e, t, a) => {
                'use strict'
                a.r(t), a.d(t, { handleLogin: () => l, handleSignup: () => d })
                var r = a(28713)
                a(9640)
                let s =
                    'https://a6ff76bb-75a9-4391-9a82-b9d120979053.eu-central-1.cloud.genez.io'
                async function n(e, t) {
                    let a = await fetch(`${s}/auth/login`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: e, password: t }),
                        }),
                        r = await a.json()
                    if (!a.ok) throw (console.log(r), Error('Failed to login'))
                    return r
                }
                async function o(e, t) {
                    let a = await fetch(`${s}/auth/register`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: e, password: t }),
                        }),
                        r = await a.json()
                    if (!a.ok) throw Error('Failed to login')
                    return r
                }
                var i = a(53020),
                    c = a(19188)
                async function l(e, t) {
                    let a = `/login?errorMessage=${encodeURIComponent('Failed to login')}`
                    try {
                        let r = await n(e, t)
                        r.token &&
                            ((0, i.cookies)().set('token', r.token),
                            (a = '/dashboard'))
                    } catch (e) {
                        console.log(e)
                    } finally {
                        ;(0, c.redirect)(a)
                    }
                }
                async function d(e, t) {
                    let a = `/login?errorMessage=${encodeURIComponent('Failed to sign up')}`
                    try {
                        let r = await o(e, t)
                        r.token &&
                            ((0, i.cookies)().set('token', r.token),
                            (a = '/dashboard'))
                    } catch (e) {
                        console.log(e)
                    } finally {
                        ;(0, c.redirect)(a)
                    }
                }
                ;(0, a(83557).h)([l, d]),
                    (0, r.j)('cf624507944225fb4655a6cb311c56adc311ecdf', l),
                    (0, r.j)('94900518c42b68191c66744daa649dbc09a6012d', d)
            },
            70986: (e, t, a) => {
                'use strict'
                a.r(t), a.d(t, { default: () => o })
                var r = a(38584),
                    s = a(52845),
                    n = a(41288)
                function o({ children: e }) {
                    return s.cookies().get('token')?.value
                        ? (0, n.redirect)('/dashboard')
                        : r.tZ('div', { children: e })
                }
            },
            22454: (e, t, a) => {
                'use strict'
                a.r(t), a.d(t, { default: () => r })
                let r = (0, a(45347).createProxy)(
                    String.raw`/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/login/page.tsx#default`
                )
            },
            57481: (e, t, a) => {
                'use strict'
                a.r(t), a.d(t, { default: () => s })
                var r = a(54564)
                let s = (e) => [
                    {
                        type: 'image/x-icon',
                        sizes: '16x16',
                        url:
                            (0, r.fillMetadataSegment)(
                                '.',
                                e.params,
                                'favicon.ico'
                            ) + '',
                    },
                ]
            },
        })
    var t = require('../../webpack-runtime.js')
    t.C(e)
    var a = (e) => t((t.s = e)),
        r = t.X(0, [379, 895, 346, 130, 101, 555, 719, 955, 479], () =>
            a(39698)
        )
    module.exports = r
})()

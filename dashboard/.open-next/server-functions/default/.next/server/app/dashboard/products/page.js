;(() => {
    var e = {}
    ;(e.id = 95),
        (e.ids = [95]),
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
            23819: (e, r, t) => {
                'use strict'
                t.r(r),
                    t.d(r, {
                        GlobalError: () => l.a,
                        __next_app__: () => m,
                        originalPathname: () => u,
                        pages: () => c,
                        routeModule: () => p,
                        tree: () => d,
                    }),
                    t(67208),
                    t(52068),
                    t(73210),
                    t(90996)
                var a = t(30170),
                    s = t(45002),
                    o = t(83876),
                    l = t.n(o),
                    n = t(66299),
                    i = {}
                for (let e in n)
                    0 >
                        [
                            'default',
                            'tree',
                            'pages',
                            'GlobalError',
                            'originalPathname',
                            '__next_app__',
                            'routeModule',
                        ].indexOf(e) && (i[e] = () => n[e])
                t.d(r, i)
                let d = [
                        '',
                        {
                            children: [
                                'dashboard',
                                {
                                    children: [
                                        'products',
                                        {
                                            children: [
                                                '__PAGE__',
                                                {},
                                                {
                                                    page: [
                                                        () =>
                                                            Promise.resolve().then(
                                                                t.bind(t, 67208)
                                                            ),
                                                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/dashboard/products/page.tsx',
                                                    ],
                                                },
                                            ],
                                        },
                                        {},
                                    ],
                                },
                                {
                                    layout: [
                                        () =>
                                            Promise.resolve().then(
                                                t.bind(t, 52068)
                                            ),
                                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/dashboard/layout.tsx',
                                    ],
                                    metadata: {
                                        icon: [
                                            async (e) =>
                                                (
                                                    await Promise.resolve().then(
                                                        t.bind(t, 57481)
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
                                () => Promise.resolve().then(t.bind(t, 73210)),
                                '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/layout.tsx',
                            ],
                            'not-found': [
                                () =>
                                    Promise.resolve().then(
                                        t.t.bind(t, 90996, 23)
                                    ),
                                'next/dist/client/components/not-found-error',
                            ],
                            metadata: {
                                icon: [
                                    async (e) =>
                                        (
                                            await Promise.resolve().then(
                                                t.bind(t, 57481)
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
                    c = [
                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/dashboard/products/page.tsx',
                    ],
                    u = '/dashboard/products/page',
                    m = { require: t, loadChunk: () => Promise.resolve() },
                    p = new a.AppPageRouteModule({
                        definition: {
                            kind: s.x.APP_PAGE,
                            page: '/dashboard/products/page',
                            pathname: '/dashboard/products',
                            bundlePath: '',
                            filename: '',
                            appPaths: [],
                        },
                        userland: { loaderTree: d },
                    })
            },
            72249: (e, r, t) => {
                Promise.resolve().then(t.bind(t, 72575)),
                    Promise.resolve().then(t.t.bind(t, 34080, 23)),
                    Promise.resolve().then(t.bind(t, 27952)),
                    Promise.resolve().then(t.bind(t, 76507))
            },
            72575: (e, r, t) => {
                'use strict'
                t.d(r, { Image: () => h })
                var a = t(21493),
                    s = t(28964),
                    o = t.n(s)
                function l() {
                    return (l = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var r = 1; r < arguments.length; r++) {
                                  var t = arguments[r]
                                  for (var a in t)
                                      Object.prototype.hasOwnProperty.call(
                                          t,
                                          a
                                      ) && (e[a] = t[a])
                              }
                              return e
                          }).apply(this, arguments)
                }
                let n = (e) =>
                    (0, s.forwardRef)(({ ...r }, t) => {
                        let a = r.source
                        'number' != typeof a &&
                            (r.source.uri ||
                                (a = {
                                    uri: r.source.default
                                        ? r.source.default.src
                                        : r.source,
                                }))
                        let { alt: s, ...n } = r
                        return (
                            'string' != typeof s &&
                                console.warn(
                                    'Please pass alt prop to Image component'
                                ),
                            o().createElement(
                                e,
                                l({}, n, {
                                    source: a,
                                    'aria-label':
                                        (null == r
                                            ? void 0
                                            : r['aria-label']) || s,
                                    role:
                                        (null == r ? void 0 : r.role) || 'img',
                                    alt: s,
                                    ref: t,
                                })
                            )
                        )
                    })
                var i = t(71918),
                    d = t(1970),
                    c = t(41495),
                    u = t(83281)
                let m = (0, c.D)({
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
                    p = (function ({ Root: e }) {
                        let r = n(e)
                        return (r.displayName = 'Image'), r
                    })({ Root: i.Z })
                ;(0, u.BO)(p, { className: 'style' })
                let h = o().forwardRef(
                    ({ size: e = 'md', className: r, ...t }, s) =>
                        a.jsx(p, {
                            className: m({ size: e, class: r }),
                            ...t,
                            ref: s,
                            style:
                                'web' === d.Z.OS
                                    ? {
                                          height: 'revert-layer',
                                          width: 'revert-layer',
                                      }
                                    : void 0,
                        })
                )
                h.displayName = 'Image'
            },
            91735: (e, r, t) => {
                'use strict'
                t.d(r, { d: () => o, t: () => s })
                let a =
                    'https://a6ff76bb-75a9-4391-9a82-b9d120979053.eu-central-1.cloud.genez.io'
                async function s() {
                    let e = await fetch(`${a}/products`),
                        r = await e.json()
                    if (!e.ok) throw Error('Error')
                    return r
                }
                async function o(e) {
                    let r = await fetch(`${a}/products/${e}`),
                        t = await r.json()
                    if (!r.ok) throw Error('Error')
                    return t
                }
            },
            79743: (e, r, t) => {
                'use strict'
                t.d(r, { Z: () => d })
                var a = t(38584),
                    s = t(8801)
                let o = (0, t(45347).createProxy)(
                    String.raw`/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/components/ui/image/index.tsx#Image`
                )
                var l = t(19886),
                    n = t(12101),
                    i = t(92349)
                function d({ product: e }) {
                    return a.tZ(i.default, {
                        href: `/dashboard/products/${e.id}`,
                        className: 'flex flex-1 min-w-[300px]',
                        children: (0, a.BX)(s.Z, {
                            className: 'p-5 rounded-lg flex-1',
                            children: [
                                a.tZ(o, {
                                    source: { uri: e.image },
                                    className:
                                        'mb-6 h-[240px] w-full rounded-md',
                                    alt: `${e.name} image`,
                                    resizeMode: 'contain',
                                }),
                                a.tZ(l.x, {
                                    className:
                                        'text-sm font-normal mb-2 text-typography-700',
                                    children: e.name,
                                }),
                                (0, a.BX)(n.X, {
                                    size: 'md',
                                    className: 'mb-4',
                                    children: ['$', e.price],
                                }),
                            ],
                        }),
                    })
                }
            },
            67208: (e, r, t) => {
                'use strict'
                t.r(r), t.d(r, { default: () => d })
                var a = t(38584),
                    s = t(91735),
                    o = t(79743),
                    l = t(92349),
                    n = t(8801),
                    i = t(45977)
                async function d() {
                    let e = await (0, s.t)()
                    return (0, a.BX)('div', {
                        className:
                            'flex flex-row flex-wrap gap-4 max-w-[1400px] w-full',
                        children: [
                            a.tZ(l.default, {
                                href: '/dashboard/products/create',
                                className: 'flex flex-1 min-w-[300px]',
                                children: a.tZ(n.Z, {
                                    className:
                                        'w-full h-full p-5 flex items-center justify-center',
                                    children: a.tZ(i.JO, {
                                        as: i.dt,
                                        className: 'w-10 h-10 color-slate-400',
                                    }),
                                }),
                            }),
                            e.map((e) => a.tZ(o.Z, { product: e }, e.id)),
                        ],
                    })
                }
            },
            8801: (e, r, t) => {
                'use strict'
                t.d(r, { Z: () => d })
                var a = t(38584),
                    s = t(26269),
                    o = t.n(s),
                    l = t(80476)
                let n = t(61406).$ ? 'flex flex-col relative z-0' : '',
                    i = (0, l.D)({
                        base: n,
                        variants: {
                            size: {
                                sm: 'p-3 rounded',
                                md: 'p-4 rounded-md',
                                lg: 'p-6 rounded-xl',
                            },
                            variant: {
                                elevated: 'bg-background-0',
                                outline: 'border border-outline-200 ',
                                ghost: 'rounded-none',
                                filled: 'bg-background-50',
                            },
                        },
                    }),
                    d = o().forwardRef(
                        (
                            {
                                className: e,
                                size: r = 'md',
                                variant: t = 'elevated',
                                ...s
                            },
                            o
                        ) =>
                            a.tZ('div', {
                                className: i({ size: r, variant: t, class: e }),
                                ...s,
                                ref: o,
                            })
                    )
                d.displayName = 'Card'
            },
        })
    var r = require('../../../webpack-runtime.js')
    r.C(e)
    var t = (e) => r((r.s = e)),
        a = r.X(0, [379, 895, 346, 130, 945, 955, 283], () => t(23819))
    module.exports = a
})()

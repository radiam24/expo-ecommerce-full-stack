;(() => {
    var e = {}
    ;(e.id = 648),
        (e.ids = [648]),
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
            37664: (e, t, r) => {
                'use strict'
                r.r(t),
                    r.d(t, {
                        GlobalError: () => d.a,
                        __next_app__: () => p,
                        originalPathname: () => u,
                        pages: () => l,
                        routeModule: () => h,
                        tree: () => i,
                    }),
                    r(45992),
                    r(52068),
                    r(73210),
                    r(90996)
                var a = r(30170),
                    s = r(45002),
                    o = r(83876),
                    d = r.n(o),
                    c = r(66299),
                    n = {}
                for (let e in c)
                    0 >
                        [
                            'default',
                            'tree',
                            'pages',
                            'GlobalError',
                            'originalPathname',
                            '__next_app__',
                            'routeModule',
                        ].indexOf(e) && (n[e] = () => c[e])
                r.d(t, n)
                let i = [
                        '',
                        {
                            children: [
                                'dashboard',
                                {
                                    children: [
                                        'products',
                                        {
                                            children: [
                                                'create',
                                                {
                                                    children: [
                                                        '__PAGE__',
                                                        {},
                                                        {
                                                            page: [
                                                                () =>
                                                                    Promise.resolve().then(
                                                                        r.bind(
                                                                            r,
                                                                            45992
                                                                        )
                                                                    ),
                                                                '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/dashboard/products/create/page.tsx',
                                                            ],
                                                        },
                                                    ],
                                                },
                                                {},
                                            ],
                                        },
                                        {},
                                    ],
                                },
                                {
                                    layout: [
                                        () =>
                                            Promise.resolve().then(
                                                r.bind(r, 52068)
                                            ),
                                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/dashboard/layout.tsx',
                                    ],
                                    metadata: {
                                        icon: [
                                            async (e) =>
                                                (
                                                    await Promise.resolve().then(
                                                        r.bind(r, 57481)
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
                                () => Promise.resolve().then(r.bind(r, 73210)),
                                '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/layout.tsx',
                            ],
                            'not-found': [
                                () =>
                                    Promise.resolve().then(
                                        r.t.bind(r, 90996, 23)
                                    ),
                                'next/dist/client/components/not-found-error',
                            ],
                            metadata: {
                                icon: [
                                    async (e) =>
                                        (
                                            await Promise.resolve().then(
                                                r.bind(r, 57481)
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
                    l = [
                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/dashboard/products/create/page.tsx',
                    ],
                    u = '/dashboard/products/create/page',
                    p = { require: r, loadChunk: () => Promise.resolve() },
                    h = new a.AppPageRouteModule({
                        definition: {
                            kind: s.x.APP_PAGE,
                            page: '/dashboard/products/create/page',
                            pathname: '/dashboard/products/create',
                            bundlePath: '',
                            filename: '',
                            appPaths: [],
                        },
                        userland: { loaderTree: i },
                    })
            },
            83232: (e, t, r) => {
                let a = {
                    dbe782d0c2924c6d434715fa1b3b15ad111ef107: () =>
                        Promise.resolve()
                            .then(r.bind(r, 4440))
                            .then((e) => e.createProduct),
                }
                async function s(e, ...t) {
                    return (await a[e]()).apply(null, t)
                }
                e.exports = {
                    dbe782d0c2924c6d434715fa1b3b15ad111ef107: s.bind(
                        null,
                        'dbe782d0c2924c6d434715fa1b3b15ad111ef107'
                    ),
                }
            },
            69341: (e, t, r) => {
                Promise.resolve().then(r.bind(r, 57385))
            },
            57385: (e, t, r) => {
                'use strict'
                r.r(t), r.d(t, { default: () => x })
                var a = r(21493),
                    s = r(22795),
                    o = r(79543),
                    d = r(28245),
                    c = r(62256),
                    n = r(35095),
                    i = r(2403),
                    l = r(89735),
                    u = r(34178),
                    p = r(28964)
                r(70689)
                var h = (0, r(11294).$)(
                    'dbe782d0c2924c6d434715fa1b3b15ad111ef107'
                )
                function x() {
                    let [e, t] = (0, p.useState)(''),
                        [r, x] = (0, p.useState)(''),
                        [m, b] = (0, p.useState)(''),
                        g = (0, u.useSearchParams)().get('errorMessage')
                    return a.jsx(s.x, {
                        className:
                            'flex-1 min-h-screen justify-center items-center',
                        children: a.jsx(o.NI, {
                            isInvalid: !!g,
                            className:
                                'p-4 border rounded-lg max-w-[500px] w-full border-outline-300 bg-white m-2',
                            children: (0, a.jsxs)(c.g, {
                                space: 'xl',
                                children: [
                                    a.jsx(d.X, {
                                        className:
                                            'text-typography-900 leading-3 pt-3',
                                        children: 'Create product',
                                    }),
                                    (0, a.jsxs)(c.g, {
                                        space: 'xs',
                                        children: [
                                            a.jsx(n.x, {
                                                className:
                                                    'text-typography-500 leading-1',
                                                children: 'Name',
                                            }),
                                            a.jsx(i.II, {
                                                children: a.jsx(i.UP, {
                                                    value: e,
                                                    onChangeText: t,
                                                    type: 'text',
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)(c.g, {
                                        space: 'xs',
                                        children: [
                                            a.jsx(n.x, {
                                                className:
                                                    'text-typography-500 leading-1',
                                                children: 'Description',
                                            }),
                                            a.jsx(i.II, {
                                                children: a.jsx(i.UP, {
                                                    value: r,
                                                    onChangeText: x,
                                                    type: 'text',
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)(c.g, {
                                        space: 'xs',
                                        children: [
                                            a.jsx(n.x, {
                                                className:
                                                    'text-typography-500 leading-1',
                                                children: 'Price',
                                            }),
                                            a.jsx(i.II, {
                                                children: a.jsx(i.UP, {
                                                    value: m,
                                                    onChangeText: b,
                                                    type: 'text',
                                                }),
                                            }),
                                        ],
                                    }),
                                    g &&
                                        a.jsx(n.x, {
                                            className: 'text-red-500',
                                            children: g,
                                        }),
                                    a.jsx(l.zx, {
                                        onPress: () => h(e, r, Number(m)),
                                        children: a.jsx(l.oD, {
                                            children: 'Save product',
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    })
                }
            },
            4440: (e, t, r) => {
                'use strict'
                r.r(t), r.d(t, { createProduct: () => c })
                var a = r(28713)
                r(9640)
                var s = r(18964),
                    o = r(53020),
                    d = r(19188)
                async function c(e, t, r) {
                    let a = '/dashboard/products'
                    try {
                        let d = o.cookies().get('token')?.value,
                            c = await fetch(`${s.T}/products`, {
                                method: 'POST',
                                headers: {
                                    Authorization: `${d}`,
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    name: e,
                                    description: t,
                                    price: r,
                                }),
                            })
                        if (!c.ok) {
                            if ((console.log(c), 401 === c.status))
                                (0, o.cookies)().delete('token'), (a = '/login')
                            else throw Error('Failed to create product: ')
                        }
                    } catch (e) {
                        a = `/dashboard/products/create?errorMessage=${encodeURIComponent('Failed to create product')}`
                    } finally {
                        ;(0, d.redirect)(a)
                    }
                }
                ;(0, r(83557).h)([c]),
                    (0, a.j)('dbe782d0c2924c6d434715fa1b3b15ad111ef107', c)
            },
            45992: (e, t, r) => {
                'use strict'
                r.r(t), r.d(t, { default: () => a })
                let a = (0, r(45347).createProxy)(
                    String.raw`/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/dashboard/products/create/page.tsx#default`
                )
            },
            18964: (e, t, r) => {
                'use strict'
                r.d(t, { T: () => a })
                let a =
                    'https://a6ff76bb-75a9-4391-9a82-b9d120979053.eu-central-1.cloud.genez.io'
            },
        })
    var t = require('../../../../webpack-runtime.js')
    t.C(e)
    var r = (e) => t((t.s = e)),
        a = t.X(
            0,
            [379, 895, 346, 130, 945, 101, 555, 719, 955, 283, 479],
            () => r(37664)
        )
    module.exports = a
})()

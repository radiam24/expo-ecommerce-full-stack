;(() => {
    var e = {}
    ;(e.id = 702),
        (e.ids = [702]),
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
            44247: (e, r, t) => {
                'use strict'
                t.r(r),
                    t.d(r, {
                        GlobalError: () => n.a,
                        __next_app__: () => u,
                        originalPathname: () => p,
                        pages: () => c,
                        routeModule: () => m,
                        tree: () => l,
                    }),
                    t(52068),
                    t(73210),
                    t(90996)
                var a = t(30170),
                    s = t(45002),
                    o = t(83876),
                    n = t.n(o),
                    i = t(66299),
                    d = {}
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
                        ].indexOf(e) && (d[e] = () => i[e])
                t.d(r, d)
                let l = [
                        '',
                        {
                            children: [
                                'dashboard',
                                {
                                    children: [
                                        '__PAGE__',
                                        {},
                                        {
                                            page: [
                                                () =>
                                                    Promise.resolve().then(
                                                        t.bind(t, 33063)
                                                    ),
                                                '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/dashboard/page.tsx',
                                            ],
                                        },
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
                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/dashboard/page.tsx',
                    ],
                    p = '/dashboard/page',
                    u = { require: t, loadChunk: () => Promise.resolve() },
                    m = new a.AppPageRouteModule({
                        definition: {
                            kind: s.x.APP_PAGE,
                            page: '/dashboard/page',
                            pathname: '/dashboard',
                            bundlePath: '',
                            filename: '',
                            appPaths: [],
                        },
                        userland: { loaderTree: l },
                    })
            },
            32204: (e, r, t) => {
                Promise.resolve().then(t.bind(t, 27952)),
                    Promise.resolve().then(t.bind(t, 76507))
            },
            33063: (e, r, t) => {
                'use strict'
                t.r(r), t.d(r, { default: () => s })
                var a = t(38584)
                function s() {
                    return a.tZ('div', { children: 'Dashboard' })
                }
            },
        })
    var r = require('../../webpack-runtime.js')
    r.C(e)
    var t = (e) => r((r.s = e)),
        a = r.X(0, [379, 895, 346, 130, 945, 955, 283], () => t(44247))
    module.exports = a
})()

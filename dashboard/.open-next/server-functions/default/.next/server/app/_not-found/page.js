'use strict'
;(() => {
    var e = {}
    ;(e.id = 409),
        (e.ids = [409]),
        (e.modules = {
            72934: (e) => {
                e.exports = require('next/dist/client/components/action-async-storage.external.js')
            },
            54580: (e) => {
                e.exports = require('next/dist/client/components/request-async-storage.external.js')
            },
            45869: (e) => {
                e.exports = require('next/dist/client/components/static-generation-async-storage.external.js')
            },
            20399: (e) => {
                e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
            },
            55315: (e) => {
                e.exports = require('path')
            },
            79330: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        GlobalError: () => a.a,
                        __next_app__: () => p,
                        originalPathname: () => f,
                        pages: () => s,
                        routeModule: () => c,
                        tree: () => d,
                    }),
                    n(59333),
                    n(90996),
                    n(73210)
                var o = n(30170),
                    r = n(45002),
                    u = n(83876),
                    a = n.n(u),
                    l = n(66299),
                    i = {}
                for (let e in l)
                    0 >
                        [
                            'default',
                            'tree',
                            'pages',
                            'GlobalError',
                            'originalPathname',
                            '__next_app__',
                            'routeModule',
                        ].indexOf(e) && (i[e] = () => l[e])
                n.d(t, i)
                let d = [
                        '',
                        {
                            children: [
                                '/_not-found',
                                {
                                    children: [
                                        '__PAGE__',
                                        {},
                                        {
                                            page: [
                                                () =>
                                                    Promise.resolve().then(
                                                        n.t.bind(n, 90996, 23)
                                                    ),
                                                'next/dist/client/components/not-found-error',
                                            ],
                                        },
                                    ],
                                },
                                {},
                            ],
                        },
                        {
                            layout: [
                                () => Promise.resolve().then(n.bind(n, 73210)),
                                '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/layout.tsx',
                            ],
                            'not-found': [
                                () =>
                                    Promise.resolve().then(
                                        n.t.bind(n, 90996, 23)
                                    ),
                                'next/dist/client/components/not-found-error',
                            ],
                        },
                    ],
                    s = [],
                    f = '/_not-found/page',
                    p = { require: n, loadChunk: () => Promise.resolve() },
                    c = new o.AppPageRouteModule({
                        definition: {
                            kind: r.x.APP_PAGE,
                            page: '/_not-found/page',
                            pathname: '/_not-found',
                            bundlePath: '',
                            filename: '',
                            appPaths: [],
                        },
                        userland: { loaderTree: d },
                    })
            },
            76868: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (function (e, t) {
                        for (var n in t)
                            Object.defineProperty(e, n, {
                                enumerable: !0,
                                get: t[n],
                            })
                    })(t, {
                        isNotFoundError: function () {
                            return r
                        },
                        notFound: function () {
                            return o
                        },
                    })
                let n = 'NEXT_NOT_FOUND'
                function o() {
                    let e = Error(n)
                    throw ((e.digest = n), e)
                }
                function r(e) {
                    return (
                        'object' == typeof e &&
                        null !== e &&
                        'digest' in e &&
                        e.digest === n
                    )
                }
                ;('function' == typeof t.default ||
                    ('object' == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, '__esModule', {
                        value: !0,
                    }),
                    Object.assign(t.default, t),
                    (e.exports = t.default))
            },
            59333: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (function (e, t) {
                        for (var n in t)
                            Object.defineProperty(e, n, {
                                enumerable: !0,
                                get: t[n],
                            })
                    })(t, {
                        PARALLEL_ROUTE_DEFAULT_PATH: function () {
                            return r
                        },
                        default: function () {
                            return u
                        },
                    })
                let o = n(76868),
                    r = 'next/dist/client/components/parallel-route-default.js'
                function u() {
                    ;(0, o.notFound)()
                }
                ;('function' == typeof t.default ||
                    ('object' == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, '__esModule', {
                        value: !0,
                    }),
                    Object.assign(t.default, t),
                    (e.exports = t.default))
            },
        })
    var t = require('../../webpack-runtime.js')
    t.C(e)
    var n = (e) => t((t.s = e)),
        o = t.X(0, [379, 895, 955], () => n(79330))
    module.exports = o
})()

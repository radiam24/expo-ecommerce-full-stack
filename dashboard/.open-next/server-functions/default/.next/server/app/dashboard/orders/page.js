;(() => {
    var e = {}
    ;(e.id = 857),
        (e.ids = [857]),
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
            41858: (e, t, r) => {
                'use strict'
                r.r(t),
                    r.d(t, {
                        GlobalError: () => i.a,
                        __next_app__: () => h,
                        originalPathname: () => l,
                        pages: () => d,
                        routeModule: () => f,
                        tree: () => c,
                    }),
                    r(16650),
                    r(52068),
                    r(73210),
                    r(90996)
                var n = r(30170),
                    s = r(45002),
                    a = r(83876),
                    i = r.n(a),
                    o = r(66299),
                    u = {}
                for (let e in o)
                    0 >
                        [
                            'default',
                            'tree',
                            'pages',
                            'GlobalError',
                            'originalPathname',
                            '__next_app__',
                            'routeModule',
                        ].indexOf(e) && (u[e] = () => o[e])
                r.d(t, u)
                let c = [
                        '',
                        {
                            children: [
                                'dashboard',
                                {
                                    children: [
                                        'orders',
                                        {
                                            children: [
                                                '__PAGE__',
                                                {},
                                                {
                                                    page: [
                                                        () =>
                                                            Promise.resolve().then(
                                                                r.bind(r, 16650)
                                                            ),
                                                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/dashboard/orders/page.tsx',
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
                    d = [
                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/dashboard/orders/page.tsx',
                    ],
                    l = '/dashboard/orders/page',
                    h = { require: r, loadChunk: () => Promise.resolve() },
                    f = new n.AppPageRouteModule({
                        definition: {
                            kind: s.x.APP_PAGE,
                            page: '/dashboard/orders/page',
                            pathname: '/dashboard/orders',
                            bundlePath: '',
                            filename: '',
                            appPaths: [],
                        },
                        userland: { loaderTree: c },
                    })
            },
            76229: (e, t, r) => {
                Promise.resolve().then(r.t.bind(r, 34080, 23)),
                    Promise.resolve().then(r.bind(r, 27952)),
                    Promise.resolve().then(r.bind(r, 76507))
            },
            17304: (e, t, r) => {
                'use strict'
                r.d(t, { G: () => i, A: () => a })
                let n =
                    'https://a6ff76bb-75a9-4391-9a82-b9d120979053.eu-central-1.cloud.genez.io'
                var s = r(52845)
                async function a() {
                    try {
                        let e = s.cookies().get('token')?.value,
                            t = await fetch(`${n}/orders`, {
                                headers: {
                                    Authorization: e ?? '',
                                    'Content-Type': 'application/json',
                                },
                            })
                        if (!t.ok)
                            throw (
                                (console.error(t),
                                Error('Failed to fetch orders'))
                            )
                        return await t.json()
                    } catch (e) {
                        return console.error(e), []
                    }
                }
                async function i(e) {
                    try {
                        let t = s.cookies().get('token')?.value,
                            r = await fetch(`${n}/orders/${e}`, {
                                headers: {
                                    Authorization: t ?? '',
                                    'Content-Type': 'application/json',
                                },
                            })
                        if (!r.ok)
                            throw (
                                (console.error(r),
                                Error('Failed to fetch orders'))
                            )
                        return await r.json()
                    } catch (e) {
                        return console.error(e), null
                    }
                }
            },
            16650: (e, t, r) => {
                'use strict'
                r.r(t), r.d(t, { default: () => l })
                var n = r(38584),
                    s = r(17304),
                    a = r(8801),
                    i = r(67747),
                    o = r(19886),
                    u = r(2974),
                    c = r.n(u),
                    d = r(92349)
                async function l() {
                    let e = await (0, s.A)()
                    return (0, n.BX)(a.Z, {
                        className: 'w-full max-w-screen-lg',
                        children: [
                            (0, n.BX)(i.U, {
                                className: 'p-4 border-b border-gray-200 gap-4',
                                children: [
                                    n.tZ(o.x, {
                                        className: 'font-bold',
                                        children: 'Id',
                                    }),
                                    n.tZ(o.x, {
                                        className: 'font-bold',
                                        children: 'Date',
                                    }),
                                    n.tZ(o.x, {
                                        className: 'ml-auto font-bold',
                                        children: 'Status',
                                    }),
                                ],
                            }),
                            e.map((e) =>
                                n.tZ(
                                    d.default,
                                    {
                                        href: `/dashboard/orders/${e.id}`,
                                        children: (0, n.BX)(i.U, {
                                            className:
                                                'p-4 border-b border-gray-200 gap-4',
                                            children: [
                                                n.tZ(o.x, { children: e.id }),
                                                n.tZ(o.x, {
                                                    children: c()(
                                                        e.createdAt
                                                    ).format(
                                                        'DD/MM/YYYY HH:mm'
                                                    ),
                                                }),
                                                n.tZ(o.x, {
                                                    className: 'ml-auto',
                                                    children: e.status,
                                                }),
                                            ],
                                        }),
                                    },
                                    e.id
                                )
                            ),
                        ],
                    })
                }
            },
            8801: (e, t, r) => {
                'use strict'
                r.d(t, { Z: () => c })
                var n = r(38584),
                    s = r(26269),
                    a = r.n(s),
                    i = r(80476)
                let o = r(61406).$ ? 'flex flex-col relative z-0' : '',
                    u = (0, i.D)({
                        base: o,
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
                    c = a().forwardRef(
                        (
                            {
                                className: e,
                                size: t = 'md',
                                variant: r = 'elevated',
                                ...s
                            },
                            a
                        ) =>
                            n.tZ('div', {
                                className: u({ size: t, variant: r, class: e }),
                                ...s,
                                ref: a,
                            })
                    )
                c.displayName = 'Card'
            },
            2974: function (e) {
                var t
                ;(t = function () {
                    'use strict'
                    var e = 'millisecond',
                        t = 'second',
                        r = 'minute',
                        n = 'hour',
                        s = 'week',
                        a = 'month',
                        i = 'quarter',
                        o = 'year',
                        u = 'date',
                        c = 'Invalid Date',
                        d =
                            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                        l =
                            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        h = function (e, t, r) {
                            var n = String(e)
                            return !n || n.length >= t
                                ? e
                                : '' + Array(t + 1 - n.length).join(r) + e
                        },
                        f = 'en',
                        m = {}
                    m[f] = {
                        name: 'en',
                        weekdays:
                            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
                                '_'
                            ),
                        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                            '_'
                        ),
                        ordinal: function (e) {
                            var t = ['th', 'st', 'nd', 'rd'],
                                r = e % 100
                            return (
                                '[' +
                                e +
                                (t[(r - 20) % 10] || t[r] || 'th') +
                                ']'
                            )
                        },
                    }
                    var p = '$isDayjsObject',
                        $ = function (e) {
                            return e instanceof y || !(!e || !e[p])
                        },
                        v = function e(t, r, n) {
                            var s
                            if (!t) return f
                            if ('string' == typeof t) {
                                var a = t.toLowerCase()
                                m[a] && (s = a), r && ((m[a] = r), (s = a))
                                var i = t.split('-')
                                if (!s && i.length > 1) return e(i[0])
                            } else {
                                var o = t.name
                                ;(m[o] = t), (s = o)
                            }
                            return !n && s && (f = s), s || (!n && f)
                        },
                        b = function (e, t) {
                            if ($(e)) return e.clone()
                            var r = 'object' == typeof t ? t : {}
                            return (r.date = e), (r.args = arguments), new y(r)
                        },
                        g = {
                            s: h,
                            z: function (e) {
                                var t = -e.utcOffset(),
                                    r = Math.abs(t)
                                return (
                                    (t <= 0 ? '+' : '-') +
                                    h(Math.floor(r / 60), 2, '0') +
                                    ':' +
                                    h(r % 60, 2, '0')
                                )
                            },
                            m: function e(t, r) {
                                if (t.date() < r.date()) return -e(r, t)
                                var n =
                                        12 * (r.year() - t.year()) +
                                        (r.month() - t.month()),
                                    s = t.clone().add(n, a),
                                    i = r - s < 0,
                                    o = t.clone().add(n + (i ? -1 : 1), a)
                                return +(
                                    -(n + (r - s) / (i ? s - o : o - s)) || 0
                                )
                            },
                            a: function (e) {
                                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                            },
                            p: function (c) {
                                return (
                                    {
                                        M: a,
                                        y: o,
                                        w: s,
                                        d: 'day',
                                        D: u,
                                        h: n,
                                        m: r,
                                        s: t,
                                        ms: e,
                                        Q: i,
                                    }[c] ||
                                    String(c || '')
                                        .toLowerCase()
                                        .replace(/s$/, '')
                                )
                            },
                            u: function (e) {
                                return void 0 === e
                            },
                        }
                    ;(g.l = v),
                        (g.i = $),
                        (g.w = function (e, t) {
                            return b(e, {
                                locale: t.$L,
                                utc: t.$u,
                                x: t.$x,
                                $offset: t.$offset,
                            })
                        })
                    var y = (function () {
                            function h(e) {
                                ;(this.$L = v(e.locale, null, !0)),
                                    this.parse(e),
                                    (this.$x = this.$x || e.x || {}),
                                    (this[p] = !0)
                            }
                            var f = h.prototype
                            return (
                                (f.parse = function (e) {
                                    ;(this.$d = (function (e) {
                                        var t = e.date,
                                            r = e.utc
                                        if (null === t) return new Date(NaN)
                                        if (g.u(t)) return new Date()
                                        if (t instanceof Date)
                                            return new Date(t)
                                        if (
                                            'string' == typeof t &&
                                            !/Z$/i.test(t)
                                        ) {
                                            var n = t.match(d)
                                            if (n) {
                                                var s = n[2] - 1 || 0,
                                                    a = (n[7] || '0').substring(
                                                        0,
                                                        3
                                                    )
                                                return r
                                                    ? new Date(
                                                          Date.UTC(
                                                              n[1],
                                                              s,
                                                              n[3] || 1,
                                                              n[4] || 0,
                                                              n[5] || 0,
                                                              n[6] || 0,
                                                              a
                                                          )
                                                      )
                                                    : new Date(
                                                          n[1],
                                                          s,
                                                          n[3] || 1,
                                                          n[4] || 0,
                                                          n[5] || 0,
                                                          n[6] || 0,
                                                          a
                                                      )
                                            }
                                        }
                                        return new Date(t)
                                    })(e)),
                                        this.init()
                                }),
                                (f.init = function () {
                                    var e = this.$d
                                    ;(this.$y = e.getFullYear()),
                                        (this.$M = e.getMonth()),
                                        (this.$D = e.getDate()),
                                        (this.$W = e.getDay()),
                                        (this.$H = e.getHours()),
                                        (this.$m = e.getMinutes()),
                                        (this.$s = e.getSeconds()),
                                        (this.$ms = e.getMilliseconds())
                                }),
                                (f.$utils = function () {
                                    return g
                                }),
                                (f.isValid = function () {
                                    return this.$d.toString() !== c
                                }),
                                (f.isSame = function (e, t) {
                                    var r = b(e)
                                    return (
                                        this.startOf(t) <= r &&
                                        r <= this.endOf(t)
                                    )
                                }),
                                (f.isAfter = function (e, t) {
                                    return b(e) < this.startOf(t)
                                }),
                                (f.isBefore = function (e, t) {
                                    return this.endOf(t) < b(e)
                                }),
                                (f.$g = function (e, t, r) {
                                    return g.u(e) ? this[t] : this.set(r, e)
                                }),
                                (f.unix = function () {
                                    return Math.floor(this.valueOf() / 1e3)
                                }),
                                (f.valueOf = function () {
                                    return this.$d.getTime()
                                }),
                                (f.startOf = function (e, i) {
                                    var c = this,
                                        d = !!g.u(i) || i,
                                        l = g.p(e),
                                        h = function (e, t) {
                                            var r = g.w(
                                                c.$u
                                                    ? Date.UTC(c.$y, t, e)
                                                    : new Date(c.$y, t, e),
                                                c
                                            )
                                            return d ? r : r.endOf('day')
                                        },
                                        f = function (e, t) {
                                            return g.w(
                                                c
                                                    .toDate()
                                                    [
                                                        e
                                                    ].apply(c.toDate('s'), (d ? [0,
                                                                  0, 0, 0] : [23,
                                                                  59, 59, 999]).slice(t)),
                                                c
                                            )
                                        },
                                        m = this.$W,
                                        p = this.$M,
                                        $ = this.$D,
                                        v = 'set' + (this.$u ? 'UTC' : '')
                                    switch (l) {
                                        case o:
                                            return d ? h(1, 0) : h(31, 11)
                                        case a:
                                            return d ? h(1, p) : h(0, p + 1)
                                        case s:
                                            var b =
                                                    this.$locale().weekStart ||
                                                    0,
                                                y = (m < b ? m + 7 : m) - b
                                            return h(d ? $ - y : $ + (6 - y), p)
                                        case 'day':
                                        case u:
                                            return f(v + 'Hours', 0)
                                        case n:
                                            return f(v + 'Minutes', 1)
                                        case r:
                                            return f(v + 'Seconds', 2)
                                        case t:
                                            return f(v + 'Milliseconds', 3)
                                        default:
                                            return this.clone()
                                    }
                                }),
                                (f.endOf = function (e) {
                                    return this.startOf(e, !1)
                                }),
                                (f.$set = function (s, i) {
                                    var c,
                                        d = g.p(s),
                                        l = 'set' + (this.$u ? 'UTC' : ''),
                                        h = (((c = {}).day = l + 'Date'),
                                        (c[u] = l + 'Date'),
                                        (c[a] = l + 'Month'),
                                        (c[o] = l + 'FullYear'),
                                        (c[n] = l + 'Hours'),
                                        (c[r] = l + 'Minutes'),
                                        (c[t] = l + 'Seconds'),
                                        (c[e] = l + 'Milliseconds'),
                                        c)[d],
                                        f =
                                            'day' === d
                                                ? this.$D + (i - this.$W)
                                                : i
                                    if (d === a || d === o) {
                                        var m = this.clone().set(u, 1)
                                        m.$d[h](f),
                                            m.init(),
                                            (this.$d = m.set(
                                                u,
                                                Math.min(
                                                    this.$D,
                                                    m.daysInMonth()
                                                )
                                            ).$d)
                                    } else h && this.$d[h](f)
                                    return this.init(), this
                                }),
                                (f.set = function (e, t) {
                                    return this.clone().$set(e, t)
                                }),
                                (f.get = function (e) {
                                    return this[g.p(e)]()
                                }),
                                (f.add = function (e, i) {
                                    var u,
                                        c = this
                                    e = Number(e)
                                    var d = g.p(i),
                                        l = function (t) {
                                            var r = b(c)
                                            return g.w(
                                                r.date(
                                                    r.date() + Math.round(t * e)
                                                ),
                                                c
                                            )
                                        }
                                    if (d === a) return this.set(a, this.$M + e)
                                    if (d === o) return this.set(o, this.$y + e)
                                    if ('day' === d) return l(1)
                                    if (d === s) return l(7)
                                    var h =
                                            (((u = {})[r] = 6e4),
                                            (u[n] = 36e5),
                                            (u[t] = 1e3),
                                            u)[d] || 1,
                                        f = this.$d.getTime() + e * h
                                    return g.w(f, this)
                                }),
                                (f.subtract = function (e, t) {
                                    return this.add(-1 * e, t)
                                }),
                                (f.format = function (e) {
                                    var t = this,
                                        r = this.$locale()
                                    if (!this.isValid())
                                        return r.invalidDate || c
                                    var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                                        s = g.z(this),
                                        a = this.$H,
                                        i = this.$m,
                                        o = this.$M,
                                        u = r.weekdays,
                                        d = r.months,
                                        h = r.meridiem,
                                        f = function (e, r, s, a) {
                                            return (
                                                (e && (e[r] || e(t, n))) ||
                                                s[r].slice(0, a)
                                            )
                                        },
                                        m = function (e) {
                                            return g.s(a % 12 || 12, e, '0')
                                        },
                                        p =
                                            h ||
                                            function (e, t, r) {
                                                var n = e < 12 ? 'AM' : 'PM'
                                                return r ? n.toLowerCase() : n
                                            }
                                    return n.replace(l, function (e, n) {
                                        return (
                                            n ||
                                            (function (e) {
                                                switch (e) {
                                                    case 'YY':
                                                        return String(
                                                            t.$y
                                                        ).slice(-2)
                                                    case 'YYYY':
                                                        return g.s(t.$y, 4, '0')
                                                    case 'M':
                                                        return o + 1
                                                    case 'MM':
                                                        return g.s(
                                                            o + 1,
                                                            2,
                                                            '0'
                                                        )
                                                    case 'MMM':
                                                        return f(
                                                            r.monthsShort,
                                                            o,
                                                            d,
                                                            3
                                                        )
                                                    case 'MMMM':
                                                        return f(d, o)
                                                    case 'D':
                                                        return t.$D
                                                    case 'DD':
                                                        return g.s(t.$D, 2, '0')
                                                    case 'd':
                                                        return String(t.$W)
                                                    case 'dd':
                                                        return f(
                                                            r.weekdaysMin,
                                                            t.$W,
                                                            u,
                                                            2
                                                        )
                                                    case 'ddd':
                                                        return f(
                                                            r.weekdaysShort,
                                                            t.$W,
                                                            u,
                                                            3
                                                        )
                                                    case 'dddd':
                                                        return u[t.$W]
                                                    case 'H':
                                                        return String(a)
                                                    case 'HH':
                                                        return g.s(a, 2, '0')
                                                    case 'h':
                                                        return m(1)
                                                    case 'hh':
                                                        return m(2)
                                                    case 'a':
                                                        return p(a, i, !0)
                                                    case 'A':
                                                        return p(a, i, !1)
                                                    case 'm':
                                                        return String(i)
                                                    case 'mm':
                                                        return g.s(i, 2, '0')
                                                    case 's':
                                                        return String(t.$s)
                                                    case 'ss':
                                                        return g.s(t.$s, 2, '0')
                                                    case 'SSS':
                                                        return g.s(
                                                            t.$ms,
                                                            3,
                                                            '0'
                                                        )
                                                    case 'Z':
                                                        return s
                                                }
                                                return null
                                            })(e) ||
                                            s.replace(':', '')
                                        )
                                    })
                                }),
                                (f.utcOffset = function () {
                                    return -(
                                        15 *
                                        Math.round(
                                            this.$d.getTimezoneOffset() / 15
                                        )
                                    )
                                }),
                                (f.diff = function (e, u, c) {
                                    var d,
                                        l = this,
                                        h = g.p(u),
                                        f = b(e),
                                        m =
                                            (f.utcOffset() - this.utcOffset()) *
                                            6e4,
                                        p = this - f,
                                        $ = function () {
                                            return g.m(l, f)
                                        }
                                    switch (h) {
                                        case o:
                                            d = $() / 12
                                            break
                                        case a:
                                            d = $()
                                            break
                                        case i:
                                            d = $() / 3
                                            break
                                        case s:
                                            d = (p - m) / 6048e5
                                            break
                                        case 'day':
                                            d = (p - m) / 864e5
                                            break
                                        case n:
                                            d = p / 36e5
                                            break
                                        case r:
                                            d = p / 6e4
                                            break
                                        case t:
                                            d = p / 1e3
                                            break
                                        default:
                                            d = p
                                    }
                                    return c ? d : g.a(d)
                                }),
                                (f.daysInMonth = function () {
                                    return this.endOf(a).$D
                                }),
                                (f.$locale = function () {
                                    return m[this.$L]
                                }),
                                (f.locale = function (e, t) {
                                    if (!e) return this.$L
                                    var r = this.clone(),
                                        n = v(e, t, !0)
                                    return n && (r.$L = n), r
                                }),
                                (f.clone = function () {
                                    return g.w(this.$d, this)
                                }),
                                (f.toDate = function () {
                                    return new Date(this.valueOf())
                                }),
                                (f.toJSON = function () {
                                    return this.isValid()
                                        ? this.toISOString()
                                        : null
                                }),
                                (f.toISOString = function () {
                                    return this.$d.toISOString()
                                }),
                                (f.toString = function () {
                                    return this.$d.toUTCString()
                                }),
                                h
                            )
                        })(),
                        M = y.prototype
                    return (
                        (b.prototype = M),
                        [
                            ['$ms', e],
                            ['$s', t],
                            ['$m', r],
                            ['$H', n],
                            ['$W', 'day'],
                            ['$M', a],
                            ['$y', o],
                            ['$D', u],
                        ].forEach(function (e) {
                            M[e[1]] = function (t) {
                                return this.$g(t, e[0], e[1])
                            }
                        }),
                        (b.extend = function (e, t) {
                            return e.$i || (e(t, y, b), (e.$i = !0)), b
                        }),
                        (b.locale = v),
                        (b.isDayjs = $),
                        (b.unix = function (e) {
                            return b(1e3 * e)
                        }),
                        (b.en = m[f]),
                        (b.Ls = m),
                        (b.p = {}),
                        b
                    )
                }),
                    (e.exports = t())
            },
        })
    var t = require('../../../webpack-runtime.js')
    t.C(e)
    var r = (e) => t((t.s = e)),
        n = t.X(0, [379, 895, 346, 130, 945, 955, 283], () => r(41858))
    module.exports = n
})()

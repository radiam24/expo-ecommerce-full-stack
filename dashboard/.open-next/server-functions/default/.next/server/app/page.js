;(() => {
    var e = {}
    ;(e.id = 931),
        (e.ids = [931]),
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
            99082: (e, t, r) => {
                'use strict'
                r.r(t),
                    r.d(t, {
                        GlobalError: () => i.a,
                        __next_app__: () => p,
                        originalPathname: () => u,
                        pages: () => c,
                        routeModule: () => f,
                        tree: () => d,
                    }),
                    r(48646),
                    r(73210),
                    r(90996)
                var a = r(30170),
                    n = r(45002),
                    o = r(83876),
                    i = r.n(o),
                    s = r(66299),
                    l = {}
                for (let e in s)
                    0 >
                        [
                            'default',
                            'tree',
                            'pages',
                            'GlobalError',
                            'originalPathname',
                            '__next_app__',
                            'routeModule',
                        ].indexOf(e) && (l[e] = () => s[e])
                r.d(t, l)
                let d = [
                        '',
                        {
                            children: [
                                '__PAGE__',
                                {},
                                {
                                    page: [
                                        () =>
                                            Promise.resolve().then(
                                                r.bind(r, 48646)
                                            ),
                                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/page.tsx',
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
                    c = [
                        '/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/page.tsx',
                    ],
                    u = '/page',
                    p = { require: r, loadChunk: () => Promise.resolve() },
                    f = new a.AppPageRouteModule({
                        definition: {
                            kind: n.x.APP_PAGE,
                            page: '/page',
                            pathname: '/',
                            bundlePath: '',
                            filename: '',
                            appPaths: [],
                        },
                        userland: { loaderTree: d },
                    })
            },
            41752: (e, t, r) => {
                Promise.resolve().then(r.bind(r, 86960))
            },
            86960: (e, t, r) => {
                'use strict'
                r.r(t), r.d(t, { default: () => s })
                var a = r(21493),
                    n = r(89735),
                    o = r(91561),
                    i = r.n(o)
                function s() {
                    return (0, a.jsxs)('div', {
                        className:
                            'bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]',
                        children: [
                            (0, a.jsxs)('main', {
                                className:
                                    'flex flex-col gap-8 row-start-2 items-center sm:items-start',
                                children: [
                                    a.jsx(n.zx, {
                                        children: a.jsx(n.oD, {
                                            children: 'Click me',
                                        }),
                                    }),
                                    a.jsx(i(), {
                                        className: 'dark:invert',
                                        src: 'https://nextjs.org/icons/next.svg',
                                        alt: 'Next.js logo',
                                        width: 180,
                                        height: 38,
                                        priority: !0,
                                    }),
                                    (0, a.jsxs)('ol', {
                                        className:
                                            'list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]',
                                        children: [
                                            (0, a.jsxs)('li', {
                                                className: 'mb-2',
                                                children: [
                                                    'Get started by editing',
                                                    ' ',
                                                    a.jsx('code', {
                                                        className:
                                                            'bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold',
                                                        children:
                                                            'app/page.tsx',
                                                    }),
                                                    '.',
                                                ],
                                            }),
                                            a.jsx('li', {
                                                children:
                                                    'Save and see your changes instantly.',
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)('div', {
                                        className:
                                            'flex gap-4 items-center flex-col sm:flex-row',
                                        children: [
                                            (0, a.jsxs)('a', {
                                                className:
                                                    'rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5',
                                                href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                                children: [
                                                    a.jsx(i(), {
                                                        className:
                                                            'dark:invert',
                                                        src: 'https://nextjs.org/icons/vercel.svg',
                                                        alt: 'Vercel logomark',
                                                        width: 20,
                                                        height: 20,
                                                    }),
                                                    'Deploy now',
                                                ],
                                            }),
                                            a.jsx('a', {
                                                className:
                                                    'rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44',
                                                href: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                                children: 'Read our docs',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)('footer', {
                                className:
                                    'row-start-3 flex gap-6 flex-wrap items-center justify-center',
                                children: [
                                    (0, a.jsxs)('a', {
                                        className:
                                            'flex items-center gap-2 hover:underline hover:underline-offset-4',
                                        href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                        children: [
                                            a.jsx(i(), {
                                                'aria-hidden': !0,
                                                src: 'https://nextjs.org/icons/file.svg',
                                                alt: 'File icon',
                                                width: 16,
                                                height: 16,
                                            }),
                                            'Learn',
                                        ],
                                    }),
                                    (0, a.jsxs)('a', {
                                        className:
                                            'flex items-center gap-2 hover:underline hover:underline-offset-4',
                                        href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                        children: [
                                            a.jsx(i(), {
                                                'aria-hidden': !0,
                                                src: 'https://nextjs.org/icons/window.svg',
                                                alt: 'Window icon',
                                                width: 16,
                                                height: 16,
                                            }),
                                            'Examples',
                                        ],
                                    }),
                                    (0, a.jsxs)('a', {
                                        className:
                                            'flex items-center gap-2 hover:underline hover:underline-offset-4',
                                        href: 'https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                        children: [
                                            a.jsx(i(), {
                                                'aria-hidden': !0,
                                                src: 'https://nextjs.org/icons/globe.svg',
                                                alt: 'Globe icon',
                                                width: 16,
                                                height: 16,
                                            }),
                                            'Go to nextjs.org →',
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                }
            },
            89735: (e, t, r) => {
                'use strict'
                r.d(t, { oD: () => C, zx: () => k })
                var a = r(21493),
                    n = r(28964),
                    o = r.n(n),
                    i = r(99088),
                    s = r(93539),
                    l = r(41495),
                    d = r(48327),
                    c = r(7178),
                    u = r(83281),
                    p = r(98388),
                    f = r(53484),
                    m = r(1970),
                    g = r(66567),
                    h = r(91320),
                    v = r(86800)
                let x = 'BUTTON',
                    y = o().forwardRef(({ ...e }, t) =>
                        a.jsx(f.Z, { ...e, ref: t })
                    ),
                    b = o().forwardRef(
                        (
                            {
                                height: e,
                                width: t,
                                fill: r,
                                color: o,
                                classNameColor: i,
                                size: l,
                                stroke: d = 'currentColor',
                                as: c,
                                ...u
                            },
                            p
                        ) => {
                            o = o ?? i
                            let f = (0, n.useMemo)(
                                    () =>
                                        l
                                            ? { size: l }
                                            : e && t
                                              ? { height: e, width: t }
                                              : e
                                                ? { height: e }
                                                : t
                                                  ? { width: t }
                                                  : {},
                                    [l, e, t]
                                ),
                                m = {}
                            return (r && (m = { ...m, fill: r }),
                            'currentColor' !== d
                                ? (m = { ...m, stroke: d })
                                : 'currentColor' === d &&
                                  void 0 !== o &&
                                  (m = { ...m, stroke: o }),
                            c)
                                ? a.jsx(c, { ref: p, ...u, ...f, ...m })
                                : a.jsx(s.Svg, {
                                      ref: p,
                                      height: e,
                                      width: t,
                                      ...m,
                                      ...u,
                                  })
                        }
                    ),
                    w = 'web' === m.Z.OS ? (0, d.a)(y, x) : (0, c.W)(y, x),
                    j = (0, i.a)({
                        Root: w,
                        Text: g.Z,
                        Group: h.Z,
                        Spinner: v.Z,
                        Icon: (0, p.v)(b),
                    })
                ;(0, u.BO)(w, { className: 'style' }),
                    (0, u.BO)(j.Text, { className: 'style' }),
                    (0, u.BO)(j.Group, { className: 'style' }),
                    (0, u.BO)(j.Spinner, {
                        className: {
                            target: 'style',
                            nativeStyleToProp: { color: !0 },
                        },
                    }),
                    (0, u.BO)(b, {
                        className: {
                            target: 'style',
                            nativeStyleToProp: {
                                height: !0,
                                width: !0,
                                fill: !0,
                                color: 'classNameColor',
                                stroke: !0,
                            },
                        },
                    })
                let _ = (0, l.D)({
                        base: 'group/button rounded bg-primary-500 flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40 gap-2',
                        variants: {
                            action: {
                                primary:
                                    'bg-primary-500 data-[hover=true]:bg-primary-600 data-[active=true]:bg-primary-700 border-primary-300 data-[hover=true]:border-primary-400 data-[active=true]:border-primary-500 data-[focus-visible=true]:web:ring-indicator-info',
                                secondary:
                                    'bg-secondary-500 border-secondary-300 data-[hover=true]:bg-secondary-600 data-[hover=true]:border-secondary-400 data-[active=true]:bg-secondary-700 data-[active=true]:border-secondary-500 data-[focus-visible=true]:web:ring-indicator-info',
                                positive:
                                    'bg-success-500 border-success-300 data-[hover=true]:bg-success-600 data-[hover=true]:border-success-400 data-[active=true]:bg-success-700 data-[active=true]:border-success-500 data-[focus-visible=true]:web:ring-indicator-info',
                                negative:
                                    'bg-error-500 border-error-300 data-[hover=true]:bg-error-600 data-[hover=true]:border-error-400 data-[active=true]:bg-error-700 data-[active=true]:border-error-500 data-[focus-visible=true]:web:ring-indicator-info',
                                default:
                                    'bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
                            },
                            variant: {
                                link: 'px-0',
                                outline:
                                    'bg-transparent border data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
                                solid: '',
                            },
                            size: {
                                xs: 'px-3.5 h-8',
                                sm: 'px-4 h-9',
                                md: 'px-5 h-10',
                                lg: 'px-6 h-11',
                                xl: 'px-7 h-12',
                            },
                        },
                        compoundVariants: [
                            {
                                action: 'primary',
                                variant: 'link',
                                class: 'px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent',
                            },
                            {
                                action: 'secondary',
                                variant: 'link',
                                class: 'px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent',
                            },
                            {
                                action: 'positive',
                                variant: 'link',
                                class: 'px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent',
                            },
                            {
                                action: 'negative',
                                variant: 'link',
                                class: 'px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent',
                            },
                            {
                                action: 'primary',
                                variant: 'outline',
                                class: 'bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
                            },
                            {
                                action: 'secondary',
                                variant: 'outline',
                                class: 'bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
                            },
                            {
                                action: 'positive',
                                variant: 'outline',
                                class: 'bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
                            },
                            {
                                action: 'negative',
                                variant: 'outline',
                                class: 'bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
                            },
                        ],
                    }),
                    P = (0, l.D)({
                        base: 'text-typography-0 font-semibold web:select-none',
                        parentVariants: {
                            action: {
                                primary:
                                    'text-primary-600 data-[hover=true]:text-primary-600 data-[active=true]:text-primary-700',
                                secondary:
                                    'text-secondary-600 data-[hover=true]:text-secondary-600 data-[active=true]:text-secondary-700',
                                positive:
                                    'text-success-600 data-[hover=true]:text-success-600 data-[active=true]:text-success-700',
                                negative:
                                    'text-error-600 data-[hover=true]:text-error-600 data-[active=true]:text-error-700',
                            },
                            variant: {
                                link: 'data-[hover=true]:underline data-[active=true]:underline',
                                outline: '',
                                solid: 'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
                            },
                            size: {
                                xs: 'text-xs',
                                sm: 'text-sm',
                                md: 'text-base',
                                lg: 'text-lg',
                                xl: 'text-xl',
                            },
                        },
                        parentCompoundVariants: [
                            {
                                variant: 'solid',
                                action: 'primary',
                                class: 'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
                            },
                            {
                                variant: 'solid',
                                action: 'secondary',
                                class: 'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
                            },
                            {
                                variant: 'solid',
                                action: 'positive',
                                class: 'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
                            },
                            {
                                variant: 'solid',
                                action: 'negative',
                                class: 'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
                            },
                            {
                                variant: 'outline',
                                action: 'primary',
                                class: 'text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500',
                            },
                            {
                                variant: 'outline',
                                action: 'secondary',
                                class: 'text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500',
                            },
                            {
                                variant: 'outline',
                                action: 'positive',
                                class: 'text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500',
                            },
                            {
                                variant: 'outline',
                                action: 'negative',
                                class: 'text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500',
                            },
                        ],
                    }),
                    S = (0, l.D)({
                        base: 'fill-none',
                        parentVariants: {
                            variant: {
                                link: 'data-[hover=true]:underline data-[active=true]:underline',
                                outline: '',
                                solid: 'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
                            },
                            size: {
                                xs: 'h-3.5 w-3.5',
                                sm: 'h-4 w-4',
                                md: 'h-[18px] w-[18px]',
                                lg: 'h-[18px] w-[18px]',
                                xl: 'h-5 w-5',
                            },
                            action: {
                                primary:
                                    'text-primary-600 data-[hover=true]:text-primary-600 data-[active=true]:text-primary-700',
                                secondary:
                                    'text-secondary-600 data-[hover=true]:text-secondary-600 data-[active=true]:text-secondary-700',
                                positive:
                                    'text-success-600 data-[hover=true]:text-success-600 data-[active=true]:text-success-700',
                                negative:
                                    'text-error-600 data-[hover=true]:text-error-600 data-[active=true]:text-error-700',
                            },
                        },
                        parentCompoundVariants: [
                            {
                                variant: 'solid',
                                action: 'primary',
                                class: 'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
                            },
                            {
                                variant: 'solid',
                                action: 'secondary',
                                class: 'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
                            },
                            {
                                variant: 'solid',
                                action: 'positive',
                                class: 'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
                            },
                            {
                                variant: 'solid',
                                action: 'negative',
                                class: 'text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0',
                            },
                        ],
                    }),
                    O = (0, l.D)({
                        base: '',
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
                            isAttached: { true: 'gap-0' },
                        },
                    }),
                    k = o().forwardRef(
                        (
                            {
                                className: e,
                                variant: t = 'solid',
                                size: r = 'md',
                                action: n = 'primary',
                                ...o
                            },
                            i
                        ) =>
                            a.jsx(j, {
                                ref: i,
                                ...o,
                                className: _({
                                    variant: t,
                                    size: r,
                                    action: n,
                                    class: e,
                                }),
                                context: { variant: t, size: r, action: n },
                            })
                    ),
                    C = o().forwardRef(
                        (
                            {
                                className: e,
                                variant: t,
                                size: r,
                                action: n,
                                ...o
                            },
                            i
                        ) => {
                            let { variant: s, size: l, action: c } = (0, d.y)(x)
                            return a.jsx(j.Text, {
                                ref: i,
                                ...o,
                                className: P({
                                    parentVariants: {
                                        variant: s,
                                        size: l,
                                        action: c,
                                    },
                                    variant: t,
                                    size: r,
                                    action: n,
                                    class: e,
                                }),
                            })
                        }
                    ),
                    E = j.Spinner,
                    N = o().forwardRef(({ className: e, size: t, ...r }, n) => {
                        let { variant: o, size: i, action: s } = (0, d.y)(x)
                        return 'number' == typeof t
                            ? a.jsx(j.Icon, {
                                  ref: n,
                                  ...r,
                                  className: S({ class: e }),
                                  size: t,
                              })
                            : (void 0 !== r.height || void 0 !== r.width) &&
                                void 0 === t
                              ? a.jsx(j.Icon, {
                                    ref: n,
                                    ...r,
                                    className: S({ class: e }),
                                })
                              : a.jsx(j.Icon, {
                                    ...r,
                                    className: S({
                                        parentVariants: {
                                            size: i,
                                            variant: o,
                                            action: s,
                                        },
                                        size: t,
                                        class: e,
                                    }),
                                    ref: n,
                                })
                    }),
                    R = o().forwardRef(
                        (
                            {
                                className: e,
                                space: t = 'md',
                                isAttached: r = !1,
                                ...n
                            },
                            o
                        ) =>
                            a.jsx(j.Group, {
                                className: O({
                                    class: e,
                                    space: t,
                                    isAttached: r,
                                }),
                                ...n,
                                ref: o,
                            })
                    )
                ;(k.displayName = 'Button'),
                    (C.displayName = 'ButtonText'),
                    (E.displayName = 'ButtonSpinner'),
                    (N.displayName = 'ButtonIcon'),
                    (R.displayName = 'ButtonGroup')
            },
            99088: (e, t, r) => {
                'use strict'
                r.d(t, { a: () => b })
                var a = r(1887),
                    n = r(28964),
                    o = r.n(n),
                    i = r(78152),
                    s = r(33694)
                let l = (0, n.createContext)({}),
                    d = () => (0, n.useContext)(l)
                function c() {
                    return (c = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t]
                                  for (var a in r)
                                      Object.prototype.hasOwnProperty.call(
                                          r,
                                          a
                                      ) && (e[a] = r[a])
                              }
                              return e
                          }).apply(this, arguments)
                }
                let u = (e) =>
                    (0, n.forwardRef)(
                        (
                            {
                                children: t,
                                isDisabled: r,
                                isHovered: d,
                                isPressed: u,
                                isFocused: p,
                                isFocusVisible: f,
                                ...m
                            },
                            g
                        ) => {
                            let { isFocusVisible: h, focusProps: v } = (0,
                                a.Fx)(),
                                { pressProps: x, isPressed: y } = (0, s.r7)({
                                    isDisabled: r,
                                }),
                                { isFocused: b, focusProps: w } = (0, a.KK)(),
                                { isHovered: j, hoverProps: _ } = (0, s.XI)(),
                                P = (0, n.useMemo)(
                                    () => ({
                                        hover: d || j,
                                        focus: p || b,
                                        active: u || y,
                                        disabled: r,
                                        focusVisible: f || h,
                                    }),
                                    [j, d, b, p, y, u, r, h, f]
                                )
                            return o().createElement(
                                l.Provider,
                                { value: P },
                                o().createElement(
                                    e,
                                    c(
                                        {
                                            ref: g,
                                            role:
                                                (null == m ? void 0 : m.role) ||
                                                'button',
                                            states: {
                                                hover: d || j,
                                                focus: p || b,
                                                active: u || y,
                                                disabled: r,
                                                focusVisible: f || h,
                                            },
                                            dataSet: {
                                                hover:
                                                    d || j ? 'true' : 'false',
                                                focus:
                                                    p || b ? 'true' : 'false',
                                                active:
                                                    u || y ? 'true' : 'false',
                                                disabled: r ? 'true' : 'false',
                                                focusVisible:
                                                    f || h ? 'true' : 'false',
                                            },
                                            disabled: r,
                                        },
                                        m,
                                        {
                                            onPressIn: (0, i.Mj)(
                                                null == m
                                                    ? void 0
                                                    : m.onPressIn,
                                                x.onPressIn
                                            ),
                                            onPressOut: (0, i.Mj)(
                                                null == m
                                                    ? void 0
                                                    : m.onPressOut,
                                                x.onPressOut
                                            ),
                                            onHoverIn: (0, i.Mj)(
                                                null == m
                                                    ? void 0
                                                    : m.onHoverIn,
                                                _.onHoverIn
                                            ),
                                            onHoverOut: (0, i.Mj)(
                                                null == m
                                                    ? void 0
                                                    : m.onHoverOut,
                                                _.onHoverOut
                                            ),
                                            onFocus: (0, i.Mj)(
                                                (0, i.Mj)(
                                                    null == m
                                                        ? void 0
                                                        : m.onFocus,
                                                    w.onFocus
                                                ),
                                                v.onFocus
                                            ),
                                            onBlur: (0, i.Mj)(
                                                (0, i.Mj)(
                                                    null == m
                                                        ? void 0
                                                        : m.onBlur,
                                                    w.onBlur
                                                ),
                                                v.onBlur
                                            ),
                                        }
                                    ),
                                    'function' == typeof t
                                        ? t({
                                              hovered: j,
                                              focused: b,
                                              pressed: y,
                                              disabled: m.disabled ?? void 0,
                                              focusVisible: h,
                                          })
                                        : t
                                )
                            )
                        }
                    )
                function p() {
                    return (p = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t]
                                  for (var a in r)
                                      Object.prototype.hasOwnProperty.call(
                                          r,
                                          a
                                      ) && (e[a] = r[a])
                              }
                              return e
                          }).apply(this, arguments)
                }
                let f = (e) =>
                    (0, n.forwardRef)(
                        (
                            {
                                flexDirection: t = 'row',
                                isAttached: r,
                                isDisabled: a,
                                children: n,
                                isReversed: s,
                                reversed: l,
                                ...d
                            },
                            c
                        ) => {
                            let u
                            let f = t.includes('reverse')
                                    ? 'column-reverse' === t
                                        ? 'column'
                                        : 'row'
                                    : t,
                                m = o().Children.toArray((0, i.Iz)(n))
                            return ((m = s || l ? [...m].reverse() : m) &&
                                (u = m.map((e, t) => {
                                    if (
                                        'string' == typeof e ||
                                        'number' == typeof e
                                    )
                                        return e
                                    let i = {}
                                    0 === t
                                        ? ('column' === f
                                              ? (i.borderBottomLeftRadius = 0)
                                              : (i.borderTopRightRadius = 0),
                                          (i.borderBottomRightRadius = 0))
                                        : t ===
                                            (null == n ? void 0 : n.length) - 1
                                          ? 'column' === f
                                              ? ((i.borderTopLeftRadius = 0),
                                                (i.borderTopRightRadius = 0))
                                              : ((i.borderTopLeftRadius = 0),
                                                (i.borderBottomLeftRadius = 0))
                                          : (i.borderRadius = 0)
                                    let s = {
                                            isDisabled: a,
                                            ...e.props,
                                            style: {
                                                ...(r ? i : {}),
                                                ...e.props.style,
                                            },
                                        },
                                        l = o().cloneElement(e, { ...s })
                                    return o().createElement(
                                        o().Fragment,
                                        { key: e.key ?? `spaced-child-${t}` },
                                        l
                                    )
                                })),
                            u)
                                ? o().createElement(
                                      e,
                                      p(
                                          { flexDirection: t },
                                          d,
                                          { ref: c },
                                          r ? { gap: 0 } : {}
                                      ),
                                      u
                                  )
                                : null
                        }
                    )
                function m() {
                    return (m = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t]
                                  for (var a in r)
                                      Object.prototype.hasOwnProperty.call(
                                          r,
                                          a
                                      ) && (e[a] = r[a])
                              }
                              return e
                          }).apply(this, arguments)
                }
                let g = (e) =>
                    (0, n.forwardRef)(({ children: t, ...r }, a) => {
                        let {
                            hover: n,
                            focus: i,
                            active: s,
                            disabled: l,
                            focusVisible: c,
                        } = d()
                        return o().createElement(
                            e,
                            m({ ref: a }, r, {
                                states: {
                                    hover: n,
                                    focus: i,
                                    active: s,
                                    disabled: l,
                                    focusVisible: c,
                                },
                                dataSet: {
                                    hover: n,
                                    focus: i,
                                    active: s,
                                    disabled: l,
                                    focusVisible: c,
                                },
                            }),
                            t
                        )
                    })
                function h() {
                    return (h = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t]
                                  for (var a in r)
                                      Object.prototype.hasOwnProperty.call(
                                          r,
                                          a
                                      ) && (e[a] = r[a])
                              }
                              return e
                          }).apply(this, arguments)
                }
                let v = (e) =>
                    (0, n.forwardRef)((t, r) => {
                        let {
                            hover: a,
                            focus: n,
                            active: i,
                            disabled: s,
                            focusVisible: l,
                        } = d()
                        return o().createElement(
                            e,
                            h({}, t, {
                                tabIndex: 0,
                                'aria-label': 'loading',
                                ref: r,
                                dataSet: {
                                    hover: a,
                                    focus: n,
                                    active: i,
                                    disabled: s,
                                    focusVisible: l,
                                },
                                states: {
                                    hover: a,
                                    focus: n,
                                    active: i,
                                    disabled: s,
                                    focusVisible: l,
                                },
                            })
                        )
                    })
                function x() {
                    return (x = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t]
                                  for (var a in r)
                                      Object.prototype.hasOwnProperty.call(
                                          r,
                                          a
                                      ) && (e[a] = r[a])
                              }
                              return e
                          }).apply(this, arguments)
                }
                let y = (e) =>
                    (0, n.forwardRef)((t, r) => {
                        let {
                            hover: a,
                            focus: n,
                            active: i,
                            disabled: s,
                            focusVisible: l,
                        } = d()
                        return o().createElement(
                            e,
                            x(
                                {
                                    states: {
                                        hover: a,
                                        focus: n,
                                        active: i,
                                        disabled: s,
                                        focusVisible: l,
                                    },
                                },
                                t,
                                { ref: r }
                            )
                        )
                    })
                function b({
                    Root: e,
                    Text: t,
                    Group: r,
                    Spinner: a,
                    Icon: n,
                }) {
                    let o = u(e)
                    return (
                        (o.Text = g(t)),
                        (o.Group = f(r)),
                        (o.Spinner = v(a)),
                        (o.Icon = y(n)),
                        (o.displayName = 'Button'),
                        (o.Text.displayName = 'Button.Text'),
                        (o.Group.displayName = 'Button.Group'),
                        (o.Spinner.displayName = 'Button.Spinner'),
                        (o.Icon.displayName = 'Button.Icon'),
                        o
                    )
                }
            },
            98388: (e, t, r) => {
                'use strict'
                r.d(t, { v: () => i })
                var a = r(28964),
                    n = r.n(a),
                    o = r(60930)
                let i = (e) =>
                    n().forwardRef(({ states: t, className: r, ...a }, i) => {
                        let s = n().useMemo(() => {
                            if (r) return (0, o.UJ)(r, t)
                        }, [r, t])
                        return n().createElement(e, {
                            className: s,
                            ...a,
                            ref: i,
                        })
                    })
            },
            15889: (e, t, r) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    Object.defineProperty(t, 'Image', {
                        enumerable: !0,
                        get: function () {
                            return y
                        },
                    })
                let a = r(20352),
                    n = r(6870),
                    o = r(97247),
                    i = n._(r(28964)),
                    s = a._(r(46817)),
                    l = a._(r(79901)),
                    d = r(44401),
                    c = r(11098),
                    u = r(68127)
                r(78963)
                let p = r(61579),
                    f = a._(r(99857)),
                    m = {
                        deviceSizes: [
                            640, 750, 828, 1080, 1200, 1920, 2048, 3840,
                        ],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: '/_next/image',
                        loader: 'default',
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1,
                    }
                function g(e, t, r, a, n, o, i) {
                    let s = null == e ? void 0 : e.src
                    e &&
                        e['data-loaded-src'] !== s &&
                        ((e['data-loaded-src'] = s),
                        ('decode' in e ? e.decode() : Promise.resolve())
                            .catch(() => {})
                            .then(() => {
                                if (e.parentElement && e.isConnected) {
                                    if (
                                        ('empty' !== t && n(!0),
                                        null == r ? void 0 : r.current)
                                    ) {
                                        let t = new Event('load')
                                        Object.defineProperty(t, 'target', {
                                            writable: !1,
                                            value: e,
                                        })
                                        let a = !1,
                                            n = !1
                                        r.current({
                                            ...t,
                                            nativeEvent: t,
                                            currentTarget: e,
                                            target: e,
                                            isDefaultPrevented: () => a,
                                            isPropagationStopped: () => n,
                                            persist: () => {},
                                            preventDefault: () => {
                                                ;(a = !0), t.preventDefault()
                                            },
                                            stopPropagation: () => {
                                                ;(n = !0), t.stopPropagation()
                                            },
                                        })
                                    }
                                    ;(null == a ? void 0 : a.current) &&
                                        a.current(e)
                                }
                            }))
                }
                function h(e) {
                    return i.use ? { fetchPriority: e } : { fetchpriority: e }
                }
                globalThis.__NEXT_IMAGE_IMPORTED = !0
                let v = (0, i.forwardRef)((e, t) => {
                    let {
                        src: r,
                        srcSet: a,
                        sizes: n,
                        height: s,
                        width: l,
                        decoding: d,
                        className: c,
                        style: u,
                        fetchPriority: p,
                        placeholder: f,
                        loading: m,
                        unoptimized: v,
                        fill: x,
                        onLoadRef: y,
                        onLoadingCompleteRef: b,
                        setBlurComplete: w,
                        setShowAltText: j,
                        sizesInput: _,
                        onLoad: P,
                        onError: S,
                        ...O
                    } = e
                    return (0, o.jsx)('img', {
                        ...O,
                        ...h(p),
                        loading: m,
                        width: l,
                        height: s,
                        decoding: d,
                        'data-nimg': x ? 'fill' : '1',
                        className: c,
                        style: u,
                        sizes: n,
                        srcSet: a,
                        src: r,
                        ref: (0, i.useCallback)(
                            (e) => {
                                t &&
                                    ('function' == typeof t
                                        ? t(e)
                                        : 'object' == typeof t &&
                                          (t.current = e)),
                                    e &&
                                        (S && (e.src = e.src),
                                        e.complete && g(e, f, y, b, w, v, _))
                            },
                            [r, f, y, b, w, S, v, _, t]
                        ),
                        onLoad: (e) => {
                            g(e.currentTarget, f, y, b, w, v, _)
                        },
                        onError: (e) => {
                            j(!0), 'empty' !== f && w(!0), S && S(e)
                        },
                    })
                })
                function x(e) {
                    let { isAppRouter: t, imgAttributes: r } = e,
                        a = {
                            as: 'image',
                            imageSrcSet: r.srcSet,
                            imageSizes: r.sizes,
                            crossOrigin: r.crossOrigin,
                            referrerPolicy: r.referrerPolicy,
                            ...h(r.fetchPriority),
                        }
                    return t && s.default.preload
                        ? (s.default.preload(r.src, a), null)
                        : (0, o.jsx)(l.default, {
                              children: (0, o.jsx)(
                                  'link',
                                  {
                                      rel: 'preload',
                                      href: r.srcSet ? void 0 : r.src,
                                      ...a,
                                  },
                                  '__nimg-' + r.src + r.srcSet + r.sizes
                              ),
                          })
                }
                let y = (0, i.forwardRef)((e, t) => {
                    let r = (0, i.useContext)(p.RouterContext),
                        a = (0, i.useContext)(u.ImageConfigContext),
                        n = (0, i.useMemo)(() => {
                            let e = m || a || c.imageConfigDefault,
                                t = [...e.deviceSizes, ...e.imageSizes].sort(
                                    (e, t) => e - t
                                ),
                                r = e.deviceSizes.sort((e, t) => e - t)
                            return { ...e, allSizes: t, deviceSizes: r }
                        }, [a]),
                        { onLoad: s, onLoadingComplete: l } = e,
                        g = (0, i.useRef)(s)
                    ;(0, i.useEffect)(() => {
                        g.current = s
                    }, [s])
                    let h = (0, i.useRef)(l)
                    ;(0, i.useEffect)(() => {
                        h.current = l
                    }, [l])
                    let [y, b] = (0, i.useState)(!1),
                        [w, j] = (0, i.useState)(!1),
                        { props: _, meta: P } = (0, d.getImgProps)(e, {
                            defaultLoader: f.default,
                            imgConf: n,
                            blurComplete: y,
                            showAltText: w,
                        })
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(v, {
                                ..._,
                                unoptimized: P.unoptimized,
                                placeholder: P.placeholder,
                                fill: P.fill,
                                onLoadRef: g,
                                onLoadingCompleteRef: h,
                                setBlurComplete: b,
                                setShowAltText: j,
                                sizesInput: e.sizes,
                                ref: t,
                            }),
                            P.priority
                                ? (0, o.jsx)(x, {
                                      isAppRouter: !r,
                                      imgAttributes: _,
                                  })
                                : null,
                        ],
                    })
                })
                ;('function' == typeof t.default ||
                    ('object' == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, '__esModule', {
                        value: !0,
                    }),
                    Object.assign(t.default, t),
                    (e.exports = t.default))
            },
            8679: (e, t, r) => {
                'use strict'
                e.exports = r(14573).vendored.contexts.AmpContext
            },
            35142: (e, t, r) => {
                'use strict'
                e.exports = r(14573).vendored.contexts.HeadManagerContext
            },
            68127: (e, t, r) => {
                'use strict'
                e.exports = r(14573).vendored.contexts.ImageConfigContext
            },
            61579: (e, t, r) => {
                'use strict'
                e.exports = r(14573).vendored.contexts.RouterContext
            },
            67892: (e, t) => {
                'use strict'
                function r(e) {
                    let {
                        ampFirst: t = !1,
                        hybrid: r = !1,
                        hasQuery: a = !1,
                    } = void 0 === e ? {} : e
                    return t || (r && a)
                }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    Object.defineProperty(t, 'isInAmpMode', {
                        enumerable: !0,
                        get: function () {
                            return r
                        },
                    })
            },
            44401: (e, t, r) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    Object.defineProperty(t, 'getImgProps', {
                        enumerable: !0,
                        get: function () {
                            return s
                        },
                    }),
                    r(78963)
                let a = r(48226),
                    n = r(11098)
                function o(e) {
                    return void 0 !== e.default
                }
                function i(e) {
                    return void 0 === e
                        ? e
                        : 'number' == typeof e
                          ? Number.isFinite(e)
                              ? e
                              : NaN
                          : 'string' == typeof e && /^[0-9]+$/.test(e)
                            ? parseInt(e, 10)
                            : NaN
                }
                function s(e, t) {
                    var r
                    let s,
                        l,
                        d,
                        {
                            src: c,
                            sizes: u,
                            unoptimized: p = !1,
                            priority: f = !1,
                            loading: m,
                            className: g,
                            quality: h,
                            width: v,
                            height: x,
                            fill: y = !1,
                            style: b,
                            overrideSrc: w,
                            onLoad: j,
                            onLoadingComplete: _,
                            placeholder: P = 'empty',
                            blurDataURL: S,
                            fetchPriority: O,
                            decoding: k = 'async',
                            layout: C,
                            objectFit: E,
                            objectPosition: N,
                            lazyBoundary: R,
                            lazyRoot: z,
                            ...I
                        } = e,
                        {
                            imgConf: M,
                            showAltText: B,
                            blurComplete: A,
                            defaultLoader: T,
                        } = t,
                        G = M || n.imageConfigDefault
                    if ('allSizes' in G) s = G
                    else {
                        let e = [...G.deviceSizes, ...G.imageSizes].sort(
                                (e, t) => e - t
                            ),
                            t = G.deviceSizes.sort((e, t) => e - t)
                        s = { ...G, allSizes: e, deviceSizes: t }
                    }
                    if (void 0 === T)
                        throw Error(
                            'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'
                        )
                    let V = I.loader || T
                    delete I.loader, delete I.srcSet
                    let D = '__next_img_default' in V
                    if (D) {
                        if ('custom' === s.loader)
                            throw Error(
                                'Image with src "' +
                                    c +
                                    '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
                            )
                    } else {
                        let e = V
                        V = (t) => {
                            let { config: r, ...a } = t
                            return e(a)
                        }
                    }
                    if (C) {
                        'fill' === C && (y = !0)
                        let e = {
                            intrinsic: { maxWidth: '100%', height: 'auto' },
                            responsive: { width: '100%', height: 'auto' },
                        }[C]
                        e && (b = { ...b, ...e })
                        let t = { responsive: '100vw', fill: '100vw' }[C]
                        t && !u && (u = t)
                    }
                    let F = '',
                        U = i(v),
                        L = i(x)
                    if (
                        'object' == typeof (r = c) &&
                        (o(r) || void 0 !== r.src)
                    ) {
                        let e = o(c) ? c.default : c
                        if (!e.src)
                            throw Error(
                                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                                    JSON.stringify(e)
                            )
                        if (!e.height || !e.width)
                            throw Error(
                                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                                    JSON.stringify(e)
                            )
                        if (
                            ((l = e.blurWidth),
                            (d = e.blurHeight),
                            (S = S || e.blurDataURL),
                            (F = e.src),
                            !y)
                        ) {
                            if (U || L) {
                                if (U && !L) {
                                    let t = U / e.width
                                    L = Math.round(e.height * t)
                                } else if (!U && L) {
                                    let t = L / e.height
                                    U = Math.round(e.width * t)
                                }
                            } else (U = e.width), (L = e.height)
                        }
                    }
                    let q = !f && ('lazy' === m || void 0 === m)
                    ;(!(c = 'string' == typeof c ? c : F) ||
                        c.startsWith('data:') ||
                        c.startsWith('blob:')) &&
                        ((p = !0), (q = !1)),
                        s.unoptimized && (p = !0),
                        D &&
                            c.endsWith('.svg') &&
                            !s.dangerouslyAllowSVG &&
                            (p = !0),
                        f && (O = 'high')
                    let H = i(h),
                        W = Object.assign(
                            y
                                ? {
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      objectFit: E,
                                      objectPosition: N,
                                  }
                                : {},
                            B ? {} : { color: 'transparent' },
                            b
                        ),
                        Y =
                            A || 'empty' === P
                                ? null
                                : 'blur' === P
                                  ? 'url("data:image/svg+xml;charset=utf-8,' +
                                    (0, a.getImageBlurSvg)({
                                        widthInt: U,
                                        heightInt: L,
                                        blurWidth: l,
                                        blurHeight: d,
                                        blurDataURL: S || '',
                                        objectFit: W.objectFit,
                                    }) +
                                    '")'
                                  : 'url("' + P + '")',
                        Z = Y
                            ? {
                                  backgroundSize: W.objectFit || 'cover',
                                  backgroundPosition:
                                      W.objectPosition || '50% 50%',
                                  backgroundRepeat: 'no-repeat',
                                  backgroundImage: Y,
                              }
                            : {},
                        $ = (function (e) {
                            let {
                                config: t,
                                src: r,
                                unoptimized: a,
                                width: n,
                                quality: o,
                                sizes: i,
                                loader: s,
                            } = e
                            if (a)
                                return { src: r, srcSet: void 0, sizes: void 0 }
                            let { widths: l, kind: d } = (function (e, t, r) {
                                    let { deviceSizes: a, allSizes: n } = e
                                    if (r) {
                                        let e = /(^|\s)(1?\d?\d)vw/g,
                                            t = []
                                        for (let a; (a = e.exec(r)); a)
                                            t.push(parseInt(a[2]))
                                        if (t.length) {
                                            let e = 0.01 * Math.min(...t)
                                            return {
                                                widths: n.filter(
                                                    (t) => t >= a[0] * e
                                                ),
                                                kind: 'w',
                                            }
                                        }
                                        return { widths: n, kind: 'w' }
                                    }
                                    return 'number' != typeof t
                                        ? { widths: a, kind: 'w' }
                                        : {
                                              widths: [
                                                  ...new Set(
                                                      [t, 2 * t].map(
                                                          (e) =>
                                                              n.find(
                                                                  (t) => t >= e
                                                              ) ||
                                                              n[n.length - 1]
                                                      )
                                                  ),
                                              ],
                                              kind: 'x',
                                          }
                                })(t, n, i),
                                c = l.length - 1
                            return {
                                sizes: i || 'w' !== d ? i : '100vw',
                                srcSet: l
                                    .map(
                                        (e, a) =>
                                            s({
                                                config: t,
                                                src: r,
                                                quality: o,
                                                width: e,
                                            }) +
                                            ' ' +
                                            ('w' === d ? e : a + 1) +
                                            d
                                    )
                                    .join(', '),
                                src: s({
                                    config: t,
                                    src: r,
                                    quality: o,
                                    width: l[c],
                                }),
                            }
                        })({
                            config: s,
                            src: c,
                            unoptimized: p,
                            width: U,
                            quality: H,
                            sizes: u,
                            loader: V,
                        })
                    return {
                        props: {
                            ...I,
                            loading: q ? 'lazy' : m,
                            fetchPriority: O,
                            width: U,
                            height: L,
                            decoding: k,
                            className: g,
                            style: { ...W, ...Z },
                            sizes: $.sizes,
                            srcSet: $.srcSet,
                            src: w || $.src,
                        },
                        meta: {
                            unoptimized: p,
                            priority: f,
                            placeholder: P,
                            fill: y,
                        },
                    }
                }
            },
            79901: (e, t, r) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (function (e, t) {
                        for (var r in t)
                            Object.defineProperty(e, r, {
                                enumerable: !0,
                                get: t[r],
                            })
                    })(t, {
                        default: function () {
                            return g
                        },
                        defaultHead: function () {
                            return u
                        },
                    })
                let a = r(20352),
                    n = r(6870),
                    o = r(97247),
                    i = n._(r(28964)),
                    s = a._(r(48070)),
                    l = r(8679),
                    d = r(35142),
                    c = r(67892)
                function u(e) {
                    void 0 === e && (e = !1)
                    let t = [(0, o.jsx)('meta', { charSet: 'utf-8' })]
                    return (
                        e ||
                            t.push(
                                (0, o.jsx)('meta', {
                                    name: 'viewport',
                                    content: 'width=device-width',
                                })
                            ),
                        t
                    )
                }
                function p(e, t) {
                    return 'string' == typeof t || 'number' == typeof t
                        ? e
                        : t.type === i.default.Fragment
                          ? e.concat(
                                i.default.Children.toArray(
                                    t.props.children
                                ).reduce(
                                    (e, t) =>
                                        'string' == typeof t ||
                                        'number' == typeof t
                                            ? e
                                            : e.concat(t),
                                    []
                                )
                            )
                          : e.concat(t)
                }
                r(78963)
                let f = ['name', 'httpEquiv', 'charSet', 'itemProp']
                function m(e, t) {
                    let { inAmpMode: r } = t
                    return e
                        .reduce(p, [])
                        .reverse()
                        .concat(u(r).reverse())
                        .filter(
                            (function () {
                                let e = new Set(),
                                    t = new Set(),
                                    r = new Set(),
                                    a = {}
                                return (n) => {
                                    let o = !0,
                                        i = !1
                                    if (
                                        n.key &&
                                        'number' != typeof n.key &&
                                        n.key.indexOf('$') > 0
                                    ) {
                                        i = !0
                                        let t = n.key.slice(
                                            n.key.indexOf('$') + 1
                                        )
                                        e.has(t) ? (o = !1) : e.add(t)
                                    }
                                    switch (n.type) {
                                        case 'title':
                                        case 'base':
                                            t.has(n.type)
                                                ? (o = !1)
                                                : t.add(n.type)
                                            break
                                        case 'meta':
                                            for (
                                                let e = 0, t = f.length;
                                                e < t;
                                                e++
                                            ) {
                                                let t = f[e]
                                                if (n.props.hasOwnProperty(t)) {
                                                    if ('charSet' === t)
                                                        r.has(t)
                                                            ? (o = !1)
                                                            : r.add(t)
                                                    else {
                                                        let e = n.props[t],
                                                            r =
                                                                a[t] ||
                                                                new Set()
                                                        ;('name' !== t || !i) &&
                                                        r.has(e)
                                                            ? (o = !1)
                                                            : (r.add(e),
                                                              (a[t] = r))
                                                    }
                                                }
                                            }
                                    }
                                    return o
                                }
                            })()
                        )
                        .reverse()
                        .map((e, t) => {
                            let a = e.key || t
                            if (
                                !r &&
                                'link' === e.type &&
                                e.props.href &&
                                [
                                    'https://fonts.googleapis.com/css',
                                    'https://use.typekit.net/',
                                ].some((t) => e.props.href.startsWith(t))
                            ) {
                                let t = { ...(e.props || {}) }
                                return (
                                    (t['data-href'] = t.href),
                                    (t.href = void 0),
                                    (t['data-optimized-fonts'] = !0),
                                    i.default.cloneElement(e, t)
                                )
                            }
                            return i.default.cloneElement(e, { key: a })
                        })
                }
                let g = function (e) {
                    let { children: t } = e,
                        r = (0, i.useContext)(l.AmpStateContext),
                        a = (0, i.useContext)(d.HeadManagerContext)
                    return (0, o.jsx)(s.default, {
                        reduceComponentsToState: m,
                        headManager: a,
                        inAmpMode: (0, c.isInAmpMode)(r),
                        children: t,
                    })
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
            48226: (e, t) => {
                'use strict'
                function r(e) {
                    let {
                            widthInt: t,
                            heightInt: r,
                            blurWidth: a,
                            blurHeight: n,
                            blurDataURL: o,
                            objectFit: i,
                        } = e,
                        s = a ? 40 * a : t,
                        l = n ? 40 * n : r,
                        d = s && l ? "viewBox='0 0 " + s + ' ' + l + "'" : ''
                    return (
                        "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
                        d +
                        "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
                        (d
                            ? 'none'
                            : 'contain' === i
                              ? 'xMidYMid'
                              : 'cover' === i
                                ? 'xMidYMid slice'
                                : 'none') +
                        "' style='filter: url(%23b);' href='" +
                        o +
                        "'/%3E%3C/svg%3E"
                    )
                }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    Object.defineProperty(t, 'getImageBlurSvg', {
                        enumerable: !0,
                        get: function () {
                            return r
                        },
                    })
            },
            11098: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (function (e, t) {
                        for (var r in t)
                            Object.defineProperty(e, r, {
                                enumerable: !0,
                                get: t[r],
                            })
                    })(t, {
                        VALID_LOADERS: function () {
                            return r
                        },
                        imageConfigDefault: function () {
                            return a
                        },
                    })
                let r = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
                    a = {
                        deviceSizes: [
                            640, 750, 828, 1080, 1200, 1920, 2048, 3840,
                        ],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: '/_next/image',
                        loader: 'default',
                        loaderFile: '',
                        domains: [],
                        disableStaticImages: !1,
                        minimumCacheTTL: 60,
                        formats: ['image/webp'],
                        dangerouslyAllowSVG: !1,
                        contentSecurityPolicy:
                            "script-src 'none'; frame-src 'none'; sandbox;",
                        contentDispositionType: 'inline',
                        localPatterns: void 0,
                        remotePatterns: [],
                        unoptimized: !1,
                    }
            },
            91561: (e, t, r) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (function (e, t) {
                        for (var r in t)
                            Object.defineProperty(e, r, {
                                enumerable: !0,
                                get: t[r],
                            })
                    })(t, {
                        default: function () {
                            return l
                        },
                        getImageProps: function () {
                            return s
                        },
                    })
                let a = r(20352),
                    n = r(44401),
                    o = r(15889),
                    i = a._(r(99857))
                function s(e) {
                    let { props: t } = (0, n.getImgProps)(e, {
                        defaultLoader: i.default,
                        imgConf: {
                            deviceSizes: [
                                640, 750, 828, 1080, 1200, 1920, 2048, 3840,
                            ],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: '/_next/image',
                            loader: 'default',
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1,
                        },
                    })
                    for (let [e, r] of Object.entries(t))
                        void 0 === r && delete t[e]
                    return { props: t }
                }
                let l = o.Image
            },
            99857: (e, t) => {
                'use strict'
                function r(e) {
                    let { config: t, src: r, width: a, quality: n } = e
                    return (
                        t.path +
                        '?url=' +
                        encodeURIComponent(r) +
                        '&w=' +
                        a +
                        '&q=' +
                        (n || 75)
                    )
                }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    Object.defineProperty(t, 'default', {
                        enumerable: !0,
                        get: function () {
                            return a
                        },
                    }),
                    (r.__next_img_default = !0)
                let a = r
            },
            48070: (e, t, r) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    Object.defineProperty(t, 'default', {
                        enumerable: !0,
                        get: function () {
                            return i
                        },
                    })
                let a = r(28964),
                    n = () => {},
                    o = () => {}
                function i(e) {
                    var t
                    let { headManager: r, reduceComponentsToState: i } = e
                    function s() {
                        if (r && r.mountedInstances) {
                            let t = a.Children.toArray(
                                Array.from(r.mountedInstances).filter(Boolean)
                            )
                            r.updateHead(i(t, e))
                        }
                    }
                    return (
                        null == r ||
                            null == (t = r.mountedInstances) ||
                            t.add(e.children),
                        s(),
                        n(() => {
                            var t
                            return (
                                null == r ||
                                    null == (t = r.mountedInstances) ||
                                    t.add(e.children),
                                () => {
                                    var t
                                    null == r ||
                                        null == (t = r.mountedInstances) ||
                                        t.delete(e.children)
                                }
                            )
                        }),
                        n(
                            () => (
                                r && (r._pendingUpdate = s),
                                () => {
                                    r && (r._pendingUpdate = s)
                                }
                            )
                        ),
                        o(
                            () => (
                                r &&
                                    r._pendingUpdate &&
                                    (r._pendingUpdate(),
                                    (r._pendingUpdate = null)),
                                () => {
                                    r &&
                                        r._pendingUpdate &&
                                        (r._pendingUpdate(),
                                        (r._pendingUpdate = null))
                                }
                            )
                        ),
                        null
                    )
                }
            },
            48646: (e, t, r) => {
                'use strict'
                r.r(t), r.d(t, { default: () => a })
                let a = (0, r(45347).createProxy)(
                    String.raw`/Users/vadim/Projects/Youtube/2024/10-11-Ecommerce/part3/FullstackEcommerce/dashboard/app/page.tsx#default`
                )
            },
            57481: (e, t, r) => {
                'use strict'
                r.r(t), r.d(t, { default: () => n })
                var a = r(54564)
                let n = (e) => [
                    {
                        type: 'image/x-icon',
                        sizes: '16x16',
                        url:
                            (0, a.fillMetadataSegment)(
                                '.',
                                e.params,
                                'favicon.ico'
                            ) + '',
                    },
                ]
            },
        })
    var t = require('../webpack-runtime.js')
    t.C(e)
    var r = (e) => t((t.s = e)),
        a = t.X(0, [379, 895, 346, 101, 955], () => r(99082))
    module.exports = a
})()

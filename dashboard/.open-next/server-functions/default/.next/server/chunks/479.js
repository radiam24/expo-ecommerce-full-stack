'use strict'
;(exports.id = 479),
    (exports.ids = [479]),
    (exports.modules = {
        22795: (e, t, r) => {
            r.d(t, { x: () => d })
            var a = r(21493),
                s = r(28964),
                i = r.n(s),
                o = r(41495)
            let l = r(76864).$
                    ? 'flex flex-col relative z-0 box-border border-0 list-none min-w-0 min-h-0 bg-transparent items-stretch m-0 p-0 text-decoration-none'
                    : '',
                n = (0, o.D)({ base: l }),
                d = i().forwardRef(({ className: e, ...t }, r) =>
                    a.jsx('div', { ref: r, className: n({ class: e }), ...t })
                )
            d.displayName = 'Box'
        },
        89735: (e, t, r) => {
            r.d(t, { oD: () => I, zx: () => R })
            var a = r(21493),
                s = r(28964),
                i = r.n(s),
                o = r(99088),
                l = r(93539),
                n = r(41495),
                d = r(48327),
                x = r(7178),
                u = r(83281),
                c = r(98388),
                p = r(53484),
                b = r(1970),
                v = r(66567),
                g = r(91320),
                h = r(86800)
            let m = 'BUTTON',
                y = i().forwardRef(({ ...e }, t) =>
                    a.jsx(p.Z, { ...e, ref: t })
                ),
                f = i().forwardRef(
                    (
                        {
                            height: e,
                            width: t,
                            fill: r,
                            color: i,
                            classNameColor: o,
                            size: n,
                            stroke: d = 'currentColor',
                            as: x,
                            ...u
                        },
                        c
                    ) => {
                        i = i ?? o
                        let p = (0, s.useMemo)(
                                () =>
                                    n
                                        ? { size: n }
                                        : e && t
                                          ? { height: e, width: t }
                                          : e
                                            ? { height: e }
                                            : t
                                              ? { width: t }
                                              : {},
                                [n, e, t]
                            ),
                            b = {}
                        return (r && (b = { ...b, fill: r }),
                        'currentColor' !== d
                            ? (b = { ...b, stroke: d })
                            : 'currentColor' === d &&
                              void 0 !== i &&
                              (b = { ...b, stroke: i }),
                        x)
                            ? a.jsx(x, { ref: c, ...u, ...p, ...b })
                            : a.jsx(l.Svg, {
                                  ref: c,
                                  height: e,
                                  width: t,
                                  ...b,
                                  ...u,
                              })
                    }
                ),
                w = 'web' === b.Z.OS ? (0, d.a)(y, m) : (0, x.W)(y, m),
                N = (0, o.a)({
                    Root: w,
                    Text: v.Z,
                    Group: g.Z,
                    Spinner: h.Z,
                    Icon: (0, c.v)(f),
                })
            ;(0, u.BO)(w, { className: 'style' }),
                (0, u.BO)(N.Text, { className: 'style' }),
                (0, u.BO)(N.Group, { className: 'style' }),
                (0, u.BO)(N.Spinner, {
                    className: {
                        target: 'style',
                        nativeStyleToProp: { color: !0 },
                    },
                }),
                (0, u.BO)(f, {
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
            let j = (0, n.D)({
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
                z = (0, n.D)({
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
                T = (0, n.D)({
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
                k = (0, n.D)({
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
                R = i().forwardRef(
                    (
                        {
                            className: e,
                            variant: t = 'solid',
                            size: r = 'md',
                            action: s = 'primary',
                            ...i
                        },
                        o
                    ) =>
                        a.jsx(N, {
                            ref: o,
                            ...i,
                            className: j({
                                variant: t,
                                size: r,
                                action: s,
                                class: e,
                            }),
                            context: { variant: t, size: r, action: s },
                        })
                ),
                I = i().forwardRef(
                    (
                        { className: e, variant: t, size: r, action: s, ...i },
                        o
                    ) => {
                        let { variant: l, size: n, action: x } = (0, d.y)(m)
                        return a.jsx(N.Text, {
                            ref: o,
                            ...i,
                            className: z({
                                parentVariants: {
                                    variant: l,
                                    size: n,
                                    action: x,
                                },
                                variant: t,
                                size: r,
                                action: s,
                                class: e,
                            }),
                        })
                    }
                ),
                B = N.Spinner,
                O = i().forwardRef(({ className: e, size: t, ...r }, s) => {
                    let { variant: i, size: o, action: l } = (0, d.y)(m)
                    return 'number' == typeof t
                        ? a.jsx(N.Icon, {
                              ref: s,
                              ...r,
                              className: T({ class: e }),
                              size: t,
                          })
                        : (void 0 !== r.height || void 0 !== r.width) &&
                            void 0 === t
                          ? a.jsx(N.Icon, {
                                ref: s,
                                ...r,
                                className: T({ class: e }),
                            })
                          : a.jsx(N.Icon, {
                                ...r,
                                className: T({
                                    parentVariants: {
                                        size: o,
                                        variant: i,
                                        action: l,
                                    },
                                    size: t,
                                    class: e,
                                }),
                                ref: s,
                            })
                }),
                D = i().forwardRef(
                    (
                        {
                            className: e,
                            space: t = 'md',
                            isAttached: r = !1,
                            ...s
                        },
                        i
                    ) =>
                        a.jsx(N.Group, {
                            className: k({ class: e, space: t, isAttached: r }),
                            ...s,
                            ref: i,
                        })
                )
            ;(R.displayName = 'Button'),
                (I.displayName = 'ButtonText'),
                (B.displayName = 'ButtonSpinner'),
                (O.displayName = 'ButtonIcon'),
                (D.displayName = 'ButtonGroup')
        },
        79543: (e, t, r) => {
            r.d(t, { NI: () => k })
            var a = r(21493),
                s = r(66567),
                i = r(91320),
                o = r(28964),
                l = r.n(o),
                n = r(93539),
                d = r(54441),
                x = r(41495),
                u = r(48327),
                c = r(83281)
            let p = 'FORM_CONTROL',
                b = l().forwardRef(
                    (
                        {
                            height: e,
                            width: t,
                            fill: r,
                            color: s,
                            size: i,
                            stroke: l = 'currentColor',
                            as: d,
                            ...x
                        },
                        u
                    ) => {
                        let c = (0, o.useMemo)(
                                () =>
                                    i
                                        ? { size: i }
                                        : e && t
                                          ? { height: e, width: t }
                                          : e
                                            ? { height: e }
                                            : t
                                              ? { width: t }
                                              : {},
                                [i, e, t]
                            ),
                            p = {}
                        return (s && (p = { ...p, color: s }),
                        l && (p = { ...p, stroke: l }),
                        r && (p = { ...p, fill: r }),
                        d)
                            ? a.jsx(d, { ref: u, ...c, ...p, ...x })
                            : a.jsx(n.Svg, {
                                  ref: u,
                                  height: e,
                                  width: t,
                                  ...p,
                                  ...x,
                              })
                    }
                ),
                v = (0, x.D)({
                    base: 'flex flex-col',
                    variants: { size: { sm: '', md: '', lg: '' } },
                }),
                g = (0, x.D)({
                    base: 'text-error-700 fill-none',
                    variants: {
                        size: {
                            '2xs': 'h-3 w-3',
                            xs: 'h-3.5 w-3.5',
                            sm: 'h-4 w-4',
                            md: 'h-[18px] w-[18px]',
                            lg: 'h-5 w-5',
                            xl: 'h-6 w-6',
                        },
                    },
                }),
                h = (0, x.D)({
                    base: 'flex flex-row justify-start items-center mt-1 gap-1',
                }),
                m = (0, x.D)({
                    base: 'text-error-700',
                    variants: {
                        isTruncated: { true: 'web:truncate' },
                        bold: { true: 'font-bold' },
                        underline: { true: 'underline' },
                        strikeThrough: { true: 'line-through' },
                        size: {
                            '2xs': 'text-2xs',
                            xs: 'text-xs',
                            sm: 'text-sm',
                            md: 'text-base',
                            lg: 'text-lg',
                            xl: 'text-xl',
                            '2xl': 'text-2xl',
                            '3xl': 'text-3xl',
                            '4xl': 'text-4xl',
                            '5xl': 'text-5xl',
                            '6xl': 'text-6xl',
                        },
                        sub: { true: 'text-xs' },
                        italic: { true: 'italic' },
                        highlight: { true: 'bg-yellow-500' },
                    },
                }),
                y = (0, x.D)({
                    base: 'flex flex-row justify-start items-center mt-1',
                }),
                f = (0, x.D)({
                    base: 'text-typography-500',
                    variants: {
                        isTruncated: { true: 'web:truncate' },
                        bold: { true: 'font-bold' },
                        underline: { true: 'underline' },
                        strikeThrough: { true: 'line-through' },
                        size: {
                            '2xs': 'text-2xs',
                            xs: 'text-xs',
                            sm: 'text-xs',
                            md: 'text-sm',
                            lg: 'text-base',
                            xl: 'text-xl',
                            '2xl': 'text-2xl',
                            '3xl': 'text-3xl',
                            '4xl': 'text-4xl',
                            '5xl': 'text-5xl',
                            '6xl': 'text-6xl',
                        },
                        sub: { true: 'text-xs' },
                        italic: { true: 'italic' },
                        highlight: { true: 'bg-yellow-500' },
                    },
                }),
                w = (0, x.D)({
                    base: 'flex flex-row justify-start items-center mb-1',
                }),
                N = (0, x.D)({
                    base: 'font-medium text-typography-900',
                    variants: {
                        isTruncated: { true: 'web:truncate' },
                        bold: { true: 'font-bold' },
                        underline: { true: 'underline' },
                        strikeThrough: { true: 'line-through' },
                        size: {
                            '2xs': 'text-2xs',
                            xs: 'text-xs',
                            sm: 'text-sm',
                            md: 'text-base',
                            lg: 'text-lg',
                            xl: 'text-xl',
                            '2xl': 'text-2xl',
                            '3xl': 'text-3xl',
                            '4xl': 'text-4xl',
                            '5xl': 'text-5xl',
                            '6xl': 'text-6xl',
                        },
                        sub: { true: 'text-xs' },
                        italic: { true: 'italic' },
                        highlight: { true: 'bg-yellow-500' },
                    },
                }),
                j = (0, x.D)({
                    base: 'font-medium text-typography-900',
                    variants: {
                        isTruncated: { true: 'web:truncate' },
                        bold: { true: 'font-bold' },
                        underline: { true: 'underline' },
                        strikeThrough: { true: 'line-through' },
                        size: {
                            '2xs': 'text-2xs',
                            xs: 'text-xs',
                            sm: 'text-sm',
                            md: 'text-base',
                            lg: 'text-lg',
                            xl: 'text-xl',
                            '2xl': 'text-2xl',
                            '3xl': 'text-3xl',
                            '4xl': 'text-4xl',
                            '5xl': 'text-5xl',
                            '6xl': 'text-6xl',
                        },
                        sub: { true: 'text-xs' },
                        italic: { true: 'italic' },
                        highlight: { true: 'bg-yellow-500' },
                    },
                }),
                z = l().forwardRef(({ className: e, ...t }, r) => {
                    let { size: i } = (0, u.y)(p)
                    return a.jsx(s.Z, {
                        ref: r,
                        className: j({ parentVariants: { size: i }, class: e }),
                        ...t,
                    })
                }),
                T = (0, d.y3)({
                    Root: (0, u.a)(i.Z, p),
                    Error: i.Z,
                    ErrorText: s.Z,
                    ErrorIcon: b,
                    Label: i.Z,
                    LabelText: s.Z,
                    LabelAstrick: z,
                    Helper: i.Z,
                    HelperText: s.Z,
                })
            ;(0, c.BO)(T, { className: 'style' }),
                (0, c.BO)(T.Error, { className: 'style' }),
                (0, c.BO)(T.Error.Text, { className: 'style' }),
                (0, c.BO)(T.Label, { className: 'style' }),
                (0, c.BO)(T.Label.Text, { className: 'style' }),
                (0, c.BO)(T.Helper, { className: 'style' }),
                (0, c.BO)(T.Helper.Text, { className: 'style' }),
                (0, c.BO)(T.Error.Icon, {
                    className: {
                        target: 'style',
                        nativeStyleToProp: {
                            height: !0,
                            width: !0,
                            fill: !0,
                            color: !0,
                            stroke: !0,
                        },
                    },
                })
            let k = l().forwardRef(
                    ({ className: e, size: t = 'md', ...r }, s) =>
                        a.jsx(T, {
                            ref: s,
                            className: v({ size: t, class: e }),
                            ...r,
                            context: { size: t },
                        })
                ),
                R = l().forwardRef(({ className: e, ...t }, r) =>
                    a.jsx(T.Error, { ref: r, className: h({ class: e }), ...t })
                ),
                I = l().forwardRef(({ className: e, size: t, ...r }, s) => {
                    let { size: i } = (0, u.y)(p)
                    return a.jsx(T.Error.Text, {
                        className: m({
                            parentVariants: { size: i },
                            size: t,
                            class: e,
                        }),
                        ref: s,
                        ...r,
                    })
                }),
                B = l().forwardRef(({ className: e, size: t, ...r }, s) => {
                    let { size: i } = (0, u.y)(p)
                    return 'number' == typeof t
                        ? a.jsx(T.Error.Icon, {
                              ref: s,
                              ...r,
                              className: g({ class: e }),
                              size: t,
                          })
                        : (void 0 !== r.height || void 0 !== r.width) &&
                            void 0 === t
                          ? a.jsx(T.Error.Icon, {
                                ref: s,
                                ...r,
                                className: g({ class: e }),
                            })
                          : a.jsx(T.Error.Icon, {
                                className: g({
                                    parentVariants: { size: i },
                                    size: t,
                                    class: e,
                                }),
                                ...r,
                            })
                }),
                O = l().forwardRef(({ className: e, ...t }, r) =>
                    a.jsx(T.Label, { ref: r, className: w({ class: e }), ...t })
                ),
                D = l().forwardRef(({ className: e, size: t, ...r }, s) => {
                    let { size: i } = (0, u.y)(p)
                    return a.jsx(T.Label.Text, {
                        className: N({
                            parentVariants: { size: i },
                            size: t,
                            class: e,
                        }),
                        ref: s,
                        ...r,
                    })
                }),
                C = l().forwardRef(({ className: e, ...t }, r) =>
                    a.jsx(T.Helper, {
                        ref: r,
                        className: y({ class: e }),
                        ...t,
                    })
                ),
                S = l().forwardRef(({ className: e, size: t, ...r }, s) => {
                    let { size: i } = (0, u.y)(p)
                    return a.jsx(T.Helper.Text, {
                        className: f({
                            parentVariants: { size: i },
                            size: t,
                            class: e,
                        }),
                        ref: s,
                        ...r,
                    })
                })
            ;(k.displayName = 'FormControl'),
                (R.displayName = 'FormControlError'),
                (I.displayName = 'FormControlErrorText'),
                (B.displayName = 'FormControlErrorIcon'),
                (O.displayName = 'FormControlLabel'),
                (D.displayName = 'FormControlLabelText'),
                (z.displayName = 'FormControlLabelAstrick'),
                (C.displayName = 'FormControlHelper'),
                (S.displayName = 'FormControlHelperText')
        },
        28245: (e, t, r) => {
            r.d(t, { X: () => d })
            var a = r(21493),
                s = r(28964),
                i = r(41495)
            let o = r(76864).$
                    ? 'font-sans tracking-sm bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word'
                    : '',
                l = (0, i.D)({
                    base: `text-typography-900 font-bold font-heading tracking-sm my-0 ${o}`,
                    variants: {
                        isTruncated: { true: 'truncate' },
                        bold: { true: 'font-bold' },
                        underline: { true: 'underline' },
                        strikeThrough: { true: 'line-through' },
                        sub: { true: 'text-xs' },
                        italic: { true: 'italic' },
                        highlight: { true: 'bg-yellow-500' },
                        size: {
                            '5xl': 'text-6xl',
                            '4xl': 'text-5xl',
                            '3xl': 'text-4xl',
                            '2xl': 'text-3xl',
                            xl: 'text-2xl',
                            lg: 'text-xl',
                            md: 'text-lg',
                            sm: 'text-base',
                            xs: 'text-sm',
                        },
                    },
                }),
                n = (0, s.memo)(
                    (0, s.forwardRef)(
                        (
                            {
                                size: e,
                                className: t,
                                isTruncated: r,
                                bold: s,
                                underline: i,
                                strikeThrough: o,
                                sub: n,
                                italic: d,
                                highlight: x,
                                ...u
                            },
                            c
                        ) => {
                            switch (e) {
                                case '5xl':
                                case '4xl':
                                case '3xl':
                                    return a.jsx('h1', {
                                        className: l({
                                            size: e,
                                            isTruncated: r,
                                            bold: s,
                                            underline: i,
                                            strikeThrough: o,
                                            sub: n,
                                            italic: d,
                                            highlight: x,
                                            class: t,
                                        }),
                                        ...u,
                                        ref: c,
                                    })
                                case '2xl':
                                    return a.jsx('h2', {
                                        className: l({
                                            size: e,
                                            isTruncated: r,
                                            bold: s,
                                            underline: i,
                                            strikeThrough: o,
                                            sub: n,
                                            italic: d,
                                            highlight: x,
                                            class: t,
                                        }),
                                        ...u,
                                        ref: c,
                                    })
                                case 'xl':
                                    return a.jsx('h3', {
                                        className: l({
                                            size: e,
                                            isTruncated: r,
                                            bold: s,
                                            underline: i,
                                            strikeThrough: o,
                                            sub: n,
                                            italic: d,
                                            highlight: x,
                                            class: t,
                                        }),
                                        ...u,
                                        ref: c,
                                    })
                                case 'lg':
                                default:
                                    return a.jsx('h4', {
                                        className: l({
                                            size: e,
                                            isTruncated: r,
                                            bold: s,
                                            underline: i,
                                            strikeThrough: o,
                                            sub: n,
                                            italic: d,
                                            highlight: x,
                                            class: t,
                                        }),
                                        ...u,
                                        ref: c,
                                    })
                                case 'md':
                                    return a.jsx('h5', {
                                        className: l({
                                            size: e,
                                            isTruncated: r,
                                            bold: s,
                                            underline: i,
                                            strikeThrough: o,
                                            sub: n,
                                            italic: d,
                                            highlight: x,
                                            class: t,
                                        }),
                                        ...u,
                                        ref: c,
                                    })
                                case 'sm':
                                case 'xs':
                                    return a.jsx('h6', {
                                        className: l({
                                            size: e,
                                            isTruncated: r,
                                            bold: s,
                                            underline: i,
                                            strikeThrough: o,
                                            sub: n,
                                            italic: d,
                                            highlight: x,
                                            class: t,
                                        }),
                                        ...u,
                                        ref: c,
                                    })
                            }
                        }
                    )
                ),
                d = (0, s.memo)(
                    (0, s.forwardRef)(
                        ({ className: e, size: t = 'lg', as: r, ...s }, i) => {
                            let {
                                isTruncated: o,
                                bold: d,
                                underline: x,
                                strikeThrough: u,
                                sub: c,
                                italic: p,
                                highlight: b,
                            } = s
                            return r
                                ? a.jsx(r, {
                                      className: l({
                                          size: t,
                                          isTruncated: o,
                                          bold: d,
                                          underline: x,
                                          strikeThrough: u,
                                          sub: c,
                                          italic: p,
                                          highlight: b,
                                          class: e,
                                      }),
                                      ...s,
                                      ref: i,
                                  })
                                : a.jsx(n, {
                                      className: e,
                                      size: t,
                                      ref: i,
                                      ...s,
                                  })
                        }
                    )
                )
            d.displayName = 'Heading'
        },
        2403: (e, t, r) => {
            r.d(t, { II: () => T, UP: () => I })
            var a = r(21493),
                s = r(28964),
                i = r.n(s),
                o = r(40785),
                l = r(93539),
                n = r(91320),
                d = r(1970),
                x = r(53484),
                u = r(27304),
                c = r(41495),
                p = r(48327),
                b = r(7178),
                v = r(83281),
                g = r(98388)
            let h = 'INPUT',
                m = i().forwardRef(
                    (
                        {
                            height: e,
                            width: t,
                            fill: r,
                            color: i,
                            classNameColor: o,
                            size: n,
                            stroke: d = 'currentColor',
                            as: x,
                            ...u
                        },
                        c
                    ) => {
                        i = i ?? o
                        let p = (0, s.useMemo)(
                                () =>
                                    n
                                        ? { size: n }
                                        : e && t
                                          ? { height: e, width: t }
                                          : e
                                            ? { height: e }
                                            : t
                                              ? { width: t }
                                              : {},
                                [n, e, t]
                            ),
                            b = {}
                        return (r && (b = { ...b, fill: r }),
                        'currentColor' !== d
                            ? (b = { ...b, stroke: d })
                            : 'currentColor' === d &&
                              void 0 !== i &&
                              (b = { ...b, stroke: i }),
                        x)
                            ? a.jsx(x, { ref: c, ...u, ...p, ...b })
                            : a.jsx(l.Svg, {
                                  ref: c,
                                  height: e,
                                  width: t,
                                  ...b,
                                  ...u,
                              })
                    }
                ),
                y = i().forwardRef(({ ...e }, t) =>
                    a.jsx(n.Z, { ...e, ref: t })
                ),
                f = (0, o.J)({
                    Root: 'web' === d.Z.OS ? (0, p.a)(y, h) : (0, b.W)(y, h),
                    Icon: m,
                    Slot: x.Z,
                    Input: 'web' === d.Z.OS ? u.Z : (0, g.v)(u.Z),
                }),
                w = (0, c.D)({
                    base: 'border-background-300 flex-row overflow-hidden content-center data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:hover:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:hover:border-background-300 items-center',
                    variants: {
                        size: { xl: 'h-12', lg: 'h-11', md: 'h-10', sm: 'h-9' },
                        variant: {
                            underlined:
                                'rounded-none border-b data-[invalid=true]:border-b-2 data-[invalid=true]:border-error-700 data-[invalid=true]:hover:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:hover:border-error-700 data-[invalid=true]:data-[disabled=true]:hover:border-error-700',
                            outline:
                                'rounded border data-[invalid=true]:border-error-700 data-[invalid=true]:hover:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:hover:border-error-700 data-[invalid=true]:data-[disabled=true]:hover:border-error-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-indicator-primary data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-indicator-error data-[invalid=true]:data-[focus=true]:hover:web:ring-1 data-[invalid=true]:data-[focus=true]:hover:web:ring-inset data-[invalid=true]:data-[focus=true]:hover:web:ring-indicator-error data-[invalid=true]:data-[disabled=true]:hover:web:ring-1 data-[invalid=true]:data-[disabled=true]:hover:web:ring-inset data-[invalid=true]:data-[disabled=true]:hover:web:ring-indicator-error',
                            rounded:
                                'rounded-full border data-[invalid=true]:border-error-700 data-[invalid=true]:hover:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:hover:border-error-700 data-[invalid=true]:data-[disabled=true]:hover:border-error-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-indicator-primary data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-indicator-error data-[invalid=true]:data-[focus=true]:hover:web:ring-1 data-[invalid=true]:data-[focus=true]:hover:web:ring-inset data-[invalid=true]:data-[focus=true]:hover:web:ring-indicator-error data-[invalid=true]:data-[disabled=true]:hover:web:ring-1 data-[invalid=true]:data-[disabled=true]:hover:web:ring-inset data-[invalid=true]:data-[disabled=true]:hover:web:ring-indicator-error',
                        },
                    },
                }),
                N = (0, c.D)({
                    base: 'justify-center items-center text-typography-400 fill-none',
                    parentVariants: {
                        size: {
                            '2xs': 'h-3 w-3',
                            xs: 'h-3.5 w-3.5',
                            sm: 'h-4 w-4',
                            md: 'h-[18px] w-[18px]',
                            lg: 'h-5 w-5',
                            xl: 'h-6 w-6',
                        },
                    },
                }),
                j = (0, c.D)({
                    base: 'justify-center items-center web:disabled:cursor-not-allowed',
                }),
                z = (0, c.D)({
                    base: 'flex-1 text-typography-900 py-auto px-3 placeholder:text-typography-500 h-full ios:leading-[0px] web:cursor-text web:data-[disabled=true]:cursor-not-allowed',
                    parentVariants: {
                        variant: {
                            underlined: 'web:outline-0 web:outline-none px-0',
                            outline: 'web:outline-0 web:outline-none',
                            rounded: 'web:outline-0 web:outline-none px-4',
                        },
                        size: {
                            '2xs': 'text-2xs',
                            xs: 'text-xs',
                            sm: 'text-sm',
                            md: 'text-base',
                            lg: 'text-lg',
                            xl: 'text-xl',
                            '2xl': 'text-2xl',
                            '3xl': 'text-3xl',
                            '4xl': 'text-4xl',
                            '5xl': 'text-5xl',
                            '6xl': 'text-6xl',
                        },
                    },
                })
            ;(0, v.BO)(y, { className: 'style' }),
                (0, v.BO)(f.Slot, { className: 'style' }),
                (0, v.BO)(f.Input, {
                    className: {
                        target: 'style',
                        nativeStyleToProp: { textAlign: !0 },
                    },
                }),
                (0, v.BO)(f.Icon, {
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
            let T = i().forwardRef(
                    (
                        {
                            className: e,
                            variant: t = 'outline',
                            size: r = 'md',
                            ...s
                        },
                        i
                    ) =>
                        a.jsx(f, {
                            ref: i,
                            ...s,
                            className: w({ variant: t, size: r, class: e }),
                            context: { variant: t, size: r },
                        })
                ),
                k = i().forwardRef(({ className: e, size: t, ...r }, s) => {
                    let { size: i } = (0, p.y)(h)
                    return 'number' == typeof t
                        ? a.jsx(f.Icon, {
                              ref: s,
                              ...r,
                              className: N({ class: e }),
                              size: t,
                          })
                        : (void 0 !== r.height || void 0 !== r.width) &&
                            void 0 === t
                          ? a.jsx(f.Icon, {
                                ref: s,
                                ...r,
                                className: N({ class: e }),
                            })
                          : a.jsx(f.Icon, {
                                ref: s,
                                ...r,
                                className: N({
                                    parentVariants: { size: i },
                                    class: e,
                                }),
                            })
                }),
                R = i().forwardRef(({ className: e, ...t }, r) =>
                    a.jsx(f.Slot, { ref: r, ...t, className: j({ class: e }) })
                ),
                I = i().forwardRef(({ className: e, ...t }, r) => {
                    let { variant: s, size: i } = (0, p.y)(h)
                    return a.jsx(f.Input, {
                        ref: r,
                        ...t,
                        className: z({
                            parentVariants: { variant: s, size: i },
                            class: e,
                        }),
                    })
                })
            ;(T.displayName = 'Input'),
                (k.displayName = 'InputIcon'),
                (R.displayName = 'InputSlot'),
                (I.displayName = 'InputField')
        },
        35095: (e, t, r) => {
            r.d(t, { x: () => d })
            var a = r(21493),
                s = r(28964),
                i = r.n(s),
                o = r(41495)
            let l = r(76864).$
                    ? 'font-sans tracking-sm my-0 bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word'
                    : '',
                n = (0, o.D)({
                    base: `text-typography-700 font-body ${l}`,
                    variants: {
                        isTruncated: { true: 'web:truncate' },
                        bold: { true: 'font-bold' },
                        underline: { true: 'underline' },
                        strikeThrough: { true: 'line-through' },
                        size: {
                            '2xs': 'text-2xs',
                            xs: 'text-xs',
                            sm: 'text-sm',
                            md: 'text-base',
                            lg: 'text-lg',
                            xl: 'text-xl',
                            '2xl': 'text-2xl',
                            '3xl': 'text-3xl',
                            '4xl': 'text-4xl',
                            '5xl': 'text-5xl',
                            '6xl': 'text-6xl',
                        },
                        sub: { true: 'text-xs' },
                        italic: { true: 'italic' },
                        highlight: { true: 'bg-yellow-500' },
                    },
                }),
                d = i().forwardRef(
                    (
                        {
                            className: e,
                            isTruncated: t,
                            bold: r,
                            underline: s,
                            strikeThrough: i,
                            size: o = 'md',
                            sub: l,
                            italic: d,
                            highlight: x,
                            ...u
                        },
                        c
                    ) =>
                        a.jsx('span', {
                            className: n({
                                isTruncated: t,
                                bold: r,
                                underline: s,
                                strikeThrough: i,
                                size: o,
                                sub: l,
                                italic: d,
                                highlight: x,
                                class: e,
                            }),
                            ...u,
                            ref: c,
                        })
                )
            d.displayName = 'Text'
        },
        62256: (e, t, r) => {
            r.d(t, { g: () => x })
            var a = r(21493),
                s = r(28964),
                i = r.n(s),
                o = r(76864),
                l = r(41495)
            let n = o.$
                    ? 'flex flex-col relative z-0 box-border border-0 list-none min-w-0 min-h-0 bg-transparent items-stretch m-0 p-0 text-decoration-none'
                    : '',
                d = (0, l.D)({
                    base: `flex-col ${n}`,
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
                        reversed: { true: 'flex-col-reverse' },
                    },
                }),
                x = i().forwardRef(
                    ({ className: e, space: t, reversed: r, ...s }, i) =>
                        a.jsx('div', {
                            className: d({ space: t, reversed: r, class: e }),
                            ...s,
                            ref: i,
                        })
                )
            x.displayName = 'VStack'
        },
    })

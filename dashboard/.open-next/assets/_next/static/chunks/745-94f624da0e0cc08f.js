'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [745],
    {
        9149: function (e, t, r) {
            r.d(t, {
                x: function () {
                    return l
                },
            })
            var a = r(3864),
                s = r(2265),
                i = r(3018)
            let o = r(5473).$
                    ? 'flex flex-col relative z-0 box-border border-0 list-none min-w-0 min-h-0 bg-transparent items-stretch m-0 p-0 text-decoration-none'
                    : '',
                n = (0, i.D)({ base: o }),
                l = s.forwardRef((e, t) => {
                    let { className: r, ...s } = e
                    return (0, a.jsx)('div', {
                        ref: t,
                        className: n({ class: r }),
                        ...s,
                    })
                })
            l.displayName = 'Box'
        },
        5479: function (e, t, r) {
            r.d(t, {
                oD: function () {
                    return R
                },
                zx: function () {
                    return T
                },
            })
            var a = r(3864),
                s = r(2265),
                i = r(6922),
                o = r(4167),
                n = r(3018),
                l = r(6148),
                d = r(9460),
                u = r(5245),
                x = r(9301),
                c = r(8718),
                p = r(5729),
                b = r(1118),
                v = r(4392),
                g = r(4523)
            let h = 'BUTTON',
                y = s.forwardRef((e, t) => {
                    let { ...r } = e
                    return (0, a.jsx)(c.Z, { ...r, ref: t })
                }),
                m = s.forwardRef((e, t) => {
                    let {
                        height: r,
                        width: i,
                        fill: n,
                        color: l,
                        classNameColor: d,
                        size: u,
                        stroke: x = 'currentColor',
                        as: c,
                        ...p
                    } = e
                    l = null != l ? l : d
                    let b = (0, s.useMemo)(
                            () =>
                                u
                                    ? { size: u }
                                    : r && i
                                      ? { height: r, width: i }
                                      : r
                                        ? { height: r }
                                        : i
                                          ? { width: i }
                                          : {},
                            [u, r, i]
                        ),
                        v = {}
                    return (n && (v = { ...v, fill: n }),
                    'currentColor' !== x
                        ? (v = { ...v, stroke: x })
                        : 'currentColor' === x &&
                          void 0 !== l &&
                          (v = { ...v, stroke: l }),
                    c)
                        ? (0, a.jsx)(c, { ref: t, ...p, ...b, ...v })
                        : (0, a.jsx)(o.Svg, {
                              ref: t,
                              height: r,
                              width: i,
                              ...v,
                              ...p,
                          })
                }),
                f = 'web' === p.Z.OS ? (0, l.a)(y, h) : (0, d.W)(y, h),
                w = (0, i.a)({
                    Root: f,
                    Text: b.Z,
                    Group: v.Z,
                    Spinner: g.Z,
                    Icon: (0, x.v)(m),
                })
            ;(0, u.BO)(f, { className: 'style' }),
                (0, u.BO)(w.Text, { className: 'style' }),
                (0, u.BO)(w.Group, { className: 'style' }),
                (0, u.BO)(w.Spinner, {
                    className: {
                        target: 'style',
                        nativeStyleToProp: { color: !0 },
                    },
                }),
                (0, u.BO)(m, {
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
            let N = (0, n.D)({
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
                j = (0, n.D)({
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
                k = (0, n.D)({
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
                z = (0, n.D)({
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
                T = s.forwardRef((e, t) => {
                    let {
                        className: r,
                        variant: s = 'solid',
                        size: i = 'md',
                        action: o = 'primary',
                        ...n
                    } = e
                    return (0, a.jsx)(w, {
                        ref: t,
                        ...n,
                        className: N({
                            variant: s,
                            size: i,
                            action: o,
                            class: r,
                        }),
                        context: { variant: s, size: i, action: o },
                    })
                }),
                R = s.forwardRef((e, t) => {
                    let {
                            className: r,
                            variant: s,
                            size: i,
                            action: o,
                            ...n
                        } = e,
                        { variant: d, size: u, action: x } = (0, l.y)(h)
                    return (0, a.jsx)(w.Text, {
                        ref: t,
                        ...n,
                        className: j({
                            parentVariants: { variant: d, size: u, action: x },
                            variant: s,
                            size: i,
                            action: o,
                            class: r,
                        }),
                    })
                }),
                I = w.Spinner,
                B = s.forwardRef((e, t) => {
                    let { className: r, size: s, ...i } = e,
                        { variant: o, size: n, action: d } = (0, l.y)(h)
                    return 'number' == typeof s
                        ? (0, a.jsx)(w.Icon, {
                              ref: t,
                              ...i,
                              className: k({ class: r }),
                              size: s,
                          })
                        : (void 0 !== i.height || void 0 !== i.width) &&
                            void 0 === s
                          ? (0, a.jsx)(w.Icon, {
                                ref: t,
                                ...i,
                                className: k({ class: r }),
                            })
                          : (0, a.jsx)(w.Icon, {
                                ...i,
                                className: k({
                                    parentVariants: {
                                        size: n,
                                        variant: o,
                                        action: d,
                                    },
                                    size: s,
                                    class: r,
                                }),
                                ref: t,
                            })
                }),
                O = s.forwardRef((e, t) => {
                    let {
                        className: r,
                        space: s = 'md',
                        isAttached: i = !1,
                        ...o
                    } = e
                    return (0, a.jsx)(w.Group, {
                        className: z({ class: r, space: s, isAttached: i }),
                        ...o,
                        ref: t,
                    })
                })
            ;(T.displayName = 'Button'),
                (R.displayName = 'ButtonText'),
                (I.displayName = 'ButtonSpinner'),
                (B.displayName = 'ButtonIcon'),
                (O.displayName = 'ButtonGroup')
        },
        9586: function (e, t, r) {
            r.d(t, {
                NI: function () {
                    return z
                },
            })
            var a = r(3864),
                s = r(1118),
                i = r(4392),
                o = r(2265),
                n = r(4167),
                l = r(6939),
                d = r(3018),
                u = r(6148),
                x = r(5245)
            let c = 'FORM_CONTROL',
                p = o.forwardRef((e, t) => {
                    let {
                            height: r,
                            width: s,
                            fill: i,
                            color: l,
                            size: d,
                            stroke: u = 'currentColor',
                            as: x,
                            ...c
                        } = e,
                        p = (0, o.useMemo)(
                            () =>
                                d
                                    ? { size: d }
                                    : r && s
                                      ? { height: r, width: s }
                                      : r
                                        ? { height: r }
                                        : s
                                          ? { width: s }
                                          : {},
                            [d, r, s]
                        ),
                        b = {}
                    return (l && (b = { ...b, color: l }),
                    u && (b = { ...b, stroke: u }),
                    i && (b = { ...b, fill: i }),
                    x)
                        ? (0, a.jsx)(x, { ref: t, ...p, ...b, ...c })
                        : (0, a.jsx)(n.Svg, {
                              ref: t,
                              height: r,
                              width: s,
                              ...b,
                              ...c,
                          })
                }),
                b = (0, d.D)({
                    base: 'flex flex-col',
                    variants: { size: { sm: '', md: '', lg: '' } },
                }),
                v = (0, d.D)({
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
                g = (0, d.D)({
                    base: 'flex flex-row justify-start items-center mt-1 gap-1',
                }),
                h = (0, d.D)({
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
                y = (0, d.D)({
                    base: 'flex flex-row justify-start items-center mt-1',
                }),
                m = (0, d.D)({
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
                f = (0, d.D)({
                    base: 'flex flex-row justify-start items-center mb-1',
                }),
                w = (0, d.D)({
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
                N = (0, d.D)({
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
                j = o.forwardRef((e, t) => {
                    let { className: r, ...i } = e,
                        { size: o } = (0, u.y)(c)
                    return (0, a.jsx)(s.Z, {
                        ref: t,
                        className: N({ parentVariants: { size: o }, class: r }),
                        ...i,
                    })
                }),
                k = (0, l.y3)({
                    Root: (0, u.a)(i.Z, c),
                    Error: i.Z,
                    ErrorText: s.Z,
                    ErrorIcon: p,
                    Label: i.Z,
                    LabelText: s.Z,
                    LabelAstrick: j,
                    Helper: i.Z,
                    HelperText: s.Z,
                })
            ;(0, x.BO)(k, { className: 'style' }),
                (0, x.BO)(k.Error, { className: 'style' }),
                (0, x.BO)(k.Error.Text, { className: 'style' }),
                (0, x.BO)(k.Label, { className: 'style' }),
                (0, x.BO)(k.Label.Text, { className: 'style' }),
                (0, x.BO)(k.Helper, { className: 'style' }),
                (0, x.BO)(k.Helper.Text, { className: 'style' }),
                (0, x.BO)(k.Error.Icon, {
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
            let z = o.forwardRef((e, t) => {
                    let { className: r, size: s = 'md', ...i } = e
                    return (0, a.jsx)(k, {
                        ref: t,
                        className: b({ size: s, class: r }),
                        ...i,
                        context: { size: s },
                    })
                }),
                T = o.forwardRef((e, t) => {
                    let { className: r, ...s } = e
                    return (0, a.jsx)(k.Error, {
                        ref: t,
                        className: g({ class: r }),
                        ...s,
                    })
                }),
                R = o.forwardRef((e, t) => {
                    let { className: r, size: s, ...i } = e,
                        { size: o } = (0, u.y)(c)
                    return (0, a.jsx)(k.Error.Text, {
                        className: h({
                            parentVariants: { size: o },
                            size: s,
                            class: r,
                        }),
                        ref: t,
                        ...i,
                    })
                }),
                I = o.forwardRef((e, t) => {
                    let { className: r, size: s, ...i } = e,
                        { size: o } = (0, u.y)(c)
                    return 'number' == typeof s
                        ? (0, a.jsx)(k.Error.Icon, {
                              ref: t,
                              ...i,
                              className: v({ class: r }),
                              size: s,
                          })
                        : (void 0 !== i.height || void 0 !== i.width) &&
                            void 0 === s
                          ? (0, a.jsx)(k.Error.Icon, {
                                ref: t,
                                ...i,
                                className: v({ class: r }),
                            })
                          : (0, a.jsx)(k.Error.Icon, {
                                className: v({
                                    parentVariants: { size: o },
                                    size: s,
                                    class: r,
                                }),
                                ...i,
                            })
                }),
                B = o.forwardRef((e, t) => {
                    let { className: r, ...s } = e
                    return (0, a.jsx)(k.Label, {
                        ref: t,
                        className: f({ class: r }),
                        ...s,
                    })
                }),
                O = o.forwardRef((e, t) => {
                    let { className: r, size: s, ...i } = e,
                        { size: o } = (0, u.y)(c)
                    return (0, a.jsx)(k.Label.Text, {
                        className: w({
                            parentVariants: { size: o },
                            size: s,
                            class: r,
                        }),
                        ref: t,
                        ...i,
                    })
                }),
                C = o.forwardRef((e, t) => {
                    let { className: r, ...s } = e
                    return (0, a.jsx)(k.Helper, {
                        ref: t,
                        className: y({ class: r }),
                        ...s,
                    })
                }),
                D = o.forwardRef((e, t) => {
                    let { className: r, size: s, ...i } = e,
                        { size: o } = (0, u.y)(c)
                    return (0, a.jsx)(k.Helper.Text, {
                        className: m({
                            parentVariants: { size: o },
                            size: s,
                            class: r,
                        }),
                        ref: t,
                        ...i,
                    })
                })
            ;(z.displayName = 'FormControl'),
                (T.displayName = 'FormControlError'),
                (R.displayName = 'FormControlErrorText'),
                (I.displayName = 'FormControlErrorIcon'),
                (B.displayName = 'FormControlLabel'),
                (O.displayName = 'FormControlLabelText'),
                (j.displayName = 'FormControlLabelAstrick'),
                (C.displayName = 'FormControlHelper'),
                (D.displayName = 'FormControlHelperText')
        },
        9067: function (e, t, r) {
            r.d(t, {
                X: function () {
                    return d
                },
            })
            var a = r(3864),
                s = r(2265),
                i = r(3018)
            let o = r(5473).$
                    ? 'font-sans tracking-sm bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word'
                    : '',
                n = (0, i.D)({
                    base: 'text-typography-900 font-bold font-heading tracking-sm my-0 '.concat(
                        o
                    ),
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
                l = (0, s.memo)(
                    (0, s.forwardRef)((e, t) => {
                        let {
                            size: r,
                            className: s,
                            isTruncated: i,
                            bold: o,
                            underline: l,
                            strikeThrough: d,
                            sub: u,
                            italic: x,
                            highlight: c,
                            ...p
                        } = e
                        switch (r) {
                            case '5xl':
                            case '4xl':
                            case '3xl':
                                return (0, a.jsx)('h1', {
                                    className: n({
                                        size: r,
                                        isTruncated: i,
                                        bold: o,
                                        underline: l,
                                        strikeThrough: d,
                                        sub: u,
                                        italic: x,
                                        highlight: c,
                                        class: s,
                                    }),
                                    ...p,
                                    ref: t,
                                })
                            case '2xl':
                                return (0, a.jsx)('h2', {
                                    className: n({
                                        size: r,
                                        isTruncated: i,
                                        bold: o,
                                        underline: l,
                                        strikeThrough: d,
                                        sub: u,
                                        italic: x,
                                        highlight: c,
                                        class: s,
                                    }),
                                    ...p,
                                    ref: t,
                                })
                            case 'xl':
                                return (0, a.jsx)('h3', {
                                    className: n({
                                        size: r,
                                        isTruncated: i,
                                        bold: o,
                                        underline: l,
                                        strikeThrough: d,
                                        sub: u,
                                        italic: x,
                                        highlight: c,
                                        class: s,
                                    }),
                                    ...p,
                                    ref: t,
                                })
                            case 'lg':
                            default:
                                return (0, a.jsx)('h4', {
                                    className: n({
                                        size: r,
                                        isTruncated: i,
                                        bold: o,
                                        underline: l,
                                        strikeThrough: d,
                                        sub: u,
                                        italic: x,
                                        highlight: c,
                                        class: s,
                                    }),
                                    ...p,
                                    ref: t,
                                })
                            case 'md':
                                return (0, a.jsx)('h5', {
                                    className: n({
                                        size: r,
                                        isTruncated: i,
                                        bold: o,
                                        underline: l,
                                        strikeThrough: d,
                                        sub: u,
                                        italic: x,
                                        highlight: c,
                                        class: s,
                                    }),
                                    ...p,
                                    ref: t,
                                })
                            case 'sm':
                            case 'xs':
                                return (0, a.jsx)('h6', {
                                    className: n({
                                        size: r,
                                        isTruncated: i,
                                        bold: o,
                                        underline: l,
                                        strikeThrough: d,
                                        sub: u,
                                        italic: x,
                                        highlight: c,
                                        class: s,
                                    }),
                                    ...p,
                                    ref: t,
                                })
                        }
                    })
                ),
                d = (0, s.memo)(
                    (0, s.forwardRef)((e, t) => {
                        let { className: r, size: s = 'lg', as: i, ...o } = e,
                            {
                                isTruncated: d,
                                bold: u,
                                underline: x,
                                strikeThrough: c,
                                sub: p,
                                italic: b,
                                highlight: v,
                            } = o
                        return i
                            ? (0, a.jsx)(i, {
                                  className: n({
                                      size: s,
                                      isTruncated: d,
                                      bold: u,
                                      underline: x,
                                      strikeThrough: c,
                                      sub: p,
                                      italic: b,
                                      highlight: v,
                                      class: r,
                                  }),
                                  ...o,
                                  ref: t,
                              })
                            : (0, a.jsx)(l, {
                                  className: r,
                                  size: s,
                                  ref: t,
                                  ...o,
                              })
                    })
                )
            d.displayName = 'Heading'
        },
        7106: function (e, t, r) {
            r.d(t, {
                II: function () {
                    return k
                },
                UP: function () {
                    return R
                },
            })
            var a = r(3864),
                s = r(2265),
                i = r(7319),
                o = r(4167),
                n = r(4392),
                l = r(5729),
                d = r(8718),
                u = r(1790),
                x = r(3018),
                c = r(6148),
                p = r(9460),
                b = r(5245),
                v = r(9301)
            let g = 'INPUT',
                h = s.forwardRef((e, t) => {
                    let {
                        height: r,
                        width: i,
                        fill: n,
                        color: l,
                        classNameColor: d,
                        size: u,
                        stroke: x = 'currentColor',
                        as: c,
                        ...p
                    } = e
                    l = null != l ? l : d
                    let b = (0, s.useMemo)(
                            () =>
                                u
                                    ? { size: u }
                                    : r && i
                                      ? { height: r, width: i }
                                      : r
                                        ? { height: r }
                                        : i
                                          ? { width: i }
                                          : {},
                            [u, r, i]
                        ),
                        v = {}
                    return (n && (v = { ...v, fill: n }),
                    'currentColor' !== x
                        ? (v = { ...v, stroke: x })
                        : 'currentColor' === x &&
                          void 0 !== l &&
                          (v = { ...v, stroke: l }),
                    c)
                        ? (0, a.jsx)(c, { ref: t, ...p, ...b, ...v })
                        : (0, a.jsx)(o.Svg, {
                              ref: t,
                              height: r,
                              width: i,
                              ...v,
                              ...p,
                          })
                }),
                y = s.forwardRef((e, t) => {
                    let { ...r } = e
                    return (0, a.jsx)(n.Z, { ...r, ref: t })
                }),
                m = (0, i.J)({
                    Root: 'web' === l.Z.OS ? (0, c.a)(y, g) : (0, p.W)(y, g),
                    Icon: h,
                    Slot: d.Z,
                    Input: 'web' === l.Z.OS ? u.Z : (0, v.v)(u.Z),
                }),
                f = (0, x.D)({
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
                w = (0, x.D)({
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
                N = (0, x.D)({
                    base: 'justify-center items-center web:disabled:cursor-not-allowed',
                }),
                j = (0, x.D)({
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
            ;(0, b.BO)(y, { className: 'style' }),
                (0, b.BO)(m.Slot, { className: 'style' }),
                (0, b.BO)(m.Input, {
                    className: {
                        target: 'style',
                        nativeStyleToProp: { textAlign: !0 },
                    },
                }),
                (0, b.BO)(m.Icon, {
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
            let k = s.forwardRef((e, t) => {
                    let {
                        className: r,
                        variant: s = 'outline',
                        size: i = 'md',
                        ...o
                    } = e
                    return (0, a.jsx)(m, {
                        ref: t,
                        ...o,
                        className: f({ variant: s, size: i, class: r }),
                        context: { variant: s, size: i },
                    })
                }),
                z = s.forwardRef((e, t) => {
                    let { className: r, size: s, ...i } = e,
                        { size: o } = (0, c.y)(g)
                    return 'number' == typeof s
                        ? (0, a.jsx)(m.Icon, {
                              ref: t,
                              ...i,
                              className: w({ class: r }),
                              size: s,
                          })
                        : (void 0 !== i.height || void 0 !== i.width) &&
                            void 0 === s
                          ? (0, a.jsx)(m.Icon, {
                                ref: t,
                                ...i,
                                className: w({ class: r }),
                            })
                          : (0, a.jsx)(m.Icon, {
                                ref: t,
                                ...i,
                                className: w({
                                    parentVariants: { size: o },
                                    class: r,
                                }),
                            })
                }),
                T = s.forwardRef((e, t) => {
                    let { className: r, ...s } = e
                    return (0, a.jsx)(m.Slot, {
                        ref: t,
                        ...s,
                        className: N({ class: r }),
                    })
                }),
                R = s.forwardRef((e, t) => {
                    let { className: r, ...s } = e,
                        { variant: i, size: o } = (0, c.y)(g)
                    return (0, a.jsx)(m.Input, {
                        ref: t,
                        ...s,
                        className: j({
                            parentVariants: { variant: i, size: o },
                            class: r,
                        }),
                    })
                })
            ;(k.displayName = 'Input'),
                (z.displayName = 'InputIcon'),
                (T.displayName = 'InputSlot'),
                (R.displayName = 'InputField')
        },
        8800: function (e, t, r) {
            r.d(t, {
                x: function () {
                    return l
                },
            })
            var a = r(3864),
                s = r(2265),
                i = r(3018)
            let o = r(5473).$
                    ? 'font-sans tracking-sm my-0 bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word'
                    : '',
                n = (0, i.D)({
                    base: 'text-typography-700 font-body '.concat(o),
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
                l = s.forwardRef((e, t) => {
                    let {
                        className: r,
                        isTruncated: s,
                        bold: i,
                        underline: o,
                        strikeThrough: l,
                        size: d = 'md',
                        sub: u,
                        italic: x,
                        highlight: c,
                        ...p
                    } = e
                    return (0, a.jsx)('span', {
                        className: n({
                            isTruncated: s,
                            bold: i,
                            underline: o,
                            strikeThrough: l,
                            size: d,
                            sub: u,
                            italic: x,
                            highlight: c,
                            class: r,
                        }),
                        ...p,
                        ref: t,
                    })
                })
            l.displayName = 'Text'
        },
        2884: function (e, t, r) {
            r.d(t, {
                g: function () {
                    return d
                },
            })
            var a = r(3864),
                s = r(2265),
                i = r(5473),
                o = r(3018)
            let n = i.$
                    ? 'flex flex-col relative z-0 box-border border-0 list-none min-w-0 min-h-0 bg-transparent items-stretch m-0 p-0 text-decoration-none'
                    : '',
                l = (0, o.D)({
                    base: 'flex-col '.concat(n),
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
                d = s.forwardRef((e, t) => {
                    let { className: r, space: s, reversed: i, ...o } = e
                    return (0, a.jsx)('div', {
                        className: l({ space: s, reversed: i, class: r }),
                        ...o,
                        ref: t,
                    })
                })
            d.displayName = 'VStack'
        },
    },
])

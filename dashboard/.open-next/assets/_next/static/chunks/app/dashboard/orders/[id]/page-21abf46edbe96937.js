;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [190],
    {
        3796: function (e, t, a) {
            Promise.resolve().then(a.bind(a, 4264)),
                Promise.resolve().then(a.bind(a, 1189)),
                Promise.resolve().then(a.bind(a, 2948))
        },
        4264: function (e, t, a) {
            'use strict'
            a.d(t, {
                default: function () {
                    return eb
                },
            })
            var r = a(3864),
                s = a(2265),
                l = a(3018),
                o = a(4167),
                n = a(9460),
                i = a(6148),
                d = a(9072),
                c = a(5245),
                u = a(3375),
                x = a(1292),
                m = a(8718),
                f = a(4392),
                b = a(5729),
                p = a(1118),
                w = a(9960),
                h = a(9629),
                g = a(9578),
                y = a(4342),
                N = a(6766)
            let v = (0, N.createMotionAnimatedComponent)(m.Z),
                C = s.forwardRef((e, t) => {
                    let {
                            height: a,
                            width: l,
                            fill: n,
                            color: i,
                            size: d,
                            stroke: c,
                            as: u,
                            ...x
                        } = e,
                        m = (0, s.useMemo)(
                            () =>
                                d
                                    ? { size: d }
                                    : a && l
                                      ? { height: a, width: l }
                                      : a
                                        ? { height: a }
                                        : l
                                          ? { width: l }
                                          : {},
                            [d, a, l]
                        ),
                        f = {}
                    return (i && (f = { ...f, color: i }),
                    c && (f = { ...f, stroke: c }),
                    n && (f = { ...f, fill: n }),
                    u)
                        ? (0, r.jsx)(u, { ref: t, ...m, ...f, ...x })
                        : (0, r.jsx)(o.Svg, {
                              ref: t,
                              height: a,
                              width: l,
                              ...f,
                              ...x,
                          })
                }),
                S = (0, x._)({
                    Root: f.Z,
                    Content: (0, i.a)(N.Motion.View),
                    Item: 'web' === b.Z.OS ? (0, i.a)(m.Z) : (0, n.W)(m.Z),
                    ItemText: p.Z,
                    DragIndicator: f.Z,
                    IndicatorWrapper: f.Z,
                    Backdrop: v,
                    ScrollView: w.Z,
                    VirtualizedList: h.Z,
                    FlatList: g.Z,
                    SectionList: y.Z,
                    SectionHeaderText: u.H4,
                    Icon: C,
                    AnimatePresence: N.AnimatePresence,
                })
            ;(0, c.BO)(S, { className: 'style' }),
                (0, c.BO)(S.Content, { className: 'style' }),
                (0, c.BO)(S.Item, { className: 'style' }),
                (0, c.BO)(S.ItemText, { className: 'style' }),
                (0, c.BO)(S.DragIndicator, { className: 'style' }),
                (0, c.BO)(S.DragIndicatorWrapper, { className: 'style' }),
                (0, c.BO)(S.Backdrop, { className: 'style' }),
                (0, c.BO)(S.ScrollView, {
                    className: 'style',
                    contentContainerClassName: 'contentContainerStyle',
                    indicatorClassName: 'indicatorStyle',
                }),
                (0, c.BO)(S.VirtualizedList, {
                    className: 'style',
                    ListFooterComponentClassName: 'ListFooterComponentStyle',
                    ListHeaderComponentClassName: 'ListHeaderComponentStyle',
                    contentContainerClassName: 'contentContainerStyle',
                    indicatorClassName: 'indicatorStyle',
                }),
                (0, c.BO)(S.FlatList, {
                    className: 'style',
                    ListFooterComponentClassName: 'ListFooterComponentStyle',
                    ListHeaderComponentClassName: 'ListHeaderComponentStyle',
                    columnWrapperClassName: 'columnWrapperStyle',
                    contentContainerClassName: 'contentContainerStyle',
                    indicatorClassName: 'indicatorStyle',
                }),
                (0, c.BO)(S.SectionList, { className: 'style' }),
                (0, c.BO)(S.SectionHeaderText, { className: 'style' }),
                (0, c.BO)(S.Icon, { className: 'style' })
            let j = (0, l.D)({ base: 'w-full h-full web:pointer-events-none' }),
                I = (0, l.D)({
                    base: 'items-center rounded-tl-3xl rounded-tr-3xl p-2 bg-background-0 web:pointer-events-auto web:select-none shadow-lg',
                }),
                k = (0, l.D)({
                    base: 'w-full flex-row items-center p-3 rounded-sm data-[disabled=true]:opacity-40 data-[disabled=true]:web:pointer-events-auto data-[disabled=true]:web:cursor-not-allowed hover:bg-background-50 active:bg-background-100 data-[focus=true]:bg-background-100 web:data-[focus-visible=true]:bg-background-100 data-[checked=true]:bg-background-100',
                }),
                D = (0, l.D)({
                    base: 'text-typography-700 font-normal font-body tracking-md text-left mx-2',
                    variants: {
                        isTruncated: { true: '' },
                        bold: { true: 'font-bold' },
                        underline: { true: 'underline' },
                        strikeThrough: { true: 'line-through' },
                        size: {
                            '2xs': 'text-2xs',
                            xs: 'text-xs',
                            sm: 'text-sm',
                            md: 'text-md',
                            lg: 'text-lg',
                            xl: 'text-xl',
                            '2xl': 'text-2xl',
                            '3xl': 'text-3xl',
                            '4xl': 'text-4xl',
                            '5xl': 'text-5xl',
                            '6xl': 'text-6xl',
                        },
                    },
                    defaultVariants: { size: 'md' },
                }),
                L = (0, l.D)({
                    base: 'w-16 h-1 bg-background-400 rounded-full',
                }),
                _ = (0, l.D)({ base: 'w-full py-1 items-center' }),
                B = (0, l.D)({
                    base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-dark web:cursor-default web:pointer-events-auto',
                }),
                O = (0, l.D)({ base: 'w-full h-auto' }),
                R = (0, l.D)({ base: 'w-full h-auto' }),
                T = (0, l.D)({ base: 'w-full h-auto' }),
                V = (0, l.D)({ base: 'w-full h-auto' }),
                z = (0, l.D)({
                    base: 'leading-5 font-bold font-heading my-0 text-typography-500 p-3 uppercase',
                    variants: {
                        isTruncated: { true: '' },
                        bold: { true: 'font-bold' },
                        underline: { true: 'underline' },
                        strikeThrough: { true: 'line-through' },
                        size: {
                            '5xl': 'text-5xl',
                            '4xl': 'text-4xl',
                            '3xl': 'text-3xl',
                            '2xl': 'text-2xl',
                            xl: 'text-xl',
                            lg: 'text-lg',
                            md: 'text-md',
                            sm: 'text-sm',
                            xs: 'text-xs',
                        },
                        sub: { true: 'text-xs' },
                        italic: { true: 'italic' },
                        highlight: { true: 'bg-yellow500' },
                    },
                    defaultVariants: { size: 'xs' },
                })
            ;(0, l.D)({
                base: 'text-typography-900',
                variants: {
                    size: {
                        '2xs': 'h-3 w-3',
                        xs: 'h-3.5 w-3.5',
                        sm: 'h-4 w-4',
                        md: 'w-4 h-4',
                        lg: 'h-5 w-5',
                        xl: 'h-6 w-6',
                    },
                },
            })
            let Z = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e
                    return (0, r.jsx)(S, {
                        className: j({ class: a }),
                        ref: t,
                        ...s,
                    })
                }),
                H = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e
                    return (0, r.jsx)(S.Content, {
                        className: I({ class: a }),
                        ref: t,
                        ...s,
                    })
                }),
                P = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e
                    return (0, r.jsx)(S.Item, {
                        className: k({ class: a }),
                        ref: t,
                        ...s,
                    })
                }),
                F = s.forwardRef((e, t) => {
                    let {
                        isTruncated: a,
                        bold: s,
                        underline: l,
                        strikeThrough: o,
                        size: n,
                        className: i,
                        ...d
                    } = e
                    return (0, r.jsx)(S.ItemText, {
                        className: D({
                            class: i,
                            isTruncated: a,
                            bold: s,
                            underline: l,
                            strikeThrough: o,
                            size: n,
                        }),
                        ref: t,
                        ...d,
                    })
                }),
                W = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e
                    return (0, r.jsx)(S.DragIndicator, {
                        className: L({ class: a }),
                        ref: t,
                        ...s,
                    })
                }),
                A = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e
                    return (0, r.jsx)(S.DragIndicatorWrapper, {
                        className: _({ class: a }),
                        ref: t,
                        ...s,
                    })
                }),
                E = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e
                    return (0, r.jsx)(S.Backdrop, {
                        initial: { opacity: 0 },
                        animate: { opacity: 0.5 },
                        exit: { opacity: 0 },
                        ...s,
                        className: B({ class: a }),
                        ref: t,
                    })
                }),
                M = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e
                    return (0, r.jsx)(S.ScrollView, {
                        className: O({ class: a }),
                        ref: t,
                        ...s,
                    })
                }),
                $ = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e
                    return (0, r.jsx)(S.VirtualizedList, {
                        className: R({ class: a }),
                        ref: t,
                        ...s,
                    })
                }),
                q = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e
                    return (0, r.jsx)(S.FlatList, {
                        className: T({ class: a }),
                        ref: t,
                        ...s,
                    })
                }),
                G = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e
                    return (0, r.jsx)(S.SectionList, {
                        className: V({ class: a }),
                        ref: t,
                        ...s,
                    })
                }),
                J = s.forwardRef((e, t) => {
                    let {
                        className: a,
                        isTruncated: s,
                        bold: l,
                        underline: o,
                        strikeThrough: n,
                        size: i,
                        sub: d,
                        italic: c,
                        highlight: u,
                        ...x
                    } = e
                    return (0, r.jsx)(S.SectionHeaderText, {
                        className: z({
                            class: a,
                            isTruncated: s,
                            bold: l,
                            underline: o,
                            strikeThrough: n,
                            size: i,
                            sub: d,
                            italic: c,
                            highlight: u,
                        }),
                        ref: t,
                        ...x,
                    })
                })
            var K = a(1790)
            let Q = s.forwardRef((e, t) => {
                    let { ...a } = e
                    return (0, r.jsx)(m.Z, { ...a, ref: t })
                }),
                U = (0, l.D)({
                    base: 'text-background-500 fill-none',
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
                X = (0, l.D)({ base: '' }),
                Y = (0, l.D)({
                    base: 'border border-background-300 rounded flex-row items-center overflow-hidden data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:data-[hover=true]:border-background-300',
                    variants: {
                        size: { xl: 'h-12', lg: 'h-11', md: 'h-10', sm: 'h-9' },
                        variant: {
                            underlined:
                                'border-0 border-b rounded-none data-[hover=true]:border-primary-700 data-[focus=true]:border-primary-700 data-[focus=true]:web:shadow-[inset_0_-1px_0_0] data-[focus=true]:web:shadow-primary-700 data-[invalid=true]:border-error-700 data-[invalid=true]:web:shadow-error-700',
                            outline:
                                'data-[focus=true]:border-primary-700 data-[focus=true]:web:shadow-[inset_0_0_0_1px] data-[focus=true]:data-[hover=true]:web:shadow-primary-600 data-[invalid=true]:web:shadow-[inset_0_0_0_1px] data-[invalid=true]:border-error-700 data-[invalid=true]:web:shadow-error-700 data-[invalid=true]:data-[hover=true]:border-error-700',
                            rounded:
                                'rounded-full data-[focus=true]:border-primary-700 data-[focus=true]:web:shadow-[inset_0_0_0_1px] data-[focus=true]:web:shadow-primary-700 data-[invalid=true]:border-error-700 data-[invalid=true]:web:shadow-error-700',
                        },
                    },
                }),
                ee = (0, l.D)({
                    base: 'py-auto px-3 placeholder:text-typography-500 web:w-full h-full text-typography-900 pointer-events-none web:outline-none ios:leading-[0px]',
                    parentVariants: {
                        size: {
                            xl: 'text-xl',
                            lg: 'text-lg',
                            md: 'text-base',
                            sm: 'text-sm',
                        },
                        variant: {
                            underlined: 'px-0',
                            outline: '',
                            rounded: 'px-4',
                        },
                    },
                }),
                et = s.forwardRef((e, t) => {
                    let {
                        height: a,
                        width: l,
                        fill: n,
                        color: i,
                        classNameColor: d,
                        size: c,
                        stroke: u = 'currentColor',
                        as: x,
                        ...m
                    } = e
                    i = null != i ? i : d
                    let f = (0, s.useMemo)(
                            () =>
                                c
                                    ? { size: c }
                                    : a && l
                                      ? { height: a, width: l }
                                      : a
                                        ? { height: a }
                                        : l
                                          ? { width: l }
                                          : {},
                            [c, a, l]
                        ),
                        b = {}
                    return (n && (b = { ...b, fill: n }),
                    'currentColor' !== u
                        ? (b = { ...b, stroke: u })
                        : 'currentColor' === u &&
                          void 0 !== i &&
                          (b = { ...b, stroke: i }),
                    x)
                        ? (0, r.jsx)(x, { ref: t, ...m, ...f, ...b })
                        : (0, r.jsx)(o.Svg, {
                              ref: t,
                              height: a,
                              width: l,
                              ...b,
                              ...m,
                          })
                }),
                ea = (0, d.E)(
                    {
                        Root: f.Z,
                        Trigger: 'web' === b.Z.OS ? (0, i.a)(Q) : (0, n.W)(Q),
                        Input: K.Z,
                        Icon: et,
                    },
                    {
                        Portal: Z,
                        Backdrop: E,
                        Content: H,
                        DragIndicator: W,
                        DragIndicatorWrapper: A,
                        Item: P,
                        ItemText: F,
                        ScrollView: M,
                        VirtualizedList: $,
                        FlatList: q,
                        SectionList: G,
                        SectionHeaderText: J,
                    }
                )
            ;(0, c.BO)(ea, { className: 'style' }),
                (0, c.BO)(ea.Input, {
                    className: {
                        target: 'style',
                        nativeStyleToProp: { textAlign: !0 },
                    },
                }),
                (0, c.BO)(Q, { className: 'style' }),
                (0, c.BO)(ea.Icon, {
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
            let er = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e
                    return (0, r.jsx)(ea, {
                        className: X({ class: a }),
                        ref: t,
                        ...s,
                    })
                }),
                es = s.forwardRef((e, t) => {
                    let {
                        className: a,
                        size: s = 'md',
                        variant: l = 'outline',
                        ...o
                    } = e
                    return (0, r.jsx)(ea.Trigger, {
                        className: Y({ class: a, size: s, variant: l }),
                        ref: t,
                        context: { size: s, variant: l },
                        ...o,
                    })
                }),
                el = s.forwardRef((e, t) => {
                    let { className: a, ...s } = e,
                        { size: l, variant: o } = (0, i.y)()
                    return (0, r.jsx)(ea.Input, {
                        className: ee({
                            class: a,
                            parentVariants: { size: l, variant: o },
                        }),
                        ref: t,
                        ...s,
                    })
                }),
                eo = s.forwardRef((e, t) => {
                    let { className: a, size: s, ...l } = e,
                        { size: o } = (0, i.y)()
                    return 'number' == typeof s
                        ? (0, r.jsx)(ea.Icon, {
                              ref: t,
                              ...l,
                              className: U({ class: a }),
                              size: s,
                          })
                        : ((null == l ? void 0 : l.height) !== void 0 ||
                                (null == l ? void 0 : l.width) !== void 0) &&
                            void 0 === s
                          ? (0, r.jsx)(ea.Icon, {
                                ref: t,
                                ...l,
                                className: U({ class: a }),
                            })
                          : (0, r.jsx)(ea.Icon, {
                                className: U({
                                    class: a,
                                    size: s,
                                    parentVariants: { size: o },
                                }),
                                ref: t,
                                ...l,
                            })
                })
            ;(er.displayName = 'Select'),
                (es.displayName = 'SelectTrigger'),
                (el.displayName = 'SelectInput'),
                (eo.displayName = 'SelectIcon')
            let en = ea.Portal,
                ei = ea.Backdrop,
                ed = ea.Content,
                ec = ea.DragIndicator,
                eu = ea.DragIndicatorWrapper,
                ex = ea.Item
            ea.ItemText,
                ea.ScrollView,
                ea.VirtualizedList,
                ea.FlatList,
                ea.SectionList,
                ea.SectionHeaderText,
                a(3079)
            var em = (0, a(2119).$)('72e83ebb15562733d78a6900cd3e6eae929c2546')
            let ef = [
                { label: 'New', value: 'New' },
                { label: 'Payed', value: 'paid' },
                { label: 'Shipped', value: 'shipped' },
                { label: 'Delivered', value: 'delivered' },
            ]
            function eb(e) {
                let { status: t, id: a } = e
                return (0, r.jsxs)(er, {
                    defaultValue: t,
                    onValueChange: (e) => em(a, e),
                    children: [
                        (0, r.jsxs)(es, {
                            children: [
                                (0, r.jsx)(el, {
                                    placeholder: 'Select option',
                                }),
                                (0, r.jsx)(eo, { className: 'mr-3' }),
                            ],
                        }),
                        (0, r.jsxs)(en, {
                            children: [
                                (0, r.jsx)(ei, {}),
                                (0, r.jsxs)(ed, {
                                    children: [
                                        (0, r.jsx)(eu, {
                                            children: (0, r.jsx)(ec, {}),
                                        }),
                                        ef.map((e) =>
                                            (0, r.jsx)(
                                                ex,
                                                {
                                                    label: e.label,
                                                    value: e.value,
                                                },
                                                e.value
                                            )
                                        ),
                                    ],
                                }),
                            ],
                        }),
                    ],
                })
            }
        },
    },
    function (e) {
        e.O(0, [189, 121, 913, 965, 871, 466, 971, 117, 744], function () {
            return e((e.s = 3796))
        }),
            (_N_E = e.O())
    },
])

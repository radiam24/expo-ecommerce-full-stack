;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185],
    {
        549: function (o, r, c) {
            Promise.resolve().then(c.bind(c, 9346)),
                Promise.resolve().then(c.bind(c, 8927)),
                Promise.resolve().then(c.t.bind(c, 9073, 23)),
                Promise.resolve().then(c.t.bind(c, 7455, 23)),
                Promise.resolve().then(c.t.bind(c, 7960, 23)),
                Promise.resolve().then(c.bind(c, 1189)),
                Promise.resolve().then(c.bind(c, 2948))
        },
        9346: function (o, r, c) {
            'use strict'
            c.d(r, {
                default: function () {
                    return y
                },
            })
            var l = c(3864),
                e = c(2265),
                n = c(9376),
                t = c(4784),
                a = c(3346),
                i = c(5997),
                s = c(7313)
            function y(o) {
                let { children: r } = o,
                    [c] = (0, e.useState)(() => (0, t.createStyleRegistry)()),
                    y = (0, e.useRef)(!1)
                return (
                    (0, n.useServerInsertedHTML)(() => {
                        i.Z.registerComponent('Main', () => a.Main)
                        let { getStyleElement: o } = i.Z.getApplication('Main')
                        if (!y.current) {
                            y.current = !0
                            let r = [o(), c.styles(), (0, s.y)()]
                            return (
                                c.flush(),
                                (0, l.jsx)(l.Fragment, { children: r })
                            )
                        }
                    }),
                    (0, l.jsx)(t.StyleRegistry, { registry: c, children: r })
                )
            }
        },
        8927: function (o, r, c) {
            'use strict'
            c.d(r, {
                GluestackUIProvider: function () {
                    return p
                },
            })
            var l = c(3864),
                e = c(2265),
                n = c(5245)
            let t = {
                light: (0, n.gR)({
                    '--color-primary-0': '179 179 179',
                    '--color-primary-50': '153 153 153',
                    '--color-primary-100': '128 128 128',
                    '--color-primary-200': '115 115 115',
                    '--color-primary-300': '102 102 102',
                    '--color-primary-400': '82 82 82',
                    '--color-primary-500': '51 51 51',
                    '--color-primary-600': '41 41 41',
                    '--color-primary-700': '31 31 31',
                    '--color-primary-800': '13 13 13',
                    '--color-primary-900': '10 10 10',
                    '--color-primary-950': '8 8 8',
                    '--color-secondary-0': '254 255 255',
                    '--color-secondary-50': '241 242 242',
                    '--color-secondary-100': '231 232 232',
                    '--color-secondary-200': '219 219 219',
                    '--color-secondary-300': '175 176 176',
                    '--color-secondary-400': '114 115 115',
                    '--color-secondary-500': '94 95 95',
                    '--color-secondary-600': '81 82 82',
                    '--color-secondary-700': '63 64 64',
                    '--color-secondary-800': '39 38 38',
                    '--color-secondary-900': '24 23 23',
                    '--color-secondary-950': '11 12 12',
                    '--color-tertiary-0': '255 250 245',
                    '--color-tertiary-50': '255 242 229',
                    '--color-tertiary-100': '255 233 213',
                    '--color-tertiary-200': '254 209 170',
                    '--color-tertiary-300': '253 180 116',
                    '--color-tertiary-400': '251 157 75',
                    '--color-tertiary-500': '231 129 40',
                    '--color-tertiary-600': '215 117 31',
                    '--color-tertiary-700': '180 98 26',
                    '--color-tertiary-800': '130 73 23',
                    '--color-tertiary-900': '108 61 19',
                    '--color-tertiary-950': '84 49 18',
                    '--color-error-0': '254 233 233',
                    '--color-error-50': '254 226 226',
                    '--color-error-100': '254 202 202',
                    '--color-error-200': '252 165 165',
                    '--color-error-300': '248 113 113',
                    '--color-error-400': '239 68 68',
                    '--color-error-500': '230 53 53',
                    '--color-error-600': '220 38 38',
                    '--color-error-700': '185 28 28',
                    '--color-error-800': '153 27 27',
                    '--color-error-900': '127 29 29',
                    '--color-error-950': '83 19 19',
                    '--color-success-0': '228 255 244',
                    '--color-success-50': '202 255 232',
                    '--color-success-100': '162 241 192',
                    '--color-success-200': '132 211 162',
                    '--color-success-300': '102 181 132',
                    '--color-success-400': '72 151 102',
                    '--color-success-500': '52 131 82',
                    '--color-success-600': '42 121 72',
                    '--color-success-700': '32 111 62',
                    '--color-success-800': '22 101 52',
                    '--color-success-900': '20 83 45',
                    '--color-success-950': '27 50 36',
                    '--color-warning-0': '255 253 251',
                    '--color-warning-50': '255 249 245',
                    '--color-warning-100': '255 231 213',
                    '--color-warning-200': '254 205 170',
                    '--color-warning-300': '253 173 116',
                    '--color-warning-400': '251 149 75',
                    '--color-warning-500': '231 120 40',
                    '--color-warning-600': '215 108 31',
                    '--color-warning-700': '180 90 26',
                    '--color-warning-800': '130 68 23',
                    '--color-warning-900': '108 56 19',
                    '--color-warning-950': '84 45 18',
                    '--color-info-0': '236 248 254',
                    '--color-info-50': '199 235 252',
                    '--color-info-100': '162 221 250',
                    '--color-info-200': '124 207 248',
                    '--color-info-300': '87 194 246',
                    '--color-info-400': '50 180 244',
                    '--color-info-500': '13 166 242',
                    '--color-info-600': '11 141 205',
                    '--color-info-700': '9 115 168',
                    '--color-info-800': '7 90 131',
                    '--color-info-900': '5 64 93',
                    '--color-info-950': '3 38 56',
                    '--color-typography-0': '254 254 255',
                    '--color-typography-50': '245 245 245',
                    '--color-typography-100': '229 229 229',
                    '--color-typography-200': '219 219 220',
                    '--color-typography-300': '212 212 212',
                    '--color-typography-400': '163 163 163',
                    '--color-typography-500': '140 140 140',
                    '--color-typography-600': '115 115 115',
                    '--color-typography-700': '82 82 82',
                    '--color-typography-800': '64 64 64',
                    '--color-typography-900': '38 38 39',
                    '--color-typography-950': '23 23 23',
                    '--color-outline-0': '253 254 254',
                    '--color-outline-50': '243 243 243',
                    '--color-outline-100': '230 230 230',
                    '--color-outline-200': '221 220 219',
                    '--color-outline-300': '211 211 211',
                    '--color-outline-400': '165 163 163',
                    '--color-outline-500': '140 141 141',
                    '--color-outline-600': '115 116 116',
                    '--color-outline-700': '83 82 82',
                    '--color-outline-800': '65 65 65',
                    '--color-outline-900': '39 38 36',
                    '--color-outline-950': '26 23 23',
                    '--color-background-0': '255 255 255',
                    '--color-background-50': '246 246 246',
                    '--color-background-100': '242 241 241',
                    '--color-background-200': '220 219 219',
                    '--color-background-300': '213 212 212',
                    '--color-background-400': '162 163 163',
                    '--color-background-500': '142 142 142',
                    '--color-background-600': '116 116 116',
                    '--color-background-700': '83 82 82',
                    '--color-background-800': '65 64 64',
                    '--color-background-900': '39 38 37',
                    '--color-background-950': '24 23 24',
                    '--color-background-error': '254 241 241',
                    '--color-background-warning': '255 244 235',
                    '--color-background-success': '237 252 242',
                    '--color-background-muted': '247 248 247',
                    '--color-background-info': '235 248 254',
                    '--color-indicator-primary': '55 55 55',
                    '--color-indicator-info': '83 153 236',
                    '--color-indicator-error': '185 28 28',
                }),
                dark: (0, n.gR)({
                    '--color-primary-0': '130 130 130',
                    '--color-primary-50': '148 148 148',
                    '--color-primary-100': '158 158 158',
                    '--color-primary-200': '179 179 179',
                    '--color-primary-300': '199 199 199',
                    '--color-primary-400': '230 230 230',
                    '--color-primary-500': '240 240 240',
                    '--color-primary-600': '250 250 250',
                    '--color-primary-700': '252 252 252',
                    '--color-primary-800': '253 253 253',
                    '--color-primary-900': '253 252 252',
                    '--color-primary-950': '253 252 252',
                    '--color-secondary-0': '11 12 12',
                    '--color-secondary-50': '24 23 23',
                    '--color-secondary-100': '39 38 38',
                    '--color-secondary-200': '63 64 64',
                    '--color-secondary-300': '81 82 82',
                    '--color-secondary-400': '94 95 95',
                    '--color-secondary-500': '114 115 115',
                    '--color-secondary-600': '175 176 176',
                    '--color-secondary-700': '219 219 219',
                    '--color-secondary-800': '231 232 232',
                    '--color-secondary-900': '241 242 242',
                    '--color-secondary-950': '254 255 255',
                    '--color-tertiary-0': '84 49 18',
                    '--color-tertiary-50': '108 61 19',
                    '--color-tertiary-100': '130 73 23',
                    '--color-tertiary-200': '180 98 26',
                    '--color-tertiary-300': '215 117 31',
                    '--color-tertiary-400': '231 129 40',
                    '--color-tertiary-500': '251 157 75',
                    '--color-tertiary-600': '253 180 116',
                    '--color-tertiary-700': '254 209 170',
                    '--color-tertiary-800': '255 233 213',
                    '--color-tertiary-900': '255 242 229',
                    '--color-tertiary-950': '255 250 245',
                    '--color-error-0': '83 19 19',
                    '--color-error-50': '127 29 29',
                    '--color-error-100': '153 27 27',
                    '--color-error-200': '185 28 28',
                    '--color-error-300': '220 38 38',
                    '--color-error-400': '230 53 53',
                    '--color-error-500': '239 68 68',
                    '--color-error-600': '248 113 113',
                    '--color-error-700': '252 165 165',
                    '--color-error-800': '254 202 202',
                    '--color-error-900': '254 226 226',
                    '--color-error-950': '254 233 233',
                    '--color-success-0': '27 50 36',
                    '--color-success-50': '20 83 45',
                    '--color-success-100': '22 101 52',
                    '--color-success-200': '32 111 62',
                    '--color-success-300': '42 121 72',
                    '--color-success-400': '52 131 82',
                    '--color-success-500': '72 151 102',
                    '--color-success-600': '102 181 132',
                    '--color-success-700': '132 211 162',
                    '--color-success-800': '162 241 192',
                    '--color-success-900': '202 255 232',
                    '--color-success-950': '228 255 244',
                    '--color-warning-0': '84 45 18',
                    '--color-warning-50': '108 56 19',
                    '--color-warning-100': '130 68 23',
                    '--color-warning-200': '180 90 26',
                    '--color-warning-300': '215 108 31',
                    '--color-warning-400': '231 120 40',
                    '--color-warning-500': '251 149 75',
                    '--color-warning-600': '253 173 116',
                    '--color-warning-700': '254 205 170',
                    '--color-warning-800': '255 231 213',
                    '--color-warning-900': '255 249 245',
                    '--color-warning-950': '255 253 251',
                    '--color-info-0': '3 38 56',
                    '--color-info-50': '5 64 93',
                    '--color-info-100': '7 90 131',
                    '--color-info-200': '9 115 168',
                    '--color-info-300': '11 141 205',
                    '--color-info-400': '13 166 242',
                    '--color-info-500': '50 180 244',
                    '--color-info-600': '87 194 246',
                    '--color-info-700': '124 207 248',
                    '--color-info-800': '162 221 250',
                    '--color-info-900': '199 235 252',
                    '--color-info-950': '236 248 254',
                    '--color-typography-0': '23 23 23',
                    '--color-typography-50': '38 38 39',
                    '--color-typography-100': '64 64 64',
                    '--color-typography-200': '82 82 82',
                    '--color-typography-300': '115 115 115',
                    '--color-typography-400': '140 140 140',
                    '--color-typography-500': '163 163 163',
                    '--color-typography-600': '212 212 212',
                    '--color-typography-700': '219 219 220',
                    '--color-typography-800': '229 229 229',
                    '--color-typography-900': '245 245 245',
                    '--color-typography-950': '254 254 255',
                    '--color-outline-0': '26 23 23',
                    '--color-outline-50': '39 38 36',
                    '--color-outline-100': '65 65 65',
                    '--color-outline-200': '83 82 82',
                    '--color-outline-300': '115 116 116',
                    '--color-outline-400': '140 141 141',
                    '--color-outline-500': '165 163 163',
                    '--color-outline-600': '211 211 211',
                    '--color-outline-700': '221 220 219',
                    '--color-outline-800': '230 230 230',
                    '--color-outline-900': '243 243 243',
                    '--color-outline-950': '253 254 254',
                    '--color-background-0': '18 18 18',
                    '--color-background-50': '39 38 37',
                    '--color-background-100': '65 64 64',
                    '--color-background-200': '83 82 82',
                    '--color-background-300': '116 116 116',
                    '--color-background-400': '142 142 142',
                    '--color-background-500': '162 163 163',
                    '--color-background-600': '213 212 212',
                    '--color-background-700': '220 219 219',
                    '--color-background-800': '242 241 241',
                    '--color-background-900': '246 246 246',
                    '--color-background-950': '254 254 254',
                    '--color-background-error': '66 43 43',
                    '--color-background-warning': '65 47 35',
                    '--color-background-success': '28 43 33',
                    '--color-background-muted': '51 51 51',
                    '--color-background-info': '26 40 46',
                    '--color-indicator-primary': '247 247 247',
                    '--color-indicator-info': '161 199 245',
                    '--color-indicator-error': '232 70 69',
                }),
            }
            var a = c(9989),
                i = c(9939),
                s = c(7313)
            let y = (o) => {
                    let r = document.documentElement
                    try {
                        let c =
                            'system' === o
                                ? window.matchMedia(
                                      '(prefers-color-scheme: dark)'
                                  ).matches
                                    ? 'dark'
                                    : 'light'
                                : o
                        r.classList.remove('light' === c ? 'dark' : 'light'),
                            r.classList.add(c),
                            (r.style.colorScheme = c)
                    } catch (o) {
                        console.error(o)
                    }
                },
                u = 'nativewind-style',
                d = (o) => {
                    let r = document.createElement('style')
                    return (
                        (r.id = o),
                        r.appendChild(document.createTextNode('')),
                        r
                    )
                },
                g = e.useLayoutEffect
            function p(o) {
                let { mode: r = 'light', ...c } = o,
                    n = ''
                Object.keys(t).forEach((o) => {
                    n += 'dark' === o ? '\n .dark {\n ' : '\n:root {\n'
                    let r = Object.keys(t[o]).reduce(
                        (r, c) =>
                            (r += ''.concat(c, ':').concat(t[o][c], '; ')),
                        ''
                    )
                    n += ''.concat(r, ' \n}')
                }),
                    (0, s.W)(n)
                let p = e.useCallback((o) => {
                    y(o.matches ? 'dark' : 'light')
                }, [])
                return (
                    g(() => {
                        if ('system' !== r) {
                            let o = document.documentElement
                            o &&
                                (o.classList.add(r),
                                o.classList.remove(
                                    'light' === r ? 'dark' : 'light'
                                ),
                                (o.style.colorScheme = r))
                        }
                    }, [r]),
                    g(() => {
                        if ('system' !== r) return
                        let o = window.matchMedia(
                            '(prefers-color-scheme: dark)'
                        )
                        return o.addListener(p), () => o.removeListener(p)
                    }, [p]),
                    g(() => {
                        {
                            let o = document.documentElement
                            if (o) {
                                let r = o.querySelector('head'),
                                    c =
                                        null == r
                                            ? void 0
                                            : r.querySelector(
                                                  "[id='".concat(u, "']")
                                              )
                                !c &&
                                    (((c = d(u)).innerHTML = n),
                                    r && r.appendChild(c))
                            }
                        }
                    }, []),
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)('script', {
                                suppressHydrationWarning: !0,
                                dangerouslySetInnerHTML: {
                                    __html: '('
                                        .concat(y.toString(), ")('")
                                        .concat(r, "')"),
                                },
                            }),
                            (0, l.jsx)(a.N3, {
                                children: (0, l.jsx)(i.VW, {
                                    children: c.children,
                                }),
                            }),
                        ],
                    })
                )
            }
        },
        7960: function () {},
    },
    function (o) {
        o.O(0, [659, 587, 189, 913, 871, 595, 971, 117, 744], function () {
            return o((o.s = 549))
        }),
            (_N_E = o.O())
    },
])

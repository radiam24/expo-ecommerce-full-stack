import { createRequire as topLevelCreateRequire } from 'module'
const require = topLevelCreateRequire(import.meta.url)
import bannerUrl from 'url'
const __dirname = bannerUrl.fileURLToPath(new URL('.', import.meta.url))
globalThis.openNextDebug = false
globalThis.openNextVersion = '3.0.10'
var HF = Object.create
var Jd = Object.defineProperty
var jF = Object.getOwnPropertyDescriptor
var qF = Object.getOwnPropertyNames
var KF = Object.getPrototypeOf,
    YF = Object.prototype.hasOwnProperty
var i = (e, t) => () => (e && (t = e((e = 0))), t)
var Ye = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ue = (e, t) => {
        for (var o in t) Jd(e, o, { get: t[o], enumerable: !0 })
    },
    JF = (e, t, o, r) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
            for (let n of qF(t))
                !YF.call(e, n) &&
                    n !== o &&
                    Jd(e, n, {
                        get: () => t[n],
                        enumerable: !(r = jF(t, n)) || r.enumerable,
                    })
        return e
    }
var XF = (e, t, o) => (
    (o = e != null ? HF(KF(e)) : {}),
    JF(
        t || !e || !e.__esModule
            ? Jd(o, 'default', { value: e, enumerable: !0 })
            : o,
        e
    )
)
function hr(...e) {
    globalThis.openNextDebug && console.log(...e)
}
function QF(...e) {
    console.warn(...e)
}
function Xd(...e) {
    if (e.some((t) => eO(t))) hr(...e)
    else if (e.some((t) => t.__openNextInternal)) {
        let t = e.find((o) => o.__openNextInternal)
        if (t.logLevel === 0) {
            hr(...e)
            return
        } else if (t.logLevel === 1) {
            QF(...e)
            return
        } else {
            console.error(...e)
            return
        }
    } else console.error(...e)
}
var ZF,
    eO,
    Qd = i(() => {
        ;(ZF = [
            {
                clientName: 'S3Client',
                commandName: 'GetObjectCommand',
                errorName: 'NoSuchKey',
            },
        ]),
            (eO = (e) =>
                ZF.some(
                    (t) =>
                        t.clientName === e?.clientName &&
                        t.commandName === e?.commandName &&
                        (t.errorName === e?.error?.name ||
                            t.errorName === e?.error?.Code)
                ))
    })
var _g = {}
Ue(_g, { default: () => oO })
var tO,
    oO,
    Rg = i(() => {
        ;(tO = {
            convertFrom(e) {
                return Promise.resolve({ type: 'dummy', original: e })
            },
            convertTo(e) {
                return Promise.resolve({ type: 'dummy', original: e })
            },
            name: 'dummy',
        }),
            (oO = tO)
    })
var Tg = {}
Ue(Tg, { default: () => iO })
import { Writable as rO } from 'node:stream'
function nO(e) {
    return new Promise((t) => {
        setTimeout(() => {
            t({ serverId, type: 'warmer' })
        }, e.delay)
    })
}
var sO,
    iO,
    Ig = i(() => {
        ;(sO = async (e, t) => async (o) => {
            if ('type' in o) return nO(o)
            let r = await t.convertFrom(o),
                s = await e(r, {
                    writeHeaders: () =>
                        new rO({
                            write: (a, d, m) => {
                                m()
                            },
                        }),
                    onFinish: () => {},
                })
            return t.convertTo(s, o)
        }),
            (iO = { wrapper: sO, name: 'aws-lambda', supportStreaming: !1 })
    })
function Og() {
    return Math.random().toString(36).slice(2, 8)
}
var Dg = i(() => {})
var co,
    mo,
    kg = i(() => {
        ;(co = (e) => {
            let t = e.httpHandler
            return {
                setHttpHandler(o) {
                    t = o
                },
                httpHandler() {
                    return t
                },
                updateHttpClientConfig(o, r) {
                    t.updateHttpClientConfig(o, r)
                },
                httpHandlerConfigs() {
                    return t.httpHandlerConfigs()
                },
            }
        }),
            (mo = (e) => ({ httpHandler: e.httpHandler() }))
    })
var Lg = i(() => {
    kg()
})
var Mg = i(() => {})
var $g,
    Ug = i(() => {
        ;(function (e) {
            ;(e.HEADER = 'header'), (e.QUERY = 'query')
        })($g || ($g = {}))
    })
var Zd,
    Bg = i(() => {
        ;(function (e) {
            ;(e.HEADER = 'header'), (e.QUERY = 'query')
        })(Zd || (Zd = {}))
    })
var Gg = i(() => {})
var zg = i(() => {})
var Vg = i(() => {})
var Wg = i(() => {})
var Hg = i(() => {
    Ug()
    Bg()
    Gg()
    zg()
    Vg()
    Wg()
})
var jg = i(() => {})
var qg = i(() => {})
var Kg = i(() => {})
var Yg = i(() => {})
var Jg = i(() => {})
var Xg = i(() => {})
var Qg = i(() => {})
var Zg = i(() => {
    Jg()
    Xg()
    Qg()
})
var eh = i(() => {})
var th = i(() => {})
var Jr,
    oh = i(() => {
        ;(function (e) {
            ;(e.HTTP = 'http'), (e.HTTPS = 'https')
        })(Jr || (Jr = {}))
    })
var rh = i(() => {})
var nh = i(() => {})
var sh = i(() => {})
var ih = i(() => {})
var ah = i(() => {})
var ch = i(() => {
    rh()
    nh()
    sh()
    ih()
    ah()
})
var dh = i(() => {})
var Xr,
    em = i(() => {
        ;(function (e) {
            ;(e.MD5 = 'md5'),
                (e.CRC32 = 'crc32'),
                (e.CRC32C = 'crc32c'),
                (e.SHA1 = 'sha1'),
                (e.SHA256 = 'sha256')
        })(Xr || (Xr = {}))
    })
var mh = i(() => {
    em()
})
var lh = i(() => {})
var ph = i(() => {
    mh()
    lh()
    em()
})
var uh = i(() => {})
var tm,
    fh = i(() => {
        ;(function (e) {
            ;(e[(e.HEADER = 0)] = 'HEADER'), (e[(e.TRAILER = 1)] = 'TRAILER')
        })(tm || (tm = {}))
    })
var gh = i(() => {})
var hh = i(() => {})
var yh = i(() => {})
var xh = i(() => {})
var Eh = i(() => {})
var Ch = i(() => {
    hh()
    yh()
    xh()
    Eh()
})
var Sh = i(() => {})
var Qr,
    bh = i(() => {
        Qr = '__smithy_context'
    })
var wh = i(() => {})
var zt,
    Ah = i(() => {
        ;(function (e) {
            ;(e.PROFILE = 'profile'),
                (e.SSO_SESSION = 'sso-session'),
                (e.SERVICES = 'services')
        })(zt || (zt = {}))
    })
var vh = i(() => {})
var _h = i(() => {})
var Rh = i(() => {})
var Th = i(() => {})
var Ih = i(() => {})
var Ph = i(() => {})
var Nh = i(() => {})
var Fh = i(() => {})
var Oh = i(() => {})
var Dh,
    kh = i(() => {
        ;(function (e) {
            ;(e.HTTP_0_9 = 'http/0.9'),
                (e.HTTP_1_0 = 'http/1.0'),
                (e.TDS_8_0 = 'tds/8.0')
        })(Dh || (Dh = {}))
    })
var Lh = i(() => {})
var Mh = i(() => {})
var $h = i(() => {})
var Uh = i(() => {})
var Bh = i(() => {})
var Gh = i(() => {})
var Be = i(() => {
    Mg()
    Hg()
    jg()
    qg()
    Kg()
    Yg()
    Zg()
    eh()
    th()
    oh()
    ch()
    dh()
    ph()
    uh()
    fh()
    gh()
    Ch()
    Sh()
    bh()
    wh()
    Ah()
    vh()
    _h()
    Rh()
    Th()
    Ih()
    Ph()
    Nh()
    Fh()
    Oh()
    kh()
    Lh()
    Mh()
    $h()
    Uh()
    Bh()
    Gh()
})
var zh = i(() => {
    Be()
})
var Vh = i(() => {})
var Wh = i(() => {})
function aO(e) {
    return Object.keys(e).reduce((t, o) => {
        let r = e[o]
        return { ...t, [o]: Array.isArray(r) ? [...r] : r }
    }, {})
}
var X,
    Hh = i(() => {
        X = class e {
            constructor(t) {
                ;(this.method = t.method || 'GET'),
                    (this.hostname = t.hostname || 'localhost'),
                    (this.port = t.port),
                    (this.query = t.query || {}),
                    (this.headers = t.headers || {}),
                    (this.body = t.body),
                    (this.protocol = t.protocol
                        ? t.protocol.slice(-1) !== ':'
                            ? `${t.protocol}:`
                            : t.protocol
                        : 'https:'),
                    (this.path = t.path
                        ? t.path.charAt(0) !== '/'
                            ? `/${t.path}`
                            : t.path
                        : '/'),
                    (this.username = t.username),
                    (this.password = t.password),
                    (this.fragment = t.fragment)
            }
            static clone(t) {
                let o = new e({ ...t, headers: { ...t.headers } })
                return o.query && (o.query = aO(o.query)), o
            }
            static isInstance(t) {
                if (!t) return !1
                let o = t
                return (
                    'method' in o &&
                    'protocol' in o &&
                    'hostname' in o &&
                    'path' in o &&
                    typeof o.query == 'object' &&
                    typeof o.headers == 'object'
                )
            }
            clone() {
                return e.clone(this)
            }
        }
    })
var gt,
    jh = i(() => {
        gt = class {
            constructor(t) {
                ;(this.statusCode = t.statusCode),
                    (this.reason = t.reason),
                    (this.headers = t.headers || {}),
                    (this.body = t.body)
            }
            static isInstance(t) {
                if (!t) return !1
                let o = t
                return (
                    typeof o.statusCode == 'number' &&
                    typeof o.headers == 'object'
                )
            }
        }
    })
var qh = i(() => {})
var Kh = i(() => {})
var se = i(() => {
    Lg()
    zh()
    Vh()
    Wh()
    Hh()
    jh()
    qh()
    Kh()
})
var cO,
    dO,
    lo,
    zn = i(() => {
        se()
        ;(cO = (e) => (t) => async (o) => {
            if (!X.isInstance(o.request)) return t(o)
            let { request: r } = o,
                { handlerProtocol: n = '' } = e.requestHandler.metadata || {}
            if (n.indexOf('h2') >= 0 && !r.headers[':authority'])
                delete r.headers.host,
                    (r.headers[':authority'] =
                        r.hostname + (r.port ? ':' + r.port : ''))
            else if (!r.headers.host) {
                let s = r.hostname
                r.port != null && (s += `:${r.port}`), (r.headers.host = s)
            }
            return t(o)
        }),
            (dO = {
                name: 'hostHeaderMiddleware',
                step: 'build',
                priority: 'low',
                tags: ['HOST'],
                override: !0,
            }),
            (lo = (e) => ({
                applyToStack: (t) => {
                    t.add(cO(e), dO)
                },
            }))
    })
var mO,
    lO,
    po,
    Yh = i(() => {
        ;(mO = () => (e, t) => async (o) => {
            try {
                let r = await e(o),
                    {
                        clientName: n,
                        commandName: s,
                        logger: a,
                        dynamoDbDocumentClientOptions: d = {},
                    } = t,
                    {
                        overrideInputFilterSensitiveLog: m,
                        overrideOutputFilterSensitiveLog: l,
                    } = d,
                    g = m ?? t.inputFilterSensitiveLog,
                    u = l ?? t.outputFilterSensitiveLog,
                    { $metadata: C, ...w } = r.output
                return (
                    a?.info?.({
                        clientName: n,
                        commandName: s,
                        input: g(o.input),
                        output: u(w),
                        metadata: C,
                    }),
                    r
                )
            } catch (r) {
                let {
                        clientName: n,
                        commandName: s,
                        logger: a,
                        dynamoDbDocumentClientOptions: d = {},
                    } = t,
                    { overrideInputFilterSensitiveLog: m } = d,
                    l = m ?? t.inputFilterSensitiveLog
                throw (
                    (a?.error?.({
                        clientName: n,
                        commandName: s,
                        input: l(o.input),
                        error: r,
                        metadata: r.$metadata,
                    }),
                    r)
                )
            }
        }),
            (lO = {
                name: 'loggerMiddleware',
                tags: ['LOGGER'],
                step: 'initialize',
                override: !0,
            }),
            (po = (e) => ({
                applyToStack: (t) => {
                    t.add(mO(), lO)
                },
            }))
    })
var Vn = i(() => {
    Yh()
})
var Jh,
    pO,
    uO,
    fO,
    gO,
    uo,
    Wn = i(() => {
        se()
        ;(Jh = 'X-Amzn-Trace-Id'),
            (pO = 'AWS_LAMBDA_FUNCTION_NAME'),
            (uO = '_X_AMZN_TRACE_ID'),
            (fO = (e) => (t) => async (o) => {
                let { request: r } = o
                if (
                    !X.isInstance(r) ||
                    e.runtime !== 'node' ||
                    r.headers.hasOwnProperty(Jh)
                )
                    return t(o)
                let n = process.env[pO],
                    s = process.env[uO],
                    a = (d) => typeof d == 'string' && d.length > 0
                return (
                    a(n) && a(s) && (r.headers[Jh] = s), t({ ...o, request: r })
                )
            }),
            (gO = {
                step: 'build',
                tags: ['RECURSION_DETECTION'],
                name: 'recursionDetectionMiddleware',
                override: !0,
                priority: 'low',
            }),
            (uo = (e) => ({
                applyToStack: (t) => {
                    t.add(fO(e), gO)
                },
            }))
    })
var Xh = i(() => {
    Be()
})
var Oe,
    Qh = i(() => {
        Be()
        Oe = (e) => e[Qr] || (e[Qr] = {})
    })
var fe,
    Zh = i(() => {
        fe = (e) => {
            if (typeof e == 'function') return e
            let t = Promise.resolve(e)
            return () => t
        }
    })
var Ge = i(() => {
    Qh()
    Zh()
})
function hO(e) {
    let t = new Map()
    for (let o of e) t.set(o.schemeId, o)
    return t
}
var om,
    Ka = i(() => {
        Be()
        Ge()
        om = (e, t) => (o, r) => async (n) => {
            let s = e.httpAuthSchemeProvider(
                    await t.httpAuthSchemeParametersProvider(e, r, n.input)
                ),
                a = hO(e.httpAuthSchemes),
                d = Oe(r),
                m = []
            for (let l of s) {
                let g = a.get(l.schemeId)
                if (!g) {
                    m.push(
                        `HttpAuthScheme \`${l.schemeId}\` was not enabled for this service.`
                    )
                    continue
                }
                let u = g.identityProvider(
                    await t.identityProviderConfigProvider(e)
                )
                if (!u) {
                    m.push(
                        `HttpAuthScheme \`${l.schemeId}\` did not have an IdentityProvider configured.`
                    )
                    continue
                }
                let { identityProperties: C = {}, signingProperties: w = {} } =
                    l.propertiesExtractor?.(e, r) || {}
                ;(l.identityProperties = Object.assign(
                    l.identityProperties || {},
                    C
                )),
                    (l.signingProperties = Object.assign(
                        l.signingProperties || {},
                        w
                    )),
                    (d.selectedHttpAuthScheme = {
                        httpAuthOption: l,
                        identity: await u(l.identityProperties),
                        signer: g.signer,
                    })
                break
            }
            if (!d.selectedHttpAuthScheme)
                throw new Error(
                    m.join(`
`)
                )
            return o(n)
        }
    })
var yO,
    fo,
    ey = i(() => {
        Ka()
        ;(yO = {
            step: 'serialize',
            tags: ['HTTP_AUTH_SCHEME'],
            name: 'httpAuthSchemeMiddleware',
            override: !0,
            relation: 'before',
            toMiddleware: 'endpointV2Middleware',
        }),
            (fo = (
                e,
                {
                    httpAuthSchemeParametersProvider: t,
                    identityProviderConfigProvider: o,
                }
            ) => ({
                applyToStack: (r) => {
                    r.addRelativeTo(
                        om(e, {
                            httpAuthSchemeParametersProvider: t,
                            identityProviderConfigProvider: o,
                        }),
                        yO
                    )
                },
            }))
    })
var ty,
    rm = i(() => {
        ty = (e, t) => (o) => async (r) => {
            let { response: n } = await o(r)
            try {
                let s = await t(n, e)
                return { response: n, output: s }
            } catch (s) {
                if (
                    (Object.defineProperty(s, '$response', { value: n }),
                    !('$metadata' in s))
                ) {
                    let a =
                        'Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.'
                    ;(s.message +=
                        `
  ` + a),
                        typeof s.$responseBodyText < 'u' &&
                            s.$response &&
                            (s.$response.body = s.$responseBodyText)
                }
                throw s
            }
        }
    })
var oy,
    nm = i(() => {
        oy = (e, t) => (o, r) => async (n) => {
            let s =
                r.endpointV2?.url && e.urlParser
                    ? async () => e.urlParser(r.endpointV2.url)
                    : e.endpoint
            if (!s) throw new Error('No valid endpoint provider available.')
            let a = await t(n.input, { ...e, endpoint: s })
            return o({ ...n, request: a })
        }
    })
function y(e, t, o) {
    return {
        applyToStack: (r) => {
            r.add(ty(e, o), xO), r.add(oy(e, t), Hn)
        },
    }
}
var xO,
    Hn,
    ry = i(() => {
        rm()
        nm()
        ;(xO = {
            name: 'deserializerMiddleware',
            step: 'deserialize',
            tags: ['DESERIALIZER'],
            override: !0,
        }),
            (Hn = {
                name: 'serializerMiddleware',
                step: 'serialize',
                tags: ['SERIALIZER'],
                override: !0,
            })
    })
var R = i(() => {
    rm()
    ry()
    nm()
})
var nG,
    ny = i(() => {
        R()
        Ka()
        nG = {
            step: 'serialize',
            tags: ['HTTP_AUTH_SCHEME'],
            name: 'httpAuthSchemeMiddleware',
            override: !0,
            relation: 'before',
            toMiddleware: Hn.name,
        }
    })
var sy = i(() => {
    Ka()
    ey()
    ny()
})
var EO,
    CO,
    iy,
    sm = i(() => {
        se()
        Be()
        Ge()
        ;(EO = (e) => (t) => {
            throw t
        }),
            (CO = (e, t) => {}),
            (iy = (e) => (t, o) => async (r) => {
                if (!X.isInstance(r.request)) return t(r)
                let s = Oe(o).selectedHttpAuthScheme
                if (!s)
                    throw new Error(
                        'No HttpAuthScheme was selected: unable to sign request'
                    )
                let {
                        httpAuthOption: { signingProperties: a = {} },
                        identity: d,
                        signer: m,
                    } = s,
                    l = await t({
                        ...r,
                        request: await m.sign(r.request, d, a),
                    }).catch((m.errorHandler || EO)(a))
                return (m.successHandler || CO)(l.response, a), l
            })
    })
var SO,
    go,
    ay = i(() => {
        sm()
        ;(SO = {
            step: 'finalizeRequest',
            tags: ['HTTP_SIGNING'],
            name: 'httpSigningMiddleware',
            aliases: [
                'apiKeyMiddleware',
                'tokenMiddleware',
                'awsAuthMiddleware',
            ],
            override: !0,
            relation: 'after',
            toMiddleware: 'retryMiddleware',
        }),
            (go = (e) => ({
                applyToStack: (t) => {
                    t.addRelativeTo(iy(e), SO)
                },
            }))
    })
var cy = i(() => {
    sm()
    ay()
})
var ho,
    dy = i(() => {
        ho = (e) => {
            if (typeof e == 'function') return e
            let t = Promise.resolve(e)
            return () => t
        }
    })
function te(e, t, o, r, n) {
    return async function* (a, d, ...m) {
        let l = a.startingToken || void 0,
            g = !0,
            u
        for (; g; ) {
            if (
                ((d[o] = l),
                n && (d[n] = d[n] ?? a.pageSize),
                a.client instanceof e)
            )
                u = await bO(t, a.client, d, ...m)
            else
                throw new Error(
                    `Invalid client, expected instance of ${e.name}`
                )
            yield u
            let C = l
            ;(l = wO(u, r)), (g = !!(l && (!a.stopOnSameToken || l !== C)))
        }
        return void 0
    }
}
var bO,
    wO,
    my = i(() => {
        bO = async (e, t, o, ...r) => await t.send(new e(o), ...r)
        wO = (e, t) => {
            let o = e,
                r = t.split('.')
            for (let n of r) {
                if (!o || typeof o != 'object') return
                o = o[n]
            }
            return o
        }
    })
var Ya,
    im = i(() => {
        Ya = (e) =>
            (typeof ArrayBuffer == 'function' && e instanceof ArrayBuffer) ||
            Object.prototype.toString.call(e) === '[object ArrayBuffer]'
    })
import { Buffer as am } from 'buffer'
var Vt,
    Zr,
    yr = i(() => {
        im()
        ;(Vt = (e, t = 0, o = e.byteLength - t) => {
            if (!Ya(e))
                throw new TypeError(
                    `The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`
                )
            return am.from(e, t, o)
        }),
            (Zr = (e, t) => {
                if (typeof e != 'string')
                    throw new TypeError(
                        `The "input" argument must be of type string. Received type ${typeof e} (${e})`
                    )
                return t ? am.from(e, t) : am.from(e)
            })
    })
var AO,
    bt,
    ly = i(() => {
        yr()
        ;(AO = /^[A-Za-z0-9+/]*={0,2}$/),
            (bt = (e) => {
                if ((e.length * 3) % 4 !== 0)
                    throw new TypeError('Incorrect padding on base64 string.')
                if (!AO.exec(e)) throw new TypeError('Invalid base64 string.')
                let t = Zr(e, 'base64')
                return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
            })
    })
var Ee,
    cm = i(() => {
        yr()
        Ee = (e) => {
            let t = Zr(e, 'utf8')
            return new Uint8Array(
                t.buffer,
                t.byteOffset,
                t.byteLength / Uint8Array.BYTES_PER_ELEMENT
            )
        }
    })
var wt,
    py = i(() => {
        cm()
        wt = (e) =>
            typeof e == 'string'
                ? Ee(e)
                : ArrayBuffer.isView(e)
                  ? new Uint8Array(
                        e.buffer,
                        e.byteOffset,
                        e.byteLength / Uint8Array.BYTES_PER_ELEMENT
                    )
                  : new Uint8Array(e)
    })
var Je,
    uy = i(() => {
        yr()
        Je = (e) => {
            if (typeof e == 'string') return e
            if (
                typeof e != 'object' ||
                typeof e.byteOffset != 'number' ||
                typeof e.byteLength != 'number'
            )
                throw new Error(
                    '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
                )
            return Vt(e.buffer, e.byteOffset, e.byteLength).toString('utf8')
        }
    })
var ze = i(() => {
    cm()
    py()
    uy()
})
var De,
    fy = i(() => {
        yr()
        ze()
        De = (e) => {
            let t
            if (
                (typeof e == 'string' ? (t = Ee(e)) : (t = e),
                typeof t != 'object' ||
                    typeof t.byteOffset != 'number' ||
                    typeof t.byteLength != 'number')
            )
                throw new Error(
                    '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
                )
            return Vt(t.buffer, t.byteOffset, t.byteLength).toString('base64')
        }
    })
var Wt = i(() => {
    ly()
    fy()
})
function gy(e, t = 'utf-8') {
    return t === 'base64' ? De(e) : Je(e)
}
function hy(e, t) {
    return t === 'base64' ? Ht.mutate(bt(e)) : Ht.mutate(Ee(e))
}
var yy = i(() => {
    Wt()
    ze()
    dm()
})
var Ht,
    dm = i(() => {
        yy()
        Ht = class e extends Uint8Array {
            static fromString(t, o = 'utf-8') {
                switch (typeof t) {
                    case 'string':
                        return hy(t, o)
                    default:
                        throw new Error(
                            `Unsupported conversion from ${typeof t} to Uint8ArrayBlobAdapter.`
                        )
                }
            }
            static mutate(t) {
                return Object.setPrototypeOf(t, e.prototype), t
            }
            transformToString(t = 'utf-8') {
                return gy(this, t)
            }
        }
    })
var xy = i(() => {})
var ht,
    vO,
    mm = i(() => {
        ;(ht = (e) => encodeURIComponent(e).replace(/[!'()*]/g, vO)),
            (vO = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)
    })
var Ey = i(() => {
    mm()
})
var Ja = i(() => {
    mm()
    Ey()
})
function Xa(e) {
    let t = []
    for (let o of Object.keys(e).sort()) {
        let r = e[o]
        if (((o = ht(o)), Array.isArray(r)))
            for (let n = 0, s = r.length; n < s; n++) t.push(`${o}=${ht(r[n])}`)
        else {
            let n = o
            ;(r || typeof r == 'string') && (n += `=${ht(r)}`), t.push(n)
        }
    }
    return t.join('&')
}
var Qa = i(() => {
    Ja()
})
var Cy,
    Sy = i(() => {
        Cy = ['ECONNRESET', 'EPIPE', 'ETIMEDOUT']
    })
var lm,
    pm = i(() => {
        lm = (e) => {
            let t = {}
            for (let o of Object.keys(e)) {
                let r = e[o]
                t[o] = Array.isArray(r) ? r.join(',') : r
            }
            return t
        }
    })
var by,
    wy = i(() => {
        by = (e, t, o = 0) => {
            if (!o) return -1
            let r = (n) => {
                let s = setTimeout(() => {
                        e.destroy(),
                            t(
                                Object.assign(
                                    new Error(
                                        `Socket timed out without establishing a connection within ${o} ms`
                                    ),
                                    { name: 'TimeoutError' }
                                )
                            )
                    }, o - n),
                    a = (d) => {
                        d?.connecting
                            ? d.on('connect', () => {
                                  clearTimeout(s)
                              })
                            : clearTimeout(s)
                    }
                e.socket ? a(e.socket) : e.on('socket', a)
            }
            return o < 2e3 ? (r(0), 0) : setTimeout(r.bind(null, 1e3), 1e3)
        }
    })
var Ay,
    vy = i(() => {
        Ay = (e, { keepAlive: t, keepAliveMsecs: o }, r = 3e3) => {
            if (t !== !0) return -1
            let n = () => {
                e.socket
                    ? e.socket.setKeepAlive(t, o || 0)
                    : e.on('socket', (s) => {
                          s.setKeepAlive(t, o || 0)
                      })
            }
            return r === 0 ? (n(), 0) : setTimeout(n, r)
        }
    })
var _y,
    Ry = i(() => {
        _y = (e, t, o = 0) => {
            let r = (n) => {
                e.setTimeout(o - n, () => {
                    e.destroy(),
                        t(
                            Object.assign(
                                new Error(`Connection timed out after ${o} ms`),
                                { name: 'TimeoutError' }
                            )
                        )
                })
            }
            return 0 < o && o < 6e3
                ? (r(0), 0)
                : setTimeout(r.bind(null, o === 0 ? 0 : 3e3), 3e3)
        }
    })
import { Readable as _O } from 'stream'
async function um(e, t, o = Ty) {
    let r = t.headers ?? {},
        n = r.Expect || r.expect,
        s = -1,
        a = !1
    n === '100-continue' &&
        (await Promise.race([
            new Promise((d) => {
                s = Number(setTimeout(d, Math.max(Ty, o)))
            }),
            new Promise((d) => {
                e.on('continue', () => {
                    clearTimeout(s), d()
                }),
                    e.on('error', () => {
                        ;(a = !0), clearTimeout(s), d()
                    })
            }),
        ])),
        a || RO(e, t.body)
}
function RO(e, t) {
    if (t instanceof _O) {
        t.pipe(e)
        return
    }
    if (t) {
        if (Buffer.isBuffer(t) || typeof t == 'string') {
            e.end(t)
            return
        }
        let o = t
        if (
            typeof o == 'object' &&
            o.buffer &&
            typeof o.byteOffset == 'number' &&
            typeof o.byteLength == 'number'
        ) {
            e.end(Buffer.from(o.buffer, o.byteOffset, o.byteLength))
            return
        }
        e.end(Buffer.from(t))
        return
    }
    e.end()
}
var Ty,
    fm = i(() => {
        Ty = 1e3
    })
import { Agent as Iy, request as TO } from 'http'
import { Agent as Py, request as IO } from 'https'
var Xe,
    Ny = i(() => {
        se()
        Qa()
        Sy()
        pm()
        wy()
        vy()
        Ry()
        fm()
        Xe = class e {
            static create(t) {
                return typeof t?.handle == 'function' ? t : new e(t)
            }
            static checkSocketUsage(t, o, r = console) {
                let { sockets: n, requests: s, maxSockets: a } = t
                if (typeof a != 'number' || a === 1 / 0) return o
                let d = 15e3
                if (Date.now() - d < o) return o
                if (n && s)
                    for (let m in n) {
                        let l = n[m]?.length ?? 0,
                            g = s[m]?.length ?? 0
                        if (l >= a && g >= 2 * a)
                            return (
                                r?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${l} and ${g} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`),
                                Date.now()
                            )
                    }
                return o
            }
            constructor(t) {
                ;(this.socketWarningTimestamp = 0),
                    (this.metadata = { handlerProtocol: 'http/1.1' }),
                    (this.configProvider = new Promise((o, r) => {
                        typeof t == 'function'
                            ? t()
                                  .then((n) => {
                                      o(this.resolveDefaultConfig(n))
                                  })
                                  .catch(r)
                            : o(this.resolveDefaultConfig(t))
                    }))
            }
            resolveDefaultConfig(t) {
                let {
                        requestTimeout: o,
                        connectionTimeout: r,
                        socketTimeout: n,
                        httpAgent: s,
                        httpsAgent: a,
                    } = t || {},
                    d = !0,
                    m = 50
                return {
                    connectionTimeout: r,
                    requestTimeout: o ?? n,
                    httpAgent: (() =>
                        s instanceof Iy || typeof s?.destroy == 'function'
                            ? s
                            : new Iy({ keepAlive: d, maxSockets: m, ...s }))(),
                    httpsAgent: (() =>
                        a instanceof Py || typeof a?.destroy == 'function'
                            ? a
                            : new Py({ keepAlive: d, maxSockets: m, ...a }))(),
                    logger: console,
                }
            }
            destroy() {
                this.config?.httpAgent?.destroy(),
                    this.config?.httpsAgent?.destroy()
            }
            async handle(t, { abortSignal: o } = {}) {
                return (
                    this.config || (this.config = await this.configProvider),
                    new Promise((r, n) => {
                        let s,
                            a = [],
                            d = async (j) => {
                                await s, a.forEach(clearTimeout), r(j)
                            },
                            m = async (j) => {
                                await s, a.forEach(clearTimeout), n(j)
                            }
                        if (!this.config)
                            throw new Error(
                                'Node HTTP request handler config is not resolved'
                            )
                        if (o?.aborted) {
                            let j = new Error('Request aborted')
                            ;(j.name = 'AbortError'), m(j)
                            return
                        }
                        let l = t.protocol === 'https:',
                            g = l
                                ? this.config.httpsAgent
                                : this.config.httpAgent
                        a.push(
                            setTimeout(
                                () => {
                                    this.socketWarningTimestamp =
                                        e.checkSocketUsage(
                                            g,
                                            this.socketWarningTimestamp,
                                            this.config.logger
                                        )
                                },
                                this.config.socketAcquisitionWarningTimeout ??
                                    (this.config.requestTimeout ?? 2e3) +
                                        (this.config.connectionTimeout ?? 1e3)
                            )
                        )
                        let u = Xa(t.query || {}),
                            C
                        if (t.username != null || t.password != null) {
                            let j = t.username ?? '',
                                re = t.password ?? ''
                            C = `${j}:${re}`
                        }
                        let w = t.path
                        u && (w += `?${u}`),
                            t.fragment && (w += `#${t.fragment}`)
                        let v = t.hostname ?? ''
                        v[0] === '[' && v.endsWith(']')
                            ? (v = t.hostname.slice(1, -1))
                            : (v = t.hostname)
                        let U = {
                                headers: t.headers,
                                host: v,
                                method: t.method,
                                path: w,
                                port: t.port,
                                agent: g,
                                auth: C,
                            },
                            B = (l ? IO : TO)(U, (j) => {
                                let re = new gt({
                                    statusCode: j.statusCode || -1,
                                    reason: j.statusMessage,
                                    headers: lm(j.headers),
                                    body: j,
                                })
                                d({ response: re })
                            })
                        if (
                            (B.on('error', (j) => {
                                Cy.includes(j.code)
                                    ? m(
                                          Object.assign(j, {
                                              name: 'TimeoutError',
                                          })
                                      )
                                    : m(j)
                            }),
                            o)
                        ) {
                            let j = () => {
                                B.destroy()
                                let re = new Error('Request aborted')
                                ;(re.name = 'AbortError'), m(re)
                            }
                            if (typeof o.addEventListener == 'function') {
                                let re = o
                                re.addEventListener('abort', j, { once: !0 }),
                                    B.once('close', () =>
                                        re.removeEventListener('abort', j)
                                    )
                            } else o.onabort = j
                        }
                        a.push(by(B, m, this.config.connectionTimeout)),
                            a.push(_y(B, m, this.config.requestTimeout))
                        let Z = U.agent
                        typeof Z == 'object' &&
                            'keepAlive' in Z &&
                            a.push(
                                Ay(B, {
                                    keepAlive: Z.keepAlive,
                                    keepAliveMsecs: Z.keepAliveMsecs,
                                })
                            ),
                            (s = um(B, t, this.config.requestTimeout).catch(
                                (j) => (a.forEach(clearTimeout), n(j))
                            ))
                    })
                )
            }
            updateHttpClientConfig(t, o) {
                ;(this.config = void 0),
                    (this.configProvider = this.configProvider.then((r) => ({
                        ...r,
                        [t]: o,
                    })))
            }
            httpHandlerConfigs() {
                return this.config ?? {}
            }
        }
    })
var gm,
    Fy = i(() => {
        gm = class {
            constructor(t) {
                ;(this.sessions = []), (this.sessions = t ?? [])
            }
            poll() {
                if (this.sessions.length > 0) return this.sessions.shift()
            }
            offerLast(t) {
                this.sessions.push(t)
            }
            contains(t) {
                return this.sessions.includes(t)
            }
            remove(t) {
                this.sessions = this.sessions.filter((o) => o !== t)
            }
            [Symbol.iterator]() {
                return this.sessions[Symbol.iterator]()
            }
            destroy(t) {
                for (let o of this.sessions)
                    o === t && (o.destroyed || o.destroy())
            }
        }
    })
var Oy = i(() => {
    Fy()
})
var Dy = i(() => {
    se()
    Qa()
    pm()
    Oy()
    fm()
})
import { Writable as PO } from 'stream'
var Za,
    ky = i(() => {
        Za = class extends PO {
            constructor() {
                super(...arguments), (this.bufferedBytes = [])
            }
            _write(t, o, r) {
                this.bufferedBytes.push(t), r()
            }
        }
    })
async function FO(e) {
    let t = [],
        o = e.getReader(),
        r = !1,
        n = 0
    for (; !r; ) {
        let { done: d, value: m } = await o.read()
        m && (t.push(m), (n += m.length)), (r = d)
    }
    let s = new Uint8Array(n),
        a = 0
    for (let d of t) s.set(d, a), (a += d.length)
    return s
}
var At,
    NO,
    Ly = i(() => {
        ky()
        ;(At = (e) =>
            NO(e)
                ? FO(e)
                : new Promise((t, o) => {
                      let r = new Za()
                      e.pipe(r),
                          e.on('error', (n) => {
                              r.end(), o(n)
                          }),
                          r.on('error', o),
                          r.on('finish', function () {
                              let n = new Uint8Array(
                                  Buffer.concat(this.bufferedBytes)
                              )
                              t(n)
                          })
                  })),
            (NO = (e) =>
                typeof ReadableStream == 'function' &&
                e instanceof ReadableStream)
    })
var xr = i(() => {
    Ny()
    Dy()
    Ly()
})
var My = i(() => {})
var $y = i(() => {
    se()
    Qa()
    My()
})
async function OO(e) {
    let t = [],
        o = e.getReader(),
        r = !1,
        n = 0
    for (; !r; ) {
        let { done: d, value: m } = await o.read()
        m && (t.push(m), (n += m.length)), (r = d)
    }
    let s = new Uint8Array(n),
        a = 0
    for (let d of t) s.set(d, a), (a += d.length)
    return s
}
var Uy,
    By = i(() => {
        Uy = async (e) =>
            typeof Blob == 'function' && e instanceof Blob
                ? new Uint8Array(await e.arrayBuffer())
                : OO(e)
    })
var Gy = i(() => {
    $y()
    By()
})
function ec(e) {
    if (e.length % 2 !== 0)
        throw new Error('Hex encoded strings must have an even number length')
    let t = new Uint8Array(e.length / 2)
    for (let o = 0; o < e.length; o += 2) {
        let r = e.slice(o, o + 2).toLowerCase()
        if (r in hm) t[o / 2] = hm[r]
        else
            throw new Error(
                `Cannot decode unrecognized sequence ${r} as hexadecimal`
            )
    }
    return t
}
function le(e) {
    let t = ''
    for (let o = 0; o < e.byteLength; o++) t += zy[e[o]]
    return t
}
var zy,
    hm,
    yo = i(() => {
        ;(zy = {}), (hm = {})
        for (let e = 0; e < 256; e++) {
            let t = e.toString(16).toLowerCase()
            t.length === 1 && (t = `0${t}`), (zy[e] = t), (hm[t] = e)
        }
    })
var Er,
    Cr = i(() => {
        Er = (e) =>
            typeof ReadableStream == 'function' &&
            (e?.constructor?.name === ReadableStream.name ||
                e instanceof ReadableStream)
    })
var Vy,
    Hy,
    Wy,
    jy = i(() => {
        Gy()
        Wt()
        yo()
        ze()
        Cr()
        ;(Vy = 'The stream has already been transformed.'),
            (Hy = (e) => {
                if (!Wy(e) && !Er(e)) {
                    let n = e?.__proto__?.constructor?.name || e
                    throw new Error(
                        `Unexpected stream implementation, expect Blob or ReadableStream, got ${n}`
                    )
                }
                let t = !1,
                    o = async () => {
                        if (t) throw new Error(Vy)
                        return (t = !0), await Uy(e)
                    },
                    r = (n) => {
                        if (typeof n.stream != 'function')
                            throw new Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`)
                        return n.stream()
                    }
                return Object.assign(e, {
                    transformToByteArray: o,
                    transformToString: async (n) => {
                        let s = await o()
                        if (n === 'base64') return De(s)
                        if (n === 'hex') return le(s)
                        if (n === void 0 || n === 'utf8' || n === 'utf-8')
                            return Je(s)
                        if (typeof TextDecoder == 'function')
                            return new TextDecoder(n).decode(s)
                        throw new Error(
                            'TextDecoder is not available, please make sure polyfill is provided.'
                        )
                    },
                    transformToWebStream: () => {
                        if (t) throw new Error(Vy)
                        if (((t = !0), Wy(e))) return r(e)
                        if (Er(e)) return e
                        throw new Error(
                            `Cannot transform payload to web stream, got ${e}`
                        )
                    },
                })
            }),
            (Wy = (e) => typeof Blob == 'function' && e instanceof Blob)
    })
import { Readable as ym } from 'stream'
import { TextDecoder as DO } from 'util'
var qy,
    Ky,
    Yy = i(() => {
        xr()
        yr()
        jy()
        ;(qy = 'The stream has already been transformed.'),
            (Ky = (e) => {
                if (!(e instanceof ym))
                    try {
                        return Hy(e)
                    } catch {
                        let n = e?.__proto__?.constructor?.name || e
                        throw new Error(
                            `Unexpected stream implementation, expect Stream.Readable instance, got ${n}`
                        )
                    }
                let t = !1,
                    o = async () => {
                        if (t) throw new Error(qy)
                        return (t = !0), await At(e)
                    }
                return Object.assign(e, {
                    transformToByteArray: o,
                    transformToString: async (r) => {
                        let n = await o()
                        return r === void 0 || Buffer.isEncoding(r)
                            ? Vt(n.buffer, n.byteOffset, n.byteLength).toString(
                                  r
                              )
                            : new DO(r).decode(n)
                    },
                    transformToWebStream: () => {
                        if (t) throw new Error(qy)
                        if (e.readableFlowing !== null)
                            throw new Error(
                                'The stream has been consumed by other callbacks.'
                            )
                        if (typeof ym.toWeb != 'function')
                            throw new Error(
                                'Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.'
                            )
                        return (t = !0), ym.toWeb(e)
                    },
                })
            })
    })
var Jy = i(() => {})
var Xy = i(() => {
    Jy()
    Cr()
})
var Qy = i(() => {})
var Zy = i(() => {
    Qy()
    Cr()
})
var xm = i(() => {
    Wt()
})
var ex = i(() => {})
var tx = i(() => {
    Wt()
    Cr()
    ex()
})
var ox = i(() => {
    Cr()
    xm()
    tx()
})
var Em = i(() => {
    dm()
    xy()
    Yy()
    Xy()
    Zy()
    Cr()
    ox()
    xm()
})
var ce,
    rx = i(() => {
        Em()
        ce = async (e = new Uint8Array(), t) => {
            if (e instanceof Uint8Array) return Ht.mutate(e)
            if (!e) return Ht.mutate(new Uint8Array())
            let o = t.streamCollector(e)
            return Ht.mutate(await o)
        }
    })
function Sr(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, function (t) {
        return '%' + t.charCodeAt(0).toString(16).toUpperCase()
    })
}
var Cm = i(() => {})
function I(e, t) {
    return new Sm(e, t)
}
var Sm,
    nx = i(() => {
        en()
        se()
        Sm = class {
            constructor(t, o) {
                ;(this.input = t),
                    (this.context = o),
                    (this.query = {}),
                    (this.method = ''),
                    (this.headers = {}),
                    (this.path = ''),
                    (this.body = null),
                    (this.hostname = ''),
                    (this.resolvePathStack = [])
            }
            async build() {
                let {
                    hostname: t,
                    protocol: o = 'https',
                    port: r,
                    path: n,
                } = await this.context.endpoint()
                this.path = n
                for (let s of this.resolvePathStack) s(this.path)
                return new X({
                    protocol: o,
                    hostname: this.hostname || t,
                    port: r,
                    method: this.method,
                    path: this.path,
                    query: this.query,
                    body: this.body,
                    headers: this.headers,
                })
            }
            hn(t) {
                return (this.hostname = t), this
            }
            bp(t) {
                return (
                    this.resolvePathStack.push((o) => {
                        this.path =
                            `${o?.endsWith('/') ? o.slice(0, -1) : o || ''}` + t
                    }),
                    this
                )
            }
            p(t, o, r, n) {
                return (
                    this.resolvePathStack.push((s) => {
                        this.path = bm(s, this.input, t, o, r, n)
                    }),
                    this
                )
            }
            h(t) {
                return (this.headers = t), this
            }
            q(t) {
                return (this.query = t), this
            }
            b(t) {
                return (this.body = t), this
            }
            m(t) {
                return (this.method = t), this
            }
        }
    })
var bm,
    sx = i(() => {
        Cm()
        bm = (e, t, o, r, n, s) => {
            if (t != null && t[o] !== void 0) {
                let a = r()
                if (a.length <= 0)
                    throw new Error(
                        'Empty value provided for input HTTP label: ' + o + '.'
                    )
                e = e.replace(
                    n,
                    s
                        ? a
                              .split('/')
                              .map((d) => Sr(d))
                              .join('/')
                        : Sr(a)
                )
            } else
                throw new Error(
                    'No value provided for input HTTP label: ' + o + '.'
                )
            return e
        }
    })
var en = i(() => {
    rx()
    Cm()
    nx()
    sx()
})
var ix = i(() => {
    en()
})
function ax(e, t, o) {
    e.__smithy_context
        ? e.__smithy_context.features || (e.__smithy_context.features = {})
        : (e.__smithy_context = { features: {} }),
        (e.__smithy_context.features[t] = o)
}
var cx = i(() => {})
var vt,
    dx = i(() => {
        vt = class {
            constructor(t) {
                this.authSchemes = new Map()
                for (let [o, r] of Object.entries(t))
                    r !== void 0 && this.authSchemes.set(o, r)
            }
            getIdentityProvider(t) {
                return this.authSchemes.get(t)
            }
        }
    })
var mx = i(() => {
    se()
    Be()
})
var lx = i(() => {
    se()
})
var _t,
    px = i(() => {
        _t = class {
            async sign(t, o, r) {
                return t
            }
        }
    })
var ux = i(() => {
    mx()
    lx()
    px()
})
var kO,
    fx,
    wm,
    gx,
    hx = i(() => {
        ;(kO = (e) => (t) => wm(t) && t.expiration.getTime() - Date.now() < e),
            (fx = kO(3e5)),
            (wm = (e) => e.expiration !== void 0),
            (gx = (e, t, o) => {
                if (e === void 0) return
                let r =
                        typeof e != 'function'
                            ? async () => Promise.resolve(e)
                            : e,
                    n,
                    s,
                    a,
                    d = !1,
                    m = async (l) => {
                        s || (s = r(l))
                        try {
                            ;(n = await s), (a = !0), (d = !1)
                        } finally {
                            s = void 0
                        }
                        return n
                    }
                return t === void 0
                    ? async (l) => (
                          (!a || l?.forceRefresh) && (n = await m(l)), n
                      )
                    : async (l) => (
                          (!a || l?.forceRefresh) && (n = await m(l)),
                          d
                              ? n
                              : o(n)
                                ? (t(n) && (await m(l)), n)
                                : ((d = !0), n)
                      )
            })
    })
var yx = i(() => {
    dx()
    ux()
    hx()
})
var ee = i(() => {
    Xh()
    sy()
    cy()
    dy()
    my()
    ix()
    cx()
    yx()
})
function LO(e) {
    return e === void 0 ? !0 : typeof e == 'string' && e.length <= 50
}
function xo(e) {
    let t = ho(e.userAgentAppId ?? Am)
    return {
        ...e,
        customUserAgent:
            typeof e.customUserAgent == 'string'
                ? [[e.customUserAgent]]
                : e.customUserAgent,
        userAgentAppId: async () => {
            let o = await t()
            if (!LO(o)) {
                let r =
                    e.logger?.constructor?.name === 'NoOpLogger' || !e.logger
                        ? console
                        : e.logger
                typeof o != 'string'
                    ? r?.warn('userAgentAppId must be a string or undefined.')
                    : o.length > 50 &&
                      r?.warn(
                          'The provided userAgentAppId exceeds the maximum length of 50 characters.'
                      )
            }
            return o
        },
    }
}
var Am,
    xx = i(() => {
        ee()
        Am = void 0
    })
var Rt,
    Ex = i(() => {
        Rt = class {
            constructor({ size: t, params: o }) {
                ;(this.data = new Map()),
                    (this.parameters = []),
                    (this.capacity = t ?? 50),
                    o && (this.parameters = o)
            }
            get(t, o) {
                let r = this.hash(t)
                if (r === !1) return o()
                if (!this.data.has(r)) {
                    if (this.data.size > this.capacity + 10) {
                        let n = this.data.keys(),
                            s = 0
                        for (;;) {
                            let { value: a, done: d } = n.next()
                            if ((this.data.delete(a), d || ++s > 10)) break
                        }
                    }
                    this.data.set(r, o())
                }
                return this.data.get(r)
            }
            size() {
                return this.data.size
            }
            hash(t) {
                let o = '',
                    { parameters: r } = this
                if (r.length === 0) return !1
                for (let n of r) {
                    let s = String(t[n] ?? '')
                    if (s.includes('|;')) return !1
                    o += s + '|;'
                }
                return o
            }
        }
    })
var MO,
    jn,
    vm = i(() => {
        ;(MO = new RegExp(
            '^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$'
        )),
            (jn = (e) => MO.test(e) || (e.startsWith('[') && e.endsWith(']')))
    })
var $O,
    qn,
    _m = i(() => {
        ;($O = new RegExp('^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$')),
            (qn = (e, t = !1) => {
                if (!t) return $O.test(e)
                let o = e.split('.')
                for (let r of o) if (!qn(r)) return !1
                return !0
            })
    })
var Ve,
    tc = i(() => {
        Ve = {}
    })
var jt,
    Cx = i(() => {
        jt = 'endpoints'
    })
function Qe(e) {
    return typeof e != 'object' || e == null
        ? e
        : 'ref' in e
          ? `$${Qe(e.ref)}`
          : 'fn' in e
            ? `${e.fn}(${(e.argv || []).map(Qe).join(', ')})`
            : JSON.stringify(e, null, 2)
}
var Sx = i(() => {})
var Kn = i(() => {
    Cx()
    Sx()
})
var ne,
    bx = i(() => {
        ne = class extends Error {
            constructor(t) {
                super(t), (this.name = 'EndpointError')
            }
        }
    })
var wx = i(() => {})
var Ax = i(() => {})
var vx = i(() => {})
var _x = i(() => {})
var Rx = i(() => {})
var Tx = i(() => {})
var Ze = i(() => {
    bx()
    wx()
    Ax()
    vx()
    _x()
    Rx()
    Tx()
})
var Ix,
    Px = i(() => {
        Ix = (e, t) => e === t
    })
var Nx,
    Fx = i(() => {
        Ze()
        Nx = (e) => {
            let t = e.split('.'),
                o = []
            for (let r of t) {
                let n = r.indexOf('[')
                if (n !== -1) {
                    if (r.indexOf(']') !== r.length - 1)
                        throw new ne(`Path: '${e}' does not end with ']'`)
                    let s = r.slice(n + 1, -1)
                    if (Number.isNaN(parseInt(s)))
                        throw new ne(
                            `Invalid array index: '${s}' in path: '${e}'`
                        )
                    n !== 0 && o.push(r.slice(0, n)), o.push(s)
                } else o.push(r)
            }
            return o
        }
    })
var oc,
    Ox = i(() => {
        Ze()
        Fx()
        oc = (e, t) =>
            Nx(t).reduce((o, r) => {
                if (typeof o != 'object')
                    throw new ne(
                        `Index '${r}' in '${t}' not found in '${JSON.stringify(e)}'`
                    )
                return Array.isArray(o) ? o[parseInt(r)] : o[r]
            }, e)
    })
var Dx,
    kx = i(() => {
        Dx = (e) => e != null
    })
var Lx,
    Mx = i(() => {
        Lx = (e) => !e
    })
var Rm,
    $x,
    Ux = i(() => {
        Be()
        vm()
        ;(Rm = { [Jr.HTTP]: 80, [Jr.HTTPS]: 443 }),
            ($x = (e) => {
                let t = (() => {
                    try {
                        if (e instanceof URL) return e
                        if (typeof e == 'object' && 'hostname' in e) {
                            let {
                                    hostname: C,
                                    port: w,
                                    protocol: v = '',
                                    path: U = '',
                                    query: F = {},
                                } = e,
                                B = new URL(`${v}//${C}${w ? `:${w}` : ''}${U}`)
                            return (
                                (B.search = Object.entries(F)
                                    .map(([Z, j]) => `${Z}=${j}`)
                                    .join('&')),
                                B
                            )
                        }
                        return new URL(e)
                    } catch {
                        return null
                    }
                })()
                if (!t)
                    return (
                        console.error(
                            `Unable to parse ${JSON.stringify(e)} as a whatwg URL.`
                        ),
                        null
                    )
                let o = t.href,
                    {
                        host: r,
                        hostname: n,
                        pathname: s,
                        protocol: a,
                        search: d,
                    } = t
                if (d) return null
                let m = a.slice(0, -1)
                if (!Object.values(Jr).includes(m)) return null
                let l = jn(n),
                    g =
                        o.includes(`${r}:${Rm[m]}`) ||
                        (typeof e == 'string' && e.includes(`${r}:${Rm[m]}`)),
                    u = `${r}${g ? `:${Rm[m]}` : ''}`
                return {
                    scheme: m,
                    authority: u,
                    path: s,
                    normalizedPath: s.endsWith('/') ? s : `${s}/`,
                    isIp: l,
                }
            })
    })
var Bx,
    Gx = i(() => {
        Bx = (e, t) => e === t
    })
var zx,
    Vx = i(() => {
        zx = (e, t, o, r) =>
            t >= o || e.length < o
                ? null
                : r
                  ? e.substring(e.length - o, e.length - t)
                  : e.substring(t, o)
    })
var Wx,
    Hx = i(() => {
        Wx = (e) =>
            encodeURIComponent(e).replace(
                /[!*'()]/g,
                (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
            )
    })
var Tm = i(() => {
    Px()
    Ox()
    kx()
    _m()
    Mx()
    Ux()
    Gx()
    Vx()
    Hx()
})
var jx,
    qx = i(() => {
        Tm()
        jx = {
            booleanEquals: Ix,
            getAttr: oc,
            isSet: Dx,
            isValidHostLabel: qn,
            not: Lx,
            parseURL: $x,
            stringEquals: Bx,
            substring: zx,
            uriEncode: Wx,
        }
    })
var rc,
    Im = i(() => {
        Tm()
        rc = (e, t) => {
            let o = [],
                r = { ...t.endpointParams, ...t.referenceRecord },
                n = 0
            for (; n < e.length; ) {
                let s = e.indexOf('{', n)
                if (s === -1) {
                    o.push(e.slice(n))
                    break
                }
                o.push(e.slice(n, s))
                let a = e.indexOf('}', s)
                if (a === -1) {
                    o.push(e.slice(s))
                    break
                }
                e[s + 1] === '{' &&
                    e[a + 1] === '}' &&
                    (o.push(e.slice(s + 1, a)), (n = a + 2))
                let d = e.substring(s + 1, a)
                if (d.includes('#')) {
                    let [m, l] = d.split('#')
                    o.push(oc(r[m], l))
                } else o.push(r[d])
                n = a + 1
            }
            return o.join('')
        }
    })
var Kx,
    Yx = i(() => {
        Kx = ({ ref: e }, t) =>
            ({ ...t.endpointParams, ...t.referenceRecord })[e]
    })
var Eo,
    Yn = i(() => {
        Ze()
        Pm()
        Im()
        Yx()
        Eo = (e, t, o) => {
            if (typeof e == 'string') return rc(e, o)
            if (e.fn) return nc(e, o)
            if (e.ref) return Kx(e, o)
            throw new ne(
                `'${t}': ${String(e)} is not a string, function or reference.`
            )
        }
    })
var nc,
    Pm = i(() => {
        tc()
        qx()
        Yn()
        nc = ({ fn: e, argv: t }, o) => {
            let r = t.map((s) =>
                    ['boolean', 'number'].includes(typeof s)
                        ? s
                        : Eo(s, 'arg', o)
                ),
                n = e.split('.')
            return n[0] in Ve && n[1] != null
                ? Ve[n[0]][n[1]](...r)
                : jx[e](...r)
        }
    })
var Jx,
    Xx = i(() => {
        Kn()
        Ze()
        Pm()
        Jx = ({ assign: e, ...t }, o) => {
            if (e && e in o.referenceRecord)
                throw new ne(`'${e}' is already defined in Reference Record.`)
            let r = nc(t, o)
            return (
                o.logger?.debug?.(
                    `${jt} evaluateCondition: ${Qe(t)} = ${Qe(r)}`
                ),
                {
                    result: r === '' ? !0 : !!r,
                    ...(e != null && { toAssign: { name: e, value: r } }),
                }
            )
        }
    })
var tn,
    sc = i(() => {
        Kn()
        Xx()
        tn = (e = [], t) => {
            let o = {}
            for (let r of e) {
                let { result: n, toAssign: s } = Jx(r, {
                    ...t,
                    referenceRecord: { ...t.referenceRecord, ...o },
                })
                if (!n) return { result: n }
                s &&
                    ((o[s.name] = s.value),
                    t.logger?.debug?.(
                        `${jt} assign: ${s.name} := ${Qe(s.value)}`
                    ))
            }
            return { result: !0, referenceRecord: o }
        }
    })
var Qx,
    Zx = i(() => {
        Ze()
        Yn()
        Qx = (e, t) =>
            Object.entries(e).reduce(
                (o, [r, n]) => ({
                    ...o,
                    [r]: n.map((s) => {
                        let a = Eo(s, 'Header value entry', t)
                        if (typeof a != 'string')
                            throw new ne(
                                `Header '${r}' value '${a}' is not a string`
                            )
                        return a
                    }),
                }),
                {}
            )
    })
var Nm,
    eE = i(() => {
        Ze()
        Im()
        Fm()
        Nm = (e, t) => {
            if (Array.isArray(e)) return e.map((o) => Nm(o, t))
            switch (typeof e) {
                case 'string':
                    return rc(e, t)
                case 'object':
                    if (e === null)
                        throw new ne(`Unexpected endpoint property: ${e}`)
                    return ic(e, t)
                case 'boolean':
                    return e
                default:
                    throw new ne(
                        `Unexpected endpoint property type: ${typeof e}`
                    )
            }
        }
    })
var ic,
    Fm = i(() => {
        eE()
        ic = (e, t) =>
            Object.entries(e).reduce(
                (o, [r, n]) => ({ ...o, [r]: Nm(n, t) }),
                {}
            )
    })
var tE,
    oE = i(() => {
        Ze()
        Yn()
        tE = (e, t) => {
            let o = Eo(e, 'Endpoint URL', t)
            if (typeof o == 'string')
                try {
                    return new URL(o)
                } catch (r) {
                    throw (
                        (console.error(`Failed to construct URL with ${o}`, r),
                        r)
                    )
                }
            throw new ne(`Endpoint URL must be a string, got ${typeof o}`)
        }
    })
var rE,
    nE = i(() => {
        Kn()
        sc()
        Zx()
        Fm()
        oE()
        rE = (e, t) => {
            let { conditions: o, endpoint: r } = e,
                { result: n, referenceRecord: s } = tn(o, t)
            if (!n) return
            let a = { ...t, referenceRecord: { ...t.referenceRecord, ...s } },
                { url: d, properties: m, headers: l } = r
            return (
                t.logger?.debug?.(
                    `${jt} Resolving endpoint from template: ${Qe(r)}`
                ),
                {
                    ...(l != null && { headers: Qx(l, a) }),
                    ...(m != null && { properties: ic(m, a) }),
                    url: tE(d, a),
                }
            )
        }
    })
var sE,
    iE = i(() => {
        Ze()
        sc()
        Yn()
        sE = (e, t) => {
            let { conditions: o, error: r } = e,
                { result: n, referenceRecord: s } = tn(o, t)
            if (n)
                throw new ne(
                    Eo(r, 'Error', {
                        ...t,
                        referenceRecord: { ...t.referenceRecord, ...s },
                    })
                )
        }
    })
var aE,
    cE = i(() => {
        sc()
        Om()
        aE = (e, t) => {
            let { conditions: o, rules: r } = e,
                { result: n, referenceRecord: s } = tn(o, t)
            if (n)
                return ac(r, {
                    ...t,
                    referenceRecord: { ...t.referenceRecord, ...s },
                })
        }
    })
var ac,
    Om = i(() => {
        Ze()
        nE()
        iE()
        cE()
        ac = (e, t) => {
            for (let o of e)
                if (o.type === 'endpoint') {
                    let r = rE(o, t)
                    if (r) return r
                } else if (o.type === 'error') sE(o, t)
                else if (o.type === 'tree') {
                    let r = aE(o, t)
                    if (r) return r
                } else throw new ne(`Unknown endpoint rule: ${o}`)
            throw new ne('Rules evaluation failed')
        }
    })
var dE = i(() => {
    tc()
    Om()
})
var qt,
    mE = i(() => {
        Kn()
        Ze()
        dE()
        qt = (e, t) => {
            let { endpointParams: o, logger: r } = t,
                { parameters: n, rules: s } = e
            t.logger?.debug?.(`${jt} Initial EndpointParams: ${Qe(o)}`)
            let a = Object.entries(n)
                .filter(([, l]) => l.default != null)
                .map(([l, g]) => [l, g.default])
            if (a.length > 0) for (let [l, g] of a) o[l] = o[l] ?? g
            let d = Object.entries(n)
                .filter(([, l]) => l.required)
                .map(([l]) => l)
            for (let l of d)
                if (o[l] == null)
                    throw new ne(`Missing required parameter: '${l}'`)
            let m = ac(s, { endpointParams: o, logger: r, referenceRecord: {} })
            return t.logger?.debug?.(`${jt} Resolved endpoint: ${Qe(m)}`), m
        }
    })
var Tt = i(() => {
    Ex()
    vm()
    _m()
    tc()
    mE()
    Ze()
})
var Dm = i(() => {
    Tt()
})
var km,
    lE = i(() => {
        Tt()
        Dm()
        km = (e, t = !1) => {
            if (t) {
                for (let o of e.split('.')) if (!km(o)) return !1
                return !0
            }
            return !(
                !qn(e) ||
                e.length < 3 ||
                e.length > 63 ||
                e !== e.toLowerCase() ||
                jn(e)
            )
        }
    })
var pE,
    UO,
    uE,
    fE = i(() => {
        ;(pE = ':'),
            (UO = '/'),
            (uE = (e) => {
                let t = e.split(pE)
                if (t.length < 6) return null
                let [o, r, n, s, a, ...d] = t
                if (o !== 'arn' || r === '' || n === '' || d.join(pE) === '')
                    return null
                let m = d.map((l) => l.split(UO)).flat()
                return {
                    partition: r,
                    service: n,
                    region: s,
                    accountId: a,
                    resourceId: m,
                }
            })
    })
var hE,
    gE = i(() => {
        hE = {
            partitions: [
                {
                    id: 'aws',
                    outputs: {
                        dnsSuffix: 'amazonaws.com',
                        dualStackDnsSuffix: 'api.aws',
                        implicitGlobalRegion: 'us-east-1',
                        name: 'aws',
                        supportsDualStack: !0,
                        supportsFIPS: !0,
                    },
                    regionRegex: '^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$',
                    regions: {
                        'af-south-1': { description: 'Africa (Cape Town)' },
                        'ap-east-1': {
                            description: 'Asia Pacific (Hong Kong)',
                        },
                        'ap-northeast-1': {
                            description: 'Asia Pacific (Tokyo)',
                        },
                        'ap-northeast-2': {
                            description: 'Asia Pacific (Seoul)',
                        },
                        'ap-northeast-3': {
                            description: 'Asia Pacific (Osaka)',
                        },
                        'ap-south-1': { description: 'Asia Pacific (Mumbai)' },
                        'ap-south-2': {
                            description: 'Asia Pacific (Hyderabad)',
                        },
                        'ap-southeast-1': {
                            description: 'Asia Pacific (Singapore)',
                        },
                        'ap-southeast-2': {
                            description: 'Asia Pacific (Sydney)',
                        },
                        'ap-southeast-3': {
                            description: 'Asia Pacific (Jakarta)',
                        },
                        'ap-southeast-4': {
                            description: 'Asia Pacific (Melbourne)',
                        },
                        'ap-southeast-5': {
                            description: 'Asia Pacific (Malaysia)',
                        },
                        'aws-global': {
                            description: 'AWS Standard global region',
                        },
                        'ca-central-1': { description: 'Canada (Central)' },
                        'ca-west-1': { description: 'Canada West (Calgary)' },
                        'eu-central-1': { description: 'Europe (Frankfurt)' },
                        'eu-central-2': { description: 'Europe (Zurich)' },
                        'eu-north-1': { description: 'Europe (Stockholm)' },
                        'eu-south-1': { description: 'Europe (Milan)' },
                        'eu-south-2': { description: 'Europe (Spain)' },
                        'eu-west-1': { description: 'Europe (Ireland)' },
                        'eu-west-2': { description: 'Europe (London)' },
                        'eu-west-3': { description: 'Europe (Paris)' },
                        'il-central-1': { description: 'Israel (Tel Aviv)' },
                        'me-central-1': { description: 'Middle East (UAE)' },
                        'me-south-1': { description: 'Middle East (Bahrain)' },
                        'sa-east-1': {
                            description: 'South America (Sao Paulo)',
                        },
                        'us-east-1': { description: 'US East (N. Virginia)' },
                        'us-east-2': { description: 'US East (Ohio)' },
                        'us-west-1': { description: 'US West (N. California)' },
                        'us-west-2': { description: 'US West (Oregon)' },
                    },
                },
                {
                    id: 'aws-cn',
                    outputs: {
                        dnsSuffix: 'amazonaws.com.cn',
                        dualStackDnsSuffix: 'api.amazonwebservices.com.cn',
                        implicitGlobalRegion: 'cn-northwest-1',
                        name: 'aws-cn',
                        supportsDualStack: !0,
                        supportsFIPS: !0,
                    },
                    regionRegex: '^cn\\-\\w+\\-\\d+$',
                    regions: {
                        'aws-cn-global': {
                            description: 'AWS China global region',
                        },
                        'cn-north-1': { description: 'China (Beijing)' },
                        'cn-northwest-1': { description: 'China (Ningxia)' },
                    },
                },
                {
                    id: 'aws-us-gov',
                    outputs: {
                        dnsSuffix: 'amazonaws.com',
                        dualStackDnsSuffix: 'api.aws',
                        implicitGlobalRegion: 'us-gov-west-1',
                        name: 'aws-us-gov',
                        supportsDualStack: !0,
                        supportsFIPS: !0,
                    },
                    regionRegex: '^us\\-gov\\-\\w+\\-\\d+$',
                    regions: {
                        'aws-us-gov-global': {
                            description: 'AWS GovCloud (US) global region',
                        },
                        'us-gov-east-1': {
                            description: 'AWS GovCloud (US-East)',
                        },
                        'us-gov-west-1': {
                            description: 'AWS GovCloud (US-West)',
                        },
                    },
                },
                {
                    id: 'aws-iso',
                    outputs: {
                        dnsSuffix: 'c2s.ic.gov',
                        dualStackDnsSuffix: 'c2s.ic.gov',
                        implicitGlobalRegion: 'us-iso-east-1',
                        name: 'aws-iso',
                        supportsDualStack: !1,
                        supportsFIPS: !0,
                    },
                    regionRegex: '^us\\-iso\\-\\w+\\-\\d+$',
                    regions: {
                        'aws-iso-global': {
                            description: 'AWS ISO (US) global region',
                        },
                        'us-iso-east-1': { description: 'US ISO East' },
                        'us-iso-west-1': { description: 'US ISO WEST' },
                    },
                },
                {
                    id: 'aws-iso-b',
                    outputs: {
                        dnsSuffix: 'sc2s.sgov.gov',
                        dualStackDnsSuffix: 'sc2s.sgov.gov',
                        implicitGlobalRegion: 'us-isob-east-1',
                        name: 'aws-iso-b',
                        supportsDualStack: !1,
                        supportsFIPS: !0,
                    },
                    regionRegex: '^us\\-isob\\-\\w+\\-\\d+$',
                    regions: {
                        'aws-iso-b-global': {
                            description: 'AWS ISOB (US) global region',
                        },
                        'us-isob-east-1': {
                            description: 'US ISOB East (Ohio)',
                        },
                    },
                },
                {
                    id: 'aws-iso-e',
                    outputs: {
                        dnsSuffix: 'cloud.adc-e.uk',
                        dualStackDnsSuffix: 'cloud.adc-e.uk',
                        implicitGlobalRegion: 'eu-isoe-west-1',
                        name: 'aws-iso-e',
                        supportsDualStack: !1,
                        supportsFIPS: !0,
                    },
                    regionRegex: '^eu\\-isoe\\-\\w+\\-\\d+$',
                    regions: {
                        'eu-isoe-west-1': { description: 'EU ISOE West' },
                    },
                },
                {
                    id: 'aws-iso-f',
                    outputs: {
                        dnsSuffix: 'csp.hci.ic.gov',
                        dualStackDnsSuffix: 'csp.hci.ic.gov',
                        implicitGlobalRegion: 'us-isof-south-1',
                        name: 'aws-iso-f',
                        supportsDualStack: !1,
                        supportsFIPS: !0,
                    },
                    regionRegex: '^us\\-isof\\-\\w+\\-\\d+$',
                    regions: {},
                },
            ],
            version: '1.1',
        }
    })
var GO,
    zO,
    yE,
    xE,
    Lm = i(() => {
        gE()
        ;(GO = hE),
            (zO = ''),
            (yE = (e) => {
                let { partitions: t } = GO
                for (let r of t) {
                    let { regions: n, outputs: s } = r
                    for (let [a, d] of Object.entries(n))
                        if (a === e) return { ...s, ...d }
                }
                for (let r of t) {
                    let { regionRegex: n, outputs: s } = r
                    if (new RegExp(n).test(e)) return { ...s }
                }
                let o = t.find((r) => r.id === 'aws')
                if (!o)
                    throw new Error(
                        "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist."
                    )
                return { ...o.outputs }
            }),
            (xE = () => zO)
    })
var Kt,
    EE = i(() => {
        Tt()
        lE()
        fE()
        Lm()
        Kt = { isVirtualHostableS3Bucket: km, parseArn: uE, partition: yE }
        Ve.aws = Kt
    })
var CE = i(() => {
    Tt()
})
var SE = i(() => {
    Tt()
})
var bE = i(() => {})
var wE = i(() => {})
var AE = i(() => {})
var vE = i(() => {})
var _E = i(() => {})
var RE = i(() => {
    SE()
    bE()
    wE()
    AE()
    vE()
    _E()
})
var on = i(() => {
    EE()
    Lm()
    Dm()
    CE()
    RE()
})
var TE,
    Co,
    IE = i(() => {
        ;(TE = { warningEmitted: !1 }),
            (Co = (e) => {
                e &&
                    !TE.warningEmitted &&
                    parseInt(e.substring(1, e.indexOf('.'))) < 18 &&
                    ((TE.warningEmitted = !0),
                    process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`))
            })
    })
function J(e, t, o) {
    return e.$source || (e.$source = {}), (e.$source[t] = o), e
}
var PE = i(() => {})
function yt(e, t, o) {
    e.__aws_sdk_context
        ? e.__aws_sdk_context.features || (e.__aws_sdk_context.features = {})
        : (e.__aws_sdk_context = { features: {} }),
        (e.__aws_sdk_context.features[t] = o)
}
var NE = i(() => {})
var _e = i(() => {
    IE()
    PE()
    NE()
})
var Mm,
    FE = i(() => {
        se()
        Mm = (e) =>
            gt.isInstance(e) ? (e.headers?.date ?? e.headers?.Date) : void 0
    })
var cc,
    $m = i(() => {
        cc = (e) => new Date(Date.now() + e)
    })
var OE,
    DE = i(() => {
        $m()
        OE = (e, t) => Math.abs(cc(t).getTime() - e) >= 3e5
    })
var Um,
    kE = i(() => {
        DE()
        Um = (e, t) => {
            let o = Date.parse(e)
            return OE(o, t) ? o - Date.now() : t
        }
    })
var LE = i(() => {
    FE()
    $m()
    kE()
})
var Jn,
    ME,
    We,
    $E = i(() => {
        se()
        LE()
        ;(Jn = (e, t) => {
            if (!t)
                throw new Error(
                    `Property \`${e}\` is not resolved for AWS SDK SigV4Auth`
                )
            return t
        }),
            (ME = async (e) => {
                let t = Jn('context', e.context),
                    o = Jn('config', e.config),
                    r = t.endpointV2?.properties?.authSchemes?.[0],
                    s = await Jn('signer', o.signer)(r),
                    a = e?.signingRegion,
                    d = e?.signingRegionSet,
                    m = e?.signingName
                return {
                    config: o,
                    signer: s,
                    signingRegion: a,
                    signingRegionSet: d,
                    signingName: m,
                }
            }),
            (We = class {
                async sign(t, o, r) {
                    if (!X.isInstance(t))
                        throw new Error(
                            'The request is not an instance of `HttpRequest` and cannot be signed'
                        )
                    let n = await ME(r),
                        { config: s, signer: a } = n,
                        { signingRegion: d, signingName: m } = n,
                        l = r.context
                    if (l?.authSchemes?.length ?? 0 > 1) {
                        let [u, C] = l.authSchemes
                        u?.name === 'sigv4a' &&
                            C?.name === 'sigv4' &&
                            ((d = C?.signingRegion ?? d),
                            (m = C?.signingName ?? m))
                    }
                    return await a.sign(t, {
                        signingDate: cc(s.systemClockOffset),
                        signingRegion: d,
                        signingService: m,
                    })
                }
                errorHandler(t) {
                    return (o) => {
                        let r = o.ServerTime ?? Mm(o.$response)
                        if (r) {
                            let n = Jn('config', t.config),
                                s = n.systemClockOffset
                            ;(n.systemClockOffset = Um(r, n.systemClockOffset)),
                                n.systemClockOffset !== s &&
                                    o.$metadata &&
                                    (o.$metadata.clockSkewCorrected = !0)
                        }
                        throw o
                    }
                }
                successHandler(t, o) {
                    let r = Mm(t)
                    if (r) {
                        let n = Jn('config', o.config)
                        n.systemClockOffset = Um(r, n.systemClockOffset)
                    }
                }
            })
    })
var He,
    Xn = i(() => {
        He = class e extends Error {
            constructor(t, o = !0) {
                let r,
                    n = !0
                typeof o == 'boolean'
                    ? ((r = void 0), (n = o))
                    : o != null &&
                      typeof o == 'object' &&
                      ((r = o.logger), (n = o.tryNextLink ?? !0)),
                    super(t),
                    (this.name = 'ProviderError'),
                    (this.tryNextLink = n),
                    Object.setPrototypeOf(this, e.prototype),
                    r?.debug?.(
                        `@smithy/property-provider ${n ? '->' : '(!)'} ${t}`
                    )
            }
            static from(t, o = !0) {
                return Object.assign(new this(t.message, o), t)
            }
        }
    })
var $,
    UE = i(() => {
        Xn()
        $ = class e extends He {
            constructor(t, o = !0) {
                super(t, o),
                    (this.name = 'CredentialsProviderError'),
                    Object.setPrototypeOf(this, e.prototype)
            }
        }
    })
var ke,
    BE = i(() => {
        Xn()
        ke = class e extends He {
            constructor(t, o = !0) {
                super(t, o),
                    (this.name = 'TokenProviderError'),
                    Object.setPrototypeOf(this, e.prototype)
            }
        }
    })
var Yt,
    GE = i(() => {
        Xn()
        Yt =
            (...e) =>
            async () => {
                if (e.length === 0) throw new He('No providers in chain')
                let t
                for (let o of e)
                    try {
                        return await o()
                    } catch (r) {
                        if (((t = r), r?.tryNextLink)) continue
                        throw r
                    }
                throw t
            }
    })
var zE,
    VE = i(() => {
        zE = (e) => () => Promise.resolve(e)
    })
var br,
    WE = i(() => {
        br = (e, t, o) => {
            let r,
                n,
                s,
                a = !1,
                d = async () => {
                    n || (n = e())
                    try {
                        ;(r = await n), (s = !0), (a = !1)
                    } finally {
                        n = void 0
                    }
                    return r
                }
            return t === void 0
                ? async (m) => ((!s || m?.forceRefresh) && (r = await d()), r)
                : async (m) => (
                      (!s || m?.forceRefresh) && (r = await d()),
                      a
                          ? r
                          : o && !o(r)
                            ? ((a = !0), r)
                            : (t(r) && (await d()), r)
                  )
        }
    })
var Q = i(() => {
    UE()
    Xn()
    BE()
    GE()
    VE()
    WE()
})
var HE = i(() => {
    ee()
    Q()
})
var jE,
    qE,
    Bm,
    KE,
    YE,
    Gm,
    zm,
    Vm,
    Wm,
    VO,
    JE,
    XE,
    Qn,
    QE,
    ZE,
    eC,
    tC,
    dc,
    oC,
    rC,
    nC,
    Hm,
    sC,
    wr = i(() => {
        ;(jE = 'X-Amz-Algorithm'),
            (qE = 'X-Amz-Credential'),
            (Bm = 'X-Amz-Date'),
            (KE = 'X-Amz-SignedHeaders'),
            (YE = 'X-Amz-Expires'),
            (Gm = 'X-Amz-Signature'),
            (zm = 'X-Amz-Security-Token'),
            (Vm = 'authorization'),
            (Wm = Bm.toLowerCase()),
            (VO = 'date'),
            (JE = [Vm, Wm, VO]),
            (XE = Gm.toLowerCase()),
            (Qn = 'x-amz-content-sha256'),
            (QE = zm.toLowerCase()),
            (ZE = {
                authorization: !0,
                'cache-control': !0,
                connection: !0,
                expect: !0,
                from: !0,
                'keep-alive': !0,
                'max-forwards': !0,
                pragma: !0,
                referer: !0,
                te: !0,
                trailer: !0,
                'transfer-encoding': !0,
                upgrade: !0,
                'user-agent': !0,
                'x-amzn-trace-id': !0,
            }),
            (eC = /^proxy-/),
            (tC = /^sec-/),
            (dc = 'AWS4-HMAC-SHA256'),
            (oC = 'AWS4-HMAC-SHA256-PAYLOAD'),
            (rC = 'UNSIGNED-PAYLOAD'),
            (nC = 50),
            (Hm = 'aws4_request'),
            (sC = 60 * 60 * 24 * 7)
    })
var mc,
    jm,
    lc,
    aC,
    iC,
    qm = i(() => {
        yo()
        ze()
        wr()
        ;(mc = {}),
            (jm = []),
            (lc = (e, t, o) => `${e}/${t}/${o}/${Hm}`),
            (aC = async (e, t, o, r, n) => {
                let s = await iC(e, t.secretAccessKey, t.accessKeyId),
                    a = `${o}:${r}:${n}:${le(s)}:${t.sessionToken}`
                if (a in mc) return mc[a]
                for (jm.push(a); jm.length > nC; ) delete mc[jm.shift()]
                let d = `AWS4${t.secretAccessKey}`
                for (let m of [o, r, n, Hm]) d = await iC(e, d, m)
                return (mc[a] = d)
            }),
            (iC = (e, t, o) => {
                let r = new e(t)
                return r.update(wt(o)), r.digest()
            })
    })
var pc,
    Km = i(() => {
        wr()
        pc = ({ headers: e }, t, o) => {
            let r = {}
            for (let n of Object.keys(e).sort()) {
                if (e[n] == null) continue
                let s = n.toLowerCase()
                ;((s in ZE || t?.has(s) || eC.test(s) || tC.test(s)) &&
                    (!o || (o && !o.has(s)))) ||
                    (r[s] = e[n].trim().replace(/\s+/g, ' '))
            }
            return r
        }
    })
var Ym,
    Jm = i(() => {
        Ja()
        wr()
        Ym = ({ query: e = {} }) => {
            let t = [],
                o = {}
            for (let r of Object.keys(e)) {
                if (r.toLowerCase() === XE) continue
                let n = ht(r)
                t.push(n)
                let s = e[r]
                typeof s == 'string'
                    ? (o[n] = `${n}=${ht(s)}`)
                    : Array.isArray(s) &&
                      (o[n] = s
                          .slice(0)
                          .reduce((a, d) => a.concat([`${n}=${ht(d)}`]), [])
                          .sort()
                          .join('&'))
            }
            return t
                .sort()
                .map((r) => o[r])
                .filter((r) => r)
                .join('&')
        }
    })
var Zn,
    Xm = i(() => {
        im()
        yo()
        ze()
        wr()
        Zn = async ({ headers: e, body: t }, o) => {
            for (let r of Object.keys(e))
                if (r.toLowerCase() === Qn) return e[r]
            if (t == null)
                return 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
            if (typeof t == 'string' || ArrayBuffer.isView(t) || Ya(t)) {
                let r = new o()
                return r.update(wt(t)), le(await r.digest())
            }
            return rC
        }
    })
function dC(e) {
    for (let t = 0; t < 8; t++) e[t] ^= 255
    for (let t = 7; t > -1 && (e[t]++, e[t] === 0); t--);
}
var uc,
    cC,
    WO,
    Qm,
    mC = i(() => {
        yo()
        ze()
        uc = class {
            format(t) {
                let o = []
                for (let s of Object.keys(t)) {
                    let a = Ee(s)
                    o.push(
                        Uint8Array.from([a.byteLength]),
                        a,
                        this.formatHeaderValue(t[s])
                    )
                }
                let r = new Uint8Array(o.reduce((s, a) => s + a.byteLength, 0)),
                    n = 0
                for (let s of o) r.set(s, n), (n += s.byteLength)
                return r
            }
            formatHeaderValue(t) {
                switch (t.type) {
                    case 'boolean':
                        return Uint8Array.from([t.value ? 0 : 1])
                    case 'byte':
                        return Uint8Array.from([2, t.value])
                    case 'short':
                        let o = new DataView(new ArrayBuffer(3))
                        return (
                            o.setUint8(0, 3),
                            o.setInt16(1, t.value, !1),
                            new Uint8Array(o.buffer)
                        )
                    case 'integer':
                        let r = new DataView(new ArrayBuffer(5))
                        return (
                            r.setUint8(0, 4),
                            r.setInt32(1, t.value, !1),
                            new Uint8Array(r.buffer)
                        )
                    case 'long':
                        let n = new Uint8Array(9)
                        return (n[0] = 5), n.set(t.value.bytes, 1), n
                    case 'binary':
                        let s = new DataView(
                            new ArrayBuffer(3 + t.value.byteLength)
                        )
                        s.setUint8(0, 6), s.setUint16(1, t.value.byteLength, !1)
                        let a = new Uint8Array(s.buffer)
                        return a.set(t.value, 3), a
                    case 'string':
                        let d = Ee(t.value),
                            m = new DataView(new ArrayBuffer(3 + d.byteLength))
                        m.setUint8(0, 7), m.setUint16(1, d.byteLength, !1)
                        let l = new Uint8Array(m.buffer)
                        return l.set(d, 3), l
                    case 'timestamp':
                        let g = new Uint8Array(9)
                        return (
                            (g[0] = 8),
                            g.set(Qm.fromNumber(t.value.valueOf()).bytes, 1),
                            g
                        )
                    case 'uuid':
                        if (!WO.test(t.value))
                            throw new Error(`Invalid UUID received: ${t.value}`)
                        let u = new Uint8Array(17)
                        return (
                            (u[0] = 9),
                            u.set(ec(t.value.replace(/\-/g, '')), 1),
                            u
                        )
                }
            }
        }
        ;(function (e) {
            ;(e[(e.boolTrue = 0)] = 'boolTrue'),
                (e[(e.boolFalse = 1)] = 'boolFalse'),
                (e[(e.byte = 2)] = 'byte'),
                (e[(e.short = 3)] = 'short'),
                (e[(e.integer = 4)] = 'integer'),
                (e[(e.long = 5)] = 'long'),
                (e[(e.byteArray = 6)] = 'byteArray'),
                (e[(e.string = 7)] = 'string'),
                (e[(e.timestamp = 8)] = 'timestamp'),
                (e[(e.uuid = 9)] = 'uuid')
        })(cC || (cC = {}))
        ;(WO =
            /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/),
            (Qm = class e {
                constructor(t) {
                    if (((this.bytes = t), t.byteLength !== 8))
                        throw new Error('Int64 buffers must be exactly 8 bytes')
                }
                static fromNumber(t) {
                    if (t > 9223372036854776e3 || t < -9223372036854776e3)
                        throw new Error(
                            `${t} is too large (or, if negative, too small) to represent as an Int64`
                        )
                    let o = new Uint8Array(8)
                    for (
                        let r = 7, n = Math.abs(Math.round(t));
                        r > -1 && n > 0;
                        r--, n /= 256
                    )
                        o[r] = n
                    return t < 0 && dC(o), new e(o)
                }
                valueOf() {
                    let t = this.bytes.slice(0),
                        o = t[0] & 128
                    return o && dC(t), parseInt(le(t), 16) * (o ? -1 : 1)
                }
                toString() {
                    return String(this.valueOf())
                }
            })
    })
var lC,
    pC = i(() => {
        lC = (e, t) => {
            e = e.toLowerCase()
            for (let o of Object.keys(t)) if (e === o.toLowerCase()) return !0
            return !1
        }
    })
var Zm,
    el = i(() => {
        se()
        Zm = (e, t = {}) => {
            let { headers: o, query: r = {} } = X.clone(e)
            for (let n of Object.keys(o)) {
                let s = n.toLowerCase()
                ;((s.slice(0, 6) === 'x-amz-' &&
                    !t.unhoistableHeaders?.has(s)) ||
                    t.hoistableHeaders?.has(s)) &&
                    ((r[n] = o[n]), delete o[n])
            }
            return { ...e, headers: o, query: r }
        }
    })
var fc,
    tl = i(() => {
        se()
        wr()
        fc = (e) => {
            e = X.clone(e)
            for (let t of Object.keys(e.headers))
                JE.indexOf(t.toLowerCase()) > -1 && delete e.headers[t]
            return e
        }
    })
var uC,
    HO,
    fC = i(() => {
        ;(uC = (e) =>
            HO(e)
                .toISOString()
                .replace(/\.\d{3}Z$/, 'Z')),
            (HO = (e) =>
                typeof e == 'number'
                    ? new Date(e * 1e3)
                    : typeof e == 'string'
                      ? Number(e)
                          ? new Date(Number(e) * 1e3)
                          : new Date(e)
                      : e)
    })
var es,
    gc,
    gC,
    hC = i(() => {
        yo()
        Ge()
        Ja()
        ze()
        wr()
        qm()
        Km()
        Jm()
        Xm()
        mC()
        pC()
        el()
        tl()
        fC()
        ;(es = class {
            constructor({
                applyChecksum: t,
                credentials: o,
                region: r,
                service: n,
                sha256: s,
                uriEscapePath: a = !0,
            }) {
                ;(this.headerFormatter = new uc()),
                    (this.service = n),
                    (this.sha256 = s),
                    (this.uriEscapePath = a),
                    (this.applyChecksum = typeof t == 'boolean' ? t : !0),
                    (this.regionProvider = fe(r)),
                    (this.credentialProvider = fe(o))
            }
            async presign(t, o = {}) {
                let {
                        signingDate: r = new Date(),
                        expiresIn: n = 3600,
                        unsignableHeaders: s,
                        unhoistableHeaders: a,
                        signableHeaders: d,
                        hoistableHeaders: m,
                        signingRegion: l,
                        signingService: g,
                    } = o,
                    u = await this.credentialProvider()
                this.validateResolvedCredentials(u)
                let C = l ?? (await this.regionProvider()),
                    { longDate: w, shortDate: v } = gc(r)
                if (n > sC)
                    return Promise.reject(
                        'Signature version 4 presigned URLs must have an expiration date less than one week in the future'
                    )
                let U = lc(v, C, g ?? this.service),
                    F = Zm(fc(t), {
                        unhoistableHeaders: a,
                        hoistableHeaders: m,
                    })
                u.sessionToken && (F.query[zm] = u.sessionToken),
                    (F.query[jE] = dc),
                    (F.query[qE] = `${u.accessKeyId}/${U}`),
                    (F.query[Bm] = w),
                    (F.query[YE] = n.toString(10))
                let B = pc(F, s, d)
                return (
                    (F.query[KE] = gC(B)),
                    (F.query[Gm] = await this.getSignature(
                        w,
                        U,
                        this.getSigningKey(u, C, v, g),
                        this.createCanonicalRequest(
                            F,
                            B,
                            await Zn(t, this.sha256)
                        )
                    )),
                    F
                )
            }
            async sign(t, o) {
                return typeof t == 'string'
                    ? this.signString(t, o)
                    : t.headers && t.payload
                      ? this.signEvent(t, o)
                      : t.message
                        ? this.signMessage(t, o)
                        : this.signRequest(t, o)
            }
            async signEvent(
                { headers: t, payload: o },
                {
                    signingDate: r = new Date(),
                    priorSignature: n,
                    signingRegion: s,
                    signingService: a,
                }
            ) {
                let d = s ?? (await this.regionProvider()),
                    { shortDate: m, longDate: l } = gc(r),
                    g = lc(m, d, a ?? this.service),
                    u = await Zn({ headers: {}, body: o }, this.sha256),
                    C = new this.sha256()
                C.update(t)
                let w = le(await C.digest()),
                    v = [oC, l, g, n, w, u].join(`
`)
                return this.signString(v, {
                    signingDate: r,
                    signingRegion: d,
                    signingService: a,
                })
            }
            async signMessage(
                t,
                {
                    signingDate: o = new Date(),
                    signingRegion: r,
                    signingService: n,
                }
            ) {
                return this.signEvent(
                    {
                        headers: this.headerFormatter.format(t.message.headers),
                        payload: t.message.body,
                    },
                    {
                        signingDate: o,
                        signingRegion: r,
                        signingService: n,
                        priorSignature: t.priorSignature,
                    }
                ).then((a) => ({ message: t.message, signature: a }))
            }
            async signString(
                t,
                {
                    signingDate: o = new Date(),
                    signingRegion: r,
                    signingService: n,
                } = {}
            ) {
                let s = await this.credentialProvider()
                this.validateResolvedCredentials(s)
                let a = r ?? (await this.regionProvider()),
                    { shortDate: d } = gc(o),
                    m = new this.sha256(await this.getSigningKey(s, a, d, n))
                return m.update(wt(t)), le(await m.digest())
            }
            async signRequest(
                t,
                {
                    signingDate: o = new Date(),
                    signableHeaders: r,
                    unsignableHeaders: n,
                    signingRegion: s,
                    signingService: a,
                } = {}
            ) {
                let d = await this.credentialProvider()
                this.validateResolvedCredentials(d)
                let m = s ?? (await this.regionProvider()),
                    l = fc(t),
                    { longDate: g, shortDate: u } = gc(o),
                    C = lc(u, m, a ?? this.service)
                ;(l.headers[Wm] = g),
                    d.sessionToken && (l.headers[QE] = d.sessionToken)
                let w = await Zn(l, this.sha256)
                !lC(Qn, l.headers) && this.applyChecksum && (l.headers[Qn] = w)
                let v = pc(l, n, r),
                    U = await this.getSignature(
                        g,
                        C,
                        this.getSigningKey(d, m, u, a),
                        this.createCanonicalRequest(l, v, w)
                    )
                return (
                    (l.headers[Vm] =
                        `${dc} Credential=${d.accessKeyId}/${C}, SignedHeaders=${gC(v)}, Signature=${U}`),
                    l
                )
            }
            createCanonicalRequest(t, o, r) {
                let n = Object.keys(o).sort()
                return `${t.method}
${this.getCanonicalPath(t)}
${Ym(t)}
${n.map((s) => `${s}:${o[s]}`).join(`
`)}

${n.join(';')}
${r}`
            }
            async createStringToSign(t, o, r) {
                let n = new this.sha256()
                n.update(wt(r))
                let s = await n.digest()
                return `${dc}
${t}
${o}
${le(s)}`
            }
            getCanonicalPath({ path: t }) {
                if (this.uriEscapePath) {
                    let o = []
                    for (let s of t.split('/'))
                        s?.length !== 0 &&
                            s !== '.' &&
                            (s === '..' ? o.pop() : o.push(s))
                    let r = `${t?.startsWith('/') ? '/' : ''}${o.join('/')}${o.length > 0 && t?.endsWith('/') ? '/' : ''}`
                    return ht(r).replace(/%2F/g, '/')
                }
                return t
            }
            async getSignature(t, o, r, n) {
                let s = await this.createStringToSign(t, o, n),
                    a = new this.sha256(await r)
                return a.update(wt(s)), le(await a.digest())
            }
            getSigningKey(t, o, r, n) {
                return aC(this.sha256, t, r, o, n || this.service)
            }
            validateResolvedCredentials(t) {
                if (
                    typeof t != 'object' ||
                    typeof t.accessKeyId != 'string' ||
                    typeof t.secretAccessKey != 'string'
                )
                    throw new Error('Resolved credential object is not valid')
            }
        }),
            (gc = (e) => {
                let t = uC(e).replace(/[\-:]/g, '')
                return { longDate: t, shortDate: t.slice(0, 8) }
            }),
            (gC = (e) => Object.keys(e).sort().join(';'))
    })
var yC = i(() => {
    hC()
    Km()
    Jm()
    Xm()
    el()
    tl()
    qm()
})
var So,
    xC = i(() => {
        _e()
        ee()
        yC()
        So = (e) => {
            let t = !1,
                o
            e.credentials && ((t = !0), (o = gx(e.credentials, fx, wm))),
                o ||
                    (e.credentialDefaultProvider
                        ? (o = ho(
                              e.credentialDefaultProvider(
                                  Object.assign({}, e, {
                                      parentClientConfig: e,
                                  })
                              )
                          ))
                        : (o = async () => {
                              throw new Error('`credentials` is missing')
                          }))
            let {
                    signingEscapePath: r = !0,
                    systemClockOffset: n = e.systemClockOffset || 0,
                    sha256: s,
                } = e,
                a
            return (
                e.signer
                    ? (a = ho(e.signer))
                    : e.regionInfoProvider
                      ? (a = () =>
                            ho(e.region)()
                                .then(async (d) => [
                                    (await e.regionInfoProvider(d, {
                                        useFipsEndpoint:
                                            await e.useFipsEndpoint(),
                                        useDualstackEndpoint:
                                            await e.useDualstackEndpoint(),
                                    })) || {},
                                    d,
                                ])
                                .then(([d, m]) => {
                                    let {
                                        signingRegion: l,
                                        signingService: g,
                                    } = d
                                    ;(e.signingRegion =
                                        e.signingRegion || l || m),
                                        (e.signingName =
                                            e.signingName || g || e.serviceId)
                                    let u = {
                                            ...e,
                                            credentials: o,
                                            region: e.signingRegion,
                                            service: e.signingName,
                                            sha256: s,
                                            uriEscapePath: r,
                                        },
                                        C = e.signerConstructor || es
                                    return new C(u)
                                }))
                      : (a = async (d) => {
                            d = Object.assign(
                                {},
                                {
                                    name: 'sigv4',
                                    signingName:
                                        e.signingName || e.defaultSigningName,
                                    signingRegion: await ho(e.region)(),
                                    properties: {},
                                },
                                d
                            )
                            let m = d.signingRegion,
                                l = d.signingName
                            ;(e.signingRegion = e.signingRegion || m),
                                (e.signingName =
                                    e.signingName || l || e.serviceId)
                            let g = {
                                    ...e,
                                    credentials: o,
                                    region: e.signingRegion,
                                    service: e.signingName,
                                    sha256: s,
                                    uriEscapePath: r,
                                },
                                u = e.signerConstructor || es
                            return new u(g)
                        }),
                {
                    ...e,
                    systemClockOffset: n,
                    signingEscapePath: r,
                    credentials: t
                        ? async () =>
                              o().then((d) => J(d, 'CREDENTIALS_CODE', 'e'))
                        : o,
                    signer: a,
                }
            )
        }
    })
var EC = i(() => {
    $E()
    HE()
    xC()
})
var CC = i(() => {
    EC()
})
var SC = i(() => {})
var Ar,
    bo,
    rn,
    bC,
    wC,
    AC = i(() => {
        ;(Ar = (e, t) => {
            let o = []
            if ((e && o.push(e), t)) for (let r of t) o.push(r)
            return o
        }),
            (bo = (e, t) =>
                `${e || 'anonymous'}${t && t.length > 0 ? ` (a.k.a. ${t.join(',')})` : ''}`),
            (rn = () => {
                let e = [],
                    t = [],
                    o = !1,
                    r = new Set(),
                    n = (u) =>
                        u.sort(
                            (C, w) =>
                                bC[w.step] - bC[C.step] ||
                                wC[w.priority || 'normal'] -
                                    wC[C.priority || 'normal']
                        ),
                    s = (u) => {
                        let C = !1,
                            w = (v) => {
                                let U = Ar(v.name, v.aliases)
                                if (U.includes(u)) {
                                    C = !0
                                    for (let F of U) r.delete(F)
                                    return !1
                                }
                                return !0
                            }
                        return (e = e.filter(w)), (t = t.filter(w)), C
                    },
                    a = (u) => {
                        let C = !1,
                            w = (v) => {
                                if (v.middleware === u) {
                                    C = !0
                                    for (let U of Ar(v.name, v.aliases))
                                        r.delete(U)
                                    return !1
                                }
                                return !0
                            }
                        return (e = e.filter(w)), (t = t.filter(w)), C
                    },
                    d = (u) => (
                        e.forEach((C) => {
                            u.add(C.middleware, { ...C })
                        }),
                        t.forEach((C) => {
                            u.addRelativeTo(C.middleware, { ...C })
                        }),
                        u.identifyOnResolve?.(g.identifyOnResolve()),
                        u
                    ),
                    m = (u) => {
                        let C = []
                        return (
                            u.before.forEach((w) => {
                                w.before.length === 0 && w.after.length === 0
                                    ? C.push(w)
                                    : C.push(...m(w))
                            }),
                            C.push(u),
                            u.after.reverse().forEach((w) => {
                                w.before.length === 0 && w.after.length === 0
                                    ? C.push(w)
                                    : C.push(...m(w))
                            }),
                            C
                        )
                    },
                    l = (u = !1) => {
                        let C = [],
                            w = [],
                            v = {}
                        return (
                            e.forEach((F) => {
                                let B = { ...F, before: [], after: [] }
                                for (let Z of Ar(B.name, B.aliases)) v[Z] = B
                                C.push(B)
                            }),
                            t.forEach((F) => {
                                let B = { ...F, before: [], after: [] }
                                for (let Z of Ar(B.name, B.aliases)) v[Z] = B
                                w.push(B)
                            }),
                            w.forEach((F) => {
                                if (F.toMiddleware) {
                                    let B = v[F.toMiddleware]
                                    if (B === void 0) {
                                        if (u) return
                                        throw new Error(
                                            `${F.toMiddleware} is not found when adding ${bo(F.name, F.aliases)} middleware ${F.relation} ${F.toMiddleware}`
                                        )
                                    }
                                    F.relation === 'after' && B.after.push(F),
                                        F.relation === 'before' &&
                                            B.before.push(F)
                                }
                            }),
                            n(C)
                                .map(m)
                                .reduce((F, B) => (F.push(...B), F), [])
                        )
                    },
                    g = {
                        add: (u, C = {}) => {
                            let { name: w, override: v, aliases: U } = C,
                                F = {
                                    step: 'initialize',
                                    priority: 'normal',
                                    middleware: u,
                                    ...C,
                                },
                                B = Ar(w, U)
                            if (B.length > 0) {
                                if (B.some((Z) => r.has(Z))) {
                                    if (!v)
                                        throw new Error(
                                            `Duplicate middleware name '${bo(w, U)}'`
                                        )
                                    for (let Z of B) {
                                        let j = e.findIndex(
                                            (ao) =>
                                                ao.name === Z ||
                                                ao.aliases?.some(
                                                    (fr) => fr === Z
                                                )
                                        )
                                        if (j === -1) continue
                                        let re = e[j]
                                        if (
                                            re.step !== F.step ||
                                            F.priority !== re.priority
                                        )
                                            throw new Error(
                                                `"${bo(re.name, re.aliases)}" middleware with ${re.priority} priority in ${re.step} step cannot be overridden by "${bo(w, U)}" middleware with ${F.priority} priority in ${F.step} step.`
                                            )
                                        e.splice(j, 1)
                                    }
                                }
                                for (let Z of B) r.add(Z)
                            }
                            e.push(F)
                        },
                        addRelativeTo: (u, C) => {
                            let { name: w, override: v, aliases: U } = C,
                                F = { middleware: u, ...C },
                                B = Ar(w, U)
                            if (B.length > 0) {
                                if (B.some((Z) => r.has(Z))) {
                                    if (!v)
                                        throw new Error(
                                            `Duplicate middleware name '${bo(w, U)}'`
                                        )
                                    for (let Z of B) {
                                        let j = t.findIndex(
                                            (ao) =>
                                                ao.name === Z ||
                                                ao.aliases?.some(
                                                    (fr) => fr === Z
                                                )
                                        )
                                        if (j === -1) continue
                                        let re = t[j]
                                        if (
                                            re.toMiddleware !==
                                                F.toMiddleware ||
                                            re.relation !== F.relation
                                        )
                                            throw new Error(
                                                `"${bo(re.name, re.aliases)}" middleware ${re.relation} "${re.toMiddleware}" middleware cannot be overridden by "${bo(w, U)}" middleware ${F.relation} "${F.toMiddleware}" middleware.`
                                            )
                                        t.splice(j, 1)
                                    }
                                }
                                for (let Z of B) r.add(Z)
                            }
                            t.push(F)
                        },
                        clone: () => d(rn()),
                        use: (u) => {
                            u.applyToStack(g)
                        },
                        remove: (u) => (typeof u == 'string' ? s(u) : a(u)),
                        removeByTag: (u) => {
                            let C = !1,
                                w = (v) => {
                                    let { tags: U, name: F, aliases: B } = v
                                    if (U && U.includes(u)) {
                                        let Z = Ar(F, B)
                                        for (let j of Z) r.delete(j)
                                        return (C = !0), !1
                                    }
                                    return !0
                                }
                            return (e = e.filter(w)), (t = t.filter(w)), C
                        },
                        concat: (u) => {
                            let C = d(rn())
                            return (
                                C.use(u),
                                C.identifyOnResolve(
                                    o ||
                                        C.identifyOnResolve() ||
                                        (u.identifyOnResolve?.() ?? !1)
                                ),
                                C
                            )
                        },
                        applyToStack: d,
                        identify: () =>
                            l(!0).map((u) => {
                                let C =
                                    u.step ?? u.relation + ' ' + u.toMiddleware
                                return bo(u.name, u.aliases) + ' - ' + C
                            }),
                        identifyOnResolve(u) {
                            return typeof u == 'boolean' && (o = u), o
                        },
                        resolve: (u, C) => {
                            for (let w of l()
                                .map((v) => v.middleware)
                                .reverse())
                                u = w(u, C)
                            return o && console.log(g.identify()), u
                        },
                    }
                return g
            }),
            (bC = {
                initialize: 5,
                serialize: 4,
                build: 3,
                finalizeRequest: 2,
                deserialize: 1,
            }),
            (wC = { high: 3, normal: 2, low: 1 })
    })
var ol = i(() => {
    AC()
})
var je,
    vC = i(() => {
        ol()
        je = class {
            constructor(t) {
                ;(this.config = t), (this.middlewareStack = rn())
            }
            send(t, o, r) {
                let n = typeof o != 'function' ? o : void 0,
                    s = typeof o == 'function' ? o : r,
                    a = n === void 0 && this.config.cacheMiddleware === !0,
                    d
                if (a) {
                    this.handlers || (this.handlers = new WeakMap())
                    let m = this.handlers
                    m.has(t.constructor)
                        ? (d = m.get(t.constructor))
                        : ((d = t.resolveMiddleware(
                              this.middlewareStack,
                              this.config,
                              n
                          )),
                          m.set(t.constructor, d))
                } else
                    delete this.handlers,
                        (d = t.resolveMiddleware(
                            this.middlewareStack,
                            this.config,
                            n
                        ))
                if (s)
                    d(t)
                        .then(
                            (m) => s(null, m.output),
                            (m) => s(m)
                        )
                        .catch(() => {})
                else return d(t).then((m) => m.output)
            }
            destroy() {
                this.config?.requestHandler?.destroy?.(), delete this.handlers
            }
        }
    })
var _C = i(() => {
    en()
})
var h,
    rl,
    RC = i(() => {
        ol()
        Be()
        ;(h = class {
            constructor() {
                this.middlewareStack = rn()
            }
            static classBuilder() {
                return new rl()
            }
            resolveMiddlewareWithContext(
                t,
                o,
                r,
                {
                    middlewareFn: n,
                    clientName: s,
                    commandName: a,
                    inputFilterSensitiveLog: d,
                    outputFilterSensitiveLog: m,
                    smithyContext: l,
                    additionalContext: g,
                    CommandCtor: u,
                }
            ) {
                for (let F of n.bind(this)(u, t, o, r))
                    this.middlewareStack.use(F)
                let C = t.concat(this.middlewareStack),
                    { logger: w } = o,
                    v = {
                        logger: w,
                        clientName: s,
                        commandName: a,
                        inputFilterSensitiveLog: d,
                        outputFilterSensitiveLog: m,
                        [Qr]: { commandInstance: this, ...l },
                        ...g,
                    },
                    { requestHandler: U } = o
                return C.resolve((F) => U.handle(F.request, r || {}), v)
            }
        }),
            (rl = class {
                constructor() {
                    ;(this._init = () => {}),
                        (this._ep = {}),
                        (this._middlewareFn = () => []),
                        (this._commandName = ''),
                        (this._clientName = ''),
                        (this._additionalContext = {}),
                        (this._smithyContext = {}),
                        (this._inputFilterSensitiveLog = (t) => t),
                        (this._outputFilterSensitiveLog = (t) => t),
                        (this._serializer = null),
                        (this._deserializer = null)
                }
                init(t) {
                    this._init = t
                }
                ep(t) {
                    return (this._ep = t), this
                }
                m(t) {
                    return (this._middlewareFn = t), this
                }
                s(t, o, r = {}) {
                    return (
                        (this._smithyContext = {
                            service: t,
                            operation: o,
                            ...r,
                        }),
                        this
                    )
                }
                c(t = {}) {
                    return (this._additionalContext = t), this
                }
                n(t, o) {
                    return (this._clientName = t), (this._commandName = o), this
                }
                f(t = (r) => r, o = (r) => r) {
                    return (
                        (this._inputFilterSensitiveLog = t),
                        (this._outputFilterSensitiveLog = o),
                        this
                    )
                }
                ser(t) {
                    return (this._serializer = t), this
                }
                de(t) {
                    return (this._deserializer = t), this
                }
                build() {
                    let t = this,
                        o
                    return (o = class extends h {
                        static getEndpointParameterInstructions() {
                            return t._ep
                        }
                        constructor(...[r]) {
                            super(),
                                (this.serialize = t._serializer),
                                (this.deserialize = t._deserializer),
                                (this.input = r ?? {}),
                                t._init(this)
                        }
                        resolveMiddleware(r, n, s) {
                            return this.resolveMiddlewareWithContext(r, n, s, {
                                CommandCtor: o,
                                middlewareFn: t._middlewareFn,
                                clientName: t._clientName,
                                commandName: t._commandName,
                                inputFilterSensitiveLog:
                                    t._inputFilterSensitiveLog,
                                outputFilterSensitiveLog:
                                    t._outputFilterSensitiveLog,
                                smithyContext: t._smithyContext,
                                additionalContext: t._additionalContext,
                            })
                        }
                    })
                }
            })
    })
var H,
    TC = i(() => {
        H = '***SensitiveInformation***'
    })
var wo,
    IC = i(() => {
        wo = (e, t) => {
            for (let o of Object.keys(e)) {
                let r = e[o],
                    n = async function (a, d, m) {
                        let l = new r(a)
                        if (typeof d == 'function') this.send(l, d)
                        else if (typeof m == 'function') {
                            if (typeof d != 'object')
                                throw new Error(
                                    `Expected http options but got ${typeof d}`
                                )
                            this.send(l, d || {}, m)
                        } else return this.send(l, d)
                    },
                    s = (o[0].toLowerCase() + o.slice(1)).replace(
                        /Command$/,
                        ''
                    )
                t.prototype[s] = n
            }
        }
    })
var nn,
    ge,
    jO,
    PC,
    qe,
    k,
    NC,
    FC,
    nl,
    qO,
    T,
    M,
    c,
    OC,
    DC,
    KO,
    ts,
    kC,
    YO,
    os,
    sl,
    LC,
    hc,
    yc,
    il = i(() => {
        ;(nn = (e) => {
            if (e != null) {
                if (typeof e == 'number') {
                    if (
                        ((e === 0 || e === 1) &&
                            yc.warn(
                                hc(`Expected boolean, got ${typeof e}: ${e}`)
                            ),
                        e === 0)
                    )
                        return !1
                    if (e === 1) return !0
                }
                if (typeof e == 'string') {
                    let t = e.toLowerCase()
                    if (
                        ((t === 'false' || t === 'true') &&
                            yc.warn(
                                hc(`Expected boolean, got ${typeof e}: ${e}`)
                            ),
                        t === 'false')
                    )
                        return !1
                    if (t === 'true') return !0
                }
                if (typeof e == 'boolean') return e
                throw new TypeError(`Expected boolean, got ${typeof e}: ${e}`)
            }
        }),
            (ge = (e) => {
                if (e != null) {
                    if (typeof e == 'string') {
                        let t = parseFloat(e)
                        if (!Number.isNaN(t))
                            return (
                                String(t) !== String(e) &&
                                    yc.warn(
                                        hc(
                                            `Expected number but observed string: ${e}`
                                        )
                                    ),
                                t
                            )
                    }
                    if (typeof e == 'number') return e
                    throw new TypeError(
                        `Expected number, got ${typeof e}: ${e}`
                    )
                }
            }),
            (jO = Math.ceil(34028234663852886e22)),
            (PC = (e) => {
                let t = ge(e)
                if (
                    t !== void 0 &&
                    !Number.isNaN(t) &&
                    t !== 1 / 0 &&
                    t !== -1 / 0 &&
                    Math.abs(t) > jO
                )
                    throw new TypeError(`Expected 32-bit float, got ${e}`)
                return t
            }),
            (qe = (e) => {
                if (e != null) {
                    if (Number.isInteger(e) && !Number.isNaN(e)) return e
                    throw new TypeError(
                        `Expected integer, got ${typeof e}: ${e}`
                    )
                }
            }),
            (k = (e) => nl(e, 32)),
            (NC = (e) => nl(e, 16)),
            (FC = (e) => nl(e, 8)),
            (nl = (e, t) => {
                let o = qe(e)
                if (o !== void 0 && qO(o, t) !== o)
                    throw new TypeError(`Expected ${t}-bit integer, got ${e}`)
                return o
            }),
            (qO = (e, t) => {
                switch (t) {
                    case 32:
                        return Int32Array.of(e)[0]
                    case 16:
                        return Int16Array.of(e)[0]
                    case 8:
                        return Int8Array.of(e)[0]
                }
            }),
            (T = (e, t) => {
                if (e == null)
                    throw t
                        ? new TypeError(`Expected a non-null value for ${t}`)
                        : new TypeError('Expected a non-null value')
                return e
            }),
            (M = (e) => {
                if (e == null) return
                if (typeof e == 'object' && !Array.isArray(e)) return e
                let t = Array.isArray(e) ? 'array' : typeof e
                throw new TypeError(`Expected object, got ${t}: ${e}`)
            }),
            (c = (e) => {
                if (e != null) {
                    if (typeof e == 'string') return e
                    if (['boolean', 'number', 'bigint'].includes(typeof e))
                        return (
                            yc.warn(
                                hc(`Expected string, got ${typeof e}: ${e}`)
                            ),
                            String(e)
                        )
                    throw new TypeError(
                        `Expected string, got ${typeof e}: ${e}`
                    )
                }
            }),
            (OC = (e) => ge(typeof e == 'string' ? ts(e) : e)),
            (DC = (e) => PC(typeof e == 'string' ? ts(e) : e)),
            (KO =
                /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g),
            (ts = (e) => {
                let t = e.match(KO)
                if (t === null || t[0].length !== e.length)
                    throw new TypeError(
                        'Expected real number, got implicit NaN'
                    )
                return parseFloat(e)
            }),
            (kC = (e) => (typeof e == 'string' ? YO(e) : ge(e))),
            (YO = (e) => {
                switch (e) {
                    case 'NaN':
                        return NaN
                    case 'Infinity':
                        return 1 / 0
                    case '-Infinity':
                        return -1 / 0
                    default:
                        throw new Error(`Unable to parse float value: ${e}`)
                }
            }),
            (os = (e) => k(typeof e == 'string' ? ts(e) : e)),
            (sl = (e) => NC(typeof e == 'string' ? ts(e) : e)),
            (LC = (e) => FC(typeof e == 'string' ? ts(e) : e)),
            (hc = (e) =>
                String(new TypeError(e).stack || e)
                    .split(
                        `
`
                    )
                    .slice(0, 5)
                    .filter((t) => !t.includes('stackTraceWarning')).join(`
`)),
            (yc = { warn: console.warn })
    })
var JO,
    XO,
    MC,
    QO,
    $C,
    h8,
    y8,
    x8,
    Re,
    UC,
    E8,
    ZO,
    eD,
    tD,
    vr,
    oD,
    rD,
    al,
    BC = i(() => {
        il()
        ;(JO = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ]),
            (XO = new RegExp(
                /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/
            )),
            (MC = (e) => {
                if (e == null) return
                if (typeof e != 'string')
                    throw new TypeError(
                        'RFC-3339 date-times must be expressed as strings'
                    )
                let t = XO.exec(e)
                if (!t) throw new TypeError('Invalid RFC-3339 date-time value')
                let [o, r, n, s, a, d, m, l] = t,
                    g = sl(al(r)),
                    u = vr(n, 'month', 1, 12),
                    C = vr(s, 'day', 1, 31)
                return UC(g, u, C, {
                    hours: a,
                    minutes: d,
                    seconds: m,
                    fractionalMilliseconds: l,
                })
            }),
            (QO = new RegExp(
                /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/
            )),
            ($C = (e) => {
                if (e == null) return
                if (typeof e != 'string')
                    throw new TypeError(
                        'RFC-3339 date-times must be expressed as strings'
                    )
                let t = QO.exec(e)
                if (!t) throw new TypeError('Invalid RFC-3339 date-time value')
                let [o, r, n, s, a, d, m, l, g] = t,
                    u = sl(al(r)),
                    C = vr(n, 'month', 1, 12),
                    w = vr(s, 'day', 1, 31),
                    v = UC(u, C, w, {
                        hours: a,
                        minutes: d,
                        seconds: m,
                        fractionalMilliseconds: l,
                    })
                return (
                    g.toUpperCase() != 'Z' && v.setTime(v.getTime() - rD(g)), v
                )
            }),
            (h8 = new RegExp(
                /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
            )),
            (y8 = new RegExp(
                /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
            )),
            (x8 = new RegExp(
                /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/
            )),
            (Re = (e) => {
                if (e == null) return
                let t
                if (typeof e == 'number') t = e
                else if (typeof e == 'string') t = OC(e)
                else if (typeof e == 'object' && e.tag === 1) t = e.value
                else
                    throw new TypeError(
                        'Epoch timestamps must be expressed as floating point numbers or their string representation'
                    )
                if (Number.isNaN(t) || t === 1 / 0 || t === -1 / 0)
                    throw new TypeError(
                        'Epoch timestamps must be valid, non-Infinite, non-NaN numerics'
                    )
                return new Date(Math.round(t * 1e3))
            }),
            (UC = (e, t, o, r) => {
                let n = t - 1
                return (
                    eD(e, n, o),
                    new Date(
                        Date.UTC(
                            e,
                            n,
                            o,
                            vr(r.hours, 'hour', 0, 23),
                            vr(r.minutes, 'minute', 0, 59),
                            vr(r.seconds, 'seconds', 0, 60),
                            oD(r.fractionalMilliseconds)
                        )
                    )
                )
            }),
            (E8 = 50 * 365 * 24 * 60 * 60 * 1e3),
            (ZO = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]),
            (eD = (e, t, o) => {
                let r = ZO[t]
                if ((t === 1 && tD(e) && (r = 29), o > r))
                    throw new TypeError(
                        `Invalid day for ${JO[t]} in ${e}: ${o}`
                    )
            }),
            (tD = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0)),
            (vr = (e, t, o, r) => {
                let n = LC(al(e))
                if (n < o || n > r)
                    throw new TypeError(
                        `${t} must be between ${o} and ${r}, inclusive`
                    )
                return n
            }),
            (oD = (e) => (e == null ? 0 : DC('0.' + e) * 1e3)),
            (rD = (e) => {
                let t = e[0],
                    o = 1
                if (t == '+') o = 1
                else if (t == '-') o = -1
                else
                    throw new TypeError(
                        `Offset direction, ${t}, must be "+" or "-"`
                    )
                let r = Number(e.substring(1, 3)),
                    n = Number(e.substring(4, 6))
                return o * (r * 60 + n) * 60 * 1e3
            }),
            (al = (e) => {
                let t = 0
                for (; t < e.length - 1 && e.charAt(t) === '0'; ) t++
                return t === 0 ? e : e.slice(t)
            })
    })
var It,
    P,
    cl = i(() => {
        ;(It = class e extends Error {
            constructor(t) {
                super(t.message),
                    Object.setPrototypeOf(this, e.prototype),
                    (this.name = t.name),
                    (this.$fault = t.$fault),
                    (this.$metadata = t.$metadata)
            }
        }),
            (P = (e, t = {}) => {
                Object.entries(t)
                    .filter(([, r]) => r !== void 0)
                    .forEach(([r, n]) => {
                        ;(e[r] == null || e[r] === '') && (e[r] = n)
                    })
                let o = e.message || e.Message || 'UnknownError'
                return (e.message = o), delete e.Message, e
            })
    })
var nD,
    Ao,
    sD,
    GC = i(() => {
        cl()
        ;(nD = ({
            output: e,
            parsedBody: t,
            exceptionCtor: o,
            errorCode: r,
        }) => {
            let n = sD(e),
                s = n.httpStatusCode ? n.httpStatusCode + '' : void 0,
                a = new o({
                    name: t?.code || t?.Code || r || s || 'UnknownError',
                    $fault: 'client',
                    $metadata: n,
                })
            throw P(a, t)
        }),
            (Ao =
                (e) =>
                ({ output: t, parsedBody: o, errorCode: r }) => {
                    nD({
                        output: t,
                        parsedBody: o,
                        exceptionCtor: e,
                        errorCode: r,
                    })
                }),
            (sD = (e) => ({
                httpStatusCode: e.statusCode,
                requestId:
                    e.headers['x-amzn-requestid'] ??
                    e.headers['x-amzn-request-id'] ??
                    e.headers['x-amz-request-id'],
                extendedRequestId: e.headers['x-amz-id-2'],
                cfId: e.headers['x-amz-cf-id'],
            }))
    })
var vo,
    zC = i(() => {
        vo = (e) => {
            switch (e) {
                case 'standard':
                    return { retryMode: 'standard', connectionTimeout: 3100 }
                case 'in-region':
                    return { retryMode: 'standard', connectionTimeout: 1100 }
                case 'cross-region':
                    return { retryMode: 'standard', connectionTimeout: 3100 }
                case 'mobile':
                    return { retryMode: 'standard', connectionTimeout: 3e4 }
                default:
                    return {}
            }
        }
    })
var VC,
    _o,
    WC = i(() => {
        ;(VC = !1),
            (_o = (e) => {
                e &&
                    !VC &&
                    parseInt(e.substring(1, e.indexOf('.'))) < 16 &&
                    (VC = !0)
            })
    })
var HC = i(() => {
    en()
})
var jC,
    qC,
    KC = i(() => {
        Be()
        ;(jC = (e) => {
            let t = []
            for (let o in Xr) {
                let r = Xr[o]
                e[r] !== void 0 &&
                    t.push({
                        algorithmId: () => r,
                        checksumConstructor: () => e[r],
                    })
            }
            return {
                _checksumAlgorithms: t,
                addChecksumAlgorithm(o) {
                    this._checksumAlgorithms.push(o)
                },
                checksumAlgorithms() {
                    return this._checksumAlgorithms
                },
            }
        }),
            (qC = (e) => {
                let t = {}
                return (
                    e.checksumAlgorithms().forEach((o) => {
                        t[o.algorithmId()] = o.checksumConstructor()
                    }),
                    t
                )
            })
    })
var YC,
    JC,
    XC = i(() => {
        ;(YC = (e) => {
            let t = e.retryStrategy
            return {
                setRetryStrategy(o) {
                    t = o
                },
                retryStrategy() {
                    return t
                },
            }
        }),
            (JC = (e) => {
                let t = {}
                return (t.retryStrategy = e.retryStrategy()), t
            })
    })
var Ro,
    To,
    QC = i(() => {
        KC()
        XC()
        ;(Ro = (e) => ({ ...jC(e), ...YC(e) })),
            (To = (e) => ({ ...qC(e), ...JC(e) }))
    })
var ZC = i(() => {
    QC()
})
var eS = i(() => {})
var dl,
    tS = i(() => {
        dl = (e) => {
            let t = '#text'
            for (let o in e)
                e.hasOwnProperty(o) && e[o][t] !== void 0
                    ? (e[o] = e[o][t])
                    : typeof e[o] == 'object' &&
                      e[o] !== null &&
                      (e[o] = dl(e[o]))
            return e
        }
    })
var Io,
    oS = i(() => {
        Io = (e) => e != null
    })
var ml,
    rS = i(() => {
        ml = function () {
            let e = Object.getPrototypeOf(this).constructor,
                t = Function.bind.apply(String, [null, ...arguments]),
                o = new t()
            return Object.setPrototypeOf(o, e.prototype), o
        }
        ml.prototype = Object.create(String.prototype, {
            constructor: {
                value: ml,
                enumerable: !1,
                writable: !0,
                configurable: !0,
            },
        })
        Object.setPrototypeOf(ml, String)
    })
var et,
    nS = i(() => {
        et = class {
            trace() {}
            debug() {}
            info() {}
            warn() {}
            error() {}
        }
    })
function f(e, t, o) {
    let r, n, s
    if (typeof t > 'u' && typeof o > 'u') (r = {}), (s = e)
    else {
        if (((r = e), typeof t == 'function'))
            return (n = t), (s = o), iD(r, n, s)
        s = t
    }
    for (let a of Object.keys(s)) {
        if (!Array.isArray(s[a])) {
            r[a] = s[a]
            continue
        }
        sS(r, null, s, a)
    }
    return r
}
var E,
    iD,
    sS,
    aD,
    cD,
    iS = i(() => {
        ;(E = (e, t) => {
            let o = {}
            for (let r in t) sS(o, e, t, r)
            return o
        }),
            (iD = (e, t, o) =>
                f(
                    e,
                    Object.entries(o).reduce(
                        (r, [n, s]) => (
                            Array.isArray(s)
                                ? (r[n] = s)
                                : typeof s == 'function'
                                  ? (r[n] = [t, s()])
                                  : (r[n] = [t, s]),
                            r
                        ),
                        {}
                    )
                )),
            (sS = (e, t, o, r) => {
                if (t !== null) {
                    let a = o[r]
                    typeof a == 'function' && (a = [, a])
                    let [d = aD, m = cD, l = r] = a
                    ;((typeof d == 'function' && d(t[l])) ||
                        (typeof d != 'function' && d)) &&
                        (e[r] = m(t[l]))
                    return
                }
                let [n, s] = o[r]
                if (typeof s == 'function') {
                    let a,
                        d = n === void 0 && (a = s()) != null,
                        m =
                            (typeof n == 'function' && !!n(void 0)) ||
                            (typeof n != 'function' && !!n)
                    d ? (e[r] = a) : m && (e[r] = s())
                } else {
                    let a = n === void 0 && s != null,
                        d =
                            (typeof n == 'function' && !!n(s)) ||
                            (typeof n != 'function' && !!n)
                    ;(a || d) && (e[r] = s)
                }
            }),
            (aD = (e) => e != null),
            (cD = (e) => e)
    })
var aS = i(() => {})
var cS = i(() => {
    en()
})
var dS,
    mS = i(() => {
        dS = (e) => {
            if (e !== e) return 'NaN'
            switch (e) {
                case 1 / 0:
                    return 'Infinity'
                case -1 / 0:
                    return '-Infinity'
                default:
                    return e
            }
        }
    })
var p,
    lS = i(() => {
        p = (e) => {
            if (e == null) return {}
            if (Array.isArray(e)) return e.filter((t) => t != null).map(p)
            if (typeof e == 'object') {
                let t = {}
                for (let o of Object.keys(e)) e[o] != null && (t[o] = p(e[o]))
                return t
            }
            return e
        }
    })
var pS = i(() => {})
var uS = i(() => {})
var b = i(() => {
    vC()
    _C()
    RC()
    TC()
    IC()
    BC()
    GC()
    zC()
    WC()
    cl()
    HC()
    ZC()
    eS()
    tS()
    oS()
    rS()
    nS()
    iS()
    il()
    aS()
    cS()
    mS()
    lS()
    pS()
    uS()
})
var fS = i(() => {
    b()
})
var xc,
    ll = i(() => {
        b()
        xc = (e, t) => ce(e, t).then((o) => t.utf8Encoder(o))
    })
var L,
    sn,
    an,
    gS = i(() => {
        ll()
        ;(L = (e, t) =>
            xc(e, t).then((o) => {
                if (o.length)
                    try {
                        return JSON.parse(o)
                    } catch (r) {
                        throw (
                            (r?.name === 'SyntaxError' &&
                                Object.defineProperty(r, '$responseBodyText', {
                                    value: o,
                                }),
                            r)
                        )
                    }
                return {}
            })),
            (sn = async (e, t) => {
                let o = await L(e, t)
                return (o.message = o.message ?? o.Message), o
            }),
            (an = (e, t) => {
                let o = (s, a) =>
                        Object.keys(s).find(
                            (d) => d.toLowerCase() === a.toLowerCase()
                        ),
                    r = (s) => {
                        let a = s
                        return (
                            typeof a == 'number' && (a = a.toString()),
                            a.indexOf(',') >= 0 && (a = a.split(',')[0]),
                            a.indexOf(':') >= 0 && (a = a.split(':')[0]),
                            a.indexOf('#') >= 0 && (a = a.split('#')[1]),
                            a
                        )
                    },
                    n = o(e.headers, 'x-amzn-errortype')
                if (n !== void 0) return r(e.headers[n])
                if (t.code !== void 0) return r(t.code)
                if (t.__type !== void 0) return r(t.__type)
            })
    })
var Ec = Ye((Jt) => {
    'use strict'
    var hS =
            ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
        dD = hS + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
        yS = '[' + hS + '][' + dD + ']*',
        mD = new RegExp('^' + yS + '$'),
        lD = function (e, t) {
            let o = [],
                r = t.exec(e)
            for (; r; ) {
                let n = []
                n.startIndex = t.lastIndex - r[0].length
                let s = r.length
                for (let a = 0; a < s; a++) n.push(r[a])
                o.push(n), (r = t.exec(e))
            }
            return o
        },
        pD = function (e) {
            let t = mD.exec(e)
            return !(t === null || typeof t > 'u')
        }
    Jt.isExist = function (e) {
        return typeof e < 'u'
    }
    Jt.isEmptyObject = function (e) {
        return Object.keys(e).length === 0
    }
    Jt.merge = function (e, t, o) {
        if (t) {
            let r = Object.keys(t),
                n = r.length
            for (let s = 0; s < n; s++)
                o === 'strict' ? (e[r[s]] = [t[r[s]]]) : (e[r[s]] = t[r[s]])
        }
    }
    Jt.getValue = function (e) {
        return Jt.isExist(e) ? e : ''
    }
    Jt.isName = pD
    Jt.getAllMatches = lD
    Jt.nameRegexp = yS
})
var ul = Ye((bS) => {
    'use strict'
    var pl = Ec(),
        uD = { allowBooleanAttributes: !1, unpairedTags: [] }
    bS.validate = function (e, t) {
        t = Object.assign({}, uD, t)
        let o = [],
            r = !1,
            n = !1
        e[0] === '\uFEFF' && (e = e.substr(1))
        for (let s = 0; s < e.length; s++)
            if (e[s] === '<' && e[s + 1] === '?') {
                if (((s += 2), (s = ES(e, s)), s.err)) return s
            } else if (e[s] === '<') {
                let a = s
                if ((s++, e[s] === '!')) {
                    s = CS(e, s)
                    continue
                } else {
                    let d = !1
                    e[s] === '/' && ((d = !0), s++)
                    let m = ''
                    for (
                        ;
                        s < e.length &&
                        e[s] !== '>' &&
                        e[s] !== ' ' &&
                        e[s] !== '	' &&
                        e[s] !==
                            `
` &&
                        e[s] !== '\r';
                        s++
                    )
                        m += e[s]
                    if (
                        ((m = m.trim()),
                        m[m.length - 1] === '/' &&
                            ((m = m.substring(0, m.length - 1)), s--),
                        !SD(m))
                    ) {
                        let u
                        return (
                            m.trim().length === 0
                                ? (u = "Invalid space after '<'.")
                                : (u = "Tag '" + m + "' is an invalid name."),
                            pe('InvalidTag', u, Te(e, s))
                        )
                    }
                    let l = hD(e, s)
                    if (l === !1)
                        return pe(
                            'InvalidAttr',
                            "Attributes for '" + m + "' have open quote.",
                            Te(e, s)
                        )
                    let g = l.value
                    if (((s = l.index), g[g.length - 1] === '/')) {
                        let u = s - g.length
                        g = g.substring(0, g.length - 1)
                        let C = SS(g, t)
                        if (C === !0) r = !0
                        else
                            return pe(
                                C.err.code,
                                C.err.msg,
                                Te(e, u + C.err.line)
                            )
                    } else if (d)
                        if (l.tagClosed) {
                            if (g.trim().length > 0)
                                return pe(
                                    'InvalidTag',
                                    "Closing tag '" +
                                        m +
                                        "' can't have attributes or invalid starting.",
                                    Te(e, a)
                                )
                            if (o.length === 0)
                                return pe(
                                    'InvalidTag',
                                    "Closing tag '" +
                                        m +
                                        "' has not been opened.",
                                    Te(e, a)
                                )
                            {
                                let u = o.pop()
                                if (m !== u.tagName) {
                                    let C = Te(e, u.tagStartPos)
                                    return pe(
                                        'InvalidTag',
                                        "Expected closing tag '" +
                                            u.tagName +
                                            "' (opened in line " +
                                            C.line +
                                            ', col ' +
                                            C.col +
                                            ") instead of closing tag '" +
                                            m +
                                            "'.",
                                        Te(e, a)
                                    )
                                }
                                o.length == 0 && (n = !0)
                            }
                        } else
                            return pe(
                                'InvalidTag',
                                "Closing tag '" +
                                    m +
                                    "' doesn't have proper closing.",
                                Te(e, s)
                            )
                    else {
                        let u = SS(g, t)
                        if (u !== !0)
                            return pe(
                                u.err.code,
                                u.err.msg,
                                Te(e, s - g.length + u.err.line)
                            )
                        if (n === !0)
                            return pe(
                                'InvalidXml',
                                'Multiple possible root nodes found.',
                                Te(e, s)
                            )
                        t.unpairedTags.indexOf(m) !== -1 ||
                            o.push({ tagName: m, tagStartPos: a }),
                            (r = !0)
                    }
                    for (s++; s < e.length; s++)
                        if (e[s] === '<')
                            if (e[s + 1] === '!') {
                                s++, (s = CS(e, s))
                                continue
                            } else if (e[s + 1] === '?') {
                                if (((s = ES(e, ++s)), s.err)) return s
                            } else break
                        else if (e[s] === '&') {
                            let u = ED(e, s)
                            if (u == -1)
                                return pe(
                                    'InvalidChar',
                                    "char '&' is not expected.",
                                    Te(e, s)
                                )
                            s = u
                        } else if (n === !0 && !xS(e[s]))
                            return pe(
                                'InvalidXml',
                                'Extra text at the end',
                                Te(e, s)
                            )
                    e[s] === '<' && s--
                }
            } else {
                if (xS(e[s])) continue
                return pe(
                    'InvalidChar',
                    "char '" + e[s] + "' is not expected.",
                    Te(e, s)
                )
            }
        if (r) {
            if (o.length == 1)
                return pe(
                    'InvalidTag',
                    "Unclosed tag '" + o[0].tagName + "'.",
                    Te(e, o[0].tagStartPos)
                )
            if (o.length > 0)
                return pe(
                    'InvalidXml',
                    "Invalid '" +
                        JSON.stringify(
                            o.map((s) => s.tagName),
                            null,
                            4
                        ).replace(/\r?\n/g, '') +
                        "' found.",
                    { line: 1, col: 1 }
                )
        } else return pe('InvalidXml', 'Start tag expected.', 1)
        return !0
    }
    function xS(e) {
        return (
            e === ' ' ||
            e === '	' ||
            e ===
                `
` ||
            e === '\r'
        )
    }
    function ES(e, t) {
        let o = t
        for (; t < e.length; t++)
            if (e[t] == '?' || e[t] == ' ') {
                let r = e.substr(o, t - o)
                if (t > 5 && r === 'xml')
                    return pe(
                        'InvalidXml',
                        'XML declaration allowed only at the start of the document.',
                        Te(e, t)
                    )
                if (e[t] == '?' && e[t + 1] == '>') {
                    t++
                    break
                } else continue
            }
        return t
    }
    function CS(e, t) {
        if (e.length > t + 5 && e[t + 1] === '-' && e[t + 2] === '-') {
            for (t += 3; t < e.length; t++)
                if (e[t] === '-' && e[t + 1] === '-' && e[t + 2] === '>') {
                    t += 2
                    break
                }
        } else if (
            e.length > t + 8 &&
            e[t + 1] === 'D' &&
            e[t + 2] === 'O' &&
            e[t + 3] === 'C' &&
            e[t + 4] === 'T' &&
            e[t + 5] === 'Y' &&
            e[t + 6] === 'P' &&
            e[t + 7] === 'E'
        ) {
            let o = 1
            for (t += 8; t < e.length; t++)
                if (e[t] === '<') o++
                else if (e[t] === '>' && (o--, o === 0)) break
        } else if (
            e.length > t + 9 &&
            e[t + 1] === '[' &&
            e[t + 2] === 'C' &&
            e[t + 3] === 'D' &&
            e[t + 4] === 'A' &&
            e[t + 5] === 'T' &&
            e[t + 6] === 'A' &&
            e[t + 7] === '['
        ) {
            for (t += 8; t < e.length; t++)
                if (e[t] === ']' && e[t + 1] === ']' && e[t + 2] === '>') {
                    t += 2
                    break
                }
        }
        return t
    }
    var fD = '"',
        gD = "'"
    function hD(e, t) {
        let o = '',
            r = '',
            n = !1
        for (; t < e.length; t++) {
            if (e[t] === fD || e[t] === gD)
                r === '' ? (r = e[t]) : r !== e[t] || (r = '')
            else if (e[t] === '>' && r === '') {
                n = !0
                break
            }
            o += e[t]
        }
        return r !== '' ? !1 : { value: o, index: t, tagClosed: n }
    }
    var yD = new RegExp(
        `(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,
        'g'
    )
    function SS(e, t) {
        let o = pl.getAllMatches(e, yD),
            r = {}
        for (let n = 0; n < o.length; n++) {
            if (o[n][1].length === 0)
                return pe(
                    'InvalidAttr',
                    "Attribute '" + o[n][2] + "' has no space in starting.",
                    rs(o[n])
                )
            if (o[n][3] !== void 0 && o[n][4] === void 0)
                return pe(
                    'InvalidAttr',
                    "Attribute '" + o[n][2] + "' is without value.",
                    rs(o[n])
                )
            if (o[n][3] === void 0 && !t.allowBooleanAttributes)
                return pe(
                    'InvalidAttr',
                    "boolean attribute '" + o[n][2] + "' is not allowed.",
                    rs(o[n])
                )
            let s = o[n][2]
            if (!CD(s))
                return pe(
                    'InvalidAttr',
                    "Attribute '" + s + "' is an invalid name.",
                    rs(o[n])
                )
            if (!r.hasOwnProperty(s)) r[s] = 1
            else
                return pe(
                    'InvalidAttr',
                    "Attribute '" + s + "' is repeated.",
                    rs(o[n])
                )
        }
        return !0
    }
    function xD(e, t) {
        let o = /\d/
        for (e[t] === 'x' && (t++, (o = /[\da-fA-F]/)); t < e.length; t++) {
            if (e[t] === ';') return t
            if (!e[t].match(o)) break
        }
        return -1
    }
    function ED(e, t) {
        if ((t++, e[t] === ';')) return -1
        if (e[t] === '#') return t++, xD(e, t)
        let o = 0
        for (; t < e.length; t++, o++)
            if (!(e[t].match(/\w/) && o < 20)) {
                if (e[t] === ';') break
                return -1
            }
        return t
    }
    function pe(e, t, o) {
        return { err: { code: e, msg: t, line: o.line || o, col: o.col } }
    }
    function CD(e) {
        return pl.isName(e)
    }
    function SD(e) {
        return pl.isName(e)
    }
    function Te(e, t) {
        let o = e.substring(0, t).split(/\r?\n/)
        return { line: o.length, col: o[o.length - 1].length + 1 }
    }
    function rs(e) {
        return e.startIndex + e[1].length
    }
})
var AS = Ye((fl) => {
    var wS = {
            preserveOrder: !1,
            attributeNamePrefix: '@_',
            attributesGroupName: !1,
            textNodeName: '#text',
            ignoreAttributes: !0,
            removeNSPrefix: !1,
            allowBooleanAttributes: !1,
            parseTagValue: !0,
            parseAttributeValue: !1,
            trimValues: !0,
            cdataPropName: !1,
            numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 },
            tagValueProcessor: function (e, t) {
                return t
            },
            attributeValueProcessor: function (e, t) {
                return t
            },
            stopNodes: [],
            alwaysCreateTextNode: !1,
            isArray: () => !1,
            commentPropName: !1,
            unpairedTags: [],
            processEntities: !0,
            htmlEntities: !1,
            ignoreDeclaration: !1,
            ignorePiTags: !1,
            transformTagName: !1,
            transformAttributeName: !1,
            updateTag: function (e, t, o) {
                return e
            },
        },
        bD = function (e) {
            return Object.assign({}, wS, e)
        }
    fl.buildOptions = bD
    fl.defaultOptions = wS
})
var _S = Ye((Nq, vS) => {
    'use strict'
    var gl = class {
        constructor(t) {
            ;(this.tagname = t), (this.child = []), (this[':@'] = {})
        }
        add(t, o) {
            t === '__proto__' && (t = '#__proto__'), this.child.push({ [t]: o })
        }
        addChild(t) {
            t.tagname === '__proto__' && (t.tagname = '#__proto__'),
                t[':@'] && Object.keys(t[':@']).length > 0
                    ? this.child.push({ [t.tagname]: t.child, ':@': t[':@'] })
                    : this.child.push({ [t.tagname]: t.child })
        }
    }
    vS.exports = gl
})
var TS = Ye((Fq, RS) => {
    var wD = Ec()
    function AD(e, t) {
        let o = {}
        if (
            e[t + 3] === 'O' &&
            e[t + 4] === 'C' &&
            e[t + 5] === 'T' &&
            e[t + 6] === 'Y' &&
            e[t + 7] === 'P' &&
            e[t + 8] === 'E'
        ) {
            t = t + 9
            let r = 1,
                n = !1,
                s = !1,
                a = ''
            for (; t < e.length; t++)
                if (e[t] === '<' && !s) {
                    if (n && RD(e, t))
                        (t += 7),
                            ([entityName, val, t] = vD(e, t + 1)),
                            val.indexOf('&') === -1 &&
                                (o[ND(entityName)] = {
                                    regx: RegExp(`&${entityName};`, 'g'),
                                    val,
                                })
                    else if (n && TD(e, t)) t += 8
                    else if (n && ID(e, t)) t += 8
                    else if (n && PD(e, t)) t += 9
                    else if (_D) s = !0
                    else throw new Error('Invalid DOCTYPE')
                    r++, (a = '')
                } else if (e[t] === '>') {
                    if (
                        (s
                            ? e[t - 1] === '-' &&
                              e[t - 2] === '-' &&
                              ((s = !1), r--)
                            : r--,
                        r === 0)
                    )
                        break
                } else e[t] === '[' ? (n = !0) : (a += e[t])
            if (r !== 0) throw new Error('Unclosed DOCTYPE')
        } else throw new Error('Invalid Tag instead of DOCTYPE')
        return { entities: o, i: t }
    }
    function vD(e, t) {
        let o = ''
        for (; t < e.length && e[t] !== "'" && e[t] !== '"'; t++) o += e[t]
        if (((o = o.trim()), o.indexOf(' ') !== -1))
            throw new Error('External entites are not supported')
        let r = e[t++],
            n = ''
        for (; t < e.length && e[t] !== r; t++) n += e[t]
        return [o, n, t]
    }
    function _D(e, t) {
        return e[t + 1] === '!' && e[t + 2] === '-' && e[t + 3] === '-'
    }
    function RD(e, t) {
        return (
            e[t + 1] === '!' &&
            e[t + 2] === 'E' &&
            e[t + 3] === 'N' &&
            e[t + 4] === 'T' &&
            e[t + 5] === 'I' &&
            e[t + 6] === 'T' &&
            e[t + 7] === 'Y'
        )
    }
    function TD(e, t) {
        return (
            e[t + 1] === '!' &&
            e[t + 2] === 'E' &&
            e[t + 3] === 'L' &&
            e[t + 4] === 'E' &&
            e[t + 5] === 'M' &&
            e[t + 6] === 'E' &&
            e[t + 7] === 'N' &&
            e[t + 8] === 'T'
        )
    }
    function ID(e, t) {
        return (
            e[t + 1] === '!' &&
            e[t + 2] === 'A' &&
            e[t + 3] === 'T' &&
            e[t + 4] === 'T' &&
            e[t + 5] === 'L' &&
            e[t + 6] === 'I' &&
            e[t + 7] === 'S' &&
            e[t + 8] === 'T'
        )
    }
    function PD(e, t) {
        return (
            e[t + 1] === '!' &&
            e[t + 2] === 'N' &&
            e[t + 3] === 'O' &&
            e[t + 4] === 'T' &&
            e[t + 5] === 'A' &&
            e[t + 6] === 'T' &&
            e[t + 7] === 'I' &&
            e[t + 8] === 'O' &&
            e[t + 9] === 'N'
        )
    }
    function ND(e) {
        if (wD.isName(e)) return e
        throw new Error(`Invalid entity name ${e}`)
    }
    RS.exports = AD
})
var PS = Ye((Oq, IS) => {
    var FD = /^[-+]?0x[a-fA-F0-9]+$/,
        OD =
            /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/
    !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt)
    !Number.parseFloat &&
        window.parseFloat &&
        (Number.parseFloat = window.parseFloat)
    var DD = { hex: !0, leadingZeros: !0, decimalPoint: '.', eNotation: !0 }
    function kD(e, t = {}) {
        if (((t = Object.assign({}, DD, t)), !e || typeof e != 'string'))
            return e
        let o = e.trim()
        if (t.skipLike !== void 0 && t.skipLike.test(o)) return e
        if (t.hex && FD.test(o)) return Number.parseInt(o, 16)
        {
            let r = OD.exec(o)
            if (r) {
                let n = r[1],
                    s = r[2],
                    a = LD(r[3]),
                    d = r[4] || r[6]
                if (!t.leadingZeros && s.length > 0 && n && o[2] !== '.')
                    return e
                if (!t.leadingZeros && s.length > 0 && !n && o[1] !== '.')
                    return e
                {
                    let m = Number(o),
                        l = '' + m
                    return l.search(/[eE]/) !== -1 || d
                        ? t.eNotation
                            ? m
                            : e
                        : o.indexOf('.') !== -1
                          ? (l === '0' && a === '') ||
                            l === a ||
                            (n && l === '-' + a)
                              ? m
                              : e
                          : s
                            ? a === l || n + a === l
                                ? m
                                : e
                            : o === l || o === n + l
                              ? m
                              : e
                }
            } else return e
        }
    }
    function LD(e) {
        return (
            e &&
                e.indexOf('.') !== -1 &&
                ((e = e.replace(/0+$/, '')),
                e === '.'
                    ? (e = '0')
                    : e[0] === '.'
                      ? (e = '0' + e)
                      : e[e.length - 1] === '.' &&
                        (e = e.substr(0, e.length - 1))),
            e
        )
    }
    IS.exports = kD
})
var OS = Ye((Dq, FS) => {
    'use strict'
    var NS = Ec(),
        ns = _S(),
        MD = TS(),
        $D = PS(),
        hl = class {
            constructor(t) {
                ;(this.options = t),
                    (this.currentNode = null),
                    (this.tagsNodeStack = []),
                    (this.docTypeEntities = {}),
                    (this.lastEntities = {
                        apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
                        gt: { regex: /&(gt|#62|#x3E);/g, val: '>' },
                        lt: { regex: /&(lt|#60|#x3C);/g, val: '<' },
                        quot: { regex: /&(quot|#34|#x22);/g, val: '"' },
                    }),
                    (this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: '&' }),
                    (this.htmlEntities = {
                        space: { regex: /&(nbsp|#160);/g, val: ' ' },
                        cent: { regex: /&(cent|#162);/g, val: '\xA2' },
                        pound: { regex: /&(pound|#163);/g, val: '\xA3' },
                        yen: { regex: /&(yen|#165);/g, val: '\xA5' },
                        euro: { regex: /&(euro|#8364);/g, val: '\u20AC' },
                        copyright: { regex: /&(copy|#169);/g, val: '\xA9' },
                        reg: { regex: /&(reg|#174);/g, val: '\xAE' },
                        inr: { regex: /&(inr|#8377);/g, val: '\u20B9' },
                        num_dec: {
                            regex: /&#([0-9]{1,7});/g,
                            val: (o, r) =>
                                String.fromCharCode(Number.parseInt(r, 10)),
                        },
                        num_hex: {
                            regex: /&#x([0-9a-fA-F]{1,6});/g,
                            val: (o, r) =>
                                String.fromCharCode(Number.parseInt(r, 16)),
                        },
                    }),
                    (this.addExternalEntities = UD),
                    (this.parseXml = WD),
                    (this.parseTextData = BD),
                    (this.resolveNameSpace = GD),
                    (this.buildAttributesMap = VD),
                    (this.isItStopNode = KD),
                    (this.replaceEntitiesValue = jD),
                    (this.readStopNodeData = JD),
                    (this.saveTextToParentTag = qD),
                    (this.addChild = HD)
            }
        }
    function UD(e) {
        let t = Object.keys(e)
        for (let o = 0; o < t.length; o++) {
            let r = t[o]
            this.lastEntities[r] = {
                regex: new RegExp('&' + r + ';', 'g'),
                val: e[r],
            }
        }
    }
    function BD(e, t, o, r, n, s, a) {
        if (
            e !== void 0 &&
            (this.options.trimValues && !r && (e = e.trim()), e.length > 0)
        ) {
            a || (e = this.replaceEntitiesValue(e))
            let d = this.options.tagValueProcessor(t, e, o, n, s)
            return d == null
                ? e
                : typeof d != typeof e || d !== e
                  ? d
                  : this.options.trimValues
                    ? xl(
                          e,
                          this.options.parseTagValue,
                          this.options.numberParseOptions
                      )
                    : e.trim() === e
                      ? xl(
                            e,
                            this.options.parseTagValue,
                            this.options.numberParseOptions
                        )
                      : e
        }
    }
    function GD(e) {
        if (this.options.removeNSPrefix) {
            let t = e.split(':'),
                o = e.charAt(0) === '/' ? '/' : ''
            if (t[0] === 'xmlns') return ''
            t.length === 2 && (e = o + t[1])
        }
        return e
    }
    var zD = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, 'gm')
    function VD(e, t, o) {
        if (!this.options.ignoreAttributes && typeof e == 'string') {
            let r = NS.getAllMatches(e, zD),
                n = r.length,
                s = {}
            for (let a = 0; a < n; a++) {
                let d = this.resolveNameSpace(r[a][1]),
                    m = r[a][4],
                    l = this.options.attributeNamePrefix + d
                if (d.length)
                    if (
                        (this.options.transformAttributeName &&
                            (l = this.options.transformAttributeName(l)),
                        l === '__proto__' && (l = '#__proto__'),
                        m !== void 0)
                    ) {
                        this.options.trimValues && (m = m.trim()),
                            (m = this.replaceEntitiesValue(m))
                        let g = this.options.attributeValueProcessor(d, m, t)
                        g == null
                            ? (s[l] = m)
                            : typeof g != typeof m || g !== m
                              ? (s[l] = g)
                              : (s[l] = xl(
                                    m,
                                    this.options.parseAttributeValue,
                                    this.options.numberParseOptions
                                ))
                    } else this.options.allowBooleanAttributes && (s[l] = !0)
            }
            if (!Object.keys(s).length) return
            if (this.options.attributesGroupName) {
                let a = {}
                return (a[this.options.attributesGroupName] = s), a
            }
            return s
        }
    }
    var WD = function (e) {
        e = e.replace(
            /\r\n?/g,
            `
`
        )
        let t = new ns('!xml'),
            o = t,
            r = '',
            n = ''
        for (let s = 0; s < e.length; s++)
            if (e[s] === '<')
                if (e[s + 1] === '/') {
                    let d = _r(e, '>', s, 'Closing Tag is not closed.'),
                        m = e.substring(s + 2, d).trim()
                    if (this.options.removeNSPrefix) {
                        let u = m.indexOf(':')
                        u !== -1 && (m = m.substr(u + 1))
                    }
                    this.options.transformTagName &&
                        (m = this.options.transformTagName(m)),
                        o && (r = this.saveTextToParentTag(r, o, n))
                    let l = n.substring(n.lastIndexOf('.') + 1)
                    if (m && this.options.unpairedTags.indexOf(m) !== -1)
                        throw new Error(
                            `Unpaired tag can not be used as closing tag: </${m}>`
                        )
                    let g = 0
                    l && this.options.unpairedTags.indexOf(l) !== -1
                        ? ((g = n.lastIndexOf('.', n.lastIndexOf('.') - 1)),
                          this.tagsNodeStack.pop())
                        : (g = n.lastIndexOf('.')),
                        (n = n.substring(0, g)),
                        (o = this.tagsNodeStack.pop()),
                        (r = ''),
                        (s = d)
                } else if (e[s + 1] === '?') {
                    let d = yl(e, s, !1, '?>')
                    if (!d) throw new Error('Pi Tag is not closed.')
                    if (
                        ((r = this.saveTextToParentTag(r, o, n)),
                        !(
                            (this.options.ignoreDeclaration &&
                                d.tagName === '?xml') ||
                            this.options.ignorePiTags
                        ))
                    ) {
                        let m = new ns(d.tagName)
                        m.add(this.options.textNodeName, ''),
                            d.tagName !== d.tagExp &&
                                d.attrExpPresent &&
                                (m[':@'] = this.buildAttributesMap(
                                    d.tagExp,
                                    n,
                                    d.tagName
                                )),
                            this.addChild(o, m, n)
                    }
                    s = d.closeIndex + 1
                } else if (e.substr(s + 1, 3) === '!--') {
                    let d = _r(e, '-->', s + 4, 'Comment is not closed.')
                    if (this.options.commentPropName) {
                        let m = e.substring(s + 4, d - 2)
                        ;(r = this.saveTextToParentTag(r, o, n)),
                            o.add(this.options.commentPropName, [
                                { [this.options.textNodeName]: m },
                            ])
                    }
                    s = d
                } else if (e.substr(s + 1, 2) === '!D') {
                    let d = MD(e, s)
                    ;(this.docTypeEntities = d.entities), (s = d.i)
                } else if (e.substr(s + 1, 2) === '![') {
                    let d = _r(e, ']]>', s, 'CDATA is not closed.') - 2,
                        m = e.substring(s + 9, d)
                    r = this.saveTextToParentTag(r, o, n)
                    let l = this.parseTextData(m, o.tagname, n, !0, !1, !0, !0)
                    l == null && (l = ''),
                        this.options.cdataPropName
                            ? o.add(this.options.cdataPropName, [
                                  { [this.options.textNodeName]: m },
                              ])
                            : o.add(this.options.textNodeName, l),
                        (s = d + 2)
                } else {
                    let d = yl(e, s, this.options.removeNSPrefix),
                        m = d.tagName,
                        l = d.rawTagName,
                        g = d.tagExp,
                        u = d.attrExpPresent,
                        C = d.closeIndex
                    this.options.transformTagName &&
                        (m = this.options.transformTagName(m)),
                        o &&
                            r &&
                            o.tagname !== '!xml' &&
                            (r = this.saveTextToParentTag(r, o, n, !1))
                    let w = o
                    if (
                        (w &&
                            this.options.unpairedTags.indexOf(w.tagname) !==
                                -1 &&
                            ((o = this.tagsNodeStack.pop()),
                            (n = n.substring(0, n.lastIndexOf('.')))),
                        m !== t.tagname && (n += n ? '.' + m : m),
                        this.isItStopNode(this.options.stopNodes, n, m))
                    ) {
                        let v = ''
                        if (g.length > 0 && g.lastIndexOf('/') === g.length - 1)
                            m[m.length - 1] === '/'
                                ? ((m = m.substr(0, m.length - 1)),
                                  (n = n.substr(0, n.length - 1)),
                                  (g = m))
                                : (g = g.substr(0, g.length - 1)),
                                (s = d.closeIndex)
                        else if (this.options.unpairedTags.indexOf(m) !== -1)
                            s = d.closeIndex
                        else {
                            let F = this.readStopNodeData(e, l, C + 1)
                            if (!F) throw new Error(`Unexpected end of ${l}`)
                            ;(s = F.i), (v = F.tagContent)
                        }
                        let U = new ns(m)
                        m !== g &&
                            u &&
                            (U[':@'] = this.buildAttributesMap(g, n, m)),
                            v &&
                                (v = this.parseTextData(
                                    v,
                                    m,
                                    n,
                                    !0,
                                    u,
                                    !0,
                                    !0
                                )),
                            (n = n.substr(0, n.lastIndexOf('.'))),
                            U.add(this.options.textNodeName, v),
                            this.addChild(o, U, n)
                    } else {
                        if (
                            g.length > 0 &&
                            g.lastIndexOf('/') === g.length - 1
                        ) {
                            m[m.length - 1] === '/'
                                ? ((m = m.substr(0, m.length - 1)),
                                  (n = n.substr(0, n.length - 1)),
                                  (g = m))
                                : (g = g.substr(0, g.length - 1)),
                                this.options.transformTagName &&
                                    (m = this.options.transformTagName(m))
                            let v = new ns(m)
                            m !== g &&
                                u &&
                                (v[':@'] = this.buildAttributesMap(g, n, m)),
                                this.addChild(o, v, n),
                                (n = n.substr(0, n.lastIndexOf('.')))
                        } else {
                            let v = new ns(m)
                            this.tagsNodeStack.push(o),
                                m !== g &&
                                    u &&
                                    (v[':@'] = this.buildAttributesMap(
                                        g,
                                        n,
                                        m
                                    )),
                                this.addChild(o, v, n),
                                (o = v)
                        }
                        ;(r = ''), (s = C)
                    }
                }
            else r += e[s]
        return t.child
    }
    function HD(e, t, o) {
        let r = this.options.updateTag(t.tagname, o, t[':@'])
        r === !1 || (typeof r == 'string' && (t.tagname = r), e.addChild(t))
    }
    var jD = function (e) {
        if (this.options.processEntities) {
            for (let t in this.docTypeEntities) {
                let o = this.docTypeEntities[t]
                e = e.replace(o.regx, o.val)
            }
            for (let t in this.lastEntities) {
                let o = this.lastEntities[t]
                e = e.replace(o.regex, o.val)
            }
            if (this.options.htmlEntities)
                for (let t in this.htmlEntities) {
                    let o = this.htmlEntities[t]
                    e = e.replace(o.regex, o.val)
                }
            e = e.replace(this.ampEntity.regex, this.ampEntity.val)
        }
        return e
    }
    function qD(e, t, o, r) {
        return (
            e &&
                (r === void 0 && (r = Object.keys(t.child).length === 0),
                (e = this.parseTextData(
                    e,
                    t.tagname,
                    o,
                    !1,
                    t[':@'] ? Object.keys(t[':@']).length !== 0 : !1,
                    r
                )),
                e !== void 0 && e !== '' && t.add(this.options.textNodeName, e),
                (e = '')),
            e
        )
    }
    function KD(e, t, o) {
        let r = '*.' + o
        for (let n in e) {
            let s = e[n]
            if (r === s || t === s) return !0
        }
        return !1
    }
    function YD(e, t, o = '>') {
        let r,
            n = ''
        for (let s = t; s < e.length; s++) {
            let a = e[s]
            if (r) a === r && (r = '')
            else if (a === '"' || a === "'") r = a
            else if (a === o[0])
                if (o[1]) {
                    if (e[s + 1] === o[1]) return { data: n, index: s }
                } else return { data: n, index: s }
            else a === '	' && (a = ' ')
            n += a
        }
    }
    function _r(e, t, o, r) {
        let n = e.indexOf(t, o)
        if (n === -1) throw new Error(r)
        return n + t.length - 1
    }
    function yl(e, t, o, r = '>') {
        let n = YD(e, t + 1, r)
        if (!n) return
        let s = n.data,
            a = n.index,
            d = s.search(/\s/),
            m = s,
            l = !0
        d !== -1 &&
            ((m = s.substring(0, d)), (s = s.substring(d + 1).trimStart()))
        let g = m
        if (o) {
            let u = m.indexOf(':')
            u !== -1 &&
                ((m = m.substr(u + 1)), (l = m !== n.data.substr(u + 1)))
        }
        return {
            tagName: m,
            tagExp: s,
            closeIndex: a,
            attrExpPresent: l,
            rawTagName: g,
        }
    }
    function JD(e, t, o) {
        let r = o,
            n = 1
        for (; o < e.length; o++)
            if (e[o] === '<')
                if (e[o + 1] === '/') {
                    let s = _r(e, '>', o, `${t} is not closed`)
                    if (e.substring(o + 2, s).trim() === t && (n--, n === 0))
                        return { tagContent: e.substring(r, o), i: s }
                    o = s
                } else if (e[o + 1] === '?')
                    o = _r(e, '?>', o + 1, 'StopNode is not closed.')
                else if (e.substr(o + 1, 3) === '!--')
                    o = _r(e, '-->', o + 3, 'StopNode is not closed.')
                else if (e.substr(o + 1, 2) === '![')
                    o = _r(e, ']]>', o, 'StopNode is not closed.') - 2
                else {
                    let s = yl(e, o, '>')
                    s &&
                        ((s && s.tagName) === t &&
                            s.tagExp[s.tagExp.length - 1] !== '/' &&
                            n++,
                        (o = s.closeIndex))
                }
    }
    function xl(e, t, o) {
        if (t && typeof e == 'string') {
            let r = e.trim()
            return r === 'true' ? !0 : r === 'false' ? !1 : $D(e, o)
        } else return NS.isExist(e) ? e : ''
    }
    FS.exports = hl
})
var LS = Ye((kS) => {
    'use strict'
    function XD(e, t) {
        return DS(e, t)
    }
    function DS(e, t, o) {
        let r,
            n = {}
        for (let s = 0; s < e.length; s++) {
            let a = e[s],
                d = QD(a),
                m = ''
            if (
                (o === void 0 ? (m = d) : (m = o + '.' + d),
                d === t.textNodeName)
            )
                r === void 0 ? (r = a[d]) : (r += '' + a[d])
            else {
                if (d === void 0) continue
                if (a[d]) {
                    let l = DS(a[d], t, m),
                        g = ek(l, t)
                    a[':@']
                        ? ZD(l, a[':@'], m, t)
                        : Object.keys(l).length === 1 &&
                            l[t.textNodeName] !== void 0 &&
                            !t.alwaysCreateTextNode
                          ? (l = l[t.textNodeName])
                          : Object.keys(l).length === 0 &&
                            (t.alwaysCreateTextNode
                                ? (l[t.textNodeName] = '')
                                : (l = '')),
                        n[d] !== void 0 && n.hasOwnProperty(d)
                            ? (Array.isArray(n[d]) || (n[d] = [n[d]]),
                              n[d].push(l))
                            : t.isArray(d, m, g)
                              ? (n[d] = [l])
                              : (n[d] = l)
                }
            }
        }
        return (
            typeof r == 'string'
                ? r.length > 0 && (n[t.textNodeName] = r)
                : r !== void 0 && (n[t.textNodeName] = r),
            n
        )
    }
    function QD(e) {
        let t = Object.keys(e)
        for (let o = 0; o < t.length; o++) {
            let r = t[o]
            if (r !== ':@') return r
        }
    }
    function ZD(e, t, o, r) {
        if (t) {
            let n = Object.keys(t),
                s = n.length
            for (let a = 0; a < s; a++) {
                let d = n[a]
                r.isArray(d, o + '.' + d, !0, !0)
                    ? (e[d] = [t[d]])
                    : (e[d] = t[d])
            }
        }
    }
    function ek(e, t) {
        let { textNodeName: o } = t,
            r = Object.keys(e).length
        return !!(
            r === 0 ||
            (r === 1 && (e[o] || typeof e[o] == 'boolean' || e[o] === 0))
        )
    }
    kS.prettify = XD
})
var $S = Ye((Lq, MS) => {
    var { buildOptions: tk } = AS(),
        ok = OS(),
        { prettify: rk } = LS(),
        nk = ul(),
        El = class {
            constructor(t) {
                ;(this.externalEntities = {}), (this.options = tk(t))
            }
            parse(t, o) {
                if (typeof t != 'string')
                    if (t.toString) t = t.toString()
                    else
                        throw new Error(
                            'XML data is accepted in String or Bytes[] form.'
                        )
                if (o) {
                    o === !0 && (o = {})
                    let s = nk.validate(t, o)
                    if (s !== !0)
                        throw Error(`${s.err.msg}:${s.err.line}:${s.err.col}`)
                }
                let r = new ok(this.options)
                r.addExternalEntities(this.externalEntities)
                let n = r.parseXml(t)
                return this.options.preserveOrder || n === void 0
                    ? n
                    : rk(n, this.options)
            }
            addEntity(t, o) {
                if (o.indexOf('&') !== -1)
                    throw new Error("Entity value can't have '&'")
                if (t.indexOf('&') !== -1 || t.indexOf(';') !== -1)
                    throw new Error(
                        "An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'"
                    )
                if (o === '&')
                    throw new Error("An entity with value '&' is not permitted")
                this.externalEntities[t] = o
            }
        }
    MS.exports = El
})
var VS = Ye((Mq, zS) => {
    var sk = `
`
    function ik(e, t) {
        let o = ''
        return t.format && t.indentBy.length > 0 && (o = sk), BS(e, t, '', o)
    }
    function BS(e, t, o, r) {
        let n = '',
            s = !1
        for (let a = 0; a < e.length; a++) {
            let d = e[a],
                m = ak(d)
            if (m === void 0) continue
            let l = ''
            if (
                (o.length === 0 ? (l = m) : (l = `${o}.${m}`),
                m === t.textNodeName)
            ) {
                let v = d[m]
                ck(l, t) || ((v = t.tagValueProcessor(m, v)), (v = GS(v, t))),
                    s && (n += r),
                    (n += v),
                    (s = !1)
                continue
            } else if (m === t.cdataPropName) {
                s && (n += r),
                    (n += `<![CDATA[${d[m][0][t.textNodeName]}]]>`),
                    (s = !1)
                continue
            } else if (m === t.commentPropName) {
                ;(n += r + `<!--${d[m][0][t.textNodeName]}-->`), (s = !0)
                continue
            } else if (m[0] === '?') {
                let v = US(d[':@'], t),
                    U = m === '?xml' ? '' : r,
                    F = d[m][0][t.textNodeName]
                ;(F = F.length !== 0 ? ' ' + F : ''),
                    (n += U + `<${m}${F}${v}?>`),
                    (s = !0)
                continue
            }
            let g = r
            g !== '' && (g += t.indentBy)
            let u = US(d[':@'], t),
                C = r + `<${m}${u}`,
                w = BS(d[m], t, l, g)
            t.unpairedTags.indexOf(m) !== -1
                ? t.suppressUnpairedNode
                    ? (n += C + '>')
                    : (n += C + '/>')
                : (!w || w.length === 0) && t.suppressEmptyNode
                  ? (n += C + '/>')
                  : w && w.endsWith('>')
                    ? (n += C + `>${w}${r}</${m}>`)
                    : ((n += C + '>'),
                      w && r !== '' && (w.includes('/>') || w.includes('</'))
                          ? (n += r + t.indentBy + w + r)
                          : (n += w),
                      (n += `</${m}>`)),
                (s = !0)
        }
        return n
    }
    function ak(e) {
        let t = Object.keys(e)
        for (let o = 0; o < t.length; o++) {
            let r = t[o]
            if (e.hasOwnProperty(r) && r !== ':@') return r
        }
    }
    function US(e, t) {
        let o = ''
        if (e && !t.ignoreAttributes)
            for (let r in e) {
                if (!e.hasOwnProperty(r)) continue
                let n = t.attributeValueProcessor(r, e[r])
                ;(n = GS(n, t)),
                    n === !0 && t.suppressBooleanAttributes
                        ? (o += ` ${r.substr(t.attributeNamePrefix.length)}`)
                        : (o += ` ${r.substr(t.attributeNamePrefix.length)}="${n}"`)
            }
        return o
    }
    function ck(e, t) {
        e = e.substr(0, e.length - t.textNodeName.length - 1)
        let o = e.substr(e.lastIndexOf('.') + 1)
        for (let r in t.stopNodes)
            if (t.stopNodes[r] === e || t.stopNodes[r] === '*.' + o) return !0
        return !1
    }
    function GS(e, t) {
        if (e && e.length > 0 && t.processEntities)
            for (let o = 0; o < t.entities.length; o++) {
                let r = t.entities[o]
                e = e.replace(r.regex, r.val)
            }
        return e
    }
    zS.exports = ik
})
var HS = Ye(($q, WS) => {
    'use strict'
    var dk = VS(),
        mk = {
            attributeNamePrefix: '@_',
            attributesGroupName: !1,
            textNodeName: '#text',
            ignoreAttributes: !0,
            cdataPropName: !1,
            format: !1,
            indentBy: '  ',
            suppressEmptyNode: !1,
            suppressUnpairedNode: !0,
            suppressBooleanAttributes: !0,
            tagValueProcessor: function (e, t) {
                return t
            },
            attributeValueProcessor: function (e, t) {
                return t
            },
            preserveOrder: !1,
            commentPropName: !1,
            unpairedTags: [],
            entities: [
                { regex: new RegExp('&', 'g'), val: '&amp;' },
                { regex: new RegExp('>', 'g'), val: '&gt;' },
                { regex: new RegExp('<', 'g'), val: '&lt;' },
                { regex: new RegExp("'", 'g'), val: '&apos;' },
                { regex: new RegExp('"', 'g'), val: '&quot;' },
            ],
            processEntities: !0,
            stopNodes: [],
            oneListGroup: !1,
        }
    function Po(e) {
        ;(this.options = Object.assign({}, mk, e)),
            this.options.ignoreAttributes || this.options.attributesGroupName
                ? (this.isAttribute = function () {
                      return !1
                  })
                : ((this.attrPrefixLen =
                      this.options.attributeNamePrefix.length),
                  (this.isAttribute = uk)),
            (this.processTextOrObjNode = lk),
            this.options.format
                ? ((this.indentate = pk),
                  (this.tagEndChar = `>
`),
                  (this.newLine = `
`))
                : ((this.indentate = function () {
                      return ''
                  }),
                  (this.tagEndChar = '>'),
                  (this.newLine = ''))
    }
    Po.prototype.build = function (e) {
        return this.options.preserveOrder
            ? dk(e, this.options)
            : (Array.isArray(e) &&
                  this.options.arrayNodeName &&
                  this.options.arrayNodeName.length > 1 &&
                  (e = { [this.options.arrayNodeName]: e }),
              this.j2x(e, 0).val)
    }
    Po.prototype.j2x = function (e, t) {
        let o = '',
            r = ''
        for (let n in e)
            if (Object.prototype.hasOwnProperty.call(e, n))
                if (typeof e[n] > 'u') this.isAttribute(n) && (r += '')
                else if (e[n] === null)
                    this.isAttribute(n)
                        ? (r += '')
                        : n[0] === '?'
                          ? (r +=
                                this.indentate(t) +
                                '<' +
                                n +
                                '?' +
                                this.tagEndChar)
                          : (r +=
                                this.indentate(t) +
                                '<' +
                                n +
                                '/' +
                                this.tagEndChar)
                else if (e[n] instanceof Date)
                    r += this.buildTextValNode(e[n], n, '', t)
                else if (typeof e[n] != 'object') {
                    let s = this.isAttribute(n)
                    if (s) o += this.buildAttrPairStr(s, '' + e[n])
                    else if (n === this.options.textNodeName) {
                        let a = this.options.tagValueProcessor(n, '' + e[n])
                        r += this.replaceEntitiesValue(a)
                    } else r += this.buildTextValNode(e[n], n, '', t)
                } else if (Array.isArray(e[n])) {
                    let s = e[n].length,
                        a = '',
                        d = ''
                    for (let m = 0; m < s; m++) {
                        let l = e[n][m]
                        if (!(typeof l > 'u'))
                            if (l === null)
                                n[0] === '?'
                                    ? (r +=
                                          this.indentate(t) +
                                          '<' +
                                          n +
                                          '?' +
                                          this.tagEndChar)
                                    : (r +=
                                          this.indentate(t) +
                                          '<' +
                                          n +
                                          '/' +
                                          this.tagEndChar)
                            else if (typeof l == 'object')
                                if (this.options.oneListGroup) {
                                    let g = this.j2x(l, t + 1)
                                    ;(a += g.val),
                                        this.options.attributesGroupName &&
                                            l.hasOwnProperty(
                                                this.options.attributesGroupName
                                            ) &&
                                            (d += g.attrStr)
                                } else a += this.processTextOrObjNode(l, n, t)
                            else if (this.options.oneListGroup) {
                                let g = this.options.tagValueProcessor(n, l)
                                ;(g = this.replaceEntitiesValue(g)), (a += g)
                            } else a += this.buildTextValNode(l, n, '', t)
                    }
                    this.options.oneListGroup &&
                        (a = this.buildObjectNode(a, n, d, t)),
                        (r += a)
                } else if (
                    this.options.attributesGroupName &&
                    n === this.options.attributesGroupName
                ) {
                    let s = Object.keys(e[n]),
                        a = s.length
                    for (let d = 0; d < a; d++)
                        o += this.buildAttrPairStr(s[d], '' + e[n][s[d]])
                } else r += this.processTextOrObjNode(e[n], n, t)
        return { attrStr: o, val: r }
    }
    Po.prototype.buildAttrPairStr = function (e, t) {
        return (
            (t = this.options.attributeValueProcessor(e, '' + t)),
            (t = this.replaceEntitiesValue(t)),
            this.options.suppressBooleanAttributes && t === 'true'
                ? ' ' + e
                : ' ' + e + '="' + t + '"'
        )
    }
    function lk(e, t, o) {
        let r = this.j2x(e, o + 1)
        return e[this.options.textNodeName] !== void 0 &&
            Object.keys(e).length === 1
            ? this.buildTextValNode(
                  e[this.options.textNodeName],
                  t,
                  r.attrStr,
                  o
              )
            : this.buildObjectNode(r.val, t, r.attrStr, o)
    }
    Po.prototype.buildObjectNode = function (e, t, o, r) {
        if (e === '')
            return t[0] === '?'
                ? this.indentate(r) + '<' + t + o + '?' + this.tagEndChar
                : this.indentate(r) +
                      '<' +
                      t +
                      o +
                      this.closeTag(t) +
                      this.tagEndChar
        {
            let n = '</' + t + this.tagEndChar,
                s = ''
            return (
                t[0] === '?' && ((s = '?'), (n = '')),
                (o || o === '') && e.indexOf('<') === -1
                    ? this.indentate(r) + '<' + t + o + s + '>' + e + n
                    : this.options.commentPropName !== !1 &&
                        t === this.options.commentPropName &&
                        s.length === 0
                      ? this.indentate(r) + `<!--${e}-->` + this.newLine
                      : this.indentate(r) +
                        '<' +
                        t +
                        o +
                        s +
                        this.tagEndChar +
                        e +
                        this.indentate(r) +
                        n
            )
        }
    }
    Po.prototype.closeTag = function (e) {
        let t = ''
        return (
            this.options.unpairedTags.indexOf(e) !== -1
                ? this.options.suppressUnpairedNode || (t = '/')
                : this.options.suppressEmptyNode
                  ? (t = '/')
                  : (t = `></${e}`),
            t
        )
    }
    Po.prototype.buildTextValNode = function (e, t, o, r) {
        if (
            this.options.cdataPropName !== !1 &&
            t === this.options.cdataPropName
        )
            return this.indentate(r) + `<![CDATA[${e}]]>` + this.newLine
        if (
            this.options.commentPropName !== !1 &&
            t === this.options.commentPropName
        )
            return this.indentate(r) + `<!--${e}-->` + this.newLine
        if (t[0] === '?')
            return this.indentate(r) + '<' + t + o + '?' + this.tagEndChar
        {
            let n = this.options.tagValueProcessor(t, e)
            return (
                (n = this.replaceEntitiesValue(n)),
                n === ''
                    ? this.indentate(r) +
                      '<' +
                      t +
                      o +
                      this.closeTag(t) +
                      this.tagEndChar
                    : this.indentate(r) +
                      '<' +
                      t +
                      o +
                      '>' +
                      n +
                      '</' +
                      t +
                      this.tagEndChar
            )
        }
    }
    Po.prototype.replaceEntitiesValue = function (e) {
        if (e && e.length > 0 && this.options.processEntities)
            for (let t = 0; t < this.options.entities.length; t++) {
                let o = this.options.entities[t]
                e = e.replace(o.regex, o.val)
            }
        return e
    }
    function pk(e) {
        return this.options.indentBy.repeat(e)
    }
    function uk(e) {
        return e.startsWith(this.options.attributeNamePrefix) &&
            e !== this.options.textNodeName
            ? e.substr(this.attrPrefixLen)
            : !1
    }
    WS.exports = Po
})
var qS = Ye((Uq, jS) => {
    'use strict'
    var fk = ul(),
        gk = $S(),
        hk = HS()
    jS.exports = { XMLParser: gk, XMLValidator: fk, XMLBuilder: hk }
})
var KS,
    Pt,
    YS,
    JS = i(() => {
        b()
        KS = XF(qS())
        ll()
        ;(Pt = (e, t) =>
            xc(e, t).then((o) => {
                if (o.length) {
                    let r = new KS.XMLParser({
                        attributeNamePrefix: '',
                        htmlEntities: !0,
                        ignoreAttributes: !1,
                        ignoreDeclaration: !0,
                        parseTagValue: !1,
                        trimValues: !1,
                        tagValueProcessor: (m, l) =>
                            l.trim() === '' &&
                            l.includes(`
`)
                                ? ''
                                : void 0,
                    })
                    r.addEntity('#xD', '\r'),
                        r.addEntity(
                            '#10',
                            `
`
                        )
                    let n
                    try {
                        n = r.parse(o, !0)
                    } catch (m) {
                        throw (
                            (m &&
                                typeof m == 'object' &&
                                Object.defineProperty(m, '$responseBodyText', {
                                    value: o,
                                }),
                            m)
                        )
                    }
                    let s = '#text',
                        a = Object.keys(n)[0],
                        d = n[a]
                    return d[s] && ((d[a] = d[s]), delete d[s]), dl(d)
                }
                return {}
            })),
            (YS = async (e, t) => {
                let o = await Pt(e, t)
                return (
                    o.Error &&
                        (o.Error.message = o.Error.message ?? o.Error.Message),
                    o
                )
            })
    })
var XS = i(() => {
    SC()
    fS()
    gS()
    JS()
})
var he = i(() => {
    _e()
    CC()
    XS()
})
async function QS(e, t, o) {
    if (
        (o.request?.headers?.['smithy-protocol'] === 'rpc-v2-cbor' &&
            yt(e, 'PROTOCOL_RPC_V2_CBOR', 'M'),
        typeof t.retryStrategy == 'function')
    ) {
        let s = await t.retryStrategy()
        typeof s.acquireInitialRetryToken == 'function'
            ? s.constructor?.name?.includes('Adaptive')
                ? yt(e, 'RETRY_MODE_ADAPTIVE', 'F')
                : yt(e, 'RETRY_MODE_STANDARD', 'E')
            : yt(e, 'RETRY_MODE_LEGACY', 'D')
    }
    if (typeof t.accountIdEndpointMode == 'function') {
        let s = e.endpointV2
        switch (
            (String(s?.url?.hostname).match(yk) &&
                yt(e, 'ACCOUNT_ID_ENDPOINT', 'O'),
            await t.accountIdEndpointMode?.())
        ) {
            case 'disabled':
                yt(e, 'ACCOUNT_ID_MODE_DISABLED', 'Q')
                break
            case 'preferred':
                yt(e, 'ACCOUNT_ID_MODE_PREFERRED', 'P')
                break
            case 'required':
                yt(e, 'ACCOUNT_ID_MODE_REQUIRED', 'R')
                break
        }
    }
    let n = e.__smithy_context?.selectedHttpAuthScheme?.identity
    if (n?.$source) {
        let s = n
        s.accountId && yt(e, 'RESOLVED_ACCOUNT_ID', 'T')
        for (let [a, d] of Object.entries(s.$source ?? {})) yt(e, a, d)
    }
}
var yk,
    ZS = i(() => {
        he()
        yk = /\d{12}\.ddb/
    })
var Cl,
    Cc,
    Sl,
    Sc,
    eb,
    tb,
    bl,
    ob = i(() => {
        ;(Cl = 'user-agent'),
            (Cc = 'x-amz-user-agent'),
            (Sl = ' '),
            (Sc = '/'),
            (eb = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g),
            (tb = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g),
            (bl = '-')
    })
function rb(e) {
    let t = ''
    for (let o in e) {
        let r = e[o]
        if (t.length + r.length + 1 <= 1024) {
            t.length ? (t += ',' + r) : (t += r)
            continue
        }
        break
    }
    return t
}
var nb = i(() => {})
var xk,
    bc,
    Ek,
    No,
    sb = i(() => {
        on()
        se()
        ZS()
        ob()
        nb()
        ;(xk = (e) => (t, o) => async (r) => {
            let { request: n } = r
            if (!X.isInstance(n)) return t(r)
            let { headers: s } = n,
                a = o?.userAgent?.map(bc) || [],
                d = (await e.defaultUserAgentProvider()).map(bc)
            await QS(o, e, r)
            let m = o
            d.push(
                `m/${rb(Object.assign({}, o.__smithy_context?.features, m.__aws_sdk_context?.features))}`
            )
            let l = e?.customUserAgent?.map(bc) || [],
                g = await e.userAgentAppId()
            g && d.push(bc([`app/${g}`]))
            let u = xE(),
                C = (u ? [u] : []).concat([...d, ...a, ...l]).join(Sl),
                w = [...d.filter((v) => v.startsWith('aws-sdk-')), ...l].join(
                    Sl
                )
            return (
                e.runtime !== 'browser'
                    ? (w && (s[Cc] = s[Cc] ? `${s[Cl]} ${w}` : w), (s[Cl] = C))
                    : (s[Cc] = C),
                t({ ...r, request: n })
            )
        }),
            (bc = (e) => {
                let t = e[0]
                        .split(Sc)
                        .map((a) => a.replace(eb, bl))
                        .join(Sc),
                    o = e[1]?.replace(tb, bl),
                    r = t.indexOf(Sc),
                    n = t.substring(0, r),
                    s = t.substring(r + 1)
                return (
                    n === 'api' && (s = s.toLowerCase()),
                    [n, s, o]
                        .filter((a) => a && a.length > 0)
                        .reduce((a, d, m) => {
                            switch (m) {
                                case 0:
                                    return d
                                case 1:
                                    return `${a}/${d}`
                                default:
                                    return `${a}#${d}`
                            }
                        }, '')
                )
            }),
            (Ek = {
                name: 'getUserAgentMiddleware',
                step: 'build',
                priority: 'low',
                tags: ['SET_USER_AGENT', 'USER_AGENT'],
                override: !0,
            }),
            (No = (e) => ({
                applyToStack: (t) => {
                    t.add(xk(e), Ek)
                },
            }))
    })
var cn = i(() => {
    xx()
    sb()
})
var dn,
    ib = i(() => {
        dn = (e, t, o) => {
            if (t in e) {
                if (e[t] === 'true') return !0
                if (e[t] === 'false') return !1
                throw new Error(
                    `Cannot load ${o} "${t}". Expected "true" or "false", got ${e[t]}.`
                )
            }
        }
    })
var ab = i(() => {})
var Fo,
    cb = i(() => {
        ;(function (e) {
            ;(e.ENV = 'env'), (e.CONFIG = 'shared config entry')
        })(Fo || (Fo = {}))
    })
var wl = i(() => {
    ib()
    ab()
    cb()
})
var Ck,
    Sk,
    Oo,
    db = i(() => {
        wl()
        ;(Ck = 'AWS_USE_DUALSTACK_ENDPOINT'),
            (Sk = 'use_dualstack_endpoint'),
            (Oo = {
                environmentVariableSelector: (e) => dn(e, Ck, Fo.ENV),
                configFileSelector: (e) => dn(e, Sk, Fo.CONFIG),
                default: !1,
            })
    })
var bk,
    wk,
    Do,
    mb = i(() => {
        wl()
        ;(bk = 'AWS_USE_FIPS_ENDPOINT'),
            (wk = 'use_fips_endpoint'),
            (Do = {
                environmentVariableSelector: (e) => dn(e, bk, Fo.ENV),
                configFileSelector: (e) => dn(e, wk, Fo.CONFIG),
                default: !1,
            })
    })
var lb = i(() => {
    Ge()
})
var pb = i(() => {})
var ub = i(() => {
    Ge()
    pb()
})
var fb = i(() => {
    db()
    mb()
    lb()
    ub()
})
var Ak,
    vk,
    Nt,
    ko,
    gb = i(() => {
        ;(Ak = 'AWS_REGION'),
            (vk = 'region'),
            (Nt = {
                environmentVariableSelector: (e) => e[Ak],
                configFileSelector: (e) => e[vk],
                default: () => {
                    throw new Error('Region is missing')
                },
            }),
            (ko = { preferredFile: 'credentials' })
    })
var wc,
    Al = i(() => {
        wc = (e) =>
            typeof e == 'string' &&
            (e.startsWith('fips-') || e.endsWith('-fips'))
    })
var vl,
    hb = i(() => {
        Al()
        vl = (e) =>
            wc(e)
                ? ['fips-aws-global', 'aws-fips'].includes(e)
                    ? 'us-east-1'
                    : e.replace(/fips-(dkr-|prod-)?|-fips/, '')
                : e
    })
var Lo,
    yb = i(() => {
        hb()
        Al()
        Lo = (e) => {
            let { region: t, useFipsEndpoint: o } = e
            if (!t) throw new Error('Region is missing')
            return {
                ...e,
                region: async () => {
                    if (typeof t == 'string') return vl(t)
                    let r = await t()
                    return vl(r)
                },
                useFipsEndpoint: async () => {
                    let r = typeof t == 'string' ? t : await t()
                    return wc(r)
                        ? !0
                        : typeof o != 'function'
                          ? Promise.resolve(!!o)
                          : o()
                },
            }
        }
    })
var xb = i(() => {
    gb()
    yb()
})
var Eb = i(() => {})
var Cb = i(() => {})
var Sb = i(() => {})
var bb = i(() => {})
var wb = i(() => {})
var Ab = i(() => {})
var vb = i(() => {
    Sb()
    bb()
    wb()
    Ab()
})
var _b = i(() => {
    Eb()
    Cb()
    vb()
})
var Ft = i(() => {
    fb()
    xb()
    _b()
})
var Rb,
    Tb = i(() => {
        Rb = (e) => ({
            ...e,
            eventStreamMarshaller: e.eventStreamSerdeProvider(e),
        })
    })
var Ib = i(() => {
    Tb()
})
function _k(e) {
    return (t) => async (o) => {
        let r = o.request
        if (X.isInstance(r)) {
            let { body: n, headers: s } = r
            if (
                n &&
                Object.keys(s)
                    .map((a) => a.toLowerCase())
                    .indexOf(Pb) === -1
            )
                try {
                    let a = e(n)
                    r.headers = { ...r.headers, [Pb]: String(a) }
                } catch {}
        }
        return t({ ...o, request: r })
    }
}
var Pb,
    Rk,
    Mo,
    ss = i(() => {
        se()
        Pb = 'content-length'
        ;(Rk = {
            step: 'build',
            tags: ['SET_CONTENT_LENGTH', 'CONTENT_LENGTH'],
            name: 'contentLengthMiddleware',
            override: !0,
        }),
            (Mo = (e) => ({
                applyToStack: (t) => {
                    t.add(_k(e.bodyLengthChecker), Rk)
                },
            }))
    })
var Nb,
    Tk,
    Ik,
    Pk,
    Nk,
    Fk,
    Fb = i(() => {
        ;(Nb = async (e) => {
            let t = e?.Bucket || ''
            if (
                (typeof e.Bucket == 'string' &&
                    (e.Bucket = t
                        .replace(/#/g, encodeURIComponent('#'))
                        .replace(/\?/g, encodeURIComponent('?'))),
                Fk(t))
            ) {
                if (e.ForcePathStyle === !0)
                    throw new Error(
                        'Path-style addressing cannot be used with ARN buckets'
                    )
            } else
                (!Nk(t) ||
                    (t.indexOf('.') !== -1 &&
                        !String(e.Endpoint).startsWith('http:')) ||
                    t.toLowerCase() !== t ||
                    t.length < 3) &&
                    (e.ForcePathStyle = !0)
            return (
                e.DisableMultiRegionAccessPoints &&
                    ((e.disableMultiRegionAccessPoints = !0),
                    (e.DisableMRAP = !0)),
                e
            )
        }),
            (Tk = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/),
            (Ik = /(\d+\.){3}\d+/),
            (Pk = /\.\./),
            (Nk = (e) => Tk.test(e) && !Ik.test(e) && !Pk.test(e)),
            (Fk = (e) => {
                let [t, o, r, , , n] = e.split(':'),
                    s = t === 'arn' && e.split(':').length >= 6,
                    a = !!(s && o && r && n)
                if (s && !a)
                    throw new Error(`Invalid ARN: ${e} was an invalid ARN.`)
                return a
            })
    })
var Ob = i(() => {
    Fb()
})
var Db,
    kb = i(() => {
        Db = (e, t, o) => {
            let r = async () => {
                let n = o[e] ?? o[t]
                return typeof n == 'function' ? n() : n
            }
            return e === 'credentialScope' || t === 'CredentialScope'
                ? async () => {
                      let n =
                          typeof o.credentials == 'function'
                              ? await o.credentials()
                              : o.credentials
                      return n?.credentialScope ?? n?.CredentialScope
                  }
                : e === 'accountId' || t === 'AccountId'
                  ? async () => {
                        let n =
                            typeof o.credentials == 'function'
                                ? await o.credentials()
                                : o.credentials
                        return n?.accountId ?? n?.AccountId
                    }
                  : e === 'endpoint' || t === 'endpoint'
                    ? async () => {
                          let n = await r()
                          if (n && typeof n == 'object') {
                              if ('url' in n) return n.url.href
                              if ('hostname' in n) {
                                  let {
                                      protocol: s,
                                      hostname: a,
                                      port: d,
                                      path: m,
                                  } = n
                                  return `${s}//${a}${d ? ':' + d : ''}${m}`
                              }
                          }
                          return n
                      }
                    : r
        }
    })
function Ac(e) {
    try {
        let t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []))
        return (
            t.delete('CONFIG'),
            t.delete('CONFIG_PREFIX_SEPARATOR'),
            t.delete('ENV'),
            [...t].join(', ')
        )
    } catch {
        return e
    }
}
var _l = i(() => {})
var Lb,
    Mb = i(() => {
        Q()
        _l()
        Lb = (e, t) => async () => {
            try {
                let o = e(process.env)
                if (o === void 0) throw new Error()
                return o
            } catch (o) {
                throw new $(
                    o.message || `Not found in ENV: ${Ac(e.toString())}`,
                    { logger: t }
                )
            }
        }
    })
import { homedir as Ok } from 'os'
import { sep as Dk } from 'path'
var Rl,
    kk,
    $o,
    mn = i(() => {
        ;(Rl = {}),
            (kk = () =>
                process && process.geteuid
                    ? `${process.geteuid()}`
                    : 'DEFAULT'),
            ($o = () => {
                let {
                    HOME: e,
                    USERPROFILE: t,
                    HOMEPATH: o,
                    HOMEDRIVE: r = `C:${Dk}`,
                } = process.env
                if (e) return e
                if (t) return t
                if (o) return `${r}${o}`
                let n = kk()
                return Rl[n] || (Rl[n] = Ok()), Rl[n]
            })
    })
var Tl,
    Lk,
    tt,
    $b = i(() => {
        ;(Tl = 'AWS_PROFILE'),
            (Lk = 'default'),
            (tt = (e) => e.profile || process.env[Tl] || Lk)
    })
import { createHash as Mk } from 'crypto'
import { join as $k } from 'path'
var vc,
    Il = i(() => {
        mn()
        vc = (e) => {
            let o = Mk('sha1').update(e).digest('hex')
            return $k($o(), '.aws', 'sso', 'cache', `${o}.json`)
        }
    })
import { promises as Uk } from 'fs'
var Bk,
    _c,
    Ub = i(() => {
        Il()
        ;({ readFile: Bk } = Uk),
            (_c = async (e) => {
                let t = vc(e),
                    o = await Bk(t, 'utf8')
                return JSON.parse(o)
            })
    })
var Bb,
    Gb = i(() => {
        Be()
        ln()
        Bb = (e) =>
            Object.entries(e)
                .filter(([t]) => {
                    let o = t.indexOf(ot)
                    return o === -1
                        ? !1
                        : Object.values(zt).includes(t.substring(0, o))
                })
                .reduce(
                    (t, [o, r]) => {
                        let n = o.indexOf(ot),
                            s =
                                o.substring(0, n) === zt.PROFILE
                                    ? o.substring(n + 1)
                                    : o
                        return (t[s] = r), t
                    },
                    { ...(e.default && { default: e.default }) }
                )
    })
import { join as Gk } from 'path'
var zk,
    Rc,
    Pl = i(() => {
        mn()
        ;(zk = 'AWS_CONFIG_FILE'),
            (Rc = () => process.env[zk] || Gk($o(), '.aws', 'config'))
    })
import { join as Vk } from 'path'
var Wk,
    zb,
    Vb = i(() => {
        mn()
        ;(Wk = 'AWS_SHARED_CREDENTIALS_FILE'),
            (zb = () => process.env[Wk] || Vk($o(), '.aws', 'credentials'))
    })
var Hk,
    jk,
    is,
    Nl = i(() => {
        Be()
        ln()
        ;(Hk = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/),
            (jk = ['__proto__', 'profile __proto__']),
            (is = (e) => {
                let t = {},
                    o,
                    r
                for (let n of e.split(/\r?\n/)) {
                    let s = n.split(/(^|\s)[;#]/)[0].trim()
                    if (s[0] === '[' && s[s.length - 1] === ']') {
                        ;(o = void 0), (r = void 0)
                        let d = s.substring(1, s.length - 1),
                            m = Hk.exec(d)
                        if (m) {
                            let [, l, , g] = m
                            Object.values(zt).includes(l) &&
                                (o = [l, g].join(ot))
                        } else o = d
                        if (jk.includes(d))
                            throw new Error(`Found invalid profile name "${d}"`)
                    } else if (o) {
                        let d = s.indexOf('=')
                        if (![0, -1].includes(d)) {
                            let [m, l] = [
                                s.substring(0, d).trim(),
                                s.substring(d + 1).trim(),
                            ]
                            if (l === '') r = m
                            else {
                                r && n.trimStart() === n && (r = void 0),
                                    (t[o] = t[o] || {})
                                let g = r ? [r, m].join(ot) : m
                                t[o][g] = l
                            }
                        }
                    }
                }
                return t
            })
    })
import { promises as qk } from 'fs'
var Kk,
    Fl,
    as,
    Ol = i(() => {
        ;({ readFile: Kk } = qk),
            (Fl = {}),
            (as = (e, t) => (
                (!Fl[e] || t?.ignoreCache) && (Fl[e] = Kk(e, 'utf8')), Fl[e]
            ))
    })
import { join as Wb } from 'path'
var Hb,
    ot,
    Tc,
    ln = i(() => {
        Gb()
        Pl()
        Vb()
        mn()
        Nl()
        Ol()
        ;(Hb = () => ({})),
            (ot = '.'),
            (Tc = async (e = {}) => {
                let { filepath: t = zb(), configFilepath: o = Rc() } = e,
                    r = $o(),
                    n = '~/',
                    s = t
                t.startsWith(n) && (s = Wb(r, t.slice(2)))
                let a = o
                o.startsWith(n) && (a = Wb(r, o.slice(2)))
                let d = await Promise.all([
                    as(a, { ignoreCache: e.ignoreCache })
                        .then(is)
                        .then(Bb)
                        .catch(Hb),
                    as(s, { ignoreCache: e.ignoreCache }).then(is).catch(Hb),
                ])
                return { configFile: d[0], credentialsFile: d[1] }
            })
    })
var jb,
    qb = i(() => {
        Be()
        ln()
        jb = (e) =>
            Object.entries(e)
                .filter(([t]) => t.startsWith(zt.SSO_SESSION + ot))
                .reduce(
                    (t, [o, r]) => ({
                        ...t,
                        [o.substring(o.indexOf(ot) + 1)]: r,
                    }),
                    {}
                )
    })
var Yk,
    Ic,
    Kb = i(() => {
        Pl()
        qb()
        Nl()
        Ol()
        ;(Yk = () => ({})),
            (Ic = async (e = {}) =>
                as(e.configFilepath ?? Rc())
                    .then(is)
                    .then(jb)
                    .catch(Yk))
    })
var Yb,
    Jb = i(() => {
        Yb = (...e) => {
            let t = {}
            for (let o of e)
                for (let [r, n] of Object.entries(o))
                    t[r] !== void 0 ? Object.assign(t[r], n) : (t[r] = n)
            return t
        }
    })
var Uo,
    Xb = i(() => {
        ln()
        Jb()
        Uo = async (e) => {
            let t = await Tc(e)
            return Yb(t.configFile, t.credentialsFile)
        }
    })
var Qb = i(() => {})
var xt = i(() => {
    mn()
    $b()
    Il()
    Ub()
    ln()
    Kb()
    Xb()
    Qb()
})
var Zb,
    ew = i(() => {
        Q()
        xt()
        _l()
        Zb =
            (e, { preferredFile: t = 'config', ...o } = {}) =>
            async () => {
                let r = tt(o),
                    { configFile: n, credentialsFile: s } = await Tc(o),
                    a = s[r] || {},
                    d = n[r] || {},
                    m = t === 'config' ? { ...a, ...d } : { ...d, ...a }
                try {
                    let g = e(m, t === 'config' ? n : s)
                    if (g === void 0) throw new Error()
                    return g
                } catch (l) {
                    throw new $(
                        l.message ||
                            `Not found in config files w/ profile [${r}]: ${Ac(e.toString())}`,
                        { logger: o.logger }
                    )
                }
            }
    })
var Jk,
    tw,
    ow = i(() => {
        Q()
        ;(Jk = (e) => typeof e == 'function'),
            (tw = (e) => (Jk(e) ? async () => await e() : zE(e)))
    })
var q,
    rw = i(() => {
        Q()
        Mb()
        ew()
        ow()
        q = (
            {
                environmentVariableSelector: e,
                configFileSelector: t,
                default: o,
            },
            r = {}
        ) => br(Yt(Lb(e), Zb(t, r), tw(o)))
    })
var Xt = i(() => {
    rw()
})
var nw,
    sw,
    iw,
    aw = i(() => {
        xt()
        ;(nw = 'AWS_ENDPOINT_URL'),
            (sw = 'endpoint_url'),
            (iw = (e) => ({
                environmentVariableSelector: (t) => {
                    let o = e.split(' ').map((s) => s.toUpperCase()),
                        r = t[[nw, ...o].join('_')]
                    if (r) return r
                    let n = t[nw]
                    if (n) return n
                },
                configFileSelector: (t, o) => {
                    if (o && t.services) {
                        let n = o[['services', t.services].join(ot)]
                        if (n) {
                            let s = e.split(' ').map((d) => d.toLowerCase()),
                                a = n[[s.join('_'), sw].join(ot)]
                            if (a) return a
                        }
                    }
                    let r = t[sw]
                    if (r) return r
                },
                default: void 0,
            }))
    })
var Pc,
    Dl = i(() => {
        Xt()
        aw()
        Pc = async (e) => q(iw(e ?? ''))()
    })
function cw(e) {
    let t = {}
    if (((e = e.replace(/^\?/, '')), e))
        for (let o of e.split('&')) {
            let [r, n = null] = o.split('=')
            ;(r = decodeURIComponent(r)),
                n && (n = decodeURIComponent(n)),
                r in t
                    ? Array.isArray(t[r])
                        ? t[r].push(n)
                        : (t[r] = [t[r], n])
                    : (t[r] = n)
        }
    return t
}
var dw = i(() => {})
var Le,
    Rr = i(() => {
        dw()
        Le = (e) => {
            if (typeof e == 'string') return Le(new URL(e))
            let {
                    hostname: t,
                    pathname: o,
                    port: r,
                    protocol: n,
                    search: s,
                } = e,
                a
            return (
                s && (a = cw(s)),
                {
                    hostname: t,
                    port: r ? parseInt(r) : void 0,
                    protocol: n,
                    path: o,
                    query: a,
                }
            )
        }
    })
var Nc,
    Fc = i(() => {
        Rr()
        Nc = (e) =>
            typeof e == 'object' ? ('url' in e ? Le(e.url) : e) : Le(e)
    })
var mw,
    Xk,
    kl = i(() => {
        Ob()
        kb()
        Dl()
        Fc()
        ;(mw = async (e, t, o, r) => {
            if (!o.endpoint) {
                let a
                o.serviceConfiguredEndpoint
                    ? (a = await o.serviceConfiguredEndpoint())
                    : (a = await Pc(o.serviceId)),
                    a && (o.endpoint = () => Promise.resolve(Nc(a)))
            }
            let n = await Xk(e, t, o)
            if (typeof o.endpointProvider != 'function')
                throw new Error('config.endpointProvider is not set.')
            return o.endpointProvider(n, r)
        }),
            (Xk = async (e, t, o) => {
                let r = {},
                    n = t?.getEndpointParameterInstructions?.() || {}
                for (let [s, a] of Object.entries(n))
                    switch (a.type) {
                        case 'staticContextParams':
                            r[s] = a.value
                            break
                        case 'contextParams':
                            r[s] = e[a.name]
                            break
                        case 'clientContextParams':
                        case 'builtInParams':
                            r[s] = await Db(a.name, s, o)()
                            break
                        default:
                            throw new Error(
                                'Unrecognized endpoint parameter instruction: ' +
                                    JSON.stringify(a)
                            )
                    }
                return (
                    Object.keys(n).length === 0 && Object.assign(r, o),
                    String(o.serviceId).toLowerCase() === 's3' && (await Nb(r)),
                    r
                )
            })
    })
var lw = i(() => {
    kl()
    Fc()
})
var pw,
    Ll = i(() => {
        ee()
        Ge()
        kl()
        pw =
            ({ config: e, instructions: t }) =>
            (o, r) =>
            async (n) => {
                e.endpoint && ax(r, 'ENDPOINT_OVERRIDE', 'N')
                let s = await mw(
                    n.input,
                    {
                        getEndpointParameterInstructions() {
                            return t
                        },
                    },
                    { ...e },
                    r
                )
                ;(r.endpointV2 = s), (r.authSchemes = s.properties?.authSchemes)
                let a = r.authSchemes?.[0]
                if (a) {
                    ;(r.signing_region = a.signingRegion),
                        (r.signing_service = a.signingName)
                    let m = Oe(r)?.selectedHttpAuthScheme?.httpAuthOption
                    m &&
                        (m.signingProperties = Object.assign(
                            m.signingProperties || {},
                            {
                                signing_region: a.signingRegion,
                                signingRegion: a.signingRegion,
                                signing_service: a.signingName,
                                signingName: a.signingName,
                                signingRegionSet: a.signingRegionSet,
                            },
                            a.properties
                        ))
                }
                return o({ ...n })
            }
    })
var Qk,
    x,
    uw = i(() => {
        R()
        Ll()
        ;(Qk = {
            step: 'serialize',
            tags: ['ENDPOINT_PARAMETERS', 'ENDPOINT_V2', 'ENDPOINT'],
            name: 'endpointV2Middleware',
            override: !0,
            relation: 'before',
            toMiddleware: Hn.name,
        }),
            (x = (e, t) => ({
                applyToStack: (o) => {
                    o.addRelativeTo(pw({ config: e, instructions: t }), Qk)
                },
            }))
    })
var Bo,
    fw = i(() => {
        Ge()
        Dl()
        Fc()
        Bo = (e) => {
            let t = e.tls ?? !0,
                { endpoint: o } = e,
                r = o != null ? async () => Nc(await fe(o)()) : void 0,
                s = {
                    ...e,
                    endpoint: r,
                    tls: t,
                    isCustomEndpoint: !!o,
                    useDualstackEndpoint: fe(e.useDualstackEndpoint ?? !1),
                    useFipsEndpoint: fe(e.useFipsEndpoint ?? !1),
                },
                a
            return (
                (s.serviceConfiguredEndpoint = async () => (
                    e.serviceId && !a && (a = Pc(e.serviceId)), a
                )),
                s
            )
        }
    })
var gw = i(() => {})
var _ = i(() => {
    lw()
    Ll()
    uw()
    fw()
    gw()
})
var Et,
    Tr,
    Ot,
    Oc = i(() => {
        ;(function (e) {
            ;(e.STANDARD = 'standard'), (e.ADAPTIVE = 'adaptive')
        })(Et || (Et = {}))
        ;(Tr = 3), (Ot = Et.STANDARD)
    })
var hw,
    yw,
    xw,
    Ew,
    Cw = i(() => {
        ;(hw = [
            'BandwidthLimitExceeded',
            'EC2ThrottledException',
            'LimitExceededException',
            'PriorRequestNotComplete',
            'ProvisionedThroughputExceededException',
            'RequestLimitExceeded',
            'RequestThrottled',
            'RequestThrottledException',
            'SlowDown',
            'ThrottledException',
            'Throttling',
            'ThrottlingException',
            'TooManyRequestsException',
            'TransactionInProgressException',
        ]),
            (yw = [
                'TimeoutError',
                'RequestTimeout',
                'RequestTimeoutException',
            ]),
            (xw = [500, 502, 503, 504]),
            (Ew = ['ECONNRESET', 'ECONNREFUSED', 'EPIPE', 'ETIMEDOUT'])
    })
var Zk,
    pn,
    Dc,
    Sw,
    cs = i(() => {
        Cw()
        ;(Zk = (e) => e.$metadata?.clockSkewCorrected),
            (pn = (e) =>
                e.$metadata?.httpStatusCode === 429 ||
                hw.includes(e.name) ||
                e.$retryable?.throttling == !0),
            (Dc = (e) =>
                Zk(e) ||
                yw.includes(e.name) ||
                Ew.includes(e?.code || '') ||
                xw.includes(e.$metadata?.httpStatusCode || 0)),
            (Sw = (e) => {
                if (e.$metadata?.httpStatusCode !== void 0) {
                    let t = e.$metadata.httpStatusCode
                    return 500 <= t && t <= 599 && !Dc(e)
                }
                return !1
            })
    })
var ds,
    Ml = i(() => {
        cs()
        ds = class {
            constructor(t) {
                ;(this.currentCapacity = 0),
                    (this.enabled = !1),
                    (this.lastMaxRate = 0),
                    (this.measuredTxRate = 0),
                    (this.requestCount = 0),
                    (this.lastTimestamp = 0),
                    (this.timeWindow = 0),
                    (this.beta = t?.beta ?? 0.7),
                    (this.minCapacity = t?.minCapacity ?? 1),
                    (this.minFillRate = t?.minFillRate ?? 0.5),
                    (this.scaleConstant = t?.scaleConstant ?? 0.4),
                    (this.smooth = t?.smooth ?? 0.8)
                let o = this.getCurrentTimeInSeconds()
                ;(this.lastThrottleTime = o),
                    (this.lastTxRateBucket = Math.floor(
                        this.getCurrentTimeInSeconds()
                    )),
                    (this.fillRate = this.minFillRate),
                    (this.maxCapacity = this.minCapacity)
            }
            getCurrentTimeInSeconds() {
                return Date.now() / 1e3
            }
            async getSendToken() {
                return this.acquireTokenBucket(1)
            }
            async acquireTokenBucket(t) {
                if (this.enabled) {
                    if ((this.refillTokenBucket(), t > this.currentCapacity)) {
                        let o =
                            ((t - this.currentCapacity) / this.fillRate) * 1e3
                        await new Promise((r) => setTimeout(r, o))
                    }
                    this.currentCapacity = this.currentCapacity - t
                }
            }
            refillTokenBucket() {
                let t = this.getCurrentTimeInSeconds()
                if (!this.lastTimestamp) {
                    this.lastTimestamp = t
                    return
                }
                let o = (t - this.lastTimestamp) * this.fillRate
                ;(this.currentCapacity = Math.min(
                    this.maxCapacity,
                    this.currentCapacity + o
                )),
                    (this.lastTimestamp = t)
            }
            updateClientSendingRate(t) {
                let o
                if ((this.updateMeasuredRate(), pn(t))) {
                    let n = this.enabled
                        ? Math.min(this.measuredTxRate, this.fillRate)
                        : this.measuredTxRate
                    ;(this.lastMaxRate = n),
                        this.calculateTimeWindow(),
                        (this.lastThrottleTime =
                            this.getCurrentTimeInSeconds()),
                        (o = this.cubicThrottle(n)),
                        this.enableTokenBucket()
                } else
                    this.calculateTimeWindow(),
                        (o = this.cubicSuccess(this.getCurrentTimeInSeconds()))
                let r = Math.min(o, 2 * this.measuredTxRate)
                this.updateTokenBucketRate(r)
            }
            calculateTimeWindow() {
                this.timeWindow = this.getPrecise(
                    Math.pow(
                        (this.lastMaxRate * (1 - this.beta)) /
                            this.scaleConstant,
                        1 / 3
                    )
                )
            }
            cubicThrottle(t) {
                return this.getPrecise(t * this.beta)
            }
            cubicSuccess(t) {
                return this.getPrecise(
                    this.scaleConstant *
                        Math.pow(
                            t - this.lastThrottleTime - this.timeWindow,
                            3
                        ) +
                        this.lastMaxRate
                )
            }
            enableTokenBucket() {
                this.enabled = !0
            }
            updateTokenBucketRate(t) {
                this.refillTokenBucket(),
                    (this.fillRate = Math.max(t, this.minFillRate)),
                    (this.maxCapacity = Math.max(t, this.minCapacity)),
                    (this.currentCapacity = Math.min(
                        this.currentCapacity,
                        this.maxCapacity
                    ))
            }
            updateMeasuredRate() {
                let t = this.getCurrentTimeInSeconds(),
                    o = Math.floor(t * 2) / 2
                if ((this.requestCount++, o > this.lastTxRateBucket)) {
                    let r = this.requestCount / (o - this.lastTxRateBucket)
                    ;(this.measuredTxRate = this.getPrecise(
                        r * this.smooth +
                            this.measuredTxRate * (1 - this.smooth)
                    )),
                        (this.requestCount = 0),
                        (this.lastTxRateBucket = o)
                }
            }
            getPrecise(t) {
                return parseFloat(t.toFixed(8))
            }
        }
    })
var kc,
    Lc,
    un = i(() => {
        ;(kc = 'amz-sdk-invocation-id'), (Lc = 'amz-sdk-request')
    })
var bw,
    ww = i(() => {
        un()
        bw = () => {
            let e = 100
            return {
                computeNextBackoffDelay: (r) =>
                    Math.floor(Math.min(2e4, Math.random() * 2 ** r * e)),
                setDelayBase: (r) => {
                    e = r
                },
            }
        }
    })
var $l,
    Aw = i(() => {
        un()
        $l = ({ retryDelay: e, retryCount: t, retryCost: o }) => ({
            getRetryCount: () => t,
            getRetryDelay: () => Math.min(2e4, e),
            getRetryCost: () => o,
        })
    })
var Ir,
    $c = i(() => {
        Oc()
        un()
        ww()
        Aw()
        Ir = class {
            constructor(t) {
                ;(this.maxAttempts = t),
                    (this.mode = Et.STANDARD),
                    (this.capacity = 500),
                    (this.retryBackoffStrategy = bw()),
                    (this.maxAttemptsProvider =
                        typeof t == 'function' ? t : async () => t)
            }
            async acquireInitialRetryToken(t) {
                return $l({ retryDelay: 100, retryCount: 0 })
            }
            async refreshRetryTokenForRetry(t, o) {
                let r = await this.getMaxAttempts()
                if (this.shouldRetry(t, o, r)) {
                    let n = o.errorType
                    this.retryBackoffStrategy.setDelayBase(
                        n === 'THROTTLING' ? 500 : 100
                    )
                    let s = this.retryBackoffStrategy.computeNextBackoffDelay(
                            t.getRetryCount()
                        ),
                        a = o.retryAfterHint
                            ? Math.max(
                                  o.retryAfterHint.getTime() - Date.now() || 0,
                                  s
                              )
                            : s,
                        d = this.getCapacityCost(n)
                    return (
                        (this.capacity -= d),
                        $l({
                            retryDelay: a,
                            retryCount: t.getRetryCount() + 1,
                            retryCost: d,
                        })
                    )
                }
                throw new Error('No retry token available')
            }
            recordSuccess(t) {
                this.capacity = Math.max(
                    500,
                    this.capacity + (t.getRetryCost() ?? 1)
                )
            }
            getCapacity() {
                return this.capacity
            }
            async getMaxAttempts() {
                try {
                    return await this.maxAttemptsProvider()
                } catch {
                    return (
                        console.warn(
                            `Max attempts provider could not resolve. Using default of ${Tr}`
                        ),
                        Tr
                    )
                }
            }
            shouldRetry(t, o, r) {
                return (
                    t.getRetryCount() + 1 < r &&
                    this.capacity >= this.getCapacityCost(o.errorType) &&
                    this.isRetryableError(o.errorType)
                )
            }
            getCapacityCost(t) {
                return t === 'TRANSIENT' ? 10 : 5
            }
            isRetryableError(t) {
                return t === 'THROTTLING' || t === 'TRANSIENT'
            }
        }
    })
var Uc,
    Iw = i(() => {
        Oc()
        Ml()
        $c()
        Uc = class {
            constructor(t, o) {
                ;(this.maxAttemptsProvider = t), (this.mode = Et.ADAPTIVE)
                let { rateLimiter: r } = o ?? {}
                ;(this.rateLimiter = r ?? new ds()),
                    (this.standardRetryStrategy = new Ir(t))
            }
            async acquireInitialRetryToken(t) {
                return (
                    await this.rateLimiter.getSendToken(),
                    this.standardRetryStrategy.acquireInitialRetryToken(t)
                )
            }
            async refreshRetryTokenForRetry(t, o) {
                return (
                    this.rateLimiter.updateClientSendingRate(o),
                    this.standardRetryStrategy.refreshRetryTokenForRetry(t, o)
                )
            }
            recordSuccess(t) {
                this.rateLimiter.updateClientSendingRate({}),
                    this.standardRetryStrategy.recordSuccess(t)
            }
        }
    })
var Pw = i(() => {
    un()
    $c()
})
var Nw = i(() => {})
var rt = i(() => {
    Iw()
    Pw()
    Ml()
    $c()
    Oc()
    un()
    Nw()
})
import eL from 'crypto'
function Bl() {
    return (
        Bc > Gc.length - 16 && (eL.randomFillSync(Gc), (Bc = 0)),
        Gc.slice(Bc, (Bc += 16))
    )
}
var Gc,
    Bc,
    Fw = i(() => {
        ;(Gc = new Uint8Array(256)), (Bc = Gc.length)
    })
function Ow(e, t = 0) {
    return (
        Ce[e[t + 0]] +
        Ce[e[t + 1]] +
        Ce[e[t + 2]] +
        Ce[e[t + 3]] +
        '-' +
        Ce[e[t + 4]] +
        Ce[e[t + 5]] +
        '-' +
        Ce[e[t + 6]] +
        Ce[e[t + 7]] +
        '-' +
        Ce[e[t + 8]] +
        Ce[e[t + 9]] +
        '-' +
        Ce[e[t + 10]] +
        Ce[e[t + 11]] +
        Ce[e[t + 12]] +
        Ce[e[t + 13]] +
        Ce[e[t + 14]] +
        Ce[e[t + 15]]
    )
}
var Ce,
    Dw = i(() => {
        Ce = []
        for (let e = 0; e < 256; ++e) Ce.push((e + 256).toString(16).slice(1))
    })
import tL from 'crypto'
var Gl,
    kw = i(() => {
        Gl = { randomUUID: tL.randomUUID }
    })
function oL(e, t, o) {
    if (Gl.randomUUID && !t && !e) return Gl.randomUUID()
    e = e || {}
    let r = e.random || (e.rng || Bl)()
    if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
        o = o || 0
        for (let n = 0; n < 16; ++n) t[o + n] = r[n]
        return t
    }
    return Ow(r)
}
var zl,
    Lw = i(() => {
        kw()
        Fw()
        Dw()
        zl = oL
    })
var Mw = i(() => {
    Lw()
})
var $w = i(() => {
    rt()
})
var Vl = i(() => {
    rt()
})
var Wl = i(() => {
    cs()
})
var Hl,
    jl = i(() => {
        Hl = (e) =>
            e instanceof Error
                ? e
                : e instanceof Object
                  ? Object.assign(new Error(), e)
                  : typeof e == 'string'
                    ? new Error(e)
                    : new Error(`AWS SDK error wrapper for ${e}`)
    })
var ql = i(() => {
    se()
    cs()
    rt()
    $w()
    Vl()
    Wl()
    jl()
})
var Uw = i(() => {
    rt()
    ql()
})
var Bw,
    Gw,
    Go,
    zo,
    rL,
    nL,
    Vo,
    zw = i(() => {
        Ge()
        rt()
        ;(Bw = 'AWS_MAX_ATTEMPTS'),
            (Gw = 'max_attempts'),
            (Go = {
                environmentVariableSelector: (e) => {
                    let t = e[Bw]
                    if (!t) return
                    let o = parseInt(t)
                    if (Number.isNaN(o))
                        throw new Error(
                            `Environment variable ${Bw} mast be a number, got "${t}"`
                        )
                    return o
                },
                configFileSelector: (e) => {
                    let t = e[Gw]
                    if (!t) return
                    let o = parseInt(t)
                    if (Number.isNaN(o))
                        throw new Error(
                            `Shared config file entry ${Gw} mast be a number, got "${t}"`
                        )
                    return o
                },
                default: Tr,
            }),
            (zo = (e) => {
                let { retryStrategy: t } = e,
                    o = fe(e.maxAttempts ?? Tr)
                return {
                    ...e,
                    maxAttempts: o,
                    retryStrategy: async () =>
                        t ||
                        ((await fe(e.retryMode)()) === Et.ADAPTIVE
                            ? new Uc(o)
                            : new Ir(o)),
                }
            }),
            (rL = 'AWS_RETRY_MODE'),
            (nL = 'retry_mode'),
            (Vo = {
                environmentVariableSelector: (e) => e[rL],
                configFileSelector: (e) => e[nL],
                default: Ot,
            })
    })
var Vw = i(() => {
    se()
    rt()
})
import { Readable as sL } from 'stream'
var Ww,
    Hw = i(() => {
        Ww = (e) =>
            e?.body instanceof sL ||
            (typeof ReadableStream < 'u' && e?.body instanceof ReadableStream)
    })
var iL,
    aL,
    cL,
    dL,
    mL,
    Wo,
    lL,
    jw = i(() => {
        se()
        cs()
        b()
        rt()
        Mw()
        Hw()
        jl()
        ;(iL = (e) => (t, o) => async (r) => {
            let n = await e.retryStrategy(),
                s = await e.maxAttempts()
            if (aL(n)) {
                n = n
                let a = await n.acquireInitialRetryToken(o.partition_id),
                    d = new Error(),
                    m = 0,
                    l = 0,
                    { request: g } = r,
                    u = X.isInstance(g)
                for (u && (g.headers[kc] = zl()); ; )
                    try {
                        u && (g.headers[Lc] = `attempt=${m + 1}; max=${s}`)
                        let { response: C, output: w } = await t(r)
                        return (
                            n.recordSuccess(a),
                            (w.$metadata.attempts = m + 1),
                            (w.$metadata.totalRetryDelay = l),
                            { response: C, output: w }
                        )
                    } catch (C) {
                        let w = cL(C)
                        if (((d = Hl(C)), u && Ww(g)))
                            throw (
                                ((o.logger instanceof et
                                    ? console
                                    : o.logger
                                )?.warn(
                                    'An error was encountered in a non-retryable streaming request.'
                                ),
                                d)
                            )
                        try {
                            a = await n.refreshRetryTokenForRetry(a, w)
                        } catch {
                            throw (
                                (d.$metadata || (d.$metadata = {}),
                                (d.$metadata.attempts = m + 1),
                                (d.$metadata.totalRetryDelay = l),
                                d)
                            )
                        }
                        m = a.getRetryCount()
                        let v = a.getRetryDelay()
                        ;(l += v), await new Promise((U) => setTimeout(U, v))
                    }
            } else
                return (
                    (n = n),
                    n?.mode &&
                        (o.userAgent = [
                            ...(o.userAgent || []),
                            ['cfg/retry-mode', n.mode],
                        ]),
                    n.retry(t, r)
                )
        }),
            (aL = (e) =>
                typeof e.acquireInitialRetryToken < 'u' &&
                typeof e.refreshRetryTokenForRetry < 'u' &&
                typeof e.recordSuccess < 'u'),
            (cL = (e) => {
                let t = { error: e, errorType: dL(e) },
                    o = lL(e.$response)
                return o && (t.retryAfterHint = o), t
            }),
            (dL = (e) =>
                pn(e)
                    ? 'THROTTLING'
                    : Dc(e)
                      ? 'TRANSIENT'
                      : Sw(e)
                        ? 'SERVER_ERROR'
                        : 'CLIENT_ERROR'),
            (mL = {
                name: 'retryMiddleware',
                tags: ['RETRY'],
                step: 'finalizeRequest',
                priority: 'high',
                override: !0,
            }),
            (Wo = (e) => ({
                applyToStack: (t) => {
                    t.add(iL(e), mL)
                },
            })),
            (lL = (e) => {
                if (!gt.isInstance(e)) return
                let t = Object.keys(e.headers).find(
                    (s) => s.toLowerCase() === 'retry-after'
                )
                if (!t) return
                let o = e.headers[t],
                    r = Number(o)
                return Number.isNaN(r) ? new Date(o) : new Date(r * 1e3)
            })
    })
var Qt = i(() => {
    Uw()
    ql()
    zw()
    Vl()
    Vw()
    Wl()
    jw()
})
function pL(e) {
    return {
        schemeId: 'aws.auth#sigv4',
        signingProperties: { name: 'lambda', region: e.region },
        propertiesExtractor: (t, o) => ({
            signingProperties: { config: t, context: o },
        }),
    }
}
var qw,
    Kw,
    Yw,
    Kl = i(() => {
        he()
        Ge()
        qw = async (e, t, o) => ({
            operation: Oe(t).operation,
            region:
                (await fe(e.region)()) ||
                (() => {
                    throw new Error(
                        'expected `region` to be configured for `aws.auth#sigv4`'
                    )
                })(),
        })
        ;(Kw = (e) => {
            let t = []
            switch (e.operation) {
                default:
                    t.push(pL(e))
            }
            return t
        }),
            (Yw = (e) => ({ ...So(e) }))
    })
var Jw,
    S,
    N = i(() => {
        ;(Jw = (e) => ({
            ...e,
            useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
            useFipsEndpoint: e.useFipsEndpoint ?? !1,
            defaultSigningName: 'lambda',
        })),
            (S = {
                UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
                Endpoint: { type: 'builtInParams', name: 'endpoint' },
                Region: { type: 'builtInParams', name: 'region' },
                UseDualStack: {
                    type: 'builtInParams',
                    name: 'useDualstackEndpoint',
                },
            })
    })
var Qw,
    Xw = i(() => {
        Qw = {
            name: '@aws-sdk/client-lambda',
            description:
                'AWS SDK for JavaScript Lambda Client for Node.js, Browser and React Native',
            version: '3.678.0',
            scripts: {
                build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
                'build:cjs':
                    'node ../../scripts/compilation/inline client-lambda',
                'build:es': 'tsc -p tsconfig.es.json',
                'build:include:deps':
                    'lerna run --scope $npm_package_name --include-dependencies build',
                'build:types': 'tsc -p tsconfig.types.json',
                'build:types:downlevel':
                    'downlevel-dts dist-types dist-types/ts3.4',
                clean: 'rimraf ./dist-* && rimraf *.tsbuildinfo',
                'extract:docs': 'api-extractor run --local',
                'generate:client':
                    'node ../../scripts/generate-clients/single-service --solo lambda',
            },
            main: './dist-cjs/index.js',
            types: './dist-types/index.d.ts',
            module: './dist-es/index.js',
            sideEffects: !1,
            dependencies: {
                '@aws-crypto/sha256-browser': '5.2.0',
                '@aws-crypto/sha256-js': '5.2.0',
                '@aws-sdk/client-sso-oidc': '3.678.0',
                '@aws-sdk/client-sts': '3.678.0',
                '@aws-sdk/core': '3.678.0',
                '@aws-sdk/credential-provider-node': '3.678.0',
                '@aws-sdk/middleware-host-header': '3.667.0',
                '@aws-sdk/middleware-logger': '3.667.0',
                '@aws-sdk/middleware-recursion-detection': '3.667.0',
                '@aws-sdk/middleware-user-agent': '3.678.0',
                '@aws-sdk/region-config-resolver': '3.667.0',
                '@aws-sdk/types': '3.667.0',
                '@aws-sdk/util-endpoints': '3.667.0',
                '@aws-sdk/util-user-agent-browser': '3.675.0',
                '@aws-sdk/util-user-agent-node': '3.678.0',
                '@smithy/config-resolver': '^3.0.9',
                '@smithy/core': '^2.4.8',
                '@smithy/eventstream-serde-browser': '^3.0.10',
                '@smithy/eventstream-serde-config-resolver': '^3.0.7',
                '@smithy/eventstream-serde-node': '^3.0.9',
                '@smithy/fetch-http-handler': '^3.2.9',
                '@smithy/hash-node': '^3.0.7',
                '@smithy/invalid-dependency': '^3.0.7',
                '@smithy/middleware-content-length': '^3.0.9',
                '@smithy/middleware-endpoint': '^3.1.4',
                '@smithy/middleware-retry': '^3.0.23',
                '@smithy/middleware-serde': '^3.0.7',
                '@smithy/middleware-stack': '^3.0.7',
                '@smithy/node-config-provider': '^3.1.8',
                '@smithy/node-http-handler': '^3.2.4',
                '@smithy/protocol-http': '^4.1.4',
                '@smithy/smithy-client': '^3.4.0',
                '@smithy/types': '^3.5.0',
                '@smithy/url-parser': '^3.0.7',
                '@smithy/util-base64': '^3.0.0',
                '@smithy/util-body-length-browser': '^3.0.0',
                '@smithy/util-body-length-node': '^3.0.0',
                '@smithy/util-defaults-mode-browser': '^3.0.23',
                '@smithy/util-defaults-mode-node': '^3.0.23',
                '@smithy/util-endpoints': '^2.1.3',
                '@smithy/util-middleware': '^3.0.7',
                '@smithy/util-retry': '^3.0.7',
                '@smithy/util-stream': '^3.1.9',
                '@smithy/util-utf8': '^3.0.0',
                '@smithy/util-waiter': '^3.1.6',
                tslib: '^2.6.2',
            },
            devDependencies: {
                '@tsconfig/node16': '16.1.3',
                '@types/node': '^16.18.96',
                concurrently: '7.0.0',
                'downlevel-dts': '0.10.1',
                rimraf: '3.0.2',
                typescript: '~4.9.5',
            },
            engines: { node: '>=16.0.0' },
            typesVersions: {
                '<4.0': { 'dist-types/*': ['dist-types/ts3.4/*'] },
            },
            files: ['dist-*/**'],
            author: {
                name: 'AWS SDK for JavaScript Team',
                url: 'https://aws.amazon.com/javascript/',
            },
            license: 'Apache-2.0',
            browser: {
                './dist-es/runtimeConfig': './dist-es/runtimeConfig.browser',
            },
            'react-native': {
                './dist-es/runtimeConfig': './dist-es/runtimeConfig.native',
            },
            homepage:
                'https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-lambda',
            repository: {
                type: 'git',
                url: 'https://github.com/aws/aws-sdk-js-v3.git',
                directory: 'clients/client-lambda',
            },
        }
    })
var zc,
    Vc,
    Zw,
    eA,
    tA,
    oA,
    Yl,
    rA = i(() => {
        _e()
        Q()
        ;(zc = 'AWS_ACCESS_KEY_ID'),
            (Vc = 'AWS_SECRET_ACCESS_KEY'),
            (Zw = 'AWS_SESSION_TOKEN'),
            (eA = 'AWS_CREDENTIAL_EXPIRATION'),
            (tA = 'AWS_CREDENTIAL_SCOPE'),
            (oA = 'AWS_ACCOUNT_ID'),
            (Yl = (e) => async () => {
                e?.logger?.debug('@aws-sdk/credential-provider-env - fromEnv')
                let t = process.env[zc],
                    o = process.env[Vc],
                    r = process.env[Zw],
                    n = process.env[eA],
                    s = process.env[tA],
                    a = process.env[oA]
                if (t && o) {
                    let d = {
                        accessKeyId: t,
                        secretAccessKey: o,
                        ...(r && { sessionToken: r }),
                        ...(n && { expiration: new Date(n) }),
                        ...(s && { credentialScope: s }),
                        ...(a && { accountId: a }),
                    }
                    return J(d, 'CREDENTIALS_ENV_VARS', 'g'), d
                }
                throw new $(
                    'Unable to find environment variable credentials.',
                    { logger: e?.logger }
                )
            })
    })
var nA = {}
Ue(nA, {
    ENV_ACCOUNT_ID: () => oA,
    ENV_CREDENTIAL_SCOPE: () => tA,
    ENV_EXPIRATION: () => eA,
    ENV_KEY: () => zc,
    ENV_SECRET: () => Vc,
    ENV_SESSION: () => Zw,
    fromEnv: () => Yl,
})
var Jl = i(() => {
    rA()
})
import { Buffer as fL } from 'buffer'
import { request as gL } from 'http'
function Ho(e) {
    return new Promise((t, o) => {
        let r = gL({
            method: 'GET',
            ...e,
            hostname: e.hostname?.replace(/^\[(.+)\]$/, '$1'),
        })
        r.on('error', (n) => {
            o(
                Object.assign(
                    new He('Unable to connect to instance metadata service'),
                    n
                )
            ),
                r.destroy()
        }),
            r.on('timeout', () => {
                o(new He('TimeoutError from instance metadata service')),
                    r.destroy()
            }),
            r.on('response', (n) => {
                let { statusCode: s = 400 } = n
                ;(s < 200 || 300 <= s) &&
                    (o(
                        Object.assign(
                            new He(
                                'Error response received from instance metadata service'
                            ),
                            { statusCode: s }
                        )
                    ),
                    r.destroy())
                let a = []
                n.on('data', (d) => {
                    a.push(d)
                }),
                    n.on('end', () => {
                        t(fL.concat(a)), r.destroy()
                    })
            }),
            r.end()
    })
}
var Wc = i(() => {
    Q()
})
var Hc,
    jc,
    Xl = i(() => {
        ;(Hc = (e) =>
            !!e &&
            typeof e == 'object' &&
            typeof e.AccessKeyId == 'string' &&
            typeof e.SecretAccessKey == 'string' &&
            typeof e.Token == 'string' &&
            typeof e.Expiration == 'string'),
            (jc = (e) => ({
                accessKeyId: e.AccessKeyId,
                secretAccessKey: e.SecretAccessKey,
                sessionToken: e.Token,
                expiration: new Date(e.Expiration),
                ...(e.AccountId && { accountId: e.AccountId }),
            }))
    })
var gJ,
    hJ,
    ms,
    qc = i(() => {
        ;(gJ = 1e3),
            (hJ = 0),
            (ms = ({ maxRetries: e = 0, timeout: t = 1e3 }) => ({
                maxRetries: e,
                timeout: t,
            }))
    })
var ls,
    Ql = i(() => {
        ls = (e, t) => {
            let o = e()
            for (let r = 0; r < t; r++) o = o.catch(e)
            return o
        }
    })
import { parse as hL } from 'url'
var Kc,
    Yc,
    Zl,
    yL,
    xL,
    EL,
    CL,
    SL,
    bL,
    sA = i(() => {
        Q()
        Wc()
        Xl()
        qc()
        Ql()
        ;(Kc = 'AWS_CONTAINER_CREDENTIALS_FULL_URI'),
            (Yc = 'AWS_CONTAINER_CREDENTIALS_RELATIVE_URI'),
            (Zl = 'AWS_CONTAINER_AUTHORIZATION_TOKEN'),
            (yL = (e = {}) => {
                let { timeout: t, maxRetries: o } = ms(e)
                return () =>
                    ls(async () => {
                        let r = await bL({ logger: e.logger }),
                            n = JSON.parse(await xL(t, r))
                        if (!Hc(n))
                            throw new $(
                                'Invalid response received from instance metadata service.',
                                { logger: e.logger }
                            )
                        return jc(n)
                    }, o)
            }),
            (xL = async (e, t) => (
                process.env[Zl] &&
                    (t.headers = {
                        ...t.headers,
                        Authorization: process.env[Zl],
                    }),
                (await Ho({ ...t, timeout: e })).toString()
            )),
            (EL = '169.254.170.2'),
            (CL = { localhost: !0, '127.0.0.1': !0 }),
            (SL = { 'http:': !0, 'https:': !0 }),
            (bL = async ({ logger: e }) => {
                if (process.env[Yc])
                    return { hostname: EL, path: process.env[Yc] }
                if (process.env[Kc]) {
                    let t = hL(process.env[Kc])
                    if (!t.hostname || !(t.hostname in CL))
                        throw new $(
                            `${t.hostname} is not a valid container metadata service hostname`,
                            { tryNextLink: !1, logger: e }
                        )
                    if (!t.protocol || !(t.protocol in SL))
                        throw new $(
                            `${t.protocol} is not a valid container metadata service protocol`,
                            { tryNextLink: !1, logger: e }
                        )
                    return {
                        ...t,
                        port: t.port ? parseInt(t.port, 10) : void 0,
                    }
                }
                throw new $(
                    `The container metadata credential provider cannot be used unless the ${Yc} or ${Kc} environment variable is set`,
                    { tryNextLink: !1, logger: e }
                )
            })
    })
var Jc,
    iA = i(() => {
        Q()
        Jc = class e extends $ {
            constructor(t, o = !0) {
                super(t, o),
                    (this.tryNextLink = o),
                    (this.name = 'InstanceMetadataV1FallbackError'),
                    Object.setPrototypeOf(this, e.prototype)
            }
        }
    })
var Pr,
    ep = i(() => {
        ;(function (e) {
            ;(e.IPv4 = 'http://169.254.169.254'),
                (e.IPv6 = 'http://[fd00:ec2::254]')
        })(Pr || (Pr = {}))
    })
var wL,
    AL,
    aA,
    cA = i(() => {
        ;(wL = 'AWS_EC2_METADATA_SERVICE_ENDPOINT'),
            (AL = 'ec2_metadata_service_endpoint'),
            (aA = {
                environmentVariableSelector: (e) => e[wL],
                configFileSelector: (e) => e[AL],
                default: void 0,
            })
    })
var jo,
    tp = i(() => {
        ;(function (e) {
            ;(e.IPv4 = 'IPv4'), (e.IPv6 = 'IPv6')
        })(jo || (jo = {}))
    })
var vL,
    _L,
    dA,
    mA = i(() => {
        tp()
        ;(vL = 'AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE'),
            (_L = 'ec2_metadata_service_endpoint_mode'),
            (dA = {
                environmentVariableSelector: (e) => e[vL],
                configFileSelector: (e) => e[_L],
                default: jo.IPv4,
            })
    })
var Xc,
    RL,
    TL,
    op = i(() => {
        Xt()
        Rr()
        ep()
        cA()
        tp()
        mA()
        ;(Xc = async () => Le((await RL()) || (await TL()))),
            (RL = async () => q(aA)()),
            (TL = async () => {
                let e = await q(dA)()
                switch (e) {
                    case jo.IPv4:
                        return Pr.IPv4
                    case jo.IPv6:
                        return Pr.IPv6
                    default:
                        throw new Error(
                            `Unsupported endpoint mode: ${e}. Select from ${Object.values(jo)}`
                        )
                }
            })
    })
var IL,
    rp,
    lA = i(() => {
        ;(IL =
            'https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html'),
            (rp = (e, t) => {
                let o = 300 + Math.floor(Math.random() * 300),
                    r = new Date(Date.now() + o * 1e3)
                t.warn(
                    `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(r)}.
For more information, please visit: ` + IL
                )
                let n = e.originalExpiration ?? e.expiration
                return {
                    ...e,
                    ...(n ? { originalExpiration: n } : {}),
                    expiration: r,
                }
            })
    })
var pA,
    uA = i(() => {
        lA()
        pA = (e, t = {}) => {
            let o = t?.logger || console,
                r
            return async () => {
                let n
                try {
                    ;(n = await e()),
                        n.expiration &&
                            n.expiration.getTime() < Date.now() &&
                            (n = rp(n, o))
                } catch (s) {
                    if (r)
                        o.warn('Credential renew failed: ', s), (n = rp(r, o))
                    else throw s
                }
                return (r = n), n
            }
        }
    })
var hA,
    PL,
    np,
    fA,
    gA,
    NL,
    FL,
    OL,
    DL,
    kL,
    yA = i(() => {
        Xt()
        Q()
        iA()
        Wc()
        Xl()
        qc()
        Ql()
        op()
        uA()
        ;(hA = '/latest/meta-data/iam/security-credentials/'),
            (PL = '/latest/api/token'),
            (np = 'AWS_EC2_METADATA_V1_DISABLED'),
            (fA = 'ec2_metadata_v1_disabled'),
            (gA = 'x-aws-ec2-metadata-token'),
            (NL = (e = {}) => pA(FL(e), { logger: e.logger })),
            (FL = (e = {}) => {
                let t = !1,
                    { logger: o, profile: r } = e,
                    { timeout: n, maxRetries: s } = ms(e),
                    a = async (d, m) => {
                        if (t || m.headers?.[gA] == null) {
                            let u = !1,
                                C = !1,
                                w = await q(
                                    {
                                        environmentVariableSelector: (v) => {
                                            let U = v[np]
                                            if (
                                                ((C = !!U && U !== 'false'),
                                                U === void 0)
                                            )
                                                throw new $(
                                                    `${np} not set in env, checking config file next.`,
                                                    { logger: e.logger }
                                                )
                                            return C
                                        },
                                        configFileSelector: (v) => {
                                            let U = v[fA]
                                            return (u = !!U && U !== 'false'), u
                                        },
                                        default: !1,
                                    },
                                    { profile: r }
                                )()
                            if (e.ec2MetadataV1Disabled || w) {
                                let v = []
                                throw (
                                    (e.ec2MetadataV1Disabled &&
                                        v.push(
                                            'credential provider initialization (runtime option ec2MetadataV1Disabled)'
                                        ),
                                    u && v.push(`config file profile (${fA})`),
                                    C &&
                                        v.push(
                                            `process environment variable (${np})`
                                        ),
                                    new Jc(
                                        `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${v.join(', ')}].`
                                    ))
                                )
                            }
                        }
                        let g = (
                            await ls(async () => {
                                let u
                                try {
                                    u = await DL(m)
                                } catch (C) {
                                    throw (C.statusCode === 401 && (t = !1), C)
                                }
                                return u
                            }, d)
                        ).trim()
                        return ls(async () => {
                            let u
                            try {
                                u = await kL(g, m, e)
                            } catch (C) {
                                throw (C.statusCode === 401 && (t = !1), C)
                            }
                            return u
                        }, d)
                    }
                return async () => {
                    let d = await Xc()
                    if (t)
                        return (
                            o?.debug(
                                'AWS SDK Instance Metadata',
                                'using v1 fallback (no token fetch)'
                            ),
                            a(s, { ...d, timeout: n })
                        )
                    {
                        let m
                        try {
                            m = (await OL({ ...d, timeout: n })).toString()
                        } catch (l) {
                            if (l?.statusCode === 400)
                                throw Object.assign(l, {
                                    message:
                                        'EC2 Metadata token request returned error',
                                })
                            return (
                                (l.message === 'TimeoutError' ||
                                    [403, 404, 405].includes(l.statusCode)) &&
                                    (t = !0),
                                o?.debug(
                                    'AWS SDK Instance Metadata',
                                    'using v1 fallback (initial)'
                                ),
                                a(s, { ...d, timeout: n })
                            )
                        }
                        return a(s, { ...d, headers: { [gA]: m }, timeout: n })
                    }
                }
            }),
            (OL = async (e) =>
                Ho({
                    ...e,
                    path: PL,
                    method: 'PUT',
                    headers: {
                        'x-aws-ec2-metadata-token-ttl-seconds': '21600',
                    },
                })),
            (DL = async (e) => (await Ho({ ...e, path: hA })).toString()),
            (kL = async (e, t, o) => {
                let r = JSON.parse(
                    (await Ho({ ...t, path: hA + e })).toString()
                )
                if (!Hc(r))
                    throw new $(
                        'Invalid response received from instance metadata service.',
                        { logger: o.logger }
                    )
                return jc(r)
            })
    })
var xA = i(() => {})
var ps = {}
Ue(ps, {
    DEFAULT_MAX_RETRIES: () => hJ,
    DEFAULT_TIMEOUT: () => gJ,
    ENV_CMDS_AUTH_TOKEN: () => Zl,
    ENV_CMDS_FULL_URI: () => Kc,
    ENV_CMDS_RELATIVE_URI: () => Yc,
    Endpoint: () => Pr,
    fromContainerMetadata: () => yL,
    fromInstanceMetadata: () => NL,
    getInstanceMetadataEndpoint: () => Xc,
    httpRequest: () => Ho,
    providerConfigFromInit: () => ms,
})
var us = i(() => {
    sA()
    yA()
    qc()
    xA()
    Wc()
    op()
    ep()
})
var LL,
    ML,
    $L,
    EA,
    CA = i(() => {
        Q()
        ;(LL = '169.254.170.2'),
            (ML = '169.254.170.23'),
            ($L = '[fd00:ec2::23]'),
            (EA = (e, t) => {
                if (
                    e.protocol !== 'https:' &&
                    !(
                        e.hostname === LL ||
                        e.hostname === ML ||
                        e.hostname === $L
                    )
                ) {
                    if (e.hostname.includes('[')) {
                        if (
                            e.hostname === '[::1]' ||
                            e.hostname ===
                                '[0000:0000:0000:0000:0000:0000:0000:0001]'
                        )
                            return
                    } else {
                        if (e.hostname === 'localhost') return
                        let o = e.hostname.split('.'),
                            r = (n) => {
                                let s = parseInt(n, 10)
                                return 0 <= s && s <= 255
                            }
                        if (
                            o[0] === '127' &&
                            r(o[1]) &&
                            r(o[2]) &&
                            r(o[3]) &&
                            o.length === 4
                        )
                            return
                    }
                    throw new $(
                        `URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`,
                        { logger: t }
                    )
                }
            })
    })
function SA(e) {
    return new X({
        protocol: e.protocol,
        hostname: e.hostname,
        port: Number(e.port),
        path: e.pathname,
        query: Array.from(e.searchParams.entries()).reduce(
            (t, [o, r]) => ((t[o] = r), t),
            {}
        ),
        fragment: e.hash,
    })
}
async function bA(e, t) {
    let r = await Ky(e.body).transformToString()
    if (e.statusCode === 200) {
        let n = JSON.parse(r)
        if (
            typeof n.AccessKeyId != 'string' ||
            typeof n.SecretAccessKey != 'string' ||
            typeof n.Token != 'string' ||
            typeof n.Expiration != 'string'
        )
            throw new $(
                'HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }',
                { logger: t }
            )
        return {
            accessKeyId: n.AccessKeyId,
            secretAccessKey: n.SecretAccessKey,
            sessionToken: n.Token,
            expiration: MC(n.Expiration),
        }
    }
    if (e.statusCode >= 400 && e.statusCode < 500) {
        let n = {}
        try {
            n = JSON.parse(r)
        } catch {}
        throw Object.assign(
            new $(`Server responded with status: ${e.statusCode}`, {
                logger: t,
            }),
            { Code: n.Code, Message: n.Message }
        )
    }
    throw new $(`Server responded with status: ${e.statusCode}`, { logger: t })
}
var wA = i(() => {
    Q()
    se()
    b()
    Em()
})
var AA,
    vA = i(() => {
        AA = (e, t, o) => async () => {
            for (let r = 0; r < t; ++r)
                try {
                    return await e()
                } catch {
                    await new Promise((s) => setTimeout(s, o))
                }
            return await e()
        }
    })
import UL from 'fs/promises'
var BL,
    GL,
    zL,
    VL,
    WL,
    _A,
    RA = i(() => {
        _e()
        xr()
        Q()
        CA()
        wA()
        vA()
        ;(BL = 'AWS_CONTAINER_CREDENTIALS_RELATIVE_URI'),
            (GL = 'http://169.254.170.2'),
            (zL = 'AWS_CONTAINER_CREDENTIALS_FULL_URI'),
            (VL = 'AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE'),
            (WL = 'AWS_CONTAINER_AUTHORIZATION_TOKEN'),
            (_A = (e = {}) => {
                e.logger?.debug('@aws-sdk/credential-provider-http - fromHttp')
                let t,
                    o = e.awsContainerCredentialsRelativeUri ?? process.env[BL],
                    r = e.awsContainerCredentialsFullUri ?? process.env[zL],
                    n = e.awsContainerAuthorizationToken ?? process.env[WL],
                    s = e.awsContainerAuthorizationTokenFile ?? process.env[VL],
                    a =
                        e.logger?.constructor?.name === 'NoOpLogger' ||
                        !e.logger
                            ? console.warn
                            : e.logger.warn
                if (
                    (o &&
                        r &&
                        (a(
                            '@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.'
                        ),
                        a(
                            'awsContainerCredentialsFullUri will take precedence.'
                        )),
                    n &&
                        s &&
                        (a(
                            '@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.'
                        ),
                        a(
                            'awsContainerAuthorizationToken will take precedence.'
                        )),
                    r)
                )
                    t = r
                else if (o) t = `${GL}${o}`
                else
                    throw new $(
                        `No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`,
                        { logger: e.logger }
                    )
                let d = new URL(t)
                EA(d, e.logger)
                let m = new Xe({
                    requestTimeout: e.timeout ?? 1e3,
                    connectionTimeout: e.timeout ?? 1e3,
                })
                return AA(
                    async () => {
                        let l = SA(d)
                        n
                            ? (l.headers.Authorization = n)
                            : s &&
                              (l.headers.Authorization = (
                                  await UL.readFile(s)
                              ).toString())
                        try {
                            let g = await m.handle(l)
                            return bA(g.response).then((u) =>
                                J(u, 'CREDENTIALS_HTTP', 'z')
                            )
                        } catch (g) {
                            throw new $(String(g), { logger: e.logger })
                        }
                    },
                    e.maxRetries ?? 3,
                    e.timeout ?? 1e3
                )
            })
    })
var sp = {}
Ue(sp, { fromHttp: () => _A })
var ip = i(() => {
    RA()
})
var HL,
    TA,
    IA = i(() => {
        Q()
        ;(HL = 'AWS_EC2_METADATA_DISABLED'),
            (TA = async (e) => {
                let {
                    ENV_CMDS_FULL_URI: t,
                    ENV_CMDS_RELATIVE_URI: o,
                    fromContainerMetadata: r,
                    fromInstanceMetadata: n,
                } = await Promise.resolve().then(() => (us(), ps))
                if (process.env[o] || process.env[t]) {
                    e.logger?.debug(
                        '@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata'
                    )
                    let { fromHttp: s } = await Promise.resolve().then(
                        () => (ip(), sp)
                    )
                    return Yt(s(e), r(e))
                }
                return process.env[HL]
                    ? async () => {
                          throw new $(
                              'EC2 Instance Metadata Service access disabled',
                              { logger: e.logger }
                          )
                      }
                    : (e.logger?.debug(
                          '@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata'
                      ),
                      n(e))
            })
    })
var ap,
    cp = i(() => {
        ap = (e) =>
            e &&
            (typeof e.sso_start_url == 'string' ||
                typeof e.sso_account_id == 'string' ||
                typeof e.sso_session == 'string' ||
                typeof e.sso_region == 'string' ||
                typeof e.sso_role_name == 'string')
    })
var gn,
    Qc = i(() => {
        gn =
            "To refresh this SSO session run 'aws sso login' with the corresponding profile."
    })
function jL(e) {
    return {
        schemeId: 'aws.auth#sigv4',
        signingProperties: { name: 'sso-oauth', region: e.region },
        propertiesExtractor: (t, o) => ({
            signingProperties: { config: t, context: o },
        }),
    }
}
function dp(e) {
    return { schemeId: 'smithy.api#noAuth' }
}
var PA,
    NA,
    FA,
    mp = i(() => {
        he()
        Ge()
        PA = async (e, t, o) => ({
            operation: Oe(t).operation,
            region:
                (await fe(e.region)()) ||
                (() => {
                    throw new Error(
                        'expected `region` to be configured for `aws.auth#sigv4`'
                    )
                })(),
        })
        ;(NA = (e) => {
            let t = []
            switch (e.operation) {
                case 'CreateToken': {
                    t.push(dp(e))
                    break
                }
                case 'RegisterClient': {
                    t.push(dp(e))
                    break
                }
                case 'StartDeviceAuthorization': {
                    t.push(dp(e))
                    break
                }
                default:
                    t.push(jL(e))
            }
            return t
        }),
            (FA = (e) => ({ ...So(e) }))
    })
var OA,
    qo,
    hn = i(() => {
        ;(OA = (e) => ({
            ...e,
            useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
            useFipsEndpoint: e.useFipsEndpoint ?? !1,
            defaultSigningName: 'sso-oauth',
        })),
            (qo = {
                UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
                Endpoint: { type: 'builtInParams', name: 'endpoint' },
                Region: { type: 'builtInParams', name: 'region' },
                UseDualStack: {
                    type: 'builtInParams',
                    name: 'useDualstackEndpoint',
                },
            })
    })
var kA,
    DA = i(() => {
        kA = {
            name: '@aws-sdk/client-sso-oidc',
            description:
                'AWS SDK for JavaScript Sso Oidc Client for Node.js, Browser and React Native',
            version: '3.678.0',
            scripts: {
                build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
                'build:cjs':
                    'node ../../scripts/compilation/inline client-sso-oidc',
                'build:es': 'tsc -p tsconfig.es.json',
                'build:include:deps':
                    'lerna run --scope $npm_package_name --include-dependencies build',
                'build:types': 'tsc -p tsconfig.types.json',
                'build:types:downlevel':
                    'downlevel-dts dist-types dist-types/ts3.4',
                clean: 'rimraf ./dist-* && rimraf *.tsbuildinfo',
                'extract:docs': 'api-extractor run --local',
                'generate:client':
                    'node ../../scripts/generate-clients/single-service --solo sso-oidc',
            },
            main: './dist-cjs/index.js',
            types: './dist-types/index.d.ts',
            module: './dist-es/index.js',
            sideEffects: !1,
            dependencies: {
                '@aws-crypto/sha256-browser': '5.2.0',
                '@aws-crypto/sha256-js': '5.2.0',
                '@aws-sdk/core': '3.678.0',
                '@aws-sdk/credential-provider-node': '3.678.0',
                '@aws-sdk/middleware-host-header': '3.667.0',
                '@aws-sdk/middleware-logger': '3.667.0',
                '@aws-sdk/middleware-recursion-detection': '3.667.0',
                '@aws-sdk/middleware-user-agent': '3.678.0',
                '@aws-sdk/region-config-resolver': '3.667.0',
                '@aws-sdk/types': '3.667.0',
                '@aws-sdk/util-endpoints': '3.667.0',
                '@aws-sdk/util-user-agent-browser': '3.675.0',
                '@aws-sdk/util-user-agent-node': '3.678.0',
                '@smithy/config-resolver': '^3.0.9',
                '@smithy/core': '^2.4.8',
                '@smithy/fetch-http-handler': '^3.2.9',
                '@smithy/hash-node': '^3.0.7',
                '@smithy/invalid-dependency': '^3.0.7',
                '@smithy/middleware-content-length': '^3.0.9',
                '@smithy/middleware-endpoint': '^3.1.4',
                '@smithy/middleware-retry': '^3.0.23',
                '@smithy/middleware-serde': '^3.0.7',
                '@smithy/middleware-stack': '^3.0.7',
                '@smithy/node-config-provider': '^3.1.8',
                '@smithy/node-http-handler': '^3.2.4',
                '@smithy/protocol-http': '^4.1.4',
                '@smithy/smithy-client': '^3.4.0',
                '@smithy/types': '^3.5.0',
                '@smithy/url-parser': '^3.0.7',
                '@smithy/util-base64': '^3.0.0',
                '@smithy/util-body-length-browser': '^3.0.0',
                '@smithy/util-body-length-node': '^3.0.0',
                '@smithy/util-defaults-mode-browser': '^3.0.23',
                '@smithy/util-defaults-mode-node': '^3.0.23',
                '@smithy/util-endpoints': '^2.1.3',
                '@smithy/util-middleware': '^3.0.7',
                '@smithy/util-retry': '^3.0.7',
                '@smithy/util-utf8': '^3.0.0',
                tslib: '^2.6.2',
            },
            devDependencies: {
                '@tsconfig/node16': '16.1.3',
                '@types/node': '^16.18.96',
                concurrently: '7.0.0',
                'downlevel-dts': '0.10.1',
                rimraf: '3.0.2',
                typescript: '~4.9.5',
            },
            engines: { node: '>=16.0.0' },
            typesVersions: {
                '<4.0': { 'dist-types/*': ['dist-types/ts3.4/*'] },
            },
            files: ['dist-*/**'],
            author: {
                name: 'AWS SDK for JavaScript Team',
                url: 'https://aws.amazon.com/javascript/',
            },
            license: 'Apache-2.0',
            peerDependencies: { '@aws-sdk/client-sts': '^3.678.0' },
            browser: {
                './dist-es/runtimeConfig': './dist-es/runtimeConfig.browser',
            },
            'react-native': {
                './dist-es/runtimeConfig': './dist-es/runtimeConfig.native',
            },
            homepage:
                'https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso-oidc',
            repository: {
                type: 'git',
                url: 'https://github.com/aws/aws-sdk-js-v3.git',
                directory: 'clients/client-sso-oidc',
            },
        }
    })
var lp,
    pp = i(() => {
        lp = { isCrtAvailable: !1 }
    })
var LA,
    MA = i(() => {
        pp()
        LA = () => (lp.isCrtAvailable ? ['md/crt-avail'] : null)
    })
import { platform as KL, release as YL } from 'os'
import { env as $A, versions as JL } from 'process'
var Ko,
    UA = i(() => {
        MA()
        pp()
        Ko =
            ({ serviceId: e, clientVersion: t }) =>
            async (o) => {
                let r = [
                        ['aws-sdk-js', t],
                        ['ua', '2.1'],
                        [`os/${KL()}`, YL()],
                        ['lang/js'],
                        ['md/nodejs', `${JL.node}`],
                    ],
                    n = LA()
                n && r.push(n),
                    e && r.push([`api/${e}`, t]),
                    $A.AWS_EXECUTION_ENV &&
                        r.push([`exec-env/${$A.AWS_EXECUTION_ENV}`])
                let s = await o?.userAgentAppId?.()
                return s ? [...r, [`app/${s}`]] : [...r]
            }
    })
var XL,
    QL,
    Yo,
    BA = i(() => {
        cn()
        ;(XL = 'AWS_SDK_UA_APP_ID'),
            (QL = 'sdk-ua-app-id'),
            (Yo = {
                environmentVariableSelector: (e) => e[XL],
                configFileSelector: (e) => e[QL],
                default: Am,
            })
    })
var fs = i(() => {
    UA()
    BA()
})
import { Buffer as ZL } from 'buffer'
import { createHash as eM, createHmac as tM } from 'crypto'
function GA(e, t) {
    return ZL.isBuffer(e)
        ? e
        : typeof e == 'string'
          ? Zr(e, t)
          : ArrayBuffer.isView(e)
            ? Vt(e.buffer, e.byteOffset, e.byteLength)
            : Vt(e)
}
var Dt,
    gs = i(() => {
        yr()
        ze()
        Dt = class {
            constructor(t, o) {
                ;(this.algorithmIdentifier = t), (this.secret = o), this.reset()
            }
            update(t, o) {
                this.hash.update(wt(GA(t, o)))
            }
            digest() {
                return Promise.resolve(this.hash.digest())
            }
            reset() {
                this.hash = this.secret
                    ? tM(this.algorithmIdentifier, GA(this.secret))
                    : eM(this.algorithmIdentifier)
            }
        }
    })
import { fstatSync as oM, lstatSync as rM } from 'fs'
var Jo,
    zA = i(() => {
        Jo = (e) => {
            if (!e) return 0
            if (typeof e == 'string') return Buffer.byteLength(e)
            if (typeof e.byteLength == 'number') return e.byteLength
            if (typeof e.size == 'number') return e.size
            if (typeof e.start == 'number' && typeof e.end == 'number')
                return e.end + 1 - e.start
            if (typeof e.path == 'string' || Buffer.isBuffer(e.path))
                return rM(e.path).size
            if (typeof e.fd == 'number') return oM(e.fd).size
            throw new Error(`Body Length computation failed for ${e}`)
        }
    })
var hs = i(() => {
    zA()
})
var QA,
    st,
    it,
    En,
    VA,
    ys,
    yn,
    xn,
    Zt,
    up,
    fp,
    WA,
    HA,
    jA,
    ZA,
    ev,
    nt,
    qA,
    tv,
    KA,
    YA,
    JA,
    XA,
    nM,
    ov,
    rv = i(() => {
        ;(QA = 'required'),
            (st = 'fn'),
            (it = 'argv'),
            (En = 'ref'),
            (VA = 'isSet'),
            (ys = 'booleanEquals'),
            (yn = 'error'),
            (xn = 'endpoint'),
            (Zt = 'tree'),
            (up = 'PartitionResult'),
            (fp = 'getAttr'),
            (WA = { [QA]: !1, type: 'String' }),
            (HA = { [QA]: !0, default: !1, type: 'Boolean' }),
            (jA = { [En]: 'Endpoint' }),
            (ZA = { [st]: ys, [it]: [{ [En]: 'UseFIPS' }, !0] }),
            (ev = { [st]: ys, [it]: [{ [En]: 'UseDualStack' }, !0] }),
            (nt = {}),
            (qA = { [st]: fp, [it]: [{ [En]: up }, 'supportsFIPS'] }),
            (tv = { [En]: up }),
            (KA = {
                [st]: ys,
                [it]: [!0, { [st]: fp, [it]: [tv, 'supportsDualStack'] }],
            }),
            (YA = [ZA]),
            (JA = [ev]),
            (XA = [{ [En]: 'Region' }]),
            (nM = {
                version: '1.0',
                parameters: {
                    Region: WA,
                    UseDualStack: HA,
                    UseFIPS: HA,
                    Endpoint: WA,
                },
                rules: [
                    {
                        conditions: [{ [st]: VA, [it]: [jA] }],
                        rules: [
                            {
                                conditions: YA,
                                error: 'Invalid Configuration: FIPS and custom endpoint are not supported',
                                type: yn,
                            },
                            {
                                conditions: JA,
                                error: 'Invalid Configuration: Dualstack and custom endpoint are not supported',
                                type: yn,
                            },
                            {
                                endpoint: {
                                    url: jA,
                                    properties: nt,
                                    headers: nt,
                                },
                                type: xn,
                            },
                        ],
                        type: Zt,
                    },
                    {
                        conditions: [{ [st]: VA, [it]: XA }],
                        rules: [
                            {
                                conditions: [
                                    {
                                        [st]: 'aws.partition',
                                        [it]: XA,
                                        assign: up,
                                    },
                                ],
                                rules: [
                                    {
                                        conditions: [ZA, ev],
                                        rules: [
                                            {
                                                conditions: [
                                                    {
                                                        [st]: ys,
                                                        [it]: [!0, qA],
                                                    },
                                                    KA,
                                                ],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: 'https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                                            properties: nt,
                                                            headers: nt,
                                                        },
                                                        type: xn,
                                                    },
                                                ],
                                                type: Zt,
                                            },
                                            {
                                                error: 'FIPS and DualStack are enabled, but this partition does not support one or both',
                                                type: yn,
                                            },
                                        ],
                                        type: Zt,
                                    },
                                    {
                                        conditions: YA,
                                        rules: [
                                            {
                                                conditions: [
                                                    {
                                                        [st]: ys,
                                                        [it]: [qA, !0],
                                                    },
                                                ],
                                                rules: [
                                                    {
                                                        conditions: [
                                                            {
                                                                [st]: 'stringEquals',
                                                                [it]: [
                                                                    {
                                                                        [st]: fp,
                                                                        [it]: [
                                                                            tv,
                                                                            'name',
                                                                        ],
                                                                    },
                                                                    'aws-us-gov',
                                                                ],
                                                            },
                                                        ],
                                                        endpoint: {
                                                            url: 'https://oidc.{Region}.amazonaws.com',
                                                            properties: nt,
                                                            headers: nt,
                                                        },
                                                        type: xn,
                                                    },
                                                    {
                                                        endpoint: {
                                                            url: 'https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}',
                                                            properties: nt,
                                                            headers: nt,
                                                        },
                                                        type: xn,
                                                    },
                                                ],
                                                type: Zt,
                                            },
                                            {
                                                error: 'FIPS is enabled but this partition does not support FIPS',
                                                type: yn,
                                            },
                                        ],
                                        type: Zt,
                                    },
                                    {
                                        conditions: JA,
                                        rules: [
                                            {
                                                conditions: [KA],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: 'https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                                            properties: nt,
                                                            headers: nt,
                                                        },
                                                        type: xn,
                                                    },
                                                ],
                                                type: Zt,
                                            },
                                            {
                                                error: 'DualStack is enabled but this partition does not support DualStack',
                                                type: yn,
                                            },
                                        ],
                                        type: Zt,
                                    },
                                    {
                                        endpoint: {
                                            url: 'https://oidc.{Region}.{PartitionResult#dnsSuffix}',
                                            properties: nt,
                                            headers: nt,
                                        },
                                        type: xn,
                                    },
                                ],
                                type: Zt,
                            },
                        ],
                        type: Zt,
                    },
                    {
                        error: 'Invalid Configuration: Missing Region',
                        type: yn,
                    },
                ],
            }),
            (ov = nM)
    })
var sM,
    nv,
    sv = i(() => {
        on()
        Tt()
        rv()
        ;(sM = new Rt({
            size: 50,
            params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'],
        })),
            (nv = (e, t = {}) =>
                sM.get(e, () =>
                    qt(ov, { endpointParams: e, logger: t.logger })
                ))
        Ve.aws = Kt
    })
var iv,
    av = i(() => {
        he()
        ee()
        b()
        Rr()
        Wt()
        ze()
        mp()
        sv()
        iv = (e) => ({
            apiVersion: '2019-06-10',
            base64Decoder: e?.base64Decoder ?? bt,
            base64Encoder: e?.base64Encoder ?? De,
            disableHostPrefix: e?.disableHostPrefix ?? !1,
            endpointProvider: e?.endpointProvider ?? nv,
            extensions: e?.extensions ?? [],
            httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? NA,
            httpAuthSchemes: e?.httpAuthSchemes ?? [
                {
                    schemeId: 'aws.auth#sigv4',
                    identityProvider: (t) =>
                        t.getIdentityProvider('aws.auth#sigv4'),
                    signer: new We(),
                },
                {
                    schemeId: 'smithy.api#noAuth',
                    identityProvider: (t) =>
                        t.getIdentityProvider('smithy.api#noAuth') ||
                        (async () => ({})),
                    signer: new _t(),
                },
            ],
            logger: e?.logger ?? new et(),
            serviceId: e?.serviceId ?? 'SSO OIDC',
            urlParser: e?.urlParser ?? Le,
            utf8Decoder: e?.utf8Decoder ?? Ee,
            utf8Encoder: e?.utf8Encoder ?? Je,
        })
    })
var cv,
    gp,
    hp,
    dv,
    mv,
    lv,
    pv = i(() => {
        ;(cv = 'AWS_EXECUTION_ENV'),
            (gp = 'AWS_REGION'),
            (hp = 'AWS_DEFAULT_REGION'),
            (dv = 'AWS_EC2_METADATA_DISABLED'),
            (mv = [
                'in-region',
                'cross-region',
                'mobile',
                'standard',
                'legacy',
            ]),
            (lv = '/latest/meta-data/placement/region')
    })
var iM,
    aM,
    uv,
    fv = i(() => {
        ;(iM = 'AWS_DEFAULTS_MODE'),
            (aM = 'defaults_mode'),
            (uv = {
                environmentVariableSelector: (e) => e[iM],
                configFileSelector: (e) => e[aM],
                default: 'legacy',
            })
    })
var Xo,
    cM,
    dM,
    gv = i(() => {
        Ft()
        Xt()
        Q()
        pv()
        fv()
        ;(Xo = ({ region: e = q(Nt), defaultsMode: t = q(uv) } = {}) =>
            br(async () => {
                let o = typeof t == 'function' ? await t() : t
                switch (o?.toLowerCase()) {
                    case 'auto':
                        return cM(e)
                    case 'in-region':
                    case 'cross-region':
                    case 'mobile':
                    case 'standard':
                    case 'legacy':
                        return Promise.resolve(o?.toLocaleLowerCase())
                    case void 0:
                        return Promise.resolve('legacy')
                    default:
                        throw new Error(
                            `Invalid parameter for "defaultsMode", expect ${mv.join(', ')}, got ${o}`
                        )
                }
            })),
            (cM = async (e) => {
                if (e) {
                    let t = typeof e == 'function' ? await e() : e,
                        o = await dM()
                    return o
                        ? t === o
                            ? 'in-region'
                            : 'cross-region'
                        : 'standard'
                }
                return 'standard'
            }),
            (dM = async () => {
                if (process.env[cv] && (process.env[gp] || process.env[hp]))
                    return process.env[gp] ?? process.env[hp]
                if (!process.env[dv])
                    try {
                        let { getInstanceMetadataEndpoint: e, httpRequest: t } =
                                await Promise.resolve().then(() => (us(), ps)),
                            o = await e()
                        return (await t({ ...o, path: lv })).toString()
                    } catch {}
            })
    })
var xs = i(() => {
    gv()
})
var hv,
    yv = i(() => {
        DA()
        he()
        Zc()
        fs()
        Ft()
        gs()
        Qt()
        Xt()
        xr()
        hs()
        rt()
        av()
        b()
        xs()
        b()
        hv = (e) => {
            _o(process.version)
            let t = Xo(e),
                o = () => t().then(vo),
                r = iv(e)
            return (
                Co(process.version),
                {
                    ...r,
                    ...e,
                    runtime: 'node',
                    defaultsMode: t,
                    bodyLengthChecker: e?.bodyLengthChecker ?? Jo,
                    credentialDefaultProvider:
                        e?.credentialDefaultProvider ?? Nr,
                    defaultUserAgentProvider:
                        e?.defaultUserAgentProvider ??
                        Ko({
                            serviceId: r.serviceId,
                            clientVersion: kA.version,
                        }),
                    maxAttempts: e?.maxAttempts ?? q(Go),
                    region: e?.region ?? q(Nt, ko),
                    requestHandler: Xe.create(e?.requestHandler ?? o),
                    retryMode:
                        e?.retryMode ??
                        q({
                            ...Vo,
                            default: async () => (await o()).retryMode || Ot,
                        }),
                    sha256: e?.sha256 ?? Dt.bind(null, 'sha256'),
                    streamCollector: e?.streamCollector ?? At,
                    useDualstackEndpoint: e?.useDualstackEndpoint ?? q(Oo),
                    useFipsEndpoint: e?.useFipsEndpoint ?? q(Do),
                    userAgentAppId: e?.userAgentAppId ?? q(Yo),
                }
            )
        }
    })
var Qo,
    Zo,
    xv = i(() => {
        ;(Qo = (e) => {
            let t = async () => {
                if (e.region === void 0)
                    throw new Error('Region is missing from runtimeConfig')
                let o = e.region
                return typeof o == 'string' ? o : o()
            }
            return {
                setRegion(o) {
                    t = o
                },
                region() {
                    return t
                },
            }
        }),
            (Zo = (e) => ({ region: e.region() }))
    })
var Ev = i(() => {})
var yp = i(() => {})
var Cv = i(() => {
    yp()
})
var Sv = i(() => {
    Cv()
    yp()
})
var bv = i(() => {
    Ev()
    Sv()
})
var Es = i(() => {
    xv()
    bv()
})
var wv,
    Av,
    vv = i(() => {
        ;(wv = (e) => {
            let t = e.httpAuthSchemes,
                o = e.httpAuthSchemeProvider,
                r = e.credentials
            return {
                setHttpAuthScheme(n) {
                    let s = t.findIndex((a) => a.schemeId === n.schemeId)
                    s === -1 ? t.push(n) : t.splice(s, 1, n)
                },
                httpAuthSchemes() {
                    return t
                },
                setHttpAuthSchemeProvider(n) {
                    o = n
                },
                httpAuthSchemeProvider() {
                    return o
                },
                setCredentials(n) {
                    r = n
                },
                credentials() {
                    return r
                },
            }
        }),
            (Av = (e) => ({
                httpAuthSchemes: e.httpAuthSchemes(),
                httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
                credentials: e.credentials(),
            }))
    })
var ed,
    _v,
    Rv = i(() => {
        Es()
        se()
        b()
        vv()
        ;(ed = (e) => e),
            (_v = (e, t) => {
                let o = {
                    ...ed(Qo(e)),
                    ...ed(Ro(e)),
                    ...ed(co(e)),
                    ...ed(wv(e)),
                }
                return (
                    t.forEach((r) => r.configure(o)),
                    { ...e, ...Zo(o), ...To(o), ...mo(o), ...Av(o) }
                )
            })
    })
var Cs,
    Ep = i(() => {
        zn()
        Vn()
        Wn()
        cn()
        Ft()
        ee()
        ss()
        _()
        Qt()
        b()
        mp()
        hn()
        yv()
        Rv()
        Cs = class extends je {
            constructor(...[t]) {
                let o = hv(t || {}),
                    r = OA(o),
                    n = xo(r),
                    s = zo(n),
                    a = Lo(s),
                    d = a,
                    m = Bo(d),
                    l = FA(m),
                    g = _v(l, t?.extensions || [])
                super(g),
                    (this.config = g),
                    this.middlewareStack.use(No(this.config)),
                    this.middlewareStack.use(Wo(this.config)),
                    this.middlewareStack.use(Mo(this.config)),
                    this.middlewareStack.use(lo(this.config)),
                    this.middlewareStack.use(po(this.config)),
                    this.middlewareStack.use(uo(this.config)),
                    this.middlewareStack.use(
                        fo(this.config, {
                            httpAuthSchemeParametersProvider: PA,
                            identityProviderConfigProvider: async (u) =>
                                new vt({ 'aws.auth#sigv4': u.credentials }),
                        })
                    ),
                    this.middlewareStack.use(go(this.config))
            }
            destroy() {
                super.destroy()
            }
        }
    })
var ue,
    td = i(() => {
        b()
        ue = class e extends It {
            constructor(t) {
                super(t), Object.setPrototypeOf(this, e.prototype)
            }
        }
    })
var Ss,
    bs,
    ws,
    As,
    vs,
    _s,
    Rs,
    Ts,
    Is,
    Ps,
    Ns,
    Fs,
    Os,
    Ds,
    Cp,
    Sp,
    bp,
    wp,
    Ap,
    vp,
    Fr = i(() => {
        b()
        td()
        ;(Ss = class e extends ue {
            constructor(t) {
                super({
                    name: 'AccessDeniedException',
                    $fault: 'client',
                    ...t,
                }),
                    (this.name = 'AccessDeniedException'),
                    (this.$fault = 'client'),
                    Object.setPrototypeOf(this, e.prototype),
                    (this.error = t.error),
                    (this.error_description = t.error_description)
            }
        }),
            (bs = class e extends ue {
                constructor(t) {
                    super({
                        name: 'AuthorizationPendingException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'AuthorizationPendingException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (ws = class e extends ue {
                constructor(t) {
                    super({
                        name: 'ExpiredTokenException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'ExpiredTokenException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (As = class e extends ue {
                constructor(t) {
                    super({
                        name: 'InternalServerException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'InternalServerException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (vs = class e extends ue {
                constructor(t) {
                    super({
                        name: 'InvalidClientException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'InvalidClientException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (_s = class e extends ue {
                constructor(t) {
                    super({
                        name: 'InvalidGrantException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'InvalidGrantException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (Rs = class e extends ue {
                constructor(t) {
                    super({
                        name: 'InvalidRequestException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'InvalidRequestException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (Ts = class e extends ue {
                constructor(t) {
                    super({
                        name: 'InvalidScopeException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'InvalidScopeException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (Is = class e extends ue {
                constructor(t) {
                    super({
                        name: 'SlowDownException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'SlowDownException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (Ps = class e extends ue {
                constructor(t) {
                    super({
                        name: 'UnauthorizedClientException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'UnauthorizedClientException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (Ns = class e extends ue {
                constructor(t) {
                    super({
                        name: 'UnsupportedGrantTypeException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'UnsupportedGrantTypeException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (Fs = class e extends ue {
                constructor(t) {
                    super({
                        name: 'InvalidRequestRegionException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'InvalidRequestRegionException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description),
                        (this.endpoint = t.endpoint),
                        (this.region = t.region)
                }
            }),
            (Os = class e extends ue {
                constructor(t) {
                    super({
                        name: 'InvalidClientMetadataException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'InvalidClientMetadataException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (Ds = class e extends ue {
                constructor(t) {
                    super({
                        name: 'InvalidRedirectUriException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'InvalidRedirectUriException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.error = t.error),
                        (this.error_description = t.error_description)
                }
            }),
            (Cp = (e) => ({
                ...e,
                ...(e.clientSecret && { clientSecret: H }),
                ...(e.refreshToken && { refreshToken: H }),
                ...(e.codeVerifier && { codeVerifier: H }),
            })),
            (Sp = (e) => ({
                ...e,
                ...(e.accessToken && { accessToken: H }),
                ...(e.refreshToken && { refreshToken: H }),
                ...(e.idToken && { idToken: H }),
            })),
            (bp = (e) => ({
                ...e,
                ...(e.refreshToken && { refreshToken: H }),
                ...(e.assertion && { assertion: H }),
                ...(e.subjectToken && { subjectToken: H }),
                ...(e.codeVerifier && { codeVerifier: H }),
            })),
            (wp = (e) => ({
                ...e,
                ...(e.accessToken && { accessToken: H }),
                ...(e.refreshToken && { refreshToken: H }),
                ...(e.idToken && { idToken: H }),
            })),
            (Ap = (e) => ({
                ...e,
                ...(e.clientSecret && { clientSecret: H }),
            })),
            (vp = (e) => ({ ...e, ...(e.clientSecret && { clientSecret: H }) }))
    })
var Tv,
    Iv,
    Pv,
    Nv,
    Fv,
    Ov,
    Dv,
    kv,
    od,
    lM,
    pM,
    uM,
    fM,
    gM,
    hM,
    yM,
    xM,
    EM,
    CM,
    SM,
    bM,
    wM,
    AM,
    vM,
    ye,
    _M,
    ks = i(() => {
        he()
        ee()
        b()
        Fr()
        td()
        ;(Tv = async (e, t) => {
            let o = I(e, t),
                r = { 'content-type': 'application/json' }
            o.bp('/token')
            let n
            return (
                (n = JSON.stringify(
                    E(e, {
                        clientId: [],
                        clientSecret: [],
                        code: [],
                        codeVerifier: [],
                        deviceCode: [],
                        grantType: [],
                        redirectUri: [],
                        refreshToken: [],
                        scope: (s) => p(s),
                    })
                )),
                o.m('POST').h(r).b(n),
                o.build()
            )
        }),
            (Iv = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/token')
                let n = f({ [_M]: [, 't'] }),
                    s
                return (
                    (s = JSON.stringify(
                        E(e, {
                            assertion: [],
                            clientId: [],
                            code: [],
                            codeVerifier: [],
                            grantType: [],
                            redirectUri: [],
                            refreshToken: [],
                            requestedTokenType: [],
                            scope: (a) => p(a),
                            subjectToken: [],
                            subjectTokenType: [],
                        })
                    )),
                    o.m('POST').h(r).q(n).b(s),
                    o.build()
                )
            }),
            (Pv = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/client/register')
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            clientName: [],
                            clientType: [],
                            entitledApplicationArn: [],
                            grantTypes: (s) => p(s),
                            issuerUrl: [],
                            redirectUris: (s) => p(s),
                            scopes: (s) => p(s),
                        })
                    )),
                    o.m('POST').h(r).b(n),
                    o.build()
                )
            }),
            (Nv = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/device_authorization')
                let n
                return (
                    (n = JSON.stringify(
                        E(e, { clientId: [], clientSecret: [], startUrl: [] })
                    )),
                    o.m('POST').h(r).b(n),
                    o.build()
                )
            }),
            (Fv = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return od(e, t)
                let o = f({ $metadata: ye(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        accessToken: c,
                        expiresIn: k,
                        idToken: c,
                        refreshToken: c,
                        tokenType: c,
                    })
                return Object.assign(o, n), o
            }),
            (Ov = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return od(e, t)
                let o = f({ $metadata: ye(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        accessToken: c,
                        expiresIn: k,
                        idToken: c,
                        issuedTokenType: c,
                        refreshToken: c,
                        scope: p,
                        tokenType: c,
                    })
                return Object.assign(o, n), o
            }),
            (Dv = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return od(e, t)
                let o = f({ $metadata: ye(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        authorizationEndpoint: c,
                        clientId: c,
                        clientIdIssuedAt: qe,
                        clientSecret: c,
                        clientSecretExpiresAt: qe,
                        tokenEndpoint: c,
                    })
                return Object.assign(o, n), o
            }),
            (kv = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return od(e, t)
                let o = f({ $metadata: ye(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        deviceCode: c,
                        expiresIn: k,
                        interval: k,
                        userCode: c,
                        verificationUri: c,
                        verificationUriComplete: c,
                    })
                return Object.assign(o, n), o
            }),
            (od = async (e, t) => {
                let o = { ...e, body: await sn(e.body, t) },
                    r = an(e, o.body)
                switch (r) {
                    case 'AccessDeniedException':
                    case 'com.amazonaws.ssooidc#AccessDeniedException':
                        throw await pM(o, t)
                    case 'AuthorizationPendingException':
                    case 'com.amazonaws.ssooidc#AuthorizationPendingException':
                        throw await uM(o, t)
                    case 'ExpiredTokenException':
                    case 'com.amazonaws.ssooidc#ExpiredTokenException':
                        throw await fM(o, t)
                    case 'InternalServerException':
                    case 'com.amazonaws.ssooidc#InternalServerException':
                        throw await gM(o, t)
                    case 'InvalidClientException':
                    case 'com.amazonaws.ssooidc#InvalidClientException':
                        throw await hM(o, t)
                    case 'InvalidGrantException':
                    case 'com.amazonaws.ssooidc#InvalidGrantException':
                        throw await xM(o, t)
                    case 'InvalidRequestException':
                    case 'com.amazonaws.ssooidc#InvalidRequestException':
                        throw await CM(o, t)
                    case 'InvalidScopeException':
                    case 'com.amazonaws.ssooidc#InvalidScopeException':
                        throw await bM(o, t)
                    case 'SlowDownException':
                    case 'com.amazonaws.ssooidc#SlowDownException':
                        throw await wM(o, t)
                    case 'UnauthorizedClientException':
                    case 'com.amazonaws.ssooidc#UnauthorizedClientException':
                        throw await AM(o, t)
                    case 'UnsupportedGrantTypeException':
                    case 'com.amazonaws.ssooidc#UnsupportedGrantTypeException':
                        throw await vM(o, t)
                    case 'InvalidRequestRegionException':
                    case 'com.amazonaws.ssooidc#InvalidRequestRegionException':
                        throw await SM(o, t)
                    case 'InvalidClientMetadataException':
                    case 'com.amazonaws.ssooidc#InvalidClientMetadataException':
                        throw await yM(o, t)
                    case 'InvalidRedirectUriException':
                    case 'com.amazonaws.ssooidc#InvalidRedirectUriException':
                        throw await EM(o, t)
                    default:
                        let n = o.body
                        return lM({ output: e, parsedBody: n, errorCode: r })
                }
            }),
            (lM = Ao(ue)),
            (pM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new Ss({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (uM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new bs({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (fM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new ws({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (gM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new As({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (hM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new vs({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (yM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new Os({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (xM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new _s({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (EM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new Ds({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (CM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new Rs({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (SM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, {
                        endpoint: c,
                        error: c,
                        error_description: c,
                        region: c,
                    })
                Object.assign(o, n)
                let s = new Fs({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (bM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new Ts({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (wM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new Is({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (AM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new Ps({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (vM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { error: c, error_description: c })
                Object.assign(o, n)
                let s = new Ns({ $metadata: ye(e), ...o })
                return P(s, e.body)
            }),
            (ye = (e) => ({
                httpStatusCode: e.statusCode,
                requestId:
                    e.headers['x-amzn-requestid'] ??
                    e.headers['x-amzn-request-id'] ??
                    e.headers['x-amz-request-id'],
                extendedRequestId: e.headers['x-amz-id-2'],
                cfId: e.headers['x-amz-cf-id'],
            })),
            (_M = 'aws_iam')
    })
var Ls,
    _p = i(() => {
        _()
        R()
        b()
        hn()
        Fr()
        ks()
        Ls = class extends (
            h
                .classBuilder()
                .ep(qo)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSSSOOIDCService', 'CreateToken', {})
                .n('SSOOIDCClient', 'CreateTokenCommand')
                .f(Cp, Sp)
                .ser(Tv)
                .de(Fv)
                .build()
        ) {}
    })
var Ms,
    Rp = i(() => {
        _()
        R()
        b()
        hn()
        Fr()
        ks()
        Ms = class extends (
            h
                .classBuilder()
                .ep(qo)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSSSOOIDCService', 'CreateTokenWithIAM', {})
                .n('SSOOIDCClient', 'CreateTokenWithIAMCommand')
                .f(bp, wp)
                .ser(Iv)
                .de(Ov)
                .build()
        ) {}
    })
var $s,
    Tp = i(() => {
        _()
        R()
        b()
        hn()
        Fr()
        ks()
        $s = class extends (
            h
                .classBuilder()
                .ep(qo)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSSSOOIDCService', 'RegisterClient', {})
                .n('SSOOIDCClient', 'RegisterClientCommand')
                .f(void 0, Ap)
                .ser(Pv)
                .de(Dv)
                .build()
        ) {}
    })
var Us,
    Ip = i(() => {
        _()
        R()
        b()
        hn()
        Fr()
        ks()
        Us = class extends (
            h
                .classBuilder()
                .ep(qo)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSSSOOIDCService', 'StartDeviceAuthorization', {})
                .n('SSOOIDCClient', 'StartDeviceAuthorizationCommand')
                .f(vp, void 0)
                .ser(Nv)
                .de(kv)
                .build()
        ) {}
    })
var RM,
    rd,
    Lv = i(() => {
        b()
        _p()
        Rp()
        Tp()
        Ip()
        Ep()
        ;(RM = {
            CreateTokenCommand: Ls,
            CreateTokenWithIAMCommand: Ms,
            RegisterClientCommand: $s,
            StartDeviceAuthorizationCommand: Us,
        }),
            (rd = class extends Cs {})
        wo(RM, rd)
    })
var Mv = i(() => {
    _p()
    Rp()
    Tp()
    Ip()
})
var $v = i(() => {
    Fr()
})
var Pp = {}
Ue(Pp, {
    $Command: () => h,
    AccessDeniedException: () => Ss,
    AuthorizationPendingException: () => bs,
    CreateTokenCommand: () => Ls,
    CreateTokenRequestFilterSensitiveLog: () => Cp,
    CreateTokenResponseFilterSensitiveLog: () => Sp,
    CreateTokenWithIAMCommand: () => Ms,
    CreateTokenWithIAMRequestFilterSensitiveLog: () => bp,
    CreateTokenWithIAMResponseFilterSensitiveLog: () => wp,
    ExpiredTokenException: () => ws,
    InternalServerException: () => As,
    InvalidClientException: () => vs,
    InvalidClientMetadataException: () => Os,
    InvalidGrantException: () => _s,
    InvalidRedirectUriException: () => Ds,
    InvalidRequestException: () => Rs,
    InvalidRequestRegionException: () => Fs,
    InvalidScopeException: () => Ts,
    RegisterClientCommand: () => $s,
    RegisterClientResponseFilterSensitiveLog: () => Ap,
    SSOOIDC: () => rd,
    SSOOIDCClient: () => Cs,
    SSOOIDCServiceException: () => ue,
    SlowDownException: () => Is,
    StartDeviceAuthorizationCommand: () => Us,
    StartDeviceAuthorizationRequestFilterSensitiveLog: () => vp,
    UnauthorizedClientException: () => Ps,
    UnsupportedGrantTypeException: () => Ns,
    __Client: () => je,
})
var Np = i(() => {
    Ep()
    Lv()
    Mv()
    $v()
    td()
})
var Fp,
    Uv,
    Bv = i(() => {
        ;(Fp = {}),
            (Uv = async (e) => {
                let { SSOOIDCClient: t } = await Promise.resolve().then(
                    () => (Np(), Pp)
                )
                if (Fp[e]) return Fp[e]
                let o = new t({ region: e })
                return (Fp[e] = o), o
            })
    })
var Gv,
    zv = i(() => {
        Bv()
        Gv = async (e, t) => {
            let { CreateTokenCommand: o } = await Promise.resolve().then(
                () => (Np(), Pp)
            )
            return (await Uv(t)).send(
                new o({
                    clientId: e.clientId,
                    clientSecret: e.clientSecret,
                    refreshToken: e.refreshToken,
                    grantType: 'refresh_token',
                })
            )
        }
    })
var Op,
    Vv = i(() => {
        Q()
        Qc()
        Op = (e) => {
            if (e.expiration && e.expiration.getTime() < Date.now())
                throw new ke(`Token is expired. ${gn}`, !1)
        }
    })
var er,
    Wv = i(() => {
        Q()
        Qc()
        er = (e, t, o = !1) => {
            if (typeof t > 'u')
                throw new ke(
                    `Value not present for '${e}' in SSO Token${o ? '. Cannot refresh' : ''}. ${gn}`,
                    !1
                )
        }
    })
import { promises as TM } from 'fs'
var IM,
    Hv,
    jv = i(() => {
        xt()
        ;({ writeFile: IM } = TM),
            (Hv = (e, t) => {
                let o = vc(e),
                    r = JSON.stringify(t, null, 2)
                return IM(o, r)
            })
    })
var qv,
    Kv,
    Yv = i(() => {
        Q()
        xt()
        Qc()
        zv()
        Vv()
        Wv()
        jv()
        ;(qv = new Date(0)),
            (Kv =
                (e = {}) =>
                async () => {
                    e.logger?.debug('@aws-sdk/token-providers - fromSso')
                    let t = await Uo(e),
                        o = tt(e),
                        r = t[o]
                    if (r) {
                        if (!r.sso_session)
                            throw new ke(
                                `Profile '${o}' is missing required property 'sso_session'.`
                            )
                    } else
                        throw new ke(
                            `Profile '${o}' could not be found in shared credentials file.`,
                            !1
                        )
                    let n = r.sso_session,
                        a = (await Ic(e))[n]
                    if (!a)
                        throw new ke(
                            `Sso session '${n}' could not be found in shared credentials file.`,
                            !1
                        )
                    for (let w of ['sso_start_url', 'sso_region'])
                        if (!a[w])
                            throw new ke(
                                `Sso session '${n}' is missing required property '${w}'.`,
                                !1
                            )
                    let d = a.sso_start_url,
                        m = a.sso_region,
                        l
                    try {
                        l = await _c(n)
                    } catch {
                        throw new ke(
                            `The SSO session token associated with profile=${o} was not found or is invalid. ${gn}`,
                            !1
                        )
                    }
                    er('accessToken', l.accessToken),
                        er('expiresAt', l.expiresAt)
                    let { accessToken: g, expiresAt: u } = l,
                        C = { token: g, expiration: new Date(u) }
                    if (C.expiration.getTime() - Date.now() > 3e5) return C
                    if (Date.now() - qv.getTime() < 30 * 1e3) return Op(C), C
                    er('clientId', l.clientId, !0),
                        er('clientSecret', l.clientSecret, !0),
                        er('refreshToken', l.refreshToken, !0)
                    try {
                        qv.setTime(Date.now())
                        let w = await Gv(l, m)
                        er('accessToken', w.accessToken),
                            er('expiresIn', w.expiresIn)
                        let v = new Date(Date.now() + w.expiresIn * 1e3)
                        try {
                            await Hv(n, {
                                ...l,
                                accessToken: w.accessToken,
                                expiresAt: v.toISOString(),
                                refreshToken: w.refreshToken,
                            })
                        } catch {}
                        return { token: w.accessToken, expiration: v }
                    } catch {
                        return Op(C), C
                    }
                })
    })
var Jv = i(() => {
    Q()
})
var Xv = i(() => {
    Q()
})
var Qv = i(() => {
    Yv()
    Jv()
    Xv()
})
function NM(e) {
    return {
        schemeId: 'aws.auth#sigv4',
        signingProperties: { name: 'awsssoportal', region: e.region },
        propertiesExtractor: (t, o) => ({
            signingProperties: { config: t, context: o },
        }),
    }
}
function nd(e) {
    return { schemeId: 'smithy.api#noAuth' }
}
var Zv,
    e_,
    t_,
    Dp = i(() => {
        he()
        Ge()
        Zv = async (e, t, o) => ({
            operation: Oe(t).operation,
            region:
                (await fe(e.region)()) ||
                (() => {
                    throw new Error(
                        'expected `region` to be configured for `aws.auth#sigv4`'
                    )
                })(),
        })
        ;(e_ = (e) => {
            let t = []
            switch (e.operation) {
                case 'GetRoleCredentials': {
                    t.push(nd(e))
                    break
                }
                case 'ListAccountRoles': {
                    t.push(nd(e))
                    break
                }
                case 'ListAccounts': {
                    t.push(nd(e))
                    break
                }
                case 'Logout': {
                    t.push(nd(e))
                    break
                }
                default:
                    t.push(NM(e))
            }
            return t
        }),
            (t_ = (e) => ({ ...So(e) }))
    })
var o_,
    tr,
    Cn = i(() => {
        ;(o_ = (e) => ({
            ...e,
            useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
            useFipsEndpoint: e.useFipsEndpoint ?? !1,
            defaultSigningName: 'awsssoportal',
        })),
            (tr = {
                UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
                Endpoint: { type: 'builtInParams', name: 'endpoint' },
                Region: { type: 'builtInParams', name: 'region' },
                UseDualStack: {
                    type: 'builtInParams',
                    name: 'useDualstackEndpoint',
                },
            })
    })
var n_,
    r_ = i(() => {
        n_ = {
            name: '@aws-sdk/client-sso',
            description:
                'AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native',
            version: '3.678.0',
            scripts: {
                build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
                'build:cjs': 'node ../../scripts/compilation/inline client-sso',
                'build:es': 'tsc -p tsconfig.es.json',
                'build:include:deps':
                    'lerna run --scope $npm_package_name --include-dependencies build',
                'build:types': 'tsc -p tsconfig.types.json',
                'build:types:downlevel':
                    'downlevel-dts dist-types dist-types/ts3.4',
                clean: 'rimraf ./dist-* && rimraf *.tsbuildinfo',
                'extract:docs': 'api-extractor run --local',
                'generate:client':
                    'node ../../scripts/generate-clients/single-service --solo sso',
            },
            main: './dist-cjs/index.js',
            types: './dist-types/index.d.ts',
            module: './dist-es/index.js',
            sideEffects: !1,
            dependencies: {
                '@aws-crypto/sha256-browser': '5.2.0',
                '@aws-crypto/sha256-js': '5.2.0',
                '@aws-sdk/core': '3.678.0',
                '@aws-sdk/middleware-host-header': '3.667.0',
                '@aws-sdk/middleware-logger': '3.667.0',
                '@aws-sdk/middleware-recursion-detection': '3.667.0',
                '@aws-sdk/middleware-user-agent': '3.678.0',
                '@aws-sdk/region-config-resolver': '3.667.0',
                '@aws-sdk/types': '3.667.0',
                '@aws-sdk/util-endpoints': '3.667.0',
                '@aws-sdk/util-user-agent-browser': '3.675.0',
                '@aws-sdk/util-user-agent-node': '3.678.0',
                '@smithy/config-resolver': '^3.0.9',
                '@smithy/core': '^2.4.8',
                '@smithy/fetch-http-handler': '^3.2.9',
                '@smithy/hash-node': '^3.0.7',
                '@smithy/invalid-dependency': '^3.0.7',
                '@smithy/middleware-content-length': '^3.0.9',
                '@smithy/middleware-endpoint': '^3.1.4',
                '@smithy/middleware-retry': '^3.0.23',
                '@smithy/middleware-serde': '^3.0.7',
                '@smithy/middleware-stack': '^3.0.7',
                '@smithy/node-config-provider': '^3.1.8',
                '@smithy/node-http-handler': '^3.2.4',
                '@smithy/protocol-http': '^4.1.4',
                '@smithy/smithy-client': '^3.4.0',
                '@smithy/types': '^3.5.0',
                '@smithy/url-parser': '^3.0.7',
                '@smithy/util-base64': '^3.0.0',
                '@smithy/util-body-length-browser': '^3.0.0',
                '@smithy/util-body-length-node': '^3.0.0',
                '@smithy/util-defaults-mode-browser': '^3.0.23',
                '@smithy/util-defaults-mode-node': '^3.0.23',
                '@smithy/util-endpoints': '^2.1.3',
                '@smithy/util-middleware': '^3.0.7',
                '@smithy/util-retry': '^3.0.7',
                '@smithy/util-utf8': '^3.0.0',
                tslib: '^2.6.2',
            },
            devDependencies: {
                '@tsconfig/node16': '16.1.3',
                '@types/node': '^16.18.96',
                concurrently: '7.0.0',
                'downlevel-dts': '0.10.1',
                rimraf: '3.0.2',
                typescript: '~4.9.5',
            },
            engines: { node: '>=16.0.0' },
            typesVersions: {
                '<4.0': { 'dist-types/*': ['dist-types/ts3.4/*'] },
            },
            files: ['dist-*/**'],
            author: {
                name: 'AWS SDK for JavaScript Team',
                url: 'https://aws.amazon.com/javascript/',
            },
            license: 'Apache-2.0',
            browser: {
                './dist-es/runtimeConfig': './dist-es/runtimeConfig.browser',
            },
            'react-native': {
                './dist-es/runtimeConfig': './dist-es/runtimeConfig.native',
            },
            homepage:
                'https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso',
            repository: {
                type: 'git',
                url: 'https://github.com/aws/aws-sdk-js-v3.git',
                directory: 'clients/client-sso',
            },
        }
    })
var f_,
    ct,
    dt,
    wn,
    s_,
    Bs,
    Sn,
    bn,
    eo,
    kp,
    Lp,
    i_,
    a_,
    c_,
    g_,
    h_,
    at,
    d_,
    y_,
    m_,
    l_,
    p_,
    u_,
    OM,
    x_,
    E_ = i(() => {
        ;(f_ = 'required'),
            (ct = 'fn'),
            (dt = 'argv'),
            (wn = 'ref'),
            (s_ = 'isSet'),
            (Bs = 'booleanEquals'),
            (Sn = 'error'),
            (bn = 'endpoint'),
            (eo = 'tree'),
            (kp = 'PartitionResult'),
            (Lp = 'getAttr'),
            (i_ = { [f_]: !1, type: 'String' }),
            (a_ = { [f_]: !0, default: !1, type: 'Boolean' }),
            (c_ = { [wn]: 'Endpoint' }),
            (g_ = { [ct]: Bs, [dt]: [{ [wn]: 'UseFIPS' }, !0] }),
            (h_ = { [ct]: Bs, [dt]: [{ [wn]: 'UseDualStack' }, !0] }),
            (at = {}),
            (d_ = { [ct]: Lp, [dt]: [{ [wn]: kp }, 'supportsFIPS'] }),
            (y_ = { [wn]: kp }),
            (m_ = {
                [ct]: Bs,
                [dt]: [!0, { [ct]: Lp, [dt]: [y_, 'supportsDualStack'] }],
            }),
            (l_ = [g_]),
            (p_ = [h_]),
            (u_ = [{ [wn]: 'Region' }]),
            (OM = {
                version: '1.0',
                parameters: {
                    Region: i_,
                    UseDualStack: a_,
                    UseFIPS: a_,
                    Endpoint: i_,
                },
                rules: [
                    {
                        conditions: [{ [ct]: s_, [dt]: [c_] }],
                        rules: [
                            {
                                conditions: l_,
                                error: 'Invalid Configuration: FIPS and custom endpoint are not supported',
                                type: Sn,
                            },
                            {
                                conditions: p_,
                                error: 'Invalid Configuration: Dualstack and custom endpoint are not supported',
                                type: Sn,
                            },
                            {
                                endpoint: {
                                    url: c_,
                                    properties: at,
                                    headers: at,
                                },
                                type: bn,
                            },
                        ],
                        type: eo,
                    },
                    {
                        conditions: [{ [ct]: s_, [dt]: u_ }],
                        rules: [
                            {
                                conditions: [
                                    {
                                        [ct]: 'aws.partition',
                                        [dt]: u_,
                                        assign: kp,
                                    },
                                ],
                                rules: [
                                    {
                                        conditions: [g_, h_],
                                        rules: [
                                            {
                                                conditions: [
                                                    {
                                                        [ct]: Bs,
                                                        [dt]: [!0, d_],
                                                    },
                                                    m_,
                                                ],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: 'https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                                            properties: at,
                                                            headers: at,
                                                        },
                                                        type: bn,
                                                    },
                                                ],
                                                type: eo,
                                            },
                                            {
                                                error: 'FIPS and DualStack are enabled, but this partition does not support one or both',
                                                type: Sn,
                                            },
                                        ],
                                        type: eo,
                                    },
                                    {
                                        conditions: l_,
                                        rules: [
                                            {
                                                conditions: [
                                                    {
                                                        [ct]: Bs,
                                                        [dt]: [d_, !0],
                                                    },
                                                ],
                                                rules: [
                                                    {
                                                        conditions: [
                                                            {
                                                                [ct]: 'stringEquals',
                                                                [dt]: [
                                                                    {
                                                                        [ct]: Lp,
                                                                        [dt]: [
                                                                            y_,
                                                                            'name',
                                                                        ],
                                                                    },
                                                                    'aws-us-gov',
                                                                ],
                                                            },
                                                        ],
                                                        endpoint: {
                                                            url: 'https://portal.sso.{Region}.amazonaws.com',
                                                            properties: at,
                                                            headers: at,
                                                        },
                                                        type: bn,
                                                    },
                                                    {
                                                        endpoint: {
                                                            url: 'https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}',
                                                            properties: at,
                                                            headers: at,
                                                        },
                                                        type: bn,
                                                    },
                                                ],
                                                type: eo,
                                            },
                                            {
                                                error: 'FIPS is enabled but this partition does not support FIPS',
                                                type: Sn,
                                            },
                                        ],
                                        type: eo,
                                    },
                                    {
                                        conditions: p_,
                                        rules: [
                                            {
                                                conditions: [m_],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: 'https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                                            properties: at,
                                                            headers: at,
                                                        },
                                                        type: bn,
                                                    },
                                                ],
                                                type: eo,
                                            },
                                            {
                                                error: 'DualStack is enabled but this partition does not support DualStack',
                                                type: Sn,
                                            },
                                        ],
                                        type: eo,
                                    },
                                    {
                                        endpoint: {
                                            url: 'https://portal.sso.{Region}.{PartitionResult#dnsSuffix}',
                                            properties: at,
                                            headers: at,
                                        },
                                        type: bn,
                                    },
                                ],
                                type: eo,
                            },
                        ],
                        type: eo,
                    },
                    {
                        error: 'Invalid Configuration: Missing Region',
                        type: Sn,
                    },
                ],
            }),
            (x_ = OM)
    })
var DM,
    C_,
    S_ = i(() => {
        on()
        Tt()
        E_()
        ;(DM = new Rt({
            size: 50,
            params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'],
        })),
            (C_ = (e, t = {}) =>
                DM.get(e, () =>
                    qt(x_, { endpointParams: e, logger: t.logger })
                ))
        Ve.aws = Kt
    })
var b_,
    w_ = i(() => {
        he()
        ee()
        b()
        Rr()
        Wt()
        ze()
        Dp()
        S_()
        b_ = (e) => ({
            apiVersion: '2019-06-10',
            base64Decoder: e?.base64Decoder ?? bt,
            base64Encoder: e?.base64Encoder ?? De,
            disableHostPrefix: e?.disableHostPrefix ?? !1,
            endpointProvider: e?.endpointProvider ?? C_,
            extensions: e?.extensions ?? [],
            httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? e_,
            httpAuthSchemes: e?.httpAuthSchemes ?? [
                {
                    schemeId: 'aws.auth#sigv4',
                    identityProvider: (t) =>
                        t.getIdentityProvider('aws.auth#sigv4'),
                    signer: new We(),
                },
                {
                    schemeId: 'smithy.api#noAuth',
                    identityProvider: (t) =>
                        t.getIdentityProvider('smithy.api#noAuth') ||
                        (async () => ({})),
                    signer: new _t(),
                },
            ],
            logger: e?.logger ?? new et(),
            serviceId: e?.serviceId ?? 'SSO',
            urlParser: e?.urlParser ?? Le,
            utf8Decoder: e?.utf8Decoder ?? Ee,
            utf8Encoder: e?.utf8Encoder ?? Je,
        })
    })
var A_,
    v_ = i(() => {
        r_()
        he()
        fs()
        Ft()
        gs()
        Qt()
        Xt()
        xr()
        hs()
        rt()
        w_()
        b()
        xs()
        b()
        A_ = (e) => {
            _o(process.version)
            let t = Xo(e),
                o = () => t().then(vo),
                r = b_(e)
            return (
                Co(process.version),
                {
                    ...r,
                    ...e,
                    runtime: 'node',
                    defaultsMode: t,
                    bodyLengthChecker: e?.bodyLengthChecker ?? Jo,
                    defaultUserAgentProvider:
                        e?.defaultUserAgentProvider ??
                        Ko({
                            serviceId: r.serviceId,
                            clientVersion: n_.version,
                        }),
                    maxAttempts: e?.maxAttempts ?? q(Go),
                    region: e?.region ?? q(Nt, ko),
                    requestHandler: Xe.create(e?.requestHandler ?? o),
                    retryMode:
                        e?.retryMode ??
                        q({
                            ...Vo,
                            default: async () => (await o()).retryMode || Ot,
                        }),
                    sha256: e?.sha256 ?? Dt.bind(null, 'sha256'),
                    streamCollector: e?.streamCollector ?? At,
                    useDualstackEndpoint: e?.useDualstackEndpoint ?? q(Oo),
                    useFipsEndpoint: e?.useFipsEndpoint ?? q(Do),
                    userAgentAppId: e?.userAgentAppId ?? q(Yo),
                }
            )
        }
    })
var __,
    R_,
    T_ = i(() => {
        ;(__ = (e) => {
            let t = e.httpAuthSchemes,
                o = e.httpAuthSchemeProvider,
                r = e.credentials
            return {
                setHttpAuthScheme(n) {
                    let s = t.findIndex((a) => a.schemeId === n.schemeId)
                    s === -1 ? t.push(n) : t.splice(s, 1, n)
                },
                httpAuthSchemes() {
                    return t
                },
                setHttpAuthSchemeProvider(n) {
                    o = n
                },
                httpAuthSchemeProvider() {
                    return o
                },
                setCredentials(n) {
                    r = n
                },
                credentials() {
                    return r
                },
            }
        }),
            (R_ = (e) => ({
                httpAuthSchemes: e.httpAuthSchemes(),
                httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
                credentials: e.credentials(),
            }))
    })
var sd,
    I_,
    P_ = i(() => {
        Es()
        se()
        b()
        T_()
        ;(sd = (e) => e),
            (I_ = (e, t) => {
                let o = {
                    ...sd(Qo(e)),
                    ...sd(Ro(e)),
                    ...sd(co(e)),
                    ...sd(__(e)),
                }
                return (
                    t.forEach((r) => r.configure(o)),
                    { ...e, ...Zo(o), ...To(o), ...mo(o), ...R_(o) }
                )
            })
    })
var kt,
    Gs = i(() => {
        zn()
        Vn()
        Wn()
        cn()
        Ft()
        ee()
        ss()
        _()
        Qt()
        b()
        Dp()
        Cn()
        v_()
        P_()
        kt = class extends je {
            constructor(...[t]) {
                let o = A_(t || {}),
                    r = o_(o),
                    n = xo(r),
                    s = zo(n),
                    a = Lo(s),
                    d = a,
                    m = Bo(d),
                    l = t_(m),
                    g = I_(l, t?.extensions || [])
                super(g),
                    (this.config = g),
                    this.middlewareStack.use(No(this.config)),
                    this.middlewareStack.use(Wo(this.config)),
                    this.middlewareStack.use(Mo(this.config)),
                    this.middlewareStack.use(lo(this.config)),
                    this.middlewareStack.use(po(this.config)),
                    this.middlewareStack.use(uo(this.config)),
                    this.middlewareStack.use(
                        fo(this.config, {
                            httpAuthSchemeParametersProvider: Zv,
                            identityProviderConfigProvider: async (u) =>
                                new vt({ 'aws.auth#sigv4': u.credentials }),
                        })
                    ),
                    this.middlewareStack.use(go(this.config))
            }
            destroy() {
                super.destroy()
            }
        }
    })
var to,
    Mp = i(() => {
        b()
        to = class e extends It {
            constructor(t) {
                super(t), Object.setPrototypeOf(this, e.prototype)
            }
        }
    })
var id,
    ad,
    cd,
    dd,
    N_,
    kM,
    F_,
    O_,
    D_,
    k_,
    Or = i(() => {
        b()
        Mp()
        ;(id = class e extends to {
            constructor(t) {
                super({
                    name: 'InvalidRequestException',
                    $fault: 'client',
                    ...t,
                }),
                    (this.name = 'InvalidRequestException'),
                    (this.$fault = 'client'),
                    Object.setPrototypeOf(this, e.prototype)
            }
        }),
            (ad = class e extends to {
                constructor(t) {
                    super({
                        name: 'ResourceNotFoundException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'ResourceNotFoundException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype)
                }
            }),
            (cd = class e extends to {
                constructor(t) {
                    super({
                        name: 'TooManyRequestsException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'TooManyRequestsException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype)
                }
            }),
            (dd = class e extends to {
                constructor(t) {
                    super({
                        name: 'UnauthorizedException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'UnauthorizedException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype)
                }
            }),
            (N_ = (e) => ({ ...e, ...(e.accessToken && { accessToken: H }) })),
            (kM = (e) => ({
                ...e,
                ...(e.secretAccessKey && { secretAccessKey: H }),
                ...(e.sessionToken && { sessionToken: H }),
            })),
            (F_ = (e) => ({
                ...e,
                ...(e.roleCredentials && {
                    roleCredentials: kM(e.roleCredentials),
                }),
            })),
            (O_ = (e) => ({ ...e, ...(e.accessToken && { accessToken: H }) })),
            (D_ = (e) => ({ ...e, ...(e.accessToken && { accessToken: H }) })),
            (k_ = (e) => ({ ...e, ...(e.accessToken && { accessToken: H }) }))
    })
var L_,
    M_,
    $_,
    U_,
    B_,
    G_,
    z_,
    V_,
    md,
    LM,
    MM,
    $M,
    UM,
    BM,
    or,
    W_,
    ld,
    H_,
    j_,
    q_,
    K_,
    Y_,
    GM,
    zM,
    pd,
    zs = i(() => {
        he()
        ee()
        b()
        Or()
        Mp()
        ;(L_ = async (e, t) => {
            let o = I(e, t),
                r = f({}, Io, { [pd]: e[ld] })
            o.bp('/federation/credentials')
            let n = f({
                    [zM]: [, T(e[GM], 'roleName')],
                    [H_]: [, T(e[W_], 'accountId')],
                }),
                s
            return o.m('GET').h(r).q(n).b(s), o.build()
        }),
            (M_ = async (e, t) => {
                let o = I(e, t),
                    r = f({}, Io, { [pd]: e[ld] })
                o.bp('/assignment/roles')
                let n = f({
                        [Y_]: [, e[K_]],
                        [q_]: [
                            () => e.maxResults !== void 0,
                            () => e[j_].toString(),
                        ],
                        [H_]: [, T(e[W_], 'accountId')],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            ($_ = async (e, t) => {
                let o = I(e, t),
                    r = f({}, Io, { [pd]: e[ld] })
                o.bp('/assignment/accounts')
                let n = f({
                        [Y_]: [, e[K_]],
                        [q_]: [
                            () => e.maxResults !== void 0,
                            () => e[j_].toString(),
                        ],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (U_ = async (e, t) => {
                let o = I(e, t),
                    r = f({}, Io, { [pd]: e[ld] })
                o.bp('/logout')
                let n
                return o.m('POST').h(r).b(n), o.build()
            }),
            (B_ = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return md(e, t)
                let o = f({ $metadata: or(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { roleCredentials: p })
                return Object.assign(o, n), o
            }),
            (G_ = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return md(e, t)
                let o = f({ $metadata: or(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { nextToken: c, roleList: p })
                return Object.assign(o, n), o
            }),
            (z_ = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return md(e, t)
                let o = f({ $metadata: or(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { accountList: p, nextToken: c })
                return Object.assign(o, n), o
            }),
            (V_ = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return md(e, t)
                let o = f({ $metadata: or(e) })
                return await ce(e.body, t), o
            }),
            (md = async (e, t) => {
                let o = { ...e, body: await sn(e.body, t) },
                    r = an(e, o.body)
                switch (r) {
                    case 'InvalidRequestException':
                    case 'com.amazonaws.sso#InvalidRequestException':
                        throw await MM(o, t)
                    case 'ResourceNotFoundException':
                    case 'com.amazonaws.sso#ResourceNotFoundException':
                        throw await $M(o, t)
                    case 'TooManyRequestsException':
                    case 'com.amazonaws.sso#TooManyRequestsException':
                        throw await UM(o, t)
                    case 'UnauthorizedException':
                    case 'com.amazonaws.sso#UnauthorizedException':
                        throw await BM(o, t)
                    default:
                        let n = o.body
                        return LM({ output: e, parsedBody: n, errorCode: r })
                }
            }),
            (LM = Ao(to)),
            (MM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { message: c })
                Object.assign(o, n)
                let s = new id({ $metadata: or(e), ...o })
                return P(s, e.body)
            }),
            ($M = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { message: c })
                Object.assign(o, n)
                let s = new ad({ $metadata: or(e), ...o })
                return P(s, e.body)
            }),
            (UM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { message: c })
                Object.assign(o, n)
                let s = new cd({ $metadata: or(e), ...o })
                return P(s, e.body)
            }),
            (BM = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { message: c })
                Object.assign(o, n)
                let s = new dd({ $metadata: or(e), ...o })
                return P(s, e.body)
            }),
            (or = (e) => ({
                httpStatusCode: e.statusCode,
                requestId:
                    e.headers['x-amzn-requestid'] ??
                    e.headers['x-amzn-request-id'] ??
                    e.headers['x-amz-request-id'],
                extendedRequestId: e.headers['x-amz-id-2'],
                cfId: e.headers['x-amz-cf-id'],
            })),
            (W_ = 'accountId'),
            (ld = 'accessToken'),
            (H_ = 'account_id'),
            (j_ = 'maxResults'),
            (q_ = 'max_result'),
            (K_ = 'nextToken'),
            (Y_ = 'next_token'),
            (GM = 'roleName'),
            (zM = 'role_name'),
            (pd = 'x-amz-sso_bearer_token')
    })
var An,
    $p = i(() => {
        _()
        R()
        b()
        Cn()
        Or()
        zs()
        An = class extends (
            h
                .classBuilder()
                .ep(tr)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('SWBPortalService', 'GetRoleCredentials', {})
                .n('SSOClient', 'GetRoleCredentialsCommand')
                .f(N_, F_)
                .ser(L_)
                .de(B_)
                .build()
        ) {}
    })
var vn,
    ud = i(() => {
        _()
        R()
        b()
        Cn()
        Or()
        zs()
        vn = class extends (
            h
                .classBuilder()
                .ep(tr)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('SWBPortalService', 'ListAccountRoles', {})
                .n('SSOClient', 'ListAccountRolesCommand')
                .f(O_, void 0)
                .ser(M_)
                .de(G_)
                .build()
        ) {}
    })
var _n,
    fd = i(() => {
        _()
        R()
        b()
        Cn()
        Or()
        zs()
        _n = class extends (
            h
                .classBuilder()
                .ep(tr)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('SWBPortalService', 'ListAccounts', {})
                .n('SSOClient', 'ListAccountsCommand')
                .f(D_, void 0)
                .ser($_)
                .de(z_)
                .build()
        ) {}
    })
var gd,
    Up = i(() => {
        _()
        R()
        b()
        Cn()
        Or()
        zs()
        gd = class extends (
            h
                .classBuilder()
                .ep(tr)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('SWBPortalService', 'Logout', {})
                .n('SSOClient', 'LogoutCommand')
                .f(k_, void 0)
                .ser(U_)
                .de(V_)
                .build()
        ) {}
    })
var VM,
    Bp,
    J_ = i(() => {
        b()
        $p()
        ud()
        fd()
        Up()
        Gs()
        ;(VM = {
            GetRoleCredentialsCommand: An,
            ListAccountRolesCommand: vn,
            ListAccountsCommand: _n,
            LogoutCommand: gd,
        }),
            (Bp = class extends kt {})
        wo(VM, Bp)
    })
var X_ = i(() => {
    $p()
    ud()
    fd()
    Up()
})
var Q_ = i(() => {})
var tre,
    Z_ = i(() => {
        ee()
        ud()
        Gs()
        tre = te(kt, vn, 'nextToken', 'nextToken', 'maxResults')
    })
var ire,
    e0 = i(() => {
        ee()
        fd()
        Gs()
        ire = te(kt, _n, 'nextToken', 'nextToken', 'maxResults')
    })
var t0 = i(() => {
    Q_()
    Z_()
    e0()
})
var o0 = i(() => {
    Or()
})
var r0 = i(() => {
    Gs()
    J_()
    X_()
    t0()
    o0()
})
var n0 = {}
Ue(n0, { GetRoleCredentialsCommand: () => An, SSOClient: () => kt })
var s0 = i(() => {
    r0()
})
var Vs,
    Gp,
    i0 = i(() => {
        _e()
        Qv()
        Q()
        xt()
        ;(Vs = !1),
            (Gp = async ({
                ssoStartUrl: e,
                ssoSession: t,
                ssoAccountId: o,
                ssoRegion: r,
                ssoRoleName: n,
                ssoClient: s,
                clientConfig: a,
                profile: d,
                logger: m,
            }) => {
                let l,
                    g =
                        'To refresh this SSO session run aws sso login with the corresponding profile.'
                if (t)
                    try {
                        let gr = await Kv({ profile: d })()
                        l = {
                            accessToken: gr.token,
                            expiresAt: new Date(gr.expiration).toISOString(),
                        }
                    } catch (gr) {
                        throw new $(gr.message, { tryNextLink: Vs, logger: m })
                    }
                else
                    try {
                        l = await _c(e)
                    } catch {
                        throw new $(
                            `The SSO session associated with this profile is invalid. ${g}`,
                            { tryNextLink: Vs, logger: m }
                        )
                    }
                if (new Date(l.expiresAt).getTime() - Date.now() <= 0)
                    throw new $(
                        `The SSO session associated with this profile has expired. ${g}`,
                        { tryNextLink: Vs, logger: m }
                    )
                let { accessToken: u } = l,
                    { SSOClient: C, GetRoleCredentialsCommand: w } =
                        await Promise.resolve().then(() => (s0(), n0)),
                    v =
                        s ||
                        new C(
                            Object.assign({}, a ?? {}, {
                                region: a?.region ?? r,
                            })
                        ),
                    U
                try {
                    U = await v.send(
                        new w({ accountId: o, roleName: n, accessToken: u })
                    )
                } catch (gr) {
                    throw new $(gr, { tryNextLink: Vs, logger: m })
                }
                let {
                    roleCredentials: {
                        accessKeyId: F,
                        secretAccessKey: B,
                        sessionToken: Z,
                        expiration: j,
                        credentialScope: re,
                        accountId: ao,
                    } = {},
                } = U
                if (!F || !B || !Z || !j)
                    throw new $(
                        'SSO returns an invalid temporary credential.',
                        { tryNextLink: Vs, logger: m }
                    )
                let fr = {
                    accessKeyId: F,
                    secretAccessKey: B,
                    sessionToken: Z,
                    expiration: new Date(j),
                    ...(re && { credentialScope: re }),
                    ...(ao && { accountId: ao }),
                }
                return (
                    t
                        ? J(fr, 'CREDENTIALS_SSO', 's')
                        : J(fr, 'CREDENTIALS_SSO_LEGACY', 'u'),
                    fr
                )
            })
    })
var zp,
    Vp = i(() => {
        Q()
        zp = (e, t) => {
            let {
                sso_start_url: o,
                sso_account_id: r,
                sso_region: n,
                sso_role_name: s,
            } = e
            if (!o || !r || !n || !s)
                throw new $(
                    `Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e).join(', ')}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
                    { tryNextLink: !1, logger: t }
                )
            return e
        }
    })
var WM,
    a0 = i(() => {
        Q()
        xt()
        cp()
        i0()
        Vp()
        WM =
            (e = {}) =>
            async () => {
                e.logger?.debug('@aws-sdk/credential-provider-sso - fromSSO')
                let {
                        ssoStartUrl: t,
                        ssoAccountId: o,
                        ssoRegion: r,
                        ssoRoleName: n,
                        ssoSession: s,
                    } = e,
                    { ssoClient: a } = e,
                    d = tt(e)
                if (!t && !o && !r && !n && !s) {
                    let l = (await Uo(e))[d]
                    if (!l)
                        throw new $(`Profile ${d} was not found.`, {
                            logger: e.logger,
                        })
                    if (!ap(l))
                        throw new $(
                            `Profile ${d} is not configured with SSO credentials.`,
                            { logger: e.logger }
                        )
                    if (l?.sso_session) {
                        let F = (await Ic(e))[l.sso_session],
                            B = ` configurations in profile ${d} and sso-session ${l.sso_session}`
                        if (r && r !== F.sso_region)
                            throw new $('Conflicting SSO region' + B, {
                                tryNextLink: !1,
                                logger: e.logger,
                            })
                        if (t && t !== F.sso_start_url)
                            throw new $('Conflicting SSO start_url' + B, {
                                tryNextLink: !1,
                                logger: e.logger,
                            })
                        ;(l.sso_region = F.sso_region),
                            (l.sso_start_url = F.sso_start_url)
                    }
                    let {
                        sso_start_url: g,
                        sso_account_id: u,
                        sso_region: C,
                        sso_role_name: w,
                        sso_session: v,
                    } = zp(l, e.logger)
                    return Gp({
                        ssoStartUrl: g,
                        ssoSession: v,
                        ssoAccountId: u,
                        ssoRegion: C,
                        ssoRoleName: w,
                        ssoClient: a,
                        clientConfig: e.clientConfig,
                        profile: d,
                    })
                } else {
                    if (!t || !o || !r || !n)
                        throw new $(
                            'Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"',
                            { tryNextLink: !1, logger: e.logger }
                        )
                    return Gp({
                        ssoStartUrl: t,
                        ssoSession: s,
                        ssoAccountId: o,
                        ssoRegion: r,
                        ssoRoleName: n,
                        ssoClient: a,
                        clientConfig: e.clientConfig,
                        profile: d,
                    })
                }
            }
    })
var c0 = i(() => {})
var Wp = {}
Ue(Wp, {
    fromSSO: () => WM,
    isSsoProfile: () => ap,
    validateSsoProfile: () => zp,
})
var Hp = i(() => {
    a0()
    cp()
    c0()
    Vp()
})
var d0,
    jp,
    m0 = i(() => {
        _e()
        Q()
        ;(d0 = (e, t, o) => {
            let r = {
                EcsContainer: async (n) => {
                    let { fromHttp: s } = await Promise.resolve().then(
                            () => (ip(), sp)
                        ),
                        { fromContainerMetadata: a } =
                            await Promise.resolve().then(() => (us(), ps))
                    return (
                        o?.debug(
                            '@aws-sdk/credential-provider-ini - credential_source is EcsContainer'
                        ),
                        async () => Yt(s(n ?? {}), a(n))().then(jp)
                    )
                },
                Ec2InstanceMetadata: async (n) => {
                    o?.debug(
                        '@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata'
                    )
                    let { fromInstanceMetadata: s } =
                        await Promise.resolve().then(() => (us(), ps))
                    return async () => s(n)().then(jp)
                },
                Environment: async (n) => {
                    o?.debug(
                        '@aws-sdk/credential-provider-ini - credential_source is Environment'
                    )
                    let { fromEnv: s } = await Promise.resolve().then(
                        () => (Jl(), nA)
                    )
                    return async () => s(n)().then(jp)
                },
            }
            if (e in r) return r[e]
            throw new $(
                `Unsupported credential source in profile ${t}. Got ${e}, expected EcsContainer or Ec2InstanceMetadata or Environment.`,
                { logger: o }
            )
        }),
            (jp = (e) => J(e, 'CREDENTIALS_PROFILE_NAMED_PROVIDER', 'p'))
    })
function HM(e) {
    return {
        schemeId: 'aws.auth#sigv4',
        signingProperties: { name: 'sts', region: e.region },
        propertiesExtractor: (t, o) => ({
            signingProperties: { config: t, context: o },
        }),
    }
}
function l0(e) {
    return { schemeId: 'smithy.api#noAuth' }
}
var p0,
    u0,
    jM,
    f0,
    qp = i(() => {
        he()
        Ge()
        Ws()
        p0 = async (e, t, o) => ({
            operation: Oe(t).operation,
            region:
                (await fe(e.region)()) ||
                (() => {
                    throw new Error(
                        'expected `region` to be configured for `aws.auth#sigv4`'
                    )
                })(),
        })
        ;(u0 = (e) => {
            let t = []
            switch (e.operation) {
                case 'AssumeRoleWithSAML': {
                    t.push(l0(e))
                    break
                }
                case 'AssumeRoleWithWebIdentity': {
                    t.push(l0(e))
                    break
                }
                default:
                    t.push(HM(e))
            }
            return t
        }),
            (jM = (e) => ({ ...e, stsClientCtor: Lt })),
            (f0 = (e) => {
                let t = jM(e)
                return { ...So(t) }
            })
    })
var g0,
    we,
    Mt = i(() => {
        ;(g0 = (e) => ({
            ...e,
            useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
            useFipsEndpoint: e.useFipsEndpoint ?? !1,
            useGlobalEndpoint: e.useGlobalEndpoint ?? !1,
            defaultSigningName: 'sts',
        })),
            (we = {
                UseGlobalEndpoint: {
                    type: 'builtInParams',
                    name: 'useGlobalEndpoint',
                },
                UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
                Endpoint: { type: 'builtInParams', name: 'endpoint' },
                Region: { type: 'builtInParams', name: 'region' },
                UseDualStack: {
                    type: 'builtInParams',
                    name: 'useDualstackEndpoint',
                },
            })
    })
var y0,
    h0 = i(() => {
        y0 = {
            name: '@aws-sdk/client-sts',
            description:
                'AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native',
            version: '3.678.0',
            scripts: {
                build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
                'build:cjs': 'node ../../scripts/compilation/inline client-sts',
                'build:es': 'tsc -p tsconfig.es.json',
                'build:include:deps':
                    'lerna run --scope $npm_package_name --include-dependencies build',
                'build:types':
                    'rimraf ./dist-types tsconfig.types.tsbuildinfo && tsc -p tsconfig.types.json',
                'build:types:downlevel':
                    'downlevel-dts dist-types dist-types/ts3.4',
                clean: 'rimraf ./dist-* && rimraf *.tsbuildinfo',
                'extract:docs': 'api-extractor run --local',
                'generate:client':
                    'node ../../scripts/generate-clients/single-service --solo sts',
                test: 'yarn test:unit',
                'test:unit': 'jest',
            },
            main: './dist-cjs/index.js',
            types: './dist-types/index.d.ts',
            module: './dist-es/index.js',
            sideEffects: !1,
            dependencies: {
                '@aws-crypto/sha256-browser': '5.2.0',
                '@aws-crypto/sha256-js': '5.2.0',
                '@aws-sdk/client-sso-oidc': '3.678.0',
                '@aws-sdk/core': '3.678.0',
                '@aws-sdk/credential-provider-node': '3.678.0',
                '@aws-sdk/middleware-host-header': '3.667.0',
                '@aws-sdk/middleware-logger': '3.667.0',
                '@aws-sdk/middleware-recursion-detection': '3.667.0',
                '@aws-sdk/middleware-user-agent': '3.678.0',
                '@aws-sdk/region-config-resolver': '3.667.0',
                '@aws-sdk/types': '3.667.0',
                '@aws-sdk/util-endpoints': '3.667.0',
                '@aws-sdk/util-user-agent-browser': '3.675.0',
                '@aws-sdk/util-user-agent-node': '3.678.0',
                '@smithy/config-resolver': '^3.0.9',
                '@smithy/core': '^2.4.8',
                '@smithy/fetch-http-handler': '^3.2.9',
                '@smithy/hash-node': '^3.0.7',
                '@smithy/invalid-dependency': '^3.0.7',
                '@smithy/middleware-content-length': '^3.0.9',
                '@smithy/middleware-endpoint': '^3.1.4',
                '@smithy/middleware-retry': '^3.0.23',
                '@smithy/middleware-serde': '^3.0.7',
                '@smithy/middleware-stack': '^3.0.7',
                '@smithy/node-config-provider': '^3.1.8',
                '@smithy/node-http-handler': '^3.2.4',
                '@smithy/protocol-http': '^4.1.4',
                '@smithy/smithy-client': '^3.4.0',
                '@smithy/types': '^3.5.0',
                '@smithy/url-parser': '^3.0.7',
                '@smithy/util-base64': '^3.0.0',
                '@smithy/util-body-length-browser': '^3.0.0',
                '@smithy/util-body-length-node': '^3.0.0',
                '@smithy/util-defaults-mode-browser': '^3.0.23',
                '@smithy/util-defaults-mode-node': '^3.0.23',
                '@smithy/util-endpoints': '^2.1.3',
                '@smithy/util-middleware': '^3.0.7',
                '@smithy/util-retry': '^3.0.7',
                '@smithy/util-utf8': '^3.0.0',
                tslib: '^2.6.2',
            },
            devDependencies: {
                '@tsconfig/node16': '16.1.3',
                '@types/node': '^16.18.96',
                concurrently: '7.0.0',
                'downlevel-dts': '0.10.1',
                rimraf: '3.0.2',
                typescript: '~4.9.5',
            },
            engines: { node: '>=16.0.0' },
            typesVersions: {
                '<4.0': { 'dist-types/*': ['dist-types/ts3.4/*'] },
            },
            files: ['dist-*/**'],
            author: {
                name: 'AWS SDK for JavaScript Team',
                url: 'https://aws.amazon.com/javascript/',
            },
            license: 'Apache-2.0',
            browser: {
                './dist-es/runtimeConfig': './dist-es/runtimeConfig.browser',
            },
            'react-native': {
                './dist-es/runtimeConfig': './dist-es/runtimeConfig.native',
            },
            homepage:
                'https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts',
            repository: {
                type: 'git',
                url: 'https://github.com/aws/aws-sdk-js-v3.git',
                directory: 'clients/client-sts',
            },
        }
    })
var T0,
    V,
    K,
    Y,
    nr,
    rr,
    Se,
    I0,
    P0,
    N0,
    ie,
    x0,
    $t,
    Rn,
    Yp,
    E0,
    Kp,
    F0,
    C0,
    be,
    S0,
    O0,
    D0,
    Ae,
    Ke,
    b0,
    k0,
    L0,
    w0,
    M0,
    A0,
    v0,
    _0,
    R0,
    KM,
    $0,
    U0 = i(() => {
        ;(T0 = 'required'),
            (V = 'type'),
            (K = 'fn'),
            (Y = 'argv'),
            (nr = 'ref'),
            (rr = 'booleanEquals'),
            (Se = 'stringEquals'),
            (I0 = 'sigv4'),
            (P0 = 'sts'),
            (N0 = 'us-east-1'),
            (ie = 'endpoint'),
            (x0 = 'https://sts.{Region}.{PartitionResult#dnsSuffix}'),
            ($t = 'tree'),
            (Rn = 'error'),
            (Yp = 'getAttr'),
            (E0 = { [T0]: !1, [V]: 'String' }),
            (Kp = { [T0]: !0, default: !1, [V]: 'Boolean' }),
            (F0 = { [nr]: 'Endpoint' }),
            (C0 = { [K]: 'isSet', [Y]: [{ [nr]: 'Region' }] }),
            (be = { [nr]: 'Region' }),
            (S0 = {
                [K]: 'aws.partition',
                [Y]: [be],
                assign: 'PartitionResult',
            }),
            (O0 = { [nr]: 'UseFIPS' }),
            (D0 = { [nr]: 'UseDualStack' }),
            (Ae = {
                url: 'https://sts.amazonaws.com',
                properties: {
                    authSchemes: [
                        { name: I0, signingName: P0, signingRegion: N0 },
                    ],
                },
                headers: {},
            }),
            (Ke = {}),
            (b0 = {
                conditions: [{ [K]: Se, [Y]: [be, 'aws-global'] }],
                [ie]: Ae,
                [V]: ie,
            }),
            (k0 = { [K]: rr, [Y]: [O0, !0] }),
            (L0 = { [K]: rr, [Y]: [D0, !0] }),
            (w0 = {
                [K]: Yp,
                [Y]: [{ [nr]: 'PartitionResult' }, 'supportsFIPS'],
            }),
            (M0 = { [nr]: 'PartitionResult' }),
            (A0 = {
                [K]: rr,
                [Y]: [!0, { [K]: Yp, [Y]: [M0, 'supportsDualStack'] }],
            }),
            (v0 = [{ [K]: 'isSet', [Y]: [F0] }]),
            (_0 = [k0]),
            (R0 = [L0]),
            (KM = {
                version: '1.0',
                parameters: {
                    Region: E0,
                    UseDualStack: Kp,
                    UseFIPS: Kp,
                    Endpoint: E0,
                    UseGlobalEndpoint: Kp,
                },
                rules: [
                    {
                        conditions: [
                            {
                                [K]: rr,
                                [Y]: [{ [nr]: 'UseGlobalEndpoint' }, !0],
                            },
                            { [K]: 'not', [Y]: v0 },
                            C0,
                            S0,
                            { [K]: rr, [Y]: [O0, !1] },
                            { [K]: rr, [Y]: [D0, !1] },
                        ],
                        rules: [
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'ap-northeast-1'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'ap-south-1'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'ap-southeast-1'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'ap-southeast-2'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            b0,
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'ca-central-1'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'eu-central-1'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'eu-north-1'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'eu-west-1'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'eu-west-2'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'eu-west-3'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'sa-east-1'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [{ [K]: Se, [Y]: [be, N0] }],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'us-east-2'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'us-west-1'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                conditions: [
                                    { [K]: Se, [Y]: [be, 'us-west-2'] },
                                ],
                                endpoint: Ae,
                                [V]: ie,
                            },
                            {
                                endpoint: {
                                    url: x0,
                                    properties: {
                                        authSchemes: [
                                            {
                                                name: I0,
                                                signingName: P0,
                                                signingRegion: '{Region}',
                                            },
                                        ],
                                    },
                                    headers: Ke,
                                },
                                [V]: ie,
                            },
                        ],
                        [V]: $t,
                    },
                    {
                        conditions: v0,
                        rules: [
                            {
                                conditions: _0,
                                error: 'Invalid Configuration: FIPS and custom endpoint are not supported',
                                [V]: Rn,
                            },
                            {
                                conditions: R0,
                                error: 'Invalid Configuration: Dualstack and custom endpoint are not supported',
                                [V]: Rn,
                            },
                            {
                                endpoint: {
                                    url: F0,
                                    properties: Ke,
                                    headers: Ke,
                                },
                                [V]: ie,
                            },
                        ],
                        [V]: $t,
                    },
                    {
                        conditions: [C0],
                        rules: [
                            {
                                conditions: [S0],
                                rules: [
                                    {
                                        conditions: [k0, L0],
                                        rules: [
                                            {
                                                conditions: [
                                                    { [K]: rr, [Y]: [!0, w0] },
                                                    A0,
                                                ],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: 'https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                                            properties: Ke,
                                                            headers: Ke,
                                                        },
                                                        [V]: ie,
                                                    },
                                                ],
                                                [V]: $t,
                                            },
                                            {
                                                error: 'FIPS and DualStack are enabled, but this partition does not support one or both',
                                                [V]: Rn,
                                            },
                                        ],
                                        [V]: $t,
                                    },
                                    {
                                        conditions: _0,
                                        rules: [
                                            {
                                                conditions: [
                                                    { [K]: rr, [Y]: [w0, !0] },
                                                ],
                                                rules: [
                                                    {
                                                        conditions: [
                                                            {
                                                                [K]: Se,
                                                                [Y]: [
                                                                    {
                                                                        [K]: Yp,
                                                                        [Y]: [
                                                                            M0,
                                                                            'name',
                                                                        ],
                                                                    },
                                                                    'aws-us-gov',
                                                                ],
                                                            },
                                                        ],
                                                        endpoint: {
                                                            url: 'https://sts.{Region}.amazonaws.com',
                                                            properties: Ke,
                                                            headers: Ke,
                                                        },
                                                        [V]: ie,
                                                    },
                                                    {
                                                        endpoint: {
                                                            url: 'https://sts-fips.{Region}.{PartitionResult#dnsSuffix}',
                                                            properties: Ke,
                                                            headers: Ke,
                                                        },
                                                        [V]: ie,
                                                    },
                                                ],
                                                [V]: $t,
                                            },
                                            {
                                                error: 'FIPS is enabled but this partition does not support FIPS',
                                                [V]: Rn,
                                            },
                                        ],
                                        [V]: $t,
                                    },
                                    {
                                        conditions: R0,
                                        rules: [
                                            {
                                                conditions: [A0],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: 'https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                                            properties: Ke,
                                                            headers: Ke,
                                                        },
                                                        [V]: ie,
                                                    },
                                                ],
                                                [V]: $t,
                                            },
                                            {
                                                error: 'DualStack is enabled but this partition does not support DualStack',
                                                [V]: Rn,
                                            },
                                        ],
                                        [V]: $t,
                                    },
                                    b0,
                                    {
                                        endpoint: {
                                            url: x0,
                                            properties: Ke,
                                            headers: Ke,
                                        },
                                        [V]: ie,
                                    },
                                ],
                                [V]: $t,
                            },
                        ],
                        [V]: $t,
                    },
                    { error: 'Invalid Configuration: Missing Region', [V]: Rn },
                ],
            }),
            ($0 = KM)
    })
var YM,
    B0,
    G0 = i(() => {
        on()
        Tt()
        U0()
        ;(YM = new Rt({
            size: 50,
            params: [
                'Endpoint',
                'Region',
                'UseDualStack',
                'UseFIPS',
                'UseGlobalEndpoint',
            ],
        })),
            (B0 = (e, t = {}) =>
                YM.get(e, () =>
                    qt($0, { endpointParams: e, logger: t.logger })
                ))
        Ve.aws = Kt
    })
var z0,
    V0 = i(() => {
        he()
        ee()
        b()
        Rr()
        Wt()
        ze()
        qp()
        G0()
        z0 = (e) => ({
            apiVersion: '2011-06-15',
            base64Decoder: e?.base64Decoder ?? bt,
            base64Encoder: e?.base64Encoder ?? De,
            disableHostPrefix: e?.disableHostPrefix ?? !1,
            endpointProvider: e?.endpointProvider ?? B0,
            extensions: e?.extensions ?? [],
            httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? u0,
            httpAuthSchemes: e?.httpAuthSchemes ?? [
                {
                    schemeId: 'aws.auth#sigv4',
                    identityProvider: (t) =>
                        t.getIdentityProvider('aws.auth#sigv4'),
                    signer: new We(),
                },
                {
                    schemeId: 'smithy.api#noAuth',
                    identityProvider: (t) =>
                        t.getIdentityProvider('smithy.api#noAuth') ||
                        (async () => ({})),
                    signer: new _t(),
                },
            ],
            logger: e?.logger ?? new et(),
            serviceId: e?.serviceId ?? 'STS',
            urlParser: e?.urlParser ?? Le,
            utf8Decoder: e?.utf8Decoder ?? Ee,
            utf8Encoder: e?.utf8Encoder ?? Je,
        })
    })
var W0,
    H0 = i(() => {
        h0()
        he()
        Zc()
        fs()
        Ft()
        ee()
        gs()
        Qt()
        Xt()
        xr()
        hs()
        rt()
        V0()
        b()
        xs()
        b()
        W0 = (e) => {
            _o(process.version)
            let t = Xo(e),
                o = () => t().then(vo),
                r = z0(e)
            return (
                Co(process.version),
                {
                    ...r,
                    ...e,
                    runtime: 'node',
                    defaultsMode: t,
                    bodyLengthChecker: e?.bodyLengthChecker ?? Jo,
                    credentialDefaultProvider:
                        e?.credentialDefaultProvider ?? Nr,
                    defaultUserAgentProvider:
                        e?.defaultUserAgentProvider ??
                        Ko({
                            serviceId: r.serviceId,
                            clientVersion: y0.version,
                        }),
                    httpAuthSchemes: e?.httpAuthSchemes ?? [
                        {
                            schemeId: 'aws.auth#sigv4',
                            identityProvider: (n) =>
                                n.getIdentityProvider('aws.auth#sigv4') ||
                                (async (s) => await Nr(s?.__config || {})()),
                            signer: new We(),
                        },
                        {
                            schemeId: 'smithy.api#noAuth',
                            identityProvider: (n) =>
                                n.getIdentityProvider('smithy.api#noAuth') ||
                                (async () => ({})),
                            signer: new _t(),
                        },
                    ],
                    maxAttempts: e?.maxAttempts ?? q(Go),
                    region: e?.region ?? q(Nt, ko),
                    requestHandler: Xe.create(e?.requestHandler ?? o),
                    retryMode:
                        e?.retryMode ??
                        q({
                            ...Vo,
                            default: async () => (await o()).retryMode || Ot,
                        }),
                    sha256: e?.sha256 ?? Dt.bind(null, 'sha256'),
                    streamCollector: e?.streamCollector ?? At,
                    useDualstackEndpoint: e?.useDualstackEndpoint ?? q(Oo),
                    useFipsEndpoint: e?.useFipsEndpoint ?? q(Do),
                    userAgentAppId: e?.userAgentAppId ?? q(Yo),
                }
            )
        }
    })
var j0,
    q0,
    K0 = i(() => {
        ;(j0 = (e) => {
            let t = e.httpAuthSchemes,
                o = e.httpAuthSchemeProvider,
                r = e.credentials
            return {
                setHttpAuthScheme(n) {
                    let s = t.findIndex((a) => a.schemeId === n.schemeId)
                    s === -1 ? t.push(n) : t.splice(s, 1, n)
                },
                httpAuthSchemes() {
                    return t
                },
                setHttpAuthSchemeProvider(n) {
                    o = n
                },
                httpAuthSchemeProvider() {
                    return o
                },
                setCredentials(n) {
                    r = n
                },
                credentials() {
                    return r
                },
            }
        }),
            (q0 = (e) => ({
                httpAuthSchemes: e.httpAuthSchemes(),
                httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
                credentials: e.credentials(),
            }))
    })
var hd,
    Y0,
    J0 = i(() => {
        Es()
        se()
        b()
        K0()
        ;(hd = (e) => e),
            (Y0 = (e, t) => {
                let o = {
                    ...hd(Qo(e)),
                    ...hd(Ro(e)),
                    ...hd(co(e)),
                    ...hd(j0(e)),
                }
                return (
                    t.forEach((r) => r.configure(o)),
                    { ...e, ...Zo(o), ...To(o), ...mo(o), ...q0(o) }
                )
            })
    })
var Lt,
    Ws = i(() => {
        zn()
        Vn()
        Wn()
        cn()
        Ft()
        ee()
        ss()
        _()
        Qt()
        b()
        qp()
        Mt()
        H0()
        J0()
        Lt = class extends je {
            constructor(...[t]) {
                let o = W0(t || {}),
                    r = g0(o),
                    n = xo(r),
                    s = zo(n),
                    a = Lo(s),
                    d = a,
                    m = Bo(d),
                    l = f0(m),
                    g = Y0(l, t?.extensions || [])
                super(g),
                    (this.config = g),
                    this.middlewareStack.use(No(this.config)),
                    this.middlewareStack.use(Wo(this.config)),
                    this.middlewareStack.use(Mo(this.config)),
                    this.middlewareStack.use(lo(this.config)),
                    this.middlewareStack.use(po(this.config)),
                    this.middlewareStack.use(uo(this.config)),
                    this.middlewareStack.use(
                        fo(this.config, {
                            httpAuthSchemeParametersProvider: p0,
                            identityProviderConfigProvider: async (u) =>
                                new vt({ 'aws.auth#sigv4': u.credentials }),
                        })
                    ),
                    this.middlewareStack.use(go(this.config))
            }
            destroy() {
                super.destroy()
            }
        }
    })
var Ie,
    yd = i(() => {
        b()
        Ie = class e extends It {
            constructor(t) {
                super(t), Object.setPrototypeOf(this, e.prototype)
            }
        }
    })
var Hs,
    js,
    qs,
    Ks,
    Ys,
    Js,
    Xs,
    Qs,
    Tn,
    Jp,
    Xp,
    Qp,
    Zp,
    eu,
    tu,
    ou,
    sr = i(() => {
        b()
        yd()
        ;(Hs = class e extends Ie {
            constructor(t) {
                super({
                    name: 'ExpiredTokenException',
                    $fault: 'client',
                    ...t,
                }),
                    (this.name = 'ExpiredTokenException'),
                    (this.$fault = 'client'),
                    Object.setPrototypeOf(this, e.prototype)
            }
        }),
            (js = class e extends Ie {
                constructor(t) {
                    super({
                        name: 'MalformedPolicyDocumentException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'MalformedPolicyDocumentException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype)
                }
            }),
            (qs = class e extends Ie {
                constructor(t) {
                    super({
                        name: 'PackedPolicyTooLargeException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'PackedPolicyTooLargeException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype)
                }
            }),
            (Ks = class e extends Ie {
                constructor(t) {
                    super({
                        name: 'RegionDisabledException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'RegionDisabledException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype)
                }
            }),
            (Ys = class e extends Ie {
                constructor(t) {
                    super({
                        name: 'IDPRejectedClaimException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'IDPRejectedClaimException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype)
                }
            }),
            (Js = class e extends Ie {
                constructor(t) {
                    super({
                        name: 'InvalidIdentityTokenException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'InvalidIdentityTokenException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype)
                }
            }),
            (Xs = class e extends Ie {
                constructor(t) {
                    super({
                        name: 'IDPCommunicationErrorException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'IDPCommunicationErrorException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype)
                }
            }),
            (Qs = class e extends Ie {
                constructor(t) {
                    super({
                        name: 'InvalidAuthorizationMessageException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'InvalidAuthorizationMessageException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype)
                }
            }),
            (Tn = (e) => ({
                ...e,
                ...(e.SecretAccessKey && { SecretAccessKey: H }),
            })),
            (Jp = (e) => ({
                ...e,
                ...(e.Credentials && { Credentials: Tn(e.Credentials) }),
            })),
            (Xp = (e) => ({
                ...e,
                ...(e.SAMLAssertion && { SAMLAssertion: H }),
            })),
            (Qp = (e) => ({
                ...e,
                ...(e.Credentials && { Credentials: Tn(e.Credentials) }),
            })),
            (Zp = (e) => ({
                ...e,
                ...(e.WebIdentityToken && { WebIdentityToken: H }),
            })),
            (eu = (e) => ({
                ...e,
                ...(e.Credentials && { Credentials: Tn(e.Credentials) }),
            })),
            (tu = (e) => ({
                ...e,
                ...(e.Credentials && { Credentials: Tn(e.Credentials) }),
            })),
            (ou = (e) => ({
                ...e,
                ...(e.Credentials && { Credentials: Tn(e.Credentials) }),
            }))
    })
var X0,
    Q0,
    Z0,
    eR,
    tR,
    oR,
    rR,
    nR,
    sR,
    iR,
    aR,
    cR,
    dR,
    mR,
    lR,
    pR,
    ir,
    JM,
    XM,
    QM,
    ZM,
    e1,
    t1,
    o1,
    r1,
    n1,
    s1,
    i1,
    a1,
    c1,
    d1,
    m1,
    l1,
    xd,
    p1,
    u1,
    f1,
    g1,
    h1,
    uR,
    Nu,
    y1,
    x1,
    E1,
    Zs,
    C1,
    S1,
    b1,
    w1,
    A1,
    v1,
    _1,
    R1,
    T1,
    I1,
    P1,
    N1,
    F1,
    O1,
    ve,
    D1,
    ar,
    cr,
    dr,
    mr,
    In,
    k1,
    ru,
    oo,
    L1,
    M1,
    Pn,
    ro,
    Nn,
    Pe,
    nu,
    $1,
    su,
    Ne,
    iu,
    au,
    cu,
    du,
    mu,
    U1,
    B1,
    G1,
    z1,
    lu,
    pu,
    uu,
    fu,
    mt,
    lt,
    gu,
    hu,
    yu,
    xu,
    pt,
    Eu,
    no,
    Fn,
    Cu,
    Su,
    bu,
    wu,
    ut,
    On,
    Au,
    vu,
    Dn,
    kn,
    _u,
    Ru,
    lr,
    Tu,
    Iu,
    Pu,
    ae,
    pr,
    V1,
    so = i(() => {
        he()
        se()
        b()
        sr()
        yd()
        ;(X0 = async (e, t) => {
            let o = cr,
                r
            return (
                (r = pr({ ...n1(e, t), [mr]: k1, [lr]: dr })),
                ar(t, o, '/', void 0, r)
            )
        }),
            (Q0 = async (e, t) => {
                let o = cr,
                    r
                return (
                    (r = pr({ ...s1(e, t), [mr]: L1, [lr]: dr })),
                    ar(t, o, '/', void 0, r)
                )
            }),
            (Z0 = async (e, t) => {
                let o = cr,
                    r
                return (
                    (r = pr({ ...i1(e, t), [mr]: M1, [lr]: dr })),
                    ar(t, o, '/', void 0, r)
                )
            }),
            (eR = async (e, t) => {
                let o = cr,
                    r
                return (
                    (r = pr({ ...a1(e, t), [mr]: $1, [lr]: dr })),
                    ar(t, o, '/', void 0, r)
                )
            }),
            (tR = async (e, t) => {
                let o = cr,
                    r
                return (
                    (r = pr({ ...c1(e, t), [mr]: U1, [lr]: dr })),
                    ar(t, o, '/', void 0, r)
                )
            }),
            (oR = async (e, t) => {
                let o = cr,
                    r
                return (
                    (r = pr({ ...d1(e, t), [mr]: B1, [lr]: dr })),
                    ar(t, o, '/', void 0, r)
                )
            }),
            (rR = async (e, t) => {
                let o = cr,
                    r
                return (
                    (r = pr({ ...m1(e, t), [mr]: G1, [lr]: dr })),
                    ar(t, o, '/', void 0, r)
                )
            }),
            (nR = async (e, t) => {
                let o = cr,
                    r
                return (
                    (r = pr({ ...l1(e, t), [mr]: z1, [lr]: dr })),
                    ar(t, o, '/', void 0, r)
                )
            }),
            (sR = async (e, t) => {
                if (e.statusCode >= 300) return ir(e, t)
                let o = await Pt(e.body, t),
                    r = {}
                return (
                    (r = y1(o.AssumeRoleResult, t)), { $metadata: ve(e), ...r }
                )
            }),
            (iR = async (e, t) => {
                if (e.statusCode >= 300) return ir(e, t)
                let o = await Pt(e.body, t),
                    r = {}
                return (
                    (r = x1(o.AssumeRoleWithSAMLResult, t)),
                    { $metadata: ve(e), ...r }
                )
            }),
            (aR = async (e, t) => {
                if (e.statusCode >= 300) return ir(e, t)
                let o = await Pt(e.body, t),
                    r = {}
                return (
                    (r = E1(o.AssumeRoleWithWebIdentityResult, t)),
                    { $metadata: ve(e), ...r }
                )
            }),
            (cR = async (e, t) => {
                if (e.statusCode >= 300) return ir(e, t)
                let o = await Pt(e.body, t),
                    r = {}
                return (
                    (r = C1(o.DecodeAuthorizationMessageResult, t)),
                    { $metadata: ve(e), ...r }
                )
            }),
            (dR = async (e, t) => {
                if (e.statusCode >= 300) return ir(e, t)
                let o = await Pt(e.body, t),
                    r = {}
                return (
                    (r = w1(o.GetAccessKeyInfoResult, t)),
                    { $metadata: ve(e), ...r }
                )
            }),
            (mR = async (e, t) => {
                if (e.statusCode >= 300) return ir(e, t)
                let o = await Pt(e.body, t),
                    r = {}
                return (
                    (r = A1(o.GetCallerIdentityResult, t)),
                    { $metadata: ve(e), ...r }
                )
            }),
            (lR = async (e, t) => {
                if (e.statusCode >= 300) return ir(e, t)
                let o = await Pt(e.body, t),
                    r = {}
                return (
                    (r = v1(o.GetFederationTokenResult, t)),
                    { $metadata: ve(e), ...r }
                )
            }),
            (pR = async (e, t) => {
                if (e.statusCode >= 300) return ir(e, t)
                let o = await Pt(e.body, t),
                    r = {}
                return (
                    (r = _1(o.GetSessionTokenResult, t)),
                    { $metadata: ve(e), ...r }
                )
            }),
            (ir = async (e, t) => {
                let o = { ...e, body: await YS(e.body, t) },
                    r = V1(e, o.body)
                switch (r) {
                    case 'ExpiredTokenException':
                    case 'com.amazonaws.sts#ExpiredTokenException':
                        throw await JM(o, t)
                    case 'MalformedPolicyDocument':
                    case 'com.amazonaws.sts#MalformedPolicyDocumentException':
                        throw await t1(o, t)
                    case 'PackedPolicyTooLarge':
                    case 'com.amazonaws.sts#PackedPolicyTooLargeException':
                        throw await o1(o, t)
                    case 'RegionDisabledException':
                    case 'com.amazonaws.sts#RegionDisabledException':
                        throw await r1(o, t)
                    case 'IDPRejectedClaim':
                    case 'com.amazonaws.sts#IDPRejectedClaimException':
                        throw await QM(o, t)
                    case 'InvalidIdentityToken':
                    case 'com.amazonaws.sts#InvalidIdentityTokenException':
                        throw await e1(o, t)
                    case 'IDPCommunicationError':
                    case 'com.amazonaws.sts#IDPCommunicationErrorException':
                        throw await XM(o, t)
                    case 'InvalidAuthorizationMessageException':
                    case 'com.amazonaws.sts#InvalidAuthorizationMessageException':
                        throw await ZM(o, t)
                    default:
                        let n = o.body
                        return D1({
                            output: e,
                            parsedBody: n.Error,
                            errorCode: r,
                        })
                }
            }),
            (JM = async (e, t) => {
                let o = e.body,
                    r = S1(o.Error, t),
                    n = new Hs({ $metadata: ve(e), ...r })
                return P(n, o)
            }),
            (XM = async (e, t) => {
                let o = e.body,
                    r = R1(o.Error, t),
                    n = new Xs({ $metadata: ve(e), ...r })
                return P(n, o)
            }),
            (QM = async (e, t) => {
                let o = e.body,
                    r = T1(o.Error, t),
                    n = new Ys({ $metadata: ve(e), ...r })
                return P(n, o)
            }),
            (ZM = async (e, t) => {
                let o = e.body,
                    r = I1(o.Error, t),
                    n = new Qs({ $metadata: ve(e), ...r })
                return P(n, o)
            }),
            (e1 = async (e, t) => {
                let o = e.body,
                    r = P1(o.Error, t),
                    n = new Js({ $metadata: ve(e), ...r })
                return P(n, o)
            }),
            (t1 = async (e, t) => {
                let o = e.body,
                    r = N1(o.Error, t),
                    n = new js({ $metadata: ve(e), ...r })
                return P(n, o)
            }),
            (o1 = async (e, t) => {
                let o = e.body,
                    r = F1(o.Error, t),
                    n = new qs({ $metadata: ve(e), ...r })
                return P(n, o)
            }),
            (r1 = async (e, t) => {
                let o = e.body,
                    r = O1(o.Error, t),
                    n = new Ks({ $metadata: ve(e), ...r })
                return P(n, o)
            }),
            (n1 = (e, t) => {
                let o = {}
                if (
                    (e[no] != null && (o[no] = e[no]),
                    e[Fn] != null && (o[Fn] = e[Fn]),
                    e[lt] != null)
                ) {
                    let r = xd(e[lt], t)
                    e[lt]?.length === 0 && (o.PolicyArns = []),
                        Object.entries(r).forEach(([n, s]) => {
                            let a = `PolicyArns.${n}`
                            o[a] = s
                        })
                }
                if (
                    (e[mt] != null && (o[mt] = e[mt]),
                    e[Ne] != null && (o[Ne] = e[Ne]),
                    e[Dn] != null)
                ) {
                    let r = uR(e[Dn], t)
                    e[Dn]?.length === 0 && (o.Tags = []),
                        Object.entries(r).forEach(([n, s]) => {
                            let a = `Tags.${n}`
                            o[a] = s
                        })
                }
                if (e[_u] != null) {
                    let r = h1(e[_u], t)
                    e[_u]?.length === 0 && (o.TransitiveTagKeys = []),
                        Object.entries(r).forEach(([n, s]) => {
                            let a = `TransitiveTagKeys.${n}`
                            o[a] = s
                        })
                }
                if (
                    (e[au] != null && (o[au] = e[au]),
                    e[On] != null && (o[On] = e[On]),
                    e[kn] != null && (o[kn] = e[kn]),
                    e[ut] != null && (o[ut] = e[ut]),
                    e[yu] != null)
                ) {
                    let r = f1(e[yu], t)
                    e[yu]?.length === 0 && (o.ProvidedContexts = []),
                        Object.entries(r).forEach(([n, s]) => {
                            let a = `ProvidedContexts.${n}`
                            o[a] = s
                        })
                }
                return o
            }),
            (s1 = (e, t) => {
                let o = {}
                if (
                    (e[no] != null && (o[no] = e[no]),
                    e[gu] != null && (o[gu] = e[gu]),
                    e[bu] != null && (o[bu] = e[bu]),
                    e[lt] != null)
                ) {
                    let r = xd(e[lt], t)
                    e[lt]?.length === 0 && (o.PolicyArns = []),
                        Object.entries(r).forEach(([n, s]) => {
                            let a = `PolicyArns.${n}`
                            o[a] = s
                        })
                }
                return (
                    e[mt] != null && (o[mt] = e[mt]),
                    e[Ne] != null && (o[Ne] = e[Ne]),
                    o
                )
            }),
            (i1 = (e, t) => {
                let o = {}
                if (
                    (e[no] != null && (o[no] = e[no]),
                    e[Fn] != null && (o[Fn] = e[Fn]),
                    e[Iu] != null && (o[Iu] = e[Iu]),
                    e[xu] != null && (o[xu] = e[xu]),
                    e[lt] != null)
                ) {
                    let r = xd(e[lt], t)
                    e[lt]?.length === 0 && (o.PolicyArns = []),
                        Object.entries(r).forEach(([n, s]) => {
                            let a = `PolicyArns.${n}`
                            o[a] = s
                        })
                }
                return (
                    e[mt] != null && (o[mt] = e[mt]),
                    e[Ne] != null && (o[Ne] = e[Ne]),
                    o
                )
            }),
            (a1 = (e, t) => {
                let o = {}
                return e[cu] != null && (o[cu] = e[cu]), o
            }),
            (c1 = (e, t) => {
                let o = {}
                return e[In] != null && (o[In] = e[In]), o
            }),
            (d1 = (e, t) => ({})),
            (m1 = (e, t) => {
                let o = {}
                if (
                    (e[uu] != null && (o[uu] = e[uu]),
                    e[mt] != null && (o[mt] = e[mt]),
                    e[lt] != null)
                ) {
                    let r = xd(e[lt], t)
                    e[lt]?.length === 0 && (o.PolicyArns = []),
                        Object.entries(r).forEach(([n, s]) => {
                            let a = `PolicyArns.${n}`
                            o[a] = s
                        })
                }
                if ((e[Ne] != null && (o[Ne] = e[Ne]), e[Dn] != null)) {
                    let r = uR(e[Dn], t)
                    e[Dn]?.length === 0 && (o.Tags = []),
                        Object.entries(r).forEach(([n, s]) => {
                            let a = `Tags.${n}`
                            o[a] = s
                        })
                }
                return o
            }),
            (l1 = (e, t) => {
                let o = {}
                return (
                    e[Ne] != null && (o[Ne] = e[Ne]),
                    e[On] != null && (o[On] = e[On]),
                    e[kn] != null && (o[kn] = e[kn]),
                    o
                )
            }),
            (xd = (e, t) => {
                let o = {},
                    r = 1
                for (let n of e) {
                    if (n === null) continue
                    let s = p1(n, t)
                    Object.entries(s).forEach(([a, d]) => {
                        o[`member.${r}.${a}`] = d
                    }),
                        r++
                }
                return o
            }),
            (p1 = (e, t) => {
                let o = {}
                return e[Pu] != null && (o[Pu] = e[Pu]), o
            }),
            (u1 = (e, t) => {
                let o = {}
                return (
                    e[hu] != null && (o[hu] = e[hu]),
                    e[nu] != null && (o[nu] = e[nu]),
                    o
                )
            }),
            (f1 = (e, t) => {
                let o = {},
                    r = 1
                for (let n of e) {
                    if (n === null) continue
                    let s = u1(n, t)
                    Object.entries(s).forEach(([a, d]) => {
                        o[`member.${r}.${a}`] = d
                    }),
                        r++
                }
                return o
            }),
            (g1 = (e, t) => {
                let o = {}
                return (
                    e[pu] != null && (o[pu] = e[pu]),
                    e[Tu] != null && (o[Tu] = e[Tu]),
                    o
                )
            }),
            (h1 = (e, t) => {
                let o = {},
                    r = 1
                for (let n of e) n !== null && ((o[`member.${r}`] = n), r++)
                return o
            }),
            (uR = (e, t) => {
                let o = {},
                    r = 1
                for (let n of e) {
                    if (n === null) continue
                    let s = g1(n, t)
                    Object.entries(s).forEach(([a, d]) => {
                        o[`member.${r}.${a}`] = d
                    }),
                        r++
                }
                return o
            }),
            (Nu = (e, t) => {
                let o = {}
                return (
                    e[ru] != null && (o[ru] = c(e[ru])),
                    e[ro] != null && (o[ro] = c(e[ro])),
                    o
                )
            }),
            (y1 = (e, t) => {
                let o = {}
                return (
                    e[Pe] != null && (o[Pe] = Zs(e[Pe], t)),
                    e[oo] != null && (o[oo] = Nu(e[oo], t)),
                    e[pt] != null && (o[pt] = os(e[pt])),
                    e[ut] != null && (o[ut] = c(e[ut])),
                    o
                )
            }),
            (x1 = (e, t) => {
                let o = {}
                return (
                    e[Pe] != null && (o[Pe] = Zs(e[Pe], t)),
                    e[oo] != null && (o[oo] = Nu(e[oo], t)),
                    e[pt] != null && (o[pt] = os(e[pt])),
                    e[Cu] != null && (o[Cu] = c(e[Cu])),
                    e[Au] != null && (o[Au] = c(e[Au])),
                    e[lu] != null && (o[lu] = c(e[lu])),
                    e[Nn] != null && (o[Nn] = c(e[Nn])),
                    e[fu] != null && (o[fu] = c(e[fu])),
                    e[ut] != null && (o[ut] = c(e[ut])),
                    o
                )
            }),
            (E1 = (e, t) => {
                let o = {}
                return (
                    e[Pe] != null && (o[Pe] = Zs(e[Pe], t)),
                    e[wu] != null && (o[wu] = c(e[wu])),
                    e[oo] != null && (o[oo] = Nu(e[oo], t)),
                    e[pt] != null && (o[pt] = os(e[pt])),
                    e[Eu] != null && (o[Eu] = c(e[Eu])),
                    e[Nn] != null && (o[Nn] = c(e[Nn])),
                    e[ut] != null && (o[ut] = c(e[ut])),
                    o
                )
            }),
            (Zs = (e, t) => {
                let o = {}
                return (
                    e[In] != null && (o[In] = c(e[In])),
                    e[Su] != null && (o[Su] = c(e[Su])),
                    e[vu] != null && (o[vu] = c(e[vu])),
                    e[iu] != null && (o[iu] = T($C(e[iu]))),
                    o
                )
            }),
            (C1 = (e, t) => {
                let o = {}
                return e[su] != null && (o[su] = c(e[su])), o
            }),
            (S1 = (e, t) => {
                let o = {}
                return e[ae] != null && (o[ae] = c(e[ae])), o
            }),
            (b1 = (e, t) => {
                let o = {}
                return (
                    e[mu] != null && (o[mu] = c(e[mu])),
                    e[ro] != null && (o[ro] = c(e[ro])),
                    o
                )
            }),
            (w1 = (e, t) => {
                let o = {}
                return e[Pn] != null && (o[Pn] = c(e[Pn])), o
            }),
            (A1 = (e, t) => {
                let o = {}
                return (
                    e[Ru] != null && (o[Ru] = c(e[Ru])),
                    e[Pn] != null && (o[Pn] = c(e[Pn])),
                    e[ro] != null && (o[ro] = c(e[ro])),
                    o
                )
            }),
            (v1 = (e, t) => {
                let o = {}
                return (
                    e[Pe] != null && (o[Pe] = Zs(e[Pe], t)),
                    e[du] != null && (o[du] = b1(e[du], t)),
                    e[pt] != null && (o[pt] = os(e[pt])),
                    o
                )
            }),
            (_1 = (e, t) => {
                let o = {}
                return e[Pe] != null && (o[Pe] = Zs(e[Pe], t)), o
            }),
            (R1 = (e, t) => {
                let o = {}
                return e[ae] != null && (o[ae] = c(e[ae])), o
            }),
            (T1 = (e, t) => {
                let o = {}
                return e[ae] != null && (o[ae] = c(e[ae])), o
            }),
            (I1 = (e, t) => {
                let o = {}
                return e[ae] != null && (o[ae] = c(e[ae])), o
            }),
            (P1 = (e, t) => {
                let o = {}
                return e[ae] != null && (o[ae] = c(e[ae])), o
            }),
            (N1 = (e, t) => {
                let o = {}
                return e[ae] != null && (o[ae] = c(e[ae])), o
            }),
            (F1 = (e, t) => {
                let o = {}
                return e[ae] != null && (o[ae] = c(e[ae])), o
            }),
            (O1 = (e, t) => {
                let o = {}
                return e[ae] != null && (o[ae] = c(e[ae])), o
            }),
            (ve = (e) => ({
                httpStatusCode: e.statusCode,
                requestId:
                    e.headers['x-amzn-requestid'] ??
                    e.headers['x-amzn-request-id'] ??
                    e.headers['x-amz-request-id'],
                extendedRequestId: e.headers['x-amz-id-2'],
                cfId: e.headers['x-amz-cf-id'],
            })),
            (D1 = Ao(Ie)),
            (ar = async (e, t, o, r, n) => {
                let {
                        hostname: s,
                        protocol: a = 'https',
                        port: d,
                        path: m,
                    } = await e.endpoint(),
                    l = {
                        protocol: a,
                        hostname: s,
                        port: d,
                        method: 'POST',
                        path: m.endsWith('/') ? m.slice(0, -1) + o : m + o,
                        headers: t,
                    }
                return (
                    r !== void 0 && (l.hostname = r),
                    n !== void 0 && (l.body = n),
                    new X(l)
                )
            }),
            (cr = { 'content-type': 'application/x-www-form-urlencoded' }),
            (dr = '2011-06-15'),
            (mr = 'Action'),
            (In = 'AccessKeyId'),
            (k1 = 'AssumeRole'),
            (ru = 'AssumedRoleId'),
            (oo = 'AssumedRoleUser'),
            (L1 = 'AssumeRoleWithSAML'),
            (M1 = 'AssumeRoleWithWebIdentity'),
            (Pn = 'Account'),
            (ro = 'Arn'),
            (Nn = 'Audience'),
            (Pe = 'Credentials'),
            (nu = 'ContextAssertion'),
            ($1 = 'DecodeAuthorizationMessage'),
            (su = 'DecodedMessage'),
            (Ne = 'DurationSeconds'),
            (iu = 'Expiration'),
            (au = 'ExternalId'),
            (cu = 'EncodedMessage'),
            (du = 'FederatedUser'),
            (mu = 'FederatedUserId'),
            (U1 = 'GetAccessKeyInfo'),
            (B1 = 'GetCallerIdentity'),
            (G1 = 'GetFederationToken'),
            (z1 = 'GetSessionToken'),
            (lu = 'Issuer'),
            (pu = 'Key'),
            (uu = 'Name'),
            (fu = 'NameQualifier'),
            (mt = 'Policy'),
            (lt = 'PolicyArns'),
            (gu = 'PrincipalArn'),
            (hu = 'ProviderArn'),
            (yu = 'ProvidedContexts'),
            (xu = 'ProviderId'),
            (pt = 'PackedPolicySize'),
            (Eu = 'Provider'),
            (no = 'RoleArn'),
            (Fn = 'RoleSessionName'),
            (Cu = 'Subject'),
            (Su = 'SecretAccessKey'),
            (bu = 'SAMLAssertion'),
            (wu = 'SubjectFromWebIdentityToken'),
            (ut = 'SourceIdentity'),
            (On = 'SerialNumber'),
            (Au = 'SubjectType'),
            (vu = 'SessionToken'),
            (Dn = 'Tags'),
            (kn = 'TokenCode'),
            (_u = 'TransitiveTagKeys'),
            (Ru = 'UserId'),
            (lr = 'Version'),
            (Tu = 'Value'),
            (Iu = 'WebIdentityToken'),
            (Pu = 'arn'),
            (ae = 'message'),
            (pr = (e) =>
                Object.entries(e)
                    .map(([t, o]) => Sr(t) + '=' + Sr(o))
                    .join('&')),
            (V1 = (e, t) => {
                if (t.Error?.Code !== void 0) return t.Error.Code
                if (e.statusCode == 404) return 'NotFound'
            })
    })
var Dr,
    Ed = i(() => {
        _()
        R()
        b()
        Mt()
        sr()
        so()
        Dr = class extends (
            h
                .classBuilder()
                .ep(we)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSSecurityTokenServiceV20110615', 'AssumeRole', {})
                .n('STSClient', 'AssumeRoleCommand')
                .f(void 0, Jp)
                .ser(X0)
                .de(sR)
                .build()
        ) {}
    })
var ei,
    Fu = i(() => {
        _()
        R()
        b()
        Mt()
        sr()
        so()
        ei = class extends (
            h
                .classBuilder()
                .ep(we)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSSecurityTokenServiceV20110615', 'AssumeRoleWithSAML', {})
                .n('STSClient', 'AssumeRoleWithSAMLCommand')
                .f(Xp, Qp)
                .ser(Q0)
                .de(iR)
                .build()
        ) {}
    })
var kr,
    Cd = i(() => {
        _()
        R()
        b()
        Mt()
        sr()
        so()
        kr = class extends (
            h
                .classBuilder()
                .ep(we)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s(
                    'AWSSecurityTokenServiceV20110615',
                    'AssumeRoleWithWebIdentity',
                    {}
                )
                .n('STSClient', 'AssumeRoleWithWebIdentityCommand')
                .f(Zp, eu)
                .ser(Z0)
                .de(aR)
                .build()
        ) {}
    })
var ti,
    Ou = i(() => {
        _()
        R()
        b()
        Mt()
        so()
        ti = class extends (
            h
                .classBuilder()
                .ep(we)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s(
                    'AWSSecurityTokenServiceV20110615',
                    'DecodeAuthorizationMessage',
                    {}
                )
                .n('STSClient', 'DecodeAuthorizationMessageCommand')
                .f(void 0, void 0)
                .ser(eR)
                .de(cR)
                .build()
        ) {}
    })
var oi,
    Du = i(() => {
        _()
        R()
        b()
        Mt()
        so()
        oi = class extends (
            h
                .classBuilder()
                .ep(we)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSSecurityTokenServiceV20110615', 'GetAccessKeyInfo', {})
                .n('STSClient', 'GetAccessKeyInfoCommand')
                .f(void 0, void 0)
                .ser(tR)
                .de(dR)
                .build()
        ) {}
    })
var ri,
    ku = i(() => {
        _()
        R()
        b()
        Mt()
        so()
        ri = class extends (
            h
                .classBuilder()
                .ep(we)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSSecurityTokenServiceV20110615', 'GetCallerIdentity', {})
                .n('STSClient', 'GetCallerIdentityCommand')
                .f(void 0, void 0)
                .ser(oR)
                .de(mR)
                .build()
        ) {}
    })
var ni,
    Lu = i(() => {
        _()
        R()
        b()
        Mt()
        sr()
        so()
        ni = class extends (
            h
                .classBuilder()
                .ep(we)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSSecurityTokenServiceV20110615', 'GetFederationToken', {})
                .n('STSClient', 'GetFederationTokenCommand')
                .f(void 0, tu)
                .ser(rR)
                .de(lR)
                .build()
        ) {}
    })
var si,
    Mu = i(() => {
        _()
        R()
        b()
        Mt()
        sr()
        so()
        si = class extends (
            h
                .classBuilder()
                .ep(we)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSSecurityTokenServiceV20110615', 'GetSessionToken', {})
                .n('STSClient', 'GetSessionTokenCommand')
                .f(void 0, ou)
                .ser(nR)
                .de(pR)
                .build()
        ) {}
    })
var W1,
    Sd,
    fR = i(() => {
        b()
        Ed()
        Fu()
        Cd()
        Ou()
        Du()
        ku()
        Lu()
        Mu()
        Ws()
        ;(W1 = {
            AssumeRoleCommand: Dr,
            AssumeRoleWithSAMLCommand: ei,
            AssumeRoleWithWebIdentityCommand: kr,
            DecodeAuthorizationMessageCommand: ti,
            GetAccessKeyInfoCommand: oi,
            GetCallerIdentityCommand: ri,
            GetFederationTokenCommand: ni,
            GetSessionTokenCommand: si,
        }),
            (Sd = class extends Lt {})
        wo(W1, Sd)
    })
var gR = i(() => {
    Ed()
    Fu()
    Cd()
    Ou()
    Du()
    ku()
    Lu()
    Mu()
})
var hR = i(() => {
    sr()
})
var yR,
    xR,
    ER,
    CR,
    SR,
    bR,
    wR = i(() => {
        _e()
        Ed()
        Cd()
        ;(yR = 'us-east-1'),
            (xR = (e) => {
                if (typeof e?.Arn == 'string') {
                    let t = e.Arn.split(':')
                    if (t.length > 4 && t[4] !== '') return t[4]
                }
            }),
            (ER = async (e, t, o) => {
                let r = typeof e == 'function' ? await e() : e,
                    n = typeof t == 'function' ? await t() : t
                return (
                    o?.debug?.(
                        '@aws-sdk/client-sts::resolveRegion',
                        'accepting first of:',
                        `${r} (provider)`,
                        `${n} (parent client)`,
                        `${yR} (STS default)`
                    ),
                    r ?? n ?? yR
                )
            }),
            (CR = (e, t) => {
                let o, r
                return async (n, s) => {
                    if (((r = n), !o)) {
                        let {
                                logger: g = e?.parentClientConfig?.logger,
                                region: u,
                                requestHandler: C = e?.parentClientConfig
                                    ?.requestHandler,
                                credentialProviderLogger: w,
                            } = e,
                            v = await ER(u, e?.parentClientConfig?.region, w),
                            U = !bR(C)
                        o = new t({
                            credentialDefaultProvider: () => async () => r,
                            region: v,
                            requestHandler: U ? C : void 0,
                            logger: g,
                        })
                    }
                    let { Credentials: a, AssumedRoleUser: d } = await o.send(
                        new Dr(s)
                    )
                    if (!a || !a.AccessKeyId || !a.SecretAccessKey)
                        throw new Error(
                            `Invalid response from STS.assumeRole call with role ${s.RoleArn}`
                        )
                    let m = xR(d),
                        l = {
                            accessKeyId: a.AccessKeyId,
                            secretAccessKey: a.SecretAccessKey,
                            sessionToken: a.SessionToken,
                            expiration: a.Expiration,
                            ...(a.CredentialScope && {
                                credentialScope: a.CredentialScope,
                            }),
                            ...(m && { accountId: m }),
                        }
                    return J(l, 'CREDENTIALS_STS_ASSUME_ROLE', 'i'), l
                }
            }),
            (SR = (e, t) => {
                let o
                return async (r) => {
                    if (!o) {
                        let {
                                logger: m = e?.parentClientConfig?.logger,
                                region: l,
                                requestHandler: g = e?.parentClientConfig
                                    ?.requestHandler,
                                credentialProviderLogger: u,
                            } = e,
                            C = await ER(l, e?.parentClientConfig?.region, u),
                            w = !bR(g)
                        o = new t({
                            region: C,
                            requestHandler: w ? g : void 0,
                            logger: m,
                        })
                    }
                    let { Credentials: n, AssumedRoleUser: s } = await o.send(
                        new kr(r)
                    )
                    if (!n || !n.AccessKeyId || !n.SecretAccessKey)
                        throw new Error(
                            `Invalid response from STS.assumeRoleWithWebIdentity call with role ${r.RoleArn}`
                        )
                    let a = xR(s),
                        d = {
                            accessKeyId: n.AccessKeyId,
                            secretAccessKey: n.SecretAccessKey,
                            sessionToken: n.SessionToken,
                            expiration: n.Expiration,
                            ...(n.CredentialScope && {
                                credentialScope: n.CredentialScope,
                            }),
                            ...(a && { accountId: a }),
                        }
                    return (
                        a && J(d, 'RESOLVED_ACCOUNT_ID', 'T'),
                        J(d, 'CREDENTIALS_STS_ASSUME_ROLE_WEB_ID', 'k'),
                        d
                    )
                }
            }),
            (bR = (e) => e?.metadata?.handlerProtocol === 'h2')
    })
var AR,
    vR,
    _R,
    H1,
    RR = i(() => {
        wR()
        Ws()
        ;(AR = (e, t) =>
            t
                ? class extends e {
                      constructor(r) {
                          super(r)
                          for (let n of t) this.middlewareStack.use(n)
                      }
                  }
                : e),
            (vR = (e = {}, t) => CR(e, AR(Lt, t))),
            (_R = (e = {}, t) => SR(e, AR(Lt, t))),
            (H1 = (e) => (t) =>
                e({
                    roleAssumer: vR(t),
                    roleAssumerWithWebIdentity: _R(t),
                    ...t,
                }))
    })
var $u = {}
Ue($u, {
    $Command: () => h,
    AssumeRoleCommand: () => Dr,
    AssumeRoleResponseFilterSensitiveLog: () => Jp,
    AssumeRoleWithSAMLCommand: () => ei,
    AssumeRoleWithSAMLRequestFilterSensitiveLog: () => Xp,
    AssumeRoleWithSAMLResponseFilterSensitiveLog: () => Qp,
    AssumeRoleWithWebIdentityCommand: () => kr,
    AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => Zp,
    AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => eu,
    CredentialsFilterSensitiveLog: () => Tn,
    DecodeAuthorizationMessageCommand: () => ti,
    ExpiredTokenException: () => Hs,
    GetAccessKeyInfoCommand: () => oi,
    GetCallerIdentityCommand: () => ri,
    GetFederationTokenCommand: () => ni,
    GetFederationTokenResponseFilterSensitiveLog: () => tu,
    GetSessionTokenCommand: () => si,
    GetSessionTokenResponseFilterSensitiveLog: () => ou,
    IDPCommunicationErrorException: () => Xs,
    IDPRejectedClaimException: () => Ys,
    InvalidAuthorizationMessageException: () => Qs,
    InvalidIdentityTokenException: () => Js,
    MalformedPolicyDocumentException: () => js,
    PackedPolicyTooLargeException: () => qs,
    RegionDisabledException: () => Ks,
    STS: () => Sd,
    STSClient: () => Lt,
    STSServiceException: () => Ie,
    __Client: () => je,
    decorateDefaultCredentialProvider: () => H1,
    getDefaultRoleAssumer: () => vR,
    getDefaultRoleAssumerWithWebIdentity: () => _R,
})
var Uu = i(() => {
    Ws()
    fR()
    gR()
    hR()
    RR()
    yd()
})
var IR,
    j1,
    q1,
    PR,
    TR,
    NR = i(() => {
        _e()
        Q()
        xt()
        m0()
        Bu()
        ;(IR = (e, { profile: t = 'default', logger: o } = {}) =>
            !!e &&
            typeof e == 'object' &&
            typeof e.role_arn == 'string' &&
            ['undefined', 'string'].indexOf(typeof e.role_session_name) > -1 &&
            ['undefined', 'string'].indexOf(typeof e.external_id) > -1 &&
            ['undefined', 'string'].indexOf(typeof e.mfa_serial) > -1 &&
            (j1(e, { profile: t, logger: o }) ||
                q1(e, { profile: t, logger: o }))),
            (j1 = (e, { profile: t, logger: o }) => {
                let r =
                    typeof e.source_profile == 'string' &&
                    typeof e.credential_source > 'u'
                return (
                    r &&
                        o?.debug?.(
                            `    ${t} isAssumeRoleWithSourceProfile source_profile=${e.source_profile}`
                        ),
                    r
                )
            }),
            (q1 = (e, { profile: t, logger: o }) => {
                let r =
                    typeof e.credential_source == 'string' &&
                    typeof e.source_profile > 'u'
                return (
                    r &&
                        o?.debug?.(
                            `    ${t} isCredentialSourceProfile credential_source=${e.credential_source}`
                        ),
                    r
                )
            }),
            (PR = async (e, t, o, r = {}) => {
                o.logger?.debug(
                    '@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)'
                )
                let n = t[e]
                if (!o.roleAssumer) {
                    let { getDefaultRoleAssumer: d } =
                        await Promise.resolve().then(() => (Uu(), $u))
                    o.roleAssumer = d(
                        {
                            ...o.clientConfig,
                            credentialProviderLogger: o.logger,
                            parentClientConfig: o?.parentClientConfig,
                        },
                        o.clientPlugins
                    )
                }
                let { source_profile: s } = n
                if (s && s in r)
                    throw new $(
                        `Detected a cycle attempting to resolve credentials for profile ${tt(o)}. Profiles visited: ` +
                            Object.keys(r).join(', '),
                        { logger: o.logger }
                    )
                o.logger?.debug(
                    `@aws-sdk/credential-provider-ini - finding credential resolver using ${s ? `source_profile=[${s}]` : `profile=[${e}]`}`
                )
                let a = s
                    ? bd(s, t, o, { ...r, [s]: !0 }, TR(t[s] ?? {}))
                    : (await d0(n.credential_source, e, o.logger)(o))()
                if (TR(n))
                    return a.then((d) =>
                        J(d, 'CREDENTIALS_PROFILE_SOURCE_PROFILE', 'o')
                    )
                {
                    let d = {
                            RoleArn: n.role_arn,
                            RoleSessionName:
                                n.role_session_name ||
                                `aws-sdk-js-${Date.now()}`,
                            ExternalId: n.external_id,
                            DurationSeconds: parseInt(
                                n.duration_seconds || '3600',
                                10
                            ),
                        },
                        { mfa_serial: m } = n
                    if (m) {
                        if (!o.mfaCodeProvider)
                            throw new $(
                                `Profile ${e} requires multi-factor authentication, but no MFA code callback was provided.`,
                                { logger: o.logger, tryNextLink: !1 }
                            )
                        ;(d.SerialNumber = m),
                            (d.TokenCode = await o.mfaCodeProvider(m))
                    }
                    let l = await a
                    return o
                        .roleAssumer(l, d)
                        .then((g) =>
                            J(g, 'CREDENTIALS_PROFILE_SOURCE_PROFILE', 'o')
                        )
                }
            }),
            (TR = (e) => !e.role_arn && !!e.credential_source)
    })
var FR,
    OR = i(() => {
        _e()
        FR = (e, t, o) => {
            if (t.Version !== 1)
                throw Error(
                    `Profile ${e} credential_process did not return Version 1.`
                )
            if (t.AccessKeyId === void 0 || t.SecretAccessKey === void 0)
                throw Error(
                    `Profile ${e} credential_process returned invalid credentials.`
                )
            if (t.Expiration) {
                let s = new Date()
                if (new Date(t.Expiration) < s)
                    throw Error(
                        `Profile ${e} credential_process returned expired credentials.`
                    )
            }
            let r = t.AccountId
            !r && o?.[e]?.aws_account_id && (r = o[e].aws_account_id)
            let n = {
                accessKeyId: t.AccessKeyId,
                secretAccessKey: t.SecretAccessKey,
                ...(t.SessionToken && { sessionToken: t.SessionToken }),
                ...(t.Expiration && { expiration: new Date(t.Expiration) }),
                ...(t.CredentialScope && {
                    credentialScope: t.CredentialScope,
                }),
                ...(r && { accountId: r }),
            }
            return J(n, 'CREDENTIALS_PROCESS', 'w'), n
        }
    })
import { exec as K1 } from 'child_process'
import { promisify as Y1 } from 'util'
var DR,
    kR = i(() => {
        Q()
        OR()
        DR = async (e, t, o) => {
            let r = t[e]
            if (t[e]) {
                let n = r.credential_process
                if (n !== void 0) {
                    let s = Y1(K1)
                    try {
                        let { stdout: a } = await s(n),
                            d
                        try {
                            d = JSON.parse(a.trim())
                        } catch {
                            throw Error(
                                `Profile ${e} credential_process returned invalid JSON.`
                            )
                        }
                        return FR(e, d, t)
                    } catch (a) {
                        throw new $(a.message, { logger: o })
                    }
                } else
                    throw new $(
                        `Profile ${e} did not contain credential_process.`,
                        { logger: o }
                    )
            } else
                throw new $(
                    `Profile ${e} could not be found in shared credentials file.`,
                    { logger: o }
                )
        }
    })
var J1,
    LR = i(() => {
        xt()
        kR()
        J1 =
            (e = {}) =>
            async () => {
                e.logger?.debug(
                    '@aws-sdk/credential-provider-process - fromProcess'
                )
                let t = await Uo(e)
                return DR(tt(e), t, e.logger)
            }
    })
var Gu = {}
Ue(Gu, { fromProcess: () => J1 })
var zu = i(() => {
    LR()
})
var MR,
    $R,
    UR = i(() => {
        _e()
        ;(MR = (e) =>
            !!e &&
            typeof e == 'object' &&
            typeof e.credential_process == 'string'),
            ($R = async (e, t) =>
                Promise.resolve()
                    .then(() => (zu(), Gu))
                    .then(({ fromProcess: o }) =>
                        o({ ...e, profile: t })().then((r) =>
                            J(r, 'CREDENTIALS_PROFILE_PROCESS', 'v')
                        )
                    ))
    })
var BR,
    GR,
    zR = i(() => {
        _e()
        ;(BR = async (e, t, o = {}) => {
            let { fromSSO: r } = await Promise.resolve().then(() => (Hp(), Wp))
            return r({ profile: e, logger: o.logger })().then((n) =>
                t.sso_session
                    ? J(n, 'CREDENTIALS_PROFILE_SSO', 'r')
                    : J(n, 'CREDENTIALS_PROFILE_SSO_LEGACY', 't')
            )
        }),
            (GR = (e) =>
                e &&
                (typeof e.sso_start_url == 'string' ||
                    typeof e.sso_account_id == 'string' ||
                    typeof e.sso_session == 'string' ||
                    typeof e.sso_region == 'string' ||
                    typeof e.sso_role_name == 'string'))
    })
var Vu,
    Wu,
    VR = i(() => {
        _e()
        ;(Vu = (e) =>
            !!e &&
            typeof e == 'object' &&
            typeof e.aws_access_key_id == 'string' &&
            typeof e.aws_secret_access_key == 'string' &&
            ['undefined', 'string'].indexOf(typeof e.aws_session_token) > -1 &&
            ['undefined', 'string'].indexOf(typeof e.aws_account_id) > -1),
            (Wu = async (e, t) => {
                t?.logger?.debug(
                    '@aws-sdk/credential-provider-ini - resolveStaticCredentials'
                )
                let o = {
                    accessKeyId: e.aws_access_key_id,
                    secretAccessKey: e.aws_secret_access_key,
                    sessionToken: e.aws_session_token,
                    ...(e.aws_credential_scope && {
                        credentialScope: e.aws_credential_scope,
                    }),
                    ...(e.aws_account_id && { accountId: e.aws_account_id }),
                }
                return J(o, 'CREDENTIALS_PROFILE', 'n')
            })
    })
var Hu,
    ju = i(() => {
        Hu = (e) => async () => {
            e.logger?.debug(
                '@aws-sdk/credential-provider-web-identity - fromWebToken'
            )
            let {
                    roleArn: t,
                    roleSessionName: o,
                    webIdentityToken: r,
                    providerId: n,
                    policyArns: s,
                    policy: a,
                    durationSeconds: d,
                } = e,
                { roleAssumerWithWebIdentity: m } = e
            if (!m) {
                let { getDefaultRoleAssumerWithWebIdentity: l } =
                    await Promise.resolve().then(() => (Uu(), $u))
                m = l(
                    {
                        ...e.clientConfig,
                        credentialProviderLogger: e.logger,
                        parentClientConfig: e.parentClientConfig,
                    },
                    e.clientPlugins
                )
            }
            return m({
                RoleArn: t,
                RoleSessionName: o ?? `aws-sdk-js-session-${Date.now()}`,
                WebIdentityToken: r,
                ProviderId: n,
                PolicyArns: s,
                Policy: a,
                DurationSeconds: d,
            })
        }
    })
import { readFileSync as X1 } from 'fs'
var WR,
    Q1,
    Z1,
    e$,
    HR = i(() => {
        _e()
        Q()
        ju()
        ;(WR = 'AWS_WEB_IDENTITY_TOKEN_FILE'),
            (Q1 = 'AWS_ROLE_ARN'),
            (Z1 = 'AWS_ROLE_SESSION_NAME'),
            (e$ =
                (e = {}) =>
                async () => {
                    e.logger?.debug(
                        '@aws-sdk/credential-provider-web-identity - fromTokenFile'
                    )
                    let t = e?.webIdentityTokenFile ?? process.env[WR],
                        o = e?.roleArn ?? process.env[Q1],
                        r = e?.roleSessionName ?? process.env[Z1]
                    if (!t || !o)
                        throw new $(
                            'Web identity configuration not specified',
                            { logger: e.logger }
                        )
                    let n = await Hu({
                        ...e,
                        webIdentityToken: X1(t, { encoding: 'ascii' }),
                        roleArn: o,
                        roleSessionName: r,
                    })()
                    return (
                        t === process.env[WR] &&
                            J(n, 'CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN', 'h'),
                        n
                    )
                })
    })
var qu = {}
Ue(qu, { fromTokenFile: () => e$, fromWebToken: () => Hu })
var Ku = i(() => {
    HR()
    ju()
})
var jR,
    qR,
    KR = i(() => {
        _e()
        ;(jR = (e) =>
            !!e &&
            typeof e == 'object' &&
            typeof e.web_identity_token_file == 'string' &&
            typeof e.role_arn == 'string' &&
            ['undefined', 'string'].indexOf(typeof e.role_session_name) > -1),
            (qR = async (e, t) =>
                Promise.resolve()
                    .then(() => (Ku(), qu))
                    .then(({ fromTokenFile: o }) =>
                        o({
                            webIdentityTokenFile: e.web_identity_token_file,
                            roleArn: e.role_arn,
                            roleSessionName: e.role_session_name,
                            roleAssumerWithWebIdentity:
                                t.roleAssumerWithWebIdentity,
                            logger: t.logger,
                            parentClientConfig: t.parentClientConfig,
                        })().then((r) =>
                            J(r, 'CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN', 'q')
                        )
                    ))
    })
var bd,
    Bu = i(() => {
        Q()
        NR()
        UR()
        zR()
        VR()
        KR()
        bd = async (e, t, o, r = {}, n = !1) => {
            let s = t[e]
            if (Object.keys(r).length > 0 && Vu(s)) return Wu(s, o)
            if (n || IR(s, { profile: e, logger: o.logger }))
                return PR(e, t, o, r)
            if (Vu(s)) return Wu(s, o)
            if (jR(s)) return qR(s, o)
            if (MR(s)) return $R(o, e)
            if (GR(s)) return await BR(e, s, o)
            throw new $(
                `Could not resolve credentials using profile: [${e}] in configuration/credentials file(s).`,
                { logger: o.logger }
            )
        }
    })
var t$,
    YR = i(() => {
        xt()
        Bu()
        t$ =
            (e = {}) =>
            async () => {
                e.logger?.debug('@aws-sdk/credential-provider-ini - fromIni')
                let t = await Uo(e)
                return bd(tt(e), t, e)
            }
    })
var JR = {}
Ue(JR, { fromIni: () => t$ })
var XR = i(() => {
    YR()
})
var QR,
    Nr,
    o$,
    r$,
    ZR = i(() => {
        Jl()
        Q()
        xt()
        IA()
        ;(QR = !1),
            (Nr = (e = {}) =>
                br(
                    Yt(
                        async () => {
                            if (e.profile ?? process.env[Tl])
                                throw (
                                    (process.env[zc] &&
                                        process.env[Vc] &&
                                        (QR ||
                                            ((e.logger?.warn &&
                                                e.logger?.constructor?.name !==
                                                    'NoOpLogger'
                                                ? e.logger.warn
                                                : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`),
                                            (QR = !0))),
                                    new $(
                                        'AWS_PROFILE is set, skipping fromEnv provider.',
                                        { logger: e.logger, tryNextLink: !0 }
                                    ))
                                )
                            return (
                                e.logger?.debug(
                                    '@aws-sdk/credential-provider-node - defaultProvider::fromEnv'
                                ),
                                Yl(e)()
                            )
                        },
                        async () => {
                            e.logger?.debug(
                                '@aws-sdk/credential-provider-node - defaultProvider::fromSSO'
                            )
                            let {
                                ssoStartUrl: t,
                                ssoAccountId: o,
                                ssoRegion: r,
                                ssoRoleName: n,
                                ssoSession: s,
                            } = e
                            if (!t && !o && !r && !n && !s)
                                throw new $(
                                    'Skipping SSO provider in default chain (inputs do not include SSO fields).',
                                    { logger: e.logger }
                                )
                            let { fromSSO: a } = await Promise.resolve().then(
                                () => (Hp(), Wp)
                            )
                            return a(e)()
                        },
                        async () => {
                            e.logger?.debug(
                                '@aws-sdk/credential-provider-node - defaultProvider::fromIni'
                            )
                            let { fromIni: t } = await Promise.resolve().then(
                                () => (XR(), JR)
                            )
                            return t(e)()
                        },
                        async () => {
                            e.logger?.debug(
                                '@aws-sdk/credential-provider-node - defaultProvider::fromProcess'
                            )
                            let { fromProcess: t } =
                                await Promise.resolve().then(() => (zu(), Gu))
                            return t(e)()
                        },
                        async () => {
                            e.logger?.debug(
                                '@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile'
                            )
                            let { fromTokenFile: t } =
                                await Promise.resolve().then(() => (Ku(), qu))
                            return t(e)()
                        },
                        async () => (
                            e.logger?.debug(
                                '@aws-sdk/credential-provider-node - defaultProvider::remoteProvider'
                            ),
                            (await TA(e))()
                        ),
                        async () => {
                            throw new $(
                                'Could not load credentials from any providers',
                                { tryNextLink: !1, logger: e.logger }
                            )
                        }
                    ),
                    r$,
                    o$
                )),
            (o$ = (e) => e?.expiration !== void 0),
            (r$ = (e) =>
                e?.expiration !== void 0 &&
                e.expiration.getTime() - Date.now() < 3e5)
    })
var Zc = i(() => {
    ZR()
})
function eT(e, t, o, r) {
    function n(s) {
        return s instanceof o
            ? s
            : new o(function (a) {
                  a(s)
              })
    }
    return new (o || (o = Promise))(function (s, a) {
        function d(g) {
            try {
                l(r.next(g))
            } catch (u) {
                a(u)
            }
        }
        function m(g) {
            try {
                l(r.throw(g))
            } catch (u) {
                a(u)
            }
        }
        function l(g) {
            g.done ? s(g.value) : n(g.value).then(d, m)
        }
        l((r = r.apply(e, t || [])).next())
    })
}
function tT(e, t) {
    var o = {
            label: 0,
            sent: function () {
                if (s[0] & 1) throw s[1]
                return s[1]
            },
            trys: [],
            ops: [],
        },
        r,
        n,
        s,
        a = Object.create(
            (typeof Iterator == 'function' ? Iterator : Object).prototype
        )
    return (
        (a.next = d(0)),
        (a.throw = d(1)),
        (a.return = d(2)),
        typeof Symbol == 'function' &&
            (a[Symbol.iterator] = function () {
                return this
            }),
        a
    )
    function d(l) {
        return function (g) {
            return m([l, g])
        }
    }
    function m(l) {
        if (r) throw new TypeError('Generator is already executing.')
        for (; a && ((a = 0), l[0] && (o = 0)), o; )
            try {
                if (
                    ((r = 1),
                    n &&
                        (s =
                            l[0] & 2
                                ? n.return
                                : l[0]
                                  ? n.throw || ((s = n.return) && s.call(n), 0)
                                  : n.next) &&
                        !(s = s.call(n, l[1])).done)
                )
                    return s
                switch (((n = 0), s && (l = [l[0] & 2, s.value]), l[0])) {
                    case 0:
                    case 1:
                        s = l
                        break
                    case 4:
                        return o.label++, { value: l[1], done: !1 }
                    case 5:
                        o.label++, (n = l[1]), (l = [0])
                        continue
                    case 7:
                        ;(l = o.ops.pop()), o.trys.pop()
                        continue
                    default:
                        if (
                            ((s = o.trys),
                            !(s = s.length > 0 && s[s.length - 1]) &&
                                (l[0] === 6 || l[0] === 2))
                        ) {
                            o = 0
                            continue
                        }
                        if (
                            l[0] === 3 &&
                            (!s || (l[1] > s[0] && l[1] < s[3]))
                        ) {
                            o.label = l[1]
                            break
                        }
                        if (l[0] === 6 && o.label < s[1]) {
                            ;(o.label = s[1]), (s = l)
                            break
                        }
                        if (s && o.label < s[2]) {
                            ;(o.label = s[2]), o.ops.push(l)
                            break
                        }
                        s[2] && o.ops.pop(), o.trys.pop()
                        continue
                }
                l = t.call(e, o)
            } catch (g) {
                ;(l = [6, g]), (n = 0)
            } finally {
                r = s = 0
            }
        if (l[0] & 5) throw l[1]
        return { value: l[0] ? l[1] : void 0, done: !0 }
    }
}
function oT(e) {
    var t = typeof Symbol == 'function' && Symbol.iterator,
        o = t && e[t],
        r = 0
    if (o) return o.call(e)
    if (e && typeof e.length == 'number')
        return {
            next: function () {
                return (
                    e && r >= e.length && (e = void 0),
                    { value: e && e[r++], done: !e }
                )
            },
        }
    throw new TypeError(
        t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    )
}
var Yu = i(() => {})
var rT = i(() => {})
import { Buffer as nT } from 'buffer'
var sT,
    Ju = i(() => {
        rT()
        sT = (e, t) => {
            if (typeof e != 'string')
                throw new TypeError(
                    `The "input" argument must be of type string. Received type ${typeof e} (${e})`
                )
            return t ? nT.from(e, t) : nT.from(e)
        }
    })
var Xu,
    Qu = i(() => {
        Ju()
        Xu = (e) => {
            let t = sT(e, 'utf8')
            return new Uint8Array(
                t.buffer,
                t.byteOffset,
                t.byteLength / Uint8Array.BYTES_PER_ELEMENT
            )
        }
    })
var iT = i(() => {
    Qu()
})
var aT = i(() => {
    Ju()
})
var cT = i(() => {
    Qu()
    iT()
    aT()
})
function Zu(e) {
    return e instanceof Uint8Array
        ? e
        : typeof e == 'string'
          ? n$(e)
          : ArrayBuffer.isView(e)
            ? new Uint8Array(
                  e.buffer,
                  e.byteOffset,
                  e.byteLength / Uint8Array.BYTES_PER_ELEMENT
              )
            : new Uint8Array(e)
}
var n$,
    dT = i(() => {
        cT()
        n$ =
            typeof Buffer < 'u' && Buffer.from
                ? function (e) {
                      return Buffer.from(e, 'utf8')
                  }
                : Xu
    })
function ef(e) {
    return typeof e == 'string' ? e.length === 0 : e.byteLength === 0
}
var mT = i(() => {})
function tf(e) {
    return new Uint8Array([
        (e & 4278190080) >> 24,
        (e & 16711680) >> 16,
        (e & 65280) >> 8,
        e & 255,
    ])
}
var lT = i(() => {})
function of(e) {
    if (!Uint32Array.from) {
        for (var t = new Uint32Array(e.length), o = 0; o < e.length; )
            (t[o] = e[o]), (o += 1)
        return t
    }
    return Uint32Array.from(e)
}
var pT = i(() => {})
var rf = i(() => {
    dT()
    mT()
    lT()
    pT()
})
var s$,
    uT = i(() => {
        Yu()
        rf()
        wd()
        s$ = (function () {
            function e() {
                this.crc32 = new Lr()
            }
            return (
                (e.prototype.update = function (t) {
                    ef(t) || this.crc32.update(Zu(t))
                }),
                (e.prototype.digest = function () {
                    return eT(this, void 0, void 0, function () {
                        return tT(this, function (t) {
                            return [2, tf(this.crc32.digest())]
                        })
                    })
                }),
                (e.prototype.reset = function () {
                    this.crc32 = new Lr()
                }),
                e
            )
        })()
    })
var Lr,
    i$,
    a$,
    wd = i(() => {
        Yu()
        rf()
        uT()
        ;(Lr = (function () {
            function e() {
                this.checksum = 4294967295
            }
            return (
                (e.prototype.update = function (t) {
                    var o, r
                    try {
                        for (
                            var n = oT(t), s = n.next();
                            !s.done;
                            s = n.next()
                        ) {
                            var a = s.value
                            this.checksum =
                                (this.checksum >>> 8) ^
                                a$[(this.checksum ^ a) & 255]
                        }
                    } catch (d) {
                        o = { error: d }
                    } finally {
                        try {
                            s && !s.done && (r = n.return) && r.call(n)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return this
                }),
                (e.prototype.digest = function () {
                    return (this.checksum ^ 4294967295) >>> 0
                }),
                e
            )
        })()),
            (i$ = [
                0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615,
                3915621685, 2657392035, 249268274, 2044508324, 3772115230,
                2547177864, 162941995, 2125561021, 3887607047, 2428444049,
                498536548, 1789927666, 4089016648, 2227061214, 450548861,
                1843258603, 4107580753, 2211677639, 325883990, 1684777152,
                4251122042, 2321926636, 335633487, 1661365465, 4195302755,
                2366115317, 997073096, 1281953886, 3579855332, 2724688242,
                1006888145, 1258607687, 3524101629, 2768942443, 901097722,
                1119000684, 3686517206, 2898065728, 853044451, 1172266101,
                3705015759, 2882616665, 651767980, 1373503546, 3369554304,
                3218104598, 565507253, 1454621731, 3485111705, 3099436303,
                671266974, 1594198024, 3322730930, 2970347812, 795835527,
                1483230225, 3244367275, 3060149565, 1994146192, 31158534,
                2563907772, 4023717930, 1907459465, 112637215, 2680153253,
                3904427059, 2013776290, 251722036, 2517215374, 3775830040,
                2137656763, 141376813, 2439277719, 3865271297, 1802195444,
                476864866, 2238001368, 4066508878, 1812370925, 453092731,
                2181625025, 4111451223, 1706088902, 314042704, 2344532202,
                4240017532, 1658658271, 366619977, 2362670323, 4224994405,
                1303535960, 984961486, 2747007092, 3569037538, 1256170817,
                1037604311, 2765210733, 3554079995, 1131014506, 879679996,
                2909243462, 3663771856, 1141124467, 855842277, 2852801631,
                3708648649, 1342533948, 654459306, 3188396048, 3373015174,
                1466479909, 544179635, 3110523913, 3462522015, 1591671054,
                702138776, 2966460450, 3352799412, 1504918807, 783551873,
                3082640443, 3233442989, 3988292384, 2596254646, 62317068,
                1957810842, 3939845945, 2647816111, 81470997, 1943803523,
                3814918930, 2489596804, 225274430, 2053790376, 3826175755,
                2466906013, 167816743, 2097651377, 4027552580, 2265490386,
                503444072, 1762050814, 4150417245, 2154129355, 426522225,
                1852507879, 4275313526, 2312317920, 282753626, 1742555852,
                4189708143, 2394877945, 397917763, 1622183637, 3604390888,
                2714866558, 953729732, 1340076626, 3518719985, 2797360999,
                1068828381, 1219638859, 3624741850, 2936675148, 906185462,
                1090812512, 3747672003, 2825379669, 829329135, 1181335161,
                3412177804, 3160834842, 628085408, 1382605366, 3423369109,
                3138078467, 570562233, 1426400815, 3317316542, 2998733608,
                733239954, 1555261956, 3268935591, 3050360625, 752459403,
                1541320221, 2607071920, 3965973030, 1969922972, 40735498,
                2617837225, 3943577151, 1913087877, 83908371, 2512341634,
                3803740692, 2075208622, 213261112, 2463272603, 3855990285,
                2094854071, 198958881, 2262029012, 4057260610, 1759359992,
                534414190, 2176718541, 4139329115, 1873836001, 414664567,
                2282248934, 4279200368, 1711684554, 285281116, 2405801727,
                4167216745, 1634467795, 376229701, 2685067896, 3608007406,
                1308918612, 956543938, 2808555105, 3495958263, 1231636301,
                1047427035, 2932959818, 3654703836, 1088359270, 936918e3,
                2847714899, 3736837829, 1202900863, 817233897, 3183342108,
                3401237130, 1404277552, 615818150, 3134207493, 3453421203,
                1423857449, 601450431, 3009837614, 3294710456, 1567103746,
                711928724, 3020668471, 3272380065, 1510334235, 755167117,
            ]),
            (a$ = of(i$))
    })
function fT(e) {
    for (let t = 0; t < 8; t++) e[t] ^= 255
    for (let t = 7; t > -1 && (e[t]++, e[t] === 0); t--);
}
var Ln,
    nf = i(() => {
        yo()
        Ln = class e {
            constructor(t) {
                if (((this.bytes = t), t.byteLength !== 8))
                    throw new Error('Int64 buffers must be exactly 8 bytes')
            }
            static fromNumber(t) {
                if (t > 9223372036854776e3 || t < -9223372036854776e3)
                    throw new Error(
                        `${t} is too large (or, if negative, too small) to represent as an Int64`
                    )
                let o = new Uint8Array(8)
                for (
                    let r = 7, n = Math.abs(Math.round(t));
                    r > -1 && n > 0;
                    r--, n /= 256
                )
                    o[r] = n
                return t < 0 && fT(o), new e(o)
            }
            valueOf() {
                let t = this.bytes.slice(0),
                    o = t[0] & 128
                return o && fT(t), parseInt(le(t), 16) * (o ? -1 : 1)
            }
            toString() {
                return String(this.valueOf())
            }
        }
    })
var Ad,
    gT,
    hT,
    c$,
    d$,
    m$,
    l$,
    p$,
    u$,
    f$,
    g$,
    h$,
    sf = i(() => {
        yo()
        nf()
        Ad = class {
            constructor(t, o) {
                ;(this.toUtf8 = t), (this.fromUtf8 = o)
            }
            format(t) {
                let o = []
                for (let s of Object.keys(t)) {
                    let a = this.fromUtf8(s)
                    o.push(
                        Uint8Array.from([a.byteLength]),
                        a,
                        this.formatHeaderValue(t[s])
                    )
                }
                let r = new Uint8Array(o.reduce((s, a) => s + a.byteLength, 0)),
                    n = 0
                for (let s of o) r.set(s, n), (n += s.byteLength)
                return r
            }
            formatHeaderValue(t) {
                switch (t.type) {
                    case 'boolean':
                        return Uint8Array.from([t.value ? 0 : 1])
                    case 'byte':
                        return Uint8Array.from([2, t.value])
                    case 'short':
                        let o = new DataView(new ArrayBuffer(3))
                        return (
                            o.setUint8(0, 3),
                            o.setInt16(1, t.value, !1),
                            new Uint8Array(o.buffer)
                        )
                    case 'integer':
                        let r = new DataView(new ArrayBuffer(5))
                        return (
                            r.setUint8(0, 4),
                            r.setInt32(1, t.value, !1),
                            new Uint8Array(r.buffer)
                        )
                    case 'long':
                        let n = new Uint8Array(9)
                        return (n[0] = 5), n.set(t.value.bytes, 1), n
                    case 'binary':
                        let s = new DataView(
                            new ArrayBuffer(3 + t.value.byteLength)
                        )
                        s.setUint8(0, 6), s.setUint16(1, t.value.byteLength, !1)
                        let a = new Uint8Array(s.buffer)
                        return a.set(t.value, 3), a
                    case 'string':
                        let d = this.fromUtf8(t.value),
                            m = new DataView(new ArrayBuffer(3 + d.byteLength))
                        m.setUint8(0, 7), m.setUint16(1, d.byteLength, !1)
                        let l = new Uint8Array(m.buffer)
                        return l.set(d, 3), l
                    case 'timestamp':
                        let g = new Uint8Array(9)
                        return (
                            (g[0] = 8),
                            g.set(Ln.fromNumber(t.value.valueOf()).bytes, 1),
                            g
                        )
                    case 'uuid':
                        if (!h$.test(t.value))
                            throw new Error(`Invalid UUID received: ${t.value}`)
                        let u = new Uint8Array(17)
                        return (
                            (u[0] = 9),
                            u.set(ec(t.value.replace(/\-/g, '')), 1),
                            u
                        )
                }
            }
            parse(t) {
                let o = {},
                    r = 0
                for (; r < t.byteLength; ) {
                    let n = t.getUint8(r++),
                        s = this.toUtf8(
                            new Uint8Array(t.buffer, t.byteOffset + r, n)
                        )
                    switch (((r += n), t.getUint8(r++))) {
                        case 0:
                            o[s] = { type: hT, value: !0 }
                            break
                        case 1:
                            o[s] = { type: hT, value: !1 }
                            break
                        case 2:
                            o[s] = { type: c$, value: t.getInt8(r++) }
                            break
                        case 3:
                            ;(o[s] = { type: d$, value: t.getInt16(r, !1) }),
                                (r += 2)
                            break
                        case 4:
                            ;(o[s] = { type: m$, value: t.getInt32(r, !1) }),
                                (r += 4)
                            break
                        case 5:
                            ;(o[s] = {
                                type: l$,
                                value: new Ln(
                                    new Uint8Array(
                                        t.buffer,
                                        t.byteOffset + r,
                                        8
                                    )
                                ),
                            }),
                                (r += 8)
                            break
                        case 6:
                            let a = t.getUint16(r, !1)
                            ;(r += 2),
                                (o[s] = {
                                    type: p$,
                                    value: new Uint8Array(
                                        t.buffer,
                                        t.byteOffset + r,
                                        a
                                    ),
                                }),
                                (r += a)
                            break
                        case 7:
                            let d = t.getUint16(r, !1)
                            ;(r += 2),
                                (o[s] = {
                                    type: u$,
                                    value: this.toUtf8(
                                        new Uint8Array(
                                            t.buffer,
                                            t.byteOffset + r,
                                            d
                                        )
                                    ),
                                }),
                                (r += d)
                            break
                        case 8:
                            ;(o[s] = {
                                type: f$,
                                value: new Date(
                                    new Ln(
                                        new Uint8Array(
                                            t.buffer,
                                            t.byteOffset + r,
                                            8
                                        )
                                    ).valueOf()
                                ),
                            }),
                                (r += 8)
                            break
                        case 9:
                            let m = new Uint8Array(
                                t.buffer,
                                t.byteOffset + r,
                                16
                            )
                            ;(r += 16),
                                (o[s] = {
                                    type: g$,
                                    value: `${le(m.subarray(0, 4))}-${le(m.subarray(4, 6))}-${le(m.subarray(6, 8))}-${le(m.subarray(8, 10))}-${le(m.subarray(10))}`,
                                })
                            break
                        default:
                            throw new Error('Unrecognized header type tag')
                    }
                }
                return o
            }
        }
        ;(function (e) {
            ;(e[(e.boolTrue = 0)] = 'boolTrue'),
                (e[(e.boolFalse = 1)] = 'boolFalse'),
                (e[(e.byte = 2)] = 'byte'),
                (e[(e.short = 3)] = 'short'),
                (e[(e.integer = 4)] = 'integer'),
                (e[(e.long = 5)] = 'long'),
                (e[(e.byteArray = 6)] = 'byteArray'),
                (e[(e.string = 7)] = 'string'),
                (e[(e.timestamp = 8)] = 'timestamp'),
                (e[(e.uuid = 9)] = 'uuid')
        })(gT || (gT = {}))
        ;(hT = 'boolean'),
            (c$ = 'byte'),
            (d$ = 'short'),
            (m$ = 'integer'),
            (l$ = 'long'),
            (p$ = 'binary'),
            (u$ = 'string'),
            (f$ = 'timestamp'),
            (g$ = 'uuid'),
            (h$ =
                /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
    })
function xT({ byteLength: e, byteOffset: t, buffer: o }) {
    if (e < y$)
        throw new Error(
            'Provided message too short to accommodate event stream message overhead'
        )
    let r = new DataView(o, t, e),
        n = r.getUint32(0, !1)
    if (e !== n)
        throw new Error(
            'Reported message length does not match received message length'
        )
    let s = r.getUint32(yT, !1),
        a = r.getUint32(ur, !1),
        d = r.getUint32(e - Mr, !1),
        m = new Lr().update(new Uint8Array(o, t, ur))
    if (a !== m.digest())
        throw new Error(
            `The prelude checksum specified in the message (${a}) does not match the calculated CRC32 checksum (${m.digest()})`
        )
    if ((m.update(new Uint8Array(o, t + ur, e - (ur + Mr))), d !== m.digest()))
        throw new Error(
            `The message checksum (${m.digest()}) did not match the expected value of ${d}`
        )
    return {
        headers: new DataView(o, t + ur + Mr, s),
        body: new Uint8Array(o, t + ur + Mr + s, n - s - (ur + Mr + Mr)),
    }
}
var yT,
    ur,
    Mr,
    y$,
    ET = i(() => {
        wd()
        ;(yT = 4), (ur = yT * 2), (Mr = 4), (y$ = ur + Mr * 2)
    })
var vd,
    CT = i(() => {
        wd()
        sf()
        ET()
        vd = class {
            constructor(t, o) {
                ;(this.headerMarshaller = new Ad(t, o)),
                    (this.messageBuffer = []),
                    (this.isEndOfStream = !1)
            }
            feed(t) {
                this.messageBuffer.push(this.decode(t))
            }
            endOfStream() {
                this.isEndOfStream = !0
            }
            getMessage() {
                let t = this.messageBuffer.pop(),
                    o = this.isEndOfStream
                return {
                    getMessage() {
                        return t
                    },
                    isEndOfStream() {
                        return o
                    },
                }
            }
            getAvailableMessages() {
                let t = this.messageBuffer
                this.messageBuffer = []
                let o = this.isEndOfStream
                return {
                    getMessages() {
                        return t
                    },
                    isEndOfStream() {
                        return o
                    },
                }
            }
            encode({ headers: t, body: o }) {
                let r = this.headerMarshaller.format(t),
                    n = r.byteLength + o.byteLength + 16,
                    s = new Uint8Array(n),
                    a = new DataView(s.buffer, s.byteOffset, s.byteLength),
                    d = new Lr()
                return (
                    a.setUint32(0, n, !1),
                    a.setUint32(4, r.byteLength, !1),
                    a.setUint32(8, d.update(s.subarray(0, 8)).digest(), !1),
                    s.set(r, 12),
                    s.set(o, r.byteLength + 12),
                    a.setUint32(
                        n - 4,
                        d.update(s.subarray(8, n - 4)).digest(),
                        !1
                    ),
                    s
                )
            }
            decode(t) {
                let { headers: o, body: r } = xT(t)
                return { headers: this.headerMarshaller.parse(o), body: r }
            }
            formatHeaders(t) {
                return this.headerMarshaller.format(t)
            }
        }
    })
var ST = i(() => {})
var _d,
    bT = i(() => {
        _d = class {
            constructor(t) {
                this.options = t
            }
            [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async *asyncIterator() {
                for await (let t of this.options.inputStream)
                    yield this.options.decoder.decode(t)
            }
        }
    })
var Rd,
    wT = i(() => {
        Rd = class {
            constructor(t) {
                this.options = t
            }
            [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async *asyncIterator() {
                for await (let t of this.options.messageStream)
                    yield this.options.encoder.encode(t)
                this.options.includeEndFrame && (yield new Uint8Array(0))
            }
        }
    })
var Td,
    AT = i(() => {
        Td = class {
            constructor(t) {
                this.options = t
            }
            [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async *asyncIterator() {
                for await (let t of this.options.messageStream) {
                    let o = await this.options.deserializer(t)
                    o !== void 0 && (yield o)
                }
            }
        }
    })
var Id,
    vT = i(() => {
        Id = class {
            constructor(t) {
                this.options = t
            }
            [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async *asyncIterator() {
                for await (let t of this.options.inputStream)
                    yield this.options.serializer(t)
            }
        }
    })
var _T = i(() => {
    CT()
    sf()
    nf()
    ST()
    bT()
    wT()
    AT()
    vT()
})
function RT(e) {
    let t = 0,
        o = 0,
        r = null,
        n = null,
        s = (d) => {
            if (typeof d != 'number')
                throw new Error(
                    'Attempted to allocate an event message where size was not a number: ' +
                        d
                )
            ;(t = d),
                (o = 4),
                (r = new Uint8Array(d)),
                new DataView(r.buffer).setUint32(0, d, !1)
        },
        a = async function* () {
            let d = e[Symbol.asyncIterator]()
            for (;;) {
                let { value: m, done: l } = await d.next()
                if (l) {
                    if (t)
                        if (t === o) yield r
                        else
                            throw new Error('Truncated event message received.')
                    else return
                    return
                }
                let g = m.length,
                    u = 0
                for (; u < g; ) {
                    if (!r) {
                        let w = g - u
                        n || (n = new Uint8Array(4))
                        let v = Math.min(4 - o, w)
                        if (
                            (n.set(m.slice(u, u + v), o),
                            (o += v),
                            (u += v),
                            o < 4)
                        )
                            break
                        s(new DataView(n.buffer).getUint32(0, !1)), (n = null)
                    }
                    let C = Math.min(t - o, g - u)
                    r.set(m.slice(u, u + C), o),
                        (o += C),
                        (u += C),
                        t && t === o && (yield r, (r = null), (t = 0), (o = 0))
                }
            }
        }
    return { [Symbol.asyncIterator]: a }
}
var TT = i(() => {})
function IT(e, t) {
    return async function (o) {
        let { value: r } = o.headers[':message-type']
        if (r === 'error') {
            let n = new Error(
                o.headers[':error-message'].value || 'UnknownError'
            )
            throw ((n.name = o.headers[':error-code'].value), n)
        } else if (r === 'exception') {
            let n = o.headers[':exception-type'].value,
                s = { [n]: o },
                a = await e(s)
            if (a.$unknown) {
                let d = new Error(t(o.body))
                throw ((d.name = n), d)
            }
            throw a[n]
        } else if (r === 'event') {
            let n = { [o.headers[':event-type'].value]: o },
                s = await e(n)
            return s.$unknown ? void 0 : s
        } else
            throw Error(
                `Unrecognizable event type: ${o.headers[':event-type'].value}`
            )
    }
}
var PT = i(() => {})
var ii,
    af = i(() => {
        _T()
        TT()
        PT()
        ii = class {
            constructor({ utf8Encoder: t, utf8Decoder: o }) {
                ;(this.eventStreamCodec = new vd(t, o)), (this.utfEncoder = t)
            }
            deserialize(t, o) {
                let r = RT(t)
                return new Td({
                    messageStream: new _d({
                        inputStream: r,
                        decoder: this.eventStreamCodec,
                    }),
                    deserializer: IT(o, this.utfEncoder),
                })
            }
            serialize(t, o) {
                return new Rd({
                    messageStream: new Id({ inputStream: t, serializer: o }),
                    encoder: this.eventStreamCodec,
                    includeEndFrame: !0,
                })
            }
        }
    })
var NT = i(() => {
    af()
})
var FT = i(() => {
    af()
    NT()
})
async function* OT(e) {
    let t = !1,
        o = !1,
        r = new Array()
    for (
        e.on('error', (n) => {
            if ((t || (t = !0), n)) throw n
        }),
            e.on('data', (n) => {
                r.push(n)
            }),
            e.on('end', () => {
                t = !0
            });
        !o;

    ) {
        let n = await new Promise((s) => setTimeout(() => s(r.shift()), 0))
        n && (yield n), (o = t && r.length === 0)
    }
}
var DT = i(() => {})
import { Readable as x$ } from 'stream'
var Pd,
    cf = i(() => {
        FT()
        DT()
        Pd = class {
            constructor({ utf8Encoder: t, utf8Decoder: o }) {
                this.universalMarshaller = new ii({
                    utf8Decoder: o,
                    utf8Encoder: t,
                })
            }
            deserialize(t, o) {
                let r = typeof t[Symbol.asyncIterator] == 'function' ? t : OT(t)
                return this.universalMarshaller.deserialize(r, o)
            }
            serialize(t, o) {
                return x$.from(this.universalMarshaller.serialize(t, o))
            }
        }
    })
var kT,
    LT = i(() => {
        cf()
        kT = (e) => new Pd(e)
    })
var MT = i(() => {
    cf()
    LT()
})
var qT,
    Bt,
    Gt,
    $n,
    $T,
    ci,
    Mn,
    ai,
    io,
    df,
    UT,
    BT,
    GT,
    KT,
    YT,
    Ut,
    zT,
    VT,
    WT,
    HT,
    jT,
    E$,
    JT,
    XT = i(() => {
        ;(qT = 'required'),
            (Bt = 'fn'),
            (Gt = 'argv'),
            ($n = 'ref'),
            ($T = 'isSet'),
            (ci = 'booleanEquals'),
            (Mn = 'error'),
            (ai = 'endpoint'),
            (io = 'tree'),
            (df = 'PartitionResult'),
            (UT = { [qT]: !1, type: 'String' }),
            (BT = { [qT]: !0, default: !1, type: 'Boolean' }),
            (GT = { [$n]: 'Endpoint' }),
            (KT = { [Bt]: ci, [Gt]: [{ [$n]: 'UseFIPS' }, !0] }),
            (YT = { [Bt]: ci, [Gt]: [{ [$n]: 'UseDualStack' }, !0] }),
            (Ut = {}),
            (zT = { [Bt]: 'getAttr', [Gt]: [{ [$n]: df }, 'supportsFIPS'] }),
            (VT = {
                [Bt]: ci,
                [Gt]: [
                    !0,
                    {
                        [Bt]: 'getAttr',
                        [Gt]: [{ [$n]: df }, 'supportsDualStack'],
                    },
                ],
            }),
            (WT = [KT]),
            (HT = [YT]),
            (jT = [{ [$n]: 'Region' }]),
            (E$ = {
                version: '1.0',
                parameters: {
                    Region: UT,
                    UseDualStack: BT,
                    UseFIPS: BT,
                    Endpoint: UT,
                },
                rules: [
                    {
                        conditions: [{ [Bt]: $T, [Gt]: [GT] }],
                        rules: [
                            {
                                conditions: WT,
                                error: 'Invalid Configuration: FIPS and custom endpoint are not supported',
                                type: Mn,
                            },
                            {
                                conditions: HT,
                                error: 'Invalid Configuration: Dualstack and custom endpoint are not supported',
                                type: Mn,
                            },
                            {
                                endpoint: {
                                    url: GT,
                                    properties: Ut,
                                    headers: Ut,
                                },
                                type: ai,
                            },
                        ],
                        type: io,
                    },
                    {
                        conditions: [{ [Bt]: $T, [Gt]: jT }],
                        rules: [
                            {
                                conditions: [
                                    {
                                        [Bt]: 'aws.partition',
                                        [Gt]: jT,
                                        assign: df,
                                    },
                                ],
                                rules: [
                                    {
                                        conditions: [KT, YT],
                                        rules: [
                                            {
                                                conditions: [
                                                    {
                                                        [Bt]: ci,
                                                        [Gt]: [!0, zT],
                                                    },
                                                    VT,
                                                ],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: 'https://lambda-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                                            properties: Ut,
                                                            headers: Ut,
                                                        },
                                                        type: ai,
                                                    },
                                                ],
                                                type: io,
                                            },
                                            {
                                                error: 'FIPS and DualStack are enabled, but this partition does not support one or both',
                                                type: Mn,
                                            },
                                        ],
                                        type: io,
                                    },
                                    {
                                        conditions: WT,
                                        rules: [
                                            {
                                                conditions: [
                                                    {
                                                        [Bt]: ci,
                                                        [Gt]: [zT, !0],
                                                    },
                                                ],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: 'https://lambda-fips.{Region}.{PartitionResult#dnsSuffix}',
                                                            properties: Ut,
                                                            headers: Ut,
                                                        },
                                                        type: ai,
                                                    },
                                                ],
                                                type: io,
                                            },
                                            {
                                                error: 'FIPS is enabled but this partition does not support FIPS',
                                                type: Mn,
                                            },
                                        ],
                                        type: io,
                                    },
                                    {
                                        conditions: HT,
                                        rules: [
                                            {
                                                conditions: [VT],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: 'https://lambda.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                                            properties: Ut,
                                                            headers: Ut,
                                                        },
                                                        type: ai,
                                                    },
                                                ],
                                                type: io,
                                            },
                                            {
                                                error: 'DualStack is enabled but this partition does not support DualStack',
                                                type: Mn,
                                            },
                                        ],
                                        type: io,
                                    },
                                    {
                                        endpoint: {
                                            url: 'https://lambda.{Region}.{PartitionResult#dnsSuffix}',
                                            properties: Ut,
                                            headers: Ut,
                                        },
                                        type: ai,
                                    },
                                ],
                                type: io,
                            },
                        ],
                        type: io,
                    },
                    {
                        error: 'Invalid Configuration: Missing Region',
                        type: Mn,
                    },
                ],
            }),
            (JT = E$)
    })
var C$,
    QT,
    ZT = i(() => {
        on()
        Tt()
        XT()
        ;(C$ = new Rt({
            size: 50,
            params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'],
        })),
            (QT = (e, t = {}) =>
                C$.get(e, () =>
                    qt(JT, { endpointParams: e, logger: t.logger })
                ))
        Ve.aws = Kt
    })
var eI,
    tI = i(() => {
        he()
        b()
        Rr()
        Wt()
        ze()
        Kl()
        ZT()
        eI = (e) => ({
            apiVersion: '2015-03-31',
            base64Decoder: e?.base64Decoder ?? bt,
            base64Encoder: e?.base64Encoder ?? De,
            disableHostPrefix: e?.disableHostPrefix ?? !1,
            endpointProvider: e?.endpointProvider ?? QT,
            extensions: e?.extensions ?? [],
            httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Kw,
            httpAuthSchemes: e?.httpAuthSchemes ?? [
                {
                    schemeId: 'aws.auth#sigv4',
                    identityProvider: (t) =>
                        t.getIdentityProvider('aws.auth#sigv4'),
                    signer: new We(),
                },
            ],
            logger: e?.logger ?? new et(),
            serviceId: e?.serviceId ?? 'Lambda',
            urlParser: e?.urlParser ?? Le,
            utf8Decoder: e?.utf8Decoder ?? Ee,
            utf8Encoder: e?.utf8Encoder ?? Je,
        })
    })
var oI,
    rI = i(() => {
        Xw()
        he()
        Zc()
        fs()
        Ft()
        MT()
        gs()
        Qt()
        Xt()
        xr()
        hs()
        rt()
        tI()
        b()
        xs()
        b()
        oI = (e) => {
            _o(process.version)
            let t = Xo(e),
                o = () => t().then(vo),
                r = eI(e)
            return (
                Co(process.version),
                {
                    ...r,
                    ...e,
                    runtime: 'node',
                    defaultsMode: t,
                    bodyLengthChecker: e?.bodyLengthChecker ?? Jo,
                    credentialDefaultProvider:
                        e?.credentialDefaultProvider ?? Nr,
                    defaultUserAgentProvider:
                        e?.defaultUserAgentProvider ??
                        Ko({
                            serviceId: r.serviceId,
                            clientVersion: Qw.version,
                        }),
                    eventStreamSerdeProvider: e?.eventStreamSerdeProvider ?? kT,
                    maxAttempts: e?.maxAttempts ?? q(Go),
                    region: e?.region ?? q(Nt, ko),
                    requestHandler: Xe.create(e?.requestHandler ?? o),
                    retryMode:
                        e?.retryMode ??
                        q({
                            ...Vo,
                            default: async () => (await o()).retryMode || Ot,
                        }),
                    sha256: e?.sha256 ?? Dt.bind(null, 'sha256'),
                    streamCollector: e?.streamCollector ?? At,
                    useDualstackEndpoint: e?.useDualstackEndpoint ?? q(Oo),
                    useFipsEndpoint: e?.useFipsEndpoint ?? q(Do),
                    userAgentAppId: e?.userAgentAppId ?? q(Yo),
                }
            )
        }
    })
var nI,
    sI,
    iI = i(() => {
        ;(nI = (e) => {
            let t = e.httpAuthSchemes,
                o = e.httpAuthSchemeProvider,
                r = e.credentials
            return {
                setHttpAuthScheme(n) {
                    let s = t.findIndex((a) => a.schemeId === n.schemeId)
                    s === -1 ? t.push(n) : t.splice(s, 1, n)
                },
                httpAuthSchemes() {
                    return t
                },
                setHttpAuthSchemeProvider(n) {
                    o = n
                },
                httpAuthSchemeProvider() {
                    return o
                },
                setCredentials(n) {
                    r = n
                },
                credentials() {
                    return r
                },
            }
        }),
            (sI = (e) => ({
                httpAuthSchemes: e.httpAuthSchemes(),
                httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
                credentials: e.credentials(),
            }))
    })
var Nd,
    aI,
    cI = i(() => {
        Es()
        se()
        b()
        iI()
        ;(Nd = (e) => e),
            (aI = (e, t) => {
                let o = {
                    ...Nd(Qo(e)),
                    ...Nd(Ro(e)),
                    ...Nd(co(e)),
                    ...Nd(nI(e)),
                }
                return (
                    t.forEach((r) => r.configure(o)),
                    { ...e, ...Zo(o), ...To(o), ...mo(o), ...sI(o) }
                )
            })
    })
var oe,
    Me = i(() => {
        zn()
        Vn()
        Wn()
        cn()
        Ft()
        ee()
        Ib()
        ss()
        _()
        Qt()
        b()
        Kl()
        N()
        rI()
        cI()
        oe = class extends je {
            constructor(...[t]) {
                let o = oI(t || {}),
                    r = Jw(o),
                    n = xo(r),
                    s = zo(n),
                    a = Lo(s),
                    d = a,
                    m = Bo(d),
                    l = Rb(m),
                    g = Yw(l),
                    u = aI(g, t?.extensions || [])
                super(u),
                    (this.config = u),
                    this.middlewareStack.use(No(this.config)),
                    this.middlewareStack.use(Wo(this.config)),
                    this.middlewareStack.use(Mo(this.config)),
                    this.middlewareStack.use(lo(this.config)),
                    this.middlewareStack.use(po(this.config)),
                    this.middlewareStack.use(uo(this.config)),
                    this.middlewareStack.use(
                        fo(this.config, {
                            httpAuthSchemeParametersProvider: qw,
                            identityProviderConfigProvider: async (C) =>
                                new vt({ 'aws.auth#sigv4': C.credentials }),
                        })
                    ),
                    this.middlewareStack.use(go(this.config))
            }
            destroy() {
                super.destroy()
            }
        }
    })
var G,
    Fd = i(() => {
        b()
        G = class e extends It {
            constructor(t) {
                super(t), Object.setPrototypeOf(this, e.prototype)
            }
        }
    })
var di,
    mi,
    li,
    pi,
    ui,
    fi,
    S$,
    gi,
    b$,
    w$,
    A$,
    v$,
    _$,
    R$,
    T$,
    I$,
    P$,
    hi,
    yi,
    xi,
    N$,
    F$,
    O$,
    D$,
    k$,
    L$,
    M$,
    $$,
    U$,
    B$,
    G$,
    Ei,
    z$,
    Ci,
    V$,
    W$,
    Si,
    H$,
    bi,
    wi,
    Ai,
    vi,
    _i,
    Ri,
    Ti,
    Ii,
    Pi,
    Ni,
    Fi,
    Oi,
    Di,
    j$,
    q$,
    ki,
    Li,
    Mi,
    $i,
    Ui,
    Bi,
    Gi,
    zi,
    Vi,
    Wi,
    Hi,
    ji,
    K$,
    mf,
    Y$,
    dI,
    lf,
    pf,
    mI,
    lI,
    pI,
    uI,
    fI,
    gI,
    $e,
    uf,
    ff,
    gf,
    hf,
    yf,
    hI,
    J$,
    xf,
    Ef,
    Cf,
    yI,
    Sf,
    bf,
    wf,
    Fe = i(() => {
        b()
        Fd()
        ;(di = class e extends G {
            constructor(t) {
                super({
                    name: 'InvalidParameterValueException',
                    $fault: 'client',
                    ...t,
                }),
                    (this.name = 'InvalidParameterValueException'),
                    (this.$fault = 'client'),
                    Object.setPrototypeOf(this, e.prototype),
                    (this.Type = t.Type)
            }
        }),
            (mi = class e extends G {
                constructor(t) {
                    super({
                        name: 'PolicyLengthExceededException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'PolicyLengthExceededException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type)
                }
            }),
            (li = class e extends G {
                constructor(t) {
                    super({
                        name: 'PreconditionFailedException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'PreconditionFailedException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type)
                }
            }),
            (pi = class e extends G {
                constructor(t) {
                    super({
                        name: 'ResourceConflictException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'ResourceConflictException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type)
                }
            }),
            (ui = class e extends G {
                constructor(t) {
                    super({
                        name: 'ResourceNotFoundException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'ResourceNotFoundException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (fi = class e extends G {
                constructor(t) {
                    super({ name: 'ServiceException', $fault: 'server', ...t }),
                        (this.name = 'ServiceException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (S$ = {
                CallerRateLimitExceeded: 'CallerRateLimitExceeded',
                ConcurrentInvocationLimitExceeded:
                    'ConcurrentInvocationLimitExceeded',
                ConcurrentSnapshotCreateLimitExceeded:
                    'ConcurrentSnapshotCreateLimitExceeded',
                FunctionInvocationRateLimitExceeded:
                    'FunctionInvocationRateLimitExceeded',
                ReservedFunctionConcurrentInvocationLimitExceeded:
                    'ReservedFunctionConcurrentInvocationLimitExceeded',
                ReservedFunctionInvocationRateLimitExceeded:
                    'ReservedFunctionInvocationRateLimitExceeded',
            }),
            (gi = class e extends G {
                constructor(t) {
                    super({
                        name: 'TooManyRequestsException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'TooManyRequestsException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.retryAfterSeconds = t.retryAfterSeconds),
                        (this.Type = t.Type),
                        (this.Reason = t.Reason)
                }
            }),
            (b$ = { AWS_IAM: 'AWS_IAM', NONE: 'NONE' }),
            (w$ = {
                Debug: 'DEBUG',
                Error: 'ERROR',
                Fatal: 'FATAL',
                Info: 'INFO',
                Trace: 'TRACE',
                Warn: 'WARN',
            }),
            (A$ = { arm64: 'arm64', x86_64: 'x86_64' }),
            (v$ = { Enforce: 'Enforce', Warn: 'Warn' }),
            (_$ = { Default: 'Default', UpdateLookup: 'UpdateLookup' }),
            (R$ = { ReportBatchItemFailures: 'ReportBatchItemFailures' }),
            (T$ = { KAFKA_BOOTSTRAP_SERVERS: 'KAFKA_BOOTSTRAP_SERVERS' }),
            (I$ = {
                BASIC_AUTH: 'BASIC_AUTH',
                CLIENT_CERTIFICATE_TLS_AUTH: 'CLIENT_CERTIFICATE_TLS_AUTH',
                SASL_SCRAM_256_AUTH: 'SASL_SCRAM_256_AUTH',
                SASL_SCRAM_512_AUTH: 'SASL_SCRAM_512_AUTH',
                SERVER_ROOT_CA_CERTIFICATE: 'SERVER_ROOT_CA_CERTIFICATE',
                VIRTUAL_HOST: 'VIRTUAL_HOST',
                VPC_SECURITY_GROUP: 'VPC_SECURITY_GROUP',
                VPC_SUBNET: 'VPC_SUBNET',
            }),
            (P$ = {
                AT_TIMESTAMP: 'AT_TIMESTAMP',
                LATEST: 'LATEST',
                TRIM_HORIZON: 'TRIM_HORIZON',
            }),
            (hi = class e extends G {
                constructor(t) {
                    super({
                        name: 'CodeSigningConfigNotFoundException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'CodeSigningConfigNotFoundException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (yi = class e extends G {
                constructor(t) {
                    super({
                        name: 'CodeStorageExceededException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'CodeStorageExceededException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type)
                }
            }),
            (xi = class e extends G {
                constructor(t) {
                    super({
                        name: 'CodeVerificationFailedException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'CodeVerificationFailedException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (N$ = { Json: 'JSON', Text: 'Text' }),
            (F$ = { Debug: 'DEBUG', Info: 'INFO', Warn: 'WARN' }),
            (O$ = { Image: 'Image', Zip: 'Zip' }),
            (D$ = {
                dotnet6: 'dotnet6',
                dotnet8: 'dotnet8',
                dotnetcore10: 'dotnetcore1.0',
                dotnetcore20: 'dotnetcore2.0',
                dotnetcore21: 'dotnetcore2.1',
                dotnetcore31: 'dotnetcore3.1',
                go1x: 'go1.x',
                java11: 'java11',
                java17: 'java17',
                java21: 'java21',
                java8: 'java8',
                java8al2: 'java8.al2',
                nodejs: 'nodejs',
                nodejs10x: 'nodejs10.x',
                nodejs12x: 'nodejs12.x',
                nodejs14x: 'nodejs14.x',
                nodejs16x: 'nodejs16.x',
                nodejs18x: 'nodejs18.x',
                nodejs20x: 'nodejs20.x',
                nodejs43: 'nodejs4.3',
                nodejs43edge: 'nodejs4.3-edge',
                nodejs610: 'nodejs6.10',
                nodejs810: 'nodejs8.10',
                provided: 'provided',
                providedal2: 'provided.al2',
                providedal2023: 'provided.al2023',
                python27: 'python2.7',
                python310: 'python3.10',
                python311: 'python3.11',
                python312: 'python3.12',
                python36: 'python3.6',
                python37: 'python3.7',
                python38: 'python3.8',
                python39: 'python3.9',
                ruby25: 'ruby2.5',
                ruby27: 'ruby2.7',
                ruby32: 'ruby3.2',
                ruby33: 'ruby3.3',
            }),
            (k$ = { None: 'None', PublishedVersions: 'PublishedVersions' }),
            (L$ = { Active: 'Active', PassThrough: 'PassThrough' }),
            (M$ = {
                Failed: 'Failed',
                InProgress: 'InProgress',
                Successful: 'Successful',
            }),
            ($$ = {
                DisabledKMSKey: 'DisabledKMSKey',
                EFSIOError: 'EFSIOError',
                EFSMountConnectivityError: 'EFSMountConnectivityError',
                EFSMountFailure: 'EFSMountFailure',
                EFSMountTimeout: 'EFSMountTimeout',
                EniLimitExceeded: 'EniLimitExceeded',
                FunctionError: 'FunctionError',
                ImageAccessDenied: 'ImageAccessDenied',
                ImageDeleted: 'ImageDeleted',
                InsufficientRolePermissions: 'InsufficientRolePermissions',
                InternalError: 'InternalError',
                InvalidConfiguration: 'InvalidConfiguration',
                InvalidImage: 'InvalidImage',
                InvalidRuntime: 'InvalidRuntime',
                InvalidSecurityGroup: 'InvalidSecurityGroup',
                InvalidStateKMSKey: 'InvalidStateKMSKey',
                InvalidSubnet: 'InvalidSubnet',
                InvalidZipFileException: 'InvalidZipFileException',
                KMSKeyAccessDenied: 'KMSKeyAccessDenied',
                KMSKeyNotFound: 'KMSKeyNotFound',
                SubnetOutOfIPAddresses: 'SubnetOutOfIPAddresses',
            }),
            (U$ = { Off: 'Off', On: 'On' }),
            (B$ = {
                Active: 'Active',
                Failed: 'Failed',
                Inactive: 'Inactive',
                Pending: 'Pending',
            }),
            (G$ = {
                Creating: 'Creating',
                DisabledKMSKey: 'DisabledKMSKey',
                EFSIOError: 'EFSIOError',
                EFSMountConnectivityError: 'EFSMountConnectivityError',
                EFSMountFailure: 'EFSMountFailure',
                EFSMountTimeout: 'EFSMountTimeout',
                EniLimitExceeded: 'EniLimitExceeded',
                FunctionError: 'FunctionError',
                Idle: 'Idle',
                ImageAccessDenied: 'ImageAccessDenied',
                ImageDeleted: 'ImageDeleted',
                InsufficientRolePermissions: 'InsufficientRolePermissions',
                InternalError: 'InternalError',
                InvalidConfiguration: 'InvalidConfiguration',
                InvalidImage: 'InvalidImage',
                InvalidRuntime: 'InvalidRuntime',
                InvalidSecurityGroup: 'InvalidSecurityGroup',
                InvalidStateKMSKey: 'InvalidStateKMSKey',
                InvalidSubnet: 'InvalidSubnet',
                InvalidZipFileException: 'InvalidZipFileException',
                KMSKeyAccessDenied: 'KMSKeyAccessDenied',
                KMSKeyNotFound: 'KMSKeyNotFound',
                Restoring: 'Restoring',
                SubnetOutOfIPAddresses: 'SubnetOutOfIPAddresses',
            }),
            (Ei = class e extends G {
                constructor(t) {
                    super({
                        name: 'InvalidCodeSignatureException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'InvalidCodeSignatureException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (z$ = { BUFFERED: 'BUFFERED', RESPONSE_STREAM: 'RESPONSE_STREAM' }),
            (Ci = class e extends G {
                constructor(t) {
                    super({
                        name: 'ResourceInUseException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'ResourceInUseException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (V$ = { Allow: 'Allow', Terminate: 'Terminate' }),
            (W$ = {
                FAILED: 'FAILED',
                IN_PROGRESS: 'IN_PROGRESS',
                READY: 'READY',
            }),
            (Si = class e extends G {
                constructor(t) {
                    super({
                        name: 'ProvisionedConcurrencyConfigNotFoundException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name =
                            'ProvisionedConcurrencyConfigNotFoundException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type)
                }
            }),
            (H$ = {
                Auto: 'Auto',
                FunctionUpdate: 'FunctionUpdate',
                Manual: 'Manual',
            }),
            (bi = class e extends G {
                constructor(t) {
                    super({
                        name: 'EC2AccessDeniedException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'EC2AccessDeniedException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (wi = class e extends G {
                constructor(t) {
                    super({
                        name: 'EC2ThrottledException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'EC2ThrottledException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Ai = class e extends G {
                constructor(t) {
                    super({
                        name: 'EC2UnexpectedException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'EC2UnexpectedException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message),
                        (this.EC2ErrorCode = t.EC2ErrorCode)
                }
            }),
            (vi = class e extends G {
                constructor(t) {
                    super({ name: 'EFSIOException', $fault: 'client', ...t }),
                        (this.name = 'EFSIOException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (_i = class e extends G {
                constructor(t) {
                    super({
                        name: 'EFSMountConnectivityException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'EFSMountConnectivityException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Ri = class e extends G {
                constructor(t) {
                    super({
                        name: 'EFSMountFailureException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'EFSMountFailureException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Ti = class e extends G {
                constructor(t) {
                    super({
                        name: 'EFSMountTimeoutException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'EFSMountTimeoutException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Ii = class e extends G {
                constructor(t) {
                    super({
                        name: 'ENILimitReachedException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'ENILimitReachedException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Pi = class e extends G {
                constructor(t) {
                    super({
                        name: 'InvalidRequestContentException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'InvalidRequestContentException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type)
                }
            }),
            (Ni = class e extends G {
                constructor(t) {
                    super({
                        name: 'InvalidRuntimeException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'InvalidRuntimeException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Fi = class e extends G {
                constructor(t) {
                    super({
                        name: 'InvalidSecurityGroupIDException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'InvalidSecurityGroupIDException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Oi = class e extends G {
                constructor(t) {
                    super({
                        name: 'InvalidSubnetIDException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'InvalidSubnetIDException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Di = class e extends G {
                constructor(t) {
                    super({
                        name: 'InvalidZipFileException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'InvalidZipFileException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (j$ = {
                DryRun: 'DryRun',
                Event: 'Event',
                RequestResponse: 'RequestResponse',
            }),
            (q$ = { None: 'None', Tail: 'Tail' }),
            (ki = class e extends G {
                constructor(t) {
                    super({
                        name: 'KMSAccessDeniedException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'KMSAccessDeniedException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Li = class e extends G {
                constructor(t) {
                    super({
                        name: 'KMSDisabledException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'KMSDisabledException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Mi = class e extends G {
                constructor(t) {
                    super({
                        name: 'KMSInvalidStateException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'KMSInvalidStateException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            ($i = class e extends G {
                constructor(t) {
                    super({
                        name: 'KMSNotFoundException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'KMSNotFoundException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Ui = class e extends G {
                constructor(t) {
                    super({
                        name: 'RecursiveInvocationException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'RecursiveInvocationException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Bi = class e extends G {
                constructor(t) {
                    super({
                        name: 'RequestTooLargeException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'RequestTooLargeException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type)
                }
            }),
            (Gi = class e extends G {
                constructor(t) {
                    super({
                        name: 'ResourceNotReadyException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'ResourceNotReadyException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type)
                }
            }),
            (zi = class e extends G {
                constructor(t) {
                    super({
                        name: 'SnapStartException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'SnapStartException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Vi = class e extends G {
                constructor(t) {
                    super({
                        name: 'SnapStartNotReadyException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'SnapStartNotReadyException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Wi = class e extends G {
                constructor(t) {
                    super({
                        name: 'SnapStartTimeoutException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'SnapStartTimeoutException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (Hi = class e extends G {
                constructor(t) {
                    super({
                        name: 'SubnetIPAddressLimitReachedException',
                        $fault: 'server',
                        ...t,
                    }),
                        (this.name = 'SubnetIPAddressLimitReachedException'),
                        (this.$fault = 'server'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type),
                        (this.Message = t.Message)
                }
            }),
            (ji = class e extends G {
                constructor(t) {
                    super({
                        name: 'UnsupportedMediaTypeException',
                        $fault: 'client',
                        ...t,
                    }),
                        (this.name = 'UnsupportedMediaTypeException'),
                        (this.$fault = 'client'),
                        Object.setPrototypeOf(this, e.prototype),
                        (this.Type = t.Type)
                }
            }),
            (K$ = { DryRun: 'DryRun', RequestResponse: 'RequestResponse' })
        ;(function (e) {
            e.visit = (t, o) =>
                t.PayloadChunk !== void 0
                    ? o.PayloadChunk(t.PayloadChunk)
                    : t.InvokeComplete !== void 0
                      ? o.InvokeComplete(t.InvokeComplete)
                      : o._(t.$unknown[0], t.$unknown[1])
        })(mf || (mf = {}))
        ;(Y$ = { ALL: 'ALL' }),
            (dI = (e) => ({ ...e, ...(e.ZipFile && { ZipFile: H }) })),
            (lf = (e) => ({ ...e, ...(e.Variables && { Variables: H }) })),
            (pf = (e) => ({
                ...e,
                ...(e.Code && { Code: dI(e.Code) }),
                ...(e.Environment && { Environment: lf(e.Environment) }),
            })),
            (mI = (e) => ({ ...e, ...(e.Message && { Message: H }) })),
            (lI = (e) => ({
                ...e,
                ...(e.Variables && { Variables: H }),
                ...(e.Error && { Error: mI(e.Error) }),
            })),
            (pI = (e) => ({ ...e, ...(e.Message && { Message: H }) })),
            (uI = (e) => ({ ...e, ...(e.Error && { Error: pI(e.Error) }) })),
            (fI = (e) => ({ ...e, ...(e.Message && { Message: H }) })),
            (gI = (e) => ({ ...e, ...(e.Error && { Error: fI(e.Error) }) })),
            ($e = (e) => ({
                ...e,
                ...(e.Environment && { Environment: lI(e.Environment) }),
                ...(e.ImageConfigResponse && {
                    ImageConfigResponse: uI(e.ImageConfigResponse),
                }),
                ...(e.RuntimeVersionConfig && {
                    RuntimeVersionConfig: gI(e.RuntimeVersionConfig),
                }),
            })),
            (uf = (e) => ({
                ...e,
                ...(e.Configuration && { Configuration: $e(e.Configuration) }),
            })),
            (ff = (e) => ({ ...e, ...(e.Payload && { Payload: H }) })),
            (gf = (e) => ({ ...e, ...(e.Payload && { Payload: H }) })),
            (hf = (e) => ({ ...e })),
            (yf = (e) => ({ ...e, ...(e.Payload && { Payload: H }) })),
            (hI = (e) => ({ ...e, ...(e.Payload && { Payload: H }) })),
            (J$ = (e) => {
                if (e.PayloadChunk !== void 0)
                    return { PayloadChunk: hI(e.PayloadChunk) }
                if (e.InvokeComplete !== void 0)
                    return { InvokeComplete: e.InvokeComplete }
                if (e.$unknown !== void 0) return { [e.$unknown[0]]: 'UNKNOWN' }
            }),
            (xf = (e) => ({
                ...e,
                ...(e.EventStream && { EventStream: 'STREAMING_CONTENT' }),
            })),
            (Ef = (e) => ({
                ...e,
                ...(e.Functions && {
                    Functions: e.Functions.map((t) => $e(t)),
                }),
            })),
            (Cf = (e) => ({
                ...e,
                ...(e.Versions && { Versions: e.Versions.map((t) => $e(t)) }),
            })),
            (yI = (e) => ({ ...e, ...(e.ZipFile && { ZipFile: H }) })),
            (Sf = (e) => ({
                ...e,
                ...(e.Content && { Content: yI(e.Content) }),
            })),
            (bf = (e) => ({ ...e, ...(e.ZipFile && { ZipFile: H }) })),
            (wf = (e) => ({
                ...e,
                ...(e.Environment && { Environment: lf(e.Environment) }),
            }))
    })
var bI,
    wI,
    AI,
    vI,
    _I,
    RI,
    TI,
    II,
    PI,
    NI,
    FI,
    OI,
    DI,
    kI,
    LI,
    MI,
    $I,
    UI,
    BI,
    GI,
    zI,
    VI,
    WI,
    HI,
    jI,
    qI,
    KI,
    YI,
    JI,
    XI,
    QI,
    ZI,
    eP,
    tP,
    oP,
    rP,
    nP,
    sP,
    iP,
    aP,
    cP,
    dP,
    mP,
    lP,
    pP,
    uP,
    fP,
    gP,
    hP,
    yP,
    xP,
    EP,
    CP,
    SP,
    bP,
    wP,
    AP,
    vP,
    _P,
    RP,
    TP,
    IP,
    PP,
    NP,
    FP,
    OP,
    DP,
    kP,
    LP,
    MP,
    $P,
    UP,
    BP,
    GP,
    zP,
    VP,
    WP,
    HP,
    jP,
    qP,
    KP,
    YP,
    JP,
    XP,
    QP,
    ZP,
    eN,
    tN,
    oN,
    rN,
    nN,
    sN,
    iN,
    aN,
    cN,
    dN,
    mN,
    lN,
    pN,
    uN,
    fN,
    gN,
    hN,
    yN,
    xN,
    EN,
    CN,
    SN,
    bN,
    wN,
    AN,
    vN,
    _N,
    RN,
    TN,
    IN,
    PN,
    NN,
    FN,
    ON,
    DN,
    kN,
    LN,
    MN,
    $N,
    UN,
    BN,
    GN,
    zN,
    VN,
    WN,
    HN,
    jN,
    qN,
    KN,
    YN,
    D,
    X$,
    Q$,
    Z$,
    eU,
    tU,
    oU,
    rU,
    nU,
    sU,
    iU,
    aU,
    cU,
    dU,
    mU,
    lU,
    pU,
    uU,
    fU,
    gU,
    hU,
    yU,
    xU,
    EU,
    CU,
    SU,
    bU,
    wU,
    AU,
    vU,
    _U,
    RU,
    TU,
    IU,
    PU,
    NU,
    FU,
    OU,
    DU,
    kU,
    LU,
    MU,
    $U,
    UU,
    JN,
    BU,
    GU,
    zU,
    VU,
    WU,
    Ld,
    HU,
    jU,
    qU,
    KU,
    A,
    xI,
    Od,
    XN,
    Dd,
    EI,
    QN,
    YU,
    CI,
    kd,
    ZN,
    JU,
    XU,
    eF,
    de,
    me,
    SI,
    z,
    Un,
    QU,
    ZU,
    e2,
    t2,
    o2,
    r2,
    n2,
    tF,
    oF,
    s2,
    rF,
    i2,
    nF,
    O = i(() => {
        he()
        ee()
        b()
        Fd()
        Fe()
        ;(bI = async (e, t) => {
            let o = I(e, t),
                r = { 'content-type': 'application/json' }
            o.bp(
                '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy'
            ),
                o.p('LayerName', () => e.LayerName, '{LayerName}', !1),
                o.p(
                    'VersionNumber',
                    () => e.VersionNumber.toString(),
                    '{VersionNumber}',
                    !1
                )
            let n = f({ [Un]: [, e[Un]] }),
                s
            return (
                (s = JSON.stringify(
                    E(e, {
                        Action: [],
                        OrganizationId: [],
                        Principal: [],
                        StatementId: [],
                    })
                )),
                o.m('POST').h(r).q(n).b(s),
                o.build()
            )
        }),
            (wI = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2015-03-31/functions/{FunctionName}/policy'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return (
                    (s = JSON.stringify(
                        E(e, {
                            Action: [],
                            EventSourceToken: [],
                            FunctionUrlAuthType: [],
                            Principal: [],
                            PrincipalOrgID: [],
                            RevisionId: [],
                            SourceAccount: [],
                            SourceArn: [],
                            StatementId: [],
                        })
                    )),
                    o.m('POST').h(r).q(n).b(s),
                    o.build()
                )
            }),
            (AI = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2015-03-31/functions/{FunctionName}/aliases'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            Description: [],
                            FunctionVersion: [],
                            Name: [],
                            RoutingConfig: (s) => JN(s, t),
                        })
                    )),
                    o.m('POST').h(r).b(n),
                    o.build()
                )
            }),
            (vI = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2020-04-22/code-signing-configs')
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            AllowedPublishers: (s) => p(s),
                            CodeSigningPolicies: (s) => p(s),
                            Description: [],
                            Tags: (s) => p(s),
                        })
                    )),
                    o.m('POST').h(r).b(n),
                    o.build()
                )
            }),
            (_I = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2015-03-31/event-source-mappings')
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            AmazonManagedKafkaEventSourceConfig: (s) => p(s),
                            BatchSize: [],
                            BisectBatchOnFunctionError: [],
                            DestinationConfig: (s) => p(s),
                            DocumentDBEventSourceConfig: (s) => p(s),
                            Enabled: [],
                            EventSourceArn: [],
                            FilterCriteria: (s) => p(s),
                            FunctionName: [],
                            FunctionResponseTypes: (s) => p(s),
                            KMSKeyArn: [],
                            MaximumBatchingWindowInSeconds: [],
                            MaximumRecordAgeInSeconds: [],
                            MaximumRetryAttempts: [],
                            ParallelizationFactor: [],
                            Queues: (s) => p(s),
                            ScalingConfig: (s) => p(s),
                            SelfManagedEventSource: (s) => p(s),
                            SelfManagedKafkaEventSourceConfig: (s) => p(s),
                            SourceAccessConfigurations: (s) => p(s),
                            StartingPosition: [],
                            StartingPositionTimestamp: (s) => s.getTime() / 1e3,
                            Tags: (s) => p(s),
                            Topics: (s) => p(s),
                            TumblingWindowInSeconds: [],
                        })
                    )),
                    o.m('POST').h(r).b(n),
                    o.build()
                )
            }),
            (RI = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2015-03-31/functions')
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            Architectures: (s) => p(s),
                            Code: (s) => BU(s, t),
                            CodeSigningConfigArn: [],
                            DeadLetterConfig: (s) => p(s),
                            Description: [],
                            Environment: (s) => p(s),
                            EphemeralStorage: (s) => p(s),
                            FileSystemConfigs: (s) => p(s),
                            FunctionName: [],
                            Handler: [],
                            ImageConfig: (s) => p(s),
                            KMSKeyArn: [],
                            Layers: (s) => p(s),
                            LoggingConfig: (s) => p(s),
                            MemorySize: [],
                            PackageType: [],
                            Publish: [],
                            Role: [],
                            Runtime: [],
                            SnapStart: (s) => p(s),
                            Tags: (s) => p(s),
                            Timeout: [],
                            TracingConfig: (s) => p(s),
                            VpcConfig: (s) => p(s),
                        })
                    )),
                    o.m('POST').h(r).b(n),
                    o.build()
                )
            }),
            (TI = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2021-10-31/functions/{FunctionName}/url'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return (
                    (s = JSON.stringify(
                        E(e, {
                            AuthType: [],
                            Cors: (a) => p(a),
                            InvokeMode: [],
                        })
                    )),
                    o.m('POST').h(r).q(n).b(s),
                    o.build()
                )
            }),
            (II = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/functions/{FunctionName}/aliases/{Name}'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    ),
                    o.p('Name', () => e.Name, '{Name}', !1)
                let n
                return o.m('DELETE').h(r).b(n), o.build()
            }),
            (PI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2020-04-22/code-signing-configs/{CodeSigningConfigArn}'),
                    o.p(
                        'CodeSigningConfigArn',
                        () => e.CodeSigningConfigArn,
                        '{CodeSigningConfigArn}',
                        !1
                    )
                let n
                return o.m('DELETE').h(r).b(n), o.build()
            }),
            (NI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/event-source-mappings/{UUID}'),
                    o.p('UUID', () => e.UUID, '{UUID}', !1)
                let n
                return o.m('DELETE').h(r).b(n), o.build()
            }),
            (FI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/functions/{FunctionName}'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return o.m('DELETE').h(r).q(n).b(s), o.build()
            }),
            (OI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2020-06-30/functions/{FunctionName}/code-signing-config'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return o.m('DELETE').h(r).b(n), o.build()
            }),
            (DI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2017-10-31/functions/{FunctionName}/concurrency'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return o.m('DELETE').h(r).b(n), o.build()
            }),
            (kI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2019-09-25/functions/{FunctionName}/event-invoke-config'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return o.m('DELETE').h(r).q(n).b(s), o.build()
            }),
            (LI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2021-10-31/functions/{FunctionName}/url'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return o.m('DELETE').h(r).q(n).b(s), o.build()
            }),
            (MI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2018-10-31/layers/{LayerName}/versions/{VersionNumber}'),
                    o.p('LayerName', () => e.LayerName, '{LayerName}', !1),
                    o.p(
                        'VersionNumber',
                        () => e.VersionNumber.toString(),
                        '{VersionNumber}',
                        !1
                    )
                let n
                return o.m('DELETE').h(r).b(n), o.build()
            }),
            ($I = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2019-09-30/functions/{FunctionName}/provisioned-concurrency'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, T(e[z], 'Qualifier')] }),
                    s
                return o.m('DELETE').h(r).q(n).b(s), o.build()
            }),
            (UI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2016-08-19/account-settings')
                let n
                return o.m('GET').h(r).b(n), o.build()
            }),
            (BI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/functions/{FunctionName}/aliases/{Name}'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    ),
                    o.p('Name', () => e.Name, '{Name}', !1)
                let n
                return o.m('GET').h(r).b(n), o.build()
            }),
            (GI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2020-04-22/code-signing-configs/{CodeSigningConfigArn}'),
                    o.p(
                        'CodeSigningConfigArn',
                        () => e.CodeSigningConfigArn,
                        '{CodeSigningConfigArn}',
                        !1
                    )
                let n
                return o.m('GET').h(r).b(n), o.build()
            }),
            (zI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/event-source-mappings/{UUID}'),
                    o.p('UUID', () => e.UUID, '{UUID}', !1)
                let n
                return o.m('GET').h(r).b(n), o.build()
            }),
            (VI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/functions/{FunctionName}'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (WI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2020-06-30/functions/{FunctionName}/code-signing-config'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return o.m('GET').h(r).b(n), o.build()
            }),
            (HI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2019-09-30/functions/{FunctionName}/concurrency'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return o.m('GET').h(r).b(n), o.build()
            }),
            (jI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/functions/{FunctionName}/configuration'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (qI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2019-09-25/functions/{FunctionName}/event-invoke-config'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (KI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2024-08-31/functions/{FunctionName}/recursion-config'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return o.m('GET').h(r).b(n), o.build()
            }),
            (YI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2021-10-31/functions/{FunctionName}/url'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (JI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2018-10-31/layers/{LayerName}/versions/{VersionNumber}'),
                    o.p('LayerName', () => e.LayerName, '{LayerName}', !1),
                    o.p(
                        'VersionNumber',
                        () => e.VersionNumber.toString(),
                        '{VersionNumber}',
                        !1
                    )
                let n
                return o.m('GET').h(r).b(n), o.build()
            }),
            (XI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2018-10-31/layers')
                let n = f({
                        [t2]: [, 'LayerVersion'],
                        [xI]: [, T(e[xI], 'Arn')],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (QI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy'
                ),
                    o.p('LayerName', () => e.LayerName, '{LayerName}', !1),
                    o.p(
                        'VersionNumber',
                        () => e.VersionNumber.toString(),
                        '{VersionNumber}',
                        !1
                    )
                let n
                return o.m('GET').h(r).b(n), o.build()
            }),
            (ZI = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/functions/{FunctionName}/policy'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (eP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2019-09-30/functions/{FunctionName}/provisioned-concurrency'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, T(e[z], 'Qualifier')] }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (tP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2021-07-20/functions/{FunctionName}/runtime-management-config'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (oP = async (e, t) => {
                let o = I(e, t),
                    r = f({}, Io, {
                        'content-type': 'application/octet-stream',
                        [rF]: e[ZN],
                        [nF]: e[eF],
                        [tF]: e[XN],
                    })
                o.bp('/2015-03-31/functions/{FunctionName}/invocations'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return (
                    e.Payload !== void 0 && (s = e.Payload),
                    o.m('POST').h(r).q(n).b(s),
                    o.build()
                )
            }),
            (rP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/octet-stream' }
                o.bp('/2014-11-13/functions/{FunctionName}/invoke-async'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return (
                    e.InvokeArgs !== void 0 && (n = e.InvokeArgs),
                    o.m('POST').h(r).b(n),
                    o.build()
                )
            }),
            (nP = async (e, t) => {
                let o = I(e, t),
                    r = f({}, Io, {
                        'content-type': 'application/octet-stream',
                        [rF]: e[ZN],
                        [nF]: e[eF],
                        [tF]: e[XN],
                    })
                o.bp(
                    '/2021-11-15/functions/{FunctionName}/response-streaming-invocations'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return (
                    e.Payload !== void 0 && (s = e.Payload),
                    o.m('POST').h(r).q(n).b(s),
                    o.build()
                )
            }),
            (sP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/functions/{FunctionName}/aliases'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({
                        [kd]: [, e[kd]],
                        [de]: [, e[de]],
                        [me]: [
                            () => e.MaxItems !== void 0,
                            () => e[me].toString(),
                        ],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (iP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2020-04-22/code-signing-configs')
                let n = f({
                        [de]: [, e[de]],
                        [me]: [
                            () => e.MaxItems !== void 0,
                            () => e[me].toString(),
                        ],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (aP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/event-source-mappings')
                let n = f({
                        [EI]: [, e[EI]],
                        [CI]: [, e[CI]],
                        [de]: [, e[de]],
                        [me]: [
                            () => e.MaxItems !== void 0,
                            () => e[me].toString(),
                        ],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (cP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2019-09-25/functions/{FunctionName}/event-invoke-config/list'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({
                        [de]: [, e[de]],
                        [me]: [
                            () => e.MaxItems !== void 0,
                            () => e[me].toString(),
                        ],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (dP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/functions')
                let n = f({
                        [SI]: [, e[SI]],
                        [kd]: [, e[kd]],
                        [de]: [, e[de]],
                        [me]: [
                            () => e.MaxItems !== void 0,
                            () => e[me].toString(),
                        ],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (mP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions'
                ),
                    o.p(
                        'CodeSigningConfigArn',
                        () => e.CodeSigningConfigArn,
                        '{CodeSigningConfigArn}',
                        !1
                    )
                let n = f({
                        [de]: [, e[de]],
                        [me]: [
                            () => e.MaxItems !== void 0,
                            () => e[me].toString(),
                        ],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (lP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2021-10-31/functions/{FunctionName}/urls'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({
                        [de]: [, e[de]],
                        [me]: [
                            () => e.MaxItems !== void 0,
                            () => e[me].toString(),
                        ],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (pP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2018-10-31/layers')
                let n = f({
                        [Dd]: [, e[Dd]],
                        [de]: [, e[de]],
                        [me]: [
                            () => e.MaxItems !== void 0,
                            () => e[me].toString(),
                        ],
                        [Od]: [, e[Od]],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (uP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2018-10-31/layers/{LayerName}/versions'),
                    o.p('LayerName', () => e.LayerName, '{LayerName}', !1)
                let n = f({
                        [Dd]: [, e[Dd]],
                        [de]: [, e[de]],
                        [me]: [
                            () => e.MaxItems !== void 0,
                            () => e[me].toString(),
                        ],
                        [Od]: [, e[Od]],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (fP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2019-09-30/functions/{FunctionName}/provisioned-concurrency'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({
                        [JU]: [, 'ALL'],
                        [de]: [, e[de]],
                        [me]: [
                            () => e.MaxItems !== void 0,
                            () => e[me].toString(),
                        ],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (gP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2017-03-31/tags/{Resource}'),
                    o.p('Resource', () => e.Resource, '{Resource}', !1)
                let n
                return o.m('GET').h(r).b(n), o.build()
            }),
            (hP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2015-03-31/functions/{FunctionName}/versions'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({
                        [de]: [, e[de]],
                        [me]: [
                            () => e.MaxItems !== void 0,
                            () => e[me].toString(),
                        ],
                    }),
                    s
                return o.m('GET').h(r).q(n).b(s), o.build()
            }),
            (yP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2018-10-31/layers/{LayerName}/versions'),
                    o.p('LayerName', () => e.LayerName, '{LayerName}', !1)
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            CompatibleArchitectures: (s) => p(s),
                            CompatibleRuntimes: (s) => p(s),
                            Content: (s) => GU(s, t),
                            Description: [],
                            LicenseInfo: [],
                        })
                    )),
                    o.m('POST').h(r).b(n),
                    o.build()
                )
            }),
            (xP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2015-03-31/functions/{FunctionName}/versions'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            CodeSha256: [],
                            Description: [],
                            RevisionId: [],
                        })
                    )),
                    o.m('POST').h(r).b(n),
                    o.build()
                )
            }),
            (EP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp(
                    '/2020-06-30/functions/{FunctionName}/code-signing-config'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return (
                    (n = JSON.stringify(E(e, { CodeSigningConfigArn: [] }))),
                    o.m('PUT').h(r).b(n),
                    o.build()
                )
            }),
            (CP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2017-10-31/functions/{FunctionName}/concurrency'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return (
                    (n = JSON.stringify(
                        E(e, { ReservedConcurrentExecutions: [] })
                    )),
                    o.m('PUT').h(r).b(n),
                    o.build()
                )
            }),
            (SP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp(
                    '/2019-09-25/functions/{FunctionName}/event-invoke-config'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return (
                    (s = JSON.stringify(
                        E(e, {
                            DestinationConfig: (a) => p(a),
                            MaximumEventAgeInSeconds: [],
                            MaximumRetryAttempts: [],
                        })
                    )),
                    o.m('PUT').h(r).q(n).b(s),
                    o.build()
                )
            }),
            (bP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2024-08-31/functions/{FunctionName}/recursion-config'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return (
                    (n = JSON.stringify(E(e, { RecursiveLoop: [] }))),
                    o.m('PUT').h(r).b(n),
                    o.build()
                )
            }),
            (wP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp(
                    '/2019-09-30/functions/{FunctionName}/provisioned-concurrency'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, T(e[z], 'Qualifier')] }),
                    s
                return (
                    (s = JSON.stringify(
                        E(e, { ProvisionedConcurrentExecutions: [] })
                    )),
                    o.m('PUT').h(r).q(n).b(s),
                    o.build()
                )
            }),
            (AP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp(
                    '/2021-07-20/functions/{FunctionName}/runtime-management-config'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return (
                    (s = JSON.stringify(
                        E(e, { RuntimeVersionArn: [], UpdateRuntimeOn: [] })
                    )),
                    o.m('PUT').h(r).q(n).b(s),
                    o.build()
                )
            }),
            (vP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}'
                ),
                    o.p('LayerName', () => e.LayerName, '{LayerName}', !1),
                    o.p(
                        'VersionNumber',
                        () => e.VersionNumber.toString(),
                        '{VersionNumber}',
                        !1
                    ),
                    o.p('StatementId', () => e.StatementId, '{StatementId}', !1)
                let n = f({ [Un]: [, e[Un]] }),
                    s
                return o.m('DELETE').h(r).q(n).b(s), o.build()
            }),
            (_P = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp(
                    '/2015-03-31/functions/{FunctionName}/policy/{StatementId}'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    ),
                    o.p('StatementId', () => e.StatementId, '{StatementId}', !1)
                let n = f({ [z]: [, e[z]], [Un]: [, e[Un]] }),
                    s
                return o.m('DELETE').h(r).q(n).b(s), o.build()
            }),
            (RP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2017-03-31/tags/{Resource}'),
                    o.p('Resource', () => e.Resource, '{Resource}', !1)
                let n
                return (
                    (n = JSON.stringify(E(e, { Tags: (s) => p(s) }))),
                    o.m('POST').h(r).b(n),
                    o.build()
                )
            }),
            (TP = async (e, t) => {
                let o = I(e, t),
                    r = {}
                o.bp('/2017-03-31/tags/{Resource}'),
                    o.p('Resource', () => e.Resource, '{Resource}', !1)
                let n = f({
                        [n2]: [
                            T(e.TagKeys, 'TagKeys') != null,
                            () => e[ZU] || [],
                        ],
                    }),
                    s
                return o.m('DELETE').h(r).q(n).b(s), o.build()
            }),
            (IP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2015-03-31/functions/{FunctionName}/aliases/{Name}'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    ),
                    o.p('Name', () => e.Name, '{Name}', !1)
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            Description: [],
                            FunctionVersion: [],
                            RevisionId: [],
                            RoutingConfig: (s) => JN(s, t),
                        })
                    )),
                    o.m('PUT').h(r).b(n),
                    o.build()
                )
            }),
            (PP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2020-04-22/code-signing-configs/{CodeSigningConfigArn}'),
                    o.p(
                        'CodeSigningConfigArn',
                        () => e.CodeSigningConfigArn,
                        '{CodeSigningConfigArn}',
                        !1
                    )
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            AllowedPublishers: (s) => p(s),
                            CodeSigningPolicies: (s) => p(s),
                            Description: [],
                        })
                    )),
                    o.m('PUT').h(r).b(n),
                    o.build()
                )
            }),
            (NP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2015-03-31/event-source-mappings/{UUID}'),
                    o.p('UUID', () => e.UUID, '{UUID}', !1)
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            BatchSize: [],
                            BisectBatchOnFunctionError: [],
                            DestinationConfig: (s) => p(s),
                            DocumentDBEventSourceConfig: (s) => p(s),
                            Enabled: [],
                            FilterCriteria: (s) => p(s),
                            FunctionName: [],
                            FunctionResponseTypes: (s) => p(s),
                            KMSKeyArn: [],
                            MaximumBatchingWindowInSeconds: [],
                            MaximumRecordAgeInSeconds: [],
                            MaximumRetryAttempts: [],
                            ParallelizationFactor: [],
                            ScalingConfig: (s) => p(s),
                            SourceAccessConfigurations: (s) => p(s),
                            TumblingWindowInSeconds: [],
                        })
                    )),
                    o.m('PUT').h(r).b(n),
                    o.build()
                )
            }),
            (FP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2015-03-31/functions/{FunctionName}/code'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            Architectures: (s) => p(s),
                            DryRun: [],
                            ImageUri: [],
                            Publish: [],
                            RevisionId: [],
                            S3Bucket: [],
                            S3Key: [],
                            S3ObjectVersion: [],
                            ZipFile: (s) => t.base64Encoder(s),
                        })
                    )),
                    o.m('PUT').h(r).b(n),
                    o.build()
                )
            }),
            (OP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2015-03-31/functions/{FunctionName}/configuration'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n
                return (
                    (n = JSON.stringify(
                        E(e, {
                            DeadLetterConfig: (s) => p(s),
                            Description: [],
                            Environment: (s) => p(s),
                            EphemeralStorage: (s) => p(s),
                            FileSystemConfigs: (s) => p(s),
                            Handler: [],
                            ImageConfig: (s) => p(s),
                            KMSKeyArn: [],
                            Layers: (s) => p(s),
                            LoggingConfig: (s) => p(s),
                            MemorySize: [],
                            RevisionId: [],
                            Role: [],
                            Runtime: [],
                            SnapStart: (s) => p(s),
                            Timeout: [],
                            TracingConfig: (s) => p(s),
                            VpcConfig: (s) => p(s),
                        })
                    )),
                    o.m('PUT').h(r).b(n),
                    o.build()
                )
            }),
            (DP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp(
                    '/2019-09-25/functions/{FunctionName}/event-invoke-config'
                ),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return (
                    (s = JSON.stringify(
                        E(e, {
                            DestinationConfig: (a) => p(a),
                            MaximumEventAgeInSeconds: [],
                            MaximumRetryAttempts: [],
                        })
                    )),
                    o.m('POST').h(r).q(n).b(s),
                    o.build()
                )
            }),
            (kP = async (e, t) => {
                let o = I(e, t),
                    r = { 'content-type': 'application/json' }
                o.bp('/2021-10-31/functions/{FunctionName}/url'),
                    o.p(
                        'FunctionName',
                        () => e.FunctionName,
                        '{FunctionName}',
                        !1
                    )
                let n = f({ [z]: [, e[z]] }),
                    s
                return (
                    (s = JSON.stringify(
                        E(e, {
                            AuthType: [],
                            Cors: (a) => p(a),
                            InvokeMode: [],
                        })
                    )),
                    o.m('PUT').h(r).q(n).b(s),
                    o.build()
                )
            }),
            (LP = async (e, t) => {
                if (e.statusCode !== 201 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { RevisionId: c, Statement: c })
                return Object.assign(o, n), o
            }),
            (MP = async (e, t) => {
                if (e.statusCode !== 201 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { Statement: c })
                return Object.assign(o, n), o
            }),
            ($P = async (e, t) => {
                if (e.statusCode !== 201 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AliasArn: c,
                        Description: c,
                        FunctionVersion: c,
                        Name: c,
                        RevisionId: c,
                        RoutingConfig: (s) => Ld(s, t),
                    })
                return Object.assign(o, n), o
            }),
            (UP = async (e, t) => {
                if (e.statusCode !== 201 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { CodeSigningConfig: p })
                return Object.assign(o, n), o
            }),
            (BP = async (e, t) => {
                if (e.statusCode !== 202 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AmazonManagedKafkaEventSourceConfig: p,
                        BatchSize: k,
                        BisectBatchOnFunctionError: nn,
                        DestinationConfig: p,
                        DocumentDBEventSourceConfig: p,
                        EventSourceArn: c,
                        EventSourceMappingArn: c,
                        FilterCriteria: p,
                        FilterCriteriaError: p,
                        FunctionArn: c,
                        FunctionResponseTypes: p,
                        KMSKeyArn: c,
                        LastModified: (s) => T(Re(ge(s))),
                        LastProcessingResult: c,
                        MaximumBatchingWindowInSeconds: k,
                        MaximumRecordAgeInSeconds: k,
                        MaximumRetryAttempts: k,
                        ParallelizationFactor: k,
                        Queues: p,
                        ScalingConfig: p,
                        SelfManagedEventSource: p,
                        SelfManagedKafkaEventSourceConfig: p,
                        SourceAccessConfigurations: p,
                        StartingPosition: c,
                        StartingPositionTimestamp: (s) => T(Re(ge(s))),
                        State: c,
                        StateTransitionReason: c,
                        Topics: p,
                        TumblingWindowInSeconds: k,
                        UUID: c,
                    })
                return Object.assign(o, n), o
            }),
            (GP = async (e, t) => {
                if (e.statusCode !== 201 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        Architectures: p,
                        CodeSha256: c,
                        CodeSize: qe,
                        DeadLetterConfig: p,
                        Description: c,
                        Environment: p,
                        EphemeralStorage: p,
                        FileSystemConfigs: p,
                        FunctionArn: c,
                        FunctionName: c,
                        Handler: c,
                        ImageConfigResponse: p,
                        KMSKeyArn: c,
                        LastModified: c,
                        LastUpdateStatus: c,
                        LastUpdateStatusReason: c,
                        LastUpdateStatusReasonCode: c,
                        Layers: p,
                        LoggingConfig: p,
                        MasterArn: c,
                        MemorySize: k,
                        PackageType: c,
                        RevisionId: c,
                        Role: c,
                        Runtime: c,
                        RuntimeVersionConfig: p,
                        SigningJobArn: c,
                        SigningProfileVersionArn: c,
                        SnapStart: p,
                        State: c,
                        StateReason: c,
                        StateReasonCode: c,
                        Timeout: k,
                        TracingConfig: p,
                        Version: c,
                        VpcConfig: p,
                    })
                return Object.assign(o, n), o
            }),
            (zP = async (e, t) => {
                if (e.statusCode !== 201 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AuthType: c,
                        Cors: p,
                        CreationTime: c,
                        FunctionArn: c,
                        FunctionUrl: c,
                        InvokeMode: c,
                    })
                return Object.assign(o, n), o
            }),
            (VP = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (WP = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (HP = async (e, t) => {
                if (e.statusCode !== 202 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AmazonManagedKafkaEventSourceConfig: p,
                        BatchSize: k,
                        BisectBatchOnFunctionError: nn,
                        DestinationConfig: p,
                        DocumentDBEventSourceConfig: p,
                        EventSourceArn: c,
                        EventSourceMappingArn: c,
                        FilterCriteria: p,
                        FilterCriteriaError: p,
                        FunctionArn: c,
                        FunctionResponseTypes: p,
                        KMSKeyArn: c,
                        LastModified: (s) => T(Re(ge(s))),
                        LastProcessingResult: c,
                        MaximumBatchingWindowInSeconds: k,
                        MaximumRecordAgeInSeconds: k,
                        MaximumRetryAttempts: k,
                        ParallelizationFactor: k,
                        Queues: p,
                        ScalingConfig: p,
                        SelfManagedEventSource: p,
                        SelfManagedKafkaEventSourceConfig: p,
                        SourceAccessConfigurations: p,
                        StartingPosition: c,
                        StartingPositionTimestamp: (s) => T(Re(ge(s))),
                        State: c,
                        StateTransitionReason: c,
                        Topics: p,
                        TumblingWindowInSeconds: k,
                        UUID: c,
                    })
                return Object.assign(o, n), o
            }),
            (jP = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (qP = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (KP = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (YP = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (JP = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (XP = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (QP = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (ZP = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { AccountLimit: p, AccountUsage: p })
                return Object.assign(o, n), o
            }),
            (eN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AliasArn: c,
                        Description: c,
                        FunctionVersion: c,
                        Name: c,
                        RevisionId: c,
                        RoutingConfig: (s) => Ld(s, t),
                    })
                return Object.assign(o, n), o
            }),
            (tN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { CodeSigningConfig: p })
                return Object.assign(o, n), o
            }),
            (oN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AmazonManagedKafkaEventSourceConfig: p,
                        BatchSize: k,
                        BisectBatchOnFunctionError: nn,
                        DestinationConfig: p,
                        DocumentDBEventSourceConfig: p,
                        EventSourceArn: c,
                        EventSourceMappingArn: c,
                        FilterCriteria: p,
                        FilterCriteriaError: p,
                        FunctionArn: c,
                        FunctionResponseTypes: p,
                        KMSKeyArn: c,
                        LastModified: (s) => T(Re(ge(s))),
                        LastProcessingResult: c,
                        MaximumBatchingWindowInSeconds: k,
                        MaximumRecordAgeInSeconds: k,
                        MaximumRetryAttempts: k,
                        ParallelizationFactor: k,
                        Queues: p,
                        ScalingConfig: p,
                        SelfManagedEventSource: p,
                        SelfManagedKafkaEventSourceConfig: p,
                        SourceAccessConfigurations: p,
                        StartingPosition: c,
                        StartingPositionTimestamp: (s) => T(Re(ge(s))),
                        State: c,
                        StateTransitionReason: c,
                        Topics: p,
                        TumblingWindowInSeconds: k,
                        UUID: c,
                    })
                return Object.assign(o, n), o
            }),
            (rN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        Code: p,
                        Concurrency: p,
                        Configuration: p,
                        Tags: p,
                    })
                return Object.assign(o, n), o
            }),
            (nN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { CodeSigningConfigArn: c, FunctionName: c })
                return Object.assign(o, n), o
            }),
            (sN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { ReservedConcurrentExecutions: k })
                return Object.assign(o, n), o
            }),
            (iN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        Architectures: p,
                        CodeSha256: c,
                        CodeSize: qe,
                        DeadLetterConfig: p,
                        Description: c,
                        Environment: p,
                        EphemeralStorage: p,
                        FileSystemConfigs: p,
                        FunctionArn: c,
                        FunctionName: c,
                        Handler: c,
                        ImageConfigResponse: p,
                        KMSKeyArn: c,
                        LastModified: c,
                        LastUpdateStatus: c,
                        LastUpdateStatusReason: c,
                        LastUpdateStatusReasonCode: c,
                        Layers: p,
                        LoggingConfig: p,
                        MasterArn: c,
                        MemorySize: k,
                        PackageType: c,
                        RevisionId: c,
                        Role: c,
                        Runtime: c,
                        RuntimeVersionConfig: p,
                        SigningJobArn: c,
                        SigningProfileVersionArn: c,
                        SnapStart: p,
                        State: c,
                        StateReason: c,
                        StateReasonCode: c,
                        Timeout: k,
                        TracingConfig: p,
                        Version: c,
                        VpcConfig: p,
                    })
                return Object.assign(o, n), o
            }),
            (aN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        DestinationConfig: p,
                        FunctionArn: c,
                        LastModified: (s) => T(Re(ge(s))),
                        MaximumEventAgeInSeconds: k,
                        MaximumRetryAttempts: k,
                    })
                return Object.assign(o, n), o
            }),
            (cN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { RecursiveLoop: c })
                return Object.assign(o, n), o
            }),
            (dN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AuthType: c,
                        Cors: p,
                        CreationTime: c,
                        FunctionArn: c,
                        FunctionUrl: c,
                        InvokeMode: c,
                        LastModifiedTime: c,
                    })
                return Object.assign(o, n), o
            }),
            (mN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        CompatibleArchitectures: p,
                        CompatibleRuntimes: p,
                        Content: p,
                        CreatedDate: c,
                        Description: c,
                        LayerArn: c,
                        LayerVersionArn: c,
                        LicenseInfo: c,
                        Version: qe,
                    })
                return Object.assign(o, n), o
            }),
            (lN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        CompatibleArchitectures: p,
                        CompatibleRuntimes: p,
                        Content: p,
                        CreatedDate: c,
                        Description: c,
                        LayerArn: c,
                        LayerVersionArn: c,
                        LicenseInfo: c,
                        Version: qe,
                    })
                return Object.assign(o, n), o
            }),
            (pN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { Policy: c, RevisionId: c })
                return Object.assign(o, n), o
            }),
            (uN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { Policy: c, RevisionId: c })
                return Object.assign(o, n), o
            }),
            (fN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AllocatedProvisionedConcurrentExecutions: k,
                        AvailableProvisionedConcurrentExecutions: k,
                        LastModified: c,
                        RequestedProvisionedConcurrentExecutions: k,
                        Status: c,
                        StatusReason: c,
                    })
                return Object.assign(o, n), o
            }),
            (gN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        FunctionArn: c,
                        RuntimeVersionArn: c,
                        UpdateRuntimeOn: c,
                    })
                return Object.assign(o, n), o
            }),
            (hN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({
                        $metadata: A(e),
                        [YU]: [, e.headers[s2]],
                        [XU]: [, e.headers[i2]],
                        [QN]: [, e.headers[oF]],
                    }),
                    r = await ce(e.body, t)
                return (
                    (o.Payload = r), f(o, { StatusCode: [, e.statusCode] }), o
                )
            }),
            (yN = async (e, t) => {
                if (e.statusCode !== 202 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return (
                    f(o, { Status: [, e.statusCode] }), await ce(e.body, t), o
                )
            }),
            (xN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({
                        $metadata: A(e),
                        [QN]: [, e.headers[oF]],
                        [QU]: [, e.headers[e2]],
                    }),
                    r = e.body
                return (
                    (o.EventStream = LU(r, t)),
                    f(o, { StatusCode: [, e.statusCode] }),
                    o
                )
            }),
            (EN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { Aliases: (s) => WU(s, t), NextMarker: c })
                return Object.assign(o, n), o
            }),
            (CN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { CodeSigningConfigs: p, NextMarker: c })
                return Object.assign(o, n), o
            }),
            (SN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        EventSourceMappings: (s) => jU(s, t),
                        NextMarker: c,
                    })
                return Object.assign(o, n), o
            }),
            (bN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        FunctionEventInvokeConfigs: (s) => KU(s, t),
                        NextMarker: c,
                    })
                return Object.assign(o, n), o
            }),
            (wN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { Functions: p, NextMarker: c })
                return Object.assign(o, n), o
            }),
            (AN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { FunctionArns: p, NextMarker: c })
                return Object.assign(o, n), o
            }),
            (vN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { FunctionUrlConfigs: p, NextMarker: c })
                return Object.assign(o, n), o
            }),
            (_N = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { Layers: p, NextMarker: c })
                return Object.assign(o, n), o
            }),
            (RN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { LayerVersions: p, NextMarker: c })
                return Object.assign(o, n), o
            }),
            (TN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        NextMarker: c,
                        ProvisionedConcurrencyConfigs: p,
                    })
                return Object.assign(o, n), o
            }),
            (IN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { Tags: p })
                return Object.assign(o, n), o
            }),
            (PN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { NextMarker: c, Versions: p })
                return Object.assign(o, n), o
            }),
            (NN = async (e, t) => {
                if (e.statusCode !== 201 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        CompatibleArchitectures: p,
                        CompatibleRuntimes: p,
                        Content: p,
                        CreatedDate: c,
                        Description: c,
                        LayerArn: c,
                        LayerVersionArn: c,
                        LicenseInfo: c,
                        Version: qe,
                    })
                return Object.assign(o, n), o
            }),
            (FN = async (e, t) => {
                if (e.statusCode !== 201 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        Architectures: p,
                        CodeSha256: c,
                        CodeSize: qe,
                        DeadLetterConfig: p,
                        Description: c,
                        Environment: p,
                        EphemeralStorage: p,
                        FileSystemConfigs: p,
                        FunctionArn: c,
                        FunctionName: c,
                        Handler: c,
                        ImageConfigResponse: p,
                        KMSKeyArn: c,
                        LastModified: c,
                        LastUpdateStatus: c,
                        LastUpdateStatusReason: c,
                        LastUpdateStatusReasonCode: c,
                        Layers: p,
                        LoggingConfig: p,
                        MasterArn: c,
                        MemorySize: k,
                        PackageType: c,
                        RevisionId: c,
                        Role: c,
                        Runtime: c,
                        RuntimeVersionConfig: p,
                        SigningJobArn: c,
                        SigningProfileVersionArn: c,
                        SnapStart: p,
                        State: c,
                        StateReason: c,
                        StateReasonCode: c,
                        Timeout: k,
                        TracingConfig: p,
                        Version: c,
                        VpcConfig: p,
                    })
                return Object.assign(o, n), o
            }),
            (ON = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { CodeSigningConfigArn: c, FunctionName: c })
                return Object.assign(o, n), o
            }),
            (DN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { ReservedConcurrentExecutions: k })
                return Object.assign(o, n), o
            }),
            (kN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        DestinationConfig: p,
                        FunctionArn: c,
                        LastModified: (s) => T(Re(ge(s))),
                        MaximumEventAgeInSeconds: k,
                        MaximumRetryAttempts: k,
                    })
                return Object.assign(o, n), o
            }),
            (LN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { RecursiveLoop: c })
                return Object.assign(o, n), o
            }),
            (MN = async (e, t) => {
                if (e.statusCode !== 202 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AllocatedProvisionedConcurrentExecutions: k,
                        AvailableProvisionedConcurrentExecutions: k,
                        LastModified: c,
                        RequestedProvisionedConcurrentExecutions: k,
                        Status: c,
                        StatusReason: c,
                    })
                return Object.assign(o, n), o
            }),
            ($N = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        FunctionArn: c,
                        RuntimeVersionArn: c,
                        UpdateRuntimeOn: c,
                    })
                return Object.assign(o, n), o
            }),
            (UN = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (BN = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (GN = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (zN = async (e, t) => {
                if (e.statusCode !== 204 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) })
                return await ce(e.body, t), o
            }),
            (VN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AliasArn: c,
                        Description: c,
                        FunctionVersion: c,
                        Name: c,
                        RevisionId: c,
                        RoutingConfig: (s) => Ld(s, t),
                    })
                return Object.assign(o, n), o
            }),
            (WN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, { CodeSigningConfig: p })
                return Object.assign(o, n), o
            }),
            (HN = async (e, t) => {
                if (e.statusCode !== 202 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AmazonManagedKafkaEventSourceConfig: p,
                        BatchSize: k,
                        BisectBatchOnFunctionError: nn,
                        DestinationConfig: p,
                        DocumentDBEventSourceConfig: p,
                        EventSourceArn: c,
                        EventSourceMappingArn: c,
                        FilterCriteria: p,
                        FilterCriteriaError: p,
                        FunctionArn: c,
                        FunctionResponseTypes: p,
                        KMSKeyArn: c,
                        LastModified: (s) => T(Re(ge(s))),
                        LastProcessingResult: c,
                        MaximumBatchingWindowInSeconds: k,
                        MaximumRecordAgeInSeconds: k,
                        MaximumRetryAttempts: k,
                        ParallelizationFactor: k,
                        Queues: p,
                        ScalingConfig: p,
                        SelfManagedEventSource: p,
                        SelfManagedKafkaEventSourceConfig: p,
                        SourceAccessConfigurations: p,
                        StartingPosition: c,
                        StartingPositionTimestamp: (s) => T(Re(ge(s))),
                        State: c,
                        StateTransitionReason: c,
                        Topics: p,
                        TumblingWindowInSeconds: k,
                        UUID: c,
                    })
                return Object.assign(o, n), o
            }),
            (jN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        Architectures: p,
                        CodeSha256: c,
                        CodeSize: qe,
                        DeadLetterConfig: p,
                        Description: c,
                        Environment: p,
                        EphemeralStorage: p,
                        FileSystemConfigs: p,
                        FunctionArn: c,
                        FunctionName: c,
                        Handler: c,
                        ImageConfigResponse: p,
                        KMSKeyArn: c,
                        LastModified: c,
                        LastUpdateStatus: c,
                        LastUpdateStatusReason: c,
                        LastUpdateStatusReasonCode: c,
                        Layers: p,
                        LoggingConfig: p,
                        MasterArn: c,
                        MemorySize: k,
                        PackageType: c,
                        RevisionId: c,
                        Role: c,
                        Runtime: c,
                        RuntimeVersionConfig: p,
                        SigningJobArn: c,
                        SigningProfileVersionArn: c,
                        SnapStart: p,
                        State: c,
                        StateReason: c,
                        StateReasonCode: c,
                        Timeout: k,
                        TracingConfig: p,
                        Version: c,
                        VpcConfig: p,
                    })
                return Object.assign(o, n), o
            }),
            (qN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        Architectures: p,
                        CodeSha256: c,
                        CodeSize: qe,
                        DeadLetterConfig: p,
                        Description: c,
                        Environment: p,
                        EphemeralStorage: p,
                        FileSystemConfigs: p,
                        FunctionArn: c,
                        FunctionName: c,
                        Handler: c,
                        ImageConfigResponse: p,
                        KMSKeyArn: c,
                        LastModified: c,
                        LastUpdateStatus: c,
                        LastUpdateStatusReason: c,
                        LastUpdateStatusReasonCode: c,
                        Layers: p,
                        LoggingConfig: p,
                        MasterArn: c,
                        MemorySize: k,
                        PackageType: c,
                        RevisionId: c,
                        Role: c,
                        Runtime: c,
                        RuntimeVersionConfig: p,
                        SigningJobArn: c,
                        SigningProfileVersionArn: c,
                        SnapStart: p,
                        State: c,
                        StateReason: c,
                        StateReasonCode: c,
                        Timeout: k,
                        TracingConfig: p,
                        Version: c,
                        VpcConfig: p,
                    })
                return Object.assign(o, n), o
            }),
            (KN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        DestinationConfig: p,
                        FunctionArn: c,
                        LastModified: (s) => T(Re(ge(s))),
                        MaximumEventAgeInSeconds: k,
                        MaximumRetryAttempts: k,
                    })
                return Object.assign(o, n), o
            }),
            (YN = async (e, t) => {
                if (e.statusCode !== 200 && e.statusCode >= 300) return D(e, t)
                let o = f({ $metadata: A(e) }),
                    r = T(M(await L(e.body, t)), 'body'),
                    n = E(r, {
                        AuthType: c,
                        Cors: p,
                        CreationTime: c,
                        FunctionArn: c,
                        FunctionUrl: c,
                        InvokeMode: c,
                        LastModifiedTime: c,
                    })
                return Object.assign(o, n), o
            }),
            (D = async (e, t) => {
                let o = { ...e, body: await sn(e.body, t) },
                    r = an(e, o.body)
                switch (r) {
                    case 'InvalidParameterValueException':
                    case 'com.amazonaws.lambda#InvalidParameterValueException':
                        throw await mU(o, t)
                    case 'PolicyLengthExceededException':
                    case 'com.amazonaws.lambda#PolicyLengthExceededException':
                        throw await CU(o, t)
                    case 'PreconditionFailedException':
                    case 'com.amazonaws.lambda#PreconditionFailedException':
                        throw await SU(o, t)
                    case 'ResourceConflictException':
                    case 'com.amazonaws.lambda#ResourceConflictException':
                        throw await vU(o, t)
                    case 'ResourceNotFoundException':
                    case 'com.amazonaws.lambda#ResourceNotFoundException':
                        throw await RU(o, t)
                    case 'ServiceException':
                    case 'com.amazonaws.lambda#ServiceException':
                        throw await IU(o, t)
                    case 'TooManyRequestsException':
                    case 'com.amazonaws.lambda#TooManyRequestsException':
                        throw await DU(o, t)
                    case 'CodeSigningConfigNotFoundException':
                    case 'com.amazonaws.lambda#CodeSigningConfigNotFoundException':
                        throw await Q$(o, t)
                    case 'CodeStorageExceededException':
                    case 'com.amazonaws.lambda#CodeStorageExceededException':
                        throw await Z$(o, t)
                    case 'CodeVerificationFailedException':
                    case 'com.amazonaws.lambda#CodeVerificationFailedException':
                        throw await eU(o, t)
                    case 'InvalidCodeSignatureException':
                    case 'com.amazonaws.lambda#InvalidCodeSignatureException':
                        throw await dU(o, t)
                    case 'ResourceInUseException':
                    case 'com.amazonaws.lambda#ResourceInUseException':
                        throw await _U(o, t)
                    case 'ProvisionedConcurrencyConfigNotFoundException':
                    case 'com.amazonaws.lambda#ProvisionedConcurrencyConfigNotFoundException':
                        throw await bU(o, t)
                    case 'EC2AccessDeniedException':
                    case 'com.amazonaws.lambda#EC2AccessDeniedException':
                        throw await tU(o, t)
                    case 'EC2ThrottledException':
                    case 'com.amazonaws.lambda#EC2ThrottledException':
                        throw await oU(o, t)
                    case 'EC2UnexpectedException':
                    case 'com.amazonaws.lambda#EC2UnexpectedException':
                        throw await rU(o, t)
                    case 'EFSIOException':
                    case 'com.amazonaws.lambda#EFSIOException':
                        throw await nU(o, t)
                    case 'EFSMountConnectivityException':
                    case 'com.amazonaws.lambda#EFSMountConnectivityException':
                        throw await sU(o, t)
                    case 'EFSMountFailureException':
                    case 'com.amazonaws.lambda#EFSMountFailureException':
                        throw await iU(o, t)
                    case 'EFSMountTimeoutException':
                    case 'com.amazonaws.lambda#EFSMountTimeoutException':
                        throw await aU(o, t)
                    case 'ENILimitReachedException':
                    case 'com.amazonaws.lambda#ENILimitReachedException':
                        throw await cU(o, t)
                    case 'InvalidRequestContentException':
                    case 'com.amazonaws.lambda#InvalidRequestContentException':
                        throw await lU(o, t)
                    case 'InvalidRuntimeException':
                    case 'com.amazonaws.lambda#InvalidRuntimeException':
                        throw await pU(o, t)
                    case 'InvalidSecurityGroupIDException':
                    case 'com.amazonaws.lambda#InvalidSecurityGroupIDException':
                        throw await uU(o, t)
                    case 'InvalidSubnetIDException':
                    case 'com.amazonaws.lambda#InvalidSubnetIDException':
                        throw await fU(o, t)
                    case 'InvalidZipFileException':
                    case 'com.amazonaws.lambda#InvalidZipFileException':
                        throw await gU(o, t)
                    case 'KMSAccessDeniedException':
                    case 'com.amazonaws.lambda#KMSAccessDeniedException':
                        throw await hU(o, t)
                    case 'KMSDisabledException':
                    case 'com.amazonaws.lambda#KMSDisabledException':
                        throw await yU(o, t)
                    case 'KMSInvalidStateException':
                    case 'com.amazonaws.lambda#KMSInvalidStateException':
                        throw await xU(o, t)
                    case 'KMSNotFoundException':
                    case 'com.amazonaws.lambda#KMSNotFoundException':
                        throw await EU(o, t)
                    case 'RecursiveInvocationException':
                    case 'com.amazonaws.lambda#RecursiveInvocationException':
                        throw await wU(o, t)
                    case 'RequestTooLargeException':
                    case 'com.amazonaws.lambda#RequestTooLargeException':
                        throw await AU(o, t)
                    case 'ResourceNotReadyException':
                    case 'com.amazonaws.lambda#ResourceNotReadyException':
                        throw await TU(o, t)
                    case 'SnapStartException':
                    case 'com.amazonaws.lambda#SnapStartException':
                        throw await PU(o, t)
                    case 'SnapStartNotReadyException':
                    case 'com.amazonaws.lambda#SnapStartNotReadyException':
                        throw await NU(o, t)
                    case 'SnapStartTimeoutException':
                    case 'com.amazonaws.lambda#SnapStartTimeoutException':
                        throw await FU(o, t)
                    case 'SubnetIPAddressLimitReachedException':
                    case 'com.amazonaws.lambda#SubnetIPAddressLimitReachedException':
                        throw await OU(o, t)
                    case 'UnsupportedMediaTypeException':
                    case 'com.amazonaws.lambda#UnsupportedMediaTypeException':
                        throw await kU(o, t)
                    default:
                        let n = o.body
                        return X$({ output: e, parsedBody: n, errorCode: r })
                }
            }),
            (X$ = Ao(G)),
            (Q$ = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new hi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (Z$ = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Type: c, message: c })
                Object.assign(o, n)
                let s = new yi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (eU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new xi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (tU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new bi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (oU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new wi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (rU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { EC2ErrorCode: c, Message: c, Type: c })
                Object.assign(o, n)
                let s = new Ai({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (nU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new vi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (sU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new _i({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (iU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Ri({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (aU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Ti({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (cU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Ii({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (dU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Ei({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (mU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Type: c, message: c })
                Object.assign(o, n)
                let s = new di({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (lU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Type: c, message: c })
                Object.assign(o, n)
                let s = new Pi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (pU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Ni({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (uU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Fi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (fU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Oi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (gU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Di({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (hU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new ki({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (yU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Li({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (xU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Mi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (EU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new $i({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (CU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Type: c, message: c })
                Object.assign(o, n)
                let s = new mi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (SU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Type: c, message: c })
                Object.assign(o, n)
                let s = new li({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (bU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Type: c, message: c })
                Object.assign(o, n)
                let s = new Si({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (wU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Ui({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (AU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Type: c, message: c })
                Object.assign(o, n)
                let s = new Bi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (vU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Type: c, message: c })
                Object.assign(o, n)
                let s = new pi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (_U = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Ci({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (RU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new ui({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (TU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Type: c, message: c })
                Object.assign(o, n)
                let s = new Gi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (IU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new fi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (PU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new zi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (NU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Vi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (FU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Wi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (OU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Message: c, Type: c })
                Object.assign(o, n)
                let s = new Hi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (DU = async (e, t) => {
                let o = f({ [o2]: [, e.headers[r2]] }),
                    r = e.body,
                    n = E(r, { Reason: c, Type: c, message: c })
                Object.assign(o, n)
                let s = new gi({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (kU = async (e, t) => {
                let o = f({}),
                    r = e.body,
                    n = E(r, { Type: c, message: c })
                Object.assign(o, n)
                let s = new ji({ $metadata: A(e), ...o })
                return P(s, e.body)
            }),
            (LU = (e, t) =>
                t.eventStreamMarshaller.deserialize(e, async (o) =>
                    o.PayloadChunk != null
                        ? { PayloadChunk: await MU(o.PayloadChunk, t) }
                        : o.InvokeComplete != null
                          ? { InvokeComplete: await $U(o.InvokeComplete, t) }
                          : { $unknown: e }
                )),
            (MU = async (e, t) => {
                let o = {}
                return (o.Payload = e.body), o
            }),
            ($U = async (e, t) => {
                let o = {},
                    r = await L(e.body, t)
                return Object.assign(o, p(r)), o
            }),
            (UU = (e, t) =>
                Object.entries(e).reduce(
                    (o, [r, n]) => (n === null || (o[r] = dS(n)), o),
                    {}
                )),
            (JN = (e, t) =>
                E(e, { AdditionalVersionWeights: (o) => UU(o, t) })),
            (BU = (e, t) =>
                E(e, {
                    ImageUri: [],
                    S3Bucket: [],
                    S3Key: [],
                    S3ObjectVersion: [],
                    ZipFile: t.base64Encoder,
                })),
            (GU = (e, t) =>
                E(e, {
                    S3Bucket: [],
                    S3Key: [],
                    S3ObjectVersion: [],
                    ZipFile: t.base64Encoder,
                })),
            (zU = (e, t) =>
                Object.entries(e).reduce(
                    (o, [r, n]) => (n === null || (o[r] = kC(n)), o),
                    {}
                )),
            (VU = (e, t) =>
                E(e, {
                    AliasArn: c,
                    Description: c,
                    FunctionVersion: c,
                    Name: c,
                    RevisionId: c,
                    RoutingConfig: (o) => Ld(o, t),
                })),
            (WU = (e, t) =>
                (e || []).filter((r) => r != null).map((r) => VU(r, t))),
            (Ld = (e, t) =>
                E(e, { AdditionalVersionWeights: (o) => zU(o, t) })),
            (HU = (e, t) =>
                E(e, {
                    AmazonManagedKafkaEventSourceConfig: p,
                    BatchSize: k,
                    BisectBatchOnFunctionError: nn,
                    DestinationConfig: p,
                    DocumentDBEventSourceConfig: p,
                    EventSourceArn: c,
                    EventSourceMappingArn: c,
                    FilterCriteria: p,
                    FilterCriteriaError: p,
                    FunctionArn: c,
                    FunctionResponseTypes: p,
                    KMSKeyArn: c,
                    LastModified: (o) => T(Re(ge(o))),
                    LastProcessingResult: c,
                    MaximumBatchingWindowInSeconds: k,
                    MaximumRecordAgeInSeconds: k,
                    MaximumRetryAttempts: k,
                    ParallelizationFactor: k,
                    Queues: p,
                    ScalingConfig: p,
                    SelfManagedEventSource: p,
                    SelfManagedKafkaEventSourceConfig: p,
                    SourceAccessConfigurations: p,
                    StartingPosition: c,
                    StartingPositionTimestamp: (o) => T(Re(ge(o))),
                    State: c,
                    StateTransitionReason: c,
                    Topics: p,
                    TumblingWindowInSeconds: k,
                    UUID: c,
                })),
            (jU = (e, t) =>
                (e || []).filter((r) => r != null).map((r) => HU(r, t))),
            (qU = (e, t) =>
                E(e, {
                    DestinationConfig: p,
                    FunctionArn: c,
                    LastModified: (o) => T(Re(ge(o))),
                    MaximumEventAgeInSeconds: k,
                    MaximumRetryAttempts: k,
                })),
            (KU = (e, t) =>
                (e || []).filter((r) => r != null).map((r) => qU(r, t))),
            (A = (e) => ({
                httpStatusCode: e.statusCode,
                requestId:
                    e.headers['x-amzn-requestid'] ??
                    e.headers['x-amzn-request-id'] ??
                    e.headers['x-amz-request-id'],
                extendedRequestId: e.headers['x-amz-id-2'],
                cfId: e.headers['x-amz-cf-id'],
            })),
            (xI = 'Arn'),
            (Od = 'CompatibleArchitecture'),
            (XN = 'ClientContext'),
            (Dd = 'CompatibleRuntime'),
            (EI = 'EventSourceArn'),
            (QN = 'ExecutedVersion'),
            (YU = 'FunctionError'),
            (CI = 'FunctionName'),
            (kd = 'FunctionVersion'),
            (ZN = 'InvocationType'),
            (JU = 'List'),
            (XU = 'LogResult'),
            (eF = 'LogType'),
            (de = 'Marker'),
            (me = 'MaxItems'),
            (SI = 'MasterRegion'),
            (z = 'Qualifier'),
            (Un = 'RevisionId'),
            (QU = 'ResponseStreamContentType'),
            (ZU = 'TagKeys'),
            (e2 = 'content-type'),
            (t2 = 'find'),
            (o2 = 'retryAfterSeconds'),
            (r2 = 'retry-after'),
            (n2 = 'tagKeys'),
            (tF = 'x-amz-client-context'),
            (oF = 'x-amz-executed-version'),
            (s2 = 'x-amz-function-error'),
            (rF = 'x-amz-invocation-type'),
            (i2 = 'x-amz-log-result'),
            (nF = 'x-amz-log-type')
    })
var qi,
    Af = i(() => {
        _()
        R()
        b()
        N()
        O()
        qi = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'AddLayerVersionPermission', {})
                .n('LambdaClient', 'AddLayerVersionPermissionCommand')
                .f(void 0, void 0)
                .ser(bI)
                .de(LP)
                .build()
        ) {}
    })
var Ki,
    vf = i(() => {
        _()
        R()
        b()
        N()
        O()
        Ki = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'AddPermission', {})
                .n('LambdaClient', 'AddPermissionCommand')
                .f(void 0, void 0)
                .ser(wI)
                .de(MP)
                .build()
        ) {}
    })
var Yi,
    _f = i(() => {
        _()
        R()
        b()
        N()
        O()
        Yi = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'CreateAlias', {})
                .n('LambdaClient', 'CreateAliasCommand')
                .f(void 0, void 0)
                .ser(AI)
                .de($P)
                .build()
        ) {}
    })
var Ji,
    Rf = i(() => {
        _()
        R()
        b()
        N()
        O()
        Ji = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'CreateCodeSigningConfig', {})
                .n('LambdaClient', 'CreateCodeSigningConfigCommand')
                .f(void 0, void 0)
                .ser(vI)
                .de(UP)
                .build()
        ) {}
    })
var Xi,
    Tf = i(() => {
        _()
        R()
        b()
        N()
        O()
        Xi = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'CreateEventSourceMapping', {})
                .n('LambdaClient', 'CreateEventSourceMappingCommand')
                .f(void 0, void 0)
                .ser(_I)
                .de(BP)
                .build()
        ) {}
    })
var Qi,
    If = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        Qi = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'CreateFunction', {})
                .n('LambdaClient', 'CreateFunctionCommand')
                .f(pf, $e)
                .ser(RI)
                .de(GP)
                .build()
        ) {}
    })
var Zi,
    Pf = i(() => {
        _()
        R()
        b()
        N()
        O()
        Zi = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'CreateFunctionUrlConfig', {})
                .n('LambdaClient', 'CreateFunctionUrlConfigCommand')
                .f(void 0, void 0)
                .ser(TI)
                .de(zP)
                .build()
        ) {}
    })
var ea,
    Nf = i(() => {
        _()
        R()
        b()
        N()
        O()
        ea = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'DeleteAlias', {})
                .n('LambdaClient', 'DeleteAliasCommand')
                .f(void 0, void 0)
                .ser(II)
                .de(VP)
                .build()
        ) {}
    })
var ta,
    Ff = i(() => {
        _()
        R()
        b()
        N()
        O()
        ta = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'DeleteCodeSigningConfig', {})
                .n('LambdaClient', 'DeleteCodeSigningConfigCommand')
                .f(void 0, void 0)
                .ser(PI)
                .de(WP)
                .build()
        ) {}
    })
var oa,
    Of = i(() => {
        _()
        R()
        b()
        N()
        O()
        oa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'DeleteEventSourceMapping', {})
                .n('LambdaClient', 'DeleteEventSourceMappingCommand')
                .f(void 0, void 0)
                .ser(NI)
                .de(HP)
                .build()
        ) {}
    })
var ra,
    Df = i(() => {
        _()
        R()
        b()
        N()
        O()
        ra = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'DeleteFunctionCodeSigningConfig', {})
                .n('LambdaClient', 'DeleteFunctionCodeSigningConfigCommand')
                .f(void 0, void 0)
                .ser(OI)
                .de(qP)
                .build()
        ) {}
    })
var na,
    kf = i(() => {
        _()
        R()
        b()
        N()
        O()
        na = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'DeleteFunction', {})
                .n('LambdaClient', 'DeleteFunctionCommand')
                .f(void 0, void 0)
                .ser(FI)
                .de(jP)
                .build()
        ) {}
    })
var sa,
    Lf = i(() => {
        _()
        R()
        b()
        N()
        O()
        sa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'DeleteFunctionConcurrency', {})
                .n('LambdaClient', 'DeleteFunctionConcurrencyCommand')
                .f(void 0, void 0)
                .ser(DI)
                .de(KP)
                .build()
        ) {}
    })
var ia,
    Mf = i(() => {
        _()
        R()
        b()
        N()
        O()
        ia = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'DeleteFunctionEventInvokeConfig', {})
                .n('LambdaClient', 'DeleteFunctionEventInvokeConfigCommand')
                .f(void 0, void 0)
                .ser(kI)
                .de(YP)
                .build()
        ) {}
    })
var aa,
    $f = i(() => {
        _()
        R()
        b()
        N()
        O()
        aa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'DeleteFunctionUrlConfig', {})
                .n('LambdaClient', 'DeleteFunctionUrlConfigCommand')
                .f(void 0, void 0)
                .ser(LI)
                .de(JP)
                .build()
        ) {}
    })
var ca,
    Uf = i(() => {
        _()
        R()
        b()
        N()
        O()
        ca = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'DeleteLayerVersion', {})
                .n('LambdaClient', 'DeleteLayerVersionCommand')
                .f(void 0, void 0)
                .ser(MI)
                .de(XP)
                .build()
        ) {}
    })
var da,
    Bf = i(() => {
        _()
        R()
        b()
        N()
        O()
        da = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'DeleteProvisionedConcurrencyConfig', {})
                .n('LambdaClient', 'DeleteProvisionedConcurrencyConfigCommand')
                .f(void 0, void 0)
                .ser($I)
                .de(QP)
                .build()
        ) {}
    })
var ma,
    Gf = i(() => {
        _()
        R()
        b()
        N()
        O()
        ma = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetAccountSettings', {})
                .n('LambdaClient', 'GetAccountSettingsCommand')
                .f(void 0, void 0)
                .ser(UI)
                .de(ZP)
                .build()
        ) {}
    })
var la,
    zf = i(() => {
        _()
        R()
        b()
        N()
        O()
        la = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetAlias', {})
                .n('LambdaClient', 'GetAliasCommand')
                .f(void 0, void 0)
                .ser(BI)
                .de(eN)
                .build()
        ) {}
    })
var pa,
    Vf = i(() => {
        _()
        R()
        b()
        N()
        O()
        pa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetCodeSigningConfig', {})
                .n('LambdaClient', 'GetCodeSigningConfigCommand')
                .f(void 0, void 0)
                .ser(GI)
                .de(tN)
                .build()
        ) {}
    })
var ua,
    Wf = i(() => {
        _()
        R()
        b()
        N()
        O()
        ua = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetEventSourceMapping', {})
                .n('LambdaClient', 'GetEventSourceMappingCommand')
                .f(void 0, void 0)
                .ser(zI)
                .de(oN)
                .build()
        ) {}
    })
var fa,
    Hf = i(() => {
        _()
        R()
        b()
        N()
        O()
        fa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetFunctionCodeSigningConfig', {})
                .n('LambdaClient', 'GetFunctionCodeSigningConfigCommand')
                .f(void 0, void 0)
                .ser(WI)
                .de(nN)
                .build()
        ) {}
    })
var Ct,
    Bn = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        Ct = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetFunction', {})
                .n('LambdaClient', 'GetFunctionCommand')
                .f(void 0, uf)
                .ser(VI)
                .de(rN)
                .build()
        ) {}
    })
var ga,
    jf = i(() => {
        _()
        R()
        b()
        N()
        O()
        ga = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetFunctionConcurrency', {})
                .n('LambdaClient', 'GetFunctionConcurrencyCommand')
                .f(void 0, void 0)
                .ser(HI)
                .de(sN)
                .build()
        ) {}
    })
var St,
    Gn = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        St = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetFunctionConfiguration', {})
                .n('LambdaClient', 'GetFunctionConfigurationCommand')
                .f(void 0, $e)
                .ser(jI)
                .de(iN)
                .build()
        ) {}
    })
var ha,
    qf = i(() => {
        _()
        R()
        b()
        N()
        O()
        ha = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetFunctionEventInvokeConfig', {})
                .n('LambdaClient', 'GetFunctionEventInvokeConfigCommand')
                .f(void 0, void 0)
                .ser(qI)
                .de(aN)
                .build()
        ) {}
    })
var ya,
    Kf = i(() => {
        _()
        R()
        b()
        N()
        O()
        ya = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetFunctionRecursionConfig', {})
                .n('LambdaClient', 'GetFunctionRecursionConfigCommand')
                .f(void 0, void 0)
                .ser(KI)
                .de(cN)
                .build()
        ) {}
    })
var xa,
    Yf = i(() => {
        _()
        R()
        b()
        N()
        O()
        xa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetFunctionUrlConfig', {})
                .n('LambdaClient', 'GetFunctionUrlConfigCommand')
                .f(void 0, void 0)
                .ser(YI)
                .de(dN)
                .build()
        ) {}
    })
var Ea,
    Jf = i(() => {
        _()
        R()
        b()
        N()
        O()
        Ea = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetLayerVersionByArn', {})
                .n('LambdaClient', 'GetLayerVersionByArnCommand')
                .f(void 0, void 0)
                .ser(XI)
                .de(lN)
                .build()
        ) {}
    })
var Ca,
    Xf = i(() => {
        _()
        R()
        b()
        N()
        O()
        Ca = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetLayerVersion', {})
                .n('LambdaClient', 'GetLayerVersionCommand')
                .f(void 0, void 0)
                .ser(JI)
                .de(mN)
                .build()
        ) {}
    })
var Sa,
    Qf = i(() => {
        _()
        R()
        b()
        N()
        O()
        Sa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetLayerVersionPolicy', {})
                .n('LambdaClient', 'GetLayerVersionPolicyCommand')
                .f(void 0, void 0)
                .ser(QI)
                .de(pN)
                .build()
        ) {}
    })
var ba,
    Zf = i(() => {
        _()
        R()
        b()
        N()
        O()
        ba = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetPolicy', {})
                .n('LambdaClient', 'GetPolicyCommand')
                .f(void 0, void 0)
                .ser(ZI)
                .de(uN)
                .build()
        ) {}
    })
var wa,
    eg = i(() => {
        _()
        R()
        b()
        N()
        O()
        wa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetProvisionedConcurrencyConfig', {})
                .n('LambdaClient', 'GetProvisionedConcurrencyConfigCommand')
                .f(void 0, void 0)
                .ser(eP)
                .de(fN)
                .build()
        ) {}
    })
var Aa,
    tg = i(() => {
        _()
        R()
        b()
        N()
        O()
        Aa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'GetRuntimeManagementConfig', {})
                .n('LambdaClient', 'GetRuntimeManagementConfigCommand')
                .f(void 0, void 0)
                .ser(tP)
                .de(gN)
                .build()
        ) {}
    })
var va,
    og = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        va = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'InvokeAsync', {})
                .n('LambdaClient', 'InvokeAsyncCommand')
                .f(hf, void 0)
                .ser(rP)
                .de(yN)
                .build()
        ) {}
    })
var _a,
    rg = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        _a = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'Invoke', {})
                .n('LambdaClient', 'InvokeCommand')
                .f(ff, gf)
                .ser(oP)
                .de(hN)
                .build()
        ) {}
    })
var Ra,
    ng = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        Ra = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'InvokeWithResponseStream', {
                    eventStream: { output: !0 },
                })
                .n('LambdaClient', 'InvokeWithResponseStreamCommand')
                .f(yf, xf)
                .ser(nP)
                .de(xN)
                .build()
        ) {}
    })
var $r,
    Md = i(() => {
        _()
        R()
        b()
        N()
        O()
        $r = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListAliases', {})
                .n('LambdaClient', 'ListAliasesCommand')
                .f(void 0, void 0)
                .ser(sP)
                .de(EN)
                .build()
        ) {}
    })
var Ur,
    $d = i(() => {
        _()
        R()
        b()
        N()
        O()
        Ur = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListCodeSigningConfigs', {})
                .n('LambdaClient', 'ListCodeSigningConfigsCommand')
                .f(void 0, void 0)
                .ser(iP)
                .de(CN)
                .build()
        ) {}
    })
var Br,
    Ud = i(() => {
        _()
        R()
        b()
        N()
        O()
        Br = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListEventSourceMappings', {})
                .n('LambdaClient', 'ListEventSourceMappingsCommand')
                .f(void 0, void 0)
                .ser(aP)
                .de(SN)
                .build()
        ) {}
    })
var Gr,
    Bd = i(() => {
        _()
        R()
        b()
        N()
        O()
        Gr = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListFunctionEventInvokeConfigs', {})
                .n('LambdaClient', 'ListFunctionEventInvokeConfigsCommand')
                .f(void 0, void 0)
                .ser(cP)
                .de(bN)
                .build()
        ) {}
    })
var zr,
    Gd = i(() => {
        _()
        R()
        b()
        N()
        O()
        zr = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListFunctionsByCodeSigningConfig', {})
                .n('LambdaClient', 'ListFunctionsByCodeSigningConfigCommand')
                .f(void 0, void 0)
                .ser(mP)
                .de(AN)
                .build()
        ) {}
    })
var Vr,
    zd = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        Vr = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListFunctions', {})
                .n('LambdaClient', 'ListFunctionsCommand')
                .f(void 0, Ef)
                .ser(dP)
                .de(wN)
                .build()
        ) {}
    })
var Wr,
    Vd = i(() => {
        _()
        R()
        b()
        N()
        O()
        Wr = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListFunctionUrlConfigs', {})
                .n('LambdaClient', 'ListFunctionUrlConfigsCommand')
                .f(void 0, void 0)
                .ser(lP)
                .de(vN)
                .build()
        ) {}
    })
var Hr,
    Wd = i(() => {
        _()
        R()
        b()
        N()
        O()
        Hr = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListLayers', {})
                .n('LambdaClient', 'ListLayersCommand')
                .f(void 0, void 0)
                .ser(pP)
                .de(_N)
                .build()
        ) {}
    })
var jr,
    Hd = i(() => {
        _()
        R()
        b()
        N()
        O()
        jr = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListLayerVersions', {})
                .n('LambdaClient', 'ListLayerVersionsCommand')
                .f(void 0, void 0)
                .ser(uP)
                .de(RN)
                .build()
        ) {}
    })
var qr,
    jd = i(() => {
        _()
        R()
        b()
        N()
        O()
        qr = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListProvisionedConcurrencyConfigs', {})
                .n('LambdaClient', 'ListProvisionedConcurrencyConfigsCommand')
                .f(void 0, void 0)
                .ser(fP)
                .de(TN)
                .build()
        ) {}
    })
var Ta,
    sg = i(() => {
        _()
        R()
        b()
        N()
        O()
        Ta = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListTags', {})
                .n('LambdaClient', 'ListTagsCommand')
                .f(void 0, void 0)
                .ser(gP)
                .de(IN)
                .build()
        ) {}
    })
var Kr,
    qd = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        Kr = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'ListVersionsByFunction', {})
                .n('LambdaClient', 'ListVersionsByFunctionCommand')
                .f(void 0, Cf)
                .ser(hP)
                .de(PN)
                .build()
        ) {}
    })
var Ia,
    ig = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        Ia = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'PublishLayerVersion', {})
                .n('LambdaClient', 'PublishLayerVersionCommand')
                .f(Sf, void 0)
                .ser(yP)
                .de(NN)
                .build()
        ) {}
    })
var Pa,
    ag = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        Pa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'PublishVersion', {})
                .n('LambdaClient', 'PublishVersionCommand')
                .f(void 0, $e)
                .ser(xP)
                .de(FN)
                .build()
        ) {}
    })
var Na,
    cg = i(() => {
        _()
        R()
        b()
        N()
        O()
        Na = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'PutFunctionCodeSigningConfig', {})
                .n('LambdaClient', 'PutFunctionCodeSigningConfigCommand')
                .f(void 0, void 0)
                .ser(EP)
                .de(ON)
                .build()
        ) {}
    })
var Fa,
    dg = i(() => {
        _()
        R()
        b()
        N()
        O()
        Fa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'PutFunctionConcurrency', {})
                .n('LambdaClient', 'PutFunctionConcurrencyCommand')
                .f(void 0, void 0)
                .ser(CP)
                .de(DN)
                .build()
        ) {}
    })
var Oa,
    mg = i(() => {
        _()
        R()
        b()
        N()
        O()
        Oa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'PutFunctionEventInvokeConfig', {})
                .n('LambdaClient', 'PutFunctionEventInvokeConfigCommand')
                .f(void 0, void 0)
                .ser(SP)
                .de(kN)
                .build()
        ) {}
    })
var Da,
    lg = i(() => {
        _()
        R()
        b()
        N()
        O()
        Da = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'PutFunctionRecursionConfig', {})
                .n('LambdaClient', 'PutFunctionRecursionConfigCommand')
                .f(void 0, void 0)
                .ser(bP)
                .de(LN)
                .build()
        ) {}
    })
var ka,
    pg = i(() => {
        _()
        R()
        b()
        N()
        O()
        ka = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'PutProvisionedConcurrencyConfig', {})
                .n('LambdaClient', 'PutProvisionedConcurrencyConfigCommand')
                .f(void 0, void 0)
                .ser(wP)
                .de(MN)
                .build()
        ) {}
    })
var La,
    ug = i(() => {
        _()
        R()
        b()
        N()
        O()
        La = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'PutRuntimeManagementConfig', {})
                .n('LambdaClient', 'PutRuntimeManagementConfigCommand')
                .f(void 0, void 0)
                .ser(AP)
                .de($N)
                .build()
        ) {}
    })
var Ma,
    fg = i(() => {
        _()
        R()
        b()
        N()
        O()
        Ma = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'RemoveLayerVersionPermission', {})
                .n('LambdaClient', 'RemoveLayerVersionPermissionCommand')
                .f(void 0, void 0)
                .ser(vP)
                .de(UN)
                .build()
        ) {}
    })
var $a,
    gg = i(() => {
        _()
        R()
        b()
        N()
        O()
        $a = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'RemovePermission', {})
                .n('LambdaClient', 'RemovePermissionCommand')
                .f(void 0, void 0)
                .ser(_P)
                .de(BN)
                .build()
        ) {}
    })
var Ua,
    hg = i(() => {
        _()
        R()
        b()
        N()
        O()
        Ua = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'TagResource', {})
                .n('LambdaClient', 'TagResourceCommand')
                .f(void 0, void 0)
                .ser(RP)
                .de(GN)
                .build()
        ) {}
    })
var Ba,
    yg = i(() => {
        _()
        R()
        b()
        N()
        O()
        Ba = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'UntagResource', {})
                .n('LambdaClient', 'UntagResourceCommand')
                .f(void 0, void 0)
                .ser(TP)
                .de(zN)
                .build()
        ) {}
    })
var Ga,
    xg = i(() => {
        _()
        R()
        b()
        N()
        O()
        Ga = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'UpdateAlias', {})
                .n('LambdaClient', 'UpdateAliasCommand')
                .f(void 0, void 0)
                .ser(IP)
                .de(VN)
                .build()
        ) {}
    })
var za,
    Eg = i(() => {
        _()
        R()
        b()
        N()
        O()
        za = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'UpdateCodeSigningConfig', {})
                .n('LambdaClient', 'UpdateCodeSigningConfigCommand')
                .f(void 0, void 0)
                .ser(PP)
                .de(WN)
                .build()
        ) {}
    })
var Va,
    Cg = i(() => {
        _()
        R()
        b()
        N()
        O()
        Va = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'UpdateEventSourceMapping', {})
                .n('LambdaClient', 'UpdateEventSourceMappingCommand')
                .f(void 0, void 0)
                .ser(NP)
                .de(HN)
                .build()
        ) {}
    })
var Wa,
    Sg = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        Wa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'UpdateFunctionCode', {})
                .n('LambdaClient', 'UpdateFunctionCodeCommand')
                .f(bf, $e)
                .ser(FP)
                .de(jN)
                .build()
        ) {}
    })
var Ha,
    bg = i(() => {
        _()
        R()
        b()
        N()
        Fe()
        O()
        Ha = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'UpdateFunctionConfiguration', {})
                .n('LambdaClient', 'UpdateFunctionConfigurationCommand')
                .f(wf, $e)
                .ser(OP)
                .de(qN)
                .build()
        ) {}
    })
var ja,
    wg = i(() => {
        _()
        R()
        b()
        N()
        O()
        ja = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'UpdateFunctionEventInvokeConfig', {})
                .n('LambdaClient', 'UpdateFunctionEventInvokeConfigCommand')
                .f(void 0, void 0)
                .ser(DP)
                .de(KN)
                .build()
        ) {}
    })
var qa,
    Ag = i(() => {
        _()
        R()
        b()
        N()
        O()
        qa = class extends (
            h
                .classBuilder()
                .ep(S)
                .m(function (t, o, r, n) {
                    return [
                        y(r, this.serialize, this.deserialize),
                        x(r, t.getEndpointParameterInstructions()),
                    ]
                })
                .s('AWSGirApiService', 'UpdateFunctionUrlConfig', {})
                .n('LambdaClient', 'UpdateFunctionUrlConfigCommand')
                .f(void 0, void 0)
                .ser(kP)
                .de(YN)
                .build()
        ) {}
    })
var a2,
    Kd,
    sF = i(() => {
        b()
        Af()
        vf()
        _f()
        Rf()
        Tf()
        If()
        Pf()
        Nf()
        Ff()
        Of()
        Df()
        kf()
        Lf()
        Mf()
        $f()
        Uf()
        Bf()
        Gf()
        zf()
        Vf()
        Wf()
        Hf()
        Bn()
        jf()
        Gn()
        qf()
        Kf()
        Yf()
        Jf()
        Xf()
        Qf()
        Zf()
        eg()
        tg()
        og()
        rg()
        ng()
        Md()
        $d()
        Ud()
        Bd()
        Gd()
        zd()
        Vd()
        Wd()
        Hd()
        jd()
        sg()
        qd()
        ig()
        ag()
        cg()
        dg()
        mg()
        lg()
        pg()
        ug()
        fg()
        gg()
        hg()
        yg()
        xg()
        Eg()
        Cg()
        Sg()
        bg()
        wg()
        Ag()
        Me()
        ;(a2 = {
            AddLayerVersionPermissionCommand: qi,
            AddPermissionCommand: Ki,
            CreateAliasCommand: Yi,
            CreateCodeSigningConfigCommand: Ji,
            CreateEventSourceMappingCommand: Xi,
            CreateFunctionCommand: Qi,
            CreateFunctionUrlConfigCommand: Zi,
            DeleteAliasCommand: ea,
            DeleteCodeSigningConfigCommand: ta,
            DeleteEventSourceMappingCommand: oa,
            DeleteFunctionCommand: na,
            DeleteFunctionCodeSigningConfigCommand: ra,
            DeleteFunctionConcurrencyCommand: sa,
            DeleteFunctionEventInvokeConfigCommand: ia,
            DeleteFunctionUrlConfigCommand: aa,
            DeleteLayerVersionCommand: ca,
            DeleteProvisionedConcurrencyConfigCommand: da,
            GetAccountSettingsCommand: ma,
            GetAliasCommand: la,
            GetCodeSigningConfigCommand: pa,
            GetEventSourceMappingCommand: ua,
            GetFunctionCommand: Ct,
            GetFunctionCodeSigningConfigCommand: fa,
            GetFunctionConcurrencyCommand: ga,
            GetFunctionConfigurationCommand: St,
            GetFunctionEventInvokeConfigCommand: ha,
            GetFunctionRecursionConfigCommand: ya,
            GetFunctionUrlConfigCommand: xa,
            GetLayerVersionCommand: Ca,
            GetLayerVersionByArnCommand: Ea,
            GetLayerVersionPolicyCommand: Sa,
            GetPolicyCommand: ba,
            GetProvisionedConcurrencyConfigCommand: wa,
            GetRuntimeManagementConfigCommand: Aa,
            InvokeCommand: _a,
            InvokeAsyncCommand: va,
            InvokeWithResponseStreamCommand: Ra,
            ListAliasesCommand: $r,
            ListCodeSigningConfigsCommand: Ur,
            ListEventSourceMappingsCommand: Br,
            ListFunctionEventInvokeConfigsCommand: Gr,
            ListFunctionsCommand: Vr,
            ListFunctionsByCodeSigningConfigCommand: zr,
            ListFunctionUrlConfigsCommand: Wr,
            ListLayersCommand: Hr,
            ListLayerVersionsCommand: jr,
            ListProvisionedConcurrencyConfigsCommand: qr,
            ListTagsCommand: Ta,
            ListVersionsByFunctionCommand: Kr,
            PublishLayerVersionCommand: Ia,
            PublishVersionCommand: Pa,
            PutFunctionCodeSigningConfigCommand: Na,
            PutFunctionConcurrencyCommand: Fa,
            PutFunctionEventInvokeConfigCommand: Oa,
            PutFunctionRecursionConfigCommand: Da,
            PutProvisionedConcurrencyConfigCommand: ka,
            PutRuntimeManagementConfigCommand: La,
            RemoveLayerVersionPermissionCommand: Ma,
            RemovePermissionCommand: $a,
            TagResourceCommand: Ua,
            UntagResourceCommand: Ba,
            UpdateAliasCommand: Ga,
            UpdateCodeSigningConfigCommand: za,
            UpdateEventSourceMappingCommand: Va,
            UpdateFunctionCodeCommand: Wa,
            UpdateFunctionConfigurationCommand: Ha,
            UpdateFunctionEventInvokeConfigCommand: ja,
            UpdateFunctionUrlConfigCommand: qa,
        }),
            (Kd = class extends oe {})
        wo(a2, Kd)
    })
var iF = i(() => {
    Af()
    vf()
    _f()
    Rf()
    Tf()
    If()
    Pf()
    Nf()
    Ff()
    Of()
    Df()
    kf()
    Lf()
    Mf()
    $f()
    Uf()
    Bf()
    Gf()
    zf()
    Vf()
    Wf()
    Hf()
    Bn()
    jf()
    Gn()
    qf()
    Kf()
    Yf()
    Jf()
    Xf()
    Qf()
    Zf()
    eg()
    tg()
    og()
    rg()
    ng()
    Md()
    $d()
    Ud()
    Bd()
    Vd()
    Gd()
    zd()
    Hd()
    Wd()
    jd()
    sg()
    qd()
    ig()
    ag()
    cg()
    dg()
    mg()
    lg()
    pg()
    ug()
    fg()
    gg()
    hg()
    yg()
    xg()
    Eg()
    Cg()
    Sg()
    bg()
    wg()
    Ag()
})
var aF = i(() => {})
var c2,
    cF = i(() => {
        ee()
        Md()
        Me()
        c2 = te(oe, $r, 'Marker', 'NextMarker', 'MaxItems')
    })
var d2,
    dF = i(() => {
        ee()
        $d()
        Me()
        d2 = te(oe, Ur, 'Marker', 'NextMarker', 'MaxItems')
    })
var m2,
    mF = i(() => {
        ee()
        Ud()
        Me()
        m2 = te(oe, Br, 'Marker', 'NextMarker', 'MaxItems')
    })
var l2,
    lF = i(() => {
        ee()
        Bd()
        Me()
        l2 = te(oe, Gr, 'Marker', 'NextMarker', 'MaxItems')
    })
var p2,
    pF = i(() => {
        ee()
        Vd()
        Me()
        p2 = te(oe, Wr, 'Marker', 'NextMarker', 'MaxItems')
    })
var u2,
    uF = i(() => {
        ee()
        Gd()
        Me()
        u2 = te(oe, zr, 'Marker', 'NextMarker', 'MaxItems')
    })
var f2,
    fF = i(() => {
        ee()
        zd()
        Me()
        f2 = te(oe, Vr, 'Marker', 'NextMarker', 'MaxItems')
    })
var g2,
    gF = i(() => {
        ee()
        Hd()
        Me()
        g2 = te(oe, jr, 'Marker', 'NextMarker', 'MaxItems')
    })
var h2,
    hF = i(() => {
        ee()
        Wd()
        Me()
        h2 = te(oe, Hr, 'Marker', 'NextMarker', 'MaxItems')
    })
var y2,
    yF = i(() => {
        ee()
        jd()
        Me()
        y2 = te(oe, qr, 'Marker', 'NextMarker', 'MaxItems')
    })
var x2,
    xF = i(() => {
        ee()
        qd()
        Me()
        x2 = te(oe, Kr, 'Marker', 'NextMarker', 'MaxItems')
    })
var EF = i(() => {
    aF()
    cF()
    dF()
    mF()
    lF()
    pF()
    uF()
    fF()
    gF()
    hF()
    yF()
    xF()
})
var CF,
    vg = i(() => {
        CF = (e) => new Promise((t) => setTimeout(t, e * 1e3))
    })
var SF,
    W,
    ft,
    Yd = i(() => {
        SF = { minDelay: 2, maxDelay: 120 }
        ;(function (e) {
            ;(e.ABORTED = 'ABORTED'),
                (e.FAILURE = 'FAILURE'),
                (e.SUCCESS = 'SUCCESS'),
                (e.RETRY = 'RETRY'),
                (e.TIMEOUT = 'TIMEOUT')
        })(W || (W = {}))
        ft = (e) => {
            if (e.state === W.ABORTED) {
                let t = new Error(
                    `${JSON.stringify({ ...e, reason: 'Request was aborted' })}`
                )
                throw ((t.name = 'AbortError'), t)
            } else if (e.state === W.TIMEOUT) {
                let t = new Error(
                    `${JSON.stringify({ ...e, reason: 'Waiter has timed out' })}`
                )
                throw ((t.name = 'TimeoutError'), t)
            } else if (e.state !== W.SUCCESS)
                throw new Error(`${JSON.stringify(e)}`)
            return e
        }
    })
var E2,
    C2,
    bF,
    wF = i(() => {
        vg()
        Yd()
        ;(E2 = (e, t, o, r) => {
            if (r > o) return t
            let n = e * 2 ** (r - 1)
            return C2(e, n)
        }),
            (C2 = (e, t) => e + Math.random() * (t - e)),
            (bF = async (
                {
                    minDelay: e,
                    maxDelay: t,
                    maxWaitTime: o,
                    abortController: r,
                    client: n,
                    abortSignal: s,
                },
                a,
                d
            ) => {
                let { state: m, reason: l } = await d(n, a)
                if (m !== W.RETRY) return { state: m, reason: l }
                let g = 1,
                    u = Date.now() + o * 1e3,
                    C = Math.log(t / e) / Math.log(2) + 1
                for (;;) {
                    if (r?.signal?.aborted || s?.aborted)
                        return { state: W.ABORTED }
                    let w = E2(e, t, C, g)
                    if (Date.now() + w * 1e3 > u) return { state: W.TIMEOUT }
                    await CF(w)
                    let { state: v, reason: U } = await d(n, a)
                    if (v !== W.RETRY) return { state: v, reason: U }
                    g += 1
                }
            })
    })
var AF,
    vF = i(() => {
        AF = (e) => {
            if (e.maxWaitTime < 1)
                throw new Error(
                    'WaiterConfiguration.maxWaitTime must be greater than 0'
                )
            if (e.minDelay < 1)
                throw new Error(
                    'WaiterConfiguration.minDelay must be greater than 0'
                )
            if (e.maxDelay < 1)
                throw new Error(
                    'WaiterConfiguration.maxDelay must be greater than 0'
                )
            if (e.maxWaitTime <= e.minDelay)
                throw new Error(
                    `WaiterConfiguration.maxWaitTime [${e.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${e.minDelay}] for this waiter`
                )
            if (e.maxDelay < e.minDelay)
                throw new Error(
                    `WaiterConfiguration.maxDelay [${e.maxDelay}] must be greater than WaiterConfiguration.minDelay [${e.minDelay}] for this waiter`
                )
        }
    })
var _F = i(() => {
    vg()
    vF()
})
var RF,
    xe,
    TF = i(() => {
        wF()
        _F()
        Yd()
        ;(RF = async (e) =>
            new Promise((t) => {
                let o = () => t({ state: W.ABORTED })
                typeof e.addEventListener == 'function'
                    ? e.addEventListener('abort', o)
                    : (e.onabort = o)
            })),
            (xe = async (e, t, o) => {
                let r = { ...SF, ...e }
                AF(r)
                let n = [bF(r, t, o)]
                return (
                    e.abortController && n.push(RF(e.abortController.signal)),
                    e.abortSignal && n.push(RF(e.abortSignal)),
                    Promise.race(n)
                )
            })
    })
var Yr = i(() => {
    TF()
    Yd()
})
var IF,
    S2,
    b2,
    PF = i(() => {
        Yr()
        Gn()
        ;(IF = async (e, t) => {
            let o
            try {
                let r = await e.send(new St(t))
                o = r
                try {
                    if ((() => r.State)() === 'Active')
                        return { state: W.SUCCESS, reason: o }
                } catch {}
                try {
                    if ((() => r.State)() === 'Failed')
                        return { state: W.FAILURE, reason: o }
                } catch {}
                try {
                    if ((() => r.State)() === 'Pending')
                        return { state: W.RETRY, reason: o }
                } catch {}
            } catch (r) {
                o = r
            }
            return { state: W.RETRY, reason: o }
        }),
            (S2 = async (e, t) =>
                xe({ ...{ minDelay: 5, maxDelay: 120 }, ...e }, t, IF)),
            (b2 = async (e, t) => {
                let r = await xe(
                    { ...{ minDelay: 5, maxDelay: 120 }, ...e },
                    t,
                    IF
                )
                return ft(r)
            })
    })
var NF,
    w2,
    A2,
    FF = i(() => {
        Yr()
        Bn()
        ;(NF = async (e, t) => {
            let o
            try {
                let r = await e.send(new Ct(t))
                o = r
                try {
                    if ((() => r.Configuration.State)() === 'Active')
                        return { state: W.SUCCESS, reason: o }
                } catch {}
                try {
                    if ((() => r.Configuration.State)() === 'Failed')
                        return { state: W.FAILURE, reason: o }
                } catch {}
                try {
                    if ((() => r.Configuration.State)() === 'Pending')
                        return { state: W.RETRY, reason: o }
                } catch {}
            } catch (r) {
                o = r
            }
            return { state: W.RETRY, reason: o }
        }),
            (w2 = async (e, t) =>
                xe({ ...{ minDelay: 1, maxDelay: 120 }, ...e }, t, NF)),
            (A2 = async (e, t) => {
                let r = await xe(
                    { ...{ minDelay: 1, maxDelay: 120 }, ...e },
                    t,
                    NF
                )
                return ft(r)
            })
    })
var OF,
    v2,
    _2,
    DF = i(() => {
        Yr()
        Bn()
        ;(OF = async (e, t) => {
            let o
            try {
                return (
                    (o = await e.send(new Ct(t))),
                    { state: W.SUCCESS, reason: o }
                )
            } catch (r) {
                if (((o = r), r.name && r.name == 'ResourceNotFoundException'))
                    return { state: W.RETRY, reason: o }
            }
            return { state: W.RETRY, reason: o }
        }),
            (v2 = async (e, t) =>
                xe({ ...{ minDelay: 1, maxDelay: 120 }, ...e }, t, OF)),
            (_2 = async (e, t) => {
                let r = await xe(
                    { ...{ minDelay: 1, maxDelay: 120 }, ...e },
                    t,
                    OF
                )
                return ft(r)
            })
    })
var kF,
    R2,
    T2,
    LF = i(() => {
        Yr()
        Gn()
        ;(kF = async (e, t) => {
            let o
            try {
                let r = await e.send(new St(t))
                o = r
                try {
                    if ((() => r.LastUpdateStatus)() === 'Successful')
                        return { state: W.SUCCESS, reason: o }
                } catch {}
                try {
                    if ((() => r.LastUpdateStatus)() === 'Failed')
                        return { state: W.FAILURE, reason: o }
                } catch {}
                try {
                    if ((() => r.LastUpdateStatus)() === 'InProgress')
                        return { state: W.RETRY, reason: o }
                } catch {}
            } catch (r) {
                o = r
            }
            return { state: W.RETRY, reason: o }
        }),
            (R2 = async (e, t) =>
                xe({ ...{ minDelay: 5, maxDelay: 120 }, ...e }, t, kF)),
            (T2 = async (e, t) => {
                let r = await xe(
                    { ...{ minDelay: 5, maxDelay: 120 }, ...e },
                    t,
                    kF
                )
                return ft(r)
            })
    })
var MF,
    I2,
    P2,
    $F = i(() => {
        Yr()
        Bn()
        ;(MF = async (e, t) => {
            let o
            try {
                let r = await e.send(new Ct(t))
                o = r
                try {
                    if (
                        (() => r.Configuration.LastUpdateStatus)() ===
                        'Successful'
                    )
                        return { state: W.SUCCESS, reason: o }
                } catch {}
                try {
                    if ((() => r.Configuration.LastUpdateStatus)() === 'Failed')
                        return { state: W.FAILURE, reason: o }
                } catch {}
                try {
                    if (
                        (() => r.Configuration.LastUpdateStatus)() ===
                        'InProgress'
                    )
                        return { state: W.RETRY, reason: o }
                } catch {}
            } catch (r) {
                o = r
            }
            return { state: W.RETRY, reason: o }
        }),
            (I2 = async (e, t) =>
                xe({ ...{ minDelay: 1, maxDelay: 120 }, ...e }, t, MF)),
            (P2 = async (e, t) => {
                let r = await xe(
                    { ...{ minDelay: 1, maxDelay: 120 }, ...e },
                    t,
                    MF
                )
                return ft(r)
            })
    })
var UF,
    N2,
    F2,
    BF = i(() => {
        Yr()
        Gn()
        ;(UF = async (e, t) => {
            let o
            try {
                let r = await e.send(new St(t))
                o = r
                try {
                    if ((() => r.State)() === 'Active')
                        return { state: W.SUCCESS, reason: o }
                } catch {}
                try {
                    if ((() => r.State)() === 'Failed')
                        return { state: W.FAILURE, reason: o }
                } catch {}
                try {
                    if ((() => r.State)() === 'Pending')
                        return { state: W.RETRY, reason: o }
                } catch {}
            } catch (r) {
                o = r
            }
            return { state: W.RETRY, reason: o }
        }),
            (N2 = async (e, t) =>
                xe({ ...{ minDelay: 5, maxDelay: 120 }, ...e }, t, UF)),
            (F2 = async (e, t) => {
                let r = await xe(
                    { ...{ minDelay: 5, maxDelay: 120 }, ...e },
                    t,
                    UF
                )
                return ft(r)
            })
    })
var GF = i(() => {
    PF()
    FF()
    DF()
    LF()
    $F()
    BF()
})
var zF = i(() => {
    Fe()
})
var VF = {}
Ue(VF, {
    $Command: () => h,
    AddLayerVersionPermissionCommand: () => qi,
    AddPermissionCommand: () => Ki,
    ApplicationLogLevel: () => w$,
    Architecture: () => A$,
    CodeSigningConfigNotFoundException: () => hi,
    CodeSigningPolicy: () => v$,
    CodeStorageExceededException: () => yi,
    CodeVerificationFailedException: () => xi,
    CreateAliasCommand: () => Yi,
    CreateCodeSigningConfigCommand: () => Ji,
    CreateEventSourceMappingCommand: () => Xi,
    CreateFunctionCommand: () => Qi,
    CreateFunctionRequestFilterSensitiveLog: () => pf,
    CreateFunctionUrlConfigCommand: () => Zi,
    DeleteAliasCommand: () => ea,
    DeleteCodeSigningConfigCommand: () => ta,
    DeleteEventSourceMappingCommand: () => oa,
    DeleteFunctionCodeSigningConfigCommand: () => ra,
    DeleteFunctionCommand: () => na,
    DeleteFunctionConcurrencyCommand: () => sa,
    DeleteFunctionEventInvokeConfigCommand: () => ia,
    DeleteFunctionUrlConfigCommand: () => aa,
    DeleteLayerVersionCommand: () => ca,
    DeleteProvisionedConcurrencyConfigCommand: () => da,
    EC2AccessDeniedException: () => bi,
    EC2ThrottledException: () => wi,
    EC2UnexpectedException: () => Ai,
    EFSIOException: () => vi,
    EFSMountConnectivityException: () => _i,
    EFSMountFailureException: () => Ri,
    EFSMountTimeoutException: () => Ti,
    ENILimitReachedException: () => Ii,
    EndPointType: () => T$,
    EnvironmentErrorFilterSensitiveLog: () => mI,
    EnvironmentFilterSensitiveLog: () => lf,
    EnvironmentResponseFilterSensitiveLog: () => lI,
    EventSourcePosition: () => P$,
    FullDocument: () => _$,
    FunctionCodeFilterSensitiveLog: () => dI,
    FunctionConfigurationFilterSensitiveLog: () => $e,
    FunctionResponseType: () => R$,
    FunctionUrlAuthType: () => b$,
    FunctionVersion: () => Y$,
    GetAccountSettingsCommand: () => ma,
    GetAliasCommand: () => la,
    GetCodeSigningConfigCommand: () => pa,
    GetEventSourceMappingCommand: () => ua,
    GetFunctionCodeSigningConfigCommand: () => fa,
    GetFunctionCommand: () => Ct,
    GetFunctionConcurrencyCommand: () => ga,
    GetFunctionConfigurationCommand: () => St,
    GetFunctionEventInvokeConfigCommand: () => ha,
    GetFunctionRecursionConfigCommand: () => ya,
    GetFunctionResponseFilterSensitiveLog: () => uf,
    GetFunctionUrlConfigCommand: () => xa,
    GetLayerVersionByArnCommand: () => Ea,
    GetLayerVersionCommand: () => Ca,
    GetLayerVersionPolicyCommand: () => Sa,
    GetPolicyCommand: () => ba,
    GetProvisionedConcurrencyConfigCommand: () => wa,
    GetRuntimeManagementConfigCommand: () => Aa,
    ImageConfigErrorFilterSensitiveLog: () => pI,
    ImageConfigResponseFilterSensitiveLog: () => uI,
    InvalidCodeSignatureException: () => Ei,
    InvalidParameterValueException: () => di,
    InvalidRequestContentException: () => Pi,
    InvalidRuntimeException: () => Ni,
    InvalidSecurityGroupIDException: () => Fi,
    InvalidSubnetIDException: () => Oi,
    InvalidZipFileException: () => Di,
    InvocationRequestFilterSensitiveLog: () => ff,
    InvocationResponseFilterSensitiveLog: () => gf,
    InvocationType: () => j$,
    InvokeAsyncCommand: () => va,
    InvokeAsyncRequestFilterSensitiveLog: () => hf,
    InvokeCommand: () => _a,
    InvokeMode: () => z$,
    InvokeResponseStreamUpdateFilterSensitiveLog: () => hI,
    InvokeWithResponseStreamCommand: () => Ra,
    InvokeWithResponseStreamRequestFilterSensitiveLog: () => yf,
    InvokeWithResponseStreamResponseEvent: () => mf,
    InvokeWithResponseStreamResponseEventFilterSensitiveLog: () => J$,
    InvokeWithResponseStreamResponseFilterSensitiveLog: () => xf,
    KMSAccessDeniedException: () => ki,
    KMSDisabledException: () => Li,
    KMSInvalidStateException: () => Mi,
    KMSNotFoundException: () => $i,
    Lambda: () => Kd,
    LambdaClient: () => oe,
    LambdaServiceException: () => G,
    LastUpdateStatus: () => M$,
    LastUpdateStatusReasonCode: () => $$,
    LayerVersionContentInputFilterSensitiveLog: () => yI,
    ListAliasesCommand: () => $r,
    ListCodeSigningConfigsCommand: () => Ur,
    ListEventSourceMappingsCommand: () => Br,
    ListFunctionEventInvokeConfigsCommand: () => Gr,
    ListFunctionUrlConfigsCommand: () => Wr,
    ListFunctionsByCodeSigningConfigCommand: () => zr,
    ListFunctionsCommand: () => Vr,
    ListFunctionsResponseFilterSensitiveLog: () => Ef,
    ListLayerVersionsCommand: () => jr,
    ListLayersCommand: () => Hr,
    ListProvisionedConcurrencyConfigsCommand: () => qr,
    ListTagsCommand: () => Ta,
    ListVersionsByFunctionCommand: () => Kr,
    ListVersionsByFunctionResponseFilterSensitiveLog: () => Cf,
    LogFormat: () => N$,
    LogType: () => q$,
    PackageType: () => O$,
    PolicyLengthExceededException: () => mi,
    PreconditionFailedException: () => li,
    ProvisionedConcurrencyConfigNotFoundException: () => Si,
    ProvisionedConcurrencyStatusEnum: () => W$,
    PublishLayerVersionCommand: () => Ia,
    PublishLayerVersionRequestFilterSensitiveLog: () => Sf,
    PublishVersionCommand: () => Pa,
    PutFunctionCodeSigningConfigCommand: () => Na,
    PutFunctionConcurrencyCommand: () => Fa,
    PutFunctionEventInvokeConfigCommand: () => Oa,
    PutFunctionRecursionConfigCommand: () => Da,
    PutProvisionedConcurrencyConfigCommand: () => ka,
    PutRuntimeManagementConfigCommand: () => La,
    RecursiveInvocationException: () => Ui,
    RecursiveLoop: () => V$,
    RemoveLayerVersionPermissionCommand: () => Ma,
    RemovePermissionCommand: () => $a,
    RequestTooLargeException: () => Bi,
    ResourceConflictException: () => pi,
    ResourceInUseException: () => Ci,
    ResourceNotFoundException: () => ui,
    ResourceNotReadyException: () => Gi,
    ResponseStreamingInvocationType: () => K$,
    Runtime: () => D$,
    RuntimeVersionConfigFilterSensitiveLog: () => gI,
    RuntimeVersionErrorFilterSensitiveLog: () => fI,
    ServiceException: () => fi,
    SnapStartApplyOn: () => k$,
    SnapStartException: () => zi,
    SnapStartNotReadyException: () => Vi,
    SnapStartOptimizationStatus: () => U$,
    SnapStartTimeoutException: () => Wi,
    SourceAccessType: () => I$,
    State: () => B$,
    StateReasonCode: () => G$,
    SubnetIPAddressLimitReachedException: () => Hi,
    SystemLogLevel: () => F$,
    TagResourceCommand: () => Ua,
    ThrottleReason: () => S$,
    TooManyRequestsException: () => gi,
    TracingMode: () => L$,
    UnsupportedMediaTypeException: () => ji,
    UntagResourceCommand: () => Ba,
    UpdateAliasCommand: () => Ga,
    UpdateCodeSigningConfigCommand: () => za,
    UpdateEventSourceMappingCommand: () => Va,
    UpdateFunctionCodeCommand: () => Wa,
    UpdateFunctionCodeRequestFilterSensitiveLog: () => bf,
    UpdateFunctionConfigurationCommand: () => Ha,
    UpdateFunctionConfigurationRequestFilterSensitiveLog: () => wf,
    UpdateFunctionEventInvokeConfigCommand: () => ja,
    UpdateFunctionUrlConfigCommand: () => qa,
    UpdateRuntimeOn: () => H$,
    __Client: () => je,
    paginateListAliases: () => c2,
    paginateListCodeSigningConfigs: () => d2,
    paginateListEventSourceMappings: () => m2,
    paginateListFunctionEventInvokeConfigs: () => l2,
    paginateListFunctionUrlConfigs: () => p2,
    paginateListFunctions: () => f2,
    paginateListFunctionsByCodeSigningConfig: () => u2,
    paginateListLayerVersions: () => g2,
    paginateListLayers: () => h2,
    paginateListProvisionedConcurrencyConfigs: () => y2,
    paginateListVersionsByFunction: () => x2,
    waitForFunctionActive: () => S2,
    waitForFunctionActiveV2: () => w2,
    waitForFunctionExists: () => v2,
    waitForFunctionUpdated: () => R2,
    waitForFunctionUpdatedV2: () => I2,
    waitForPublishedVersionActive: () => N2,
    waitUntilFunctionActive: () => b2,
    waitUntilFunctionActiveV2: () => A2,
    waitUntilFunctionExists: () => _2,
    waitUntilFunctionUpdated: () => T2,
    waitUntilFunctionUpdatedV2: () => P2,
    waitUntilPublishedVersionActive: () => F2,
})
var WF = i(() => {
    Me()
    sF()
    iF()
    EF()
    GF()
    zF()
    Fd()
})
Qd()
async function Pg(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (Rg(), _g))).default
}
async function Ng(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (Ig(), Tg))).default
}
async function Fg(e) {
    let t = await import('./open-next.config.mjs').then((s) => s.default)
    globalThis.openNextConfig = t
    let o = t[e.type]?.override,
        r = await Pg(o?.converter),
        n = await Ng(o?.wrapper)
    return hr('Using wrapper', n.name), n.wrapper(e.handler, r)
}
Qd()
Dg()
var O2 = async () => {
        let e = globalThis.openNextConfig.warmer
        return typeof e?.invokeFunction == 'function'
            ? await e.invokeFunction()
            : Promise.resolve({
                  name: 'aws-invoke',
                  invoke: async (t) => {
                      let { InvokeCommand: o, LambdaClient: r } =
                              await Promise.resolve().then(() => (WF(), VF)),
                          n = new r({}),
                          s = JSON.parse(process.env.WARM_PARAMS)
                      for (let a of s) {
                          let { concurrency: d, function: m } = a
                          hr({
                              event: 'warmer invoked',
                              functionName: m,
                              concurrency: d,
                              warmerId: t,
                          })
                          let g = (
                              await Promise.all(
                                  Array.from({ length: d }, (u, C) => C).map(
                                      (u) => {
                                          try {
                                              return n.send(
                                                  new o({
                                                      FunctionName: m,
                                                      InvocationType:
                                                          'RequestResponse',
                                                      Payload: Buffer.from(
                                                          JSON.stringify({
                                                              type: 'warmer',
                                                              warmerId: t,
                                                              index: u,
                                                              concurrency: d,
                                                              delay: 75,
                                                          })
                                                      ),
                                                  })
                                              )
                                          } catch (C) {
                                              Xd(`failed to warm up #${u}`, C)
                                          }
                                      }
                                  )
                              )
                          )
                              .map((u, C) => {
                                  if (u?.StatusCode !== 200 || !u?.Payload) {
                                      Xd(
                                          `failed to warm up #${C}:`,
                                          u?.Payload?.toString()
                                      )
                                      return
                                  }
                                  let w = JSON.parse(
                                      Buffer.from(u.Payload).toString()
                                  )
                                  return {
                                      statusCode: u.StatusCode,
                                      payload: w,
                                      type: 'warmer',
                                  }
                              })
                              .filter((u) => !!u)
                          hr({
                              event: 'warmer result',
                              sent: d,
                              success: g.length,
                              uniqueServersWarmed: [...new Set(g)].length,
                          })
                      }
                  },
              })
    },
    Mbe = await Fg({ handler: D2, type: 'warmer' })
async function D2() {
    let e = `warmer-${Og()}`
    return await (await O2()).invoke(e), { type: 'warmer' }
}
export { Mbe as handler }

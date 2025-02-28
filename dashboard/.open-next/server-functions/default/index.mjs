globalThis.monorepoPackagePath = ''
import process from 'node:process'
import { Buffer } from 'node:buffer'
import { createRequire as topLevelCreateRequire } from 'module'
const require = topLevelCreateRequire(import.meta.url)
import bannerUrl from 'url'
const __dirname = bannerUrl.fileURLToPath(new URL('.', import.meta.url))
globalThis.openNextDebug = false
globalThis.openNextVersion = '3.0.10'
var cr = Object.defineProperty
var k = ((e) =>
    typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, {
                get: (t, r) => (typeof require < 'u' ? require : t)[r],
            })
          : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments)
    throw Error('Dynamic require of "' + e + '" is not supported')
})
var A = (e, t) => () => (e && (t = e((e = 0))), t)
var Z = (e, t) => {
    for (var r in t) cr(e, r, { get: t[r], enumerable: !0 })
}
function g(...e) {
    globalThis.openNextDebug && console.log(...e)
}
function He(...e) {
    console.warn(...e)
}
function T(...e) {
    if (e.some((t) => lr(t))) g(...e)
    else if (e.some((t) => t.__openNextInternal)) {
        let t = e.find((r) => r.__openNextInternal)
        if (t.logLevel === 0) {
            g(...e)
            return
        } else if (t.logLevel === 1) {
            He(...e)
            return
        } else {
            console.error(...e)
            return
        }
    } else console.error(...e)
}
var dr,
    lr,
    N = A(() => {
        ;(dr = [
            {
                clientName: 'S3Client',
                commandName: 'GetObjectCommand',
                errorName: 'NoSuchKey',
            },
        ]),
            (lr = (e) =>
                dr.some(
                    (t) =>
                        t.clientName === e?.clientName &&
                        t.commandName === e?.commandName &&
                        (t.errorName === e?.error?.name ||
                            t.errorName === e?.error?.Code)
                ))
    })
import q from 'fs'
import $ from 'path'
function We(e) {
    let t = $.join(e, 'required-server-files.json'),
        r = q.readFileSync(t, 'utf-8'),
        { config: s } = JSON.parse(r)
    return s
}
function ze(e) {
    let t = $.join(e, 'BUILD_ID')
    return q.readFileSync(t, 'utf-8').trim()
}
function Ke(e) {
    let t = $.join(e, 'server', 'pages-manifest.json'),
        r = q.readFileSync(t, 'utf-8')
    return Object.entries(JSON.parse(r))
        .filter(([s, a]) => a.endsWith('.html'))
        .map(([s]) => s)
}
function Xe(e) {
    let t = $.join(e, 'routes-manifest.json'),
        r = q.readFileSync(t, 'utf-8'),
        s = JSON.parse(r),
        a = s.dataRoutes ?? [],
        o = {
            static: a.filter((n) => n.routeKeys === void 0),
            dynamic: a.filter((n) => n.routeKeys !== void 0),
        }
    return {
        basePath: s.basePath,
        rewrites: Array.isArray(s.rewrites)
            ? { beforeFiles: [], afterFiles: s.rewrites, fallback: [] }
            : {
                  beforeFiles: s.rewrites.beforeFiles ?? [],
                  afterFiles: s.rewrites.afterFiles ?? [],
                  fallback: s.rewrites.fallback ?? [],
              },
        redirects: s.redirects ?? [],
        routes: {
            static: s.staticRoutes ?? [],
            dynamic: s.dynamicRoutes ?? [],
            data: o,
        },
        locales: s.i18n?.locales ?? [],
    }
}
function Qe(e) {
    let t = $.join(e, 'routes-manifest.json'),
        r = q.readFileSync(t, 'utf-8')
    return JSON.parse(r).headers
}
function Ge(e) {
    let t = $.join(e, 'prerender-manifest.json'),
        r = q.readFileSync(t, 'utf-8')
    return JSON.parse(r)
}
function Ye(e) {
    let t = $.join(e, 'server', 'middleware-manifest.json'),
        r = q.readFileSync(t, 'utf-8')
    return JSON.parse(r)
}
var Je = A(() => {})
import Ve from 'path'
var L,
    ur,
    C,
    Q,
    Ze,
    P,
    et,
    U,
    tt,
    D = A(() => {
        N()
        Je()
        ;(L = Ve.join(__dirname, '.next')),
            (ur = Ve.join(__dirname, '.open-next'))
        g({ NEXT_DIR: L, OPEN_NEXT_DIR: ur })
        ;(C = We(L)),
            (Q = ze(L)),
            (Ze = Ke(L)),
            (P = Xe(L)),
            (et = Qe(L)),
            (U = Ge(L)),
            (tt = Ye(L))
    })
function rt() {
    process.env.NODE_ENV = process.env.NODE_ENV ?? 'production'
}
function st() {
    return Math.random().toString(36).slice(2, 8)
}
function Pe(e, t) {
    return e.reduce((s, a, o) => {
        let n = Math.floor(o / t)
        return (s[n] = [...(s[n] ?? []), a]), s
    }, new Array())
}
function de(e) {
    if (typeof e != 'string') return e
    let t = parseInt(e)
    return isNaN(t) ? void 0 : t
}
var ee = A(() => {})
function ue(e) {
    if (e)
        return typeof e == 'string'
            ? e.split(/(?<!Expires=\w+),/i).map((t) => t.trim())
            : e
}
var le,
    pr,
    pe = A(() => {
        ;(le = (e) => {
            let t = {}
            if (!e) return t
            for (let [r, s] of Object.entries(e))
                s !== void 0 && (t[r.toLowerCase()] = pr(s))
            return t
        }),
            (pr = (e) =>
                typeof e == 'string'
                    ? e
                    : Array.isArray(e)
                      ? e.join(',')
                      : String(e))
    })
import { Transform as fr } from 'stream'
var W,
    z,
    fe,
    Me = A(() => {
        N()
        pe()
        ;(W = 'set-cookie'),
            (z = 'This cannot be used in OpenNext'),
            (fe = class extends fr {
                fixHeaders
                streamCreator
                initialHeaders
                statusCode
                statusMessage = ''
                headers = {}
                _cookies = []
                responseStream
                headersSent = !1
                _chunks = []
                strictContentLength = !1
                assignSocket(t) {
                    throw new Error(z)
                }
                detachSocket(t) {
                    throw new Error(z)
                }
                writeContinue(t) {
                    throw new Error(z)
                }
                writeEarlyHints(t, r) {
                    throw new Error(z)
                }
                writeProcessing() {
                    throw new Error(z)
                }
                req
                chunkedEncoding = !1
                shouldKeepAlive = !0
                useChunkedEncodingByDefault = !0
                sendDate = !1
                connection = null
                socket = null
                setTimeout(t, r) {
                    throw new Error(z)
                }
                addTrailers(t) {
                    throw new Error(z)
                }
                constructor(t, r, s, a) {
                    super(),
                        (this.fixHeaders = t),
                        (this.streamCreator = s),
                        (this.initialHeaders = a),
                        this.once('finish', () => {
                            this.headersSent || this.flushHeaders(),
                                globalThis.__als
                                    ?.getStore()
                                    ?.pendingPromiseRunner.add(r(this.headers))
                            let o = this.getBody().length
                            this.streamCreator?.onFinish(o)
                        })
                }
                get originalResponse() {
                    return this
                }
                get finished() {
                    return !!(
                        this.writableFinished &&
                        this.responseStream?.writableFinished
                    )
                }
                setHeader(t, r) {
                    let s = t.toLowerCase()
                    return (
                        s === W &&
                            (Array.isArray(r)
                                ? (this._cookies = r)
                                : (this._cookies = [r])),
                        (this.headers[s] = r),
                        this
                    )
                }
                removeHeader(t) {
                    let r = t.toLowerCase()
                    return (
                        r === W ? (this._cookies = []) : delete this.headers[r],
                        this
                    )
                }
                hasHeader(t) {
                    let r = t.toLowerCase()
                    return r === W
                        ? this._cookies.length > 0
                        : this.headers[r] !== void 0
                }
                getHeaders() {
                    return this.headers
                }
                getHeader(t) {
                    return this.headers[t.toLowerCase()]
                }
                getHeaderNames() {
                    return Object.keys(this.headers)
                }
                flushHeaders() {
                    this.headersSent = !0
                    let t =
                        globalThis.__als?.getStore()?.mergeHeadersPriority ??
                        'middleware'
                    if (this.initialHeaders) {
                        this.headers =
                            t === 'middleware'
                                ? { ...this.headers, ...this.initialHeaders }
                                : { ...this.initialHeaders, ...this.headers }
                        let s = ue(this.initialHeaders[W] ?? [])
                        this._cookies =
                            t === 'middleware'
                                ? [...this._cookies, ...s]
                                : [...s, ...this._cookies]
                    }
                    this.fixHeaders(this.headers),
                        (this.headers[W] = this._cookies)
                    let r = le(this.headers)
                    delete r[W],
                        this.streamCreator &&
                            ((this.responseStream =
                                this.streamCreator?.writeHeaders({
                                    statusCode: this.statusCode ?? 200,
                                    cookies: this._cookies,
                                    headers: r,
                                })),
                            this.pipe(this.responseStream))
                }
                appendHeader(t, r) {
                    let s = t.toLowerCase()
                    if (this.hasHeader(s)) {
                        let a = this.getHeader(s),
                            o = Array.isArray(r) ? r : [r],
                            n = Array.isArray(a) ? [...a, ...o] : [a, ...o]
                        return this.setHeader(s, n)
                    } else return this.setHeader(s, r)
                }
                writeHead(t, r, s) {
                    let a = s,
                        o
                    typeof r == 'string' ? (o = r) : (a = r)
                    let n = this.headers
                    if (a)
                        if (Array.isArray(a))
                            for (let i = 0; i < a.length; i += 2)
                                n[a[i]] = a[i + 1]
                        else for (let i of Object.keys(a)) n[i] = a[i]
                    return (
                        (this.statusCode = t),
                        s && (this.headers = n),
                        this.flushHeaders(),
                        this
                    )
                }
                getFixedHeaders() {
                    return (
                        this.fixHeaders(this.headers),
                        (this.headers[W] = this._cookies),
                        this.headers
                    )
                }
                getBody() {
                    return Buffer.concat(this._chunks)
                }
                _internalWrite(t, r) {
                    this._chunks.push(Buffer.from(t, r)),
                        this.push(t, r),
                        this.streamCreator?.onWrite?.()
                }
                _transform(t, r, s) {
                    this.headersSent || this.flushHeaders(),
                        this._internalWrite(t, r),
                        s()
                }
                _flush(t) {
                    this.getBody().length < 1 &&
                        process.env.OPEN_NEXT_FORCE_NON_EMPTY_RESPONSE ===
                            'true' &&
                        (g('Force writing "SOMETHING" to the response body'),
                        this.push('SOMETHING')),
                        t()
                }
                get sent() {
                    return this.finished || this.headersSent
                }
                getHeaderValues(t) {
                    let r = this.getHeader(t)
                    if (r !== void 0)
                        return (Array.isArray(r) ? r : [r]).map((s) =>
                            s.toString()
                        )
                }
                send() {
                    let t = this.getBody()
                    this.end(t)
                }
                body(t) {
                    return this.write(t), this
                }
                onClose(t) {
                    this.on('close', t)
                }
                redirect(t, r) {
                    return (
                        this.setHeader('Location', t),
                        (this.statusCode = r),
                        r === 308 && this.setHeader('Refresh', `0;url=${t}`),
                        this
                    )
                }
            })
    })
function ot(e) {
    if (!e) return !1
    let t = e?.split(';')[0] ?? ''
    return gr.has(t)
}
var gr,
    nt = A(() => {
        gr = new Set([
            'application/octet-stream',
            'application/epub+zip',
            'application/msword',
            'application/pdf',
            'application/rtf',
            'application/vnd.amazon.ebook',
            'application/vnd.ms-excel',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'font/otf',
            'font/woff',
            'font/woff2',
            'image/bmp',
            'image/gif',
            'image/jpeg',
            'image/png',
            'image/tiff',
            'image/vnd.microsoft.icon',
            'image/webp',
            'audio/3gpp',
            'audio/aac',
            'audio/basic',
            'audio/mpeg',
            'audio/ogg',
            'audio/wavaudio/webm',
            'audio/x-aiff',
            'audio/x-midi',
            'audio/x-wav',
            'video/3gpp',
            'video/mp2t',
            'video/mpeg',
            'video/ogg',
            'video/quicktime',
            'video/webm',
            'video/x-msvideo',
            'application/java-archive',
            'application/vnd.apple.installer+xml',
            'application/x-7z-compressed',
            'application/x-apple-diskimage',
            'application/x-bzip',
            'application/x-bzip2',
            'application/x-gzip',
            'application/x-java-archive',
            'application/x-rar-compressed',
            'application/x-tar',
            'application/x-zip',
            'application/zip',
        ])
    })
import yr from 'node:crypto'
import { Readable as it } from 'node:stream'
function ye(e, t) {
    if (!e) return !1
    let r = /^https?:\/\//
    return t ? r.test(e) && !e.includes(t) : r.test(e)
}
function dt(e) {
    return e === ''
        ? {}
        : e.split('&').reduce((r, s) => {
              let [a, o] = s.split('=')
              return { ...r, [a]: o }
          }, {})
}
function lt(e, t) {
    if (!t) {
        let a = /\/([^?]*)\??(.*)/,
            o = e.match(a)
        return {
            hostname: '',
            pathname: o?.[1] ?? e,
            protocol: '',
            queryString: o?.[2] ?? '',
        }
    }
    let r = /^(https?:)\/\/?([^\/\s]+)(\/[^?]*)?(\?.*)?/,
        s = e.match(r)
    if (!s) throw new Error(`Invalid external URL: ${e}`)
    return {
        protocol: s[1] ?? 'https:',
        hostname: s[2],
        pathname: s[3],
        queryString: s[4]?.slice(1) ?? '',
    }
}
function ut(e) {
    let t = e.statusCode || 200,
        r = le(e.getFixedHeaders()),
        s = ot(r['content-type']) || !!r['content-encoding'],
        a = it.toWeb(it.from(e.getBody()))
    return {
        type: 'core',
        statusCode: t,
        headers: r,
        body: a,
        isBase64Encoded: s,
    }
}
function re(e) {
    let t = new URLSearchParams()
    Object.entries(e).forEach(([s, a]) => {
        Array.isArray(a) ? a.forEach((o) => t.append(s, o)) : t.append(s, a)
    })
    let r = t.toString()
    return r ? `?${r}` : ''
}
function pt(e) {
    let t = new URLSearchParams(e),
        r = {}
    for (let s of t.keys()) {
        let a = t.getAll(s)
        r[s] = a.length > 1 ? a : a[0]
    }
    return r
}
function ft(e) {
    let t = e.middleware['/']
    return t?.matchers ? t.matchers.map(({ regexp: r }) => new RegExp(r)) : []
}
function se(e) {
    let t = e.replace(/\(\.\)/g, '_\xB51_')
    return (
        (t = t.replace(/\(\.{2}\)/g, '_\xB52_')),
        (t = t.replace(/\(\.{3}\)/g, '_\xB53_')),
        t
    )
}
function xe(e) {
    let t = e.replace(/_µ1_/g, '(.)')
    return (
        (t = t.replace(/_µ2_/g, '(..)')), (t = t.replace(/_µ3_/g, '(...)')), t
    )
}
function ct(e) {
    let t = {},
        r = [
            'host',
            'connection',
            'via',
            'x-cache',
            'transfer-encoding',
            'content-encoding',
            'content-length',
        ]
    return (
        Object.entries(e).forEach(([s, a]) => {
            let o = s.toLowerCase()
            r.includes(o) ||
                o.startsWith('x-amz') ||
                (t[s] = a?.toString() ?? '')
        }),
        t
    )
}
function ht(e, t) {
    return e === 'GET' || e === 'HEAD' || !t
        ? void 0
        : new ReadableStream({
              start(s) {
                  s.enqueue(t), s.close()
              },
          })
}
async function mt(e, t) {
    let { url: r, headers: s, method: a, body: o } = e,
        n = await import('node:https').then((i) => i.request)
    g('proxyRequest', r),
        await new Promise((i, l) => {
            let u = ct(s)
            g('filteredHeaders', u)
            let d = n(
                r,
                { headers: u, method: a, rejectUnauthorized: !1 },
                (c) => {
                    t.writeHead(c.statusCode ?? 200, ct(c.headers)),
                        c.headers['content-encoding'] === 'br'
                            ? c
                                  .pipe(k('node:zlib').createBrotliDecompress())
                                  .pipe(t)
                            : c.headers['content-encoding'] === 'gzip'
                              ? c.pipe(k('node:zlib').createGunzip()).pipe(t)
                              : c.pipe(t),
                        c.on('error', (h) => {
                            T('proxyRequest error', h), t.end(), l(h)
                        }),
                        t.on('finish', () => {
                            i()
                        })
                }
            )
            o && a !== 'GET' && a !== 'HEAD' && d.write(o), d.end()
        })
}
function xr(e, t) {
    if (e === '/404' || e === '/500') {
        t[M.CACHE_CONTROL] =
            'private, no-cache, no-store, max-age=0, must-revalidate'
        return
    }
    Ze.includes(e) &&
        (t[M.CACHE_CONTROL] =
            'public, max-age=0, s-maxage=31536000, must-revalidate')
}
function wr(e) {
    let t = e[M.CACHE_CONTROL]
    t &&
        (Array.isArray(t) && (t = t.join(',')),
        typeof t == 'string' &&
            (e[M.CACHE_CONTROL] = t.replace(
                /\bstale-while-revalidate(?!=)/,
                'stale-while-revalidate=2592000'
            )))
}
function vr(e) {
    C.poweredByHeader && (e['X-OpenNext'] = '1'),
        globalThis.openNextDebug &&
            ((e['X-OpenNext-Version'] = globalThis.openNextVersion),
            (e['X-OpenNext-RequestId'] =
                globalThis.__als.getStore()?.requestId))
}
async function br(e, t, r, s) {
    if (r[M.NEXT_CACHE] === 'STALE') {
        let a = s?.[Symbol.for('NextInternalRequestMeta')],
            o = a?._nextDidRewrite
                ? t.startsWith('/_next/data/')
                    ? `/_next/data/${Q}${a?._nextRewroteUrl}.json`
                    : a?._nextRewroteUrl
                : t
        try {
            let n = (d) => yr.createHash('md5').update(d).digest('hex'),
                i = globalThis.__als.getStore()?.requestId ?? '',
                l =
                    globalThis.lastModified[i] > 0
                        ? globalThis.lastModified[i]
                        : '',
                u = r.etag ?? r.ETag ?? ''
            await globalThis.queue.send({
                MessageBody: { host: e, url: o },
                MessageDeduplicationId: n(`${t}-${l}-${u}`),
                MessageGroupId: Oe(t),
            })
        } catch (n) {
            T(`Failed to revalidate stale page ${t}`, n)
        }
    }
}
function Oe(e) {
    let t = Er(e)
    var r = (t += 1831565813)
    ;(r = Math.imul(r ^ (r >>> 15), r | 1)),
        (r ^= r + Math.imul(r ^ (r >>> 7), r | 61))
    let s = ((r ^ (r >>> 14)) >>> 0) / 4294967296,
        a = parseInt(process.env.MAX_REVALIDATE_CONCURRENCY ?? '10')
    return `revalidate-${Math.floor(s * a)}`
}
function Er(e) {
    let t = 1779033703,
        r = 3144134277,
        s = 1013904242,
        a = 2773480762
    for (let o = 0, n; o < e.length; o++)
        (n = e.charCodeAt(o)),
            (t = r ^ Math.imul(t ^ n, 597399067)),
            (r = s ^ Math.imul(r ^ n, 2869860233)),
            (s = a ^ Math.imul(s ^ n, 951274213)),
            (a = t ^ Math.imul(a ^ n, 2716044179))
    return (
        (t = Math.imul(s ^ (t >>> 18), 597399067)),
        (r = Math.imul(a ^ (r >>> 22), 2869860233)),
        (s = Math.imul(t ^ (s >>> 17), 951274213)),
        (a = Math.imul(r ^ (a >>> 19), 2716044179)),
        (t ^= r ^ s ^ a),
        (r ^= t),
        (s ^= t),
        (a ^= t),
        t >>> 0
    )
}
function Cr(e) {
    if (e[M.NEXT_CACHE] === 'REVALIDATED') {
        e[M.CACHE_CONTROL] =
            'private, no-cache, no-store, max-age=0, must-revalidate'
        return
    }
    let t = globalThis.__als.getStore()?.requestId ?? '',
        r = globalThis.lastModified[t] ?? 0
    if (e[M.NEXT_CACHE] === 'HIT' && r > 0) {
        let s = Math.round((Date.now() - r) / 1e3),
            a = /s-maxage=(\d+)/,
            o = e[M.CACHE_CONTROL]
        if (
            (g('cache-control', o, globalThis.lastModified, Date.now()),
            typeof o != 'string')
        )
            return
        let n = o.match(a),
            i = n ? parseInt(n[1]) : void 0
        if (i && i !== 31536e3) {
            let l = Math.max(i - s, 1)
            e[M.CACHE_CONTROL] = `s-maxage=${l}, stale-while-revalidate=2592000`
        }
    }
    e[M.NEXT_CACHE] === 'STALE' &&
        (e[M.CACHE_CONTROL] = 's-maxage=2, stale-while-revalidate=2592000')
}
function Ie(e, t, r) {
    return new fe(
        (s) => {
            xr(e.rawPath, s), wr(s), vr(s), Cr(s)
        },
        async (s) => {
            await br(e.headers.host, e.rawPath, s)
        },
        r,
        t
    )
}
var M,
    G = A(() => {
        D()
        Me()
        pe()
        nt()
        N()
        ;(function (e) {
            ;(e.CACHE_CONTROL = 'cache-control'),
                (e.NEXT_CACHE = 'x-nextjs-cache')
        })(M || (M = {}))
    })
import { Readable as Y } from 'node:stream'
function gt(e, t) {
    let r = e.getReader(),
        s = []
    return new Promise((a, o) => {
        function n() {
            r.read()
                .then(({ done: i, value: l }) => {
                    if (i) {
                        a(Buffer.concat(s).toString(t ? 'base64' : 'utf8'))
                        return
                    }
                    s.push(l), n()
                })
                .catch(o)
        }
        n()
    })
}
function we(e, t) {
    return Y.toWeb(Y.from(Buffer.from(e, t ? 'base64' : 'utf8')))
}
function K() {
    return process.env.OPEN_NEXT_FORCE_NON_EMPTY_RESPONSE === 'true'
        ? Y.toWeb(Y.from([Buffer.from('SOMETHING')]))
        : Y.toWeb(Y.from([]))
}
var ae = A(() => {})
function Lt(e) {
    let t = {}
    for (let [r, s] of Object.entries(e)) s !== void 0 && (t[r] = s)
    return t
}
var Bt = A(() => {})
var Ft = {}
Z(Ft, { default: () => Zr })
function Gr(e) {
    let { body: t, isBase64Encoded: r } = e
    return Buffer.isBuffer(t)
        ? t
        : typeof t == 'string'
          ? Buffer.from(t, r ? 'base64' : 'utf8')
          : typeof t == 'object'
            ? Buffer.from(JSON.stringify(t))
            : Buffer.from('', 'utf8')
}
function Yr(e) {
    let { headers: t, cookies: r } = e,
        s = {}
    Array.isArray(r) && (s.cookie = r.join('; '))
    for (let [a, o] of Object.entries(t || {})) s[a.toLowerCase()] = o
    return s
}
async function Jr(e) {
    let { rawPath: t, rawQueryString: r, requestContext: s } = e
    return {
        type: 'core',
        method: s.http.method,
        rawPath: t,
        url: t + (r ? `?${r}` : ''),
        body: Gr(e),
        headers: Yr(e),
        remoteAddress: s.http.sourceIp,
        query: Lt(pt(r)),
        cookies:
            e.cookies?.reduce((a, o) => {
                let [n, i] = o.split('=')
                return { ...a, [n]: i }
            }, {}) ?? {},
    }
}
async function Vr(e) {
    let t = {}
    Object.entries(e.headers)
        .map(([a, o]) => [a.toLowerCase(), o])
        .filter(
            ([a]) =>
                !Qr.some((o) => (typeof o == 'string' ? o === a : o.test(a)))
        )
        .forEach(([a, o]) => {
            if (o == null) {
                t[a] = ''
                return
            }
            t[a] = Array.isArray(o) ? o.join(', ') : `${o}`
        })
    let r = await gt(e.body, e.isBase64Encoded),
        s = {
            statusCode: e.statusCode,
            headers: t,
            cookies: ue(e.headers['set-cookie']),
            body: r,
            isBase64Encoded: e.isBase64Encoded,
        }
    return g(s), s
}
var Qr,
    Zr,
    qt = A(() => {
        pe()
        ae()
        N()
        G()
        Bt()
        Qr = [
            'connection',
            'expect',
            'keep-alive',
            'proxy-authenticate',
            'proxy-authorization',
            'proxy-connection',
            'trailer',
            'upgrade',
            'x-accel-buffering',
            'x-accel-charset',
            'x-accel-limit-rate',
            'x-accel-redirect',
            /x-amz-cf-(.*)/,
            /x-amzn-(.*)/,
            /x-edge-(.*)/,
            'x-cache',
            'x-forwarded-proto',
            'x-real-ip',
            'set-cookie',
            'age',
            'via',
        ]
        Zr = { convertFrom: Jr, convertTo: Vr, name: 'aws-apigw-v2' }
    })
var $t = {}
Z($t, { default: () => ss })
import { Writable as es } from 'node:stream'
function ts(e) {
    return new Promise((t) => {
        setTimeout(() => {
            t({ serverId, type: 'warmer' })
        }, e.delay)
    })
}
var rs,
    ss,
    Ut = A(() => {
        ;(rs = async (e, t) => async (r) => {
            if ('type' in r) return ts(r)
            let s = await t.convertFrom(r),
                o = await e(s, {
                    writeHeaders: () =>
                        new es({
                            write: (n, i, l) => {
                                l()
                            },
                        }),
                    onFinish: () => {},
                })
            return t.convertTo(o, r)
        }),
            (ss = { wrapper: rs, name: 'aws-lambda', supportStreaming: !1 })
    })
async function ie(e, t) {
    let r = await crypto.subtle.importKey(
        'raw',
        typeof e == 'string' ? Fe.encode(e) : e,
        { name: 'HMAC', hash: { name: 'SHA-256' } },
        !1,
        ['sign']
    )
    return crypto.subtle.sign('HMAC', r, Fe.encode(t))
}
async function Wt(e) {
    return crypto.subtle.digest(
        'SHA-256',
        typeof e == 'string' ? Fe.encode(e) : e
    )
}
function Be(e) {
    let t = new Uint8Array(e),
        r = ''
    for (let s = 0; s < t.length; s++) {
        let a = t[s]
        ;(r += zt[(a >>> 4) & 15]), (r += zt[a & 15])
    }
    return r
}
function Kt(e) {
    return e.replace(
        /[!'()*]/g,
        (t) => '%' + t.charCodeAt(0).toString(16).toUpperCase()
    )
}
function ns(e, t) {
    let { hostname: r, pathname: s } = e
    if (r.endsWith('.on.aws')) {
        let i = r.match(/^[^.]{1,63}\.lambda-url\.([^.]{1,63})\.on\.aws$/)
        return i != null ? ['lambda', i[1] || ''] : ['', '']
    }
    if (r.endsWith('.r2.cloudflarestorage.com')) return ['s3', 'auto']
    if (r.endsWith('.backblazeb2.com')) {
        let i = r.match(/^(?:[^.]{1,63}\.)?s3\.([^.]{1,63})\.backblazeb2\.com$/)
        return i != null ? ['s3', i[1] || ''] : ['', '']
    }
    let a = r
            .replace('dualstack.', '')
            .match(/([^.]{1,63})\.(?:([^.]{0,63})\.)?amazonaws\.com(?:\.cn)?$/),
        o = (a && a[1]) || '',
        n = a && a[2]
    if (n === 'us-gov') n = 'us-gov-west-1'
    else if (n === 's3' || n === 's3-accelerate') (n = 'us-east-1'), (o = 's3')
    else if (o === 'iot')
        r.startsWith('iot.')
            ? (o = 'execute-api')
            : r.startsWith('data.jobs.iot.')
              ? (o = 'iot-jobs-data')
              : (o = s === '/mqtt' ? 'iotdevicegateway' : 'iotdata')
    else if (o === 'autoscaling') {
        let i = (t.get('X-Amz-Target') || '').split('.')[0]
        i === 'AnyScaleFrontendService'
            ? (o = 'application-autoscaling')
            : i === 'AnyScaleScalingPlannerFrontendService' &&
              (o = 'autoscaling-plans')
    } else
        n == null && o.startsWith('s3-')
            ? ((n = o.slice(3).replace(/^fips-|^external-1/, '')), (o = 's3'))
            : o.endsWith('-fips')
              ? (o = o.slice(0, -5))
              : n && /-\d$/.test(o) && !/-\d$/.test(n) && ([o, n] = [n, o])
    return [as[o] || o, n || '']
}
var Fe,
    as,
    os,
    F,
    qe,
    zt,
    be = A(() => {
        ;(Fe = new TextEncoder()),
            (as = {
                appstream2: 'appstream',
                cloudhsmv2: 'cloudhsm',
                email: 'ses',
                marketplace: 'aws-marketplace',
                mobile: 'AWSMobileHubService',
                pinpoint: 'mobiletargeting',
                queue: 'sqs',
                'git-codecommit': 'codecommit',
                'mturk-requester-sandbox': 'mturk-requester',
                'personalize-runtime': 'personalize',
            }),
            (os = new Set([
                'authorization',
                'content-type',
                'content-length',
                'user-agent',
                'presigned-expires',
                'expect',
                'x-amzn-trace-id',
                'range',
                'connection',
            ])),
            (F = class {
                constructor({
                    accessKeyId: t,
                    secretAccessKey: r,
                    sessionToken: s,
                    service: a,
                    region: o,
                    cache: n,
                    retries: i,
                    initRetryMs: l,
                }) {
                    if (t == null)
                        throw new TypeError('accessKeyId is a required option')
                    if (r == null)
                        throw new TypeError(
                            'secretAccessKey is a required option'
                        )
                    ;(this.accessKeyId = t),
                        (this.secretAccessKey = r),
                        (this.sessionToken = s),
                        (this.service = a),
                        (this.region = o),
                        (this.cache = n || new Map()),
                        (this.retries = i ?? 10),
                        (this.initRetryMs = l || 50)
                }
                async sign(t, r) {
                    if (t instanceof Request) {
                        let { method: o, url: n, headers: i, body: l } = t
                        ;(r = Object.assign(
                            { method: o, url: n, headers: i },
                            r
                        )),
                            r.body == null &&
                                i.has('Content-Type') &&
                                (r.body =
                                    l != null && i.has('X-Amz-Content-Sha256')
                                        ? l
                                        : await t.clone().arrayBuffer()),
                            (t = n)
                    }
                    let s = new qe(
                            Object.assign(
                                { url: t.toString() },
                                r,
                                this,
                                r && r.aws
                            )
                        ),
                        a = Object.assign({}, r, await s.sign())
                    delete a.aws
                    try {
                        return new Request(a.url.toString(), a)
                    } catch (o) {
                        if (o instanceof TypeError)
                            return new Request(
                                a.url.toString(),
                                Object.assign({ duplex: 'half' }, a)
                            )
                        throw o
                    }
                }
                async fetch(t, r) {
                    for (let s = 0; s <= this.retries; s++) {
                        let a = fetch(await this.sign(t, r))
                        if (s === this.retries) return a
                        let o = await a
                        if (o.status < 500 && o.status !== 429) return o
                        await new Promise((n) =>
                            setTimeout(
                                n,
                                Math.random() *
                                    this.initRetryMs *
                                    Math.pow(2, s)
                            )
                        )
                    }
                    throw new Error(
                        'An unknown error occurred, ensure retries is not negative'
                    )
                }
            }),
            (qe = class {
                constructor({
                    method: t,
                    url: r,
                    headers: s,
                    body: a,
                    accessKeyId: o,
                    secretAccessKey: n,
                    sessionToken: i,
                    service: l,
                    region: u,
                    cache: d,
                    datetime: c,
                    signQuery: h,
                    appendSessionToken: f,
                    allHeaders: m,
                    singleEncode: E,
                }) {
                    if (r == null)
                        throw new TypeError('url is a required option')
                    if (o == null)
                        throw new TypeError('accessKeyId is a required option')
                    if (n == null)
                        throw new TypeError(
                            'secretAccessKey is a required option'
                        )
                    ;(this.method = t || (a ? 'POST' : 'GET')),
                        (this.url = new URL(r)),
                        (this.headers = new Headers(s || {})),
                        (this.body = a),
                        (this.accessKeyId = o),
                        (this.secretAccessKey = n),
                        (this.sessionToken = i)
                    let y, v
                    ;(!l || !u) && ([y, v] = ns(this.url, this.headers)),
                        (this.service = l || y || ''),
                        (this.region = u || v || 'us-east-1'),
                        (this.cache = d || new Map()),
                        (this.datetime =
                            c ||
                            new Date()
                                .toISOString()
                                .replace(/[:-]|\.\d{3}/g, '')),
                        (this.signQuery = h),
                        (this.appendSessionToken =
                            f || this.service === 'iotdevicegateway'),
                        this.headers.delete('Host'),
                        this.service === 's3' &&
                            !this.signQuery &&
                            !this.headers.has('X-Amz-Content-Sha256') &&
                            this.headers.set(
                                'X-Amz-Content-Sha256',
                                'UNSIGNED-PAYLOAD'
                            )
                    let x = this.signQuery
                        ? this.url.searchParams
                        : this.headers
                    if (
                        (x.set('X-Amz-Date', this.datetime),
                        this.sessionToken &&
                            !this.appendSessionToken &&
                            x.set('X-Amz-Security-Token', this.sessionToken),
                        (this.signableHeaders = ['host', ...this.headers.keys()]
                            .filter((p) => m || !os.has(p))
                            .sort()),
                        (this.signedHeaders = this.signableHeaders.join(';')),
                        (this.canonicalHeaders = this.signableHeaders.map(
                            (p) =>
                                p +
                                ':' +
                                (p === 'host'
                                    ? this.url.host
                                    : (this.headers.get(p) || '').replace(
                                          /\s+/g,
                                          ' '
                                      ))
                        ).join(`
`)),
                        (this.credentialString = [
                            this.datetime.slice(0, 8),
                            this.region,
                            this.service,
                            'aws4_request',
                        ].join('/')),
                        this.signQuery &&
                            (this.service === 's3' &&
                                !x.has('X-Amz-Expires') &&
                                x.set('X-Amz-Expires', '86400'),
                            x.set('X-Amz-Algorithm', 'AWS4-HMAC-SHA256'),
                            x.set(
                                'X-Amz-Credential',
                                this.accessKeyId + '/' + this.credentialString
                            ),
                            x.set('X-Amz-SignedHeaders', this.signedHeaders)),
                        this.service === 's3')
                    )
                        try {
                            this.encodedPath = decodeURIComponent(
                                this.url.pathname.replace(/\+/g, ' ')
                            )
                        } catch {
                            this.encodedPath = this.url.pathname
                        }
                    else
                        this.encodedPath = this.url.pathname.replace(
                            /\/+/g,
                            '/'
                        )
                    E ||
                        (this.encodedPath = encodeURIComponent(
                            this.encodedPath
                        ).replace(/%2F/g, '/')),
                        (this.encodedPath = Kt(this.encodedPath))
                    let w = new Set()
                    this.encodedSearch = [...this.url.searchParams]
                        .filter(([p]) => {
                            if (!p) return !1
                            if (this.service === 's3') {
                                if (w.has(p)) return !1
                                w.add(p)
                            }
                            return !0
                        })
                        .map((p) => p.map((b) => Kt(encodeURIComponent(b))))
                        .sort(([p, b], [R, I]) =>
                            p < R ? -1 : p > R ? 1 : b < I ? -1 : b > I ? 1 : 0
                        )
                        .map((p) => p.join('='))
                        .join('&')
                }
                async sign() {
                    return (
                        this.signQuery
                            ? (this.url.searchParams.set(
                                  'X-Amz-Signature',
                                  await this.signature()
                              ),
                              this.sessionToken &&
                                  this.appendSessionToken &&
                                  this.url.searchParams.set(
                                      'X-Amz-Security-Token',
                                      this.sessionToken
                                  ))
                            : this.headers.set(
                                  'Authorization',
                                  await this.authHeader()
                              ),
                        {
                            method: this.method,
                            url: this.url,
                            headers: this.headers,
                            body: this.body,
                        }
                    )
                }
                async authHeader() {
                    return [
                        'AWS4-HMAC-SHA256 Credential=' +
                            this.accessKeyId +
                            '/' +
                            this.credentialString,
                        'SignedHeaders=' + this.signedHeaders,
                        'Signature=' + (await this.signature()),
                    ].join(', ')
                }
                async signature() {
                    let t = this.datetime.slice(0, 8),
                        r = [
                            this.secretAccessKey,
                            t,
                            this.region,
                            this.service,
                        ].join(),
                        s = this.cache.get(r)
                    if (!s) {
                        let a = await ie('AWS4' + this.secretAccessKey, t),
                            o = await ie(a, this.region),
                            n = await ie(o, this.service)
                        ;(s = await ie(n, 'aws4_request')), this.cache.set(r, s)
                    }
                    return Be(await ie(s, await this.stringToSign()))
                }
                async stringToSign() {
                    return [
                        'AWS4-HMAC-SHA256',
                        this.datetime,
                        this.credentialString,
                        Be(await Wt(await this.canonicalString())),
                    ].join(`
`)
                }
                async canonicalString() {
                    return [
                        this.method.toUpperCase(),
                        this.encodedPath,
                        this.encodedSearch,
                        this.canonicalHeaders +
                            `
`,
                        this.signedHeaders,
                        await this.hexBodyHash(),
                    ].join(`
`)
                }
                async hexBodyHash() {
                    let t =
                        this.headers.get('X-Amz-Content-Sha256') ||
                        (this.service === 's3' && this.signQuery
                            ? 'UNSIGNED-PAYLOAD'
                            : null)
                    if (t == null) {
                        if (
                            this.body &&
                            typeof this.body != 'string' &&
                            !('byteLength' in this.body)
                        )
                            throw new Error(
                                'body must be a string, ArrayBuffer or ArrayBufferView, unless you include the X-Amz-Content-Sha256 header'
                            )
                        t = Be(await Wt(this.body || ''))
                    }
                    return t
                }
            })
        zt = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
        ]
    })
var Ee,
    O,
    Ce = A(() => {
        ;(Ee = class extends Error {
            __openNextInternal = !0
            canIgnore = !0
            logLevel = 0
            constructor(t) {
                super(t), (this.name = 'IgnorableError')
            }
        }),
            (O = class extends Error {
                __openNextInternal = !0
                canIgnore = !0
                logLevel = 1
                constructor(t) {
                    super(t), (this.name = 'RecoverableError')
                }
            })
    })
function V(e) {
    return async (t, r) => {
        let s = await e.sign(t, r),
            a = {}
        return (
            s.headers.forEach((i, l) => {
                a[l] = i
            }),
            (
                await globalThis.internalFetch(s.url, {
                    method: s.method,
                    headers: a,
                    body: r.body,
                })
            ).clone()
        )
    }
}
var _e = A(() => {})
var Xt,
    Qt = A(() => {
        Xt = () => {
            let e = process.env.DYNAMO_BATCH_WRITE_COMMAND_CONCURRENCY,
                t = e ? parseInt(e) : void 0
            return t && !isNaN(t) ? t : 4
        }
    })
var Gt = {}
Z(Gt, { default: () => ps })
import cs from 'path'
function ce(e) {
    let { NEXT_BUILD_ID: t } = process.env
    return cs.posix.join(t ?? '', e)
}
function ls(e, t, r) {
    return {
        path: { S: ce(e) },
        tag: { S: ce(t) },
        revalidatedAt: { N: `${r ?? Date.now()}` },
    }
}
var Ae,
    ds,
    Re,
    us,
    ps,
    Yt = A(() => {
        be()
        Ce()
        _e()
        N()
        ee()
        Qt()
        ;(Ae = null),
            (ds = () => {
                let { CACHE_BUCKET_REGION: e } = process.env
                return (
                    Ae ||
                    ((Ae = new F({
                        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        sessionToken: process.env.AWS_SESSION_TOKEN,
                        region: e,
                        retries: de(process.env.AWS_SDK_S3_MAX_ATTEMPTS),
                    })),
                    Ae)
                )
            }),
            (Re = (e, t = 'query') => {
                let { CACHE_BUCKET_REGION: r } = process.env,
                    s = ds()
                return V(s)(`https://dynamodb.${r}.amazonaws.com`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-amz-json-1.0',
                        'X-Amz-Target': `DynamoDB_20120810.${t === 'query' ? 'Query' : 'BatchWriteItem'}`,
                    },
                    body: e,
                })
            })
        ;(us = {
            async getByPath(e) {
                try {
                    if (globalThis.disableDynamoDBCache) return []
                    let { CACHE_DYNAMO_TABLE: t, NEXT_BUILD_ID: r } =
                            process.env,
                        s = await Re(
                            JSON.stringify({
                                TableName: t,
                                IndexName: 'revalidate',
                                KeyConditionExpression: '#key = :key',
                                ExpressionAttributeNames: { '#key': 'path' },
                                ExpressionAttributeValues: {
                                    ':key': { S: ce(e) },
                                },
                            })
                        )
                    if (s.status !== 200)
                        throw new O(`Failed to get tags by path: ${s.status}`)
                    let { Items: a } = await s.json(),
                        o = a?.map((n) => n.tag.S ?? '') ?? []
                    return (
                        g('tags for path', e, o),
                        o.map((n) => n.replace(`${r}/`, ''))
                    )
                } catch (t) {
                    return T('Failed to get tags by path', t), []
                }
            },
            async getByTag(e) {
                try {
                    if (globalThis.disableDynamoDBCache) return []
                    let { CACHE_DYNAMO_TABLE: t, NEXT_BUILD_ID: r } =
                            process.env,
                        s = await Re(
                            JSON.stringify({
                                TableName: t,
                                KeyConditionExpression: '#tag = :tag',
                                ExpressionAttributeNames: { '#tag': 'tag' },
                                ExpressionAttributeValues: {
                                    ':tag': { S: ce(e) },
                                },
                            })
                        )
                    if (s.status !== 200)
                        throw new O(`Failed to get by tag: ${s.status}`)
                    let { Items: a } = await s.json()
                    return (
                        a?.map(
                            ({ path: { S: o } }) =>
                                o?.replace(`${r}/`, '') ?? ''
                        ) ?? []
                    )
                } catch (t) {
                    return T('Failed to get by tag', t), []
                }
            },
            async getLastModified(e, t) {
                try {
                    if (globalThis.disableDynamoDBCache) return t ?? Date.now()
                    let { CACHE_DYNAMO_TABLE: r } = process.env,
                        s = await Re(
                            JSON.stringify({
                                TableName: r,
                                IndexName: 'revalidate',
                                KeyConditionExpression:
                                    '#key = :key AND #revalidatedAt > :lastModified',
                                ExpressionAttributeNames: {
                                    '#key': 'path',
                                    '#revalidatedAt': 'revalidatedAt',
                                },
                                ExpressionAttributeValues: {
                                    ':key': { S: ce(e) },
                                    ':lastModified': { N: String(t ?? 0) },
                                },
                            })
                        )
                    if (s.status !== 200)
                        throw new O(`Failed to get last modified: ${s.status}`)
                    let a = (await s.json()).Items ?? []
                    return (
                        g('revalidatedTags', a),
                        a.length > 0 ? -1 : (t ?? Date.now())
                    )
                } catch (r) {
                    return (
                        T('Failed to get revalidated tags', r), t ?? Date.now()
                    )
                }
            },
            async writeTags(e) {
                try {
                    let { CACHE_DYNAMO_TABLE: t } = process.env
                    if (globalThis.disableDynamoDBCache) return
                    let r = Pe(e, 25).map((a) => ({
                            RequestItems: {
                                [t ?? '']: a.map((o) => ({
                                    PutRequest: {
                                        Item: {
                                            ...ls(
                                                o.path,
                                                o.tag,
                                                o.revalidatedAt
                                            ),
                                        },
                                    },
                                })),
                            },
                        })),
                        s = Pe(r, Xt())
                    for (let a of s)
                        await Promise.all(
                            a.map(async (o) => {
                                let n = await Re(
                                    JSON.stringify(o),
                                    'batchWrite'
                                )
                                if (n.status !== 200)
                                    throw new O(
                                        `Failed to batch write dynamo item: ${n.status}`
                                    )
                                return n
                            })
                        )
                } catch (t) {
                    T('Failed to batch write dynamo item', t)
                }
            },
            name: 'dynamoDb',
        }),
            (ps = us)
    })
var Jt = {}
Z(Jt, { default: () => gs })
var Se,
    fs,
    hs,
    ms,
    gs,
    Vt = A(() => {
        be()
        Ce()
        _e()
        N()
        ;(Se = null),
            (fs = () =>
                Se ||
                ((Se = new F({
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                    sessionToken: process.env.AWS_SESSION_TOKEN,
                    region: process.env.REVALIDATION_QUEUE_REGION,
                })),
                Se)),
            (hs = (e) => {
                let { REVALIDATION_QUEUE_REGION: t } = process.env,
                    r = fs()
                return V(r)(`https://sqs.${t ?? 'us-east-1'}.amazonaws.com`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-amz-json-1.0',
                        'X-Amz-Target': 'AmazonSQS.SendMessage',
                    },
                    body: e,
                })
            }),
            (ms = {
                send: async ({
                    MessageBody: e,
                    MessageDeduplicationId: t,
                    MessageGroupId: r,
                }) => {
                    try {
                        let { REVALIDATION_QUEUE_URL: s } = process.env,
                            a = await hs(
                                JSON.stringify({
                                    QueueUrl: s,
                                    MessageBody: JSON.stringify(e),
                                    MessageDeduplicationId: t,
                                    MessageGroupId: r,
                                })
                            )
                        if (a.status !== 200)
                            throw new O(`Failed to send message: ${a.status}`)
                    } catch (s) {
                        T(s)
                    }
                },
                name: 'sqs',
            }),
            (gs = ms)
    })
var Zt = {}
Z(Zt, { default: () => vs })
import ys from 'path'
function Ue(e, t) {
    let { CACHE_BUCKET_KEY_PREFIX: r, NEXT_BUILD_ID: s } = process.env
    return ys.posix.join(
        r ?? '',
        t === 'fetch' ? '__fetch' : '',
        s ?? '',
        t === 'fetch' ? e : `${e}.${t}`
    )
}
var Te,
    xs,
    $e,
    ws,
    vs,
    er = A(() => {
        be()
        Ce()
        _e()
        ee()
        ;(Te = null),
            (xs = () => {
                let { CACHE_BUCKET_REGION: e } = process.env
                return (
                    Te ||
                    ((Te = new F({
                        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        sessionToken: process.env.AWS_SESSION_TOKEN,
                        region: e,
                        retries: de(process.env.AWS_SDK_S3_MAX_ATTEMPTS),
                    })),
                    Te)
                )
            }),
            ($e = async (e, t) => {
                let { CACHE_BUCKET_REGION: r, CACHE_BUCKET_NAME: s } =
                        process.env,
                    a = xs(),
                    o = `https://${s}.s3.${r}.amazonaws.com/${e}`
                return V(a)(o, t)
            })
        ;(ws = {
            async get(e, t) {
                let r = await $e(Ue(e, t ? 'fetch' : 'cache'), {
                    method: 'GET',
                })
                if (r.status === 404) throw new Ee('Not found')
                if (r.status !== 200)
                    throw new O(`Failed to get cache: ${r.status}`)
                return {
                    value: await r.json(),
                    lastModified: new Date(
                        r.headers.get('last-modified') ?? ''
                    ).getTime(),
                }
            },
            async set(e, t, r) {
                let s = await $e(Ue(e, r ? 'fetch' : 'cache'), {
                    method: 'PUT',
                    body: JSON.stringify(t),
                })
                if (s.status !== 200)
                    throw new O(`Failed to set cache: ${s.status}`)
            },
            async delete(e) {
                let t = await $e(Ue(e, 'cache'), { method: 'DELETE' })
                if (t.status !== 204)
                    throw new O(`Failed to delete cache: ${t.status}`)
            },
            name: 's3',
        }),
            (vs = ws)
    })
D()
N()
ee()
import { AsyncLocalStorage as Kr } from 'node:async_hooks'
Me()
import hr from 'node:http'
var te = class extends hr.IncomingMessage {
    constructor({ method: t, url: r, headers: s, body: a, remoteAddress: o }) {
        super({
            encrypted: !0,
            readable: !1,
            remoteAddress: o,
            address: () => ({ port: 443 }),
            end: Function.prototype,
            destroy: Function.prototype,
        }),
            typeof s['content-length'] > 'u' &&
                (s['content-length'] = Buffer.byteLength(a).toString()),
            Object.assign(this, {
                ip: o,
                complete: !0,
                httpVersion: '1.1',
                httpVersionMajor: '1',
                httpVersionMinor: '1',
                method: t,
                headers: s,
                body: a,
                url: r,
            }),
            (this._read = () => {
                this.push(a), this.push(null)
            })
    }
}
N()
var he = class {
        resolve
        reject
        promise
        constructor() {
            let t, r
            ;(this.promise = new Promise((s, a) => {
                ;(t = s), (r = a)
            })),
                (this.resolve = t),
                (this.reject = r)
        }
    },
    me = class {
        promises = []
        withResolvers() {
            let t = new he()
            return this.promises.push(t), t
        }
        add(t) {
            let r = new he()
            this.promises.push(r), t.then(r.resolve, r.reject)
        }
        async await() {
            g(`Awaiting ${this.promises.length} detached promises`),
                (await Promise.allSettled(this.promises.map((s) => s.promise)))
                    .filter((s) => s.status === 'rejected')
                    .forEach((s) => {
                        T(s.reason)
                    })
        }
    }
N()
var ge = k('module'),
    mr = ge._resolveFilename
function at() {
    ge._resolveFilename = function (e, t, r, s, a) {
        return t.endsWith('static-generation-async-storage.external') ||
            t.endsWith('static-generation-async-storage.external.js')
            ? k.resolve('./patchedAsyncStorage.cjs')
            : t.endsWith('static-generation-async-storage.external.original')
              ? e.call(ge, t.replace('.original', '.js'), r, s, a)
              : e.call(ge, t, r, s, a)
    }.bind(null, mr)
}
G()
D()
N()
D()
ae()
N()
import { createHash as Tr } from 'node:crypto'
D()
N()
function _r(e, t, r) {
    let s = new Map(),
        a = e.replace(/[ \t]/g, '')
    if (t) {
        let d = 0
        for (let c of t) {
            let h = c.toLowerCase()
            if ((s.set(h, { orig: c, pos: d++ }), r.prefixMatch)) {
                let f = h.split('-')
                for (; f.pop(), f.length > 0; ) {
                    let m = f.join('-')
                    s.has(m) || s.set(m, { orig: c, pos: d++ })
                }
            }
        }
    }
    let o = a.split(','),
        n = [],
        i = new Set()
    for (let d = 0; d < o.length; ++d) {
        let c = o[d]
        if (!c) continue
        let h = c.split(';')
        if (h.length > 2) throw new Error(`Invalid ${r.type} header`)
        let f = h[0].toLowerCase()
        if (!f) throw new Error(`Invalid ${r.type} header`)
        let m = { token: f, pos: d, q: 1 }
        if (
            (t && s.has(f) && (m.pref = s.get(f).pos),
            i.add(m.token),
            h.length === 2)
        ) {
            let E = h[1],
                [y, v] = E.split('=')
            if (!v || (y !== 'q' && y !== 'Q'))
                throw new Error(`Invalid ${r.type} header`)
            let x = parseFloat(v)
            if (x === 0) continue
            Number.isFinite(x) && x <= 1 && x >= 0.001 && (m.q = x)
        }
        n.push(m)
    }
    n.sort((d, c) =>
        c.q !== d.q
            ? c.q - d.q
            : c.pref !== d.pref
              ? d.pref === void 0
                  ? 1
                  : c.pref === void 0
                    ? -1
                    : d.pref - c.pref
              : d.pos - c.pos
    )
    let l = n.map((d) => d.token)
    if (!t || !t.length) return l
    let u = []
    for (let d of l)
        if (d === '*') for (let [c, h] of s) i.has(c) || u.push(h.orig)
        else {
            let c = d.toLowerCase()
            s.has(c) && u.push(s.get(c).orig)
        }
    return u
}
function yt(e = '', t) {
    return _r(e, t, { type: 'accept-language', prefixMatch: !0 })[0] || void 0
}
function Ar(e) {
    return C.i18n?.locales.includes(e.split('/')[1].toLowerCase()) ?? !1
}
function Rr(e) {
    let t = C.i18n,
        r = e.NEXT_LOCALE?.toLowerCase()
    return r ? t?.locales.find((s) => r === s.toLowerCase()) : void 0
}
function Sr(e, t) {
    let r = Rr(e.cookies),
        s = yt(e.headers['accept-language'], t?.locales)
    return (
        g({
            cookiesLocale: r,
            preferredLocale: s,
            defaultLocale: t.defaultLocale,
        }),
        r ?? s ?? t.defaultLocale
    )
}
function X(e) {
    let t = C.i18n
    return !t || Ar(e.rawPath) ? e.rawPath : `/${Sr(e, t)}${e.rawPath}`
}
G()
var oe = 60 * 60 * 24 * 365,
    xt = 60 * 60 * 24 * 30
async function wt(e, t, r, s, a) {
    let o = oe,
        n = Object.entries(U.routes).find((d) => d[0] === e)?.[1]
    s === void 0 && n
        ? (o =
              n.initialRevalidateSeconds === !1
                  ? oe
                  : n.initialRevalidateSeconds)
        : s !== void 0 && (o = s === !1 ? oe : s)
    let i = Math.round((Date.now() - (a ?? 0)) / 1e3),
        l = (d) => Tr('md5').update(d).digest('hex'),
        u = l(t)
    if (s === 0)
        return {
            'cache-control':
                'private, no-cache, no-store, max-age=0, must-revalidate',
            'x-opennext-cache': 'ERROR',
            etag: u,
        }
    if (o !== oe) {
        let d = Math.max(o - i, 1)
        g('sMaxAge', {
            finalRevalidate: o,
            age: i,
            lastModified: a,
            revalidate: s,
        })
        let c = d === 1
        if (c) {
            let h = C.trailingSlash ? `${e}/` : e
            C.basePath && (h = `${C.basePath}${h}`),
                await globalThis.queue.send({
                    MessageBody: { host: r, url: h },
                    MessageDeduplicationId: l(`${e}-${a}-${u}`),
                    MessageGroupId: Oe(e),
                })
        }
        return {
            'cache-control': `s-maxage=${d}, stale-while-revalidate=${xt}`,
            'x-opennext-cache': c ? 'STALE' : 'HIT',
            etag: u,
        }
    } else
        return {
            'cache-control': `s-maxage=${oe}, stale-while-revalidate=${xt}`,
            'x-opennext-cache': 'HIT',
            etag: u,
        }
}
async function Nr(e, t, r, s) {
    g('Returning result from experimental cache')
    let a = '',
        o = 'application/octet-stream',
        n = !1
    switch (r.type) {
        case 'app':
            ;(n = !!e.headers.rsc),
                (a = n ? r.rsc : r.html),
                (o = n ? 'text/x-component' : 'text/html; charset=utf-8')
            break
        case 'page':
            ;(n = !!e.query.__nextDataReq),
                (a = n ? JSON.stringify(r.json) : r.html),
                (o = n ? 'application/json' : 'text/html; charset=utf-8')
            break
    }
    let i = await wt(t, a, e.headers.host, r.revalidate, s)
    return {
        type: 'core',
        statusCode: 200,
        body: we(a, !1),
        isBase64Encoded: !1,
        headers: { ...i, 'content-type': o, ...r.meta?.headers },
    }
}
async function vt(e) {
    if (e.headers['next-action'] || e.headers['x-prerender-revalidate'])
        return e
    let t = X(e)
    C.basePath && (t = t.replace(C.basePath, '')),
        (t = t.replace(/\/$/, '')),
        t === '' && (t = 'index'),
        g('Checking cache for', t, U)
    let r =
        Object.keys(U.routes).includes(t) ||
        Object.values(U.dynamicRoutes).some((s) =>
            new RegExp(s.routeRegex).test(t)
        )
    if ((g('isISR', r), r))
        try {
            let s = await globalThis.incrementalCache.get(t)
            if (
                (g('cached data in interceptor', s),
                s.value?.type === 'app' &&
                    (await globalThis.tagCache.getLastModified(
                        t,
                        s.lastModified
                    )) === -1)
            )
                return e
            let a = e.headers.host
            switch (s.value?.type) {
                case 'app':
                case 'page':
                    return Nr(e, t, s.value, s.lastModified)
                case 'redirect':
                    let o = await wt(
                        t,
                        '',
                        a,
                        s.value.revalidate,
                        s.lastModified
                    )
                    return {
                        type: 'core',
                        statusCode: s.value.meta?.status ?? 307,
                        body: K(),
                        headers: { ...(s.value.meta?.headers ?? {}), ...o },
                        isBase64Encoded: !1,
                    }
                default:
                    return e
            }
        } catch (s) {
            return g('Error while fetching cache', s), e
        }
    return e
}
D()
function Hr(e) {
    for (var t = [], r = 0; r < e.length; ) {
        var s = e[r]
        if (s === '*' || s === '+' || s === '?') {
            t.push({ type: 'MODIFIER', index: r, value: e[r++] })
            continue
        }
        if (s === '\\') {
            t.push({ type: 'ESCAPED_CHAR', index: r++, value: e[r++] })
            continue
        }
        if (s === '{') {
            t.push({ type: 'OPEN', index: r, value: e[r++] })
            continue
        }
        if (s === '}') {
            t.push({ type: 'CLOSE', index: r, value: e[r++] })
            continue
        }
        if (s === ':') {
            for (var a = '', o = r + 1; o < e.length; ) {
                var n = e.charCodeAt(o)
                if (
                    (n >= 48 && n <= 57) ||
                    (n >= 65 && n <= 90) ||
                    (n >= 97 && n <= 122) ||
                    n === 95
                ) {
                    a += e[o++]
                    continue
                }
                break
            }
            if (!a) throw new TypeError('Missing parameter name at '.concat(r))
            t.push({ type: 'NAME', index: r, value: a }), (r = o)
            continue
        }
        if (s === '(') {
            var i = 1,
                l = '',
                o = r + 1
            if (e[o] === '?')
                throw new TypeError(
                    'Pattern cannot start with "?" at '.concat(o)
                )
            for (; o < e.length; ) {
                if (e[o] === '\\') {
                    l += e[o++] + e[o++]
                    continue
                }
                if (e[o] === ')') {
                    if ((i--, i === 0)) {
                        o++
                        break
                    }
                } else if (e[o] === '(' && (i++, e[o + 1] !== '?'))
                    throw new TypeError(
                        'Capturing groups are not allowed at '.concat(o)
                    )
                l += e[o++]
            }
            if (i) throw new TypeError('Unbalanced pattern at '.concat(r))
            if (!l) throw new TypeError('Missing pattern at '.concat(r))
            t.push({ type: 'PATTERN', index: r, value: l }), (r = o)
            continue
        }
        t.push({ type: 'CHAR', index: r, value: e[r++] })
    }
    return t.push({ type: 'END', index: r, value: '' }), t
}
function bt(e, t) {
    t === void 0 && (t = {})
    for (
        var r = Hr(e),
            s = t.prefixes,
            a = s === void 0 ? './' : s,
            o = t.delimiter,
            n = o === void 0 ? '/#?' : o,
            i = [],
            l = 0,
            u = 0,
            d = '',
            c = function (S) {
                if (u < r.length && r[u].type === S) return r[u++].value
            },
            h = function (S) {
                var _ = c(S)
                if (_ !== void 0) return _
                var H = r[u],
                    Ne = H.type,
                    ir = H.index
                throw new TypeError(
                    'Unexpected '
                        .concat(Ne, ' at ')
                        .concat(ir, ', expected ')
                        .concat(S)
                )
            },
            f = function () {
                for (var S = '', _; (_ = c('CHAR') || c('ESCAPED_CHAR')); )
                    S += _
                return S
            },
            m = function (S) {
                for (var _ = 0, H = n; _ < H.length; _++) {
                    var Ne = H[_]
                    if (S.indexOf(Ne) > -1) return !0
                }
                return !1
            },
            E = function (S) {
                var _ = i[i.length - 1],
                    H = S || (_ && typeof _ == 'string' ? _ : '')
                if (_ && !H)
                    throw new TypeError(
                        'Must have text between two parameters, missing text after "'.concat(
                            _.name,
                            '"'
                        )
                    )
                return !H || m(H)
                    ? '[^'.concat(B(n), ']+?')
                    : '(?:(?!'.concat(B(H), ')[^').concat(B(n), '])+?')
            };
        u < r.length;

    ) {
        var y = c('CHAR'),
            v = c('NAME'),
            x = c('PATTERN')
        if (v || x) {
            var w = y || ''
            a.indexOf(w) === -1 && ((d += w), (w = '')),
                d && (i.push(d), (d = '')),
                i.push({
                    name: v || l++,
                    prefix: w,
                    suffix: '',
                    pattern: x || E(w),
                    modifier: c('MODIFIER') || '',
                })
            continue
        }
        var p = y || c('ESCAPED_CHAR')
        if (p) {
            d += p
            continue
        }
        d && (i.push(d), (d = ''))
        var b = c('OPEN')
        if (b) {
            var w = f(),
                R = c('NAME') || '',
                I = c('PATTERN') || '',
                j = f()
            h('CLOSE'),
                i.push({
                    name: R || (I ? l++ : ''),
                    pattern: R && !I ? E(w) : I,
                    prefix: w,
                    suffix: j,
                    modifier: c('MODIFIER') || '',
                })
            continue
        }
        h('END')
    }
    return i
}
function J(e, t) {
    return Pr(bt(e, t), t)
}
function Pr(e, t) {
    t === void 0 && (t = {})
    var r = ke(t),
        s = t.encode,
        a =
            s === void 0
                ? function (l) {
                      return l
                  }
                : s,
        o = t.validate,
        n = o === void 0 ? !0 : o,
        i = e.map(function (l) {
            if (typeof l == 'object')
                return new RegExp('^(?:'.concat(l.pattern, ')$'), r)
        })
    return function (l) {
        for (var u = '', d = 0; d < e.length; d++) {
            var c = e[d]
            if (typeof c == 'string') {
                u += c
                continue
            }
            var h = l ? l[c.name] : void 0,
                f = c.modifier === '?' || c.modifier === '*',
                m = c.modifier === '*' || c.modifier === '+'
            if (Array.isArray(h)) {
                if (!m)
                    throw new TypeError(
                        'Expected "'.concat(
                            c.name,
                            '" to not repeat, but got an array'
                        )
                    )
                if (h.length === 0) {
                    if (f) continue
                    throw new TypeError(
                        'Expected "'.concat(c.name, '" to not be empty')
                    )
                }
                for (var E = 0; E < h.length; E++) {
                    var y = a(h[E], c)
                    if (n && !i[d].test(y))
                        throw new TypeError(
                            'Expected all "'
                                .concat(c.name, '" to match "')
                                .concat(c.pattern, '", but got "')
                                .concat(y, '"')
                        )
                    u += c.prefix + y + c.suffix
                }
                continue
            }
            if (typeof h == 'string' || typeof h == 'number') {
                var y = a(String(h), c)
                if (n && !i[d].test(y))
                    throw new TypeError(
                        'Expected "'
                            .concat(c.name, '" to match "')
                            .concat(c.pattern, '", but got "')
                            .concat(y, '"')
                    )
                u += c.prefix + y + c.suffix
                continue
            }
            if (!f) {
                var v = m ? 'an array' : 'a string'
                throw new TypeError(
                    'Expected "'.concat(c.name, '" to be ').concat(v)
                )
            }
        }
        return u
    }
}
function je(e, t) {
    var r = [],
        s = Et(e, r, t)
    return Mr(s, r, t)
}
function Mr(e, t, r) {
    r === void 0 && (r = {})
    var s = r.decode,
        a =
            s === void 0
                ? function (o) {
                      return o
                  }
                : s
    return function (o) {
        var n = e.exec(o)
        if (!n) return !1
        for (
            var i = n[0],
                l = n.index,
                u = Object.create(null),
                d = function (h) {
                    if (n[h] === void 0) return 'continue'
                    var f = t[h - 1]
                    f.modifier === '*' || f.modifier === '+'
                        ? (u[f.name] = n[h]
                              .split(f.prefix + f.suffix)
                              .map(function (m) {
                                  return a(m, f)
                              }))
                        : (u[f.name] = a(n[h], f))
                },
                c = 1;
            c < n.length;
            c++
        )
            d(c)
        return { path: i, index: l, params: u }
    }
}
function B(e) {
    return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}
function ke(e) {
    return e && e.sensitive ? '' : 'i'
}
function Or(e, t) {
    if (!t) return e
    for (var r = /\((?:\?<(.*?)>)?(?!\?)/g, s = 0, a = r.exec(e.source); a; )
        t.push({
            name: a[1] || s++,
            prefix: '',
            suffix: '',
            modifier: '',
            pattern: '',
        }),
            (a = r.exec(e.source))
    return e
}
function Ir(e, t, r) {
    var s = e.map(function (a) {
        return Et(a, t, r).source
    })
    return new RegExp('(?:'.concat(s.join('|'), ')'), ke(r))
}
function jr(e, t, r) {
    return kr(bt(e, r), t, r)
}
function kr(e, t, r) {
    r === void 0 && (r = {})
    for (
        var s = r.strict,
            a = s === void 0 ? !1 : s,
            o = r.start,
            n = o === void 0 ? !0 : o,
            i = r.end,
            l = i === void 0 ? !0 : i,
            u = r.encode,
            d =
                u === void 0
                    ? function (_) {
                          return _
                      }
                    : u,
            c = r.delimiter,
            h = c === void 0 ? '/#?' : c,
            f = r.endsWith,
            m = f === void 0 ? '' : f,
            E = '['.concat(B(m), ']|$'),
            y = '['.concat(B(h), ']'),
            v = n ? '^' : '',
            x = 0,
            w = e;
        x < w.length;
        x++
    ) {
        var p = w[x]
        if (typeof p == 'string') v += B(d(p))
        else {
            var b = B(d(p.prefix)),
                R = B(d(p.suffix))
            if (p.pattern)
                if ((t && t.push(p), b || R))
                    if (p.modifier === '+' || p.modifier === '*') {
                        var I = p.modifier === '*' ? '?' : ''
                        v += '(?:'
                            .concat(b, '((?:')
                            .concat(p.pattern, ')(?:')
                            .concat(R)
                            .concat(b, '(?:')
                            .concat(p.pattern, '))*)')
                            .concat(R, ')')
                            .concat(I)
                    } else
                        v += '(?:'
                            .concat(b, '(')
                            .concat(p.pattern, ')')
                            .concat(R, ')')
                            .concat(p.modifier)
                else {
                    if (p.modifier === '+' || p.modifier === '*')
                        throw new TypeError(
                            'Can not repeat "'.concat(
                                p.name,
                                '" without a prefix and suffix'
                            )
                        )
                    v += '('.concat(p.pattern, ')').concat(p.modifier)
                }
            else v += '(?:'.concat(b).concat(R, ')').concat(p.modifier)
        }
    }
    if (l)
        a || (v += ''.concat(y, '?')),
            (v += r.endsWith ? '(?='.concat(E, ')') : '$')
    else {
        var j = e[e.length - 1],
            S =
                typeof j == 'string'
                    ? y.indexOf(j[j.length - 1]) > -1
                    : j === void 0
        a || (v += '(?:'.concat(y, '(?=').concat(E, '))?')),
            S || (v += '(?='.concat(y, '|').concat(E, ')'))
    }
    return new RegExp(v, ke(r))
}
function Et(e, t, r) {
    return e instanceof RegExp
        ? Or(e, t)
        : Array.isArray(e)
          ? Ir(e, t, r)
          : jr(e, t, r)
}
ae()
N()
G()
var _t = (e, t, r) => (s) => {
    switch (s.type) {
        case 'header':
            return (
                !!e?.[s.key.toLowerCase()] &&
                new RegExp(s.value ?? '').test(e[s.key.toLowerCase()] ?? '')
            )
        case 'cookie':
            return (
                !!t?.[s.key] && new RegExp(s.value ?? '').test(t[s.key] ?? '')
            )
        case 'query':
            return r[s.key] && Array.isArray(s.value)
                ? s.value.reduce(
                      (a, o) => a || new RegExp(o).test(r[s.key]),
                      !1
                  )
                : new RegExp(s.value ?? '').test(r[s.key] ?? '')
        case 'host':
            return e?.host !== '' && new RegExp(s.value ?? '').test(e.host)
        default:
            return !1
    }
}
function ve(e, t, r = !1) {
    return t ? t.reduce((s, a) => (s === !1 ? !1 : r ? !e(a) : e(a)), !0) : !0
}
var Dr = (e) => (t) => {
        g('value', t)
        let r = e(t)
        return r ? r.params : {}
    },
    Lr = (e, t, r) => (s) => {
        if (!s.value) return {}
        let a = new RegExp(`^${s.value}$`),
            o = (n) => n.match(a)?.groups ?? {}
        switch (s.type) {
            case 'header':
                return o(e[s.key.toLowerCase()] ?? '')
            case 'cookie':
                return o(t[s.key] ?? '')
            case 'query':
                return Array.isArray(r[s.key])
                    ? o(r[s.key].join(','))
                    : o(r[s.key] ?? '')
            case 'host':
                return o(e.host ?? '')
        }
    }
function Ct(e, t, r) {
    if (e) {
        let { params: s } = e
        return Object.keys(s).length > 0 ? t(s) : r
    } else return r
}
function At(e, t) {
    let r = {}
    if (!t) return r
    let { rawPath: s, headers: a, query: o, cookies: n } = e,
        i = _t(a, n, o),
        l = {},
        u = X(e)
    for (let {
        headers: d,
        has: c,
        missing: h,
        regex: f,
        source: m,
        locale: E,
    } of t) {
        let y = E === !1 ? s : u
        if (new RegExp(f).test(y) && ve(i, c) && ve(i, h, !0)) {
            let x = je(m)(y)
            d.forEach((w) => {
                try {
                    let p = Ct(x, J(w.key), w.key),
                        b = Ct(x, J(w.value), w.value)
                    l[p] = b
                } catch {
                    g('Error matching header ', w.key, ' with value ', w.value),
                        (l[w.key] = w.value)
                }
            })
        }
    }
    return l
}
function ne(e, t) {
    let { rawPath: r, headers: s, query: a, cookies: o } = e,
        n = X(e),
        i = _t(s, o, a),
        l = Lr(s, o, a),
        u = t.find((f) => {
            let m = f.locale === !1 ? r : n
            return (
                new RegExp(f.regex).test(m) &&
                ve(i, f.has) &&
                ve(i, f.missing, !0)
            )
        }),
        d = a,
        c = r,
        h = ye(u?.destination)
    if ((g('isExternalRewrite', h), u)) {
        let {
                pathname: f,
                protocol: m,
                hostname: E,
                queryString: y,
            } = lt(u.destination, h),
            v = u.locale === !1 ? r : n
        g('urlParts', { pathname: f, protocol: m, hostname: E, queryString: y })
        let x = J(se(f ?? '') ?? ''),
            w = J(se(E ?? '') ?? ''),
            p = J(se(y ?? '') ?? ''),
            b = {
                ...Dr(je(se(u?.source) ?? ''))(v),
                ...u.has?.reduce((_, H) => ({ ..._, ...l(H) }), {}),
                ...u.missing?.reduce((_, H) => ({ ..._, ...l(H) }), {}),
            },
            R = Object.keys(b).length > 0,
            I = y,
            j = E,
            S = f
        R && ((S = xe(x(b))), (j = xe(w(b))), (I = xe(p(b)))),
            (c = h ? `${m}//${j}${S}` : `/${S}`),
            (d = { ...a, ...dt(I) }),
            g('rewrittenUrl', {
                rewrittenUrl: c,
                finalQuery: d,
                isUsingParams: R,
            })
    }
    return {
        internalEvent: { ...e, rawPath: c, url: `${c}${re(d)}` },
        __rewrite: u,
        isExternalRewrite: h,
    }
}
function Br(e) {
    let t = new URL(e.url, 'http://localhost'),
        r = K()
    if (
        t.host !== 'localhost' ||
        C.skipTrailingSlashRedirect ||
        e.rawPath.startsWith('/api/')
    )
        return !1
    if (
        C.trailingSlash &&
        !e.headers['x-nextjs-data'] &&
        !e.rawPath.endsWith('/') &&
        !e.rawPath.match(/[\w-]+\.[\w]+$/g)
    ) {
        let s = e.url.split('?')
        return {
            type: e.type,
            statusCode: 308,
            headers: { Location: `${s[0]}/${s[1] ? `?${s[1]}` : ''}` },
            body: r,
            isBase64Encoded: !1,
        }
    } else if (
        !C.trailingSlash &&
        e.rawPath.endsWith('/') &&
        e.rawPath !== '/'
    ) {
        let s = e.url.split('?')
        return {
            type: e.type,
            statusCode: 308,
            headers: {
                Location: `${s[0].replace(/\/$/, '')}${s[1] ? `?${s[1]}` : ''}`,
            },
            body: r,
            isBase64Encoded: !1,
        }
    } else return !1
}
function Rt(e, t) {
    let r = Br(e)
    if (r) return r
    let { internalEvent: s, __rewrite: a } = ne(
        e,
        t.filter((o) => !o.internal)
    )
    if (a && !a.internal)
        return {
            type: e.type,
            statusCode: a.statusCode ?? 308,
            headers: { Location: s.url },
            body: K(),
            isBase64Encoded: !1,
        }
}
function St(e, t) {
    let { rawPath: r, query: s } = e,
        a = `/_next/data/${t}`
    if (r.startsWith('/_next/data') && !r.startsWith(a))
        return {
            type: e.type,
            statusCode: 404,
            body: we('{}'),
            headers: { 'Content-Type': 'application/json' },
            isBase64Encoded: !1,
        }
    if (r.startsWith(a) && r.endsWith('.json')) {
        let o = r.replace(a, '').replace(/\.json$/, '')
        return (
            (o = o === '/index' ? '/' : o),
            (s.__nextDataReq = '1'),
            { ...e, rawPath: o, query: s, url: `${o}${re(s)}` }
        )
    }
    return e
}
function Tt(e, t) {
    let { rawPath: r } = e,
        { dynamicRoutes: s, routes: a } = t,
        o = Object.entries(s)
            .filter(([, { fallback: d }]) => d === !1)
            .some(([, { routeRegex: d }]) => new RegExp(d).test(r)),
        n = C.i18n?.locales,
        l =
            (n !== void 0 && n.includes(r.split('/')[1])) || n === void 0
                ? r
                : `/${C.i18n?.defaultLocale}${r}`,
        u = Object.keys(a).includes(l)
    return o && !u
        ? {
              event: {
                  ...e,
                  rawPath: '/404',
                  url: '/404',
                  headers: { ...e.headers, 'x-invoke-status': '404' },
              },
              isISR: !1,
          }
        : { event: e, isISR: o || u }
}
D()
ae()
G()
var Fr = tt,
    qr = ft(Fr)
function $r() {
    return import('./middleware.mjs')
}
async function Nt(e, t = $r) {
    let { query: r } = e,
        s = X(e)
    if (!qr.some((p) => p.test(s)) || e.headers['x-isr']) return e
    let o = e.headers.host
            ? `https://${e.headers.host}`
            : 'http://localhost:3000',
        n = new URL(s, o)
    n.search = re(r)
    let i = n.toString(),
        u = await (
            await t()
        ).default({
            geo: {
                city: e.headers['x-open-next-city'],
                country: e.headers['x-open-next-country'],
                region: e.headers['x-open-next-region'],
                latitude: e.headers['x-open-next-latitude'],
                longitude: e.headers['x-open-next-longitude'],
            },
            headers: e.headers,
            method: e.method || 'GET',
            nextConfig: {
                basePath: C.basePath,
                i18n: C.i18n,
                trailingSlash: C.trailingSlash,
            },
            url: i,
            body: ht(e.method, e.body),
        }),
        d = u.status,
        c = u.headers,
        h = {},
        f = {}
    c.delete('x-middleware-override-headers')
    let m = 'x-middleware-request-'
    if (
        (c.forEach((p, b) => {
            if (b.startsWith(m)) {
                let R = b.substring(m.length)
                h[R] = p
            } else
                b.toLowerCase() === 'set-cookie'
                    ? (f[b] = f[b] ? [...f[b], p] : [p])
                    : (f[b] = p)
        }),
        d >= 300 && d < 400)
    )
        return (
            (f.location =
                c
                    .get('location')
                    ?.replace(
                        'http://localhost:3000',
                        `https://${e.headers.host}`
                    ) ?? f.location),
            {
                body: K(),
                type: e.type,
                statusCode: d,
                headers: f,
                isBase64Encoded: !1,
            }
        )
    let E = c.get('x-middleware-rewrite'),
        y = !1,
        v = !1,
        x = e.query,
        w = e.url
    if (E)
        if (ye(E, e.headers.host)) (w = E), (y = !0), (v = !0)
        else {
            let p = new URL(E)
            ;(w = p.pathname),
                x.__nextDataReq
                    ? (x = { __nextDataReq: x.__nextDataReq })
                    : (x = {}),
                p.searchParams.forEach((b, R) => {
                    x[R] = b
                }),
                (y = !0)
        }
    if (u.body) {
        let p = u.body
        return {
            type: e.type,
            statusCode: d,
            headers: f,
            body: p,
            isBase64Encoded: !1,
        }
    }
    return {
        responseHeaders: f,
        url: w,
        rawPath: y ? (w ?? e.rawPath) : e.rawPath,
        type: e.type,
        headers: { ...e.headers, ...h },
        body: e.body,
        method: e.method,
        query: x,
        cookies: e.cookies,
        remoteAddress: e.remoteAddress,
        externalRewrite: v,
    }
}
var It = P.locales.length
        ? `^/(?:${P.locales.map((e) => e + '/?').join('|')})?`
        : '^/',
    jt = P.basePath ? `^${P.basePath}/?` : '^/',
    Ht = P.basePath ? `${P.basePath}/api` : '/api',
    Pt = P.routes.static.map(
        (e) => new RegExp(e.regex.replace('^/', It).replace('^/', jt))
    ),
    Mt = P.routes.dynamic.map(
        (e) => new RegExp(e.regex.replace('^/', It).replace('^/', jt))
    )
function Ot(e, t, r = !0) {
    Object.entries(t).forEach(([s, a]) => {
        a &&
            (e[`${r ? 'x-middleware-response-' : ''}${s}`] = Array.isArray(a)
                ? a.join(',')
                : a)
    })
}
async function De(e) {
    let t = At(e, et) ?? {},
        r = St(e, Q)
    if ('statusCode' in r) return r
    let s = Rt(r, P.redirects)
    if (s) return g('redirect', s), s
    let a = await Nt(r),
        o = {}
    if ('statusCode' in a) return a
    ;(o = a.responseHeaders || {}), (r = a)
    let n = a.externalRewrite ?? !1
    if (!n) {
        let m = ne(r, P.rewrites.beforeFiles)
        ;(r = m.internalEvent), (n = m.isExternalRewrite)
    }
    let i = !n && Pt.some((m) => m.test(r.rawPath))
    if (!i && !n) {
        let m = ne(r, P.rewrites.afterFiles)
        ;(r = m.internalEvent), (n = m.isExternalRewrite)
    }
    let { event: l, isISR: u } = Tt(r, U)
    r = l
    let d = !n && Mt.some((m) => m.test(r.rawPath))
    if (!d && !i && !n) {
        let m = ne(r, P.rewrites.fallback)
        ;(r = m.internalEvent), (n = m.isExternalRewrite)
    }
    let c = r.rawPath === Ht || r.rawPath.startsWith(`${Ht}/`),
        h = r.rawPath.startsWith('/_next/image')
    return (
        !(i || d || n) &&
            !c &&
            !h &&
            !Pt.some((m) => m.test(r.rawPath)) &&
            !Mt.some((m) => m.test(r.rawPath)) &&
            (r = {
                ...r,
                rawPath: '/404',
                url: '/404',
                headers: {
                    ...r.headers,
                    'x-middleware-response-cache-control':
                        'private, no-cache, no-store, max-age=0, must-revalidate',
                },
            }),
        globalThis.openNextConfig.dangerous?.enableCacheInterception &&
        !('statusCode' in r) &&
        (g('Cache interception enabled'), (r = await vt(r)), 'statusCode' in r)
            ? (Ot(r.headers, { ...o, ...t }, !1), r)
            : (Ot(r.headers, { ...o, ...t }),
              { internalEvent: r, isExternalRewrite: n, origin: !1, isISR: u })
    )
}
D()
N()
import Wr from 'next/dist/server/next-server.js'
N()
var Ur = k('module'),
    Da = Ur._resolveFilename
var zr = k.resolve('./cache.cjs'),
    Le = new Wr.default({
        conf: {
            ...C,
            compress: !1,
            cacheHandler: zr,
            cacheMaxMemorySize: 0,
            experimental: { ...C.experimental, trustHostHeader: !0 },
        },
        customServer: !1,
        dev: !1,
        dir: __dirname,
    }).getRequestHandler()
globalThis.__als = new Kr()
at()
async function Dt(e, t) {
    e.headers['x-forwarded-host'] &&
        (e.headers.host = e.headers['x-forwarded-host']),
        g('internalEvent', e)
    let r = { internalEvent: e, isExternalRewrite: !1, origin: !1, isISR: !1 }
    try {
        r = await De(e)
    } catch (o) {
        He('Routing failed.', o)
    }
    let s = 'type' in r ? r.headers : r.internalEvent.headers,
        a = Object.entries(
            'type' in r ? r.headers : r.internalEvent.headers
        ).reduce((o, [n, i]) => {
            if (n.startsWith('x-middleware-response-')) {
                let l = n.replace('x-middleware-response-', '')
                return delete s[n], (s[l] = i), { ...o, [l]: i }
            } else return o
        }, {})
    if ('type' in r) {
        if (t) {
            let o = Ie(e, s, t)
            ;(o.statusCode = r.statusCode), o.flushHeaders()
            let [n, i] = r.body.tee()
            for await (let l of n) o.write(l)
            o.end(), (r.body = i)
        }
        return r
    } else {
        let o = r.internalEvent
        g('preprocessedEvent', o)
        let n = {
                method: o.method,
                url: o.url,
                headers: { ...s, purpose: 'prefetch' },
                body: o.body,
                remoteAddress: o.remoteAddress,
            },
            i = Math.random().toString(36),
            l = new me(),
            u = s['x-isr'] === '1',
            d = globalThis.openNextConfig.dangerous?.headersAndCookiesPriority
                ? globalThis.openNextConfig.dangerous.headersAndCookiesPriority(
                      o
                  )
                : 'middleware'
        return await globalThis.__als.run(
            {
                requestId: i,
                pendingPromiseRunner: l,
                isISRRevalidation: u,
                mergeHeadersPriority: d,
            },
            async () => {
                let h = r,
                    f = new te(n),
                    m = Ie(o, a, t)
                await Xr(f, m, o, h.isExternalRewrite)
                let {
                        statusCode: E,
                        headers: y,
                        isBase64Encoded: v,
                        body: x,
                    } = ut(m),
                    w = {
                        type: e.type,
                        statusCode: E,
                        headers: y,
                        body: x,
                        isBase64Encoded: v,
                    }
                return delete globalThis.lastModified[i], await l.await(), w
            }
        )
    }
}
async function Xr(e, t, r, s) {
    delete e.body
    try {
        let { rawPath: a } = r
        if (s) return mt(r, t)
        await Le(e, t)
    } catch (a) {
        a.constructor.name === 'NoFallbackError'
            ? await kt('404', t, r)
            : (T('NextJS request failed.', a), await kt('500', t, r))
    }
}
async function kt(e, t, r) {
    try {
        let s = new te({
            method: 'GET',
            url: `/${e}`,
            headers: r.headers,
            body: r.body,
            remoteAddress: r.remoteAddress,
        })
        await Le(s, t)
    } catch (s) {
        T('NextJS request failed.', s),
            t.setHeader('Content-Type', 'application/json'),
            t.end(
                JSON.stringify(
                    { message: 'Server failed to respond.', details: s },
                    null,
                    2
                )
            )
    }
}
async function tr(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (qt(), Ft))).default
}
async function rr(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (Ut(), $t))).default
}
async function sr(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (Yt(), Gt))).default
}
async function ar(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (Vt(), Jt))).default
}
async function or(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (er(), Zt))).default
}
async function nr() {
    let e = await import(process.cwd() + '/open-next.config.mjs').then(
            (a) => a.default
        ),
        t = globalThis.fnName ? e.functions[globalThis.fnName] : e.default
    ;(globalThis.serverId = st()),
        (globalThis.openNextConfig = e),
        (globalThis.queue = await ar(t.override?.queue)),
        (globalThis.incrementalCache = await or(t.override?.incrementalCache)),
        (globalThis.tagCache = await sr(t.override?.tagCache)),
        (globalThis.lastModified = {})
    let r = await tr(t.override?.converter),
        s = await rr(t.override?.wrapper)
    return g('Using wrapper', s.name), s.wrapper(Dt, r)
}
ee()
rt()
Es()
bs()
globalThis.internalFetch = fetch
var $o = await nr()
function bs() {
    process.chdir(__dirname)
}
function Es() {
    process.env.NEXT_BUILD_ID = Q
}
export { $o as handler }
/*! Bundled license information:

aws4fetch/dist/aws4fetch.esm.mjs:
  (**
   * @license MIT <https://opensource.org/licenses/MIT>
   * @copyright Michael Hart 2024
   *)
*/

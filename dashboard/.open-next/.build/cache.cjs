globalThis.disableIncrementalCache = false
globalThis.disableDynamoDBCache = false
globalThis.isNextAfter15 = false
globalThis.openNextDebug = false
globalThis.openNextVersion = '3.0.10'
var b = Object.defineProperty
var w = Object.getOwnPropertyDescriptor
var x = Object.getOwnPropertyNames
var _ = Object.prototype.hasOwnProperty
var y = (t, a) => {
        for (var e in a) b(t, e, { get: a[e], enumerable: !0 })
    },
    E = (t, a, e, s) => {
        if ((a && typeof a == 'object') || typeof a == 'function')
            for (let i of x(a))
                !_.call(t, i) &&
                    i !== e &&
                    b(t, i, {
                        get: () => a[i],
                        enumerable: !(s = w(a, i)) || s.enumerable,
                    })
        return t
    }
var N = (t) => E(b({}, '__esModule', { value: !0 }), t)
var I = {}
y(I, { default: () => g, hasCacheExtension: () => D })
module.exports = N(I)
var A = new Set([
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
function T(t) {
    if (!t) return !1
    let a = t?.split(';')[0] ?? ''
    return A.has(a)
}
function l(...t) {
    globalThis.openNextDebug && console.log(...t)
}
function v(...t) {
    console.warn(...t)
}
var P = [
        {
            clientName: 'S3Client',
            commandName: 'GetObjectCommand',
            errorName: 'NoSuchKey',
        },
    ],
    M = (t) =>
        P.some(
            (a) =>
                a.clientName === t?.clientName &&
                a.commandName === t?.commandName &&
                (a.errorName === t?.error?.name ||
                    a.errorName === t?.error?.Code)
        )
function C(...t) {
    if (t.some((a) => M(a))) l(...t)
    else if (t.some((a) => a.__openNextInternal)) {
        let a = t.find((e) => e.__openNextInternal)
        if (a.logLevel === 0) {
            l(...t)
            return
        } else if (a.logLevel === 1) {
            v(...t)
            return
        } else {
            console.error(...t)
            return
        }
    } else console.error(...t)
}
var R = /\.(cache|fetch)$/
function D(t) {
    return R.test(t)
}
var g = class {
    constructor(a) {}
    async get(a, e) {
        if (globalThis.disableIncrementalCache) return null
        let s =
                typeof e == 'object'
                    ? e.kindHint
                        ? e.kindHint === 'fetch'
                        : e.fetchCache
                    : e,
            i = typeof e == 'object' ? e.softTags : [],
            o = typeof e == 'object' ? e.tags : []
        return s ? this.getFetchCache(a, i, o) : this.getIncrementalCache(a)
    }
    async getFetchCache(a, e, s) {
        l('get fetch cache', { key: a, softTags: e, tags: s })
        try {
            let { value: i, lastModified: o } =
                    await globalThis.incrementalCache.get(a, !0),
                c = await globalThis.tagCache.getLastModified(a, o)
            if (c === -1 || i === void 0) return null
            if ((s ?? []).length === 0) {
                let p = e?.find(
                    (n) =>
                        n.startsWith('_N_T_/') &&
                        !n.endsWith('layout') &&
                        !n.endsWith('page')
                )
                if (
                    p &&
                    (await globalThis.tagCache.getLastModified(
                        p.replace('_N_T_/', ''),
                        o
                    )) === -1
                )
                    return null
            }
            return { lastModified: c, value: i }
        } catch (i) {
            return l('Failed to get fetch cache', i), null
        }
    }
    async getIncrementalCache(a) {
        try {
            let { value: e, lastModified: s } =
                    await globalThis.incrementalCache.get(a, !1),
                i = e?.meta,
                o = await globalThis.tagCache.getLastModified(a, s)
            if (o === -1) return null
            let c = globalThis.__als.getStore()?.requestId ?? ''
            return (
                (globalThis.lastModified[c] = o),
                e?.type === 'route'
                    ? {
                          lastModified: o,
                          value: {
                              kind: globalThis.isNextAfter15
                                  ? 'APP_ROUTE'
                                  : 'ROUTE',
                              body: Buffer.from(
                                  e.body ?? Buffer.alloc(0),
                                  T(String(i?.headers?.['content-type']))
                                      ? 'base64'
                                      : 'utf8'
                              ),
                              status: i?.status,
                              headers: i?.headers,
                          },
                      }
                    : e?.type === 'page' || e?.type === 'app'
                      ? globalThis.isNextAfter15 && e?.type === 'app'
                          ? {
                                lastModified: o,
                                value: {
                                    kind: 'APP_PAGE',
                                    html: e.html,
                                    rscData: Buffer.from(e.rsc),
                                    status: i?.status,
                                    headers: i?.headers,
                                    postponed: i?.postponed,
                                },
                            }
                          : {
                                lastModified: o,
                                value: {
                                    kind: globalThis.isNextAfter15
                                        ? 'PAGES'
                                        : 'PAGE',
                                    html: e.html,
                                    pageData:
                                        e.type === 'page' ? e.json : e.rsc,
                                    status: i?.status,
                                    headers: i?.headers,
                                },
                            }
                      : e?.type === 'redirect'
                        ? {
                              lastModified: o,
                              value: { kind: 'REDIRECT', props: e.props },
                          }
                        : (v('Unknown cache type', e), null)
            )
        } catch (e) {
            return l('Failed to get body cache', e), null
        }
    }
    async set(a, e, s) {
        if (globalThis.disableIncrementalCache) return
        let i = globalThis.__als
            .getStore()
            ?.pendingPromiseRunner.withResolvers()
        try {
            if (e == null) await globalThis.incrementalCache.delete(a)
            else
                switch (e.kind) {
                    case 'ROUTE':
                    case 'APP_ROUTE':
                        let { body: n, status: r, headers: d } = e
                        await globalThis.incrementalCache.set(
                            a,
                            {
                                type: 'route',
                                body: n.toString(
                                    T(String(d['content-type']))
                                        ? 'base64'
                                        : 'utf8'
                                ),
                                meta: { status: r, headers: d },
                            },
                            !1
                        )
                        break
                    case 'PAGE':
                    case 'PAGES': {
                        let { html: h, pageData: f, status: m, headers: u } = e
                        typeof f == 'string'
                            ? await globalThis.incrementalCache.set(
                                  a,
                                  {
                                      type: 'app',
                                      html: h,
                                      rsc: f,
                                      meta: { status: m, headers: u },
                                  },
                                  !1
                              )
                            : await globalThis.incrementalCache.set(
                                  a,
                                  { type: 'page', html: h, json: f },
                                  !1
                              )
                        break
                    }
                    case 'APP_PAGE': {
                        let { html: h, rscData: f, headers: m, status: u } = e
                        await globalThis.incrementalCache.set(
                            a,
                            {
                                type: 'app',
                                html: h,
                                rsc: f.toString('utf8'),
                                meta: { status: u, headers: m },
                            },
                            !1
                        )
                        break
                    }
                    case 'FETCH':
                        await globalThis.incrementalCache.set(a, e, !0)
                        break
                    case 'REDIRECT':
                        await globalThis.incrementalCache.set(
                            a,
                            { type: 'redirect', props: e.props },
                            !1
                        )
                        break
                    case 'IMAGE':
                        break
                }
            let o =
                e?.kind === 'FETCH'
                    ? (s?.tags ?? e?.data?.tags ?? [])
                    : e?.kind === 'PAGE'
                      ? (e.headers?.['x-next-cache-tags']?.split(',') ?? [])
                      : []
            l('derivedTags', o)
            let c = await globalThis.tagCache.getByPath(a),
                p = o.filter((n) => !c.includes(n))
            p.length > 0 &&
                (await globalThis.tagCache.writeTags(
                    p.map((n) => ({ path: a, tag: n, revalidatedAt: 1 }))
                )),
                l('Finished setting cache')
        } catch (o) {
            C('Failed to set cache', o)
        } finally {
            i?.resolve()
        }
    }
    async revalidateTag(a) {
        if (
            !(
                globalThis.disableDynamoDBCache ||
                globalThis.disableIncrementalCache
            )
        )
            try {
                let e = Array.isArray(a) ? a : [a]
                for (let s of e) {
                    l('revalidateTag', s)
                    let i = await globalThis.tagCache.getByTag(s)
                    l('Items', i)
                    let o = i.map((c) => ({ path: c, tag: s }))
                    if (s.startsWith('_N_T_/'))
                        for (let c of i) {
                            let n = (
                                await globalThis.tagCache.getByPath(c)
                            ).filter((r) => !r.startsWith('_N_T_/'))
                            for (let r of n) {
                                let d = await globalThis.tagCache.getByTag(r)
                                l({ hardTag: r, _paths: d }),
                                    o.push(
                                        ...d.map((h) => ({ path: h, tag: r }))
                                    )
                            }
                        }
                    await globalThis.tagCache.writeTags(o)
                }
            } catch (e) {
                C('Failed to revalidate tag', e)
            }
    }
}
0 && (module.exports = { hasCacheExtension })

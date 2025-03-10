globalThis.openNextDebug = false
globalThis.openNextVersion = '3.0.10'
var g = Object.defineProperty
var m = (e, r) => () => (e && (r = e((e = 0))), r)
var d = (e, r) => {
    for (var t in r) g(e, t, { get: r[t], enumerable: !0 })
}
function i(...e) {
    globalThis.openNextDebug && console.log(...e)
}
function N(...e) {
    console.warn(...e)
}
function l(...e) {
    if (e.some((r) => C(r))) i(...e)
    else if (e.some((r) => r.__openNextInternal)) {
        let r = e.find((t) => t.__openNextInternal)
        if (r.logLevel === 0) {
            i(...e)
            return
        } else if (r.logLevel === 1) {
            N(...e)
            return
        } else {
            console.error(...e)
            return
        }
    } else console.error(...e)
}
var b,
    C,
    p = m(() => {
        ;(b = [
            {
                clientName: 'S3Client',
                commandName: 'GetObjectCommand',
                errorName: 'NoSuchKey',
            },
        ]),
            (C = (e) =>
                b.some(
                    (r) =>
                        r.clientName === e?.clientName &&
                        r.commandName === e?.commandName &&
                        (r.errorName === e?.error?.name ||
                            r.errorName === e?.error?.Code)
                ))
    })
var u = {}
d(u, { default: () => E })
var S,
    E,
    v = m(() => {
        ;(S = {
            convertFrom(e) {
                let r = e.Records.map((t) => {
                    let { host: o, url: n } = JSON.parse(t.body)
                    return { host: o, url: n, id: t.messageId }
                })
                return Promise.resolve({ type: 'revalidate', records: r })
            },
            convertTo(e) {
                return Promise.resolve({
                    type: 'revalidate',
                    batchItemFailures: e.records.map((r) => ({
                        itemIdentifier: r.id,
                    })),
                })
            },
            name: 'sqs-revalidate',
        }),
            (E = S)
    })
var h = {}
d(h, { default: () => P })
import { Writable as R } from 'node:stream'
function D(e) {
    return new Promise((r) => {
        setTimeout(() => {
            r({ serverId, type: 'warmer' })
        }, e.delay)
    })
}
var I,
    P,
    w = m(() => {
        ;(I = async (e, r) => async (t) => {
            if ('type' in t) return D(t)
            let o = await r.convertFrom(t),
                s = await e(o, {
                    writeHeaders: () =>
                        new R({
                            write: (f, c, a) => {
                                a()
                            },
                        }),
                    onFinish: () => {},
                })
            return r.convertTo(s, t)
        }),
            (P = { wrapper: I, name: 'aws-lambda', supportStreaming: !1 })
    })
import T from 'node:fs'
import F from 'node:https'
import O from 'node:path'
p()
async function y(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (v(), u))).default
}
async function x(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (w(), h))).default
}
async function _(e) {
    let r = await import('./open-next.config.mjs').then((s) => s.default)
    globalThis.openNextConfig = r
    let t = r[e.type]?.override,
        o = await y(t?.converter),
        n = await x(t?.wrapper)
    return i('Using wrapper', n.name), n.wrapper(e.handler, o)
}
p()
var j = W(),
    H = async (e) => {
        let r = []
        for (let t of e.records) {
            let { host: o, url: n } = t
            i('Revalidating stale page', { host: o, url: n })
            try {
                await new Promise((s, f) => {
                    let c = F.request(
                        `https://${o}${n}`,
                        {
                            method: 'HEAD',
                            headers: {
                                'x-prerender-revalidate':
                                    j.preview.previewModeId,
                                'x-isr': '1',
                            },
                        },
                        (a) => {
                            i('revalidating', {
                                url: n,
                                host: o,
                                headers: a.headers,
                                statusCode: a.statusCode,
                            }),
                                (a.statusCode !== 200 ||
                                    a.headers['x-nextjs-cache'] !==
                                        'REVALIDATED') &&
                                    r.push(t),
                                s(a)
                        }
                    )
                    c.on('error', (a) => {
                        l('Error revalidating page', { host: o, url: n }), f(a)
                    }),
                        c.end()
                })
            } catch {
                r.push(t)
            }
        }
        return (
            r.length > 0 &&
                l(`Failed to revalidate ${r.length} pages`, {
                    failedRecords: r,
                }),
            { type: 'revalidate', records: r }
        )
    },
    Y = await _({ handler: H, type: 'revalidate' })
function W() {
    let e = O.join('prerender-manifest.json'),
        r = T.readFileSync(e, 'utf-8')
    return JSON.parse(r)
}
export { Y as handler }

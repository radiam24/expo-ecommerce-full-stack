globalThis.openNextDebug = false
globalThis.openNextVersion = '3.0.10'
var k = Object.defineProperty
var i = (e, t) => () => (e && (t = e((e = 0))), t)
var d = (e, t) => {
    for (var r in t) k(e, r, { get: t[r], enumerable: !0 })
}
function o(...e) {
    globalThis.openNextDebug && console.log(...e)
}
function g(...e) {
    console.warn(...e)
}
function s(...e) {
    if (e.some((t) => H(t))) o(...e)
    else if (e.some((t) => t.__openNextInternal)) {
        let t = e.find((r) => r.__openNextInternal)
        if (t.logLevel === 0) {
            o(...e)
            return
        } else if (t.logLevel === 1) {
            g(...e)
            return
        } else {
            console.error(...e)
            return
        }
    } else console.error(...e)
}
var W,
    H,
    _,
    f = i(() => {
        ;(W = [
            {
                clientName: 'S3Client',
                commandName: 'GetObjectCommand',
                errorName: 'NoSuchKey',
            },
        ]),
            (H = (e) =>
                W.some(
                    (t) =>
                        t.clientName === e?.clientName &&
                        t.commandName === e?.commandName &&
                        (t.errorName === e?.error?.name ||
                            t.errorName === e?.error?.Code)
                ))
        _ = { trace: () => {}, debug: () => {}, info: o, warn: g, error: s }
    })
var h = {}
d(h, { default: () => Y })
var U,
    Y,
    D = i(() => {
        ;(U = {
            convertFrom(e) {
                return Promise.resolve({ type: 'dummy', original: e })
            },
            convertTo(e) {
                return Promise.resolve({ type: 'dummy', original: e })
            },
            name: 'dummy',
        }),
            (Y = U)
    })
var T = {}
d(T, { default: () => q })
import { Writable as L } from 'node:stream'
function P(e) {
    return new Promise((t) => {
        setTimeout(() => {
            t({ serverId, type: 'warmer' })
        }, e.delay)
    })
}
var K,
    q,
    w = i(() => {
        ;(K = async (e, t) => async (r) => {
            if ('type' in r) return P(r)
            let n = await t.convertFrom(r),
                c = await e(n, {
                    writeHeaders: () =>
                        new L({
                            write: (p, oe, F) => {
                                F()
                            },
                        }),
                    onFinish: () => {},
                })
            return t.convertTo(c, r)
        }),
            (q = { wrapper: K, name: 'aws-lambda', supportStreaming: !1 })
    })
function y(e, t) {
    return e.reduce((n, a, c) => {
        let p = Math.floor(c / t)
        return (n[p] = [...(n[p] ?? []), a]), n
    }, new Array())
}
function E(e) {
    if (typeof e != 'string') return e
    let t = parseInt(e)
    return isNaN(t) ? void 0 : t
}
var A = i(() => {})
var v,
    x = i(() => {
        v = () => {
            let e = process.env.DYNAMO_BATCH_WRITE_COMMAND_CONCURRENCY,
                t = e ? parseInt(e) : void 0
            return t && !isNaN(t) ? t : 4
        }
    })
var b = {}
d(b, { default: () => Z })
import {
    BatchWriteItemCommand as j,
    DynamoDBClient as z,
    QueryCommand as C,
} from '@aws-sdk/client-dynamodb'
import V from 'path'
function $() {
    return {
        region: X,
        logger: _,
        maxAttempts: E(process.env.AWS_SDK_DYNAMODB_MAX_ATTEMPTS),
    }
}
function m(e) {
    return V.posix.join(N ?? '', e)
}
function Q(e, t, r) {
    return {
        path: { S: m(e) },
        tag: { S: m(t) },
        revalidatedAt: { N: `${r ?? Date.now()}` },
    }
}
var X,
    u,
    N,
    l,
    J,
    Z,
    I = i(() => {
        f()
        A()
        x()
        ;({
            CACHE_BUCKET_REGION: X,
            CACHE_DYNAMO_TABLE: u,
            NEXT_BUILD_ID: N,
        } = process.env)
        l = new z($())
        ;(J = {
            async getByPath(e) {
                try {
                    if (globalThis.disableDynamoDBCache) return []
                    let r =
                        (
                            await l.send(
                                new C({
                                    TableName: u,
                                    IndexName: 'revalidate',
                                    KeyConditionExpression: '#key = :key',
                                    ExpressionAttributeNames: {
                                        '#key': 'path',
                                    },
                                    ExpressionAttributeValues: {
                                        ':key': { S: m(e) },
                                    },
                                })
                            )
                        ).Items?.map((n) => n.tag.S ?? '') ?? []
                    return (
                        o('tags for path', e, r),
                        r.map((n) => n.replace(`${N}/`, ''))
                    )
                } catch (t) {
                    return s('Failed to get tags by path', t), []
                }
            },
            async getByTag(e) {
                try {
                    if (globalThis.disableDynamoDBCache) return []
                    let { Items: t } = await l.send(
                        new C({
                            TableName: u,
                            KeyConditionExpression: '#tag = :tag',
                            ExpressionAttributeNames: { '#tag': 'tag' },
                            ExpressionAttributeValues: { ':tag': { S: m(e) } },
                        })
                    )
                    return (
                        t?.map(
                            ({ path: { S: r } }) =>
                                r?.replace(`${N}/`, '') ?? ''
                        ) ?? []
                    )
                } catch (t) {
                    return s('Failed to get by tag', t), []
                }
            },
            async getLastModified(e, t) {
                try {
                    if (globalThis.disableDynamoDBCache) return t ?? Date.now()
                    let n =
                        (
                            await l.send(
                                new C({
                                    TableName: u,
                                    IndexName: 'revalidate',
                                    KeyConditionExpression:
                                        '#key = :key AND #revalidatedAt > :lastModified',
                                    ExpressionAttributeNames: {
                                        '#key': 'path',
                                        '#revalidatedAt': 'revalidatedAt',
                                    },
                                    ExpressionAttributeValues: {
                                        ':key': { S: m(e) },
                                        ':lastModified': { N: String(t ?? 0) },
                                    },
                                })
                            )
                        ).Items ?? []
                    return (
                        o('revalidatedTags', n),
                        n.length > 0 ? -1 : (t ?? Date.now())
                    )
                } catch (r) {
                    return (
                        s('Failed to get revalidated tags', r), t ?? Date.now()
                    )
                }
            },
            async writeTags(e) {
                try {
                    if (globalThis.disableDynamoDBCache) return
                    let t = y(e, 25).map((n) => ({
                            RequestItems: {
                                [u ?? '']: n.map((a) => ({
                                    PutRequest: {
                                        Item: {
                                            ...Q(
                                                a.path,
                                                a.tag,
                                                a.revalidatedAt
                                            ),
                                        },
                                    },
                                })),
                            },
                        })),
                        r = y(t, v())
                    for (let n of r)
                        await Promise.all(n.map(async (a) => l.send(new j(a))))
                } catch (t) {
                    s('Failed to batch write dynamo item', t)
                }
            },
            name: 'dynamoDb',
        }),
            (Z = J)
    })
import { readFileSync as ee } from 'fs'
f()
async function O(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (D(), h))).default
}
async function S(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (w(), T))).default
}
async function B(e) {
    return typeof e == 'function'
        ? e()
        : (await Promise.resolve().then(() => (I(), b))).default
}
async function M(e) {
    let t = await import('./open-next.config.mjs').then((c) => c.default)
    globalThis.openNextConfig = t
    let r = t[e.type]?.override,
        n = await O(r?.converter),
        a = await S(r?.wrapper)
    return o('Using wrapper', a.name), a.wrapper(e.handler, n)
}
var R = 'dynamodb-cache',
    te = await B(globalThis.openNextConfig?.initializationFunction?.tagCache),
    we = await M({ handler: re, type: 'initializationFunction' })
async function re(e) {
    switch (e.requestType) {
        case 'delete':
            return ae()
        case 'create':
        case 'update':
        default:
            return ne(e.requestType)
    }
}
async function ne(e) {
    let t = ee('dynamodb-cache.json', 'utf8'),
        n = JSON.parse(t).map((a) => ({
            tag: a.tag.S,
            path: a.path.S,
            revalidatedAt: parseInt(a.revalidatedAt.N),
        }))
    return (
        await te.writeTags(n),
        { type: 'initializationFunction', requestType: e, resourceId: R }
    )
}
async function ae() {
    return {
        type: 'initializationFunction',
        requestType: 'delete',
        resourceId: R,
    }
}
export { we as handler }

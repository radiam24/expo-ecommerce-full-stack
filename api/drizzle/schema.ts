import {
    pgTable,
    foreignKey,
    integer,
    timestamp,
    varchar,
    doublePrecision,
    text,
    unique,
} from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const orders = pgTable(
    'orders',
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity({
            name: 'orders_id_seq',
            startWith: 1,
            increment: 1,
            minValue: 1,
            maxValue: 2147483647,
            cache: 1,
        }),
        createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
        status: varchar({ length: 50 }).default('New').notNull(),
        userId: integer().notNull(),
        stripePaymentIntentId: varchar({ length: 255 }),
    },
    (table) => {
        return {
            ordersUserIdUsersIdFk: foreignKey({
                columns: [table.userId],
                foreignColumns: [users.id],
                name: 'orders_userId_users_id_fk',
            }),
        }
    }
)

export const orderItems = pgTable(
    'order_items',
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity({
            name: 'order_items_id_seq',
            startWith: 1,
            increment: 1,
            minValue: 1,
            maxValue: 2147483647,
            cache: 1,
        }),
        orderId: integer().notNull(),
        productId: integer().notNull(),
        quantity: integer().notNull(),
        price: doublePrecision().notNull(),
    },
    (table) => {
        return {
            orderItemsOrderIdOrdersIdFk: foreignKey({
                columns: [table.orderId],
                foreignColumns: [orders.id],
                name: 'order_items_orderId_orders_id_fk',
            }),
            orderItemsProductIdProductsIdFk: foreignKey({
                columns: [table.productId],
                foreignColumns: [products.id],
                name: 'order_items_productId_products_id_fk',
            }),
        }
    }
)

export const products = pgTable('products', {
    id: integer().primaryKey().generatedAlwaysAsIdentity({
        name: 'products_id_seq',
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 2147483647,
        cache: 1,
    }),
    name: varchar({ length: 255 }).notNull(),
    description: text(),
    image: varchar({ length: 255 }),
    price: doublePrecision().notNull(),
})

export const users = pgTable(
    'users',
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity({
            name: 'users_id_seq',
            startWith: 1,
            increment: 1,
            minValue: 1,
            maxValue: 2147483647,
            cache: 1,
        }),
        email: varchar({ length: 255 }).notNull(),
        password: varchar({ length: 255 }).notNull(),
        role: varchar({ length: 255 }).default('user').notNull(),
        name: varchar({ length: 255 }),
        address: text(),
    },
    (table) => {
        return {
            usersEmailUnique: unique('users_email_unique').on(table.email),
        }
    }
)

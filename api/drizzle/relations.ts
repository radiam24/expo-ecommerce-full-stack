import { relations } from "drizzle-orm/relations";
import { users, orders, orderItems, products } from "./schema";

export const ordersRelations = relations(orders, ({one, many}) => ({
	user: one(users, {
		fields: [orders.userId],
		references: [users.id]
	}),
	orderItems: many(orderItems),
}));

export const usersRelations = relations(users, ({many}) => ({
	orders: many(orders),
}));

export const orderItemsRelations = relations(orderItems, ({one}) => ({
	order: one(orders, {
		fields: [orderItems.orderId],
		references: [orders.id]
	}),
	product: one(products, {
		fields: [orderItems.productId],
		references: [products.id]
	}),
}));

export const productsRelations = relations(products, ({many}) => ({
	orderItems: many(orderItems),
}));
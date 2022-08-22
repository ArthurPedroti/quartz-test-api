"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async index(ctx) {
        try {
            // const { part_number } = ctx.request.query
            const data = await strapi
                .service('api::protheus-order.protheus-order')
                .protheus();
            ctx.body = data;
            return ctx;
        }
        catch (err) {
            console.log(err);
            ctx.badRequest('Page report controller error', { moreDetails: err });
        }
    },
    async update(ctx) {
        try {
            const data = ctx.request.body;
            const purchase_order = await strapi
                .service('api::protheus-order.protheus-order')
                .updateOrCreate(data);
            return purchase_order;
        }
        catch (err) {
            console.log(err);
            ctx.badRequest('Page report controller error', { moreDetails: err });
        }
    }
};

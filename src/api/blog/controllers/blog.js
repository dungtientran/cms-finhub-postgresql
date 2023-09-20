'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({

  async incrementViews(ctx) {
    const { id } = ctx.params;
    const blog = await strapi.service('api::blog.blog').findOne(id);
    if (!blog) {
      return ctx.notFound();
    }
    const entry = await strapi.entityService.update('api::blog.blog', id, {
      data: {
        view: blog.view + 1,
      },
    });
    return ctx.send({ message: 'View count incremented' });
  },
}));

'use strict';

/**
 * Artwork.js controller
 *
 * @description: A set of functions called "actions" for managing `Artwork`.
 */

module.exports = {

  /**
   * Retrieve artwork records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.artwork.search(ctx.query);
    } else {
      return strapi.services.artwork.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a artwork record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.artwork.fetch(ctx.params);
  },

  /**
   * Count artwork records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.artwork.count(ctx.query);
  },

  /**
   * Create a/an artwork record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.artwork.add(ctx.request.body);
  },

  /**
   * Update a/an artwork record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.artwork.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an artwork record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.artwork.remove(ctx.params);
  }
};

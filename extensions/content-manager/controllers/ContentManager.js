// extensions/content-manager/controllers/ContentManager.js

module.exports = {
    async incrementViews(ctx) {
      const { id } = ctx.params;
      const post = await strapi.query('blog').findOne({ id });
      if (!post) {
        return ctx.notFound();
      }
  
      // Tăng giá trị views lên 1
      await strapi.query('blog').update({ id }, { views: post.views + 1 });
  
      return ctx.send({ message: 'View count incremented' });
    },
  };
  
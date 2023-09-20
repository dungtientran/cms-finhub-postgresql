module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/incrementViews/:id',
            handler: 'blog.incrementViews',
            config: {
                auth: false
            }
        }
    ]
}
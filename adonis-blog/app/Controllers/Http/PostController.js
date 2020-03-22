'use strict'

const Post = use('App/Models/Post')

class PostController {
    async index({ request, view }) {
        // await Post.create({
        //     title: '我的第二篇博客'
        // })

        // return await Post.all()

        const posts = await Post.all()
            //渲染页面前要在start的app中加入配置
        return view.render('post.index', {
            posts: posts.toJSON()
        })
    }
    async show({ params, view }) {
        const postdata = await Post.find(params.id)

        return view.render('post.show', {
            post: postdata
        })
    }

}

module.exports = PostController
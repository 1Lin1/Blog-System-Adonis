'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with posts
 */

//获取model
const Post = use('App/Models/Post')

class PostController {
    /**
     * Show a list of all posts.
     * GET posts
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        return await Post.query().paginate(2, 5)
    }

    /**
     * Render a form to be used for creating a new post.
     * GET posts/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new post.
     * POST posts
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        //只取title的数据
        const newData = request.only(['title'])

        // console.log(newData);
        //  拿到model实例
        const model = new Post();
        model.fill(newData);
        model.save();
        return model;

    }

    /**
     * Display a single post.
     * GET posts/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {

        return await Post.find(params.id)
    }

    /**
     * Render a form to update an existing post.
     * GET posts/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update post details.
     * PUT or PATCH posts/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        //只取title的数据
        const newData = request.all();
        console.log(newData);
        //  拿到model实例
        const model = await Post.find(params.id);
        model.merge(newData);
        model.save();
        return model;

    }

    /**
     * Delete a post with id.
     * DELETE posts/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {

        const model = await Post.find(params.id);
        await model.delete();
        return {
            message: '删除成功'
        }
    }

    async grid() {
        return {
            fields: {
                _id: { label: 'ID' },
                title: { label: '标题' },
                created_at: { label: '创建时间', type: 'datetime' },
                updated_at: { label: '更新时间', type: 'datetime' },
            },

        }
    }



    async form() {
        return {
            fields: {
                title: { label: '标题' },
                image: { label: '图片' },
                body: { label: '详情', type: 'html' },
            }

        }
    }


    async view() {
        return {
            fields: {
                _id: { label: 'ID' },
                title: { label: '标题' },
                title: { label: '标题' },
                image: { label: '图片' },
                body: { label: '详情', type: 'html' },
                created_at: { label: '创建时间', type: 'datetime' },
                updated_at: { label: '更新时间', type: 'datetime' },
            }

        }
    }
}

module.exports = PostController
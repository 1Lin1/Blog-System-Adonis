'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with students
 */
//获取student的model
const Student = use('App/Models/Student')
class StudentController {
    /**
     * Show a list of all students.
     * GET students
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        return await Student.all();
    }

    /**
     * Render a form to be used for creating a new student.
     * GET students/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {
        const stuData = request.body;
        const stuT = await Student.create(stuData);
        return {
            message: "创建学生表成功",
            stuT
        }
    }

    /**
     * Create/save a new student.
     * POST students
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const newStu = request.body;
        const newStuM = new Student();
        newStuM.fill(newStu);
        newStuM.save();
        return {
            message: "添加一个学生成功"
        }

    }

    /**
     * Display a single student.
     * GET students/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        const selStu = await Student.find(params.id);
        return {
            message: '查询成功',
            selStu
        }

    }

    /**
     * Render a form to update an existing student.
     * GET students/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update student details.
     * PUT or PATCH students/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const newData = request.body;
        const selStu = await Student.find(params.id);
        selStu.merge(newData);
        selStu.save();
        response.send({
            message: 'ok'
        })
    }

    /**
     * Delete a student with id.
     * DELETE students/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const delStuId = params.id;
        const delStu = await Student.find(delStuId);
        delStu.delete();
        response.send({
            message: '删除ok'
        })

    }
}

module.exports = StudentController
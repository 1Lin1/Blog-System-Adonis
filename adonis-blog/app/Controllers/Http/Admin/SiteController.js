'use strict'

class SiteController {
    async index() {
        return {
            status: 'ok'
        }
    }

    async site() {
        return {
            name: '我的博客',
            logo: 'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2246271396,3843662332&fm=85&app=79&f=JPG?w=121&h=75&s=39C718720E8EBE011B398BAC0300F024',
            menu: [
                { name: '我的帖子', url: '/rest/posts', icon: 'fa fa-list' }
            ]
        }
    }
}

module.exports = SiteController
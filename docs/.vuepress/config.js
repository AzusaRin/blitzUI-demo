module.exports = {
    title: 'BlitzUI',
    description: '一款轻量的 Vue UI 组件',
    themeConfig: {
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/getStart/' },
            {
                text: '链接',
                ariaLabel: 'Links',
                items: [
                    { text: 'Github仓库', link: 'https://github.com/AzusaRin/blitzUI-demo' },
                    { text: '个人掘金博客', link: 'https://juejin.cn/user/163177786258141' }
                ]
            }
        ],
        sidebar: [
            {
                title: '入门配置',
                children: [
                    '/install/','/getStart/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/layout',
                    '/components/grid',
                    '/components/tabs',
                    '/components/popover',
                    '/components/toast',
                    '/components/collapse',

                ],
            }
        ]
    }
}
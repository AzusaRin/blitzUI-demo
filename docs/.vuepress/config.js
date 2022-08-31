module.exports = {
    title: 'BlitzUI',
    description: '一款轻量的 Vue UI 组件',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门配置',
                children: [
                    '/getStart/','/install/'
                ]
            },
            {
                title: '组件',
                children: ['/components/button'],
            }
        ]
    }
}
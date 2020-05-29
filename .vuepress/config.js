module.exports = {
    title: 'SPICE and Wolf （暂定）',
    base: '/SPICE-and-Wolf/',
    dest: 'docs',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Placeholder', link: '#' },
        ],
        sidebar: [
            {
                title: '首页',
                path: '/',
                children: [
                    ['/plans', '规划中目录'],
                    ['/drafts/', '施工中页面']
                ]
            },
            {
                title: '总次',
                sidebarDepth: 2,
                collapsable: false,
                children: [
                    '/knowledges_and_histories/',
                    '/experiences_from_writers/',
                    '/install_arch_linux/',
                    '/softwares/',
                    '/basic_usage/',
                    '/troubleshooting/',
                    '/virtualbox_install_and_usage/',
                    '/further_reading/',
                ]
            },
        ],
        lastUpdated: '最近更改',
        smoothScroll: true,
        repo: 'project-wolves/SPICE-and-Wolf',
        repoLabel: '查看源码',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页面'
    }
}
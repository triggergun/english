// docs/.vuepress/config.js
module.exports = {
    //前缀 一般不要
    //  base: '/blog/',

    // 标题,同时，默认主题下，它将显示在导航栏（navbar）上
    title: "寒门英语",
    // 描述
    description: "分享各类资源、教程、黑科技软件、工具等等",

    head: [
        // 重装基本图片
        ['link', { rel: 'icon', href: 'favicon.ico' }],
        // 谷歌广告位
        // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6542685716937885" crossorigin="anonymous"></script>
        // ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6542685716937885', crossorigin: "anonymous" }],
        // ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }],

        // https
        // <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        // http
        //<meta http-equiv="Content-Security-Policy">

        ['meta', { http_equiv: 'Content-Security-Policy', content: 'upgrade-insecure-requests' }],
        // ['meta', { name: 'baidu-site-verification', content: 'codeva-7KiW1mSNFG' }],
        // ['meta', { name: 'google-adsense-account', content: 'ca-pub-6542685716937885' }],
        //  ['link', { rel: 'stylesheet', href: 'index.css' }],
    ],

    markdown: {
        lineNumbers: true,
        //  解决：图片中文路径  与 前面 要加 ./ 才能解析。
        extendMarkdown: md => {
            md.use(require("markdown-it-disable-url-encode"));
        }

    },

    // 主题配置
    themeConfig: {
        logo: 'https://blog-1320192491.cos.ap-nanjing.myqcloud.com/logo.png',

        // 获取更新时间。
        lastUpdated: 'Last Updated',
        extraWatchFiles: [
            '.vuepress/config.js', // 使用相对路径
        ],



        // ------------------------------------------   侧边栏的目录 start  ----------------------------

        sidebar: {
            // ==================================   首页      软件资源    ====================
            '/eglish/': [

                // 多个目录
                {
                    title: '寒门英语资料01',
                    collapsable: false,
                    children: [
                        '/eglish/first/eglish01',
                        '/eglish/first/eglish02',
                    ],

                },
                {
                    title: '寒门英语资料02',
                    collapsable: false,
                    children: [
                        '/eglish/second/eglish01',
                        '/eglish/second/eglish02',
                    ],

                },

            ],




        },





        // ------------------------------------------   侧边栏的目录 end  ----------------------------

    },


    // 插件
    plugins: [

        [
            'vuepress-plugin-medium-zoom',
            {
                selector: '.theme-default-content img',
                delay: 1000,
                options: {
                    margin: 24,
                    background: '#BADA55',
                    scrollOffset: 0,
                },
            }
        ],

    ]



};

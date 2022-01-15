module.exports = {
    // site config
    lang: 'en-US',
    title: '.blog',
    description: 'Vue-powered Static Site Generator',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://assets.kounex.com/images/general/kounex-logo-clear.png',
        navbar: [
            // nested group - max depth is 2
            {
                text: 'Group',
                children: [
                    {
                        text: 'SubGroup',
                        children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                    },
                ],
            },
            // control when should the item be active
            {
                text: 'Group 2',
                activeMatch: '/',
                children: [
                    {
                        text: 'Always active',
                        link: '/',
                        // this item will always be active
                        activeMatch: '/',
                    },
                    {
                        text: 'Active on /foo/',
                        link: '/not-foo/',
                        // this item will be active when current route path starts with /foo/
                        // regular expression is supported
                        activeMatch: '^/foo/',
                    },
                ],
            },
        ],

        // personalInfo: {
        //     // required: nickname, will be showed on home page, mobile sidebar and author info of articles
        //     name: 'Kounex',

        //     // required: avatar, will be showed on home page and mobile sidebar
        //     // avatar: '/assets/images/kounex_logo.png',
        //     avatar: 'https://www.golem.de/2201/162354-308733-308729_rc.jpg',

        //     // required: a description, will be showed on home page
        //     description: '',

        //     // optional: id of social platform, will be showed on home page and mobile sidebar
        //     sns: {
        //         github: 'Kounex', // Github
        //         twitter: 'Kounexx', // Twitter
        //         customize: [
        //             // if you want to add other social platforms
        //             {
        //                 icon: 'ri-stack-overflow-line', // platform icon
        //                 link: 'https://stackoverflow.com/users/11440449/kounex', // profile url
        //             },
        //         ],
        //         linkedin: 'rené-schramowski-a35342157', // Linkedin
        //         email: 'contact@kounex.com', // Email
        //     },
        // },
    },
}

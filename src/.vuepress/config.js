module.exports = {
    // site config
    lang: 'en-US',
    title: '.blog',
    description: 'Stuff I want to let other people read.',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://assets.kounex.com/images/general/kounex-logo-clear.png',
        navbar: [
            // control when should the item be active
            {
                text: 'Flutter',
                children: [
                    {
                        text: 'Riverpod / Freezed / REST - Use Case Analysis',
                        link: '/flutter/riverpod-freezed-rest',
                        // this item will always be active
                        activeMatch: '/flutter/riverpod-freezed-rest',
                    },
                ],
            },
        ],
    },
}
